import React from 'react';
import HeroSection from '../page/HeroSection/HeroSection';
import TaskManagement from '../page/TaskManagement/TaskManagement';
import Testimonials from '../page/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <TaskManagement></TaskManagement>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
