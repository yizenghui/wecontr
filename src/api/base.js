import http from '../utils/http.js'
import wepy from 'wepy'

export default class base {
  // static baseUrl = 'http://localhost:8009';
  static baseUrl = wepy.$instance.globalData.baseUrl;
  static get = http.get.bind(http);
  static put = http.put.bind(http);
  static post = http.post.bind(http);
  static delete = http.delete.bind(http);
}
