import React, { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import axios from "axios";

const CardData = (props) => {
    const [data, setData] = useState([]);

useEffect(() => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=dLOyX2EQBxmVCz5RqzkCYXWPKaBM7a6Baz7Zl2f4`)
        .then(response => {
            // console.log(response);
            setData(response.data);
        })
        .catch(error => {
            console.log("Data Not Found", error);
        });
},[]);

    return (
        <div className="container">

            <CardComponent
                title={data.title}
                date={data.date}
                url={data.url}
                explanation={data.explanation}
                copyright={data.copyright}
                />
        </div>
    )
}

export default CardData;