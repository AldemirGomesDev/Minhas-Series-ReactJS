import React, { useState } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

const NovoGenero = () => {
    const [name, setName] = useState('');
    const [sucess, setSucess] = useState(false);

    const onChange = event => {
        setName(event.target.value)
    }
    const save = () => {
        api.post('/api/genres', {
            name
        }).then(response => {
            console.log(response);
            setSucess(true);
        })
    }
    if (sucess) {
        return <Redirect to='/generos' />
    }
    return (
        <div className='container'>
            <h1>Novo Genêro</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Nome do Genêro</label>
                    <input type="text" value={name} onChange={onChange} className="form-control" id="name" placeholder="Nome do genêro" />
                </div>
                <button type="button" onClick={save} className="btn btn-primary">Salvar</button>
            </form>
        </div>
    )
}
export default NovoGenero;