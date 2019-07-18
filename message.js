var messages = [];
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
        this.message = message;
    }
    Message.prototype.post = function (message) {
        var newPost = new Message(message);
        console.log(newPost.message);
        messages.push(newPost.message);
    };
    return Message;
}());
