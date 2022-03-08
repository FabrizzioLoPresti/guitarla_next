import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

const Header = ({guitarra}) => {

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link
                        href="/"
                    >
                        <a>
                            <Image 
                                src="/img/logo.svg"
                                alt="Logo de GuitarLA"
                                width={400}
                                height={100}
                            />
                        </a>
                    </Link>

                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                        <Link href="/carrito">
                            <a>
                                <Image 
                                    src="/img/carrito.png"
                                    alt="Carrito de compras"
                                    width={30}
                                    height={24}
                                />
                            </a>
                        </Link>
                    </nav>
                </div>

                {guitarra && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitarra.nombre}</h2>
                        <p>{guitarra.descripcion}</p>
                        <p className={styles.precio}>${guitarra.precio}</p>

                        <Link href={`/guitarras/${guitarra.url}`}>
                            <a className={styles.enlace}>
                                Ver Producto
                            </a>
                        </Link>
                    </div>
                )}
            </div>

            {router.pathname === "/" && (
                <div className={styles.guitarra}>
                    <Image 
                        src="/img/header_guitarra.png" 
                        alt="Imagen Header Guitarra"
                        layout="fixed"
                        width={500}
                        height={1200}
                        priority="true"
                    />
                </div>
            )}
            
        </header>
    );
};

export default Header;