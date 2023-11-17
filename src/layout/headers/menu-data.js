const menu_data = [
    {
        title: 'Phương pháp Gamification',
        link: '/Gamification',
        check_drop : false,
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
            {title: 'Các triệu chứng', link: 'about-1'},
            { title: 'Nguyên nhân', link: '/about-1'},
            { title: 'Các phương pháp điều trị', link: '/about-1' },
        ]
    },
    {
        title: 'Kiểm tra sức khỏe tinh thần',
        link: '/quiz',
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