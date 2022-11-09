import React from "react";
import PeopleHeader from "../headerPeople";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import { getPeopleImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../css/swiper.css"
import KnownForCard from "../knownForCard/knownForCard";

const TemplatePeoplePage = ({ people, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: people.id }],
    getPeopleImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const settings = {
    dots: true,
    dotsClass:'slick-dots1',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = data.profiles
  let displayImages=[]
  if(images.length>3){
    for(let i=0;i<3;i++){
      displayImages.push(images[i]);
    }
  }
  else{
    displayImages=images;
  }

  const movie={
      "poster_path": "/spCAxD99U1A6jsiePFoqdEcY0dG.jpg",
      "adult": false,
      "overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source. Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
      "release_date": "2003-05-15",
      "original_title": "The Matrix Reloaded",
      "genre_ids": [
        12,
        28,
        53,
        878
      ],
      "id": 604,
      "media_type": "movie",
      "original_language": "en",
      "title": "The Matrix Reloaded",
      "backdrop_path": "/1jgulSytTJcATkGX8syGbD2glXD.jpg",
      "popularity": 3.41123,
      "vote_count": 2187,
      "video": false,
      "vote_average": 6.57
    }
  
  return (
    <>
      <PeopleHeader people={people} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <Slider {...settings}>
            
                {displayImages.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}

            </Slider>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
        <Grid item xs={3}>
            <KnownForCard movie={movie}/>
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePeoplePage;