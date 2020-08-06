import React from 'react';

const AmazonCard = (props) =>{


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src={props.product.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{props.product.title}</h5>
    <p className="card-text">
    {props.product.title}
    </p>
    {/* <p>{props.product.price.raw}</p> */}
    <a href={props.product.link} target="_blank" className="btn btn-primary">
      Buy it
    </a>
  </div>
</div>
        </>
    )
}

export default AmazonCard;