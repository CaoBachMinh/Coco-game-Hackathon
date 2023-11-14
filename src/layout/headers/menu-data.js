const menu_data = [
    {
        title: 'Phương pháp Gamification',
        link: '#',
        check_drop : true,
        submenus:[
            {title: 'Gamification là gì', link: '/'},
        ]
    },
    {
        title: 'Về ADHD',
        link: 'about-1',
        mega_menu: false,
        submenus: [
            {title: 'ADHD là gì', link: 'about-1'},
            { title: 'Nguyên nhân', link: '/'},
            { title: 'Các phương pháp điều trị', link: '/' },
        ]
    },
    {
        title: 'Kiểm tra sức khỏe tinh thần',
        link: '#',
        mega_menu : false,
        check_drop : false,
    },
    
    {
        title: 'Về chúng tôi',
        link: "/team-1",
        check_drop: false,
    }
]

export default menu_data;