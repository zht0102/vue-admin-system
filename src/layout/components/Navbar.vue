<template>
  <div class="navbar">
    <div class="right-menu">
      <el-dropdown trigger="click">
        <span class="avatar-wrapper">
          <el-avatar :size="30" icon="UserFilled" />
          <span class="user-name">管理员</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()

const handleLogout = async () => {
  await userStore.logout()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  
  .right-menu {
    .avatar-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      
      .user-name {
        margin-left: 8px;
        font-size: 14px;
      }
    }
  }
}
</style>