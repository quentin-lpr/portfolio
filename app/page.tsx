import { Particles } from "@/components/ui/particles"
import Image from "next/image"

export default function Home() {
  const color = "#ffffff"

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <div className="-translate-y-20 z-10 flex flex-col items-center">
        <Image
          src="/profilePicture.jpg"
          width={180}
          height={180}
          alt="profilePicture"
          className="pointer-events-none mb-24 select-none rounded-full border-[4px] border-foreground object-cover object-right-bottom"
        />
        <span className="pointer-events-none z-10 whitespace-pre-wrap text-center font-semibold text-8xl leading-none">Quentin Lapierre.</span>
      </div>
      <Particles className="absolute inset-0 z-0 h-screen" quantity={200} ease={10} color={color} refresh />
    </div>
  )
}
