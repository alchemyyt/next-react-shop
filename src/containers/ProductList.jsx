import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className={styles['main-container']}>
      <div className={styles.ProductList}>
        {products.map((item) => {//algunas imagenes son muy pequeñas y no las mostraba asi que si no cumple las condiciones que quiero que no las mande las condiciones son que tiene que haber al menos un elemento en el array de las imagenes y el elemento no tiene que estar vacio
          if (item.images.length > 0 && item.images[0] !== '') {
            return <ProductItem product={item} key={item.id} />;
          }
        })}
      </div>
    </section>
  );
};

export default ProductList;
