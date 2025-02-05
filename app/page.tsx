import { Dock } from "./components/Dock";
import { HomePage } from "./components/HomePage";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Dock />
      <HomePage />
    </div>
  )
}
