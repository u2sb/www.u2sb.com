---
title: RT300Setting
---

::: warning
本页所示代码仅供参考，随版本更新，生成器也会不断调整。
:::

RT300 电源上位机，使用 ModbusRTU 控制，可以借助 SbBitConverter 实现快速解析。

::: tip
本文使用了内存重叠技巧。
:::

## 控制协议

![](../../img/PixPin_2025-08-19_21-11-10.avif)

## 设定组部分

设定组，由 M0 - M9 组成，但比较蛋疼的是，一个组的配置不是连续的，这里直接使用内存重叠技巧。

数据 -> UshortArray40 -> RTSettingGroupArray

### 内存布局

![](../../img/PixPin_2025-08-19_21-12-05.avif)

### 代码

```cs
[SbBitConverterArray(typeof(ushort), 40, BigAndSmallEndianEncodingMode.ABCD)]
public readonly partial struct UshortArray40
{
}
```

会自动生成如下代码

::: details

```cs title="RT300.Sdk.Models.UshortArray40_SbBitConverterStruct.g.cs"
// Auto-generated code
#pragma warning disable
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static System.SbBitConverter;
using static System.SpanExtension;
namespace RT300.Sdk.Models
{
[StructLayout(LayoutKind.Explicit, Pack = 2, Size = 80)]
partial struct UshortArray40
{
  public UshortArray40(ReadOnlySpan<byte> data, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(data, Unsafe.SizeOf<UshortArray40>());
    this._item0 = data.Slice(0, 2).ToT<ushort>(mode);
    this._item1 = data.Slice(2, 2).ToT<ushort>(mode);
    this._item2 = data.Slice(4, 2).ToT<ushort>(mode);
    this._item3 = data.Slice(6, 2).ToT<ushort>(mode);
    this._item4 = data.Slice(8, 2).ToT<ushort>(mode);
    this._item5 = data.Slice(10, 2).ToT<ushort>(mode);
    this._item6 = data.Slice(12, 2).ToT<ushort>(mode);
    this._item7 = data.Slice(14, 2).ToT<ushort>(mode);
    this._item8 = data.Slice(16, 2).ToT<ushort>(mode);
    this._item9 = data.Slice(18, 2).ToT<ushort>(mode);
    this._item10 = data.Slice(20, 2).ToT<ushort>(mode);
    this._item11 = data.Slice(22, 2).ToT<ushort>(mode);
    this._item12 = data.Slice(24, 2).ToT<ushort>(mode);
    this._item13 = data.Slice(26, 2).ToT<ushort>(mode);
    this._item14 = data.Slice(28, 2).ToT<ushort>(mode);
    this._item15 = data.Slice(30, 2).ToT<ushort>(mode);
    this._item16 = data.Slice(32, 2).ToT<ushort>(mode);
    this._item17 = data.Slice(34, 2).ToT<ushort>(mode);
    this._item18 = data.Slice(36, 2).ToT<ushort>(mode);
    this._item19 = data.Slice(38, 2).ToT<ushort>(mode);
    this._item20 = data.Slice(40, 2).ToT<ushort>(mode);
    this._item21 = data.Slice(42, 2).ToT<ushort>(mode);
    this._item22 = data.Slice(44, 2).ToT<ushort>(mode);
    this._item23 = data.Slice(46, 2).ToT<ushort>(mode);
    this._item24 = data.Slice(48, 2).ToT<ushort>(mode);
    this._item25 = data.Slice(50, 2).ToT<ushort>(mode);
    this._item26 = data.Slice(52, 2).ToT<ushort>(mode);
    this._item27 = data.Slice(54, 2).ToT<ushort>(mode);
    this._item28 = data.Slice(56, 2).ToT<ushort>(mode);
    this._item29 = data.Slice(58, 2).ToT<ushort>(mode);
    this._item30 = data.Slice(60, 2).ToT<ushort>(mode);
    this._item31 = data.Slice(62, 2).ToT<ushort>(mode);
    this._item32 = data.Slice(64, 2).ToT<ushort>(mode);
    this._item33 = data.Slice(66, 2).ToT<ushort>(mode);
    this._item34 = data.Slice(68, 2).ToT<ushort>(mode);
    this._item35 = data.Slice(70, 2).ToT<ushort>(mode);
    this._item36 = data.Slice(72, 2).ToT<ushort>(mode);
    this._item37 = data.Slice(74, 2).ToT<ushort>(mode);
    this._item38 = data.Slice(76, 2).ToT<ushort>(mode);
    this._item39 = data.Slice(78, 2).ToT<ushort>(mode);
  }

  public UshortArray40(ReadOnlySpan<ushort> data0, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<UshortArray40>());
    this._item0 = data.Slice(0, 2).ToT<ushort>(mode);
    this._item1 = data.Slice(2, 2).ToT<ushort>(mode);
    this._item2 = data.Slice(4, 2).ToT<ushort>(mode);
    this._item3 = data.Slice(6, 2).ToT<ushort>(mode);
    this._item4 = data.Slice(8, 2).ToT<ushort>(mode);
    this._item5 = data.Slice(10, 2).ToT<ushort>(mode);
    this._item6 = data.Slice(12, 2).ToT<ushort>(mode);
    this._item7 = data.Slice(14, 2).ToT<ushort>(mode);
    this._item8 = data.Slice(16, 2).ToT<ushort>(mode);
    this._item9 = data.Slice(18, 2).ToT<ushort>(mode);
    this._item10 = data.Slice(20, 2).ToT<ushort>(mode);
    this._item11 = data.Slice(22, 2).ToT<ushort>(mode);
    this._item12 = data.Slice(24, 2).ToT<ushort>(mode);
    this._item13 = data.Slice(26, 2).ToT<ushort>(mode);
    this._item14 = data.Slice(28, 2).ToT<ushort>(mode);
    this._item15 = data.Slice(30, 2).ToT<ushort>(mode);
    this._item16 = data.Slice(32, 2).ToT<ushort>(mode);
    this._item17 = data.Slice(34, 2).ToT<ushort>(mode);
    this._item18 = data.Slice(36, 2).ToT<ushort>(mode);
    this._item19 = data.Slice(38, 2).ToT<ushort>(mode);
    this._item20 = data.Slice(40, 2).ToT<ushort>(mode);
    this._item21 = data.Slice(42, 2).ToT<ushort>(mode);
    this._item22 = data.Slice(44, 2).ToT<ushort>(mode);
    this._item23 = data.Slice(46, 2).ToT<ushort>(mode);
    this._item24 = data.Slice(48, 2).ToT<ushort>(mode);
    this._item25 = data.Slice(50, 2).ToT<ushort>(mode);
    this._item26 = data.Slice(52, 2).ToT<ushort>(mode);
    this._item27 = data.Slice(54, 2).ToT<ushort>(mode);
    this._item28 = data.Slice(56, 2).ToT<ushort>(mode);
    this._item29 = data.Slice(58, 2).ToT<ushort>(mode);
    this._item30 = data.Slice(60, 2).ToT<ushort>(mode);
    this._item31 = data.Slice(62, 2).ToT<ushort>(mode);
    this._item32 = data.Slice(64, 2).ToT<ushort>(mode);
    this._item33 = data.Slice(66, 2).ToT<ushort>(mode);
    this._item34 = data.Slice(68, 2).ToT<ushort>(mode);
    this._item35 = data.Slice(70, 2).ToT<ushort>(mode);
    this._item36 = data.Slice(72, 2).ToT<ushort>(mode);
    this._item37 = data.Slice(74, 2).ToT<ushort>(mode);
    this._item38 = data.Slice(76, 2).ToT<ushort>(mode);
    this._item39 = data.Slice(78, 2).ToT<ushort>(mode);
  }

  [FieldOffset(0)]private readonly ushort _item0;

  [FieldOffset(2)]private readonly ushort _item1;

  [FieldOffset(4)]private readonly ushort _item2;

  [FieldOffset(6)]private readonly ushort _item3;

  [FieldOffset(8)]private readonly ushort _item4;

  [FieldOffset(10)]private readonly ushort _item5;

  [FieldOffset(12)]private readonly ushort _item6;

  [FieldOffset(14)]private readonly ushort _item7;

  [FieldOffset(16)]private readonly ushort _item8;

  [FieldOffset(18)]private readonly ushort _item9;

  [FieldOffset(20)]private readonly ushort _item10;

  [FieldOffset(22)]private readonly ushort _item11;

  [FieldOffset(24)]private readonly ushort _item12;

  [FieldOffset(26)]private readonly ushort _item13;

  [FieldOffset(28)]private readonly ushort _item14;

  [FieldOffset(30)]private readonly ushort _item15;

  [FieldOffset(32)]private readonly ushort _item16;

  [FieldOffset(34)]private readonly ushort _item17;

  [FieldOffset(36)]private readonly ushort _item18;

  [FieldOffset(38)]private readonly ushort _item19;

  [FieldOffset(40)]private readonly ushort _item20;

  [FieldOffset(42)]private readonly ushort _item21;

  [FieldOffset(44)]private readonly ushort _item22;

  [FieldOffset(46)]private readonly ushort _item23;

  [FieldOffset(48)]private readonly ushort _item24;

  [FieldOffset(50)]private readonly ushort _item25;

  [FieldOffset(52)]private readonly ushort _item26;

  [FieldOffset(54)]private readonly ushort _item27;

  [FieldOffset(56)]private readonly ushort _item28;

  [FieldOffset(58)]private readonly ushort _item29;

  [FieldOffset(60)]private readonly ushort _item30;

  [FieldOffset(62)]private readonly ushort _item31;

  [FieldOffset(64)]private readonly ushort _item32;

  [FieldOffset(66)]private readonly ushort _item33;

  [FieldOffset(68)]private readonly ushort _item34;

  [FieldOffset(70)]private readonly ushort _item35;

  [FieldOffset(72)]private readonly ushort _item36;

  [FieldOffset(74)]private readonly ushort _item37;

  [FieldOffset(76)]private readonly ushort _item38;

  [FieldOffset(78)]private readonly ushort _item39;

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public byte[] ToByteArray(System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    var data = new byte[Unsafe.SizeOf<UshortArray40>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(span, Unsafe.SizeOf<UshortArray40>());
    this._item0.WriteTo<ushort>(span.Slice(0, 2), mode);
    this._item1.WriteTo<ushort>(span.Slice(2, 2), mode);
    this._item2.WriteTo<ushort>(span.Slice(4, 2), mode);
    this._item3.WriteTo<ushort>(span.Slice(6, 2), mode);
    this._item4.WriteTo<ushort>(span.Slice(8, 2), mode);
    this._item5.WriteTo<ushort>(span.Slice(10, 2), mode);
    this._item6.WriteTo<ushort>(span.Slice(12, 2), mode);
    this._item7.WriteTo<ushort>(span.Slice(14, 2), mode);
    this._item8.WriteTo<ushort>(span.Slice(16, 2), mode);
    this._item9.WriteTo<ushort>(span.Slice(18, 2), mode);
    this._item10.WriteTo<ushort>(span.Slice(20, 2), mode);
    this._item11.WriteTo<ushort>(span.Slice(22, 2), mode);
    this._item12.WriteTo<ushort>(span.Slice(24, 2), mode);
    this._item13.WriteTo<ushort>(span.Slice(26, 2), mode);
    this._item14.WriteTo<ushort>(span.Slice(28, 2), mode);
    this._item15.WriteTo<ushort>(span.Slice(30, 2), mode);
    this._item16.WriteTo<ushort>(span.Slice(32, 2), mode);
    this._item17.WriteTo<ushort>(span.Slice(34, 2), mode);
    this._item18.WriteTo<ushort>(span.Slice(36, 2), mode);
    this._item19.WriteTo<ushort>(span.Slice(38, 2), mode);
    this._item20.WriteTo<ushort>(span.Slice(40, 2), mode);
    this._item21.WriteTo<ushort>(span.Slice(42, 2), mode);
    this._item22.WriteTo<ushort>(span.Slice(44, 2), mode);
    this._item23.WriteTo<ushort>(span.Slice(46, 2), mode);
    this._item24.WriteTo<ushort>(span.Slice(48, 2), mode);
    this._item25.WriteTo<ushort>(span.Slice(50, 2), mode);
    this._item26.WriteTo<ushort>(span.Slice(52, 2), mode);
    this._item27.WriteTo<ushort>(span.Slice(54, 2), mode);
    this._item28.WriteTo<ushort>(span.Slice(56, 2), mode);
    this._item29.WriteTo<ushort>(span.Slice(58, 2), mode);
    this._item30.WriteTo<ushort>(span.Slice(60, 2), mode);
    this._item31.WriteTo<ushort>(span.Slice(62, 2), mode);
    this._item32.WriteTo<ushort>(span.Slice(64, 2), mode);
    this._item33.WriteTo<ushort>(span.Slice(66, 2), mode);
    this._item34.WriteTo<ushort>(span.Slice(68, 2), mode);
    this._item35.WriteTo<ushort>(span.Slice(70, 2), mode);
    this._item36.WriteTo<ushort>(span.Slice(72, 2), mode);
    this._item37.WriteTo<ushort>(span.Slice(74, 2), mode);
    this._item38.WriteTo<ushort>(span.Slice(76, 2), mode);
    this._item39.WriteTo<ushort>(span.Slice(78, 2), mode);
  }

  public int Length => 40;

  public ref readonly ushort this[int index]
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
        case 4:
          return ref Unsafe.AsRef(in _item4);
        case 5:
          return ref Unsafe.AsRef(in _item5);
        case 6:
          return ref Unsafe.AsRef(in _item6);
        case 7:
          return ref Unsafe.AsRef(in _item7);
        case 8:
          return ref Unsafe.AsRef(in _item8);
        case 9:
          return ref Unsafe.AsRef(in _item9);
        case 10:
          return ref Unsafe.AsRef(in _item10);
        case 11:
          return ref Unsafe.AsRef(in _item11);
        case 12:
          return ref Unsafe.AsRef(in _item12);
        case 13:
          return ref Unsafe.AsRef(in _item13);
        case 14:
          return ref Unsafe.AsRef(in _item14);
        case 15:
          return ref Unsafe.AsRef(in _item15);
        case 16:
          return ref Unsafe.AsRef(in _item16);
        case 17:
          return ref Unsafe.AsRef(in _item17);
        case 18:
          return ref Unsafe.AsRef(in _item18);
        case 19:
          return ref Unsafe.AsRef(in _item19);
        case 20:
          return ref Unsafe.AsRef(in _item20);
        case 21:
          return ref Unsafe.AsRef(in _item21);
        case 22:
          return ref Unsafe.AsRef(in _item22);
        case 23:
          return ref Unsafe.AsRef(in _item23);
        case 24:
          return ref Unsafe.AsRef(in _item24);
        case 25:
          return ref Unsafe.AsRef(in _item25);
        case 26:
          return ref Unsafe.AsRef(in _item26);
        case 27:
          return ref Unsafe.AsRef(in _item27);
        case 28:
          return ref Unsafe.AsRef(in _item28);
        case 29:
          return ref Unsafe.AsRef(in _item29);
        case 30:
          return ref Unsafe.AsRef(in _item30);
        case 31:
          return ref Unsafe.AsRef(in _item31);
        case 32:
          return ref Unsafe.AsRef(in _item32);
        case 33:
          return ref Unsafe.AsRef(in _item33);
        case 34:
          return ref Unsafe.AsRef(in _item34);
        case 35:
          return ref Unsafe.AsRef(in _item35);
        case 36:
          return ref Unsafe.AsRef(in _item36);
        case 37:
          return ref Unsafe.AsRef(in _item37);
        case 38:
          return ref Unsafe.AsRef(in _item38);
        case 39:
          return ref Unsafe.AsRef(in _item39);
        default:
          throw new IndexOutOfRangeException();
      }
    }
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public ReadOnlySpan<ushort> AsSpan()
  {
    return CreateReadOnlySpan(in _item0, 40);
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public ReadOnlySpan<ushort> Slice(int start, int length)
  {
    var span = AsSpan();
    return span.Slice(start, length);
  }

}
}
#pragma warning restore
```

:::

需要再定义两个结构体，让内存布局可以重叠

这是每个设置组的数据，注意 Offset

```cs
[StructLayout(LayoutKind.Explicit, Pack = 2)]
public readonly struct RTSettingGroup
{
  [FieldOffset(0)] private readonly ushort _settingVoltage;

  [FieldOffset(20)] private readonly ushort _settingCurrent;

  [FieldOffset(40)] private readonly ushort _settingOvp;

  [FieldOffset(60)] private readonly ushort _settingOcp;

  /// <summary>
  ///   设置电压
  /// </summary>
  public float SettingVoltage => _settingVoltage * 0.01f;

  /// <summary>
  ///   设置电流
  /// </summary>
  public float SettingCurrent => _settingCurrent * 0.001f;

  /// <summary>
  ///   过压保护
  /// </summary>
  public float SettingOvp => _settingOvp * 0.01f;

  /// <summary>
  ///   过流保护
  /// </summary>
  public float SettingOcp => _settingOcp * 0.01f;
}
```

然后还需要让 10 个设置组重叠

```cs
[StructLayout(LayoutKind.Explicit, Pack = 2, Size = 80)]
public readonly struct RTSettingGroupArray
{
  public RTSettingGroupArray(ReadOnlySpan<byte> data,
    BigAndSmallEndianEncodingMode mode = (BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(data, Unsafe.SizeOf<RTSettingGroupArray>());
    _source = new UshortArray40(data, mode);
  }

  // ReSharper disable once PrivateFieldCanBeConvertedToLocalVariable
  [FieldOffset(0)] private readonly UshortArray40 _source;

  [FieldOffset(0)] private readonly RTSettingGroup _item0;

  [FieldOffset(2)] private readonly RTSettingGroup _item1;

  [FieldOffset(4)] private readonly RTSettingGroup _item2;

  [FieldOffset(6)] private readonly RTSettingGroup _item3;

  [FieldOffset(8)] private readonly RTSettingGroup _item4;

  [FieldOffset(10)] private readonly RTSettingGroup _item5;

  [FieldOffset(12)] private readonly RTSettingGroup _item6;

  [FieldOffset(14)] private readonly RTSettingGroup _item7;

  [FieldOffset(16)] private readonly RTSettingGroup _item8;

  [FieldOffset(18)] private readonly RTSettingGroup _item9;

  public ref readonly RTSettingGroup this[int index]
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
        case 4:
          return ref Unsafe.AsRef(in _item4);
        case 5:
          return ref Unsafe.AsRef(in _item5);
        case 6:
          return ref Unsafe.AsRef(in _item6);
        case 7:
          return ref Unsafe.AsRef(in _item7);
        case 8:
          return ref Unsafe.AsRef(in _item8);
        case 9:
          return ref Unsafe.AsRef(in _item9);
        default:
          throw new IndexOutOfRangeException();
      }
    }
  }
}
```

### RT300Setting

```cs
[StructLayout(LayoutKind.Explicit, Pack = 2)]
[SbBitConverterStruct(BigAndSmallEndianEncodingMode.ABCD)]
public readonly partial struct RT300Setting
{
  [FieldOffset((0x01 - 1) * 2)] private readonly ushort _outputVoltage;

  [FieldOffset((0x02 - 1) * 2)] private readonly ushort _outputCurrent;

  [FieldOffset((0x03 - 1) * 2)] private readonly ushort _outputPower;

  [FieldOffset((0x04 - 1) * 2)] private readonly ushort _inputVoltage;

  [FieldOffset((0x05 - 1) * 2)] private readonly ushort _internalTemperature;

  [FieldOffset((0x06 - 1) * 2)] private readonly uint _totalCurrentCount;

  [FieldOffset((0x08 - 1) * 2)] private readonly uint _totalPowerCount;

  [FieldOffset((0x0D - 1) * 2)] private readonly ushort _settingGroup;

  [FieldOffset((0x0E - 1) * 2)] private readonly ushort _settingOpp;

  [FieldOffset((0x0F - 1) * 2)] private readonly ushort _settingUvp;

  [FieldOffset((0x10 - 1) * 2)] private readonly RTSettingGroupArray _settingGroupArray;

  /// <summary>
  ///   输出电压
  /// </summary>
  public float OutputVoltage => _outputVoltage * 0.01f;

  /// <summary>
  ///   输出电流
  /// </summary>
  public float OutputCurrent => _outputCurrent * 0.001f;

  /// <summary>
  ///   输出功率
  /// </summary>
  public float OutputPower => _outputPower * 0.01f;

  /// <summary>
  ///   输入电压
  /// </summary>
  public float InputVoltage => _inputVoltage * 0.01f;

  /// <summary>
  ///   内部温度
  /// </summary>
  public float InternalTemperature => _internalTemperature * 0.01f;


  /// <summary>
  ///   累计电流计数
  /// </summary>
  public float TotalCurrentCount => _totalCurrentCount * 0.001f;


  /// <summary>
  ///   累计功率计数
  /// </summary>
  public float TotalPowerCount => _totalPowerCount * 0.001f;

  /// <summary>
  ///   选择的数组
  /// </summary>
  public byte SelectedSettingGroup => (byte)_settingGroup;

  /// <summary>
  ///   过功率保护
  /// </summary>
  public float SettingOpp => _settingOpp;

  /// <summary>
  ///   欠压保护
  /// </summary>
  public float SettingUvp => _settingUvp * 0.01f;

  /// <summary>
  ///   配置
  /// </summary>
  public RTSettingGroupArray SettingGroupArray => _settingGroupArray;
}
```

会自动生成

::: details

```cs title="RT300.Sdk.Models.RT300Setting_SbBitConverterStruct.g.cs"
// Auto-generated code
#pragma warning disable
using System;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using static System.SbBitConverter;
using static System.SpanExtension;
namespace RT300.Sdk.Models
{
partial struct RT300Setting
{
  public RT300Setting(ReadOnlySpan<byte> data, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(data, Unsafe.SizeOf<RT300Setting>());
    this._outputVoltage = data.Slice(0, 2).ToT<ushort>(mode);
    this._outputCurrent = data.Slice(2, 2).ToT<ushort>(mode);
    this._outputPower = data.Slice(4, 2).ToT<ushort>(mode);
    this._inputVoltage = data.Slice(6, 2).ToT<ushort>(mode);
    this._internalTemperature = data.Slice(8, 2).ToT<ushort>(mode);
    this._totalCurrentCount = data.Slice(10, 4).ToT<uint>(mode);
    this._totalPowerCount = data.Slice(14, 4).ToT<uint>(mode);
    this._settingGroup = data.Slice(24, 2).ToT<ushort>(mode);
    this._settingOpp = data.Slice(26, 2).ToT<ushort>(mode);
    this._settingUvp = data.Slice(28, 2).ToT<ushort>(mode);
    this._settingGroupArray = new RT300.Sdk.Models.RTSettingGroupArray(data.Slice(30, Unsafe.SizeOf<RT300.Sdk.Models.RTSettingGroupArray>()), mode);

  }

  public RT300Setting(ReadOnlySpan<ushort> data0, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    var data = MemoryMarshal.AsBytes(data0);
    CheckLength(data, Unsafe.SizeOf<RT300Setting>());
    this._outputVoltage = data.Slice(0, 2).ToT<ushort>(mode);
    this._outputCurrent = data.Slice(2, 2).ToT<ushort>(mode);
    this._outputPower = data.Slice(4, 2).ToT<ushort>(mode);
    this._inputVoltage = data.Slice(6, 2).ToT<ushort>(mode);
    this._internalTemperature = data.Slice(8, 2).ToT<ushort>(mode);
    this._totalCurrentCount = data.Slice(10, 4).ToT<uint>(mode);
    this._totalPowerCount = data.Slice(14, 4).ToT<uint>(mode);
    this._settingGroup = data.Slice(24, 2).ToT<ushort>(mode);
    this._settingOpp = data.Slice(26, 2).ToT<ushort>(mode);
    this._settingUvp = data.Slice(28, 2).ToT<ushort>(mode);
    this._settingGroupArray = new RT300.Sdk.Models.RTSettingGroupArray(data.Slice(30, Unsafe.SizeOf<RT300.Sdk.Models.RTSettingGroupArray>()), mode);

  }

  public byte[] ToByteArray(System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    var data = new byte[Unsafe.SizeOf<RT300Setting>()];
    var span = data.AsSpan();
    WriteTo(span, mode);
    return data;
  }

  [MethodImpl(MethodImplOptions.AggressiveInlining)]
  public void WriteTo(Span<byte> span, System.BigAndSmallEndianEncodingMode mode = (System.BigAndSmallEndianEncodingMode)1)
  {
    CheckLength(span, Unsafe.SizeOf<RT300Setting>());
    this._outputVoltage.WriteTo<ushort>(span.Slice(0, 2), mode);
    this._outputCurrent.WriteTo<ushort>(span.Slice(2, 2), mode);
    this._outputPower.WriteTo<ushort>(span.Slice(4, 2), mode);
    this._inputVoltage.WriteTo<ushort>(span.Slice(6, 2), mode);
    this._internalTemperature.WriteTo<ushort>(span.Slice(8, 2), mode);
    this._totalCurrentCount.WriteTo<uint>(span.Slice(10, 4), mode);
    this._totalPowerCount.WriteTo<uint>(span.Slice(14, 4), mode);
    this._settingGroup.WriteTo<ushort>(span.Slice(24, 2), mode);
    this._settingOpp.WriteTo<ushort>(span.Slice(26, 2), mode);
    this._settingUvp.WriteTo<ushort>(span.Slice(28, 2), mode);
    this._settingGroupArray.WriteTo(span.Slice(30, Unsafe.SizeOf<RT300.Sdk.Models.RTSettingGroupArray>()), mode);

  }

}
}
#pragma warning restore
```

:::

## 使用

使用部分就比较简单了，直接用就 OK 了

```cs
/// <summary>
///   读取状态
/// </summary>
/// <param name="ct"></param>
/// <returns></returns>
public async ValueTask<RT300Setting> GetSettingsAsync(CancellationToken ct = default)
{
  if (ModbusClient is not { IsConnected: true }) return default;

  using (await _lock.LockAsync(ct))
  {
    var bs1 = await ModbusClient.ReadHoldingRegistersAsync
    (
      Sid, 1, (ushort)(Unsafe.SizeOf<RT300Setting>() / 2), ct
    );
    return new RT300Setting(bs1.Span);
  }
}
```

```cs
// 获取设置
var settings = await _rt300.GetSettingsAsync(ctx.CancellationToken);
var outputVoltage = settings.OutputVoltage;
var outputCurrent = settings.OutputCurrent;
var outputPower = settings.OutputPower;
var m = settings.SelectedSettingGroup;

_mainWindow.OutputVoltage = outputVoltage;
_mainWindow.OutputCurrent = outputCurrent;
_mainWindow.OutputPower = outputPower;
_mainWindow.SettingOpp = settings.SettingOpp;
_mainWindow.SelectedSettingGroup = settings.SelectedSettingGroup;

_mainWindow.InputVoltage = $"{settings.InputVoltage:00.0}V";
_mainWindow.InternalTemperature = $"{settings.InternalTemperature:00.0}℃";
_mainWindow.TotalCurrentCount = $"{settings.TotalCurrentCount:0000.000}AH";
_mainWindow.TotalPowerCount = $"{settings.TotalPowerCount:0000.000}WH";
_mainWindow.OutputVoltageSettingFromDevice = settings.SettingGroupArray[m].SettingVoltage;
_mainWindow.OutputCurrentSettingFromDevice = settings.SettingGroupArray[m].SettingCurrent;
_mainWindow.SettingOvp = settings.SettingGroupArray[m].SettingOvp;
_mainWindow.SettingOcp = settings.SettingGroupArray[m].SettingOcp;
```

::: details

```cs title="RT300.ViewModels.MainWindowViewModel.cs"
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Cysharp.Threading;
using RT300.Sdk.Models;
using RT300.Sdk.Services;

namespace RT300.ViewModels;

public partial class MainWindowViewModel : ObservableObject, IDisposable
{
  private readonly MainWindowLooper _looper;

  /// <inheritdoc />
  public MainWindowViewModel(RT300Service rt300)
  {
    RT300 = rt300;
    _sid = rt300.Sid;
    _looper = new MainWindowLooper(this);
  }

  public RT300Service RT300 { get; }

  public void Dispose()
  {
    _looper.Dispose();
  }


  #region 绑定

  /// <summary>
  ///   运行模式
  /// </summary>
  [ObservableProperty] private string _deviceState = "RUN";

  /// <summary>
  ///   等效电阻
  /// </summary>
  [ObservableProperty] private string _equivalentResistance = "9999+";

  /// <summary>
  ///   输出电流百分比
  /// </summary>
  [ObservableProperty] private float _outputCurrentPercentage;

  /// <summary>
  ///   输出功率百分比
  /// </summary>
  [ObservableProperty] private float _outputPowerPercentage;

  /// <summary>
  ///   输出电压百分比
  /// </summary>
  [ObservableProperty] private float _outputVoltagePercentage;

  /// <summary>
  ///   输出电压显示文本
  /// </summary>
  [ObservableProperty] private string _outputVoltageString = "00.00";

  private float _outputVoltage;

  /// <summary>
  ///   输出电压
  /// </summary>
  public float OutputVoltage
  {
    get => _outputVoltage;
    set
    {
      if (SetProperty(ref _outputVoltage, value))
      {
        OutputVoltageString = $"{value:00.00}";
        OutputVoltagePercentage = OutputVoltage / SettingOvp * 100f;
        SetEquivalentResistance();
      }
    }
  }

  /// <summary>
  ///   设置的输出电压
  /// </summary>
  [ObservableProperty] private float _outputVoltageSetting;

  private float _outputVoltageSettingFromDevice;

  /// <summary>
  ///   从设备获取的设置电压
  /// </summary>
  public float OutputVoltageSettingFromDevice
  {
    get => _outputVoltageSettingFromDevice;
    set
    {
      if (SetProperty(ref _outputVoltageSettingFromDevice, value)) OutputVoltageSetting = value;
    }
  }

  /// <summary>
  ///   输出电流
  /// </summary>
  [ObservableProperty] private string _outputCurrentString = "0.000";

  private float _outputCurrent;

  /// <summary>
  ///   输出电流
  /// </summary>
  public float OutputCurrent
  {
    get => _outputCurrent;
    set
    {
      if (SetProperty(ref _outputCurrent, value))
      {
        OutputCurrentString = TotalLimitNum2String(value, 5);
        OutputCurrentPercentage = OutputCurrent / SettingOcp * 100f;
        SetEquivalentResistance();
      }
    }
  }

  /// <summary>
  ///   设置的输出电流
  /// </summary>
  [ObservableProperty] private float _outputCurrentSetting;

  private float _outputCurrentSettingFromDevice;

  /// <summary>
  ///   从设备获取的设置电流
  /// </summary>
  public float OutputCurrentSettingFromDevice
  {
    get => _outputCurrentSettingFromDevice;
    set
    {
      if (SetProperty(ref _outputCurrentSettingFromDevice, value)) OutputCurrentSetting = value;
    }
  }

  /// <summary>
  ///   输出功率
  /// </summary>
  [ObservableProperty] private string _outputPowerString = "0.000";

  private float _outputPower;

  /// <summary>
  ///   输出功率
  /// </summary>
  public float OutputPower
  {
    get => _outputPower;
    set
    {
      if (SetProperty(ref _outputPower, value))
      {
        OutputPowerString = TotalLimitNum2String(value, 5);
        OutputPowerPercentage = OutputPower / SettingOpp * 100f;
      }
    }
  }

  /// <summary>
  ///   输入电压
  /// </summary>
  [ObservableProperty] private string _inputVoltage = "24.0V";

  /// <summary>
  ///   内部温度
  /// </summary>
  [ObservableProperty] private string _internalTemperature = "10.0℃";

  /// <summary>
  ///   累计电流
  /// </summary>
  [ObservableProperty] private string _totalCurrentCount = "0000.000AH";

  /// <summary>
  ///   累计功率
  /// </summary>
  [ObservableProperty] private string _totalPowerCount = "0000.000WH";

  /// <summary>
  ///   过压保护显示文本
  /// </summary>
  [ObservableProperty] private string _settingOvpString = "50.00";

  private float _settingOvp;

  /// <summary>
  ///   过压保护
  /// </summary>
  public float SettingOvp
  {
    get => _settingOvp;
    set
    {
      if (SetProperty(ref _settingOvp, value))
      {
        SettingOvpString = TotalLimitNum2String(value, 5);
        OutputVoltagePercentage = OutputVoltage / SettingOvp * 100f;
      }
    }
  }

  /// <summary>
  ///   过流保护显示文本
  /// </summary>
  [ObservableProperty] private string _settingOcpString = "11.00";

  private float _settingOcp;

  /// <summary>
  ///   过流保护
  /// </summary>
  public float SettingOcp
  {
    get => _settingOcp;
    set
    {
      if (SetProperty(ref _settingOcp, value))
      {
        SettingOcpString = TotalLimitNum2String(value, 5);
        OutputCurrentPercentage = OutputCurrent / SettingOcp * 100f;
      }
    }
  }

  /// <summary>
  ///   过功率保护
  /// </summary>
  [ObservableProperty] private float _settingOpp = 300;

  /// <summary>
  ///   当前调节目标是否是C电流
  /// </summary>
  [ObservableProperty] private bool _currentAdjustmentTargetCc;

  /// <summary>
  ///   是否为CC
  /// </summary>
  [ObservableProperty] private bool _useCc;

  /// <summary>
  ///   是否为输出状态
  /// </summary>
  [ObservableProperty] private bool _outputOn;

  /// <summary>
  ///   选中的设置组
  /// </summary>
  [ObservableProperty] private byte _selectedSettingGroup;

  /// <summary>
  ///   站号
  /// </summary>
  [ObservableProperty] private byte _sid;


  /// <summary>
  ///   设置电压和电流
  /// </summary>
  /// <returns></returns>
  [RelayCommand]
  private async Task SetVoltageAndCurrentAsync(CancellationToken ct)
  {
    await RT300.SetOutputVoltageSettingAsync(OutputVoltageSetting, ct);
    await RT300.SetOutputCurrentSettingAsync(OutputCurrentSetting, ct);
  }

  /// <summary>
  ///   切换输出状态
  /// </summary>
  /// <param name="ct"></param>
  /// <returns></returns>
  [RelayCommand]
  private async Task SetOutputAsync(CancellationToken ct)
  {
    await RT300.SetOutputAsync(!OutputOn, ct);
    await Task.Delay(200, ct);
  }

  private static string TotalLimitNum2String(float num, int limit)
  {
    if (num < 0) return string.Empty;

    var s = $"{num:####0.0000000}";
    var span = s.AsSpan();
    limit = Math.Min(span.Length, limit);
    return span[..limit].ToString();
  }

  /// <summary>
  ///   设置等效电阻
  /// </summary>
  private void SetEquivalentResistance()
  {
    var e = OutputVoltage / OutputCurrent;
    EquivalentResistance = e switch
    {
      > 9999 => "9999+",
      > 0 => TotalLimitNum2String(e, 5),
      _ => "NaN"
    };
  }

  #endregion
}

public class MainWindowLooper : IDisposable
{
  private readonly LogicLooper _looper = new(TimeSpan.FromSeconds(1d / 10));
  private readonly MainWindowViewModel _mainWindow;
  private readonly RT300Service _rt300;

  public MainWindowLooper(MainWindowViewModel mainWindow)
  {
    _mainWindow = mainWindow;
    _rt300 = mainWindow.RT300;
    _ = _looper.RegisterActionAsync(Update);
  }

  public void Dispose()
  {
    _looper.Dispose();
  }


  private async ValueTask<bool> Update(LogicLooperActionContext ctx)
  {
    // 获取输出状态
    var output = await _rt300.GetOutputAsync(ctx.CancellationToken);
    _mainWindow.OutputOn = output;

    // 获取状态
    var state = await _rt300.GetStateAsync(ctx.CancellationToken);
    _mainWindow.CurrentAdjustmentTargetCc = state.CurrentAdjustmentTarget == CurrentMode.CC;
    _mainWindow.UseCc = state.CurrentOutputMode == CurrentMode.CC;
    _mainWindow.DeviceState = state.DeviceStatus switch
    {
      DeviceStatus.Normal => "RUN",
      DeviceStatus.OCP => "OCP",
      DeviceStatus.OPP => "OPP",
      DeviceStatus.OVP => "OVP",
      DeviceStatus.UVP => "OUP",
      _ => "Err"
    };

    // 获取设置
    var settings = await _rt300.GetSettingsAsync(ctx.CancellationToken);
    var outputVoltage = settings.OutputVoltage;
    var outputCurrent = settings.OutputCurrent;
    var outputPower = settings.OutputPower;
    var m = settings.SelectedSettingGroup;

    _mainWindow.OutputVoltage = outputVoltage;
    _mainWindow.OutputCurrent = outputCurrent;
    _mainWindow.OutputPower = outputPower;
    _mainWindow.SettingOpp = settings.SettingOpp;
    _mainWindow.SelectedSettingGroup = settings.SelectedSettingGroup;

    _mainWindow.InputVoltage = $"{settings.InputVoltage:00.0}V";
    _mainWindow.InternalTemperature = $"{settings.InternalTemperature:00.0}℃";
    _mainWindow.TotalCurrentCount = $"{settings.TotalCurrentCount:0000.000}AH";
    _mainWindow.TotalPowerCount = $"{settings.TotalPowerCount:0000.000}WH";
    _mainWindow.OutputVoltageSettingFromDevice = settings.SettingGroupArray[m].SettingVoltage;
    _mainWindow.OutputCurrentSettingFromDevice = settings.SettingGroupArray[m].SettingCurrent;
    _mainWindow.SettingOvp = settings.SettingGroupArray[m].SettingOvp;
    _mainWindow.SettingOcp = settings.SettingGroupArray[m].SettingOcp;

    return true;
  }
}
```

:::
