const a=[.14,.24,-.09,.01,.02,.09,.11,.08,.08,-.04,0,.22,-.11,.08,-.1,-.03,.08,.12,.12,.08,-.23,-.07,-.07,-.13,-.01,.01,0,.18,-.04,-.06,.05,-.06,-.03,-.01,-.01,-.18,-.07,-.02,.08,-.01,-.22,0,.02,.03,-.03,.09,-.09,.02,-.06,.09,.05,.14,-.01,-.04,.14,-.15,0,.14,-.05,-.04,.06,-.02,-.05,.04,-.02,0,.04,-.07,.09,.07,-.26,.07,.04,-.1,.03,.05,.11,.08,-.04,-.01,-.04,.07,-.09,.04,.2,-.02,0,.04,.07,-.12,.1,-.04,.11,.18,.18,.07,.02,.1,.07,.1,-.02,.02,.14,-.04,.08,.18,.02,-.05,.02,.07,-.16,.04,.27,-.02,.13,.05,.06,-.05,-.13,.03,-.12,-.01,-.05,0,-.05,-.08,.04,.04,-.01,-.05,.04,.06,-.03,.08,-.22,.1,.13,.02,-.03,.08,.05,.06,.09,0,.11,.18,-.2,.17,.02,-.05,.03,.05,.05,.03,.09,.05,-.14,.15,-.01,-.1,.08,.04,-.29,.07,.04,.06,-.07,-.04,-.08,-.01,.17,-.07,.02,.05,.03,-.04,.03,-.08,.07,0,-.21,.14,.09,-.04,.03,-.02,.13,.03,0,.17,-.11,.03,.07,.08,.03,-.09,.07,.07,.08,.04,-.1,-.02,-.03,.05,.11,.09,-.06,.07,.05,.06,0,-.06,.12,-.05,.09,-.02,-.04,.02,-.04,-.04,.07,.1,.04,0,.06,-.05,.06,-.08,.19,.11,.01,.03,.01,-.06,-.09,.1,-.1,-.2,.1,.17,.06,-.06,.15,.1,.05,-.06,.17,.04,-.21,-.13,.04,.13,.19,.07,.03,-.05,-.15,-.01,-.05,-.06,-.16,.17,-.05,.03,.07,.1,-.06,.04,.05,.03,.21,.17,-.04,-.08,.02,.14,-.11,.06,-.12,-.07,.11,-.08,-.06,.16,.15,-.05,-.14,-.01,.18,-.01,.04,.02,-.01,-.01,.01,.01,-.05,.07,-.17,-.14,.07,-.05,0,-.03,.18,-.13,-.15,.02,.09,-.16,.02,-.19,.03,.08,.11,-.13,.01,.14,-.08,-.22,.05,.17,.08,.05,.13,.07,.03,-.03,-.14,.11,.2,.05,.05,.19,-.04,.16,-.07,-.01,-.08,-.14,.08,0,.05,-.04,-.06,-.13,-.12,.12,.01,.11,-.04,.09,.01,.1,-.04,-.03,-.01,-.24,-.01,-.02,-.06,-.29,.18,-.06,.02,.14,.17,-.1,.15,.01,-.04,-.14,.04,-.05,.09,.18,-.01,.02,.07,.04,.05,.04,.19,-.13,.09,.11,-.22,.03,-.02,-.04,-.07,-.2,.05,-.11,-.09,-.06,-.05,-.25,-.04,-.09,.22,.24,-.05,.05,.01,-.11,.02,-.04,.05,-.01,-.09,.05,.02,-.08,.28,.29,.04,.01,.12,-.09,-.05,-.11,.02,-.24,.03,-.09,-.08,-.06,.04,.17,.07,-.05,.02,-.03,.08,-.03,-.08,-.03,-.02,.01,.07,.11,.06,.07,.03,.05,-.06,0,.01,.08,-.06,.1,.03,.06,-.07,-.17,-.05,.01,.15,-.08,-.05,0,.02,.1,-.05,.05,.13,-.1,.01,-.05,-.07,-.01,0,.08,.1,-.05,-.11,-.05,-.07,0,.1,-.06,.03,.07,-.01,-.11,.07,.08,.07,-.08,.32,.24,-.09,-.04,.01,-.03,.07,.13,-.17,.18,.11,.01,-.06,.01,.09,.04,.15,-.08,.04,.1,.05,.17,.06,-.02,.04,-.12,.07,.12,.1,.07,-.05,-.03,.05,-.19,.12,.12,-.08,.05,-.15,.01,.08,.09,-.2,.02,.22,.19,.04,.08,.09,.22,-.4,.09,-.06,-.07,.1,.37,.16,-.03,.04,0,-.15,-.08,-.05,-.08,.01,-.03,.05,.08,.08,.19,-.06,.06,-.03,-.05,.15,.02,-.08,.22,.12,-.18,-.03,-.1,0,.04,.05,-.06,.14,-.01,.13,.24,.06,.1,.07,.12,.05,-.07,-.08,.08,.02,-.05,-.09,-.1,-.03,-.06,-.03,.12,-.12,-.09,.06,-.02,-.14,.03,-.03,.11,-.05,-.12,.17,-.01,-.09,.07,.01,.02,.03,.05,.08,.1,-.06,-.03,-.01,.08,.21,-.04,-.05,.14,.1,.17,.05,.07,.02,-.06,.12,-.06,.08,.03,.02,.07,-.02,.12,-.02,-.05,-.05,.03,-.03,.19,.07,.09,.1,.06,-.01,.04,.12,.07,.13,-.05,-.07,.01,-.07,.01,.08,-.04,-.02,.02,.02,.1,-.11,.07,.28,.14,0,-.03,-.02,.08,.29,-.1,.22,.12,.02,.02,.2,-.29,-.01,.12,-.03,.05,.15,.02,.1,.05,.01,.1,-.21,.13,.1,-.03,.08,.07,.01,.03,.12,-.07,.09,.08,.08,-.01,-.12,.11,-.12,0,-.01,-.05,-.04,.07,.09,0,.23,-.17,-.06,.12,-.1,.12,.08,.03,-.06,.06,-.11,-.03,.18,-.06,.21,.02,-.11,.14,-.05,.04,.04,.1,-.04,.04,.15,.02,-.09,-.08,-.13,-.03,.03,-.05,.07,-.01,.2,-.02,.16,-.08,.14,.17,.03,.02,-.15,-.04,-.05,-.12,.01,-.07,-.03,0,-.08,-.08,.1,.1,.01,.06,.1,.11,.01,.13,.07,.13,.07,.08,-.05,.07,-.1,.16,.04,.03,-.07,.04,.05,.1,0,-.11,.01,.08,.07,-.08,-.01,-.11,-.08,.04,-.03,.06,.03,0,.03,-.02,-.02,.01,0,.07,.12,.26,.14,-.09,-.05,0,.06,.1,-.08,-.08,.26,-.03,.13,.1,-.06,-.05,-.27,-.02,.05,.1,.19,-.29,.12,-.04,.13,.25,.1,.16,-.12,.17,.14,-.08,.08,-.03,-.11,.13,-.1,-.06,-.06,-.06,.02,-.09,.02,-.07,.07,-.23,.15,.12,.11,.13,.07,.01,.1,.01,-.15,-.1,.1,.2,-.02,.11,.22,.05,.08,.01,.08,.1,.09,.14,0,.21,.03,.11,0,-.08,.14,-.01,-.07,.16,.12,-.06,0,.01,-.02,-.07,.02,.06,-.01,-.01,-.05,.12,-.04,-.03,-.09,.15,.1,-.2,.14,-.13,.13,.11,.01,.06,.12,-.04,-.08,0,.03,-.04,.02,.06,.09,-.28,.11,-.02,-.07,-.01,-.03,.01,.17,-.07,.02,.13,.05,0,-.01,-.01,.08,-.05,.05,-.08,.05,-.02,.13,.02,.07,.09,.05,.18,.04,-.07,.29,-.02,.14,-.15,.14,-.07,.08,-.04,.01,.19,.04,-.07,.01,-.3,.07,.1,.08,.28,.07,.05,.04,-.07,-.18,.18,-.09,.07,.1,-.14,.02,.12,-.01,-.07,-.03,.07,.06,.05,-.08,.05,.1,.05,.1,.08,-.06,-.03,.13,-.09,-.05,.06,-.04,-.02,-.01,-.11,1,.25,.16,.03,.2,.05,.03,.33,.13,-.04,.25,.02,.06,-.08,-.06,.03,.03,.22,.12,-.01,.07,.19,.13,.2,-.27,-.02,-.06,-.15,.03,.03,.16,-.1,.07,.15,0,.13,-.04,.02,.12,-.1,-.11,-.04,-.03,.28,.09,.1,.18,-.15,.03,-.04,-.07,-.21,.21,.02,.04,-.28,-.06,.33,.09,-.03,-.12,.05,-.14,-.04,.06,.16,-.02,-.09,-.03,-.01,.19,.17,.12,-.1,-.01,-.04,-.09,.18,.11,-.03,.06,-.17,-.17,.13,.04,-.02,-.03,.01,-.07,.03,-.13,.11,.03,-.06,-.08,-.01,-.05,.12,-.04,-.05,.1,-.07,.14,-.08,-.06,.01,-.03,.05,-.02,-.09,.09,.04,.06,.16,-.05,.16,.34,-.02,.1,-.04,.09,-.07,.2,-.23,-.02,-.09,-.03,-.04,.14,.03,.18,.03,-.04,-.13,.13,-.01,-.04,-.03,.14,-.01,-.05,.06,-.15,-.02,.06,.12,-.06,-.05,-.02,-.15,-.18,.09,.14,.03,-.11,.01,.08,.11,.17,.09,0,-.11,.13,.04,-.01,-.17,.01,-.05,-.03,0,.03,.06,.03,.05,.08,-.26,-.08,.22,.04,.01,.12,-.03,-.05,.12,-.07,.03,-.03,-.07,-.08,-.06,.08,-.08,.03,-.06,-.06,.05,-.02,-.02,-.01,.08,.06,.07,-.03,-.06,.16,.05,.04,0,.03,.03,-.05,.27,-.19,.09,.11,.1,.03,.05,.06,.14,.25,.1,-.02,.12,.08,.04,-.05,-.08,.11,.1,0,.03,-.11,-.11,-.05,-.06,.06,-.11,.14,.11,-.03,.05,-.09,.05,.11,.11,.1,-.09,.03,.08,0,.03,.19,.05,.07,.05,-.15,-.05,.14,-.01,.03,-.05,.02,0,-.11,.07,-.06,-.08,.1,.16,-.07,.02,.06,.02,-.07,-.01,-.12,.19,.1,-.16,.11,.11,-.05,.15,0,.09,-.04,.07,-.13,.02,.02,.05,-.01,.05,.1,-.01,-.15,-.02,-.14,.02,-.03,.08,.07,0,.16,-.1,.06,.04,-.06,.06,.14,-.04,.1,.08,.05,.19,.17,-.07,.02,.08,.05,-.02,-.04,.16,.03,.11,-.05,0,-.03,-.02,.15,-.04,.08,-.11,.08,.24,.07,.12,-.09,-.01,-.03,-.17,.08,0,-.09,-.07,.01,0,-.08,.01,-.02,.07,-.03,.1,-.01,.11,-.01,.18,.07,.1,.01,.07,-.1,.01,-.02,.06,.16,.07,-.01,0,.04,-.03,.08,-.07,.02,-.1,-.02,.03,.14,0,-.14,-.02,0,.2,.1,-.11,-.15,-.13,.1,.07,.13,-.01,.12,.08,-.05,-.07,.17,.09,-.07,-.04,.1,.09,-.07,-.07,.09,-.06,.06,.1,-.02,.46,-.03,-.01,.22,.2,.47,-.04,.01,-.04,.18,-.04,-.09,.23,-.06,.18,.05,.09,-.13,.16,.12,-.04,-.15,.17,-.01,.02,.01,.01,.23,.1,.13,-.01,-.04,-.13,.06,.04,.12,.08,-.16,.08,.09,-.05,.14,.03,0,.03,-.02,.02,-.01,.12,-.09,-.05,-.05,-.02,.13,-.05,.06,.06,-.08,.34,-.09,.06,.07,-.01,.02,-.1,.05,.11,.06,-.01,.17,.18,.1,-.05,.05,.24,.15,.09,.15,-.07,.16,.03,.12,-.04,-.05,.02,0,.1,.15,.16,-.17,.01,0,-.05,.02,.15,.03,-.02,-.05,-.1,.11,.05,-.04,-.07,-.04,-.01,.05,-.01,.03,-.12,.13,-.04,.12,.07,0,-.1,-.18,0,-.03,.09,.03,-.03,.11,-.07,.05,-.05,.01,-.07,.09,-.01,.05,-.06,-.06,.08,-.08,-.01,.01,-.06,-.02,.01,.17,-.19,-.02,-.09,0,-.06,.05,.07,.03,-.1,-.02,.03,.18,.13,-.09,.01,.25,.12,-.1,.07,-.08,.11,-.05,-.08,.04,.07,.13,-.11,.06,.08,.06,-.11,.03,.07,-.04,.22,-.04,.08,-.01,0,-.09,-.12,0,.03,-.01,.02,-.1,.13,-.01,.05,.1,-.01,.08,.07,.16,.06,-.06,-.01,-.06,.2,-.14,.04,.02,-.07,.11,-.11,.01,-.12,.15,-.05,.03,0,.13,-.05,-.06,.1,-.09,.07,.01,.05,.02,.01,-.09,-.26,.15,-.01,-.01,-.02,.04,-.07,.02,-.01,.02,.02,.1,.04,.09,.04,.13,-.21,.01,.07,-.03,.04,.13,-.02,.11,-.09,-.01,.05,.02,.04,-.17,-.03,-.05,-.04,0,.06,.02,-.02,.03,.03,-.08,.05,-.07,.05,-.03,0,.03,0,-.06,-.01,.03,-.01,-.1,.02,-.05,0,.04,-.02,.03,-.03,-.03,.12,.11,.14,.11,.01,-.08,-.11,.12,.09,-.07,-.12,.03,.05,-.05,-.18,-.05,.2,.01,0,-.08,.07,.03,.05,-.01,-.05,-.05,.05,-.01,-.07,.04,.01,0,-.02,.04,-.11,-.02,.25,-.12,.17,.05,.06,.18,-.03,.16,-.1,-.03,-.08,.01,-.04,.11,.17,-.06,-.07,-.09,-.15,-.03,-.02,-.02,-.03,-.05,.04,-.14,-.04,-.04,.15,.05,-.02,.05,-.08,.08,-.03,-.14,.13,-.02,.11,.02,.22,.03,.07,.18,0,-.09,.09,-.09,-.08,-.05,.1,.03,-.08,-.07,-.01,.07,-.08,.1,-.06,.1,.05,.05,.07,-.01,-.07,.08,.07,.07,.09,.02,-.04,.04,-.02,.16,-.01,-.07,.19,-.01,-.13,.14,-.04,.02,-.08,-.02,-.07,-.07,-.06,-.02,.16,.07,.01,.06,-.11,.13,.01,.05,-.01,-.1,.03,.13,.08,.03,.15,-.13,-.13,.21,.08,-.01,.09,.1,-.14,.18,-.08,.02,-.02,.11,.09,.04,-.03,-.06,-.06,-.11,.07,.02,-.12,.06,.15,.05,.03,.02,.01,.05,.03,-.13,.05,-.1,.08,.06,.05,.06,.07,-.05,-.03,.04,-.19,-.03,.02,.05,.09,.23,.22,.12,.03,-.07,.05,.04,.36,.05,-.02,.06,.05,.06,-.02,.1,.01,.11,.07,.14,.14,.02,-.09,-.04,.2,.05,-.07,.04,.09,0,-.03,0,.1,.06,-.03,-.02,.03,-.08,.02,-.01,-.01,.12,-.03,-.03,-.05,.04,.12,-.09,.1,0,.11,-.09,-.01,.03,-.04,.16,-.05,.21,-.29,-.14,.11,.12,-.02,.03,.06,-.05,-.02,-.06,-.02,-.09,-.07,0,.02,0,.02,.03,.11,.02,.15,-.02,.01,0,.08,-.05,.06,.03,.04,-.08,.06,-.07,-.03,.07,.04,-.07,.03,.14,.01,-.08,.01,-.1,.03,-.05,.13,-.07,.09,-.13,-.14,.05,.05,-.1,-.03,-.03,.22,-.03,-.12,.04,-.01,-.01,-.05,.07,-.02,.21,.21,.02,-.04,.03,0,-.02,.17,.04,.05,-.03,.12,.08,.06,-.06,.02,-.07,0,0,-.04,.05,-.03,-.08,.04,.16,-.06,.03,-.01,-.01,-.05,-.01,.06,-.11,-.09,.16,-.04,.13,-.03,-.01,.05,.04,.32,-.03,.04,-.12,-.27,-.08,.06,-.03,.11,.04,.14,.1,.03,0,-.04,.02,-.06,.07,-.06,-.02,.06,-.04,.07,-.11,.06];export{a as rvalData};
