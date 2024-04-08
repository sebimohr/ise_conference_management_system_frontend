class ReviewComment {
  id: string
  time: Date
  author: string
  comment: string

  constructor(id: string, time: Date, author: string, comment: string) {
    this.id = id;
    this.time = time;
    this.author = author;
    this.comment = comment;
  }
}
