<template>

<v-row align='center' class="mx-auto">
   
  <v-form>
     <v-text-field
            v-model="email"
            label="Email"
            outlined
            clearable
          >
      </v-text-field>
      <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            outlined
            @click:append="show1 = !show1"
          >
          </v-text-field>

          <v-btn @click="validate" class="primary mx-auto">Login</v-btn>
  </v-form>
  
</v-row>

  
</template>

<script>
import axios from 'axios'
import router from '../router'
 import qs from 'qs';
  export default {
    data () {
      return {
        show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        email:""
      }
    },
    methods:{
      validate(){
       
        const data = { 'email':this.email, 'password':this.password };
        const url = "http://localhost:5000/api/user/login"
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(data),
          url,
        };
        axios(options)
        .then(response=>{
           localStorage.setItem('token' , response.data.token);
           localStorage.setItem('user' , response.data.user)
           
           switch(response.data.type){
             case "mr":{
               router.push('mr');
               break;
             }
             case 'director':{
               router.push('director');
               break;
             }
           }
        })
        .catch(
            
        )
      }
    }
  }
</script>