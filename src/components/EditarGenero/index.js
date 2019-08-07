import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom';

const EditarGenero = ({ match }) => {
    const [name, setName] = useState('');
    const [sucess, setSucess] = useState(false);

    useEffect(() => {
        api.get('/api/genres/' + match.params.id)
            .then(res => {
                setName(res.data.name);
            })
    }, [match.params.id])

    const onChange = event => {
        setName(event.target.value)
    }
    const save = () => {
        api.put('/api/genres/' + match.params.id, {
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
            <h1>Editar Genêro</h1>
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
export default EditarGenero;