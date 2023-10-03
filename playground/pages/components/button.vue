<template>
  <div class="w-full bg-slate-200 p-4 flex flex-wrap gap-3">
    <div class="w-full p-3 flex flex-wrap gap-3">
      btn2:
      <button class="btn2 ">button</button>
    </div>
    <div class="w-full p-3 flex flex-wrap gap-3">
      btn-primary:
      <button class="btn btn-primary">button</button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.btn2 {
  @apply font-semibold no-underline gap-2 bg-primary;
  @apply px-2.5 py-2;
  @apply rounded-md shadow-sm;
  @apply transition;
  border-width: var(--border-btn, 1px);
  animation: button-pop var(--animation-btn, 0.25s) ease-out;

  &:active:hover,
  &:active:focus {
    animation: button-pop 0s ease-out;
    transform: scale(var(--btn-focus-scale, 0.97));
  }
  &:focus-visible {
    @apply outline-8 outline-base-100 outline-offset-4;
  }
  }

</style>
