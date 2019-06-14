/* eslint-disable padded-blocks */
import wepy from 'wepy'
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
  
  // 获取用户组队情况
  static async GetUserTeam() {
    return await this.get(`${this.baseUrl}/team/getme`);
  }
  
  // 获取用户组队情况
  static async CreateTeam() {
    return await this.get(`${this.baseUrl}/team/create`);
  }

  // 获取组队信息
  static async GetTeam(team_id) {
    return await this.get( `${this.baseUrl}/team/show`, {team_id:team_id} );
  }
  
  // 搜索队伍信息
  static async SearchTeam(team_id) {
    return await this.get( `${this.baseUrl}/team/search`, {team_id:team_id} );
  }

  // 加入队伍
  static async JoinTeam(team_id) {
    return await this.get( `${this.baseUrl}/team/join`, {team_id:team_id} );
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
  
  // 获取所有轮播数据
  static async GetCarousels() {
    if(wepy.$instance.globalData.carousels.length) return wepy.$instance.globalData.carousels;
    let carousels = await this.get(`${this.baseUrl}/carousels`);
    wepy.$instance.globalData.carousels = carousels;
    return carousels;
  }
  
  // 获取所有广告数据
  static async GetAds() {
    if(wepy.$instance.globalData.ads.length) return wepy.$instance.globalData.ads;
    let ads = await this.get(`${this.baseUrl}/ads`);
    wepy.$instance.globalData.ads = ads;
    return ads;
  }

  // 点击广告数据
  static async ClickAd(id) {
    return await this.get(`${this.baseUrl}/action/adclick`, {id: id});
  }
  // 点击轮播数据
  static async ClickCarousel(id) {
    return await this.get(`${this.baseUrl}/action/carouselclick`, {id: id});
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
  // 获取专题文章列表
  static async SearchArticles(keywork,page) {
    return await this.get(`${this.baseUrl}/search`, {q: keywork, page:page});
  }
  
  // 获得
  static async GetArticlePoster(id) {
    return await this.get(`${this.baseUrl}/poster/article/${id}`);
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
  
  // 用户签到
  static async UserSign() {
    return await this.get(`${this.baseUrl}/action/sign`);
  }

  // 用户签到
  static async UserReward() {
    return await this.get(`${this.baseUrl}/action/reward`);
  }

  // 用户签到
  static async UserSignAndReward() {
    return await this.get(`${this.baseUrl}/action/signandreward`);
  }

  // 用积分兑换指定商品
  static async BuyGoods(goods_id, num) {
    return  await this.get(`${this.baseUrl}/buygoods`, {goods_id: goods_id, num,num});
  }
  // 获取文章详细
  static async GetArticleInfo(article_id) {
    return  await this.get(`${this.baseUrl}/articles/${article_id}`);
  }

  // 获取文章评论
  static async GetArticleComments(article_id,page) {
    return  await this.get(`${this.baseUrl}/article/${article_id}/comments`,{page: page});
  }
  
  // 获取文章评论
  static async NewArticleComment( article_id, comment, rep_id ) {
    return await this.post(`${this.baseUrl}/article/${article_id}/comment`,{comment: comment, rep_id: rep_id});
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
