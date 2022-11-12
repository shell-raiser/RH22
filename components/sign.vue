<template>
    <header>
        <div id="alert" style="color: red;"></div>
        <form v-if="!$store.state.loginData.user">
            <label for="username">Username</label>
            <input id="username" type="text">

            <label for="password">Input Password</label>
            <input id="password" type="password">
        </form>
        <!-- </div> -->
        <div v-if="!$store.state.loginData.user">
            <button @click="login">Login</button>
            or
            <button @click="signUp">Sign-up</button>
        </div>

    </header>
</template>
<script>
var userList;
import fleek from '@fleekhq/fleek-storage-js';
async function smth() {
    userList = await fetch('https://storageapi.fleek.co/1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket/users.json')
    userList = await userList.json()
    // console.log(userList)
}
smth()
var apikey = process.env.FLEEK_API_KEY;
// console.log(process.env.FLEEK_API_KEY)
var apisecret = process.env.FLEEK_API_SECRET;
// console.log(process.env.FLEEK_API_SECRET)
export default {
    methods: {
        login() {
            this.$store.commit('loginData/login', document.getElementById("username").value)
            console.log(this.$store.state.loginData.user)
        },

        async alldataUpload(data) {
            const input = {
                apiKey: apikey,
                apiSecret: apisecret,
                key: 'users.json',
                data,
            };
            try {
                const result = await fleek.upload(input);
                console.log("uploaded")
            } catch (e) {
                console.log('error', e);
            }
        },
        async deleteAllData() {
            console.log("deleted")
            try {
                const result = await fleek.deleteFile({
                    apiKey: apikey,
                    apiSecret: apisecret,
                    key: 'users.json',
                    bucket: '1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket',
                });
            } catch (e) {
                console.log('error', e);
            }
        },
        signUp() {
            username = document.getElementById("username").value
            var allUsers = userList.usernames
            if (allUsers.includes(username)) {
                // alert("Username exists !")
                document.getElementById("alert").innerHTML = "Username Exists!"
            }
            else {
                this.getDB();
                document.getElementById("alert").innerHTML = "Account Created"
                this.login()
            }
        },
        async getDB() {
            const res = await fetch('https://storageapi.fleek.co/1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket/users.json')
            var alldata = await res.json();
            // alldata.push(theElement);
            alldata.usernames.push(username)
            // delte old file and create new
            await this.deleteAllData()

            // upload alldata
            await this.alldataUpload(JSON.stringify(alldata));
        }

    }
}
</script>