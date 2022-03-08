// Pagina de cada Entrada del Blog - Routing dinamico

// import { useRouter } from "next/router"
import Image from "next/image";
import Layout from "../../components/Layout"
import { formatearFecha } from "../../helpers";
import styles from '../../styles/Entrada.module.css';

const EntradaBlog = ({entrada}) => {

    // const router = useRouter();
    // console.log(router.query);
    // console.log(entrada)

    const {contenido, imagen, published_at, titulo} = entrada;

    return (
        <Layout
            // Props de Layout
            pagina={titulo}
        >
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image 
                        src={imagen.url}
                        alt={`Imagen de la entrada ${titulo}`}
                        width={800}
                        height={600}
                        layout="responsive"
                    />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

// export async function getServerSideProps({query: {id}}) {
//     const url = `${process.env.API_URL}/blogs/${id}`;
//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json();

//     // Se muestra en Consola del Servidor
//     console.log(entrada);

//     return {
//         props: {
//             entrada
//         }
//     }
// }

// getStaticProps en el caso de que sea Routing Dinamico no funciona igual, por lo que hay que pasarle la otra funcion de getStaticPaths
// Con getStaticProps todas las paginas se van a construir al momento de ejecutar el servidor npm run build y lo subas a un servidor
// getStaticPaths identifica que paginas va a construir y va a identificar y traer los enlaces
// getStaticProps va a traer la informacion y la va a colocar dentro de esos enlaces
export async function getStaticPaths() {
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    // Damos implicito el Return con ({})
    const paths = entradas.map(entrada => ({
        params : {
            id: entrada.id.toString()
        }
    }))

    // Muchas entradas fallback: true -> construye las paginas que el usuario solicita
    // Pocas entradas fallback: false -> construye todas las paginas
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {id}}) {
    const url = `${process.env.API_URL}/blogs/${id}`;
    const respuesta = await fetch(url);
    const entrada = await respuesta.json();

    // Se muestra en Consola del Servidor
    console.log(entrada);

    return {
        props: {
            entrada
        }
    }
}

export default EntradaBlog