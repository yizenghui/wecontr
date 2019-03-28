/* eslint-disable padded-blocks */
import base from './base'

/**
 * 权限服务类
 */
export default class comm extends base {

  // 查看文章行为
  static async ViewAction(article_id) {
    return await this.get(`${this.baseUrl}/action/view`, {article_id: article_id});
  }

  // 查看文章行为
  static async GetUserTasks() {
    return await this.get(`${this.baseUrl}/action/task`);
  }
  
  // 查看文章行为
  static async GetUserTaskLogs() {
    return await this.get(`${this.baseUrl}/user/tasklogs`);
  }
  
  // 查看用户积分日志
  static async GetUserLogs(page) {
    return await this.get(`${this.baseUrl}/user/pointlog`, {page: page});
  }
  
  // 用户点赞某个文章
  static async LikeArticleAction(article_id) {
    return await this.get(`${this.baseUrl}/action/likearticle`, {article_id: article_id});
  }
  
  // 用户取消点赞某个文章
  static async UnLikeArticleAction(article_id) {
    return await this.get(`${this.baseUrl}/action/unlikearticle`, {article_id: article_id});
  }
  
  // 用户点赞某个评论
  static async LikeCommentAction(comment_id) {
    return await this.get(`${this.baseUrl}/action/likecomment`, {comment_id: comment_id});
  }
  
  // 获取首页轮播图
  static async GetSwipers() {
    // const {data} = await this.get(`${this.baseUrl}/topics`, {page: page});
    // return data
    return await this.get(`${this.baseUrl}/getswipers`);
  }
  
  // 获取用户首页轮播图
  static async GetUserSwipers() {
    return await this.get(`${this.baseUrl}/getuserswipers`);
  }
  
  // 获取所有专题
  static async GetTopics(page) {
    return  await this.get(`${this.baseUrl}/topics`, {page: page});
  }

  // 获取专题详细
  static async GetTopicInfo(topic_id) {
    return await this.get(`${this.baseUrl}/topics/${topic_id}`);
  }
  // 获取专题文章列表
  static async GetTopicArticles(topic_id,page) {
    return await this.get(`${this.baseUrl}/articles`, {page: page, topic:topic_id});
  }

  // 获取推荐文章列表
  static async GetRecommendedArticles(page) {
    //
    return await this.get(`${this.baseUrl}/articles/recommend`, {page: page});
  }
  
  // 获取关注过的文章列表
  static async GetFootprintArticles(page) {
    return await this.get(`${this.baseUrl}/user/footprint`, {page: page});
  }
  // 获取关注过的文章列表
  static async GetLikeArticles(page) {
    return await this.get(`${this.baseUrl}/user/like`, {page: page});
  }

  // 获取积分商城所有商品
  static async GetGoodses(page) {
    return await this.get(`${this.baseUrl}/goodses`, {page: page});
  }

  // 获取用户所有订单
  static async GetOrders(page) {
    return await this.get(`${this.baseUrl}/orders`, {page: page});
  }

  // 获取订单详细
  static async GetOrderInfo(order_id) {
    return await this.get(`${this.baseUrl}/orders/${order_id}`);
  }


  // 获取当前登录用户信息
  static async GetMe() {
    return await this.get(`${this.baseUrl}/getme`);
  }
  
  // 用积分兑换指定商品
  static async BuyGoods(goods_id, num) {
    return  await this.get(`${this.baseUrl}/buygoods`, {goods_id: goods_id, num,num});
  }
  // 获取文章详细
  static async GetArticleInfo(article_id) {
    return  await this.get(`${this.baseUrl}/articles/${article_id}`);
  }

  // 获取喜欢此文章的用户列表
  static async GetArticleLikeUsers(article_id) {
    return  await this.get(`${this.baseUrl}/articles/${article_id}/likeusers`);
  }

  // 获取今天签到用户
  static async Post() {
    // const url = `${this.baseUrl}/project`
    const {data} = await this.get(`${this.baseUrl}/project`);
    return data
    // return  await this.get(`${this.baseUrl}/project`);
  }


  static async getUser(id) {
    const url = `${this.baseUrl}/api/user/${id}`
    return await this.get(url)
  }

  // 获取今天签到用户
  static async GetAllProject() {
    // const url = `${this.baseUrl}/project`
    const {data} = await this.get(`${this.baseUrl}/project`);
    return data
    // return  await this.get(`${this.baseUrl}/project`);
  }

  // 获取今天签到用户
  static async GetTodaySignUsers(page) {
    const url = `${this.baseUrl}/gettodaysignusers`
    return await this.get(url, {page: page})
  }

  static async GetAppConfig() {
    const url = `${this.baseUrl}/api/getappconfig`
    return await this.get(url)
  }

  // 获得签到配置
  static async GetSignConfig() {
    const url = `${this.baseUrl}/api/getsignconfig`
    return await this.get(url)
  }

   /**
   * 同步用户数据到服务器上
   */
  static async AsyncUserData(user) {
    return this.post(`${this.baseUrl}/asyncuserdata`, {ed: user.encryptedData, iv: user.iv})
  }
}
