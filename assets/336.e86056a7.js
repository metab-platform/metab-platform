const a=[.15,.2,.02,.06,0,.1,-.15,-.18,-.08,-.15,-.04,.03,-.18,-.03,.03,.14,.2,.01,-.01,-.03,.05,.03,.02,.13,-.05,-.04,.13,0,-.01,.16,-.09,.1,-.03,.12,.08,.05,.08,.07,-.07,.06,-.05,-.04,.02,-.02,-.01,.1,.1,.05,.08,-.13,-.09,.19,.16,.08,-.15,.07,-.14,.11,.08,.04,-.07,-.03,.02,.09,-.02,.03,-.02,.04,-.07,-.09,.1,.05,-.2,-.19,.04,.07,.18,-.13,.1,0,.05,.09,-.06,.01,-.2,.01,-.09,-.1,-.08,-.05,-.1,.03,-.15,.02,-.1,-.23,.09,.29,-.11,-.13,-.08,0,-.17,-.02,-.16,.07,.24,.14,-.02,-.07,.24,-.2,-.14,.13,-.16,.09,0,.08,-.08,-.08,.14,-.07,-.01,-.06,-.05,-.2,.03,-.07,.1,.06,-.19,-.19,-.03,-.12,.21,.13,.09,.01,.08,.13,-.04,.17,-.07,-.08,.19,.04,-.02,-.08,-.12,-.17,-.01,-.13,.12,.37,-.2,-.18,-.09,.18,.12,.06,-.22,-.1,-.02,-.16,-.2,-.18,.12,.07,0,0,.16,-.01,-.2,-.26,-.15,.05,.03,.17,-.1,.04,-.11,.02,-.18,.07,-.15,-.24,.16,.21,-.12,-.05,-.08,-.17,-.09,-.08,-.1,0,-.07,-.03,.13,.01,.01,-.12,.03,.13,-.05,-.08,-.05,-.14,-.12,-.22,-.21,.09,.01,.05,.14,.1,-.17,-.2,.08,.12,-.03,-.18,.04,.06,-.23,.05,-.19,.04,-.22,-.18,.12,.03,.01,.04,-.22,.17,.11,.12,-.22,.1,-.08,.08,-.17,-.14,-.15,-.15,-.13,.09,-.03,-.23,-.17,-.15,-.15,-.28,-.06,-.2,-.11,-.05,-.11,.08,.08,-.16,-.15,-.04,0,-.16,-.05,-.1,-.07,.04,.06,.1,.04,-.01,-.03,-.05,.07,-.09,.01,.07,-.19,.11,.04,.03,-.15,-.08,.11,.03,-.06,-.03,-.2,-.19,-.03,-.17,-.13,-.03,0,-.06,.11,-.05,-.11,-.01,-.02,.2,.13,-.14,-.06,.01,-.13,.05,-.03,.01,-.15,.2,-.16,-.05,-.02,-.16,.02,.02,-.02,-.06,.09,.01,-.11,-.16,-.02,-.14,-.11,-.17,.09,-.01,-.08,.08,.08,1,.02,.1,-.17,.04,-.11,-.05,-.16,.26,.11,.03,-.21,-.18,-.08,-.19,-.07,-.07,.18,-.2,.1,.02,-.09,-.04,-.01,.08,.02,.03,-.2,.09,-.21,.04,.13,-.01,-.08,.2,-.01,-.01,-.04,.03,-.08,-.19,-.22,-.1,.01,-.07,-.07,-.12,.12,.03,.09,0,-.06,-.09,-.03,-.02,-.03,-.26,.05,-.09,-.08,-.02,.06,.2,-.13,-.16,-.19,-.32,-.05,-.01,-.09,-.18,.01,-.03,-.05,-.08,.02,-.02,-.16,-.03,-.23,.18,-.1,-.05,-.18,-.08,.07,-.05,.09,-.03,-.02,.02,-.01,0,-.08,-.2,-.24,-.04,-.07,0,-.14,.1,-.18,-.05,.01,-.02,-.12,-.03,-.06,.07,.03,-.19,.03,-.11,0,.12,-.14,.18,.07,-.2,.11,-.1,.15,.07,-.02,.09,.04,-.04,.1,-.12,-.04,-.15,-.06,-.28,-.02,.11,.19,.04,.12,.15,-.17,-.04,-.01,-.09,.03,.07,-.02,.1,-.03,-.18,.03,.08,-.18,-.01,.02,0,-.1,.06,-.14,-.18,.02,0,-.12,.33,-.08,-.16,-.15,-.12,-.06,.06,.01,-.15,-.05,-.06,0,-.09,-.1,-.13,-.07,0,.1,.04,-.08,-.11,-.15,-.05,-.09,-.03,-.21,-.13,.11,.13,.07,.08,-.12,-.06,-.21,-.16,-.13,-.03,.15,.19,-.14,-.18,-.18,.04,-.12,-.24,-.24,.14,-.02,-.18,.12,.13,.04,-.03,.18,.03,.03,.13,0,-.09,.03,-.13,-.03,-.09,.11,.02,-.18,-.14,.07,.46,-.26,.28,-.15,-.09,-.04,.09,-.04,-.04,-.09,.04,.07,-.16,-.12,.61,.01,.07,-.1,.17,-.1,.09,-.01,.08,.03,.1,.05,-.04,-.07,-.03,-.23,.15,-.11,.02,0,-.08,-.14,.03,-.05,-.05,-.07,.02,-.24,.03,.03,0,.26,.12,-.21,-.19,.33,-.02,-.03,-.19,-.13,.1,-.21,.07,-.14,.08,-.19,.06,-.09,-.16,-.11,-.12,-.24,.04,0,-.13,-.17,-.02,-.05,-.1,.05,-.01,.18,-.01,.06,.05,-.16,-.08,-.15,.01,.04,-.14,.12,.12,-.18,.06,-.04,-.11,.06,.06,-.11,.04,0,-.08,.04,-.08,.03,.04,.26,-.12,-.04,0,.01,.01,.74,.18,-.13,-.18,-.01,.03,-.13,.07,.44,-.16,.08,.06,-.05,.19,.2,-.02,-.06,-.16,-.06,-.14,-.11,-.18,.12,-.11,.16,.14,.03,-.04,-.02,-.24,-.17,-.11,-.19,-.13,.06,.06,.2,.1,-.07,-.12,-.05,-.16,-.26,-.2,-.12,-.05,-.07,.11,-.2,-.02,.07,.05,.08,.1,-.02,.12,.23,-.01,.13,-.16,-.02,-.01,-.11,-.09,.05,-.12,-.02,.43,.07,-.13,.16,.12,-.06,.12,.06,.09,-.13,-.08,.29,-.01,-.17,.05,.09,-.17,-.08,.08,-.01,.02,.05,.07,-.06,-.19,-.01,.08,-.03,.22,.05,.17,-.17,-.08,-.02,.19,-.16,.11,-.15,-.15,-.02,-.13,.03,-.08,.11,-.04,.01,-.14,-.15,-.12,-.17,.01,.02,-.25,-.08,.17,-.03,.06,.02,-.08,0,-.11,-.18,.08,.09,-.04,.13,-.2,-.12,.15,-.08,.5,.45,.1,-.04,-.05,-.12,-.14,-.01,.08,.2,-.02,.22,.01,-.18,-.1,-.09,.08,-.02,-.02,.02,-.13,-.09,.04,.07,-.2,.12,-.01,.18,.01,.2,.05,-.03,.04,-.14,-.16,.44,-.01,.18,.07,-.09,.08,-.12,.1,.02,-.08,.01,.32,-.11,-.21,-.2,0,-.1,.08,-.03,-.08,-.16,-.21,.07,.2,-.18,-.2,-.19,.2,-.02,-.15,-.12,-.08,-.01,0,-.12,.18,.09,.03,-.03,0,0,.02,-.11,-.26,-.08,-.17,0,-.06,.09,-.09,-.07,.01,.12,.24,-.04,-.07,-.07,.1,.47,-.04,.19,-.02,.2,-.21,.13,-.14,.14,.16,.08,-.32,-.03,-.18,.02,-.2,-.18,-.15,-.12,-.06,-.07,-.05,-.1,-.02,.05,.08,-.09,-.14,-.2,.05,.02,-.09,-.05,.01,-.1,-.05,.05,-.06,.24,-.02,-.07,-.03,-.04,-.02,-.17,.03,.01,.16,-.16,-.19,-.16,.01,-.17,.03,-.01,-.15,-.09,-.09,-.04,.03,-.17,-.11,-.12,.18,-.01,-.13,-.03,.07,.06,-.07,.07,.02,-.02,.11,-.14,-.2,-.21,-.08,.01,-.17,.02,-.17,-.15,-.21,-.12,.16,.15,-.06,-.08,-.18,-.24,-.21,.2,-.05,.14,.03,-.04,-.29,.16,.14,.19,-.13,.02,.06,.18,.1,.11,.09,.01,-.04,-.09,.17,-.11,-.07,-.15,-.1,-.19,.17,-.06,-.14,.01,-.2,.1,-.23,.07,-.03,.29,-.04,.1,-.28,-.02,-.17,-.06,-.06,-.03,-.2,-.01,.22,-.13,.07,.11,.01,.23,-.16,.02,-.01,-.18,.04,0,-.01,-.04,-.06,-.12,.11,.14,-.07,-.12,-.05,.14,.14,-.06,.01,-.13,.02,.05,-.02,.04,-.03,-.14,-.01,-.01,.04,.02,-.14,.09,-.22,-.03,.05,.17,0,-.06,.56,-.09,0,.16,-.15,0,-.06,.06,-.15,.08,-.11,.08,-.05,-.18,-.16,-.07,-.06,-.2,.19,-.07,-.05,.01,-.06,-.02,0,-.02,.14,-.13,-.14,-.22,.53,.01,.35,-.17,0,-.04,-.03,0,.1,.23,.2,.02,.09,.09,.13,-.11,.11,-.15,.01,.08,-.07,.08,-.05,-.04,-.26,.11,-.16,-.04,.12,-.08,-.13,-.07,.21,-.04,.06,.03,.02,.1,-.03,.04,-.05,-.06,-.09,.21,-.01,.17,.15,-.09,-.08,.19,-.18,-.09,.04,.03,.05,.01,-.03,-.12,.09,-.06,-.16,-.04,.09,.08,.16,.21,-.02,-.21,-.1,.08,-.07,.07,.17,.06,.04,-.07,.1,.02,-.25,-.18,-.06,-.02,.12,-.25,-.01,-.08,.14,.01,-.07,.12,.01,-.19,-.11,-.05,.08,0,-.19,.01,.29,.04,-.08,-.06,-.12,.07,-.02,-.02,0,-.1,-.05,-.05,.21,.17,-.07,-.31,.11,-.05,-.05,.05,-.15,.02,-.08,-.02,-.11,.01,.07,.14,.2,.04,-.01,.05,.06,.21,-.15,.16,-.04,-.08,.15,-.03,-.04,.12,-.09,.16,-.01,-.15,-.08,-.17,-.04,.16,-.02,-.04,-.16,0,-.07,.07,.07,-.2,.22,.08,.03,-.02,.15,.01,-.18,.03,.21,-.16,.07,-.11,.12,.07,-.15,-.13,.15,-.05,.05,.32,.18,-.02,0,-.04,-.06,-.24,-.19,-.07,-.06,-.05,-.11,-.05,-.14,-.01,.12,.21,.06,-.08,-.22,.02,-.11,-.03,-.01,-.08,-.18,-.17,-.02,-.09,-.13,.03,.15,-.16,-.22,-.12,-.14,-.05,-.28,.08,.03,.04,.13,-.02,0,-.2,-.07,.01,.07,-.22,.02,-.08,.02,-.18,-.21,.08,.06,-.08,-.2,-.01,-.1,.26,.03,-.05,-.18,-.07,-.04,-.28,-.09,-.07,.03,-.19,-.14,0,-.02,-.22,-.18,-.08,-.14,.29,-.15,.23,.13,.1,-.18,-.08,0,-.22,-.22,-.23,-.16,.08,-.21,.03,-.22,-.25,.63,.06,-.08,-.14,.02,-.11,-.04,-.05,-.09,-.13,-.09,.05,.08,-.12,.15,-.04,-.03,-.03,.29,.4,.18,-.09,.06,.11,-.16,-.03,.03,-.02,.12,.04,-.23,.01,.04,.07,-.02,-.1,0,-.08,-.03,.13,.02,.08,.08,.04,.2,-.1,-.02,.06,-.09,-.02,-.13,0,-.08,-.05,.2,-.12,-.11,-.11,.16,-.14,-.07,.2,-.11,-.24,-.22,-.08,-.01,.21,-.09,.11,-.07,.04,-.07,-.01,-.11,.09,-.05,.08,-.04,-.01,.13,-.23,-.03,.06,.11,-.04,-.08,-.15,-.05,-.17,.06,0,.11,-.1,-.08,-.22,.48,-.24,-.03,.41,.38,-.18,-.09,-.15,-.06,.27,-.07,-.21,-.12,-.19,.08,-.17,-.14,.03,-.13,-.03,-.11,-.15,-.01,-.03,-.1,-.06,-.08,.06,-.16,-.19,0,-.01,-.07,-.08,-.1,.05,-.12,0,-.09,.17,0,-.13,-.13,-.08,-.03,.11,.02,-.05,.21,.08,.08,-.11,-.16,-.14,-.12,0,.02,-.14,.04,-.14,-.04,-.01,-.06,.02,-.05,.01,-.05,-.09,-.03,-.04,.07,-.06,-.12,-.06,.04,.17,-.15,-.07,.33,-.15,.01,-.03,.08,.11,-.01,-.06,-.1,-.09,.12,.08,-.09,.12,-.03,-.12,-.03,.2,0,-.15,.04,-.12,.04,-.06,.02,-.02,.03,-.06,-.17,-.12,.03,-.02,-.09,.01,-.01,.08,-.11,-.03,-.13,.05,-.09,.42,-.01,.01,-.02,-.07,-.07,.08,.21,.2,-.04,.07,-.17,-.15,-.02,.49,-.04,-.12,.03,-.19,-.08,-.1,-.04,.22,.01,.16,-.13,.03,-.12,-.01,.16,.33,-.07,.07,-.04,-.11,.08,-.09,.05,-.04,.02,-.05,-.12,-.03,-.04,-.11,.06,-.17,-.17,-.14,-.2,.02,-.05,.02,-.07,-.04,.21,-.12,-.04,0,-.2,-.06,-.11,.05,.06,-.03,-.04,-.05,-.16,.05,-.1,-.09,-.05,.01,-.08,-.02,-.11,-.09,.24,-.07,.06,.08,-.04,.16,.01,-.03,-.17,.08,.01,.02,.21,-.14,-.22,.05,.05,-.18,.15,-.03,-.04,0,.11,-.19,-.08,.07,.05,-.03,-.02,-.03,-.13,-.01,.01,-.03,0,.05,-.05,-.08,-.07,-.05,.01,0,.02,-.15,.01,.01,.1,-.07,.03,-.08,-.02,-.13,.17,-.14,0,.21,-.09,.04,.02,.02,-.1,-.16,-.14,-.05,-.03,.16,-.06,-.1,.03,-.02,-.17,.06,-.01,-.07,-.01,.02,-.01,-.05,0,.09,0,.18,-.07,-.17,-.02,-.17,-.02,-.06,.09,.21,-.08,.04,.12,-.05,.13,.43,.01,.03,-.12,-.03,-.23,.13,0,.01,-.02,.04,.04,.13,0,-.15,-.11,-.05,-.1,0,.11,-.07,.01,-.21,-.04,-.11,.04,.05,-.02,.03,.01,-.05,.07,.18,-.08,-.02,-.13,-.18,.07,-.1,.03,-.04,.07,-.01,.1,-.1,.01,-.11,0,.02,-.05,-.16,-.08,-.11,-.01,.06,-.06,-.01,-.22,-.01,-.07,-.05,.09,-.05,.07,.08,.21,.14,-.03,-.14,-.15,-.18,-.04,.39,.02,-.09,-.21,.12,-.03,-.16,-.02,.09,.13,-.15,-.09,-.22,-.05,.02,-.18,-.2,-.02,.06,-.04,-.2,-.17,-.07,-.08,-.02,-.13,.05,.01,-.04,-.12,.05,-.05,-.11,-.15,.12,.04,.08,.12,.08,-.11,-.17,.03,-.02,-.03,-.05,-.04,.68,.1,-.01,-.2,-.13,.2,.09,.05,-.04,.01,-.09,-.01,.01,-.05,-.07,.16,0,.03,.11,-.14,-.06,-.06,-.17,.22,-.1,-.11,-.05,-.09,.25,.02,-.07,.26,-.02,-.16,.29,-.08,-.11,.26,-.01,.01,.19,-.08,-.08,.11,-.12,.08,-.04,-.19,.13,-.14,-.15,.01,.05,.02,.03,.03,.12,.08,.05,-.06,-.03,-.25,-.05,-.07,-.04,-.18,.09,-.04,.05,.28,.02,-.06,-.15,-.07,-.01,-.04,0,.28,-.11,.13,-.17,.13,.2,.27,.37,.07,.03,-.02,.08,-.14,.14,-.27,-.07,-.03,-.02,-.03,.11,.01,.05,-.19,-.06,.06,-.13,.15,.1,0,-.18,-.02,-.16,.29,-.05,.11,.01,-.06,.04,.18,.02,.03,-.03,.05,-.21,-.04,.02,-.07,-.11,.05,-.02,.12,.04,.03,.17,-.12,.86,-.02,0,-.04,.01,-.04,-.19,-.12,.11,-.13,.13,.03,.15,.05,-.19,.14,-.1,.44,0,.02,-.15,-.01,.13,-.18,-.02,-.02,.06,.41,-.05,-.1,.1,.1,.14,-.2,.1,-.11,0,-.15,.07,.13,-.01,-.07];export{a as rvalData};
