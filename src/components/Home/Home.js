import React from 'react';
import Cources from '../Cources/Cources';


const Home = () => {
    return (
        <div>
            <div>
                <section>
                    <div className="bg-black p-3 ms-1 me-1">
                    <h3 className="text-info" >A Professional Training Center For Getting Expert In IT Sector</h3>
                    <h5 className="text-warning" ><span>&#9755;</span> Your Trust, Our Survice</h5>
                    </div>
                    <div>
                    <h3 className="top-courses-heading">Top Rated Courses</h3>
                    </div>
                </section>
            </div>
            <Cources></Cources>  
        </div>
    );
};

export default Home;