const a=[.05,.04,.07,-.12,.06,.1,-.08,.07,-.14,.17,-.08,-.08,.13,-.14,-.06,.17,-.05,-.11,.05,-.02,-.1,-.14,1,-.18,-.07,.03,-.19,.11,.19,-.17,.17,-.14,.08,0,-.17,.08,.02,-.13,-.07,-.01,-.17,0,.18,.21,.17,-.2,-.07,-.07,-.16,.15,-.09,-.01,.08,.07,.13,-.09,-.08,.05,.15,-.02,.16,.07,.18,-.13,-.09,-.19,.06,-.13,-.07,.02,-.06,-.01,.23,-.19,.02,-.08,-.09,.17,.03,-.1,-.07,-.04,-.08,.03,-.06,-.13,.01,.1,-.08,.03,.14,.09,.17,.04,-.17,.08,-.06,-.11,-.01,.14,-.16,.11,.09,-.03,.17,.05,-.07,-.06,.07,.03,.03,.22,-.12,-.06,-.03,-.1,.04,-.18,-.05,-.06,-.07,.01,-.01,-.17,.21,.18,.06,-.09,-.12,0,.28,.06,.06,.24,.01,-.1,.19,.07,-.11,-.01,.12,-.01,.09,0,.01,.18,-.08,.05,.1,0,.12,.07,-.01,.19,.19,.13,-.07,-.07,.12,-.09,.2,.15,.11,.13,.15,.12,.09,-.15,.15,-.02,-.06,-.08,.28,.02,.23,-.09,.03,-.2,.19,.09,-.01,-.21,.2,-.04,.1,.11,.05,-.02,.28,-.1,.12,.2,-.21,.1,.19,.12,.15,.04,-.13,-.12,-.07,0,.02,.12,-.19,.21,.22,.23,.21,.11,.23,-.16,-.01,-.06,.04,.22,-.05,.25,-.1,-.19,.15,.1,-.01,.08,.04,.03,.24,-.11,.08,0,-.14,.12,-.08,.07,0,-.05,-.16,-.13,.24,.05,.17,-.16,.14,.18,.18,.12,-.16,.02,.11,-.08,.02,0,.15,-.03,.14,-.1,.21,-.08,-.01,0,-.07,.08,.08,.12,.16,.15,-.1,.02,-.2,-.02,-.1,-.18,.05,.15,-.03,-.02,-.17,.21,.15,-.13,.19,-.17,-.07,.01,.15,.14,-.07,-.02,.18,-.1,-.04,.21,.16,.13,.17,.16,-.09,-.02,.04,.29,.22,.02,-.15,-.11,-.12,.04,0,.17,.12,-.08,.01,.11,.27,.03,0,.3,.23,.12,.15,.2,.03,-.07,-.12,.07,.13,.12,.11,-.01,.06,.07,-.17,.09,.04,-.06,-.15,.02,-.21,.24,.08,-.03,.25,.15,-.04,-.08,.01,.09,-.08,.17,.18,.1,.2,.14,.02,.12,-.08,-.05,.14,-.04,.08,-.03,-.09,.17,.09,-.1,-.03,.01,.02,.02,.13,.02,-.07,-.03,-.07,.1,.1,.22,-.03,.03,.02,.17,-.1,.11,-.07,.07,.19,.05,-.08,.02,.12,.1,.12,.05,-.28,.19,.11,.07,-.16,.2,-.03,.22,-.08,-.05,.14,.01,.17,.13,-.01,.17,.09,.1,.14,-.06,-.09,.13,.04,.07,.11,.06,.2,-.01,.19,.01,-.13,.07,-.13,.05,.03,-.01,.22,.09,.13,.13,-.09,.03,.27,-.01,.08,.14,.1,.14,.11,-.02,.08,-.12,.11,.13,.05,.14,-.09,-.15,.1,.1,-.09,-.06,-.21,.08,-.13,.05,.08,.09,.14,.21,-.09,.13,.34,.01,-.07,.06,-.08,.12,-.06,.01,.01,-.04,.2,.1,.22,.07,.13,-.2,.12,-.06,.11,.12,.17,-.02,.34,.19,-.03,.08,-.06,-.11,.03,.22,.12,.05,.16,-.06,.07,.14,.15,-.03,-.03,.03,.05,.13,.05,.11,.07,.23,.08,-.05,.06,.3,.15,-.13,.15,.19,.16,.05,-.09,.08,.03,.14,.09,-.08,.1,.02,.09,.19,.19,.17,.05,.23,-.04,.09,.12,.06,.13,-.08,.04,.17,.1,-.12,-.07,-.02,.07,-.12,.01,.05,-.16,.06,.13,.09,.1,.14,-.26,.13,-.22,-.24,.15,-.03,.03,.16,.04,0,-.1,.17,.18,-.1,.14,.16,-.01,.16,.04,.06,.06,-.1,.09,-.06,-.08,.01,.17,.05,.2,-.08,.08,.07,-.09,0,-.11,-.09,-.16,.05,.17,-.05,.14,.08,.08,.18,.08,.02,.07,.04,.15,-.13,.13,-.07,-.24,.07,.08,-.01,.02,.19,.19,.07,.07,.13,.02,-.04,.33,.1,.27,.03,.09,-.02,-.04,.16,.1,.15,-.01,-.17,-.26,.17,.04,.23,.1,.15,.18,-.14,.13,.02,-.14,.08,.02,.04,.11,.15,-.05,.25,-.15,-.09,.22,.12,.09,.06,-.11,-.06,.09,.04,.06,.17,.07,.17,.03,-.1,-.02,0,.03,.01,0,-.02,.01,-.19,.16,.14,.13,.01,-.07,.03,.14,.07,.02,.04,.07,-.06,.1,.04,.08,.08,0,-.02,.14,.05,.06,.02,-.07,-.07,.04,.06,.04,.09,.12,.1,-.03,-.08,0,.02,-.09,-.18,.09,.1,.04,.13,.02,-.03,-.04,.13,-.13,0,.09,.05,-.02,.11,.03,.12,.03,-.11,.02,.24,-.06,.08,.09,.04,.12,.21,-.02,.03,.05,.3,-.13,.23,-.06,-.12,-.05,-.08,-.03,.02,.01,.22,-.03,-.05,-.06,.07,.01,.06,-.11,-.06,.11,-.06,.07,-.11,.07,.11,-.02,.07,.15,.16,-.26,0,.18,.14,.03,-.03,.18,-.01,.23,.1,.02,.14,.11,-.02,.01,.13,.09,.17,.17,.15,-.1,-.07,-.18,0,.12,-.14,.08,-.06,.11,.09,-.08,.08,.07,-.05,-.31,.14,.01,.04,.1,-.07,.16,.06,-.02,.04,.13,-.17,-.03,.14,-.07,-.25,-.08,.09,-.04,-.1,.19,0,.01,.03,-.13,.1,-.04,-.23,.03,.02,.12,.02,-.12,-.08,-.05,.16,-.02,-.15,.16,.02,.18,.15,-.04,.12,-.07,-.14,.24,-.13,-.04,-.13,.01,-.06,0,.07,.15,.15,.14,-.11,.06,.11,0,0,.1,.2,-.14,0,.03,.11,.01,.11,-.01,.19,.09,.11,.15,.15,-.27,.03,-.15,.2,-.09,.09,-.02,.01,.19,.04,.15,.19,.07,0,-.09,.2,.08,.07,-.06,.16,.1,.01,.07,-.19,.08,-.13,-.06,.07,-.01,.24,-.03,.24,0,-.15,-.1,.12,.07,.15,.08,-.03,.15,-.2,.16,0,-.16,.01,.13,.06,.03,.09,.04,.11,.19,.09,-.05,0,.02,-.12,.21,-.06,.1,.06,-.04,.11,.11,.05,.1,.12,.1,.05,-.09,-.09,.07,.02,-.01,0,.18,-.08,.1,.05,.03,.11,.07,.05,.13,-.02,.01,-.05,.2,.15,-.06,.02,-.15,.07,-.18,-.06,.06,.05,.16,.19,.25,.12,.12,.24,-.18,.21,.18,.12,.11,-.14,-.1,.12,.22,.23,.21,.19,-.12,.21,-.06,.09,.03,-.01,-.07,.08,.18,-.01,-.04,-.25,-.21,.03,-.17,-.04,-.16,.15,.16,-.15,.12,.02,.13,-.05,.07,.01,.03,.16,-.19,.12,-.03,.14,.14,-.1,-.04,-.08,.25,-.1,.21,.08,.02,.22,-.02,.04,-.06,-.06,.12,.09,-.16,-.06,-.1,.18,-.22,.07,.06,.09,.22,.2,-.18,.16,-.12,-.01,.04,.07,.15,.06,-.14,-.14,.14,-.04,.16,.07,-.16,-.1,.09,-.16,-.01,.02,.14,.06,-.21,.15,.06,0,.11,.03,0,-.01,.07,-.1,.13,-.04,.11,-.18,-.11,0,.13,-.02,.1,-.05,.06,.16,.19,-.05,.1,.18,.05,-.02,.1,-.13,.05,.03,.12,.05,.19,-.04,-.05,.26,.22,.13,-.17,-.19,-.08,-.03,.24,.09,-.01,-.11,-.02,-.12,.02,-.22,-.02,-.11,.15,-.08,.22,.11,.11,-.18,-.08,.02,.13,.17,.05,-.02,.1,-.1,-.24,-.07,.11,.02,.04,-.02,.06,.02,.02,-.06,.12,.11,-.16,.17,.02,.01,.13,-.08,-.07,.09,-.03,.11,.04,-.01,.12,.06,.15,.13,.13,.06,-.03,.07,.17,.07,-.01,-.04,-.18,-.07,.2,-.11,-.11,.19,-.24,.01,.07,-.01,-.05,.04,.14,.06,.07,.05,.12,-.05,.01,.15,.13,-.08,-.09,.03,-.05,.18,.12,.13,-.01,.09,-.05,.24,.15,-.14,-.19,.15,-.14,.07,-.12,.06,.06,.13,.09,.07,-.06,.02,-.01,.13,-.03,-.17,.12,.09,-.21,.12,.21,-.02,.08,.17,0,.02,.11,.02,0,.06,.15,-.11,.03,.12,-.08,.12,.14,-.01,.13,.14,0,.1,-.04,-.12,.12,-.15,.09,.16,-.09,.06,-.1,.08,-.04,.15,-.2,-.12,.17,-.1,.08,.1,.11,-.21,.19,.17,.23,-.15,.04,.19,.19,.09,.06,.13,.01,-.07,.05,-.26,-.09,.08,.11,-.01,.11,.15,.09,.09,0,.12,.14,.19,.04,.04,-.13,-.12,-.09,-.07,.1,.23,0,-.13,.13,.03,.03,.06,-.07,.1,.27,-.1,-.01,.02,.13,-.05,-.1,.04,.14,.1,.03,.1,.11,-.19,-.01,.09,.12,.1,.08,-.16,.16,-.23,-.09,.19,.14,-.04,-.21,-.06,.14,-.03,-.06,.2,-.06,.09,.22,.15,.14,.03,-.03,.14,.13,.19,.15,.19,.15,.1,.02,.05,.21,.12,.15,.23,.1,.05,.03,.08,.23,.14,.22,.04,.05,.21,-.01,.06,-.16,.08,.16,.04,.3,.19,.1,-.05,.15,.11,.12,.16,.11,.25,-.01,-.03,.14,-.06,.15,-.13,.26,.07,.01,.09,.03,-.15,-.09,.17,-.06,.01,.16,.13,.13,.12,-.01,-.04,.28,-.04,-.01,.03,-.07,.15,-.12,.14,-.09,-.22,.13,-.1,-.05,-.03,-.07,.14,.13,.16,.01,.01,-.06,.03,.12,.08,.14,.01,.13,.01,.04,.16,-.17,-.22,-.09,.16,-.14,.02,.02,-.08,.04,-.03,.08,.15,-.06,-.13,.07,.21,.08,-.06,.11,.1,.05,-.19,-.03,.08,.15,-.22,.1,-.16,.08,.04,.16,.19,.18,.23,.15,.13,.15,.18,.1,.04,.26,.17,.11,.05,.09,.08,.18,.24,0,.08,.06,.07,.13,.07,.07,.23,.05,.18,.01,.28,.06,.11,.1,-.05,0,.03,-.21,.27,.05,.1,-.01,-.27,.23,-.12,.06,.16,.1,-.01,-.11,.24,.09,0,.05,-.19,.11,-.06,.31,.11,.17,-.15,.09,.13,.24,.08,.13,.15,.17,.23,.11,-.03,.18,.08,.1,.03,.14,-.07,.15,.14,-.02,.16,.15,.06,.12,.05,-.11,.11,.15,-.02,.14,.27,-.01,.19,-.15,-.16,.13,.16,-.07,.17,.03,.26,.22,-.16,.23,-.11,.03,.32,.13,.09,.18,.21,.31,-.09,.09,.05,.1,-.23,-.05,.16,-.07,.18,0,.33,-.08,-.08,.03,.05,0,.11,.1,.11,-.21,-.13,.09,.15,.26,.09,.16,-.08,.16,.21,.1,.22,.16,.13,-.04,.1,-.15,.17,-.18,.2,.04,.01,-.09,.01,.03,.07,.01,-.02,.32,.05,.23,.15,.08,.1,.08,.04,.16,-.11,.02,.26,.04,-.09,-.11,.07,.18,.09,.04,.13,.14,.11,.19,.19,.22,.18,-.05,.1,.08,.14,.11,0,.04,.28,.22,.13,.04,.16,-.23,.08,.14,-.06,.06,-.04,.08,.18,-.01,.09,.03,.12,-.13,.16,.13,-.15,.24,.18,-.09,.13,-.02,.01,.06,.06,.1,-.14,.18,.13,-.15,-.14,.11,.03,.04,.01,-.06,-.01,.07,.01,-.04,-.25,.19,.18,.23,.08,.07,-.03,-.1,-.05,.09,-.16,.02,-.02,.1,.13,.11,-.12,-.11,-.06,-.06,.01,.21,.1,.09,.17,.04,.03,.26,.17,-.03,.15,.01,.09,.16,-.12,.04,-.04,.04,.07,-.05,.11,-.04,.12,-.15,-.07,-.12,-.02,0,.01,.16,-.13,-.02,.13,.07,.1,.13,0,.07,.14,.19,.01,.06,-.08,.12,.09,-.18,-.13,-.12,.17,.06,.1,.06,-.03,0,.01,.05,.21,.04,-.03,.09,.05,0,.09,.16,.11,.14,.1,.14,.08,.11,-.12,-.06,-.06,-.03,.02,.16,.05,.01,.09,.14,.06,.03,.05,.15,-.08,.1,-.17,0,.12,.2,-.07,.15,.08,.02,.13,.07,.14,.09,.21,.07,.15,.17,.22,.04,.02,-.01,-.05,.04,.17,.14,.14,.09,-.03,.07,.11,-.12,-.17,.04,-.14,.07,-.07,.16,.1,.11,.18,.09,.08,-.01,-.05,.02,.06,.16,.15,.05,.19,.01,.11,0,-.06,.06,-.03,.03,.2,.1,.26,.06,-.08,-.03,.04,-.23,.11,-.1,.03,.14,.15,.09,.07,.16,.04,.03,.28,0,-.04,.03,.11,.08,.11,.14,0,.09,.11,.08,.21,.18,.02,-.15,.29,.14,.2,.17,.14,-.2,.07,-.14,-.1,-.09,.1,0,-.16,0,.19,0,.09,-.01,-.02,-.02,.14,-.11,-.08,.15,.01,.07,-.04,-.03,.11,-.05,.21,.12,.06,.02,.09,.07,-.1,.05,.04,.06,.09,.11,0,.11,.09,.06,.24,-.15,-.27,-.16,-.08,.05,.03,.08,-.08,-.02,.02,.06,-.06,.2,-.03,.11,-.15,.06,-.07,.07,.13,.06,.01,.15,.19,.12,.18,-.02,-.12,.05,-.16,-.05,.07,.03,-.02,-.13,-.12,.16,.06,-.01,.12,.09,.08,.04,.24,.09,-.08,.05,.14,.1,.09,.15,.03,.07,.04,.21,.01,.09,.01,.12,.06,.04,0,-.09,.03,-.12,.12,-.1,-.01,.02,.02,.09,.02,.1,.11,.02,.18,-.04,.02,-.01,.09,.11,.04,.06,.11,0,.06,-.03,-.05,-.15,.15,.09,.02,.12,.1,.15,.12,-.22,.15,-.07,-.04,.17,-.01,-.19,.02,.08,-.02,.06,.17];export{a as rvalData};
