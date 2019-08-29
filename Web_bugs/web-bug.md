---
title: 'dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.63.dylib'
date: 2019-08-28 17:56:35
tags: Website development
---
# 关于运行环境踩过的一些坑Some bugs in the code environment

由于现在的软件包在不断的更新，而我们使用的很多软件包都是有依赖包的，这个时候就很容易在依赖包这里出现问题。    
Since today's software packages are constantly being updated, and many of the packages we use have dependencies, it's easy to have problems with dependencies.
# 关于 dyld 的包依赖

这个对使用的语言影响不大，在出现bug 的时候主要是看，报错的原因。然后检查自己的目录，软件包位置，软件版本等等。


## 报错的代码提示：

``` 
> dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.63.dylib
  Referenced from: /usr/local/bin/node
  Reason: image not found
Abort trap: 6
```

## 解决方案
<!--more-->
我查看很多关于dyld 缺失包的一些解决方案，
- 移动/替换文件。
> 如果/usr/local/Cellar/icu4c下还有62.1目录，且目录的lib下有libicui18n.62.dylib等文件，则可以将这些文件复制到/usr/local/opt/icu4c/lib/ 下，主要是以下这几个文件：
``` 
libicudata.62.1.dylib
libicudata.62.dylib
libicui18n.62.dylib
libicuio.62.dylib
libicuuc.62.dylib
```

- 更新所用的软件包，以支持新的依赖包
  
``` 
$  brew upgrade software
```
### example
> 在上面的错误提示中可以看到“Referenced from: /usr/local/bin/node”， 所以这需要对应更新node

``` 
$  brew upgrade node
```

查看是否安装成功：
``` 
$ node -v
v12.9.1
```

