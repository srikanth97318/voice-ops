export class Memory {
  constructor({ id, type, content, metadata, createdAt }) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.metadata = metadata;
    this.createdAt = createdAt;
  }
}