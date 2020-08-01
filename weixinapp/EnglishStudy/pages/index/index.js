'use strict';

import util from '../../utils/index';
import config from '../../utils/config';

let app = getApp()
let isDEV = config.isDev;

let handler = {
  data: {
    page: 1,
    days: 3,
    pageSize: 4,
    totalSize: 0,
    hasMore: true,
    articleList: [],
    defaultImg: config.defaultImg,

    onload (options) {
      this.requestArticle()
    },
  
    requestArticle () {
      util.request({
        url: 'list',
        mock: true,
        data: {
          tag: '微信热门',
          start: this.data.page || 1,
          days: this.data.days || 3,
          pageSize: this.data.pageSize,
          langs: config.appLang || 'en'
        }
      })
      .then(res => {
        if(res && res.status === 0 && res.data.length) {
          let articleData = res.data;
          let formatData = this.formatArticleData(articleData);
          console.log(formatData)
        }
        else if(this.data.page === 1 && res.data && res.data.length ===0) {
          util.alert();
          this.setData({
            hasMore:false
          });
        }
        else if (this.data.page !== 1 && res.data && res.data.length === 0) {
          this.setData({
            hasmore: false
          });
        }
        else {
          util.alert('提示',res);
          this.setData({
            hasMore: false
          });
          return null;
        }
      });
    }
  },
  formatArticleData (data) {
    let formatData = undefined;
    if (data && data.length) {
      formatData = data.map((group) => {
        group.formateDate = this.dateConvert(group.date);
        if (group && group.articles) {
          let formatArticleItems = group.articles.map((item) =>{
            item.hasVisited = this.isVisited(item.contentID);
            return item;
          }) || [];
          group.articles = formatArticleItems;
        }
        return group
      })
    }
    return formatData;
  }
}
page(handler)