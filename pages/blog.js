// Pagina de Blog

import Link from "next/link";
import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({entradas}) => {

    // console.log(entradas);

    return(
        <Layout
            // Props de Layout
            pagina='Blog'
        >
            <main className="contenedor">
                <ListadoBlog 
                    entradas={entradas}
                />
            </main>
        </Layout>
    )
};

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    // Se muestra en Consola del Servidor
    // console.log(entradas);

    return {
        props: {
            entradas
        }
    }
}

export default Blog;