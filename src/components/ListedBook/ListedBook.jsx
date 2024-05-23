import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookItem } from "../../utility/localStorage";
import BookList from "../BookList/BookList";


const ListedBook = () => {
    const books = useLoaderData();

    const [bookListed, setBookListed] = useState([])

    // console.log(books);
    useEffect(() => {
        const storedBookIds = getStoredBookItem();
        if (books.length > 0) {
            // const bookListed = books.filter(book => storedBookIds.includes(book.id));
            // console.log(bookListed);

            const bookListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.id === id);
                if (book) {
                    bookListed.push(book)
                }
            }
            setBookListed(bookListed);
        }
    }, [])
    return (
        <div>
            <h2>Listed To Book : {bookListed.length}</h2>
            <div className="grid grid-cols-1">
                {
                    bookListed.map(bookList => <BookList bookList={bookList} key={bookList.id}></BookList>)
                }
            </div>
        </div>
    );
};

export default ListedBook;