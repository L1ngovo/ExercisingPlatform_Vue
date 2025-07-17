#### # 写在前面

> 这是为了复习Vue相关知识而产生的项目。
>
> 大抵是要做一个刷题的网页



我总是会遗忘之前写过的东西。电脑里有无数个vue项目的文件包，但总是写得零零散散。因为这样那样的事情，项目搁置，当足够有时间的时候再次打开项目就会觉得很陌生。所以只能再次新建项目，如此反复。

时隔一年多再次打开博客，已经静不下心来再次阅读之前的文字，也不太能理解其中蕴含的意思了。所以还是决定重启。

不知道能持续多久，但走一步算一步吧 :)



#### # 配置相关

> 还是要从头写，感觉自己一直在重复做一些初始化的工作，一直没有深入的写



##### 1 项目初始化

- 安装

  ```
  npm create vue@latest
  ```

- 引入element

  ```vue
  npm install element-plus --save
  
  // 而后在main.t中导入
  import ElementPlus from 'element-plus'
  import 'element-plus/dist/index.css'
  app.use(ElementPlus)
  ```




##### 2 布局相关

- flex布局

  - flex-wrap可实现控件在同一行排不下的时候进行换行

    ```css
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 10px;
    font-size: 40px;
    // 可根据控件内元素的大小让控件大小自适应，且超出部分换行
    ```

- grid布局

  - ```css
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    // 不根据控件内元素大小自适应，而是整个控件自适应
    ```

