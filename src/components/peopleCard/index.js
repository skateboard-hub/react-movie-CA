import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import React from "react";
import CardHeader from "@mui/material/CardHeader";

export default function PeopleCard({ people }) {

  return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title={
          <Typography variant="h5" component="p">
            {people.name}{" "}
          </Typography>
        }
      />
          <CardMedia
            sx={{ height: 400 }}
            image={
              people.profile_path
                ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                : img
            }
          />
          <CardContent>
            <Grid container>
                <Typography variant="h6" component="p">
                  popularity:{people.popularity}
                </Typography>
            </Grid>
          </CardContent>
          <CardActions disableSpacing>
          <Link to={`/peoples/${people.id}`}>
              <Button variant="outlined" size="medium" color="primary">
                More Info ...
              </Button>
            </Link>
          </CardActions>
        </Card>
      );
    }