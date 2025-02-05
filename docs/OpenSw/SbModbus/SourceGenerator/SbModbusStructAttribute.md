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

[SbModbusStruct(BigAndSmallEndianEncodingMode.ABCD)]
[StructLayout(LayoutKind.Explicit, Pack = 2)]
public partial struct MyStruct
{
  public MyStruct()
  {
  }

  [FieldOffset(0)] private int _a;

  [field: FieldOffset(4)] public int B { get; set; }

  [field: FieldOffset(0)] public MyStruct2 MyStruct2 { get; set; }

  [field: FieldOffset(8)] public MyEnum MyEnum { get; set; }
  
  [field: FieldOffset(10)] public UInt16Array2 MyUInt16Array2 { get; set; }
}

[SbModbusStruct(BigAndSmallEndianEncodingMode.ABCD)]
[StructLayout(LayoutKind.Explicit, Pack = 2)]
public partial struct MyStruct2
{
  [FieldOffset(0)] private int _a;

  [field: FieldOffset(4)] public int B { get; set; }
}

public enum MyEnum : ushort
{
  OK = 0,
  NoOK = 1
}
```

会自动生成

```cs
// Auto-generated code
#pragma warning disable
using SbModbus.Utils;
using System;
using System.Runtime.CompilerServices;
using static SbModbus.Utils.Utils;
namespace ModbusTest
{
partial struct MyStruct
{
public MyStruct(ReadOnlySpan<byte> data, byte mode = 1)
{
CheckLength(data, Unsafe.SizeOf<MyStruct>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..8].ToT<int>(mode);
this.MyStruct2 = new ModbusTest.MyStruct2(data.Slice(0, Unsafe.SizeOf<ModbusTest.MyStruct2>()), mode);
this.MyEnum = data[8..10].ToT<ModbusTest.MyEnum>(mode);
this.MyUInt16Array2 = new SbModbus.Models.UInt16Array2(data.Slice(10, Unsafe.SizeOf<SbModbus.Models.UInt16Array2>()), mode);

}
public MyStruct(ReadOnlySpan<ushort> data0, byte mode = 1)
{
var data = data0.AsReadOnlyByteSpan();
CheckLength(data, Unsafe.SizeOf<MyStruct>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..8].ToT<int>(mode);
this.MyStruct2 = new ModbusTest.MyStruct2(data.Slice(0, Unsafe.SizeOf<ModbusTest.MyStruct2>()), mode);
this.MyEnum = data[8..10].ToT<ModbusTest.MyEnum>(mode);
this.MyUInt16Array2 = new SbModbus.Models.UInt16Array2(data.Slice(10, Unsafe.SizeOf<SbModbus.Models.UInt16Array2>()), mode);

}
public byte[] ToBytes(byte mode = 1)
{
var data = new byte[Unsafe.SizeOf<MyStruct>()];
var span = data.AsSpan();
WriteTo(span, mode);
return data;
}
public void WriteTo(Span<byte> span, byte mode = 1)
{
CheckLength(span, Unsafe.SizeOf<MyStruct>());
this._a.WriteTo<int>(span[0..4], mode);
this.B.WriteTo<int>(span[4..8], mode);
this.MyStruct2.WriteTo(span.Slice(0, Unsafe.SizeOf<ModbusTest.MyStruct2>()), mode);
this.MyEnum.WriteTo<ModbusTest.MyEnum>(span[8..10], mode);
this.MyUInt16Array2.WriteTo(span.Slice(10, Unsafe.SizeOf<SbModbus.Models.UInt16Array2>()), mode);

}
}
}
```

```cs
// Auto-generated code
#pragma warning disable
using SbModbus.Utils;
using System;
using System.Runtime.CompilerServices;
using static SbModbus.Utils.Utils;
namespace ModbusTest
{
partial struct MyStruct2
{
public MyStruct2(ReadOnlySpan<byte> data, byte mode = 1)
{
CheckLength(data, Unsafe.SizeOf<MyStruct2>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..8].ToT<int>(mode);

}
public MyStruct2(ReadOnlySpan<ushort> data0, byte mode = 1)
{
var data = data0.AsReadOnlyByteSpan();
CheckLength(data, Unsafe.SizeOf<MyStruct2>());
this._a = data[0..4].ToT<int>(mode);
this.B = data[4..8].ToT<int>(mode);

}
public byte[] ToBytes(byte mode = 1)
{
var data = new byte[Unsafe.SizeOf<MyStruct2>()];
var span = data.AsSpan();
WriteTo(span, mode);
return data;
}
public void WriteTo(Span<byte> span, byte mode = 1)
{
CheckLength(span, Unsafe.SizeOf<MyStruct2>());
this._a.WriteTo<int>(span[0..4], mode);
this.B.WriteTo<int>(span[4..8], mode);

}
}
}
```

可使用

```cs
var b = await modbusClient.ReadHoldingRegistersAsync(1, 4, 3);

var myStruct = new MyStruct(b.Span);
```
