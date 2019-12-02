import queryFormat from '@/utils/queryHandler'
import axios from 'axios'
export async function getArticleList(
  index = 1,
  limit = 5,
  tit = '',
  cont = ''
) {
  const pageIndex = index
  const pageLimit = limit
  const title = tit
  const content = cont
  const query = queryFormat({ pageIndex, pageLimit, title, content })
  const article = `/v1/article${query}`
  try {
    const res = await axios.get('http://localhost:3000'+article)
    // console.log(res)
    // console.log(res.data)
    // const {
    //   pagination: { current, showDataCount, totalDataCount }
    // } = res
    
    return res.data;
  } catch (error) {
    console.log(error)
    return []
  }
}

export default {
  getArticleList
}
