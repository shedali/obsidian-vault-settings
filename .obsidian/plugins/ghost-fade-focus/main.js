/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');
var view = require('@codemirror/view');
var state = require('@codemirror/state');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    enabled: false,
    opacity_1: 0.85,
    opacity_2: 0.7,
    opacity_3: 0.55,
    opacity_4: 0.4,
    opacity_5: 0.25,
    opacity: 0.1,
};
class GhostFocusSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        let { containerEl } = this;
        containerEl.empty();
        this.containerEl.createEl("h1", { text: "Ghost Fade Focus settings" });
        new obsidian.Setting(containerEl)
            .setName("Enable Ghost Fade Focus")
            .setDesc("Toggles the fade; using command palette or shortcut toggles this same value.")
            .addToggle((toggle) => toggle
            .setValue(this.plugin.settings.enabled)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.enabled = value;
            yield this.plugin.saveSettings();
            this.plugin.cssVariablesBasedOnEnabledState();
        })));
        this.containerEl.createEl("h2", { text: "Opacity" });
        this.containerEl.createEl("p", {
            text: "These will change the opacity levels used.",
        });
        let opacityLevel1;
        new obsidian.Setting(containerEl)
            .setName("Opacity - level 1")
            .setDesc("(Default 0.85)")
            .addSlider((slider) => slider
            .setLimits(0.1, 0.9, 0.05)
            .setValue(this.plugin.settings.opacity_1)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            opacityLevel1.innerText = " " + value.toString();
            this.plugin.settings.opacity_1 = value;
            this.plugin.rootElement.style.setProperty("--ghost-fade-focus-opacity-1", `${value}`);
            yield this.plugin.saveSettings();
        })))
            .settingEl.createDiv("", (el) => {
            opacityLevel1 = el;
            el.style.minWidth = "2.0em";
            el.style.textAlign = "right";
            el.innerText = " " + this.plugin.settings.opacity_1.toString();
        });
        let opacityLevel2;
        new obsidian.Setting(containerEl)
            .setName("Opacity - level 2")
            .setDesc("(Default 0.7)")
            .addSlider((slider) => slider
            .setLimits(0.1, 0.9, 0.05)
            .setValue(this.plugin.settings.opacity_2)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            opacityLevel2.innerText = " " + value.toString();
            this.plugin.settings.opacity_2 = value;
            this.plugin.rootElement.style.setProperty("--ghost-fade-focus-opacity-2", `${value}`);
            yield this.plugin.saveSettings();
        })))
            .settingEl.createDiv("", (el) => {
            opacityLevel2 = el;
            el.style.minWidth = "2.0em";
            el.style.textAlign = "right";
            el.innerText = " " + this.plugin.settings.opacity_2.toString();
        });
        let opacityLevel3;
        new obsidian.Setting(containerEl)
            .setName("Opacity - level 3")
            .setDesc("(Default 0.55)")
            .addSlider((slider) => slider
            .setLimits(0.1, 0.9, 0.05)
            .setValue(this.plugin.settings.opacity_3)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            opacityLevel3.innerText = " " + value.toString();
            this.plugin.settings.opacity_3 = value;
            this.plugin.rootElement.style.setProperty("--ghost-fade-focus-opacity-3", `${value}`);
            yield this.plugin.saveSettings();
        })))
            .settingEl.createDiv("", (el) => {
            opacityLevel3 = el;
            el.style.minWidth = "2.0em";
            el.style.textAlign = "right";
            el.innerText = " " + this.plugin.settings.opacity_3.toString();
        });
        let opacityLevel4;
        new obsidian.Setting(containerEl)
            .setName("Opacity - level 4")
            .setDesc("(Default 0.4)")
            .addSlider((slider) => slider
            .setLimits(0.1, 0.9, 0.05)
            .setValue(this.plugin.settings.opacity_4)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            opacityLevel4.innerText = " " + value.toString();
            this.plugin.settings.opacity_4 = value;
            this.plugin.rootElement.style.setProperty("--ghost-fade-focus-opacity-4", `${value}`);
            yield this.plugin.saveSettings();
        })))
            .settingEl.createDiv("", (el) => {
            opacityLevel4 = el;
            el.style.minWidth = "2.0em";
            el.style.textAlign = "right";
            el.innerText = " " + this.plugin.settings.opacity_4.toString();
        });
        let opacityLevel5;
        new obsidian.Setting(containerEl)
            .setName("Opacity - level 5")
            .setDesc("(Default 0.25)")
            .addSlider((slider) => slider
            .setLimits(0.1, 0.9, 0.05)
            .setValue(this.plugin.settings.opacity_5)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            opacityLevel5.innerText = " " + value.toString();
            this.plugin.settings.opacity_5 = value;
            this.plugin.rootElement.style.setProperty("--ghost-fade-focus-opacity-5", `${value}`);
            yield this.plugin.saveSettings();
        })))
            .settingEl.createDiv("", (el) => {
            opacityLevel5 = el;
            el.style.minWidth = "2.0em";
            el.style.textAlign = "right";
            el.innerText = " " + this.plugin.settings.opacity_5.toString();
        });
        let opacityLevel;
        new obsidian.Setting(containerEl)
            .setName("Opacity level outside of 5 steps")
            .setDesc("(Default 0.1)")
            .addSlider((slider) => slider
            .setLimits(0.1, 0.9, 0.05)
            .setValue(this.plugin.settings.opacity)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            opacityLevel.innerText = " " + value.toString();
            this.plugin.settings.opacity = value;
            this.plugin.rootElement.style.setProperty("--ghost-fade-focus-opacity", `${value}`);
            yield this.plugin.saveSettings();
        })))
            .settingEl.createDiv("", (el) => {
            opacityLevel = el;
            el.style.minWidth = "2.0em";
            el.style.textAlign = "right";
            el.innerText = " " + this.plugin.settings.opacity.toString();
        });
    }
}

class GhostFocusPlugin extends obsidian.Plugin {
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign(DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    addCSSVariables() {
        this.rootElement = document.documentElement;
        this.rootElement.style.setProperty("--ghost-fade-focus-opacity-1", `${this.settings.opacity_1}`);
        this.rootElement.style.setProperty("--ghost-fade-focus-opacity-2", `${this.settings.opacity_2}`);
        this.rootElement.style.setProperty("--ghost-fade-focus-opacity-3", `${this.settings.opacity_3}`);
        this.rootElement.style.setProperty("--ghost-fade-focus-opacity-4", `${this.settings.opacity_4}`);
        this.rootElement.style.setProperty("--ghost-fade-focus-opacity-5", `${this.settings.opacity_5}`);
        this.rootElement.style.setProperty("--ghost-fade-focus-opacity", `${this.settings.opacity}`);
    }
    removeCSSVariables() {
        this.rootElement = document.documentElement;
        this.rootElement.style.removeProperty("--ghost-fade-focus-opacity-1");
        this.rootElement.style.removeProperty("--ghost-fade-focus-opacity-2");
        this.rootElement.style.removeProperty("--ghost-fade-focus-opacity-3");
        this.rootElement.style.removeProperty("--ghost-fade-focus-opacity-4");
        this.rootElement.style.removeProperty("--ghost-fade-focus-opacity-5");
        this.rootElement.style.removeProperty("--ghost-fade-focus-opacity");
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.addSettingTab(new GhostFocusSettingTab(this.app, this));
            this.addCommand({
                id: "toggle-plugin",
                name: "Toggle plugin on/off",
                checkCallback: (checking) => {
                    const mdView = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView);
                    if (mdView && mdView.getMode() === "source") {
                        if (!checking) {
                            this.settings.enabled = !this.settings.enabled;
                            this.saveSettings();
                            this.cssVariablesBasedOnEnabledState();
                        }
                        return true;
                    }
                    return false;
                },
            });
            const baseTheme = view.EditorView.baseTheme({});
            const fadedLines = () => {
                return [baseTheme, [], showFadedLines];
            };
            const showFadedLines = view.ViewPlugin.fromClass(class {
                constructor(view) {
                    this.decorations = fadedLineDeco(view);
                }
                update(update) {
                    if (update.docChanged ||
                        update.viewportChanged ||
                        update.selectionSet) {
                        this.decorations = fadedLineDeco(update.view);
                    }
                }
            }, {
                decorations: (v) => v.decorations,
            });
            const fadedLine = (index) => view.Decoration.line({
                attributes: {
                    class: `ghost-fade-focus--${index}`,
                },
            });
            const fadedLineOther = () => view.Decoration.line({
                attributes: {
                    class: `ghost-fade-focus`,
                },
            });
            const fadedLineDeco = (view) => {
                const cursorPos = view.state.selection.main.head;
                const cursorPosLine = view.state.doc.lineAt(cursorPos).number;
                let builder = new state.RangeSetBuilder();
                for (let { from, to } of view.visibleRanges) {
                    for (let pos = from; pos <= to;) {
                        let line = view.state.doc.lineAt(pos);
                        if (line.number >= cursorPosLine - 5 &&
                            line.number <= cursorPosLine + 5) {
                            builder.add(line.from, line.from, fadedLine(Math.abs(line.number - cursorPosLine)));
                        }
                        else {
                            builder.add(line.from, line.from, fadedLineOther());
                        }
                        pos = line.to + 1;
                    }
                }
                return builder.finish();
            };
            this.registerEditorExtension(fadedLines());
            this.cssVariablesBasedOnEnabledState();
        });
    }
    cssVariablesBasedOnEnabledState() {
        if (this.settings.enabled) {
            this.addCSSVariables();
        }
        else {
            this.removeCSSVariables();
        }
    }
}

module.exports = GhostFocusPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9zZXR0aW5ncy50cyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6WyJQbHVnaW5TZXR0aW5nVGFiIiwiU2V0dGluZyIsIlBsdWdpbiIsIk1hcmtkb3duVmlldyIsIkVkaXRvclZpZXciLCJWaWV3UGx1Z2luIiwiRGVjb3JhdGlvbiIsIlJhbmdlU2V0QnVpbGRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtB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
