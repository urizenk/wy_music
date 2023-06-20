/*
 * @Author: yff kot123778@163.com
 * @Date: 2023-06-18 17:32:36
 * @LastEditors: yff kot123778@163.com
 * @LastEditTime: 2023-06-18 17:50:15
 * @FilePath: \wy_music\public\js\rem.js
 * @Description:
 * 123dot
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const remSize = () => {
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    // 750为设备宽度的界限，当大于等于750时，将html的font-size设置为100px，否则设置为设备宽度/750*100
    if (deviceWidth >= 750) {
        deviceWidth = 750;
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320;
    }

    document.documentElement.style.fontSize = `${deviceWidth / 7.5}px`;

    document.querySelector('body').style.fontSize = 0.3+"rem";
};
//初始化的时候适配
remSize();

window.onresize = () => {
    remSize()
};
