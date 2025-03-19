import { defineStore } from 'pinia'
import request from '@/utils/request'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token'),
    userInfo: null
  }),
  
  actions: {
    async login(data) {
      const res = await request({
        url: '/user/login',
        method: 'post',
        data
      })
      this.token = res.data.token
      localStorage.setItem('token', res.data.token)
      return res
    },
    
    async getInfo() {
      const res = await request({
        url: '/user/info',
        method: 'get'
      })
      this.userInfo = res.data
      return res
    },
    
    async logout() {
      await request({
        url: '/user/logout',
        method: 'post'
      })
      this.token = null
      this.userInfo = null
      localStorage.removeItem('token')
    }
  }
})