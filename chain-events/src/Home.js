import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className="home">
            <Banner/>
            <div className='home__section'>
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
            <div className='home__section'>
            {/* <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            /> */}
            </div>
        </div>
        
    )
}

export default Home
