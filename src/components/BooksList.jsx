import { useContext, useState, useMemo } from "react"
import { BookContext } from "../App"
import BookItem from "./BookItem"
const BooksList = () => {
    const { bookList, setBookList, setBook, resetBook, setEditingId} = useContext(BookContext)
    const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState('name');
    


    const handleClear = () => {
        if (window.confirm('Are you sure you want to delete all books?')){
            setBookList([])
            resetBook()
            setEditingId(null)
            window.scrollTo({top: 0, behavior:'smooth'});
        }
    }
    const handleDelete = (id) => {
    const updatedBooks = bookList.filter((b) => b.id !== id)
    setBookList(updatedBooks)
    resetBook()
    setEditingId(null)
    }

    const handleEdit = (id) => {
        const bookToEdit = bookList.find((b) => b.id === id)
        window.scrollTo({top: 0, behavior:'smooth'});
        if(bookToEdit) {
            setBook(bookToEdit)
            setEditingId(id)
        }
    }

    
    const filteredSortedBooks = useMemo(() => [...bookList].filter((book) => {
        return book.name.toLowerCase().includes(search.toLocaleLowerCase())
    }).sort((a, b) => {
        if (sortType === 'name') return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        if (sortType === 'author') return a.author.toLowerCase().localeCompare(b.author.toLowerCase());
        if (sortType === 'year') return a.year - b.year;
        if (sortType === 'date') return new Date(a.time) - new Date(b.time);
    }), [bookList, search, sortType]);
    
    return (
    <div className="container bg-gray-100/50"> 
        <h2 className="text-4xl font-bold text-center">Books List:</h2> 
        {bookList.length === 0 ? (
        <h3 className="text-2xl font-bold text-center">No Books Added Yet.</h3>
        ) : (
            // bookList.sort((a, b) => a.time - b.time) // by Numbers
            // bookList.sort((a, b) => a.name.localeCompare(b.name)) // by Strings
            // arr.sort((a, b) => new Date(a.date) - new Date(b.date)); by Date
            // books.sort((a, b) => {
                //const nameCompare = a.name.localeCompare(b.name);
                //if (nameCompare !== 0) return nameCompare;
                //return a.year - b.year;
            // });
            // arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // case insensitive
        <> 
        <div className="search-sort mx-auto my-1 text-center flex justify-around">
            <input
                className="outline-0 shadow-2xl border-1 border-gray-300 rounded-xl py-1 px-2"
                type="text" 
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
            <div className="sort">
            <label htmlFor="sortSelect" className="font-bold">Sort By: </label>
            <select className="text-gray-600" id="sortSelect" value={sortType} onChange={(e) => setSortType(e.target.value)}>
                <option value="name">Name</option>
                <option value="author">Author</option>
                <option value="year">Year</option>
                <option value="date">Date</option>
            </select>
            </div>
        </div>
        <ul className="flex flex-col gap-9">
        {filteredSortedBooks.map((book) => ( 
            <BookItem key={book.id} book={book} onDelete={() => handleDelete(book.id)} onEdit={() => handleEdit(book.id)} />
        ))} 
        </ul> 
            <button onClick={handleClear}  className="btn mx-auto block bg-red-600 my-6 ">Clear All</button> 
        </>
        )} 
    </div>
    )
}
export default BooksList