import React from 'react'

const Card = ({data}) => {
    return (
        <div>
        <div className="card" style={{ "width": "18rem" ,"height":"25rem" }}>
            <img style={{ "height": "14rem" }} src={data.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Ratings {data.rating}/5</p>

                <div className='d-flex'>
                    <button href="#" className="btn btn-primary">Add to Cart</button>
                    <button className='btn btn'>Price:₹{data.price}</button>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Card