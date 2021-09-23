/*
* 给你一个对象，也是把它转化成指定的格式。比如把 a_b 这种下划线的key值转化为驼峰 aB，
* 或者给你一个些数据，转化成对象。
*
* 比如把 a.b.c 变成 { a: { b: c } }
* */
console.log('a.b.c'.split('.').reduceRight(( total, item ) => {
    return { [item]: total }
}))

function pToC(obj){
    var newObj={};
    for(let i in obj){
        let name = i.replace(/_[a-z]/g,function(e){
            return e.toUpperCase().slice(1);
        });
        if(typeof obj[i]=='object'){
            obj[i] = pToC(obj[i]);
        }
        newObj[name] = obj[i];
    }
    return newObj;
}

var obj={
    'a_b':{
        'c_df':23
    },
    'a_bf':{
        'c_df_dhf':{
            'd_gds_df':43
        }
    }
}

console.info(pToC(obj));
