// Master Page

import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, pagina, guitarra}) => {
    return (
        <div>
            <Head>
                <title>GuitarLAx - {pagina}</title>
                <meta
                    name="description"
                    content="Sitio web de venta de guitarras y accesorios para guitarra"
                />
            </Head>

            <Header 
                guitarra={guitarra}
            />

            {children}

            <Footer />
        </div>
    )
}

// Prop por default pq la guitarra solamaente se envia desde el index que es la pagina principal, desde otras paginas como nosotros no se envia por lo tanto el valor de la guitarra sera undefined o null y para evitar errores le damos un valor por defecto en el caso de que no se pase el valor de la guitarra desde index.js a Layout.js por estar en otra pagina
Layout.defaultProps = {
    guitarra: null
}

export default Layout