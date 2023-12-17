import React, {FC} from 'react';
import "./Service.css"

interface passesProps {
    image: string;
    title: string;
    text: string;
}

const Service: FC<passesProps> = ({image, title, text}) => {
    return (
        <div className="service">
            <div className="image"><img src={image} alt={image}/></div>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default Service;
