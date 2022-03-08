// Pagina de Error 404

import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Error404.module.css";

const Error404 = () => {
    return(
        <Layout
            // Props de Layout
            pagina='Error 404'
        >
            <div className={styles.error}>
                <h1 className="heading">Pagina No Encontrada</h1>
                
                <Link href="/">Ir a Inicio</Link>
            </div>
        </Layout>
    )
};

export default Error404;