import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';
const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <div className={styles['order-item-img-ctn']}>
					<Image
						src={
							product?.images[0] /*el ? es para que sea opcional tienes que poner el signo antes del elemento en este caso images esto es por si no llega la info del api asi no da error y sigue funcionando la app aunque este incompleta*/
						}
						alt={product?.title}
						layout='fill'
					/>
				</div>
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <div className={styles['more-clickable-area-ctn']}>
        <Image className={[styles.pointer, styles['more-clickable-area']]} src={close} alt="close" onClick={() => handleRemove(product)} height={16} width={16} />
      </div>
    </div>
  );
};

export default OrderItem;
