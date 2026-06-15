#!/usr/bin/env node
'use strict';

const fs   = require('fs');
const path = require('path');
const os   = require('os');

// ─── ANSI helpers (zero deps) ────────────────────────────────────────────────
const c = {
  reset : '\x1b[0m',  bold  : '\x1b[1m',  dim   : '\x1b[2m',
  green : '\x1b[32m', cyan  : '\x1b[36m', yellow: '\x1b[33m',
  blue  : '\x1b[34m', red   : '\x1b[31m', grey  : '\x1b[90m',
};
const b  = (s) => `${c.bold}${s}${c.reset}`;
const g  = (s) => `${c.green}${s}${c.reset}`;
const cy = (s) => `${c.cyan}${s}${c.reset}`;
const y  = (s) => `${c.yellow}${s}${c.reset}`;
const d  = (s) => `${c.dim}${s}${c.reset}`;

function out(msg = '') { process.stdout.write(msg + '\n'); }
function fail(msg)     { process.stderr.write(`${c.bold}${c.red}✖ ${msg}${c.reset}\n`); process.exit(1); }

// ─── Banner ──────────────────────────────────────────────────────────────────
function banner() {
  out();
  out(b(cy(' ╔════════════════════════════════════════════╗')));
  out(b(cy(' ║  RIR Web Type — Universal Claude Skill     ║')));
  out(b(cy(' ║  PRESENCE · COMMERCE · PLATFORM            ║')));
  out(b(cy(' ╚════════════════════════════════════════════╝')));
  out();
}

// ─── Help ────────────────────────────────────────────────────────────────────
function showHelp() {
  banner();
  out(b('USAGE'));
  out(`  ${cy('npx rir-web-type')}                ${d('# install for current project')}`);
  out(`  ${cy('npx rir-web-type --global')}       ${d('# install globally for all projects')}`);
  out(`  ${cy('npx rir-web-type --uninstall')}    ${d('# remove from current project')}`);
  out(`  ${cy('npx rir-web-type --help')}         ${d('# show this help')}`);
  out();
  out(b('WHAT IT DOES'));
  out(`  • Copies skill files  →  ${cy('.claude/skills/rir-web-type/')}`);
  out(`  • Patches your        →  ${cy('CLAUDE.md')}  ${d('(created if absent)')}`);
  out(`  • Claude Code classifies the site FIRST, produces a sitemap`);
  out(`    for your approval, then builds to the correct profile.`);
  out();
  out(b('THREE CATEGORIES → 12 SUB-TYPES'));
  out();
  out(`  ${b('PRESENCE')}  — the site IS the message`);
  out(`    1. Landing Page          — one page, one CTA, max conversion`);
  out(`    2. Corporate / Business  — multi-page trust builder, CMS-ready`);
  out(`    3. Portfolio             — creative showcase, personality-first`);
  out(`    4. Blog / Editorial      — Astro-powered, SEO-optimised`);
  out(`    5. Government / Institutional — WCAG 2.1 AA, forms-first`);
  out();
  out(`  ${b('COMMERCE')}  — the site processes transactions`);
  out(`    6. E-commerce / Online Store  — cart, checkout, inventory`);
  out(`    7. Booking / Reservation      — real-time slots, calendars`);
  out(`    8. Marketplace / Directory    — multi-vendor, Algolia search`);
  out(`    9. Educational / eLearning    — courses, progress, certificates`);
  out();
  out(`  ${b('PLATFORM')}  — the site IS the product`);
  out(`   10. SaaS / Web Application     — dashboards, auth, billing`);
  out(`   11. Community / Social         — feeds, real-time, moderation`);
  out(`   12. News / Media at Scale      — editorial CMS, CDN delivery`);
  out();
  out(b('MORE'));
  out(`  ${d('GitHub:')}  https://github.com/YOUR_USERNAME/rir-web-type`);
  out(`  ${d('npm:   ')}  https://www.npmjs.com/package/rir-web-type`);
  out();
}

// ─── Constants ───────────────────────────────────────────────────────────────
const SKILL_DIR   = path.join(__dirname, '..', 'skill');
const PKG_NAME    = 'rir-web-type';
const BLOCK_OPEN  = `<!-- ${PKG_NAME}:start -->`;
const BLOCK_CLOSE = `<!-- ${PKG_NAME}:end -->`;

// ─── File helpers ─────────────────────────────────────────────────────────────
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s  = path.join(src, entry.name);
    const dt = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDirSync(s, dt);
    else fs.copyFileSync(s, dt);
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildBlock(relSkillPath) {
  return `\n${BLOCK_OPEN}
## Skill Active: RIR Web Type

When asked to build, design, scaffold, or plan ANY website or web product,
IMMEDIATELY read the following skill file BEFORE writing any code:

  @${relSkillPath}/SKILL.md

Workflow the skill enforces:
  STEP 0 — classify MAIN category (PRESENCE / COMMERCE / PLATFORM)
  STEP 1 — classify SUB-category (12 types total); read the matching reference
  STEP 2 — produce and present a sitemap for approval BEFORE any code
  STEP 3 — install the correct free MCP servers for that category
  STEP 4 — build to the profile from the reference file
  STEP 5 — verify with Playwright + Lighthouse, then deploy via Vercel

Reference files are in: ${relSkillPath}/references/
${BLOCK_CLOSE}\n`;
}

function patchClaudeMd(dir, relSkillPath) {
  const mdPath = path.join(dir, 'CLAUDE.md');
  const block  = buildBlock(relSkillPath);
  const re     = new RegExp(`\\n?${escapeRe(BLOCK_OPEN)}[\\s\\S]*?${escapeRe(BLOCK_CLOSE)}\\n?`, 'g');

  if (fs.existsSync(mdPath)) {
    let content = fs.readFileSync(mdPath, 'utf-8').replace(re, '');
    fs.writeFileSync(mdPath, content.trimEnd() + block);
    out(`  ${g('✔')} CLAUDE.md updated  ${d(mdPath)}`);
  } else {
    fs.writeFileSync(mdPath, `# Project\n${block}`);
    out(`  ${g('✔')} CLAUDE.md created  ${d(mdPath)}`);
  }
}

function removeFromClaudeMd(dir) {
  const mdPath = path.join(dir, 'CLAUDE.md');
  if (!fs.existsSync(mdPath)) return;
  const re      = new RegExp(`\\n?${escapeRe(BLOCK_OPEN)}[\\s\\S]*?${escapeRe(BLOCK_CLOSE)}\\n?`, 'g');
  const content = fs.readFileSync(mdPath, 'utf-8').replace(re, '');
  fs.writeFileSync(mdPath, content);
  out(`  ${g('✔')} Removed block from CLAUDE.md`);
}

// ─── Install ──────────────────────────────────────────────────────────────────
function install(isGlobal) {
  banner();
  out(b('Installing...'));
  out();

  const targetBase  = isGlobal
    ? path.join(os.homedir(), '.claude')
    : path.join(process.cwd(), '.claude');

  const skillTarget = path.join(targetBase, 'skills', PKG_NAME);
  const relPath     = `.claude/skills/${PKG_NAME}`;
  const claudeDir   = isGlobal ? path.join(os.homedir(), '.claude') : process.cwd();

  try {
    copyDirSync(SKILL_DIR, skillTarget);
    out(`  ${g('✔')} Skill files copied  ${d(skillTarget)}`);
  } catch (e) {
    fail(`Could not copy skill files: ${e.message}`);
  }

  try {
    patchClaudeMd(claudeDir, relPath);
  } catch (e) {
    fail(`Could not update CLAUDE.md: ${e.message}`);
  }

  out();

  if (isGlobal) {
    out(g(b('✅ Installed globally!')));
    out(`   Skill is active for every Claude Code project on this machine.`);
  } else {
    out(g(b('✅ Installed for this project!')));
    out(`   Commit ${cy('.claude/')} and ${cy('CLAUDE.md')} to share the skill with your team.`);
  }

  out();
  out(b('NEXT STEPS'));
  out(`  1. Open this project in your IDE`);
  out(`  2. Start Claude Code:  ${cy('claude')}`);
  out(`  3. Say: ${y('"Build me an e-commerce store for my clothing brand"')}`);
  out(`     or:  ${y('"Create a SaaS dashboard for project management"')}`);
  out(`     or:  ${y('"Set up a booking platform for my spa"')}`);
  out(`     or:  ${y('"Build a landing page for my product launch"')}`);
  out();
  out(d('  Claude Code will classify the site, present a sitemap for your'));
  out(d('  approval, then build to the right stack and conversion profile.'));
  out();
}

// ─── Uninstall ────────────────────────────────────────────────────────────────
function uninstall(isGlobal) {
  banner();
  out(b('Uninstalling...'));
  out();

  const targetBase  = isGlobal ? path.join(os.homedir(), '.claude') : path.join(process.cwd(), '.claude');
  const skillTarget = path.join(targetBase, 'skills', PKG_NAME);
  const claudeDir   = isGlobal ? path.join(os.homedir(), '.claude') : process.cwd();

  if (fs.existsSync(skillTarget)) {
    fs.rmSync(skillTarget, { recursive: true, force: true });
    out(`  ${g('✔')} Skill files removed  ${d(skillTarget)}`);
  } else {
    out(`  ${d('ℹ  No skill files found at')} ${d(skillTarget)}`);
  }

  removeFromClaudeMd(claudeDir);

  out();
  out(g(b('✅ Uninstalled successfully!')));
  out();
}

// ─── Entry ────────────────────────────────────────────────────────────────────
const args     = process.argv.slice(2);
const isGlobal = args.includes('--global') || args.includes('-g');

if (args.includes('--help') || args.includes('-h')) {
  showHelp();
} else if (args.includes('--uninstall') || args.includes('-u')) {
  uninstall(isGlobal);
} else {
  install(isGlobal);
}
