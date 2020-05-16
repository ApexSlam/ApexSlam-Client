import 'phaser';

import config from './config';
import SkyTower from './scenes/SkyTower';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Skytower', SkyTower);
        this.scene.start('Skytower');
    }
}

const game = new Game();
console.log(game);

// setTimeout(() => {
//     game.scene.getScene('Skytower').scene.stop();
// }, 5000);
