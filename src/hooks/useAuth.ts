export const useAuth = () => {
  const currentUser =
    typeof window !== 'undefined' ? localStorage.getItem('user') : null
  return currentUser
}
