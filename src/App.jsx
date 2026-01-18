import { useEffect, useState, createContext } from "react";
import './App.css';
import BookForm from "./components/BookForm";
import BooksList from './components/BooksList';

export const BookContext = createContext()

const App = () => {

  const [book, setBook] = useState({name: '', author: '', year: ''})
  const [bookList, setBookList] = useState(JSON.parse(localStorage.getItem('bookList')) || [])
  const [editingId, setEditingId] = useState(null)



  const resetBook = () => {setBook({name: '', author: '', year: ''})}


  useEffect (() => {
    localStorage.setItem('bookList', JSON.stringify(bookList))
  }, [bookList])

  
  
  const contextValue = {book, setBook, bookList, setBookList, editingId, setEditingId, resetBook}
  return (
    <BookContext.Provider value={contextValue}>
      <main className="my-1 mx-6 max-w-80% min-h-screen">
        <BookForm />
        <hr /> 
        <BooksList />
      </main>
    </BookContext.Provider>
  )
}
export default App