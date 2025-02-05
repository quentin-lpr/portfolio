import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const firstRow = [
  {
    name: "42sh",
    scope: "Epitech",
    body: "A full shell based on the TCSH shell.",
  },
  {
    name: "MyHunter",
    scope: "Epitech",
    body: 'A video game using the CSFML C library, based on the famous "Duck Hunt" game.',
  },
  {
    name: "MyRPG",
    scope: "Epitech",
    body: "An RPG video game using the CSFML C library.",
  },
]

const secondRow = [
  {
    name: "Maki Chef",
    scope: "Personal",
    body: "A stock manager for my mother's sushi company.",
  },
  {
    name: "Portfolio",
    scope: "Personal",
    body: "This portfolio. No more explanations needed.",
  },
  {
    name: "MyCar",
    scope: "Intership",
    body: "Real-time monitoring solution of vehicle production for luxury manufacturer.",
  },
]

const ReviewCard = ({ name, scope, body }: { name: string; scope: string; body: string }) => {
  return (
    <figure
      className={cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "border-foreground/[.1] bg-foreground/[.01] hover:bg-gray-950/[.05]")}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="font-medium text-lg">{name}</figcaption>
          <p className="font-medium text-foreground/50 text-xs">{scope}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm leading-tight">{body}</blockquote>
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
