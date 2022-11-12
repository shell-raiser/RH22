<template>
    <div>
        <nav>
            <a href="/">Home</a>
            |
            <a href="/login">Login</a>
        </nav>
        <header>
            <h1>Login / Sign-up</h1>
            <!-- <div style="text-align: center;align-items:center; right: 50%;"> -->
            <signVue/>
            <button v-if="$store.state.loginData.user" @click="logout">Log out</button>
        </header>

        <!-- <img :src=myFile /> -->
        <!-- <div id="container"></div> -->
        <!-- {publicKey && <div>user: {publicKey}</div>} -->
        <footerComponent />
    </div>
</template>
<script>
import footerComponent from '../components/footer.vue';
import signVue from '~/components/sign.vue';

import fleekStorage from '@fleekhq/fleek-storage-js';
var myFile;

export default {
    name: 'Login',
    mounted() {
        // const apiKey = process.env.FLEEK_API_KEY;
        // console.log(apiKey)
        // const apiSecret = process.env.FLEEK_API_SECRET;
        console.log(this.$store.state.loginData.user)
        async function caller() {
            // myFile = await fleekStorage.get({
            //     apiKey: process.env.FLEEK_API_KEY,
            //     apiSecret: process.env.FLEEK_API_SECRET,
            //     key: '1659972572813.png',
            //     getOptions: [
            //         'data',
            //         'bucket',
            //         'key',
            //         'hash',
            //         'publicUrl'
            //     ],
            // })
            // myFile = await fleekStorage.getFileFromHash({
            //     hash: 'bafybeib6c7os6b5tpl6zgcm7c3xyxld36ogvfoloz77edycf23pzekf4ju',
            // })
            // console.log(myFile)
            // return myFile

        }

        // console.log(caller())
        // caller()

    },
    // data: {
    //     theImg: myFile
    // },
    // data:{
    // },
    methods: {
        logout() {
            this.$store.commit('loginData/toggle')
        }
    },
    components: { footerComponent,signVue }
}

</script>