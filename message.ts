let messages = [];

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
  this.report(newPost)
}

function report(message: Message){
  console.log("In report fxn");
  (<HTMLDivElement>document.getElementById("messageList")).innerText = messages.toString();
}
