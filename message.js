var messages = [];
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
        this.message = message;
    }
    return Message;
}());
function post(message) {
    var text = document.getElementById("messageInput").value;
    var newPost = new Message(text);
    messages.push(newPost.message);
    console.log(messages);
    this.report(newPost);
}
function report(message) {
    document.getElementById("messageList").innerText = messages[0];
}
