import Image from "next/image"
import { ProjectsMarquee } from "./components/Marquee"

export default function Skills() {
  return (
    <div className="mx-auto mt-24 max-w-screen-lg">
      <div className="mr-12 flex items-center justify-center">
        <Image
          src="/profilePicture.jpg"
          width={180}
          height={180}
          alt="profilePicture"
          className="pointer-events-none mr-16 select-none rounded-full border-[4px] border-foreground object-cover object-right-bottom"
        />
        <div>
          <p className="pointer-events-none mb-2 select-none font-semibold text-7xl">Quentin Lapierre</p>
          <p className="pointer-events-none ml-2 select-none text-2xl text-muted-foreground">Epitech Student</p>
        </div>
      </div>
      <ProjectsMarquee />
    </div>
  )
}
