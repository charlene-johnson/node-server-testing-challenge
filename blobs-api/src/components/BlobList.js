import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import{Button, Grid, Typography, Card, CardContent} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formGridItem: {
      margin: ".5em",
    },
    button: {
      ...theme.typography.buttons,
      fontSize: "1.5rem",
      marginTop: "1em",
    },
    heading: {
      color: theme.palette.common.darkGreen,
    },
    root: {
      minWidth: 500,
      height: 300,
    },
    blobs: {
      color: theme.palette.common.darkestGreen
    },
    image: {
        maxWidth: 500,
        height: 250,
    }
  }));

  export default function BlobList(props) {
      const [blobs, setBlobs] = useState([])
      const classes = useStyles();

      useEffect(() => {
          const getBlobs = () => {
            axios
                .get("http://localhost:6060/api/blobs/")
                .then(res => {
                    setBlobs(res.data)
                    console.log(res)
                })
                .catch(err => console.log(err))
          }
          getBlobs();
      })

      return(
          <>
          <Typography variant ="h3" align="center" className={classes.heading}>
              Blob List
          </Typography>
          <Grid container direction="row" justify="center" alignItem="center">
              {blobs.map((blob, key) => {
                  return(
                      <>
                      <Grid item className={classes.formGridItem}>
                        <Card className={classes.root}>
                            <CardContent>
                                <div className="blobs" key={key}>
                                    <Typography variant="h4" className={classes.blobs}>
                                       {blob.name}
                                    </Typography>
                                    <img className ={classes.image} alt="blobs" src={blob.picture}/>
                                </div>
                            </CardContent>
                        </Card>
                      </Grid>
                    </>
                  )
              })}
          </Grid>
          <Link to={"/addblob"} style={{textDecoration: "none"}}>
              <Grid container direction="column" justify="center" alignItems="center">
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    >
                        Add A Blob!
                    </Button>
              </Grid>
          </Link>
          </>
      )
  }