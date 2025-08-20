import { usePathname } from "next/navigation"

export function useCurrentPage() {
  const pathname = usePathname()
  // Remove leading slash and get first segment of path
  const currentPage = pathname.split("/")[1] || "home"
  return currentPage
}
