const a=[.17,-.08,.05,-.07,-.09,.29,-.08,.09,-.16,-.06,.05,.19,-.17,0,-.02,.03,-.07,.07,-.14,.06,.23,-.07,-.03,-.09,-.05,-.04,-.05,.02,.09,-.06,.14,.03,.02,.14,.14,.19,.03,-.11,-.11,.01,.08,-.01,.04,.03,-.13,-.11,-.07,.3,.03,.02,-.01,.09,-.07,-.04,.2,-.04,-.03,.15,-.02,.01,.24,.16,.01,0,.12,-.05,.05,-.07,.05,-.01,-.15,-.03,.18,-.06,-.01,-.02,.05,.2,-.09,.15,.02,-.01,-.02,.01,.07,-.07,.03,-.09,-.01,-.02,.25,-.12,0,.04,.24,.04,.02,.06,.21,.14,-.08,.06,.13,-.07,.11,-.09,-.25,-.26,.1,.09,-.1,.16,.1,.05,.22,-.03,.12,-.01,.24,-.01,-.14,-.2,.15,-.1,-.03,.02,.09,.09,-.04,-.02,.13,.16,-.05,.1,.16,.02,.17,-.08,.01,.08,.08,.02,0,.02,.08,-.01,0,.17,.16,.05,.06,.03,-.02,.15,.09,.23,.08,.21,-.06,-.05,.12,.06,-.05,.16,-.01,.14,.17,.07,.19,-.03,.17,.08,.17,.05,-.05,0,.1,-.09,.1,0,-.15,.09,.18,-.11,.17,.02,.01,.15,.1,.09,.05,.17,.06,.01,.14,.15,.12,.05,.05,.12,-.06,.13,-.02,.04,.08,.21,-.06,.08,.21,-.15,.12,0,.22,.01,.16,.14,-.14,.07,.01,-.18,.1,.07,.24,.06,.06,-.01,.15,.1,.27,-.11,-.05,-.04,0,-.03,-.27,.11,.02,-.02,-.01,.06,.18,-.07,.09,.25,.04,.16,.13,.07,.1,.17,.05,-.19,.2,.18,.08,-.05,-.08,.06,-.06,-.12,.16,.2,.02,.08,.25,.08,-.03,-.01,-.07,-.01,.21,0,.04,-.01,-.1,-.08,0,.22,.1,.01,.13,-.03,-.13,-.08,.14,.02,-.08,-.01,.03,.15,.04,.08,.02,.13,-.03,.04,-.03,.1,.03,.2,.08,-.02,.17,-.14,.19,.11,.22,.18,.24,-.01,.02,.09,-.03,.07,.16,.19,-.04,.22,-.04,.01,-.01,.25,-.08,.04,.02,.14,.1,.06,.11,.11,-.09,.13,.23,-.21,-.09,-.19,-.01,.27,.09,.15,.13,.04,-.02,.02,-.03,.11,-.07,.19,.05,.12,.1,.18,.27,.15,-.03,-.15,.09,.04,.09,-.07,-.05,-.04,.11,-.23,-.02,-.07,.02,0,.14,.06,-.04,-.06,-.16,.13,.23,.07,.05,-.09,-.18,.16,.04,.07,.1,0,-.01,.04,.05,.06,.13,.14,.08,-.22,.1,-.07,-.04,-.02,0,.07,.08,.01,.07,.18,.04,-.1,.05,.11,-.06,.14,.05,.18,-.01,-.07,.17,.11,.23,0,.07,0,.14,-.13,.04,-.08,.08,-.18,-.22,.02,0,-.11,.01,.12,.07,.14,-.02,.22,.06,-.13,-.03,.07,0,.15,.09,-.04,.02,-.07,-.06,.2,.01,.05,-.15,.01,.15,.01,-.04,.17,-.09,.26,.01,.01,.15,.03,-.08,.15,-.01,.12,0,.21,.02,.02,.12,-.02,-.25,-.01,.24,-.04,.19,.07,.1,.01,.17,-.01,.04,.01,.06,-.03,-.05,.15,.02,.1,.2,.01,.07,.18,-.05,.03,.06,-.01,-.06,-.16,.15,.25,.21,.08,.03,-.1,.01,.11,.18,.2,.01,.17,.07,.15,-.02,.12,-.02,.15,.21,.12,.17,-.09,-.04,.04,.16,.2,.21,.15,.16,0,-.01,.14,.1,-.02,-.15,.16,.16,.07,.26,.14,.1,.21,-.02,.18,-.18,-.04,.07,-.04,.14,-.02,-.02,.02,-.11,-.01,.03,.01,.02,-.15,.05,.12,-.16,.1,-.06,-.08,.03,.12,-.17,-.24,-.08,-.1,.24,-.07,.1,-.06,-.12,.03,-.03,-.03,-.09,.17,.02,-.13,.1,.2,.02,.15,.1,-.06,.03,.13,.05,.01,-.11,.12,-.17,.1,.06,.07,.07,-.12,.2,.12,.23,-.04,-.03,.19,-.1,-.03,.26,.2,.18,-.07,.02,0,.04,.2,-.22,.04,.02,.17,-.1,.26,.09,.09,.27,0,.2,.2,-.08,.26,.05,.14,-.11,-.1,.02,.17,.21,0,.08,.19,.06,.03,.1,.08,.1,.07,.01,.07,.12,-.02,-.01,.09,.1,.04,.08,.03,.1,.18,-.12,-.13,-.07,-.02,-.03,.04,.03,.27,.05,.24,.04,.18,.02,-.04,-.13,.22,-.19,-.05,.16,.21,.02,-.05,-.05,.06,-.18,.11,.05,-.06,.13,.22,-.05,-.02,.04,.08,-.01,.08,.2,-.21,.01,-.07,.19,.08,-.05,.07,.01,.01,-.09,-.11,1,-.12,.06,-.01,.04,-.05,.06,.21,.14,.2,-.07,-.07,-.03,.12,.1,.03,.05,.1,.06,-.14,.04,-.05,-.13,-.07,.12,-.09,.1,.17,.16,.03,.05,.16,0,-.01,0,-.11,.04,.19,.12,-.06,-.09,0,-.14,.02,.09,.07,.16,.19,.02,-.01,-.07,-.09,.15,-.03,.23,-.03,.1,0,.04,-.02,-.04,-.06,0,-.13,-.11,.12,.19,.26,.01,.08,.18,.13,.06,.04,.04,.2,-.03,.14,.11,.05,0,.1,.17,.19,.2,-.05,-.06,.22,.07,-.08,0,0,.03,.01,.14,.12,-.04,-.04,-.17,.08,.09,.06,.12,.03,.16,-.11,.16,.22,.16,.03,.06,.12,-.12,.01,-.12,.01,.19,-.09,.13,-.03,-.14,-.02,.11,.2,.08,-.11,.06,-.03,.17,0,-.06,.07,-.2,.01,.07,-.04,.26,.07,-.21,.15,-.07,.03,-.21,-.01,.07,-.05,-.01,.03,-.11,-.09,-.09,.12,.24,.14,.03,.19,.01,-.01,.15,0,.2,.1,0,.29,.02,.16,.21,.19,-.03,.2,.18,.19,.02,-.04,.13,.16,-.08,.13,-.03,.05,-.09,0,.18,.16,.11,.1,.06,-.11,-.11,.24,.14,-.19,.05,-.14,.08,-.03,.33,-.12,.09,-.17,.09,.1,-.02,.19,.25,.07,.07,-.06,.17,.03,.04,.17,.21,.27,.12,.17,.2,-.11,0,.1,.1,-.07,.24,-.01,-.02,.2,.19,-.04,-.06,.01,-.01,-.01,.12,-.05,0,-.01,.15,.27,.13,-.1,.23,.04,.02,.18,.12,.03,.07,.03,.15,.24,.08,-.13,.01,-.07,-.02,.27,.06,-.03,.1,-.12,.16,.04,.04,.18,-.02,-.01,-.18,.2,-.09,-.09,-.06,-.04,.02,.06,.14,.23,-.02,.12,-.14,.04,.16,.06,.13,.27,.3,.07,.07,.21,.09,.18,-.14,.18,-.23,.03,-.05,.02,-.12,.02,-.01,.19,.14,-.16,.15,.08,-.23,.31,-.04,.05,.13,-.08,.19,0,.14,.02,.16,.03,-.07,-.04,-.11,.16,-.01,.03,.12,-.09,.14,-.07,.07,-.02,.26,.15,-.2,.1,-.01,.11,0,-.06,.34,0,-.25,-.03,.05,.2,.13,-.01,-.06,.09,.09,.12,.12,.11,-.18,0,0,-.01,.17,.05,-.06,.23,-.06,-.06,.04,.04,.07,.04,.06,-.1,0,.12,.23,.03,.21,.1,-.02,.17,.07,-.05,.08,.14,.05,-.12,.22,-.04,-.11,-.11,-.1,.01,-.17,.13,-.04,.08,-.03,.02,.14,.14,.09,.04,.08,-.23,.13,-.07,0,-.02,-.03,.1,.18,.22,-.29,.06,.13,-.18,.13,-.18,-.06,-.04,.03,-.01,.04,-.05,.02,.15,-.09,.02,0,-.09,.25,-.17,.18,.11,-.04,-.09,.11,-.07,.05,.13,.12,.1,0,.18,-.06,.18,.06,.07,.02,.04,.04,-.04,.06,.06,.14,-.06,-.03,.21,.07,.25,.25,.12,-.05,.06,.05,.14,.06,.2,-.01,-.06,.01,.21,.02,.26,-.07,.12,.03,-.09,-.04,-.04,-.11,-.1,.19,.12,.13,.01,-.06,.18,-.04,-.01,0,.03,-.03,.12,.11,.12,.09,.27,-.01,.04,.19,0,.09,.09,.25,.06,.18,.1,.27,-.05,-.15,.15,.07,.04,-.19,.07,-.03,.13,-.05,-.03,-.24,.22,.09,-.01,.19,.06,.1,.28,.04,-.13,.23,.2,-.16,-.05,.08,.14,-.1,.06,-.24,.1,.11,.11,0,0,.06,.08,.08,-.03,.12,.06,.1,.27,.02,.09,-.05,.29,.08,-.16,.12,-.11,.15,.04,.09,0,-.15,.2,-.13,.05,-.12,-.02,.01,.22,-.02,.08,.08,-.13,.04,.17,.12,0,.18,-.01,.08,.35,.02,-.02,-.09,.05,.02,.04,-.01,.18,-.07,.02,.07,.11,.07,.15,.18,.06,-.03,.04,.06,-.02,-.14,-.03,-.04,-.14,.14,.13,0,.1,0,.03,.03,-.1,.11,.01,-.01,.16,-.03,.09,.02,.2,-.13,-.05,.19,-.01,-.09,.05,.01,-.05,-.13,.17,.06,.24,-.03,-.06,.2,-.09,-.04,.18,.16,-.11,-.27,.05,.07,.02,-.05,.15,.05,.17,.21,.06,.15,-.01,-.11,.16,.21,.1,.23,.14,.17,.13,-.21,.2,.13,.25,.03,.11,.05,-.1,.08,.12,.05,-.14,.05,.19,.21,.11,-.06,.11,.05,.18,.19,-.07,.03,.13,-.15,.03,.1,.04,.12,.16,.17,.14,.01,.13,.23,-.08,.02,-.16,.16,-.07,-.01,.06,-.02,-.08,.04,.06,-.11,.1,.18,.08,.19,.19,.03,-.05,.16,-.05,.07,.01,.06,.1,.09,.04,-.03,.03,.03,-.21,.05,.01,.18,.19,.03,.15,-.06,.03,.11,.24,.15,.02,.14,-.04,.15,-.03,.1,.17,.01,-.01,-.05,.15,.08,.12,.22,-.03,-.04,.1,.08,-.14,.02,-.02,.04,-.06,.23,-.01,.17,.01,.19,.07,.07,.14,.17,-.02,.14,-.09,.01,.13,.06,.17,.17,-.23,.17,.07,-.2,0,.16,-.04,.15,.06,.06,.17,.13,.08,.08,.07,.11,.04,.09,-.05,-.06,.08,-.04,.1,-.02,.05,.02,.19,-.03,.1,-.01,-.02,-.01,-.27,.01,.18,-.12,-.03,-.06,.12,.12,0,.14,.18,.09,.19,-.12,.14,.08,.08,.06,-.07,.17,.08,.05,.14,.02,.02,.16,.16,.11,.03,.16,.17,.02,.1,.14,.09,-.07,-.01,-.03,-.03,.04,.06,.09,.03,.09,.15,.05,-.01,.14,.13,.11,-.14,.02,-.1,.04,.11,.2,.04,-.04,.09,.07,-.01,-.04,.03,.1,.1,.09,-.15,.1,-.03,.13,-.06,.09,-.06,.1,0,.14,-.19,.1,.01,.07,.14,-.15,.15,-.1,.1,-.11,0,-.08,-.02,-.07,.1,-.05,.11,.02,0,-.02,-.08,.08,-.01,.07,.05,-.21,-.09,0,.15,.09,.08,.05,.1,.11,.08,-.12,.19,-.14,-.05,-.02,.02,-.1,.03,-.03,.08,.04,.05,.14,.07,0,.08,.03,.14,.05,-.02,.19,-.11,.13,.14,.14,0,-.12,.05,.08,-.04,.18,-.08,.19,-.02,-.06,.18,.16,.03,-.15,-.01,.03,.19,.11,.22,-.07,.18,.08,.13,.23,.14,-.08,.19,.1,-.15,-.03,-.21,.03,.08,-.03,.01,-.04,.02,.15,.13,-.08,-.15,.17,.09,-.08,-.16,.12,-.1,.01,.1,.13,-.01,.09,.01,-.06,.06,0,-.06,.02,.01,.06,.08,.05,0,-.11,.05,.01,-.08,.01,.03,.02,-.17,.03,.01,-.01,-.12,-.07,-.21,.05,.08,.14,.21,-.08,-.03,-.04,.21,.11,.03,-.01,.21,.28,.16,.12,.06,.16,-.01,-.12,-.05,.08,.15,.03,-.02,.16,.13,-.02,-.04,.19,.08,-.13,0,-.14,.11,.13,-.05,-.06,-.19,.06,.04,-.19,-.05,-.16,.21,.08,.06,-.22,-.08,.01,.01,-.01,.2,-.17,-.07,-.12,.1,-.02,-.03,-.01,-.09,.04,.09,.13,.09,.09,-.11,.08,.12,.05,.12,.15,-.13,-.05,-.04,-.04,.06,.26,-.02,-.24,.14,.01,.29,.15,.11,0,.07,.1,-.02,.01,-.07,.11,.08,.03,.12,-.24,.18,.27,-.16,.08,.11,.11,.09,.02,.16,-.06,.19,.03,-.04,.1,.1,-.1,.09,.09,.1,.13,.19,.12,.07,-.29,.02,.17,.1,-.18,-.05,-.16,.24,-.09,-.08,.23,-.06,.13,.04,-.02,.19,.08,.17,-.08,.07,-.19,.09,.04,.22,.14,.11,-.07,.1,-.04,.04,.01,.01,.17,.14,.01,.05,.28,.21,.09,-.04,-.07,0,.09,.07,.15,.14,-.12,-.17,.01,.15,-.06,.06,-.16,.09,-.04,.02,-.12,.09,.01,-.25,.2,.08,.02,-.02,-.1,.1,.1,.19,.2,-.21,.05,-.21,-.02,-.13,-.01,-.02,-.12,-.07,-.06,.17,-.03,0,0,.2,.05,.06,.11,-.06,.19,-.14,.06,.02,-.03,-.01,.07,.03,.19,-.02,.04,.01,0,.07,.02,-.01,.01,.08,.05,-.15,-.05,.18,-.04,.14,.14,.06,-.11,-.11,-.08,.03,.15,-.09,-.03,.14,-.06,-.23,.09,.19,.14,-.06,.09,-.19,-.12,-.02,-.01,-.07,.07,.19,0,.07,.08,-.05,0,-.02,.07,-.11,-.02,.17,.02,.09,.11,-.04,.06,.05,.16,-.03,.24,-.08,.05,.09,-.09,.11,-.01,.07,-.02,.16,.15,-.07,.07,.05,.01,.03,.04,.01,-.01,-.03,.11,.01,-.04,.16,-.21,-.01,-.04,-.08,-.07,-.11,.26,.08,-.01,.34,-.04,-.07,.12,0,.17,-.16,.13,.04,-.08,.03,.02,.19,.01,.18,0,.14,.19,-.11,-.11,.06,-.16,.04,.09,-.09,.13,-.15,.02,.03,-.03,.15,.01,.21];export{a as rvalData};
