<template>
    <div>
        <navbar/>
        <v-row class="ma-5">
            <v-col cols="6">
                <v-card>
                    <dirList/>
                </v-card>
                
            </v-col>
        </v-row>
        
    </div>
</template>
<script>
import navbar from "../components/director/navbar"
import dirList from "../components/director/dirList"
export default {
    components:{navbar,dirList}
}
</script>