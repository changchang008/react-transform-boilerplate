import React, {Component} from "react";
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';
let SelectableList = SelectableContainerEnhance(List);
//SelectableList = wrapState(SelectableList);

class NavBarLeft extends Component {
  constructor(props){
    super(props);
    this.state = {toggle: false};
  }

  handleToggle(){
    this.setState({toggle: !this.state.toggle});
  }

  _handleUpdateSelectedIndex(e, value){
    console.log(value);
    this.setState({appUrl: value});
    this.context.router.push(value);
    this.handleToggle();
  }

  render(){
    return(
      <LeftNav
        docked={false}
        onRequestChange={this.handleToggle.bind(this)}
        open={this.state.toggle}>
          <SelectableList
          value={this.state.appUrl}
          valueLink={{value:this.state.appUrl, requestChange: this._handleUpdateSelectedIndex.bind(this)}}
          >
            <ListItem value="home" primaryText="Home" />
            <ListItem value="account" primaryText="account" />
            <ListItem value="about" primaryText="About" />
          </SelectableList>
        </LeftNav>
    );
  }
}

NavBarLeft.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default NavBarLeft;
