import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import Chats from './Components/Chats/Chats';
import ChatScreen from './Components/ChatScreen/ChatScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <Card />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
