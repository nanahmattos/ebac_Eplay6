import { Provider } from 'react-redux'
//O provider é o elemento pai que vai encapsular todas as aplicaçoes reduxers
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Header from './components/Header'
import Footer from './components/Footer'

import Rotas from './routes'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
