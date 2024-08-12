import DockMenu from './components/MenuDock.tsx'
import MainContent from "./MainContent.jsx"
import SecondaryContent from "./SecondaryContent.jsx"
import Footer from "./components/Footer.jsx"
function App() {

  return (
    <div
      className="overflow-hidden bg-black"
    >
      <DockMenu />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;