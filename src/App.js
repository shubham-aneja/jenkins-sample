import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import  {TextField, RaisedButton} from 'material-ui';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App" style={{}}>
          <div className={"div_row div_align_center"}><span>Name</span><TextField /></div>
          <div className={"div_row div_align_center"}><span>Email</span><TextField type={"email"}/></div>
          <RaisedButton label={"Submit"}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
