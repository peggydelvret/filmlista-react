import React from 'react';
import starIcon from './images/star.png';

export default function Movie(props) {
    const stars = [];
    for (let i = 0; i < props.item.rating; i++) {
        stars.push(<img key={i} src={starIcon} alt="star" style={{ float: 'right', height: '25px', marginLeft: '5px'}} />);
    }
    
    return (
        <li className='list-group-item'>
            {props.item.title}
            {stars}
            <button className='btn btn-sm btn-danger float-end' onClick={() => props.deleteMovie(props.item.id)}>x</button>
        </li>
    );
}