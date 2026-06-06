import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
