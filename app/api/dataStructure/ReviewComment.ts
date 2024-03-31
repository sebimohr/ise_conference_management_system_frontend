class ReviewComment {
  id: string
  time: Date
  comment: string

  constructor(id: string, time: Date, comment: string) {
    this.id = id;
    this.time = time;
    this.comment = comment;
  }
}
