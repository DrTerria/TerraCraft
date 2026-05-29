ItemEvents.modification(event => {
    // dragon scale armor buff
    const dragoncolors = ["red", "bronze", "green", "gray", "blue", "white", "sapphire", "silver", "electric", "amythest", "copper", "black"]
    for (const i of dragoncolors) {
        event.modify("iceandfire:armor_" + i + "_chestplate", item => {
            item.armorProtection = 11;
            item.armorToughness = 6;
            item.armorKnockbackResistance = 0.20;
        })
    }
    for (const i of dragoncolors) {
        event.modify("iceandfire:armor_" + i + "_helmet", item => {
            item.armorProtection = 7;
            item.armorToughness = 6;
            item.armorKnockbackResistance = 0.20;
        })
    }
    for (const i of dragoncolors) {
        event.modify("iceandfire:armor_" + i + "_leggings", item => {
            item.armorProtection = 9;
            item.armorToughness = 6;
            item.armorKnockbackResistance = 0.20;
        })
    }
    for (const i of dragoncolors) {
        event.modify("iceandfire:armor_" + i + "_boots", item => {
            item.armorProtection = 7;
            item.armorToughness = 5;
            item.armorKnockbackResistance = 0.20;
        })
    }
})