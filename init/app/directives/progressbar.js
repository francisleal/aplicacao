module.exports = function ($compile,$rootScope) {
    return {
        restrict: "A",
        scope: {
            total: "=",
            current: "="
        },
        link: function (scope, element) {

            scope.$watch("current", function (value) {
                element.css("width", scope.current / $rootScope.pages.length * 100 + "%");
            });
            scope.$watch("total", function (value) {
                element.css("width", scope.current / $rootScope.pages.length * 100 + "%");
            })
        }
    };
};