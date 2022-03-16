var app = new Vue({
	el: '#app',
		data: {
			message : '¡Bienvenidos a Vegeta oficial la página oficial de Vegeta!'
		}
});

var app2 = new Vue({
	el: '#app2',
		data: {
			bucl:[
				{message: "Hola"},
				{message: "¿No tienes entradas en Mercados Libros Tec? "},
				{message: "Yo si tengo"}
				
			]
		}
});

var app3 = new Vue({
	el: '#app3',
		data: {
				nombre:'David',
				fecha:'15 de Marzo',
				clase:'Desarrollo de apps web'
		}
});

var iVegeta = new Vue({
el: '#iVegeta',
data:	{
vegeta: 'https://i.quotev.com/img/q/u/15/6/11/cad6aeaf90-imag.jpg'
}});
