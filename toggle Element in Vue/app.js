new Vue({//das ist ein Vue instance.  es manipuliert und kontrolliert DOM(Document Object Model) in diesem Beispiel vom DIV-Tag mit ID 'app' 
  el:'#app',
  data:{
    lampOn: '<img src="./lamp-on.jpg" width="200px" height="300px"/>',
    lampOff: '<img src="./lamp-off.jpg" width="200px" height="300px""/>',
    lampLive:"",
    lampStatus: false,
  }, 
  
  methods:{
    toggleLamp: function(){
      if(this.lampStatus){
        this.lampLive=this.lampOff;
        this.lampStatus=false;
      }else{
        this.lampLive=this.lampOn;
        this.lampStatus=true;

      }

    },
  },
});