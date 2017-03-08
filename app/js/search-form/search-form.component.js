
angular
    .module('searchForm')
    .component('searchForm', {
        templateUrl: '/js/search-form/search-form.template.html',
        controller: searchFormController
    });

function searchFormController($vk) {
    var vm = this;
    this.data = $vk.data;
    vm.onSubmit = function () {
        $vk.setSearchQuery();
    };
}