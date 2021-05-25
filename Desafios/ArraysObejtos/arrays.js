// Buscando e contando dados em Arrays

// Baseado no Array de livros por categoria abaixo, faça  os seguintes desafios

// Contar o numero de categorias e o numero de livros em cada categoria categorias
// Contar o numero de autores
// Mostrar livros do autor Augusto Cury
// Transformar a função acima em uma função que ira receber o nome do autor e devolver os livros desse autor

const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionaria',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai Rico, Pai Pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mau do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]

console.log(booksByCategory.length)

for (let category of booksByCategory) {
    console.log(`Total de livros na categoria ${category.category}`)
    console.log(category.books.length)
}

const countAuthors = () => {
    let authors = [];

    for (category of booksByCategory) {
        for (books of category.books) {
            if (authors.indexOf(books.author) == -1) {
                authors.push(books.author)
            }
        }
    }
    return console.log(authors)
}
countAuthors()

const booksAugustoCury = (nameAuthor) => {
    for (category of booksByCategory) {
        for (book of category.books) {
            if(book.author == nameAuthor) {
                console.log(book.title)
            }
        }
    }
}
booksAugustoCury('George S. Clason')