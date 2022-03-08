import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])

  useEffect(() => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoStorage);
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito])

  const agregarCarrito = (producto) => {
    if(carrito.some(articulo => articulo.id === producto.id)) {
      setCarrito(carrito.map(articulo => articulo.id === producto.id ? {...articulo, cantidad: producto.cantidad} : articulo))
    } else {
      setCarrito([...carrito, producto])
    }
  }

  const actualizarCantidad = producto => {
    setCarrito(carrito.map(articulo => articulo.id === producto.id ? {...articulo, cantidad: producto.cantidad} : articulo))
  }

  const eliminarProducto = id => {
    // No modifico el Arreglo Original
    const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }

  return <Component 
    {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarProducto={eliminarProducto}
  />
}

export default MyApp