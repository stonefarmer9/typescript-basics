var messages = [];
function post(message) {
    var text = document.getElementById("messageInput").value;
    console.log(text);
    messages.push(message);
    this.report();
}
function report() {
    var list = document.getElementById("list");
    list.innerHTML = convert(messages);
}
function convert(list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var messageText = list_1[_i];
        var node = document.createElement('li');
        node.innerText = messageText;
        return document.getElementById("list").appendChild(node);
    }
}
