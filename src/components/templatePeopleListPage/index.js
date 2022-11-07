import React, { useState } from "react";
import FilterCard from "../filterPeoplesCard";
import PeopleList from "../peopleList";
import Grid from "@mui/material/Grid";
import Header from "../headerMovieList";

function PeopleListPageTemplate({ peoples, title }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedPeoples = peoples
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <PeopleList peoples={displayedPeoples}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeopleListPageTemplate;