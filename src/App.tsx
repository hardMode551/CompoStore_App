import Header from './Components/Header/Header'
import Content from './Components/Content/Content'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div className="App">
        <Header />
        <div className="content">
          <Content />
        </div>
        <Footer />
    </div>
  )
}

export default App
