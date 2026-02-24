<template>
  <div 
    class="bg-white dark:bg-slate-900 rounded-xl border-y border-r border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer border-l-4"
    :class="statusClasses.cardBorder"
  >
    <div class="flex justify-between items-start mb-4">
      <div :class="['p-2 rounded-lg', statusClasses.iconBg]">
        <span class="material-symbols-outlined">{{ device.icon }}</span>
      </div>
      <span :class="['text-[10px] font-bold px-2 py-0.5 rounded uppercase', statusClasses.badge]">
        {{ device.status }}
      </span>
    </div>
    
    <h3 class="font-bold text-sm mb-1 text-slate-900 dark:text-slate-100">{{ device.name }}</h3>
    <p class="text-xs text-slate-500 mb-4">Asset ID: {{ device.assetId }}</p>
    
    
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Định nghĩa Props nhận vào từ Component cha
const props = defineProps({
  device: {
    type: Object,
    required: true
  }
})

// Dùng computed để xử lý logic màu sắc cho sạch code HTML
const statusClasses = computed(() => {
  const status = props.device.status
  return {
    cardBorder: {
      'border-l-emerald-500': status === 'Running',
      'border-l-rose-500 ring-1 ring-rose-500/30': status === 'Error',
      'border-l-amber-500': status === 'Standby'
    },
    iconBg: {
      'bg-emerald-500/10 text-emerald-500': status === 'Running',
      'bg-rose-500/10 text-rose-500': status === 'Error',
      'bg-amber-500/10 text-amber-500': status === 'Standby'
    },
    badge: {
      'text-emerald-500 bg-emerald-500/10': status === 'Running',
      'text-rose-500 bg-rose-500/10': status === 'Error',
      'text-amber-500 bg-amber-500/10': status === 'Standby'
    }
  }
})
</script>