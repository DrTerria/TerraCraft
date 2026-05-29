ServerEvents.recipes(event => {
  event.custom({
    type: "ars_nouveau:imbuement",
    count: 1,
    input: { tag: "forge:gems/source" },
    output: "bosses_of_mass_destruction:ancient_anima",
    pedestalItems: [
      {
        "item": { item: "bosses_of_mass_destruction:ancient_anima" },
      },
      {
        "item": { item: "create:crushed_raw_gold" },
      },
      {
        "item": { item: "ars_nouveau:conjuration_essence" },
      }
    ],
    source: 2000
  });
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: "camickcraftcompanionmod:inflamed_candle" },
    pedestalItems: [
      { item: "netherexp:ancient_wax" },
      { item: "irons_spellbooks:fire_rune" },
      { item: "ars_nouveau:fire_essence" },
    ],
    reagent: [
      { item: "#minecraft:candles" },
    ],
    sourceCost: 2000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: "camickcraftcompanionmod:enflamed_wax" },
    pedestalItems: [
      { item: "netherexp:ancient_wax" },
      { item: "irons_spellbooks:fire_rune" },
      { item: "ars_nouveau:fire_essence" },
    ],
    reagent: [
      { item: "minecraft:honeycomb" },
    ],
    sourceCost: 2000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: "simplyswords:wickpiercer" },
    pedestalItems: [
      { item: "camickcraftcompanionmod:inflamed_candle" },
      { item: "camickcraftcompanionmod:inflamed_candle" },
      { item: "camickcraftcompanionmod:inflamed_candle" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
    ],
    reagent: [
      { item: "simplyswords:netherite_spear" },
    ],
    sourceCost: 2000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: "simplyswords:waxweaver" },
    pedestalItems: [
      { item: "camickcraftcompanionmod:inflamed_candle" },
      { item: "camickcraftcompanionmod:wax_blade" },
      { item: "camickcraftcompanionmod:inflamed_candle" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
      { item: "create:brass_ingot" },
    ],
    reagent: [
      { item: "simplyswords:netherite_longsword" },
    ],
    sourceCost: 2000
  })

  // rune changes
  // generic rune recipes
  let runes = ['ice', 'lightning', 'evocation', 'ender', 'holy', 'blood', 'arcane', 'cooldown', 'protection']
  let runeItems = ['irons_spellbooks:frozen_bone', 'irons_spellbooks:lightning_bottle', 'minecraft:emerald', 'minecraft:ender_pearl', 'irons_spellbooks:divine_pearl', 'irons_spellbooks:blood_vial', 'irons_spellbooks:arcane_essence', 'minecraft:phantom_membrane', 'minecraft:pufferfish']
  for (let i = 0; i < 9; i++) {
    let curRune = 'irons_spellbooks:' + runes[i] + '_rune'
    event.remove({output: curRune})
    event.custom({
      type: "ars_nouveau:enchanting_apparatus",
      keepNbtOfReagent: false,
      output: { item: curRune },
      pedestalItems: [
        { item: runeItems[i] },
        { item: runeItems[i] },
        { item: runeItems[i] },
        { item: runeItems[i] },
        { item: runeItems[i] },
        { item: runeItems[i] },
        { item: runeItems[i] },
        { item: runeItems[i] },
      ],
      reagent: [
        { item: "irons_spellbooks:blank_rune" },
      ],
      sourceCost: 500
    })
  }
  // add unqiue rune recipes
  event.remove({output: 'irons_spellbooks:fire_rune'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'irons_spellbooks:fire_rune' },
    pedestalItems: [
      { item: 'minecraft:magma_cream' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:magma_cream' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:magma_cream' },
      { item: 'minecraft:blaze_rod' },
      { item: 'minecraft:magma_cream' },
      { item: 'minecraft:blaze_rod' },
    ],
    reagent: [
      { item: "irons_spellbooks:blank_rune" },
    ],
    sourceCost: 500
  })
  event.remove({output: 'cataclysm_spellbooks:abyssal_rune'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'cataclysm_spellbooks:abyssal_rune' },
    pedestalItems: [
      { item: 'cataclysm:crystallized_coral_fragments' },
      { item: 'phantasm:void_crystal_shard' },
      { item: 'cataclysm:crystallized_coral_fragments' },
      { item: 'phantasm:void_crystal_shard' },
      { item: 'cataclysm:crystallized_coral_fragments' },
      { item: 'phantasm:void_crystal_shard' },
      { item: 'cataclysm:crystallized_coral_fragments' },
      { item: 'phantasm:void_crystal_shard' },
    ],
    reagent: [
      { item: "irons_spellbooks:blank_rune" },
    ],
    sourceCost: 500
  })
  event.remove({output: 'irons_spellbooks:nature_rune'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'irons_spellbooks:nature_rune' },
    pedestalItems: [
      { item: '#minecraft:flowers' },
      { item: '#forge:seeds' },
      { item: '#minecraft:leaves' },
      { item: 'minecraft:poisonous_potato' },
      { item: 'minecraft:apple' },
      { item: 'minecraft:sweet_berries' },
      { item: 'minecraft:wheat' },
      { item: 'minecraft:melon_slice' },
    ],
    reagent: [
      { item: "irons_spellbooks:blank_rune" },
    ],
    sourceCost: 500
  })
  event.remove({output: 'simplyswords:waking_lichblade'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'simplyswords:waking_lichblade' },
    pedestalItems: [
      { item: 'apotheosis:warden_tendril' },
      { item: 'quark:soul_bead' },
      { item: 'alexsmobs:soul_heart' },
      { item: 'alexsmobs:skreecher_soul' },
    ],
    reagent: [
      { item: "simplyswords:slumbering_lichblade" },
    ],
    sourceCost: 4000
  })
  event.custom({
    type: "ars_nouveau:imbuement",
    count: 1,
    input: { item: "artifacts:power_glove" },
    output: "artifacts:fire_gauntlet",
    pedestalItems: [
      {
        "item": { item: "bosses_of_mass_destruction:blazing_eye" },
      },
      {
        "item": { item: "cataclysm:lava_power_cell" },
      }
    ],
    source: 2000
  });
  event.remove({output: 'simplyswords:sunfire'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'simplyswords:sunfire' },
    pedestalItems: [
      { item: 'irons_spellbooks:holy_rune' },
      { item: 'ars_elemental:lesser_fire_focus' },
      { item: 'iceandfire:fire_dragon_blood' },
      { item: 'minecraft:dragon_breath' },
      { item: 'enigmaticaddons:bless_stone' },
    ],
    reagent: [
      { item: "simplyswords:righteous_relic" },
    ],
    sourceCost: 4000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'relics:holy_locket' },
    pedestalItems: [
      { item: 'irons_spellbooks:holy_rune' },
      { item: 'enigmaticaddons:pure_heart' },
      { item: 'enigmaticlegacy:astral_dust' },
    ],
    reagent: [
      { item: "artifacts:cross_necklace" },
    ],
    sourceCost: 4000
  })
  event.remove({output: 'simplyswords:awakened_lichblade'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'simplyswords:awakened_lichblade' },
    pedestalItems: [
      { item: 'minecraft:enchanted_golden_apple' },
      { item: 'apotheosis:infused_breath' },
      { item: 'enigmaticlegacy:soul_dust' },
      { item: 'traveloptics:void_spellweave_ingot' },
    ],
    reagent: [
      { item: "simplyswords:waking_lichblade" },
    ],
    sourceCost: 4000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: true,
    output: { item: 'simplyswords:brimstone_claymore' },
    pedestalItems: [
      { item: 'cataclysm:ignitium_ingot' },
      { item: 'bosses_of_mass_destruction:brimstone_nectar' },
      { item: 'traveloptics:tectonic_ingot' },
      { item: 'apotheosis:infused_breath' },
      { item: 'enigmaticlegacy:cosmic_heart' },
      { item: 'ars_elemental:fire_focus' },
    ],
    reagent: [
      { item: "iceandfire:dragonsteel_fire_sword" },
    ],
    sourceCost: 8000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: true,
    output: { item: 'simplyswords:brimstone_claymore' },
    pedestalItems: [
      { item: 'cataclysm:ignitium_ingot' },
      { item: 'bosses_of_mass_destruction:brimstone_nectar' },
      { item: 'traveloptics:tectonic_ingot' },
      { item: 'apotheosis:infused_breath' },
      { item: 'enigmaticlegacy:cosmic_heart' },
      { item: 'ars_elemental:fire_focus' },
    ],
    reagent: [
      { item: "iceandfire:dragonsteel_ice_sword" },
    ],
    sourceCost: 8000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: true,
    output: { item: 'simplyswords:brimstone_claymore' },
    pedestalItems: [
      { item: 'cataclysm:ignitium_ingot' },
      { item: 'bosses_of_mass_destruction:brimstone_nectar' },
      { item: 'traveloptics:tectonic_ingot' },
      { item: 'apotheosis:infused_breath' },
      { item: 'enigmaticlegacy:cosmic_heart' },
      { item: 'ars_elemental:fire_focus' },
    ],
    reagent: [
      { item: "iceandfire:dragonsteel_lightning_sword" },
    ],
    sourceCost: 8000
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: true,
    output: { item: 'simplyswords:whisperwind' },
    pedestalItems: [
      { item: 'traveloptics:withered_excrucis' },
      { item: 'cataclysm:cursium_ingot' },
      { item: 'ars_elemental:air_focus' },
      { item: 'ars_elemental:fire_focus' },
      { item: 'ars_elemental:earth_focus' },
      { item: 'ars_elemental:water_focus' },
    ],
    reagent: [
      { item: "simplyswords:iron_katana" },
    ],
    sourceCost: 8000
  })
  event.remove('enigmaticlegacy:infernal_shield')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: true,
    output: { item: 'enigmaticlegacy:infernal_shield' },
    pedestalItems: [
      { item: 'alexscaves:tectonic_shard' },
      { item: 'cataclysm:ignitium_ingot' },
    ],
    reagent: [
      { item: "minecraft:shield" },
    ],
    sourceCost: 8000
  })
  event.remove('enigmaticaddons:bless_stone')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'enigmaticaddons:bless_stone' },
    pedestalItems: [
      { item: 'enigmaticaddons:pure_heart' },
      { item: 'enigmaticlegacy:cosmic_heart' },
      { item: 'enigmaticlegacy:astral_dust' },
      { item: 'irons_spellbooks:holy_rune' },
    ],
    reagent: [
      { item: "ars_nouveau:sourcestone" },
    ],
    sourceCost: 4000
  })
  event.remove('enigmaticlegacy:cursed_stone')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'enigmaticlegacy:cursed_stone' },
    pedestalItems: [
      { item: 'alexscaves:pure_darkness' },
      { item: 'enigmaticlegacy:abyssal_heart' },
      { item: 'enigmaticlegacy:twisted_heart' },
      { item: 'enigmaticlegacy:evil_ingot' },
      { item: 'irons_spellbooks:blood_rune' },
    ],
    reagent: [
      { item: "ars_nouveau:sourcestone" },
    ],
    sourceCost: 4000
  })
  event.remove('ars_nouveau:starbuncle_charm')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'ars_nouveau:starbuncle_charm' },
    pedestalItems: [
      { item: 'irons_spellbooks:arcane_ingot' },
      { item: 'minecraft:gold_ingot' },
      { item: 'irons_spellbooks:arcane_ingot' },
      { item: 'minecraft:gold_ingot' },
      { item: 'irons_spellbooks:arcane_ingot' },
      { item: 'minecraft:gold_ingot' },
      { item: 'irons_spellbooks:arcane_ingot' },
      { item: 'minecraft:gold_ingot' },
    ],
    reagent: [
      { item: "ars_nouveau:starbuncle_shards" },
    ],
    sourceCost: 500
  })
  event.remove({output: 'ars_nouveau:fire_essence'})
  event.custom({
    type: "ars_nouveau:imbuement",
    count: 1,
    input: { item: "ars_nouveau:source_gem" },
    output: "ars_nouveau:fire_essence",
    pedestalItems: [
      {
        "item": { item: "minecraft:flint_and_steel" },
      },
      {
        "item": { item: "minecraft:gunpowder" },
      },
      {
        "item": { item: "minecraft:torch" },
      },
      {
        "item": { item: "iceandfire:fire_lily" },
      }
    ],
    source: 2000
  });
  event.remove('traveloptics:aqua_rune')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'traveloptics:aqua_rune' },
    pedestalItems: [
      { item: 'alexscaves:pearl' },
      { item: 'cataclysm:lionfish' },
      { item: 'alexscaves:pearl' },
      { item: 'cataclysm:lionfish' },
      { item: 'alexscaves:pearl' },
      { item: 'cataclysm:lionfish' },
      { item: 'alexscaves:pearl' },
      { item: 'cataclysm:lionfish' }
    ],
    reagent: [
      { item: "irons_spellbooks:blank_rune" },
    ],
    sourceCost: 500
  })
  event.remove('cataclysm_spellbooks:technomancy_rune')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'cataclysm_spellbooks:technomancy_rune' },
    pedestalItems: [
      { item: 'create:precision_mechanism' },
      { item: 'alloyed:steel_ingot' }
    ],
    reagent: [
      { item: "irons_spellbooks:lightning_rune" },
    ],
    sourceCost: 500
  })
  event.remove({output: 'irons_spellbooks:divine_pearl'})
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'irons_spellbooks:divine_pearl' },
    pedestalItems: [
      { item: 'minecraft:amethyst_shard' },
      { item: 'minecraft:diamond' },
      { item: 'enigmaticaddons:ichor_droplet' },
      { item: 'minecraft:gold_ingot' }
    ],
    reagent: [
      { item: "alexscaves:pearl" },
    ],
    sourceCost: 500
  })
  event.custom({
    type: "ars_nouveau:imbuement",
    count: 1,
    input: { item: "minecraft:glass_bottle" },
    output: "cataclysm:sandstorm_in_a_bottle",
    pedestalItems: [
      {
        "item": { item: "cataclysm:koboleton_bone" },
      },
      {
        "item": { item: "cataclysm:ancient_metal_ingot" },
      },
      {
        "item": { item: "traveloptics:desert_jewel_fragment" },
      },
      {
        "item": { item: "cataclysm:sandstorm_in_a_bottle" },
      }
    ],
    source: 4000
  })
  event.custom({
    type: "ars_nouveau:imbuement",
    count: 1,
    input: { item: "irons_spellbooks:arcane_essence" },
    output: "enigmaticlegacy:astral_dust",
    pedestalItems: [
      {
        "item": { item: "enigmaticlegacy:cosmic_heart" },
      },
      {
        "item": { item: "phantasm:void_crystal_shard" },
      },
      {
        "item": { item: "traveloptics:resonant_scrap" },
      },
      {
        "item": { item: "enigmaticlegacy:etherium_ingot" },
      }
    ],
    source: 1000
  });
  event.remove('traveloptics:darkness_cloth')
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'traveloptics:darkness_cloth' },
    pedestalItems: [
      { item: 'minecraft:wither_rose' },
      { item: 'apotheosis:infused_breath' },
      { item: 'enigmaticlegacy:evil_ingot' },
      { item: 'alexscaves:shadow_silk' },
    ],
    reagent: [
      { item: "irons_spellbooks:magic_cloth" },
    ],
    sourceCost: 500
  })
  event.custom({
    type: "ars_nouveau:enchanting_apparatus",
    keepNbtOfReagent: false,
    output: { item: 'enigmaticaddons:forgotten_ice' },
    pedestalItems: [
      { item: 'irons_spellbooks:permafrost_shard' },
      { item: 'cataclysm_spellbooks:frozen_tablet' },
      { item: 'minecraft:powder_snow_bucket' },
      { item: 'irons_spellbooks:frozen_bone' },
    ],
    reagent: [
      { item: "mowziesmobs:ice_crystal" },
    ],
    sourceCost: 4000
  })
  event.remove('ars_elemental:mark_of_mastery')
  event.custom({
    type: "ars_nouveau:imbuement",
    count: 1,
    input: { item: "ars_nouveau:wilden_tribute" },
    output: "ars_elemental:mark_of_mastery",
    pedestalItems: [
      {
        "item": { item: "ars_nouveau:earth_essence" },
      },
      {
        "item": { item: "ars_nouveau:fire_essence" },
      },
      {
        "item": { item: "ars_nouveau:water_essence" },
      },
      {
        "item": { item: "ars_nouveau:air_essence" },
      },
      {
        "item": { item: "ars_nouveau:abjuration_essence" },
      },
      {
        "item": { item: "ars_nouveau:conjuration_essence" },
      },
      {
        "item": { item: "ars_nouveau:manipulation_essence" },
      },
      {
        "item": { item: "ars_nouveau:anima_essence" },
      },
      {
        "item": { item: "traveloptics:withered_excrucis" },
      }
    ],
    source: 10000
  })
});