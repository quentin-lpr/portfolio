import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { ProjectsMarquee } from "./components/Marquee"
import { ProfessionalTimeline } from "./components/Timeline"

function Header() {
  return (
    <div className="mr-12 flex items-center justify-center">
      <Image
        src="/profilePicture.jpg"
        width={180}
        height={180}
        alt="profilePicture"
        className="mr-16 select-none rounded-full border-[4px] border-foreground object-cover object-right-bottom"
      />
      <div>
        <p className="mb-2 select-none font-semibold text-7xl">Quentin Lapierre</p>
        <p className="ml-2 select-none text-2xl text-muted-foreground">Epitech Student</p>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="mx-auto mt-24 max-w-screen-xl pb-36">
      <Header />
      <ProjectsMarquee />
      <Separator className="mt-12" />
      <ProfessionalTimeline />
    </div>
  )
}
