import React from 'react';
import { useState, useEffect } from 'react';
import './Course.css'


const Course = () => {

    const [course, setCourse] = useState([]);


    useEffect( () => {
        fetch('./course.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, []);


    return (
        <div>
        <div className="single-course">
            {
                course.map( (course) =>
                
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