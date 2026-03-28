# Z-Monitor

**ADHD-optimized real-time global intelligence dashboard** — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified, focus-driven situational awareness interface.

[![GitHub stars](https://img.shields.io/github/stars/NettechZak/zzmonitor?style=social)](https://github.com/NettechZak/zzmonitor/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/NettechZak/zzmonitor?style=social)](https://github.com/NettechZak/zzmonitor/network/members)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat&logo=discord&logoColor=white)](https://discord.gg/re63kWKxaz)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Last commit](https://img.shields.io/github/last-commit/NettechZak/zzmonitor)](https://github.com/NettechZak/zzmonitor/commits/main)
[![Latest release](https://img.shields.io/github/v/release/NettechZak/zzmonitor?style=flat)](https://github.com/NettechZak/zzmonitor/releases/latest)

<p align="center">
  <a href="https://zmonitor.app"><img src="https://img.shields.io/badge/Web_App-zmonitor.app-blue?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Web App"></a>&nbsp;
  <a href="https://tech.zmonitor.app"><img src="https://img.shields.io/badge/Tech_Variant-tech.zmonitor.app-0891b2?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Tech Variant"></a>&nbsp;
  <a href="https://finance.zmonitor.app"><img src="https://img.shields.io/badge/Finance_Variant-finance.zmonitor.app-059669?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Finance Variant"></a>&nbsp;
  <a href="https://commodity.zmonitor.app"><img src="https://img.shields.io/badge/Commodity_Variant-commodity.zmonitor.app-b45309?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Commodity Variant"></a>&nbsp;
  <a href="https://happy.zmonitor.app"><img src="https://img.shields.io/badge/Happy_Variant-happy.zmonitor.app-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Happy Variant"></a>
</p>

<p align="center">
  <a href="https://zmonitor.app/api/download?platform=windows-exe"><img src="https://img.shields.io/badge/Download-Windows_(.exe)-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Download Windows"></a>&nbsp;
  <a href="https://zmonitor.app/api/download?platform=macos-arm64"><img src="https://img.shields.io/badge/Download-macOS_Apple_Silicon-000000?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS ARM"></a>&nbsp;
  <a href="https://zmonitor.app/api/download?platform=macos-x64"><img src="https://img.shields.io/badge/Download-macOS_Intel-555555?style=for-the-badge&logo=apple&logoColor=white" alt="Download macOS Intel"></a>&nbsp;
  <a href="https://zmonitor.app/api/download?platform=linux-appimage"><img src="https://img.shields.io/badge/Download-Linux_(.AppImage)-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Download Linux"></a>
</p>

<p align="center">
  <a href="https://docs.zmonitor.app"><strong>Documentation</strong></a> &nbsp;·&nbsp;
  <a href="https://github.com/NettechZak/zzmonitor/releases/latest"><strong>Releases</strong></a> &nbsp;·&nbsp;
  <a href="https://docs.zmonitor.app/contributing"><strong>Contributing</strong></a>
</p>

![Z-Monitor Dashboard](docs/images/zmonitor-7-mar-2026.jpg)

---

## What It Does

- **435+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Focus Mode (ADHD)** — Isolate single panels and hide visual noise with one click
- **Accessibility Suite** — Dyslexic-friendly Lexend font, High Contrast mode, and Reduced Motion support
- **Persistent Scratchpad** — Integrated note-taking for quick thoughts and focus assistance
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 45 data layers
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Intelligence Index** — composite risk scoring across 12 signal categories
- **Finance radar** — 92 stock exchanges, commodities, crypto, and 7-signal market composite
- **Local AI** — run everything with Ollama, no API keys required
- **5 site variants** from a single codebase (world, tech, finance, commodity, happy)
- **Native desktop app** (Tauri 2) for macOS, Windows, and Linux
- **21 languages** with native-language feeds and RTL support

For the full feature list, architecture, data sources, and algorithms, see the **[documentation](https://docs.zmonitor.app)**.

---

## Quick Start

```bash
git clone https://github.com/NettechZak/zzmonitor.git
cd zzmonitor
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173). No environment variables required for basic operation.

For variant-specific development:

```bash
npm run dev:tech       # tech.zmonitor.app
npm run dev:finance    # finance.zmonitor.app
npm run dev:commodity  # commodity.zmonitor.app
npm run dev:happy      # happy.zmonitor.app
```

See the **[self-hosting guide](https://docs.zmonitor.app/getting-started)** for deployment options (Vercel, Docker, static).

---

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL |
| **Desktop** | Tauri 2 (Rust) with Node.js sidecar |
| **AI/ML** | Ollama / Groq / OpenRouter, Transformers.js (browser-side) |
| **API Contracts** | Protocol Buffers (92 protos, 22 services), sebuf HTTP annotations |
| **Deployment** | Vercel Edge Functions (60+), Railway relay, Tauri, PWA |
| **Caching** | Redis (Upstash), 3-tier cache, CDN, service worker |

Full stack details in the **[architecture docs](https://docs.zmonitor.app/architecture)**.

---

## Flight Data

Flight data provided gracefully by [Wingbits](https://wingbits.com?utm_source=zmonitor&utm_medium=referral&utm_campaign=zmonitor), the most advanced ADS-B flight data solution.

---

## Data Sources

Z-Monitor aggregates 30+ external data sources across geopolitics, finance, energy, climate, aviation, and cyber. See the full [data sources catalog](https://docs.zmonitor.app/data-sources) for providers, feed tiers, and collection methods.

---

## Contributing

Contributions welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

```bash
npm run typecheck        # Type checking
npm run build:full       # Production build
```

---

## License

**AGPL-3.0** for non-commercial use. **Commercial license** required for any commercial use.

| Use Case | Allowed? |
|----------|----------|
| Personal / research / educational | Yes |
| Self-hosted (non-commercial) | Yes, with attribution |
| Fork and modify (non-commercial) | Yes, share source under AGPL-3.0 |
| Commercial use / SaaS / rebranding | Requires commercial license |

See [LICENSE](LICENSE) for full terms. For commercial licensing, contact the maintainer.

Copyright (C) 2024-2026 NettechZak. All rights reserved.

---

## Author

**NettechZak** — [GitHub](https://github.com/NettechZak)

## Contributors

<a href="https://github.com/NettechZak/zzmonitor/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=NettechZak/zzmonitor" />
</a>

## Security Acknowledgments

We thank the following researchers for responsibly disclosing security issues:

- **Cody Richard** — Disclosed three security findings covering IPC command exposure, renderer-to-sidecar trust boundary analysis, and fetch patch credential injection architecture (2026)

See our [Security Policy](./SECURITY.md) for responsible disclosure guidelines.

---

<p align="center">
  <a href="https://zmonitor.app">zmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://docs.zmonitor.app">docs.zmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://finance.zmonitor.app">finance.zmonitor.app</a> &nbsp;·&nbsp;
  <a href="https://commodity.zmonitor.app">commodity.zmonitor.app</a>
</p>

## Star History

<a href="https://api.star-history.com/svg?repos=NettechZak/zzmonitor&type=Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=NettechZak/zzmonitor&type=Date&type=Date&theme=dark" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=NettechZak/zzmonitor&type=Date&type=Date" />
 </picture>
</a>
