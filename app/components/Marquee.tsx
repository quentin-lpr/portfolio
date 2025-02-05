import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const firstRow = [
  {
    name: "42sh",
    scope: "Epitech",
    body: "A full shell based on the TCSH shell.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "MyHunter",
    scope: "Epitech",
    body: 'A video game using the CSFML C library, based on the famous "Duck Hunt" game.',
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "MyRPG",
    scope: "Epitech",
    body: "An RPG video game using the CSFML C library.",
    img: "https://avatar.vercel.sh/jane",
  },
]

const secondRow = [
  {
    name: "Maki Chef",
    scope: "Personal",
    body: "A stock manager for my mother's sushi company.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Portfolio",
    scope: "Personal",
    body: "This portfolio. No more explanations needed.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "MyCar",
    scope: "Intership",
    body: "Real-time monitoring solution of vehicle production for luxury manufacturer.",
    img: "https://avatar.vercel.sh/james",
  },
]

const ReviewCard = ({ name, scope, body, img }: { name: string; scope: string; body: string; img: string }) => {
  return (
    <figure
      className={cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "border-foreground/[.1] bg-foreground/[.01] hover:bg-gray-950/[.05]")}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="font-medium text-sm dark:text-white">{name}</figcaption>
          <p className="font-medium text-xs dark:text-white/40">{scope}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function ProjectsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:15s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:15s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
    </div>
  )
}
