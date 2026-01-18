import { useContext } from "react"
import { BookContext } from "../App"


const BookForm = () => {
    const {book, setBook, editingId, bookList, setBookList, setEditingId, resetBook} = useContext(BookContext)

    const handleChange = (e) => {setBook({...book, [e.target.name]: e.target.value})}

    const handleSubmit = (e) =>{
    e.preventDefault()
    if (!book.name || !book.author || !book.year) {
        alert ('Please fill all the fields')
        return;
    } else {
        if (editingId) {
        const updatedBooks = bookList.map((b) => b.id === editingId ? {...book, id : editingId} : b)
        setBookList(updatedBooks)
        setEditingId(null)
        } else {
            const dateTime = Date.now()
            const newBook = {...book, id: dateTime, time: dateTime}
            setBookList([...bookList, newBook])
        }
    }
    resetBook()
    }

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 bg-[#eee] rounded-2xl"> 
        <h1 className="py-1 px-2 text-5xl mb-12 mt-2 mx-auto text-center font-bold">Book Adding Application</h1> 
        <h3 className="font-bold text-2xl text-gray-700 text-center mb-2">{editingId ? 'Edit Book' : 'Add New Book'}</h3>
        <div className="form-group"> 
            <label htmlFor="bookName">Book's Name: </label> 
            <input type="text" name="name" id="bookName" value={book.name} onChange={handleChange}/> 
        </div> 
        <div className="form-group"> 
            <label htmlFor="author"> Author: </label> 
            <input type="text" name="author" id="author" value={book.author} onChange={handleChange}/> 
        </div> 
        <div className="form-group"> 
            <label htmlFor="year">Book's Year: </label> 
            <input type="number" name="year" id="year" value={book.year} onChange={handleChange}/> 
        </div> 
        <div className="flex mx-auto justify-evenly w-full">
            <button type='submit' className="btn bg-green-600 my-6">{editingId ? 'Update Book' : 'Add Book'}</button>
            {editingId && (
                <button className="btn bg-red-600 my-6" type="button" onClick={() => {
                    resetBook()
                    setEditingId(null)
                }}>
                Cancel Edit
                </button>    
        )}
        </div>
        </form> 
    )
}
export default BookForm