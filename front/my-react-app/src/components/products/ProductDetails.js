import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MetaData from '../layout/MetaData'
import { useParams } from 'react-router-dom';
import { getProductsDetails, clearErrors } from '../../actions/productActions';
import { useAlert } from 'react-alert';
import { Carousel } from 'react-bootstrap';

export const ProductDetails = () => {
  const { loading,product,error } = useSelector(state => state.productDetails)
  const { id } = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(getProductsDetails(id))
    if (error) {
      alert.error(error);
      dispatch(clearErrors)
    }
  }, [dispatch, alert, error, id])




  return (
    <Fragment>
      {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (
        <Fragment>

<MetaData title={product.nombre}></MetaData>
          <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
              <Carousel pause='hover'>
                {product.imagen && product.imagen.map(img => (
                  <Carousel.Item key={img.public_id}>
                    <img className="d-block w-100" src={img.url} alt={product.nombre}></img>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        

</Fragment>
 )}

</Fragment >





 
    
  )
}
