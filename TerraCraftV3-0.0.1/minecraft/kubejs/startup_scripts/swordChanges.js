ItemEvents.modification(event => {
    event.modify('simplyswords:decaying_relic', item => {
        item.attackDamage = 5
    })
    event.modify('simplyswords:tainted_relic', item => {
        item.attackDamage = 9
    })
    event.modify('simplyswords:righteous_relic', item => {
        item.attackDamage = 9
    })
    event.modify('simplyswords:waking_lichblade', item => {
        item.attackDamage = 13
    })
    event.modify('simplyswords:awakened_lichblade', item => {
        item.attackDamage = 16
    })
    event.modify('simplyswords:harbinger', item => {
        item.attackDamage = 11
    })
    event.modify('simplyswords:sunfire', item => {
        item.attackDamage = 12
    })
}) 