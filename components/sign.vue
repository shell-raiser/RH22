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
var userList
async function smth() {
    userList = await fetch('https://storageapi.fleek.co/1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket/users.json')
    userList = await userList.json()
    console.log(userList)
}
smth()
export default {
    methods: {
        login() {
            this.$store.commit('loginData/login', document.getElementById("username").value)
            console.log(this.$store.state.loginData.user)
        },
        signUp() {
            username = document.getElementById("username").value
            var allUsers = userList.usernames
            if (allUsers.includes(username)) {
                // alert("Username exists !")
                document.getElementById("alert").innerHTML = "Username Exists!"
            }
            else {
                async function getDB() {


                    const res = await fetch('https://storageapi.fleek.co/1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket/users.json')

                    var alldata = await res.json();
                    // alldata.push(theElement);
                    alldata.usernames.push(username)


                    // delte old file and create new
                    await deleteAllData()
                    // upload alldata
                    await alldataUpload(JSON.stringify(alldata));

                }
                getDB();
                document.getElementById("alert").innerHTML = "Account Created"
                this.login()
            }
        },
        async alldataUpload(data) {
            const input = {
                apiKey,
                apiSecret,
                key: 'users.json',
                data,
            };

            try {
                const result = await fleek.upload(input);
            } catch (e) {
                console.log('error', e);
            }
        },
        async deleteAllData() {
            try {
                const result = await fleek.deleteFile({
                    apiKey,
                    apiSecret,
                    key: 'alldata.json',
                    bucket: '1e4f9433-e9a2-4412-a561-9a1ddf54e93c-bucket',
                });
            } catch (e) {
                console.log('error', e);
            }

        }

    }
}
</script>