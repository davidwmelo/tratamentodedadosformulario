 
 
 async function buscaEndereco (cep){
var mensagemErro = document.getElementById('erro');
mensagemErro.innerHTML ="";
 try{  

const viacep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
const consultaCepConvertido = await viacep.json();

    if(consultaCepConvertido.erro){

         throw Error('Cep Inválido!')

    }

    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')

    cidade.value = consultaCepConvertido.localidade;
    logradouro.value = consultaCepConvertido.logradouro;
    estado.value = consultaCepConvertido.uf;

    console.log(consultaCepConvertido);
    return consultaCepConvertido;
   
    }catch (erro) {
         
        mensagemErro.innerHTML=(`<p> Erro cep inválido</p>`)
        console.log(erro)
    } 
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

