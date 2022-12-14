import React, { useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';//los estilos siempre son el ultimo import


const Header = () => {
	const { state, toggleOrder, toggleMenu } = useContext(AppContext);

	return (
		<>
			<nav className={styles.Nav/*Nav tiene que estar mayuscula aqui y en el style tambien y tiene que ser un selector de clase osea .Nav*/}>
				<div className={styles.menu}>
					<Image src={menu/* Esto podria llevar otra clase para canviar sus estilos consultar en notion */} alt="menu"  />
				</div>
				<div className={styles["navbar-left"]}>
					<Link href="/" passHref>{/*Link al inico */}
						<div className={styles['nav-logo']}>
							<Image src={logo} alt="logo"  width={100} height={60}/>
						</div>
					</Link>
					<ul>
						<li>
							<Link href="/">All</Link>
						</li>
						<li>
							<Link href="/">Clothes</Link>
						</li>
						<li>
							<Link href="/">Electronics</Link>
						</li>
						<li>
							<Link href="/">Furnitures</Link>
						</li>
						<li>
							<Link href="/">Toys</Link>
						</li>
						<li>
							<Link href="/">Others</Link>
						</li>
					</ul>
				</div>
				<div className={styles["navbar-right"]}>
        <ul>
          <li
            className={styles["navbar-email"]}
            onClick={
              toggleMenu /*cuando le demos click al correo se dispara la funcion*/
            } aria-hidden="true"//aria-hidden es para resolver un error de eslint El aria-hidden estado indica si el elemento está expuesto a una API de accesibilidad.
          >
            platzi@example.com
          </li>
          <li
            className={styles["navbar-shopping-cart"]}
            onClick={/*Como se ve aqui podemos pasar una funcion anonima directamente como logica del onClick IMPORTANTISIMO hacerlo anonima para que solo se ejecute una vez*/
              () =>
							toggleOrder(
                  !toggleOrder
                ) 
            } aria-hidden="true" 
          >
            <Image src={shoppingCart} alt="shopping cart" />
            {
              state.cart.length > 0 ? <div>{state.cart.length}</div> : null
              /*Validacion para ver si algo pasa o no lo que dice es si cart tiene mas de un elemento muestra cuantos elementos tiene y crea el div que es la bola verde de notificacion, si no, no muestres nada*/
            }
          </li>
        </ul>
      </div>
				{state.menuIsOpen && <Menu />}
			</nav>
			{state.orderIsOpen && <MyOrder />}
		</>
	);
};//este punto y coma resuelve un error de eslint

export default Header;
