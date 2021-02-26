<template>
  <v-container fluid>
    <v-btn class="my-2" @click="handleExtract">Extract</v-btn>
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
import DisplayNumbers from '@/components/DisplayNumbers.vue';

export default {
  name: 'Home',
  components: {
    DisplayNumbers,
  },
  data() {
    return {
      availableNumbers: [...Array(90).keys()].map((i) => i + 1),
      extractedNumbers: [],
    };
  },
  computed: {
    ascendingExtractedNumbers() {
      return [...this.extractedNumbers].sort((a, b) => a - b);
    },
  },
  methods: {
    handleExtract() {
      const index = Math.floor(Math.random() * this.availableNumbers.length);
      const extracted = this.availableNumbers.splice(index, 1);
      this.extractedNumbers = this.extractedNumbers.concat(extracted);
    },
  },
};
</script>

<style scoped>
h1.current-number {
  font-size: 72px;
  line-height: 72px;
}
</style>
