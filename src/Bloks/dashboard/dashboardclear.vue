<template>
    <div>
        <!--Star section menu-->
        <div class="menu e-2 pf ">
            <div class="logocont">
                <p class="tc">VueClear</p>
            </div>
            <div class="conlink df fc">
                <div class="link df acc">
                    <span class=" icomenu material-icons">home</span>
                    <router-link to="/">
                        <p>Home</p>
                    </router-link>
                </div>
                <div class="link df acc">
                    <span class=" icomenu material-icons">info</span>
                    <router-link to="/about">
                        <p>About</p>
                    </router-link>
                </div>
                <div class="link df acc">
                    <span class=" icomenu material-icons">settings</span>
                    <router-link to="/">
                        <p>Settings</p>
                    </router-link>
                </div>
                <div class="link df acc">
                    <span class=" icomenu material-icons">store</span>
                    <router-link to="/">
                        <p>Store</p>
                    </router-link>
                </div>
            </div>
        </div>
        <!--end section menu-->
        <!--Star secction nav-->
        <div class="navdash pf e-2 jce">

        </div>
        <!--end secction nav-->
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

@import '../../sass/colors.sass'
@import '../../sass/elevation.scss'
@import '../../sass/typography.scss'

$ml: 20px

.menu
    width: 15%
    height: 100vh
    background-color: $wt
    top: 0
    left: 0
    z-index: 5

.navdash
    top: 0
    left: 0
    background-color: $wt
    height: 60px
    width: 100%
    z-index: 4

.logocont
    width: 100%
    height: 60px
    background-color: $c2

    p
        color: $wt
        font-family: $f1
        font-weight: 400
        font-style: italic
        letter-spacing: -1.5px
        font-size: 1.5em
        padding-top: 15px

.conlink
    margin-left: $ml
    margin-top: 20px

.link
    width: 85%
    font-size: .95em
    display: flex
    padding-top: 12px
    padding-bottom: 12px
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


.icomenu
    padding-right: 15px
    opacity: 0.6
    color: $c1
    font-size: 1.4em
    margin-top: -3px

</style>