# Hexo 无法加载图片（路径问题）

hexo默认无法自动处理文章插入本地图片，需要通过扩展插件支持。

## 检查原因
### 1. 检查配置文件
  > 配置_config.yml里面的post_asset_folder:false这个选项设置为true。Hexo 提供了一种更方便管理 Asset 的设定：post_asset_folder
  ```
  post_asset_folder: true
  ```
### 2. 安装插件 
  > 默认的插件安装是下面这个
  ```
  npm install hexo-asset-image --save
  ```
### 3. 问题在这里（重点）

由于hexo3版本后对很多插件支持有问题，hexo-asset-image插件在处理data.permalink链接时出现路径错误，把年月去掉了，导致最后生成的路径为%d/xxx/xxx需要对其做兼容处理。通过判断当前版本是否等于3的版本做不同的路径分割。   
这里给出两个方法(二选一)，推荐使用第二个方法
- 方法一：JS自己修改
如果对于JS比较熟悉的可以使用这个方法，根据自己的具体情况修改。如果不知道怎么修改，推荐使用方法二。   
在代码的函数前加入：
```js
var version = String(hexo.version).split('.');
```
修改：JS
```js
if(config.post_asset_folder){
    var link = data.permalink;
    var beginPos = getPosition(link, '/', 3) + 1;
    var appendLink = '';
    // In hexo 3.1.1, the permalink of "about" page is like ".../about/index.html".
    // if not with index.html endpos = link.lastIndexOf('.') + 1 support hexo-abbrlink
    if(/.*\/index\.html$/.test(link)) {
      // when permalink is end with index.html, for example 2019/02/20/xxtitle/index.html
      // image in xxtitle/ will go to xxtitle/index/
      appendLink = 'index/';
      var endPos = link.lastIndexOf('/');
    }
    else {
      var endPos = link.length-1;
    }
    link = link.substring(beginPos, endPos) + '/' + appendLink;
```

  
- 方法二：安装修改好的包，在hexo的目录下执行
  ```
  npm install https://github.com/CodeFalling/hexo-asset-image --save
  ```
  也可以到github 看源代码包


### 查看路径
- 重新部署生成新的照片地址，清楚缓存然后迭代新的版本
```linux
> hexo clean
> hexo g 
```
- 生成新的图片地址的时候可以看到是
  
```linux
update link as:-->/2019/08/08/yourfilename/img.png
update link as:-->/2019/08/08/yourfilename/img2.png
update link as:-->/2019/08/08/yourfilename/img3.png
update link as:-->/2019/08/08/yourfilename/img4.png
update link as:-->/2019/08/08/yourfilename/img5.png
```

### 添加照片成功部属
```linux
> hexo d 
```

### 成功案例
- [机器学习算法之降维]([链接网址](https://yonahwang.github.io/2019/08/08/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%AE%97%E6%B3%95%E4%B9%8B%E9%99%8D%E7%BB%B4/) "标题")


Thank you for reading
