import React from 'react';
import CitiesCards from './CitiesCards';


const CityList = (props) => (
    <>
        <div className="row">
            <div className="col 12">
                <h3>{props.title}</h3>
                {props.showSubtitle === true && props.subtitle !== '' && <h6 className="text-muted">Search result for keyword '{props.subtitle}'</h6>}
            </div>
        </div>
        <div className="row">
            {props.cities == null ? (
                <p>Loading...</p>
            ) : (
                    __renderCityList(props.cities)
                )
            }
        </div>
    </>
);

const __renderCityList = (cities) => {
    if (cities.length > 0) {
        return (
            cities.map((city) =>
                <div className="col-4">
                    <CitiesCards key={city.id} city={city} />
                </div>
            )
        )
    } else {
        return (
            <div className="col">
                <p className="text-danger">Data not found</p>
            </div>
        )
    }
}
export default CityList;