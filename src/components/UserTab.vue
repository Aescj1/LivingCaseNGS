<template>
  <v-card >

      <v-toolbar flat class="transparent, user_status">
        <v-list class="pa-0">
          <v-list-tile avatar >
            <v-list-tile-avatar >
              <img src="https://randomuser.me/api/portraits/men/85.jpg" class="user-image"  >
            </v-list-tile-avatar>

            <v-list-tile-content class="mt-5">
              <v-list-tile-title class="text-md-center"><b>Admin User</b></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
                <v-list-tile @click="changeTheme">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Change Theme</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout()">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--
        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>!-->
      </v-list>
  </v-card>
</template>

<script>
import {bus} from '../main.js'

  export default {
      props:['dark'],

    data: ()=>({
        dark:true,
      }
    ),
    methods:{
      logout(){
                  this.$router.push('/')
      },
      changeTheme(){
        this.dark = !this.dark
        bus.$emit('themeWasChanged',this.dark);

      },
    }
  }
</script>

<style>
.user_status{
  height: 100px;
}
.user-image{
min-width:90px; 
min-height:90px;
margin-top:40px;
margin-left: 30px;

}
</style>