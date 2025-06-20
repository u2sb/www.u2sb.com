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
namespace ModbusTest
{
unsafe partial struct Float3
{
  [FieldOffset(0)]  public fixed byte source[12];
  [FieldOffset(0)]  public fixed float elementSource[3];
}

[StructLayout(LayoutKind.Explicit, Pack = 4, Size = 12)]
partial struct Float3
{
  public Float3(scoped in ReadOnlySpan<byte> data, SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(data, Unsafe.SizeOf<Float3>());
    this._item0 = data[0..4].ToT<float>(mode);
    this._item1 = data[4..8].ToT<float>(mode);
    this._item2 = data[8..12].ToT<float>(mode);
  }

  public Float3(scoped in ReadOnlySpan<ushort> data0, SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
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

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public byte[] ToByteArray(SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    var data = new byte[Unsafe.SizeOf<Float3>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(scoped in Span<byte> span, SbBitConverter.Attributes.BigAndSmallEndianEncodingMode mode = (SbBitConverter.Attributes.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(span, Unsafe.SizeOf<Float3>());
    this._item0.WriteTo<float>(span[0..4], mode);
    this._item1.WriteTo<float>(span[4..8], mode);
    this._item2.WriteTo<float>(span[8..12], mode);
  }

  public int Length => 3;

  public ref float this[int index]
  {
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    get
    {
      switch (index)
      {
        case 0:
#if NET8_0_OR_GREATER
          return ref Unsafe.AsRef(in _item0);
#else
          return ref AsSpan()[0];
#endif
        case 1:
#if NET8_0_OR_GREATER
          return ref Unsafe.AsRef(in _item1);
#else
          return ref AsSpan()[1];
#endif
        case 2:
#if NET8_0_OR_GREATER
          return ref Unsafe.AsRef(in _item2);
#else
          return ref AsSpan()[2];
#endif
        default:
          throw new IndexOutOfRangeException();
      }
    }
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<float> AsSpan()
  {
    return MemoryMarshal.CreateSpan(ref _item0, 3);
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
