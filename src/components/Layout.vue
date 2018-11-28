<template>
  
  <v-app id="inspire" class="main">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
     >
    <UserTab/>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><img class="header-logo" src="../assets/Red_Maple.png"> <p class="header-text">Red Maple</p></v-toolbar-title>
    </v-toolbar>
    <v-content class="board-background">
      <v-container fluid  >
        <v-layout row wrap>
          <v-flex xs12>
            <NgsFormular/>
            <TableFrame :state="state" @tabStateWasChanged="state =$event"/>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
           <TableDate :state="state" class="table"/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> 


    <v-footer app fixed>
      <span>&copy; 2018 - Universitätsspital Basel NGS Webportal </span>
    </v-footer>
 </v-app>
</template>

<script>
import UserTab from './UserTab.vue'
import TableDate from './TableDate.vue'
import TableFrame from './TableFrame.vue'
import NgsFormular from './NgsFormular.vue'



  export default {
    name: 'Layout',
  components: {
    UserTab,
    TableDate,
    TableFrame,
    NgsFormular,
  },

    data: () => ({
      drawer: null,
      state: 0,
    }),
    props: {
      source: String
    }
  }
</script>

<style>
.header-logo{
    width: 6%;
    float: left;
    margin-right: 10px;
}
.header-text{
display:inline;
font-size:larger;
}
.board-background{
  background-image: url("../assets/background3.jpg");
  background-size: cover;
  background-position: 50% 50%;
}
.vue-holder{
  display:block;
}
/*sets the size of the table so that there is a inframe scrollbar*/
.table{
max-height:490px;
overflow:auto;
}
/*removes the scrollbar of the main frame*/
.main{
    overflow-y: unset !important;
}

</style>