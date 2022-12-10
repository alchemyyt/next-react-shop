//esto es lo mismo que en el curso de react app.jsx
import Header from '@components/Header';
import AppContext from '@context/AppContext'; //importamos app contex _app.js de app.jsx
import useInitialState from 'hooks/useInitialState'; //importamos el hook que tiene las funciones que usan el contexto
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (//ponemos el retun entre parentesis para sacar la etiquta Component del return y ponerla dentro del AppContext
    <AppContext.Provider value={initialState/* Agregamos cual va a ser el contexto como en app.jsx */}>
      <Header/>{/*header tiene que ir aqui arriba de todos los componentes para que se vea entodas las paginas */}
      <Component {...pageProps} />
    </AppContext.Provider>
    
  );
}

export default MyApp
