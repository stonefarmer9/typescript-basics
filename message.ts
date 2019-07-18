let messages = [];

class Message {
  content: string;
  constructor(
    public message: string
  ){
    this.message = message
  }

  post(message: string){
    const newPost = new Message(message)
    console.log(newPost.message)
    messages.push(newPost.message)
  }
}
