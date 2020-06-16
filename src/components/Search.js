import React from 'react';

const Search = props => (
    <div className="row" style={{ marginTop: 30 }}>
        <div className="col">
            <h3>Search City</h3>
            <div className="card">
                <div className="card-body">
                    <div className="form-row">
                        <div className="col-11">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Type Keyword or Cities name"
                                value={props.value}
                                onChange={props.onChange}
                            />
                        </div>
                        <div className="col-1">
                            <button className="btn btn-primary" type="button" onClick={props.onClickSearch}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Search;