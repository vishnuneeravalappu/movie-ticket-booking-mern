import React from "react";
import { useStyles } from "./movie-card-styles";
import {
  Rating,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Fab,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";

interface IMovieCard {
  shouldShowRating?: boolean;
}

export const MovieCard: React.FC<IMovieCard> = ({
  shouldShowRating = true,
}) => {
  const { classes } = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <div className={classes.cardBody}>
        <CardMedia
          component="img"
          height="230"
          className={classes.cardImage}
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <Fab size="small" aria-label="like" className={classes.bookmark}>
          <Favorite fontSize="small" />
        </Fab>
        {shouldShowRating && (
          <div className={classes.cardRatingsBox}>
            <Rating size="small" value={4} />
          </div>
        )}
      </div>
      <CardContent className={classes.cardFooter}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className={classes.cardSubHeading}
        >
          Lizard
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Lizards are a widespread
        </Typography>
      </CardContent>
    </Card>
  );
};
