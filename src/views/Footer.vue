<template>
  <v-footer>
    Remaining numbers: {{ remainingNumbers }}
    <v-spacer />
    Latests 5 extracted numbers: [{{ reversedExtractedNumbers.slice(0, 5).join(', ') }}]
  </v-footer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState({
      remainingNumbers: (state) => state.availableNumbers.length,
    }),
    ...mapGetters(['reversedExtractedNumbers']),
  },
};
</script>
