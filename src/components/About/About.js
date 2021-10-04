import React from 'react';
import './Abou.css'

const About = () => {


    return (
        <div className="about">
            <div  className="about-us">
            <h5 className="mt-5"><b>About us</b></h5>
            <br />
            <br />
            
            {/* Our Mission, Vision and Goals Written Here */}

            <h3>Working for the IT Industry</h3>
            <p>
           Programming Training Center has always been passionatly working for the betterment of IT industry. We want to grow skilled IT professionals who will rock the world with their extraordinary professionalism. As part of our mission, we arrange programming contest, software engineering events and seminars. We believe in hard core industry specialization to grow the top 10% IT professionals in the country and around the globe.
            </p>
            <br />
            <h3>Why Chose Programming Training Center:</h3>
            <h4>Real World Project Development</h4>
            <p>Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.</p>
            <br />
            <h4>Follow Latest Industry Standard Tools and Techniques</h4>
            <p>Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge.</p>
            <br />
            <h4>Build Solid Foundations</h4>
            <p>Successful Careers depend on a solid mastery of the fundamentals. Build a solid foundations on the essential programming skills and knowledge</p>
            <h4>Learn Teamwork and Collaboration</h4>
            <p>Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.</p>
            </div>
            <div className="mt-5 image-part">
                <img className="m-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-frbkJvxQCaLOiVNEXbBpzi_5JlofBcWC6g&usqp=CAU" alt="" />
                
            </div>

        </div>
    );
};

export default About;