---
title: Unity-Float3
---

在 Unity 中，可以自己实现一个 `Float3`，内存布局和 `Vector3` 一样，并且实现隐式转换。

```cs
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using SbModbus.Attributes;
using UnityEngine;

namespace Models;

[SbBitConverterArray(typeof(float), 3)]
public partial struct Float3
{
  [FieldOffset(0)] public float x;
  [FieldOffset(4)] public float y;
  [FieldOffset(8)] public float z;

  public static implicit operator Float3(Vector3 v)
  {
    return Unsafe.As<Vector3, Float3>(ref v);
  }

  public static implicit operator Vector3(Float3 v)
  {
    return Unsafe.As<Float3, Vector3>(ref v);
  }
}
```

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

[StructLayout(LayoutKind.Explicit, Pack = 4, Size = 12)]
partial struct Float3
{
  public Float3(ReadOnlySpan<byte> data, byte mode = 0)
  {
    CheckLength(data, Unsafe.SizeOf<Float3>());
    this._item0 = data[0..4].ToT<float>(mode);
    this._item1 = data[4..8].ToT<float>(mode);
    this._item2 = data[8..12].ToT<float>(mode);
  }

  public Float3(ReadOnlySpan<ushort> data0, byte mode = 0)
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

  public byte[] ToByteArray(byte mode = 0)
  {
    var data = new byte[Unsafe.SizeOf<Float3>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, byte mode = 0)
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
