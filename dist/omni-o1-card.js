/*!
 * Omni O1 Card – Lovelace-Karte für den xTool Omni O1 (Integration "xtool_omni")
 * https://github.com/notch001/ha-omni-o1-card
 */
const VERSION = "0.2.0";

const I18N = {
  de: {
    online: "Online", offline: "Offline", sleep: "Schlafmodus", idle: "Bereit", printing: "Druckt", alarm: "Alarm",
    noJob: "kein Job", progress: "Fortschritt", lastDone: "Zuletzt fertig", running: "Läuft gerade",
    home: "Alle Achsen homen", refresh: "Aktualisieren",
    safety: "Sicherheit", lid: "Deckel", door1: "Tür 1", door2: "Tür 2", filter: "Filter", alarmL: "Alarm",
    open: "offen", closed: "geschlossen", installed: "eingesetzt", missing: "fehlt", none: "keiner", active: "aktiv",
    climate: "Klima", room: "Raum", humidity: "Luftfeuchte", head: "Druckkopf", head1: "Druckkopf 1 (UV)", head2: "Druckkopf 2 (DTG)",
    ink: "Tinte", head1s: "Druckkopf 1", head2s: "Druckkopf 2",
    tanks: "Tanks", moist1: "Befeuchtung 1", moist2: "Befeuchtung 2", waste: "Abfalltank", notInstalled: "nicht eingesetzt",
    stats: "Statistik", prints: "Drucke gesamt", printTime: "Druckzeit gesamt", uvLamp: "UV-Lampe", air: "Luftreiniger",
    ink_cyan: "Cyan", ink_magenta: "Magenta", ink_yellow: "Gelb", ink_black: "Schwarz", ink_varnish: "Lack", ink_white: "Weiß",
    power: "Strom", pw_power: "Leistung", pw_current: "Stromstärke", pw_voltage: "Spannung", pw_today: "Heute", pw_yesterday: "Gestern",
    pw_month: "Monat", pw_total: "Gesamt", pw_max: "Max 24 h", pw_avg: "Ø 24 h", pw_on: "An", pw_off: "Aus", pw_unavail: "nicht erreichbar", pw_toggle: "Steckdose schalten",
    noDevice: "Kein xTool-Omni-Gerät gefunden. Wähle im Editor das Gerät aus.",
    status_sleep: "Schlafmodus", status_idle: "Bereit",
    // Editor
    e_name: "Titel", e_device: "Gerät", e_heads: "Druckköpfe", e_layout: "Layout", e_density: "Dichte", e_accent: "Akzentfarbe (z. B. #19b8a6)",
    e_sections: "Angezeigte Bereiche", e_ink_style: "Tintenanzeige", e_ink_line: "Tintenlinie (bei zwei Druckköpfen)",
    e_ink_unit: "Füllstand als", e_warn: "Warnung unter (%)", e_ink: "Tinte",
    e_power: "Messsteckdose", e_power_device: "Steckdosen-Gerät (findet Entitäten automatisch)", e_power_entity: "Leistung", e_current_entity: "Stromstärke", e_voltage_entity: "Spannung", e_energy_today_entity: "Energie heute", e_energy_yesterday_entity: "Energie gestern", e_energy_month_entity: "Energie Monat", e_energy_total_entity: "Energie gesamt", e_power_switch: "Schalter",
    o_auto: "Automatisch", o_one: "1 · nur UV", o_two: "2 · UV + DTG", o_stack: "Einspaltig", o_comfortable: "Luftig", o_compact: "Kompakt",
    o_tubes: "Kartuschen", o_bars: "Balken", o_both: "Beides", o_hero: "Status & Auftrag", o_safety: "Sicherheit", o_climate: "Klima",
    o_ink: "Tinte", o_tanks: "Tanks", o_stats: "Statistik", o_power: "Strom (Messsteckdose)",
  },
  en: {
    online: "Online", offline: "Offline", sleep: "Sleep", idle: "Ready", printing: "Printing", alarm: "Alarm",
    noJob: "no job", progress: "Progress", lastDone: "Last finished", running: "Running now",
    home: "Home all axes", refresh: "Refresh",
    safety: "Safety", lid: "Lid", door1: "Door 1", door2: "Door 2", filter: "Filter", alarmL: "Alarm",
    open: "open", closed: "closed", installed: "installed", missing: "missing", none: "none", active: "active",
    climate: "Climate", room: "Room", humidity: "Humidity", head: "Print head", head1: "Print head 1 (UV)", head2: "Print head 2 (DTG)",
    ink: "Ink", head1s: "Print head 1", head2s: "Print head 2",
    tanks: "Tanks", moist1: "Moisturizing 1", moist2: "Moisturizing 2", waste: "Waste tank", notInstalled: "not installed",
    stats: "Statistics", prints: "Total prints", printTime: "Total print time", uvLamp: "UV lamp", air: "Air purifier",
    ink_cyan: "Cyan", ink_magenta: "Magenta", ink_yellow: "Yellow", ink_black: "Black", ink_varnish: "Varnish", ink_white: "White",
    power: "Power", pw_power: "Power", pw_current: "Current", pw_voltage: "Voltage", pw_today: "Today", pw_yesterday: "Yesterday",
    pw_month: "Month", pw_total: "Total", pw_max: "Max 24 h", pw_avg: "Avg 24 h", pw_on: "On", pw_off: "Off", pw_unavail: "unreachable", pw_toggle: "Toggle socket",
    noDevice: "No xTool Omni device found. Pick the device in the editor.",
    status_sleep: "Sleep", status_idle: "Ready",
    e_name: "Title", e_device: "Device", e_heads: "Print heads", e_layout: "Layout", e_density: "Density", e_accent: "Accent color (e.g. #19b8a6)",
    e_sections: "Visible sections", e_ink_style: "Ink display", e_ink_line: "Ink line (with two print heads)",
    e_ink_unit: "Fill level as", e_warn: "Warn below (%)", e_ink: "Ink",
    e_power: "Power meter socket", e_power_device: "Socket device (finds entities automatically)", e_power_entity: "Power", e_current_entity: "Current", e_voltage_entity: "Voltage", e_energy_today_entity: "Energy today", e_energy_yesterday_entity: "Energy yesterday", e_energy_month_entity: "Energy month", e_energy_total_entity: "Energy total", e_power_switch: "Switch",
    o_auto: "Automatic", o_one: "1 · UV only", o_two: "2 · UV + DTG", o_stack: "Single column", o_comfortable: "Comfortable", o_compact: "Compact",
    o_tubes: "Cartridges", o_bars: "Bars", o_both: "Both", o_hero: "Status & job", o_safety: "Safety", o_climate: "Climate",
    o_ink: "Ink", o_tanks: "Tanks", o_stats: "Statistics", o_power: "Power (meter socket)",
  },
};

const SECTIONS = ["hero", "safety", "climate", "ink", "tanks", "power", "stats"];
const INKS = ["cyan", "magenta", "yellow", "black", "varnish", "white"];
const INK_META = {
  cyan: ["C", "#12b5e5"], magenta: ["M", "#e5309a"], yellow: ["Y", "#f4c20d"],
  black: ["K", "var(--omni-ink-k)"], varnish: ["V", "var(--omni-ink-v)"], white: ["W", "#f3f3f0"],
};

/* Entitäten werden über das Ende der Entity-ID erkannt, damit Umbenennungen und Sprache egal sind. */
const MAP = {
  status: ["sensor", /_status$/], temperature: ["sensor", /_(temperatur|temperature)$/], humidity: ["sensor", /_(luftfeuchtigkeit|humidity)$/],
  job: ["sensor", /_job$/], progress: ["sensor", /_job_progress$/], last_finished: ["sensor", /_last_job_finished$/],
  waste: ["sensor", /_waste_tank_level$/], uv_lamp: ["sensor", /_uv_lamp_run_time$/], air: ["sensor", /_air_purifier_run_time$/],
  prints: ["sensor", /_total_prints$/], print_time: ["sensor", /_total_print_time$/],
  head1: ["sensor", /_print_head_1_temperature$/], head2: ["sensor", /_print_head_2_temperature$/],
  moist1: ["sensor", /_moisturizing_tank_1$/], moist2: ["sensor", /_moisturizing_tank_2$/],
  online: ["binary_sensor", /_online$/], lid: ["binary_sensor", /_lid$/], door1: ["binary_sensor", /_door_1$/], door2: ["binary_sensor", /_door_2$/],
  filter: ["binary_sensor", /_filter_installed$/], running: ["binary_sensor", /_running$/], alarm: ["binary_sensor", /_alarm$/],
  home: ["button", /_home_all_axes$/], refresh: ["button", /_refresh$/],
};
for (const c of INKS) { MAP["uv_" + c] = ["sensor", new RegExp("_uv_" + c + "$")]; MAP["dtg_" + c] = ["sensor", new RegExp("_dtg_" + c + "$")]; }

const ICONS = {
  home: "M3 11l9-8 9 8M5 10v10h14V10", refresh: "M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5",
  door: "M5 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M3 21h18M13 12h.01", lid: "M3 9l9-5 9 5M4 9v11h16V9",
  fan: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 3v4M12 17v4M3 12h4M17 12h4", alarm: "M12 3l10 18H2L12 3zM12 10v4M12 17.5h.01",
};
const icon = (k) => `<svg class="i" viewBox="0 0 24 24"><path d="${ICONS[k]}"/></svg>`;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isNum = (v) => v !== null && v !== undefined && v !== "" && !isNaN(Number(v));

const STYLE = `
:host { display: block; }
ha-card { overflow: hidden; }
.omni { container: omni / inline-size; padding: var(--pad); --pad: 16px; --gap: 12px;
  --accent: var(--omni-accent, var(--primary-color, #03a9f4)); --on-accent: var(--text-primary-color, #fff);
  --surface: var(--ha-card-background, var(--card-background-color, #fff)); --surface2: var(--secondary-background-color, #eee);
  --fg: var(--primary-text-color, #222); --muted: var(--secondary-text-color, #666); --line: var(--divider-color, #ddd);
  --good: var(--success-color, #43a047); --warn: var(--warning-color, #f0a30a); --bad: var(--error-color, #db4437);
  --omni-ink-k: color-mix(in srgb, var(--fg) 75%, var(--surface)); --omni-ink-v: color-mix(in srgb, #8fc3dc 70%, var(--surface));
  font-family: var(--paper-font-body1_-_font-family, inherit); color: var(--fg); }
.omni[data-density=compact] { --pad: 10px; --gap: 8px; }
.title { font-size: 1.15em; font-weight: 500; padding: 0 2px 10px; }
.grid { display: grid; gap: var(--gap); grid-template-columns: 1fr; grid-auto-flow: dense; }
.sec { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: var(--pad); min-width: 0; }
.sec > h3, .sec h3.sub-h { margin: 0 0 10px; font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.sec h3.sub-h.n { margin-top: 16px; }
.side { display: contents; }
@container omni (min-width: 560px) { .grid { grid-template-columns: 1fr 1fr; } .s-hero, .s-safety, .s-ink, .s-power, .s-stats { grid-column: 1 / -1; } }
@container omni (min-width: 900px) {
  .grid { grid-template-columns: repeat(12, 1fr); }
  .omni:not([data-layout=stack]) .s-hero { grid-column: span 5; } .omni:not([data-layout=stack]) .s-safety { grid-column: span 7; }
  .omni:not([data-layout=stack]) .s-ink { grid-column: span 7; }
  .omni:not([data-layout=stack]) .side { display: flex; flex-direction: column; gap: var(--gap); grid-column: span 5; }
  .omni:not([data-layout=stack]) .side .sec { flex: 1; } .omni:not([data-layout=stack]) .s-stats, .omni:not([data-layout=stack]) .s-power { grid-column: 1 / -1; }
}
.omni[data-layout=stack] .grid { grid-template-columns: 1fr; } .omni[data-layout=stack] .grid > * { grid-column: auto !important; } .omni[data-layout=stack] .side { display: contents; }
.hero { display: flex; gap: 14px; align-items: center; }
.ring { position: relative; width: 104px; height: 104px; flex: none; cursor: pointer; }
.ring svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.ring .trk { stroke: var(--surface2); } .ring .val { stroke: var(--accent); stroke-linecap: round; transition: stroke-dashoffset .5s; }
.ring .mid { position: absolute; inset: 0; display: grid; place-content: center; text-align: center; font-size: 26px; font-weight: 600; line-height: 1; }
.ring .mid small { font-size: 10px; font-weight: 500; letter-spacing: .08em; text-transform: uppercase; color: var(--muted); margin-top: 3px; }
.hero-txt { min-width: 0; flex: 1; }
.pill { display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px 3px 8px; border-radius: 99px; background: var(--surface2); font-size: 12px; font-weight: 600; }
.pill::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--muted); }
.pill[data-s=printing]::before { background: var(--accent); animation: pulse 1.4s infinite; } .pill[data-s=idle]::before, .pill[data-s=ok]::before { background: var(--good); }
.pill[data-s=alarm] { background: color-mix(in srgb, var(--bad) 18%, var(--surface)); color: var(--bad); } .pill[data-s=alarm]::before { background: var(--bad); }
@keyframes pulse { 50% { opacity: .35; } } @media (prefers-reduced-motion: reduce) { .pill::before { animation: none !important; } .ring .val { transition: none; } }
.job { font-size: 1.35em; font-weight: 600; line-height: 1.15; margin: 8px 0 2px; overflow-wrap: anywhere; }
.sub { color: var(--muted); font-size: 12.5px; }
.actions { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
.btn { display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--line); background: var(--surface2); color: var(--fg); border-radius: 10px; padding: 8px 12px; cursor: pointer; font: inherit; font-size: 13px; font-weight: 500; min-height: 40px; }
.btn:hover { border-color: var(--accent); } .btn:focus-visible, [data-more]:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
.btn.pri { background: var(--accent); color: var(--on-accent); border-color: transparent; }
svg.i { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; flex: none; }
.chips { display: grid; grid-template-columns: repeat(auto-fit, minmax(128px, 1fr)); gap: 8px; }
.chip { display: flex; align-items: center; gap: 10px; padding: 9px 11px; border-radius: 12px; background: var(--surface2); min-width: 0; cursor: pointer; }
.chip b { display: block; font-weight: 600; font-size: 13px; line-height: 1.2; } .chip span { display: block; font-size: 11.5px; color: var(--muted); }
.chip[data-t=ok] svg { color: var(--good); } .chip[data-t=warn] { background: color-mix(in srgb, var(--warn) 18%, var(--surface2)); } .chip[data-t=warn] svg { color: var(--warn); }
.chip[data-t=bad] { background: color-mix(in srgb, var(--bad) 20%, var(--surface2)); } .chip[data-t=bad] svg { color: var(--bad); }
.metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 10px; }
.m[data-more] { cursor: pointer; } .m .n { font-size: 26px; font-weight: 600; line-height: 1; font-variant-numeric: tabular-nums; }
.m .n small { font-size: 13px; font-weight: 400; color: var(--muted); margin-left: 2px; } .m .l { font-size: 11.5px; color: var(--muted); margin-top: 3px; }
.tank { display: grid; grid-template-columns: 1fr auto; gap: 4px 10px; align-items: end; cursor: pointer; } .tank + .tank { margin-top: 12px; }
.tank .t { font-size: 13px; font-weight: 500; } .tank .v { font-size: 12px; color: var(--muted); font-variant-numeric: tabular-nums; }
.meter i { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--fg) 14%, transparent); }
.meter { grid-column: 1 / -1; height: 8px; border-radius: 4px; background: var(--surface2); overflow: hidden; } .meter i { display: block; height: 100%; background: var(--accent); border-radius: 4px; }
.tank[data-off] { opacity: .5; cursor: default; }
.ink-tubes { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 8px; }
.cart { display: flex; flex-direction: column; align-items: center; gap: 6px; min-width: 0; cursor: pointer; }
.tube { position: relative; width: 100%; max-width: 64px; height: 120px; border-radius: 10px 10px 16px 16px; background: var(--surface2); border: 1px solid var(--line); overflow: hidden; }
@container omni (min-width: 900px) { .tube { height: 150px; } }
.tube i { position: absolute; left: 0; right: 0; bottom: 0; background: var(--c); transition: height .5s; } .tube i::after { content: ""; position: absolute; inset: 0 auto 0 14%; width: 14%; background: #fff4; }
.tube[data-low] { border-color: var(--warn); }
.tube[data-low]::before { content: "!"; position: absolute; top: 6px; left: 50%; translate: -50% 0; z-index: 1; font-size: 12px; font-weight: 700; color: var(--warn); background: var(--surface); width: 18px; height: 18px; border-radius: 50%; display: grid; place-items: center; }
.tube[data-empty] { border-style: dashed; opacity: .55; }
.cart .ch { font-size: 14px; font-weight: 700; line-height: 1; } .cart .vv { font-size: 11px; color: var(--muted); white-space: nowrap; font-variant-numeric: tabular-nums; }
.ink-bars { display: grid; gap: 9px; } .bar-row { display: grid; grid-template-columns: 74px 1fr auto; gap: 10px; align-items: center; cursor: pointer; }
.bar-row .ch { font-size: 13px; font-weight: 500; } .bar-row .meter { grid-column: auto; height: 10px; } .bar-row .meter i { background: var(--c); }
.bar-row .vv { font-size: 12px; color: var(--muted); min-width: 92px; text-align: right; font-variant-numeric: tabular-nums; } .bar-row[data-low] .vv { color: var(--warn); } .bar-row[data-empty] { opacity: .5; }
.seg-mini { font-size: 11px; letter-spacing: .04em; font-weight: 500; text-transform: none; }
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 12px; } .stats .m .n { font-size: 22px; }
.omni[data-offline] .grid { opacity: .6; }
.msg { padding: 16px; color: var(--muted); }
.metrics.pw { grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 12px; } .m.big .n { font-size: 34px; color: var(--accent); }
@container omni (min-width: 560px) { .m.big { grid-column: span 2; } }
button.pill { border: 0; cursor: pointer; font: inherit; font-size: 11px; font-weight: 600; color: var(--fg); } button.pill:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
`;

class OmniO1Card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._sig = "";
    this.shadowRoot.addEventListener("click", (e) => this._click(e));
    this.shadowRoot.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target.dataset?.more) { e.preventDefault(); this._click(e); } });
  }

  static getConfigElement() { return document.createElement("omni-o1-card-editor"); }
  static getStubConfig() { return { type: "custom:omni-o1-card" }; }

  setConfig(config) {
    if (!config) throw new Error("Ungültige Konfiguration");
    this._config = {
      heads: "auto", layout: "auto", density: "comfortable", ink_style: "tubes", ink_line: "auto", ink_unit: "ml", warn_below: 15,
      sections: SECTIONS.slice(), ...config,
    };
    this._sig = "";
    if (this._hass) this._update();
  }

  set hass(hass) { this._hass = hass; if (this._config) this._update(); }
  getCardSize() { return 8; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  _t(k) { const l = (this._hass?.language || "de").slice(0, 2); return (I18N[l] || I18N.en)[k] ?? I18N.de[k] ?? k; }

  _resolve() {
    const hass = this._hass, cfg = this._config, ov = cfg.entities || {};
    let ids = Object.keys(hass.states);
    if (cfg.device_id && hass.entities) ids = ids.filter((id) => hass.entities[id]?.device_id === cfg.device_id);
    else ids = ids.filter((id) => /xtool_omni/.test(id));
    const map = {};
    for (const [key, [domain, re]] of Object.entries(MAP)) {
      map[key] = ov[key] || ids.find((id) => id.startsWith(domain + ".") && re.test(id));
    }
    /* Messsteckdose: über das gewählte Gerät automatisch, einzelne Entitäten per Konfiguration */
    const dev = cfg.power_device_id && hass.entities ? Object.keys(hass.states).filter((id) => hass.entities[id]?.device_id === cfg.power_device_id) : [];
    const dc = (id) => hass.states[id]?.attributes?.device_class;
    const pick = (dom, re, cls) => dev.find((id) => id.startsWith(dom + ".") && (re.test(id) || (cls && dc(id) === cls && !/_(max|durchschnitt|avg|today|heute|yesterday|gestern|month|monat)/.test(id))));
    const PW = {
      pw_power: [cfg.power_entity, () => pick("sensor", /_(power|leistung)$/, "power")],
      pw_current: [cfg.current_entity, () => pick("sensor", /_(current|stromstaerke|stromstärke)$/, "current")],
      pw_voltage: [cfg.voltage_entity, () => pick("sensor", /_(voltage|spannung)$/, "voltage")],
      pw_today: [cfg.energy_today_entity, () => pick("sensor", /_(energy|energie)_(today|heute)$/)],
      pw_yesterday: [cfg.energy_yesterday_entity, () => pick("sensor", /_(energy|energie)_(yesterday|gestern)$/)],
      pw_month: [cfg.energy_month_entity, () => pick("sensor", /_(energy|energie)_(month|monat)$/)],
      pw_total: [cfg.energy_total_entity, () => pick("sensor", /_(energy|energie)$/)],
      pw_max: [cfg.power_max_entity, () => pick("sensor", /(leistung|power)_max/)],
      pw_avg: [cfg.power_avg_entity, () => pick("sensor", /(leistung|power)_(durchschnitt|avg|average)/)],
      pw_switch: [cfg.power_switch, () => dev.find((id) => id.startsWith("switch.") && !/network_indicator|outlet_control_protect|child_lock|led/.test(id))],
    };
    for (const [k, [explicit, auto]] of Object.entries(PW)) map[k] = ov[k] || explicit || auto();
    return map;
  }

  _update() {
    const hass = this._hass;
    if (!hass) return;
    const ents = this._resolve();
    const st = (k) => (ents[k] ? hass.states[ents[k]] : undefined);
    const used = Object.values(ents).filter(Boolean);
    const sig = JSON.stringify([hass.language, used.map((id) => { const s = hass.states[id]; return s ? [s.state, s.attributes] : null; })]) + JSON.stringify(this._config);
    if (sig === this._sig) return;
    this._sig = sig;
    this._ents = ents;
    this._render(st);
  }

  _fmt(n, d = 1) { return Number(n).toLocaleString(this._hass.language || "de", { minimumFractionDigits: d, maximumFractionDigits: d }); }

  _render(st) {
    const cfg = this._config, S = new Set(cfg.sections || SECTIONS), t = (k) => this._t(k);
    const num = (k) => { const s = st(k); return s && isNum(s.state) ? Number(s.state) : null; };
    const ents = this._ents;
    if (!Object.values(ents).some(Boolean)) {
      this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card><div class="msg">${t("noDevice")}</div></ha-card>`;
      return;
    }
    const on = (k) => st(k)?.state === "on";
    const offline = st("online") && st("online").state === "off";
    const dtgInstalled = INKS.some((c) => st("dtg_" + c)?.attributes?.installed === true);
    const detected = ents.head2 || dtgInstalled ? 2 : 1;
    const heads = cfg.heads === "auto" ? detected : Number(cfg.heads);
    const lines = heads === 1 ? ["uv"] : cfg.ink_line === "UV" ? ["uv"] : cfg.ink_line === "DTG" ? ["dtg"] : ["uv", "dtg"];

    /* Zustand */
    const statusRaw = (st("status")?.state || "").toString();
    const alarm = on("alarm") || /error|alarm|fault/i.test(statusRaw);
    const printing = on("running");
    const state = alarm ? "alarm" : printing ? "printing" : /sleep/i.test(statusRaw) ? "sleep" : "idle";
    const stateTxt = state === "idle" && statusRaw && !/idle|ready/i.test(statusRaw) ? statusRaw : t(state);
    const prog = num("progress");
    const C = 2 * Math.PI * 42, ring = printing && prog !== null ? Math.max(0, Math.min(100, prog)) : 0;
    const last = st("last_finished");
    let lastTxt = "";
    if (last && !isNaN(Date.parse(last.state))) {
      lastTxt = new Date(last.state).toLocaleString(this._hass.language || "de", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    }
    const jobName = st("job")?.state;
    const more = (k) => (ents[k] ? `data-more="${esc(ents[k])}" tabindex="0"` : "");

    const hero = `<section class="sec s-hero"><div class="hero">
      <div class="ring" ${more("progress") || more("status")}><svg viewBox="0 0 100 100"><circle class="trk" cx="50" cy="50" r="42" fill="none" stroke-width="9"/><circle class="val" cx="50" cy="50" r="42" fill="none" stroke-width="9" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - ring / 100)}"/></svg>
      <div class="mid">${printing && prog !== null ? `${Math.round(prog)}%<small>${t("progress")}</small>` : `<span style="color:var(--muted)">—</span><small>${t("noJob")}</small>`}</div></div>
      <div class="hero-txt"><span class="pill" data-s="${state}">${esc(offline ? t("offline") : stateTxt)}</span>
      <div class="job">${esc(jobName && !["unknown", "unavailable"].includes(jobName) ? jobName : "—")}</div>
      <div class="sub">${printing ? t("running") : lastTxt ? `${t("lastDone")}: ${esc(lastTxt)}` : ""}</div></div></div>
      <div class="actions">${ents.home ? `<button class="btn pri" data-press="${esc(ents.home)}">${icon("home")}${t("home")}</button>` : ""}${ents.refresh ? `<button class="btn" data-press="${esc(ents.refresh)}">${icon("refresh")}${t("refresh")}</button>` : ""}</div></section>`;

    const chip = (key, label, type, sub, ico) => ents[key] ? `<div class="chip" data-t="${type}" ${more(key)}>${icon(ico)}<div><b>${label}</b><span>${sub}</span></div></div>` : "";
    const open = (k, l, ico) => chip(k, l, on(k) ? "warn" : "ok", on(k) ? t("open") : t("closed"), ico);
    const safety = `<section class="sec s-safety"><h3>${t("safety")}<span class="pill" data-s="${alarm ? "alarm" : offline ? "" : "ok"}" style="font-size:11px">${alarm ? `${t("alarm")} ${t("active")}` : offline ? t("offline") : t("online")}</span></h3><div class="chips">
      ${open("lid", t("lid"), "lid")}${open("door1", t("door1"), "door")}${open("door2", t("door2"), "door")}
      ${chip("filter", t("filter"), on("filter") ? "ok" : "warn", on("filter") ? t("installed") : t("missing"), "fan")}
      ${chip("alarm", t("alarmL"), alarm ? "bad" : "ok", alarm ? t("active") : t("none"), "alarm")}</div></section>`;

    const metric = (k, label, unit, d = 1) => { const v = num(k); return v === null ? "" : `<div class="m" ${more(k)}><div class="n">${this._fmt(v, d)}<small>${unit}</small></div><div class="l">${label}</div></div>`; };
    const climate = `<section class="sec s-climate"><h3>${t("climate")}</h3><div class="metrics">
      ${metric("temperature", t("room"), "°C")}${metric("humidity", t("humidity"), "%")}
      ${metric("head1", heads === 2 ? t("head1") : t("head"), "°C")}${heads === 2 ? metric("head2", t("head2"), "°C") : ""}</div></section>`;

    const moist = (k, label) => {
      const s = st(k); if (!s) return "";
      const v = num(k), max = Number(s.attributes?.full_ml), ok = s.attributes?.installed !== false && v !== null && v >= 0 && max > 0;
      return `<div class="tank" ${ok ? more(k) : "data-off"}><span class="t">${label}</span><span class="v">${ok ? `${Math.round(v)} / ${Math.round(max)} mL` : t("notInstalled")}</span><div class="meter"><i style="width:${ok ? Math.min(100, (v / max) * 100) : 0}%"></i></div></div>`;
    };
    const wasteS = st("waste"), wasteV = num("waste");
    const tanks = `<section class="sec s-tanks"><h3>${t("tanks")}</h3>${moist("moist1", t("moist1"))}${heads === 2 ? moist("moist2", t("moist2")) : ""}
      ${wasteS ? `<div class="tank" ${wasteS.attributes?.exist === false ? "data-off" : more("waste")}><span class="t">${t("waste")}</span><span class="v">${wasteS.attributes?.exist === false ? t("notInstalled") : `${t("installed")}${wasteV !== null ? ` · ${Math.round(wasteV)} mL` : ""}`}</span></div>` : ""}</section>`;

    const low = Number(cfg.warn_below) || 0;
    const inkItems = (line) => INKS.map((c) => {
      const k = line + "_" + c, s = st(k); if (!s) return null;
      const ml = isNum(s.state) ? Number(s.state) : -1, full = Number(s.attributes?.full_ml);
      const ok = s.attributes?.installed !== false && ml >= 0;
      const pct = ok ? (full > 0 ? (ml / full) * 100 : Number(s.attributes?.percent) || 0) : 0;
      return { k, c, ok, ml, pct: Math.max(0, Math.min(100, pct)), low: ok && pct < low };
    }).filter(Boolean);
    const lbl = (it) => cfg.ink_unit === "percent" ? `${Math.round(it.pct)} %` : cfg.ink_unit === "both" ? `${Math.round(it.ml)} mL · ${Math.round(it.pct)} %` : `${Math.round(it.ml)} mL`;
    const inkBlock = (line, i) => {
      const items = inkItems(line); if (!items.length) return "";
      const installed = items.filter((x) => x.ok).length;
      const body = cfg.ink_style === "bars"
        ? `<div class="ink-bars">${items.map((it) => `<div class="bar-row" style="--c:${INK_META[it.c][1]}" ${it.low ? "data-low" : ""} ${it.ok ? "" : "data-empty"} ${more(it.k)}><span class="ch">${t("ink_" + it.c)}</span><div class="meter"><i style="width:${it.pct}%"></i></div><span class="vv">${it.ok ? lbl(it) : t("notInstalled")}</span></div>`).join("")}</div>`
        : `<div class="ink-tubes">${items.map((it) => `<div class="cart" title="${t("ink_" + it.c)}" ${more(it.k)}><div class="tube" style="--c:${INK_META[it.c][1]}" ${it.low ? "data-low" : ""} ${it.ok ? "" : "data-empty"}><i style="height:${it.pct}%"></i></div><span class="ch">${INK_META[it.c][0]}</span><span class="vv">${it.ok ? (cfg.ink_unit === "both" ? Math.round(it.pct) + " %" : lbl(it).replace(" mL", "")) : "—"}</span></div>`).join("")}</div>`;
      return `<h3 class="sub-h ${i ? "n" : ""}">${t("ink")} · ${line.toUpperCase()}<span class="seg-mini">${heads === 2 ? (line === "uv" ? t("head1s") : t("head2s")) + " · " : ""}${installed}/${items.length}</span></h3>${body}`;
    };
    const inkHtml = lines.map(inkBlock).join("");
    const ink = inkHtml ? `<section class="sec s-ink">${inkHtml}</section>` : "";

    const stat = (k, label, unit, d) => { const v = num(k); return v === null ? "" : `<div class="m" ${more(k)}><div class="n">${this._fmt(v, d)}<small>${unit}</small></div><div class="l">${label}</div></div>`; };
    const stats = `<section class="sec s-stats"><h3>${t("stats")}</h3><div class="stats">${stat("prints", t("prints"), "", 0)}${stat("print_time", t("printTime"), "h", 2)}${stat("uv_lamp", t("uvLamp"), "h", 2)}${stat("air", t("air"), "h", 2)}</div></section>`;

    const PWK = [["pw_power", "W", 1, true], ["pw_current", "A", 2], ["pw_voltage", "V", 0], ["pw_today", "kWh", 2], ["pw_yesterday", "kWh", 2], ["pw_month", "kWh", 2], ["pw_total", "kWh", 2], ["pw_max", "W", 0], ["pw_avg", "W", 0]];
    const pwItems = PWK.map(([k, def, d, big]) => {
      const s = st(k); if (!s) return "";
      const v = isNum(s.state) ? Number(s.state) : null, unit = s.attributes?.unit_of_measurement || def;
      return `<div class="m ${big ? "big" : ""}" ${more(k)}><div class="n">${v === null ? "—" : this._fmt(v, d)}<small>${v === null ? "" : esc(unit)}</small></div><div class="l">${t(k)}</div></div>`;
    }).join("");
    const sw = st("pw_switch");
    const swOn = sw?.state === "on", swOff = sw?.state === "off";
    const powerAll = ["pw_power", "pw_current", "pw_voltage", "pw_today"].map(st).filter(Boolean);
    const unreachable = powerAll.length && powerAll.every((x) => ["unavailable", "unknown"].includes(x.state));
    const power = pwItems || sw ? `<section class="sec s-power"><h3>${t("power")}${sw ? `<button class="pill pw-sw" data-s="${swOn ? "ok" : ""}" data-toggle="${esc(ents.pw_switch)}" title="${t("pw_toggle")}">${swOn ? t("pw_on") : swOff ? t("pw_off") : t("pw_unavail")}</button>` : unreachable ? `<span class="seg-mini">${t("pw_unavail")}</span>` : ""}</h3>
      <div class="metrics pw">${pwItems}</div></section>` : "";

    const side = (S.has("climate") ? climate : "") + (S.has("tanks") ? tanks : "");
    const accent = cfg.accent_color ? `--omni-accent:${esc(cfg.accent_color)};` : "";
    this.shadowRoot.innerHTML = `<style>${STYLE}</style><ha-card>
      <div class="omni" style="${accent}" data-layout="${esc(cfg.layout)}" data-density="${esc(cfg.density)}" ${offline ? "data-offline" : ""}>
      ${cfg.name ? `<div class="title">${esc(cfg.name)}</div>` : ""}
      <div class="grid">${S.has("hero") ? hero : ""}${S.has("safety") ? safety : ""}${S.has("ink") ? ink : ""}${S.has("power") ? power : ""}${side ? `<div class="side">${side}</div>` : ""}${S.has("stats") ? stats : ""}</div></div></ha-card>`;
  }

  _click(e) {
    const press = e.target.closest?.("[data-press]");
    if (press) { this._hass.callService("button", "press", { entity_id: press.dataset.press }); return; }
    const tog = e.target.closest?.("[data-toggle]");
    if (tog) { this._hass.callService("homeassistant", "toggle", { entity_id: tog.dataset.toggle }); return; }
    const more = e.target.closest?.("[data-more]");
    if (more) this.dispatchEvent(new CustomEvent("hass-more-info", { bubbles: true, composed: true, detail: { entityId: more.dataset.more } }));
  }
}

class OmniO1CardEditor extends HTMLElement {
  setConfig(config) { this._config = config; this._render(); }
  set hass(hass) { this._hass = hass; this._render(); }

  _schema() {
    const t = (k) => ((this._hass?.language || "de").startsWith("de") ? I18N.de : I18N.en)[k] ?? k;
    const opts = (arr) => ({ select: { mode: "dropdown", options: arr.map(([value, key]) => ({ value, label: t(key) })) } });
    return [
      { name: "name", selector: { text: {} } },
      { name: "device_id", selector: { device: { integration: "xtool_omni" } } },
      { name: "heads", selector: opts([["auto", "o_auto"], ["1", "o_one"], ["2", "o_two"]]) },
      { type: "grid", name: "", schema: [
        { name: "layout", selector: opts([["auto", "o_auto"], ["stack", "o_stack"]]) },
        { name: "density", selector: opts([["comfortable", "o_comfortable"], ["compact", "o_compact"]]) },
      ] },
      { name: "accent_color", selector: { text: {} } },
      { name: "sections", selector: { select: { multiple: true, mode: "list", options: SECTIONS.map((s) => ({ value: s, label: t("o_" + s) })) } } },
      { type: "expandable", name: "", title: t("e_power"), schema: [
        { name: "power_device_id", selector: { device: {} } },
        ...[["power_entity", "sensor"], ["current_entity", "sensor"], ["voltage_entity", "sensor"], ["energy_today_entity", "sensor"], ["energy_yesterday_entity", "sensor"], ["energy_month_entity", "sensor"], ["energy_total_entity", "sensor"], ["power_switch", "switch"]]
          .map(([name, domain]) => ({ name, selector: { entity: { domain } } })),
      ] },
      { type: "expandable", name: "", title: t("e_ink"), schema: [
        { name: "ink_style", selector: opts([["tubes", "o_tubes"], ["bars", "o_bars"]]) },
        { name: "ink_line", selector: opts([["auto", "o_auto"], ["UV", "UV"], ["DTG", "DTG"]]) },
        { name: "ink_unit", selector: opts([["ml", "mL"], ["percent", "%"], ["both", "o_both"]]) },
        { name: "warn_below", selector: { number: { min: 0, max: 90, step: 1, mode: "slider" } } },
      ] },
    ];
  }

  _render() {
    if (!this._config || !this._hass) return;
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.addEventListener("value-changed", (e) => {
        const value = { ...e.detail.value };
        if (value.heads !== undefined) value.heads = String(value.heads);
        this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: value }, bubbles: true, composed: true }));
      });
      this.appendChild(this._form);
    }
    const t = (k) => (this._hass.language || "de").startsWith("de") ? I18N.de[k] : I18N.en[k];
    const labels = { name: "e_name", device_id: "e_device", heads: "e_heads", layout: "e_layout", density: "e_density", accent_color: "e_accent", sections: "e_sections", ink_style: "e_ink_style", ink_line: "e_ink_line", ink_unit: "e_ink_unit", warn_below: "e_warn", power_device_id: "e_power_device", power_entity: "e_power_entity", current_entity: "e_current_entity", voltage_entity: "e_voltage_entity", energy_today_entity: "e_energy_today_entity", energy_yesterday_entity: "e_energy_yesterday_entity", energy_month_entity: "e_energy_month_entity", energy_total_entity: "e_energy_total_entity", power_switch: "e_power_switch" };
    this._form.hass = this._hass;
    this._form.data = { heads: "auto", layout: "auto", density: "comfortable", ink_style: "tubes", ink_line: "auto", ink_unit: "ml", warn_below: 15, sections: SECTIONS.slice(), ...this._config, heads: String(this._config.heads ?? "auto") };
    this._form.schema = this._schema();
    this._form.computeLabel = (s) => (labels[s.name] ? t(labels[s.name]) : s.name);
  }
}

customElements.define("omni-o1-card", OmniO1Card);
customElements.define("omni-o1-card-editor", OmniO1CardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "omni-o1-card", name: "xTool Omni O1", preview: false,
  description: "Status, Tinte, Tanks, Sicherheit und Statistik für den xTool Omni O1 (ein oder zwei Druckköpfe).",
});
console.info(`%c OMNI-O1-CARD %c v${VERSION} `, "color:#06201d;background:#19b8a6;font-weight:700", "color:#19b8a6;background:#06201d");
