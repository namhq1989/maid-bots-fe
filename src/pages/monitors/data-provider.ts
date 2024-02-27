import { DataProvider } from '@refinedev/core'

const url = 'http://localhost:3000/monitors/list'
export const dataProvider = (): DataProvider => ({
  getList: async () => {
    const response = await fetch(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTE0NDkxNTksImlkIjoiNjVjNGM2ZjdjNGMwYzU0YmIzM2VlZGYwIn0.m3QbgOVcyu6-ylKxFQUQyqtpnV1tj-NwWtjNxsf_ONQ',
      },
    })
    const data = await response.json()

    return {
      data: data.data.monitors,
      total: data.data.monitors.length,
    }
  },
  getApiUrl: () => url,
  create: async () => {
    throw new Error('Not implemented')
  },
  update: async () => {
    throw new Error('Not implemented')
  },
  getOne: async () => {
    throw new Error('Not implemented')
  },
  deleteOne: async () => {
    throw new Error('Not implemented')
  },
})
