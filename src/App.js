
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')

  const [alert, setalert] = useState(null);

  const showAlert=(message, type) =>{
    setalert({
      message:message,
      type:type
    })
      setTimeout(() => {
          setalert(null);
      }, 1500);
  }
  const toggleMode =() =>{
    if ( mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode is enabled","Success")
      document.title='TextUtility~Dark mode'
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled","Success")
      document.title='TextUtility~light mode'
    }
  }
    return (
      <>
    <Router>
      <Navbar title="Textutility" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <Switch>
          <Route path="/about">
            <Textform heading="Grow biceps" mode={mode} showAlert={showAlert} />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
