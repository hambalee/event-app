import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { colors } from "@material-ui/core";

/* const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
})); */
/* 
export default function NavBar() {
  const classes = useStyles();

  return (
    
  );
} */

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  render() {
    const mystyle = {
      root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
      },
    };
    return (
      <div>
        <AppBar position="static" style={mystyle.root}>
          <Toolbar>
            <Typography variant="h6" style={mystyle.title}>
              Event
            </Typography>
            <Link to="/">
              <Button style={{ color: "white" }}>Home</Button>
            </Link>
            {this.state.isLogin && (
              <Link to="/login" underlineNone>
              <Button style={{ color: "white" }}>Log in</Button>
            </Link>
            )}
            {!this.state.isLogin && (
              <Link to="/logout" underlineNone>
              <Button style={{ color: "white" }}>Log out</Button>
            </Link>
            )}
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
