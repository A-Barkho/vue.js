new Vue({//das ist ein Vue instance.  es manipuliert und kontrolliert DOM(Document Object Model) in diesem Beispiel vom DIV-Tag mit ID 'app' 
  el:'#app',
  data:{
    names: ['Florian','Gustav','Peter'],
    persons: [
      {name:'Florian', age: 20},
      {name:'Gustav', age: 44},
    ]
  }   
});