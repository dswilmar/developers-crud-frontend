import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Page, Header, Button, Form, FormGroup } from '../styles';
import api from '../services/api';

const CreateDeveloper = () => {


    const history = useHistory();
    const [ developer, setDeveloper ] = useState({
        name: '',
        genre: '',
        age: 0,
        hobby: '',
        birthdate: ''
    });
    
    const handleInput = e => setDeveloper({
        ...developer, [e.target.name]: e.target.value
    });

    const saveDeveloper = async e => {
       e.preventDefault();
       await api.post('/developers', developer)
       .then(response => {
            if (response.status === 201) {
                history.push('/');
            }
       })
       .catch(error => {
           alert(error);
       });
    }

    return (
        <Page>
            <Header>
                <h1>Cadastrar desenvolvedor</h1>
                <Link to="/">
                    <Button>
                        Voltar
                    </Button>
                </Link>                
            </Header>
            <Form onSubmit={saveDeveloper}>
                <FormGroup>
                    <label>Nome:</label>
                    <input type="text" name="name" placeholder="Nome do desenvolvedor" onChange={handleInput} required />
                </FormGroup>
                <FormGroup>
                    <label>Sexo:</label>
                    <select name="genre" onChange={handleInput} required>
                        <option></option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <label>Idade:</label>
                    <input type="number" name="age" min={18} onChange={handleInput} placeholder="Idade do desenvolvedor" required />
                </FormGroup>
                <FormGroup>
                    <label>Hobby:</label>
                    <input type="text" name="hobby" onChange={handleInput} placeholder="Ex.: Sair com os amigos" required />
                </FormGroup>
                <FormGroup>
                    <label>Data de Nascimento:</label>
                    <input type="date" name="birthdate" onChange={handleInput} required />
                </FormGroup>                
                <FormGroup>
                    <Button>Salvar</Button>
                </FormGroup>
            </Form>
        </Page>
    )
}

export default CreateDeveloper;