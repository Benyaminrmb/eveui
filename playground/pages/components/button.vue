<script setup lang="ts">
let buttonsTypes = ref(["button", "neutral", "primary", "secondary", "accent", "ghost", "link"])


const statesTypes = [
    "info",
    "success",
    "warning",
    "error",
]
</script>
<template>
  <div class="w-full p-4 flex flex-wrap gap-3">
    <div class="w-full p-4 flex flex-wrap gap-3">
      #Buttons with brand colors
      <button
        v-for="type in buttonsTypes"
        class="btn"
        :class="type === 'button' ? '' : `btn-${type}`"
      >
        {{ type }}
      </button>
    </div>
    <div class="w-full p-4 flex flex-wrap gap-3">
      #Active buttons
      <button
        v-for="type in buttonsTypes"
        :class="type === 'button' ? '' : `btn-${type}`"
        class="btn btn-active">
        {{ type }}
      </button>
    </div>
    <div class="w-full p-4 flex flex-wrap gap-3">
      #Outline buttons
      <button
        v-for="type in buttonsTypes"
        :class="type === 'button' ? '' : `btn-${type}`"
        class="btn btn-outline">
        {{ type }}
      </button>
    </div>
    <div class="w-full p-4 flex flex-wrap gap-3">
      #Buttons with state colors
      <button
        v-for="type in statesTypes"
        :class="type === 'button' ? '' : `btn-${type}`"
        class="btn">
        {{ type }}
      </button>
    </div>
    <div class="w-full p-4 flex flex-wrap gap-3">
      #Outline buttons with state colors
      <button
        v-for="type in statesTypes"
        :class="type === 'button' ? '' : `btn-${type}`"
        class="btn btn-outline">
        {{ type }}
      </button>
    </div>
  </div>
</template>
<style></style>
