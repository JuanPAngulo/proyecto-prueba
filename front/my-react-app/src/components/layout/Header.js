import React, { Fragment } from 'react'

const Header = () => {
  return (
<Fragment>
    <nav className='navbar row'>
        <div className='col-12 col-md-3'>

        <div className ='navbar-brand'>
            <img src ="./images/logo51.png" alt='Grandtecn shop tecnology logo'></img>
          </div>

          </div>

          <div className='col-12 col-md-8 mt-2 mt-md-0'>

          <div className="input-group">
            <input
            type={"text"}
            id="search-field"
            class="form-control"
            placeholder='Que producto busca?'></input>
            <div class="input-group-append">

                  <button id='search-btn'class="btn">
                    <i class="fa fa-search-plus fa-2x text-white" aria-hidden="true"></i>

                  </button>


             </div>
             </div>  
             <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
                <button className='btn'id='login-btn'> Inicie Sesion</button>
              <i class="fa fa-shopping-cart fa-2x  text-white " aria-hidden="true"></i>
                  <span className='ml-1'id="cart_count">2</span>
             </div>
             </div>
             </nav>




</Fragment>

  )
    
}

export default Header