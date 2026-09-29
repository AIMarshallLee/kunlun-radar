# Kunlun Radar

昆仑增长企业 AI 商业情报与机会雷达。

基于 AIHOT 开源框架（MIT）构建，重点从“AI 新闻聚合”转向“企业 AI 商业机会识别”：采集、去重、双评分、事件聚类、日报/周报/月报，并通过 Web、RSS、API、MCP、llms.txt 对外提供。

## 当前 Phase 1

- 企业 AI / Agent-FDE / 产品 / 开源 / 企业案例 / 商业机会 / 政策分类
- Kunlun Opportunity Score 商业价值评分
- MCP prefix: `kunlun_radar`
- AIHOT 专属模型榜与 Codex reset monitor 已关闭
- 精选阈值暂时沿用上游，后续用 100–200 条 Gold Set 校准

## 开发原则

行业定制优先放在 `industry/`，除非确有必要，不修改 AIHOT 核心采集、队列、发布、预算熔断与付费请求回执机制。

## 验证

按上游说明执行：

```bash
npm run typecheck
DATABASE_URL=postgres://127.0.0.1:5432/kunlun_radar_test npm test
npm run build -w @aihot/web
node --test apps/web/tests/*.test.ts
```

> 当前仓库仍处于 V0.1 开发阶段，尚未部署生产环境。

## License

代码继承上游 MIT License。AIHOT 名称与 Logo 不作为 Kunlun Radar 品牌使用。
