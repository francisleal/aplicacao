module.exports = function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'view/scroll_bar.htm',
        controller: "scrollBar"
    }).when('/radio', {
        templateUrl: 'view/radio_btns.htm',
        controller: "radioButtons"
    }).when('/check', {
        templateUrl: 'view/check_box.htm',
        controller: "checkBox"
    }).when('/vouf', {
        templateUrl: 'view/v_ou_f.htm',
        controller: "vouf"
    });
};