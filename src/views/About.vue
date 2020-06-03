<template>
    <div>
        <drawer/>
        <logo/>
        <h3 class="tc o9 mt-2">This is the About</h3>
        <des/>
    </div>
</template>

<script>

import drawer from '../Bloks/nav/drawer'
import logo from '../components/logo'
import des from '../components/des'

export default {
    components:{
        logo,
        des,
        drawer
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/colors'

h3
    font-weight: 300

</style>