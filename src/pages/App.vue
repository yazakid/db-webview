<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <NavBar page="list"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h2>{{ count }}</h2>
    <ul>
      <li v-for="n in 500">
       {{ count }}
      </li>
    </ul>
    <div id="ani" v-bind:style="'background:blue;height:100px;width:100px;top:'+this.top+'px;position:absolute;z-index:999;transition:top 10s;'">
      <button id="start" @click="start()">start</button>
      <button @click="stop()">pause</button>
    </div>

  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import NavBar from '../components/NavBar.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar
  },
  methods: {
      navigateTo: function(){
        console.log('goto next');

        gic.navigateTo({
            url: 'http://localhost:8000/#/list'
        });
        this.$router.push('list');

      },
      start: function (){
          let setInterval2 = (callback)=>{
              while(this.count<10){
//                  requestAnimationFrame(callback.bind(this))
              }
          }
          var turn = true;
          if(this.timerID) return;

           this.timerID = setInterval((()=>{

               if( this.count % 400==0) {
                      console.log('this.top', this.top)

                       turn ? (this.top=600) : (this.top=0);
                   turn = !turn;
               }
               this.count++;
           }),17);

      },
      stop: function () {
         clearInterval(this.timerID);
         this.timerID = null;
      }

  },
    render(){
      return (
          <div></div>
      )
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
