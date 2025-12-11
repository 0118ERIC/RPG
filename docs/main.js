import BootScene from './scenes/BootScene.js';
import WorldScene from './scenes/WorldScene.js';
import BattleScene from './scenes/BattleScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 640,
  height: 384,
  pixelArt: true,
  backgroundColor: '#111',
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: [BootScene, WorldScene, BattleScene]
};

new Phaser.Game(config);