

const getStoredBookItem = () => {
    const storedBookItem = localStorage.getItem('book-items');
    if (storedBookItem) {
        return JSON.parse(storedBookItem)
    }
    return []
}


const saveBookItem = id => {
    const storedBookItems = getStoredBookItem();
    const exists = storedBookItems.find(bookid => bookid === id);
    if (!exists) {
        storedBookItems.push(id);
        localStorage.setItem('book-items', JSON.stringify(storedBookItems));
    }
}



export { getStoredBookItem, saveBookItem }