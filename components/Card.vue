<template>
  <v-card
    class="mx-auto"
    max-width="344"
    :variant="variant"
  >
    <v-card-item>
      <div>
        <div class="text-overline mb-1">
          {{ variant }}
        </div>
        <div class="text-h6 mb-1">
          Headline
        </div>
        <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn>
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>