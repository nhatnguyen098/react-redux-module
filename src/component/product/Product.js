import React, {useState, useEffect} from 'react';
import ProductItem from './ProductItem';
import {connect} from 'react-redux';
import callAPI from './../../utils/callAPI';
import {Link} from 'react-router-dom';

const Product = ({getItemToProduct}) => {
  return (
    <div className="row">
      <div className="col-12 mb-10">
        <Link className="btn btn-info" to="/product/create">
          Create Product
        </Link>
      </div>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Product List</h3>
            <table className="table">
              <thead className="text-center">
                <tr>
                  <th>No</th>
                  <th>Id</th>
                  <th>Product Name</th>
                  <th>Product Description</th>
                  <th>Product Price</th>
                  <th>Status</th>
                  <th>Methods</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {getItemToProduct}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
