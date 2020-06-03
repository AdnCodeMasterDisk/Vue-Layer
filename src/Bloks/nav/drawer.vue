<template>
<div>
    <!--Cont ico-->
    <div class=" pf contmenuico" v-on:click="opendrawer()">
        <span class="material-icons">menu</span>
    </div>

    <!--Cont drawer-->
    <div class="pf e-10 df" v-bind:class="[ 'drawer' , drawersys ? 'draweroff' : 'draweron' ]">
        <!--cont header drawer-->
        <div class="headerdrawer df ">
            <div class="shapedrawer">
                <p class="tc">V</p>
            </div>
            <p class="titdr">{{titulo}}</p>
            <p class="subdr">correo@gmail.com</p>
        </div>
        <!--Cont links-->
        <div class="mt-1">
            <!--Cont link-->
            <div class="contlink">
                <span class="material-icons icodrawer">settings</span>
                <router-link to="/">
                    <p>Home</p>
                </router-link>
            </div>
            <!--Cont link-->
            <div class="contlink">
                <span class="material-icons icodrawer">info</span>
                <router-link to="/about">
                    <p>About</p>
                </router-link>
            </div>
        </div>
    </div>

    <!--cont layer-->

    <div v-bind:class="[ 'layer' , drawersys ? 'layeron' : 'layeroff' ]" v-on:click="closedrawer()">

    </div>
</div>
</template>

<script>
export default {
    data: function(){
        return {
            titulo : 'Vue Fw',
            drawersys : false
        }
    },

    methods:{
        opendrawer(){
            this.drawersys = true;
        },

        closedrawer(){
            this.drawersys = false;
        }
    }
}
</script>

<style lang="sass" scoped>

@import '../../sass/colors.sass'
@import '../../sass/typography.scss'
@import '../../sass/elevation.scss'

$sl: 20px

.contmenuico
    top: 1em
    right: 1em
    cursor: pointer
    z-index: 1000

.drawer
    width: 256px
    height: 100vh
    background-color: white
    top: 0
    border-right: 1px solid $b1
    flex-direction: column
    z-index: 30000
    transition: all 0.2s

.draweroff
    left: 0px

.draweron
    left: -400px

.contlink
    width: 85%
    padding-left: $sl
    font-size: .95em
    display: flex
    padding-top: 16px
    padding-bottom: 16px
    margin-bottom: 5px

    p
        width: 220px
        color: black
        transition: all 0.3s
        opacity: 0.6
        font-family: $f1
        font-weight: 400

    p:hover
        color: $c2

    p:active
        color: $c2

.icodrawer
    padding-right: 20px
    opacity: 0.6
    color: $c1
    font-size: 1.4em
    margin-top: -3px

.headerdrawer
    border-bottom: 1px solid $b1
    width: 100%
    flex-direction: column
    //background-color: $c1
    //background: $g1

.shapedrawer
    width: 45px
    height: 45px
    background-color: $c2
    border-radius: 50%
    margin-top: 30px
    margin-left: $sl

    p
        color: white
        font-family: $f1
        font-weight: 400
        padding-top: 12px
        font-size: 1.2em

.titdr
    color: black
    font-family: $f1
    font-weight: 500
    padding-top: 12px
    font-size: 1.2em
    letter-spacing: -1px
    margin-left: $sl

.subdr
    color: black
    font-family: $f1
    font-weight: 400
    padding-top: 2px
    font-size: 0.7em
    letter-spacing: 0px
    margin-left: $sl
    opacity: 0.5
    padding-bottom: 20px

.layer
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.03)
    position: fixed
    top: 0
    left: 0
    z-index: 200
    cursor: pointer
    transition: all 0.5s

.layeron
    display: block

.layeroff
    display: none

</style>