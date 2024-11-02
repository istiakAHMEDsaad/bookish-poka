const getStoredReadList = () => {
    // Read List
    const storedListString = localStorage.getItem('read-list');
    if(storedListString){
        const storedList = JSON.parse(storedList);
    }else{
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();

    if (storedList.includes(id)) {
        // alreday exist
        console.log('already exist');
    } else {
        storedList.push(id);
        const storedListString = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListString);
    }
};

export {addToStoredReadList}