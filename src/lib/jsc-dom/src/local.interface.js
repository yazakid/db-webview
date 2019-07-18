messages.forEach(message => {
    switch (message.command){
        case Commands.appendChild:
            let args = message.args;
            const elements = elementsByQueue;
            const parentId = args[1];
            const childId = args[2];

            if (elements[parentId]) {
                elements[parentId].appendChild(elements[childId]);
            }
            break;
        case Commands.insertBefore:
            break;
        case Commands.replaceChild:
            break;
        case  Commands.setAttribute:
            break;
        case Commands.removeAttribute:
            break;
    }

})





[Commands.insertBefore]: (queueIndex, msg) => {
},
    [Commands.removeChild]: (queueIndex, msg) => {
},
    [Commands.replaceChild]: (queueIndex, msg) => {
},
    [Commands.setAttribute]: (queueIndex, msg) => {
},
    [Commands.removeAttribute]: (queueIndex, msg) => {
}
