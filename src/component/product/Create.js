import React, {useState, useEffect} from 'react';

import {Redirect, Link} from 'react-router-dom';
const Create = ({onToggleActionProduct}) => {
  const [obj, setObj] = useState ({
    name: '',
    price: '',
    description: '',
    status: true,
  });
  const onToggleSubmitForm = event => {
    event.preventDefault ();
    onToggleActionProduct(obj)
  };
  return (
    <form>
      <div className="row">
        <div className="col-8 card">
          <div className="card-body">
            <h3 className="card-title">
              {obj.id === undefined
                ? 'Form for create new product'
                : 'Form for Update product'}
            </h3>
            <div className="form-group row">
              <label className="col-3 col-form-label">
                Product Name:
              </label>
              <div className="col-7">
                <input
                  type="text"
                  className="form-control"
                  value={obj.name}
                  onChange={e => setObj ({...obj, name: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">
                Product Price:
              </label>
              <div className="col-7">
                <input
                  type="number"
                  className="form-control"
                  value={obj.price}
                  onChange={e => setObj ({...obj, price: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">
                Description:
              </label>
              <div className="col-7">
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  rows="3"
                  value={obj.description}
                  onChange={e => setObj ({...obj, description: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-3 col-form-label">
                Status:
              </label>
              <div className="col-7">
                <select
                  className="form-control"
                  name=""
                  id=""
                  value={obj.status}
                  onChange={e =>
                    setObj ({
                      ...obj,
                      status: e.target.value === 'true' ? true : false,
                    })}
                >
                  <option value="true">Available</option>
                  <option value="false">Unavailable</option>>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-5 col-sm-6">
                <button
                  type="button"
                  className="btn btn-info ml-10"
                  onClick={onToggleSubmitForm}
                >
                  {obj.id === undefined ? 'Create' : 'Update'}
                </button>
                <Link
                  className="btn btn-danger"
                  to = '/product'
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </form>
  );
};

export default Create;
