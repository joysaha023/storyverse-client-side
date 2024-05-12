import React from 'react';
import Slider from '../../Components/Slider/Slider'
import RecentBlog from '../../Components/RecentBlog/RecentBlog';
import FamousDirector from '../../Components/FamousDirector/FamousDirector';
import FanReview from '../../Components/FanReview/FanReview';
import Newslatter from '../../Components/Newslatter/Newslatter';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <RecentBlog></RecentBlog>
            <FamousDirector></FamousDirector>
            <FanReview></FanReview>
            <Newslatter></Newslatter>
        </div>
    );
};

export default Home;