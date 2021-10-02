import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #3d3d3d;
    min-height: 100vh;
    padding: 2rem;
`;

const Header = styled.div`
    display: flex;
    max-height: 90vh;
    flex-direction: column;
    color: #FAFAFA;
    align-items: center;

    a {
        text-decoration: none;        
    }
`;

const Button = styled.button`
    background: #FAFAFA;
    padding: 0.5rem;
    margin: 1rem;
    border: 0px;
    cursor: pointer;
    border-radius: 3px;
    color: #3d3d3d;
    font-weight: bold;
`;

const CardList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;      
    a {
        text-decoration: none;
        color: #3d3d3d;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

const FormGroup = styled.div`

    width: 100%;

    label {
        color: #FAFAFA;
    }

    input {
        padding: 1rem;
        width: 100%;
        margin-bottom: 1rem;
    }

    select {
        padding: 1rem;
        width: 100%;
        margin-bottom: 1rem;
    }
`;

export { Page, Header, Button, CardList, Form, FormGroup };