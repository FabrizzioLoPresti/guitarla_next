// Pagina de Error 500

import Link from "next/link";
import Layout from "../components/Layout";

const Error500 = () => {
    return(
        <Layout
            // Props de Layout
            pagina='Error 500'
        >
            <h1>Desde Error 500</h1>

            <Link href="/">Ir a Inicio</Link>
        </Layout>
    )
};

export default Error500;