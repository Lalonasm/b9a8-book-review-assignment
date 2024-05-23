import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    const idInteger = parseInt(id)
    console.log(idInteger)
    // console.log(books);
    const book = books.find(book => book.id === idInteger)
    // console.log(typeof (id), id, idInteger);

    return (
        <div><p>{books.length}</p>
            <h2>Book Details of {id}</h2>
            {/* <div className="grid grid-cols-2 gap-4">
                <img src={book.image} alt="" />
            </div> */}
        </div>
    );
};

export default BookDetails;