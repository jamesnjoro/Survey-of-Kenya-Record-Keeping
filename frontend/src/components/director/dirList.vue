<template>
<v-card>
     <v-data-table dense
    :headers="headers"
    :items="mr"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</v-card>
 
</template>
<script>
import axios from '../../axios'
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Main ID',
            value: 'main_id',
          },
          { text: 'Date Sent', value: 'date' },
          
        ],
        mr:[]

      } 
  },
  created(){
      axios.get('/dos')
      .then(Response=>{
          this.mr = Response.data;
          console.log(Response.data);
      })
      .catch(error=>{

      })
  }
  
  }
</script>