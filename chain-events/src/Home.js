import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import childrengames from "./childrengames.jpg";
import conecrt from "./concert.jpg";
import drawing from "./drawing.jpg";
import monopoly from "./monopoly.jpg";
import openbasket from "./openbasket.jpg";
import openfootbal from "./openfootbal.jpg";
import opentenis from "./opentenis.jpg";
import logo from "./logo.png";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src={logo}
          title="Our mission is to encourage people to participate in more local events and help the institutions provide better accomodation during them."
          description="During the era of telecomunications we are losing the ability to comunicate. Our goal is to help facilitate more events for our local town."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.pexels.com/photos/186241/pexels-photo-186241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Track and field events!"
          description="Bringing the sport to the community."
        />
        <Card
          src="https://media.istockphoto.com/photos/exhibition-of-electronics-in-kiev-ukraine-picture-id626176392?b=1&k=6&m=626176392&s=170667a&w=0&h=YyeMM7OTmFZFsAOB4W-amOZd0KUVTLlqrSZVpl2DfUE="
          title="Gaming events"
          description="Get access to the major gaming events near by."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Culture events and exchange programs"
          description="Get the ultimate experience."
        />
      </div>
      <div className="home__section">
        <Card
          src={childrengames}
          title="Open event for children."
          description="Let your kids play in covid free environment."
        />
        <Card
          src={conecrt}
          title="Weekly concert events"
          description="Currently only online. Expect more soon."
        />
        <Card
          src={drawing}
          title="Lets learn to draw together!"
          description="Enjoy a quiet and piecefull afternoon drawing with us."
        />
        <Card
          src={monopoly}
          title="Board games night with friends."
          description="Enjoy a quiet night of board games. This week is monopoly"
        />
      </div>

      <div className="home__section">
        <Card
          src={openbasket}
          title="Join our local basketball club"
          description="We play every weekend! Show us your dunk skills!"
        />
        <Card
          src={openfootbal}
          title="Join our local football club"
          description="Open trainings every monday and thursday evenings. Join us."
        />
        <Card
          src={opentenis}
          title="Join our local tennis club!"
          description="Opening the new seaon. Starting 13.03.2021."
        />
      </div>
    </div>
  );
}

export default Home;
