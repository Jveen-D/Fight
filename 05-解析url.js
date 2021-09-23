/*
* 解析URL
* 把一个url的query参数，解析成指定格式的对象
* 实现一个函数，可以对 url 中的 query 部分做拆解，返回一个 key: value 形式的 object
*
* — 实例 —
* 输入：‘http://sample.com/?a=1&e&b=2&c=xx&d#hash’
* 输出：{ a: '1', e: '', b: '2', c: 'xx', d: '' }
* */
function getQueryObj(url) {
    let arr = url.split("?")[1].split("#")[0].split("&");
    const resObj = {};
    arr.forEach(item => {
        let [key, value = ''] = item.split("=")
        resObj[key] = value
    })
    return resObj
}

console.log(getQueryObj('http://sample.com/?a=1&e&b=2&c=xx&d#hash'))
