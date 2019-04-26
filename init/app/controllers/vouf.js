module.exports = function ($scope, $http) {
    $scope.titulo = "Testando Verdadeiro ou Falso";
    $scope.titulo2 = "Julgue os itens";

    $scope.respostas = [true, false, true]; 
    
    $scope.opcoes = [
        {idx: 1, titulo: 'Violetas são azuis.', res: true}, 
        {idx: 2, titulo: 'Arrays têm tamanho fixo.', res: false},
        {idx: 3, titulo: 'O operador "typeof" retorna uma string.', res: true}
    ];   

    $scope.verifyResponse = function() {
        var size = 0;

        for (var i = 0; i < $scope.respostas.length; ++i) {
            if ($scope.respostas[i] == $scope.opcoes[i].res)
                ++size;
            else
                break;
        }
        

        if (size == $scope.respostas.length) {
            Snackbar.show({            
                text: "Você acertou!",            
                backgroundColor: "green",
                width: "shrink",
                pos: "top-center",
                textColor: "white",
                actionText: "FECHAR",
                actionTextColor: "black"
            });
        } else {
            Snackbar.show({            
                text: "Você errou!",            
                backgroundColor: "red",
                width: "shrink",
                pos: "top-center",
                textColor: "white",
                actionText: "FECHAR",
                actionTextColor: "black"
            });
        }

        size = 0;
    }; 
};