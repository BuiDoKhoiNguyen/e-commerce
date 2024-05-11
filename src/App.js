import "./App.css"
import Navigation from "./customer/components/Navigation/Navigation"
import HomePage from "./customer/pages/HomePage/HomePage"
import Footer from "./customer/components/Footer/Footer"
import ProductDetails from "./customer/components/ProductDetails/ProductDetails"

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <ProductDetails />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
