<template>
  <v-card elevation="2">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
      <v-chip v-for="n of numbers" :key="n" class="ma-1">{{ n }}</v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'DisplayNumbers',
  props: {
    title: {
      type: String,
      required: true,
    },
    numbers: {
      type: Array,
      required: true,
    },
  },
};
</script>
