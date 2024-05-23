import React from 'react';

const PageList = ({ pageList }) => {
    const { bookName, totalPages } = pageList;
    return (
        <div>
            <h2>pages :{bookName} </h2>
            <p>Pages : {totalPages}</p>
        </div>
    );
};

export default PageList;