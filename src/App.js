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
import Icon from "react-uwp/Icon";


import TreeView, { TreeItem } from "react-uwp/TreeView";

import CheckBox from "react-uwp/CheckBox";
import Toggle from "react-uwp/Toggle";
import Slider from "react-uwp/Slider";
import DropDownMenu from "react-uwp/DropDownMenu";






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
      width: "800px",
      height: "500px",
      margin: 10,
      outline: "none",
      border: `1px solid ${theme.listAccentLow}`,
      overflow: "hidden",
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
              "fontSize": "2rem",
              "fontWeight": "600",
              "top": "32%",
              "left": "10%",
              "width": "100%",
              "margin": "0px",
              "textAlign": "left"
            })}>Log In</p>



          <TextBox
            style={theme.prefixStyle({
              "display": "block",
              "position": "relative",
              "top": "35%",
              "left": "10%",
              "width": "80%",
              "height": "50px"
            })}
            placeholder="Ingrese email"
          />


          <Button onClick={this.handleClick} style={
            {
              fontSize: 32,
              ...defaultBtnStyle,
              "marginTop": "37%",
              "left": "64%",
              "display": "block",
              "position": "relative",
              "width": "200px",
              "height": "60px",
              "fontSize": "30px"
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
      <SplitViewCommand className="leftMenuItemsTitles" label="Mis Casos" icon={"\uED43"} />,
      <SplitViewCommand className="leftMenuItemsTitles" label="Compartidos" icon={"\uE72D"} />,
      <SplitViewCommand className="leftMenuItemsTitles" label="Papelera" icon={"\uE74D"} />
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
          "width": "800px",
          "height": "800px",
        }}>


          <NavigationView
            isControlled
            style={{
              ...baseStyle,
              margin: "0px"
            }}
            topIcon={<Icon style={{ fontSize: "0" }}>ToggleThumb</Icon>}
            pageTitle={<p style={{ fontSize: "0" }}>NOMBRE</p>}
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
              "height": "100px"
            }}>
              <div className="topNavContainer">

                <div className="divisions-parent-left">
                  <p className="topNavTitle">Mis Casos</p>
                </div>

                <div className="divisions-parent-right">

                  <div className="divisions-left-cont">
                    <Button className="topSortButton" icon={"\uE8CB"}></Button>
                    <div className="topSortMargin"></div>
                    <Button className="topSortButton" icon={"\uE8CB"}></Button>
                  </div>

                  <div className="divisions-right-cont">
                    <TextBox
                      style={{
                        ...baseStyle,
                        margin: "0px",
                        "height": "50%",
                        "marginTop": "4%",
                        "width": "83%"
                      }}
                      background="none"
                      placeholder="Buscar"
                      leftNode={<Icon style={{ margin: "0 8px" }}>Search</Icon>}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={theme.prefixStyle({
              "overflowY": "scroll",
              "overflowX": "hidden",
              "height": "100%"
            })}>


              <div class="box"><Button className="box-project"><div className="box-project-image"><img className="box-project-img" src='https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg' alt="Smiley face" height="42" width="42"></img></div><div className="box-project-title"><p className="box-project-title-text">Name</p></div><div className="box-project-description"><p className="box-project-description-text">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, nullam neque justo facilisi eget hac fermentum.</p></div></Button></div>
              <div class="box"><Button className="box-project"><div className="box-project-image"><img className="box-project-img" src='https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg' alt="Smiley face" height="42" width="42"></img></div><div className="box-project-title"><p className="box-project-title-text">Name</p></div><div className="box-project-description"><p className="box-project-description-text">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, nullam neque justo facilisi eget hac fermentum.</p></div></Button></div>
              <div class="box"><Button className="box-project"><div className="box-project-image"><img className="box-project-img" src='https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg' alt="Smiley face" height="42" width="42"></img></div><div className="box-project-title"><p className="box-project-title-text">Name</p></div><div className="box-project-description"><p className="box-project-description-text">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, nullam neque justo facilisi eget hac fermentum.</p></div></Button></div>
              <div class="box"><Button className="box-project"><div className="box-project-image"><img className="box-project-img" src='https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg' alt="Smiley face" height="42" width="42"></img></div><div className="box-project-title"><p className="box-project-title-text">Name</p></div><div className="box-project-description"><p className="box-project-description-text">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, nullam neque justo facilisi eget hac fermentum.</p></div></Button></div>
              <div class="box"><Button className="box-project"><div className="box-project-image"><img className="box-project-img" src='https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg' alt="Smiley face" height="42" width="42"></img></div><div className="box-project-title"><p className="box-project-title-text">Name</p></div><div className="box-project-description"><p className="box-project-description-text">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, nullam neque justo facilisi eget hac fermentum.</p></div></Button></div>
              <div class="box"><Button className="box-project"><div className="box-project-image"><img className="box-project-img" src='https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg' alt="Smiley face" height="42" width="42"></img></div><div className="box-project-title"><p className="box-project-title-text">Name</p></div><div className="box-project-description"><p className="box-project-description-text">Lorem ipsum dolor sit amet consectetur adipiscing elit senectus, nullam neque justo facilisi eget hac fermentum.</p></div></Button></div>


            </div>




          </NavigationView>

          <div className="user-info-container">
            <div className="user-info-sub-container">
              <div className="user-profile-icon">
                {<Icon style={{ fontSize: "11em", "marginTop": "14%" }}>ToggleThumb</Icon>}
              </div>
              <div className="user-profile-name">
                <p>NOMBRE</p>
              </div>
            </div>
          </div>

        </span>
      </div>
    );
  }
}





class ProjectOpened extends Component {

  static contextTypes = { theme: PropTypes.object };

  handleClick() {
    console.log("HALO!");
  }

  static contextTypes = { theme: PropTypes.object };
  context: { theme: ReactUWP.ThemeType };
  state: ProjectOpened = {
    showHeaderIcon: false,
    showItemIcon: false,
    iconDirection: "left",
    itemHeight: 32
  };

  render() {

    const {
      showHeaderIcon,
      showItemIcon,
      iconDirection,
      itemHeight
    } = this.state;


    const navigationTopNodes = [

      <TreeView
        style={{ height: 640 }}
        iconDirection={iconDirection}
        itemHeight={itemHeight}
        headerIcon={showHeaderIcon && <Icon style={{ fontSize: itemHeight / 3 }}>FolderLegacy</Icon>}
        itemIcon={showItemIcon && <Icon style={{ fontSize: itemHeight / 3 }}>OpenFileLegacy</Icon>}
        listSource={[{
          title: "Buscar",
          children: [{
            title: "Imagenes",
          }]
        },{
          title: "Mis Materiales",
          children: []
        },{
          title: "Color Fondo",
          children: []
        }]}
        showFocus
      />

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
          "width": "854px",
          "height": "480px",
        }}>


          <NavigationView
            style={{
              ...baseStyle,
              "height": "480px",
              "margin": "0px",
              "overflow": "hidden"
            }}
            className="open-p-nav-view"
            pageTitle={<p style={{ fontSize: "16px" }}>José Sanchez</p>}
            displayMode="compact"
            autoResize={false}
            defaultExpanded
            background={theme.listLow}
            initWidth={48}
            navigationTopNodes={navigationTopNodes}
            navigationBottomNodes={navigationBottomNode}
            focusNavigationNodeIndex={3}
            isControlled
          >
            <div className="open-p-nav-view-content">
            
            </div>


          </NavigationView>




        </span>
      </div>
    );
  }
}








class LoginPasswordComponent extends Component {

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
      width: "800px",
      height: "500px",
      margin: 10,
      outline: "none",
      border: `1px solid ${theme.listAccentLow}`,
      overflow: "hidden",
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
              "fontSize": "2rem",
              "fontWeight": "600",
              "top": "32%",
              "left": "10%",
              "width": "100%",
              "margin": "0px",
              "textAlign": "left"
            })}>Contraseña</p>



          <TextBox
            style={theme.prefixStyle({
              "display": "block",
              "position": "relative",
              "top": "35%",
              "left": "10%",
              "width": "80%",
              "height": "50px"
            })}
            placeholder="Ingrese contraseña"
          />


          <Button onClick={this.handleClick} style={
            {
              fontSize: 32,
              ...defaultBtnStyle,
              "marginTop": "37%",
              "left": "64%",
              "display": "block",
              "position": "relative",
              "width": "200px",
              "height": "60px",
              "fontSize": "30px"
            }}>
            Ingresar
        </Button>

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
        {/* <LoginEmailComponent/> */}
        <LoginPasswordComponent/>
        {/* <IdleViewComponent/> */}
        {/* <ProjectsView /> */}
        {/* <ProjectOpened /> */}

      </UWPThemeProvider>
    );
  }
}

export default App;
