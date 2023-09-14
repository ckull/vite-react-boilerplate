
import Router from 'src/pages/router';
import './App.scss';
import Provider from './providers';

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
