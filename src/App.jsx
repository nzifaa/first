import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nazifa from "./pages/Nazifa"
import Nazifa1 from "./pages/Nazifa1"
import Abdullah from "./pages/Abdullah"
import Ikhsan from "./pages/Ikhsan"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nazifa" element={<Nazifa />} />
        <Route path="/nazifa1" element={<Nazifa1 />} />
        <Route path="/abdullah" element={<Abdullah />} />
        <Route path="/ikhsan" element={<Ikhsan />} />
      </Routes>
    </BrowserRouter>
  )
}