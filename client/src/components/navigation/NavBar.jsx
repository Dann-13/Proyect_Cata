import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function NavBar() {
    const { logout, isAuthenticated, isAdmin } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    const renderLinks = () => {
        return (
            <nav className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-between p-3'>
                <div className='col-span-1 flex justify-center md:justify-normal'>
                    <Link to="/">
                        <img src="logo.png" width={200} alt="Logo" />
                    </Link>
                </div>

                {isAuthenticated && isAdmin ? (
                    <div className='col-span-1 md:col-span-2 flex flex-col md:flex-row gap-5 items-center justify-between'>
                        <div className='flex gap-3 md:flex-row items-center pl-0 md:pl-24'>
                            <Link className='font-veneer cursor-pointer' to='/productsPageAdmin'>Ver Productos</Link>
                            <Link className='font-veneer cursor-pointer' to='add-products'>Añadir Producto</Link>
                        </div>
                        <div className='flex gap-2'>

                            <div className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer font-veneer' onClick={handleLogout}>Salir</div>
                        </div>
                    </div>
                ) : (
                    <div className='col-span-1 md:col-span-2 flex flex-col md:flex-row gap-5 items-center justify-between'>
                        <div className='flex gap-3 md:flex-row items-center pl-0 md:pl-24'>
                            <Link className='font-veneer cursor-pointer' to='/productsPageAdmin'>Contactenos</Link>
                            <Link className='font-veneer cursor-pointer' to='/'>Menu</Link>
                        </div>
                        {isAuthenticated ? (
                            <div className='flex gap-2'>

                                <div className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer font-veneer' onClick={handleLogout}>Salir</div>
                            </div>
                        ) : (
                            <div>
                                <div className='flex gap-2'>
                                    <Link to='/login' className='rounded-lg bg-gray-400 text-white py-2 px-5 cursor-pointer font-veneer'>Iniciar Sesion</Link>
                                    <Link to='/register' className='rounded-lg bg-primary text-white py-2 px-5 cursor-pointer font-veneer'>Registro</Link>
                                </div>
                            </div>
                        )}


                    </div>
                )}
            </nav>
        );
    };

    return <div>
        {renderLinks()}

    </div>;
}

export default NavBar;
