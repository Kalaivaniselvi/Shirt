import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import tshirt1 from '../../../src/assets/images/tshirt1.png';
import tshirt2 from '../../../src/assets/images/tshirt2.png';
import tshirt3 from '../../../src/assets/images/tshirt3.png';
import tshirt4 from '../../../src/assets/images/tshirt4.png';
import tshirt5 from '../../../src/assets/images/tshirt5.png';
import tshirt6 from '../../../src/assets/images/tshirt6.png';
import tshirt7 from '../../../src/assets/images/tshirt7.png';
import tshirt8 from '../../../src/assets/images/tshirt8.png';

const imageArray = [
  tshirt1, tshirt2, tshirt3, tshirt4, 
  tshirt5, tshirt6, tshirt7, tshirt8
];

const Products = () => {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {imageArray.map((image, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card h-100">
              <img src={image} className="card-img-top img-fluid" alt={`T-shirt ${index + 1}`} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Round Neck</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
