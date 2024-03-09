let messageList = [];

export function addMessage(message) {
    messageList = [...messageList, message];
    console.log(messageList);
}

export function deleteMessage(index) {
    messageList.splice(index, 1);
}

export function getMessageList() {
    return messageList;
}
