---
title: "Pinyin Converter"
title-chn: "拼音转换器"
---

<style>
    .output {
        font-size: 2.25em; line-height: 2em; margin-top: 1em;
    }
</style>

# <span class="eng"> Pinyin Converter </span><span class="chn"> <ruby>拼<rt>pīn</rt></ruby><ruby>音<rt>yīn</rt></ruby><ruby>转<rt>zhuǎn</rt></ruby><ruby>换<rt>huàn</rt></ruby><ruby>器<rt>qì</rt></ruby> </span>


<span class="eng"> This converter adds pinyin above the Chinese characters.  </span><span class="chn"> <ruby>此<rt>cǐ</rt></ruby><ruby>转<rt>zhuǎn</rt></ruby><ruby>换<rt>huàn</rt></ruby><ruby>器<rt>qì</rt></ruby><ruby>在<rt>zài</rt></ruby><ruby>中<rt>zhōng</rt></ruby><ruby>文<rt>wén</rt></ruby><ruby>字<rt>zì</rt></ruby><ruby>符<rt>fú</rt></ruby><ruby>上<rt>shàng</rt></ruby><ruby>添<rt>tiān</rt></ruby><ruby>加<rt>jiā</rt></ruby><ruby>拼<rt>pīn</rt></ruby><ruby>音<rt>yīn</rt></ruby><ruby>。</ruby> </span>

<script src="pinyin.js"></script>

<textarea id="textarea" placeholder="在这里输入中文……"></textarea>
<div class="output" id="output"></div>

<script>
    function isChinese(char) {
      return /[\u4e00-\u9fa5]/.test(char);
    }

    window.addEventListener('DOMContentLoaded', function() {
      const input = document.getElementById('input');
      const output = document.getElementById('output');

      function convertToRubyPerCharWithContext(str) {
        // Get per-character pinyin, context aware
        const pinyinArr = window.pinyinPro.pinyin(str, {
          type: 'array',
          segment: true,
          toneType: 'mark'
        });

        let html = '';
        let pinIdx = 0;

        for (let ch of str) {
          if (isChinese(ch)) {
            // pinyinArr has one entry per character (not per word)
            const py = pinyinArr[pinIdx++] || '';
            html += `<ruby>${ch}<rt>${py}</rt></ruby>`;
          } else if (ch === '\n') {
            html += '<br>';
            pinIdx++;
          } else if (ch === ' ') {
            html += `<ruby>&nbsp;</ruby>`;
            pinIdx++;
          } else {
            html += `<ruby>${ch}</ruby>`;
            pinIdx++;
          }
        }
        return html;
      }

      input.addEventListener('textarea', () => {
        if (typeof window.pinyinPro === 'undefined') {
          output.innerHTML = `<span class="eng">Load failed, please reload.</span><span class="chn"><ruby>加<rt>jiā</rt></ruby><ruby>载<rt>zài</rt></ruby><ruby>失<rt>shī</rt></ruby><ruby>败<rt>bài</rt></ruby>，<ruby>请<rt>qǐng</rt></ruby><ruby>刷<rt>shuā</rt></ruby><ruby>新<rt>xīn</rt></ruby><ruby>页<rt>yè</rt></ruby><ruby>面<rt>miàn</rt></ruby>。</span>`;
          return;
          updateMyLanguage();
        }
        output.innerHTML = convertToRubyPerCharWithContext(input.value);
      });
    });
</script>