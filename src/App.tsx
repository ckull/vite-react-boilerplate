
import './App.css'
import Router from 'src/pages/router'
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
