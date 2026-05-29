ServerEvents.recipes(event => {
  // removals
  event.remove({output: 'alloyed:steel_nugget'})
  event.remove({output: 'alloyed:steel_ingot'})

  event.recipes.create.mechanical_crafting('simplyswords:ribboncleaver', [
    '  AB',
    'CABA',
    'DEA ',
    'EDC '
  ], {
    A: "minecraft:red_wool",
    B: "alloyed:steel_block",
    C: "alloyed:bronze_sheet",
    D: "irons_spellbooks:arcane_essence",
    E: "alloyed:bronze_ingot"
  })
  event.recipes.create.pressing('camickcraftcompanionmod:wax_blade', 'camickcraftcompanionmod:enflamed_wax')
  event.recipes.create.crushing(['create:powdered_obsidian', 'bosses_of_mass_destruction:ancient_anima', Item.of('minecraft:crying_obsidian').withChance(0.5), Item.of('minecraft:crying_obsidian').withChance(0.5), Item.of('minecraft:crying_obsidian').withChance(0.5), Item.of('minecraft:crying_obsidian').withChance(0.5)], 'artifacts:obsidian_skull').processingTime(500)
  event.recipes.create.compacting('camickcraftcompanionmod:coke', ['minecraft:coal', 'minecraft:coal', 'minecraft:coal']).heated()
  event.recipes.create.splashing(['alloyed:steel_nugget', Item.of('alloyed:steel_nugget').withChance(0.75), Item.of('alloyed:steel_nugget').withChance(0.50), Item.of('alloyed:steel_nugget').withChance(0.25)], 'camickcraftcompanionmod:pig_iron')
  event.recipes.create.compacting('alloyed:steel_ingot', ['alloyed:steel_nugget', 'alloyed:steel_nugget', 'alloyed:steel_nugget', 'alloyed:steel_nugget']).heated()
  event.recipes.create.pressing(['alloyed:steel_nugget', 'alloyed:steel_nugget', 'alloyed:steel_nugget', 'alloyed:steel_nugget'], 'alloyed:steel_ingot')
  event.recipes.create.mixing('camickcraftcompanionmod:pig_iron', ['camickcraftcompanionmod:coke', 'create:crushed_raw_iron', 'create:crushed_raw_iron', '#camickcraftcompanionmod:limestone']).superheated()
  event.recipes.create.mechanical_crafting('cataclysm:the_incinerator', [
    '  AB',
    'BABA',
    'DBA ',
    'EDB '
  ], {
    A: "minecraft:blaze_rod",
    B: "cataclysm:ignitium_ingot",
    D: "alexscaves:tectonic_shard",
    E: "alexscaves:primal_magma"
  })
})