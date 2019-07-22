var messages = [];
var submitMessage = document.getElementById("submitButton");
var messageBoard = document.getElementById("messageList");
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
}
