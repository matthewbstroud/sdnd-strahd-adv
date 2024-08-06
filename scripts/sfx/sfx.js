export let sfx = {
    "toggleSfx": toggleSfx,
    "tagSelectedSfx": tagSelectedSfx
};

async function toggleSfx(name) {
    let sounds = await stroudDnD.tagging.getTaggedDocuments(canvas.scene.sounds, "sdnd-strahd-adv", "documentName", name);
    if (!sounds) {
        console.log(`No sfx found with document name ${name}!`);
        return;
    }
    for (let sound of sounds) {
        await sound.update({ "hidden": !sound.hidden });
    }
}

async function tagSelectedSfx(name) {
    stroudDnD.tagging.tagDocuments(canvas.sounds.controlled.map(s => s.document), "sdnd-strahd-adv", "documentName", name)
}