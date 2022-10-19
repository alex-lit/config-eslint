<script lang="ts" setup>
  const test = {};
  const xs = [];
</script>

<template>
  <div>
    <div v-for="x in xs" :key="x">{{ test.dot.notation }} {{ `${test}` }}</div>
  </div>
</template>
