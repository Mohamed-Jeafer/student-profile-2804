import React from "react";
import './CardList.css'
import Card from "../Card/Card";
import { Col, Container, Row, Image } from 'react-bootstrap';


const CardList = ({ students }) => {

    return (
        <div>
            <Container className='vertical-scrollable text-center'>
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
            </Container>

        </div>
    )
}

export default CardList;