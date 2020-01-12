// 更新SEO的SQL

// 更新SEO
db.seos.update(
  { _id: ObjectId('5e0c0a360f209a0a60e67ccc') },
  {
    $set: {
      seoArrays: [
        {
          tdk: {
            title: '大贵 | 生活技术分享 | Dagui | Share insights from Dagui | Tom Zhong',
            description: '分享生活和技术的点点滴滴。Share insights from Dagui.'
          },
          name: 'index'
        }
      ]
    }
  }
)

// 获取最新的文章
db.articles.find().pretty().sort({createTime: -1}).limit(1)
