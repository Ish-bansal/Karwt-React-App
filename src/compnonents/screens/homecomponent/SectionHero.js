import React from 'react';
import { Link } from 'react-router-dom'








const SectionHero = (props) => {

   const imgg = props.imgsrc;
    return (
     

        <div class="item" style={{backgroundImage: 'url('+imgg+')'}}>
        <div class="container-fluid">
          <div class="caption bg-color vertical-center text-left">
            <div class="slider-header fadeInDown-1">{props.headerdata}</div>
            <div class="big-text fadeInDown-1"> {props.title} </div>
            <div class="excerpt fadeInDown-2 hidden-xs"> <span>{props.description} </span> </div>
            <div class="button-holder fadeInDown-3"> <a href={props.link}
                class="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
          </div>
          {/* <!-- /.caption --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
     

             

        )
    }
    
    
    
    export default SectionHero
    