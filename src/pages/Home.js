import React from 'react';
import Navbar from '../components/Navbar';
import ReactionTest from '../components/ReactionTest';
import Statistics from '../components/Statistics';

const Home = () => (
    <div>
        <Navbar />
        <div className="flex flex-col items-center justify-center p-4">
            <ReactionTest />
            <div className="flex gap-4 mt-4">
                <Statistics />
            </div>
        </div>
    </div>
);

export default Home;
