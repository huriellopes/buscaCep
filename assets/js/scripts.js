const requisao = (url, tipo, dados) => {
    return axios({
        url: url,
        method: tipo,
        type: 'json',
        data: dados
    });
};

const limpa_formulário_cep = () => {
    //Limpa valores do formulário de cep.
    document.getElementById('logradouro').value=("");
    document.getElementById('complemento').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('localidade').value=("");
    document.getElementById('UF').value=("");
};

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('logradouro').value=(conteudo.logradouro);
        document.getElementById('complemento').value=(conteudo.complemento);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('localidade').value=(conteudo.localidade);
        document.getElementById('UF').value=(conteudo.uf);
    } else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
};

const buscaCep = () => {
    document.addEventListener('click', function () {
        let busca = document.getElementById('buscar');
    });
    /*document.addEventListener('keydown', function () {
        let valor = document.getElementById('cep');
        let cep = valor.replace(/\D/g, '');
        requisao('https://viacep.com.br/ws/'+ cep.value + '/json', 'GET', null)
        .then((response) => {
            if (Array(response.data).length > 0) {
                let validaCep = /^[0-9]$/;
                if (validaCep.test(cep.value)) {
                    document.getElementById('logradouro').value="...";
                    document.getElementById('complemento').value="...";
                    document.getElementById('bairro').value="...";
                    document.getElementById('localidade').value="...";
                    document.getElementById('UF').value="...";
                }

                document.getElementById('logradouro').value=response.data.logradouro;
                document.getElementById('complemento').value=response.data.complemento;
                document.getElementById('bairro').value=response.data.bairro;
                document.getElementById('localidade').value=response.data.localidade;
                document.getElementById('UF').value=response.data.uf;
            } else {
                limpa_formulário_cep();
                alert('CEP não encontrado!');
            }
        }).catch((response) => {
            console.log(response);
        });
    });*/
};

buscaCep();