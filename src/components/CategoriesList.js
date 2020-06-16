import React from 'react';

const CategoriesList = (props) => {
    return (
        props.categories ? (
            <div className="list-group">
                {props.categories.map((category) => (
                    <button key={category.id} className={"btn btn-primary list-group-item list-group-item-action" + (props.categoriesSelected && props.categoriesSelected.id === category.id ? "active" : "")} onClick={() => props.handleCategory(category)}>
                        {category.name}
                    </button>
                ))}
            </div>
        ) : (
                <p>Loading...</p>
            )
    )
}

export default CategoriesList;