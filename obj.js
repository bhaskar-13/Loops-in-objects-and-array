<!DOCTYPE html>
<!-- saved from url=(0023)https://www.guvi.in/ide -->
<html lang="en"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension><grammarly-extension data-grammarly-shadow-root="true" style="mix-blend-mode: darken; position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style id="autocompletion.css">.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #CAD6FA;    z-index: 1;}.ace_dark.ace_editor.ace_autocomplete .ace_marker-layer .ace_active-line {    background-color: #3a674e;}.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid #abbffe;    margin-top: -1px;    background: rgba(233,233,253,0.4);    position: absolute;    z-index: 2;}.ace_dark.ace_editor.ace_autocomplete .ace_line-hover {    border: 1px solid rgba(109, 150, 13, 0.8);    background: rgba(58, 103, 78, 0.62);}.ace_completion-meta {    opacity: 0.5;    margin: 0.9em;}.ace_completion-message {    color: blue;}.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #2d69c7;}.ace_dark.ace_editor.ace_autocomplete .ace_completion-highlight{    color: #93ca12;}.ace_editor.ace_autocomplete {    width: 300px;    z-index: 200000;    border: 1px lightgray solid;    position: fixed;    box-shadow: 2px 3px 5px rgba(0,0,0,.2);    line-height: 1.4;    background: #fefefe;    color: #111;}.ace_dark.ace_editor.ace_autocomplete {    border: 1px #484747 solid;    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.51);    line-height: 1.4;    background: #25282c;    color: #c1c1c1;}
/*# sourceURL=ace/css/autocompletion.css */</style><style>.ace_snippet-marker {    -moz-box-sizing: border-box;    box-sizing: border-box;    background: rgba(194, 193, 208, 0.09);    border: 1px dotted rgba(211, 208, 235, 0.62);    position: absolute;}</style><style id="ace-monokai">.ace-monokai .ace_gutter {background: #2F3129;color: #8F908A}.ace-monokai .ace_print-margin {width: 1px;background: #555651}.ace-monokai {background-color: #272822;color: #F8F8F2}.ace-monokai .ace_cursor {color: #F8F8F0}.ace-monokai .ace_marker-layer .ace_selection {background: #49483E}.ace-monokai.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #272822;}.ace-monokai .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-monokai .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #49483E}.ace-monokai .ace_marker-layer .ace_active-line {background: #202020}.ace-monokai .ace_gutter-active-line {background-color: #272727}.ace-monokai .ace_marker-layer .ace_selected-word {border: 1px solid #49483E}.ace-monokai .ace_invisible {color: #52524d}.ace-monokai .ace_entity.ace_name.ace_tag,.ace-monokai .ace_keyword,.ace-monokai .ace_meta.ace_tag,.ace-monokai .ace_storage {color: #F92672}.ace-monokai .ace_punctuation,.ace-monokai .ace_punctuation.ace_tag {color: #fff}.ace-monokai .ace_constant.ace_character,.ace-monokai .ace_constant.ace_language,.ace-monokai .ace_constant.ace_numeric,.ace-monokai .ace_constant.ace_other {color: #AE81FF}.ace-monokai .ace_invalid {color: #F8F8F0;background-color: #F92672}.ace-monokai .ace_invalid.ace_deprecated {color: #F8F8F0;background-color: #AE81FF}.ace-monokai .ace_support.ace_constant,.ace-monokai .ace_support.ace_function {color: #66D9EF}.ace-monokai .ace_fold {background-color: #A6E22E;border-color: #F8F8F2}.ace-monokai .ace_storage.ace_type,.ace-monokai .ace_support.ace_class,.ace-monokai .ace_support.ace_type {font-style: italic;color: #66D9EF}.ace-monokai .ace_entity.ace_name.ace_function,.ace-monokai .ace_entity.ace_other,.ace-monokai .ace_entity.ace_other.ace_attribute-name,.ace-monokai .ace_variable {color: #A6E22E}.ace-monokai .ace_variable.ace_parameter {font-style: italic;color: #FD971F}.ace-monokai .ace_string {color: #E6DB74}.ace-monokai .ace_comment {color: #75715E}.ace-monokai .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y}
/*# sourceURL=ace/css/ace-monokai */</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}
/*# sourceURL=ace/css/ace-tm */</style><style id="ace_editor.css">.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}
/*# sourceURL=ace/css/ace_editor.css */</style>

<meta name="viewport" content="width=device-width, shrink-to-fit=no">
<title>GUVI | IDE | Free Online Compiler with more that 20+ on demand programming languages</title>
<meta name="description" content="Free Online Compiler to run your programs online. It support more than 20+ on demand programming languages. BASH, BASIC, C, CLOJURE, CRYSTAL, C++, C#, ELIXIR, GO, HASKELL, INSECT, JAVA, JAVA 8, JAVASCRIPT, OCAML, OCTAVE, PASCAL, PYTHON 2, PYTHON 3, RUBY, RUST are the supported programming languages">
<meta name="keywords" content="online ide, online compiler, run code online, online debugging tool, online interpreter, free online compiler, BASH, BASIC, C, CLOJURE, CRYSTAL, C++, C#, ELIXIR, GO, HASKELL, INSECT, JAVA, JAVA 8, JAVASCRIPT, OCAML, OCTAVE, PASCAL, PYTHON 2, PYTHON 3, RUBY, RUST">

<link rel="icon" href="https://www.guvi.in/images/favicon.ico" type="image/x-icon">
<link href="./obj_files/icon" rel="stylesheet">
<link href="./obj_files/css" rel="stylesheet">
<link href="./obj_files/4.css" rel="stylesheet">
<link href="./obj_files/stylev2.css" rel="stylesheet">
<link href="./obj_files/guviv2.css" rel="stylesheet">
<link href="./obj_files/ide.css" rel="stylesheet">
<script type="text/javascript" async="" src="./obj_files/recaptcha__en.js.download" crossorigin="anonymous" integrity="sha384-cOazIJF2cwen9PJSk2VFUMw8IAvgfITpWastzSU1OHy8/qJeuuSBpbPJYjfInJ8U"></script><script defer="" type="text/javascript" src="./obj_files/embed.bundle.js.download" charset="utf-8"></script>
<script defer="" type="text/javascript" src="./obj_files/dependency.js.download"></script>
<script defer="" type="text/javascript" src="./obj_files/steroid.js.download"></script>
<script defer="" src="./obj_files/muuri.min.js.download"></script>
<script defer="" src="./obj_files/ace.js.download" type="text/javascript"></script>
<script defer="" src="./obj_files/split.min.js.download"></script>
<script defer="" type="text/javascript" src="./obj_files/sidebar.js.download"></script>
<style type="text/css">/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.css, accordion.css, autocomplete.css, button.css, datepicker.css, dialog.css, draggable.css, menu.css, progressbar.css, resizable.css, selectable.css, selectmenu.css, slider.css, sortable.css, spinner.css, tabs.css, tooltip.css, theme.css
* To view and modify this theme, visit http://jqueryui.com/themeroller/?ffDefault=Trebuchet%20MS%2CTahoma%2CVerdana%2CArial%2Csans-serif&fwDefault=bold&fsDefault=1.1em&cornerRadius=4px&bgColorHeader=f6a828&bgTextureHeader=gloss_wave&bgImgOpacityHeader=35&borderColorHeader=e78f08&fcHeader=ffffff&iconColorHeader=ffffff&bgColorContent=eeeeee&bgTextureContent=highlight_soft&bgImgOpacityContent=100&borderColorContent=dddddd&fcContent=333333&iconColorContent=222222&bgColorDefault=f6f6f6&bgTextureDefault=glass&bgImgOpacityDefault=100&borderColorDefault=cccccc&fcDefault=1c94c4&iconColorDefault=ef8c08&bgColorHover=fdf5ce&bgTextureHover=glass&bgImgOpacityHover=100&borderColorHover=fbcb09&fcHover=c77405&iconColorHover=ef8c08&bgColorActive=ffffff&bgTextureActive=glass&bgImgOpacityActive=65&borderColorActive=fbd850&fcActive=eb8f00&iconColorActive=ef8c08&bgColorHighlight=ffe45c&bgTextureHighlight=highlight_soft&bgImgOpacityHighlight=75&borderColorHighlight=fed22f&fcHighlight=363636&iconColorHighlight=228ef1&bgColorError=b81900&bgTextureError=diagonals_thick&bgImgOpacityError=18&borderColorError=cd0a0a&fcError=ffffff&iconColorError=ffd27a&bgColorOverlay=666666&bgTextureOverlay=diagonals_thick&bgImgOpacityOverlay=20&opacityOverlay=50&bgColorShadow=000000&bgTextureShadow=flat&bgImgOpacityShadow=10&opacityShadow=20&thicknessShadow=5px&offsetTopShadow=-5px&offsetLeftShadow=-5px&cornerRadiusShadow=5px
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden {
	display: none;
}
.ui-helper-hidden-accessible {
	border: 0;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
}
.ui-helper-reset {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	line-height: 1.3;
	text-decoration: none;
	font-size: 100%;
	list-style: none;
}
.ui-helper-clearfix:before,
.ui-helper-clearfix:after {
	content: "";
	display: table;
	border-collapse: collapse;
}
.ui-helper-clearfix:after {
	clear: both;
}
.ui-helper-clearfix {
	min-height: 0; /* support: IE7 */
}
.ui-helper-zfix {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	position: absolute;
	opacity: 0;
	filter:Alpha(Opacity=0); /* support: IE8 */
}

.ui-front {
	z-index: 100;
}


/* Interaction Cues
----------------------------------*/
.ui-state-disabled {
	cursor: default !important;
}


/* Icons
----------------------------------*/

/* states and images */
.ui-icon {
	display: block;
	text-indent: -99999px;
	overflow: hidden;
	background-repeat: no-repeat;
}


/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.ui-accordion .ui-accordion-header {
	display: block;
	cursor: pointer;
	position: relative;
	margin: 2px 0 0 0;
	padding: .5em .5em .5em .7em;
	min-height: 0; /* support: IE7 */
	font-size: 100%;
}
.ui-accordion .ui-accordion-icons {
	padding-left: 2.2em;
}
.ui-accordion .ui-accordion-icons .ui-accordion-icons {
	padding-left: 2.2em;
}
.ui-accordion .ui-accordion-header .ui-accordion-header-icon {
	position: absolute;
	left: .5em;
	top: 50%;
	margin-top: -8px;
}
.ui-accordion .ui-accordion-content {
	padding: 1em 2.2em;
	border-top: 0;
	overflow: auto;
}
.ui-autocomplete {
	position: absolute;
	top: 0;
	left: 0;
	cursor: default;
}
.ui-button {
	display: inline-block;
	position: relative;
	padding: 0;
	line-height: normal;
	margin-right: .1em;
	cursor: pointer;
	vertical-align: middle;
	text-align: center;
	overflow: visible; /* removes extra width in IE */
}
.ui-button,
.ui-button:link,
.ui-button:visited,
.ui-button:hover,
.ui-button:active {
	text-decoration: none;
}
/* to make room for the icon, a width needs to be set here */
.ui-button-icon-only {
	width: 2.2em;
}
/* button elements seem to need a little more width */
button.ui-button-icon-only {
	width: 2.4em;
}
.ui-button-icons-only {
	width: 3.4em;
}
button.ui-button-icons-only {
	width: 3.7em;
}

/* button text element */
.ui-button .ui-button-text {
	display: block;
	line-height: normal;
}
.ui-button-text-only .ui-button-text {
	padding: .4em 1em;
}
.ui-button-icon-only .ui-button-text,
.ui-button-icons-only .ui-button-text {
	padding: .4em;
	text-indent: -9999999px;
}
.ui-button-text-icon-primary .ui-button-text,
.ui-button-text-icons .ui-button-text {
	padding: .4em 1em .4em 2.1em;
}
.ui-button-text-icon-secondary .ui-button-text,
.ui-button-text-icons .ui-button-text {
	padding: .4em 2.1em .4em 1em;
}
.ui-button-text-icons .ui-button-text {
	padding-left: 2.1em;
	padding-right: 2.1em;
}
/* no icon support for input elements, provide padding by default */
input.ui-button {
	padding: .4em 1em;
}

/* button icon element(s) */
.ui-button-icon-only .ui-icon,
.ui-button-text-icon-primary .ui-icon,
.ui-button-text-icon-secondary .ui-icon,
.ui-button-text-icons .ui-icon,
.ui-button-icons-only .ui-icon {
	position: absolute;
	top: 50%;
	margin-top: -8px;
}
.ui-button-icon-only .ui-icon {
	left: 50%;
	margin-left: -8px;
}
.ui-button-text-icon-primary .ui-button-icon-primary,
.ui-button-text-icons .ui-button-icon-primary,
.ui-button-icons-only .ui-button-icon-primary {
	left: .5em;
}
.ui-button-text-icon-secondary .ui-button-icon-secondary,
.ui-button-text-icons .ui-button-icon-secondary,
.ui-button-icons-only .ui-button-icon-secondary {
	right: .5em;
}

/* button sets */
.ui-buttonset {
	margin-right: 7px;
}
.ui-buttonset .ui-button {
	margin-left: 0;
	margin-right: -.3em;
}

/* workarounds */
/* reset extra padding in Firefox, see h5bp.com/l */
input.ui-button::-moz-focus-inner,
button.ui-button::-moz-focus-inner {
	border: 0;
	padding: 0;
}
.ui-datepicker {
	width: 17em;
	padding: .2em .2em 0;
	display: none;
}
.ui-datepicker .ui-datepicker-header {
	position: relative;
	padding: .2em 0;
}
.ui-datepicker .ui-datepicker-prev,
.ui-datepicker .ui-datepicker-next {
	position: absolute;
	top: 2px;
	width: 1.8em;
	height: 1.8em;
}
.ui-datepicker .ui-datepicker-prev-hover,
.ui-datepicker .ui-datepicker-next-hover {
	top: 1px;
}
.ui-datepicker .ui-datepicker-prev {
	left: 2px;
}
.ui-datepicker .ui-datepicker-next {
	right: 2px;
}
.ui-datepicker .ui-datepicker-prev-hover {
	left: 1px;
}
.ui-datepicker .ui-datepicker-next-hover {
	right: 1px;
}
.ui-datepicker .ui-datepicker-prev span,
.ui-datepicker .ui-datepicker-next span {
	display: block;
	position: absolute;
	left: 50%;
	margin-left: -8px;
	top: 50%;
	margin-top: -8px;
}
.ui-datepicker .ui-datepicker-title {
	margin: 0 2.3em;
	line-height: 1.8em;
	text-align: center;
}
.ui-datepicker .ui-datepicker-title select {
	font-size: 1em;
	margin: 1px 0;
}
.ui-datepicker select.ui-datepicker-month,
.ui-datepicker select.ui-datepicker-year {
	width: 45%;
}
.ui-datepicker table {
	width: 100%;
	font-size: .9em;
	border-collapse: collapse;
	margin: 0 0 .4em;
}
.ui-datepicker th {
	padding: .7em .3em;
	text-align: center;
	font-weight: bold;
	border: 0;
}
.ui-datepicker td {
	border: 0;
	padding: 1px;
}
.ui-datepicker td span,
.ui-datepicker td a {
	display: block;
	padding: .2em;
	text-align: right;
	text-decoration: none;
}
.ui-datepicker .ui-datepicker-buttonpane {
	background-image: none;
	margin: .7em 0 0 0;
	padding: 0 .2em;
	border-left: 0;
	border-right: 0;
	border-bottom: 0;
}
.ui-datepicker .ui-datepicker-buttonpane button {
	float: right;
	margin: .5em .2em .4em;
	cursor: pointer;
	padding: .2em .6em .3em .6em;
	width: auto;
	overflow: visible;
}
.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {
	float: left;
}

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi {
	width: auto;
}
.ui-datepicker-multi .ui-datepicker-group {
	float: left;
}
.ui-datepicker-multi .ui-datepicker-group table {
	width: 95%;
	margin: 0 auto .4em;
}
.ui-datepicker-multi-2 .ui-datepicker-group {
	width: 50%;
}
.ui-datepicker-multi-3 .ui-datepicker-group {
	width: 33.3%;
}
.ui-datepicker-multi-4 .ui-datepicker-group {
	width: 25%;
}
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,
.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {
	border-left-width: 0;
}
.ui-datepicker-multi .ui-datepicker-buttonpane {
	clear: left;
}
.ui-datepicker-row-break {
	clear: both;
	width: 100%;
	font-size: 0;
}

/* RTL support */
.ui-datepicker-rtl {
	direction: rtl;
}
.ui-datepicker-rtl .ui-datepicker-prev {
	right: 2px;
	left: auto;
}
.ui-datepicker-rtl .ui-datepicker-next {
	left: 2px;
	right: auto;
}
.ui-datepicker-rtl .ui-datepicker-prev:hover {
	right: 1px;
	left: auto;
}
.ui-datepicker-rtl .ui-datepicker-next:hover {
	left: 1px;
	right: auto;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane {
	clear: right;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane button {
	float: left;
}
.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,
.ui-datepicker-rtl .ui-datepicker-group {
	float: right;
}
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,
.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {
	border-right-width: 0;
	border-left-width: 1px;
}
.ui-dialog {
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	padding: .2em;
	outline: 0;
}
.ui-dialog .ui-dialog-titlebar {
	padding: .4em 1em;
	position: relative;
}
.ui-dialog .ui-dialog-title {
	float: left;
	margin: .1em 0;
	white-space: nowrap;
	width: 90%;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui-dialog .ui-dialog-titlebar-close {
	position: absolute;
	right: .3em;
	top: 50%;
	width: 20px;
	margin: -10px 0 0 0;
	padding: 1px;
	height: 20px;
}
.ui-dialog .ui-dialog-content {
	position: relative;
	border: 0;
	padding: .5em 1em;
	background: none;
	overflow: auto;
}
.ui-dialog .ui-dialog-buttonpane {
	text-align: left;
	border-width: 1px 0 0 0;
	background-image: none;
	margin-top: .5em;
	padding: .3em 1em .5em .4em;
}
.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {
	float: right;
}
.ui-dialog .ui-dialog-buttonpane button {
	margin: .5em .4em .5em 0;
	cursor: pointer;
}
.ui-dialog .ui-resizable-se {
	width: 12px;
	height: 12px;
	right: -5px;
	bottom: -5px;
	background-position: 16px 16px;
}
.ui-draggable .ui-dialog-titlebar {
	cursor: move;
}
.ui-draggable-handle {
	-ms-touch-action: none;
	touch-action: none;
}
.ui-menu {
	list-style: none;
	padding: 0;
	margin: 0;
	display: block;
	outline: none;
}
.ui-menu .ui-menu {
	position: absolute;
}
.ui-menu .ui-menu-item {
	position: relative;
	margin: 0;
	padding: 3px 1em 3px .4em;
	cursor: pointer;
	min-height: 0; /* support: IE7 */
	/* support: IE10, see #8844 */
	list-style-image: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
}
.ui-menu .ui-menu-divider {
	margin: 5px 0;
	height: 0;
	font-size: 0;
	line-height: 0;
	border-width: 1px 0 0 0;
}
.ui-menu .ui-state-focus,
.ui-menu .ui-state-active {
	margin: -1px;
}

/* icon support */
.ui-menu-icons {
	position: relative;
}
.ui-menu-icons .ui-menu-item {
	padding-left: 2em;
}

/* left-aligned */
.ui-menu .ui-icon {
	position: absolute;
	top: 0;
	bottom: 0;
	left: .2em;
	margin: auto 0;
}

/* right-aligned */
.ui-menu .ui-menu-icon {
	left: auto;
	right: 0;
}
.ui-progressbar {
	height: 2em;
	text-align: left;
	overflow: hidden;
}
.ui-progressbar .ui-progressbar-value {
	margin: -1px;
	height: 100%;
}
.ui-progressbar .ui-progressbar-overlay {
	background: url("data:image/gif;base64,R0lGODlhKAAoAIABAAAAAP///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAQABACwAAAAAKAAoAAACkYwNqXrdC52DS06a7MFZI+4FHBCKoDeWKXqymPqGqxvJrXZbMx7Ttc+w9XgU2FB3lOyQRWET2IFGiU9m1frDVpxZZc6bfHwv4c1YXP6k1Vdy292Fb6UkuvFtXpvWSzA+HycXJHUXiGYIiMg2R6W459gnWGfHNdjIqDWVqemH2ekpObkpOlppWUqZiqr6edqqWQAAIfkECQEAAQAsAAAAACgAKAAAApSMgZnGfaqcg1E2uuzDmmHUBR8Qil95hiPKqWn3aqtLsS18y7G1SzNeowWBENtQd+T1JktP05nzPTdJZlR6vUxNWWjV+vUWhWNkWFwxl9VpZRedYcflIOLafaa28XdsH/ynlcc1uPVDZxQIR0K25+cICCmoqCe5mGhZOfeYSUh5yJcJyrkZWWpaR8doJ2o4NYq62lAAACH5BAkBAAEALAAAAAAoACgAAAKVDI4Yy22ZnINRNqosw0Bv7i1gyHUkFj7oSaWlu3ovC8GxNso5fluz3qLVhBVeT/Lz7ZTHyxL5dDalQWPVOsQWtRnuwXaFTj9jVVh8pma9JjZ4zYSj5ZOyma7uuolffh+IR5aW97cHuBUXKGKXlKjn+DiHWMcYJah4N0lYCMlJOXipGRr5qdgoSTrqWSq6WFl2ypoaUAAAIfkECQEAAQAsAAAAACgAKAAAApaEb6HLgd/iO7FNWtcFWe+ufODGjRfoiJ2akShbueb0wtI50zm02pbvwfWEMWBQ1zKGlLIhskiEPm9R6vRXxV4ZzWT2yHOGpWMyorblKlNp8HmHEb/lCXjcW7bmtXP8Xt229OVWR1fod2eWqNfHuMjXCPkIGNileOiImVmCOEmoSfn3yXlJWmoHGhqp6ilYuWYpmTqKUgAAIfkECQEAAQAsAAAAACgAKAAAApiEH6kb58biQ3FNWtMFWW3eNVcojuFGfqnZqSebuS06w5V80/X02pKe8zFwP6EFWOT1lDFk8rGERh1TTNOocQ61Hm4Xm2VexUHpzjymViHrFbiELsefVrn6XKfnt2Q9G/+Xdie499XHd2g4h7ioOGhXGJboGAnXSBnoBwKYyfioubZJ2Hn0RuRZaflZOil56Zp6iioKSXpUAAAh+QQJAQABACwAAAAAKAAoAAACkoQRqRvnxuI7kU1a1UU5bd5tnSeOZXhmn5lWK3qNTWvRdQxP8qvaC+/yaYQzXO7BMvaUEmJRd3TsiMAgswmNYrSgZdYrTX6tSHGZO73ezuAw2uxuQ+BbeZfMxsexY35+/Qe4J1inV0g4x3WHuMhIl2jXOKT2Q+VU5fgoSUI52VfZyfkJGkha6jmY+aaYdirq+lQAACH5BAkBAAEALAAAAAAoACgAAAKWBIKpYe0L3YNKToqswUlvznigd4wiR4KhZrKt9Upqip61i9E3vMvxRdHlbEFiEXfk9YARYxOZZD6VQ2pUunBmtRXo1Lf8hMVVcNl8JafV38aM2/Fu5V16Bn63r6xt97j09+MXSFi4BniGFae3hzbH9+hYBzkpuUh5aZmHuanZOZgIuvbGiNeomCnaxxap2upaCZsq+1kAACH5BAkBAAEALAAAAAAoACgAAAKXjI8By5zf4kOxTVrXNVlv1X0d8IGZGKLnNpYtm8Lr9cqVeuOSvfOW79D9aDHizNhDJidFZhNydEahOaDH6nomtJjp1tutKoNWkvA6JqfRVLHU/QUfau9l2x7G54d1fl995xcIGAdXqMfBNadoYrhH+Mg2KBlpVpbluCiXmMnZ2Sh4GBqJ+ckIOqqJ6LmKSllZmsoq6wpQAAAh+QQJAQABACwAAAAAKAAoAAAClYx/oLvoxuJDkU1a1YUZbJ59nSd2ZXhWqbRa2/gF8Gu2DY3iqs7yrq+xBYEkYvFSM8aSSObE+ZgRl1BHFZNr7pRCavZ5BW2142hY3AN/zWtsmf12p9XxxFl2lpLn1rseztfXZjdIWIf2s5dItwjYKBgo9yg5pHgzJXTEeGlZuenpyPmpGQoKOWkYmSpaSnqKileI2FAAACH5BAkBAAEALAAAAAAoACgAAAKVjB+gu+jG4kORTVrVhRlsnn2dJ3ZleFaptFrb+CXmO9OozeL5VfP99HvAWhpiUdcwkpBH3825AwYdU8xTqlLGhtCosArKMpvfa1mMRae9VvWZfeB2XfPkeLmm18lUcBj+p5dnN8jXZ3YIGEhYuOUn45aoCDkp16hl5IjYJvjWKcnoGQpqyPlpOhr3aElaqrq56Bq7VAAAOw==");
	height: 100%;
	filter: alpha(opacity=25); /* support: IE8 */
	opacity: 0.25;
}
.ui-progressbar-indeterminate .ui-progressbar-value {
	background-image: none;
}
.ui-resizable {
	position: relative;
}
.ui-resizable-handle {
	position: absolute;
	font-size: 0.1px;
	display: block;
	-ms-touch-action: none;
	touch-action: none;
}
.ui-resizable-disabled .ui-resizable-handle,
.ui-resizable-autohide .ui-resizable-handle {
	display: none;
}
.ui-resizable-n {
	cursor: n-resize;
	height: 7px;
	width: 100%;
	top: -5px;
	left: 0;
}
.ui-resizable-s {
	cursor: s-resize;
	height: 7px;
	width: 100%;
	bottom: -5px;
	left: 0;
}
.ui-resizable-e {
	cursor: e-resize;
	width: 7px;
	right: -5px;
	top: 0;
	height: 100%;
}
.ui-resizable-w {
	cursor: w-resize;
	width: 7px;
	left: -5px;
	top: 0;
	height: 100%;
}
.ui-resizable-se {
	cursor: se-resize;
	width: 12px;
	height: 12px;
	right: 1px;
	bottom: 1px;
}
.ui-resizable-sw {
	cursor: sw-resize;
	width: 9px;
	height: 9px;
	left: -5px;
	bottom: -5px;
}
.ui-resizable-nw {
	cursor: nw-resize;
	width: 9px;
	height: 9px;
	left: -5px;
	top: -5px;
}
.ui-resizable-ne {
	cursor: ne-resize;
	width: 9px;
	height: 9px;
	right: -5px;
	top: -5px;
}
.ui-selectable {
	-ms-touch-action: none;
	touch-action: none;
}
.ui-selectable-helper {
	position: absolute;
	z-index: 100;
	border: 1px dotted black;
}
.ui-selectmenu-menu {
	padding: 0;
	margin: 0;
	position: absolute;
	top: 0;
	left: 0;
	display: none;
}
.ui-selectmenu-menu .ui-menu {
	overflow: auto;
	/* Support: IE7 */
	overflow-x: hidden;
	padding-bottom: 1px;
}
.ui-selectmenu-menu .ui-menu .ui-selectmenu-optgroup {
	font-size: 1em;
	font-weight: bold;
	line-height: 1.5;
	padding: 2px 0.4em;
	margin: 0.5em 0 0 0;
	height: auto;
	border: 0;
}
.ui-selectmenu-open {
	display: block;
}
.ui-selectmenu-button {
	display: inline-block;
	overflow: hidden;
	position: relative;
	text-decoration: none;
	cursor: pointer;
}
.ui-selectmenu-button span.ui-icon {
	right: 0.5em;
	left: auto;
	margin-top: -8px;
	position: absolute;
	top: 50%;
}
.ui-selectmenu-button span.ui-selectmenu-text {
	text-align: left;
	padding: 0.4em 2.1em 0.4em 1em;
	display: block;
	line-height: 1.4;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.ui-slider {
	position: relative;
	text-align: left;
}
.ui-slider .ui-slider-handle {
	position: absolute;
	z-index: 2;
	width: 1.2em;
	height: 1.2em;
	cursor: default;
	-ms-touch-action: none;
	touch-action: none;
}
.ui-slider .ui-slider-range {
	position: absolute;
	z-index: 1;
	font-size: .7em;
	display: block;
	border: 0;
	background-position: 0 0;
}

/* support: IE8 - See #6727 */
.ui-slider.ui-state-disabled .ui-slider-handle,
.ui-slider.ui-state-disabled .ui-slider-range {
	filter: inherit;
}

.ui-slider-horizontal {
	height: .8em;
}
.ui-slider-horizontal .ui-slider-handle {
	top: -.3em;
	margin-left: -.6em;
}
.ui-slider-horizontal .ui-slider-range {
	top: 0;
	height: 100%;
}
.ui-slider-horizontal .ui-slider-range-min {
	left: 0;
}
.ui-slider-horizontal .ui-slider-range-max {
	right: 0;
}

.ui-slider-vertical {
	width: .8em;
	height: 100px;
}
.ui-slider-vertical .ui-slider-handle {
	left: -.3em;
	margin-left: 0;
	margin-bottom: -.6em;
}
.ui-slider-vertical .ui-slider-range {
	left: 0;
	width: 100%;
}
.ui-slider-vertical .ui-slider-range-min {
	bottom: 0;
}
.ui-slider-vertical .ui-slider-range-max {
	top: 0;
}
.ui-sortable-handle {
	-ms-touch-action: none;
	touch-action: none;
}
.ui-spinner {
	position: relative;
	display: inline-block;
	overflow: hidden;
	padding: 0;
	vertical-align: middle;
}
.ui-spinner-input {
	border: none;
	background: none;
	color: inherit;
	padding: 0;
	margin: .2em 0;
	vertical-align: middle;
	margin-left: .4em;
	margin-right: 22px;
}
.ui-spinner-button {
	width: 16px;
	height: 50%;
	font-size: .5em;
	padding: 0;
	margin: 0;
	text-align: center;
	position: absolute;
	cursor: default;
	display: block;
	overflow: hidden;
	right: 0;
}
/* more specificity required here to override default borders */
.ui-spinner a.ui-spinner-button {
	border-top: none;
	border-bottom: none;
	border-right: none;
}
/* vertically center icon */
.ui-spinner .ui-icon {
	position: absolute;
	margin-top: -8px;
	top: 50%;
	left: 0;
}
.ui-spinner-up {
	top: 0;
}
.ui-spinner-down {
	bottom: 0;
}

/* TR overrides */
.ui-spinner .ui-icon-triangle-1-s {
	/* need to fix icons sprite */
	background-position: -65px -16px;
}
.ui-tabs {
	position: relative;/* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as "fixed") */
	padding: .2em;
}
.ui-tabs .ui-tabs-nav {
	margin: 0;
	padding: .2em .2em 0;
}
.ui-tabs .ui-tabs-nav li {
	list-style: none;
	float: left;
	position: relative;
	top: 0;
	margin: 1px .2em 0 0;
	border-bottom-width: 0;
	padding: 0;
	white-space: nowrap;
}
.ui-tabs .ui-tabs-nav .ui-tabs-anchor {
	float: left;
	padding: .5em 1em;
	text-decoration: none;
}
.ui-tabs .ui-tabs-nav li.ui-tabs-active {
	margin-bottom: -1px;
	padding-bottom: 1px;
}
.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,
.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,
.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor {
	cursor: text;
}
.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor {
	cursor: pointer;
}
.ui-tabs .ui-tabs-panel {
	display: block;
	border-width: 0;
	padding: 1em 1.4em;
	background: none;
}
.ui-tooltip {
	padding: 8px;
	position: absolute;
	z-index: 9999;
	max-width: 300px;
	-webkit-box-shadow: 0 0 5px #aaa;
	box-shadow: 0 0 5px #aaa;
}
body .ui-tooltip {
	border-width: 2px;
}

/* Component containers
----------------------------------*/
.ui-widget {
	font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;
	font-size: 1.1em;
}
.ui-widget .ui-widget {
	font-size: 1em;
}
.ui-widget input,
.ui-widget select,
.ui-widget textarea,
.ui-widget button {
	font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;
	font-size: 1em;
}
.ui-widget-content {
	border: 1px solid #dddddd;
	background: #eeeeee url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkEAAAAAAy19n/AAAAAmJLR0T//xSrMc0AAAAJcEhZcwAAAEgAAABIAEbJaz4AAABYSURBVBjTxcK9DUBAAIDRjxk0dBQaE4gR7KFVM4rEDBIjEKVV7s79OZ0teHk8FR/NCAehJ6TcK3eD3/EtbsPV2AVbYmZMgh7RMdfAFaEmVIE8kR0yR4gfv1IulNTJHsTLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE1LTAzLTExVDA4OjQ5OjM0LTA3OjAwnOkHBQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNS0wMy0xMVQwODo0OTozNC0wNzowMO20v7kAAAAASUVORK5CYII=) 50% top repeat-x;
	color: #333333;
}
.ui-widget-content a {
	color: #333333;
}
.ui-widget-header {
	border: 1px solid #e78f08;
	background: #f6a828 url(data:image/png;base64,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) 50% 50% repeat-x;
	color: #ffffff;
	font-weight: bold;
}
.ui-widget-header a {
	color: #ffffff;
}

/* Interaction states
----------------------------------*/
.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default {
	border: 1px solid #cccccc;
	background: #f6f6f6 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQEAAAAAAao4lEAAAAAmJLR0T//xSrMc0AAAAJcEhZcwAAAEgAAABIAEbJaz4AAABISURBVDjLY/g1mWEUjSKqo2/fGL5LMXzPYfh+nOGHFsOPBQw/xRh+TmX4JcLwq4vhNwPD71yG3xcZ/igx/Ilk+JM0ikYRMQgA8pJH3iOhTlAAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDMtMTFUMDg6NDk6MzQtMDc6MDCc6QcFAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAzLTExVDA4OjQ5OjM0LTA3OjAw7bS/uQAAAABJRU5ErkJggg==) 50% 50% repeat-x;
	font-weight: bold;
	color: #1c94c4;
}
.ui-state-default a,
.ui-state-default a:link,
.ui-state-default a:visited {
	color: #1c94c4;
	text-decoration: none;
}
.ui-state-hover,
.ui-widget-content .ui-state-hover,
.ui-widget-header .ui-state-hover,
.ui-state-focus,
.ui-widget-content .ui-state-focus,
.ui-widget-header .ui-state-focus {
	border: 1px solid #fbcb09;
	background: #fdf5ce url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQEAIAAACwqkHPAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAmklEQVRIx+3PPwsBARgH4N/7s0gmXZSuKMvNdl/AV2A1X1ltzBaf5UazEp3RpKujFMV0uT/dy6cQwzs98wPdZVk8IwAAhmEYxrdBWSZJGFKq4smGaGDENeFgwgfREp8d6Ph1OEZEWxaVOXSVRieHcGXJALrNnvEQes6nlz20yO9Xl9IUn128e0VwS4k6BvQIoob+X6QNwzB+yAca/jJVRVy4gQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wMy0xMVQwODo0OTozNS0wNzowMDqeDLEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDMtMTFUMDg6NDk6MzUtMDc6MDBLw7QNAAAAAElFTkSuQmCC) 50% 50% repeat-x;
	font-weight: bold;
	color: #c77405;
}
.ui-state-hover a,
.ui-state-hover a:hover,
.ui-state-hover a:link,
.ui-state-hover a:visited,
.ui-state-focus a,
.ui-state-focus a:hover,
.ui-state-focus a:link,
.ui-state-focus a:visited {
	color: #c77405;
	text-decoration: none;
}
.ui-state-active,
.ui-widget-content .ui-state-active,
.ui-widget-header .ui-state-active {
	border: 1px solid #fbd850;
	background: #ffffff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAGQAQAAAABHIzd2AAAAAmJLR0QAAd2KE6QAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAARSURBVCjPY2hgGIWjcBTigACVaMgB0zSxaQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wMy0xMVQwODo0OTozNC0wNzowMJzpBwUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDMtMTFUMDg6NDk6MzQtMDc6MDDttL+5AAAAAElFTkSuQmCC) 50% 50% repeat-x;
	font-weight: bold;
	color: #eb8f00;
}
.ui-state-active a,
.ui-state-active a:link,
.ui-state-active a:visited {
	color: #eb8f00;
	text-decoration: none;
}

/* Interaction Cues
----------------------------------*/
.ui-state-highlight,
.ui-widget-content .ui-state-highlight,
.ui-widget-header .ui-state-highlight {
	border: 1px solid #fed22f;
	background: #ffe45c url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAABkEAIAAACY3hF0AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAhklEQVQoz+WQMQrCUBBEH1NaCzaxTc7iHcwhcoiktP6kS8BK8BIWHkYQrM1mLD5Bb6Bg9Xg7syws9mNztADgj3CjFbifk4A+0od1UWDfr2kloJkGgZsYBdRTKfB+qgTOtgzrqHJWCtg9T++9pdnEIHAb22yjwPk6XRQCzvNa4IsP3//ST+MF5uU/iXGyfBoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDMtMTFUMDg6NDk6MzUtMDc6MDA6ngyxAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAzLTExVDA4OjQ5OjM1LTA3OjAwS8O0DQAAAABJRU5ErkJggg==) 50% top repeat-x;
	color: #363636;
}
.ui-state-highlight a,
.ui-widget-content .ui-state-highlight a,
.ui-widget-header .ui-state-highlight a {
	color: #363636;
}
.ui-state-error,
.ui-widget-content .ui-state-error,
.ui-widget-header .ui-state-error {
	border: 1px solid #cd0a0a;
	background: #b81900 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoEAIAAABTDPN5AAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAA4ElEQVRo3u3YMQoCMRBG4c02XkCQLcXKwsN5Eq+znScRa8FasLP4q0DGZASLecmr0mSHr9tMuh5Pr91+MnpfnofHfXK2OW9v9jdb+t/cuR+qCaZSC2A2NQP3QFVpXZfFfy0iVc3eC3GpmusAR6fq3ARmUJvAJGoFzKOaYCq1AGZTM3APVJW+v5ZIVOX+8YhL1dwfwRGpOrvBcalucHSqA8ygNoFJ1AqYRzXBVGoBzKZm4B6oauy0uNSx06JTm8AkagXMo5pgKrUAZlMzcA9UNXZaXOrYadGpbnB0qgPMoKoPsn/eaLRwj54AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDMtMTFUMDg6NDk6MzUtMDc6MDA6ngyxAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAzLTExVDA4OjQ5OjM1LTA3OjAwS8O0DQAAAABJRU5ErkJggg==) 50% 50% repeat;
	color: #ffffff;
}
.ui-state-error a,
.ui-widget-content .ui-state-error a,
.ui-widget-header .ui-state-error a {
	color: #ffffff;
}
.ui-state-error-text,
.ui-widget-content .ui-state-error-text,
.ui-widget-header .ui-state-error-text {
	color: #ffffff;
}
.ui-priority-primary,
.ui-widget-content .ui-priority-primary,
.ui-widget-header .ui-priority-primary {
	font-weight: bold;
}
.ui-priority-secondary,
.ui-widget-content .ui-priority-secondary,
.ui-widget-header .ui-priority-secondary {
	opacity: .7;
	filter:Alpha(Opacity=70); /* support: IE8 */
	font-weight: normal;
}
.ui-state-disabled,
.ui-widget-content .ui-state-disabled,
.ui-widget-header .ui-state-disabled {
	opacity: .35;
	filter:Alpha(Opacity=35); /* support: IE8 */
	background-image: none;
}
.ui-state-disabled .ui-icon {
	filter:Alpha(Opacity=35); /* support: IE8 - See #6059 */
}

/* Icons
----------------------------------*/

/* states and images */
.ui-icon {
	width: 16px;
	height: 16px;
}
.ui-icon,
.ui-widget-content .ui-icon {
	background-image: url(data:image/png;base64,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);
}
.ui-widget-header .ui-icon {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADwCAQAAABFnnJAAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAEgAAABIAEbJaz4AABe4SURBVHja7V1diCXHdf56vbZmVl6nxwKFO2yyq1mM4qAwM7oDsR6C7iYIKesH3V1QHgyBu5YYJwHjrB9NQCuByIthHbAga6TZxeBgHMJKISZ+SDIb1oQgRtoVgtjGyD8PmSGQMIpfJmCLk4f+q6o+daq6+965P1VfM3Pv7VN16ud8Vd1dp6o6IUSEjBPTzkDEdBEJEDgiAXT0QOhNOxPHiUgAFT3sA9gPiQLjJsD0208Pbe9rM/OvwkaBQvP0yzhG6ASQO0AqDwmu9mOPT3nqPWsYV9qFEduVIDP/QU4BSfMC9REqAcbRAa520FDELdphc3SJCyRIcADgAAkSQXOXMs4ckrIxFEUs2oENBNSqR0WmJ2kVv2hltvRdaVPHvPtqdpVxjlD1AHIH6AupDbovH1nqkgllLd3apnQJUjV362dmDEnjOya5FUltsEqqbdtxa5Dbppx3uQ+sNLv6mblCcwLIoKlXTQ/7rQkmX4IKzdMv4xgxbgLMO3rYXyTzuhEJEDjiSGDgiAQIHJEAgSMSIHBEAgSOSIDAEQkQOOJ8ADPutPN/zGgyH8BvRoDLGdMT5wPIKbjN02U+gNsdnuV9oUjSbD6AnwdMrkK7gVYt3311u8zv0r5vfNq1L8xsgPp8gAz20fAilORvs8tdsX3mA0i5k1N3x5dBue7icyGgzwfgvus48OoF+DDu9ukzH0Bqf355s9OHnLMNmqQ0F2jjDJIcrrM+H0Ail6v/KUoe3cECpl85XecDTDv/x4zoDg4ccSAocEQCBI5IgMARCRA4IgECRyRA4IgECBwnp52BmQNNcZS/+1hp4/yf7BZ9IpUwzRyQMwftXUHumFMouX4JIED09fvsD0AtJE3RNg1X/jPTJ6IWNznaxvYrgU+oBnFPaAFcxU88CmCPn3hUkE8RSHD2+OQvEWT6Z7M0Com7BuQSygQiR2zA1Yi1/KuXAN/i22bruCspGUMHT6In0nUV7ZIDKmMnrFRNnUulaF72PJAgl3VXpZObgZrLBGh6E0gerccVyoed7dq4n3ETD+2SgXz0tq0BqQn66HbXQU3e5DGw6uJ8QvEyuQt0M1jW4epi/bpoVwtype5zE9kWboq75VoOTHdw6E8B851+i8fIOB8gcMSRwMARCRA4IgECRyRA4IgECByRAIEjEiBw6ItDi81Spwf3fuCThE8N+HhE28VzrY32TaURKgIUC6N8tntvVwHjQztdrpz71YC01Wzljes1jp35KYvDXoZe6xogI5cA+MWh8hJOH492jzk3PgrYdPltDWHPv18N2NLoGctre41iVyVw9UDdlqbXFujqQ8E+26m7lmDbFoj6zaRx58Cmx72FuzvnfhvS8z63umkTQ+5aWF4Zh1ufSJpm2WFsc1gn9TBNCeBfAUmDuH45kKvQJ3332n57+q7YLgK460A2oJsAMoEsBGj2FFBVQBuPVaLo4LWT9iml3wZVvtveQ0ipr+bS4grO7yAgpV/E5O8BXJqrvRuk9c1mLhvOB5AqQL+BkYovZ04qoqRDLZp72hdnAjcBpRIcGBtIHDTW4AfJvAfla2/8commlwA/XzU5t4iQr4JdYvtVL18Ov2tw9yltkp72L7Vx3wOwiPMBVPScb0xaOEQCBI44FBw4IgECRyRA4IgECByRAIEjEmDcmLPHKnM+gAuSv8qn6L2O/u5Jo3vuEsdg94yVvT4fQILkMfcZJSw8dqseC0zt6Lq4Sl4enjiXv7oNbIsvaZ8SqoEgNVvu3X7rg43q0sh2b//2HWgGJI+dK3ZiDaeetXk7pcWj5CX1L+mxgL8HsE06kP1V1aWhzaSFrOW4p03Z9zAg+Pr6kgZnuXS59N0rm2cS5vsCqips+gZu8xKSNIhbSP2WQLsXb7ffQkIyo6uH8Ncs7RFwzKh6ANVR2CZrrjcJuJ2tXa+OidKD8D2E/smFGE8r5lLQe48ZMb9+CTgoM8V14FkHn0334nEgzgfw8fa7t4eQUc0F4KdUyFVfXYTsu4sUIZOGUjVE2wk1EwHvDSRrB+7jLLXdBI7D2eo3a7HtjabPTSQAB0Fnxrg+iO5gHTPTNR8XIgECRxwKDhyRAIEjEiBwRAIEjkiAwDF7BEhny1u26DAJ4OfLllw25CW1hUhxeCxP4tPeB2Fm0Gy7eJ/tpBOsdMjPIQqSpGK4tlvWV1igN4B3gU4AeZRaHu0uWnWKQ5YCVA6U8mv3sq5/pQxxaIlffGu3qbra+/i9an7BURFA3+69jsofbtsyPUGSm/8DNi25a8+6/g+wIqydLVLn09dnFJha/LaPCA7FULDf6nYJxVwbm/nNuThmL+L6LZ2tS8xw5vYR0lvOg4I6JSxB3Uwm7FMZ/CZE2CeVmQSyTcngc+jaPkEn+IK9Ar4LqhdGqFVm32DE/dYL39dK2OQZBah2H1E4gvld+fX8+Lw2IgIAtz+A38r1ul/evUONJM1uHuUQurbE61wB9w5CgcL/hRH6rNjq+7hhv4voBv/tI4LCrM0HmJT5IyyYNQJEHDNmzxcQcayIBAgckQCBIxIgcCwSAfqlJ6A/Ef0nsZQfzd63OtPICDDMK24Xw9aaXnZ4+l0g3NBmCzQ1Yh975fc9Nna/Ez1O4ld4FEc4wqP4FUuBvjP3a7l0zZKGXe6KCTxnHHIKxtwOoqs0oAENSUUVtjo/JFgOKj+3tbhqCF57doyor8lHmrRPJvqN5HoOudytGfHXDPkSrRPREi0R0TotCTXAp1GHVEP+EjXEtncZyxAFk+8BAO5YJnPcxpdxD0CK2+W5O7hgZeMXLCOKy+W3o5rsJr4htL89ZBtLZNgHYU9LYQ9bSg8AbBlyN95Xcpfl0Ix/H8t4EEAf942wej6BLUbim5suL5+XsYb3y++lpoIA9/NPdRqGmuV7AH6EI3G2z1L+ecMa4qNC7Ct4D9uC/JLmSr6kUDHD2woFtvC2ISWoizP5FYYfxS/K759g8/AgPoEEp4RcXhRkpkeSl/MvoE4YLc0IXpj/D/DP6unqWnboUPAjHNXC6FnICLAiaLO1G8DVAwBvlRQgXMJbTIiCAnXzZ0iNz3rufl3M6Qb+G38I4B+xwcZ/GygpxOdgK++p9N7qOFCY/4+wrFPA936WM3+9AgG5o8razk9ZmasHKCgAi/mRpw7rTd5549PEEn6efzvLSB/Eu9jAfQAbeBcP4f8MuTkLqe0yU3dH7wrxOfxN7Vxm/i/gQQD/AADFBdz/MbBufrOAp3AKp7CMU9ZO8gE8gAcAcC3spsP8QA9v4RIu4S3LdM4+DjDEEAct7/OX8Vv5sVzLXw9nQPgFNrCBEyCcEaeUblmMf075s2EJLrhCfIs5l5H+Bj6G7wAALuBOJmj/RFsv4rIzzg+FkK4eoIcDIG/7B0z19zU5R4HfMD7NKspayQayOyK9n3gY9wH8pPx9HxvCjKIuHfxRxxD8hNmf5OXL7s9K86N8DEwdj1HuR5iXNfnL1scV+2PMjQk+BhYPSdWnLRd95hGQe4hzPeg1fQwGjayl9wmhlpDXXzwEDtSzs+MO7gP4HeX3e5YbqcmCAJxXWvr4tWeYztSUNbyvtX7E+QDBY5F8AREtEAkQOCIBAkckQOCIBFgsvIJXmkXQCZCC4FqYbQeVjoyujxZ9cB71LeXxte5vGxqPvUNDvm3IuUEn1Vu+NgE5APylo34GGLSut9P4Cr6C045QI4wwKn8pdZISUZ/6RJTWBhF2aSkfRrhG6zRkh0Fu5AMR23TDkMuebPPos+G3FE82EdEWOxBSHPX47oGcLMw6rdP6hORFmGxQx5QMqBiQS83hmtw6RNuEvHQpo/suERHdFWu3GEwa0TkCQU+gn4+h1dUT9RqNg3FyENGf5X9XrRXUp2wCSt+iH5YUXAYmAv07ge4R6N+InzJBtJ5L1gU5RPlpWqLTFnlR/SMaNa7BAtusfLsWe5tNf0hEI0qrkUTVHVw4Kfew1WqjFnWuAO85fAL7+DF+gJ/jPYtPsI89XMIbVpduF/wTfhffwwa+hyfwL9ZQ2Vj6hijXxyx1/LLmJ6wwwk0AyP/X6+9Q+8WDn21x1uMMAHwJwEp+eUzxAcoe4IYxmt6nG417ALWDs/UAV4noL4joFbaF9InY1j+uHuBvCfRdAn2Llpj0H3X0AIUcotzeA4y03JmXgIGS6wyDRuX7qib7KlOD5+hcPXUziX5OhHr1j4MAn6HfpM/R+fyvifn1WXE2AqRElFKaXy9N+XeI6Nv539/V5EX5bNfwSv64Q87Hr6692XG+IQFMd10q1JDsatLOmwrUT122RENCyaEBE0ImQN1f18T8ZvFkAvDys/Rdeph26WH6e/q0IV+t5W5trPLK/LAeuolTUW6T3s1vBE35iIpr/25bAsBxUJ6N1DM8b+C+Vb5lVDD3FJCWRecJYidghsccuesih8P8Pi73ggIpI3uKPsxv/LbpQ3qKIcBVGtXj+ibvNqh+H8rfg0qTlmXzmxTYqkld07plORFRz2GcLvKR0/yux8CKAqkl9nPl9+dqsa09kK87eB3v+gWM6IgBoHvsx4QRAOCWeTrOBwgc0RcQOCIBAkckQOCIBAgc4REgcxsPGMmgfDZ61EOPbTfFOburVgmwXlbAemt9NLUqSEHYyb/vwDar4Vq+qHS3RoHfxy4u4zI+hU/hh/h0LWZWO1fzX9mepeq+55v4LAhP4AkQPovNWnx5+4ph7cF+6JC7QgxraRgjQObZdSLapSEN6ZAqpwc34CENZpAzRPtjlOdrnR1UybBDoB1rLorhkHPsUNep8vgYOxa6Q8M8B5meAZO+fRyv8FKklmEw+UwVO7XoycYa+7k3B0z51BjrxXc1QDZKvENEh1YjTpMAxVgWn0Zh9uqzruGaONZ5gj5CCSX0ETrBGmRIIKJB6dPncicTQPWHmCuXMm9Iv6zjOgGgzaKoEyDTul2OyXIEOEOr+cEQYJhX4w4748dFAHJWgdu4cvx1Rcb1UDuKnDN/KuonSspjjUn9eh5rlx9SpWz3kOLgCWBPn8oZV7wGKn2cQwKdYwkAhQB8n7JOm7RZ+isZAuzkVcdP+XIxXA7RTMoTyOVTk1p/NeMpw8CQf5uI1vKD6DqjYVC6bLn0iU53IsBD+dmHyv9m7KL/GhLROUsPYK+/PhGdoTO0Smdok4iuZefV9wV8gBQ38fn8FknecR9OubSbuFvKpbBe7mOSrdE38U38cfn9+/g9TZYqM56AK/UxcazjS8qvl/EzIfWslszyrwD4EADwS2aDGcKKNs/KfMHFI9p5ws8MuT5f6Ca+bMzayrbwzybL7jHb+RMeB/BfAID/VGpX62APaUhD2qXZvAksWh+fxjfL1p/hrhG3n7f71Kp/s2w759jUd+gqUd4Odxh59vmQ5UbPnGhjtt/H6DHjv9x/NL8HGFKfNmmTNolos34JUK+xNvPP/lPAXSrmxnLVM3CksEPbtM1Op0IeO6MQRwESfpln12ohhrUOfGjEPFc7mt0DEA3Lw0IA31Y4LQLIR6q0+rtkes2z1uFTOlv+s57lkFIqbieTWtzP02eoJ9QSEZT7DF22lD8FZP/NbejqBDEpMhSlaum0MkZ3sIqH8BKAF/E/rHSEFdzM32aQ4n/xa9qbDVz3SIC+meUk5j23QCRA4AjPFxChIRIgcEQCBA6TAEPrfuEXcau8obwlbokaMU/QHhRuExHRbeYB5ou1h5AvTuVhLx5jPtQfz5TGfcYIdlF7eixwkVG4R0R71uR+6jkgA48Qx3/sKfTfm3puJkCA21T4nMw+4DWWAK8xCuWBoNowhNX8HEncy6tcIVxyor1yuGiPlfvlf46O6uszmoH1PsCGpgQAgV24WTd/vZ9Q19byBnSFGBHR07RET1s1+JVuQQmQXf8Lr7PeB+gFl6phm2zLwlTz7zKSQfnJXyZcxkFu+DQnAid/Ov/2tKBhT0hjgQkwIBOqAfwJwHfeuqZ7jEeuiGczvy8BUrL3MVSOsNf99RXsBOgT0R7t0R75+BXm5DArwPzelACuozBS3fyZ2W3mn4UeYIFvAqv2nyp+58oMX2cJ8HVGoasHsB1qD8THn/49gJuCc3hwRasX8ilW+hSj0FU5dqnU+nUDj1qH6PoUkIWZutHGT4A91sBqFTxfkz5vNeNASFCiR9ve43iPBSOAvzv4SQzx5/n3r+EN/Ou0xzCnhLbvAppRxPkAgSN6AwNHJEDgiAQIHJEAgSMSIHBEApgYgFpL5xAqAYjZNkEHYVyvhJgWbgjvNgeAAXZbS+cTxigd0a4wGqd6A0xJES+1ahjQbu4IGtCuoAGEfHmTLt/WNLVx1w4cg80Dj9hFDdi1zNXBV5/NhBIB1Hj1ah6UcQb5CntZg50Atvg+BJCksqOnLl2QIWFbIflpHS4CZCasfutSEErjuTTYCGCP7yZAUxPbpfwGDHN58DeBd3AB32hxPbmDC7iAbJ3cBWXMPFHOXhB3wi002OCKfzxYJG9AjeWLfA/gOgK8B1CdQYQ7eElsX5Szv/icL6hPLrbcZ/f57aRziegNNDHArmBiWTqHiAQIHHEkMHBEAgSOSIDAEQkQOCIBAodJAFJeLB4RACoCpPlWqWdx1rLXfjZ0dM0ijZhLFARIcVhuDvMIDlkjb+ACvoYXcejxQglzeGHbGIHcPmZ5hA15je0Q0V8RiOhFyvbFtY0ep+JewtWovOt3/1jl8bAchVGJ7hEI9CINCHSPbG+n3qFzlDllU6tSfqfapXw79dP5n7nT7WmSNlwv5CTKl8q/pdYOocCOkwCA8wDeBAC8BAB4Exs4X9vKdAObuIkreASXcIgruN6oq/mk0ukkqI9Afzz/S8Avvzqd/30S/ObyHwewkstXFmu8fpLIfAEpDnFfedHRPWxgRdsJt0CKQ9zBBezgClvJlO9UX9+t/re13/9h7JU7aXmEDXlXsEvVoukR8Zu4ZL7w7H0VtpfK2ObL6O8Wr883mrQ8Hpaj8AZm78O4jzfxLDbAv5Gjmg1wAWDcomrrX7A1tIuLyh28jmv5g+AbuBZfFh8K4nyAwBF9AYEjEiBwRAIEjkiAwFERwPU+gK7yJ3G9lF/Hk8cun3T5pi1vi1yn630AXeWubeYmLZ90+aYtb31kHxeJQ/U+gK5y10aTk5ZPunzTlnc4skvA5bJDSJQRvMvMNxWm/IU8boIXDPmzin4wZ5/l1FvkSYv4l9n4XPlc5Vfz3zz+20iUELb4klzNBW+VhsgGgqrRoKT2S5dzGSnkCYDnAbyunRmffp/4bv1qiKbxE/ALzKjBb1K01OV/AgD4a2v9FWc38Q7GskhNJYD+Lup6Blxy4AW8DuB5vCZWsK2C3PoTVpuvAdz6ZQJ0r5+kPN9O/jjeUcw/FgKc7K5CwYfK/+YgZ48gQ12O3kZDony2iU8ecV1usj8VZI/jnmb+sWDcl4ARgFtofwno3sXb81fX0K4Ll/T79SCuHsqW/uO4p5l/DD1AdhP4Kit7lfkmyZ8HcBM382+q/HUlFjFnX1ekLjlEOVi5nn+qnX1Vk7jkbeunKB+1lr+jmZ9PtSmCeAyb9mPopOWdxwEWfyBm2gNRk5Z3JgDoSbpeKr9OT9aCdpVfpFul/BYziDFp+aTLN215yyNOCAkc0RsYOCIBAkckQOCIBAgckQCBIxIgcKjOoLrTUcesyyNaQPcGLpffjtjQXeURM4f6JaCb6Y6cGrq13KSzhggNJgFcBjzCkShfxpHSD9ThMqA6JYoDtfT1R1hgEmAZEA24jGVRfoRlkSAEecJE7qGwIq47HjPql4DlFlr02LKGbu3XRaCIhtDfF6BJamFnXR7RAtEbGDjiQFDgiAQIHJEAgSMSIHBEAgSOSIDAMb8E6MUBoXFAJ0D3cTZCH4T+xPPdwz5WJ55KANAJsJr/TRuu1p2Z/2Da2VwE6ATYz/+mC1frjuYfI3x7AEKv9tcMzKokFpl57TQszB/vAcYCfUbQPhLss26WhPlrhi2vUIX5V0X5QbwHGBd0Akg9wGppmuKvWSe8VztTJ1FP0c9RTDd/vAiMAbPUA0TzTwG+PUB3uN/f0cz8PUu4iEbw7QGOA1Lvwpk/3gOMAfqEkB4O0JvJzpXyTt/8jOiIOCMocMyvLyBiLPh/gj9Qphd3t8gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDMtMTFUMDg6NDc6MTEtMDc6MDCSPR9sAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAzLTExVDA3OjU5OjM1LTA3OjAwrT2++AAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=);
}
.ui-state-default .ui-icon {
	background-image: url(data:image/png;base64,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);
}
.ui-state-hover .ui-icon,
.ui-state-focus .ui-icon {
	background-image: url(data:image/png;base64,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);
}
.ui-state-active .ui-icon {
	background-image: url(data:image/png;base64,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);
}
.ui-state-highlight .ui-icon {
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADwCAMAAADYSUr5AAABDlBMVEUijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEijvEzfqCuAAAAWXRSTlMAGRAzBAhQv4KZLyJVcUBmYBoTMswNITwWQkhLIB5aIycxUyyFNIeAw2rIz8Y4RRy8uL58q7WljKqorR+yKf0BnlEk7woGAgOPomKUSqCvbd+cR2M/b3+RaPlAXvEAAAABYktHRACIBR1IAAAACXBIWXMAAABIAAAASABGyWs+AAAPZElEQVR42u1dC2PbthEGyUiq6ZiSXblLE6ex1mTO5iXZq+u6ro3abG26pOkSd13v//+RAXzhcIeHWMoUbeOTLesIEMB9PIB3ACgLERERMQIkkOy6CTvWH0bOQO/mJeDXP8EMqMzDEkIsEBRMAmh7jHSVmuAjAKwC8FRAzi8/DmoS1AI5AQltj5FOryAjgJ7OK2CZkwEZYO23q+BJ5wwKkttfui1z4s20VTAL5k2kF5hbiPcKcwvwNGB4C7CTwproI4CdDcxEPKUTExx+DNiAj0u9C9AuNPxdYOe46Y5QRERERERExIhx6Z7gjv2ghEVrQJ33hJ5BsxsBfsIq8M0HsAkhWfqglFgawAhgGWh2M1xMWAWUAE90qUofMhhi7be32JNsmVFJPKeLwBQglAQMNh3ALVjYbNaI1jaYD0jM0nw9atcWYEXiaXH/+QDeQ3Y6BoRx3e8CERERERERERG7Qz/HP+iaBsvvHXj0LAD4cip0yN27fXw7AGtQoDTwH+HqkWTgWczTwZVmr8DbAEuqv35bCT6CWDorjGnAqwOSCI7EhlFWHjkBXIkb1M/DZQgRwCeAwK9B+HRPFlPBOjeZ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);
}
.ui-state-error .ui-icon,
.ui-state-error-text .ui-icon {
	background-image: url(data:image/png;base64,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);
}

/* positioning */
.ui-icon-blank { background-position: 16px 16px; }
.ui-icon-carat-1-n { background-position: 0 0; }
.ui-icon-carat-1-ne { background-position: -16px 0; }
.ui-icon-carat-1-e { background-position: -32px 0; }
.ui-icon-carat-1-se { background-position: -48px 0; }
.ui-icon-carat-1-s { background-position: -64px 0; }
.ui-icon-carat-1-sw { background-position: -80px 0; }
.ui-icon-carat-1-w { background-position: -96px 0; }
.ui-icon-carat-1-nw { background-position: -112px 0; }
.ui-icon-carat-2-n-s { background-position: -128px 0; }
.ui-icon-carat-2-e-w { background-position: -144px 0; }
.ui-icon-triangle-1-n { background-position: 0 -16px; }
.ui-icon-triangle-1-ne { background-position: -16px -16px; }
.ui-icon-triangle-1-e { background-position: -32px -16px; }
.ui-icon-triangle-1-se { background-position: -48px -16px; }
.ui-icon-triangle-1-s { background-position: -64px -16px; }
.ui-icon-triangle-1-sw { background-position: -80px -16px; }
.ui-icon-triangle-1-w { background-position: -96px -16px; }
.ui-icon-triangle-1-nw { background-position: -112px -16px; }
.ui-icon-triangle-2-n-s { background-position: -128px -16px; }
.ui-icon-triangle-2-e-w { background-position: -144px -16px; }
.ui-icon-arrow-1-n { background-position: 0 -32px; }
.ui-icon-arrow-1-ne { background-position: -16px -32px; }
.ui-icon-arrow-1-e { background-position: -32px -32px; }
.ui-icon-arrow-1-se { background-position: -48px -32px; }
.ui-icon-arrow-1-s { background-position: -64px -32px; }
.ui-icon-arrow-1-sw { background-position: -80px -32px; }
.ui-icon-arrow-1-w { background-position: -96px -32px; }
.ui-icon-arrow-1-nw { background-position: -112px -32px; }
.ui-icon-arrow-2-n-s { background-position: -128px -32px; }
.ui-icon-arrow-2-ne-sw { background-position: -144px -32px; }
.ui-icon-arrow-2-e-w { background-position: -160px -32px; }
.ui-icon-arrow-2-se-nw { background-position: -176px -32px; }
.ui-icon-arrowstop-1-n { background-position: -192px -32px; }
.ui-icon-arrowstop-1-e { background-position: -208px -32px; }
.ui-icon-arrowstop-1-s { background-position: -224px -32px; }
.ui-icon-arrowstop-1-w { background-position: -240px -32px; }
.ui-icon-arrowthick-1-n { background-position: 0 -48px; }
.ui-icon-arrowthick-1-ne { background-position: -16px -48px; }
.ui-icon-arrowthick-1-e { background-position: -32px -48px; }
.ui-icon-arrowthick-1-se { background-position: -48px -48px; }
.ui-icon-arrowthick-1-s { background-position: -64px -48px; }
.ui-icon-arrowthick-1-sw { background-position: -80px -48px; }
.ui-icon-arrowthick-1-w { background-position: -96px -48px; }
.ui-icon-arrowthick-1-nw { background-position: -112px -48px; }
.ui-icon-arrowthick-2-n-s { background-position: -128px -48px; }
.ui-icon-arrowthick-2-ne-sw { background-position: -144px -48px; }
.ui-icon-arrowthick-2-e-w { background-position: -160px -48px; }
.ui-icon-arrowthick-2-se-nw { background-position: -176px -48px; }
.ui-icon-arrowthickstop-1-n { background-position: -192px -48px; }
.ui-icon-arrowthickstop-1-e { background-position: -208px -48px; }
.ui-icon-arrowthickstop-1-s { background-position: -224px -48px; }
.ui-icon-arrowthickstop-1-w { background-position: -240px -48px; }
.ui-icon-arrowreturnthick-1-w { background-position: 0 -64px; }
.ui-icon-arrowreturnthick-1-n { background-position: -16px -64px; }
.ui-icon-arrowreturnthick-1-e { background-position: -32px -64px; }
.ui-icon-arrowreturnthick-1-s { background-position: -48px -64px; }
.ui-icon-arrowreturn-1-w { background-position: -64px -64px; }
.ui-icon-arrowreturn-1-n { background-position: -80px -64px; }
.ui-icon-arrowreturn-1-e { background-position: -96px -64px; }
.ui-icon-arrowreturn-1-s { background-position: -112px -64px; }
.ui-icon-arrowrefresh-1-w { background-position: -128px -64px; }
.ui-icon-arrowrefresh-1-n { background-position: -144px -64px; }
.ui-icon-arrowrefresh-1-e { background-position: -160px -64px; }
.ui-icon-arrowrefresh-1-s { background-position: -176px -64px; }
.ui-icon-arrow-4 { background-position: 0 -80px; }
.ui-icon-arrow-4-diag { background-position: -16px -80px; }
.ui-icon-extlink { background-position: -32px -80px; }
.ui-icon-newwin { background-position: -48px -80px; }
.ui-icon-refresh { background-position: -64px -80px; }
.ui-icon-shuffle { background-position: -80px -80px; }
.ui-icon-transfer-e-w { background-position: -96px -80px; }
.ui-icon-transferthick-e-w { background-position: -112px -80px; }
.ui-icon-folder-collapsed { background-position: 0 -96px; }
.ui-icon-folder-open { background-position: -16px -96px; }
.ui-icon-document { background-position: -32px -96px; }
.ui-icon-document-b { background-position: -48px -96px; }
.ui-icon-note { background-position: -64px -96px; }
.ui-icon-mail-closed { background-position: -80px -96px; }
.ui-icon-mail-open { background-position: -96px -96px; }
.ui-icon-suitcase { background-position: -112px -96px; }
.ui-icon-comment { background-position: -128px -96px; }
.ui-icon-person { background-position: -144px -96px; }
.ui-icon-print { background-position: -160px -96px; }
.ui-icon-trash { background-position: -176px -96px; }
.ui-icon-locked { background-position: -192px -96px; }
.ui-icon-unlocked { background-position: -208px -96px; }
.ui-icon-bookmark { background-position: -224px -96px; }
.ui-icon-tag { background-position: -240px -96px; }
.ui-icon-home { background-position: 0 -112px; }
.ui-icon-flag { background-position: -16px -112px; }
.ui-icon-calendar { background-position: -32px -112px; }
.ui-icon-cart { background-position: -48px -112px; }
.ui-icon-pencil { background-position: -64px -112px; }
.ui-icon-clock { background-position: -80px -112px; }
.ui-icon-disk { background-position: -96px -112px; }
.ui-icon-calculator { background-position: -112px -112px; }
.ui-icon-zoomin { background-position: -128px -112px; }
.ui-icon-zoomout { background-position: -144px -112px; }
.ui-icon-search { background-position: -160px -112px; }
.ui-icon-wrench { background-position: -176px -112px; }
.ui-icon-gear { background-position: -192px -112px; }
.ui-icon-heart { background-position: -208px -112px; }
.ui-icon-star { background-position: -224px -112px; }
.ui-icon-link { background-position: -240px -112px; }
.ui-icon-cancel { background-position: 0 -128px; }
.ui-icon-plus { background-position: -16px -128px; }
.ui-icon-plusthick { background-position: -32px -128px; }
.ui-icon-minus { background-position: -48px -128px; }
.ui-icon-minusthick { background-position: -64px -128px; }
.ui-icon-close { background-position: -80px -128px; }
.ui-icon-closethick { background-position: -96px -128px; }
.ui-icon-key { background-position: -112px -128px; }
.ui-icon-lightbulb { background-position: -128px -128px; }
.ui-icon-scissors { background-position: -144px -128px; }
.ui-icon-clipboard { background-position: -160px -128px; }
.ui-icon-copy { background-position: -176px -128px; }
.ui-icon-contact { background-position: -192px -128px; }
.ui-icon-image { background-position: -208px -128px; }
.ui-icon-video { background-position: -224px -128px; }
.ui-icon-script { background-position: -240px -128px; }
.ui-icon-alert { background-position: 0 -144px; }
.ui-icon-info { background-position: -16px -144px; }
.ui-icon-notice { background-position: -32px -144px; }
.ui-icon-help { background-position: -48px -144px; }
.ui-icon-check { background-position: -64px -144px; }
.ui-icon-bullet { background-position: -80px -144px; }
.ui-icon-radio-on { background-position: -96px -144px; }
.ui-icon-radio-off { background-position: -112px -144px; }
.ui-icon-pin-w { background-position: -128px -144px; }
.ui-icon-pin-s { background-position: -144px -144px; }
.ui-icon-play { background-position: 0 -160px; }
.ui-icon-pause { background-position: -16px -160px; }
.ui-icon-seek-next { background-position: -32px -160px; }
.ui-icon-seek-prev { background-position: -48px -160px; }
.ui-icon-seek-end { background-position: -64px -160px; }
.ui-icon-seek-start { background-position: -80px -160px; }
/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first { background-position: -80px -160px; }
.ui-icon-stop { background-position: -96px -160px; }
.ui-icon-eject { background-position: -112px -160px; }
.ui-icon-volume-off { background-position: -128px -160px; }
.ui-icon-volume-on { background-position: -144px -160px; }
.ui-icon-power { background-position: 0 -176px; }
.ui-icon-signal-diag { background-position: -16px -176px; }
.ui-icon-signal { background-position: -32px -176px; }
.ui-icon-battery-0 { background-position: -48px -176px; }
.ui-icon-battery-1 { background-position: -64px -176px; }
.ui-icon-battery-2 { background-position: -80px -176px; }
.ui-icon-battery-3 { background-position: -96px -176px; }
.ui-icon-circle-plus { background-position: 0 -192px; }
.ui-icon-circle-minus { background-position: -16px -192px; }
.ui-icon-circle-close { background-position: -32px -192px; }
.ui-icon-circle-triangle-e { background-position: -48px -192px; }
.ui-icon-circle-triangle-s { background-position: -64px -192px; }
.ui-icon-circle-triangle-w { background-position: -80px -192px; }
.ui-icon-circle-triangle-n { background-position: -96px -192px; }
.ui-icon-circle-arrow-e { background-position: -112px -192px; }
.ui-icon-circle-arrow-s { background-position: -128px -192px; }
.ui-icon-circle-arrow-w { background-position: -144px -192px; }
.ui-icon-circle-arrow-n { background-position: -160px -192px; }
.ui-icon-circle-zoomin { background-position: -176px -192px; }
.ui-icon-circle-zoomout { background-position: -192px -192px; }
.ui-icon-circle-check { background-position: -208px -192px; }
.ui-icon-circlesmall-plus { background-position: 0 -208px; }
.ui-icon-circlesmall-minus { background-position: -16px -208px; }
.ui-icon-circlesmall-close { background-position: -32px -208px; }
.ui-icon-squaresmall-plus { background-position: -48px -208px; }
.ui-icon-squaresmall-minus { background-position: -64px -208px; }
.ui-icon-squaresmall-close { background-position: -80px -208px; }
.ui-icon-grip-dotted-vertical { background-position: 0 -224px; }
.ui-icon-grip-dotted-horizontal { background-position: -16px -224px; }
.ui-icon-grip-solid-vertical { background-position: -32px -224px; }
.ui-icon-grip-solid-horizontal { background-position: -48px -224px; }
.ui-icon-gripsmall-diagonal-se { background-position: -64px -224px; }
.ui-icon-grip-diagonal-se { background-position: -80px -224px; }


/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-all,
.ui-corner-top,
.ui-corner-left,
.ui-corner-tl {
	border-top-left-radius: 4px;
}
.ui-corner-all,
.ui-corner-top,
.ui-corner-right,
.ui-corner-tr {
	border-top-right-radius: 4px;
}
.ui-corner-all,
.ui-corner-bottom,
.ui-corner-left,
.ui-corner-bl {
	border-bottom-left-radius: 4px;
}
.ui-corner-all,
.ui-corner-bottom,
.ui-corner-right,
.ui-corner-br {
	border-bottom-right-radius: 4px;
}

/* Overlays */
.ui-widget-overlay {
	background: #666666 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoEAAAAAD5BTvyAAAAAmJLR0T//xSrMc0AAAAJcEhZcwAAAEgAAABIAEbJaz4AAAB6SURBVEjH7dXLEYAgDEVRqk0HNmpFMgxi+Lnw3Z0hSzJnmZuO8x6b3vPn530vsVwDKa6CHFdAkssgyy1AjTNLLDeAOteBBOdAhmsgxVWQ4wpIchlkuQ34nXPni+EWoMZNoMoNoM51IMFFU3QumqJz0RSdi6bo3C+bcgHap6IryOSd+AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wMy0xMVQwODo0OTozNS0wNzowMDqeDLEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDMtMTFUMDg6NDk6MzUtMDc6MDBLw7QNAAAAAElFTkSuQmCC) 50% 50% repeat;
	opacity: .5;
	filter: Alpha(Opacity=50); /* support: IE8 */
}
.ui-widget-shadow {
	margin: -5px 0 0 -5px;
	padding: 5px;
	background: #000000 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABkAQAAAADcH0/XAAAAAmJLR0QAAd2KE6QAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAPSURBVCjPY2AYBaOA+gAAAlgAAXU2hncAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTUtMDMtMTFUMDg6NDk6MzUtMDc6MDA6ngyxAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE1LTAzLTExVDA4OjQ5OjM1LTA3OjAwS8O0DQAAAABJRU5ErkJggg==) 50% 50% repeat-x;
	opacity: .2;
	filter: Alpha(Opacity=20); /* support: IE8 */
	border-radius: 5px;
}
</style><style type="text/css">/*

Online Python Tutor
https://github.com/pgbovine/OnlinePythonTutor/

Copyright (C) Philip J. Guo (philip@pgbovine.net)

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

/* Most recent color scheme redesign on 2012-08-19 */

/* To prevent CSS namespace clashes, prefix all rules with:
     div.ExecutionVisualizer
*/


/* reset some styles to nullify effects of existing stylesheets
   e.g., http://meyerweb.com/eric/tools/css/reset/
*/
div.ExecutionVisualizer {
  /* none for now */
}

div.ExecutionVisualizer table.visualizer {
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 10pt;
  margin-bottom: 10px;
}

div.ExecutionVisualizer table.visualizer td.vizLayoutTd {
  vertical-align: top;
}

div.ExecutionVisualizer td#stack_td,
div.ExecutionVisualizer td#heap_td {
  vertical-align:top;
  font-size: 10pt; /* don't make fonts in the heap so big! */
}

div.ExecutionVisualizer #dataViz {
  /*margin-left: 25px;*/
}

/*
div.ExecutionVisualizer div#codeDisplayDiv {
  width: 550px;
}
*/

div.ExecutionVisualizer div#pyCodeOutputDiv {
  /*max-width: 550px;*/
  max-height: 460px;
  /*max-height: 620px;*/
  overflow: auto;
  /*margin-bottom: 4px;*/

  margin-left: auto;
  margin-right: auto;
}

div.ExecutionVisualizer table#pyCodeOutput {
  font-family: Andale mono, monospace;
  /*font-size:12pt;*/
  font-size:11pt;
  line-height:1.1em;

  border-collapse: separate; /* some crazy CSS voodoo that needs to be
                                there so that SVG arrows to the left
                                of the code line up vertically in Chrome */
  border-spacing: 0px;
  border-top: 1px solid #bbb;
  padding-top: 3px;
  border-bottom: 1px solid #bbb;
  /*margin-top: 6px;*/
  margin: 6px auto; /* Center code in its pane */
}

/* don't wrap lines within code output ... FORCE scrollbars to appear */
div.ExecutionVisualizer table#pyCodeOutput td {
  white-space: nowrap;
  vertical-align: middle; /* explicitly force, to override external CSS conflicts */
}

div.ExecutionVisualizer #leftCodeGutterSVG {
  width: 18px;
  min-width: 18px; /* make sure it doesn't squash too thin */
  height: 0px; /* programmatically set this later ... IE needs this to
                  be 0 or it defaults to something arbitrary and gross */
}

div.ExecutionVisualizer #prevLegendArrowSVG,
div.ExecutionVisualizer #curLegendArrowSVG {
  width: 18px;
  height: 10px;
}

div.ExecutionVisualizer .arrow {
  font-size: 16pt;
}

div.ExecutionVisualizer table#pyCodeOutput .lineNo {
  color: #aaa;
  padding: 0.2em;
  padding-left: 0.3em;
  padding-right: 0.5em;
  text-align: right;
}

div.ExecutionVisualizer table#pyCodeOutput .cod {
  /*font-weight: bold;*/
  margin-left: 3px;
  padding-left: 7px;
  text-align: left; /* necessary or else doesn't work properly in IE */
}

div.ExecutionVisualizer div#progOutputs {
  margin-left: 13px; /* line up with heap visualizations */
  margin-bottom: 3px;
}

div.ExecutionVisualizer div#legendDiv {
  padding: 0px;
  text-align: left;
  color: #666;
  font-size: 9pt;
}

div.ExecutionVisualizer div#editCodeLinkDiv {
  text-align: center;
  /*
  margin-top: 12px;
  margin-bottom: 4px;
  */
  margin: 8px auto;
  font-size: 11pt;
}

div.ExecutionVisualizer div#annotateLinkDiv {
  /*text-align: left;*/
  margin-top: 0px;
  margin-bottom: 12px;
  /*
  margin-left: auto;
  margin-right: auto;
  */
}

div.ExecutionVisualizer div#stepAnnotationDiv {
  margin-bottom: 12px;
}

div.ExecutionVisualizer textarea#stepAnnotationEditor,
div.ExecutionVisualizer textarea#vizTitleEditor,
div.ExecutionVisualizer textarea#vizDescriptionEditor {
  border: 1px solid #999999;
  padding: 4px;

  overflow: auto; /* to look pretty on IE */
  /* make sure textarea doesn't grow and stretch */
  resize: none;
}


div.ExecutionVisualizer #errorOutput {
  color: #e93f34; /* should match brightRed JavaScript variable */
  font-size: 11pt;
  padding-top: 2px;
  line-height: 1.5em;
  margin-bottom: 4px;
}

/* VCR control buttons for stepping through execution */

div.ExecutionVisualizer #vcrControls {
  margin-top: 15px;
  margin-bottom: 6px;
  /*width: 100%;*/
  text-align: center;
}

div.ExecutionVisualizer #vcrControls button {
  margin-left: 2px;
  margin-right: 2px;
}

div.ExecutionVisualizer #curInstr {
  text-align: center;
}

div.ExecutionVisualizer #pyStdout {
  border: 1px solid #999999;
  font-size: 10pt;
  padding: 3px;
  font-family: Andale mono, monospace;

  overflow: auto; /* to look pretty on IE */
  /* make sure textarea doesn't grow and stretch */
  resize: none;
}


div.ExecutionVisualizer .vizFrame {
  margin-bottom: 20px;
  padding-left: 8px;
  border-left: 2px solid #cccccc;
}


/* Rendering of primitive types */

div.ExecutionVisualizer .importedObj {
  font-size: 8pt;
}

div.ExecutionVisualizer .nullObj {
/*  font-size: 8pt; */
}

div.ExecutionVisualizer .stringObj,
div.ExecutionVisualizer .customObj,
div.ExecutionVisualizer .funcObj {
  font-family: Andale mono, monospace;
  white-space: nowrap;
}

div.ExecutionVisualizer .funcCode {
  font-size: 8pt;
}

div.ExecutionVisualizer .retval {
  font-size: 9pt;
}

div.ExecutionVisualizer .stackFrame .retval {
  color: #e93f34; /* highlight non-zombie stack frame return values -
                     should match brightRed JavaScript variable */
}

/* Rendering of basic compound types */

div.ExecutionVisualizer table.listTbl,
div.ExecutionVisualizer table.tupleTbl,
div.ExecutionVisualizer table.setTbl {
  background-color: #ffffc6;
}


div.ExecutionVisualizer table.listTbl {
  border: 0px solid black;
  border-spacing: 0px;
}

div.ExecutionVisualizer table.listTbl td.listHeader,
div.ExecutionVisualizer table.tupleTbl td.tupleHeader {
  padding-left: 4px;
  padding-top: 2px;
  padding-bottom: 3px;
  font-size: 8pt;
  color: #777;
  text-align: left;
  border-left: 1px solid #555555;
}

div.ExecutionVisualizer table.tupleTbl {
  border-spacing: 0px;
  color: black;

  border-bottom: 1px solid #555555; /* must match td.tupleHeader border */
  border-top: 1px solid #555555; /* must match td.tupleHeader border */
  border-right: 1px solid #555555; /* must match td.tupleHeader border */
}


div.ExecutionVisualizer table.listTbl td.listElt {
  border-bottom: 1px solid #555555; /* must match td.listHeader border */
  border-left: 1px solid #555555; /* must match td.listHeader border */
}


/* for C and C++ visualizations */

/* make this slightly more compact than listTbl since arrays can be
   rendered on the stack so we want to kinda conserve space */
div.ExecutionVisualizer table.cArrayTbl {
  background-color: #ffffc6;
  padding-left: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-size: 8pt;
  color: #777;
  text-align: left;
  border: 0px solid black;
  border-spacing: 0px;
}

div.ExecutionVisualizer table.cArrayTbl td.cArrayHeader {
  padding-left: 5px;
  padding-top: 0px;
  padding-bottom: 2px;
  font-size: 6pt;
  color: #777;
  text-align: left;
  border-bottom: 0px solid black; /* override whatever we're nested in */
}

div.ExecutionVisualizer table.cArrayTbl td.cArrayElt {
  border-bottom: 1px solid #888;
  border-left: 1px solid #888;
  border-top: 0px solid black;
  color: black;

  padding-top: 2px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 4px;
  vertical-align: bottom;
}

div.ExecutionVisualizer table.cArrayTbl td.cMultidimArrayHeader {
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 1px;
  padding-bottom: 3px;
  font-size: 6pt;
  color: #777;
  text-align: left;
  border-top: 1px solid #888;
  border-left: 1px solid #888;
  border-bottom: 0px solid black; /* override whatever we're nested in */
}

div.ExecutionVisualizer table.cArrayTbl td.cMultidimArrayElt {
  border-left: 1px solid #888;
  color: black;
  padding-top: 1px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
  vertical-align: bottom;
}


div.ExecutionVisualizer .cdataHeader {
  font-size: 6pt;
  color: #555;
  padding-bottom: 2px;
}

div.ExecutionVisualizer .cdataElt {
  font-size: 10pt;
}

div.ExecutionVisualizer .cdataUninit {
  color: #888;
}


div.ExecutionVisualizer table.tupleTbl td.tupleElt {
  border-left: 1px solid #555555; /* must match td.tupleHeader border */
}

div.ExecutionVisualizer table.customObjTbl {
  background-color: white;
  color: black;
  border: 1px solid black;
}

div.ExecutionVisualizer table.customObjTbl td.customObjElt {
  padding: 5px;
  font-size: 9pt; /* make this smaller */
}

div.ExecutionVisualizer table.listTbl td.listElt,
div.ExecutionVisualizer table.tupleTbl td.tupleElt {
  padding-top: 0px;
  padding-bottom: 8px;
  padding-left: 10px;
  padding-right: 10px;
  vertical-align: bottom;
}

div.ExecutionVisualizer table.setTbl {
  border: 1px solid #555555;
  border-spacing: 0px;
  text-align: center;
}

div.ExecutionVisualizer table.setTbl td.setElt {
  padding: 8px;
}


div.ExecutionVisualizer table.dictTbl,
div.ExecutionVisualizer table.instTbl,
div.ExecutionVisualizer table.classTbl {
  border-spacing: 1px;
}

div.ExecutionVisualizer table.dictTbl td.dictKey,
div.ExecutionVisualizer table.instTbl td.instKey,
div.ExecutionVisualizer table.classTbl td.classKey {
  background-color: #faebbf;
}

div.ExecutionVisualizer table.dictTbl td.dictVal,
div.ExecutionVisualizer table.instTbl td.instVal,
div.ExecutionVisualizer table.classTbl td.classVal,
div.ExecutionVisualizer td.funcCod {
  background-color: #ffffc6;
}


div.ExecutionVisualizer table.dictTbl td.dictKey,
div.ExecutionVisualizer table.instTbl td.instKey,
div.ExecutionVisualizer table.classTbl td.classKey {
  padding-top: 6px /*15px*/;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 4px;

  text-align: right;
}

div.ExecutionVisualizer table.dictTbl td.dictVal,
div.ExecutionVisualizer table.instTbl td.instVal,
div.ExecutionVisualizer table.classTbl td.classVal {
  padding-top: 6px; /*15px*/;
  padding-bottom: 6px;
  padding-right: 10px;
  padding-left: 4px;
}

div.ExecutionVisualizer td.funcCod {
  padding-left: 4px;
}

div.ExecutionVisualizer table.classTbl td,
div.ExecutionVisualizer table.instTbl td {
  border-bottom: 1px #888 solid;
}

div.ExecutionVisualizer table.classTbl td.classVal,
div.ExecutionVisualizer table.instTbl td.instVal {
  border-left: 1px #888 solid;
}

div.ExecutionVisualizer table.classTbl,
div.ExecutionVisualizer table.funcTbl {
  border-collapse: collapse;
  border: 1px #888 solid;
}

/* only add a border to dicts if they're embedded within another object */
div.ExecutionVisualizer td.listElt table.dictTbl,
div.ExecutionVisualizer td.tupleElt table.dictTbl,
div.ExecutionVisualizer td.dictVal table.dictTbl,
div.ExecutionVisualizer td.instVal table.dictTbl,
div.ExecutionVisualizer td.classVal table.dictTbl {
  border: 1px #888 solid;
}

div.ExecutionVisualizer .objectIdLabel {
  font-size: 8pt;
  color: #444;
  margin-bottom: 2px;
}

div.ExecutionVisualizer .typeLabel {
  font-size: 8pt;
  color: #555;
  margin-bottom: 2px;
}

div.ExecutionVisualizer div#stack,
div.ExecutionVisualizer div#globals_area {
  padding-left: 10px;
  padding-right: 30px;

  /* no longer necessary ... */
  /*float: left;*/
  /* border-right: 1px dashed #bbbbbb; */
}

div.ExecutionVisualizer div.stackFrame,
div.ExecutionVisualizer div.zombieStackFrame {
  background-color: #ffffff;
  margin-bottom: 15px;
  padding: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 4px;
  font-size: 10pt;
}

div.ExecutionVisualizer div.zombieStackFrame {
  border-left: 1px dotted #aaa;
  /*color: #c0c0c0;*/
  color: #a0a0a0;
}

div.ExecutionVisualizer div.highlightedStackFrame {
  background-color: #e2ebf6;
  /*background-color: #d7e7fb;*/

  /*background-color: #c0daf8;*/
  /*background-color: #9eeaff #c5dfea;*/
}

div.ExecutionVisualizer div.stackFrame,
div.ExecutionVisualizer div.highlightedStackFrame {
  border-left: 1px solid #a6b3b6;
}


div.ExecutionVisualizer div.stackFrameHeader {
  font-family: Andale mono, monospace;
  font-size: 10pt;
  margin-top: 4px;
  margin-bottom: 3px;
  white-space: nowrap;
}

div.ExecutionVisualizer td.stackFrameVar {
  text-align: right;
  padding-right: 8px;
  padding-top: 3px;
  padding-bottom: 3px;
}

div.ExecutionVisualizer td.stackFrameValue {
  text-align: left;
  border-bottom: 1px solid #aaaaaa;
  border-left: 1px solid #aaaaaa;

  vertical-align: middle;

  padding-top: 3px;
  padding-left: 3px;
  padding-bottom: 3px;
}

div.ExecutionVisualizer .stackFrameVarTable tr {

}

div.ExecutionVisualizer .stackFrameVarTable {
  text-align: right;
  padding-top: 3px;

  /* right-align the table */
  margin-left: auto;
  margin-right: 0px;

  /* hack to counteract possible nasty CSS reset styles from parent divs */
  border-collapse: separate;
  border-spacing: 2px;
}

div.ExecutionVisualizer div#heap {
  float: left;
  padding-left: 30px;
}

div.ExecutionVisualizer td.toplevelHeapObject {
  /* needed for d3 to do transitions */
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  /*
  border: 2px dotted white;
  border-color: white;
  */
}

div.ExecutionVisualizer table.heapRow {
  margin-bottom: 10px;
}

div.ExecutionVisualizer div.heapObject {
  padding-left: 2px; /* leave a TINY amount of room for connector endpoints */
}

div.ExecutionVisualizer div.heapPrimitive {
  padding-left: 4px; /* leave some more room for connector endpoints */
}

div.ExecutionVisualizer div#stackHeader {
  margin-bottom: 15px;
  text-align: right;
}

div.ExecutionVisualizer div#heapHeader {
  /*margin-top: 2px;
  margin-bottom: 13px;*/
  margin-bottom: 15px;
}

div.ExecutionVisualizer div#langDisplayDiv {
  text-align: center;
  margin-top: 2pt;
  margin-bottom: 3pt;
}

div.ExecutionVisualizer div#langDisplayDiv,
div.ExecutionVisualizer div#stackHeader,
div.ExecutionVisualizer div#heapHeader {
  color: #333333;
  font-size: 10pt;
}

div.ExecutionVisualizer #executionSlider {
  /* if you set 'width', then it looks ugly when you dynamically resize */
  margin-top: 15px;
  margin-bottom: 5px;

  /* DON'T center this, since we need breakpoints in executionSliderFooter to be well aligned */
  width: 98%;
}

div.ExecutionVisualizer #executionSliderCaption {
  font-size: 8pt;
  color: #666666;
  margin-top: 15px;
}

div.ExecutionVisualizer #executionSliderFooter {
  margin-top: -7px; /* make it butt up against #executionSlider */
}

div.ExecutionVisualizer #codeFooterDocs,
div.ExecutionVisualizer #printOutputDocs {
  margin-bottom: 3px;
  font-size: 8pt;
  color: #666;
}

div.ExecutionVisualizer #codeFooterDocs {
  margin-top: 5px;
  margin-bottom: 12px;
  width: 95%;
}

/* darken slider handle a bit */
div.ExecutionVisualizer .ui-slider .ui-slider-handle {
  border: 1px solid #999;
}


/* for annotation bubbles */

/* For styling tricks, see: http://css-tricks.com/textarea-tricks/ */
textarea.bubbleInputText {
  border: 1px solid #ccc;
  outline: none;
  overflow: auto; /* to look pretty on IE */

  /* make sure textarea doesn't grow and stretch the enclosing bubble */
  resize: none;
  width: 225px;
  max-width: 225px;
  height: 35px;
  max-height: 35px;
}

div.ExecutionVisualizer .annotationText,
div.ExecutionVisualizer .vizDescriptionText {
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 11pt;
  line-height: 1.5em;
}

div.ExecutionVisualizer .vizTitleText {
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 16pt;
  margin-bottom: 12pt;
}

div.ExecutionVisualizer div#vizHeader {
  margin-bottom: 10px;
  width: 700px;
  max-width: 700px;
}

/* prev then curr, so curr gets precedence when both apply */
div.ExecutionVisualizer .highlight-prev {
  background-color: #F0F0EA;
}

div.ExecutionVisualizer .highlight-cur {
  background-color: #FFFF66;
}

div.ExecutionVisualizer .highlight-legend {
  padding: 2px;
}

/* resizing sliders from David Pritchard */
.ui-resizable-e {
  background-color: #dddddd;
  width: 1px;
  border: 3px solid white;
}

.ui-resizable-e:hover {
  border-color: #dddddd;
}

div.ExecutionVisualizer a,
div.ExecutionVisualizer a:visited,
div.ExecutionVisualizer a:hover {
  color: #3D58A2;
}

div.ExecutionVisualizer div#rawUserInputDiv {
  padding: 5px;
  width: 95%;
  margin: 5px auto;
  text-align: center;
  border: 1px #e93f34 solid;
}

/* for pyCrazyMode */

/* prev then curr, so curr gets precedence when both apply */
div.ExecutionVisualizer .pycrazy-highlight-prev {
  background-color: #eeeeee; /*#F0F0EA;*/
  /*
  text-decoration: none;
  border-bottom: 1px solid #dddddd;
  */
}

div.ExecutionVisualizer .pycrazy-highlight-cur {
  background-color: #FFFF66;
  /* aligned slightly higher than border-bottom */
  /*
  text-decoration: none;
  border-bottom: 1px solid #e93f34;
  */
}

div.ExecutionVisualizer .pycrazy-highlight-prev-and-cur {
  background-color: #FFFF66;

  text-decoration: none;
  border-bottom: 1px solid #999999;
}


#optTabularView thead.stepTableThead {
  background-color: #bbb;
}

#optTabularView tbody.stepTableTbody {
}

#optTabularView td.stepTableTd {
  padding: 3px 10px;
}


/* BEGIN Java frontend by David Pritchard and Will Gwozdz */

/* stack and queue css by Will Gwozdz */
div.ExecutionVisualizer table.queueTbl,
div.ExecutionVisualizer table.stackTbl {
  background-color: #ffffc6;
}

div.ExecutionVisualizer table.queueTbl,
div.ExecutionVisualizer table.stackTbl {
  border: 0px solid black;
  border-spacing: 0px;
}

div.ExecutionVisualizer table.stackTbl td.stackElt,
div.ExecutionVisualizer table.queueTbl td.queueElt {
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 2px;
  padding-bottom: 3px;
  border-top: 1px solid #555555;
  border-bottom: 1px solid #555555;
  border-left: 1px dashed #555555;
}

div.ExecutionVisualizer table.stackTbl td.stackFElt,
div.ExecutionVisualizer table.queueTbl td.queueFElt {
  background-color: white;
  border-top: 1px solid #555555;
  border-bottom: 1px solid #555555;
}

div.ExecutionVisualizer table.stackTbl td.stackLElt {
  background-color: white;
  border-left: 1px solid #555555;
}

div.ExecutionVisualizer table.queueTbl td.queueLElt {
  background-color: white;
  border-top: 1px solid#555555;
  border-bottom: 1px solid #555555;
  border-left: 1px dashed #555555;
}

/* This ensures a border is drawn around a dict
   if its nested in another object. */
div.ExecutionVisualizer td.stackElt table.dictTbl,
div.ExecutionVisualizer td.stackLElt table.dictTbl,
div.ExecutionVisualizer td.stackFElt table.dictTbl,
div.ExecutionVisualizer td.queueElt table.dictTbl,
div.ExecutionVisualizer td.queueLElt table.dictTbl,
div.ExecutionVisualizer td.queueFElt table.dictTbl {
  border: 1px #888 solid;
}

.symbolic {
  font-size: 18pt;
}

/* END Java frontend by David Pritchard and Will Gwozdz */
</style></head>
<body data-new-gr-c-s-check-loaded="14.1029.0" data-gr-ext-installed="" data-new-gr-c-s-loaded="14.1029.0">
<main role="main" class="container-fluid main-body" id="ide-page">

<header class="bg-white px-2 row">

<div class="sidebar-container">
<div id="sidebar" class="sidebar-sticky collapse in shadow-sm sidebar-collapse">
<a class="navbar-brand" href="https://www.guvi.in/index.html">GUVI</a>
<ul class="nav flex-column  main-menu"><li class="nav-item jobs-link" id="zen_link"><a class="nav-link" href="https://www.guvi.in/ide#"><i class="material-icons">self_improvement</i><span>Zen</span></a></li>
<li class="nav-item index-link dashboard-link">
<a class="nav-link" href="https://www.guvi.in/dashboard.html">
<i class="material-icons">home</i><span>Home</span>
</a>
</li>
<li class="nav-item courses-link">
<a class="nav-link" href="https://www.guvi.in/courses.html">
<i class="material-icons">video_library</i> <span>Courses</span>
</a>
</li>
<li class="nav-item code-kata-link">
<a class="nav-link" href="https://www.guvi.in/code-kata.html">
<i class="icon-code-kata"></i><span>Codekata</span>
</a>
</li><li class="nav-item webkata-link"><a class="nav-link" href="https://www.guvi.in/webkata.html"><i class="fas fa-laptop-code"></i><span>Webkata</span></a></li>
<li class="nav-item micro-arc-link">
<a class="nav-link" href="https://www.guvi.in/micro-arc.html">
<i class="icon-micro-arc"></i><span>Micro Arc</span>
</a>
</li>
<li class="nav-item project-board-link">
<a class="nav-link" href="https://www.guvi.in/project-board.html">
<i class="icon-project-board"></i><span>Project Board</span>
</a>
 </li>
<li class="nav-item leader-board-link">
<a class="nav-link" href="https://www.guvi.in/leader-board.html">
<i class="icon-leader-board"></i><span>Leaderboard</span>
</a>
</li>
<li class="nav-item rewards-link">
<a class="nav-link" href="https://www.guvi.in/rewards.html">
<i class="icon-reward"></i><span>Rewards</span>
</a>
</li>
<li class="nav-item bookmarks-link" style="display: none;">
<a class="nav-link" href="https://www.guvi.in/bookmarks.html">
<i class="material-icons">bookmarks</i><span>Bookmarks</span>
</a>
</li>
<li class="nav-item jobs-link">
<a class="nav-link" href="https://www.guvi.in/jobs.html">
<i class="material-icons">work</i> <span>Jobs</span>
</a>
</li>
<li class="nav-item ide-link active"><a class="nav-link" href="https://www.guvi.in/ide.html"><i class="material-icons">code</i><span>IDE</span></a></li><li class="nav-item faq-link"><a class="nav-link" href="https://www.guvi.in/faq.html"><i class="material-icons">help</i><span>FAQ</span></a></li><li class="nav-item jobs-link" id="forum_link"><a class="nav-link"><i class="material-icons">forum</i><span>Forum</span></a></li></ul>


<ul class="nav flex-column code-kata-menu" id="ckMenuTabs" role="tablist">
<li class="nav-item ck-questions-link">
<a class="nav-link active" id="ck-questions-tab" data-toggle="tab" href="https://www.guvi.in/ide#ck-questions" role="tab" aria-controls="ck-questions" aria-selected="true">
<i class="icon-ck-questions"></i>
<span>Questions</span>
</a>
</li>
<li class="nav-item ck-instructions-link">
<a class="nav-link" id="ck-instructions-tab" data-toggle="tab" href="https://www.guvi.in/ide#ck-instructions" role="tab" aria-controls="ck-instructions" aria-selected="false">
<i class="icon-ck-instructions"></i>
<span>Instructions</span>
</a>
</li>
<li class="nav-item ck-github-link">
<a class="nav-link" id="ck-github-tab" data-toggle="tab" href="https://www.guvi.in/ide#ck-github" role="tab" aria-controls="ck-github" aria-selected="false">
<i class="icon-ck-github"></i>
<span>github</span>
</a>
</li>
<li class="nav-item ck-peer-submission-link">
<a class="nav-link" id="ck-peer-submission-tab" data-toggle="tab" href="https://www.guvi.in/ide#ck-peer-submission" role="tab" aria-controls="ck-peer-submission" aria-selected="false">
<i class="icon-ck-peer-submission"></i>
<span>Peer submissions</span>
</a>
 </li>
<li class="nav-item ck-path-link">
<a class="nav-link" id="ck-path-tab" data-toggle="tab" href="https://www.guvi.in/ide#ck-path" role="tab" aria-controls="ck-path" aria-selected="false">
<i class="icon-ck-path"></i>
<span>Topic path</span>
</a>
</li>
</ul>

</div>
</div>

<nav class="col navbar navbar-expand-md navbar-light">
<button id="sidebarToggle" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
<i class="material-icons">menu</i>
</button>
<a class="navbar-brand visible-md" href="https://www.guvi.in/index.html">
<img src="./obj_files/guvi-logo.webp" alt="GUVI : Learn to code in your native language | IDE">
</a>

<div class="list-group list-group-horizontal-md user-profile" id="accountGroup">
<button class="btn dropdown notification-box-toggler  " data-toggle="collapse" data-target="#notification-box">
<i class="material-icons">notifications</i>
</button>
<button class="btn dropdown account-box-toggler" type="button" data-toggle="collapse" data-target="#account-box" aria-expanded="false" aria-controls="account-box">
<div class="gravatar-wrap"><img src="./obj_files/default.jpg" class="gravatar"></div>
</button>
<div class="accordion-group">

<div class="collapse notification-box shadow-sm" id="notification-box" data-parent="#accountGroup">
<div class="card card-body">
<ul class="list-group">
No notifications
</ul>
</div>
</div>


<div class="collapse account-box shadow-sm" id="account-box" data-parent="#accountGroup">
<div class="card card-body">  <div class="row d-flex flex-nowrap align-items-center"><div class="col-md-3 ml-2"><img src="./obj_files/default.jpg" width="40" height="40" class="rounded-circle d-flex justify-content-center"></div><div class="col-md-9 pl-2"> <h6>BHASKAR A </h6> <small class="text-secondary">itsmebhaskar100@gmail.com</small></div></div><hr><div class="row"><a class="dropdown-item text-secondary mt-2" href="https://www.guvi.in/itsmebhaskar10010">My Profile</a><a class="dropdown-item text-secondary mt-2" href="https://www.guvi.in/change-password.html">Change Password</a><a class="dropdown-item text-secondary mt-2" href="https://www.guvi.in/subscription.html?itm_source=ide-page&amp;itm_medium=navbar">Upgrade to Pro</a><a class="dropdown-item text-secondary mt-2" href="javascript:authorize.signout();">Sign out</a></div></div>



</div>
</div>

</div>


</nav>
</header>


<div class="row d-flex pt-2 codeContainer">
<div class="flex-fill flex-grow split" id="one" style="width: calc(50% - 5px);">
<div class="d-flex align-items-end justify-content-between border-bottom">
<ul class="nav nav-tabs m-0 flex-nowrap" id="resultTabMobile" role="tablist">
<li class="nav-item">
<a class="nav-link active p-1" id="editor-tab-mobile" data-toggle="tab" href="https://www.guvi.in/ide#editor-mobile" role="tab" aria-controls="editor-mobile" aria-selected="true">EDITOR</a>
</li>
<li class="nav-item mobile-view">
<a class="nav-link p-1" id="input-tab-mobile" data-toggle="tab" href="https://www.guvi.in/ide#input-mobile" role="tab" aria-controls="input-mobile" aria-selected="true">I/O</a>
</li>

</ul>
<div class="d-flex align-items-end">
<div class="pr-3">
<select class="form-control" id="languageSelect"><option value="bash">BASH</option><option value="basic">BASIC</option><option value="c">C</option><option value="clojure">CLOJURE</option><option value="crystal">CRYSTAL</option><option value="cpp">C++</option><option value="csharp">C#</option><option value="elixir">ELIXIR</option><option value="UNKNOWN">ERLANG</option><option value="go">GO</option><option value="haskell">HASKELL</option><option value="insect">INSECT</option><option value="java">JAVA</option><option value="java8">JAVA 8</option><option value="javascript" selected="">JAVASCRIPT</option><option value="ocaml">OCAML</option><option value="octave">OCTAVE</option><option value="pascal">PASCAL</option><option value="python">PYTHON 2</option><option value="python3">PYTHON 3</option><option value="ruby">RUBY</option><option value="rust">RUST</option></select>
</div>
<button class="btn d-flex align-items-end justify-content-between p-1 mr-1" id="runCode">
<span class="material-icons text-white px-1">play_arrow</span>
<span class="align-self-center text-white px-1">Run</span>
</button>
<button class="btn btn-danger d-flex align-items-end justify-content-between p-1" id="runDebugger" hidden="">
<span class="align-self-center text-white"> Debug </span>
</button>
<button class="btn d-flex align-items-end justify-content-between py-1 px-2 mr-1" data-toggle="modal" data-target="#editorSettingModal">
<span class="material-icons">settings</span>
</button>
</div>
</div>
<div class="tab-content">
<div class="tab-pane fade show active" id="editor-mobile" role="tabpanel" aria-labelledby="editor-tab">
<div id="editor" class=" ace_editor ace-monokai ace_dark ace_focus" style="font-size: 14px;" draggable="false"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; height: 1px; width: 1px; top: 123px; left: 75px;"></textarea><div class="ace_gutter" aria-hidden="true" style="left: 0px; width: 49px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: -234px; left: 0px; width: 49px;"><div class="ace_gutter-cell " style="height: 17px; top: 221px;">14<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 238px;">15<span class="ace_fold-widget ace_start ace_open" style="display: none; height: 17px;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 255px;">16<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 272px;">17<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 289px;">18<span class="ace_fold-widget ace_start ace_open" style="display: none; height: 17px;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 306px;">19<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 323px;">20<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-active-line ace_gutter-cell " style="height: 17px; top: 340px;">21<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 357px;">22<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 374px;">23<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 391px;">24<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 408px;">25<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 425px;">26<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 442px;">27<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 459px;">28<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 476px;">29<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 493px;">30<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 510px;">31<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 527px;">32<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 544px;">33<span style="display: inline-block; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 561px;">34<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 578px;">35<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 595px;">36<span class="ace_fold-widget ace_start ace_open" style="display: none; height: 17px;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 612px;">37<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 629px;">38<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 646px;">39<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 663px;">40<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 680px;">41<span style="display: none; height: 17px;" class="ace_fold-widget ace_start ace_open"></span></div><div class="ace_gutter-cell " style="height: 17px; top: 697px;">42<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 17px; left: 48.3945px; right: 17px; bottom: 0px;"><div class="ace_content" style="top: -13px; left: 0px; width: 580.605px; height: 514px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 620px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 17px; top: 119px; left: 0px; right: 0px;"></div><div class="ace_bracket ace_start ace_br15" style="height: 17px; width: 7.69727px; top: 119px; left: 19.3945px;"></div><div class="ace_bracket ace_start ace_br15" style="height: 17px; width: 7.69727px; top: 85px; left: 19.3945px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: -221px; left: 0px;"><div class="ace_line_group" style="height: 17px; top: 221px;"><div class="ace_line" style="height: 17px;"><span class="ace_identifier">inp</span><span class="ace_punctuation ace_operator">.</span><span class="ace_identifier">on</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"close"</span><span class="ace_punctuation ace_operator">,</span> <span class="ace_paren ace_lparen">(</span><span class="ace_paren ace_rparen">)</span> <span class="ace_storage ace_type">=&gt;</span> <span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height: 17px; top: 238px;"><div class="ace_line" style="height: 17px;"><span class="ace_storage ace_type">let</span> <span class="ace_identifier">arr</span><span class="ace_keyword ace_operator">=</span><span class="ace_paren ace_lparen">[</span><span class="ace_paren ace_rparen">]</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 255px;"><div class="ace_line" style="height: 17px;"><span class="ace_keyword">for</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">i</span><span class="ace_keyword ace_operator">=</span><span class="ace_constant ace_numeric">0</span><span class="ace_punctuation ace_operator">;</span><span class="ace_identifier">i</span><span class="ace_keyword ace_operator">&lt;</span><span class="ace_identifier">userInput</span><span class="ace_paren ace_lparen">[</span><span class="ace_constant ace_numeric">0</span><span class="ace_paren ace_rparen">]</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_constant">length</span><span class="ace_punctuation ace_operator">;</span><span class="ace_identifier">i</span><span class="ace_keyword ace_operator">++</span><span class="ace_paren ace_rparen">)</span></div></div><div class="ace_line_group" style="height: 17px; top: 272px;"><div class="ace_line" style="height: 17px;"><span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height: 17px; top: 289px;"><div class="ace_line" style="height: 17px;">  <span class="ace_keyword">if</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">userInput</span><span class="ace_paren ace_lparen">[</span><span class="ace_identifier">i</span><span class="ace_paren ace_rparen">]</span><span class="ace_keyword ace_operator">==</span><span class="ace_string">"X"</span><span class="ace_paren ace_rparen">)</span></div></div><div class="ace_line_group" style="height: 17px; top: 306px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height: 17px; top: 323px;"><div class="ace_line" style="height: 17px;"><span class="ace_indent-guide">    </span>  <span class="ace_identifier">arr</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">push</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"A"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 340px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_rparen">}</span></div></div><div class="ace_line_group" style="height: 17px; top: 357px;"><div class="ace_line" style="height: 17px;">  </div></div><div class="ace_line_group" style="height: 17px; top: 374px;"><div class="ace_line" style="height: 17px;">  <span class="ace_keyword">if</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">userInput</span><span class="ace_paren ace_lparen">[</span><span class="ace_identifier">i</span><span class="ace_paren ace_rparen">]</span><span class="ace_keyword ace_operator">==</span><span class="ace_string">"Y"</span><span class="ace_paren ace_rparen">)</span></div></div><div class="ace_line_group" style="height: 17px; top: 391px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height: 17px; top: 408px;"><div class="ace_line" style="height: 17px;"><span class="ace_indent-guide">    </span>  <span class="ace_identifier">arr</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">push</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"B"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 425px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_rparen">}</span></div></div><div class="ace_line_group" style="height: 17px; top: 442px;"><div class="ace_line" style="height: 17px;">   <span class="ace_keyword">if</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">userInput</span><span class="ace_paren ace_lparen">[</span><span class="ace_identifier">i</span><span class="ace_paren ace_rparen">]</span><span class="ace_keyword ace_operator">==</span><span class="ace_string">"Z"</span><span class="ace_paren ace_rparen">)</span></div></div><div class="ace_line_group" style="height: 17px; top: 459px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height: 17px; top: 476px;"><div class="ace_line" style="height: 17px;"><span class="ace_indent-guide">    </span>  <span class="ace_identifier">arr</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">push</span><span class="ace_paren ace_lparen">(</span><span class="ace_string">"C"</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 493px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_rparen">}</span></div></div><div class="ace_line_group" style="height: 17px; top: 510px;"><div class="ace_line" style="height: 17px;">  </div></div><div class="ace_line_group" style="height: 17px; top: 527px;"><div class="ace_line" style="height: 17px;">  <span class="ace_keyword">else</span></div></div><div class="ace_line_group" style="height: 17px; top: 544px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_lparen">{</span></div></div><div class="ace_line_group" style="height: 17px; top: 561px;"><div class="ace_line" style="height: 17px;"><span class="ace_indent-guide">    </span>  <span class="ace_identifier">n</span><span class="ace_keyword ace_operator">=</span><span class="ace_identifier">userInput</span><span class="ace_paren ace_lparen">[</span><span class="ace_constant ace_numeric">0</span><span class="ace_paren ace_rparen">]</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">charCodeAt</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">i</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 578px;"><div class="ace_line" style="height: 17px;"><span class="ace_indent-guide">    </span>  <span class="ace_identifier">a</span><span class="ace_keyword ace_operator">=</span><span class="ace_variable ace_language">String</span><span class="ace_punctuation ace_operator">.</span> <span class="ace_support ace_function">fromCharCode</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">n</span><span class="ace_keyword ace_operator">+</span><span class="ace_constant ace_numeric">3</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 595px;"><div class="ace_line" style="height: 17px;"><span class="ace_indent-guide">    </span>  <span class="ace_identifier">arr</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function">push</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">a</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 612px;"><div class="ace_line" style="height: 17px;">  <span class="ace_paren ace_rparen">}</span></div></div><div class="ace_line_group" style="height: 17px; top: 629px;"><div class="ace_line" style="height: 17px;">  </div></div><div class="ace_line_group" style="height: 17px; top: 646px;"><div class="ace_line" style="height: 17px;">  </div></div><div class="ace_line_group" style="height: 17px; top: 663px;"><div class="ace_line" style="height: 17px;"><span class="ace_paren ace_rparen">}</span></div></div><div class="ace_line_group" style="height: 17px; top: 680px;"><div class="ace_line" style="height: 17px;"><span class="ace_storage ace_type">console</span><span class="ace_punctuation ace_operator">.</span><span class="ace_support ace_function ace_firebug">log</span><span class="ace_paren ace_lparen">(</span><span class="ace_identifier">arr</span><span class="ace_paren ace_rparen">)</span><span class="ace_punctuation ace_operator">;</span></div></div><div class="ace_line_group" style="height: 17px; top: 697px;"><div class="ace_line" style="height: 17px;"><span class="ace_paren ace_rparen">})</span><span class="ace_punctuation ace_operator">;</span></div></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_animate-blinking"><div class="ace_cursor" style="display: block; top: 119px; left: 27px; width: 8px; height: 17px; animation-duration: 1000ms;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 714px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 48.3945px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 597px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div>
</div>
<div class="tab-pane fade p-2" id="input-mobile" role="tabpanel" aria-labelledby="input-tab-mobile">
<div class="d-flex flex-fill flex-grow flex-column">
<div class="mt-2">
<h6 class="font-weight-bold">INPUT</h6>
<textarea id="inputValue-mobile" class="form-control limit-fix" rows="5" placeholder="Your Input Here"></textarea>
</div>
<div id="output-mobile" class="mt-2">
<div class="outputValue outputBox mt-2"><h5>Output: </h5><div><pre>[ '[', 'R', 'U', 'R' ]
</pre><h5>Execution Time:</h5><pre>0.074s</pre><h5>Memory Used: </h5><pre>8388kb</pre></div></div>
</div>
</div>
</div>
</div>
</div>
<div class="gutter gutter-horizontal" style="width: 10px;"></div><div class="flex-fill flex-grow desktop-view split" id="two" style="width: calc(50% - 5px);">
<ul class="nav nav-tabs ml-1" id="resultTab" role="tablist">
<li class="nav-item">
<a class="nav-link p-2" id="input-tab" data-toggle="tab" href="https://www.guvi.in/ide#input" role="tab" aria-controls="input" aria-selected="false">INPUT</a>
</li>
<li class="nav-item">
<a class="nav-link p-2 active" id="output-tab" data-toggle="tab" href="https://www.guvi.in/ide#output" role="tab" aria-controls="output" aria-selected="true">OUTPUT</a>
</li>
</ul>
<div class="tab-content p-1">
<div class="tab-pane fade p-2" id="input" role="tabpanel" aria-labelledby="input-tab">
<textarea id="inputValue" class="form-control limit-fix" rows="5" placeholder="Your Input Here" spellcheck="false"></textarea>
</div>
<div class="tab-pane fade p-2 active show" role="tabpanel" id="output" aria-labelledby="output-tab">
<div class="outputValue outputBox"><h5>Output: </h5><div><pre>[ '[', 'R', 'U', 'R' ]
</pre><h5>Execution Time:</h5><pre>0.074s</pre><h5>Memory Used: </h5><pre>8388kb</pre></div></div>
</div>
</div>
</div>
</div>
</main>
<div class="spinner spinner-border text-dark" role="status" style="display: none;">
<span class="sr-only">Loading...</span>
</div>
<div class="modal fade" id="reloadModal" tabindex="-1" role="dialog" aria-labelledby="reloadModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="reloadModalLabel">INACTIVITY</h5>
</div>
<div class="modal-body">
<p>Page Expired due to inactivity. Please reload the page to continue.</p>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-primary" id="reloadPage">Reload</button>
</div>
</div>
</div>
</div>
<div class="modal fade" id="editorSettingModal" tabindex="-1" role="dialog" aria-labelledby="editorSettingModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-slideout" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="editorSettingModalLabel">Editor Settings</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>
<div class="modal-body">
<h6 class="font-weight-bold p-2">Font Size</h6>
<div class="d-flex align-items-center justify-content-between p-2">
<input id="editor-font-size" type="range" name="fontSize" class="custom-range" min="10" max="40" value="14" step="1">
</div>
<h6 class="font-weight-bold p-2">Theme</h6>
<div class="form-group d-flex justify-content-around p-2" id="themeControl">
<div class="custom-control custom-radio custom-control-inline">
<input id="lightTheme" type="radio" name="theme" value="chrome" class="custom-control-input">
<label for="lightTheme" class="custom-control-label">Light</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
<input id="darkTheme" type="radio" name="theme" value="monokai" class="custom-control-input" checked="">
<label for="darkTheme" class="custom-control-label">Dark</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
 <input id="twilightTheme" type="radio" name="theme" value="twilight" class="custom-control-input">
<label for="twilightTheme" class="custom-control-label">Twilight</label>
</div>
</div>
<div class="d-flex justify-content-between p-3">
<h6 class="col pl-0 font-weight-bold">IntelliSense</h6>
<div class="d-flex col justify-content-start">
<label class="switch">
<input type="checkbox" id="autoCompletion" checked="">
<span class="slider round"></span>
</label>
</div>
</div>
<div class="d-flex justify-content-between p-3">
<h6 class="col pl-0 font-weight-bold">Code Wrap</h6>
<div class="d-flex col justify-content-start">
<label class="switch">
<input type="checkbox" id="codeWrap" checked="">
<span class="slider round"></span>
</label>
</div>
</div>
<div class="d-flex justify-content-between p-3">
<h6 class="col pl-0 font-weight-bold">Show Gutter</h6>
<div class="d-flex col justify-content-start">
<label class="switch">
<input type="checkbox" id="showGutter" checked="">
<span class="slider round"></span>
</label>
</div>
</div>
<div class="d-flex justify-content-between p-3">
<h6 class="col pl-0 font-weight-bold">Line Numbers</h6>
<div class="d-flex col justify-content-start">
<label class="switch">
<input type="checkbox" id="lineNumber" checked="">
<span class="slider round"></span>
</label>
</div>
</div>
<div class="d-flex justify-content-between align-items-center p-3">
<h6 class="col pl-0 font-weight-bold">Insert Code Template</h6>
<div class="d-flex col justify-content-start">
<button class="btn btn-primary" id="insertTemplate">Insert</button>
</div>
</div>
</div>
<div class="modal-footer">
<div class="d-flex justify-content-between align-items-center ">
<a class="align-items-center justify-content-around d-flex share-link" href="https://www.guvi.in/ide#">

<i class="fas fa-share-alt px-2"></i>
<span>Share it with friends</span>
</a>
<a href="https://www.guvi.in/ide#" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title="
                      &lt;h6&gt;GUVI {IDE}&lt;/h6&gt;
                      &lt;p&gt;Free online compiler to compile and run your programs online. It offers support for 20+ on demand programming languages&lt;/p&gt;">
<span class="material-icons">info</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div class="modal fade" id="debuggerModal" tabindex="-1" role="dialog" aria-labelledby="debuggerModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-slideout mw-100 w-100" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="debuggerModalLabel">Debugger</h5>
<button type="button" id="debuggerModalClose" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>
<div class="modal-body">
<div id="debuggerDiv">
<p>Loading Might take some time to stimulate Please hold on !</p>
<p class="is-invalid">Note : Using Long recursion may take so long</p>
</div>
</div>
<div class="modal-footer">
<div class="d-flex justify-content-between align-items-center ">
<a class="align-items-center justify-content-around d-flex share-link" href="https://www.guvi.in/ide#">

<i class="fas fa-share-alt px-2"></i>
<span>Share it with friends</span>
</a>
<a href="https://www.guvi.in/ide#" data-toggle="tooltip" data-placement="top" data-html="true" title="" data-original-title="
                    &lt;h6&gt;GUVI {IDE}&lt;/h6&gt;
                    &lt;p&gt;Free online compiler to compile and run your programs online. It offers support for 20+ on demand programming languages&lt;/p&gt;">
<span class="material-icons">info</span>
</a>
</div>
</div>
</div>
</div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="switchTemplatePrompt">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-0 d-flex justify-content-center">
<h5 class="modal-title">Keep the Code Changes?</h5>
</div>
<div class="modal-footer d-flex justify-content-around border-0">
<button type="button" class="btn btn-secondary text-white px-5" id="dontKeepChanges">No</button>
<button type="button" class="btn btn-primary px-5" id="keepChanges">Yes</button>
</div>
</div>
</div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="inputDetected">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-0 d-flex justify-content-center">
<h5 class="modal-title">Input Function Found !</h5>
</div>
<div class="modal-body">
<p>Please replace ⌨️ input function with some values while debugging.</p>
<p><small>Soon the feature will be supported</small></p>
</div>
<div class="modal-footer d-flex justify-content-around border-0">
<button type="button" class="btn btn-primary px-5" data-dismiss="modal" aria-label="Close">Try again Replacing Input</button>
</div>
</div>
</div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="unsupported">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-0 d-flex justify-content-center">
<h5 class="modal-title">Function Not Supported 🛑!</h5>
</div>
<div class="modal-body">
<p>We Do not support this Language, Supported Languages:</p>
<p><small>
</small></p><ul><small>


<li>Javascript</li>

<li>Python3</li>
<li>Ruby</li>

</small></ul><small>
 </small><p></p>
</div>
<div class="modal-footer d-flex justify-content-around border-0">
<button type="button" class="btn btn-primary px-5" data-dismiss="modal" aria-label="Close">Ok, I will change language</button>
</div>
</div>
</div>
</div>
<div class="modal fade" tabindex="-1" role="dialog" id="idePopUp">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content">
<div class="modal-header border-0 d-flex justify-content-center">
<h5 class="modal-title">Try the new Debugger! !</h5>
</div>
<div class="modal-body">
<p>Fix your code with the new Dubug option.</p>

<p>Supported Languages:</p>
<p>
<small>
</small></p><ul><small>


<li>Javascript</li>

<li>Python3</li>
<li>Ruby</li>

</small></ul><small>
</small>
<p></p>
</div>
<div class="modal-footer d-flex justify-content-around border-0">
<button type="button" class="btn btn-primary px-5" id="tryButton" data-dismiss="modal" aria-label="Close">Try it now!</button>
</div>
</div>
</div>
</div>
<script type="text/javascript" defer="" src="./obj_files/ide.js.download"></script>
<script src="./obj_files/api.js.download" defer=""></script>
<script defer="">
            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
            ga('create', 'UA-53114947-1', 'auto');
            ga('send', 'pageview');
        </script>
<script defer="" src="./obj_files/analytics.js.download"></script>
<script defer="" src="./obj_files/beacon.min.js.download" data-cf-beacon="{&quot;rayId&quot;:&quot;68f8f7c26b44352f&quot;,&quot;token&quot;:&quot;2f35337e9f74445394cc3c1f88e8effd&quot;,&quot;version&quot;:&quot;2021.8.1&quot;,&quot;si&quot;:10}"></script>


<div><div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; position: fixed; visibility: hidden; display: block; transition: right 0.3s ease 0s; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;"><div class="grecaptcha-logo"><iframe title="reCAPTCHA" src="./obj_files/anchor.html" width="256" height="60" role="presentation" name="a-x8d2nv6kncku" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><div class="grecaptcha-error"></div><textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;" src="./obj_files/saved_resource.html"></iframe></div><div class=" ace_editor ace_autocomplete ace_dark ace-monokai" style="font-size: 14px; bottom: 118px; left: 242.854px; height: 152px; display: none;"><textarea class="ace_text-input" wrap="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="opacity: 0; font-size: 1px; top: 0px; left: -100px;"></textarea><div class="ace_gutter" aria-hidden="true" style="display: none; left: 0px; width: 41px;"><div class="ace_layer ace_gutter-layer ace_folding-enabled" style="height: 1e+06px; top: 0px; left: 0px; width: 41px;"><div class="ace_gutter-cell " style="height: 19px; top: 0px;">1<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 19px;">2<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 38px;">3<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 57px;">4<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 76px;">5<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 95px;">6<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 114px;">7<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 133px;">8<span style="display: none;"></span></div><div class="ace_gutter-cell " style="height: 19px; top: 152px;">9<span style="display: none;"></span></div></div></div><div class="ace_scroller" style="line-height: 0px; left: 0px; right: 17px; bottom: 0px;"><div class="ace_content" style="cursor: default; top: 0px; left: 0px; width: 281px; height: 190px;"><div class="ace_layer ace_print-margin-layer"><div class="ace_print-margin" style="left: 4px; visibility: hidden;"></div></div><div class="ace_layer ace_marker-layer"><div class="ace_active-line" style="height: 19px; top: 0px; left: 0px; right: 0px;"></div></div><div class="ace_layer ace_text-layer" style="height: 1e+06px; margin: 0px 4px; top: 0px; left: 0px;"><div class="ace_line ace_selected" style="height: 19px; top: 0px;"><span class="ace_completion-highlight">a</span><span class="ace_">rr</span><span class="ace_completion-meta">local</span></div><div class="ace_line" style="height: 19px; top: 19px;"><span class="ace_completion-highlight">A</span><span class="ace_completion-meta">local</span></div><div class="ace_line" style="height: 19px; top: 38px;"><span class="ace_completion-highlight">a</span><span class="ace_">lert</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 57px;"><span class="ace_completion-highlight">a</span><span class="ace_">rguments</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 76px;"><span class="ace_completion-highlight">A</span><span class="ace_">rray</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 95px;"><span class="ace_completion-highlight">A</span><span class="ace_">rrayBuffer</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 114px;"><span class="ace_completion-highlight">a</span><span class="ace_">sync</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 133px;"><span class="ace_completion-highlight">a</span><span class="ace_">wait</span><span class="ace_completion-meta">keyword</span></div><div class="ace_line" style="height: 19px; top: 152px;"><span class="ace_">ch</span><span class="ace_completion-highlight">a</span><span class="ace_">rCodeAt</span><span class="ace_completion-meta">local</span></div></div><div class="ace_layer ace_marker-layer"></div><div class="ace_layer ace_cursor-layer ace_hidden-cursors" style="opacity: 0;"><div class="ace_cursor" style="display: block; top: 0px; left: 4px; width: 8px; height: 19px;"></div></div></div></div><div class="ace_scrollbar ace_scrollbar-v" style="width: 22px; bottom: 0px;"><div class="ace_scrollbar-inner" style="width: 22px; height: 1026px;">&nbsp;</div></div><div class="ace_scrollbar ace_scrollbar-h" style="display: none; height: 22px; left: 0px; right: 17px;"><div class="ace_scrollbar-inner" style="height: 22px; width: 281px;">&nbsp;</div></div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: hidden;"><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font: inherit; overflow: visible;">הההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההההה</div><div style="height: auto; width: auto; top: 0px; left: 0px; visibility: hidden; position: absolute; white-space: pre; font-style: inherit; font-variant: inherit; font-stretch: inherit; font-size: inherit; line-height: inherit; font-family: inherit; overflow: visible;">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div></div></div></body><grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration><grammarly-mirror data-grammarly-shadow-root="true" class="cGcvT"></grammarly-mirror></html>