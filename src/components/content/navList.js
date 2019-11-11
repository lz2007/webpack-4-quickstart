const navList = [{
        path: "/content/home",
        name: "首页",
        icon: "el-icon-s-home"
    },
    {
        path: "/content/set-up",
        name: "设置",
        icon: "el-icon-setting"
    },
    {
        path: "/content/personal-center",
        name: "个人中心",
        icon: "el-icon-user-solid"
    },
    {
        name: "Basic",
        icon: "el-icon-menu",
        children: [{
                path: "/content/basic-color",
                name: "Color 色彩"
            },
            {
                path: "/content/basic-button",
                name: "Button 按钮"
            }
        ]
    }
];

export default navList;