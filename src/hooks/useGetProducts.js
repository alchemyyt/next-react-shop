import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect( () => {//esta funcion se cambio porque eslint da error ahora lo que hace es cada vez que api cambia llama a la
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
    };
    fetchData();
  }, [API]);

  return products;
};

export default useGetProducts;
