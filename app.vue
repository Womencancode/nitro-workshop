<template>
  <div>
    {{ config.publicInfo }}
  </div>
</template>

<script setup>
// import { $fetch } from 'ohmyfetch'
const config = useRuntimeConfig()
// const result = await $fetch('/api/health/updates')
</script>
