<template>
<div>
  <navbar />
  
  <v-row class ="ma-2" >
    <v-col cols="5">
      <v-card class="pa-4">
        <newRecord/>
      </v-card>
    </v-col>
    <v-col cols="4">
        <mrList />
    </v-col>
  </v-row>
  
</div>
  

  
  

</template>

<script>
import navbar from '@/components/navbar'
import newRecord from '@/components/newRecord'
import mrList from '@/components/mrList'

export default {
  name: 'mr',
  components: {navbar, newRecord,mrList},
  data(){
    return{
      
    }
  }
}
</script>