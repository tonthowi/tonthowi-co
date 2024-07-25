import ThreeCanvas from './components/ThreeCanvas.jsx'
import MainContent from "./MainContent.jsx"
import SecondaryContent from "./SecondaryContent.jsx"
import Footer from "./components/Footer.jsx"
function App() {

  return (
    <div
      className="min-h-dvh overflow-hidden"
    >
      <ThreeCanvas />
      <MainContent />
      {/* <SecondaryContent /> */}
      <Footer />
    </div>
  )
}

export default App;