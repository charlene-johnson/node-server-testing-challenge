import React, {useState, useEffect} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography, Button} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formGridItem: {
      margin: ".5em",
    },
    logoContainer: {
      padding: 0,
      textTransform: "none",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    subtitle: {
        color: theme.palette.common.darkestGreen
    }
  }));


export default function Welcome() {
    const [welcome, setWelcome] = useState([])
    const classes = useStyles();

    useEffect(() => {
        const getWelcome = () => {
            axios
            .get("http://localhost:6060/")
            .then((res) => {
                setWelcome(res.data)
            })
            .catch(err => console.log(err))
        }
        getWelcome();
    })
    return(
        <>
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item className={classes.formGridItem}>
                <Typography variant="h1">{welcome.message}</Typography>
            </Grid>
        </Grid> 
        </>
    )
}