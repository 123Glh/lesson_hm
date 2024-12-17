# js 类型转换

- es6 之前， js有多少种类型 ？ 6种
  - 简单数据类型，Primitive , 拷贝式赋值
    - String
    - Number
    - Boolean
    - Null
    - Undefined
  - 复杂类型， 引用式赋值
    - Object

- 为何JS 类型会改变？
  Number("1")

- JS 是弱类型语言
- 变量的类型，是可以改变的
- 搞清楚变量的确切类型 ， 大圣来了
  - primitive 类型 -> 其他类型转换
    - Boolean 
  - Object 类型 -> 其他类型转换

- Boolen 显示类型类型转换(构造函数)规则
  - false 的 情况
    - 为空 false
    - false
    - null
    - undefined

    - NaN
      类型仍然是 Number： Not a Number
    - +0
    - -0
    - 0

      - +0 -0
        Object.is(+0, -0)
        1/+0  infinity, 1/-0 -infinity

  - ture

- Number()
  0 1 NaN
    15.7.1.1Number([value]）#
    Returns a Number value (not a Number object) computed by ToNumber(value) if value was supplied, else returns +0.

- String()
  15.5.1.1String([value])#①
    Returns a String value (not a String object) computed by ToString(value). If value is not supplied, the empty String "" is returned.