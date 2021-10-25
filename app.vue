<template>
  <div>
    {{ config.publicInfo }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
</script>
