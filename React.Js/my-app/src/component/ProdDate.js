import './ProdDate.css';

function ProdDate(props){ 
    return(
        <div className="date">
        <span>{props.day} </span>
        <span>{props.month}</span>
        <span>{props.year}</span>
        </div>
    )
}

export default ProdDate;