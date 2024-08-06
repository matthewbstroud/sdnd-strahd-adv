export let doors = {
    "setDoorState": setDoorState,
    "tagSelected": tagSelected
};

async function setDoorState(name, state) {
    let doors = await stroudDnD.tagging.getTaggedDocuments(canvas.scene.walls, "sdnd-strahd-adv", "documentName", name);
    if (!doors) {
        console.log(`No doors found with document name ${name}!`);
        return;
    }
    for (let door of doors) {
        await door.update({ "ds": state });
    }
}

async function tagSelected(name) {
    let controlledDoors = canvas.walls.controlled.filter(d => d.document.door == 1);
    if (!controlledDoors) {
        console.log("no doors selected");
        return;
    }
    stroudDnD.tagging.tagDocuments(controlledDoors.map(l => l.document), "sdnd-strahd-adv", "documentName", name)
}