import { FaPerson } from "react-icons/fa6";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";



const BookList = ({ bookList }) => {
    const { image, bookName, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = bookList;
    return (
        <div className="card card-side bg-base-100 shadow-xl m-8 ">
            <figure><img width={'500px'} src={image} alt="Movie" /></figure>
            <div className="card-body text-left">
                <h2 className="card-title">{bookName}</h2>
                <p>By : {author}</p>
                <div className="flex gap-2 justify-around mt-2 ">
                    <span><span className="font-bold ">Tags</span> : </span>
                    {
                        tags.map(tag => <><a className="text-green-600 font-semibold bg-green-100 rounded-lg p-2 border-green-500" href="">{tag}</a></>)
                    }
                    <span><IoLocationOutline></IoLocationOutline></span>
                    <p>Year Of Publishing : {yearOfPublishing}</p>
                </div>
                <div className="flex gap-1">
                    <span><FaPerson></FaPerson></span>
                    <p> Publisher : {publisher}</p>
                    <span><MdOutlineFindInPage></MdOutlineFindInPage></span>
                    <p>Pages : {totalPages}</p>
                </div>
                <div className="card-actions justify-end">
                    <p className="text-green-600 font-semibold bg-green-100 rounded-xl p-2 border-green-500">Category : {category}</p>
                    <p className="text-green-600 font-semibold bg-pink-100 rounded-lg p-2 border-green-500">Ratings : {rating}</p>
                    <Link to={'../listedBook'}><button className="btn bg-green-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BookList;