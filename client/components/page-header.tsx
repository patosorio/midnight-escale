"use client"

import { useCurrentPage } from "@/hooks/use-current-page"
import { pageHeaders } from "@/lib/page-headers"

export default function PageHeader() {
  const currentPage = useCurrentPage()
  const { title, subtitle } = pageHeaders[currentPage] || { title: "", subtitle: "" }
  return (
    <div className="sticky top-14 bg-white backdrop-blur-sm text-[#2a4c61] z-40">
      <div className="px-8 py-10">
        <div className="text-left">
          <h1 className="text-md md:text-2xl font-medium mb-2">{title}</h1>
          <p className="text-sm text-[#2a4c61] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
// bg-[#2a4c61]