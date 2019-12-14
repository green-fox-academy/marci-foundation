export class postIt {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const post1 = new postIt("orange", "blue", "Idea1");
console.log(post1);