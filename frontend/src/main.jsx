import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import App from './App.jsx'
import { Routes, Route, BrowserRouter } from 'react-router'
import Home from './pages/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route
              path='*'
              element={<h1 className='text-center'>The Page is not Found</h1>}
            />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
