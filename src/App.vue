<template>
  <v-app>
    <AppBar />
    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/views/AppBar.vue';
import Home from '@/views/Home.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
