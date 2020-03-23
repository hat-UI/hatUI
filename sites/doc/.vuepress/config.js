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
                link: '/pages/component/introduce.md'
            }, {
                text: '组件',
                link: '/pages/component/cell.md'

            }, {
                text: '主题',
                link: '/pages/component/theme.md'
            }, {
                text: '示例',
                link: '/pages/component/demo.md'
            }, {
                text: 'Github',
                link: 'https://github.com/hat-UI/hatUI'
            }
        ],
        sidebar: {
            '/pages/component/': [
                {
                    title: '指南',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        ['introduce.md', '快速上手'],
                        ['theme.md', '主题定制'],
                        ['internation.md', '国际化'],
                        ['update.md', '更新日志']
                    ]
                },
                {
                    title: '组件',
                    collapsable: false,
                    sidebarDepth: 0,
                    children: [
                        {
                            title: '布局组件',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                ["cell.md","Cell 列表项"],
                                ["flex.md","Flex flex布局"],
                            ]
                        }, {
                            title: '操作反馈',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: []
                        }, {
                            title: '基础组件',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                ['icon.md', 'Icon 图标'],
                                ['button.md', 'Button 按钮'],
                                ['uploader.md', 'ButtonGroup 按钮组'],
                                ['buttonGroup.md', 'uploader 上传'],
                                ['avatar.md', 'Avatar 头像'],
                                ['popup.md', 'popUp 弹出层']
                            ]
                        }, {
                            title: '导航组件',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                ['tab.md', 'Tab 选项卡'],
                                ['tabBar.md', 'TabBar 标签栏'],
                                ['navBar.md', 'NavBar 导航栏'],
                                ['noticeBar.md', 'NoeticeBar 公告栏'],
                                ['menu.md', 'Menu 菜单'],
                                ['elevator.md', ' Elevator 电梯楼层']
                            ]
                        }, {
                            title: '数据录入',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: []
                        }, {
                            title: '数据展示',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: []
                        }, {
                            title: '业务组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: []
                        }
                    ]
                }
            ]
        }
    }
}