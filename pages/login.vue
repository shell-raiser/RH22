<template>
    <div>
        <nav>
            <a href="/">Home</a>
            |
            <a href="/login">Login</a>
        </nav>
        <h1>Hi</h1>

        <button>Login</button>
        <!-- {publicKey && <div>user: {publicKey}</div>} -->
    </div>
</template>
<script>
import fleekStorage from '@fleekhq/fleek-storage-js';
import { async } from 'q';
// import 'fs'
// require('dotenv').config()

export default {
    name: 'Login',
    // data: {
    // apiKey: process.env.FLEEK_API_KEY,
    // apiSecret: process.env.FLEEK_API_SECRET
    // },
    mounted() {
        // const apiKey = process.env.FLEEK_API_KEY;
        // console.log(apiKey)
        // const apiSecret = process.env.FLEEK_API_SECRET;
        var myFile;
        async function caller() {
            myFile = await fleekStorage.get({
                apiKey: process.env.FLEEK_API_KEY,
                apiSecret: process.env.FLEEK_API_SECRET,
                key: 'bafybeib6c7os6b5tpl6zgcm7c3xyxld36ogvfoloz77edycf23pzekf4ju',
                getOptions: [
                    'data',
                    'bucket',
                    'key',
                    'hash',
                    'publicUrl'
                ],
            })
            return myFile
        }
        console.log(caller())

    },
    // data:{
    // },
    methods: {

    }
}

</script>