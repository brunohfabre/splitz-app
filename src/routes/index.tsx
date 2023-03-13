import { Test } from '@pages/Test'
import { useAuthStore } from '@stores/authStore'
import { useReAuthStore } from '@stores/reAuthStore'

import { AppRoutes } from './AppRoutes'
import { AuthRoutes } from './AuthRoutes'
import { ReAuthRoutes } from './ReAuthRoutes'

export function Routes() {
  const token = useAuthStore((state) => state.token)
  const isAuthenticated = useReAuthStore((state) => state.isAuthenticated)

  return <Test />

  if (token && isAuthenticated) {
    return <AppRoutes />
  }

  if (token && !isAuthenticated) {
    return <ReAuthRoutes />
  }

  return <AuthRoutes />
}
