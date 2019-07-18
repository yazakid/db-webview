<template>
    <div class="hello">
        <button @click="navigateTo()">打开新页面</button>
        <button @click="navigateBack()">后退</button>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: {
            page: String
        },

        methods: {
            navigateTo: function(){
                self.gic && gic.navigateTo({
                    url: 'http://localhost:8000/#/list'
                });
                this.$router.push(this.page);

            },
            navigateBack: function(){
                self.gic && gic.navigateBack();
                this.$router.back();
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
