import React from 'react';
import "./Card.css"
import { Col, Container, Row, Image } from 'react-bootstrap';


const Card = ({ id, name, email, pic, company, skill, grades }) => {
    const average = gradesArr => gradesArr.reduce((sum, grade) =>
        parseInt(sum) + parseInt(grade), 0) / gradesArr.length;
    const result = average(grades); // 5
    return ( <
        Container fluid className = "border" >
        <
        Row className = "justify-content" >
        <
        Col xs lg = "auto"
        className = "img-col" >
        <
        Image className = "center-block img"
        src = { pic }
        width = "100"
        height = "100"
        roundedCircle fluid / >
        <
        /Col> <
        Col xs lg = "auto" >
        <
        Row className = "" >
        <
        h1 align = "left" > { name } < /h1> < /
        Row > <
        Row className = "details" > Email: { email } < /Row> <
        Row className = "details" > Company: { company } < /Row> <
        Row className = "details" > Skill: { skill } < /Row> <
        Row className = "details" > Average: { result } < /Row> < /
        Col > <
        /Row> < /
        Container >
    )
}

export default Card