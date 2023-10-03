<template>
  <div class="flex flex-wrap w-full">
    <div class="flex flex-wrap w-full">
      <nuxt-link :to="`/components/button`">buttons</nuxt-link>
    </div>
    <div class="flex flex-wrap w-full">
      <slot />
    </div>
  </div>
</template>
