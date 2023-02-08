import { Layout } from "components"
import { Route, Routes } from "react-router-dom"
import Home from "views/Home"
import Login from "views/Login"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
