const a=[-.2,.28,-.07,-.02,0,-.23,.21,-.11,.05,-.06,-.09,.2,.13,.12,-.11,-.26,-.15,.13,.45,.01,-.05,-.04,-.02,-.1,-.05,.03,.05,-.01,.15,.01,-.03,-.05,-.05,-.12,-.17,.13,-.17,-.13,.19,.04,.09,.06,-.1,-.09,.18,-.12,.13,-.26,-.08,.09,-.04,-.09,.01,-.05,.01,-.12,-.07,-.1,.09,.03,-.04,.03,-.03,-.1,.12,-.04,-.01,-.09,-.03,-.1,-.21,-.02,-.03,-.04,.04,.09,-.17,-.02,-.08,-.1,-.04,.05,-.09,.07,.18,.16,.04,.12,.07,-.14,.06,.16,-.01,0,.15,.25,-.04,-.31,.14,-.02,.03,0,.17,-.04,.08,.16,.09,.09,-.06,.19,-.11,.05,.07,-.1,.06,.02,-.07,-.08,-.15,-.05,.11,.14,-.1,.24,-.05,.11,.07,-.06,-.04,-.06,-.05,-.06,.01,.03,-.31,-.1,.03,.1,-.1,-.04,0,-.11,.07,.01,-.22,-.06,-.02,.03,.01,-.16,0,-.11,.02,-.11,-.04,-.02,.08,-.21,-.15,-.09,0,.05,0,.17,-.05,.06,-.13,-.08,.03,0,-.19,-.23,-.13,.02,.05,-.11,.09,-.04,-.03,-.03,-.06,.03,.08,.04,.13,.24,-.23,-.24,-.03,-.02,.14,-.1,.45,-.05,-.01,-.1,.07,.01,-.17,.13,-.08,-.05,-.07,-.25,-.05,.02,.02,-.02,-.02,.32,-.07,-.08,.02,-.07,-.09,-.05,.33,-.1,-.08,.03,.1,.16,.08,-.08,.22,-.05,-.05,-.1,.05,.18,.14,.08,.03,-.02,.23,-.23,-.09,-.12,.13,-.08,-.02,-.09,.01,0,-.06,-.13,.02,-.26,-.06,-.12,-.08,.26,.13,.17,.01,.5,.07,-.03,.09,.03,-.12,.15,-.06,-.01,.02,.1,.04,.09,.02,0,.07,-.17,-.11,-.02,-.03,1,-.01,-.04,-.06,-.05,.03,.05,-.12,.08,.17,-.02,.1,-.15,.08,.05,-.03,.19,-.11,-.05,.02,-.08,-.15,-.14,-.36,-.02,-.21,-.01,.15,.12,.24,.02,0,-.03,.09,-.11,0,-.04,.18,-.21,.06,-.01,.03,.12,-.02,.01,.09,.11,-.04,.07,.06,.19,-.04,.1,-.07,.21,.11,.04,.25,.27,-.02,-.05,-.05,-.01,-.18,-.02,-.05,-.01,.19,-.1,-.07,0,-.03,.03,0,.15,-.01,-.02,-.2,.22,-.1,-.1,.12,-.22,.06,.03,.01,-.26,.19,.21,.15,.01,-.05,-.08,-.05,.06,.01,.01,.13,-.1,-.01,.22,.22,.1,-.19,.02,-.2,.3,-.03,-.03,-.04,.13,-.22,.08,.02,0,0,.37,.14,-.12,-.1,-.03,-.07,-.01,.13,.05,.28,.2,-.01,-.01,.18,.03,-.1,.07,.12,.02,-.03,-.04,.17,.02,.1,-.11,.05,.03,.02,.04,-.33,.06,-.08,.3,.08,-.05,-.11,.12,.11,.09,.05,-.03,-.07,-.11,0,.02,-.09,-.01,-.04,-.08,.03,.08,.07,-.07,0,-.05,-.09,.03,-.01,-.15,-.11,0,-.03,.29,-.04,-.16,-.02,-.09,0,-.04,.01,-.06,-.13,.04,-.14,.01,.03,.11,-.07,-.09,.12,-.1,-.3,-.33,.02,-.08,-.18,-.15,-.12,.08,.02,-.05,.01,-.05,.05,.12,.03,-.03,.09,0,.03,.18,.05,-.03,-.11,-.02,.14,.14,-.04,.09,.09,.16,.05,.11,.07,.2,.01,-.13,-.04,-.06,-.02,.07,.06,.07,-.03,0,-.2,-.02,.06,.07,.01,-.06,.01,.09,.05,-.22,-.18,-.07,-.07,-.14,.01,.05,-.03,-.05,-.1,-.17,.14,.02,.09,.21,-.18,.15,.24,.07,-.12,.18,-.1,.02,.1,.17,-.02,-.05,-.06,-.07,-.02,.24,.07,.1,-.08,.13,-.06,-.12,.12,-.08,.06,.27,.49,-.08,-.12,.05,.09,-.03,0,-.03,.05,-.04,.05,.14,.03,.07,-.17,-.23,.07,.07,.05,-.08,-.07,.06,-.16,-.16,.1,-.15,.21,.06,-.03,-.12,-.05,.04,-.1,-.23,-.04,.01,-.01,-.1,-.03,.05,.07,-.12,-.35,.24,.04,-.18,.13,-.15,.31,-.19,-.02,-.15,-.07,-.28,.19,.01,-.01,.12,.19,-.11,-.05,.02,.04,-.06,.19,-.1,.1,.08,.14,.1,-.08,.01,-.2,.08,-.26,.04,-.1,-.1,.19,.03,.05,.08,.26,.04,-.27,-.13,.03,-.05,-.11,.11,-.05,0,.31,.07,-.02,.01,-.03,-.04,.1,-.08,.22,.24,0,.1,.07,-.07,.06,-.03,.12,.07,.09,.06,.08,-.07,-.12,.11,-.01,-.02,.01,-.15,-.03,.06,-.03,-.14,.03,.12,.1,.33,-.04,.03,-.27,-.12,.15,-.13,.12,-.04,0,.11,-.08,.22,0,-.03,-.1,.05,-.05,.02,-.16,-.16,.45,-.16,.07,.15,-.08,.04,-.06,-.02,-.22,.08,.01,.03,.05,.09,-.34,.09,-.04,.06,-.03,-.05,-.09,.07,-.11,-.03,-.01,.14,-.08,-.12,-.06,.03,.14,-.18,.06,-.12,.2,-.04,-.31,-.02,.14,.14,-.1,.09,.01,-.02,-.1,-.14,.05,-.06,-.07,.09,.04,-.05,-.01,.27,.12,-.14,.07,.04,.04,-.26,.04,-.2,-.01,-.14,-.01,.07,-.02,.09,-.08,.03,-.02,.06,.17,-.02,-.03,.08,.02,.12,.03,-.09,.01,-.1,-.06,.08,.14,.1,.16,.07,.01,-.02,-.34,.2,-.15,-.08,-.01,.14,.04,-.15,0,-.07,.26,.05,.12,-.06,.14,.01,-.3,.05,-.04,.22,.1,-.07,.05,-.15,.13,-.07,.14,-.06,-.03,.29,.35,.16,-.01,.11,-.15,-.08,-.07,-.02,.26,.06,-.01,-.03,.13,-.1,-.05,-.09,-.14,-.14,-.02,.05,-.26,.19,-.07,.11,-.07,-.12,-.02,-.06,.04,.06,.12,.11,.08,-.32,.12,-.03,.08,-.02,.27,.01,.08,.05,.15,.09,-.12,-.18,.16,-.18,.09,.06,.06,-.1,0,.17,-.04,-.07,.07,.27,.06,.01,-.04,.01,-.08,.26,.15,-.04,-.06,.05,.08,.13,-.24,.01,-.09,.08,-.26,.04,-.07,.07,-.1,.13,.1,.02,-.17,-.02,.01,-.15,.03,.21,.07,.05,-.03,.03,-.14,-.01,.06,.11,-.13,-.1,.03,.08,.13,.02,.03,-.04,-.08,0,-.35,.02,.07,.08,.05,.05,-.11,-.12,.04,-.08,-.04,-.03,.29,.02,-.02,-.02,.02,.16,.13,-.07,-.05,-.06,-.07,.12,0,-.06,.05,-.21,.05,-.19,.16,-.14,-.11,-.04,.09,-.03,.03,.16,-.02,-.09,0,-.05,.02,-.05,-.17,.05,.13,-.33,-.28,-.03,.01,-.09,.06,-.07,.1,.05,.09,-.17,-.2,.17,.14,.23,.05,-.02,-.08,-.08,-.27,.11,.1,-.28,.06,-.08,.02,.18,-.09,.04,-.19,-.11,.13,-.08,.12,.12,.07,.17,-.25,.19,-.1,.02,-.27,.13,.13,-.1,-.02,.24,.24,-.04,-.05,-.03,-.07,-.02,-.04,-.07,.18,.29,-.12,.03,-.07,-.06,-.05,0,.01,-.22,.3,-.12,.18,-.24,-.13,-.16,.05,-.02,.09,-.29,-.1,-.03,.06,-.06,-.08,-.09,0,.58,-.04,-.01,-.09,-.06,.1,-.04,-.09,.05,-.04,-.02,-.17,.01,-.15,-.04,-.07,.07,.11,.2,-.01,.04,.03,.24,-.03,.01,-.03,.05,-.03,.3,-.01,0,-.12,.06,.02,.05,0,-.14,-.07,.04,-.01,0,.29,-.07,.05,.1,.01,.12,.25,-.06,-.08,-.01,-.05,-.07,-.25,-.43,-.01,-.27,-.12,-.01,.02,.11,.05,-.04,-.03,.12,.14,.02,-.04,.03,-.23,-.01,-.02,-.24,.1,0,0,-.21,-.05,.01,-.02,-.15,.05,-.08,-.03,.05,.16,.09,-.2,-.02,-.15,-.11,-.1,-.05,-.06,.06,0,.05,-.04,.03,.01,-.09,.11,-.32,.13,.25,.06,-.17,-.08,-.13,.09,.16,.06,.16,.03,.02,-.01,-.15,-.03,-.08,.14,-.01,.24,-.12,-.08,.19,-.06,-.22,-.1,0,0,.04,-.16,-.07,-.31,-.02,.22,.04,0,-.03,.11,-.08,-.07,-.16,.11,-.02,.19,.15,-.07,.06,.06,-.09,.01,.06,-.07,-.21,-.18,-.05,.23,.06,.03,-.02,.01,.01,-.05,.07,-.03,-.16,.18,-.03,-.18,-.2,-.09,.03,-.01,-.03,-.2,-.02,-.33,.08,-.04,-.23,.01,-.17,.02,-.03,-.05,-.02,0,.22,-.08,0,-.23,-.03,.02,-.01,.13,.01,.09,-.07,.03,-.24,0,-.1,-.03,-.04,.01,-.06,.01,-.2,.05,.07,.06,-.28,-.12,.05,0,-.16,0,.01,.03,-.25,.06,0,.06,-.08,.05,.11,.01,0,-.1,.02,-.03,.05,-.03,.09,.17,-.05,0,.15,-.04,0,.08,-.01,.12,.13,.17,.04,.01,-.07,-.01,-.01,.01,.18,.31,-.02,-.04,.28,0,.04,.02,.13,-.11,-.05,.04,.03,.25,-.01,-.06,-.31,.01,-.09,-.12,.18,.1,-.07,-.12,.13,-.06,.01,-.28,.16,-.05,.02,-.02,.07,.37,-.01,.06,.06,.11,.02,-.12,-.04,.28,-.08,-.04,-.07,0,.05,-.17,-.03,-.19,-.12,-.03,-.08,.21,-.13,-.1,-.03,-.11,-.08,-.07,-.1,-.11,.07,-.09,-.16,.2,.02,.01,.06,-.14,-.02,.05,.09,-.1,-.16,.04,-.12,-.11,-.07,.03,-.03,-.18,-.02,.08,-.07,-.03,.08,.09,.01,-.02,-.05,-.08,.28,.25,-.12,-.02,.01,-.05,.04,-.05,-.21,-.2,-.05,-.18,-.02,-.15,.24,.11,-.03,-.15,.01,.06,.01,.09,0,.03,-.23,-.07,.27,.06,-.19,-.01,.05,-.15,0,.04,.11,.02,-.12,-.14,-.05,.09,-.04,.03,.1,0,-.02,-.09,.3,-.01,.08,-.12,-.02,-.04,.05,-.12,.04,-.11,-.02,.09,-.04,-.03,-.08,.02,-.39,.06,-.04,.08,.22,.17,-.04,.24,.15,0,.16,.19,-.21,.09,-.01,.04,-.04,-.05,.12,.1,.14,.05,.12,.12,-.13,-.05,-.16,.01,.04,.05,-.05,-.05,.05,.28,-.06,-.07,.13,-.11,.01,.11,.04,.12,.03,-.08,-.12,.09,.06,0,-.02,.4,.14,.06,-.2,.06,.02,.04,.07,.08,.09,-.01,-.09,.07,0,-.03,-.03,-.02,.04,0,.01,.01,.02,.2,.03,.05,-.12,.1,-.09,.08,.04,-.15,.09,.13,-.09,.08,.03,-.09,-.09,.1,.16,.14,-.05,.06,0,-.08,-.09,-.03,.02,0,.11,-.21,-.19,.07,-.03,.07,-.09,-.06,.1,.02,.08,-.01,-.09,-.07,.07,-.03,0,.03,-.03,-.25,-.02,.12,.03,-.08,-.01,-.06,-.08,-.03,-.11,.12,.04,-.04,-.04,.07,.16,-.13,-.06,.04,-.02,.22,.07,-.01,-.19,.1,.05,-.02,.06,-.33,-.04,.04,-.06,.1,.1,-.06,.06,.02,.14,-.1,-.1,-.01,-.05,.06,-.1,-.03,.03,-.01,.03,-.05,.06,.1,-.08,-.01,-.01,.05,-.17,.1,.07,.05,.08,0,.07,.1,.01,-.03,-.13,.06,.06,.16,-.05,-.02,-.04,.03,.08,.01,-.01,.02,-.02,-.07,.06,.12,-.04,.06,.18,.02,.26,-.08,-.05,-.2,.04,.32,-.18,-.09,-.04,0,-.08,-.03,-.05,.38,.05,0,.17,.14,.09,-.06,-.1,.01,.14,-.11,-.1,-.09,.06,-.02,-.13,-.28,.06,.05,.14,-.1,-.14,.04,.04,-.02,-.05,-.1,.04,.02,-.06,.09,-.01,.04,-.02,.02,-.22,-.18,-.05,-.03,.14,-.01,-.05,.07,-.08,-.02,-.09,.05,.05,-.04,0,-.28,.21,-.06,.14,-.02,-.1,.01,.11,-.02,.07,.05,.1,-.06,-.03,-.01,.1,.17,0,-.02,-.03,-.04,.05,.23,-.08,.55,.12,-.23,-.12,.07,.04,.25,.01,-.06,.04,-.01,-.06,.03,.03,.18,-.02,-.03,.01,-.04,-.15,.04,-.06,.04,.03,.02,-.02,-.06,-.05,0,-.06,.08,.24,-.07,.01,.09,-.08,.08,-.05,.11,.07,-.02,-.01,0,-.38,-.04,-.13,-.02,-.01,-.03,-.03,-.02,.11,.06,-.16,-.21,-.1,.06,.03,-.02,-.08,-.1,-.02,-.1,.2,-.03,.12,-.01,.07,.03,-.05,-.03,-.2,-.18,-.19,.06,-.08,-.17,-.04,.24,-.04,-.21,.04,.12,-.08,.21,.17,-.07,.08,.04,.16,.17,.07,.04,-.16,0,-.27,-.02,-.06,.19,.02,.08,.01,-.1,-.14,.01,.06,.05,-.13,-.08,-.01,-.02,.07,-.11,-.01,0,-.08,.17,.16,.37,.01,0,-.02,-.02,0,.07,-.08,.06,-.03,.11,-.2,.08,-.16,.05,-.03,.22,-.03,.04,.17,-.02,.01,-.03,.03,-.02,.08,.09,-.12,0,.05,-.03,-.05,.04,0,-.03,-.02,.18,-.03,.04,.08,.14,.03,.1,-.33,-.02,-.04,-.3,-.08,.03,0,-.07,-.08,-.04,.07,-.18,-.15,.02,-.04,-.16,-.05,-.02,-.21,-.11,-.06,-.05,.08,-.01,.34,-.04,.15,.08,.16,-.18,.2,.56,-.22,-.01,-.03,-.02,.02,0,-.05,-.07,.06,-.05,-.16,-.03,.1,-.32,.06,.04,-.11,-.02,.11,-.05,.05,-.23,.13,.04,-.13,.01,.1,.03,.01,-.06,.03,-.06,-.22,.13,-.06,-.23,-.02,.01,0,.04,.21,-.04,-.24,.06,-.04,-.02,-.26,.02,-.16,.04,.05,-.02,.18,-.07,-.01,-.07,-.07,.05,-.16,-.18,-.08,-.09,.07,0,-.08,.06,.04,0,.04,-.02,.04,-.19,-.07,.14,0,-.23,-.06,-.08,.07,.03,.04,.05,-.02,-.04,-.29,-.06,-.05,-.03,.13,-.06,-.09,.06,.09,-.05,.11,-.13,.05,-.33,.17,.09,.09,-.06,-.22,.16,-.03];export{a as rvalData};
