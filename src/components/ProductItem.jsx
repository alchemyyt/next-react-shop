import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';
const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <div className={styles['Product-Item-Img-Ctn']}>
        <Image src={product.images[0]} alt={product.title} layout='fill'/>
      </div>
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']} onClick={() => handleClick(product)} aria-hidden="true">
          {state.cart.includes(product) ? (
            <Image className={[styles.disabled, styles['add-to-cart-btn']] /*Importante escribirlo asi cuando son 2 clases */} src={addedToCartImage} alt="added to cart" />
          ) : (
            <Image className={[styles['add-to-cart-btn'], styles.pointer]} src={addToCartImage} alt="add to cart" />
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
