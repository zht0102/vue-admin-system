export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      if (username === 'admin' && password === '123456') {
        return {
          code: 200,
          data: {
            token: 'mock-token-' + Math.random()
          },
          message: '登录成功'
        }
      }
      return {
        code: 401,
        message: '用户名或密码错误'
      }
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: ({ headers }) => {
      const token = headers.authorization
      if (token && token.includes('mock-token')) {
        return {
          code: 200,
          data: {
            name: 'Admin',
            avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
            roles: ['admin'],
            permissions: ['*']
          }
        }
      }
      return {
        code: 401,
        message: '获取用户信息失败'
      }
    }
  },
  {
    url: '/api/user/logout',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '退出成功'
      }
    }
  }
]