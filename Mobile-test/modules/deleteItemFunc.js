"use strict";

function deleteItemFunc(list,id) {
    return list.filter(item => item.id != id)
};

export {deleteItemFunc};