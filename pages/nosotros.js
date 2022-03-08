// Pagina de Nosotros

import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
    return(
        <Layout
            // Props de Layout
            pagina='Nosotros'
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image 
                        src="/img/nosotros.jpg"
                        alt="Imagen sobre Nosotros"
                        width={600}
                        height={450}
                        layout="responsive"
                    />
                    
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem psum dolor sit amet, consectetur adipiscing elit aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem psum dolor sit amet, consectetur adipiscing elit aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem psum dolor sit amet, consectetur adipiscing elit aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem psum dolor sit amet, consectetur adipiscing elit aliquam.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
};

export default Nosotros;