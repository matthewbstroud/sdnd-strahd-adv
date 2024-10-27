import { tokens } from "./Tokens/tokens.js";

const migrationPacks = [
    `sdnd-strahd-adv.sdnd-cos-actors`,
    `sdnd-strahd-adv.snd-curse-of-strahd`,
    `sdnd-strahd-adv.sdnd-cos-macros`,
    `sdnd-strahd-adv.sdnd-cos-roll-tables`
];

let utility = {
    "forceDnd5eMigration": async function _forceDnd5eMigration() {
        for (const packID of migrationPacks) {
            let pack = await game.packs.get(packID);
            await dnd5e.migrations.migrateCompendium(pack);
        }
        console.log("sdnd-tarokka compendium migration complete...");
    }
};

globalThis['sdndStrahd'] = {
	tokens,
	utility
}