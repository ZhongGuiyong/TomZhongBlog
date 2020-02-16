export const state = () => ({
  article: null
})
export const mutations = {
  setArticle(state, article) {
    state.article = article
  },
  updateArticle(state, {commentCount = 0 , likeCount = 0 } = {} ) {
    if (!commentCount && !likeCount) {
      return;
    }
    const article = state.article
    article.comment_count += commentCount
    article.like_count += likeCount
    state.article = article
  }
}
