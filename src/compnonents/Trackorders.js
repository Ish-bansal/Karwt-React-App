import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 

export default function Trackorders() {
    return (
<>
         
            
 		 
 
	 

 

{/* <!-- ============================================== HEADER : END ============================================== --> */}
<div  className="breadcrumb">
	<div  className="container">
		<div  className="breadcrumb-inner">
			<ul  className="list-inline list-unstyled">
				<li><a href="/">Home</a></li>
				<li  className='active'>Track your orders</li>
			</ul>
		</div> 
	</div> 
</div> 

<div  className="body-content">
	<div  className="container">
		<div  className="track-order-page">
			<div  className="row">
				<div  className="col-md-12">
	<h2  className="heading-title">Track your Order</h2>
	<span  className="title-tag inner-top-ss">Please enter your Order ID in the box below and press Enter. This was given to you on your receipt and in the confirmation email you should have received. </span>
	<form  className="register-form outer-top-xs" role="form">
		<div  className="form-group">
		    <label  className="info-title" for="exampleOrderId1">Order ID</label>
		    <input type="text"  className="form-control unicase-form-control text-input" id="exampleOrderId1" />
		</div>
	  	<div  className="form-group">
		    <label  className="info-title" for="exampleBillingEmail1">Billing Email</label>
		    <input type="email"  className="form-control unicase-form-control text-input" id="exampleBillingEmail1" />
		</div>
	  	<button type="submit"  className="btn-upper btn btn-primary checkout-page-button">Track</button>
	</form>	
</div>			</div> 
		</div> 
		 
</div> 
</div> 
 
 
 
	
	 
	
	 

	 

	

 
 
</>
         
    )
 }

