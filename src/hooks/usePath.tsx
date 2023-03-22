import { useLocation } from "react-router-dom"

export const usePath = () => {
  const isCurrentPath = (link: string) => {
    const { pathname } = useLocation()

    if (link === pathname) return true

    return false
  }

  return {
    isCurrentPath
  }
}