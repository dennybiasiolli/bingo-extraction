<template>
  <v-container fluid>
    <DisplayNumbers title="Available numbers" :numbers="availableNumbers" />
  </v-container>
</template>

<script>
import DisplayNumbers from '@/components/DisplayNumbers.vue';

export default {
  name: 'Home',
  components: {
    DisplayNumbers,
  },
  data() {
    return {
      availableNumbers: [...Array(90).keys()].map((i) => i + 1),
    };
  },
};
</script>
