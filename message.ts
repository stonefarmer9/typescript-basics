let messages = [];
let submitMessage = document.getElementById("submitButton")
let messageBoard = document.getElementById("messageList")

class Message {
  content: string;
  constructor(
    public message: string
  ){
    this.message = message
  }
}

function post(message: string){
  var text = (<HTMLInputElement>document.getElementById("messageInput")).value;
  const newPost = new Message(text)
  messages.push(newPost.message)
  console.log(messages)
}
