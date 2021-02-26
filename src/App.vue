<template>
  <v-app>
    <AppBar />
    <v-main>
      <Home />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/views/AppBar.vue';
import Footer from '@/views/Footer.vue';
import Home from '@/views/Home.vue';

export default {
  name: 'App',

  components: {
    AppBar,
    Footer,
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
