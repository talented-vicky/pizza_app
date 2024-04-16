const data = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        qty: 28,
        hasAdaptation: false,
        genres: [
            "captivating", "tense", "thriller", "action", "serious"
        ],
        releaseYear: 1808
    },
    {
        id: 2,
        title: "Titanic",
        author: "James Cameron",
        qty: 59,
        hasAdaptation: true,
        genres: [
            "thriller", "horror", "adventure", "action", "comedy", "scary"
        ],
        releaseYear: 1997
    },
    {
        id: 3,
        title: "harry potter",
        author: "J.K. Rowling",
        qty: 31,
        hasAdaptation: false,
        genres: [
            "adventure", "action", "sci-fi", "daring", "tense"
        ],
        releaseYear: 2011
    },
    {
      id: 4,
      title: "Game of Thrones",
      author: "David Benioff",
      qty: 97,
      genres: [
        "action", "serious", "ancient", "daring", "mystery"
      ],
      releaseYear: 2011
    }
  ]
  
  const getBooks = () =>  data
  const getBook = (id) => data.find((book) => book.id === id)
  
  const allbooks = getBooks();
  const mybook = getBook(3);
// obj destructuring
const { id, title, genres } = mybook;
console.log(id, title)

// array destructuring (works based on array order)
/* 1 */ const [ mainGenre, secGenre ] = genres;
/* 2 */ const [ init, duo, ...otherGenres] = genres;

// rest/spread operator >> taking the existing obj/array & adding to it]
// const newGenre = [ genres, 'touching'];
const newGenre = [ 
    ...genres, // getting existing array
    'touching' // adding new entry
];

// const newBook = { mybook, favouriteActor: 'Will Smith'}
const newBook = { 
    ...mybook, // fetching original object
    favouriteActor: 'Will Smith', // adding new key-value pairs
    title: 'harry plunter' // overiding existing title
}
// check the difference btwn both of them
// recall template literal def `newBook is: ${newBook}`


// short-circuiting with logical operators
// the 4 falsy values => 0, null, '', undefined others are considered true

/* AND -- if true, return 2nd, else 1st */
console.log('talented_vicky' && "he's the best")
console.log('' && "I can't reach here")


/* OR -- if any falsy, return 2nd */
console.log(mybook.genres || "Unknown Author")
// so if we do not have an author, use the one I provided
// rather than returning undefined (falsy value)

/* nullish -- if any falsy (but zero), return 2nd */
console.log(mybook.qty ?? "No Data")
// so if we have undefined, null, or "" return no data


// ARRAY -- map
// const result = allbooks.map(object => {
//     const modifiedbooks = {
//         title: object.title, 
//         id: object.id
//     }
//     return modifiedbooks;
// })
// const result = allbooks.map(object => ({
//     title: object.title, 
//     id: object.id
//     })
//   )
// console.log(result)

// ARRAY -- filter
// const reducedBooks = allbooks.filter(data => data.genres.includes('tense'))
// const reduceMapBooks = allbooks.filter(data => data.releaseYear >= 2000).map(newdata => ({
//     title: newdata.title,
//     author: newdata.author
// }))

// ARRAY -- reduce
// const totalQty = allbooks.reduce((agg, book) => agg + book.qty, 0)
// always produces just one value of everything

// ARRAY -- sort
// const bookQty = allbooks.map(book => book.qty).sort((x, y) => -x + y)
// const bookQty = numArray.sort((x, y) => -x + y)
// const numArray = [9, 8, 2, 5, 6, 4, 7]
// const bookQty = numArray.slice().sort((x, y) => -x + y)
// slicing before sorting ensures original array is unaffected


/* Immutable arrays */
// // adding to array
// const newObj = {
//     id: 5,
//     title: "Lord of the Rings",
//     author: "J.R.R. Tolkien",
//     qty: 78,
//     hasAdaptation: false,
//     genres: [
//       'mystery', 'adventure', 'action', 'magic', 'ancient'
//     ],
//     releaseYear: 1954
// }
// const addObj = [
//     ...allbooks,
//     newObj
// ]
  

// // deleting from array
// const delObj = addObj.filter(data => data.id !== 3)

// // update object in the array
// const updObj = allbooks.map(data => data.title === 'Harry Potter' ?
//   {
//     id: data.id,
//     title: 'Harry Potter II',
//     author: data.author,
//     qty: data.qty,
//     hasAdaptation: data.hasAdaptation,
//     genres: data.genres,
//     releaseYear: data.releaseYear + 5
//   }
//   : data
// )
// const mewUpdObj = allbooks.map(data => data.title === 'Harry Potter' ?
//   {
//     ...data,
//     title: 'Harry Potter II',
//     releaseYear: data.releaseYear + 5
//   }
//   : data
// )