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

[SbBitConverterStruct]
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
namespace T0
{
partial struct MyStruct
{
public MyStruct(ReadOnlySpan<byte> data, byte mode = 0)
{
CheckLength(data, Unsafe.SizeOf<MyStruct>());
this._float3 = new T0.Float3(data.Slice(0, Unsafe.SizeOf<T0.Float3>()), mode);
this._f1 = data[4..8].ToT<float>(mode);

}
public MyStruct(ReadOnlySpan<ushort> data0, byte mode = 0)
{
var data = MemoryMarshal.AsBytes(data0);
CheckLength(data, Unsafe.SizeOf<MyStruct>());
this._float3 = new T0.Float3(data.Slice(0, Unsafe.SizeOf<T0.Float3>()), mode);
this._f1 = data[4..8].ToT<float>(mode);

}
public byte[] ToByteArray(byte mode = 0)
{
var data = new byte[Unsafe.SizeOf<MyStruct>()];
var span = data.AsSpan();
WriteTo(span, mode);
return data;
}
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public void WriteTo(Span<byte> span, byte mode = 0)
{
CheckLength(span, Unsafe.SizeOf<MyStruct>());
this._float3.WriteTo(span.Slice(0, Unsafe.SizeOf<T0.Float3>()), mode);
this._f1.WriteTo<float>(span[4..8], mode);

}
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public Span<byte> AsSpan()
{
return MemoryMarshal.CreateSpan(ref Unsafe.As<MyStruct, byte>(ref this), Unsafe.SizeOf<MyStruct>());
}
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public Span<byte> Slice(int start, int length)
{
var span = AsSpan();
return span.Slice(start, length);
}
public Span<byte> this[Range range]
{
[MethodImpl(MethodImplOptions.AggressiveInlining)]
get
{
var span = AsSpan();
return span[range];
}
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
