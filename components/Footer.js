import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
                {/* Tomar fecha desde el servidor con Node/Express*/}
                <p className={styles.copyright}>
                    Todos los derechos reservados {new Date().getFullYear()} - GuitarLA &copy;
                </p>
            </div>
        </footer>
    );
};

export default Footer;