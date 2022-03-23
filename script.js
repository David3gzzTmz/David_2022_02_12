var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Usted cargó esta página el ' + new Date().toLocaleString()
  }
})
// Loop (v-if)
var api = new Vue({
      el: '#apex',
      data: {
        isHidden: false
      }
    })

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Construir algo increíble' }
    ]
  }
})

// Loop (v-for)
var Datos=new Vue({
  el: '#Juegos',
  data: {
    object: {
      title: 'Paladins',
      author: 'Mario Bros',
      publishedAt: 'Juegos Retro'
    }
  }
})
//Input  (v-on:click)
var Instrumentos= new Vue({
  el: '#Instrum',
  methods: {
    di: function (mensaje) {
      alert(mensaje)
    }
  }
})

//User Input (v-model)
var Youtube=new Vue({
  el: '#yt',
  data: {
    selected: 'Seleccióna main',
    options: [
			{ text: 'Religion', value: 'La voz de Jesús, Ascencion, Padre Adolfo' },
      { text: 'Musica', value: 'Luis Miguel' },
      { text: 'Noticias', value: 'TldrNews, Philip DeFranco' },
      { text: 'Politica', value: 'TldrNews' },
			{ text: 'Reseñas', value: 'Caja de Peliculas, Dayoscript, LevelUp' },
			{ text: 'Tech', value: 'Linus, NateGentile' },
			{ text: 'Cocina', value: 'Adam Raguesa' }
    ]
  }
})
