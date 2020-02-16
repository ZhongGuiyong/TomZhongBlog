import mongoose from 'mongoose'

const CommentSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    article_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
    name: { type: String, default: '', required: true },
    email: { 
        type: String, 
        required: true, 
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    content: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('comment', CommentSchema)