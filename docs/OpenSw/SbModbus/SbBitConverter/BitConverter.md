---
title: 类型转换

order: 0020
---

可以有效完成大小端数据转换。

## 说明

:::warning
使用时一定要小心，一定要注意，只能对结构已知的 struct 使用。
:::

### WithEndianness()

应用大小端

### ApplyEndianness()

应用大小端

### ToXX()

一看就懂，不再赘述。

### BigAndSmallEndianEncodingMode

示例: `int` 类型 `1234567890` -> `499602D2`(16 进制)

- DCBA 正常小端模式 [0xD2, 0x02, 0x96, 0x49]
- ABCD 正常大端模式 [0x49, 0x96, 0x02, 0xD2]
- BADC 内部顺序转换 [0x96, 0x49, 0xD2, 0x02]
- CDAB 外部顺序转换 [0x02, 0xD2, 0x49, 0x96]
