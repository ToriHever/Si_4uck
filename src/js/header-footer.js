let headerAuto = `
    <div class="container">
        <div class="header_content">
            <ul class="header_menu">
                <a href="" class="header_link_elem"><li class="header_elem_menu">Главная</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Новости</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">История игр</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Трейлеры</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Отзовы</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Авторизация</li></a>
            </ul>
        </div>
    </div>

`;

let footerAuto = `
 <div class="container">
        <div class="footer_content">
            <div class="footer_info">
                <h2 class="head_bold">Полезные статьи</h2>
                <ul class="footer_info_list">
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">HowLongToBeat</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">PSPrices</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">OpenCritic</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">Itch.io</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">Discord</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">OBS Studio</li>
                    </a>
                </ul>
            </div>
            <div class="footer_info">
                <h2 class="head_bold">Полезные статьи</h2>
                <ul class="footer_info_list">
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">HowLongToBeat</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">PSPrices</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">OpenCritic</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">Itch.io</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">Discord</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">OBS Studio</li>
                    </a>
                </ul>
            </div>
            <div class="footer_info">
                <h2 class="head_bold">Полезные статьи</h2>
                <ul class="footer_info_list">
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">HowLongToBeat</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">PSPrices</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">OpenCritic</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">Itch.io</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">Discord</li>
                    </a>
                    <a href="" class="footer_info_list_link">
                        <li class="footer_info_list_link_elem">OBS Studio</li>
                    </a>
                </ul>
            </div>
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
