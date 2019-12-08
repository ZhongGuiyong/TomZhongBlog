import mongoose from 'mongoose'

const SettingSchema = mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    //累计访客
    allVistor: { type: Number, default: 0 },
    // 当前文章类型
    articleType: [ 
      {
        name: { type: String, default: '' },
        value: { type: String, default: '' },
        desc: { type: String, default: '' },
        imgSrc: { type: String, default: '' },
      }
    ],
    // 当前热门标签
    tags: [
      {
        name: { type: String, default: '' },
        value: { type: String, default: '' }
      }
    ]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

export default mongoose.model('Setting', SettingSchema)
