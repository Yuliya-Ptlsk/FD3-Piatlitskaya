function addClientFunc (list,item) {
    let copy = [...list];
    copy.push(item);
    return copy;
}

export {addClientFunc};