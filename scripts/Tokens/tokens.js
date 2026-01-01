
export let tokens = {
    "morph": foundry.utils.debounce(morph, 250)
}
const defaultTokenSettings = {
    "texture": {
        src: ""
    }
}
const morphData = {
    "ezmerelda_wagon": {
        "main": {
            "img": "modules/sdnd-strahd-adv/images/maps/Areas/V/Van%20Richten%27s%20Tower%20(22x30%20100px)/Ezmerelda%27s%20Wagon%20Roof%20100px.webp",
            "tokenSettings": defaultTokenSettings
        },
        "alt": {
            "img": "modules/sdnd-strahd-adv/images/maps/Areas/V/Van%20Richten%27s%20Tower%20(22x30%20100px)/Ezmerelda%27s%20Wagon%20100px.webp",
            "tokenSettings": defaultTokenSettings
        }
    }
}

async function morph(tokenId) {
    let token = canvas.scene.tokens.get(tokenId);
    const actorName = await token.actor?.getFlag("sdnd-strahd-adv", "actorName");
    const md = morphData[actorName];
    if (!md) {
        console.log(`${token.name} is not morphable`);
        return;
    }
    let tokenSettings = {};
    if (token.texture.src.endsWith(md.main.img)) {
        // load alt data
        tokenSettings = md.alt.tokenSettings;
        tokenSettings.texture.src = token.texture.src.replace(md.main.img, md.alt.img);
    }
    else if (token.texture.src.endsWith(md.alt.img)) {
        // load main data
        tokenSettings = md.main.tokenSettings;
        tokenSettings.texture.src = token.texture.src.replace(md.alt.img, md.main.img);
    }
    await token.update(tokenSettings);
}
