import React from 'react';


import {} from 'react-router-dom'

// export const ProductComparisionCompnonent = () => {


//     return( 
//     <>
// <div class="breadcrumb">
// 	<div class="container">
// 		<div class="breadcrumb-inner">
// 			<ul class="list-inline list-unstyled">
// 				<li><a href="home.html">Home</a></li>
// 				<li class='active'>Compare</li>
// 			</ul>
// 		</div>
// 	</div>
// </div>






// <div class="body-content outer-top-xs">
// 	<div class="container">
//     <div class="product-comparison">
// 		<div>
// 			<h1 class="page-title text-center heading-title">Product Comparison</h1>
// 			<div class="table-responsive">
// 				<table class="table compare-table inner-top-vs">
// 					<tr>
// 						<th>Products</th>
					

// 						<td>
//             <div class="product">
//                 <div class="product-image">
//                     <div class="image">
//                         <a href="detail.html">
//                             <img alt="" src={props.imgsrc} />
//                         </a>
//                     </div>
        
//                     <div class="product-info text-left">
//                         <h3 class="name"><a href="detail.html">Floral Print Buttoned</a></h3>
//                         <div class="action">
//                             <a class="lnk btn btn-primary" href="#">Add To Cart</a>
//                         </div>
        
//                     </div>
//                 </div>
//             </div>
//         </td>
        
				
// 					</tr>

// 					<tr>
// 						<th>Price</th>
						

// 						<td>
//                                     <div class="product-price">
//                                         <span class="price"> $300.00 </span>
//                                         <span class="price-before-discount">$500.00</span>
//                                     </div>
//                                 </td>
// 					</tr>

// 					<tr>
// 						<th>Description</th>
						
//                         <td><p class="text">Proin semper eros ac posuere ultrices. Nulla quis mi in risus volutpat blandit vestibulum in lorem. In euismod laoreet sapien vel gravida.  Proin sem per eros ac posuere ultrices. Nulla quis mi in risus.</p></td>          
            
// 						</tr>

// 					<tr>
// 						 <th>Availability</th>
//                          <td><p class="in-stock">In Stock</p></td>
// 					</tr>

// 					<tr>
// 						<th>Remove</th>
						
//                         <td class='text-center'><a href="#" class="remove-icon"><i class="fa fa-times"></i></a></td>  
// 					</tr>
// 				</table>
// 			</div>
//             </div>
// 		</div>
// 	</div>
// </div>

// </>
//     )
// }


 export   const Productdetails = (props)=>{

        return( 
        
        <>
        <td>
            <div class="product">
                <div class="product-image">
                    <div class="image">
                        <a href="detail.html">
                            <img alt="" src={props.imgsrc} />
                        </a>
                    </div>
        
                    <div class="product-info text-left">
                        <h3 class="name"><a href="detail.html">{props.pname}</a></h3>
                        <div class="action">
                            <a class="lnk btn btn-primary" href="#">Add To Cart</a>
                        </div>
        
                    </div>
                </div>
            </div>
        </td>
        
            
        </>
        )
        
        }
        
        
   export     const Productprice = (props)=>{
        
            return( 
            
            <>
            
                         <td>
                                    <div class="product-price">
                                        <span class="price">{props.dprice} </span>
                                        <span class="price-before-discount">{props.oprice}</span>
                                    </div>
                                </td>
            
            </>
            )
            
            }
            
        
        
        
      export      const ProductDescription = (props)=>{
        
                return( 
                
                <>
                
                <td><p class="text">{props.description}</p></td>          
                </>
                )
                
                }
        
        export   const ProductAvailability = (props)=>{
        
                    return( 
                    
                    <>
                    
                    <td><p class="in-stock">{props.availability}</p></td>          
                    </>
                    )
                    
                    }
        
        export   const ProductRemove = ()=>{
        
                        return( 
                        
                        <>
                        
                        <td class='text-center'><a href="#" class="remove-icon"><i class="fa fa-times"></i></a></td>   
                        </>
                        )
                        
                        }
        


//}

//export default ProductComparisionCompnonent