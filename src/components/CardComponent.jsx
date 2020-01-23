import React from "react";

const CardComponent = props => {
    return(
        <div>
            <div className="nasa_card" key={props.id}>
                <img className="nasa_img" alt="Nasa POTD" src={props.url} />
                <h3>Title: {props.title}</h3>
                <p>Date: {props.date}</p>
                <div>
                    <p>{props.explanation}</p>
                </div>  
                <p>Copyright: {props.copyright}</p>
            </div>
        </div>          
    )
}
export default CardComponent;