---
title: SbModbusArrayAttribute

order: 0030
---

具有源代码生成器，可为 struct 生成部分方法。

## 使用方法

声明 `partial struct`，并且需要带有 `SbModbusArrayAttribute`。

## 示例

```cs
using System.Runtime.InteropServices;
using SbModbus.Attributes;
using SbModbus.Models;

namespace ModbusTest;

[SbBitConverterArray(typeof(float), 3, BigAndSmallEndianEncodingMode.ABCD)]
public partial struct Float3
{
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
[StructLayout(LayoutKind.Explicit, Pack = 4, Size = 12)]
partial struct Float3
{
public Float3(ReadOnlySpan<byte> data, byte mode = 1)
{
CheckLength(data, Unsafe.SizeOf<Float3>());
this._item0 = data[0..4].ToT<float>(mode);
this._item1 = data[4..8].ToT<float>(mode);
this._item2 = data[8..12].ToT<float>(mode);
}
public Float3(ReadOnlySpan<ushort> data0, byte mode = 1)
{
var data = MemoryMarshal.AsBytes(data0);
CheckLength(data, Unsafe.SizeOf<Float3>());
this._item0 = data[0..4].ToT<float>(mode);
this._item1 = data[4..8].ToT<float>(mode);
this._item2 = data[8..12].ToT<float>(mode);
}
[FieldOffset(0)]private float _item0;
[FieldOffset(4)]private float _item1;
[FieldOffset(8)]private float _item2;
public byte[] ToByteArray(byte mode = 1)
{
var data = new byte[Unsafe.SizeOf<Float3>()];
var span = data.AsSpan();
WriteTo(span, mode);
return data;
}
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public void WriteTo(Span<byte> span, byte mode = 1)
{
CheckLength(span, Unsafe.SizeOf<Float3>());
this._item0.WriteTo<float>(span[0..4], mode);
this._item1.WriteTo<float>(span[4..8], mode);
this._item2.WriteTo<float>(span[8..12], mode);
}
public int Length => 3;
public float this[int index]
{
get
{
return index switch {
0 => _item0,
1 => _item1,
2 => _item2,
_ => throw new IndexOutOfRangeException()
};
}
set
{
switch (index)
{
case 0:
_item0 = value;
break;
case 1:
_item1 = value;
break;
case 2:
_item2 = value;
break;
default:
throw new IndexOutOfRangeException();
}
}
}
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public Span<float> AsSpan()
{
return MemoryMarshal.Cast<Float3,float>(MemoryMarshal.CreateSpan(ref this, 1));
}
[MethodImpl(MethodImplOptions.AggressiveInlining)]
public Span<float> Slice(int start, int length)
{
var span = AsSpan();
return span.Slice(start, length);
}
public Span<float> this[Range range]
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