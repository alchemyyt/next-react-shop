//esto es lo mismo que en el curso de react app.jsx
import Header from '@components/Header';
import AppContext from '@context/AppContext'; //importamos app contex _app.js de app.jsx
import useInitialState from 'hooks/useInitialState'; //importamos el hook que tiene las funciones que usan el
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    //ponemos el retun entre parentesis para sacar la etiquta Component del return y ponerla dentro del AppContext
    <AppContext.Provider value={initialState /* Agregamos cual va a ser el contexto como en app.jsx */}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V5RPDHQJLL" /* Esta etiqueta es la primera que da google analitycs */ />
      <Script
        id="google-analitycs"
        strategy="affterInteractive" /*Ya no es necesario usar dangerouslySetInnerHTML ahora tenemos que pasa un id con el valor google-analitycs y otro elemento que es strategy y el valor es affterInteractive*/
      >
        {
          `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V5RPDHQJLL');` //el valor es dentro de un template literal, lo que va dento de la segunda  etiqueta script de google analitycs
        }
      </Script>
      <Header />
      {/*header tiene que ir aqui arriba de todos los componentes para que se vea entodas las paginas */}
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
/*
ESTO YA NO SIRVE ES LO QUE IBA DENTO DE _DOCUMENT
<script
            dangerouslySetInnerHTML={{
              // Lo que hace dangerouslySetInnerHTML es permintirnos insertar un estructura de html y tiene una estructura particular, va a recibir un objeto que va a tener la informacion de google analitycs
              html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-V5RPDHQJLL');`, //el objeto recibe html y su valor es dentro de un template literal, lo que va dento de la segunda  etiqueta script de google analitycs
            }}
          ></script> */
