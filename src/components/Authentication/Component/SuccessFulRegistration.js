import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import SuccessImage from "../../../assets/images/success.png";

const useStyles = makeStyles({
    root: {
        // maxWidth: 500,
        marginTop: 50
    },
});

export default function SuccessfulRegistration() {
    const classes = useStyles();
    return (
        <React.Fragment>
            {/* <CssBaseline /> */}
            <Container maxWidth="sm">
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={SuccessImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Thank you for registering with us. Please verify your email address and you are good to get started
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary">
                            Resend Email
        </Button>
                        <Button size="small" color="secondary">
                            Go to Sign up
        </Button>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}
