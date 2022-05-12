import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({service}) => {
    const {id, name , price, description, img} = service;
    const navigate = useNavigate('');
    const servicenavigateServiceDetails = id =>{
        navigate(`service/${id}`)
    }
    return (
        <div className="service">
            <img width="360" height="350"src={img} alt=""/>
            <h2 className="my-2">{name}</h2>
            <p className="text-info">Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => servicenavigateServiceDetails(id)}  className="btn btn-info text-white">Book:{name}</button>
        </div>
    );
};

export default Service;