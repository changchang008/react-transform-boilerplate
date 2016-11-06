import React, {Component} from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavBar extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      appUrl: 'home'
    };
  }

  componentWillMount(){
    let val = 'home';
    if(this.context.router.isActive('/home')){
      val = 'home';
    }else if(this.context.router.isActive('/account')){
      val = 'account';
    }else if(this.context.router.isActive('/about')){
      val = 'about';
    }
    this.setState({
      appUrl: val
    });
  }

  _handleChange(value){
    //console.log(this.context.router);
    this.context.router.push(value);
    this.setState({
      appUrl: value
    });
  }
/*
  componentWillReceiveProps(){
    this.setState({
      value: value;
    });
  }
  */
  render(){
    let styles = {
      tabs: {
        width: '500px',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
      },
    };
    return(
      <Tabs value={this.state.appUrl} onChange={this._handleChange.bind(this)} style={styles.tabs} inkBarStyle={styles.inkBar}>
        <Tab style={styles.tab} value="home" label="Home" />
        <Tab style={styles.tab} value="account" label="Account" />
        <Tab style={styles.tab} value="about" label="About" />
      </Tabs>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavBar;
