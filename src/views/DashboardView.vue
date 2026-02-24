<script setup>
import EquipmentCard from '@/components/EquipmentCard.vue';
import { ref } from 'vue'
// Dữ liệu mẫu y hệt các thẻ HTML bạn đã gửi
const devices = ref([
    { id: 1, name: 'LED01', assetId: '1234', status: 'Running', temp: 45, load: 82, icon: 'settings_input_component' },
    { id: 2, name: 'Conveyor Belt 01', assetId: 'CV-1004', status: 'Error', temp: 88, load: 95, icon: 'conveyor_belt' },
    { id: 3, name: 'Hydraulic Press 02', assetId: 'HP-5502', status: 'Standby', temp: 25, load: 15, icon: 'bolt' },
    { id: 4, name: 'Robotic Arm 03', assetId: 'RA-9003', status: 'Running', temp: 41, load: 75, icon: 'precision_manufacturing' },
    { id: 5, name: 'Robotic Arm 03', assetId: 'RA-9003', status: 'Running', temp: 41, load: 75, icon: 'precision_manufacturing' },
    { id: 6, name: 'Robotic Arm 03', assetId: 'RA-9003', status: 'Running', temp: 41, load: 75, icon: 'precision_manufacturing' },
    { id: 7, name: 'Robotic Arm 03', assetId: 'RA-9003', status: 'Running', temp: 41, load: 75, icon: 'precision_manufacturing' },
    { id: 8, name: 'Robotic Arm 03', assetId: 'RA-9003', status: 'Running', temp: 41, load: 75, icon: 'precision_manufacturing' },
    // Thêm cho đủ 16 thiết bị...
])

</script>
<template>
    <div class="flex-1 overflow-y-auto p-8 custom-scrollbar">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-24">
            <EquipmentCard v-for="item in devices" :key="item.id" :device="item" />
        </div>
    </div>

</template>
