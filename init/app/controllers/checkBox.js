module.exports = function ($scope) {
    $scope.respostas = [1, 3]; 
    $scope.atuais    = [];   
    $scope.temSelecao = false; 
    
    $scope.titulo = "Testando Check Boxes";
    $scope.titulo2 = "Quais alternativas estão correntas?";    
    
    $scope.opcoes = [
        {idx: 1, titulo: 'Strings não podem ser alteradas.'}, 
        {idx: 2, titulo: 'Arrays não têm tamanho fixo.'},
        {idx: 3, titulo: 'O operador "typeof" retorna uma string.'}
    ];
    
    $scope.checkMe = function(op) {          
        if(op.id == 'selected') {
            op.id = '';
            $scope.atuais.splice($scope.atuais.indexOf(op), 1);
        }
        else {
            op.id = 'selected'; 
            $scope.atuais.push(op);
        }       
        
        $scope.temSelecao = $scope.atuais.length > 0;
    };
    
    $scope.verifyResponse = function() {
        if($scope.atuais.length != $scope.respostas.length) {
            var mensagem = "Você errou a questão!";
            var mensagemCor = 'red';
        } else {
            var size = 0;    

            for (var i = 0; i < $scope.respostas.length; ++i) {
                if($scope.respostas.indexOf($scope.atuais[i].idx) != -1)
                    ++size;               
            }

            if (size == $scope.respostas.length) {
                var mensagem = "Você acertou a questão!";
                var mensagemCor = 'green';
            } else {
                var mensagem = "Você errou a questão!";
                var mensagemCor = 'red';
            }
        }

        size = 0;

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