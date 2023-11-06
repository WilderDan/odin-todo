class Note {
  constructor(id, title, description, isPinned) {
    this._id = id;
    this.title = title;
    this.description = description;
    this.isPinned = isPinned;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get isPinned() {
    return this._isPinned;
  }

  set isPinned(value) {
    this._isPinned = value;
  }
}

export default Note;
