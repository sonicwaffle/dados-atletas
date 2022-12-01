class Atleta {
    constructor(nome, idade, peso, altura, notas){//RECEBE DADOS DO ATLETA
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this.categoria;
        this.imc;
        this.media;
    }
    
    calculaCategoria(){ //DEFINE A CATEGORIA DO ATLETA
        if(this.idade >= 9 && this.idade <= 11){
                    this.categoria = `Infantil`;
        } else if(this.idade >= 12 && this.idade <= 13){
                    this.categoria = `Juvenil`;
        } else if(this.idade >= 14 && this.idade <= 15){
                    this.categoria = `Intermediário`;
        } else if(this.idade >= 16 && this.idade <= 30){
                    this.categoria = `Adulto`;
        } else {
                    this.categoria = `Sem categoria`;
        }
    }

    calculaIMC(){ //DEFINE O IMC DO ATLETA
        this.imc = this.peso/(this.altura*this.altura);
    }

    calculaMediaValida(){ //DEFINE A MEDIA VALIDA DO ATLETA
        let soma = 0;
        this.notas.sort().slice(1,4).forEach(function (nota){
                    soma = soma + nota;
        })
        this.media = soma/this.notas.sort().slice(1,4).length;
    }

    obtemNomeAtleta(){//RETORNA NOME DO ATLETA
        return this.nome;
    }

    obtemIdadeAtleta(){//RETORNA IDADE DO ATLETA
        return this.idade;
    }

    obtemPesoAtleta(){//RETORNA PESO DO ATLETA
        return this.peso;
    }

    obtemAlturaAtleta(){//RETORNA ALTURA DO ATLETA
        return this.altura;
    }

    obtemNotasAtleta(){//RETORNA NOTAS DO ATLETA
        return this.notas.join(",");
    }

    obtemCategoria(){//RETORNA CATEGORIA DO ATLETA
        this.calculaCategoria();
        return this.categoria;
    }

    obtemIMC(){//RETORNA IMC DO ATLETA
        this.calculaIMC();
        return this.imc;
    }  

    obtemMediaValida(){//RETORNA MEDIA VALIDA DO ATLETA
        this.calculaMediaValida();
        return this.media;
    }
}

function retornaDados(atleta){//RETORNA OS DADOS COMPLETOS DO ATLETA
    return `Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média Válida: ${atleta.obtemMediaValida()}` 
};
