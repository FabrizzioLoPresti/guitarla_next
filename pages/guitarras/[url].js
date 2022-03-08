import React from 'react'
import {useState} from 'react'
import Image from 'next/image';
import Layout from '../../components/Layout'
import styles from '../../styles/Guitarra.module.css'

const Producto = ({guitarra, agregarCarrito}) => {

    const {id, nombre, descripcion, precio, url, imagen} = guitarra[0];
    const [cantidad, setCantidad] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(cantidad < 1) {
            alert('La cantidad no es valida');
            return;
        }

        // Agregar al carrito
        agregarCarrito({
            id,
            nombre,
            precio,
            imagen: imagen.url,
            cantidad
        });
    }

    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image
                    src={imagen.url}
                    alt={`Imagen Guitarra ${nombre}`}
                    width={180}
                    height={350}
                    layout="responsive"
                    priority={true}
                />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label >Cantidad:</label>
                        <select 
                            name="cantidad"
                            id="cantidad"
                            value={cantidad === 0 ? '0' : cantidad}
                            onChange={(e) => setCantidad(parseInt(e.target.value))}
                        >
                            <option value="0" disabled>--Seleccione--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>

                        <input 
                            type="submit"
                            value="Agregar al Carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}) {
    // url toma el nombre del archivo que se encuentra en la url del navegador (ej: /guitarras/guitarra-1) y lo convierte en una url valida para el servidor
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`;
    const respuesta = await fetch(urlGuitarra);
    const guitarra = await respuesta.json();

    return {
        props: {
            guitarra
        }
    }
}

export default Producto