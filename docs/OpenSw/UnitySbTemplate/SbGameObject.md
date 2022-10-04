---
title: SbGameObject

order: 0020
---

## 介绍

一个游戏内标记与查找物体的系统。包含运行时，编辑器和代码生成器。

## 使用

继承 `BaseSbGameObject`，绑定在场景中的物体上，添加 Keys，可通过 Keys 查找物体。

## FindSbGameObject

一个用于查找物体的工具。

![](./img/FindSbGameObject.avif)

## SbGameObjectCodeGen

一个代码生成工具，用于生成当前场景中已绑定的 `BaseSbGameObject` 物体列表。

会生成类似于下方代码：

```cs
// ReSharper disable CheckNamespace
// ReSharper disable InconsistentNaming
// ReSharper disable IdentifierTypo
// ReSharper disable UnusedMember.Global

using System.Collections.Generic;
namespace SbGameObjectKeys;

public static class SampleSceneSbGameObjectCode
{
  public static List<string> K0 { get; } = new()
  {
    "GameObject",
  };
  public static List<string> K { get; } = new()
  {
    "GameObject",
  };
  public static List<string> _KJB { get; } = new()
  {
    "GameObject",
  };
  public static List<string> KJB_nujcnsun_ { get; } = new()
  {
    "GameObject",
  };
}

public static class SampleSceneSbGameObjectCodeKey
{
  public const string K0 = "K0";
  public const string K = "01K";
  public const string _KJB = "@KJB";
  public const string KJB_nujcnsun_ = "KJB#nujcnsun$";
}
```
