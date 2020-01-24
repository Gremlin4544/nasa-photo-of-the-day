import React from "react";
import styled from "styled-components";

const Title = styled.p`
            font-size: 1.25em;
            padding: 0 15%;
            color: darkgrey;
            font-weight: bold;
            `;

const CardComponent = props => {
    return(
        <div>
            <div className="nasa_card" key={props.id}>
                <img className="nasa_img" alt="Nasa POTD" src={props.url} />
                <Title>Title: {props.title}</Title>
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