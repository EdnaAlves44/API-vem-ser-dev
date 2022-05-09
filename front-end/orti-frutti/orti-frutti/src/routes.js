import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from './Pages/Products'    // ../src/Pages/Products'//
import Init from './Pages/Init'
import AddProduct from "./Pages/AddProduct";
import ProductDetails from './Pages/ProductDetails'
import EditarProduto from './Pages/EditarProduto'

export default function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Init}/>
                <Route path='/products' component={Products}/>
                <Route path='/add' component={AddProduct}/>
                <Route path='/details/:id' component={ProductDetails}/>
                <Route path='/edit/:id' component={EditarProduto}/>
            </Switch>
        </BrowserRouter>
    )
}







// Aqui estão declaradas todas as rotas da aplicação//
//O react não saberá que uma rota não declarada existe.//
