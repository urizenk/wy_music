/*
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 19:43:01
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-18 19:44:17
 * @FilePath: \wy_music\src\plugins\index.js
 * @Description: 对vant组件按需引入的集中管理
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import {Button,Swipe,SwipeItem,Tag } from 'vant';

let plugins = [Button,Swipe,SwipeItem,Tag];

export const useVant=(app)=>{
    plugins.forEach(plugin=>{
        app.use(plugin);
    })
}