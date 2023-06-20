/*
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-19 14:09:26
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-19 14:09:51
 * @FilePath: \wy_music\src\api\apis\item.js
 * @Description: 
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import api from "@/api/index.js"

export const getItem = (id) => {
    return api({
        method:"GET",
        url:"/playlist/detail?id="+id
    });
}