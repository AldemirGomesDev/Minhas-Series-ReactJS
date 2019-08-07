import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Generos = () => {
    const [generes, setGeneres] = useState([]);
    useEffect(() => {

        api.get('/api/genres')
            .then(res => {
                setGeneres(res.data.data)
            })
    }, []);

    if (generes.length === 0) {
        return (
            <div className='container'>
                <h1>Genêros</h1>
                <div className="alert alert-warning" role="alert">
                    Você não possui genêros criados.
              </div>
            </div>
        )
    }

    const deleteGenero = id => {
        api.delete('/api/genres/' + id)
            .then(res => {
                console.log(generes);
                const filtrado = generes.filter(item => item.id !== id);
                setGeneres(filtrado);
            })
    }

    return (
        <div className='container'>
            <h1>Genêros</h1>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {generes.map(genere => (
                        <tr key={genere.id}>
                            <th scope="row">{genere.id}</th>
                            <td>{genere.name}</td>
                            <td>
                                <button className='btn btn-danger' onClick={() => deleteGenero(genere.id)}>Remover</button>
                                <Link className='btn btn-primary mx-md-2' to={'/generos/' + genere.id}>Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Generos;