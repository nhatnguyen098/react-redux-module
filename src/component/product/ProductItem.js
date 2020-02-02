import React from 'react';
import { Link } from 'react-router-dom';
const ProductItem = ({data,deleteProduct,clickToChangeStatus,clickToGetObjUpdate}) => {
  return (
    <tr>
      <td scope="row">{data.id}</td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.description}</td>
      <td>{data.price}</td>
      <td>
        <span
          className={data.status === true ? 'text-success' : 'text-danger'}
          onClick = {() => {clickToChangeStatus(data)}}
        >
          {data.status === true ? 'Available' : 'Unavailable'}
        </span>
      </td>
      <td>
        {/* <button type="button" class="btn btn-warning" onClick = {() => clickToGetObjUpdate(data.id)}>Update</button> */}
        <Link className = 'btn btn-warning ml-10' to = {`/product/update/${data.id}`} >Update</Link>
        <button type="button" className="btn btn-danger" onClick = {() => {deleteProduct(data.id)}}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductItem;
