class ReviewComment {
  id: string
  date: Date
  author: string
  comment: string

  constructor(id: string, time: Date, author: string, comment: string) {
    this.id = id;
    this.date = time;
    this.author = author;
    this.comment = comment;
  }
}
