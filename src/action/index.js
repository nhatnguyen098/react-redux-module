import * as types from './../constant/action_types';
import callAPI from './../utils/callAPI';
export const getDataAPI = () => {
  return dispatch => {
    return callAPI ('products', 'GET', null).then (res => {
      dispatch (getData (res.data));
    });
  };
};
export const getData = products => {
  return {
    type: types.GET_DATA,
    products,
  };
};

export const deleteDataAPI = id => {
  return dispatch => {
    return callAPI (`products/${id}`, 'DELETE', null).then (res => {
      dispatch (deleteData (id));
    });
  };
};

export const deleteData = id => {
  return {
    type: types.DELETE_DATA,
    id,
  };
};

export const changeStatusAPI = obj => {
  return dispatch => {
    callAPI (`products/${obj.id}`, 'PUT', obj).then (res => {
      dispatch (changeStatus (res.data));
    });
  };
};

export const changeStatus = obj => {
  return {
    type: types.CHANGE_STATUS,
    obj,
  };
};

export const createDataAPI = obj => {
  return dispatch => {
    return callAPI ('products', 'POST', obj).then (res => {
      dispatch (createData (res.data));
    });
  };
};
export const createData = obj => {
  return {
    type: types.CREATE_DATA,
    obj,
  };
};

export const getDataUpdate = id => {
  return {
    type: types.GET_DATA_UPDATE,
    id,
  };
};
