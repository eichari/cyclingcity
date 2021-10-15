//ハンバーガーメニュー
$(function () {
    $('.hamburger-menu').on('click', function () {
        $(this).toggleClass('hamburger-menu-active')
        $('.menu-bar').toggle(1000)
    })
})
