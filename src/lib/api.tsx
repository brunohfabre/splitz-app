import axios, { AxiosError } from 'axios'
import Constants from 'expo-constants'

import { useAuthStore } from '@stores/authStore'

const api = axios.create({
  baseURL: Constants.expoConfig.extra.API_URL,
})

api.interceptors.request.use(async (config) => {
  const token = useAuthStore.getState().token

  if (config.headers && token) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${token}`,
    } as any
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.data.status === 'auth_error') {
      useAuthStore.getState().signOut()

      return
    }

    if (error instanceof AxiosError) {
      alert(error.message)
    } else {
      alert(error.response.data.message)
    }

    return Promise.reject(error.response)
  },
)

export { api }
