// import Tag from "../Tag/Tag";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { id, image, tags, bookName, author, category, rating } = book;
    return (
        <Link to={`/book/:${id}`}>
            <div className="card  bg-base-100 shadow-2xl font-semibold">
                <figure><img src={image} alt="book cover" /></figure>
                <div className="flex gap-2 justify-around mt-2 ">
                    {
                        tags.map(tag => <><a href="">{tag}</a></>)
                    }
                </div>
                <div className="card-body ">
                    <h2 className="card-title text-center font-extrabold">{bookName}</h2>
                    <p>By Name : {author}</p>
                    <div className="flex justify-around">
                        <h4>{category}</h4>
                        <div className="flex gap-2">
                            <p className=" text-xl">{rating} </p>
                            <span><FaRegStar className=" text-2xl"></FaRegStar></span>
                            {/* <img width={'16px'} src='https://i.ibb.co/6Z8nv2S/staricon.png'
                            alt="" /> */}
                            {/* <p><FaRegStar></FaRegStar></p> */}
                        </div>

                    </div>
                </div>
            </div >
        </Link>
    );
};

export default Book;