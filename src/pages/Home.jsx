import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Page, Header, CardList, Button } from '../styles';
import api from '../services/api';

import DeveloperCard from '../components/DeveloperCard';

const Home = () => {

    const [ developers, setDevelopers ] = useState([]);

    const getDevelopers = async () => {
        await api.get('/developers')
        .then(response => {
            setDevelopers(response.data);
        })
        .catch(error => {
            alert(error);
        })
    }

    useEffect(() => {
        getDevelopers();
    }, []);

    return(
        <Page>
            <Header>
                <h1>Desenvolvedores</h1>
                <p>Lista de desenvolvedores cadastrados</p>
                <Link to="/create">
                    <Button>
                        Cadastrar novo
                    </Button>
                </Link>                 
            </Header>
            <CardList>
               {
                   developers.map(d => (
                       <Link to={"/edit/" + d._id} key={d._id}>
                            <DeveloperCard  
                                name={d.name} 
                                age={d.age} 
                                hobby={d.hobby} 
                                birthdate={
                                    d.birthdate.substr(8,2) + '/' + d.birthdate.substr(5,2) + '/' + d.birthdate.substr(0,4)
                                } 
                            />
                       </Link>
                   ))
               }
            </CardList>
        </Page>
    )
}

export default Home;