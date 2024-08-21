import RetroGrid from "./lib/retro-grid"
import MeCard from "./components/me-card"

const MainContent = () => {
  return (
    <>
      <div className="relative py-28 z-10 max-w-4xl mx-auto items-center justify-center overflow-hidden rounded-lg">
        <h1 className="clipped-text-effect text-center text-6xl lg:text-8xl tracking-tight font-Display text-white font-semibold">
          &quot;Design is expensive. But poor design decision is expensiver.&quot;
        </h1>
        <div className="mx-8 lg:mx-0">
          <MeCard />
        </div>
      </div>
      <RetroGrid className="absolute top-0 left-0 right-0 bottom-0 z-0" />
    </>
  )
}

export default MainContent