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
        _switchComponent: function (component) {
            this.currentComponent = component;
        },
        get switchComponent() {
            return this._switchComponent;
        },
        set switchComponent(value) {
            this._switchComponent = value;
        },
    }
})