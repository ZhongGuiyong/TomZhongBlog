import queryFormat from '@/utils/queryHandler'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:' + (process.env.NUXT_PORT || 3000);
console.log('当前使用端口: ' + process.env.NUXT_PORT)
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
    const res = await axios.get(article)
    // console.log(res)
    // console.log(res.data)
    // const {
    //   pagination: { current, showDataCount, totalDataCount }
    // } = res

    return res.data
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getArticleDetails(id) {
  if (!id) {
    return {}
  }

  const article = `/v1/article/${id}`
  try {
    const res = await axios.get(article)
    // console.log(res);
    return res
  } catch (error) {
    console.log(error)
    return {}
  }
}
export async function deleteArticleById(id) {
  if (!id) {
    return {}
  }

  const article = `/v1/article/${id}`
  try {
    const res = await axios.delete(article)
    // console.log(res);
    return res
  } catch (error) {
    console.log(error)
    return {}
  }
}
export default {
  getArticleList,
  getArticleDetails,
  deleteArticleById,
}
