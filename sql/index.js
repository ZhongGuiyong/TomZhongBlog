// 更新SEO的SQL

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
