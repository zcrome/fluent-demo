import React, { Component } from 'react';
import './App.css';
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Button from "react-uwp/Button";
import TextBox from "react-uwp/TextBox";
import * as PropTypes from 'prop-types';
import PasswordBox from "react-uwp/PasswordBox";
import AutoSuggestBox from "react-uwp/AutoSuggestBox";

import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";
// import Content from "./components/Content";

import { FadeInOut, SlideInOut, ScaleInOut, CustomAnimate } from "react-uwp/Animate";


const baseStyle: React.CSSProperties = {
  margin: "10px 10px 10px 0"
};



class LoginEmailComponent extends Component {

  static contextTypes = { theme: PropTypes.object };

  handleClick() {
    console.log("HALO!");
  }


  render() {

    const baseStyle: React.CSSProperties = {
      margin: 10
    };

    const defaultBtnStyle: React.CSSProperties = {
      margin: 4
    };

    const { theme } = this.context;
    const itemStyle = theme.prefixStyle({
      color: theme.baseHigh,
      fontSize: 14,
      fontWeight: "lighter",
      textAlign: "center",
      width: "40%",
      height: "40%",
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
              "display": "block",
              "position": "relative",
              "fontSize": "6em",
              "top": "25%",
              "left": "11%",
              "width": "100%",
              "margin": "0",
              "textAlign": "left"
            })}>Log In</p>



          <TextBox
            style={theme.prefixStyle({
              "display": "block",
              "position": "relative",
              "top": "35%",
              "left": "10%",
              "width": "80%",
              "height": "120px"
            })}
            placeholder="Ingrese email"
          />


          <Button onClick={this.handleClick} style={
            {
              fontSize: 32,
              ...defaultBtnStyle,
              "marginTop": "26%",
              "left": "67%",
              "display": "block",
              "position": "relative",
              "width": "28%",
              "marginTop": "32%",
              "height": "100px",
              "fontSize": "4em"
            }}>
            Siguiente
        </Button>

        </span>
      </div>
    );
  }
}



class IdleViewComponent extends Component {

  static contextTypes = { theme: PropTypes.object };

  handleClick() {
    console.log("HALO!");
  }


  render() {

    const baseStyle: React.CSSProperties = {
      margin: 10
    };

    const defaultBtnStyle: React.CSSProperties = {
      margin: 4
    };

    const { theme } = this.context;
    const itemStyle = theme.prefixStyle({
      color: theme.baseHigh,
      fontSize: 14,
      fontWeight: "lighter",
      textAlign: "center",
      width: "40%",
      height: "40%",
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
              "fontSize": "18em",
              "position": "relative",
              "top": "50%",
              "left": "50%",
              "transform": "translate(-50%, -50%)"
            })}>14:40</p>
          <p
            style={theme.prefixStyle({
              "fontSize": "3em",
              "float": "left",
              "marginTop": "19%",
              "left": "36%",
              "display": "block",
              "position": "relative"
            })}>23 de septiembre del 2018</p>

          <Button onClick={this.handleClick} style={{
            fontSize: 32, ...defaultBtnStyle, "marginTop": "26%",
            "left": "32%",
            "display": "block",
            "position": "relative",
            "width": "40%",
            "height": "12%", "fontSize": "4em"
          }}>
            Iniciar Sesion
        </Button>

        </span>
      </div>
    );
  }
}








class ProjectsView extends Component {

  static contextTypes = { theme: PropTypes.object };

  handleClick() {
    console.log("HALO!");
  }


  render() {

    const navigationTopNodes = [
      <SplitViewCommand label="Mis Casos" icon={"\uED43"} />,
      <SplitViewCommand label="Compartidos" icon={"\uE72D"} />,
      <SplitViewCommand label="Papelera" icon={"\uE74D"} />
    ];

    const navigationBottomNode = [
      <SplitViewCommand label="Cerrar Sesión" icon={"\uE7E8"} />
    ];


    const baseStyle: React.CSSProperties = {
      margin: 10
    };

    const defaultBtnStyle: React.CSSProperties = {
      margin: 4
    };

    const { theme } = this.context;
    const itemStyle = theme.prefixStyle({
      color: theme.baseHigh,
      fontSize: 14,
      fontWeight: "lighter",
      textAlign: "center",
      width: "40%",
      height: "40%",
      margin: 10,
      outline: "none",

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
        <span style={{
          ...itemStyle,
          background: theme.acrylicTexture40.background,
          "marginBottom": "0px",
          "width": "1920px",
          "height": "1080px",
        }}>


          <NavigationView
            isControlled
            style={{
              ...baseStyle,
              margin: "0px"
            }}
            pageTitle="Jose Sanchez"
            displayMode="compact"
            autoResize={false}
            defaultExpanded
            navigationTopNodes={navigationTopNodes}
            navigationBottomNodes={navigationBottomNode}
            focusNavigationNodeIndex={2}
          >
            <div style={{
              "display": "block",
              "position": "relative",
              "width": "100%",
              "height": "100%"
            }}>
              <div className="topNavContainer">

                <div className="divisions">
                  <p className="topNavTitle">Mis Casos</p>
                </div>
                <div className="divisions"></div>

              </div>

              <div className="bottomNavContainer"></div>


            </div>



          </NavigationView>




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

        {/* <IdleViewComponent/> */}
        <ProjectsView />

      </UWPThemeProvider>
    );
  }
}

export default App;
