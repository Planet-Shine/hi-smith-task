
angular
    .module('newsList')
    .component('newsList', {
        templateUrl: '/js/news-list/news-list.template.html',
        controller: newsListController
    });

function newsListController ($vk) {
    var vm = this;
    vm.data = $vk.data;
    vm.showPhoto = showPhoto;

    function showPhoto(url) {
        console.log(url);
        // slideShow
    };
}