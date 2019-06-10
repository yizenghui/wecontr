
## 快速接入



0. 获取并解压`dist.7ip`到你的本地

1. 注册小程序 获取 AppID(小程序ID)  AppSecret(小程序密钥)

2. 登录后台获取api token (假设是`wRZJFqYAvbRk` ) 链接： https://readfollow.com/admin/auth/setting#tab-form-2  并设置 AppID，AppSecret

3. 替换 dist/app.js 中的 api_token (用文本编辑器打开搜索'api\_token') `api_token:"0RPJhqvW6gMp", `中的`0RPJhqvW6gMp`替换为你的api token`wRZJFqYAvbRk`

4. 开发者工具导入项目,选择根目录中的 dist 为代码目录,设置appid为自己 AppID(小程序ID) 

5. 小程序后台添加

	*	request合法域名 https://readfollow.com

	*	downloadFile合法域名 https://wx1.wechatrank.com



### 后台操作：
后台地址 https://readfollow.com/admin

1. 添加专题， 需要背景图、名称和描述
2. 添加作者， 只有名字也可以
3. 添加文章， 标题、描述、封面、正文等 正文使用markdown语法，请自行摸索。 
4. 添加轮播， 首页和后台都务必添加至少一个






## 二次开发

安装（更新） wepy 命令行工具。
	npm install wepy-cli -g
	
获取小程序端代码
	git clone  https://github.com/yizenghui/wxcms.git

或者下载文件并解压 https://github.com/yizenghui/wxcms/archive/master.zip

进入根目录	`cd wxcms`

安装依赖 `npm install`

开发实时编译 `wepy build --watch`

修改小程序配置 `src/app.wpy`

`api_token: '0RPJhqvW6gMp',`


修改`0RPJhqvW6gMp`为由 https://readfollow.com/admin/auth/setting#tab-form-2 所获得的 api token


开发者工具导入项目

选择根目录中的 dist 为代码目录

注意：请关闭 ES6 转 ES5

## 技术支持(兼职客服)
email: 121258121@qq.com