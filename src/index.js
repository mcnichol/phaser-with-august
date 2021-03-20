import Phaser from "phaser";

import Preload from "./scenes/preload";
import Game from "./scenes/game";

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 800,
    height: 600,
    scene: [
        Preload,
        Game
    ]
};

const game = new Phaser.Game(config);