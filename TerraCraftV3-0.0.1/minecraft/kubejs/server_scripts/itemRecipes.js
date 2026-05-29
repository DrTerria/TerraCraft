ServerEvents.recipes(event => {
    // attempt at changing the dragonsteel recipe
    event.remove({output: 'iceandfire:dragonsteel_fire_ingot'})
    event.remove({output: 'iceandfire:dragonsteel_ice_ingot'})
    event.remove({output: 'iceandfire:dragonsteel_lightning_ingot'})

    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "fire",
        cook_time: 1000,
        input: {item: "advancednetherite:netherite_diamond_ingot"},
        blood: {item: "iceandfire:fire_dragon_blood"},
        result: {item: "iceandfire:dragonsteel_fire_ingot"}
    })
    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "ice",
        cook_time: 1000,
        input: {item: "advancednetherite:netherite_diamond_ingot"},
        blood: {item: "iceandfire:ice_dragon_blood"},
        result: {item: "iceandfire:dragonsteel_ice_ingot"}
    })
    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "lightning",
        cook_time: 1000,
        input: {item: "advancednetherite:netherite_diamond_ingot"},
        blood: {item: "iceandfire:lightning_dragon_blood"},
        result: {item: "iceandfire:dragonsteel_lightning_ingot"}
    })
    // change poison essence recipe
    event.remove({output: "alexsmobs:poison_bottle"})
    event.shapeless(
        Item.of('alexsmobs:poison_bottle'),
        [
            'alexsmobs:rattlesnake_rattle'
        ]
    )
    event.shapeless(
        Item.of('alexsmobs:poison_bottle'),
        [
            'iceandfire:myrmex_stinger'
        ]
    )
    event.remove('bosses_of_mass_destruction:brimstone_nectar')
    event.shapeless(
        Item.of('bosses_of_mass_destruction:brimstone_nectar'),
        [
            'irons_spellbooks:arcane_salvage',
            'minecraft:honeycomb',
            'minecraft:dragon_breath'
        ]
    )
    event.shaped(
        Item.of('raccompat:desolate_pendant'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            B: 'iceandfire:ghost_ingot',
            C: 'alexscaves:occult_gem',
            A: 'alexscaves:shadow_silk'
        }
    )
    event.shaped(
        Item.of('raccompat:polar_boot'),
        [
            'AAB',
            'ACB',
            'ABB'
        ],
        {
            B: 'alexscaves:azure_neodymium_ingot',
            A: 'alexscaves:scarlet_neodymium_ingot',
            C: 'alexscaves:telecore'
        }
    )
    event.shaped(
        Item.of('raccompat:vine_ring'),
        [
            'ABC',
            'BDB',
            'CBC'
        ],
        {
            B: 'minecraft:vine',
            D: 'ars_nouveau:ring_of_potential',
            A: '#minecraft:leaves',
            C: 'minecraft:stick'
        }
    )
    event.shaped(
        Item.of('artifacts:umbrella'),
        [
            'ABA',
            'BCB',
            ' D '
        ],
        {
            C: 'minecraft:shield',
            B: 'minecraft:red_carpet',
            D: 'minecraft:stick',
            A: 'minecraft:white_carpet'
        }
    )
    event.shaped(
        Item.of('ramcompat:frost_robe'),
        [
            'ABA',
            'BCB',
            'BDB'
        ],
        {
            A: 'irons_spellbooks:permafrost_shard',
            D: 'irons_spellbooks:frozen_bone',
            C: 'mowziesmobs:ice_crystal',
            B: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('artifacts:night_vision_goggles'),
        [
            'AAA',
            'BCB',
            '   '
        ],
        {
            C: 'minecraft:glass',
            B: 'minecraft:emerald',
            A: 'minecraft:string'
        }
    )
    event.shaped(
        Item.of('artifacts:villager_hat'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:hay_block',
            B: 'minecraft:emerald_block'
        }
    )
    event.shapeless(
        Item.of('artifacts:anglers_hat'),
        [
            'minecraft:tropical_fish',
            'minecraft:cod',
            'minecraft:pufferfish',
            'minecraft:fishing_rod',
            'minecraft:salmon'
        ]
    )
    event.shaped(
        Item.of('artifacts:cowboy_hat'),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            B: 'minecraft:leather_helmet',
            A: 'minecraft:leather',
            C: 'minecraft:saddle'
        }
    )
    event.shaped(
        Item.of('artifacts:superstitious_hat'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:emerald',
            B: 'minecraft:lapis_lazuli'
        }
    )
    event.shaped(
        Item.of('ramcompat:stink_gland'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'undead_revamp2:acidsack',
            C: 'alexsmobs:stink_bottle',
            B: 'minecraft:scute'
        }
    )
    event.shaped(
        Item.of('artifacts:antidote_vessel'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            C: 'minecraft:milk_bucket',
            D: 'minecraft:gold_ingot',
            A: 'minecraft:copper_ingot',
            B: 'ars_nouveau:starbuncle_shards'
        }
    )
    event.shaped(
        Item.of('relics:amphibian_boot'),
        [
            ' AB',
            'CDE',
            'BCB'
        ],
        {
            A: 'minecraft:prismarine_crystals',
            B: 'minecraft:iron_ingot',
            D: 'minecraft:heart_of_the_sea',
            C: 'alexsmobs:crocodile_scute',
            E: 'iceandfire:hippocampus_fin'
        }
    )
    event.shaped(
        Item.of('artifacts:universal_attractor'),
        [
            'A A',
            'BAB',
            'BBB'
        ],
        {
            B: 'minecraft:iron_ingot',
            A: 'minecraft:redstone'
        }
    )
    event.shaped(
        Item.of('artifacts:chorus_totem'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'minecraft:ender_pearl',
            A: 'minecraft:chorus_fruit',
            C: 'minecraft:totem_of_undying'
        }
    )
    event.shaped(
        Item.of('relics:aqua_walker'),
        [
            ' AA',
            'ABA',
            'CCC'
        ],
        {
            A: 'iceandfire:sea_serpent_scales_purple',
            B: 'ars_nouveau:water_essence',
            C: 'minecraft:prismarine_bricks'
        }
    )
    event.shaped(
        Item.of('relics:arrow_quiver'),
        [
            'ABB',
            'BCB',
            'BBA'
        ],
        {
            B: 'minecraft:leather',
            C: 'irons_spellbooks:arcane_rune',
            A: 'minecraft:string'
        }
    )
    event.shaped(
        Item.of('artifacts:digging_claws'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'alexsmobs:dropbear_claw',
            B: 'minecraft:iron_pickaxe'
        }
    )
    event.shaped(
        Item.of('artifacts:power_glove'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'create:brass_ingot',
            A: 'alloyed:steel_ingot',
            C: 'alexsmobs:falconry_glove'
        }
    )
    event.shaped(
        Item.of('artifacts:pocket_piston'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'minecraft:piston'
        }
    )
    event.shaped(
        Item.of('artifacts:golden_hook'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'create:brass_ingot',
            A: 'minecraft:emerald'
        }
    )
    event.shaped(
        Item.of('artifacts:onion_ring'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'minecraft:iron_pickaxe'
        }
    )
    event.shaped(
        Item.of('artifacts:pickaxe_heater'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'minecraft:blast_furnace'
        }
    )
    event.shaped(
        Item.of('artifacts:bunny_hoppers'),
        [
            ' A ',
            'ABA',
            'CAC'
        ],
        {
            C: 'minecraft:rabbit_foot',
            B: 'minecraft:leather_boots',
            A: 'minecraft:white_wool'
        }
    )
    event.shaped(
        Item.of('artifacts:kitty_slippers'),
        [
            'AAA',
            'BCB',
            'BBB'
        ],
        {
            A: 'minecraft:gunpowder',
            C: 'minecraft:leather_boots',
            B: 'minecraft:white_wool'
        }
    )
    event.shaped(
        Item.of('artifacts:running_shoes'),
        [
            ' A ',
            'ABA',
            'CDC'
        ],
        {
            C: 'minecraft:sugar',
            A: 'minecraft:redstone_block',
            B: 'minecraft:leather_boots',
            D: 'minecraft:white_wool'
        }
    )
    event.shaped(
        Item.of('relics:chorus_inhibitor'),
        [
            'ABC',
            'BDB',
            'CBC'
        ],
        {
            B: 'traveloptics:void_spellweave_ingot',
            D: 'ars_nouveau:ring_of_potential',
            A: 'endrem:lost_eye',
            C: 'irons_spellbooks:ender_rune'
        }
    )
    event.shaped(
        Item.of('artifacts:snowshoes'),
        [
            '   ',
            ' A ',
            'BBB'
        ],
        {
            A: 'minecraft:leather_boots',
            B: 'minecraft:wheat'
        }
    )
    event.shaped(
        Item.of('artifacts:rooted_boots'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'minecraft:leather_boots',
            B: 'minecraft:warped_roots',
            A: 'minecraft:crimson_roots'
        }
    )
    event.shaped(
        Item.of('artifacts:whoopee_cushion'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'minecraft:leather',
            B: 'minecraft:white_wool'
        }
    )
    event.shaped(
        Item.of('relics:drowned_belt'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            D: 'relics:leather_belt',
            A: 'minecraft:iron_block',
            B: 'minecraft:heart_of_the_sea',
            C: 'create:iron_sheet'
        }
    )
    event.shaped(
        Item.of('relics:enders_hand'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'phantasm:void_crystal_shard',
            B: 'minecraft:ender_pearl',
            C: 'artifacts:power_glove'
        }
    )
    event.shaped(
        Item.of('relics:horse_flute'),
        [
            ' AB',
            'AB ',
            'B  '
        ],
        {
            B: 'minecraft:stick',
            A: 'minecraft:red_wool'
        }
    )
    event.shaped(
        Item.of('relics:hunter_belt'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            D: 'relics:leather_belt',
            A: 'minecraft:rotten_flesh',
            C: 'minecraft:wheat',
            B: 'minecraft:carrot',
            E: 'minecraft:potato',
            F: 'minecraft:bone'
        }
    )
    event.shaped(
        Item.of('relics:ice_breaker'),
        [
            ' AB',
            'ABA',
            'BCB'
        ],
        {
            C: 'minecraft:iron_nugget',
            A: 'minecraft:leather',
            B: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('relics:ice_skates'),
        [
            ' A ',
            'BAA',
            'BBB'
        ],
        {
            A: 'minecraft:cyan_wool',
            B: 'minecraft:iron_ingot'
        }
    )
    event.shaped(
        Item.of('relics:infinity_ham'),
        [
            'ABC',
            'BDB',
            'ABA'
        ],
        {
            A: 'irons_spellbooks:greater_healing_potion',
            D: 'iceandfire:hydra_heart',
            C: 'minecraft:bone',
            B: 'netherexp:cooked_hogham'
        }
    )
    event.shaped(
        Item.of('relics:jellyfish_necklace'),
        [
            'ABA',
            'B B',
            'ACA'
        ],
        {
            B: 'alexsmobs:rainbow_jelly',
            A: 'traveloptics:aqua_rune',
            C: 'aquaculture:jellyfish'
        }
    )
    event.shaped(
        Item.of('relics:leather_belt'),
        [
            'AAA',
            'A A',
            'ABA'
        ],
        {
            A: 'minecraft:leather',
            B: 'create:golden_sheet'
        }
    )
    event.shaped(
        Item.of('relics:magic_mirror'),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            B: 'minecraft:glass',
            C: 'enigmaticlegacy:recall_potion',
            A: 'iceandfire:silver_ingot'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:common_ink'),
        [
            'AAB',
            'ACA',
            'AAA'
        ],
        {
            C: 'minecraft:ink_sac',
            A: 'irons_spellbooks:arcane_essence',
            B: 'minecraft:feather'
        }
    )
    event.shaped(
        Item.of('relics:magma_walker'),
        [
            ' AA',
            'BCB',
            'AAA'
        ],
        {
            B: 'minecraft:magma_block',
            C: 'bosses_of_mass_destruction:blazing_eye',
            A: 'minecraft:obsidian'
        }
    )
    event.shaped(
        Item.of('relics:roller_skates'),
        [
            'ABB',
            'BBB',
            'CDC'
        ],
        {
            C: 'minecraft:iron_nugget',
            A: 'minecraft:yellow_dye',
            B: 'minecraft:leather',
            D: 'create:iron_sheet'
        }
    )
    event.shaped(
        Item.of('relics:space_dissector'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'minecraft:gold_ingot',
            A: 'irons_spellbooks:arcane_essence',
            C: 'alexsmobs:void_worm_eye'
        }
    )
    event.shaped(
        Item.of('relics:wool_mitten'),
        [
            'AAA',
            'BCA',
            'BBB'
        ],
        {
            B: 'minecraft:light_blue_wool',
            C: 'minecraft:powder_snow_bucket',
            A: 'minecraft:white_wool'
        }
    )
    event.shaped(
        Item.of('artifacts:thorn_pendant'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            B: 'irons_spellbooks:arcane_essence',
            C: 'minecraft:wheat_seeds',
            A: 'minecraft:string'
        }
    )
    event.shaped(
        Item.of('artifacts:feral_claws'),
        [
            'AB ',
            'A B',
            'AB '
        ],
        {
            B: 'minecraft:leather',
            A: 'minecraft:emerald'
        }
    )
    event.remove({output: 'ars_nouveau:arcane_core'})
    event.shaped(
        Item.of('ars_nouveau:arcane_core'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            C: 'irons_spellbooks:arcane_ingot',
            B: 'bosses_of_mass_destruction:ancient_anima',
            A: 'ars_nouveau:sourcestone',
            D: 'ars_nouveau:source_gem'
        }
    )
    event.remove({output: 'ars_nouveau:enchanting_apparatus'})
    event.shaped(
        Item.of('ars_nouveau:enchanting_apparatus'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            C: 'minecraft:gold_ingot',
            A: 'alloyed:bronze_nugget',
            B: 'ars_nouveau:sourcestone',
            D: 'irons_spellbooks:divine_pearl'
        }
    )
    event.remove({output: 'create:empty_blaze_burner'})
    event.shaped(
        Item.of('create:empty_blaze_burner'),
        [
            ' A ',
            'BCB',
            ' B '
        ],
        {
            C: 'minecraft:netherrack',
            A: 'bosses_of_mass_destruction:ancient_anima',
            B: 'create:iron_sheet'
        }
    )
    event.remove({output: 'enigmaticaddons:adventure_charm'})
    event.shaped(
        Item.of('enigmaticaddons:adventure_charm'),
        [
            'A A',
            'ACA',
            'BDB'
        ],
        {
            B: 'create:brass_ingot',
            D: 'irons_spellbooks:nature_rune',
            A: 'minecraft:crying_obsidian',
            C: 'minecraft:diamond_sword'
        }
    )
    event.shaped(
        Item.of('artifacts:cloud_in_a_bottle'),
        [
            'AAA',
            'BCB',
            'BDB'
        ],
        {
            B: '#forge:glass',
            C: 'quark:bottled_cloud',
            D: 'irons_spellbooks:evocation_rune',
            A: '#minecraft:planks'
        }
    )
    event.shaped(
        Item.of('simplyswords:dormant_relic'),
        [
            ' AB',
            'CDA',
            'EC '
        ],
        {
            A: 'create:brass_ingot',
            C: 'iceandfire:wither_shard',
            D: 'simplyswords:netherite_longsword',
            B: 'irons_spellbooks:holy_rune',
            E: 'iceandfire:witherbone'
        }
    )
    event.shaped(
        Item.of('relics:rage_glove'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            D: 'artifacts:power_glove',
            A: 'traveloptics:pyro_spellweave_ingot',
            E: 'advancednetherite:netherite_diamond_ingot',
            B: 'minecraft:enchanted_golden_apple',
            C: 'netherexp:treacherous_flame'
        }
    )
    event.shaped(
        Item.of('artifacts:vampiric_glove'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'alexsmobs:blood_sac',
            C: 'alexsmobs:falconry_glove',
            A: 'irons_spellbooks:blood_rune'
        }
    )
    event.smithing(
        'artifacts:flame_pendant',
        'cataclysm:lava_power_cell',
        'artifacts:thorn_pendant',
        'traveloptics:pyro_spellweave_ingot'
    )
    event.remove({output: 'enigmaticlegacy:cosmic_heart'})
    event.shaped(
        Item.of('enigmaticlegacy:cosmic_heart'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            D: '#iceandfire:dragon_hearts',
            E: 'bosses_of_mass_destruction:obsidian_heart',
            C: 'minecraft:blaze_powder',
            A: 'enigmaticlegacy:astral_dust',
            B: 'minecraft:nether_star'
        }
    )
    event.remove({output: 'enigmaticlegacy:ender_rod'})
    event.shaped(
        Item.of('enigmaticlegacy:ender_rod'),
        [
            'ABC',
            'BDB',
            'CBA'
        ],
        {
            C: 'minecraft:ender_pearl',
            A: 'apotheosis:infused_breath',
            B: 'enigmaticlegacy:astral_dust',
            D: '#forge:dragonsteel_ingots'
        }
    )
    event.remove({output: 'cataclysm:soul_render'})
    event.shaped(
        Item.of('cataclysm:soul_render'),
        [
            ' AA',
            'BCA',
            'CB '
        ],
        {
            C: 'enigmaticlegacy:ender_rod',
            A: 'cataclysm:cursium_ingot',
            B: 'enigmaticlegacy:soul_dust'
        }
    )
    event.shapeless(
        Item.of('enigmaticlegacy:soul_dust'),
        [
            'enigmaticlegacy:astral_dust',
            'quark:soul_bead',
            'bosses_of_mass_destruction:ancient_anima',
            'minecraft:soul_sand'
        ]
    )
    event.shaped(
        Item.of('enigmaticlegacy:enigmatic_eye'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'irons_spellbooks:arcane_ingot',
            B: 'minecraft:blackstone',
            C: 'minecraft:ender_eye'
        }
    )
    event.remove({output: 'traveloptics:dark_gem_of_the_living_void'})
    event.shaped(
        Item.of('traveloptics:dark_gem_of_the_living_void'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            C: 'enigmaticlegacy:cursed_stone',
            B: 'alexscaves:occult_gem',
            E: 'enigmaticlegacy:void_pearl',
            A: 'traveloptics:darkness_cloth',
            F: 'alexscaves:pure_darkness',
            D: 'alexsmobs:void_worm_eye'
        }
    )
    event.shaped(
        Item.of('artifacts:crystal_heart'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'alexscaves:peppermint_powder',
            C: 'enigmaticlegacy:cosmic_heart',
            B: 'alexscaves:gelatin_red'
        }
    )
    event.smithing(
        'simplyswords:molten_edge',
        'cataclysm:ignitium_upgrade_smithing_template',
        '#forge:dragonsteel_axes',
        'cataclysm:ignitium_ingot'
    )
    event.remove('cataclysm:the_incinerator')
    event.remove('enigmaticaddons:etherium_core')
    event.shaped(
        Item.of('enigmaticaddons:etherium_core'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            C: 'enigmaticlegacy:etherium_block',
            B: 'enigmaticlegacy:ender_rod',
            A: 'enigmaticlegacy:etherium_ingot',
            D: 'enigmaticlegacy:golem_heart'
        }
    )
    event.remove('enigmaticaddons:pure_heart')
    event.shaped(
        Item.of('enigmaticaddons:pure_heart'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            E: 'minecraft:glowstone_dust',
            A: 'cataclysm:lava_power_cell',
            F: 'minecraft:ender_eye',
            C: 'enigmaticaddons:ichor_droplet',
            B: 'minecraft:ghast_tear',
            D: 'enigmaticlegacy:earth_heart'
        }
    )
    event.remove('enigmaticlegacy:twisted_heart')
    event.shaped(
        Item.of('enigmaticlegacy:twisted_heart'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            C: 'minecraft:blaze_powder',
            F: 'minecraft:ender_eye',
            E: 'minecraft:redstone',
            B: 'minecraft:ghast_tear',
            A: 'enigmaticlegacy:evil_essence',
            D: 'enigmaticlegacy:earth_heart'
        }
    )
    event.remove('enigmaticlegacy:mining_charm')
    event.shaped(
        Item.of('enigmaticlegacy:mining_charm'),
        [
            'ABA',
            'CDC',
            'ECE'
        ],
        {
            A: 'minecraft:iron_nugget',
            E: 'minecraft:glowstone_dust',
            C: 'create:brass_ingot',
            B: 'irons_spellbooks:arcane_essence',
            D: 'minecraft:diamond'
        }
    )
    event.remove('enigmaticaddons:earth_promise')
    event.shaped(
        Item.of('enigmaticaddons:earth_promise'),
        [
            'ABA',
            'CDE',
            'FGF'
        ],
        {
            E: 'enigmaticlegacy:twisted_heart',
            A: 'create:brass_ingot',
            B: 'enigmaticlegacy:cosmic_heart',
            D: 'enigmaticlegacy:golden_ring',
            G: 'enigmaticlegacy:mining_charm',
            C: 'enigmaticaddons:pure_heart',
            F: 'minecraft:enchanted_golden_apple'
        }
    )
    event.remove('enigmaticlegacy:enchantment_transposer')
    event.shaped(
        Item.of('enigmaticlegacy:enchantment_transposer'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'minecraft:prismarine_crystals',
            E: 'minecraft:blaze_powder',
            B: 'ars_nouveau:manipulation_essence',
            F: 'minecraft:redstone',
            C: 'minecraft:lapis_lazuli',
            D: 'minecraft:book'
        }
    )
    event.remove('enigmaticaddons:avarice_ring')
    event.smithing(
        'enigmaticaddons:avarice_ring',
        'minecraft:netherite_upgrade_smithing_template',
        'enigmaticlegacy:golden_ring',
        'advancednetherite:netherite_gold_ingot'
    )
    event.remove('enigmaticaddons:scorched_charm')
    event.smithing(
        'enigmaticaddons:scorched_charm',
        'cataclysm:ignitium_upgrade_smithing_template',
        'enigmaticlegacy:blazing_core',
        'cataclysm:ignitium_ingot'
    )
    event.remove('irons_spellbooks:magic_cloth')
    event.shaped(
        Item.of('irons_spellbooks:magic_cloth'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            B: 'ars_nouveau:magebloom_fiber',
            A: 'irons_spellbooks:arcane_essence',
            D: 'minecraft:stick',
            C: 'minecraft:string'
        }
    )
    event.remove('traveloptics:ocean_sovereign_upgrade_smithing_template')
    event.shaped(
        Item.of('traveloptics:ocean_sovereign_upgrade_smithing_template'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            D: 'minecraft:netherite_upgrade_smithing_template',
            B: 'iceandfire:lightning_dragon_blood',
            E: 'enigmaticlegacy:cosmic_heart',
            A: 'enigmaticlegacy:astral_dust',
            C: 'cataclysm:lacrima'
        }
    )
    event.remove('cataclysm:ignitium_upgrade_smithing_template')
    event.shaped(
        Item.of('cataclysm:ignitium_upgrade_smithing_template'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            D: 'minecraft:netherite_upgrade_smithing_template',
            F: 'iceandfire:fire_dragon_blood',
            E: 'cataclysm:lava_power_cell',
            C: 'alexscaves:tectonic_shard',
            A: 'irons_spellbooks:cinder_essence',
            B: 'netherexp:treacherous_flame'
        }
    )
    event.shaped(
        Item.of('traveloptics:abyssal_upgrade_smithing_template'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            D: 'minecraft:netherite_upgrade_smithing_template',
            B: 'traveloptics:void_spellweave_ingot',
            E: 'enigmaticlegacy:cosmic_heart',
            A: 'enigmaticlegacy:astral_dust',
            C: 'enigmaticlegacy:etherium_ingot'
        }
    )
    event.remove('cataclysm:cursium_upgrade_smithing_template')
    event.shaped(
        Item.of('cataclysm:cursium_upgrade_smithing_template'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            D: 'minecraft:netherite_upgrade_smithing_template',
            C: 'enigmaticlegacy:soul_dust',
            A: 'cataclysm:ancient_metal_ingot',
            B: 'enigmaticlegacy:etherium_ingot'
        }
    )
    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "lightning",
        cook_time: 1000,
        input: {item: "enigmaticlegacy:etherium_ore"},
        blood: {item: "enigmaticlegacy:etherium_ore"},
        result: {item: "enigmaticlegacy:etherium_ingot"}
    })
    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "fire",
        cook_time: 1000,
        input: {item: "enigmaticlegacy:etherium_ore"},
        blood: {item: "enigmaticlegacy:etherium_ore"},
        result: {item: "enigmaticlegacy:etherium_ingot"}
    })
    event.custom({
        type: "iceandfire:dragonforge",
        dragon_type: "ice",
        cook_time: 1000,
        input: {item: "enigmaticlegacy:etherium_ore"},
        blood: {item: "enigmaticlegacy:etherium_ore"},
        result: {item: "enigmaticlegacy:etherium_ingot"}
    })
    event.remove('bosses_of_mass_destruction:charged_ender_pearl')
    event.shapeless(
        Item.of('bosses_of_mass_destruction:charged_ender_pearl'),
        [
            'traveloptics:void_spellweave_ingot',
            'minecraft:ender_pearl',
            'bosses_of_mass_destruction:void_thorn'
        ]
    )
    event.shapeless(
        Item.of('cataclysm:dying_ember'),
        [
            'ars_nouveau:fire_essence',
            'irons_spellbooks:cinder_essence'
        ]
    )
    event.shaped(
        Item.of('artifacts:lucky_scarf'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'apotheosis:lucky_foot',
            A: 'irons_spellbooks:magic_cloth'
        }
    )
    event.remove('enigmaticaddons:quartz_ring')
    event.shaped(
        Item.of('enigmaticaddons:quartz_ring'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            E: 'irons_spellbooks:arcane_ingot',
            C: 'enigmaticlegacy:golden_ring',
            A: 'minecraft:quartz',
            B: 'minecraft:ghast_tear',
            D: 'minecraft:lapis_lazuli'
        }
    )
    event.remove('enigmaticlegacy:super_magnet_ring')
    event.smithing(
        'enigmaticlegacy:super_magnet_ring',
        'minecraft:netherite_upgrade_smithing_template',
        'enigmaticlegacy:magnet_ring',
        'enigmaticlegacy:void_stone'
    )
    event.remove('enigmaticlegacy:magnet_ring')
    event.shaped(
        Item.of('enigmaticlegacy:magnet_ring'),
        [
            ' A ',
            'BCD',
            ' E '
        ],
        {
            C: 'enigmaticlegacy:iron_ring',
            D: 'alexscaves:azure_neodymium_ingot',
            B: 'alexscaves:scarlet_neodymium_ingot',
            E: 'minecraft:redstone',
            A: 'alexscaves:telecore'
        }
    )
    event.remove('enigmaticlegacy:thicc_scroll')
    event.shaped(
        Item.of('enigmaticlegacy:thicc_scroll'),
        [
            'ABB',
            'BCB',
            'BBA'
        ],
        {
            B: 'ars_nouveau:magebloom_fiber',
            C: 'minecraft:paper',
            A: 'minecraft:stick'
        }
    )
    event.remove('enigmaticlegacy:xp_scroll')
    event.shaped(
        Item.of('enigmaticlegacy:xp_scroll'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            B: 'traveloptics:pocket_black_hole',
            D: 'enigmaticlegacy:thicc_scroll',
            A: 'create:experience_block',
            C: 'minecraft:experience_bottle'
        }
    )
    event.remove('enigmaticlegacy:escape_scroll')
    event.shaped(
        Item.of('enigmaticlegacy:escape_scroll'),
        [
            'ABA',
            'CDC',
            'ACA'
        ],
        {
            A: 'minecraft:phantom_membrane',
            C: 'bosses_of_mass_destruction:ancient_anima',
            D: 'enigmaticlegacy:thicc_scroll',
            B: 'enigmaticlegacy:twisted_mirror'
        }
    )
    event.remove('enigmaticlegacy:heaven_scroll')
    event.shaped(
        Item.of('enigmaticlegacy:heaven_scroll'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'phantasm:fallen_star',
            D: 'enigmaticlegacy:thicc_scroll',
            B: 'minecraft:nether_star',
            C: 'enigmaticlegacy:astral_dust',
            E: 'enigmaticlegacy:angel_blessing'
        }
    )
    event.remove('enigmaticaddons:night_scroll')
    event.shaped(
        Item.of('enigmaticaddons:night_scroll'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            A: 'minecraft:phantom_membrane',
            B: 'enigmaticlegacy:twisted_heart',
            E: 'alexsmobs:blood_sac',
            F: 'minecraft:ender_eye',
            C: 'minecraft:wither_rose',
            D: 'enigmaticlegacy:darkest_scroll'
        }
    )
    event.remove('enigmaticaddons:thunder_scroll')
    event.remove('enigmaticlegacy:fabulous_scroll')
    event.shaped(
        Item.of('enigmaticlegacy:fabulous_scroll'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            B: 'enigmaticlegacy:cosmic_heart',
            E: 'apotheosis:infused_breath',
            C: 'traveloptics:echo_winglet',
            A: 'enigmaticlegacy:etherium_ingot',
            D: 'enigmaticlegacy:heaven_scroll',
            F: 'minecraft:elytra'
        }
    )

    event.shaped(
        Item.of('enigmaticlegacy:ocean_stone'),
        [
            'ABC',
            'BDB',
            'EBF'
        ],
        {
            A: 'cataclysm:coral_chunk',
            F: 'cataclysm:crystallized_coral',
            C: 'minecraft:kelp',
            D: 'minecraft:heart_of_the_sea',
            B: 'traveloptics:hullbreaker_scales',
            E: 'cataclysm:lacrima'
        }
    )
    event.shaped(
        Item.of('enigmaticlegacy:blazing_core'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'cataclysm:lava_power_cell',
            C: 'bosses_of_mass_destruction:blazing_eye',
            A: 'alloyed:steel_ingot'
        }
    )
    event.shapeless(
        Item.of('enigmaticlegacy:void_stone'),
        [
            'traveloptics:pocket_black_hole',
            'iceandfire:dread_key'
        ]
    )
    event.shaped(
        Item.of('enigmaticlegacy:eye_of_nebula'),
        [
            'ABA',
            'ACA',
            ' A '
        ],
        {
            B: 'bosses_of_mass_destruction:charged_ender_pearl',
            A: 'enigmaticlegacy:etherium_ingot',
            C: 'alexsmobs:void_worm_eye'
        }
    )
    event.shaped(
        Item.of('enigmaticaddons:revival_leaf'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'enigmaticlegacy:infinimeal',
            B: 'irons_spellbooks:nature_rune',
            A: '#minecraft:leaves'
        }
    )
    event.remove('enigmaticlegacy:ascension_amulet')
    event.shaped(
        Item.of('enigmaticlegacy:ascension_amulet'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            A: 'phantasm:void_crystal_shard',
            F: 'enigmaticlegacy:cosmic_heart',
            D: 'enigmaticlegacy:enigmatic_amulet',
            E: 'apotheosis:infused_breath',
            B: 'enigmaticlegacy:astral_dust',
            C: 'enigmaticlegacy:etherium_ingot'
        }
    )
    event.remove('enigmaticlegacy:evil_ingot')
    event.shaped(
        Item.of('enigmaticlegacy:evil_ingot'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'advancednetherite:netherite_diamond_ingot',
            A: 'minecraft:ghast_tear',
            B: 'enigmaticlegacy:evil_essence'
        }
    )
    event.remove('enigmaticlegacy:enchanter_pearl')
    event.shaped(
        Item.of('enigmaticlegacy:enchanter_pearl'),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'create:experience_nugget',
            B: 'minecraft:blaze_powder',
            C: 'irons_spellbooks:divine_pearl',
            D: 'enigmaticlegacy:evil_essence',
            E: 'minecraft:crying_obsidian'
        }
    )
    event.remove('enigmaticlegacy:the_cube')
    event.shaped(
        Item.of('enigmaticlegacy:the_cube'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            C: 'enigmaticaddons:scorched_charm',
            F: 'enigmaticlegacy:eye_of_nebula',
            H: 'enigmaticlegacy:cosmic_heart',
            I: 'enigmaticlegacy:void_pearl',
            E: 'enigmaticaddons:primeval_cube',
            A: 'enigmaticlegacy:golem_heart',
            D: 'enigmaticlegacy:angel_blessing',
            B: 'traveloptics:withered_excrucis',
            G: 'enigmaticlegacy:ocean_stone'
        }
    )
    event.remove('enigmaticaddons:primeval_cube')
    event.shaped(
        Item.of('enigmaticaddons:primeval_cube'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'irons_spellbooks:arcane_essence',
            B: 'alexscaves:tectonic_shard',
            C: 'alexscaves:limestone'
        }
    )
    event.remove('enigmaticlegacy:mending_mixture')
    event.shaped(
        Item.of('enigmaticlegacy:mending_mixture'),
        [
            'ABC',
            'DEF',
            '   '
        ],
        {
            B: 'phantasm:void_crystal_shard',
            C: 'minecraft:prismarine_crystals',
            A: 'apotheosis:infused_breath',
            F: 'minecraft:glistering_melon_slice',
            D: 'irons_spellbooks:hogskin',
            E: 'irons_spellbooks:cinder_essence'
        }
    )
    event.remove('irons_spellbooks:upgrade_orb')
    event.shaped(
        Item.of('irons_spellbooks:upgrade_orb'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'enigmaticlegacy:etherium_ingot',
            A: 'alloyed:steel_ingot',
            B: 'irons_spellbooks:cinder_essence'
        }
    )
    event.shaped(
        Item.of('traveloptics:titanlord_scepter'),
        [
            ' AB',
            ' CA',
            'D  '
        ],
        {
            D: 'minecraft:stick',
            A: 'alexscaves:uranium',
            C: 'traveloptics:tremor_core',
            B: 'iceandfire:dragon_skull_fire'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:uncommon_ink'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'irons_spellbooks:common_ink',
            B: 'minecraft:diamond'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:rare_ink'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'irons_spellbooks:uncommon_ink',
            B: 'ars_nouveau:magebloom'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:epic_ink'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'cataclysm:void_jaw',
            A: 'enigmaticlegacy:evil_essence',
            B: 'irons_spellbooks:rare_ink'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:legendary_ink'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'apotheosis:infused_breath',
            A: 'enigmaticlegacy:etherium_ingot',
            B: 'irons_spellbooks:epic_ink'
        }
    )
    event.campfireCooking('minecraft:leather', 'minecraft:rotten_flesh', 0.35, 300)
    event.shapeless(
        Item.of('bosses_of_mass_destruction:soul_star'),
        [
            'minecraft:gunpowder',
            'minecraft:bone',
            'minecraft:rotten_flesh',
            'minecraft:spider_eye'
        ]
    )
})