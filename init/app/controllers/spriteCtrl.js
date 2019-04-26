module.exports = function ($scope, $http) {
    
    $scope.titulo = "Courses & Programs" 

    $scope.fileName = "teste"; // fileName = nome da IMAGEM e do JSON exportado para gerar a animação

    $http.get('json/' + $scope.fileName + '.json').then(function (response) { // efetua a leitura do JSON

    animate.style.background = "url(img/" + $scope.fileName + ".png)"; // informa o nome da imagem
    animate.style.width = response.data.frames[0].sourceSize.w + "px"; // informa a largura da imagem
    animate.style.height = response.data.frames[0].sourceSize.h + "px"; // informa a autura da imagem
        
        
        function scroll(qtFrame) {
            var qtFrames = response.data.frames;
//            qtFrames = false;
            for (var i = 0; i < qtFrames.length ; i++) { // faz a repetição para reproduzir os frames
                
                (function(ind) {
                    setTimeout(function(){ // controla o tempo para reprodução dos frames
                    bgpx = response.data.frames[ind].frame.x * (-1); // obtem o posicionamento X do frame
                    bgpy = response.data.frames[ind].frame.y * (-1); // obtem o posicionamento Y do frame
                    bgp = bgpx + "px " + bgpy + "px";
                    animate.style.backgroundPosition = bgp; // muda o posicionamento da imagem para reproduzir o efeito
                    }, 41.6666666667 * i); // 24 frames por 1 segundo
                })(i);
                
                qtFrames.length = qtFrame;
                
            }
            console.log(qtFrames);
            console.log(bt)
        } 
        
        var bt = document.getElementById("bt");
        bt.addEventListener("click",function(){
            scroll(150);
        });
        
//        var st = document.getElementById("st");
//        st.addEventListener("click",function(){
//            scroll(300);
//        });
        
        
        
//        scroll();
    });
} // fim module
