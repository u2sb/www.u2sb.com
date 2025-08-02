---
title: Pmc400Status
---

某型号的电机控制器，会通过 TCP 发送消息到上位机，在上位机需要解析数据，可以借助 SbBitConverter 实现快速解析

开发快 + 运行更快

首先根据通信协议定义结构体

```cs title="Pmc400StatusStruct.cs"
using System.Diagnostics.CodeAnalysis;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using SbBitConverter.Attributes;

namespace SbBitConverter.Demo.Pmc;

[StructLayout(LayoutKind.Explicit, Pack = 2)]
[SbBitConverterStruct]
public partial struct Pmc400StatusStruct
{
  /// <summary>各轴初速度</summary>
  [FieldOffset(0)] public Int32Array4 StartSpeed;

  /// <summary>各轴加速度</summary>
  [FieldOffset(12)] public Int32Array4 AccSpeed;

  /// <summary>各轴终速度</summary>
  [FieldOffset(24)] public Int32Array4 FinalSpeed;

  /// <summary>各轴当前位置：已发出</summary>
  [FieldOffset(36)] public Int32Array4 CurrentPosition;

  /// <summary>各轴当前位置：反馈</summary>
  [FieldOffset(48)] public Int32Array4 PositionEncode;

  /// <summary>各轴的宏观运动状态： 正向，负向，回0，运动完成，无状态</summary>
  [FieldOffset(60)] public Int16Array4 Is_MoveCommand;

  /// <summary>输入信号</summary>
  [FieldOffset(66)] public short IO_IN;

  /// <summary>输出信号</summary>
  [FieldOffset(68)] public short IO_OUT;

  /// <summary>各轴当前移动状态</summary>
  [FieldOffset(70)] public Int16Array4 Is_Stopped;

  /// <summary>各轴当前位置：待发出脉冲</summary>
  [FieldOffset(76)] public Int32Array4 Pulse_Remaining;

  /// <summary>各轴细分数</summary>
  [FieldOffset(88)] public Int16Array4 MicroSteps;

  /// <summary>各轴丝杆导程，单位：nm</summary>
  [FieldOffset(94)] public Int32Array4 ScrewLead;

  /// <summary>各轴转速比，光栅尺走1mm（或1°）需要丝杆转动的圈数, 最后三位10进制为小数</summary>
  [FieldOffset(106)] public Int32Array4 SpeedRatio;

  /// <summary>各轴电流</summary>
  [FieldOffset(118)] public Int32Array4 Electric_Current;

  /// <summary>各轴光栅尺分辨率，单位：脉冲数/毫米（脉冲数/度）</summary>
  [FieldOffset(130)] public Int32Array4 Resolution_Ratio;

  /// <summary>各轴绝对位置</summary>
  [FieldOffset(142)] public Int32Array4 Dest_PositionEncode;

  /// <summary>各轴ORG,+/-EL等状态</summary>
  [FieldOffset(154)] public int XYZU_EL_ORG;

  /// <summary>当前程序运行行数</summary>
  [FieldOffset(158)] public int PROGRAM_LINE_NUM;

  /// <summary>各轴运动距离</summary>
  [FieldOffset(162)] public Int32Array4 MoveDistance_Read;

  /// <summary>指令的截止数目</summary>
  [FieldOffset(174)] public int PROGRAM_LINE_NUM_JP;

  /// <summary>序列号</summary>
  [FieldOffset(178)] public int Ver;

  /// <summary>IP地址</summary>
  [FieldOffset(182)] public int IP;

  /// <summary>子网掩码</summary>
  [FieldOffset(186)] public int NM;

  /// <summary>网关</summary>
  [FieldOffset(190)] public int GW;

  /// <summary>闭环到位标志</summary>
  [FieldOffset(194)] public int Arrival;

  /// <summary>CRC, 包括PMC400_PROGRAM_LINE_NUM_JP在内，结构体之前的所有数据的和</summary>
  [FieldOffset(198)] public int CRC_SUM;


  /// <summary>
  ///   尝试获取数据
  /// </summary>
  /// <param name="data"></param>
  /// <param name="size"></param>
  /// <param name="offset"></param>
  /// <param name="status"></param>
  /// <returns></returns>
  public static bool TryParse(byte[] data, [NotNullWhen(true)] out Pmc400StatusStruct? status, int offset = 0,
    int size = 0)
  {
    if (size == 0) size = data.Length;

    if (Unsafe.SizeOf<Pmc400StatusStruct>() != size)
    {
      status = null;
      return false;
    }

    status = MemoryMarshal.Read<Pmc400StatusStruct>(data.AsSpan(offset, size));
    return true;
  }

  /// <summary>
  ///   尝试从大端数据转换
  /// </summary>
  /// <param name="data"></param>
  /// <param name="size"></param>
  /// <param name="offset"></param>
  /// <param name="status"></param>
  /// <returns></returns>
  public static bool TryParseWithBigEndianness(byte[] data, [NotNullWhen(true)] out Pmc400StatusStruct? status,
    int offset = 0, int size = 0)
  {
    if (size == 0) size = data.Length;

    if (Unsafe.SizeOf<Pmc400StatusStruct>() != size)
    {
      status = null;
      return false;
    }

    status = new Pmc400StatusStruct(data.AsSpan(offset, size), BigAndSmallEndianEncodingMode.ABCD);
    return true;
  }
}

[SbBitConverterArray(typeof(int), 4)]
public partial struct Int32Array4
{
  [FieldOffset(0)] public int X;
  [FieldOffset(4)] public int Y;
  [FieldOffset(8)] public int Z;
  [FieldOffset(12)] public int U;
}

[SbBitConverterArray(typeof(short), 4)]
public partial struct Int16Array4
{
  [FieldOffset(0)] public int X;
  [FieldOffset(2)] public int Y;
  [FieldOffset(4)] public int Z;
  [FieldOffset(6)] public int U;
}
```

会自动生成

```cs title="Pmc400StatusStruct_SbBitConverterStruct.g.cs"
// Auto-generated code
#pragma warning disable
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static System.SbBitConverter;
using static System.SpanExtension;
namespace SbBitConverter.Demo.Pmc
{
partial struct Pmc400StatusStruct
{
  public Pmc400StatusStruct(ReadOnlySpan<byte> data, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(data, Unsafe.SizeOf<Pmc400StatusStruct>());
    this.StartSpeed = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(0, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.AccSpeed = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(12, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.FinalSpeed = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(24, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.CurrentPosition = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(36, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.PositionEncode = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(48, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Is_MoveCommand = new SbBitConverter.Demo.Pmc.Int16Array4(data.Slice(60, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.IO_IN = data.Slice(66, 2).ToT<short>(mode);
    this.IO_OUT = data.Slice(68, 2).ToT<short>(mode);
    this.Is_Stopped = new SbBitConverter.Demo.Pmc.Int16Array4(data.Slice(70, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.Pulse_Remaining = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(76, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.MicroSteps = new SbBitConverter.Demo.Pmc.Int16Array4(data.Slice(88, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.ScrewLead = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(94, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.SpeedRatio = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(106, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Electric_Current = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(118, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Resolution_Ratio = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(130, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Dest_PositionEncode = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(142, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.XYZU_EL_ORG = data.Slice(154, 4).ToT<int>(mode);
    this.PROGRAM_LINE_NUM = data.Slice(158, 4).ToT<int>(mode);
    this.MoveDistance_Read = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(162, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.PROGRAM_LINE_NUM_JP = data.Slice(174, 4).ToT<int>(mode);
    this.Ver = data.Slice(178, 4).ToT<int>(mode);
    this.IP = data.Slice(182, 4).ToT<int>(mode);
    this.NM = data.Slice(186, 4).ToT<int>(mode);
    this.GW = data.Slice(190, 4).ToT<int>(mode);
    this.Arrival = data.Slice(194, 4).ToT<int>(mode);
    this.CRC_SUM = data.Slice(198, 4).ToT<int>(mode);

  }

  public Pmc400StatusStruct(ReadOnlySpan<ushort> data0, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<Pmc400StatusStruct>());
    this.StartSpeed = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(0, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.AccSpeed = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(12, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.FinalSpeed = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(24, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.CurrentPosition = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(36, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.PositionEncode = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(48, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Is_MoveCommand = new SbBitConverter.Demo.Pmc.Int16Array4(data.Slice(60, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.IO_IN = data.Slice(66, 2).ToT<short>(mode);
    this.IO_OUT = data.Slice(68, 2).ToT<short>(mode);
    this.Is_Stopped = new SbBitConverter.Demo.Pmc.Int16Array4(data.Slice(70, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.Pulse_Remaining = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(76, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.MicroSteps = new SbBitConverter.Demo.Pmc.Int16Array4(data.Slice(88, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.ScrewLead = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(94, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.SpeedRatio = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(106, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Electric_Current = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(118, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Resolution_Ratio = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(130, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Dest_PositionEncode = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(142, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.XYZU_EL_ORG = data.Slice(154, 4).ToT<int>(mode);
    this.PROGRAM_LINE_NUM = data.Slice(158, 4).ToT<int>(mode);
    this.MoveDistance_Read = new SbBitConverter.Demo.Pmc.Int32Array4(data.Slice(162, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.PROGRAM_LINE_NUM_JP = data.Slice(174, 4).ToT<int>(mode);
    this.Ver = data.Slice(178, 4).ToT<int>(mode);
    this.IP = data.Slice(182, 4).ToT<int>(mode);
    this.NM = data.Slice(186, 4).ToT<int>(mode);
    this.GW = data.Slice(190, 4).ToT<int>(mode);
    this.Arrival = data.Slice(194, 4).ToT<int>(mode);
    this.CRC_SUM = data.Slice(198, 4).ToT<int>(mode);

  }

  public byte[] ToByteArray(System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = new byte[Unsafe.SizeOf<Pmc400StatusStruct>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(span, Unsafe.SizeOf<Pmc400StatusStruct>());
    this.StartSpeed.WriteTo(span.Slice(0, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.AccSpeed.WriteTo(span.Slice(12, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.FinalSpeed.WriteTo(span.Slice(24, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.CurrentPosition.WriteTo(span.Slice(36, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.PositionEncode.WriteTo(span.Slice(48, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Is_MoveCommand.WriteTo(span.Slice(60, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.IO_IN.WriteTo<short>(span.Slice(66, 2), mode);
    this.IO_OUT.WriteTo<short>(span.Slice(68, 2), mode);
    this.Is_Stopped.WriteTo(span.Slice(70, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.Pulse_Remaining.WriteTo(span.Slice(76, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.MicroSteps.WriteTo(span.Slice(88, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int16Array4>()), mode);
    this.ScrewLead.WriteTo(span.Slice(94, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.SpeedRatio.WriteTo(span.Slice(106, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Electric_Current.WriteTo(span.Slice(118, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Resolution_Ratio.WriteTo(span.Slice(130, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.Dest_PositionEncode.WriteTo(span.Slice(142, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.XYZU_EL_ORG.WriteTo<int>(span.Slice(154, 4), mode);
    this.PROGRAM_LINE_NUM.WriteTo<int>(span.Slice(158, 4), mode);
    this.MoveDistance_Read.WriteTo(span.Slice(162, Unsafe.SizeOf<SbBitConverter.Demo.Pmc.Int32Array4>()), mode);
    this.PROGRAM_LINE_NUM_JP.WriteTo<int>(span.Slice(174, 4), mode);
    this.Ver.WriteTo<int>(span.Slice(178, 4), mode);
    this.IP.WriteTo<int>(span.Slice(182, 4), mode);
    this.NM.WriteTo<int>(span.Slice(186, 4), mode);
    this.GW.WriteTo<int>(span.Slice(190, 4), mode);
    this.Arrival.WriteTo<int>(span.Slice(194, 4), mode);
    this.CRC_SUM.WriteTo<int>(span.Slice(198, 4), mode);

  }

}
}
#pragma warning restore
```

```cs title="Int32Array4_SbBitConverterStruct.g.cs"
// Auto-generated code
#pragma warning disable
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static System.SbBitConverter;
using static System.SpanExtension;
namespace SbBitConverter.Demo.Pmc
{
unsafe partial struct Int32Array4
{
  [FieldOffset(0)]  public fixed byte source[16];
  [FieldOffset(0)]  public fixed int elementSource[4];
}

[StructLayout(LayoutKind.Explicit, Pack = 4, Size = 16)]
partial struct Int32Array4
{
  public Int32Array4(ReadOnlySpan<byte> data, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(data, Unsafe.SizeOf<Int32Array4>());
    this._item0 = data.Slice(0, 4).ToT<int>(mode);
    this._item1 = data.Slice(4, 4).ToT<int>(mode);
    this._item2 = data.Slice(8, 4).ToT<int>(mode);
    this._item3 = data.Slice(12, 4).ToT<int>(mode);
  }

  public Int32Array4(ReadOnlySpan<ushort> data0, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<Int32Array4>());
    this._item0 = data.Slice(0, 4).ToT<int>(mode);
    this._item1 = data.Slice(4, 4).ToT<int>(mode);
    this._item2 = data.Slice(8, 4).ToT<int>(mode);
    this._item3 = data.Slice(12, 4).ToT<int>(mode);
  }

  [FieldOffset(0)]private int _item0;

  [FieldOffset(4)]private int _item1;

  [FieldOffset(8)]private int _item2;

  [FieldOffset(12)]private int _item3;

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public byte[] ToByteArray(System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = new byte[Unsafe.SizeOf<Int32Array4>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(span, Unsafe.SizeOf<Int32Array4>());
    this._item0.WriteTo<int>(span.Slice(0, 4), mode);
    this._item1.WriteTo<int>(span.Slice(4, 4), mode);
    this._item2.WriteTo<int>(span.Slice(8, 4), mode);
    this._item3.WriteTo<int>(span.Slice(12, 4), mode);
  }

  public int Length => 4;

  public ref int this[int index]
  {
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    get
    {
      switch (index)
      {
        case 0:
          return ref Unsafe.AsRef(in _item0);
        case 1:
          return ref Unsafe.AsRef(in _item1);
        case 2:
          return ref Unsafe.AsRef(in _item2);
        case 3:
          return ref Unsafe.AsRef(in _item3);
        default:
          throw new IndexOutOfRangeException();
      }
    }
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<int> AsSpan()
  {
    return CreateSpan(ref _item0, 4);
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<int> Slice(int start, int length)
  {
    var span = AsSpan();
    return span.Slice(start, length);
  }

}
}
#pragma warning restore
```

```cs title="Int16Array4_SbBitConverterStruct.g.cs"
// Auto-generated code
#pragma warning disable
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static System.SbBitConverter;
using static System.SpanExtension;
namespace SbBitConverter.Demo.Pmc
{
unsafe partial struct Int16Array4
{
  [FieldOffset(0)]  public fixed byte source[8];
  [FieldOffset(0)]  public fixed short elementSource[4];
}

[StructLayout(LayoutKind.Explicit, Pack = 2, Size = 8)]
partial struct Int16Array4
{
  public Int16Array4(ReadOnlySpan<byte> data, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(data, Unsafe.SizeOf<Int16Array4>());
    this._item0 = data.Slice(0, 2).ToT<short>(mode);
    this._item1 = data.Slice(2, 2).ToT<short>(mode);
    this._item2 = data.Slice(4, 2).ToT<short>(mode);
    this._item3 = data.Slice(6, 2).ToT<short>(mode);
  }

  public Int16Array4(ReadOnlySpan<ushort> data0, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<Int16Array4>());
    this._item0 = data.Slice(0, 2).ToT<short>(mode);
    this._item1 = data.Slice(2, 2).ToT<short>(mode);
    this._item2 = data.Slice(4, 2).ToT<short>(mode);
    this._item3 = data.Slice(6, 2).ToT<short>(mode);
  }

  [FieldOffset(0)]private short _item0;

  [FieldOffset(2)]private short _item1;

  [FieldOffset(4)]private short _item2;

  [FieldOffset(6)]private short _item3;

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public byte[] ToByteArray(System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    var data = new byte[Unsafe.SizeOf<Int16Array4>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)0)
  {
    CheckLength(span, Unsafe.SizeOf<Int16Array4>());
    this._item0.WriteTo<short>(span.Slice(0, 2), mode);
    this._item1.WriteTo<short>(span.Slice(2, 2), mode);
    this._item2.WriteTo<short>(span.Slice(4, 2), mode);
    this._item3.WriteTo<short>(span.Slice(6, 2), mode);
  }

  public int Length => 4;

  public ref short this[int index]
  {
    [MethodImpl(MethodImplOptions.AggressiveInlining)]
    get
    {
      switch (index)
      {
        case 0:
          return ref Unsafe.AsRef(in _item0);
        case 1:
          return ref Unsafe.AsRef(in _item1);
        case 2:
          return ref Unsafe.AsRef(in _item2);
        case 3:
          return ref Unsafe.AsRef(in _item3);
        default:
          throw new IndexOutOfRangeException();
      }
    }
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<short> AsSpan()
  {
    return CreateSpan(ref _item0, 4);
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public Span<short> Slice(int start, int length)
  {
    var span = AsSpan();
    return span.Slice(start, length);
  }

}
}
#pragma warning restore
```
