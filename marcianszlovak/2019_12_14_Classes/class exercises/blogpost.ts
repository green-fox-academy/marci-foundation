class blogPost {
  authorname: string;
  text: string;
  publicationDate: string;
  constructor(authorname: string, text: string, publicationDate: string) {
    this.authorname = authorname;
    this.text = text;
    this.publicationDate = publicationDate;
  }
}

const blog1 = new blogPost(
  "John Doe",
  "Lorem ipsum dolor sit amet",
  "2000.05.04"
);

console.log(blog1);
