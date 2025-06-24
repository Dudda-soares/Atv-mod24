function Livro(titulo,genero,autor,ano){
	
	this.titulo = titulo;
    this.genero = genero;
	this.autor = autor;
	this.ano = ano;

    this.resumir = function(){
	    console.log(`O livro ${this.titulo} do genêro ${this.genero}, da(o) ${this.autor} foi lançado em ${this.ano}`);
         
    }
}


function LivroDigital(titulo,genero,autor, ano, tamanhoArquivo){
    Livro.call(this, titulo, genero, autor, ano)
    this.tamanhoArquivo = tamanhoArquivo

    this.resumir = function(){
	    console.log(`O livro ${this.titulo} do genêro ${this.genero}, da(o) ${this.autor} foi lançado em ${this.ano} possui ${this.tamanhoArquivo} para downloads`);
         
    }
}

function LivroManga(titulo,genero,autor, ano, edicoes){
    Livro.call(this, titulo, genero, autor, ano)
    this.edicoes = edicoes

    this.resumir = function(){
	    console.log(`O livro ${this.titulo} do gênero ${this.genero} da(o) autor ${this.autor} foi lançado em ${this.ano} e possui atualmente ${this.edicoes} edições lançadas`);
         
    }
}





const romance = new LivroDigital("Orgulho e preconceito","romance", "Jane Austin", 2005, "152 MB")
romance.resumir();

const politico = new Livro("As Veias Abertas da América Latina", "politico", "Eduardo Galeano", 1971)
politico.resumir();

const literatura = new Livro("Dom Casmurro", "literatura", "Machado de Assis", 1899)
literatura.resumir();

const manga = new LivroManga("One Piece", "Mangá", "Eiichiro Oda", 1997, 70)
manga.resumir();