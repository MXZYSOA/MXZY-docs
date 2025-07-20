---
sidebar: auto
---

# Minecraft 服务器插件文档

## 1. 附魔插件
- 正常附魔即可

## 2. 飞行插件
- 通过菜单控制飞行功能开关

## 3. 任务插件
- 你可以在菜单里打开，查看任务领取奖励等

## 4. 受保护的箱子
::: tip 保护机制


1. 在方块上放置告示牌：
   - 自动添加 
"[Private]" 和玩家名
   - 潜行时可自定义第三、四行文本
2. 门保护：门上/下方方块放置含 
"[Private]" 的告示牌
3. 活板门保护：附着方块处放置告示牌
4. 编辑权限：右键点击（需是所有者）
:::

::: tip 特殊标签

#### 标签格式 功能描述

"[所有人]" 开放所有玩家访问权限

"[Redstone]" 允许红石设备交互

"[Timer:X]" 门自动关闭倒计时（X=秒数）

"[更多用户]" 扩展额外用户槽位
:::

## 5. 建筑权杖

- 菜单购买后使用
- 背包准备足够方块即可快速搭建

## 6. 连锁挖矿

- 开启路径：
"菜单 > 个人设置"

## 7. 涂鸦

- 位置：杂项菜单
- 特性：上传图片喷涂墙面，随时间消失

## 8. 技能插件

- 升级方式：击杀怪物
- 查看信息：`主菜单 > 技能菜单`
- 排行榜：`/skills top`

## 9. 角色动作

指令 功能

"/sit" 
"/gsit" 坐在方块上

"/spin" 
"/gspin" 在方块上旋转

"/crawl" 
"/gcrawl" 地面爬行

## 10. 图片系统

- /image create <图片名|URL> [缩放比例]  # 创建新图像
- /image delete                         # 删除点击的图像
- /image delete near <范围>             # 范围删除
- /image import                        # 旧格式转换
- /image transfer                      # 数据库迁移

## 11. 农业插件

- 提供丰富农业组件
- 种子获取：击打草地
- 组件购买：菜单内获取

## 12. 钓鱼插件

::: details 附魔系统

附魔方式：

1. 自定义附魔书
2. 炼金术（材料入锅 → 鱼竿右键）

附魔列表：

- 英文名             中文名   最高等级  效果描述
- Long Cast          长距离施法 1      增加抛竿距离
- Swift Cast         快速投掷   3      减少收/抛竿时间
- Bountiful Lure     丰饶诱饵   2      提高稀有鱼几率
- Everlasting Bait   永恒鱼饵   1      鱼饵概率不消耗
- Auto Bait          自动鱼饵   1      自动补充新鱼饵
- Powerful Reel      强力卷轴   2      提高捕获大型鱼成功率
- Fisher's Bond      渔夫羁绊   2      团队钓鱼效率提升
- Storm Fisher       风暴渔夫   2      雨天增加稀有鱼概率
- Line Mender        钓线修复   1      修复鱼竿耐久
- Shared Bounty      共享赏金   2      附近玩家共享收获
- Quick Reel         快速收线   1      加速收竿
- Mystic Bite        神秘之咬   2      提高稀有物品获取率
- Magnetic Lure      磁性诱饵   2      扩大鱼类吸引范围
- Monster Repellent  驱怪灵药   1      驱散攻击性生物

:::

### 环境事件

- 事件类型 影响效果
- 水污染 降低稀有鱼捕获率
- 月相 提高稀有鱼概率 + 专属月相鱼种
- 季节 大幅提高稀有鱼出现率

## 13. 兑换码

使用命令：`/cdk use <兑换码>`

## 14. 工会系统

- /legendaryguild list       # 公会列表
- /legendaryguild create <名称> # 创建公会
- /legendaryguild join <名称>  # 加入公会
- /legendaryguild money <数量> # 捐赠资金
- /legendaryguild redpacket <金额> <份数> # 发红包
- /legendaryguild delete confirm # 解散公会

## 15. LobbyGames小游戏

- 包含：足球/2048/井字棋/贪吃蛇等

## 16. 金币奖励

触发方式：砍树/击杀生物
查看目标：/lc objectives

## 17. MCMMO RPG插件

::: tip 技能体系

### 16项核心技能：

- 杂技(Acrobatics)   - 炼金术(Alchemy)
- 射箭(Archery)      - 斧技(Axes)
- 弩技(Crossbows)    - 挖掘(Excavation)
- 钓鱼(Fishing)      - 草药学(Herbalism)
- 锤技(Maces)        - 采矿(Mining)
- 维修(Repair)       - 剑技(Swords)
- 驯服(Taming)       - 三叉戟(Tridents)
- 徒手(Unarmed)      - 伐木(Woodcutting)

:::
#### 查看信息：主菜单 > 我的mcMMO信息


## 18. MMOInventory

查看库存：/mmoinventory

## 19. MMOItems

- 功能位置：菜单内查看（部分未汉化）

## 20. 宠物插件（旧版）

::: tip 命令简介

- /petinfo [玩家名]    # 查看宠物信息
- /petname <新名字>    # 重命名宠物
- /petrelease         # 释放宠物
- /petcall            # 召唤宠物

- /petbehavior <模式>  # 切换行为模式
- /petinventory        # 打开宠物背包
- /petshop             # 打开宠物商店
- /pettrade <玩家> <价格> # 交易宠物

:::

## 21. NekoTraps 生物陷阱

1. 菜单购买陷阱盒
2. 放置地面吸引生物
3. 盒子闭合后挖取携带
4. 放置右键释放生物

## 22. 在线奖励

开启界面：/or-next open

## 23. 现代宠物插件（⭐推荐⭐）

- /pet help     # 帮助列表
- /pet list     # 显示所有宠物
- /pet spawn <类型> # 生成新宠物
- /pet call [ID] # 召唤宠物
- /apet <命令>   # 管理员命令

## 24. 强化插件

- 强化方式：熔炉放入武器 + 炉岩碳
- 炉岩碳获取：菜单购买/怪物掉落

## 25. 种族插件
::: details 种族特性
天使
- 被动：掉落/水中无伤
- 主动：治疗/召唤生物
- 弱点：无
恶魔
- 被动：火焰/岩浆免疫
- 主动：发射火焰弹
- 弱点：仅穿锁链装备
吸血鬼
- 被动：近战增强/怪物休战
- 主动：远程吸血
- 弱点：阳光下燃烧/仅食生肉
狼人
- 被动：夜间能力强化
- 主动：召唤狼群/冲刺
- 弱点：白天能力削弱
食尸鬼
- 被动：僵尸休战/近战吸血
- 主动：召唤猪人/诅咒人类
- 弱点：怕水
#### 重拾人性：合成孟婆汤（知识之书解锁配方）
:::

## 26. 玩家称号

- 获取方式：菜单购买佩戴

## 27. 地标系统

1. 菜单创建建筑地标
2. 全局可见
权限问题：/res set 开启传送权限

## 28. 正版验证

- 验证正版账号获取奖励

## 29. QS商店

创建商店：/qs create
查看帮助：/qs

## 30. 季节插件

- 动态季节更替
- 各季节独特事件

## 31. 时间同步

- 游戏时间 = 上海现实时间
- 天气同步北京

## 32. 语音交流

- 添加群文件MOD实现语音聊天

## 33. 玩家传送

发起传送：/tpa <玩家名>
权限设置：/res set 开启传送权限

## 34. 死亡回溯

返回死亡点：/back

## 35. 死亡惩罚

- 概率扣除金币
- 触发幽灵时间

### 遇到问题？
联系服主：
- 游戏内 
"@Littleduan"
- 邮箱："littleduan58@gmail.com" (mailto:littleduan58@gmail.com)
