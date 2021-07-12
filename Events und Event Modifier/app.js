new Vue({
    el:'#app',
    data: {
        myValue: 42 ,

    },

    methods: {
        add: function(){
            this.myValue++;
        },

        substract: function(){
            this.myValue--;
        },
    },
});