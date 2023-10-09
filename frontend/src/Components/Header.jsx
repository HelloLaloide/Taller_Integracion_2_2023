import './assets/css/Header.css'
import logo from './assets/img/Logo.png'
import carrito from './assets/img/carrito.svg'
import { Link } from 'react-router-dom';
export const Header = () => {

  return (
<div className="navbar  bg-rojito flex items-center gap-4">
  <div className="w-24 flex items-center justify-start ">
  <img src={logo} className='sm:w-32 md:w-48 lg:w-64 rounded-sm'></img>
  </div>
  <div className="flex-grow justify-center">
    <ul className="btn-group btn-group-vertical lg:btn-group-horizontal px-1 gap-14 font-bold text-xl flex justify-end items-center ">
      <li><Link to="/catalogo"><button className=" px-20 py-2 btn text-white bg-black">Catálogo</button></Link></li>
      <li><button className="px-20 py-2 btn text-white bg-black">Personaliza tu pedido</button></li>
      <li><Link to="/login"><button className="px-20 py-2 btn text-white bg-black">Iniciar Sesion</button></Link></li>
      <li><Link to="/carro"><button className=" px-20 py-2"><img src={carrito} className='w-10'></img></button></Link></li>
    </ul>
  </div>
</div>
  )
}
