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
                    <div className={"div_row div_align_center"}>
                        <TextField floatingLabelText="Name"/>
                    </div>
                    <div className={"div_row div_align_center"}>
                        <TextField type={"email"}  floatingLabelText="Email"/>
                    </div>
                    <RaisedButton label={"Submit"}/>
                </div>
            </MuiThemeProvider>
        );
    }
}


console.log('sample change1 for jenkins github shubham-aneja trigger git1')
export default App;
