const a=[-.07,-.02,-.14,-.08,-.13,.01,-.1,-.01,-.1,-.13,-.13,-.37,.16,.01,-.16,-.12,.1,.11,-.02,-.08,.06,.01,.19,-.15,-.13,-.11,-.09,.14,0,-.06,-.15,-.06,-.18,-.05,0,-.01,-.17,-.16,-.09,-.18,.06,-.12,.01,-.06,.29,-.19,-.17,-.02,-.01,-.01,-.23,-.12,-.25,-.12,-.19,-.1,-.18,-.08,.1,-.08,-.02,-.19,-.06,.02,-.16,-.08,-.13,-.2,-.11,-.03,.2,-.13,-.02,.06,-.19,.06,.07,-.03,-.09,-.08,.01,-.03,-.08,-.12,-.29,-.02,-.12,-.1,.08,-.06,-.02,.06,.02,.14,-.22,.09,.2,.03,-.19,-.02,.39,-.16,-.27,.46,-.1,0,.02,.01,-.17,-.13,.02,-.08,-.1,.21,-.24,-.13,-.14,.02,.13,-.12,.12,.05,-.08,.15,.01,.02,-.23,-.01,.02,-.12,.04,-.02,-.12,-.03,.07,.09,.11,.04,-.02,-.12,-.09,-.09,-.06,-.13,-.1,.1,.01,-.13,-.14,.11,-.13,-.03,-.03,.05,.06,.04,.04,-.12,-.01,-.15,.06,-.07,.14,-.09,.01,-.01,.04,-.03,.05,-.1,-.17,-.03,.01,-.07,-.08,-.02,.02,-.04,.02,-.13,.29,-.15,0,-.13,-.12,-.02,0,-.03,.05,-.18,.05,-.01,-.24,-.04,-.09,-.17,-.07,-.1,.01,-.25,-.11,-.06,-.11,.03,.11,-.07,.01,.06,.07,.06,.05,-.14,-.22,-.16,-.07,.09,-.09,.06,-.04,-.05,-.08,-.13,-.14,-.16,-.12,-.12,.01,-.02,-.2,.02,-.08,.6,-.15,-.2,.04,-.12,-.12,-.09,-.02,-.18,-.05,-.18,.02,.06,-.04,.02,-.27,.15,-.05,.05,.1,.02,-.24,-.07,-.11,.01,.21,-.1,-.11,-.13,.06,-.05,-.11,-.09,.12,-.14,.07,-.15,-.15,-.18,-.28,0,-.14,-.14,-.12,.07,-.07,-.01,-.09,.02,.03,-.07,-.09,.06,-.18,-.03,-.09,-.17,-.05,-.18,-.05,.1,-.04,-.06,.08,0,-.17,-.28,.21,-.04,-.03,-.14,-.19,-.14,-.33,-.1,.03,-.05,.02,-.12,-.09,.46,.06,-.1,-.2,-.02,.04,-.02,-.09,.02,-.1,-.34,-.12,-.12,0,-.06,-.13,-.07,-.04,-.09,.22,-.05,-.28,.07,.1,.07,-.06,-.12,.01,.01,-.08,0,.03,-.06,-.16,-.13,-.1,.01,0,-.03,-.07,.04,-.07,-.15,-.1,-.12,.09,.07,-.16,-.13,-.15,.24,-.06,.04,.15,.13,-.09,-.15,.04,.2,-.05,.14,.01,.04,-.02,-.36,-.03,-.08,-.11,.09,-.05,-.09,-.25,.05,.05,-.19,.15,-.08,-.2,-.19,-.16,.19,-.16,.06,-.05,-.13,.08,.05,-.11,.01,-.24,-.14,-.16,-.03,.19,.04,-.12,-.09,-.05,-.17,-.13,.14,.03,-.17,-.15,-.04,-.12,-.14,.02,.21,-.05,-.07,.03,.13,0,-.1,-.16,-.06,-.02,-.04,.1,.04,-.1,.01,.03,-.15,-.02,-.09,-.11,-.17,-.07,-.13,-.14,-.15,-.02,.01,-.13,-.09,-.07,.04,0,.13,.12,.03,.02,.14,.01,-.17,-.05,-.05,-.08,-.14,.23,-.04,.09,-.1,.13,-.13,-.09,-.13,.06,-.17,-.1,-.01,.04,-.11,-.06,.03,-.15,-.06,-.05,-.19,-.13,-.01,.04,.11,-.04,.21,-.14,-.11,-.18,-.4,.1,.07,-.13,-.1,0,-.03,-.15,-.03,-.05,-.15,-.24,-.04,-.18,.47,0,-.14,-.1,-.03,-.11,-.01,-.13,-.02,.06,-.05,-.09,.02,-.07,-.1,.04,-.15,-.13,-.02,.01,-.2,0,-.14,.04,-.15,.03,-.01,.09,.04,-.11,-.05,.05,-.13,.11,-.4,-.04,-.02,.06,-.15,.04,-.17,-.08,-.12,-.22,.07,0,-.14,-.14,-.17,-.05,0,.08,.02,.1,-.2,-.09,.01,-.08,.03,-.09,0,.08,.05,-.1,.03,-.21,-.12,-.13,.13,-.1,-.17,.35,0,.08,-.02,.02,-.14,-.09,-.02,-.09,-.13,-.11,-.07,.08,-.17,-.12,-.11,-.21,-.09,.05,.1,-.08,-.1,-.08,.01,-.18,-.17,-.13,-.18,-.12,.03,-.16,.11,-.17,.04,.11,-.17,0,0,.11,-.28,-.12,-.03,.09,.01,.01,.07,.06,.06,-.06,-.22,-.03,.13,-.08,.04,0,.01,.09,-.01,-.27,-.14,-.15,.02,.04,-.02,.27,-.12,.09,.11,-.22,-.15,.16,-.05,-.06,-.07,-.11,.12,.07,-.12,-.08,-.02,-.17,.01,.4,-.06,-.14,-.03,-.16,-.05,-.06,-.18,-.01,-.02,-.1,-.1,.02,-.08,-.01,-.05,-.27,.04,-.01,-.15,.08,.14,.12,.09,-.05,-.12,0,.11,.14,-.16,-.15,-.02,-.14,-.07,.12,.07,-.06,.1,-.16,.08,-.24,.07,-.08,.03,.02,-.05,-.01,.15,.15,-.02,.03,.02,-.1,.03,-.22,-.05,-.1,.22,0,-.06,.07,.23,.02,-.09,-.18,-.01,-.07,.09,-.02,.04,-.07,-.11,.09,-.29,-.14,-.02,.02,.08,-.15,.04,.1,.17,-.13,-.07,.1,-.09,-.13,0,-.1,-.16,-.27,-.03,-.04,.03,-.26,0,-.13,-.02,-.05,-.1,-.13,-.14,-.03,.01,-.14,-.11,-.06,-.16,-.16,.02,-.19,-.04,.03,.06,-.14,-.06,.02,-.09,-.06,.03,-.11,-.02,-.14,-.26,.02,-.08,-.16,-.09,-.1,-.02,-.1,-.04,.06,-.1,-.07,-.22,-.1,-.05,-.11,-.1,.1,0,.04,-.1,.2,-.09,-.24,-.11,-.04,.17,-.03,.07,-.01,.13,-.2,-.01,-.17,.1,.24,-.01,-.01,-.09,-.13,-.11,.06,-.11,.06,-.11,.11,-.08,-.01,.04,.09,-.11,.13,-.19,.04,-.3,0,-.08,-.08,-.02,-.05,-.1,.04,.08,.12,-.1,.06,.05,.02,.04,.02,.01,-.02,-.07,-.09,.04,-.04,-.1,-.01,.01,-.11,-.17,-.01,.12,.07,.02,.04,-.02,-.03,.06,-.01,.01,.21,.04,.15,-.06,.04,-.12,-.16,-.01,-.07,-.1,.03,-.13,-.1,-.09,.07,-.19,-.14,-.02,-.11,.18,.14,.02,-.21,.12,.04,.1,-.18,-.16,.01,-.24,.13,.18,-.1,-.05,-.21,0,-.05,.07,-.05,-.07,-.04,-.02,-.15,.08,0,.09,.07,.13,.11,.07,.11,-.21,-.11,-.13,-.16,-.1,-.14,-.07,0,-.13,-.2,-.14,-.19,.22,-.09,-.05,-.11,-.12,-.11,-.06,-.01,-.04,.07,.11,.04,-.17,-.28,.02,.01,.08,-.1,.01,.06,-.07,-.09,.1,-.15,.08,-.16,.18,-.04,.18,-.13,.03,0,.01,.18,-.04,.12,.07,-.14,.06,-.07,.09,.02,.02,-.03,-.11,-.11,.02,.04,.01,0,.04,.03,.04,-.07,-.02,.12,0,.04,0,-.16,.07,.12,-.08,.24,-.13,-.16,-.03,.04,-.04,-.02,-.1,-.01,-.1,.06,-.07,-.2,-.1,.06,-.04,.07,-.01,.03,-.17,.1,.02,-.1,.11,-.06,-.27,.13,-.06,-.09,.19,-.04,-.08,.13,.25,0,-.21,.14,-.15,-.14,.03,-.13,.25,.04,-.12,.07,-.09,-.1,.04,-.1,.11,-.09,-.22,.07,-.04,-.34,.03,0,.08,-.05,-.1,.11,-.12,-.1,-.03,0,-.12,.01,.11,-.05,-.09,-.1,.12,-.05,-.16,-.07,-.17,-.05,-.02,-.14,-.06,-.12,-.13,-.13,-.02,.17,.12,-.02,0,-.18,.11,0,-.1,.07,.04,-.06,.05,-.12,-.03,.05,-.08,-.1,-.11,.03,.15,.04,-.07,-.11,-.12,-.09,.08,-.12,-.02,.09,-.05,.01,.15,-.11,-.08,-.23,-.11,.2,-.09,0,-.15,-.06,.05,-.03,0,-.17,-.1,-.06,-.06,.07,-.1,-.1,.18,-.1,-.12,-.09,.04,-.06,.07,-.13,-.04,.09,-.13,-.14,-.07,-.12,-.01,-.19,.01,.03,-.01,-.09,-.08,.04,.04,-.08,.06,.02,-.1,-.09,-.01,-.09,-.06,-.18,.14,-.07,-.06,-.06,-.06,.11,-.02,.11,-.1,-.15,.27,-.12,-.04,-.03,-.11,-.03,.22,.06,-.02,.1,-.1,-.12,-.13,-.11,-.17,.03,-.01,.12,-.01,-.11,-.05,-.03,-.07,-.1,.16,.04,-.14,-.19,-.1,-.11,-.09,.18,-.14,-.12,.02,-.14,-.08,.22,.06,-.3,.03,-.08,-.09,-.11,.09,.03,-.17,-.13,-.06,-.04,-.03,-.16,-.02,.05,-.05,-.06,-.01,-.06,.1,-.16,-.07,-.1,-.02,.01,-.07,-.16,-.08,-.15,.21,-.07,-.04,-.03,-.09,-.1,.05,-.06,-.07,-.1,-.08,-.13,-.14,.01,.12,.05,-.09,.05,-.1,-.08,.01,.11,-.02,-.03,-.02,0,-.06,-.09,.29,-.13,-.09,-.07,.01,0,-.06,-.07,1,-.1,.02,-.14,.02,-.18,-.09,-.13,-.04,.05,.03,0,-.18,-.13,-.09,.05,-.02,-.02,-.07,0,-.06,-.11,-.05,-.16,-.01,-.11,-.14,-.05,.04,-.15,-.33,-.03,-.15,.11,-.04,-.11,.11,-.04,-.14,-.17,-.11,-.06,.07,.19,.06,.05,.06,-.14,-.12,-.05,-.02,-.04,-.14,.09,-.06,.07,-.07,.04,-.08,-.04,-.12,0,.17,-.01,-.09,-.02,.14,-.19,-.04,.05,.14,.01,.04,-.05,-.02,.03,-.04,.06,.03,.09,.06,-.07,-.06,.07,.01,.03,-.02,-.04,-.01,.13,.15,.11,-.05,-.05,-.08,.06,-.06,0,.05,-.1,.07,-.02,.05,.04,.07,.1,-.05,.06,-.08,-.03,-.08,.07,-.08,-.01,-.03,-.15,-.02,-.02,-.16,-.13,.45,.18,.09,-.04,-.1,-.1,-.16,-.01,.01,.06,-.24,-.09,-.17,-.21,-.14,-.02,-.15,.13,.15,.05,.22,-.08,-.05,.29,.06,-.03,-.11,-.1,.06,.05,-.13,.24,.01,-.12,0,-.13,-.14,-.19,-.04,.03,.21,0,-.16,.02,-.11,-.13,.11,-.05,.01,-.11,-.07,.11,.01,-.07,-.11,-.11,-.01,-.11,.13,-.01,-.01,.15,.21,-.11,-.02,-.15,-.06,.08,-.03,-.33,-.18,.01,-.04,.04,.03,-.03,-.03,-.07,-.08,-.09,.14,-.08,-.05,-.01,-.08,-.05,-.19,-.16,-.02,.22,-.03,.04,-.16,.08,-.02,.07,-.07,-.25,-.17,-.15,-.11,-.12,.09,-.14,.13,0,-.02,-.12,-.05,-.01,-.14,-.1,.07,.12,.03,.56,.17,-.12,.1,-.03,-.12,0,.02,-.07,-.15,-.01,.1,-.13,-.09,-.03,-.01,.15,-.04,.02,-.1,-.06,-.21,-.07,-.15,-.05,-.12,-.12,.05,-.08,-.06,-.14,-.13,.14,-.04,-.07,.09,-.07,-.08,-.1,-.08,-.06,-.02,-.1,-.01,-.09,-.06,-.14,.06,.01,-.09,-.05,-.01,-.13,-.03,-.17,-.11,-.14,-.15,-.08,-.11,-.07,-.03,.11,-.04,-.04,-.17,.02,-.12,-.15,-.08,-.05,.03,.01,-.07,-.19,-.08,-.14,.01,-.11,.04,-.1,.07,-.1,.09,-.21,-.14,.04,.02,-.06,.02,-.07,-.14,-.11,.06,-.23,.03,-.01,-.2,.09,-.03,.02,-.03,-.01,-.07,-.02,-.08,.16,-.09,-.11,-.14,-.05,.06,.02,.04,-.22,-.04,-.16,.03,-.15,0,.07,.13,.15,-.08,-.09,-.07,-.07,-.1,.11,-.15,-.05,-.12,-.22,.2,.34,-.08,-.02,-.08,.04,.03,.08,.09,-.16,0,-.1,.08,.06,-.12,-.09,-.12,-.22,-.23,-.2,.01,-.07,.02,.21,-.06,-.05,.07,-.1,-.16,-.12,-.17,-.17,.01,.03,-.07,.15,.06,-.09,.02,-.15,-.2,-.04,.04,.17,.07,-.04,.06,.09,-.26,-.15,-.18,.03,-.29,-.17,-.18,-.1,-.11,-.12,.08,.09,.13,-.11,-.09,.4,.05,-.09,-.11,0,-.11,-.1,-.11,-.05,-.1,-.12,.07,.02,.04,-.07,-.07,-.01,0,.03,-.04,.1,-.03,-.24,-.14,-.03,-.06,-.04,-.21,.06,-.05,-.1,.1,.43,.13,-.1,.01,-.19,-.02,-.23,-.23,-.13,.07,-.13,-.08,-.01,-.06,-.19,-.14,-.07,.41,.04,.22,-.08,.18,.12,.07,.11,-.08,-.14,.03,.13,-.07,-.12,-.04,-.13,-.01,.01,.07,-.07,-.1,-.1,-.11,-.01,-.09,-.15,.14,-.01,.01,-.01,-.04,-.1,-.17,-.19,-.05,-.01,.14,-.1,.03,-.09,-.16,-.09,0,.06,-.04,-.14,-.02,-.16,.15,-.04,-.14,-.08,-.13,-.13,-.13,-.08,-.31,-.11,-.02,.02,-.16,.02,.49,.14,-.07,-.15,-.1,.03,.01,.02,-.21,-.13,.09,.22,.06,.46,-.05,-.12,-.17,-.03,0,-.01,-.08,.03,-.03,-.04,-.03,.08,.2,.04,.01,-.11,-.08,.06,-.28,0,0,-.09,.02,-.03,-.13,.21,-.12,.03,-.02,-.07,-.15,-.22,-.07,-.14,.18,-.08,.14,-.13,-.02,-.03,-.02,-.28,-.29,-.06,.04,.09,.22,.01,-.07,-.09,-.06,-.1,.01,.22,.1,-.08,.01,-.1,-.15,-.12,.13,-.09,-.13,.04,-.26,-.12,-.04,-.12,.02,-.04,-.12,-.04,.08,.04,-.02,-.1,.18,.12,-.09,-.12,.27,.01,-.14,-.04,-.13,-.09,.1,.22,-.04,.12,-.01,.38,-.09,.05,-.1,-.06,.01,.02,.26,-.05,-.08,-.07,-.07,-.02,.15,-.17,-.09,-.12,.02,-.13,-.19,-.09,-.08,-.11,.02,-.14,-.07,-.1,0,0,-.01,.1,-.05,-.13,-.15,.03,-.16,-.22,-.22,-.14,.02,0,-.1,.08,.05,-.01,0,.14,-.03,-.08,-.1,-.09,-.04,.28,-.07,-.18,-.03,-.08,.01,-.03,-.04,-.11,-.21,-.13,.16,-.16,-.09,-.04,-.12,-.02,-.12,-.14,-.12,-.07,.14,-.14,-.1,-.09,-.08,-.06,.07,-.08,-.21,.06,-.09,-.14,-.15,-.07,-.15,-.12,-.14,.02,-.15,-.09,-.05,.02,-.16,-.12,-.13,-.07,-.14,.03,-.12,-.07,-.02,.12,-.07,-.11,-.15,0,-.09,-.07,-.08,-.17,-.18,-.09,-.04,-.06,-.05,-.12,-.1,-.09,-.12,-.03,.04,.01,.13,.03,.13,0,.03,-.21,-.04,-.11,-.12,-.04,-.06];export{a as rvalData};
