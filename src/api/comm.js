/* eslint-disable padded-blocks */
import base from './base'

/**
 * 权限服务类
 */
export default class comm extends base {

  // 查看文章行为
  static async ViewAction(article_id) {
    return  await this.get(`${this.baseUrl}/action/view`, {article_id: article_id});
  }
  
  
  // 获取所有专题
  static async GetTopics(page) {
    // const {data} = await this.get(`${this.baseUrl}/topics`, {page: page});
    // return data
    return  await this.get(`${this.baseUrl}/topics`, {page: page});
  }
  
  // 获取专题详细
  static async GetTopicInfo(topic_id) {
    return  await this.get(`${this.baseUrl}/topics/${topic_id}`);
  }
  // 获取专题文章列表
  static async GetTopicArticles(topic_id,page) {
    return  await this.get(`${this.baseUrl}/articles`, {page: page, topic:topic_id});
  }

  // 获取推荐文章列表
  static async GetRecommendedArticles(page) {
    //
    return  await this.get(`${this.baseUrl}/articles/recommend`, {page: page});
  }
  // 获取文章详细
  static async GetArticleInfo(article_id) {
    return  await this.get(`${this.baseUrl}/articles/${article_id}`);
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
}
