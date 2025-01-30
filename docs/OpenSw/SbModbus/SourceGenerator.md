---
title: 源代码生成器

order: 0030
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

[SbModbusStruct(BigAndSmallEndianEncodingMode.ABCD)]
[StructLayout(LayoutKind.Explicit, Pack = 2)]
public partial struct MyStruct
{
  [FieldOffset(0)] private int _a;

  [field: FieldOffset(4)] public ushort B { get; set; }

  [field: FieldOffset(0)]public MyStruct2 MyStruct2 { get; set; }
}

[SbModbusStruct(BigAndSmallEndianEncodingMode.ABCD)]
[StructLayout(LayoutKind.Explicit, Pack = 2)]
public partial struct MyStruct2
{

  [FieldOffset(0)] private int _a;

  [field: FieldOffset(4)] public ushort B { get; set; }
}
```

会自动生成

```cs
// Auto-generated code
using SbModbus.Utils;
using System;
using System.Runtime.CompilerServices;
using static SbModbus.Utils.Utils;
namespace ModbusTest
{
public partial struct MyStruct
{
public MyStruct(ReadOnlySpan<byte> data, byte mode = 1)
{
CheckLength(data, Unsafe.SizeOf<MyStruct>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..6].ToT<ushort>(mode);
this.MyStruct2 = new ModbusTest.MyStruct2(data.Slice(0, Unsafe.SizeOf<ModbusTest.MyStruct2>()), mode);

}
public MyStruct(ReadOnlySpan<ushort> data0, byte mode = 1)
{
var data = data0.AsBytes();
CheckLength(data, Unsafe.SizeOf<MyStruct>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..6].ToT<ushort>(mode);
this.MyStruct2 = new ModbusTest.MyStruct2(data.Slice(0, Unsafe.SizeOf<ModbusTest.MyStruct2>()), mode);

}
public byte[] ToBytes(byte mode = 1)
{
var data = new byte[Unsafe.SizeOf<MyStruct>()];
var span = data.AsSpan();
this.ToBytes(span, mode);
return data;
}
public void ToBytes(Span<byte> span, byte mode = 1)
{
CheckLength(span, Unsafe.SizeOf<MyStruct>());
this._a.ToBytes<int>(span[0..4], mode);
this.B.ToBytes<ushort>(span[4..6], mode);
this.MyStruct2.ToBytes(span.Slice(0, Unsafe.SizeOf<ModbusTest.MyStruct2>()), mode);

}
public static implicit operator MyStruct(ReadOnlySpan<byte> data)
{
return new MyStruct(data);
}
public static implicit operator MyStruct(ReadOnlySpan<ushort> data)
{
return new MyStruct(data);
}
public static implicit operator byte[](MyStruct value)
{
return value.ToBytes();
}
}
}
```

```cs
// Auto-generated code
using SbModbus.Utils;
using System;
using System.Runtime.CompilerServices;
using static SbModbus.Utils.Utils;
namespace ModbusTest
{
public partial struct MyStruct2
{
public MyStruct2(ReadOnlySpan<byte> data, byte mode = 1)
{
CheckLength(data, Unsafe.SizeOf<MyStruct2>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..6].ToT<ushort>(mode);

}
public MyStruct2(ReadOnlySpan<ushort> data0, byte mode = 1)
{
var data = data0.AsBytes();
CheckLength(data, Unsafe.SizeOf<MyStruct2>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..6].ToT<ushort>(mode);

}
public byte[] ToBytes(byte mode = 1)
{
var data = new byte[Unsafe.SizeOf<MyStruct2>()];
var span = data.AsSpan();
this.ToBytes(span, mode);
return data;
}
public void ToBytes(Span<byte> span, byte mode = 1)
{
CheckLength(span, Unsafe.SizeOf<MyStruct2>());
this._a.ToBytes<int>(span[0..4], mode);
this.B.ToBytes<ushort>(span[4..6], mode);

}
public static implicit operator MyStruct2(ReadOnlySpan<byte> data)
{
return new MyStruct2(data);
}
public static implicit operator MyStruct2(ReadOnlySpan<ushort> data)
{
return new MyStruct2(data);
}
public static implicit operator byte[](MyStruct2 value)
{
return value.ToBytes();
}
}
}
```

可使用

```cs
var b = await modbusClient.ReadHoldingRegistersAsync(1, 4, 3);

var myStruct = new MyStruct(b.Span);
```
