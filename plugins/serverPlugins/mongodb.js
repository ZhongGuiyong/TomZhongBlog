import mongoose from 'mongoose'

export default async () => {
	await mongoose.connect(
		'mongodb+srv://root:1234@cluster0-mtpng.mongodb.net/zguiyong?retryWrites=true&w=majority',
		{
      useNewUrlParser: true, useUnifiedTopology: true
    }
	)
	await mongoose.set('createIndexes', true)
}