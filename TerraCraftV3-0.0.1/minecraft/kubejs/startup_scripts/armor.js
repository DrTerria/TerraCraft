ItemEvents.modification(event => {
    // Ignitum buffs
    event.modify("cataclysm:ignitium_helmet", item => {
        item.armorProtection = 10;
        item.armorToughness = 8;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:ignitium_chestplate", item => {
        item.armorProtection = 16;
        item.armorToughness = 8;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:ignitium_elytra_chestplate", item => {
        item.armorProtection = 16;
        item.armorToughness = 8;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:ignitium_leggings", item => {
        item.armorProtection = 12;
        item.armorToughness = 8;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:ignitium_boots", item => {
        item.armorProtection = 9;
        item.armorToughness = 8;
        item.armorKnockbackResistance = 0.25;
    })
    // Cursium buff
    event.modify("cataclysm:cursium_helmet", item => {
        item.armorProtection = 7;
        item.armorToughness = 5;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:cursium_chestplate", item => {
        item.armorProtection = 13;
        item.armorToughness = 6;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:cursium_leggings", item => {
        item.armorProtection = 10;
        item.armorToughness = 6;
        item.armorKnockbackResistance = 0.25;
    })
    event.modify("cataclysm:cursium_boots", item => {
        item.armorProtection = 7;
        item.armorToughness = 5;
        item.armorKnockbackResistance = 0.25;
    })
    // diamond netherite buff
    event.modify("advancednetherite:netherite_diamond_helmet", item => {
        item.armorProtection = 6;
        item.armorToughness = 5;
        item.armorKnockbackResistance = 0.125;
    })
    event.modify("advancednetherite:netherite_diamond_chestplate", item => {
        item.armorProtection = 10;
        item.armorToughness = 5;
        item.armorKnockbackResistance = 0.125;
    })
    event.modify("advancednetherite:netherite_diamond_leggings", item => {
        item.armorProtection = 8;
        item.armorToughness = 5;
        item.armorKnockbackResistance = 0.125;
    })
    event.modify("advancednetherite:netherite_diamond_boots", item => {
        item.armorProtection = 6;
        item.armorToughness = 5;
        item.armorKnockbackResistance = 0.125;
    })
})


