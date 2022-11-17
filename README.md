# Assignment 1 - ReactJS app.

Name: Shunyi Xu

## Overview.

A movie app based on React and Mui

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

+ Three new views
+ Multiple Parameterised URLs
+ Three parameterised endpoints
+ New filter based on the gender of people
+ Extensive data hyperlinking
+ Simple responsive authentication
+ New material UIcompents
+ Responsive UI
+ Pagination
+ SlideShow

## API endpoints.

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Get the list of popular people on TMDB -person/popular
+ Get the primary person details by id - person/:id
+ Get the top rated movies on TMDB -movie/top-rated

## New Routing.

+ /popular/:page - display popular people.
+ /peoples/:id - detail view of a person with the films for which they are famous.
+ /topRated/:page - display top rated movies.

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

+ Slideshow:
File:
    src/components/templatePeoplePage
    src/components/templateMoviePage
Illustrate:
    I use React-Slick components to implement slideshow in the movie and people details pages. I install the package and design the settings. Every time the app get the images through API, it will choose the top three images and form the slideshow.
References:
    https://blog.csdn.net/qq_39341415/article/details/120472310
    