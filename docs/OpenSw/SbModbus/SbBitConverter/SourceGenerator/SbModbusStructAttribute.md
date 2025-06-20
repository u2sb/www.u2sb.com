---
title: SbModbusStructAttribute

order: 0020
---

具有源代码生成器，可为 struct 生成部分方法。

## 使用方法

声明 `partial struct`，并且需要带有 `SbModbusStructAttribute` 和 `StructLayoutAttribute`。

## 示例

```cs
using System.Runtime.InteropServices;
using SbModbus.Attributes;
using SbModbus.Models;

namespace ModbusTest;

[SbBitConverterStruct(BigAndSmallEndianEncodingMode.ABCD)]
[StructLayout(LayoutKind.Explicit)]
public partial struct MyStruct
{
  [FieldOffset(0)] private Float3 _float3;

  // 会与 Float3 重叠
  [FieldOffset(4)] private float _f1;
}
```

会自动生成

```cs
// Auto-generated code
#pragma warning disable
using SbBitConverter.Utils;
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static SbBitConverter.Utils.Utils;
namespace ModbusTest
{
partial struct MyStruct
{
  public MyStruct(scoped in ReadOnlySpan<byte> data, SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(data, Unsafe.SizeOf<MyStruct>());
    this._float3 = new T0.Float3(data.Slice(0, Unsafe.SizeOf<T0.Float3>()), mode);
    this._f1 = data[4..8].ToT<float>(mode);

  }

  public MyStruct(scoped in ReadOnlySpan<ushort> data0, SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<MyStruct>());
    this._float3 = new T0.Float3(data.Slice(0, Unsafe.SizeOf<T0.Float3>()), mode);
    this._f1 = data[4..8].ToT<float>(mode);

  }

  public byte[] ToByteArray(SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    var data = new byte[Unsafe.SizeOf<MyStruct>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(scoped in Span<byte> span, SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(span, Unsafe.SizeOf<MyStruct>());
    this._float3.WriteTo(span.Slice(0, Unsafe.SizeOf<T0.Float3>()), mode);
    this._f1.WriteTo<float>(span[4..8], mode);

  }

}
}
#pragma warning restore
```

可使用

```cs
var b = await modbusClient.ReadHoldingRegistersAsync(1, 4, 3);

var myStruct = new MyStruct(b.Span);
```
