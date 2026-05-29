ServerEvents.recipes(event => {
    event.remove('toomanyglyphs:glyph_ray')
    event.custom({
      type: "ars_nouveau:glyph",
      count: 1,
      exp: 27,
      inputItems: [
        { item: "minecraft:arrow" },
        { item: "minecraft:diamond" },
        { item: "irons_spellbooks:arcane_essence" },
      ],
      output: "toomanyglyphs:glyph_ray",
    })
    .id("toomanyglyphs:glyph_ray");
    event.remove('ars_nouveau:glyph_amplify')
    event.custom({
      type: "ars_nouveau:glyph",
      count: 1,
      exp: 160,
      inputItems: [
        { item: "create:brass_ingot" },
        { item: "irons_spellbooks:arcane_salvage" },
        { item: "irons_spellbooks:arcane_ingot" },
      ],
      output: "ars_nouveau:glyph_amplify",
    })
    .id("ars_nouveau:glyph_amplify");
    event.remove('toomanyglyphs:glyph_amplify_two')
    event.custom({
      type: "ars_nouveau:glyph",
      count: 1,
      exp: 910,
      inputItems: [
        { item: "advancednetherite:netherite_diamond_ingot" },
        { item: "irons_spellbooks:dragonskin" },
        { item: "alloyed:steel_ingot" },
      ],
      output: "toomanyglyphs:glyph_amplify_two",
    })
    .id("toomanyglyphs:glyph_amplify_two");
    event.remove('toomanyglyphs:glyph_amplify_three')
    event.custom({
      type: "ars_nouveau:glyph",
      count: 1,
      exp: 2920,
      inputItems: [
        { item: "enigmaticlegacy:etherium_ingot" },
        { item: "enigmaticlegacy:cosmic_heart" },
        { item: "traveloptics:withered_excrucis" },
      ],
      output: "toomanyglyphs:glyph_amplify_three",
    })
    .id("toomanyglyphs:glyph_amplify_three");
});