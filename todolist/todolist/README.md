- 不转义html标签  
```js
<li
   key={index} 
   data-index={index}
   dangerouslySetInnerHTML={{__html: item}}
>
</li>
```

- for会与js中的for循环冲突 使用htmlfor替换 类似于class 与 className   

```html
<label htmlFor="insertArea">输入内容^_^ </label>
```

