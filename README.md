# Consigna 2:
[X] Configura en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom
[X] Componentes:
        [X] Navbar con cart
        [X] Catálogo
        [X] Detalle de producto

[X] Rutas a configurar
    [X] ‘/’ navega a <ItemListContainer />
    [X] ‘/category/:id’  <ItemListContainer />
    [X] ‘/item/:id’ navega a <ItemDetailContainer />

[X] Links a configurar
    [x] Clickear en el brand debe navegar a ‘/’
    [X] Clickear un Item.js debe navegar a /item/:id
    [X] Clickear en una categoría del navbar debe navegar a /category/:categoryId

[X] Para finalizar deberá integrar los parámetros de tus async-mocks para reaccionar a :itemId y :categoryId ¡utilizando efectos y los hooks de parámetros que vimos en clase! Si te encuentras en una categoría deberías poder detectar la navegación a otra categoría y volver a cargar los productos que correspondan a dicha categoría.

[X] Notas
    [X] No usar HashRouter como en el ejemplo del gif (usar BrowserRouter)
    [X] Utilizar el id de la categoría como nombre en la URL param en vez de números (vehículos, por ej)
    [X] Utilizar el id del item como URL param


# Objetivos 2:
[X] Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.




# Consigna 1:
[X] Crea una carpeta dentro de src llamada components que contenga la implementación del componente NavBar dentro del archivo NavBar.js.
[X] Brand (título/nombre de la tienda).
[X] Un listado de categorías clickeables
[X] Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).
[X] Crea un componente CartWidget.js que haga rendering de un ícono Cart, e inclúyelo dentro de NavBar.js para que esté visible en todo momento.
[X] Crea un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo).
[X] Ubica este componente (CartWidget) dentro de Navbar.
[X] Agrega algunos estilos con bootstrap/materialize u otro.
[X] Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.
[X] Crea un componente ItemListContainer. Impórtalo dentro de App.js, y abajo de NavBar.js.

# Objetivos 1:
[X] Crear el menú e-commerce de tu proyecto.
[X] Crear la landing de tu proyecto.
