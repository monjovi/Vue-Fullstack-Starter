<template>
  <v-container>

    <v-layout>
      User Info
    </v-layout>

    <v-layout>
      {{ $route.params.username }}
    </v-layout>

    <v-layout>
      <v-btn to="/101-guide/routing/dynamic-matching" class="ml-0">Back to List</v-btn>
    </v-layout>

  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
