import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from "../components/Layout";
import styles from "../styles/Carrito.module.css";

const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0)
    useEffect(() => {
        const totalCarrito = carrito.reduce((total, articulo) => total + (articulo.precio * articulo.cantidad), 0)
        setTotal(totalCarrito)
    }, [carrito])

    return (
        <Layout
            pagina='Carrito de Compras'
        >
            <h1 className='heading'>Carrito de Compras</h1>
            <main className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.length === 0 ? 'No hay productos en el carrito' : (
                        carrito.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div>
                                    <Image 
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                        width={250}
                                        height={500}
                                        layout="responsive"
                                        priority="true"
                                    />
                                </div>

                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <p>Cantidad:</p>
                                        <select 
                                            name="cantidad"
                                            id="cantidad"
                                            value={producto.cantidad}
                                            className={styles.select}
                                            onChange={e => actualizarCantidad({
                                                id: producto.id,
                                                cantidad: e.target.value
                                            })}
                                        >
                                            <option value="0" disabled>--Seleccione--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>$<span>{producto.precio}</span></p>
                                    <p className={styles.subtotal}>Subtotal: $<span>{producto.precio * producto.cantidad}</span></p>
                                </div>

                                <button
                                    type="button"
                                    className={styles.eliminar}
                                    onClick={() => eliminarProducto(producto.id)}
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del Pedido</h3>
                            <p>Total a Pagar: $<span>{total}</span></p>
                        </>
                    ) : <p>No hay Productos en el Carrito</p>}
                </div>
            </main>
        </Layout>
    )
}

export default Carrito