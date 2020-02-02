import React from 'react';
import HomePage from './component/home/HomePage'
import NotFound from './component/Notfound'
import Create from './component/product/Create';
import ProductContainer from './containers/ProductContainer';
import CreateProductContainer from './containers/CreateProductContainer';
const routeMenu = [
    {
        path: '/',
        name: 'Home',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/product',
        name: 'Product',
        exact: true,
        main: () => <ProductContainer/>
    },
    {
        path: '/product/create',
        name: 'Create',
        exact: false,
        main: ({history}) => <CreateProductContainer history = {history}/>
    },
    {
        path: '/product/update/:id',
        name: 'Update',
        exact: false,
        main: ({match,history}) => <CreateProductContainer match = {match} history = {history}/>
    },
    {
        path: "",
        name: 'Not Found',
        exact: false,
        main: () => <NotFound/>
    },
]
export default routeMenu