<template>
  <div class="dashboard-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>系统首页</span>
        </div>
      </template>
      <div class="dashboard-content">
        欢迎使用后台管理系统
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-container {
  padding: 20px;
  
  .dashboard-content {
    font-size: 16px;
    color: #666;
  }
}
</style>