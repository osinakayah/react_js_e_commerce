import React from 'react'
import Col from "react-bootstrap/Col";
import './Ad.css'


const Ad = prop => (
    <Col xs={12} sm={12} md={12} lg={12}>
        <div className={'ad'}>
            <br/>
            <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse
                our selection of ascii faces in an exciting range of sizes and prices.</p>
            <p> But first, a word from our sponsors:</p>
            <img className="ad" src={`/ads/?r=${Math.floor(Math.random() * 10000)}`}/>
            <br/>
        </div>
    </Col>
)
export default Ad;