import {defineStore} from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            isSignedIn: false,
            username: '',
        }
    },
    actions: {
        async signIn(login: string, password: string) {
            if (password === '123') {
                this.username = login;
                this.isSignedIn = true;
                return true;
            }
            return false;
        },
        signOut() {
            this.isSignedIn = false;
            this.username = '';
        }
    }
});
