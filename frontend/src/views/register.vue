<template>

<v-row align='center' class="mx-auto">
   
  <v-form>
     <v-text-field
            label="Username"
            outlined
            clearable
          >
      </v-text-field>
      <v-text-field
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

          <v-btn  class="primary mx-auto">Register</v-btn>
  </v-form>
  
</v-row>

  
</template>

<script>
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
      }
    },
  }
</script>