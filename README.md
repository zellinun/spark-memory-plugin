# 🧠 Spark Memory — Persistent Intelligence for OpenClaw Agents

**Your agent forgets everything when the session ends. Spark fixes that.**

Spark gives your OpenClaw agent a memory that compounds. Not flat storage — a brain that reflects, learns patterns, and gets smarter every day.

## What Makes Spark Different

| Feature | memory-core | memory-lancedb | **Spark** |
|---------|------------|----------------|-----------|
| Store memories | ✅ (files) | ✅ (vectors) | ✅ (vectors) |
| Semantic search | ❌ | ✅ | ✅ |
| Importance scoring | ❌ | Static 0.7 | **Dynamic (1-10)** |
| Nightly reflection | ❌ | ❌ | **✅ Synthesizes patterns** |
| Recency × Relevance scoring | ❌ | ❌ | **✅ Stanford formula** |
| Cross-session learning | ❌ | ✅ | **✅ + reflection** |
| Episode types | ❌ | Basic categories | **7 types** |
| Multi-user support | ❌ | ❌ | **✅ Org-scoped** |
| Survives device loss | ❌ | ❌ | **✅ Cloud-backed** |
| Selective capture | ❌ | Trigger-based | **✅ Intelligence-based** |

## Install

```bash
openclaw plugins install @zellin/spark-memory
```

Then configure in your OpenClaw settings:

```json5
{
  plugins: {
    slots: { memory: "spark-memory" },
    entries: {
      "spark-memory": {
        config: {
          apiKey: "your-spark-api-key",
          orgId: "your-org-id"
        }
      }
    }
  }
}
```

## Setup

Set these environment variables (or add to your OpenClaw config):

```bash
export SPARK_API_KEY="your-api-key"    # Get one at https://zellin.ai
export SPARK_ORG_ID="your-org-id"       # Created when you sign up
```

## How It Works

1. **Session starts** → Spark recalls relevant memories from previous sessions
2. **During conversation** → Spark records important facts, preferences, decisions
3. **Session ends** → Spark saves a conversation summary
4. **Every night** → Spark reflects on accumulated memories, synthesizes patterns, detects recurring behaviors
5. **Next session** → Your agent is smarter than yesterday

Day 1: knows nothing.
Day 30: knows your preferences, your clients, your patterns.
Day 365: knows more about your operations than you remember yourself.

## Architecture

Based on Stanford's ["Generative Agents" paper](https://arxiv.org/abs/2304.03442) with extensions:
- Memory Stream (episodes) → Reflection (synthesis) → Patterns (recurring behaviors)
- Retrieval scored by Recency × Importance × Relevance
- Org-scoped: multiple users feed one shared memory
- Cloud-backed: memories survive device changes

## Free Tier

- 100 episodes/month
- Basic recall
- Nightly reflection included
- [Sign up at zellin.ai](https://zellin.ai)

## License

MIT
