//ハンバーガーメニュー
$(function () {
    $('.hamburger-menu').on('click', function () {
        $(this).toggleClass('hamburger-menu-active')
        $('.menu-bar').toggle(1000)
    })
})




//Areaを選択したときに、地図と動画を変更する
function clickBtnif() {
    var str = document.getElementById('Area').value;
    console.log(str)

    //if文使いたくない
    if (str == 'Norikura') {
        gm_and_yt(Norikura);
    } else if (str == 'Zao') {
        gm_and_yt(Zao);
    } else if (str == 'Shimanami') {
        gm_and_yt(Shimanami);
    } else {

    }

}


// googlemapとyoutubeのリンクを更新する
function gm_and_yt(Area) {
    //g-map
    var div = document.getElementById('g-map');
    div.innerHTML = Area.googlemap;
    //console.log(div);

    //movie
    var div = document.getElementById('movie');
    div.innerHTML = Area.youtube;
    //console.log(div);

}


// オブジェクトに googlemap と youtube の url を保存しておく
const Area = {
    googlemap: 'a',
    youtube: 'b',
};
console.log('Area')
console.log(Area.googlemap);
console.log(Area.youtube);


// Norikura
const Norikura = {
    googlemap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12892.251637658148!2d137.52726293392394!3d36.11632508152025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601d3642cdd17563%3A0x84523816ece85342!2z5LmX6Z6N5bKz!5e0!3m2!1sja!2sjp!4v1634393583590!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe>',
    youtube: '<iframe id="player" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/ddmYcOSxA88?autoplay=1&mute=1&playsinline=1&loop=1&playlist=ddmYcOSxA88" frameborder="0"></iframe >',
};

// Zao
const Zao = {
    googlemap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12549.802365721454!2d140.4370719348797!3d38.15296632507579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a48d74f3ec093%3A0xa1e58e355a14da75!2z6JS1546L5bGx!5e0!3m2!1sja!2sjp!4v1634393646001!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    youtube: '<iframe id="player" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/fcEVZWSjNdE?autoplay=1&mute=1&playsinline=1&loop=1&playlist=fcEVZWSjNdE" frameborder="0"></iframe >',
};

// Shimanami
const Shimanami = {
    googlemap: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255662.91503491782!2d132.8771528228301!3d34.32030490452144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355089d119b7f36b%3A0xa58e24d21615ddbf!2z5bqD5bO255yM!5e0!3m2!1sja!2sjp!4v1634393509593!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    youtube: '<iframe id="player" type="text/html" width="100%" height="100%" src="https://www.youtube.com/embed/eYJ7HGWHtyQ?autoplay=1&mute=1&playsinline=1&loop=1&playlist=eYJ7HGWHtyQ" frameborder="0"></iframe >',
};
