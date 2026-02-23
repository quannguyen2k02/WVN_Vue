<script setup>
import { ref } from 'vue'

const activeLine = ref(1)

// Dữ liệu mẫu y hệt các thẻ HTML bạn đã gửi
const devices = ref([
  { id: 1, name: 'CNC Machine 01', assetId: 'CNC-8821', status: 'Running', temp: 45, load: 82, icon: 'settings_input_component' },
  { id: 2, name: 'Conveyor Belt 01', assetId: 'CV-1004', status: 'Error', temp: 88, load: 95, icon: 'conveyor_belt' },
  { id: 3, name: 'Hydraulic Press 02', assetId: 'HP-5502', status: 'Standby', temp: 25, load: 15, icon: 'bolt' },
  { id: 4, name: 'Robotic Arm 03', assetId: 'RA-9003', status: 'Running', temp: 41, load: 75, icon: 'precision_manufacturing' },
  // Thêm cho đủ 16 thiết bị...
])

const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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

    <div class="grid grid-cols-4 gap-4 px-8 pt-6">
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <p class="text-sm text-slate-500 mb-1">Total Power Consumption</p>
        <div class="flex items-end justify-between"><span class="text-2xl font-bold">1,240 kW</span><span class="text-emerald-500 text-xs font-semibold flex items-center mb-1"><span class="material-symbols-outlined text-sm">trending_down</span> 4.2%</span></div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <p class="text-sm text-slate-500 mb-1">Overall Efficiency</p>
        <div class="flex items-end justify-between"><span class="text-2xl font-bold">94.8%</span><span class="text-emerald-500 text-xs font-semibold flex items-center mb-1"><span class="material-symbols-outlined text-sm">trending_up</span> 0.8%</span></div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <p class="text-sm text-slate-500 mb-1">Avg Operating Temp</p>
        <div class="flex items-end justify-between"><span class="text-2xl font-bold">42.4°C</span><span class="text-rose-500 text-xs font-semibold flex items-center mb-1"><span class="material-symbols-outlined text-sm">trending_up</span> 2.1°C</span></div>
      </div>
      <div class="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <p class="text-sm text-slate-500 mb-1">Active Errors</p>
        <div class="flex items-end justify-between"><span class="text-2xl font-bold text-rose-500">1</span><span class="bg-rose-500/10 text-rose-500 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase mb-1">Critical</span></div>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto p-8 custom-scrollbar">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-24">
        
        <div v-for="device in devices" :key="device.id" 
          class="bg-white dark:bg-slate-900 rounded-xl border-y border-r border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer border-l-4"
          :class="{
            'border-l-emerald-500': device.status === 'Running',
            'border-l-rose-500 ring-1 ring-rose-500/30': device.status === 'Error',
            'border-l-amber-500': device.status === 'Standby'
          }">
          
          <div class="flex justify-between items-start mb-4">
            <div :class="[
              'p-2 rounded-lg', 
              device.status === 'Running' ? 'bg-emerald-500/10 text-emerald-500' : 
              device.status === 'Error' ? 'bg-rose-500/10 text-rose-500' : 'bg-amber-500/10 text-amber-500'
            ]">
              <span class="material-symbols-outlined">{{ device.icon }}</span>
            </div>
            <span :class="[
              'text-[10px] font-bold px-2 py-0.5 rounded uppercase',
              device.status === 'Running' ? 'text-emerald-500 bg-emerald-500/10' : 
              device.status === 'Error' ? 'text-rose-500 bg-rose-500/10' : 'text-amber-500 bg-amber-500/10'
            ]">{{ device.status }}</span>
          </div>
          
          <h3 class="font-bold text-sm mb-1">{{ device.name }}</h3>
          <p class="text-xs text-slate-500 mb-4">Asset ID: {{ device.assetId }}</p>
          
          <div class="space-y-3">
            <div class="flex justify-between text-xs">
              <span class="text-slate-400">Temperature</span>
              <span class="font-medium" :class="device.status === 'Error' ? 'text-rose-500' : ''">{{ device.temp }}°C</span>
            </div>
            <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div class="h-full transition-all" 
                :class="device.status === 'Error' ? 'bg-rose-500' : 'bg-emerald-500'" 
                :style="{ width: device.temp + '%' }"></div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <footer class="h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-8 flex items-center gap-2 sticky bottom-0 z-20">
      <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mr-4">Production Lines</div>
      <button v-for="line in lines" :key="line" 
        @click="activeLine = line"
        class="flex-1 max-w-[140px] h-10 flex items-center justify-between px-4 rounded-lg transition-all"
        :class="activeLine === line ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'">
        <span class="text-sm font-bold">Line {{ line }}</span>
        <span class="w-1.5 h-1.5 rounded-full" :class="line === 1 ? 'bg-rose-400' : 'bg-emerald-500'"></span>
      </button>
    </footer>
  </main>
</template>

<style>
/* Đảm bảo layout chiếm toàn màn hình */
#app { width: 100%; }
</style>