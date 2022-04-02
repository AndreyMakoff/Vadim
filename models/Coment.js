const { Schema, model } = require('mongoose');

const schema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // На чьей странице находится комментарий
    pageID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // Кто оставил коммент
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

module.exports = model('Coment', schema);
