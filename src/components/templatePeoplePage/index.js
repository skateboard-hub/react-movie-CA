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
      </Grid>
    </>
  );
};

export default TemplatePeoplePage;