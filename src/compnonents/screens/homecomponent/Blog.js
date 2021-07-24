import React from 'react';
import { Link } from 'react-router-dom'








const Blog = (props) => {

    return (

//imgsrc bname description username



<div class="item">
<div class="blog-post">
  <div class="blog-post-image">
    <div class="image"> <a href="blog.html"><img src={props.imgsrc} alt="" /></a>
    </div>
  </div>
  {/* <!-- /.blog-post-image --> */}

  <div class="blog-post-info text-left">
    <h3 class="name"><a href="#">{props.bname}</a></h3>
    <span class="info">By {props.username} &nbsp;|&nbsp; 21 March 2016 </span>
    <p class="text">{props.description}</p>
    <a href="#" class="lnk btn btn-primary">Read more</a>
  </div>
  {/* <!-- /.blog-post-info --> */}

</div>
{/* <!-- /.blog-post --> */}
</div>


      

    )
}



export default Blog














