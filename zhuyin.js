// 共用注音排版工具
const ZY_PUNCT = '，。、「」〈〉：！？・（）《》；';
const ZY_OPEN = '「〈《（';

function zyUnit(c, s) {
  let tone = '', light = false, b = s || '';
  const last = b.slice(-1);
  if (last === '˙') { light = true; b = b.slice(0, -1); }
  else if ('ˊˇˋ'.includes(last) && last) { tone = last; b = b.slice(0, -1); }
  const marks = (light ? '<i>˙</i>' : '') + [...b].map(x => '<i>' + x + '</i>').join('');
  return '<span class="zc"><span class="zh-char">' + c + '</span><span class="col">' + marks + '</span><span class="tn">' + tone + '</span></span>';
}

// pair = [國字文字, 對應注音字串]；回傳含注音標示的 HTML（不含外層容器）
function zyInline(pair) {
  if (!pair) return '';
  const [t, z] = pair;
  const zs = (z || '').trim().split(/\s+/).filter(Boolean);
  let i = 0;
  const tokens = [];
  let pre = '';
  for (const c of t) {
    if (ZY_OPEN.includes(c)) { pre += '<span class="pu">' + c + '</span>'; }
    else if (ZY_PUNCT.includes(c)) {
      const x = '<span class="pu">' + c + '</span>';
      if (tokens.length) tokens[tokens.length - 1] += x; else tokens.push(x);
    } else if (c.trim()) {
      tokens.push(pre + zyUnit(c, zs[i++]));
      pre = '';
    }
  }
  if (pre) tokens.push(pre);
  return tokens.map(x => '<span class="tk">' + x + '</span>').join('');
}

// 回傳一整行 <div class="zl ...">
function zyLine(pair, cls) {
  const h = zyInline(pair);
  return '<div class="zl' + (cls ? ' ' + cls : '') + '">' + h + '</div>';
}

// 作業簿格子標題：pair -> HTML
function zyGridTitle(pair) {
  const [t, z] = pair;
  const zs = z.trim().split(' ');
  return '<div class="grid">' + [...t].map((c, i) => {
    let s = zs[i], tone = '', light = false;
    const last = s.slice(-1);
    if (last === '˙') { light = true; s = s.slice(0, -1); }
    else if ('ˊˇˋ'.includes(last)) { tone = last; s = s.slice(0, -1); }
    const marks = (light ? '<i>˙</i>' : '') + [...s].map(x => '<i>' + x + '</i>').join('');
    return '<div class="gu"><div class="gc">' + c + '</div><div class="gz"><span class="c">' + marks + '</span><span class="t">' + tone + '</span></div></div>';
  }).join('') + '</div>';
}
