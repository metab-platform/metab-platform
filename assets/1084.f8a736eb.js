const a=[-.09,.07,-.16,.05,-.03,.1,-.09,0,-.02,-.11,-.19,-.12,-.05,-.06,-.19,.03,.08,-.03,.13,-.04,.15,-.01,-.1,-.16,-.05,-.01,-.08,.1,-.06,-.04,-.02,-.07,-.06,-.07,.08,.01,-.08,-.1,.06,-.06,-.14,-.02,-.04,-.01,.12,-.05,.06,-.06,0,.11,-.07,.1,.06,-.03,-.02,-.2,-.07,.04,.21,-.04,.03,0,0,.21,-.16,-.08,.02,-.14,-.16,-.15,.05,-.05,-.06,-.24,-.06,-.18,.16,0,.09,-.22,.01,.02,-.08,.03,-.28,-.06,-.07,0,-.09,-.01,.03,.16,.01,.13,-.27,.06,.06,.1,-.09,.04,.05,-.04,-.07,.15,.03,.21,.08,-.02,-.07,.07,.05,.02,-.04,.12,-.1,.04,-.11,.06,-.04,-.02,.23,-.11,-.04,.23,-.05,.04,-.03,.06,.01,0,.05,-.05,-.07,.03,.15,.29,.25,.12,-.04,-.11,.03,-.04,.08,-.06,.01,-.01,.07,-.01,-.08,.04,-.03,-.08,.27,.16,.04,.09,.02,-.07,-.07,-.16,.09,.09,.02,-.01,-.02,.02,.12,-.08,.11,-.03,.04,-.06,0,-.09,-.04,-.04,.04,-.02,.08,-.01,-.09,-.05,-.13,-.05,-.01,.01,-.04,-.01,.09,-.26,-.2,.03,.05,.03,-.07,-.07,.05,-.1,-.03,-.11,-.14,.01,-.02,.04,-.02,.01,-.09,.16,.04,-.09,.01,-.02,-.16,-.05,.05,.09,-.04,-.01,-.03,.06,.03,-.03,.16,-.09,-.07,-.03,.03,-.02,-.13,.13,.1,.12,-.04,-.11,-.02,.03,-.05,-.08,-.21,-.11,.08,-.09,.07,.07,-.01,-.08,-.17,.29,-.11,-.17,.06,0,-.03,.06,-.01,-.07,.04,-.06,-.09,-.04,-.17,.03,-.11,.03,.04,.01,-.13,.06,-.19,-.06,-.11,.09,0,-.15,.09,-.04,-.09,.1,-.15,-.04,.1,-.05,-.09,0,.06,-.13,-.06,-.06,.01,-.03,.06,.07,-.04,-.08,.06,-.06,-.22,-.22,.16,-.11,-.21,-.03,-.13,.13,-.04,-.07,.11,.1,.11,-.23,-.01,.14,-.1,.02,.01,-.1,.06,.01,-.11,.09,.06,-.11,-.06,.03,.11,.1,-.05,-.11,.07,.1,.13,.1,-.14,.1,.01,.56,-.12,.08,-.1,.03,-.03,-.09,-.17,.22,-.04,-.06,-.04,.06,-.09,.03,.01,.03,0,.02,-.01,-.12,-.01,-.22,-.06,-.03,-.04,-.01,.09,-.04,-.27,.01,.16,-.06,.07,.11,-.08,.06,-.02,.12,.03,-.12,-.07,.01,-.06,.14,-.12,-.07,-.05,-.04,.18,.12,-.19,-.06,-.1,-.06,-.11,-.08,-.07,-.15,-.13,-.09,.05,.08,-.1,-.09,-.26,-.03,-.11,-.04,.21,-.13,-.06,-.03,.06,-.01,-.1,.12,.11,-.11,-.07,0,0,-.07,.08,.15,-.01,-.03,.11,-.02,.08,-.04,-.04,-.06,.11,-.03,.04,.07,-.02,-.03,-.01,-.09,-.26,-.04,-.04,0,.06,.03,.03,-.07,.08,.05,-.06,-.08,.01,0,-.09,.3,.02,-.01,.14,.05,.02,-.08,.1,.16,-.05,-.1,-.01,.04,-.07,.01,-.1,-.17,-.06,-.1,-.01,-.07,-.07,.04,.08,-.07,-.13,-.06,-.05,-.07,.05,-.08,.06,-.03,.07,.21,.02,.22,-.11,-.15,-.1,-.05,-.1,-.03,-.05,-.01,.14,.19,-.07,.05,.06,-.14,-.04,-.05,.02,.09,.03,-.11,-.03,.03,-.02,.17,-.03,-.02,.07,-.06,.01,.05,0,.02,-.18,-.08,-.15,-.05,.12,-.02,.05,.02,-.07,-.1,.06,.12,-.08,.09,-.01,.01,-.03,-.04,.08,-.06,.01,0,-.08,-.06,.03,-.1,.09,-.04,-.02,.09,-.06,-.04,-.12,-.07,.01,.01,-.08,.07,-.09,-.03,.03,-.07,.06,.08,0,.37,-.1,.06,.01,.07,-.15,-.07,-.1,.07,.05,-.12,.05,-.04,.16,.51,.01,-.11,.03,.26,.03,-.05,-.1,.07,.11,-.04,.09,-.03,.07,-.08,.04,.04,-.12,-.06,.06,-.1,-.16,-.06,-.07,-.05,-.07,-.05,0,.05,-.08,.12,.1,-.08,-.07,-.01,.33,-.09,-.08,-.07,-.13,-.02,-.03,.15,-.03,.01,.04,-.17,-.01,.08,.03,-.04,-.2,-.09,.04,.05,-.01,.04,-.11,.08,.2,-.11,.22,-.08,.05,.1,-.3,.03,.16,-.02,.16,.03,-.08,.01,.03,-.05,-.08,-.16,-.1,.02,.06,.13,-.06,-.1,.02,.03,.15,-.07,.21,.12,-.01,-.02,.03,-.11,.58,-.03,-.08,.08,.04,-.05,-.22,-.07,.33,.09,-.02,.05,.13,.15,.03,-.01,-.06,.07,-.1,-.06,.1,-.06,-.06,-.01,-.07,.29,-.02,-.09,.01,0,-.01,-.15,-.12,-.02,0,.03,-.09,-.03,-.05,.14,.04,-.06,-.23,-.08,-.02,.08,-.04,.04,0,.02,-.06,-.03,-.04,.09,-.09,.05,.04,-.02,-.11,-.11,-.07,-.21,.15,.17,-.06,0,.07,.31,-.02,-.21,.07,-.05,-.12,.01,.07,-.06,.06,.06,.01,.05,-.26,.09,.04,-.24,.11,-.03,-.12,-.06,-.05,-.01,-.09,-.1,-.01,-.17,.07,.29,-.08,.14,.07,.11,-.03,.08,.07,-.06,-.02,-.01,-.01,.01,-.09,-.06,.01,.04,-.11,.02,-.03,.02,-.07,-.07,.03,.01,.05,-.09,-.03,-.08,-.06,.02,.16,.06,-.13,-.01,.27,-.04,-.07,-.03,-.05,.33,.04,.29,.24,.05,-.08,-.04,.04,.1,.06,.03,-.08,-.05,-.06,-.06,.05,-.03,-.13,-.02,-.01,.02,-.04,-.15,.07,-.01,.12,-.28,.13,-.18,.04,.19,.02,-.01,-.02,-.06,-.07,.09,.21,-.03,-.03,.08,.01,.11,.09,-.03,.02,.07,-.08,.45,.03,-.04,-.01,-.04,.02,-.05,.11,-.08,.07,.01,0,.08,.02,.02,.16,.1,.11,.08,.1,.01,.02,-.02,-.13,.01,-.02,-.21,0,-.02,-.03,.08,.04,-.14,-.02,-.1,0,.16,.2,.11,0,.18,.03,.29,-.1,-.07,-.1,.09,.35,-.13,0,-.11,-.04,.06,-.09,.07,-.13,-.02,-.01,-.18,-.04,.09,.03,.03,.05,.03,.07,-.07,-.02,-.19,-.04,-.06,-.11,-.09,.08,0,0,-.08,-.05,-.07,.01,.12,.06,.06,-.06,.02,.12,.08,-.05,.05,.13,.1,.01,-.02,-.15,.11,.02,-.1,.05,.16,.09,-.03,.04,.02,-.03,-.07,-.1,.06,-.06,.06,.05,.25,-.08,.01,.06,-.03,.15,.14,-.19,.04,.08,-.08,.11,.15,.02,-.13,-.02,.02,.08,.02,-.07,.04,0,.01,-.03,.09,.08,0,.09,-.09,.12,.16,.03,.1,.14,-.12,.13,.07,.1,-.23,-.17,-.02,.08,-.12,.05,-.01,-.11,.04,.1,.08,.07,-.07,-.09,-.13,.08,.05,.02,.06,-.07,-.06,.08,.06,.01,.22,.04,-.07,.3,-.14,0,.04,.22,-.07,-.06,.06,-.09,.11,.04,-.03,-.03,-.07,.02,.08,-.01,.09,-.19,-.03,0,-.08,-.1,.08,.03,.08,.01,-.07,.04,-.08,-.06,-.01,-.09,0,.04,.14,-.1,-.06,-.22,.05,.11,.04,.04,-.02,.12,-.05,-.12,.02,.02,-.07,-.07,-.07,-.15,1,.02,0,.03,-.01,-.01,0,-.08,.05,.04,-.12,-.09,.04,.04,.05,-.04,-.08,.06,.16,.05,-.03,.02,-.05,-.1,.02,-.07,.2,.04,.06,-.02,.32,-.03,.3,-.12,-.03,.16,-.05,-.16,-.14,.08,.06,.01,.17,.03,.03,.03,.02,.08,-.05,-.09,.05,-.05,-.03,-.05,0,-.01,.04,-.06,.1,.07,-.08,.01,.04,-.13,.01,-.12,0,-.05,.05,.03,-.01,.04,.08,.02,.13,.04,-.05,-.03,-.02,.16,.04,-.14,.07,.01,-.05,.01,.03,.2,-.07,-.06,.09,.03,.01,-.04,.08,.24,-.08,.03,.05,.09,.03,.05,-.05,-.03,-.05,-.09,-.06,.07,-.04,-.07,.03,-.02,-.02,-.12,-.03,0,.08,.04,-.06,-.12,-.08,-.04,.03,.16,-.08,.04,.04,-.12,.05,.08,.04,-.01,.15,-.01,.02,.01,.18,.05,-.06,-.06,.04,-.03,-.02,-.25,-.03,.14,.06,-.04,.02,-.05,.01,-.06,-.13,.12,-.18,.06,.01,-.09,.07,-.14,.23,.02,-.38,.09,-.05,-.07,.05,0,-.01,.22,-.03,-.01,.03,.07,-.03,.04,-.02,.05,-.06,-.02,.08,0,.04,-.09,-.02,.01,-.02,-.05,.17,.05,-.15,-.2,-.05,-.12,.1,.05,.12,0,.18,-.12,.02,-.14,.03,-.1,.02,.01,.03,.08,-.02,0,.08,-.02,.06,.09,-.01,.12,.03,-.07,.01,-.06,.14,.13,-.09,.02,.03,-.06,-.22,.23,-.07,-.04,.04,0,.11,-.05,-.05,-.05,-.09,.01,.03,.15,0,.09,.1,-.01,.04,.01,.02,-.1,-.09,.13,-.03,.14,.12,.02,.01,-.02,-.02,-.05,.01,.11,0,-.09,.05,-.04,.04,.06,-.02,.06,.09,.03,.08,.03,.07,.16,.24,-.05,.13,.05,.04,.01,.02,.03,.02,.23,.13,.14,-.04,.03,-.06,.08,-.11,.07,-.11,0,.03,.12,.01,.15,.03,-.01,.44,.17,-.18,-.04,.13,.1,.06,.14,-.01,.08,.11,-.04,.05,.1,-.03,-.08,.07,.22,.24,.05,-.02,.05,-.11,.15,.12,-.11,.05,0,.04,-.17,-.02,-.04,-.1,.13,.04,0,-.13,-.16,.05,.2,.09,-.18,.14,.02,.18,.01,-.03,.04,.17,-.03,.02,.02,-.07,-.05,-.07,.1,.13,.01,-.05,.01,.02,-.09,.14,-.1,-.01,-.05,-.05,.1,0,-.14,-.01,-.03,.02,-.01,.17,.03,.04,.03,.21,-.05,.01,-.07,.09,.09,.12,-.09,-.09,.07,.06,.01,.04,.1,.02,.03,-.01,-.04,.39,0,-.04,.29,.37,.06,.01,.02,-.04,.23,.03,.09,-.13,.01,.22,.01,0,-.07,-.08,.14,-.07,-.15,.04,-.09,.14,-.11,0,-.09,.09,.01,-.13,-.03,-.12,-.01,.09,.26,-.1,.03,.12,.09,.01,.05,0,.24,-.16,-.02,.14,-.01,0,.02,.02,.15,-.08,.12,-.04,.04,0,.02,0,.02,-.08,-.03,.14,-.08,.08,0,0,.15,.05,.01,-.11,.01,.01,.04,0,-.04,.03,-.01,.02,-.05,.15,.02,-.02,.11,.09,.14,.07,-.08,.1,-.13,-.06,.06,-.14,.02,.04,.03,-.14,.13,-.05,.04,-.13,.11,-.03,-.06,-.01,.04,0,-.01,-.05,-.05,-.07,-.02,0,.09,.08,-.02,.13,-.01,.07,.28,-.13,.14,.04,.13,.11,-.06,-.02,.07,.2,-.15,0,0,-.14,.44,-.04,-.01,0,.09,.04,.15,.03,.19,.02,.1,.01,.04,.15,-.07,0,.26,.12,-.1,.08,-.05,.04,.08,0,.2,-.04,-.07,0,-.05,.01,.15,-.06,.06,.03,-.14,-.06,.08,.03,.03,.02,.05,.06,.14,-.06,.06,.01,.03,.2,.15,0,-.06,-.02,-.08,-.07,-.09,.04,.03,.15,.24,.05,-.15,.04,.04,.19,.02,.11,-.13,.01,.04,.05,-.09,-.01,-.06,.13,.11,.03,-.08,.01,0,.14,-.04,.05,.01,-.02,-.08,-.09,.11,-.01,-.23,-.07,-.01,.06,-.06,-.16,.15,.12,0,-.12,.08,.06,-.04,-.04,.18,-.09,-.09,-.07,-.08,-.12,-.01,.02,.08,.01,.07,-.11,-.07,.08,-.01,.05,.14,.05,.12,-.09,.1,-.14,.14,.03,.07,-.02,.03,.05,.12,.17,-.05,-.33,-.13,-.02,-.13,-.12,.06,.11,-.05,.03,-.03,.13,.14,-.05,-.05,.19,.02,-.04,-.3,.17,.17,-.07,.07,-.02,.06,.1,.38,.01,-.12,-.03,-.17,-.07,-.02,-.09,-.03,.01,-.09,-.02,.07,-.18,-.04,.04,.05,.13,.08,.04,-.04,-.02,-.14,.09,.1,.16,-.18,.14,.01,-.09,.09,-.01,-.02,0,-.06,-.14,0,.06,-.02,-.07,-.04,-.11,-.17,-.07,-.04,-.11,.04,.03,.13,-.13,.02,.13,.03,-.03,-.11,.03,.09,.03,.01,-.02,-.11,.23,-.06,.01,.17,.02,.02,-.17,.02,-.05,-.07,-.03,.32,.04,.03,-.06,.08,.02,-.18,-.03,-.03,.16,.02,-.08,.03,.01,.03,.01,.01,-.03,.05,-.08,-.03,.05,.03,.01,-.18,-.11,-.04,.17,0,-.16,-.05,.13,.1,.08,-.07,-.08,.14,.03,.08,.05,-.02,-.08,.02,.05,-.05,.1,.45,.07,.05,.03,-.09,.08,-.04,.22,.01,-.05,.12,-.05,.09,.02,0,-.05,.01,0,0,.11,.1,.05,-.08,.28,-.07,-.13,-.15,.06,.07,-.12,.03,.16,.02,.09,.3,.03,.06,.12,.15,-.01,-.07,-.16,.09,.29,-.03,-.01,.05,-.07,-.11,-.27,-.02,.21,-.09,-.04,-.04,.01,-.06,-.12,.01,.01,-.03,-.02,-.08,-.01,-.02,.09,.09,-.03,.07,.11,-.07,-.06,.01,-.1,-.08,-.16,-.09,.03,.05,-.08,-.01,-.09,.06,.01,.44,.07,-.03,-.11,-.07,.06,.22,-.1,-.05,-.13,-.04,.23,.06,.01,-.07,-.1,-.25,.06,-.04,-.01,-.05,-.07,-.02,-.03,-.06,.33,-.08,.01,.03,-.02,-.06,-.13,.02,.2,.06,-.07,-.01,.1,-.07,-.06,-.08,-.1,0,-.09,.04,-.09,-.05,.03,.51,-.1,.01,-.04,.04,-.06,.1,.02,0,-.08,.06,0,.03,-.09,-.06,.05,.03,.25,-.06,0,-.23,.09,.04,.03,-.1,.11,-.03,.28,.06,.13,.04,.02,.03,-.04,-.1,.05,-.02,.06,.02,.03,.12,.09];export{a as rvalData};
