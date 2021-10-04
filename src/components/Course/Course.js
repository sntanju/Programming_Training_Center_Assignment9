import React from 'react';
import { useState, useEffect } from 'react';
import './Course.css'


const Course = () => {

    const [course, setCourse] = useState([]);  //Set Data In A State For Course Router


    useEffect( () => {      //Loaded Data From API(Fake Data) for Course Router
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, []);


    return (
        <div>
        <h2 className="text-info bg-black ms-3 me-3 p-3">List Of Our All Courses</h2>
        <div className="single-course">
            {
                course.map( (course) =>  //Use Map For Displaying Courses Router in UI
                
                    <div className="each-course">
                        <div>
                        <img src={course.img} alt="" />
                        </div>
                        <div>
                        <h2 className="text-success mt-3">{course.name}</h2>
                        <h4 className="text-primary mt-3">Price: ${course.price}</h4>
                        <button className="detail-btn">Course Details</button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    );
};

export default Course;