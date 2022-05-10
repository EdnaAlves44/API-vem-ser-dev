import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import './styles.css'
import { useHistory } from 'react-router-dom'

import { Button, Card, message, Modal } from "antd";
import { ExclamationCircleOutlined, EditOutlined } from '@ant-design/icons';

export default function ProductDetails(){

    const [product, setProduct] = useState([])
    const history = useHistory()
    let {id} = useParams()

    const { confirm } = Modal;

    function showConfirm(product) {
      confirm({
        title: 'Você confirma a exclusão do produto?',
        icon: <ExclamationCircleOutlined />,
        content: product.name,
        onOk() {
            handleDelete(product.id)
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    function handleDelete(id){
        api.delete(`/item/${id}`)
        .then((response) =>{
            if(response.status === 200){
                message.success("Produto foi excluído com sucesso!")
                history.push('/products')
            }
        })
        .catch((err) =>{
            message.error("Aconteceu um erro inesperado")
        })
    }

    useEffect(() =>{
        api.get(`/item/${id}`)
        .then((response) =>{
            setProduct(response.data)
        })
        .catch((err) =>{
            console.log("Aconteceu um erro inesperado")
        })
    }, [])

    return(
        <div className="product__container">
            <h1>Relação de todos os produtos</h1>
            <div className="product__card__container">

                <Card key={product.id} title={product.name} bordered={false} style={{width: 300}}>
                    <p>Id: {product.id}</p>
                    <p>UpdatedAt: {product.updatedAt}</p>
                    <p>Descrição: {product.description}</p>
                    <p>Quantidade: {product.quantity}</p>
                    <hr/>
                    <div className='product__card--actions'>
                        <Button type='primary' sucess icon={<EditOutlined />} onClick={() => history.push(`/edit/${product.id}`, product)}>Edit</Button>
                        <Button type="primary" danger onClick={()=> showConfirm(product)}>Excluir</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}
