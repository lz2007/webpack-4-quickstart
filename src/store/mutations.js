export default {
    increment(state) {
        // 变更状态
        state.count++
    },

    changeLogin(state, isLogin) {
        state.isLogin = isLogin;
    }
}