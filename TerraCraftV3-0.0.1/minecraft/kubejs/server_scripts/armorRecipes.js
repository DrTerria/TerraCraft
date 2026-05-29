ServerEvents.recipes(event => {
    // divine armor recipe
    event.remove({output: 'immersive_armors:divine_helmet'})
    event.remove({output: 'immersive_armors:divine_chestplate'})
    event.remove({output: 'immersive_armors:divine_leggings'})
    event.remove({output: 'immersive_armors:divine_boots'})
    
    event.shaped(
        Item.of('immersive_armors:divine_helmet'),
        [
            'ABA',
            'ACA',
            '   '
        ],
        {
            A: 'minecraft:gold_ingot',
            B: 'minecraft:emerald',
            C: 'minecraft:diamond_helmet'
        }
    )
    event.shaped(
        Item.of('immersive_armors:divine_chestplate'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            C: 'minecraft:totem_of_undying',
            A: 'minecraft:gold_ingot',
            B: 'irons_spellbooks:holy_rune',
            D: 'minecraft:diamond_chestplate'
        }
    )
    event.shaped(
        Item.of('immersive_armors:divine_leggings'),
        [
            'BDB',
            'ACA',
            'A A'
        ],
        {
            A: 'minecraft:gold_ingot',
            C: 'minecraft:diamond_leggings',
            B: 'irons_spellbooks:holy_rune',
            D: 'minecraft:totem_of_undying'
        }
    )
    event.shaped(
        Item.of('immersive_armors:divine_boots'),
        [
            '   ',
            'ABA',
            'C C'
        ],
        {
            C: 'minecraft:gold_ingot',
            A: 'irons_spellbooks:holy_rune',
            B: 'minecraft:iron_boots'
        }
    )
    // cursium smithing recipes
    event.remove({output: 'cataclysm:cursium_helmet'})
    event.remove({output: 'cataclysm:cursium_chestplate'})
    event.remove({output: 'cataclysm:cursium_leggings'})
    event.remove({output: 'cataclysm:cursium_boots'})

    event.smithing(
        'cataclysm:cursium_helmet',
        'cataclysm:cursium_upgrade_smithing_template',
        'cataclysm:bone_reptile_helmet',
        'cataclysm:cursium_ingot'
    )
    event.smithing(
        'cataclysm:cursium_chestplate',
        'cataclysm:cursium_upgrade_smithing_template',
        'cataclysm:bone_reptile_chestplate',
        'cataclysm:cursium_ingot'
    )
    event.smithing(
        'cataclysm:cursium_leggings',
        'cataclysm:cursium_upgrade_smithing_template',
        'immersive_armors:wither_leggings',
        'cataclysm:cursium_ingot'
    )
    event.smithing(
        'cataclysm:cursium_boots',
        'cataclysm:cursium_upgrade_smithing_template',
        'immersive_armors:wither_boots',
        'cataclysm:cursium_ingot'
    )
    // bone reptile recipe changes
    event.remove({output: 'cataclysm:bone_reptile_helmet'})
    event.remove({output: 'cataclysm:bone_reptile_chestplate'})
    event.shaped(
    Item.of('cataclysm:bone_reptile_chestplate'),
        [
            'A A',
            'BCB',
            'DBD'
        ],
        {
            C: 'alexscaves:heavy_bone',
            D: 'cataclysm:koboleton_bone',
            A: 'alexscaves:tectonic_shard',
            B: 'cataclysm:ancient_metal_ingot'
        }
    )
    event.shaped(
    Item.of('cataclysm:bone_reptile_helmet'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'cataclysm:koboleton_bone',
            D: 'cataclysm:kobolediator_skull',
            B: 'alexscaves:tectonic_shard',
            C: 'cataclysm:ancient_metal_ingot'
        }
    )
    // Ignitium smithing changes
    event.remove({output: 'cataclysm:ignitium_helmet'})
    event.remove({output: 'cataclysm:ignitium_chestplate'})
    event.remove({output: 'cataclysm:ignitium_leggings'})
    event.remove({output: 'cataclysm:ignitium_boots'})

    event.smithing(
        'cataclysm:ignitium_helmet',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_fire_helmet',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_helmet',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_ice_helmet',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_helmet',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_lightning_helmet',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_chestplate',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_fire_chestplate',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_chestplate',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_ice_chestplate',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_chestplate',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_lightning_chestplate',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_leggings',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_fire_leggings',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_leggings',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_ice_leggings',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_leggings',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_lightning_leggings',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_boots',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_fire_boots',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_boots',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_ice_boots',
        'cataclysm:ignitium_ingot'
    )
    event.smithing(
        'cataclysm:ignitium_boots',
        'cataclysm:ignitium_upgrade_smithing_template',
        'iceandfire:dragonsteel_lightning_boots',
        'cataclysm:ignitium_ingot'
    )

    // Heavy armor steel addition
    event.remove({output: 'immersive_armors:heavy_helmet'})
    event.remove({output: 'immersive_armors:heavy_chestplate'})
    event.remove({output: 'immersive_armors:heavy_leggings'})
    event.remove({output: 'immersive_armors:heavy_boots'})

    event.shaped(
        Item.of('immersive_armors:heavy_chestplate'),
        [
            'A A',
            'BCB',
            'DCD'
        ],
        {
            B: 'minecraft:iron_ingot',
            A: 'minecraft:iron_block',
            D: 'alloyed:steel_ingot',
            C: 'alloyed:steel_block'
        }
    )
    event.shaped(
        Item.of('immersive_armors:heavy_helmet'),
        [
            'ABA',
            'C C',
            '   '
        ],
        {
            A: 'minecraft:iron_block',
            C: 'alloyed:steel_ingot',
            B: 'alloyed:steel_block'
        }
    )
    event.shaped(
        Item.of('immersive_armors:heavy_leggings'),
        [
            'ABA',
            'B B',
            'C C'
        ],
        {
            C: 'minecraft:iron_ingot',
            A: 'alloyed:steel_ingot',
            B: 'alloyed:steel_block'
        }
    )
    event.shaped(
        Item.of('immersive_armors:heavy_boots'),
        [
            'A A',
            'B B',
            '   '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'alloyed:steel_block'
        }
    )
    // mage armor changes

    // electromancer set
    event.remove({output: 'irons_spellbooks:electromancer_helmet'})
    event.remove({output: 'irons_spellbooks:electromancer_chestplate'})
    event.remove({output: 'irons_spellbooks:electromancer_leggings'})
    event.remove({output: 'irons_spellbooks:electromancer_boots'})
    event.shaped(
        Item.of('irons_spellbooks:electromancer_helmet'),
        [
            'ADA',
            'BCB',
            '   '
        ],
        {
            A: 'minecraft:copper_ingot',
            C: 'irons_spellbooks:lightning_rune',
            B: 'irons_spellbooks:magic_cloth',
            D: 'minecraft:lightning_rod'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:electromancer_chestplate'),
        [
            'A A',
            'BCB',
            'BDB'
        ],
        {
            C: 'irons_spellbooks:lightning_rune',
            A: 'create:iron_sheet',
            D: 'minecraft:copper_ingot',
            B: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:electromancer_leggings'),
        [
            'ABA',
            'BCB',
            'B B'
        ],
        {
            C: 'irons_spellbooks:lightning_rune',
            B: 'irons_spellbooks:magic_cloth',
            A: 'minecraft:copper_ingot'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:electromancer_boots'),
        [
            'ABA',
            'C C',
            '   '
        ],
        {
            B: 'irons_spellbooks:lightning_rune',
            C: 'irons_spellbooks:magic_cloth',
            A: 'minecraft:copper_ingot'
        }
    )

    // archevoker set
    event.remove({output: 'irons_spellbooks:archevoker_helmet'})
    event.remove({output: 'irons_spellbooks:archevoker_chestplate'})
    event.remove({output: 'irons_spellbooks:archevoker_leggings'})
    event.shaped(
        Item.of('irons_spellbooks:archevoker_helmet'),
        [
            'ABA',
            'ACA',
            '   '
        ],
        {
            B: 'minecraft:gold_ingot',
            A: 'irons_spellbooks:magic_cloth',
            C: 'irons_spellbooks:evocation_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:archevoker_chestplate'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            E: 'minecraft:gold_ingot',
            A: 'create:iron_sheet',
            C: 'irons_spellbooks:magic_cloth',
            D: 'irons_spellbooks:evocation_rune',
            B: 'create:crushed_raw_gold'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:archevoker_leggings'),
        [
            'ABA',
            'A A',
            'C C'
        ],
        {
            C: 'minecraft:gold_ingot',
            A: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:evocation_rune'
        }
    )


    // scarecrow set
    event.remove({output: 'irons_spellbooks:pumpkin_helmet'})
    event.remove({output: 'irons_spellbooks:pumpkin_chestplate'})
    event.remove({output: 'irons_spellbooks:pumpkin_leggings'})
    event.remove({output: 'irons_spellbooks:pumpkin_boots'})
    event.shaped(
        Item.of('irons_spellbooks:pumpkin_helmet'),
        [
            ' A ',
            'ABA',
            ' C '
        ],
        {
            B: 'irons_spellbooks:nature_rune',
            C: 'minecraft:carved_pumpkin',
            A: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:pumpkin_chestplate'),
        [
            'ABA',
            'CDC',
            'CDC'
        ],
        {
            A: 'minecraft:hay_block',
            B: 'irons_spellbooks:nature_rune',
            D: 'minecraft:leather',
            C: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:pumpkin_leggings'),
        [
            'ABA',
            'C C',
            'D D'
        ],
        {
            A: 'minecraft:hay_block',
            B: 'irons_spellbooks:nature_rune',
            D: 'minecraft:leather',
            C: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:pumpkin_boots'),
        [
            'ABA',
            'C C',
            '   '
        ],
        {
            A: 'minecraft:hay_block',
            B: 'irons_spellbooks:nature_rune',
            C: 'irons_spellbooks:magic_cloth'
        }
    )


    // pyromancer set
    event.remove({output: 'irons_spellbooks:pyromancer_helmet'})
    event.remove({output: 'irons_spellbooks:pyromancer_chestplate'})
    event.remove({output: 'irons_spellbooks:pyromancer_leggings'})
    event.remove({output: 'irons_spellbooks:pyromancer_boots'})
    event.shaped(
        Item.of('irons_spellbooks:pyromancer_helmet'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'minecraft:fire_charge',
            B: 'ars_nouveau:fire_essence',
            C: 'irons_spellbooks:magic_cloth',
            D: 'irons_spellbooks:fire_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:pyromancer_chestplate'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: 'minecraft:blaze_powder',
            B: 'ars_nouveau:fire_essence',
            C: 'irons_spellbooks:magic_cloth',
            D: 'irons_spellbooks:fire_rune',
            E: 'create:crushed_raw_gold'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:pyromancer_leggings'),
        [
            'ABA',
            'ACA',
            'D D'
        ],
        {
            B: 'ars_nouveau:fire_essence',
            D: 'minecraft:blaze_powder',
            A: 'irons_spellbooks:magic_cloth',
            C: 'irons_spellbooks:fire_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:pyromancer_boots'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            B: 'ars_nouveau:fire_essence',
            C: 'irons_spellbooks:magic_cloth',
            A: 'create:crushed_raw_gold',
            D: 'irons_spellbooks:fire_rune'
        }
    )

    // cryomancer set
    event.remove({output: 'irons_spellbooks:cryomancer_helmet'})
    event.remove({output: 'irons_spellbooks:cryomancer_chestplate'})
    event.remove({output: 'irons_spellbooks:cryomancer_leggings'})
    event.remove({output: 'irons_spellbooks:cryomancer_boots'})
    event.shaped(
        Item.of('irons_spellbooks:cryomancer_helmet'),
        [
            'ACA',
            'CBC',
            '   '
        ],
        {
            A: 'iceandfire:silver_ingot',
            C: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:ice_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cryomancer_chestplate'),
        [
            'A A',
            'BCB',
            'BAB'
        ],
        {
            A: 'iceandfire:silver_ingot',
            B: 'irons_spellbooks:magic_cloth',
            C: 'irons_spellbooks:ice_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cryomancer_leggings'),
        [
            'ABA',
            'C C',
            'C C'
        ],
        {
            A: 'iceandfire:silver_ingot',
            C: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:ice_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cryomancer_boots'),
        [
            'A A',
            'CBC',
            '   '
        ],
        {
            A: 'iceandfire:silver_ingot',
            C: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:ice_rune'
        }
    )

    // cultist set
    event.remove({output: 'irons_spellbooks:cultist_helmet'})
    event.remove({output: 'irons_spellbooks:cultist_chestplate'})
    event.remove({output: 'irons_spellbooks:cultist_leggings'})
    event.remove({output: 'irons_spellbooks:cultist_boots'})
    event.shaped(
        Item.of('irons_spellbooks:cultist_helmet'),
        [
            'ABA',
            'ACA',
            '   '
        ],
        {
            C: 'immersive_armors:bone_helmet',
            A: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:blood_rune'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cultist_chestplate'),
        [
            'ABA',
            'CAC',
            'CAC'
        ],
        {
            C: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:blood_rune',
            A: 'minecraft:bone'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cultist_leggings'),
        [
            'ABA',
            'C C',
            'A A'
        ],
        {
            A: 'irons_spellbooks:magic_cloth',
            B: 'irons_spellbooks:blood_rune',
            C: 'minecraft:bone'
        }
    )
    event.shaped(
        Item.of('irons_spellbooks:cultist_boots'),
        [
            'A A',
            'BCB',
            '   '
        ],
        {
            B: 'irons_spellbooks:magic_cloth',
            C: 'irons_spellbooks:blood_rune',
            A: 'minecraft:bone'
        }
    )

    // plagued set
    event.remove({output: 'irons_spellbooks:plagued_helmet'})
    event.remove({output: 'irons_spellbooks:plagued_chestplate'})
    event.remove({output: 'irons_spellbooks:plagued_leggings'})
    event.remove({output: 'irons_spellbooks:plagued_boots'})
    event.smithing(
        'irons_spellbooks:plagued_helmet',
        'alexsmobs:blood_sac',
        'irons_spellbooks:cultist_helmet',
        'enigmaticlegacy:twisted_heart'
    )
    event.smithing(
        'irons_spellbooks:plagued_chestplate',
        'alexsmobs:blood_sac',
        'irons_spellbooks:cultist_chestplate',
        'enigmaticlegacy:twisted_heart'
    )
    event.smithing(
        'irons_spellbooks:plagued_leggings',
        'alexsmobs:blood_sac',
        'irons_spellbooks:cultist_leggings',
        'enigmaticlegacy:twisted_heart'
    )
    event.smithing(
        'irons_spellbooks:plagued_boots',
        'alexsmobs:blood_sac',
        'irons_spellbooks:cultist_boots',
        'enigmaticlegacy:twisted_heart'
    )

    // deepling set
    event.remove({output: 'traveloptics:deepling_mage_armor_helmet'})
    event.remove({output: 'traveloptics:deepling_mage_armor_robe'})
    event.remove({output: 'traveloptics:deepling_mage_armor_leggings'})
    event.remove({output: 'traveloptics:deepling_mage_armor_boots'})
    event.shaped(
        Item.of('traveloptics:deepling_mage_armor_helmet'),
        [
            'ABA',
            'DCD',
            '   '
        ],
        {
            B: 'alexscaves:pearl',
            A: 'irons_spellbooks:magic_cloth',
            C: 'traveloptics:aqua_rune',
            D: 'ars_nouveau:water_essence'
        }
    )
    event.shaped(
        Item.of('traveloptics:deepling_mage_armor_robe'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            E: 'minecraft:wet_sponge',
            A: 'ars_nouveau:water_essence',
            C: 'irons_spellbooks:magic_cloth',
            D: 'traveloptics:aqua_rune',
            B: '#minecraft:fishes'
        }
    )
    event.shaped(
        Item.of('traveloptics:deepling_mage_armor_leggings'),
        [
            'ABA',
            'CDC',
            'A A'
        ],
        {
            D: 'minecraft:wet_sponge',
            C: 'ars_nouveau:water_essence',
            A: 'irons_spellbooks:magic_cloth',
            B: 'traveloptics:aqua_rune'
        }
    )
    event.shaped(
        Item.of('traveloptics:deepling_mage_armor_boots'),
        [
            'A A',
            'BCB',
            '   '
        ],
        {
            A: 'ars_nouveau:water_essence',
            B: 'irons_spellbooks:magic_cloth',
            C: 'traveloptics:aqua_rune'
        }
    )

    // netherite battlemage set
    event.remove({output: 'irons_spellbooks:netherite_mage_helmet'})
    event.remove({output: 'irons_spellbooks:netherite_mage_chestplate'})
    event.remove({output: 'irons_spellbooks:netherite_mage_leggings'})
    event.remove({output: 'irons_spellbooks:netherite_mage_boots'})
    event.smithing(
        'irons_spellbooks:netherite_mage_helmet',
        'minecraft:netherite_upgrade_smithing_template',
        'irons_spellbooks:pyromancer_helmet',
        'traveloptics:pyro_spellweave_ingot'
    )
    event.smithing(
        'irons_spellbooks:netherite_mage_chestplate',
        'minecraft:netherite_upgrade_smithing_template',
        'irons_spellbooks:pyromancer_chestplate',
        'traveloptics:pyro_spellweave_ingot'
    )
    event.smithing(
        'irons_spellbooks:netherite_mage_leggings',
        'minecraft:netherite_upgrade_smithing_template',
        'irons_spellbooks:pyromancer_leggings',
        'traveloptics:pyro_spellweave_ingot'
    )
    event.smithing(
        'irons_spellbooks:netherite_mage_boots',
        'minecraft:netherite_upgrade_smithing_template',
        'irons_spellbooks:pyromancer_boots',
        'traveloptics:pyro_spellweave_ingot'
    )

    // engineer set
    event.remove({output: 'cataclysm_spellbooks:engineer_hood'})
    event.remove({output: 'cataclysm_spellbooks:engineer_suit'})
    event.remove({output: 'cataclysm_spellbooks:engineer_leggings'})
    event.remove({output: 'cataclysm_spellbooks:engineer_boots'})
    event.shaped(
        Item.of('cataclysm_spellbooks:engineer_hood'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'alloyed:bronze_ingot',
            D: 'cataclysm_spellbooks:technomancy_rune',
            C: 'irons_spellbooks:magic_cloth',
            B: 'create:goggles'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:engineer_suit'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: 'alloyed:bronze_ingot',
            E: 'minecraft:redstone',
            D: 'cataclysm_spellbooks:technomancy_rune',
            C: 'irons_spellbooks:magic_cloth',
            B: 'protection_pixel:flarerod'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:engineer_leggings'),
        [
            'ABA',
            'CDC',
            'C C'
        ],
        {
            A: 'alloyed:bronze_ingot',
            B: 'create:electron_tube',
            D: 'cataclysm_spellbooks:technomancy_rune',
            C: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:engineer_boots'),
        [
            'A A',
            'BCB',
            '   '
        ],
        {
            B: 'alloyed:bronze_ingot',
            A: 'minecraft:redstone',
            C: 'cataclysm_spellbooks:technomancy_rune'
        }
    )

    // bloom stone set
    event.remove({output: 'cataclysm_spellbooks:bloom_stone_hat'})
    event.remove({output: 'cataclysm_spellbooks:bloom_stone_chestplate'})
    event.remove({output: 'cataclysm_spellbooks:bloom_stone_skirt'})
    event.remove({output: 'cataclysm_spellbooks:bloom_stone_greaves'})
    event.smithing(
        'cataclysm_spellbooks:bloom_stone_hat',
        'cataclysm:amethyst_crab_shell',
        'irons_spellbooks:pumpkin_helmet',
        'bosses_of_mass_destruction:void_thorn'
    )
    event.smithing(
        'cataclysm_spellbooks:bloom_stone_chestplate',
        'cataclysm:amethyst_crab_shell',
        'irons_spellbooks:pumpkin_chestplate',
        'bosses_of_mass_destruction:void_thorn'
    )
    event.smithing(
        'cataclysm_spellbooks:bloom_stone_skirt',
        'cataclysm:amethyst_crab_shell',
        'irons_spellbooks:pumpkin_leggings',
        'bosses_of_mass_destruction:void_thorn'
    )
    event.smithing(
        'cataclysm_spellbooks:bloom_stone_greaves',
        'cataclysm:amethyst_crab_shell',
        'irons_spellbooks:pumpkin_boots',
        'bosses_of_mass_destruction:void_thorn'
    )

    // holy set
    event.remove({output: 'irons_spellbooks:priest_helmet'})
    event.remove({output: 'irons_spellbooks:priest_chestplate'})
    event.remove({output: 'irons_spellbooks:priest_leggings'})
    event.remove({output: 'irons_spellbooks:priest_boots'})
    event.smithing(
        'irons_spellbooks:priest_helmet',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:archevoker_helmet',
        'enigmaticaddons:pure_heart'
    )
    event.smithing(
        'irons_spellbooks:priest_chestplate',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:archevoker_chestplate',
        'enigmaticaddons:pure_heart'
    )
    event.smithing(
        'irons_spellbooks:priest_leggings',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:archevoker_leggings',
        'enigmaticaddons:pure_heart'
    )
    event.smithing(
        'irons_spellbooks:priest_boots',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:archevoker_boots',
        'enigmaticaddons:pure_heart'
    )

    // pharaoh set
    event.remove({output: 'cataclysm_spellbooks:pharaoh_helmet'})
    event.remove({output: 'cataclysm_spellbooks:pharaoh_chestplate'})
    event.remove({output: 'cataclysm_spellbooks:pharaoh_leggings'})
    event.remove({output: 'cataclysm_spellbooks:pharaoh_greaves'})
    event.shaped(
        Item.of('cataclysm_spellbooks:pharaoh_helmet'),
        [
            'ABA',
            'CDC',
            'E E'
        ],
        {
            E: 'cataclysm:koboleton_bone',
            A: 'irons_spellbooks:magic_cloth',
            C: 'cataclysm:ancient_metal_ingot',
            D: 'cataclysm:sandstorm_in_a_bottle',
            B: 'iceandfire:dragon_skull_fire'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:pharaoh_chestplate'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            E: 'cataclysm:koboleton_bone',
            A: 'cataclysm:ancient_metal_ingot',
            C: 'irons_spellbooks:magic_cloth',
            D: 'enigmaticaddons:bless_stone',
            B: 'cataclysm:sandstorm_in_a_bottle'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:pharaoh_leggings'),
        [
            'ABA',
            'CDC',
            'C C'
        ],
        {
            C: 'cataclysm:koboleton_bone',
            A: 'cataclysm:ancient_metal_ingot',
            D: 'minecraft:string',
            B: 'cataclysm:sandstorm_in_a_bottle'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:pharaoh_greaves'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'cataclysm:koboleton_bone',
            B: 'irons_spellbooks:magic_cloth',
            C: 'cataclysm:ancient_metal_ingot',
            D: 'cataclysm:sandstorm_in_a_bottle'
        }
    )
    // shadowwalker set
    event.remove({output: 'irons_spellbooks:shadowwalker_helmet'})
    event.remove({output: 'irons_spellbooks:shadowwalker_chestplate'})
    event.remove({output: 'irons_spellbooks:shadowwalker_leggings'})
    event.remove({output: 'irons_spellbooks:shadowwalker_boots'})
    event.smithing(
        'irons_spellbooks:shadowwalker_helmet',
        'irons_spellbooks:ender_rune',
        'minecraft:netherite_helmet',
        'irons_spellbooks:dragonskin'
    )
    event.smithing(
        'irons_spellbooks:shadowwalker_chestplate',
        'irons_spellbooks:ender_rune',
        'minecraft:netherite_chestplate',
        'irons_spellbooks:dragonskin'
    )
    event.smithing(
        'irons_spellbooks:shadowwalker_leggings',
        'irons_spellbooks:ender_rune',
        'minecraft:netherite_leggings',
        'irons_spellbooks:dragonskin'
    )
    event.smithing(
        'irons_spellbooks:shadowwalker_boots',
        'irons_spellbooks:ender_rune',
        'minecraft:netherite_boots',
        'irons_spellbooks:dragonskin'
    )

    // primordial crest armor
    event.remove({output: 'traveloptics:primordial_crest_armor_helmet'})
    event.remove({output: 'traveloptics:primordial_crest_armor_chestplate'})
    event.remove({output: 'traveloptics:primordial_crest_armor_leggings'})
    event.remove({output: 'traveloptics:primordial_crest_armor_boots'})
    event.shaped(
        Item.of('traveloptics:primordial_crest_armor_helmet'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'alexscaves:tough_hide',
            D: '#iceandfire:dragon_bloods',
            B: 'enigmaticlegacy:astral_dust',
            C: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('traveloptics:primordial_crest_armor_chestplate'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            A: 'alexscaves:heavy_bone',
            C: 'alexscaves:tough_hide',
            B: '#iceandfire:dragon_bloods',
            E: 'enigmaticlegacy:cosmic_heart',
            D: 'irons_spellbooks:magic_cloth'
        }
    )
    event.shaped(
        Item.of('traveloptics:primordial_crest_armor_leggings'),
        [
            'ABA',
            'CDC',
            'E E'
        ],
        {
            C: 'alexscaves:heavy_bone',
            E: 'alexscaves:tough_hide',
            D: '#iceandfire:dragon_bloods',
            A: 'irons_spellbooks:magic_cloth',
            B: 'enigmaticlegacy:astral_dust'
        }
    )
    event.shaped(
        Item.of('traveloptics:primordial_crest_armor_boots'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'alexscaves:heavy_bone',
            C: 'alexscaves:tough_hide',
            D: '#iceandfire:dragon_bloods',
            B: 'enigmaticlegacy:astral_dust'
        }
    )

    // riptide sovereign armor
    event.remove({output: 'traveloptics:riptide_sovereign_hat'})
    event.remove({output: 'traveloptics:riptide_sovereign_fincloak'})
    event.remove({output: 'traveloptics:riptide_sovereign_leggings'})
    event.remove({output: 'traveloptics:riptide_sovereign_boots'})
    event.smithing(
        'traveloptics:riptide_sovereign_hat',
        'traveloptics:ocean_sovereign_upgrade_smithing_template',
        'irons_spellbooks:electromancer_helmet',
        'cataclysm:essence_of_the_storm'
    )
    event.smithing(
        'traveloptics:riptide_sovereign_fincloak',
        'traveloptics:ocean_sovereign_upgrade_smithing_template',
        'irons_spellbooks:electromancer_chestplate',
        'cataclysm:essence_of_the_storm'
    )
    event.smithing(
        'traveloptics:riptide_sovereign_leggings',
        'traveloptics:ocean_sovereign_upgrade_smithing_template',
        'irons_spellbooks:electromancer_leggings',
        'cataclysm:essence_of_the_storm'
    )
    event.smithing(
        'traveloptics:riptide_sovereign_boots',
        'traveloptics:ocean_sovereign_upgrade_smithing_template',
        'irons_spellbooks:electromancer_boots',
        'cataclysm:essence_of_the_storm'
    )

    // abyssal warlock armor 
    event.remove({output: 'cataclysm_spellbooks:abyssal_warlock_helmet'})
    event.remove({output: 'cataclysm_spellbooks:abyssal_warlock_chestplate'})
    event.remove({output: 'cataclysm_spellbooks:abyssal_warlock_leggings'})
    event.remove({output: 'cataclysm_spellbooks:abyssal_warlock_boots'})
    event.shaped(
        Item.of('cataclysm_spellbooks:abyssal_warlock_helmet'),
        [
            'ABA',
            'CDC',
            '   '
        ],
        {
            A: 'iceandfire:sea_serpent_scales_purple',
            B: 'traveloptics:hullbreaker_steel',
            C: 'irons_spellbooks:magic_cloth',
            D: 'cataclysm_spellbooks:abyssal_rune'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:abyssal_warlock_chestplate'),
        [
            'ABA',
            'CDC',
            'CDC'
        ],
        {
            A: '#iceandfire:scales/sea_serpent',
            D: 'traveloptics:hullbreaker_steel',
            C: 'irons_spellbooks:magic_cloth',
            B: 'cataclysm_spellbooks:abyssal_rune'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:abyssal_warlock_leggings'),
        [
            'ABA',
            'BCB',
            'D D'
        ],
        {
            A: 'iceandfire:sea_serpent_scales_purple',
            D: 'traveloptics:hullbreaker_steel',
            B: 'irons_spellbooks:magic_cloth',
            C: 'cataclysm_spellbooks:abyssal_rune'
        }
    )
    event.shaped(
        Item.of('cataclysm_spellbooks:abyssal_warlock_boots'),
        [
            'A A',
            'BCB',
            '   '
        ],
        {
            A: 'iceandfire:sea_serpent_scales_purple',
            B: 'irons_spellbooks:magic_cloth',
            C: 'cataclysm_spellbooks:abyssal_rune'
        }
    )
    // abyssal hide armor
    event.remove({output: 'traveloptics:abyssal_hide_armor_hat'})
    event.remove({output: 'traveloptics:abyssal_hide_armor_robe'})
    event.remove({output: 'traveloptics:abyssal_hide_armor_leggings'})
    event.remove({output: 'traveloptics:abyssal_hide_armor_boots'})
    event.smithing(
        'traveloptics:abyssal_hide_armor_hat',
        'traveloptics:abyssal_upgrade_smithing_template',
        'cataclysm_spellbooks:abyssal_warlock_helmet',
        'traveloptics:abyssal_spellweave_ingot'
    )
    event.smithing(
        'traveloptics:abyssal_hide_armor_hat',
        'traveloptics:abyssal_upgrade_smithing_template',
        'cataclysm_spellbooks:abyssal_warlock_mask',
        'traveloptics:abyssal_spellweave_ingot'
    )
    event.smithing(
        'traveloptics:abyssal_hide_armor_robe',
        'traveloptics:abyssal_upgrade_smithing_template',
        'cataclysm_spellbooks:abyssal_warlock_chestplate',
        'traveloptics:abyssal_spellweave_ingot'
    )
    event.smithing(
        'traveloptics:abyssal_hide_armor_leggings',
        'traveloptics:abyssal_upgrade_smithing_template',
        'cataclysm_spellbooks:abyssal_warlock_leggings',
        'traveloptics:abyssal_spellweave_ingot'
    )
    event.smithing(
        'traveloptics:abyssal_hide_armor_boots',
        'traveloptics:abyssal_upgrade_smithing_template',
        'cataclysm_spellbooks:abyssal_warlock_boots',
        'traveloptics:abyssal_spellweave_ingot'
    )

    // cursed wraithguard armor 
    event.remove({output: 'traveloptics:cursed_wraithguard_crown'})
    event.remove({output: 'traveloptics:cursed_wraithguard_chestplate'})
    event.remove({output: 'traveloptics:cursed_wraithguard_spectral_wrapping'})
    event.remove({output: 'traveloptics:cursed_wraithguard_boots'})
    event.smithing(
        'traveloptics:cursed_wraithguard_crown',
        'cataclysm:cursium_upgrade_smithing_template',
        'irons_spellbooks:tarnished_helmet',
        'cataclysm:cursium_ingot'
    )
    event.smithing(
        'traveloptics:cursed_wraithguard_chestplate',
        'cataclysm:cursium_upgrade_smithing_template',
        'cataclysm_spellbooks:pharaoh_chestplate',
        'cataclysm:cursium_ingot'
    )
    event.smithing(
        'traveloptics:cursed_wraithguard_spectral_wrapping',
        'cataclysm:cursium_upgrade_smithing_template',
        'cataclysm_spellbooks:pharaoh_leggings',
        'cataclysm:cursium_ingot'
    )
    event.smithing(
        'traveloptics:cursed_wraithguard_boots',
        'cataclysm:cursium_upgrade_smithing_template',
        'cataclysm_spellbooks:pharaoh_greaves',
        'cataclysm:cursium_ingot'
    )
    // forlorn harbinger armor 
    event.remove({output: 'traveloptics:forlorn_harbinger_hood'})
    event.remove({output: 'traveloptics:forlorn_harbinger_robe'})
    event.remove({output: 'traveloptics:forlorn_harbinger_leggings'})
    event.remove({output: 'traveloptics:forlorn_harbinger_boots'})
    event.shaped(
        Item.of('traveloptics:forlorn_harbinger_hood'),
        [
            'ABA',
            'B B',
            '   '
        ],
        {
            B: 'traveloptics:darkness_cloth',
            A: 'alexsmobs:gazelle_horn'
        }
    )
    event.shaped(
        Item.of('traveloptics:forlorn_harbinger_robe'),
        [
            'A A',
            'BCB',
            'BBB'
        ],
        {
            A: 'alexscaves:vesper_wing',
            C: 'traveloptics:dark_gem_of_the_living_void',
            B: 'traveloptics:darkness_cloth'
        }
    )
    event.shaped(
        Item.of('traveloptics:forlorn_harbinger_leggings'),
        [
            'ABA',
            'B B',
            'A A'
        ],
        {
            A: 'traveloptics:darkness_cloth',
            B: 'alexscaves:shadow_silk'
        }
    )
    event.shaped(
        Item.of('traveloptics:forlorn_harbinger_boots'),
        [
            'A A',
            'BCB',
            '   '
        ],
        {
            B: 'minecraft:rabbit_foot',
            A: 'traveloptics:darkness_cloth',
            C: 'alexscaves:shadow_silk'
        }
    )
})