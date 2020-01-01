// 更新SEO的SQL

db.seos.update(
  { _id: ObjectId('5e0c0a360f209a0a60e67ccc') },
  {
    $set: {
      seoArrays: [
        {
          tdk: {
            title: 'Dagui | life experience share',
            description: 'Share life experience of Dagui.'
          },
          name: 'index'
        }
      ]
    }
  }
)
