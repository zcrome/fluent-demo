import React, { Component } from 'react';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Button from "react-uwp/Button";
import TextBox from "react-uwp/TextBox";
import * as PropTypes from 'prop-types';
import PasswordBox from "react-uwp/PasswordBox";
import AutoSuggestBox from "react-uwp/AutoSuggestBox";

const baseStyle: React.CSSProperties = {
  margin: "10px 10px 10px 0"
};



// class MyComponent extends Component {
//   static contextTypes = { theme: PropTypes.object };

//   render() {
//     const { theme } = this.context;
//     const rootStyles = theme.prefixStyle({
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center"
//     });

//     return (
//       <div style={rootStyles}>
//         <Button tooltip='Mini Tooltip'>Boton 1</Button>
//         <TextBox placeholder='Type some shit'></TextBox>
//       </div>
//     )
//   }
// }


class LoginComponent extends Component {

  static contextTypes = { theme: PropTypes.object };

  render() {
    const { theme } = this.context;
    const itemStyle = theme.prefixStyle({
      color: theme.baseHigh,
      fontSize: 14,
      fontWeight: "lighter",
      textAlign: "center",
      width: "30%",
      height: "30%",
      margin: 10,
      outline: "none",
      border: `1px solid ${theme.listAccentLow}`,
      overflow: "auto",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: "auto"
    });
    return (
      <div
        style={theme.prefixStyle({
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: "160px 0",
          background: theme.desktopBackground
        })}
      >
        <span style={{ ...itemStyle, background: theme.acrylicTexture40.background }}>
        <p
        style={theme.prefixStyle({
          "fontSize": "6em",
          "position": "relative",
          "top": "50%",
          "left": "50%",
          "transform": "translate(-50%, -50%)"
        })}>14:40</p>
        <p
        style={theme.prefixStyle({
          "fontSize": "20px",
          "float": "left",
          "marginTop": "19%",
          "left": "16%",
          "display": "block",
          "position": "relative"
        })}>23 de septiembre del 2018</p>
        </span>
        
      </div>
    );
  }
}








class App extends Component {
  render() {
    return (
      <UWPThemeProvider
        theme={getTheme({
          themeName: "dark", // set custom theme
          accent: "#0078D7", // set accent color
          useFluentDesign: true, // sure you want use new fluent design.
          desktopBackgroundImage: 'https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg'
        })}
      >
        {/* <MyComponent /> */}
        <LoginComponent />
      </UWPThemeProvider>
    );
  }
}

export default App;
