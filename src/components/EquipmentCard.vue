<template>
  <div :class="[
    'bg-white dark:bg-slate-900 rounded-xl border-y border-r border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer border-l-4',
    statusColorBorder
  ]">
    <div class="flex justify-between items-start mb-4">
      <div :class="['p-2 rounded-lg', statusColorBg]">
        <span class="material-symbols-outlined">{{ icon }}</span>
      </div>
      <span :class="['text-[10px] font-bold px-2 py-0.5 rounded uppercase', statusColorText, statusColorBg]">
        {{ status }}
      </span>
    </div>
    <h3 class="font-bold text-sm mb-1">{{ name }}</h3>
    <p class="text-xs text-slate-500 mb-4">Asset ID: {{ assetId }}</p>
    
    <div class="space-y-3">
      <div class="flex justify-between text-xs">
        <span class="text-slate-400">Temperature</span>
        <span class="font-medium" :class="{'text-rose-500': temp > 80}">{{ temp }}°C</span>
      </div>
      <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
        <div class="h-full transition-all" :class="statusProgressBar" :style="{ width: temp + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['name', 'assetId', 'status', 'temp', 'load', 'icon'])

const statusColorBorder = computed(() => {
  if (props.status === 'Running') return 'border-l-emerald-500'
  if (props.status === 'Error') return 'border-l-rose-500 ring-1 ring-rose-500/30'
  return 'border-l-amber-500'
})

const statusColorText = computed(() => {
  if (props.status === 'Running') return 'text-emerald-500'
  if (props.status === 'Error') return 'text-rose-500'
  return 'text-amber-500'
})

</script>