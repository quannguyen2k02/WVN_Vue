import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import DeviceDetail from '../views/DeviceDetail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'dashboard', 
      component: DashboardView 
    },
    { 
      path: '/device/:id', 
      name: 'device-detail', 
      component: DeviceDetail, 
      props: true // Cho phép truyền ID từ URL vào thành Props
    }
  ]
})

export default router