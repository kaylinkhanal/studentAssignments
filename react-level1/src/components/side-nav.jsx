"use client"

import { cn } from "@/lib/utils"
import { MessageSquare, Radio, Users2, Activity } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: "chat",
    href: "/whatsapp/chat",
    icon: MessageSquare,
  },
  {
    name: "status",
    href: "/whatsapp/status",
    icon: Activity,
  },
  {
    name: "channel",
    href: "/whatsapp/channel",
    icon: Radio,
  },
  {
    name: "communities",
    href: "/whatsapp/communities",
    icon: Users2,
  },
] 

export default function SideNav() {
  const pathname = usePathname()

  return (
    <aside className="bg-[#0f1621] border-r border-gray-800/50 w-[72px] flex flex-col items-center py-4">
      <nav className="space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-colors",
                "hover:bg-gray-800/50",
                isActive ? "bg-gray-800/50 text-white" : "text-gray-400",
              )}
              title={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            >
              <Icon className="w-5 h-5" />
              <span className="sr-only">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

