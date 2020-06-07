import React, { useEffect, useContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from "../context/AppContext";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function LoaderScreen() {
    const classes = useStyles();
    const context = useContext(AppContext);
    const { state } = context;

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        
        const loaderState = state.appState
        setOpen(loaderState)
    }, [])

    return (
        <div>
            <Backdrop className={classes.backdrop} open={state.appState} onClick={handleClose}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
