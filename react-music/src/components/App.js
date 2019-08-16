import React, { Component } from 'react';
import Recommend from './recommend/Recommend'
import Ranking from './ranking/Ranking'
import Search from './search/Search'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom'
import MusicPlayer from '@/components/play/MusicPlayer'
import '@/assets/stylus/reset.styl'
import '@/assets/stylus/font.styl'
import logo from '@/assets/images/logo.png'
import './App.styl';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <img src={logo} alt="logo" className="app-logo" />
            <h1 className="app-title">React_Music</h1>
          </header>
          <div className="music-tab">
            <div className="tab-item selected">
              <NavLink to="/recommand" className="nav-link">
                <span>推荐</span>
              </NavLink>
            </div>
            <div className="tab-item selected">
              <NavLink to="/ranking" className="nav-link">
                <span>排行榜</span>
              </NavLink>
            </div>
            <div className="tab-item selected">
              <NavLink to="/search" className="nav-link">
                <span>搜索</span>
              </NavLink>
            </div>
          </div>
          <div className="music-view">

            <Switch>
              <Route path="/recommend" component={Recommend} />
              <Route path="/ranking" component={Ranking} />
              <Route path="/search" component={Search} />
              <Redirect from='/' to='recommend' />
              <Route component={Recommend} />
            </Switch>
          </div>
          <MusicPlayer />
        </div>
      </Router>
    );
  }
}

export default App;
