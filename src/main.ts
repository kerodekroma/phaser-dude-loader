import Phaser from "phaser";

// SCENES
import MainScene from "@scenes/main.scene";

let game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 360,
  height: 360,
  physics: {
    default: "arcade",
  },
  scene: [MainScene],
  plugins: {},
});

export default game;
