<template>
    <header
        class="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 bg-white dark:bg-background-dark/50 backdrop-blur-md sticky top-0 z-10">
        <div class="flex items-center gap-4">
            <h2 class="text-xl font-bold">Line 1 Overview</h2>
            <div
                class="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Live Monitoring</span>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <div class="relative">
                <span
                    class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                <input
                    class="bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary"
                    placeholder="Search equipment ID..." type="text">
            </div>
            <button
                class="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all">
                <span class="material-symbols-outlined text-lg">add</span>
                New Asset
            </button>
            <div class="w-px h-6 bg-slate-200 dark:border-slate-800"></div>
            <button
                class="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                <span class="material-symbols-outlined">notifications</span>
            </button>
        </div>
    </header>
</template>

<script setup>
defineProps(['currentLineName'])
</script>