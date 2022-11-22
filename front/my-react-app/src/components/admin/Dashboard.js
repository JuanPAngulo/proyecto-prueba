import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

export const Dashboard = () => {

  



    return (
        <Fragment>
            <div className='row'>
                <div className='col-12 col-md-2'>
                    <Sidebar />

                </div>
                <div className='col-12 col-md-10'>
                    <hi className="my-4">Panel De Control</hi>

                    {/*loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> : (*/
                        <Fragment>
                            <MetaData title={"Panel De Control"} />

                            <div className='row pr-4'>
                                <div className='col-xl-3 col-sm-6 mb-3'>
                                    <div className='card tex-white bg-primary o-hidden h-100'>
                                        <div className='card-body'>
                                            <div className='tex-center'>
                                                <div className='text-center card-font-size'>Ventas totales<br/><b>100</b></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row pr-4'>
                                <div className='col-xl-3 col-sm-6 mb-3'>
                                    <div className='card tex-white bg-success o-hidden h-100'>
                                        <div className='card-body'>
                                            <div className='tex-center'>
                                                <div className='text-center card-font-size'>Productos<br/><b>100</b></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row pr-4'>
                                <div className='col-xl-3 col-sm-6 mb-3'>
                                    <div className='card tex-white bg-info o-hidden h-100'>
                                        <div className='card-body'>
                                            <div className='tex-center'>
                                                <div className='text-center card-font-size'><br/>Pedidos<b>100</b></div>
                                            </div>
                                            <Link className='card-footer text-white  clearfix small z-1'to="/">
                                                <span className='float-left'>Ver Detalles</span>
                                                <span className='float-right>'><i className='fa fa-angle -right'></i>  </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row pr-4'>
                                <div className='col-xl-3 col-sm-6 mb-3'>
                                    <div className='card tex-white bg-primary o-hidden h-100'>
                                        <div className='card-body'>
                                            <div className='tex-center'>
                                                <div className='text-center card-font-size'>Ventas totales<br/><b>100</b></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row pr-4'>
                                <div className='col-xl-3 col-sm-6 mb-3'>
                                    <div className='card tex-white bg-primary o-hidden h-100'>
                                        <div className='card-body'>
                                            <div className='tex-center'>
                                                <div className='text-center card-font-size'>Ventas totales<br/><b>100</b></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        </Fragment>
                    }
                </div>
            </div>

        </Fragment>

    )
}
