import React, { useEffect, useState } from "react";
import api from '../../Services/api';
import { useHistory } from "react-router-dom";

import './styles.css'

import { Button, Card } from 'antd';

export default function Products(){
    const [ products, setProducts] = useState([])
    const history = useHistory()


    useEffect(() => {
        api.get('/item')
        .then((response) =>{
            setProducts(response.data)
        })
        .catch((err) => {
            console.log("Aconteceu um erro inesperado" + err)
        })
    }, [])

    return(

        <div className="product__container">
            <h1>Relação de todos os produtos</h1>

            <div className="product__card__container">
                {products.map(product => (
                    <Card key={product.id} title={product.name} bordered={false} style={{width: 300}} className= 'card'>
                        <p>
                            Descrição:{product.description}
                        </p>
                        <p>
                            Quantidade:{product.quantity}
                        </p>
                        <div>
                            <Button onClick={() => history.push(`/details/${product.id}`) }>Detalhes</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
