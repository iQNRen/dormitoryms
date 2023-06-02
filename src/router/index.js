import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import SystemHome from "../components/systemHomeView.vue";
import DormitoryHome from "../components/dormitory/DormitoryHome.vue";
import SystemAdmin from "../views/SystemAdmin.vue";
import DormitoryAdminAdd from "../components/dormitory/DormitoryAdminAdd.vue";
import DormitoryAdminManager from "../components/dormitory/DormitoryAdminManager.vue";
import DormitoryAdminUpdate from "../components/dormitory/DormitoryAdminUpdate.vue";
import StudentAdd from "../components/student/StudentAdd.vue";
import StudentManager from "../components/student/StudentManager.vue";
import StudentUpdate from "../components/student/StudentUpdate.vue";
import BuildingAdd from "../components/building/BuildingAdd.vue";
import BuildingManager from "../components/building/BuildingManager.vue";
import BuildingUpdate from "../components/building/BuildingUpdate.vue";
import DormitoryAdd from "../components/dormitory/DormitoryAdd.vue";
import DormitoryManager from "../components/dormitory/DormitoryManager.vue";
import DormitoryUpdate from "../components/dormitory/DormitoryUpdate.vue";
import MoveoutRegister from "../components/move/MoveoutRegister.vue";
import MoveRecord from "../components/move/MoveRecord.vue";
import AbsentRecord from "../components/absent/AbsentRecord.vue";
import DormitoryAdmin from "../views/DormitoryAdmin.vue";
import AbsentRegister from "../components/absent/AbsentRegister.vue";

const routes = [
  {
    path: '/',
    name: '主页',
    redirect: '/login',
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/error',
    name: '404',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/dormitoryAdmin',
    name: '宿舍管理员',
    component: DormitoryAdmin,
    redirect: '/dormitoryHome',
    children: [
      {
        path: '/dormitoryHome',
        name: '宿舍管理员欢迎界面',
        component: DormitoryHome,
      },
      {
        path: '/absentRecord',
        name: '学生缺寝记录',
        component: AbsentRecord
      },
      {
        path: '/absentRegister',
        name: '缺寝登记',
        component: AbsentRegister
      }
    ]
  },
  {
    path: '/systemAdmin',
    name: '系统管理员',
    component: SystemAdmin,
    redirect: '/systemHome',
    children: [
      {
        path: '/systemHome',
        name: '系统管理员欢迎界面',
        component: SystemHome,
      },
      {
        path: '/dormitoryAdminManager',
        name: '宿管管理',
        component: DormitoryAdminManager
      },
      {
        path: '/dormitoryAdminAdd',
        name: '添加宿管',
        component: DormitoryAdminAdd
      },
      {
        path: '/dormitoryAdminUpdate',
        name: '修改宿管',
        component: DormitoryAdminUpdate
      },
      {
        path: '/studentAdd',
        name: '添加学生',
        component: StudentAdd
      },
      {
        path: '/studentManager',
        name: '学生管理',
        component: StudentManager
      },
      {
        path: '/studentUpdate',
        name: '修改学生',
        component: StudentUpdate
      },
      {
        path: '/buildingAdd',
        name: '添加楼宇',
        component: BuildingAdd
      },
      {
        path: '/buildingManager',
        name: '楼宇管理',
        component: BuildingManager
      },
      {
        path: '/buildingUpdate',
        name: '修改楼宇',
        component: BuildingUpdate
      },
      {
        path: '/dormitoryAdd',
        name: '添加宿舍',
        component: DormitoryAdd
      },
      {
        path: '/dormitoryManager',
        name: '宿舍管理',
        component: DormitoryManager
      },
      {
        path: '/dormitoryUpdate',
        name: '修改宿舍',
        component: DormitoryUpdate
      },
      {
        path: '/moveoutRegister',
        name: '迁出登记',
        component: MoveoutRegister
      },
      {
        path: '/moveoutRecord',
        name: '迁出记录',
        component: MoveRecord
      },
      {
        path: '/absentRecords',
        name: '缺寝记录',
        component: AbsentRecord
      },
      {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/error',
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


// router.beforeEach((to,from,next){
//   if(to.matched.length === 0){
//       from.path ? next({name: from.name}) : next('/error')
//   }else{
//       next()
//   }
// })

export default router;
