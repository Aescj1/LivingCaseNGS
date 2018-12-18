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
      
          <v-list-group
            prepend-icon="remove_red_eye"
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>

            <v-list-tile 
            v-for="item in headers"
            :key="item.value"
            @click="hideHeader(item)"
            >
            <v-list-tile-action>
              <v-switch
                color= red
              ></v-switch>
            </v-list-tile-action>

              <v-list-tile-content 
              @click.prevent="widgets = !widgets"
              >
                <v-list-tile-title>
                  {{item.text}}
                  </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>

          <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>User management</v-list-tile-title>
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

      </v-list>
  </v-card>
</template>

<script>
import {bus} from '../main.js'

  export default {
      props:['dark'],

    data: ()=>({
      headers:[
        {  index:1, text: 'Bact Nr-', sortable: true, value: 'bactNr', hide: false},
        {  index:2, text: 'Alternative ID', value: 'altId', hide: false },
        {  index:3, text: 'Priority', value: 'priority', hide: false },
        {  index:4, text: 'Pathogen', value: 'pathogen' , hide: false},
        {  index:5, text: 'Patient', value: 'patName' , hide: false},
        {  index:6, text: 'Geburtsdatum', value: 'birthdate', hide: false },
        {  index:7, text: 'Eingang', value: 'entry', sortable: false, hide: false },
        {  index:8, text: 'Abnahme', value: 'abnahme', hide: false },
        {  index:9, text: 'Einsender', value: 'sender', hide: false },
        {  index:10, text: 'Station', value: 'station', hide: false },
        {  index:11, text: 'Bearbeitung', value: 'editing', hide: false },
        {  index:12, text: 'Material', value: 'material', hide: false },
        {  index:13, text: 'NGS-Projekt', value: 'ngsProject', hide: false },
        {  index:14, text: 'Datum DNA-Prep', value: 'dnaPrepDate', hide: false },
        {  index:15, text: 'DNA-Konz (ng/ul)', value: 'dnaKonz', hide: false },
        {  index:16, text: 'Visum DNA', value: 'dnaVisum', hide: false },
        {  index:17, text: 'Run Nummer', value: 'runNr', hide: false },
        {  index:18, text: 'NGS Nummer', value: 'ngsNr', hide: false },
        {  index:19, text: 'Library Typ', value: 'libType', hide: false },
        {  index:20, text: 'Datum Library', value: 'libDate', hide: false },
        {  index:21, text: 'Visum Library', value: 'libVisum', hide: false },
        {  index:22, text: 'Datum Sequenzierung', value: 'seqDate', hide: false },
        {  index:23, text: 'NGS Gerät', value: 'ngsMachine' , hide: false},
        {  index:24, text: 'Visum Datenqualität', value: 'qualityVisum' , hide: false},
        {  index:25, text: 'Information alte Liste', value: 'infOldList' , hide: false},
        {  index:26, text: 'Public identifier', value: 'pubID' , hide: false},
      ]
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
      hideHeader(item){
        this.headers[item.index-1].hide = !this.headers[item.index-1].hide 
        bus.$emit('hideHeader',item.index)
      }
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