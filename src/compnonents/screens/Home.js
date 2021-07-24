import { Link } from 'react-router-dom'



import '../../assets/css/main.css'

import '../../assets/css/blue.css'
import '../../assets/css/owl.carousel.css'
import '../../assets/css/owl.transitions.css'
import '../../assets/css/animate.min.css'
import '../../assets/css/rateit.css'
import '../../assets/css/bootstrap-select.min.css'


import HotDeals from './homecomponent/HotDeals'
import Hotdata from './homecomponent/Hotdata'
import Specialdata from './homecomponent/Specialdata'
import SpecialOffer from './homecomponent/SpecialOffer'
import Testimonials from './homecomponent/Testimonials'
import Testimonialdata from './homecomponent/Testimonialdata'
import Footer from '../Footer'
import SectionHerodata from './homecomponent/SectionHerodata'
import SectionHero from './homecomponent/SectionHero'
import ScrolsTabsProductdata from './homecomponent/ScrolsTabsProductdata'
import ScrolsTabsProduct from './homecomponent/ScrolsTabsProduct'
import BestSellerdata from './homecomponent/BestSellerdata'
import BestSeller from './homecomponent/BestSeller'
import Blogdata from './homecomponent/Blogdata'
import Blog from './homecomponent/Blog'
import FeaturedProduct from './homecomponent/FeaturedProduct'
import FeaturedProductdata from './homecomponent/FeaturedProductdata'


function nproduct(val) {

     return (
          <HotDeals
               imgsrc={val.imgsrc}
               poff={val.poff}
               pname={val.pname}
               oprice={val.oprice}
               dprice={val.dprice}
          />
     )
}

function nspdata(val) {

     return (
          <SpecialOffer
               imgsrc={val.imgsrc}
               pname={val.pname}
               price={val.price}
          />
     )
}


function ntestimonial(val) {

     return (
          <Testimonials
               imgsrc={val.imgsrc}
               data={val.data}
               name={val.name}
               company={val.company}
          />
     )
}

function nheros(val) {

     return (
          <SectionHero
               imgsrc={val.imgsrc}
               headerdata={val.headerdata}
               title={val.title}
               description={val.title}
               link={val.link}
          />
     )
}

function ntabptoduct(val) {

     return (
          <ScrolsTabsProduct
               imgsrc={val.imgsrc}
               tag={val.tag}
               pname={val.pname}
               oprice={val.oprice}
               dprice={val.dprice}
          />
     )
}

function nfeatureproduct(val) {

     return (
          <FeaturedProduct
               imgsrc={val.imgsrc}
               tag={val.tag}
               pname={val.pname}
               oprice={val.oprice}
               dprice={val.dprice}
          />
     )
}


function nbestseller(val) {

     //console.log(val);
     return (
          <BestSeller
               imgsrc1={val.imgsrc1}
               pname1={val.pname1}
               price1={val.price1}

               imgsrc2={val.imgsrc2}
               pname2={val.pname2}
               price2={val.price2}

          />
     )
}

function nblogger(val) {


     return (
          <Blog
               imgsrc={val.imgsrc}
               bname={val.bname}
               username={val.username}
               description={val.description}

          />
     )
}




const Home = () => {



     return (
          <div classNameName="cnt-home">


               <div className="body-content outer-top-xs" id="top-banner-and-menu">
                    <div className="container">
                         <div className="row">
                              {/* <!-- ============================================== SIDEBAR ============================================== --> */}
                              <div className="col-xs-12 col-sm-12 col-md-3 sidebar">

                                   {/* <!-- ================================== TOP NAVIGATION ================================== --> */}


                                   <div className="side-menu animate-dropdown outer-bottom-xs">
                                        <div className="head"><i className="icon fa fa-align-justify fa-fw"></i> Categories</div>
                                        <nav className="yamm megamenu-horizontal">
                                             <ul className="nav">
                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-shopping-bag" aria-hidden="true"></i>Clothing</a>
                                                       <ul className="dropdown-menu mega-menu">
                                                            <li className="yamm-content">
                                                                 <div className="row">
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Dresses</a></li>
                                                                                <li><a href="#">Shoes </a></li>
                                                                                <li><a href="#">Jackets</a></li>
                                                                                <li><a href="#">Sunglasses</a></li>
                                                                                <li><a href="#">Sport Wear</a></li>
                                                                                <li><a href="#">Blazers</a></li>
                                                                                <li><a href="#">Shirts</a></li>
                                                                                <li><a href="#">Shorts</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Handbags</a></li>
                                                                                <li><a href="#">Jwellery</a></li>
                                                                                <li><a href="#">Swimwear </a></li>
                                                                                <li><a href="#">Tops</a></li>
                                                                                <li><a href="#">Flats</a></li>
                                                                                <li><a href="#">Shoes</a></li>
                                                                                <li><a href="#">Winter Wear</a></li>
                                                                                <li><a href="#">Night Suits</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Toys &amp; Games</a></li>
                                                                                <li><a href="#">Jeans</a></li>
                                                                                <li><a href="#">Shirts</a></li>
                                                                                <li><a href="#">Shoes</a></li>
                                                                                <li><a href="#">School Bags</a></li>
                                                                                <li><a href="#">Lunch Box</a></li>
                                                                                <li><a href="#">Footwear</a></li>
                                                                                <li><a href="#">Wipes</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Sandals </a></li>
                                                                                <li><a href="#">Shorts</a></li>
                                                                                <li><a href="#">Dresses</a></li>
                                                                                <li><a href="#">Jwellery</a></li>
                                                                                <li><a href="#">Bags</a></li>
                                                                                <li><a href="#">Night Dress</a></li>
                                                                                <li><a href="#">Swim Wear</a></li>
                                                                                <li><a href="#">Toys</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                 </div>
                                                                 {/* <!-- /.row --> */}
                                                            </li>
                                                            {/* <!-- /.yamm-content --> */}
                                                       </ul>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-laptop" aria-hidden="true"></i>Electronics</a>
                                                       {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                                                       <ul className="dropdown-menu mega-menu">
                                                            <li className="yamm-content">
                                                                 <div className="row">
                                                                      <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                           <ul>
                                                                                <li><a href="#">Gaming</a></li>
                                                                                <li><a href="#">Laptop Skins</a></li>
                                                                                <li><a href="#">Apple</a></li>
                                                                                <li><a href="#">Dell</a></li>
                                                                                <li><a href="#">Lenovo</a></li>
                                                                                <li><a href="#">Microsoft</a></li>
                                                                                <li><a href="#">Asus</a></li>
                                                                                <li><a href="#">Adapters</a></li>
                                                                                <li><a href="#">Batteries</a></li>
                                                                                <li><a href="#">Cooling Pads</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                           <ul>
                                                                                <li><a href="#">Routers &amp; Modems</a></li>
                                                                                <li><a href="#">CPUs, Processors</a></li>
                                                                                <li><a href="#">PC Gaming Store</a></li>
                                                                                <li><a href="#">Graphics Cards</a></li>
                                                                                <li><a href="#">Components</a></li>
                                                                                <li><a href="#">Webcam</a></li>
                                                                                <li><a href="#">Memory (RAM)</a></li>
                                                                                <li><a href="#">Motherboards</a></li>
                                                                                <li><a href="#">Keyboards</a></li>
                                                                                <li><a href="#">Headphones</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="dropdown-banner-holder"> <a href="#"><img alt=""
                                                                           src="assets/images/banners/banner-side.png" /></a> </div>
                                                                 </div>
                                                                 {/* <!-- /.row --> */}
                                                            </li>
                                                            {/* <!-- /.yamm-content --> */}
                                                       </ul>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                       {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-paw" aria-hidden="true"></i>Shoes</a>
                                                       <ul className="dropdown-menu mega-menu">
                                                            <li className="yamm-content">
                                                                 <div className="row">
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Dresses</a></li>
                                                                                <li><a href="#">Shoes </a></li>
                                                                                <li><a href="#">Jackets</a></li>
                                                                                <li><a href="#">Sunglasses</a></li>
                                                                                <li><a href="#">Sport Wear</a></li>
                                                                                <li><a href="#">Blazers</a></li>
                                                                                <li><a href="#">Shirts</a></li>
                                                                                <li><a href="#">Shorts</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Handbags</a></li>
                                                                                <li><a href="#">Jwellery</a></li>
                                                                                <li><a href="#">Swimwear </a></li>
                                                                                <li><a href="#">Tops</a></li>
                                                                                <li><a href="#">Flats</a></li>
                                                                                <li><a href="#">Shoes</a></li>
                                                                                <li><a href="#">Winter Wear</a></li>
                                                                                <li><a href="#">Night Suits</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Toys &amp; Games</a></li>
                                                                                <li><a href="#">Jeans</a></li>
                                                                                <li><a href="#">Shirts</a></li>
                                                                                <li><a href="#">Shoes</a></li>
                                                                                <li><a href="#">School Bags</a></li>
                                                                                <li><a href="#">Lunch Box</a></li>
                                                                                <li><a href="#">Footwear</a></li>
                                                                                <li><a href="#">Wipes</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Sandals </a></li>
                                                                                <li><a href="#">Shorts</a></li>
                                                                                <li><a href="#">Dresses</a></li>
                                                                                <li><a href="#">Jwellery</a></li>
                                                                                <li><a href="#">Bags</a></li>
                                                                                <li><a href="#">Night Dress</a></li>
                                                                                <li><a href="#">Swim Wear</a></li>
                                                                                <li><a href="#">Toys</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                 </div>
                                                                 {/* <!-- /.row --> */}
                                                            </li>
                                                            {/* <!-- /.yamm-content --> */}
                                                       </ul>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-clock-o"></i>Watches</a>
                                                       <ul className="dropdown-menu mega-menu">
                                                            <li className="yamm-content">
                                                                 <div className="row">
                                                                      <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                           <ul>
                                                                                <li><a href="#">Gaming</a></li>
                                                                                <li><a href="#">Laptop Skins</a></li>
                                                                                <li><a href="#">Apple</a></li>
                                                                                <li><a href="#">Dell</a></li>
                                                                                <li><a href="#">Lenovo</a></li>
                                                                                <li><a href="#">Microsoft</a></li>
                                                                                <li><a href="#">Asus</a></li>
                                                                                <li><a href="#">Adapters</a></li>
                                                                                <li><a href="#">Batteries</a></li>
                                                                                <li><a href="#">Cooling Pads</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                           <ul>
                                                                                <li><a href="#">Routers &amp; Modems</a></li>
                                                                                <li><a href="#">CPUs, Processors</a></li>
                                                                                <li><a href="#">PC Gaming Store</a></li>
                                                                                <li><a href="#">Graphics Cards</a></li>
                                                                                <li><a href="#">Components</a></li>
                                                                                <li><a href="#">Webcam</a></li>
                                                                                <li><a href="#">Memory (RAM)</a></li>
                                                                                <li><a href="#">Motherboards</a></li>
                                                                                <li><a href="#">Keyboards</a></li>
                                                                                <li><a href="#">Headphones</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="dropdown-banner-holder"> <a href="#"><img alt=""
                                                                           src="assets/images/banners/banner-side.png" /></a> </div>
                                                                 </div>
                                                                 {/* <!-- /.row --> */}
                                                            </li>
                                                            {/* <!-- /.yamm-content --> */}
                                                       </ul>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-diamond"></i>Jewellery</a>
                                                       <ul className="dropdown-menu mega-menu">
                                                            <li className="yamm-content">
                                                                 <div className="row">
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Dresses</a></li>
                                                                                <li><a href="#">Shoes </a></li>
                                                                                <li><a href="#">Jackets</a></li>
                                                                                <li><a href="#">Sunglasses</a></li>
                                                                                <li><a href="#">Sport Wear</a></li>
                                                                                <li><a href="#">Blazers</a></li>
                                                                                <li><a href="#">Shirts</a></li>
                                                                                <li><a href="#">Shorts</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Handbags</a></li>
                                                                                <li><a href="#">Jwellery</a></li>
                                                                                <li><a href="#">Swimwear </a></li>
                                                                                <li><a href="#">Tops</a></li>
                                                                                <li><a href="#">Flats</a></li>
                                                                                <li><a href="#">Shoes</a></li>
                                                                                <li><a href="#">Winter Wear</a></li>
                                                                                <li><a href="#">Night Suits</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Toys &amp; Games</a></li>
                                                                                <li><a href="#">Jeans</a></li>
                                                                                <li><a href="#">Shirts</a></li>
                                                                                <li><a href="#">Shoes</a></li>
                                                                                <li><a href="#">School Bags</a></li>
                                                                                <li><a href="#">Lunch Box</a></li>
                                                                                <li><a href="#">Footwear</a></li>
                                                                                <li><a href="#">Wipes</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                      <div className="col-sm-12 col-md-3">
                                                                           <ul className="links list-unstyled">
                                                                                <li><a href="#">Sandals </a></li>
                                                                                <li><a href="#">Shorts</a></li>
                                                                                <li><a href="#">Dresses</a></li>
                                                                                <li><a href="#">Jwellery</a></li>
                                                                                <li><a href="#">Bags</a></li>
                                                                                <li><a href="#">Night Dress</a></li>
                                                                                <li><a href="#">Swim Wear</a></li>
                                                                                <li><a href="#">Toys</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      {/* <!-- /.col --> */}
                                                                 </div>
                                                                 {/* <!-- /.row --> */}
                                                            </li>
                                                            {/* <!-- /.yamm-content --> */}
                                                       </ul>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-heartbeat"></i>Health and Beauty</a>
                                                       <ul className="dropdown-menu mega-menu">
                                                            <li className="yamm-content">
                                                                 <div className="row">
                                                                      <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                           <ul>
                                                                                <li><a href="#">Gaming</a></li>
                                                                                <li><a href="#">Laptop Skins</a></li>
                                                                                <li><a href="#">Apple</a></li>
                                                                                <li><a href="#">Dell</a></li>
                                                                                <li><a href="#">Lenovo</a></li>
                                                                                <li><a href="#">Microsoft</a></li>
                                                                                <li><a href="#">Asus</a></li>
                                                                                <li><a href="#">Adapters</a></li>
                                                                                <li><a href="#">Batteries</a></li>
                                                                                <li><a href="#">Cooling Pads</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="col-xs-12 col-sm-12 col-lg-4">
                                                                           <ul>
                                                                                <li><a href="#">Routers &amp; Modems</a></li>
                                                                                <li><a href="#">CPUs, Processors</a></li>
                                                                                <li><a href="#">PC Gaming Store</a></li>
                                                                                <li><a href="#">Graphics Cards</a></li>
                                                                                <li><a href="#">Components</a></li>
                                                                                <li><a href="#">Webcam</a></li>
                                                                                <li><a href="#">Memory (RAM)</a></li>
                                                                                <li><a href="#">Motherboards</a></li>
                                                                                <li><a href="#">Keyboards</a></li>
                                                                                <li><a href="#">Headphones</a></li>
                                                                           </ul>
                                                                      </div>
                                                                      <div className="dropdown-banner-holder"> <a href="#"><img alt=""
                                                                           src="assets/images/banners/banner-side.png" /></a> </div>
                                                                 </div>
                                                                 {/* <!-- /.row --> */}
                                                            </li>
                                                            {/* <!-- /.yamm-content --> */}
                                                       </ul>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-paper-plane"></i>Kids and Babies</a>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-futbol-o"></i>Sports</a>
                                                       {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                                                       {/* <!-- /.dropdown-menu --> */}
                                                       {/* <!-- ================================== MEGAMENU VERTICAL ================================== --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                                  <li className="dropdown menu-item"> <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i
                                                       className="icon fa fa-envira"></i>Home and Garden</a>
                                                       {/* <!-- /.dropdown-menu --> */}
                                                  </li>
                                                  {/* <!-- /.menu-item --> */}

                                             </ul>
                                             {/* <!-- /.nav --> */}
                                        </nav>
                                        {/* <!-- /.megamenu-horizontal --> */}
                                   </div>
                                   {/* <!-- /.side-menu --> */}
                                   {/* <!-- ================================== TOP NAVIGATION : END ================================== --> */}










                                   {/* <!-- ============================================== HOT DEALS ============================================== --> */}
                                   <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
                                        <h3 className="section-title">hot deals</h3>
                                        <div className="owl-carousel sidebar-carousel custom-carousel owl-theme outer-top-ss">




                                             {Hotdata.map(nproduct)}

                                        </div>
                                        {/* <!-- /.sidebar-widget --> */}
                                   </div>
                                   {/* <!-- ============================================== HOT DEALS: END ============================================== --> */}






                                   {/* <!-- ============================================== SPECIAL OFFER ============================================== --> */}

                                   <div className="sidebar-widget outer-bottom-small wow fadeInUp">
                                        <h3 className="section-title">Special Offer</h3>
                                        <div className="sidebar-widget-body outer-top-xs">
                                             <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">


                                                  {Specialdata.map(nspdata)}
                                             </div>
                                        </div>
                                        {/* <!-- /.sidebar-widget-body --> */}
                                   </div>
                                   {/* <!-- /.sidebar-widget --> */}
                                   {/* <!-- ============================================== SPECIAL OFFER : END ============================================== --> */}








                                   {/* <!-- ============================================== PRODUCT TAGS ============================================== --> */}
                                   <div className="sidebar-widget product-tag wow fadeInUp">
                                        <h3 className="section-title">Product tags</h3>
                                        <div className="sidebar-widget-body outer-top-xs">
                                             <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active"
                                                  title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone"
                                                       href="category.html">Smartphone</a> <a className="item" title="Furniture"
                                                            href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a
                                                                 className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker"
                                                                      href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a
                                                                           className="item" title="Rose" href="category.html">Rose</a> </div>
                                             {/* <!-- /.tag-list --> */}
                                        </div>
                                        {/* <!-- /.sidebar-widget-body --> */}
                                   </div>
                                   {/* <!-- /.sidebar-widget --> */}
                                   {/* <!-- ============================================== PRODUCT TAGS : END ============================================== --> */}


                                   {/* <!-- ============================================== SPECIAL DEALS ============================================== --> */}


                                   <div className="sidebar-widget outer-bottom-small wow fadeInUp">
                                        <h3 className="section-title">Special Deals</h3>
                                        <div className="sidebar-widget-body outer-top-xs">
                                             <div className="owl-carousel sidebar-carousel special-offer custom-carousel owl-theme outer-top-xs">



                                                  {Specialdata.map(nspdata)}
                                             </div>
                                        </div>
                                        {/* <!-- /.sidebar-widget-body --> */}
                                   </div>
                                   {/* <!-- /.sidebar-widget --> */}
                                   {/* <!-- ============================================== SPECIAL DEALS : END ============================================== --> */}






                                   {/* <!-- ============================================== NEWSLETTER ============================================== --> */}
                                   <div className="sidebar-widget newsletter wow fadeInUp outer-bottom-small">
                                        <h3 className="section-title">Newsletters</h3>
                                        <div className="sidebar-widget-body outer-top-xs">
                                             <p>Sign Up for Our Newsletter!</p>
                                             <form>
                                                  <div className="form-group">
                                                       <label className="sr-only" for="exampleInputEmail1">Email address</label>
                                                       <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Subscribe to our newsletter" />
                                                  </div>
                                                  <button className="btn btn-primary">Subscribe</button>
                                             </form>
                                        </div>
                                        {/* <!-- /.sidebar-widget-body --> */}
                                   </div>
                                   {/* <!-- /.sidebar-widget --> */}
                                   {/* <!-- ============================================== NEWSLETTER: END ============================================== --> */}







                                   {/* <!-- ============================================== Testimonials============================================== --> */}
                                   <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
                                        <div id="advertisement" className="advertisement">


                                             {Testimonialdata.map(ntestimonial)}

                                        </div>

                                   </div>

                                   {/* <!-- ============================================== Testimonials: END ============================================== --> */}





                                   <div className="home-banner"> <img src="assets/images/banners/LHS-banner.jpg" alt="Image" /> </div>



                              </div>
                              {/* <!-- /.sidemenu-holder --> */}
                              {/* <!-- ============================================== SIDEBAR : END ============================================== --> */}



                              {/* <!-- ============================================== CONTENT ============================================== --> */}


                              <div class="col-xs-12 col-sm-12 col-md-9 homebanner-holder">
                                   {/* <!-- ========================================== SECTION – HERO ========================================= --> */}




                                   <div id="hero">
                                        <div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm">
                                             {SectionHerodata.map(nheros)}
                                        </div>
                                        {/* <!-- /.owl-carousel --> */}
                                   </div>

                                   {/* <!-- ========================================= SECTION – HERO : END ============================> */}


                                   {/* <!-- ============================================== INFO BOXES ============================================== --> */}
                                   <div class="info-boxes wow fadeInUp">
                                        <div class="info-boxes-inner">
                                             <div class="row">
                                                  <div class="col-md-6 col-sm-4 col-lg-4">
                                                       <div class="info-box">
                                                            <div class="row">
                                                                 <div class="col-xs-12">
                                                                      <h4 class="info-box-heading green">money back</h4>
                                                                 </div>
                                                            </div>
                                                            <h6 class="text">30 Days Money Back Guarantee</h6>
                                                       </div>
                                                  </div>
                                                  {/* <!-- .col --> */}

                                                  <div class="hidden-md col-sm-4 col-lg-4">
                                                       <div class="info-box">
                                                            <div class="row">
                                                                 <div class="col-xs-12">
                                                                      <h4 class="info-box-heading green">free shipping</h4>
                                                                 </div>
                                                            </div>
                                                            <h6 class="text">Shipping on orders over $99</h6>
                                                       </div>
                                                  </div>
                                                  {/* <!-- .col --> */}

                                                  <div class="col-md-6 col-sm-4 col-lg-4">
                                                       <div class="info-box">
                                                            <div class="row">
                                                                 <div class="col-xs-12">
                                                                      <h4 class="info-box-heading green">Special Sale</h4>
                                                                 </div>
                                                            </div>
                                                            <h6 class="text">Extra $5 off on all items </h6>
                                                       </div>
                                                  </div>
                                                  {/* <!-- .col --> */}
                                             </div>
                                             {/* <!-- /.row --> */}
                                        </div>
                                        {/* <!-- /.info-boxes-inner --> */}

                                   </div>
                                   {/* <!-- /.info-boxes --> */}
                                   {/* <!-- ============================================== INFO BOXES : END ============================================== --> */}


                                   {/* <!-- ============================================== SCROLL TABS ============================================== --> */}
                                   <div id="product-tabs-slider" class="scroll-tabs outer-top-vs wow fadeInUp">
                                        <div class="more-info-tab clearfix ">
                                             <h3 class="new-product-title pull-left">New Products</h3>
                                             <ul class="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
                                                  <li class="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
                                                  <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
                                                  <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
                                                  <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab">Shoes</a></li>
                                             </ul>
                                             {/* <!-- /.nav-tabs --> */}
                                        </div>



                                        <div class="tab-content outer-top-xs">



                                             <div class="tab-pane in active" id="all">
                                                  <div class="product-slider">
                                                       <div class="owl-carousel home-owl-carousel custom-carousel owl-theme" data-item="4">

                                                            {ScrolsTabsProductdata.map(ntabptoduct)}


                                                       </div>
                                                  </div>
                                             </div>



                                             <div class="tab-pane" id="apple">
                                                  <div class="product-slider">
                                                       <div class="owl-carousel home-owl-carousel custom-carousel owl-theme">

                                                            {/* {Hotdata.map(nproduct)} */}
                                                            {ScrolsTabsProductdata.map(ntabptoduct)}
                                                       </div>
                                                  </div>
                                             </div>


                                        </div>
                                        {/* <!-- /.tab-content --> */}
                                   </div>
                                   {/* <!-- /.scroll-tabs --> */}
                                   {/* <!-- ============================================== SCROLL TABS : END ============================================== --> */}



                                   {/* <!-- ============================================== WIDE PRODUCTS ============================================== --> */}
                                   <div class="wide-banners wow fadeInUp outer-bottom-xs">
                                        <div class="row">
                                             <div class="col-md-7 col-sm-7">
                                                  <div class="wide-banner cnt-strip">
                                                       <div class="image"> <img class="img-responsive" src="assets/images/banners/home-banner1.jpg" alt="" />
                                                       </div>
                                                  </div>
                                                  {/* <!-- /.wide-banner --> */}
                                             </div>
                                             {/* <!-- /.col --> */}
                                             <div class="col-md-5 col-sm-5">
                                                  <div class="wide-banner cnt-strip">
                                                       <div class="image"> <img class="img-responsive" src="assets/images/banners/home-banner2.jpg" alt="" />
                                                       </div>
                                                  </div>
                                                  {/* <!-- /.wide-banner --> */}
                                             </div>
                                             {/* <!-- /.col --> */}
                                        </div>
                                        {/* <!-- /.row --> */}
                                   </div>
                                   {/* <!-- /.wide-banners --> */}

                                   {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== --> */}




                                   {/* <!-- ============================================== FEATURED PRODUCTS ============================================== --> */}



                                   <section class="section featured-product wow fadeInUp">
                                        <h3 class="section-title">Featured products</h3>
                                        <div class="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">
                                             {FeaturedProductdata.map(nfeatureproduct)}
                                        </div>
                                   </section>


                                   {/* !-- ============================================== FEATURED PRODUCTS : END ============================================== --> */}




                                   {/* <!-- ============================================== WIDE PRODUCTS ============================================== --> */}
                                   <div class="wide-banners wow fadeInUp outer-bottom-xs">
                                        <div class="row">
                                             <div class="col-md-12">
                                                  <div class="wide-banner cnt-strip">
                                                       <div class="image"> <img class="img-responsive" src="assets/images/banners/home-banner.jpg" alt="" />
                                                       </div>
                                                       <div class="strip strip-text">
                                                            <div class="strip-inner">
                                                                 <h2 class="text-right">New Mens Fashion <span class="shopping-needs">Save up to 40% off</span>
                                                                 </h2>
                                                            </div>
                                                       </div>
                                                       <div class="new-label">
                                                            <div class="text">NEW</div>
                                                       </div>
                                                       {/* <!-- /.new-label --> */}
                                                  </div>
                                                  {/* <!-- /.wide-banner --> */}
                                             </div>
                                             {/* <!-- /.col --> */}

                                        </div>
                                        {/* <!-- /.row --> */}
                                   </div>
                                   {/* <!-- /.wide-banners --> */}
                                   {/* <!-- ============================================== WIDE PRODUCTS : END ============================================== --> */}



                                   {/* <!-- ============================================== BEST SELLER ============================================== --> */}

                                   <div class="best-deal wow fadeInUp outer-bottom-xs">
                                        <h3 class="section-title">Best seller</h3>
                                        <div class="sidebar-widget-body outer-top-xs">
                                             <div class="owl-carousel best-seller custom-carousel owl-theme outer-top-xs">

                                                  {BestSellerdata.map(nbestseller)}

                                             </div>
                                        </div>
                                        {/* <!-- /.sidebar-widget-body --> */}
                                   </div>
                                   {/* <!-- /.sidebar-widget --> */}
                                   {/* <!-- ============================================== BEST SELLER : END ============================================== --> */}



                                   {/* <!-- ============================================== BLOG SLIDER ============================================== --> */}
                                   <section class="section latest-blog outer-bottom-vs wow fadeInUp">
                                        <h3 class="section-title">latest form blog</h3>
                                        <div class="blog-slider-container outer-top-xs">
                                             <div class="owl-carousel blog-slider custom-carousel">


                                                  {Blogdata.map(nblogger)}

                                             </div>
                                             {/* <!-- /.owl-carousel --> */}
                                        </div>
                                        {/* <!-- /.blog-slider-container --> */}
                                   </section>
                                   {/* <!-- /.section --> */}
                                   {/* <!-- ============================================== BLOG SLIDER : END ============================================== --> */}







                                   {/* <!-- ============================================== FEATURED PRODUCTS ============================================== --> */}
                                   <section class="section wow fadeInUp new-arriavls">
                                        <h3 class="section-title">New Arrivals</h3>
                                        <div class="owl-carousel home-owl-carousel custom-carousel owl-theme outer-top-xs">


                                             {FeaturedProductdata.map(nfeatureproduct)}

                                        </div>
                                        {/* <!-- /.home-owl-carousel --> */}
                                   </section>
                                   {/* <!-- /.section --> */}
                                   {/* <!-- ============================================== FEATURED PRODUCTS : END ============================================== --> */}





                              </div>
                              {/* <!-- /.homebanner-holder --> */}


                              {/* <!-- ============================================== CONTENT : END ============================================== --> */}



                         </div>
                         {/* <!-- /.row --> */}

                         {/* <!-- ============================================== BRANDS CAROUSEL ============================================== --> */}
                         <div id="brands-carousel" class="logo-slider wow fadeInUp">
                              <div class="logo-slider-inner">
                                   <div id="brand-slider" class="owl-carousel brand-slider custom-carousel owl-theme">
                                        <div class="item m-t-15"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand1.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item m-t-10"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand2.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand3.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand4.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand5.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand6.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand2.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand4.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand1.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}

                                        <div class="item"> <a href="#" class="image"> <img data-echo="assets/images/brands/brand5.png"
                                             src="assets/images/blank.gif" alt="" /> </a> </div>
                                        {/* <!--/.item--> */}
                                   </div>
                                   {/* <!-- /.owl-carousel #logo-slider --> */}
                              </div>
                              {/* <!-- /.logo-slider-inner --> */}

                         </div>
                         {/* <!-- /.logo-slider --> */}
                         {/* <!-- ============================================== BRANDS CAROUSEL : END ============================================== --> */}




                    </div>
                    {/* <!-- /.container --> */}
               </div>
               {/* <!-- /#top-banner-and-menu --> */}



               {/* <!-- ============================================================= FOOTER ============================================================= --> */}

               {/* {<Footer />} */}


          </div>
     )
}

export default Home