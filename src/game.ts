import 'phaser';
import io from 'socket.io-client';

import config from './config';
import SkyTower from './scenes/SkyTower';

class Game extends Phaser.Game {
    private socket: SocketIO.Socket;
    constructor() {
        super(config);
        this.socket = io('http://localhost:3000');
        this.scene.add('Skytower', SkyTower);
        this.scene.start('Skytower');
    }
}

const game = new Game();
console.log(game);

// setTimeout(() => {
//     game.scene.getScene('Skytower').scene.stop();
// }, 5000);
