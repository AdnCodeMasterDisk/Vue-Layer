<template>
    <div>
        <div class="appcont df  jcb">
            <!--Dashboardmenu start-->
            <dashboardclear/>
            <!--Dashboardmenu end-->
            <!--In this part star content of the view-->
            <div class="contapp">
                <logo/>
                <h3 class="tc o9 mt-2">This is the home</h3>
                <des/>
            </div>
            <!--In this part end content of the view-->
        </div>
    </div>
</template>

<script>

import dashboardclear from '../Bloks/dashboard/dashboardclear'
import logo from '../components/logo'
import des from '../components/des'

export default {
    components:{
        logo,
        des,
        dashboardclear
    }
}
</script>

<style lang="sass" scoped>
@import '../sass/colors'

h3
    font-weight: 300

.contapp
    width: 85%
    margin-top: 60px

</style>