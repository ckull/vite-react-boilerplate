
import './App.scss'
import Router from 'src/pages/router'
import { BrowserRouter } from "react-router-dom";
import Provider from './providers';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App
