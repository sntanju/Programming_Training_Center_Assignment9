import React, { useEffect, useState } from 'react';
import './Cources.css'

const Cources = () => {

    const [cources, setCources] = useState([]);


    useEffect( () => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setCources(data))
    }, []);

    return (
        <div>
            <div className="cources">
                {
                    cources.map( (course) =>
                    
                        <div className="course">
                            <img src={course.img} alt="" />
                            <h2 className="text-success mt-3">{course.name}</h2>
                            <h4 className="text-primary mt-3">Price: ${course.price}</h4>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Cources;