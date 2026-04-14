export class Task {
  constructor({ id, title, status, metadata, createdAt }) {
    this.id = id;
    this.title = title;
    this.status = status;
    this.metadata = metadata;
    this.createdAt = createdAt;
  }
}
