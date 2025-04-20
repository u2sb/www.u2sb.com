---
title: SbModbus

order: 0010
dir:
  order: 0020
---

也许是性能最好的 Modbus 库，支持 `Modbus RTU` , `Modbus RTU Over TCP` , `Modbus TCP`

[Nuget](https://www.nuget.org/packages/SbModbus/)

## 特点

- 高性能 使用 Span 和 Memory 构建高性能 Modbus 库
- 轻量级 不包含硬件接口部分
- 高易用 使用源生成器，不局限于大小端，支持 DCBA ABCD BADC CDAB 四种编码方式

## 进度

### Master

#### Class 0:

- [x] FC03: ReadHoldingRegisters
- [x] FC16: WriteMultipleRegisters

#### Class 1:

- [x] FC01: ReadCoils
- [x] FC02: ReadDiscreteInputs
- [x] FC04: ReadInputRegisters
- [x] FC05: WriteSingleCoil
- [x] FC06: WriteSingleRegister

#### Class 2:

- [x] FC15: WriteMultipleCoils
- [x] FC23: ReadWriteMultipleRegisters

### Slave

#### Class 0:

- [ ] FC03: ReadHoldingRegisters
- [ ] FC16: WriteMultipleRegisters

#### Class 1:

- [ ] FC01: ReadCoils
- [ ] FC02: ReadDiscreteInputs
- [ ] FC04: ReadInputRegisters
- [ ] FC05: WriteSingleCoil
- [ ] FC06: WriteSingleRegister

#### Class 2:

- [ ] FC15: WriteMultipleCoils
- [ ] FC23: ReadWriteMultipleRegisters

## 注意事项

本项目仍处于开发阶段，存在部分已知和未知 BUG，后续接口可能会有修改，不建议用于生产环境。

This project is still under development and contains some known and unknown bugs. Future interfaces may undergo changes, so it is not recommended for use in production environments.

## 感谢

- [FluentModbus](https://github.com/Apollo3zehn/FluentModbus) - [MIT](https://github.com/Apollo3zehn/FluentModbus/blob/dev/LICENSE.md)
