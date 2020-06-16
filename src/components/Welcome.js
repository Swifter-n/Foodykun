import React from 'react';
import imageBg from '../asset/images/bg.jpg';

const Welcome = () => (
    <>
        <div className="row">
            <div class="jumbotron-fluid">
                <img src={imageBg} width='100%' alt="Makanan"></img>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <div className="card text-center bg-primary text-white 
          ">
                    <div className="card-body">
                        <h3 className="card-title">Welcome to Foodykun</h3>
                        <h5 className="card-text">The Easiest Way to Find Restourants and Food</h5>
                        <p className="card-text">You can grab information about restourants, coffee with just a few clicks</p>
                        <p className="card-text">Start by choosing the featured cities below or search the city name</p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Welcome;