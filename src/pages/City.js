import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../config/api';
import CategoriesList from '../components/CategoriesList';
import SearchKeyword from '../components/SearchKeyword';
import SearchCriteria from '../components/SearchCriteria';
import RestaurantCards from '../components/RestaurantCards';

class City extends Component {
    constructor() {
        super()
        this.state = {
            city: null,
            categories: null,
            categoriesSelected: null,
            keyword: '',
            criteria: [],
            restaurants: []
        }
    }
    handlesSearch = () => {
        this.setState({ restaurants: null });
        let url = `${API.zomato.baseUrl}/search`;
        let params = {};

        for (let cri of this.state.criteria) {
            switch (cri.criteriaName) {
                case 'City':
                    params.entity_id = cri.data.id
                    params.entity_type = 'city'
                    break;
                case 'Category':
                    params.category = cri.data.id
                    break;
                case 'Keyword':
                    params.q = cri.data.name
                    break;
                default:
                    break;
            }
            axios.get(url, {
                headers: {
                    "user-key": API.zomato.api_key
                },
                params
            }).then(({ data }) => {
                this.setState({ restaurants: data.restaurants })
            }).catch(e => console.log(e));
        }
    }
    transformCategoriesData = (categories) => {
        let categoriesTransfomed = categories.map(category => {
            return category.categories;
        });
        return categoriesTransfomed;
    }
    handleCategory = (category) => {
        let criteria = [...this.state.criteria]
        // ambil element array selain element dengan criteriaName 'Category'
        criteria = criteria.filter(cri => cri.criteriaName !== 'Category')
        let newCriteria = {
            criteriaName: 'Category',
            data: category
        }
        criteria.push(newCriteria);
        this.setState({ categoriesSelected: category, criteria })
    }
    handleKeyword = (e) => {
        this.setState({
            keyword: e.target.value
        })
    }
    getDataCity = (cityId) => {
        var url = `${API.zomato.baseUrl}/cities`;
        axios.get(url, {
            headers: {
                "user-key": API.zomato.api_key
            },
            params: {
                city_ids: `${cityId}`
            }
        }).then(({ data }) => {
            let city = data.location_suggestions[0];
            let newCriteria = {
                criteriaName: 'City',
                data: city
            }
            let criteria = [...this.state.keyword]
            criteria.push(newCriteria);
            this.setState({ city, criteria });

        }).catch(e => console.log(e));
    }
    getCategoriesData = () => {
        var url = `${API.zomato.baseUrl}/categories`;
        axios.get(url, {
            headers: {
                "user-key": API.zomato.api_key
            }
        }).then(({ data }) => {
            let categories = this.transformCategoriesData(data.categories);
            this.setState({ categories });
        }).catch(err => console.log(err));
    }
    componentDidMount() {
        // cara mendapatkan parameter city_id dari url / route
        let { cityId } = this.props.match.params;
        console.log(this.props.match);
        this.getDataCity(cityId);
        this.getCategoriesData();

    }
    handleAddCriteria = () => {
        let criteria = [...this.state.criteria];
        criteria = criteria.filter(cri => cri.criteriaName !== 'Keyword');
        let newCriteria = {
            criteriaName: 'Keyword',
            data: {
                name: this.state.keyword
            }
        }
        criteria.push(newCriteria);
        this.setState({ keyword: '', criteria });
    }
    handleDeleteCriteria = (index) => {
        let criteria = [...this.state.criteria];
        criteria.splice(index, 1);
        this.setState({ criteria });
    }
    renderRestaurantList = () => {
        if (this.state.restaurants == null) {
            return (
                <div className="col">
                    <p>Loading...</p>
                </div>
            )
        }
        if (this.state.restaurants.length > 0) {
            return (
                this.state.restaurants.map(({ restaurant }) => (
                    <RestaurantCards key={restaurant.id} restaurant={restaurant} />
                ))
            )
        } else {
            return (
                <div className="col">
                    <p>No Data available. Please select criteria, and click Search</p>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>
                {this.state.city && (
                    <div className="row">
                        <div className="col">
                            <h4 className="text-primary">Restaurant in {this.state.city.name}, {" "} {this.state.city.country_name}</h4>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-3">
                        <h5>Categories</h5>
                        <CategoriesList
                            categories={this.state.categories}
                            categoriesSelected={this.state.categoriesSelected}
                            handleCategory={this.handleCategory}
                        />
                    </div>
                    <div className="col">
                        <SearchKeyword
                            keyword={this.state.keyword}
                            handleKeyword={this.handleKeyword}
                            handleCriteria={this.handleAddCriteria}
                        />
                        <SearchCriteria
                            criteria={this.state.criteria}
                            handleDeleteCriteria={this.handleDeleteCriteria}
                            onClickSearch={this.handlesSearch}
                        />
                        <div className="row">
                            <div className="col" style={{ marginBottom: 10 }}>
                                <h4 className="text-primary">Restaurant List</h4>

                            </div>
                        </div>
                        <div className="row">
                            {this.renderRestaurantList()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default City;