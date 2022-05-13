import React from 'react';
import { Link, useParams } from 'react-router-dom';
import sports from '../../images/sports.jpg';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2 className="text-center text-info">welcome to my service</h2>
            <div className="text-center my-4">
                <Link to ="/checkout">
                    <button className="btn btn-info"> Proceed Checkout</button>
                </Link>
            </div>
            <img src={sports} alt="" />
        </div>
    );
};

export default ServiceDetails;