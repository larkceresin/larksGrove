import react from 'react'
export default function MassageCard(props){
    return(
        <li className="massage__service-card">
            <h3 className="massage__service-title">{props.title}</h3>
            <img className="massage__service-image" src={props.image} alt={props.title}/>
            <p className="massage__service-brief">{props.description}</p>
        </li>)
}