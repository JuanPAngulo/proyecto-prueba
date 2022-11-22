import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'
import { useParams,Link } from 'react-router-dom'




export const Home = () => { 
  const params= useParams();

  const { loading,productos,error } = useSelector(state => state.products)
  const alert = useAlert();


  const dispatch = useDispatch();
  useEffect(() => {

    if (error){
      return alert.error(error)
    }


    dispatch(getProducts());
alert.success("OK")
  }, [dispatch,alert,error])

  return (
    <Fragment>
        {loading ?<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>:(
          <Fragment>
<MetaData title="Tecnologia a tu Alcance"></MetaData>
      <h1 id="encabezado_productos">Ultimos Productos</h1>

      <section id="productos" className='container mt-5'>
        <div className='row'>
          {productos && productos.map(producto => (
            <div key={producto._id} className='col-sm-15 col-md-5 col lg-3 my-3'>
              <div className='card p-3 rounded'>
                
                <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt="imagen del producto"></img>
                <div className='card-body d-flex flex-colum'>
                  <h5 id="titulo_producto">< Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                  <div className='rating mt-auto'>
                    <div className='rating-outer'>
                      <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div>
                    </div>

                    <span id="No_de_opiniones">Reviews</span>
                  </div>
                  <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn-lock'>Ver Detalle
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>


            </Fragment>
        )}
      

    </Fragment>




  )
}
export default Home