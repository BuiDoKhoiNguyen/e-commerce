import "./App.css"
import Navigation from "./customer/components/Navigation/Navigation"
import HomePage from "./customer/pages/HomePage/HomePage"
import Footer from "./customer/components/Footer/Footer"
import Cart from "./customer/components/Cart/Cart"
import { Route, Routes } from "react-router-dom"
import CustomerRouters from "./customer/Routers/CustomerRouters"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  )
}

export default App
