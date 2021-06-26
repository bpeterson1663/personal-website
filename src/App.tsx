import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Experience, Projects, About, Contact, Home } from './pages'
import Header from './components/header/header.component'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/experience" exact component={Experience} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
