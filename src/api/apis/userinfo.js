import api from "@/api/index.js"

export const getUserInfo = (uid) => {
    return api({
        method:"GET",
        url:"/user/detail?uid="+uid
    });
}