import './App.css'
import { Navbar } from './components/navbar/navbar'
import { AllRoutes } from './routes'
import { Footer } from './components/footer'

function App() {

  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer />
    </>
  )

}

export default App
