<template>
  <v-card
    class="px-2 mx-auto"
    max-width="300"
    rounded="lg"
    text="How satisfied are you with developing using Vuetify?"
    theme="dark"
    title="SURVEY"
    variant="flat"
  >
    <template #append>
      <div class="me-n2">
        <v-btn
          icon="$close"
          density="comfortable"
          variant="plain"
        ></v-btn>
      </div>
    </template>

  </v-card>
</template>

<script setup lang="ts">
const model = ref(null)
</script>

<style scoped>

</style>