import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../Header';
import Footer from '../Footer';
import BuildHistory from '../Build-history';
import StartScreen from '../Start-screen';
import Settings from '../Settings';

export default function App() {
  const settings = useSelector((state) => state.customer.settings);
  const isSettingsSet = settings.repositoryName && settings.buildCommand;

  const currentRepository = 'philip1967/my-awesome-repo';
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/settings">
            <Header option={'settings'} />
          </Route>
          <Route path="/">
            {isSettingsSet ? (
              <Header option={'build'} />
            ) : (
              <Header option={'start'} />
            )}
          </Route>
        </Switch>
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            {isSettingsSet ? (
              <BuildHistory repositoryName={currentRepository} />
            ) : (
              <StartScreen />
            )}
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
