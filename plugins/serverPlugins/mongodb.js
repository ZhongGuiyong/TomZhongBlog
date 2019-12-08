import mongoose from 'mongoose'
import initizeMongoData from './initizeMongoData'

export default async () => {
  await mongoose.connect(
    // 'mongodb+srv://root:1234@cluster0-mtpng.mongodb.net/zguiyong?retryWrites=true&w=majority'
    'mongodb://localhost:27017/zguiyong',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  mongoose.set('createIndexes', true)

  // 第一次运行时初始化数据
  await initizeMongoData()
  return mongoose
}
