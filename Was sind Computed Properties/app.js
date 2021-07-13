new Vue({

    el:'#app',
    data:{
        firstName:'',
        lastName:'',
    },
    computed:{
        fullName(){
           return this.firstName+' '+this.lastName;
        }
    },
    methods: {
        fullname: function(){
            return this.firstName+' '+this.lastName;
        }
    },
});