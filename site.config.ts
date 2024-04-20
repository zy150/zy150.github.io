import { defineSiteConfig } from 'valaxy'
import { addonWaline } from 'valaxy-addon-waline'


export default defineSiteConfig({







  url: 'https://github.com/zy150',
  lang: 'zh-CN',
  title: '欢迎来到这里',
  author: {
    name: '一支懒虫',
	 avatar: 'http://62.234.62.113:8080/avatar.png',
	 email:'zy15027765695@outlook.com',
  },
   /**
   * 站点图标
  
  favicon: 'https://www.yunyoujun.cn/favicon.svg',
   */
  /**
   * 副标题
   */
  subtitle: 'All at sea.',
  description: '人生若只如初见，何事秋风悲画扇',
  social: [
 
    {
      name: 'QQ 2066395705',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/zy150',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
	/*
	   {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '微博',
      link: 'https://weibo.com/jizhideyunyoujun',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣',
      link: 'https://www.douban.com/people/yunyoujun/',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
	*/
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=563635966',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
	/*
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/yunyoujun/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
	*/
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/629003004?spm_id_from=333.1007.0.0',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
	/*
    {
      name: '微信公众号',
      link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
	{
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/YunYouJun',
      icon: 'i-ri-twitter-line',
      color: '#1da1f2',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/elpsycn',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
	*/
    {
      name: 'E-Mail',
      link: 'zy15027765695@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },

  ],

  search: {
    enable: false,
  },
   /**
   * 开启阅读统计
   */
  statistics: {
    enable: true,
    readTime: {
      /**
       * 阅读速度
       */
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
  encrypt: {
    enable: true,
  },
  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
	description:'我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'http://62.234.62.113:8080/aliPlay.png',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
 
    ],
  },
  
  license: {
    /**
     * Whether to show at the bottom of the article
     * @description 是否显示在文章底部
     * @default true
     */
    enabled: false,
    /**
     * Creative License Language, same with your config.lang
     * when lang === 'zh-CN', use 'zh'
     * @description 默认与站点语言相同
     * @default 'en'
     */
    language: 'zh',
    /**
     * Type of license
     * @description 证书类型
     * @default 'by-nc-sa'
     */

  },
  

})
