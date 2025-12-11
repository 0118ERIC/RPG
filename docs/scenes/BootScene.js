import SaveManager from '../systems/SaveManager.js';
export default class BootScene extends Phaser.Scene {
  constructor(){ super('Boot'); }
  preload(){
    this.load.image('tiles', '../assets/tiles/tiles.png');
    this.load.tilemapTiledJSON('map', '../assets/maps/map.json');
    this.load.image('player', '../assets/sprites/player.png');
    this.load.audio('bgm', '../assets/audio/bgm.wav');
    this.load.json('dialogs', '../data/dialogs.json');
    this.load.json('items', '../data/items.json');
  }
  create(){
    this.registry.set('save', new SaveManager());
    const save = this.registry.get('save').load() || { mapKey:'map', player:{ tx:5, ty:5, hp:100, mp:30, atk:10, def:5, elem:'neutral' }, flags:{}, relations:{}, inventory:[] };
    this.registry.set('state', save);
    this.scene.start('World');
  }
}