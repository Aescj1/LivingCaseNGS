<template>
  <div class="tableView">
    <v-toolbar 
      flat 
      color="#a3a5a8"
      tabs
    >
      <v-tabs
      color="#a3a5a8"
      slider-color="red"
      @change="setTab"

      >
        <v-tab 
        v-for="item in items" 
        :key="item"
        >
        {{item}}
        </v-tab>
      </v-tabs>
      <v-text-field style="width:70%" :search='search' append-icon="search" label="Search" single-line></v-text-field>
          <v-spacer></v-spacer>

      <v-btn @click="openMyDialog()">New Dataset</v-btn>
    </v-toolbar>
      <v-tab>
    <v-tab-item>
      </v-tab-item>
        </v-tab>
  </div>
</template>

<script>
import {bus} from '../main.js'


  export default {
  props:['state'],
  name: 'TableFrame',
  /*dialog: false,*/

  components: {
  },
    data: () => ({
     dialog: false,
      tab: null,
      search:'',
      dark:true,
      items:[
        'Sequenziert','Lauf vorbereiten','DNA zum Auffüllen','Geplant'
      ],
      
    }),
    methods:{
      setTab(index){
        this.state = index;
        this.$emit('tabStateWasChanged',this.state);
      },
      openMyDialog () {
        bus.$emit('openFormular', true) // emit the event to the bus
      },
    }
   
  }

</script>

  <style>
  .table{
overflow:auto;
}
  </style>