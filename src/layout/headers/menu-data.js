const menu_data = [
    {
        title: 'Phương pháp Gamification',
        link: '#',
        check_drop : false,
    },
    {
        title: 'Về ADHD',
        link: '#',
        mega_menu: false,
        submenus: [
            {title: 'ADHD là gì', link: '/'},
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
        link: '/team-details/index',
        check_drop: false,
    }
]

export default menu_data;