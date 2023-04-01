import { useAuthStore } from '../stores/authStore'
import { useLocalAuthStore } from '../stores/localAuthStore'
import { AppRoutes } from './AppRoutes'
import { AuthRoutes } from './AuthRoutes'
import { ReAuthRoutes } from './ReAuthRoutes'

export function Routes() {
  const token = useAuthStore((state) => state.token)
  const isAuthenticated = useLocalAuthStore((state) => state.isAuthenticated)

  if (!token) {
    return <AuthRoutes />
  }

  if (!isAuthenticated) {
    return <ReAuthRoutes />
  }

  return <AppRoutes />
}
