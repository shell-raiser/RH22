<template>
    <header>
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
            <button>Sign-up</button>
        </div>

    </header>
</template>
<script>
export default {
    methods: {
        login() {
            this.$store.commit('loginData/toggle')
        },
        
    }
}
</script>