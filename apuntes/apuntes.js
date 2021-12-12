// //utilizando async y await

// //web api
// async function fetchData() {
//     const response = await fetch(url),
//     data = await response.json(),
//     allItems = [];

//     data.data.forEach((item) => {
//     // create image
//     const image = document.createElement("img");
//     // create title
//     const title = document.createElement("h2");
//     // create price
//     const price = document.createElement("div");

//     const container = document.createElement("div");
//     container.append(image, title, price);

//     allItems.push(container);
//     });

//     document.body.append(...allItems)
// }

// fetchData();


//alternativa mejor optimizada con promesas

// let fragment = document.createDocumentFragment();

// fetch(url)
// 	.then((res) => res.json())
// 	.then((data) => {
// 		//creamos el fragment
// 		let fragment = document.createDocumentFragment();

// 		data.data.forEach((item) => {
// 			let image = document.createElement('img');

// 			let title = document.createElement('h2');

// 			let price = document.createElement('span');

// 			const container = document.createElement('div');
// 			container.append(image, title, price);
// 			//agregamos los nodos al fragment y no al DOM directamente
// 			fragment.appendChild(container);
// 		});
// 		//solo renderizamos una sola vez el DOM
// 		document.body.append(fragment);
// 	});