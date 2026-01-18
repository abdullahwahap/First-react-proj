const BookItem = ({book, onDelete, onEdit}) => {
    const dateAdded = new Date(book.time).toLocaleString()
    const {name, author, year} = book
    return (
    <li className='flex flex-col gap-3 bg-amber-100/50 w-[60%] mx-auto text-center rounded-2xl p-2'> 
        <h3 className='text-2xl p-1 font-bold text-gray-700'>Name: {name}</h3> 
        <h5 className='text-xl p-1 font-bold text-gray-700'>Author: {author}</h5> 
        <p className='text-base p-1'>Release Date: {year}</p>
        <div className="btns flex mx-auto justify-around w-full p-1">
            <button onClick={onDelete} className='btn bg-primary '>Delete</button>
            <button onClick={onEdit} className='btn bg-gray-600'>Edit</button>
        </div>
        <p className='text-xs'>Add on: {dateAdded}</p>
    </li>
    )
}
export default BookItem