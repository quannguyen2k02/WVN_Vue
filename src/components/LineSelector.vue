<template>
  <footer class="h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-8 flex items-center gap-2 sticky bottom-0 z-20">
    <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mr-4">
      Production Lines
    </div>
    
    <div class="flex gap-2 flex-1 overflow-x-auto no-scrollbar">
      <button 
        v-for="line in lines" 
        :key="line" 
        @click="$emit('select-line', line)"
        class="flex-1 max-w-[140px] h-10 flex items-center justify-between px-4 rounded-lg transition-all shrink-0"
        :class="activeLine === line 
          ? 'bg-primary text-white shadow-lg shadow-primary/20' 
          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'"
      >
        <span class="text-sm font-bold">Line {{ line }}</span>
        <span 
          class="w-1.5 h-1.5 rounded-full" 
          :class="line === 1 ? 'bg-rose-400' : 'bg-emerald-500'"
        ></span>
      </button>
    </div>
  </footer>
</template>

<script setup>
// Nhận props từ cha
defineProps({
  lines: {
    type: Array,
    default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  activeLine: {
    type: Number,
    required: true
  }
})

// Định nghĩa các sự kiện gửi lên cha
defineEmits(['select-line'])
</script>

<style scoped>
/* Ẩn thanh cuộn nhưng vẫn cho phép lướt trên mobile/chuột */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>