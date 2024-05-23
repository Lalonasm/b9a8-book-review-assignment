import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookItem } from "../../utility/localStorage";
import PageList from "../PageList/PageList";


const PagesToRead = () => {
    const books = useLoaderData();
    const [bookListed, setBookListed] = useState([]);
    console.log(books);
    useEffect(() => {
        const storedBookIds = getStoredBookItem();
        if (books.length > 0) {


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
            <h2>Pages To Link</h2>
            <div className="grid grid-cols-1">
                {
                    bookListed.map(pageList => <PageList pageList={pageList} key={pageList.id}></PageList>)
                }
            </div>
        </div>
    );
};

export default PagesToRead;