<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <div class="sidebar-container">
      <Sidebar />
    </div>
    
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <div class="navbar">
        <Navbar />
      </div>
      
      <!-- 主要内容区 -->
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}

.sidebar-container {
  width: 210px;
  height: 100%;
  background-color: #304156;
  transition: width 0.28s;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.navbar {
  height: 50px;
  border-bottom: 1px solid #dcdfe6;
}

.app-main {
  flex: 1;
  padding: 20px;
  overflow: auto;
}
</style>