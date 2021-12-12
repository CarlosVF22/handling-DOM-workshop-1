
/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector('#app');

//utilizarlo siempre que sea posible
//delegacion de eventos
appNode.addEventListener("click", (event)=> {
    if (event.target.nodeName ==="H2"){
        window.alert("hola");
    }
});

const formatPrice = (price) =>{

    const newPrice= new window.Intl.NumberFormat('en-En',{
        style:"currency",
        currency:"USD",
    }).format(price)

    return newPrice
}

//API Intl - internacionalizacion
//1.fechas en este caso no usaremos la fecha
//2.formato a monedas

// web api
// conectarnos al servidor
// nos estamos conectando con promesas

window
    .fetch(`${baseUrl}/api/avo`)   
    // procesar la respuesta y convertirla en JSON
    .then(respuesta => respuesta.json())
    //Json -> Data -> renderizar info en el browser
    .then(responseJson => {
        const todosLosItems =[];
        responseJson.data.forEach((item) => {
            //creando imagen
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className="rounded-full"
             //URL de la imagen
            //crear titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className ="text-xl"; //utilizaremos framework tailwinds

            //Manera de escuchar poco eficiente
            // title.addEventListener("click", ()=> {
            //     window.alert("hola");
            // });

            //crear precio
            const price = document.createElement("div");
            //utilizando API internacional
            price.textContent = formatPrice(item.price);

            // Agregando las etiquetas creadas a un contenedor
            const container = document.createElement("div");
            container.className="shadow hover:bg-red-50"
            container.append(imagen, title, price);

            todosLosItems.push(container);
        })
        appNode.append(...todosLosItems);
    });
