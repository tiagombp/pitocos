const pitocos = {

    container : '.painel-pitocos',

    pitocos : {

        volume : {

            tipo : 'range',
            min : 1,
            max : 20,
            valor_inicial : 10,
            nome : 'volume',
            css_var : 'volume'

        }

    },

    inclui_pitoco : (id_pitoco) => {

        const cont_geral = document.querySelector(pitocos.container);

        const dados_pitoco = pitocos.pitocos[id_pitoco];

        const novo_pitoco = document.createElement('input');

        novo_pitoco.type = dados_pitoco.tipo;
        novo_pitoco.name = dados_pitoco.nome;
        novo_pitoco.id = id_pitoco;

        if (dados_pitoco.tipo == 'range') {

            novo_pitoco.min = dados_pitoco.min;
            novo_pitoco.max = dados_pitoco.max;
            novo_pitoco.value = dados_pitoco.valor_inicial;

        }

        const novo_label = document.createElement('label');

        novo_label.htmlFor = id_pitoco;
        novo_label.innerText = dados_pitoco.nome;

        const texto_valor = document.createElement('span');
        texto_valor.innerText = dados_pitoco.valor_inicial;

        const novo_container_do_pitoco = document.createElement('div');
        novo_container_do_pitoco.classList.add('pitoco');
        novo_container_do_pitoco.dataset.nome = id_pitoco;

        novo_container_do_pitoco.appendChild(novo_label);
        novo_container_do_pitoco.appendChild(novo_pitoco);
        novo_container_do_pitoco.appendChild(texto_valor);

        cont_geral.appendChild(novo_container_do_pitoco);

    },

    init : () => {

        const lista_pitocos = Object.keys(pitocos.pitocos);

        console.log(lista_pitocos);

        lista_pitocos.forEach(pitoco => pitocos.inclui_pitoco(pitoco));


    }

}

pitocos.init();