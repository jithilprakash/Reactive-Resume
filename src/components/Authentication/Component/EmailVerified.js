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

import EmailVerificationImage from "../../../assets/images/emailVerification.png";

const useStyles = makeStyles({
    root: {
        // maxWidth: 500,
        marginTop: 50
    },
});

export default function EmailVerified() {
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
                            height="70"
                            image={EmailVerificationImage}
                            title="Contemplative Reptile"
                        />
                        <CardContent>

                            <Typography variant="body2" color="textSecondary" component="p">
                                Verifying your email. You will be redirected to home page after successful verification
          </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                    </CardActions>
                </Card>
            </Container>
        </React.Fragment>
    );
}
