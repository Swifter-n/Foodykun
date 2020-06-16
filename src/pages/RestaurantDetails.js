import React, { Component } from 'react';
import { API } from '../config/api';
import axios from 'axios';
import RestaurantProfile from '../components/RestaurantProfile';
import Review from '../components/Review';

class RestaurantDetails extends Component {
    constructor() {
        super()
        this.state = {
            restaurant: null,
            reviews: null
        }
    }
    getReviewData = (restauranId) => {
        let url = `${API.zomato.baseUrl}/reviews`;
        axios.get(url, {
            headers: {
                "user-key": API.zomato.api_key
            },
            params: {
                res_id: restauranId
            }
        }).then(({ data }) => {
            this.setState({
                reviews: data.user_reviews
            })
        }).catch(e => console.log(e));
    }
    getRestaurantData = (restauranId) => {
        let url = `${API.zomato.baseUrl}/restaurant`;
        axios.get(url, {
            headers: {
                "user-key": API.zomato.api_key
            },
            params: {
                res_id: restauranId
            }
        }).then(({ data }) => {
            this.setState({
                restaurant: data
            })
            console.log(data);
        }).catch(e => console.log(e));

    }

    componentDidMount() {
        let { params } = this.props.match;
        this.getRestaurantData(params.restauranId);
        this.getReviewData(params.restauranId);
    }

    render() {
        return (
            <>
                <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                    <div className="row">
                        <div className="col" style={{ marginBottom: 20 }}>
                            <RestaurantProfile restaurant={this.state.restaurant} />
                            <div className="col" style={{ marginBottom: 20 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="text-primary" style={{ fontWeight: 800 }}>Reviews</h4>
                                        {this.state.reviews ? (
                                            this.state.reviews.map(({ review }) => (
                                                <Review review={review} key={review.id} />
                                            ))
                                        ) : (
                                                <p>Loading...</p>
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default RestaurantDetails;