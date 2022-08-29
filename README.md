# lbr-tool

js工具库

### 使用方法

#### 按需加载
```javascript
import getUrlParam from 'lbr-tool/lib/tool/getUrlParam'
import myLocalStorage from 'lbr-tool/lib/tool/myLocalStorage'
```

#### 全部加载
```javascript
import {getUrlParam, myLocalStorage, loadJs} from 'lbr-tool'

// 获取url参数，兼容hash路由
console.log(getUrlParam('key'));
```

## 方法：


### getUrlParam 获取url参数
```javascript
import {getUrlParam, myLocalStorage, loadJs} from 'lbr-tool'

const key=getUrlParam('key')
console.log(key);

```

### myLocalStorage 设置本地缓存
```javascript
import {myLocalStorage} from 'lbr-tool'

// 设置缓存，20s后过期
myLocalStorage.set('keys', '内容', 20000)

// 获取缓存
const keys = myLocalStorage.get('keys')
console.log(keys)

// 删除缓存
myLocalStorage.remove('keys')

```

### loadJs 动态加载js
```javascript
import {loadJs} from 'lbr-tool'

loadJs('http://code.jquery.com/jquery-migrate-1.2.1.min.js', () => {
    console.log('加载完成回调')
})

```


### deepClone 深拷贝
```javascript
import {deepClone} from 'lbr-tool'
const data={
    name:'小明'
}
const newData=deepClone(data)
```

### debounce 防抖
```javascript
import {debounce} from 'lbr-tool'
window.addEventListener('resize',debounce(()=>{
    console.log('防抖')
},300))
```

### formatDate 日期格式化
```javascript
import {formatDate} from 'lbr-tool'
console.log(formatDate('2022-11-11')) //2022-11-11 00:00:00
console.log(formatDate(1660819197686))  //2022-08-18 18:39:57
console.log(formatDate(1660819197686,'hh:mm:ss')) //18:39:57
console.log(formatDate(1660819197686,'yyyy-mm-dd')) //2022-08-18
```

