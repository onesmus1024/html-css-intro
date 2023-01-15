
let sidebar = document.querySelector('aside')
let menu = document.getElementsByClassName('menu')[0];
let menu_img_icon = document.getElementsByClassName('menu-img')[0];
let menuOpen = false;

menu.addEventListener('click', function () {
    if (menuOpen) {
        sidebar.classList.toggle('hide');
        menu_img_icon.src = 'assets/icon-menu.svg';
        menuOpen = false;
    }else{
        sidebar.classList.toggle('hide');
        menu_img_icon.src = 'assets/icon-menu-close.svg';
        menuOpen = true;
    }
});

 
// dummy reviews get profile image from unsplash 
let reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: 'assets/html.png',
        review:'jitu offers the best customer service in the industry. I have been a customer for over 10 years and have never been disappointed. I would recommend jitu to anyone looking for a reliable and affordable web hosting provider.'
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'Web Designer',
        img: 'assets/css.png',
        review:'The jitu team is very helpful and responsive. I have been a customer for over 10 years and have never been disappointed. I would recommend jitu to anyone looking for a reliable and affordable web hosting provider.'
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'Intern',
        img: 'assets/git.png',
        review:"jitu responds quickly to support requests and is very helpful. I have been a customer for over 10 years and have never been disappointed. I would recommend jitu to anyone looking for a reliable and affordable web hosting provider."
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'The Boss',
        img: 'assets/git.png',
        review:'jitu offers the best customer service in the industry. I have been a customer for over 10 years and have never been disappointed. I would recommend jitu to anyone looking for a reliable and affordable web hosting provider.'
    }
]

let profile = document.getElementById('profile-image');
let personName = document.getElementById('name');
let job = document.getElementById('job');
let review = document.getElementById('review');


setInterval(function () {
    let random = Math.floor(Math.random() * reviews.length);
    profile.src = reviews[random].img;
    personName.textContent = reviews[random].name;
    job.textContent = reviews[random].job;
    review.textContent = reviews[random].review;
}
, 3000);