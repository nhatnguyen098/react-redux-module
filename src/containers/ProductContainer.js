import React, {useState,useEffect} from 'react';
import Product from './../component/product/Product';
import ProductItem from './../component/product/ProductItem'
import * as actions from './../action/index'
import {connect} from 'react-redux';

const ProductContainer = ({getData, dispatchDataAPI,DeleteData,onToggleChangeStatus,getDataObjUpd}) => {
  const [data, setData] = useState ([]);
  useEffect (() => {
    dispatchDataAPI ();
  }, []);
  useEffect (
    () => {
      setData (getData);
    },
    [getData]
  );
  const onToggleDeleteProduct = id => {
      DeleteData(id)
  };
  const mapDataToItem = data.map ((item, index) => {
    return (
      <ProductItem
        key={item.id}
        data={item}
        deleteProduct={onToggleDeleteProduct}
        clickToChangeStatus = {obj => {obj.status = !obj.status;onToggleChangeStatus(obj)} }
        clickToGetObjUpdate = {id => {getDataObjUpd(id)}}
      />
    );
  });
  return <Product getItemToProduct = {mapDataToItem}/>;
};
const mapStatetoPropsReducer = state => {
  return {
    getData: state.product,
  };
};
const dispatchActionGetAPI = (dispatch, props) => {
  return {
    dispatchDataAPI: () => {
      dispatch (actions.getDataAPI ());
    },
    DeleteData: (id) => {
        dispatch(actions.deleteDataAPI(id))
    },
    onToggleChangeStatus: (obj) => {
        dispatch(actions.changeStatusAPI(obj))
    },
    getDataObjUpd : (id) => {
        dispatch(actions.getDataUpdate(id))
    }
  };
};
export default connect (mapStatetoPropsReducer, dispatchActionGetAPI) (
  ProductContainer
);
