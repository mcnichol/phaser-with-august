export default class Game extends Phaser.Scene {
    constructor() {
        super("game");
    }

    create() {
        let {width, height} = this.sys.game.canvas;

        this.sc1 = this.add.image(400, 150, "spaceCraft1");
        this.tb = this.add.image(width / 2, (height / 2) + 150, "tileButton").setInteractive();

        this.tb.on("pointerover", (pointer) => {
            this.tb.setTint(0x478eff);
        });

        this.tb.on("pointerout", (pointer) => {
            this.tb.clearTint();
        })
    }

    update(time, delta) {

    }
}