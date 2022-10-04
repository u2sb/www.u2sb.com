---
title: DMW-BLK22 松下相机假电池
data: 2022-10-06 15:56:00
---

## 简介

DMW-BLK22 松下相机假电池，适用于 LUMIX S5 等机型，输入电压 10-18V，输出电压 8.1V，带有 PD 和 QC 诱骗电路，支持快充输入。详见 [立创开源](https://oshwhub.com/monologuechi/dmw-blk22-xiang-ji-jia-dian-chi)

## PCB

### 整体

左侧输入，右侧输出，打样时忘记加丝印了，新版工程文件已加丝印。左上角为诱骗电路，如不使用快充输入，无需焊接。

![PCB](../assets/DMW-BLK22-PCB成品1.avif)

### 诱骗电路

当需要使用充电宝或手机充电器供电时，需焊接诱骗电路。

![诱骗电路](../assets/DMW-BLK22-诱骗电路.avif)

### 关键元件

BOM 表有些问题，关键元件看这里，其他电阻电容看原理图

1. DC2DC 转换器：SY8286ARAC，立创商城有售，价格比某宝便宜。
2. PD QC 诱骗：FS312H，某宝有售

## 外壳

### 尺寸说明

嘉立创 3D 打印外壳，见开源工程附件，材料树脂 8111X，尺寸都是手工测量，不保证完美，但可以使用。

![外壳1](../assets/DMW-BLK22-外壳1.avif)

![外壳2](../assets/DMW-BLK22-外壳2.avif)

## 成本

见结尾介绍视频

## 装配

外壳分为两部分，使用 M3x8 自攻钉固定，方便拆卸维护。

![装配](../assets/DMW-BLK22-触点特写.avif)

## 成品

![成品1](../assets/DMW-BLK22-成品1.avif)

![成品2](../assets/DMW-BLK22-成品2.avif)

![上机测试](../assets/DMW-BLK22-录像.avif)

## 视频

<BiliBili bvid="BV1sN4y1F7Nd" />
