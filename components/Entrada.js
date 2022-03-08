import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({entrada}) => {
    
    const {id, url, titulo, resumen, published_at, imagen} = entrada;

    return (
        <article>
            <Image
                src={imagen.url}
                alt={`Imagen de la entrada ${titulo}`}
                width={800}
                height={600}
                layout="responsive"
                priority="true"
            />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <p className={styles.resumen}>{resumen}</p>

                {/* Rutas Dinamicas Next.js */}
                {/* <Link href={`/blog/${id}`}>
                    <a className={styles.enlace}>
                        Leer más
                    </a>
                </Link> */}
                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>
                        Leer más
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Entrada