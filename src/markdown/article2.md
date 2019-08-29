## 你可能不知道的css骚操作——表单验证🤦‍

### 效果图

![rending](https://raw.githubusercontent.com/Zhou1eezZZ/Image/master/peanut-world/article/2/rending.webp)

### 原理

表单元素中，有一个pattern属性，可以自定义正则表达式（如手机号、邮箱、身份证..）；valid伪类，可以匹配通过pattern验证的元素；invalid伪类则相反，可以匹配未通过pattern验证的元素；于是就可以随便搞啦，上面的效果图只是做一些简单的效果，更多效果以及限制大家就发挥自己的想象力咯；

### html

布局很简单，input跟button是兄弟节点的关系，required属性是必填的意思，也就是输入的内容必须要验证通过；

```html
<section class="container">
  <input type="text" name="tel" placeholder="请输入手机号码" pattern="^1[3456789]\d{9}$" required><br>
  <input type="text" name="smscode" placeholder="请输入验证码" pattern="\d{4}" required><br>
  <button type="submit"></button>
</section>
```

### css

这里用的是scss预处理器

```css
input {
  // 验证通过时按钮的样式
  &:valid {
    &~button {
      pointer-events: all;
      cursor: pointer;

      &::after {
        content: "提交👍"
      }
    }
  }

  // 验证不通过时按钮的样式
  &:invalid {
    &~button {
      pointer-events: none; // 去除点击事件，让按钮无法点击

      &::after {
        content: "未通过验证😒"
      }
    }
  }
}
```

>peanut 最后编辑于 2019-08-06