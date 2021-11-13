import React from 'react';
import "./Card.css"


const Card = ({ id, name, email, pic, company, skill, grades }) => {
    const average = gradesArr => gradesArr.reduce((sum, grade) =>
        parseInt(sum) + parseInt(grade), 0) / gradesArr.length;
    const result = average(grades); // 5
    return (
        <div className="box" >
            <div className="row align-items-center" >
                <div className="col col-xl-4 col-lg-4 col-md-4 col-sm-4 colums">
                    <img
                        alt={name}
                        src={pic} 
                    />
                </div>
                <div className="col col-xl-5 col-lg-5 col-md-5 col-sm-5 colums" >
                    <div className="row align-items-center" id="studentName">
                        <h1> {name} </h1>
                    </div>
                    <div className="row align-items-center" id="studentDetails">
                        <ul className="details">
                            <li>Email: {email}</li>
                            <li>Company: {company}</li>
                            <li>Skill: {skill}</li>
                            <li>Average: {result}</li>
                        </ul>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Card