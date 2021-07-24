import React from 'react';
import { Link } from 'react-router-dom'








const BestSeller = (props) => {

    return (

//imgsrc pname price
        <div class="item">
        <div class="products best-product">
          <div class="product">
            <div class="product-micro">
              <div class="row product-micro-row">
                <div class="col col-xs-5">
                  <div class="product-image">
                    <div class="image"> <a href="#"> <img src={props.imgsrc1} alt="" /> </a>
                    </div>
                    {/* <!-- /.image --> */}
 
                  </div>
                  {/* <!-- /.product-image --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col2 col-xs-7">
                  <div class="product-info">
                    <h3 class="name"><a href="#">{props.pname1}</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="product-price"> <span class="price">{props.price1} </span> </div>
                    {/* <!-- /.product-price --> */}
 
                  </div>
                </div>
                {/* <!-- /.col --> */}
              </div>
              {/* <!-- /.product-micro-row --> */}
            </div>
            {/* <!-- /.product-micro --> */}
 
          </div>
          <div class="product">
            <div class="product-micro">
              <div class="row product-micro-row">
                <div class="col col-xs-5">
                  <div class="product-image">
                    <div class="image"> <a href="#"> <img src={props.imgsrc2}  alt="" /> </a>
                    </div>
                    {/* <!-- /.image --> */}
 
                  </div>
                  {/* <!-- /.product-image --> */}
                </div>
                {/* <!-- /.col --> */}
                <div class="col2 col-xs-7">
                  <div class="product-info">
                    <h3 class="name"><a href="#">{props.pname2}</a></h3>
                    <div class="rating rateit-small"></div>
                    <div class="product-price"> <span class="price"> {props.price2} </span> </div>
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



export default BestSeller














