let headerAuto = `
    <div class="header_container">
        <div class="header_content">
            <ul class="header_menu">
                <li class="header_elem_menu"><a href="" class="header_link_elem">Главная</a></li>
                <li class="header_elem_menu"><a href="" class="header_link_elem">Новости</a></li>
                <li class="header_elem_menu"><a href="" class="header_link_elem">История игр</a></li>
                <li class="header_elem_menu"><a href="" class="header_link_elem">Трейлеры</a></li>
                <li class="header_elem_menu"><a href="" class="header_link_elem">Отзовы</a></li>
                <li class="header_elem_menu"><a href="" class="header_link_elem">Авторизация</a></li>
            </ul>
        </div>
    </div>

`;

let footerAuto = `
<div class="footer_container">
        <div class="footer_content">
            <ul class="header_menu">
                <li class="footer_elem_menu"><a href="" class="footer_link_elem">Главная</a></li>
                <li class="footer_elem_menu"><a href="" class="footer_link_elem">Новости</a></li>
                <li class="footer_elem_menu"><a href="" class="footer_link_elem">История игр</a></li>
                <li class="footer_elem_menu"><a href="" class="footer_link_elem">Трейлеры</a></li>
                <li class="footer_elem_menu"><a href="" class="footer_link_elem">Отзовы</a></li>
                <li class="footer_elem_menu"><a href="" class="footer_link_elem">Авторизация</a></li>
            </ul>
        </div>
    </div>

`;

function setHeader() {
  let header =  document.createElement("header");
    header.innerHTML = headerAuto;
    document.body.insertAdjacentElement('afterbegin', header );

    let footer =  document.createElement("footer");
    footer.innerHTML = footerAuto;
    document.body.insertAdjacentElement('beforeend', footer );
}

setHeader();
