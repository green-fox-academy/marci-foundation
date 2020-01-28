export class PostIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const post1 = new PostIt("orange", "blue", "Idea1");
const post2 = new PostIt("pink", "black", "Awesome");
const post3 = new PostIt("yellow", "green", "Supoyb");
