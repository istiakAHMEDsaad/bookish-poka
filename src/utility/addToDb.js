const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');

    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();

    if (storedList.includes(id)) {
        console.log('This book already added to read list');
    } else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
};

const getToStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');

    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getToStoredWishList();

    if(storedWishList.includes(id)){
        console.log('This book already in your wished list');
    }else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}


export { addToStoredReadList, addToStoredWishList, getStoredReadList };
