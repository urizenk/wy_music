/*
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 21:16:06
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-18 21:26:44
 * @FilePath: \wy_music\src\api\apis\home.js
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import api from "@/api/index.js"

export const getBanner = (type) => {
    return api({
        method:"GET",
        url:"/banner?type="+type
    });
}
export const getMusicList = (limits) =>{
    return api({
        method:"GET",
        url:"/personalized?limit="+limits
    });
}