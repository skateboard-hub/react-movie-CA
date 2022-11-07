import React from "react";
import { getPeoples } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PeoplePageTemplate from '../components/templatePeopleListPage';


const PeopleListPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getPeoples)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const peoples = data.results;

  return (
    <PeoplePageTemplate
    title="Popular Peoples"
    peoples={peoples}
    />
  );
};
export default PeopleListPage;