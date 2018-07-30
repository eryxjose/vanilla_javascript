var pessoa = {
    id: 0,
    nome: "",
    email: "",
    get: function(){
        return this.nome + "(" + this.email + ")";
    },
    set: function(pessoa) {
        this.id = pessoa.id;
        this.nome = pessoa.nome;
        this.email = pessoa.email;
    }
};

var pessoa1 = new pessoa();
pessoa1.id = 1;
pessoa1.nome = "elaine";
pessoa1.email = "elaine@elaine";

var pessoa2 = new pessoa();
pessoa2.id = 2;
pessoa2.nome = "eryx";
pessoa2.email = "eryx@eryx";

var pessoa3 = new pessoa();
pessoa3.id = 3;
pessoa3.nome = "mauricio";
pessoa3.email = "mauricio@mauricio";

document.body.appendChild(div);


