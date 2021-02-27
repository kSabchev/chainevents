import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

import childrengames from "./childrengames.jpg";
import conecrt from "./concert.jpg";
import drawing from "./drawing.jpg";
import monopoly from "./monopoly.jpg";
import openbasket from "./openbasket.jpg";
import openfootbal from "./openfootbal.jpg";
import opentenis from "./opentenis.jpg";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 particpants</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img={childrengames}
        location="NDK Sofia"
        title="Open event for children."
        description="Open event · Outdoors · Include the whole family · Family friendly · Covid safe environment · Free parking "
        star={4.73}
        price="10BGN / day"
        total="10BGN total"
      />

      <SearchResult
        img={conecrt}
        location="Mixtape-9"
        title="Weekly concert evenets. Check out our program."
        description="Open event · Outdoors · Include the whole family · Meet new people · Covid safe environment · Free parking "
        star={4.9}
        price="20BGN / night"
        total="20BGN total"
      />

      <SearchResult
        img={drawing}
        location="Liulin 8, Sofia"
        title="Lets learn to draw together!"
        description="Open event · Outdoors · Include the whole family · Meet new people · Covid safe environment · Free parking "
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
    </div>
  );
}

export default SearchPage;
