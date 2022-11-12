<template>
    <div>
        <nav>
            <a href="/">Home</a>
            |
            <a href="/login">Login</a>
        </nav>
        <header>
            <h1>Login / Sign-up</h1>
            <p v-if="$store.state.loginData.user" > Logged in as {{$store.state.loginData.user}}</p>
            <!-- <div style="text-align: center;align-items:center; right: 50%;"> -->
            <signVue />
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
import { all } from 'q';
var userList;
async function smth() {

    userList = await fetch('https://storageapi.fleek.co/1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket/users.json')
    userList = await userList.json()
    console.log(userList)
}
smth()


export default {
    name: 'Login',
    // data: () => ({
    //     allUsers
    // }),
    // mounted() {
    //     // const apiKey = process.env.FLEEK_API_KEY;
    //     // console.log(apiKey)
    //     // const apiSecret = process.env.FLEEK_API_SECRET;
    //     console.log(this.$store.state.loginData.user)
    //     async function caller() {
    //         // userList = await fleekStorage.get({
    //         //     apiKey: process.env.FLEEK_API_KEY,
    //         //     apiSecret: process.env.FLEEK_API_SECRET,
    //         //     key: 'users.json',
    //         //     getOptions: [
    //         //         'data',
    //         //         'bucket',
    //         //         'key',
    //         //         'hash',
    //         //         'publicUrl'
    //         //     ],
    //         // })
    //         userList = await fetch('https://storageapi.fleek.co/1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket/users.json')
    //         userList = userList.json()
    //         // this.allUsers = userList
    //         console.log(userList)
    //         // myFile = await fleekStorage.getFileFromHash({
    //         //     hash: 'bafybeib6c7os6b5tpl6zgcm7c3xyxld36ogvfoloz77edycf23pzekf4ju',
    //         // })
    //         // console.log(myFile)
    //         // return myFile

    //     }

    //     // console.log(caller())
    //     caller()

    // },

    methods: {
        logout() {
            this.$store.commit('loginData/toggle')
        },
    },
    components: { footerComponent, signVue }
}

</script>