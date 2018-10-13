import React, { Component } from 'react';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Button from "react-uwp/Button";
import TextBox from "react-uwp/TextBox";
import * as PropTypes from 'prop-types';

class MyComponent extends Component {
  static contextTypes = { theme: PropTypes.object };

  render() {
    const { theme } = this.context;
    const rootStyles = theme.prefixStyle({
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    });

    return (
      <div style={rootStyles}>
        <Button tooltip='Mini Tooltip'>Boton 1</Button>
        <TextBox placeholder='Type some shit'></TextBox>
      </div>
    )
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
          desktopBackgroundImage: 'https://www.react-uwp.com/HEAD/static/images/dark-40.1vqE3.png'
        })}
      >
        <MyComponent />
      </UWPThemeProvider>
    );
  }
}

export default App;
