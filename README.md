# min-react-i18n

最小的react国际化库，大小不到1kb，国际化内容会过滤敏感内容，防止js代码注入攻击

### 使用方法

初始化
```javascript
import reactI18n from "min-react-i18n";

const lang='zh-cn'

useEffect(() => {
    setInitDone(false);
    const url = '/i18n/' + lang + '/index.json'
    fetch(url)
        .then(response => response.json())
        .then(json => {
            // json {
            //     "Totheformerone": "你的名字是 {value}",
            // }
            reactI18n.init(json)
        });

}, [currentLocale]);

```


Text组件
```javascript
import React, {FC, useEffect, useState} from 'react';
import reactI18n from "min-react-i18n";

/**
 * i18nKey: 必须，国际化key
 * options：非必须，国际化参数
 */
const Text= ({
                                  i18nKey,
                                  options = {},
                                  children=''
                              }) => {
    const [html, setHtml] = useState<any>('')
    useEffect(() => {
        setHtml(reactI18n.get(i18nKey,options) || children)
    }, [i18nKey])
    return <span dangerouslySetInnerHTML={{__html: html}}/>

}

export default Text

```

使用
```javascript
<Text i18nKey='Totheformerone' options={{value:'小明'}}>内容</Text>  // 你的名字是 小明
```