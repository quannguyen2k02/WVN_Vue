<template>
    <aside
        class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col h-full shrink-0">
        <div class="p-6 flex items-center gap-3">
            <div class="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                <span class="material-symbols-outlined">precision_manufacturing</span>
            </div>
            <h1 class="text-lg font-bold tracking-tight">IndusOps Pro</h1>
        </div>
        <nav class="flex-1 px-4 space-y-1">
            <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">Main Menu</div>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium" href="#">
                <span class="material-symbols-outlined">dashboard</span>
                <span>Dashboard</span>
            </a>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="#">
                <span class="material-symbols-outlined">bar_chart</span>
                <span>Analytics</span>
            </a>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="#">
                <span class="material-symbols-outlined">construction</span>
                <span>Maintenance</span>
                <span class="ml-auto bg-rose-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
            </a>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="#">
                <span class="material-symbols-outlined">inventory_2</span>
                <span>Inventory</span>
            </a>
            <div class="pt-8 text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-2">System</div>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="#">
                <span class="material-symbols-outlined">settings</span>
                <span>Settings</span>
            </a>
            <a class="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                href="#">
                <span class="material-symbols-outlined">help</span>
                <span>Support</span>
            </a>
        </nav>
        <div class="p-4 border-t border-slate-200 dark:border-slate-800">
            <div class="flex items-center gap-3 p-2 rounded-lg bg-slate-100 dark:bg-slate-800/50">
                <div
                    class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary overflow-hidden">
                    <img class="w-full h-full object-cover" data-alt="Profile photo of industrial manager"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMBwAq_yNkUXb-k1oMmicQc9sCXnkaOuY2rOpeQRevqf-W2BDtjyyImB0R5urkc1pDlMuW1tEwQVpk7YE0MbvOqLoCdlucRS2rz-OVwaInNuI-CLRvd0OC0JnHN9qUrwTkUVRc93G8KTJS03HCwRE2pCqMLRLY04dXVHtWm_mcOHR5SboeG2ja1Nao2woUBwmD3c6CK2sY1lj6z8k1Y_mzg0czDqaujP3OAPj3rmsFIwgAdCin939w2Y14hcGFLYtZBRXtdwc2OM0">
                </div>
                <div class="flex flex-col">
                    <span class="text-sm font-semibold">Robert Chen</span>
                    <span class="text-xs text-slate-500">Plant Manager</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
const menuItems = [
    { icon: 'dashboard', text: 'Dashboard', active: true },
    { icon: 'bar_chart', text: 'Analytics' },
    { icon: 'construction', text: 'Maintenance', badge: 3 },
    { icon: 'inventory_2', text: 'Inventory' },
    { icon: 'settings', text: 'Settings' },
]
</script>