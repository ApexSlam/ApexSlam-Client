import 'phaser';

import { sky, clouds } from '../handles/backgrounds';
import { bandit } from '../handles/characters';
import { basicPlatform } from '../handles/platforms';

export default class SkyTower extends Phaser.Scene {
    private platforms: Phaser.Physics.Arcade.StaticGroup;
    private cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private player: Phaser.Physics.Arcade.Sprite;

    constructor() {
        super('Skytower');
    }

    preload(): void {
        this.load.image(sky.key, sky.path);
        this.load.image(bandit.key, bandit.path);
        this.load.image(clouds.key, clouds.path);
        this.load.image(basicPlatform.key, basicPlatform.path);
    }

    create(): void {
        // Add background
        const bgSky = this.add.image(400, 300, sky.key);
        bgSky.setDisplaySize(800, 600);

        const bgClouds = this.add.image(400, 450, clouds.key);
        bgClouds.setDisplaySize(800, 300);

        // Add platforms
        if (!this.platforms) {
            this.platforms = this.physics.add.staticGroup();
        }
        this.platforms.create(400, 568, basicPlatform.key).setScale(2).refreshBody();

        this.platforms.create(600, 400, basicPlatform.key);
        this.platforms.create(50, 250, basicPlatform.key);
        this.platforms.create(750, 220, basicPlatform.key);

        // Add player
        this.player = this.physics.add.sprite(100, 450, bandit.key);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        // TODO: Set up animations for the player

        // Set up collisions between player and terrain
        this.physics.add.collider(this.player, this.platforms);

        // Set up movement
        if (!this.cursors) {
            this.cursors = this.input.keyboard.createCursorKeys();
        }
    }

    update(): void {
        if (!this.cursors) {
            console.log('not settings cursor');
        }

        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}
