ServerEvents.recipes(event => { 
    event.shaped(
        Item.of('simplyswords:bramblethorn'),
        [
            'ABC',
            'BDB',
            'EBA'
        ],
        {
            E: 'minecraft:wheat_seeds',
            B: 'minecraft:stick',
            C: 'minecraft:spider_eye',
            A: 'minecraft:string',
            D: 'minecraft:wooden_sword'
        }
    )
    event.shaped(
        Item.of('simplyswords:toxic_longsword'),
        [
            ' AB',
            'CDA',
            'EC '
        ],
        {
            C: 'minecraft:iron_nugget',
            B: 'minecraft:poisonous_potato',
            E: 'minecraft:iron_ingot',
            A: 'irons_spellbooks:arcane_essence',
            D: 'minecraft:stone_sword'
        }
    )
    event.shaped(
        Item.of('simplyswords:emberlash'),
        [
            ' AB',
            'ACA',
            'AA '
        ],
        {
            A: 'minecraft:iron_nugget',
            C: 'minecraft:iron_ingot',
            B: 'ars_nouveau:fire_essence'
        }
    )
    event.shaped(
        Item.of('simplyswords:hiveheart'),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            D: 'minecraft:beehive',
            C: 'minecraft:honeycomb',
            E: 'minecraft:stick',
            B: 'minecraft:honeycomb_block',
            A: 'minecraft:honey_block'
        }
    )
    event.shaped(
        Item.of('simplyswords:storms_edge'),
        [
            ' AB',
            'ACA',
            'BA '
        ],
        {
            B: 'irons_spellbooks:lightning_bottle',
            C: 'simplyswords:iron_twinblade',
            A: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('simplyswords:frostfall'),
        [
            'ABA',
            'BCB',
            ' A '
        ],
        {
            A: 'minecraft:blue_ice',
            B: 'minecraft:snow_block',
            C: 'minecraft:snowball'
        }
    )
    event.shaped(
        Item.of('simplyswords:mjolnir'),
        [
            'AAA',
            'BCB',
            'DED'
        ],
        {
            E: 'minecraft:iron_nugget',
            C: 'irons_spellbooks:lightning_rune',
            B: 'minecraft:iron_ingot',
            D: 'bosses_of_mass_destruction:ancient_anima',
            A: 'minecraft:iron_block'
        }
    )
    event.shaped(
        Item.of('simplyswords:livyatan'),
        [
            'ABC',
            'DEB',
            'EDA'
        ],
        {
            D: 'irons_spellbooks:permafrost_shard',
            A: 'quark:permafrost',
            C: 'mowziesmobs:ice_crystal',
            B: 'minecraft:polished_blackstone',
            E: 'irons_spellbooks:frosted_helve'
        }
    )
    event.shaped(
        Item.of('simplyswords:arcanethyst'),
        [
            ' AB',
            'CDA',
            'EC '
        ],
        {
            A: 'irons_spellbooks:arcane_ingot',
            D: 'simplyswords:iron_halberd',
            C: 'irons_spellbooks:arcane_essence',
            E: 'minecraft:amethyst_shard',
            B: 'irons_spellbooks:arcane_rune'
        }
    )
    event.shaped(
        Item.of('simplyswords:flamewind'),
        [
            'ABC',
            'BDB',
            'ABA'
        ],
        {
            A: 'alexscaves:heavy_bone',
            B: 'alexscaves:tough_hide',
            C: 'alexscaves:tectonic_shard',
            D: 'alexscaves:primal_magma'
        }
    )
    event.shaped(
        Item.of('simplyswords:icewhisper'),
        [
            'ABC',
            'BDE',
            'DEA'
        ],
        {
            E: 'irons_spellbooks:permafrost_shard',
            B: 'quark:permafrost',
            C: 'mowziesmobs:ice_crystal',
            A: 'irons_spellbooks:ice_rune',
            D: 'irons_spellbooks:frosted_helve'
        }
    )
    event.remove({output: 'simplyswords:righteous_relic'})
    event.shaped(
        Item.of('simplyswords:righteous_relic'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'create:brass_ingot',
            C: 'minecraft:golden_apple',
            D: 'simplyswords:dormant_relic',
            B: 'bosses_of_mass_destruction:blazing_eye',
            E: 'enigmaticaddons:pure_heart'
        }
    )
    event.remove({output: 'simplyswords:tainted_relic'})
    event.shaped(
        Item.of('simplyswords:tainted_relic'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            A: 'minecraft:sculk',
            C: 'simplyswords:dormant_relic',
            B: 'minecraft:wither_rose',
            D: 'alexsmobs:hemolymph_sac'
        }
    )
    event.shaped(
        Item.of('simplyswords:hearthflame'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'cataclysm:lava_power_cell',
            B: 'bosses_of_mass_destruction:blazing_eye',
            D: 'simplyswords:netherite_greathammer',
            C: 'alloyed:steel_ingot'
        }
    )
    event.shaped(
        Item.of('simplyswords:enigma'),
        [
            ' AB',
            'CBA',
            'DC '
        ],
        {
            C: 'advancednetherite:netherite_gold_ingot',
            B: 'minecraft:emerald_block',
            A: 'cataclysm:essence_of_the_storm',
            D: 'minecraft:stick'
        }
    )
    event.remove({output: 'simplyswords:harbinger'})
    event.shaped(
        Item.of('simplyswords:harbinger'),
        [
            'ABC',
            'BEB',
            'DBA'
        ],
        {
            A: 'alexscaves:pure_darkness',
            D: 'simplyswords:tainted_relic',
            B: 'alexscaves:shadow_silk',
            C: 'enigmaticlegacy:etherium_ore',
            E: 'traveloptics:abyssal_spellweave_ingot'
        }
    )
    event.shaped(
        Item.of('simplyswords:tempest'),
        [
            'ABC',
            'DEF',
            'AGC'
        ],
        {
            C: 'irons_spellbooks:permafrost_shard',
            E: 'simplyswords:netherite_chakram',
            D: 'iceandfire:fire_dragon_blood',
            A: 'minecraft:blaze_powder',
            B: 'apotheosis:infused_breath',
            G: 'cataclysm:essence_of_the_storm',
            F: 'iceandfire:ice_dragon_blood'
        }
    )
    event.shaped(
        Item.of('simplyswords:thunderbrand'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            B: 'iceandfire:lightning_dragon_blood',
            A: 'irons_spellbooks:lightning_rune',
            D: 'simplyswords:netherite_halberd',
            C: 'enigmaticlegacy:astral_dust'
        }
    )
    event.shaped(
        Item.of('simplyswords:stars_edge'),
        [
            ' AB',
            'ACA',
            'BA '
        ],
        {
            B: 'enigmaticlegacy:cosmic_heart',
            C: 'enigmaticlegacy:ender_rod',
            A: 'enigmaticlegacy:astral_dust'
        }
    )
    event.shaped(
        Item.of('simplyswords:twisted_blade'),
        [
            ' AA',
            'BA ',
            'CB '
        ],
        {
            B: 'minecraft:iron_nugget',
            A: 'minecraft:iron_ingot',
            C: 'enigmaticlegacy:ender_rod'
        }
    )

    event.shaped(
        Item.of('simplyswords:watcher_claymore'),
        [
            'ABC',
            'BDB',
            'EBA'
        ],
        {
            C: 'traveloptics:dark_gem_of_the_living_void',
            E: '#forge:dragonsteel_swords',
            B: 'alexscaves:shadow_silk',
            A: 'irons_spellbooks:blood_vial',
            D: 'enigmaticlegacy:enigmatic_eye'
        }
    )
    event.shaped(
        Item.of('simplyswords:caelestis'),
        [
            ' AB',
            'ACD',
            'EA '
        ],
        {
            C: 'traveloptics:pocket_black_hole',
            E: 'enigmaticlegacy:ender_rod',
            A: 'cataclysm:ancient_metal_ingot',
            B: 'traveloptics:withered_excrucis',
            D: 'minecraft:obsidian'
        }
    )
})