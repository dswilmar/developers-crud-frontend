import React from 'react';
import styled from 'styled-components';

const DeveloperCard = (props) => {
    return (
        <Card>
            <h2>{props.name}</h2>
            <h3>{props.age} anos</h3>            
            <span>{props.birthdate}</span>
            <span>{props.hobby}</span>
        </Card>
    )
}

const Card = styled.div`    
    background: #f7f1e3;
    width: 200px;
    min-height: 200px;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    margin: 1rem;

    &:hover {
        font-weight: bolder;
        cursor: pointer;        
        transition: 0.5s;
    }    

    h3 {
        margin-bottom: 1rem;
    }

    span {
        display: block;
        margin-bottom: 1rem;
    }
`;

export default DeveloperCard;