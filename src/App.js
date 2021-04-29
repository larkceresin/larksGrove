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

function App() {
  return (
    <>
      <header className="header">
        <a href="/"><img src={logo} alt="Lark's Grove" className="logo header__image" /></a>
        <h1 className="section__heading section__heading_welcome">Welcome to the grove!</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Welcome />
          <About />
          <Contact />
          <Footer />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/portfolio/web">
    <p>Hello</p>
        </Route>
        <Route path="/portfolio/uiux">

        </Route>
        <Route path="/*">
          <NotFound/>
        </Route>
      </Switch>
    </>
  )
  /*return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Welcome/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <UnderConstruction />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/webProjects">
          <UnderConstruction />
        </Route>
        <Route path="/uiux">
          <UnderConstruction />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );*/
}

export default App;
