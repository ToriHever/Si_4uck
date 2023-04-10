import * as $ from 'jquery'

let headerAuto = `
        <div class="header_content">
            <div class="container">
            <ul class="header_menu">
                <a href="main.html" class="header_link_elem"><li class="header_elem_menu">Главная</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Новости</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">История игр</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Трейлеры</li></a>
                <a href="" class="header_link_elem"><li class="header_elem_menu">Отзовы</li></a>
                <a href="authentication.html" class="header_link_elem"><li class="header_elem_menu">Авторизация</li></a>
            </ul>
            <div><p id='current-time'></p></div>
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
    header.classList.add('header');

    let footer =  document.createElement("footer");
    footer.innerHTML = footerAuto;
    document.body.insertAdjacentElement('beforeend', footer );

}

setHeader();

$(document).ready(function() {
      var currentDate = new Date();
      var currentTime = currentDate.toLocaleString();
      $("#current-time").text("Сегодня так то: " + currentTime + " а мы все еще курсач защищаем");
    });

$(document).ready(function() {
  $(".burger_menu").click(function() {
    $(".stick").toggleClass(function () {
      return $(this).is('.open, .close') ? 'open close' : 'open';
    });
       $(".header_content ").toggleClass("burger_menu-active");

       $("header").toggleClass("header-active");
       $("body").toggleClass("lock");


  });
});
