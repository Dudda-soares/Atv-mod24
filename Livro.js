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



const romance = new Livro("Orgulho e preconceito","romance", "Jane Austin", 2005)
romance.resumir();

const politico = new Livro("As Veias Abertas da América Latina", "politico", "Eduardo Galeano", 1971)
politico.resumir();

const literatura = new Livro("Dom Casmurro", "literatura", "Machado de Assis", 1899)
literatura.resumir();

const manga = new LivroDigital("One Piece", "Mangá", "Eiichiro Oda", 1997, "150 MB")
manga.resumir();