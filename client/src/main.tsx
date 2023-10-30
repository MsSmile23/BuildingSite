import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import App from './App.tsx'
import './index.css'
import  store  from "./store.ts";
import { YMaps } from '@pbe/react-yandex-maps'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <YMaps query={{ lang: 'en_RU' }} >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </YMaps>
)
