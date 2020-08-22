module.exports = {
    title: "",
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
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        ['introduce.md', '快速上手'],
                        ['theme.md', '主题定制'],
                        ['internation.md', '国际化'],
                    ]
                },
                {
                    title: '组件',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        {
                            title: '布局组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                ["flex.md","Flex 布局"],
                            ]
                        }, {
                            title: '操作反馈',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                ['actionsheet.md', 'ActionSheet 动作面板'],
                                ['popup.md', 'PopUp 弹出层'],
                                ['datepicker.md', 'Datepicker 日历'],
                                ['toast.md', 'Toast 吐司'],
                                ['loading.md', 'Loading 加载'],
                            ]
                        }, {
                            title: '基础组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                ["cell.md","Cell 列表项"],
                                ['icon.md', 'Icon 图标'],
                                ['button.md', 'Button 按钮'],
                                ['radio.md', 'Radio 单选项'],
                                ['checkbox.md', 'Checkbox 多选项'],
                                ['switch.md', 'Swicth 切换开关'],
                            ]
                        }, {
                            title: '导航组件',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                ['step.md', 'Step 步骤条'],
                                ['tab.md', 'Tab 选项卡'],
                                ['tabBar.md', 'TabBar 标签栏'],
                                ['navBar.md', 'NavBar 导航栏'],
                                ['noticeBar.md', 'NoeticeBar 公告栏']
                            ]
                        },{
                            title: '数据录入',
                            collapsable: false,
                            sidebarDepth: 0,
                            children: [
                                ['upload.md', 'Upload 上传'],
                            ]
                        }, 
                    ]
                }
            ],
        }
    }
}