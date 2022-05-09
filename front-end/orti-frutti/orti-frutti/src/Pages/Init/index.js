import { useHistory } from 'react-router-dom'
import React from 'react'
import './styles.css'

import Logo from '../Assets/hortifruti-logo.png'
import { Button } from 'antd'

export default function Init(){

    const history = useHistory()
    
    async function listarProdutos(event){
        event.preventDefault();
        history.push('/products');
    }
    return(

        <div className='init__container'>
            <section>
                <img src={Logo} alt='logo' className='center' />
                <br/>
                <Button className='center' onClick={listarProdutos}>Ver produtos</Button>
            </section>
        </div>
    )
}