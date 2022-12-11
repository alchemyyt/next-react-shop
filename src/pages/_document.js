//Cuando se crea este archivo si no tiene todos los elementos que pondre acontinuacion no va a funcionar el proyecto, todas las paginas compartiran lo que se ponga aqui
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  //estructura del componente en una clase
  render() {
    //un render
    return (
      <Html lang="en">
        {/*estas no son etiquetas normales de html son etiquetas que sacamos de componente document de next para trabajar el seo de las etiquetas de html verdaderas, Para diferenciarlas es que esta en mayusculas la primera letra*/}
        <Head>
          <meta charSet="utf-8" /*Este seo se compartira en todas las paginas*/ />
        </Head>
        <body>
          {/* Este si es una etiqueta normal */}
          <Main />
          <NextScript />
          {/* Esto tiene todos los escrips que se generan a la hora de preparar el proyecto Y no puede ir dentro de main*/}
        </body>
      </Html>
    );
  }
}
export default MyDocument;
