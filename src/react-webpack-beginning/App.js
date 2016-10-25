import React, { Component } from 'react';
import NavBar from './shared/NavBar';
import LeftNav from './shared/NavBarLeft';
import AppBar from 'material-ui/lib/app-bar';
import './styles/main.scss';

class App extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

    let setNavBarState = function(){
      this.setState({
        renderNavBar: document.body.clientWidth > 1200 ? true :false
      });
    }.bind(this);
    setNavBarState();
    window.onresize = setNavBarState;
  }

  _onLeftIconButtonTouchTap(){
    this.refs.leftNav.handleToggle();
  }
  render(){
    return(
      <div className="app-wrap">
        <LeftNav ref="leftNav" />
        <header>
        {this.state.renderNavBar
        ?
          <NavBar />
        :
          <AppBar
            onLeftIconButtonTouchTap = {this._onLeftIconButtonTouchTap.bind(this)}
            />
        }
        </header>
        <div className="app-content">
        {this.props.children}
        </div>
        <div className="app-footer"> app footer</div>
      </div>
    );
  }
}

export default App;
