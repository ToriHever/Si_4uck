let headerAuto = `
<header>
    <div class="container_header">
        <div class="content_header">
            <ul class="menu_header">
                <li class="elem_menu-header"><a href="" class="link_elem-header">Главная</a></li>
                <li class="elem_menu-header"><a href="" class="link_elem-header">Новости</a></li>
                <li class="elem_menu-header"><a href="" class="link_elem-header">История игр</a></li>
                <li class="elem_menu-header"><a href="" class="link_elem-header">Трейлеры</a></li>
                <li class="elem_menu-header"><a href="" class="link_elem-header">Отзовы</a></li>
                <li class="elem_menu-header"><a href="" class="link_elem-header">Авторизация</a></li>
            </ul>
        </div>
    </div>
</header>

`;

let footerAuto = `
<div class="container-header"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem veritatis voluptates iure dolor, quas modi placeat dolorum libero dolores provident nihil esse alias at, magni doloremque, velit accusamus facilis perferendis sit magnam aut nemo sapiente, ab amet? Vel, quod totam modi exercitationem unde mollitia temporibus maxime reiciendis rem culpa labore a atque, blanditiis explicabo voluptatem numquam esse optio harum, commodi quae. Perspiciatis illum quam, pariatur eum nulla, adipisci porro perferendis, cupiditate id voluptate delectus accusantium quod blanditiis.</p></div>

`;

function setHeader() {
  let header =  document.createElement("div");
    header.innerHTML = headerAuto;
    document.body.insertAdjacentElement('afterbegin', header );

    let footer =  document.createElement("div");
    footer.innerHTML = footerAuto;
    document.body.insertAdjacentElement('beforeend', footer );
}

setHeader();
