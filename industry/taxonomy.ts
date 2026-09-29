// Kunlun Radar 企业 AI 商业情报分类体系。
// 只定义行业差异；核心采集、评分、聚类与发布逻辑保持 AIHOT 原架构。

export const CATEGORIES = [
  { key: "enterprise-ai", label: "企业AI", section: "企业 AI 落地", guide: "企业采用 AI 的真实业务场景、组织变化、知识库、自动化、提效与落地案例" },
  { key: "agent-fde", label: "Agent/FDE", section: "Agent 与 FDE", guide: "Agent、MCP、工具调用、FDE 前线部署、企业智能体架构与交付方法" },
  { key: "product", label: "产品", section: "AI 产品与能力", guide: "可直接影响企业业务流程的 AI 产品、模型能力、平台、API 与重要功能更新" },
  { key: "opensource", label: "开源", section: "开源与工程", guide: "值得验证、二次开发或纳入企业交付的开源项目、框架、仓库与工程实践" },
  { key: "case", label: "案例", section: "企业案例", guide: "企业采用 AI 后产生明确结果、成本变化、效率提升、收入增长或组织改造的案例" },
  { key: "business", label: "商机", section: "商业机会", guide: "可形成客户需求、产品机会、服务机会、渠道机会、采购或合作机会的信号" },
  { key: "policy", label: "政策", section: "政策与产业", guide: "影响企业 AI 采购、合规、补贴、创业支持、产业发展与市场准入的政策和监管动态" },
] as const;

export const ITEM_TYPES = [
  "enterprise_adoption",
  "agent_fde",
  "product_capability",
  "opensource_project",
  "enterprise_case",
  "business_signal",
  "policy_signal",
] as const;

export const CATEGORY_TAGS = [
  "企业AI", "Agent/FDE", "产品能力", "开源/仓库", "企业案例", "商业机会", "政策/产业", "其他",
] as const;

export const TOPIC_TAGS = [
  "Agent", "FDE", "MCP/工具调用", "RAG/知识库", "Workflow/自动化", "AI编码", "内容营销",
  "销售", "客服", "招聘/HR", "财税", "法务", "电商", "制造业", "金融/保险",
  "私有化部署", "数据治理", "安全合规", "成本优化", "组织提效", "GEO/搜索",
] as const;

export const ENTITY_TAGS = [
  "OpenAI", "Anthropic", "Google", "Microsoft", "Meta", "NVIDIA", "DeepSeek", "Qwen",
  "Kimi", "MiniMax", "智谱", "GitHub", "Hugging Face", "AWS", "阿里云", "腾讯云", "火山引擎",
] as const;

export const TAG_SYNONYMS: Readonly<Record<string, string>> = {
  "企业 AI": "企业AI",
  "企业级AI": "企业AI",
  "agent": "Agent",
  "fde": "FDE",
  "mcp": "MCP/工具调用",
  "rag": "RAG/知识库",
  "知识库": "RAG/知识库",
  "workflow": "Workflow/自动化",
  "自动化": "Workflow/自动化",
  "开源": "开源/仓库",
  "仓库": "开源/仓库",
  "商业": "商业机会",
  "商机": "商业机会",
  "政策": "政策/产业",
  "监管": "政策/产业",
};

export const CATEGORY_BY_ITEM_TYPE: Readonly<Record<string, string>> = {
  enterprise_adoption: "企业AI",
  agent_fde: "Agent/FDE",
  product_capability: "产品能力",
  opensource_project: "开源/仓库",
  enterprise_case: "企业案例",
  business_signal: "商业机会",
  policy_signal: "政策/产业",
};

export const ENTITIES: Record<string, { name: string; displayTag: string | null; aliases: string[] }> = {
  openai: { name: "OpenAI", displayTag: "OpenAI", aliases: ["OpenAI", "ChatGPT", "Codex", "Sora", "GPT"] },
  anthropic: { name: "Anthropic", displayTag: "Anthropic", aliases: ["Anthropic", "Claude"] },
  google: { name: "Google", displayTag: "Google", aliases: ["Google", "DeepMind", "Gemini", "谷歌"] },
  microsoft: { name: "Microsoft", displayTag: "Microsoft", aliases: ["Microsoft", "微软", "Copilot"] },
  meta: { name: "Meta", displayTag: "Meta", aliases: ["Meta", "Llama"] },
  nvidia: { name: "NVIDIA", displayTag: "NVIDIA", aliases: ["NVIDIA", "英伟达"] },
  deepseek: { name: "DeepSeek", displayTag: "DeepSeek", aliases: ["DeepSeek", "深度求索"] },
  qwen: { name: "Qwen / 千问", displayTag: "Qwen", aliases: ["Qwen", "千问", "通义"] },
  kimi: { name: "Kimi / 月之暗面", displayTag: "Kimi", aliases: ["Kimi", "月之暗面", "Moonshot"] },
  minimax: { name: "MiniMax", displayTag: "MiniMax", aliases: ["MiniMax", "海螺"] },
  zhipu: { name: "智谱 GLM", displayTag: "智谱", aliases: ["智谱", "GLM", "Z.ai"] },
  github: { name: "GitHub", displayTag: "GitHub", aliases: ["GitHub"] },
  huggingface: { name: "Hugging Face", displayTag: "Hugging Face", aliases: ["Hugging Face"] },
};

export const IDENTITY_LEXICON: ReadonlyArray<{ id: string; name: string; patterns: RegExp[] }> = [
  { id: "openai", name: "OpenAI", patterns: [/openai|chatgpt|\bgpt[-\w.]*\b|\bcodex\b|\bsora\b/i] },
  { id: "anthropic", name: "Anthropic", patterns: [/anthropic|\bclaude\b/i] },
  { id: "google", name: "Google / Gemini", patterns: [/google|deepmind|\bgemini\b/i] },
  { id: "microsoft", name: "Microsoft", patterns: [/microsoft|微软|copilot/i] },
  { id: "meta", name: "Meta", patterns: [/\bmeta\b|\bllama\b/i] },
  { id: "nvidia", name: "NVIDIA", patterns: [/nvidia|英伟达|cuda|blackwell/i] },
  { id: "deepseek", name: "DeepSeek", patterns: [/deepseek|深度求索/i] },
  { id: "qwen", name: "Qwen", patterns: [/\bqwen\b|千问|通义/i] },
  { id: "kimi", name: "Kimi", patterns: [/\bkimi\b|月之暗面|moonshot/i] },
  { id: "minimax", name: "MiniMax", patterns: [/minimax/i] },
  { id: "zhipu", name: "智谱", patterns: [/智谱|\bglm[-\w.]*\b/i] },
  { id: "github", name: "GitHub", patterns: [/github/i] },
  { id: "huggingface", name: "Hugging Face", patterns: [/hugging\s?face/i] },
];

export const PUBLISHER_DOMAINS: ReadonlyArray<{ entityId: string; domains: readonly string[] }> = [
  { entityId: "openai", domains: ["openai.com"] },
  { entityId: "anthropic", domains: ["anthropic.com", "claude.com"] },
  { entityId: "google", domains: ["deepmind.google", "ai.google", "blog.google"] },
  { entityId: "microsoft", domains: ["microsoft.com"] },
  { entityId: "nvidia", domains: ["nvidia.com"] },
  { entityId: "deepseek", domains: ["deepseek.com"] },
  { entityId: "qwen", domains: ["qwen.ai"] },
  { entityId: "github", domains: ["github.blog"] },
  { entityId: "huggingface", domains: ["huggingface.co"] },
];

export const IDENTITY_CONTEXT_ALIASES: ReadonlyArray<{ entityId: string; pattern: RegExp }> = [];
