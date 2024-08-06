export let lighting = {
    "toggleLights": toggleLights,
    "tagSelectedLights": tagSelectedLights
};

async function toggleLights(name) {
    let lights = await stroudDnD.tagging.getTaggedDocuments(canvas.scene.lights, "sdnd-strahd-adv", "documentName", name);
    if (!lights) {
        console.log(`No lights found with document name ${name}!`);
        return;
    }
    for (let light of lights) {
        await light.update({ "hidden": !light.hidden });
    }
}

async function tagSelectedLights(name) {
    stroudDnD.tagging.tagDocuments(canvas.lighting.controlled.map(l => l.document), "sdnd-strahd-adv", "documentName", name)
}