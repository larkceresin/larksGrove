import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import { Route, Switch } from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome'
import logo from './images/logo.jpg';
import Massage from './components/Massage';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Welcome />
          <About />
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/portfolio/web">
    <p>Hello</p>
        </Route>
        <Route path="/portfolio/uiux">
<p>Designs Here!</p>
        </Route>
        <Route exact path="/massage">
<Massage/>
        </Route>
        <Route path="/*">
          <NotFound/>
        </Route>
      </Switch>
      <Footer/>
    </>
  )

}

export default App;
