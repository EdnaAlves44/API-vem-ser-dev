import React, { useEffect, useState} from 'react';
import api from '../../Services/api';
import { useHistory, useLocation } from 'react-router-dom';
import { message, Input, Button, InputNumber } from 'antd';
import './styles.css';
import { response } from 'express';

export default function EditarProduto() {
    const history = useHistory()
    const location = useLocation()
    const [produtoEdit, setProdutoEdit] = useState({})

    useEffect(() => {
        console.log(location)
        setProdutoEdit({...location.state})
    }, [location])

    async function handleSubmitEdit(produto) {
        api.patch(`/item/${produto.id}`, produto)
        .then((response) => {
            if(response.status === 200){
                message.success('Produto editado com sucesso!', 5)
                history.push('/products')
            }
        })
        .catch((err) => {
            message.error('Aconteceu um erro inesperado ' + err.response.data.message[0], 5)
        })
    }
    return(
        <div className='product__container'>_
            <h1>Editar produto</h1>
            <br/>
            <h2>{produtoEdit.name}</h2>
            <div className='product__edit'>
                <div className='product__campo'>
                    <span className='product__label'>Nome do produto:</span>
                    <Input value={produtoEdit?.name} onChange={(e) => {
                        setProdutoEdit((produtoEdit) =>{
                            return {...produtoEdit, name:e.target.value}
                        })
                    }}/>
                </div>

                <div className='product__campo'>
                    <span className='product__label'>Descrição do produto:</span>
                    <Input value={produtoEdit?.description} onChange={(e) => {
                        setProdutoEdit((produtoEdit) =>{
                            return {...produtoEdit, description:e.target.value}
                        })
                    }}/>
                </div>

                <div className='product__campo'>
                    <span className='product__label'>Quantidade:</span>
                    <InputNumber value={produtoEdit?.quantity} onChange={(e) => {
                        setProdutoEdit((produtoEdit) =>{
                            return {...produtoEdit, quantity:e}
                        })
                    }}/>
                </div>
                <Button type='primary' className='edit--btn' onClick={() => handleSubmitEdit(produtoEdit)} >Editar</Button>
            </div>
        </div>
    )
}
        
