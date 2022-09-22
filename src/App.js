import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Create from "./pages/create"
import Edit from "./pages/edit"
import Event from "./pages/event"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  )
}

export default App
