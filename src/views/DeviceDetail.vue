<template>
  <div class="p-8 max-w-4xl mx-auto">
    <button @click="$router.back()" class="flex items-center gap-2 text-primary font-bold mb-6 hover:underline">
      <span class="material-symbols-outlined">arrow_back</span> Quay lại danh sách
    </button>

    <div class="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
      <h1 class="text-3xl font-black mb-2 uppercase italic text-primary">Device Checklist</h1>
      <p class="text-slate-500 mb-8 font-medium">Bản mẫu kiểm tra định kỳ cho thiết bị ID: {{ id }}</p>

      <div class="space-y-4">
        <div v-for="step in checklistTemplate" :key="step.code" 
          class="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all cursor-pointer group">
          <input type="checkbox" class="w-6 h-6 rounded-lg border-slate-300 text-primary focus:ring-primary transition-all cursor-pointer" />
          <div class="flex-1">
            <h4 class="font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors">{{ step.title }}</h4>
            <p class="text-sm text-slate-500">{{ step.desc }}</p>
          </div>
          <span class="text-[10px] font-black px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-500 uppercase">{{ step.code }}</span>
        </div>
      </div>
      
      <button class="w-full mt-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest">
        Hoàn tất kiểm tra
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['id']) // Lấy ID từ URL

const checklistTemplate = [
  { code: 'CHECK-01', title: 'Kiểm tra nguồn điện', desc: 'Đảm bảo điện áp đầu vào ổn định trong khoảng 220V-240V.' },
  { code: 'CLEAN-02', title: 'Vệ sinh cảm biến', desc: 'Dùng khăn khô lau sạch bụi bẩn bám trên bề mặt cảm biến quang.' },
  { code: 'LUB-03', title: 'Tra dầu bôi trơn', desc: 'Tra 5ml dầu chuyên dụng vào trục khuỷu chính.' },
  { code: 'CALIB-04', title: 'Hiệu chuẩn thông số', desc: 'Chạy chương trình Auto-Calib để thiết lập lại tọa độ gốc.' }
]
</script>