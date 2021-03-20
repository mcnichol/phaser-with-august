import spaceCraft1 from "../assets/Isometric/spaceCraft1_S.png";
import metalButton from "../assets/Isometric/metalTile_NE.png";

export default class Preload extends Phaser.Scene {
    constructor() {
        super("preload");
    }

    preload() {
        this.load.image("spaceCraft1", spaceCraft1);
        this.load.image("tileButton", metalButton);
    }

    create() {
        this.scene.start("game")
    }
}