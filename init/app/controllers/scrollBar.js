module.exports = function ($scope, $http) {
    $scope.titulo = "Testando Scroll";
    $scope.titulo2 = "lorem Ipsum";
    
    $http.get('json/page1.json').then(function(response) {
        $scope.paragrafos = response.data;
    });
};