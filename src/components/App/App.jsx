import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import BuildHistory from '../Build-history';
import StartScreen from '../Start-screen';
import Settings from '../Settings';

export default function App() {
  const [settings, setSettings] = useState(
    JSON.parse(localStorage.getItem('settings')) || {}
  );
  const isSettingsSet = settings.repositoryName && settings.buildCommand;

  const currentRepository = 'philip1967/my-awesome-repo';
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route path="/settings">
            <Header option={'settings'} settings={settings} />
          </Route>
          <Route path="/">
            {isSettingsSet ? (
              <Header option={'build'} settings={settings} />
            ) : (
              <Header option={'start'} settings={settings} />
            )}
          </Route>
        </Switch>
        <Switch>
          <Route path="/settings">
            <Settings changeSettings={setSettings} />
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
