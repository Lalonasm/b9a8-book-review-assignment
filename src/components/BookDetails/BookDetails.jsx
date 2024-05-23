import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    console.log(intId)
    const book = books.find(book => book.id === intId)
    console.log(book)
    console.log(id, intId)
    const { image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = book;
    return (
        <div>
            {/* <h2>Book Details : {id} </h2> */}
            <div className="grid grid-cols-2 gap-6 m-4  shadow-2xl">
                <img width={'300px'} src={image} alt="" />
                <div className=" shadow-2xl border-slate-200">
                    <h2 className="text-4xl font-extralight">{bookName}</h2><br />
                    <p>By : {author}</p>
                    <br />
                    <p>Review : {review}</p><hr />
                    <p>{category}</p><hr />
                    <div className="flex gap-2 justify-around mt-2 ">
                        <span>Tag : </span>
                        {
                            tags.map(tag => <><a className="text-green-600 font-semibold" href="">{tag}</a></>)
                        }
                    </div>
                    <hr />
                    <div >
                        <p>Number of Page : {totalPages}</p>
                        <p>Publisher : {publisher}</p>
                        <p>Year Of Publishing : {yearOfPublishing}</p>
                        <p>Rating : {rating}</p>
                    </div>
                    <br />
                 
                </div>
            </div>
        </div>
    );
};

export default BookDetails;