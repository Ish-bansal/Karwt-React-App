import React from 'react';


import { ProductAvailability, ProductComparisionCompnonent, ProductDescription, Productdetails, Productprice, ProductRemove} from './ProductComparisionCompnonents';
import Productsdata from './ProductComparisiondata';


// function nproduct(val) {

//     return (
//          <ProductComparisionCompnonent
//               imgsrc={val.imgsrc}
//               pname={val.pname}
//               oprice={val.oprice}
//               dprice={val.dprice}
//               description={val.description}
//               availability={val.availability}
//          />
//     )
// }

function ndetails(val) {

    return (
         <Productdetails
              imgsrc={val.imgsrc}
              pname={val.pname}
              
         />
    )
}

function nprice(val) {

    return (
         <Productprice
              oprice={val.oprice}
             dprice={val.dprice}
              
         />
    )
}
function ndescription(val) {

    return (
         <ProductDescription
             description={val.description}
              
         />
    )
}
function navailability(val) {

    return (
         <ProductAvailability
               availability={val.availability}
              
         />
    )
}

function nremove(val) {

    return (
         <ProductRemove
              
         />
    )
}






const ProductComparision = () => {

    


    return( 

        <div class="cnt-home">



<div class="breadcrumb">
	<div class="container">
		<div class="breadcrumb-inner">
			<ul class="list-inline list-unstyled">
				<li><a href="/">Home</a></li>
				<li class='active'>Compare</li>
			</ul>
		</div>
	</div>
</div>






<div class="body-content outer-top-xs">
	<div class="container">
    <div class="product-comparison">
		<div>
			<h1 class="page-title text-center heading-title">Product Comparison</h1>
			<div class="table-responsive">
				<table class="table compare-table inner-top-vs">
					<tr>
						<th>Products</th>
					
                        {Productsdata.map(ndetails)}

				
					</tr>

					<tr>
						<th>Price</th>
                        {Productsdata.map(nprice)}
						
					</tr>

					<tr>
						<th>Description</th>
						
                     {Productsdata.map(ndescription)}
						</tr>

					<tr>
						 <th>Availability</th>
                         {Productsdata.map(navailability)}
					</tr>

					<tr>
						<th>Remove</th>
						
                        {Productsdata.map(nremove)}  
					</tr>
				</table>
			</div>
            </div>
		</div>
	</div>
</div>



        </div>

    )

}


export default ProductComparision 