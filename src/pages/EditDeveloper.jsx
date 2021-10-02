import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Page, Header, Button, Form, FormGroup } from '../styles';

import api from '../services/api';

const EditDeveloper = (props) => {

    const history = useHistory();
    const [ id ] = useState(props.match.params.id);
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
       await api.put(`/developers/${id}`, developer)
       .then(response => {
            if (response.status === 200) {
                history.push('/');
            }
       })
       .catch(error => {
           alert(error);
       });
    }

    const deleteDeveloper = async () => {
        await api.delete(`/developers/${id}`)
        .then(response => {
            if (response.status === 200) {
                history.push('/');
            }
        })
        .catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        const getDeveloper = async () => {
            console.log(props.match.params);
            await api.get(`/developers/${id}`)
            .then(response => {
                if (response.status === 200) {
                    setDeveloper(response.data)
                }
            })
            .catch(error => {
                alert(error);
            });
        }
        getDeveloper();
    }, [id, props.match.params]);

    return (
        <Page>
            <Header>
                <h1>Editar desenvolvedor</h1>
                <Link to="/">
                    <Button>
                        Voltar
                    </Button>
                </Link>                
            </Header>
            <Form onSubmit={saveDeveloper}>
                <FormGroup>
                    <label>Nome:</label>
                    <input type="text" name="name" value={developer.name} placeholder="Nome do desenvolvedor" onChange={handleInput} required />
                </FormGroup>
                <FormGroup>
                    <label>Sexo:</label>
                    <select name="genre" value={developer.genre} onChange={handleInput} required>
                        <option></option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <label>Idade:</label>
                    <input type="number" name="age" value={developer.age} min={18} onChange={handleInput} placeholder="Idade do desenvolvedor" required />
                </FormGroup>
                <FormGroup>
                    <label>Hobby:</label>
                    <input type="text" name="hobby" value={developer.hobby} onChange={handleInput} placeholder="Ex.: Sair com os amigos" required />
                </FormGroup>
                <FormGroup>
                    <label>Data de Nascimento:</label>
                    <input type="date" value={developer.birthdate.substr(0,10)} name="birthdate" onChange={handleInput} required />
                </FormGroup>
                <FormGroup>
                    <Button type="submit">Salvar</Button>
                    <Button onClick={deleteDeveloper}>Excluir</Button>
                </FormGroup>
            </Form>
        </Page>
    )
}

export default EditDeveloper;