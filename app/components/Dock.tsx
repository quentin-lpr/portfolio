"use client"
import { FloatingDock } from "@/components/ui/floating-dock"
import { IconHomeFilled, IconBoltFilled, IconBrandLinkedinFilled, IconBrandGithubFilled } from "@tabler/icons-react"

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: <IconHomeFilled className="h-full w-full text-background dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Skills",
      icon: <IconBoltFilled className="h-full w-full text-background dark:text-neutral-300" />,
      href: "/skills",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedinFilled className="h-full w-full text-background dark:text-neutral-300" />,
      href: "https://linkedin.com/in/quentin-lapierre-epitech",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithubFilled className="h-full w-full text-background dark:text-neutral-300" />,
      href: "https://github.com/quentin-lpr",
      target: "_blank",
    },
  ]
  return (
    <div className="-translate-x-1/2 fixed bottom-12 left-1/2 z-[1000]">
      <div className="w-auto">
        <FloatingDock items={links} />
      </div>
    </div>
  )
}
