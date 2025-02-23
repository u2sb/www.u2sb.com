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

[SbModbusArray(typeof(ushort), 4, BigAndSmallEndianEncodingMode.DCBA)]
public partial struct UShortArray4
{
}
```

会自动生成

```cs
// Auto-generated code
#pragma warning disable
using SbModbus.Utils;
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static SbModbus.Utils.Utils;
namespace ModbusTest
{
[StructLayout(LayoutKind.Explicit, Pack = 2, Size = 8)]
partial struct UShortArray4
{
public UShortArray4(ReadOnlySpan<byte> data, byte mode = 0)
{
CheckLength(data, Unsafe.SizeOf<UShortArray4>());
this._item0 = data[0..2].ToT<ushort>(mode);
this._item1 = data[2..4].ToT<ushort>(mode);
this._item2 = data[4..6].ToT<ushort>(mode);
this._item3 = data[6..8].ToT<ushort>(mode);
}
public UShortArray4(ReadOnlySpan<ushort> data0, byte mode = 0)
{
var data = data0.AsReadOnlyByteSpan();
CheckLength(data, Unsafe.SizeOf<UShortArray4>());
this._item0 = data[0..2].ToT<ushort>(mode);
this._item1 = data[2..4].ToT<ushort>(mode);
this._item2 = data[4..6].ToT<ushort>(mode);
this._item3 = data[6..8].ToT<ushort>(mode);
}
[FieldOffset(0)]private ushort _item0;
[FieldOffset(2)]private ushort _item1;
[FieldOffset(4)]private ushort _item2;
[FieldOffset(6)]private ushort _item3;
public byte[] ToBytes(byte mode = 0)
{
var data = new byte[Unsafe.SizeOf<UShortArray4>()];
var span = data.AsSpan();
WriteTo(span, mode);
return data;
}
public void WriteTo(Span<byte> span, byte mode = 0)
{
CheckLength(span, Unsafe.SizeOf<UShortArray4>());
this._item0.WriteTo<ushort>(span[0..2], mode);
this._item1.WriteTo<ushort>(span[2..4], mode);
this._item2.WriteTo<ushort>(span[4..6], mode);
this._item3.WriteTo<ushort>(span[6..8], mode);
}
public Span<ushort> AsSpan()
{
return this.Cast<UShortArray4, ushort>();
}
public int Length => 4;
public ushort this[int index]
{
get
{
return index switch {
0 => _item0,
1 => _item1,
2 => _item2,
3 => _item3,
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
case 3:
_item3 = value;
break;
default:
throw new IndexOutOfRangeException();
}
}
}
public Span<ushort> this[Range range]
{
get
{
var span = AsSpan();
return span[range];
}
}
}
}
```