import React from 'react';
import {Menu} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import {AppBar, Button, IconButton, Toolbar} from "@material-ui/core";

const NavBar = () => {
    return (
        <div>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge={"start"} color={"inherit"} aria-label={"Menu"}>
                        <Menu/>
                    </IconButton>
                    <Typography align={"center"} variant={"h3"} style={style}>
                        Factos
                    </Typography>
                    <Button color={"inherit"}>Login</Button>
                </Toolbar>
            </AppBar>

        </div>
    );
};

const style = {
    flexGrow: 1
}

export default NavBar;