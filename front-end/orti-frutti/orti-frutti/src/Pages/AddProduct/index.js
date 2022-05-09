import './styles.css'

import React, { useState } from 'react'
import api from '../../Services/api'
import { useHistory } from 'react-router-dom'

import { message, Form, Input, Button, InputNumber } from 'antd'

export default function AddProduct(){

    const [disabled, setDisabled] = useState(false)
    const history = useHistory()

    async function handleSubmit(product){
        setDisabled(true)
        api.post('/item', product)
            .then((response) => {
                if(response.status ===201){
                    message.success('Produto adicionado com sucesso!');
                    history.push('/products')
                }
            })
            .catch((err) =>{
                message.error("Aconteceu um erro ao adicionar o produto " + err.response.data.message)
            })
    }
    return(
        <div className='product__container'>
                <h1>Adicionar novo produto</h1>
                <br/>
            <div>
                <Form
                name='submitProduct'
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                onFinish={handleSubmit}
                autoComplete="off"
                >
                    <Form.Item
                    label='Nome do item'
                    name="name"
                    rules={[{ required: true, message: "O nome do item não pode ser vazio" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Descrição'
                    name="description"
                    rules={[{ required: true, message: "Informe a descrição do produto" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label='Quantidade'
                    name="quantity"
                    rules={[{ required: true, message: "Informe a quantidade" }]}
                    >
                        <InputNumber />
                    </Form.Item>

                    <Form.Item>
                        <Button type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}


