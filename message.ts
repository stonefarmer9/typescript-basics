let messages = [];


function post(message: string){
  var text = (<HTMLInputElement>document.getElementById("messageInput")).value;
  console.log(text)
  messages.push(message)
  this.report()
}

function report(){
  let list = (<HTMLElement>document.getElementById("list"))
  list.innerHTML = convert(messages)
}

function convert(list: Array<string>){
  for (let messageText of list){
    let node = (<HTMLLIElement>document.createElement('li'));
    node.innerText = messageText;
    return (<HTMLElement>document.getElementById("list").appendChild(node))
  }
}
