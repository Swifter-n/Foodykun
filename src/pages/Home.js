import React, { Component } from 'react';
import Welcome from '../components/Welcome';
import CityList from '../components/CityList';
import Search from '../components/Search';
import axios from 'axios';
import { API } from '../config/api';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            keyword: "",
            featuredCity: null,
            citiesSearch: [],
            keywordResult: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    handleResult = () => {
        let keyword = this.state.keyword;
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
            headers: {
                "user-key": API.zomato.api_key
            },
            params: {
                q: keyword
            }
        }).then(({ data }) => {
            if (data.status === "success") {
                this.setState({
                    citiesSearch: data.location_suggestions,
                    keyword: "",
                    keywordResult: keyword
                })
            }
        }).catch(err => console.log(err));
    }
    getFeaturedCities = () => {
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
            headers: {
                "user-key": API.zomato.api_key
            },
            params: {
                city_ids: "74, 170, 11052"
            }
        }).then(({ data }) => {
            if (data.status === "success") {
                this.setState({ featuredCity: data.location_suggestions })
            }
        }).catch(err => console.log(err));
    };
    componentDidMount() {
        this.getFeaturedCities();
    }
    render() {
        // const citiesDummy = [
        //     { "id": 74, "name": "Jakarta", "country_name": "Indonesia" },
        //     { "id": 170, "name": "Bali", "country_name": "Indonesia" },
        //     { "id": 11052, "name": "Bandung", "country_name": "Indonesia" }
        // ];
        return (
            <>
                <Welcome />
                <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
                    <CityList cities={this.state.featuredCity} title={"Featured Cities"} />
                    <Search onClickSearch={this.handleResult} value={this.state.keyword} onChange={this.handleChange} />
                    {this.state.keywordResult !== '' &&
                        <CityList title={"Search Result"} cities={this.state.citiesSearch} showSubtitle={true} subtitle={this.state.keywordResult} />
                    }


                </div>
            </>
        );
    }
}

export default Home;