const a=[-.11,-.05,0,-.26,-.03,-.11,-.03,.13,0,.17,.08,-.18,-.01,-.01,.06,-.08,-.03,.09,-.07,-.12,.31,.06,-.2,.11,.08,.01,-.08,-.19,-.17,-.07,-.18,-.05,.03,-.09,-.03,.01,.03,.06,-.07,-.11,.23,-.03,-.1,-.22,.04,.07,-.15,-.1,.11,.1,.13,-.11,-.06,-.03,-.13,.12,-.04,-.15,.03,.01,-.12,-.02,-.05,.07,.03,.01,-.03,.07,-.08,.03,-.2,-.01,-.02,.12,-.04,.1,.09,-.11,.03,-.07,-.05,-.02,.06,-.08,-.15,-.02,-.04,.02,-.01,0,-.15,-.07,.09,-.01,-.09,-.06,.1,-.05,-.14,-.08,.26,-.08,-.21,.17,-.15,0,-.15,-.12,-.05,-.12,.11,.01,-.08,.11,-.11,.02,-.08,.06,.02,.06,.15,.14,.33,.22,.08,0,-.09,-.06,-.02,.05,-.01,.04,.01,.03,.07,-.17,-.03,.01,-.01,-.13,-.04,-.14,-.03,-.02,-.17,.1,.09,-.17,-.12,.19,-.1,.15,-.17,-.01,.07,-.1,.07,-.13,.08,.05,.07,-.08,.42,-.02,.07,-.05,.03,0,-.1,.02,-.18,.01,.07,.1,0,.04,-.02,.01,-.03,-.06,-.02,-.02,-.17,-.02,-.04,.04,-.12,.01,.14,-.09,-.02,.08,.03,-.05,-.03,.01,-.13,-.1,.01,-.03,.11,.01,.05,-.07,.02,-.13,.04,.04,-.12,-.02,.15,.07,-.03,.05,-.13,-.03,-.09,.14,0,.09,-.15,-.17,-.2,-.02,.01,.06,.08,.01,-.17,.01,-.09,.09,-.04,-.1,.19,-.18,-.02,.26,-.18,.15,.05,.03,.01,-.02,.13,.19,-.03,.19,0,.15,.08,-.13,-.12,0,-.03,.07,.09,.03,.1,-.02,-.13,-.15,-.01,-.02,-.14,-.14,0,-.02,.13,-.06,-.15,-.06,.02,-.05,.1,-.15,-.06,-.01,-.02,.08,0,.07,.15,-.08,-.16,-.02,-.02,.04,-.2,-.06,.2,-.05,-.01,.13,.04,-.09,.12,-.25,.13,-.01,-.14,.02,-.09,-.02,-.13,-.02,.02,-.07,-.12,.18,.04,.24,.03,-.18,-.06,-.02,-.07,-.13,-.05,.18,-.09,-.13,.05,-.06,.06,-.13,-.06,-.08,.12,-.13,.11,.07,-.2,.08,.04,-.15,.06,-.13,.32,.05,-.01,-.09,-.15,-.03,.04,-.09,.17,-.1,-.02,-.04,-.05,-.01,-.02,-.14,.07,.1,-.05,.16,-.12,.03,.01,.09,-.12,-.1,-.1,-.11,-.11,.04,-.12,.09,-.06,0,-.03,-.05,-.07,-.24,.11,-.04,.06,-.12,.1,-.03,.1,.03,.01,-.16,.06,.02,-.07,-.05,-.05,.16,-.04,.27,.29,-.04,.06,.13,.01,.07,-.12,-.16,-.07,-.02,.02,0,-.04,-.06,-.06,-.1,-.07,.06,-.02,-.06,-.27,-.23,-.03,-.01,-.03,.18,-.11,.13,.08,.22,.08,0,.08,.04,-.06,-.04,.07,-.12,.08,.11,-.04,-.05,.17,-.03,-.03,-.07,-.12,-.05,-.04,.03,.13,-.15,.02,-.03,.09,.06,.04,.03,.01,-.25,.04,.01,.01,-.01,-.14,.16,-.08,-.06,-.02,-.09,.09,-.11,-.01,.38,-.04,-.04,-.12,.02,-.03,-.08,-.05,0,.03,.15,-.05,-.02,-.04,.06,-.06,.06,.05,-.09,.01,.2,-.01,-.05,-.02,-.15,.05,.08,-.02,.03,.06,.17,.11,-.09,-.12,-.06,-.02,-.18,-.08,.11,-.23,-.04,-.03,-.07,-.08,-.09,-.03,-.09,.06,.05,.05,-.1,-.1,-.06,-.02,-.02,.01,-.1,-.17,-.12,.09,-.12,.26,-.03,-.01,.07,-.01,.04,-.27,-.15,-.13,0,-.04,-.23,.09,-.12,.04,-.03,-.07,-.27,-.16,-.08,-.09,-.16,.05,.05,-.03,-.06,0,-.15,.1,.01,-.03,-.07,.03,.03,.01,.12,.01,-.06,0,-.01,.07,.6,-.04,-.12,.1,.05,0,-.03,-.01,0,.03,-.07,-.07,-.06,-.04,-.22,-.07,.05,.02,-.12,.11,.06,.01,.13,-.03,-.09,.18,-.07,.1,-.04,-.1,.19,.12,-.02,-.02,-.06,.05,-.07,-.12,-.05,.12,-.24,.16,.01,.05,.07,-.04,-.1,-.01,.13,-.06,-.12,-.13,.16,-.18,-.15,-.08,-.16,.09,-.1,-.07,.19,-.06,.24,.32,-.11,.05,-.08,-.02,-.02,.05,-.12,-.04,-.04,.05,-.24,-.05,-.07,-.01,-.07,.08,-.07,-.19,.01,-.02,-.06,.02,-.1,.07,0,.01,-.1,-.03,-.1,-.03,-.15,-.1,-.11,-.11,-.15,0,-.03,0,.03,-.12,-.03,-.31,-.05,-.1,-.05,-.11,.08,.05,-.15,-.05,-.13,-.11,.05,-.02,-.05,-.05,.12,.13,-.07,-.13,-.03,-.2,.12,.04,.03,-.11,-.01,-.07,.15,.03,-.05,.17,-.12,-.02,-.09,-.08,-.04,.01,.09,.02,.05,-.13,.19,.07,-.29,.18,-.08,.14,-.07,.04,.07,-.01,.05,-.03,-.03,-.2,-.14,-.03,-.07,-.04,-.02,-.03,-.02,.05,0,-.22,-.02,.02,-.04,-.01,-.06,.05,.06,-.06,.03,-.01,.09,-.17,-.01,-.15,-.1,.07,0,-.01,-.07,-.11,.02,-.07,.03,-.03,.01,-.03,-.01,-.09,-.05,.07,-.08,-.09,-.08,.04,-.14,-.05,-.15,.04,.16,.01,-.14,-.09,-.13,0,-.04,-.07,-.12,-.08,-.07,-.06,-.1,.01,-.02,-.1,.05,-.02,.02,.01,-.05,-.17,-.1,.12,-.08,.27,-.07,-.03,.02,.05,.02,-.15,.02,-.03,-.1,-.06,.01,-.07,.05,.1,.1,-.23,.01,-.16,-.09,.14,.07,.16,.02,.04,-.02,-.03,.12,.07,.06,-.12,-.35,-.02,-.08,.08,-.03,-.15,-.06,-.11,-.04,.07,0,.02,-.07,-.13,.03,.07,.03,.1,-.02,-.08,.41,.05,-.19,-.15,-.15,.08,-.09,-.04,-.05,.01,.1,-.16,-.03,-.02,-.14,0,.1,-.09,-.06,.05,-.06,-.13,-.17,-.17,-.21,.13,-.14,-.07,.01,.18,-.06,.08,.02,-.16,0,-.03,.14,-.03,.1,.2,-.06,-.1,.05,0,-.01,-.07,.05,-.05,.05,-.1,.12,-.17,.04,-.14,-.05,-.16,-.03,-.16,-.08,.01,.11,-.18,0,-.21,.13,.05,1,-.12,.18,.14,-.02,-.01,-.03,-.05,.01,-.01,-.17,.08,-.04,-.14,-.06,-.09,.14,-.04,-.02,-.14,-.02,-.15,-.11,-.08,-.04,0,-.2,.15,.03,.11,.01,.06,.01,-.16,.01,.1,.07,-.03,-.2,-.07,-.12,-.04,.09,.17,.04,-.09,.07,-.18,.22,.14,-.06,.21,-.13,.04,.06,-.09,.09,.05,-.12,.05,-.03,-.03,.08,-.01,.13,.1,.09,-.03,-.03,-.07,-.14,.03,.11,0,.16,0,-.02,.13,.05,.13,-.01,-.28,-.03,-.09,-.04,-.11,-.12,-.09,-.09,.01,-.01,-.16,-.01,-.13,.06,-.06,-.12,.11,-.14,-.15,.04,-.09,-.13,-.03,-.13,.15,-.05,.01,.52,-.15,.09,-.01,.33,-.05,-.14,0,-.03,.05,.1,-.06,.18,.13,-.03,-.08,-.05,-.08,-.06,-.16,.14,-.1,-.02,-.13,.09,-.07,-.01,-.02,.05,-.04,-.08,-.1,0,.06,-.06,.32,.09,.01,-.09,-.03,.01,-.06,.03,-.02,-.06,-.15,-.01,-.08,.05,.02,.01,-.09,-.04,-.14,-.01,.16,.03,-.07,-.02,.01,.07,.08,-.02,-.03,-.12,-.14,-.07,-.09,-.07,.13,-.14,-.03,-.06,.12,.11,-.03,.06,.03,-.01,.08,.06,-.06,.09,.02,.06,-.05,-.06,.09,.08,-.16,.08,-.12,.03,-.09,.04,-.21,.11,-.01,-.05,.04,-.03,-.2,-.03,.02,-.1,-.04,.22,-.15,0,-.03,.02,-.2,.02,.02,-.11,.62,.09,-.05,-.19,.06,-.1,-.12,.3,.07,-.15,-.14,-.04,.09,-.1,-.16,.07,-.15,-.12,.15,.2,-.08,.07,-.03,.12,-.06,-.04,-.08,0,.05,-.08,-.11,-.09,-.06,-.01,.08,-.14,.02,.02,-.11,-.05,.04,-.01,.19,-.14,0,.06,-.03,-.04,-.23,.19,.11,-.07,-.01,-.03,.02,-.07,-.09,-.13,-.06,-.17,0,-.08,-.13,-.08,-.03,-.08,-.12,.06,-.07,-.2,.19,.06,-.12,-.11,.03,-.06,-.11,-.08,-.16,-.07,-.05,-.18,-.14,-.14,.03,0,-.21,-.14,.03,.09,0,-.04,.01,.02,.01,-.1,-.19,-.15,.03,-.04,-.06,-.03,-.22,-.04,-.1,-.03,-.02,-.14,-.02,-.2,-.1,-.12,-.07,.05,-.01,.09,.03,-.13,-.03,0,.06,-.01,.11,-.15,-.08,0,0,-.16,-.02,.05,-.09,-.14,-.07,.14,-.08,-.23,.11,.13,-.09,-.1,-.01,.02,-.03,-.17,.02,.11,.04,-.1,.11,-.09,-.08,-.06,.02,.02,-.02,-.06,.1,-.01,0,-.12,.09,.1,-.19,.08,-.07,-.04,.06,.14,-.08,-.02,-.04,-.04,-.1,-.18,-.08,.02,-.02,-.13,-.03,-.09,.05,.1,.04,-.02,.01,-.09,-.17,.04,-.09,-.06,.06,.02,-.24,-.07,.04,.08,-.08,-.08,.08,.25,.01,.05,.11,.15,.26,-.1,.05,.01,-.03,-.04,-.17,-.1,.04,-.15,.01,-.06,-.14,-.08,-.04,-.04,.13,.01,0,-.05,-.12,0,.01,-.05,.07,-.02,-.08,.06,0,.14,.1,.03,.04,.15,.06,.14,.11,.01,.04,.08,.11,.02,-.11,-.14,-.15,-.15,-.11,-.08,.07,0,-.05,-.09,.03,.23,-.02,-.04,-.06,-.07,-.18,.09,-.02,-.03,.04,-.24,-.05,-.04,-.33,-.16,-.09,.05,-.23,-.09,-.16,-.2,-.04,-.11,.19,-.01,.09,.03,.08,.02,.01,.09,.24,.16,-.07,-.11,-.02,-.01,-.18,-.17,-.02,.14,-.03,.06,.1,-.03,-.19,-.08,.24,-.09,0,-.05,.01,.12,.02,.07,-.02,-.05,-.05,.04,-.11,.12,-.06,-.04,-.06,-.08,-.09,-.14,-.07,-.04,-.11,-.12,-.12,.01,.04,.14,-.06,-.01,-.11,-.12,-.15,-.02,-.06,-.01,-.05,-.21,-.05,-.16,-.14,.11,-.08,-.11,.05,.01,.08,.08,-.1,-.02,.03,.05,.04,-.02,.03,.2,.02,-.1,-.09,-.05,-.01,.06,-.04,-.04,.02,.09,.15,.03,.11,.04,-.02,.18,-.26,.08,-.12,-.16,.04,.06,.05,-.12,-.01,-.2,-.24,-.01,-.19,-.09,-.07,.02,-.07,-.02,-.1,-.1,.05,-.02,-.02,-.09,-.03,-.08,-.08,.03,-.01,-.06,0,.04,.04,.13,-.06,-.09,-.15,-.14,-.08,-.05,-.05,.13,.02,-.14,-.13,.03,-.18,.11,-.02,.07,.05,-.14,-.09,-.07,.08,-.09,-.22,.03,.01,-.02,-.08,.06,.19,-.22,-.1,-.09,-.03,.13,0,.03,0,.1,-.05,-.07,.02,0,.08,.08,-.01,.06,0,.04,.17,-.07,-.14,-.09,-.02,-.1,-.04,.01,0,.08,.01,-.07,-.02,.12,.04,-.04,-.14,-.05,.01,-.08,.11,-.03,.03,-.17,.11,.02,.08,-.09,-.01,0,-.01,.01,-.19,.12,0,.11,.16,-.08,-.05,-.06,-.05,-.04,-.17,.02,.04,.05,-.23,.29,.17,-.1,-.05,.05,-.21,-.04,-.15,-.04,-.11,.08,-.13,.01,.12,.03,-.02,-.03,-.13,.08,-.04,.01,-.09,.03,.04,-.09,.13,.08,-.03,-.04,-.06,.01,-.06,-.1,-.12,0,.1,.2,-.08,.1,-.14,.01,-.12,.15,.05,-.04,-.07,-.05,.05,-.05,-.02,.08,0,-.08,0,.05,.07,-.09,0,.17,.01,-.06,-.1,.01,.12,-.03,.02,.01,.18,.01,-.03,.01,.03,.07,-.14,-.08,-.09,-.07,-.04,0,.1,-.15,.02,-.02,-.07,-.17,-.02,-.07,.04,-.03,.04,.1,.12,-.03,-.14,-.08,.13,.1,-.05,-.02,-.1,.03,-.07,-.14,.02,-.06,-.03,-.03,-.01,-.08,-.09,.01,-.05,.11,.14,.04,.05,-.11,-.09,-.13,-.11,-.1,-.14,-.06,-.03,.01,0,.06,-.07,.09,0,-.03,.03,-.02,0,-.05,-.14,.25,-.18,.06,-.15,.01,.08,-.1,.03,.03,-.13,.04,-.09,-.1,-.03,-.02,-.04,-.05,-.18,0,-.13,-.18,.02,-.05,-.15,-.04,-.04,-.02,-.08,-.05,-.01,.02,-.1,.28,-.13,.15,-.19,-.07,-.13,.16,-.04,-.1,.01,-.1,-.09,-.1,-.09,-.16,-.06,-.01,-.35,-.11,.13,-.16,-.15,.09,-.01,.09,.04,-.02,.03,.09,.11,.09,-.09,.05,.04,.08,.07,-.02,-.1,-.11,-.09,-.12,-.03,.13,.05,-.02,-.07,-.07,-.05,.06,-.08,-.08,.05,.1,.04,-.12,-.05,.14,.04,.06,0,-.05,.11,.12,.07,-.09,.06,.03,.19,-.08,-.14,-.06,-.01,-.16,-.06,.02,-.05,.01,-.08,-.12,-.02,-.08,-.04,-.01,.01,-.16,-.04,-.03,-.04,-.19,-.04,-.01,-.01,.04,-.11,0,-.1,.23,.03,.13,.11,.09,.14,.01,-.05,.08,-.09,-.12,.08,-.09,-.14,-.22,.1,-.08,0,.11,-.15,.32,-.11,.17,.08,.12,-.22,-.16,-.12,-.06,.04,-.03,-.03,.01,-.05,-.03,.03,.02,-.04,.04,.07,-.11,.01,-.12,0,.11,.06,-.09,-.01,-.04,.15,.01,-.14,-.1,-.04,-.19,.13,-.08,.13,-.09,-.17,-.19,.05,-.11,.03,-.01,-.06,-.06,.05,.03,-.06,.05,.09,.03,-.11,-.07,.04,-.13,.11,.19,-.05,-.04,-.08,-.06,-.08,-.01,-.23,-.15,-.05,.06,-.06,-.03,-.03,-.22,-.12,.12,-.04,-.08,.11,.03,-.02,-.02,.01,.01,-.05,.04,-.06,.02,-.07,-.16,-.09,.06,-.05,-.01,-.02,0,.05,-.13,.07,.07,-.12,.06,-.2,0,.05,.06,-.11,-.26,-.01,-.09,.33,.25,-.01,-.04,-.05,-.12,-.01,-.09,-.05,-.1,.05,-.17,-.03,.11,-.08,.02,-.11,.04,0,-.2,.07,-.01];export{a as rvalData};
