<template>
        <div>
                <NavBar page="/"/>
                <article>
                        <h1 class="news-title">俄交通部：失火客机遇难乘务员将被追授勇士勋章</h1>
                        <p>
                        <h3>原标题：俄交通部：失火客机遇难乘务员将被追授勇士勋章）</h3>
                                <img src="https://open-image.nosdn.127.net/e0baba1745524ad2acd049de076ef964.png"  class="news-img" />
                                7.jpg俄航遇难乘务员马克西姆·莫伊谢耶夫 （图源：《共青团真理报》）

                                海外网5月7日电 俄罗斯交通部长叶夫根尼·迪特里希7日表示，他将向普京总统提出申请，追授5日在俄航SSJ-100型客机起火事件中遇难的乘务员马克西姆·莫伊谢耶夫俄罗斯勇士勋章。

                                塔斯社援引俄交通部新闻处消息称，“部长迪特里希将向俄罗斯总统申请，向俄罗斯国际航空公司21岁的遇难乘务员马克西姆·莫伊谢耶夫追授勇士勋章，以表彰他在紧急情况下救援民众所表现出的奉献精神、勇气和决心。”

                                莫伊谢耶夫在客机起火期间，一直试图打开飞机后部的紧急出口疏散乘客，但没有成功，最终不幸遇难。

                                此外，两名女乘务员塔基亚娜·卡萨特金（Tatyana Kasatkina）和克谢尼娅·福克里（Ksenia Vogel）奖章也将被授予勋章。

                                俄罗斯勇士勋章以表彰俄罗斯公民在维护公共秩序、打击犯罪以及在自然灾害和火灾等紧急情况下，救援民众表现出的无私和勇气。

                                俄罗斯国际航空公司一架航班号为SU1492的苏霍伊超级100型客机5日在莫斯科谢列梅捷沃机场迫降后起火，事故造成至少41人丧生。客机的两个黑匣子已经被找到，侦查人员正在对其进行分析处理。关于导致本次事故的原因，俄联邦侦查委员会发言人斯维特兰娜·彼得连科6日表示，“侦查人员在分析多种可能原因，包括飞行员、空管人员、技术检测人员业务能力不足，飞机故障和气象条件不利等。”
                        </p>
                </article>


        </div>
</template>

<script>
    import NavBar from '../components/NavBar.vue'
    export default {
        name: 'detail',
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
        .news-img{
                border: 1px solid gray;
                padding: 2px;
                width: 100%;
        }
        .news-title{
                color:blue
        }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;

    }
</style>
