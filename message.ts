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
  this.report(newPost)
}

function report(message: Message){
  (<HTMLDivElement>document.getElementById("messageList")).innerText = convert(messages)
}

function convert(list: Array<string>): string{
  return list.toString()
}
