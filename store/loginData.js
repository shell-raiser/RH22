export const state = () => ({
    user: false
})

export const mutations = {
    // ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    //     if (authUser) {
    //         state.user = {
    //             uid: authUser.uid,
    //             // email: authUser.email,
    //             displayName: authUser.displayName,
    //             // idDoc: claims.doctor
    //         }
    //     }
    //     else {
    //         state.user = false
    //     }
    // }
    toggle: (state) => {
        state.user = !state.user
    }
}

// export const plugins = [vuexLocal.plugin]