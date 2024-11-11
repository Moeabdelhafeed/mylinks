import { defineStore } from "pinia";
import user from "@/user.json"

export const useUserStore = defineStore('UserStore', {
    state: () => ({
        user: user
    }),
});
