<template>
  <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <p class="text-sm text-slate-500 mb-1">{{ label }}</p>
    <div class="flex items-end justify-between">
      <span class="text-2xl font-bold" :class="valueClass">{{ value }}</span>
      <span v-if="trend" :class="trendColor" class="text-xs font-semibold flex items-center mb-1">
        <span class="material-symbols-outlined text-sm">{{ trendIcon }}</span> {{ trendValue }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps(['label', 'value', 'trend', 'trendValue', 'trendIcon', 'trendColor', 'valueClass'])
</script>