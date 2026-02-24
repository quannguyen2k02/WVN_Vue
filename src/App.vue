<script setup>
import { ref } from 'vue'
import LineSelector from './components/LineSelector.vue'
const activeLine = ref(1)
import { RouterLink, RouterView } from 'vue-router'





const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Hàm xử lý khi người dùng chọn Line mới
const handleLineChange = (lineId) => {
  activeLine.value = lineId
  console.log("Đang chuyển sang dữ liệu của Dây chuyền:", lineId)
  // Sau này bạn sẽ gọi API C# tại đây: fetchData(lineId)
}
</script>

<template>
  <aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col h-full shrink-0">
    <div class="p-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
        <span class="material-symbols-outlined">precision_manufacturing</span>
      </div>
      <h1 class="text-lg font-bold tracking-tight">IndusOps Pro</h1>
    </div>
    <nav class="flex-1 px-4 space-y-1">
      <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Main Menu</div>
      <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium" href="#"><span class="material-symbols-outlined">dashboard</span>Dashboard</a>
      <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#"><span class="material-symbols-outlined">bar_chart</span>Analytics</a>
      <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
        <span class="material-symbols-outlined">construction</span>Maintenance
        <span class="ml-auto bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
      </a>
    </nav>
    <div class="p-4 border-t border-slate-200 dark:border-slate-800">
      <div class="flex items-center gap-3 p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
        <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
          <img class="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Robert+Chen" />
        </div>
        <div class="flex flex-col"><span class="text-sm font-semibold">Robert Chen</span><span class="text-xs text-slate-500">Plant Manager</span></div>
      </div>
    </div>
  </aside>

  <main class="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark relative">
    <header class="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
      <div class="flex items-center gap-4">
        <h2 class="text-xl font-bold">Line {{ activeLine }} Overview</h2>
        <div class="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span><span>Live Monitoring</span>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="relative">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
          <input class="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary" placeholder="Search equipment ID..." type="text" />
        </div>
        <button class="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all">
          <span class="material-symbols-outlined text-lg">add</span>New Asset
        </button>
      </div>
    </header>
    <RouterView />
    

    

    <LineSelector 
      :lines="lines" 
      :active-line="activeLine" 
      @select-line="handleLineChange" 
    />
  </main>
</template>

<style>
/* Đảm bảo layout chiếm toàn màn hình */
#app { width: 100%; }
</style>