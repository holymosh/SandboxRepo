new Vue({
    el:"#app",
    data:{
        currentComponent:'square'
    },
    components:{
        square:{
            template:'#square-template'
        },
        triangle:{
            template:'#triangle-template'
        },
        circle:{
            template:'#circle-template'
        },
        egg:{
            template:'#egg-template'
        },
    },
    methods:{
        switchComponent: function(component){
            this.currentComponent = component;
        }
    }
})