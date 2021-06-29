import React from 'react'
import { Route, Switch, BrowserRouter, useLocation } from 'react-router-dom'
import { Experience, Projects, About, Contact, Home } from './pages'
import Header from './components/header/header.component'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

const AnimationApp = () => {
  const location = useLocation()

  return (
    <>
      <Header />
      <TransitionGroup component={null}>
        <CSSTransition appear key={location.key} classNames="fade" timeout={500}>
          <Switch location={location}>
            <Route path="/experience" exact component={Experience} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="*">
            <AnimationApp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
