import { usePathname } from "next/navigation"

export function useCurrentPage() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  // Special case for admin/login
  if (segments[0] === "admin" && segments[1] === "login") {
    return "login"
  }

  // For admin dashboard
  if (segments[0] === "admin" && !segments[1]) {
    return "admin"
  }

  // Default case for other pages
  return segments[0] || "home"
}