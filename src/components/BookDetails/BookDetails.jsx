import { Link, NavLink, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {

    const books = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    console.log(intId)
    const book = books.find(book => book.id === intId)
    console.log(book)
    console.log(id, intId)
    const { image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = book;


    const handleReadComplete = () => {
        toast('Books added to Read List')
    }
    const handleWishList=()=>{
        toast('Books added to Wish List')
    }

    return (
        <div>
            {/* <h2>Book Details : {id} </h2> */}
            <div className="grid grid-cols-2 gap-6   pl-4 shadow-2xl">
                <img className="shadow-2xl" width={'300px'} src={image} alt="" />
                <div className=" shadow-2xl border-slate-200 text-left pl-4" >
                    <h2 className="text-4xl font-light">{bookName}</h2><br />
                    <p >By : <span className="font-bold">{author}</span></p>
                    <br />
                    <p className="text-lg font-bold">{category}</p> <br /><hr /><br />
                    <p><span className="font-bold">  Review</span> : {review}</p><hr />
                    <div className="flex gap-2 justify-around mt-2 ">
                        <span><span className="font-bold ">Tags</span> : </span>
                        {
                            tags.map(tag => <><a className="text-green-600 font-semibold bg-green-100 rounded-lg p-2 border-green-500" href="">{tag}</a></>)
                        }
                    </div>
                    <hr />
                    <br />
                    <div >
                        <p>Number of Page : <span className="font-bold"> {totalPages}</span> </p>
                        <p>Publisher : <span className="font-bold">{publisher}</span> </p>
                        <p>Year Of Publishing : <span className="font-bold"> {yearOfPublishing}</span> </p>
                        <p>Rating :  <span className="font-bold">{rating}</span> </p>
                    </div>
                    <div >
                        <NavLink><button onClick={handleReadComplete} className="text-xl btn hover:bg-blue-400">Read</button></NavLink>
                        <NavLink><button onClick={handleWishList}  className="text-xl ml-4 btn mb-4 bg-blue-400 hover:bg-blue-600">Wish List</button></NavLink>
                        <ToastContainer />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default BookDetails;