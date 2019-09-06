<template>
 <nav>
     
     <v-app-bar flat white>
            <v-toolbar-title>Survey of Kenya</v-toolbar-title>  
     </v-app-bar>
    
    
    <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          

          <v-list-item-content>
            <v-list-item-title>{{user}}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list nav >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row class="ma-12">
        <v-btn @click="logout" large color="primary">Logout</v-btn>
      </v-row>
      
    </v-navigation-drawer>
 
     
     
</nav>
 
</template>

<script>
import router from '../../router'
export default {

    data(){
        return{
        items: [
          { title: 'Dashboard', icon: 'mdi-desktop-mac-dashboard' },
          { title: 'Pending Documents', icon: 'mdi-reload' },
          { title: 'Recieved Documents', icon: 'mdi-new-box' },
          { title: 'Fowarded Documents', icon: 'mdi-page-next' },
          { title: 'Returned Documents', icon: 'mdi-page-previous' },
        ],
        user:localStorage.getItem('user'),
        }
    },
    methods:{
      logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('login');
      }
    }
}
</script>