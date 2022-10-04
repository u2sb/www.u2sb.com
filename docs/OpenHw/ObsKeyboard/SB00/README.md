---
title: SB00
date: 2022-05-12 16:45:30

redirectFrom:
  - /pages/0015fa/
---

## 简介

一款 OBS 导播键盘，命名为 SB00，开源项目见 [https://github.com/u2sb/ObsKeyBoard-SB00](https://github.com/u2sb/ObsKeyBoard-SB00)。

## 特点

- USB TYPE B 接口，坚实可靠
- 机械键盘 MX 轴，价格便宜，方便 DIY 和维修
- ESP32-S2 模组，价格便宜，容易买到，方便 DIY
- 电路简单，方便 DIY 和维护，新手也能焊接
- 固件使用 Arduino 开发，与上位机使用串口通信，开发简单

## 功能

- 14 个自定义场景切换按键，可自由配置，可按不同场景保存配置文件
  - 工作室模式下预监+切换
  - 非工作室模式下直接切换
- 6 个编码器，可自由配置，可按不同场景保存配置文件
  - 可直接调节音量大小
  - 可直接静音/解除静音

## 工作原理

使用上位机与 OBS 通信，非快捷键方式，可实现更多功能。

![OBS键盘原理](../assets/img/SB00键盘原理.avif)

键盘发送指令至上位机，上位机解析键盘指令，根据绑定的配置，向 OBS 发送对应指令。

## 组成部分

### PCB

键盘主体，使用 kicad 绘制。

### 固件

使用 Arduino 编写，为 ESP32-­S2-­WROVER 模组。

### 外壳

亚克力堆叠外壳。

### 上位机

上位机软件，使用 WPF 编写。

## 简介视频

<BiliBili bvid="BV1VU4y1R75y" />

## 固件及上位机下载

下载上位机请加入我们的 [QQ 群](https://shang.qq.com/wpa/qunwpa?idkey=f2a6dba8d97899969101dd29210d972f04febd0ff8cf08ed50dd27790f23c9a9) 159891059

![](/assets/img/2020/qq.avif =300x300)
