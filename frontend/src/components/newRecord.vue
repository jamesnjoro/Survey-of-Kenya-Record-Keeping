<template>
      <form class="mx-12" >
    <v-text-field
      v-model="inword_NO"
      :counter="10"
      label="Inword Number"
      required
  
    ></v-text-field>
     <v-text-field
      v-model="surveyor"
      :counter="10"
      label="Surveyor"
      required
  
    ></v-text-field>
     <v-text-field
      v-model="file_reference"
      :counter="10"
      label="File Reference"
      required
  
    ></v-text-field>
      <v-text-field
      v-model="subject_letter"
      :counter="10"
      label="Subject Letter"
      required
  
    ></v-text-field>
    <v-select
      v-model="fowarded_to"
      :items="offices"
      label="Fowarded To"
      required
    ></v-select>
    <v-select
      v-model="job_type"
      :items="jobs"
      label="Job Type"
      required
    ></v-select>
    <span v-if="show">
      <Mrdialog :visibility="show" :details="MRdetails" @close="changeVisibility"/>
    </span>
      
    
   

    <v-btn color="primary" class="mr-4" @click="submit">submit</v-btn>
  </form>    
</template>

<script>

import axios from '../axios'
import qs from 'qs'
import Mrdialog from '../components/dialog'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
export default {
    name:"newRecord",
    components: {Mrdialog},
    data:()=>{
        return{
        show:false,
        jobs: ['lettter', 'job', 'comps'],
        offices: ['adjudication' , 'Director', 'SAD'],
        inword_NO:'',
        surveyor:"",
        file_reference:"",
        subject_letter:'',
        fowarded_to:"",
        job_type:'',
        MRdetails:{}
        }
    },
    methods:{
      changeVisibility(){
        this.show = false;
        this.inword_NO =""
        this.surveyor=""
        this.file_reference=""
        this.subject_letter=''
        this.fowarded_to=""
        this.job_type=''

      },
        clear () {
     
      },
      submit(){
        const data = { 'inword_NO':this.inword_NO,"email":this.email,'surveyor':this.surveyor,'file_reference':this.file_reference,
        'subject_letter':this.subject_letter,'fowarded_to':this.fowarded_to,'job_type':this.job_type};
        axios.post('/mr/add',qs.stringify(data) )
        .then(Response=>{
          console.log(Response);
          this.MRdetails = Response.data
          this.show = true
          switch(this.fowarded_to){
            case "Director":{
              axios.post('/dos/add', qs.stringify({'main_id':Response.data.main_id}))
              .then(Response=>{
                console.log(Response);
              })
              .catch(error=>{
                console.log(Response);
                
              })
              break;
            }
             case 'adjudication':{
               axios.post('/adjudication/add', qs.stringify({'main_id':Response.data.main_id,"surveyor":this.surveyor,'subject_letter':this.subject_letter}))
               .then(Response=>{
                 console.log(Response);
                 
               })
               .catch(error=>{
                 console.log(error)
                 
               })
               break;
             } 
          }
        })
        .catch(error=>{
          console.log(Response);
        })
      }
     
  
    }
    
}
</script>