<template>
  <v-container fluid>
    <v-btn class="my-2" @click="extractNumber">Extract</v-btn>
    <v-row>
      <v-col>
        <h1 class="current-number">
          Extracted: {{ extractedNumbers[extractedNumbers.length - 1] }}
        </h1>
      </v-col>
    </v-row>
    <DisplayNumbers title="Available numbers" :numbers="availableNumbers" />
    <DisplayNumbers
      title="Extracted numbers"
      :numbers="ascendingExtractedNumbers"
    />
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import DisplayNumbers from '@/components/DisplayNumbers.vue';

export default {
  name: 'Home',
  components: {
    DisplayNumbers,
  },
  computed: {
    ...mapState(['availableNumbers', 'extractedNumbers']),
    ...mapGetters(['ascendingExtractedNumbers']),
  },
  methods: {
    ...mapMutations(['extractNumber']),
  },
};
</script>

<style scoped>
h1.current-number {
  font-size: 72px;
  line-height: 72px;
}
</style>
