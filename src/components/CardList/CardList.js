import React from "react";
import './CardList.css'
import Card from "../Card/Card";

const CardList = ({ students }) => {

    return (
        <div id="cardlist" className="container">
            <div className="row align-items-center">
                {
                    students.map(student => {
                        return (
                            <Card
                                id={student.id}
                                name={`${student.firstName} ${student.lastName}`}
                                email={student.email}
                                key={student.id}
                                pic={student.pic}
                                company={student.company}
                                grades={student.grades}
                                skill={student.skill}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default CardList;