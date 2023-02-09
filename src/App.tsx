import { Layout } from "components"
import { Route, Routes } from "react-router-dom"
import { Colors, ExistingStores, ProductCategories, Sizes, StoresRequest } from "views"
import Home from "views/Home"
import Login from "views/Login"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/existing-stores" element={<ExistingStores />} />
        <Route path="/stores-request" element={<StoresRequest />} />
        <Route path="/product-categories" element={<ProductCategories />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/sizes" element={<Sizes />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
