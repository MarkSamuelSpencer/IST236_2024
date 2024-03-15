class News {
  constructor(id, type, title, date, author, agency, imageUrl, description) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.date = date;
    this.author = author;
    this.agency = agency;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  toString() {
    return `${this.title} - Date: ${this.date} - Author: ${this.author} - Agency: ${this.agency} - Description: ${this.description} - Image URL: ${this.imageUrl} - Type: ${this.type}`;
  }
}

export default News;
