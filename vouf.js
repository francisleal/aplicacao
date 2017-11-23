/*
  Componente: V ou F.
  Funcionalidade: Componente para questões de V ou F.
  Desenvolvedor: francis.leal

  Última alteração: 22/11/2017.
  Modificado por: joao.rodrigues
  Alterações: controlando feeds localmente
*/

module.exports = function ($compile, $rootScope) {
    return {
        restrict: 'AE',
        replace: false,
        link: function (scope, element, attr) {
            if (scope.controleAtividade) {
                let addObjetivoEvent = new CustomEvent('addObjetivo');
                document.dispatchEvent(addObjetivoEvent);
            }
            function avancarProximaTela() {
                let removeObjetivoEvent = new CustomEvent('removeObjetivo');
                document.dispatchEvent(removeObjetivoEvent);
            }

            // objeto com atributo e função ng-model e ng-change
            let gabaritoTxt, gabaritoArr;
            const atributo = {
                id: 'null',
                style: 'width: 20px;height: 20px;border:3px solid #1b75bb;text-align: center;',
                ngChange: function () {
                    let ngAtual = $(this).attr('id').substring(0, 7) + '[' + $(this).attr('id').substring(7, 10) + ']';
                    return ngAtual + ` = ${ngAtual}.toUpperCase().substring(0, 1)`;
                },
                ngModel: function () {
                    let ngAtual = $(this).attr('id').substring(0, 7) + '[' + $(this).attr('id').substring(7, 10) + ']';
                    return ngAtual
                }
            }

            // class com metodos dos feeds
            class Feeds {
                constructor(certo, errado, sub) {
                    this.certo = certo;
                    this.errado = errado;
                    this.sub = sub;
                }
                hide() {
                    $(feed.certo + ',' + feed.errado + ',' + feed.sub).hide()
                }
            }

            // class cria gabarito
            class Gabarito {
                static resp() {
                    gabaritoTxt = document.querySelector('#resp').textContent.toUpperCase().toString();
                    gabaritoArr = gabaritoTxt.split('');
                }
            }

            // class cria os inputs e seta id dinamico
            class Inputs {
                constructor(id, style, ngModel, ngChange) {
                    this.id = id;
                    this.style = style;
                    this.ngModel = ngModel;
                    this.ngChange = ngChange;
                }

                setIdLinha(idLinha) {
                    $('#resp tspan').attr('id', input.id);
                }

                criaInputs() {
                    let foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
                    let inputValor = $('<input>', {
                        id: input.id,
                        style: input.style,
                        'ng-model': input.ngModel,
                        'ng-change': input.ngChange,
                    }).appendTo($('#' + input.id).parent().parent().html(foreignObject));
                    $(foreignObject).attr("x", 1).attr("y", 0).attr("width", 26).attr("height", 26).append(inputValor).attr("xmlns", "http://www.w3.org/1999/xhtml");
                }
            }
            
            //cria os obj
            feed = new Feeds('#feedCerto', '#feedErrado', '#sub');
            input = new Inputs(atributo.id, atributo.style);

            //chama os metodos 
            feed.hide();
            Gabarito.resp();

            function Aplicacao(){
                input.setIdLinha();
                input.criaInputs();
            }

            Aplicacao()

            



            /* input.criaInputs(); */

            console.log(gabaritoArr);




            //compila as funções do angular no SVG
            $compile(resp)($rootScope);
            $compile(sub)($rootScope);
        } // lição2 topico3 tela20 svg
    }
}

/* $(element).find("#feedCerto,#feedErrado,#sub").hide();
var sub = $(element).find('#sub').attr('ng-click', 'myFunc(param)').addClass('btn');

//pega o valor das resposta vindo do SVG cria uma matrix contendo as resposta
const resp = element[0].querySelector('#resp');
gabarito = resp.textContent;
gabarito = gabarito.toUpperCase().replace(/\s+/g, " ").trim().split('');

if (element[0].querySelector('#resp_2')) {
    const resp_2 = element[0].querySelector('#resp_2').textContent;
    var exp = gabarito.concat(resp_2);
    opcoes = exp.toString().replace(/,/g, '');
} else {
    opcoes = gabarito.toString().replace(/,/g, '');
};
//cria input dinamicamente de acordo com a quantidade de resposta do gabarito
$rootScope.arrayResp = [];
$rootScope.param = [];

gabarito.forEach((element, i) => {
    //posição dos campos no SVG
    let param = 'param';
    let foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    //formatação dos Inputs
    const arredondamento = 'border-radius: 3px';
    const cor = '#09416d';
    const borda = `border: 2px ${cor} solid`;
    //Cria inputs dinamcos seta os atributos
    var inputValor = $('<input>', {
        'id': `${param}[${i}]`,
        'style': `${arredondamento}; ${borda}; text-align: center; width: 82%; height: 82%; font-size: 20px`,
        'ng-change': `${param}[${i}]` + `= ${param}[${i}].toUpperCase().substring(0, 1)`,
        'ng-model': `${param}[${i}]`
    }).appendTo($(`#tt${i + 1}`));

    $(foreignObject).attr("x", 0).attr("y", 0).attr("width", 25).attr("height", 25);
    $(foreignObject).append(inputValor).attr("xmlns", "http://www.w3.org/1999/xhtml");
    $(`#tt${i + 1}`).html(foreignObject);
});
// limpa os campos quando digitado novamente
$(element).find('input').keypress(function () { this.value = '' });
//Valida os campos de entrada seta foco para outro campo
$(element).find('input').keyup(function () {
    this.value = this.value.toUpperCase();
    var express = new RegExp("[" + opcoes + "]", "g");
    express.test(this.value) ? $(this).parent().parent().next().find('input').focus() : $(this).val('');

    if ($rootScope.param.length == gabarito.length && express.test($rootScope.param)) {
        this.value == '' ? $(element).find('#sub').hide() : $(element).find('#sub').show();
    };
});
$(element).find('input').last().keyup(function () {
    var express = new RegExp("[" + opcoes + "]", "g");
    express.test(this.value) ? $(this).blur() : $(this).focus();
});
$(element).find('input').click(function () {
    $(this).val('');
    if ($rootScope.param.length == gabarito.length) {
        this.value == '' ? $(element).find('#sub').hide() : $(element).find('#sub').show();
    };
});
//compara as respostas
$rootScope.myFunc = (param) => {
    if (`${gabarito}` == Object.values(param)) {
        $(element).find("#feedCerto").show();
        $(element).find("#sub").removeClass('btn');

        // chamada de áudio (é passado como parêmetro o id da janela aberta)
        let playAudioEvent = new CustomEvent('playAudio', { detail: { 'comp': 'feedCerto' } });
        document.dispatchEvent(playAudioEvent);
    } else {
        $(element).find("#feedErrado").show();
        // chamada de áudio (é passado como parêmetro o id da janela aberta)
        let playAudioEvent = new CustomEvent('playAudio', { detail: { 'comp': 'feedErrado' } });
        document.dispatchEvent(playAudioEvent);
        $(element).find('[id^=feed]').click(function () {
            // interrompe o áudio
            let stopAudioEvent = new CustomEvent('stopAudio');
            document.dispatchEvent(stopAudioEvent);

            $compile(element[0])($rootScope);
            $(element).find('[id^=feed]').off('click');
        });
    }
    avancarProximaTela();
}; */
