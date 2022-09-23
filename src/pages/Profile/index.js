import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import './style.css';
import api from "../../services/api";

export default function Profile() {

    const {id} = useParams();

    const navigate = useNavigate();

    const initUser = {
        name: '',
        email: '',
        age: 0,
        company: ''
    }

    const [user, setUser] = useState(initUser);

    useEffect(() => {
        if(id){
            api.get(`/users/${id}`).then(response => {
                console.log(response.data);
                setUser(... response.data);
            });
        }
    }, []);

    function onSubmit(ev) {
        ev.preventDefault();
        const method = id ? 'put' : 'post';
        const url = id ? `/users/${id}` : '/users';
        api[method](url, user).then(
            (response) => { navigate('/') }
        );
    }

    function onChange(ev) {
        const { name, value } = ev.target;
        setUser({ ...user, [name]: value })
        console.log(user);
    }

    return (
        <div id="profile-container">
            <h1>Cadastro</h1>
            <form onSubmit={onSubmit}>
                <strong>Nome:</strong>
                <input name="name" onChange={onChange} value={user.name} />
                <strong>Email:</strong>
                <input type="email" name="email" onChange={onChange} value={user.email} />
                <strong>Idade:</strong>
                <input name="age" onChange={onChange} value={user.age} />
                <strong>Empresa:</strong>
                <input name="company" onChange={onChange} value={user.company} />

                <div className="actions">
                    <Link className="button" to={"/"}>Voltar</Link>
                    <button className="button" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}