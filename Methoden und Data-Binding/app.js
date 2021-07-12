new Vue({//das ist ein Vue instance.  es manipuliert und kontrolliert DOM(Document Object Model) in diesem Beispiel vom DIV-Tag mit ID 'app' 
  el:'#app',
  data:{//in data werden Objekte Keys oder Variabeln geschrieben
    manager:{
      name:'Azad',
      age:34,
    },
    website: 'http://google.com',
    aTag:'<a href="https://www.google.com/search?q=html">Testing html Tag binding</a>',
  },   
  methods:{//hier werden die Methoden reingeschrieben
    sayHello: function(){
      return 'Hello '+this.manager.name;
    }
  },
});