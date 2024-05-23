import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    const [dataLength, setDatalength] = useState(6)

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className="text-center">
            <h2>Books : {books.length}</h2>
            <div className="grid lg:grid-cols-3 gap-4">
                {
                    books.slice(0, dataLength).map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            <div className={dataLength === books.length ? 'hidden' :''}>
                <button onClick={() => setDatalength(books.length)} className="btn btn-primary">Show All Jobs</button>
            </div>

        </div >
    );
};

export default Books;