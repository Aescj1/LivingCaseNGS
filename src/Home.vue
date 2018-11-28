<template >
  <v-app id="inspire" :dark="dark">         

            <router-view ></router-view>

  </v-app>
</template>

<script>
  import {bus} from './main.js'    

export default {
data: () => ({
      dark:true,
    }),
    created () {
         bus.$on('themeWasChanged', (data) =>{
             this.dark = data;
         });
    }
}
</script>