import React from 'react'
import './styles.css'

import Logo from '../Assets/hortifruti-logo.png'

export default function Init(){

    return(
        <div className='init__container'>
            <section>
              <img src={Logo} alt='logo' className='center' />
                          
            </section>
        </div>
    )
}