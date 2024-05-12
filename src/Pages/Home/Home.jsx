import React from 'react';
import Slider from '../../Components/Slider/Slider'
import RecentBlog from '../../Components/RecentBlog/RecentBlog';
import FamousDirector from '../../Components/FamousDirector/FamousDirector';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <RecentBlog></RecentBlog>
            <FamousDirector></FamousDirector>
        </div>
    );
};

export default Home;