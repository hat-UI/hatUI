module.exports = {
    title: "移动端组件库",
    description: "hatUI,hat-ui,vue2,mobile,libray,组件库",
    head: [
        ["link", { rel: "icon", href: "/hat.png" }]

    ],
    themeConfig: {
        logo: "/hat.png",
        nav: [
            {
                text: '指南',
                link: '/pages/guide/index.md'
            }, {
                text: '组件',
                link: '/pages/component/index.md'

            }, {
                text: '主题',
                link: '/pages/theme/index.md'
            }, {
                text: '示例',
                link: '/pages/demo/index.md'
            }, {
                text: 'Github',
                link: 'https://github.com/hat-UI/hatUI'
            }
        ],
        sidebar: {
            '/pages/component/':[         
                {
                    title: '介绍',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }, {
                    title: '快速上手',
                    collapsable: false,
                    sidebarDepth: 1
                }, {
                    title: '主题定制',
                    collapsable: false,
                    sidebarDepth: 1
                }, {
                    title: '国际化',
                    collapsable: false,
                    sidebarDepth: 1
                }, {
                    title: '更新日志',
                    collapsable: false,
                    sidebarDepth: 1
                }, 
                {
                    title: '布局组件',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }, {
                    title: '操作反馈',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }, {
                    title: '基础组件',
                    collapsable: true,
                    sidebarDepth: 1,
                    children: [
                        ['icon.md', 'Icon 图标'],
                        ['button.md','Button 按钮'],
                        ['uploader.md','ButtonGroup 按钮组'],
                        ['buttonGroup.md','uploader 上传'],
                        ['avatar.md','Avatar 头像'],
                        ['popup.md','popUp 弹出层']
                    ]
                }, {
                    title: '导航组件',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }, {
                    title: '数据录入',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }, {
                    title: '数据展示',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }, {
                    title: '业务组件',
                    collapsable: false,
                    sidebarDepth: 1,
                    children: []
                }
            ]
        }
    }
}