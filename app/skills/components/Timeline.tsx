import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Timeline } from "@/components/ui/timeline"
import Image from "next/image"

export function ProfessionalTimeline() {
  const data = [
    {
      title: "2020 - Now",
      content: (
        <div>
          <span className="font-bold">
            Maki Chef - Sushi & Wok
            <Badge className="-translate-y-[1px] ml-4">Kitchen Assistant</Badge>
          </span>
          <Separator className="my-4 h-[2px] w-48" />
          <div className="space-y-2">
            <span className="w-2/3 text-justify text-foreground/50 text-sm">
              Located in supermarkets, Makichef Wok & Sushi kiosks are staffed by talented, creative chefs who create over a hundred recipes a day in front of
              your eyes in open kitchens.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2028",
      content: (
        <div>
          <span className="font-bold">
            EPITECH - The school for IT excellence, Bordeaux
            <Badge className="-translate-y-[1px] ml-4">3.04 / 4 GPA</Badge>
          </span>
          <Separator className="my-4 h-[2px] w-48" />
          <div className="ml-6 space-y-2">
            <span>
              — Diploma of Expert in Information Technologies
              <Badge variant="outline" className="-translate-y-[1px] ml-2">
                in progress
              </Badge>
            </span>
            <span>
              — Title of Software Engineering Expert registered with the RNCP Level 7
              <Badge variant="outline" className="-translate-y-[1px] ml-2">
                in progress
              </Badge>
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2024 Late 2024",
      content: (
        <div>
          <span className="font-bold leading-relaxed">
            CGI - Multinational IT consulting & Software Development company
            <Badge className="-translate-y-[1px] ml-4">Internship</Badge>
          </span>
          <Separator className="my-4 h-[2px] w-48" />
          <div className="mb-6 space-y-2">
            <span className="text-foreground/50 text-sm">Project MyCar — Real-time monitoring solution of vehicle production for luxury manufacturer.</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/myCar/home.png"
              alt="myCar - Home"
              width={1920}
              height={1080}
              className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/myCar/singleCameraView.png"
              alt="myCar - Single camera view"
              width={1920}
              height={1080}
              className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/myCar/multipleCameraview.png"
              alt="myCar - Multiple camera view"
              width={1920}
              height={1080}
              className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>{" "}
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}
