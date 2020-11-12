import React, {} from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import { AuthProvider, FirebaseProvider, FirestoreProvider } from './services';
import { RouteWithLayout } from './utilities';

import { BaseLayout } from './layouts';
import { HomePage, MessagesPage, ArtistPage, PokemonsPage, ArtistDetailPage} from './pages';

import * as Routes from './routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <FirebaseProvider>
        <AuthProvider>
          <FirestoreProvider>
            <Router basename={'/eindwerk-JaimyVanGyseghem'}>
              <Switch>
                <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
                <Redirect from={Routes.HOME} to={Routes.LANDING}/>
                <RouteWithLayout exact path={Routes.INFO} layout={ BaseLayout } component={ MessagesPage }/>
                <RouteWithLayout exact path={Routes.CAMPING} layout={ BaseLayout } component={ ArtistPage }/>
                <RouteWithLayout exact path={Routes.ARTIST_DETAIL} layout={ BaseLayout } component={ ArtistDetailPage }/>
                <RouteWithLayout exact path={Routes.TICKETS} layout={ BaseLayout } component={ PokemonsPage }/>
              </Switch>
            </Router>
          </FirestoreProvider>
        </AuthProvider>
      </FirebaseProvider>
    </div>
  );
}

export default App;
