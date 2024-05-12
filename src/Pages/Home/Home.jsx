import React from 'react';
import Slider from '../../Components/Slider/Slider'
import RecentBlog from '../../Components/RecentBlog/RecentBlog';
import FamousDirector from '../../Components/FamousDirector/FamousDirector';
import FanReview from '../../Components/FanReview/FanReview';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <RecentBlog></RecentBlog>
            <FamousDirector></FamousDirector>
            <FanReview></FanReview>
        </div>
    );
};

export default Home;