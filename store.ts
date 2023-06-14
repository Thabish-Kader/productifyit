import { proxy } from "valtio";

const state = proxy({
	color: "#464694",
	frontSide: "./front.png",
	backSide: "./back.png",
	splineSide: "./side.png",
	splineSide2: "./oppositeside.png",
	topSide: "./top.png",
});

export default state;
