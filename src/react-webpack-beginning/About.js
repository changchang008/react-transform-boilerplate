import React, { Component } from 'react';
import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import GitHubInfo from './user/GitHubInfo';

class About extends Component {
  constructor(porps){
    super(porps);
    this.state = {
      gitHubInfo: {}
    };
  }

  _handleSubmit(e){
    e.preventDefault();
    const account = this.refs.account.getValue();
    axios.get(`https://api.github.com/users/${account}`)
      .then((res) => {
        this.setState({
          gitHubInfo: res.data
        });
        console.log(res.data);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render(){
    let styles = {
      card:{
        padding:'10'
      }
    };
    let gitHubInfoContent;
    if(!isEmpty(this.state.gitHubInfo)){
      gitHubInfoContent = ( <GitHubInfo gitHubInfo={this.state.gitHubInfo} /> );
    }
    return(
      <div className="about">
        <Card className='card' style={styles.card}>
          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField ref="account" hintText="GitHub account"/>
            <FlatButton label="查询" primary={true} type='submit'/>
          </form>
          {gitHubInfoContent}
        </Card>
      </div>
    );
  }
}

export default About;
