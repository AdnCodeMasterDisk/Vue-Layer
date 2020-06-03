<template>
    <div>
        <nav class="nav1 df jcb ma e-1">
            <div class="logo">
                <a href="https://vuejs.org/"><p class="logotxt"> Vue </p></a>
            </div>
            <div class="jce">
                <router-link class="link p-2 mt-2" to="/"> Home </router-link>
                <router-link class="link p-2 mt-2" to="/about"> About </router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>

@import '../../sass/colors.sass'
@import '../../sass/typography.scss'
@import '../../sass/elevation.scss'

.nav1
    background-color: $wt
    padding: 20px
    z-index: 200

.logotxt
    font-family: $f1
    font-weight: 600
    font-size: 1.2em
    color: $c2

.link
    text-align: center
    text-decoration: none
    font-size: 1em
    color: rgba(0, 0, 0, 1)
    font-family: $f1
    opacity: 0.4
    transition: all .3s
    font-weight: 400

.link:hover
    opacity: 1
    color: $c2
    text-shadow: 0px 0px 14px rgba(0, 0, 0, 0.05 )

</style>