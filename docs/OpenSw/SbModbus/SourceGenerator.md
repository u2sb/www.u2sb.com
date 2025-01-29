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
  public MyStruct()
  {
  }

  [FieldOffset(0)] private int _a;

  [field: FieldOffset(4)] public ushort B { get; set; }
}
```

会自动生成

```cs

// Auto-generated code
namespace ModbusTest
{
  public partial struct MyStruct
  {
    public MyStruct(ReadOnlySpan<byte> data)
    {
      this._a = SbModbus.Utils.BitConverter.ToT<int>(data[0..4], (byte)1);
      this.B = SbModbus.Utils.BitConverter.ToT<ushort>(data[4..6], (byte)1);

    }

    public MyStruct(ReadOnlySpan<ushort> data0)
    {
      var data = SbModbus.Utils.BitConverter.AsBytes(data0);
      this._a = SbModbus.Utils.BitConverter.ToT<int>(data[0..4], (byte)1);
      this.B = SbModbus.Utils.BitConverter.ToT<ushort>(data[4..6], (byte)1);

    }

    public byte[] ToBytes()
    {
      var data = new byte[System.Runtime.InteropServices.Marshal.SizeOf<MyStruct>()];
      var span = data.AsSpan();
      SbModbus.Utils.BitConverter.ToBytes<int>(this._a, span[0..4], (byte)1);
      SbModbus.Utils.BitConverter.ToBytes<ushort>(this.B, span[4..6], (byte)1);

      return data;
    }

    public static implicit operator MyStruct(ReadOnlySpan<byte> data)
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

可使用

```cs
var b = await modbusClient.ReadHoldingRegistersAsync(1, 4, 3);

var myStruct = new MyStruct(b.Span);
```
