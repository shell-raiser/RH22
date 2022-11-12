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
                <form action="">
                    <label for="input-type-text">Username</label>
                    <input id="input-type-text" type="text">


                    <label for="input-type-password">Input Password</label>
                    <input id="input-type-password" type="password">
                </form>
            <!-- </div> -->
            <button>Login</button>
            or
            <button>Sign-up</button>
        </header>

        <!-- <img :src=myFile /> -->
        <!-- <div id="container"></div> -->
        <!-- {publicKey && <div>user: {publicKey}</div>} -->
    </div>
</template>
<script>
import fleekStorage from '@fleekhq/fleek-storage-js';
var myFile;

export default {
    name: 'Login',
    mounted() {
        // const apiKey = process.env.FLEEK_API_KEY;
        // console.log(apiKey)
        // const apiSecret = process.env.FLEEK_API_SECRET;
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

    }
}

</script>