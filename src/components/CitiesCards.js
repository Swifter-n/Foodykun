import React from 'react';
import { Link } from 'react-router-dom';
const CitiesCards = (props) => (
    <div className="card bg-light mb-3">
        <div className="card-body">
            <h3 className="card-title">{props.city.name}</h3>
            <p>{props.city.country_name}</p>
            <Link to={`/city/${props.city.id}`} className="card-text">See restourants in {props.city.name}</Link>
        </div>
    </div>
);

export default CitiesCards;