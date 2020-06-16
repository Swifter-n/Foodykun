import React from 'react';

const SearchKeyword = (props) => (
    <>
        <h5>Keyword</h5>
        <div className="card">
            <div className="card-body">
                <div className="form-row">
                    <div className="col-10">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Type keyword: restaurant's name, location"
                            value={props.keyword}
                            onChange={props.handleKeyword}
                        />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={props.handleCriteria}>Add Criteria</button>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default SearchKeyword;