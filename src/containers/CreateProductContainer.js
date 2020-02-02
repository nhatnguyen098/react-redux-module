import React, {useState,useEffect} from 'react'
import Create from '../component/product/Create'
import * as actions from './../action/index'
import { connect } from 'react-redux';

const CreateProductContainer = ({history,match,createNewProduct}) => {
    console.log(match)
    //   useEffect (() => {
    //     if (match !== undefined) {
    //       callAPI (`products/${match.params.id}`, 'GET', null).then (res => {
    //         if (res.status === 200) {
    //           setObj (res.data);
    //         }
    //       });
    //     }
    //   }, []);
    const onToggleGetObjUpd = () => {

    }
    const onActionCreateOrUpdate = (obj) => {
        if(obj.id === undefined){
            createNewProduct(obj)
            history.goBack()
        }
    }
    return <Create onToggleActionProduct = {onActionCreateOrUpdate} />
}
const mapStateToProps = state => {
    return {
        getObjUpdate: state.products
    }
}
const dispatchActionToReducer = (dispatch,props) => {
    return {
        createNewProduct : (obj) => {
            dispatch(actions.createDataAPI(obj))
        },

    }
}
export default connect(mapStateToProps,dispatchActionToReducer) (CreateProductContainer)
