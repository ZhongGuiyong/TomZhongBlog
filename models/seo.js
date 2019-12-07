import mongoose from 'mongoose'

const SEOSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    seoArrays: [
      { 
        name: {type: String, default:'' },
        tdk: {
          title: { type: String, default: '' },
          description: { type: String, default: '' }
        }
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('SEO', SEOSchema)
