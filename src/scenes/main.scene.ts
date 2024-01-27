export default class MainScene extends Phaser.Scene {
  private animConfig: Phaser.Types.Animations.Animation = {};

  preload() {
    const { width, height } = this.sys.game.canvas;
    this.load.atlas(
      "PhaserDudeLoader",
      "assets/images/phaser_dude_loader/phaser_dude_loader.png",
      "assets/images/phaser_dude_loader/phaser_dude_loader.json"
    );

    this.animConfig = {
      key: "default",
      frames: "PhaserDudeLoader",
      frameRate: 20,
      repeat: -1,
    };

    this.load.on("complete", () => {
      this.generateBackground(width, height);
      this.anims.create(this.animConfig);
      const sprite = this.add.sprite(width / 2, height / 2, "PhaserDudeLoader");
      sprite.play("default");
    });
  }

  generateBackground(width: number, height: number) {
    let texture = this.textures.createCanvas("bg_texture", width, height);
    const gradient = texture!.context.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#003787");
    gradient.addColorStop(1, "#366fbe");
    texture!.context.fillStyle = gradient;
    texture!.context.fillRect(0, 0, width, height);
    texture!.refresh();
    const bgImage = this.add.image(0, 0, "bg_texture");
    bgImage.setOrigin(0, 0);
  }
}
