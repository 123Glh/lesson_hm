# Symbol

- 唯一值
  - 用Symbol 函数来声明
  - 给一个label 可选
  - 返回值唯一值
  - 常用于对象字面量 不会，不需要担心 会被覆盖
    key 的用法  这也是Symbol 需要的原因  
                            大厂 大型项目， 对象复杂， 难维护， 多人协作， 用Symbol 来做key
  - Obkect.keys()    对象的键名数组， 但是不包括Symbol 类型的键名
  - Object.values()  对象的值数组， 但是不包括Symbol 类型的键名
  - Object.entries() 对象的键值对数组， 但是不包括Symbol 类型的键名

- 可迭代对象
  Object.getOwnPropertyDescriptors(classMates) 获得属性上的所有描述符 例如：可枚举， 可配置， 可写， 可迭代 
  - 虽然 Symboles emuberable 属性为 True , 但是仍然不可以枚举
    因为 Symbol 独特设计 就是提供唯一值，只能通过  Object.getOwnPropertySymbols 来获取

- ownProperty?
  