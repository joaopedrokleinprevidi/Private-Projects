import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from './App.jsx'
import { GlobalStyle } from './styles/globalStyle.js'
import { AsideAddUsersPageContainer, AsideViewUsersPageContainer } from './pages';
import { store } from './libs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<AsideAddUsersPageContainer />} />
                <Route path="viewUsers" element={<AsideViewUsersPageContainer />} />
              </Route>
      </Routes>
    </BrowserRouter>
    <Toaster reverseOrder={true} toastOptions={{duration: 2500}}/>
    </Provider>
  </React.StrictMode>,
)
