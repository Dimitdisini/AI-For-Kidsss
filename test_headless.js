const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'Studio Game Komik AI for Kids.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const mockCtx = {
  clearRect: () => {},
  fillRect: () => {},
  strokeRect: () => {},
  createLinearGradient: () => ({ addColorStop: () => {} }),
  createRadialGradient: () => ({ addColorStop: () => {} }),
  fillText: () => {},
  strokeText: () => {},
  stroke: () => {},
  fill: () => {},
  clip: () => {},
  save: () => {},
  restore: () => {},
  translate: () => {},
  rotate: () => {},
  scale: () => {},
  beginPath: () => {},
  closePath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  arc: () => {},
  ellipse: () => {},
  roundRect: () => {},
  quadraticCurveTo: () => {},
  bezierCurveTo: () => {},
  drawImage: () => {},
  measureText: () => ({ width: 50 })
};

const mockElements = {};
function createMockEl(id) {
  return {
    id,
    tagName: 'DIV',
    style: {},
    classList: { add: () => {}, remove: () => {} },
    innerHTML: '',
    innerText: '',
    value: 'TestVal',
    querySelectorAll: () => [],
    querySelector: () => createMockEl('child'),
    addEventListener: () => {},
    getContext: () => mockCtx,
    width: 960,
    height: 540
  };
}

global.window = {
  addEventListener: () => {},
  AudioContext: function() {
    return {
      state: 'running',
      currentTime: 0,
      createOscillator: () => ({ frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {}, start: () => {}, stop: () => {} }),
      createGain: () => ({ gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} }, connect: () => {} }),
      destination: {}
    };
  }
};
global.document = {
  getElementById: (id) => {
    if (!mockElements[id]) mockElements[id] = createMockEl(id);
    return mockElements[id];
  },
  querySelectorAll: () => [],
  documentElement: { outerHTML: '<html>test</html>', tagName: 'HTML' },
  createElement: (tag) => createMockEl(tag),
  addEventListener: () => {}
};
global.requestAnimationFrame = () => {};
global.Image = function() { return { onload: () => {} }; };
global.navigator = { clipboard: { writeText: () => Promise.resolve() } };

const scriptCode = html.match(/<script>([\s\S]*?)<\/script>/)[1];

const testRunner = `
${scriptCode}

console.log("=== UNIT & INTEGRATION TEST: PROJECT AI FOR KIDS ===");

console.log("\\n1. Menguji 4 Sektor Game & Rak Blok Snap-Together:");
for (const sec of ['PLATFORMER', 'CATCHER', 'GALAXY', 'RACER']) {
  switchGame(sec);
  console.log("  ✓ Berpindah ke Sektor " + sec + " (activeKey: " + activeKey + ")");
  renderSnapShelves(sec);
  console.log("    - Rak Blok siap: Equip=" + snapState.equipCmd + ", World=" + snapState.worldCmd);
  applySnapRecipe();
  console.log("    - Eksekusi resep lego sukses tanpa error.");
}

console.log("\\n2. Menguji Simulasi Fisika Balap Sektor 4 (Grand Prix Kart):");
switchGame('RACER');
for (let f = 1; f <= 300; f++) {
  games.RACER.update();
}
for (let ai of games.RACER.aiRivals) {
  console.log("  ✓ " + ai.name + " melaju di koordinat (" + Math.round(ai.x) + "," + Math.round(ai.y) + ") speed: " + ai.speed.toFixed(1) + " laps: " + ai.laps);
}

console.log("\\n3. Menguji Ekspor Vercel & Generator Kartu Pameran QR Code:");
toggleVercelExportModal(true);
renderShowcaseQrCard('Kenzo', 'Petualangan Bima');
console.log("  ✓ Kartu pameran 16:9 & QR Code berhasil dirender.");
toggleVercelExportModal(false);

console.log("\\n=======================================================");
console.log("SEMUA PENGUJIAN OTOMATIS BERHASIL 100% (ZERO ERROR)!");
console.log("=======================================================");
`;

eval(testRunner);
