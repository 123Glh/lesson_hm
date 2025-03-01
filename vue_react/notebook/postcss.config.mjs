import pxtorem from 'postcss-pxtorem';

export default {
  plugins: [
    pxtorem({
      rootValue: 37.5,  // 设计稿宽度的1/10
      propList: ['*'],
      selectorBlackList: ['.norem'], // 过滤掉.norem-开头的class，不进行rem转换
    }),
  ],
};