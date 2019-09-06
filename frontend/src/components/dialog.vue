<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Entry Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Main ID" v-model="mainID" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Inword Number" v-model="inword"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="File Reference"
                  v-model="reference"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Subject Of Letter" v-model="subject" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Job Type" v-model="type" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Surveyor" v-model="surveyor" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Fowarded to" v-model="fowarded" required></v-text-field>
              </v-col>
              
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    props:{
      visibility: Boolean,
      details:Object,
      
    },
    name:"MRdialog",
    data () {
      return {
        mainID:this.details.main_id,
        inword:this.details.inword_NO,
        reference:this.details.file_reference,
        subject:this.details.subject_letter,
        type:this.details.job_type,
        surveyor:this.details.surveyor,
        fowarded:this.details.fowarded_to
        
      }
    },
    computed:{
      dialog:{
        get(){
          return this.visibility;
        },
        set(value){
          if(!value){
            this.$emit('close');
          }
        }
      }

    }
  }
</script>