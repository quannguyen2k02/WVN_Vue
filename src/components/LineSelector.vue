<template>
  <footer class="h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-8 flex items-center gap-2 sticky bottom-0 z-20">
    <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mr-4">Production Lines</div>
    
    <div class="flex gap-2 flex-1 overflow-x-auto no-scrollbar">
      <button 
        v-for="line in 10" :key="line"
        @click="$emit('changeLine', line)"
        :class="[activeLine === line ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500']"
        class="min-w-[120px] h-10 flex items-center justify-between px-4 rounded-lg transition-all"
      >
        <span class="text-sm font-bold">Line {{ line }}</span>
        <span :class="line === 1 ? 'bg-rose-400' : 'bg-emerald-500'" class="w-1.5 h-1.5 rounded-full"></span>
      </button>
    </div>

    <div class="ml-auto flex items-center gap-4">
      <div class="text-[10px] text-slate-400 font-mono">Updated: {{ lastUpdate }}</div>
      <button class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-primary">
        <span class="material-symbols-outlined text-lg">sync</span>
      </button>
    </div>
  </footer>
</template>

<script setup>
defineProps(['activeLine', 'lastUpdate'])
defineEmits(['changeLine'])
</script>