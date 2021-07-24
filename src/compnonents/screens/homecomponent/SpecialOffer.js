import React from 'react';
import { Link } from 'react-router-dom'








const SpecialOffer = (props) => {

    return (


        <div className="item">
        <div className="products special-product">
          <div className="product">
            <div className="product-micro">
              <div className="row product-micro-row">
                <div className="col col-xs-5">
                  <div className="product-image">
                    <div className="image"> <a href="#"> <img src={props.imgsrc} alt="" /> </a>
                    </div>
                    {/* <!-- /.image --> */}

                  </div>
                  {/* <!-- /.product-image --> */}
                </div>
                {/* <!-- /.col --> */}
                <div className="col col-xs-7">
                  <div className="product-info">
                    <h3 className="name"><a href="#">{props.pname}</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="product-price"> <span className="price">{props.price}</span> </div>
                    {/* <!-- /.product-price --> */}

                  </div>
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.product-micro-row --> */}
            </div>
            {/* <!-- /.product-micro --> */}

          </div>
          <div className="product">
            <div className="product-micro">
              <div className="row product-micro-row">
                <div className="col col-xs-5">
                  <div className="product-image">
                    <div className="image"> <a href="#"> <img src="assets/images/products/p30.jpg" alt="" /> </a>
                    </div>
                    {/* <!-- /.image --> */}

                  </div>
                  {/* <!-- /.product-image --> */}
                </div>
                {/* <!-- /.col --> */}
                <div className="col col-xs-7">
                  <div className="product-info">
                    <h3 className="name"><a href="#">{props.pname}</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="product-price"> <span className="price">{props.price}</span> </div>
                    {/* <!-- /.product-price --> */}

                  </div>
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.product-micro-row --> */}
            </div>
            {/* <!-- /.product-micro --> */}

          </div>
          <div className="product">
            <div className="product-micro">
              <div className="row product-micro-row">
                <div className="col col-xs-5">
                  <div className="product-image">
                    <div className="image"> <a href="#"> <img src="assets/images/products/p10.jpg" alt="" /> </a>
                    </div>
                    {/* <!-- /.image --> */}

                  </div>
                  {/* <!-- /.product-image --> */}
                </div>
                {/* <!-- /.col --> */}
                <div className="col col-xs-7">
                  <div className="product-info">
                    <h3 className="name"><a href="#">{props.pname}</a></h3>
                    <div className="rating rateit-small"></div>
                    <div className="product-price"> <span className="price">{props.price}</span> </div>
                    {/* <!-- /.product-price --> */}

                  </div>
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.product-micro-row --> */}
            </div>
            {/* <!-- /.product-micro --> */}

          </div>
        </div>
      </div>






    )
}



export default SpecialOffer














