---
title: Unity-Float3
---

在 Unity 中，可以自己实现一个 `Float3`，内存布局和 `Vector3` 一样，并且可以直接赋值。

::: warning
Unity 使用的源生成器版本和 .net 不一样
:::

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

  public ref Vector3 Vector3
  {
    get
    {
      unsafe
      {
        fixed (float* s = elementSource)
        {
          return ref Unsafe.AsRef<Vector3>(s);
        }
      }
    }
  }
}
```

```cs
// Auto-generated code
#pragma warning disable
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static System.SbBitConverter;
using static System.SpanExtension;
namespace Models
{
unsafe partial struct Float3
{
  [FieldOffset(0)]  public fixed byte source[12];
  [FieldOffset(0)]  public fixed float elementSource[3];
}

[StructLayout(LayoutKind.Explicit, Pack = 4, Size = 12)]
partial struct Float3
{
  public Float3(ReadOnlySpan<byte> data, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(data, Unsafe.SizeOf<Float3>());
    this._item0 = data.Slice(0, 4).ToT<float>(mode);
    this._item1 = data.Slice(4, 4).ToT<float>(mode);
    this._item2 = data.Slice(8, 4).ToT<float>(mode);
  }

  public Float3(ReadOnlySpan<ushort> data0, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<Float3>());
    this._item0 = data.Slice(0, 4).ToT<float>(mode);
    this._item1 = data.Slice(4, 4).ToT<float>(mode);
    this._item2 = data.Slice(8, 4).ToT<float>(mode);
  }

  [FieldOffset(0)]private float _item0;

  [FieldOffset(4)]private float _item1;

  [FieldOffset(8)]private float _item2;

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public byte[] ToByteArray(System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = new byte[Unsafe.SizeOf<Float3>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(span, Unsafe.SizeOf<Float3>());
    this._item0.WriteTo<float>(span.Slice(0, 4), mode);
    this._item1.WriteTo<float>(span.Slice(4, 4), mode);
    this._item2.WriteTo<float>(span.Slice(8, 4), mode);
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
          return ref AsSpan()[0];
        case 1:
          return ref AsSpan()[1];
        case 2:
          return ref AsSpan()[2];
        default:
          throw new IndexOutOfRangeException();
      }
    }
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<float> AsSpan()
  {
    return CreateSpan(ref _item0, 3);
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<float> Slice(int start, int length)
  {
    var span = AsSpan();
    return span.Slice(start, length);
  }

}
}
#pragma warning restore
```
