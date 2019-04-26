module.exports = function ($scope) {
    $scope.resposta = 2;    
    $scope.temSelecao = false;    
    
    $scope.titulo = "Testando Radio Buttons";
    $scope.titulo2 = "Qual o resultado de 7 * (2 + '12')?";    
    
    $scope.opcoes = [
        {idx: 1, titulo: '98', is: false}, 
        {idx: 2, titulo: '1484', is: false},
        {idx: 3, titulo: 'Nenhuma', is: false}
    ];
    
    $scope.checkMe = function(op) {        
        $scope.opcoes.forEach(function(o) {
            o.id = '';
        });
        
        op.id = 'selected';
        $scope.temSelecao = true;
        $scope.atual = op.idx;
    };
    
    $scope.verifyResponse = function() {
        if ($scope.atual == $scope.resposta) {
            var mensagem = "Você acertou a questão!";
            var mensagemCor = 'green';
        } else {
            var mensagem = "Você errou a questão!";
            var mensagemCor = 'red';
        }
        
        Snackbar.show({            
            text: mensagem,            
            backgroundColor: mensagemCor,
            width: "shrink",
            pos: "top-center",
            textColor: "white",
            actionText: "FECHAR",
            actionTextColor: "black"
        });
    };
};