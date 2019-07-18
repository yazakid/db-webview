<template>
        <div>
                <h1>Vue List Page</h1>
                <NavBar page="detail"/>
        </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    export default {
        name: 'list',
        components: {
            NavBar
        },
        methods: {


        },
        data(){
            return {
                count: 0,
                top:0
            }
        },
        mounted(){
//   setTimeout(()=>{
//     this.start()
//   },100)
        }
    }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

    }
</style>
