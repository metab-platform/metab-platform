const a=[-.07,.04,.12,-.04,.16,.03,.01,-.04,.01,-.03,.02,.07,.03,-.19,.09,-.19,.1,.02,.09,-.06,.17,.03,-.02,0,.12,.18,.03,0,.15,.07,.16,.06,.09,-.07,.01,-.03,.13,.04,-.02,.06,.12,.15,.05,.09,.15,-.01,.12,.15,.13,-.13,-.01,.05,.07,.12,.08,.02,.02,.01,.17,.09,.03,.19,.13,-.1,.25,.12,.18,.09,.05,-.14,0,-.05,.04,.02,.16,-.1,-.15,.02,.06,.21,.03,.1,-.21,.19,.03,.11,.2,.03,-.07,.1,.19,.04,-.03,-.13,.13,.2,-.2,-.07,.14,.04,.12,.16,.08,.02,.08,.03,-.2,-.11,.2,.06,-.16,0,-.29,-.13,.15,.16,.15,.11,.13,.06,-.05,-.03,.12,0,-.02,.03,.17,.17,.03,.11,-.03,.07,-.2,-.06,.04,.17,.03,.03,.09,0,.19,-.04,.15,.18,-.01,-.12,.07,.12,.2,-.13,.15,-.05,.06,-.12,-.03,.17,.19,.05,-.16,.05,0,.14,-.08,.1,0,-.04,.1,.1,-.03,.09,-.03,.08,-.03,-.03,.01,.12,.03,-.02,-.04,.08,.06,.03,-.05,.04,.16,.08,-.07,-.04,-.03,.06,.09,.01,.05,.05,.1,.14,.12,.06,.04,.04,.04,.13,.13,0,-.03,.13,.01,.05,.07,.01,-.04,.12,.05,.14,0,-.06,-.07,-.05,.06,-.01,.28,.02,.13,.17,.25,.12,0,.09,.24,-.06,-.04,.09,.17,.06,.06,.02,.2,.04,.03,-.01,.01,.09,-.01,.01,-.02,.02,.01,.03,.15,0,-.11,.02,.07,.2,.21,.04,.19,.1,-.12,.05,.08,.2,.05,.18,.19,.05,.09,.19,-.01,.02,.05,-.15,.14,.06,.07,.07,.15,-.06,.1,.14,.01,-.04,.01,-.05,.16,.1,.07,.12,-.1,.13,-.03,.05,.2,-.03,-.15,.08,-.01,.05,-.01,.12,.03,.11,.1,-.17,-.01,.19,.19,.09,.22,-.06,.15,-.03,.07,-.01,.23,.12,-.03,.19,.06,-.12,.17,.13,.13,.18,-.13,.19,.2,.28,-.05,.16,-.18,.19,.1,-.08,.02,-.08,.12,.22,-.02,-.03,.05,.13,-.03,.02,.14,.17,-.11,.11,.07,.12,.17,-.14,.04,.17,-.17,0,.06,-.02,.08,.08,0,.07,.23,-.06,.09,-.15,.02,.14,.1,-.04,.16,-.12,-.04,-.02,.03,.04,.13,.14,-.17,.22,-.06,.09,.02,.08,-.07,-.02,.05,.08,.13,.18,.07,.04,-.06,-.15,-.13,.16,-.05,-.05,.18,-.06,.01,.24,.13,.04,.12,.14,.01,.09,.15,.28,.07,-.13,.11,.08,.09,.03,.19,.18,0,-.09,.14,.12,.02,-.11,-.01,.16,.13,-.04,.11,-.08,0,.05,.09,-.04,.01,.09,-.05,.2,.15,.07,.19,.11,.13,-.1,-.17,.21,.1,.19,-.12,-.12,.08,.03,-.16,.27,-.03,.21,.09,.14,.12,.05,.09,.14,-.14,-.01,.07,.12,-.13,.02,.07,.12,-.14,.12,.1,-.03,.15,.14,.06,-.09,.17,0,.06,.12,.18,.03,-.11,.24,-.02,-.06,.13,.05,-.08,.06,-.01,0,.13,.14,-.12,-.16,.1,.06,.23,.08,.16,-.01,.11,.09,.25,.19,.11,.04,.14,.21,.12,.13,-.13,.14,0,.01,-.03,.11,.1,.16,.18,-.07,.14,-.02,.13,.08,-.17,.17,-.02,-.13,-.1,-.02,-.01,-.18,.23,.19,.12,.06,.1,.2,-.03,.15,.04,-.07,.03,.16,.01,.03,.02,.11,.08,.01,.02,-.02,-.1,0,-.09,-.03,.05,.05,.14,-.05,-.12,-.15,-.07,-.02,-.03,0,0,.11,.03,-.06,.13,.13,-.07,.01,.01,-.04,.05,.01,.11,.13,.04,.13,.13,.11,.04,.13,-.1,-.08,.01,.11,0,-.13,.05,.07,.11,.05,.15,.15,.15,.07,.05,0,-.01,.14,-.05,.06,.03,.1,-.08,.01,-.06,-.2,.16,.01,-.03,.07,-.05,-.06,.14,-.09,.12,.09,.03,.38,.17,.01,-.01,-.14,-.03,-.07,.11,-.02,.12,-.01,-.05,.09,.1,.16,-.02,-.02,.13,.22,.17,.13,.07,0,-.03,-.1,-.02,.17,.13,-.05,.08,-.1,0,-.03,.15,.11,.14,.16,.14,.06,-.02,.24,.14,.13,.01,.11,-.11,.01,.09,.04,.17,.13,-.03,.11,-.11,.15,.04,.08,.11,.15,-.1,.13,.16,-.09,-.19,-.04,.17,-.11,-.04,-.09,-.04,.16,-.02,.02,.19,-.01,.02,.07,.14,-.03,-.04,.1,.19,.04,.12,-.04,-.12,-.03,-.12,-.08,.01,.28,-.02,0,0,.18,.13,-.13,.12,.2,-.08,-.07,-.08,.13,.01,.03,.18,-.08,.1,.03,.13,.11,.08,.04,.09,.08,.02,.11,-.13,-.01,-.01,.11,.05,.11,.01,.19,-.02,.16,.11,-.01,.12,.16,.23,-.08,.05,.09,.17,.08,.24,.11,.18,-.04,.01,-.01,.13,.21,.14,-.01,.18,-.07,-.14,-.07,.19,.22,.09,.17,.08,.18,.05,.16,.15,-.04,.25,-.01,.12,.14,.14,.05,.15,.12,.17,.14,.03,.12,-.05,.12,-.12,.16,.08,.2,.06,-.03,.2,-.04,.04,.01,.16,.15,.16,.09,-.07,.1,-.04,.13,0,-.02,-.03,.13,-.26,.12,-.03,.18,-.01,.01,.17,.13,.03,.1,.05,-.07,-.12,.04,.13,.01,.14,.13,-.17,.03,.02,.11,-.14,.01,.04,.03,-.09,.07,-.01,.11,-.02,.15,.21,.14,-.04,.21,.05,.09,.13,.02,.19,.12,.02,.06,.03,-.01,-.03,.04,.16,.17,.18,.13,.08,.07,.14,-.01,.01,.07,.02,.13,.07,-.13,.07,.2,.22,-.01,.14,-.14,-.15,.21,.2,-.09,.01,-.05,.12,.13,.12,-.13,-.01,-.08,-.02,.09,0,.04,0,-.1,-.07,.13,.08,.01,.1,.16,.07,-.02,.03,-.04,.16,-.09,-.09,.2,.21,.14,-.01,.13,.15,.19,.01,.09,.13,.15,.18,-.12,-.02,-.07,.07,.16,.02,.22,.16,.12,.14,.01,-.07,.12,.04,-.08,-.02,.07,.21,.21,0,-.19,.16,.05,.17,.07,.17,.01,.01,.16,.11,.01,.03,0,-.09,-.09,-.01,.1,.06,-.16,.17,-.25,.04,.13,-.02,.21,.13,-.01,.07,0,-.01,.01,.02,.11,.06,.06,-.04,.02,.05,.02,-.19,.1,-.04,-.01,.01,0,-.11,.04,-.01,.04,-.06,.06,-.04,-.05,-.11,.23,.09,.04,-.01,.05,.04,-.09,.07,-.1,.15,-.05,.09,-.03,.06,.07,-.12,.21,.1,.13,.04,-.11,0,-.17,.11,.17,.16,.06,.16,0,-.07,0,.14,.1,-.03,-.12,.07,.16,.19,-.19,-.06,.07,-.04,.09,.11,-.01,.11,.02,.07,-.01,.11,.16,.02,.02,-.19,.19,-.08,.1,.11,0,.09,.01,.02,.01,.11,.08,.17,.1,.13,.1,.18,.09,.03,.16,0,.01,-.01,-.04,.03,.01,.01,.18,-.04,.1,.12,.13,.04,.16,-.03,.25,.19,.16,-.04,-.13,-.16,-.03,.07,0,.15,.01,.14,.09,-.08,-.01,0,-.05,.09,-.07,0,.12,.16,.15,0,.13,-.01,.06,-.05,-.02,-.06,.13,.17,.12,.02,.21,.13,-.07,-.07,.16,.16,.09,.02,.14,.2,.07,-.09,.1,.19,-.02,.19,.05,.13,-.03,-.04,.17,-.02,.15,.04,.25,-.03,.06,.03,0,.09,.06,.03,-.04,.16,.18,.1,.03,.14,.07,-.03,.08,.05,.18,.03,.09,.13,-.09,-.02,-.07,.09,.15,.25,.04,-.01,-.04,.13,.13,.23,.02,.07,-.01,-.01,.13,.14,.08,.04,.1,.17,-.04,.04,.08,-.1,.14,.24,.18,.14,.05,.03,.01,.12,-.08,.06,.02,.13,.12,-.07,.17,-.03,.09,-.03,.11,.15,-.03,-.01,.18,.05,0,.23,.16,.08,-.03,.09,1,.13,.01,.04,.06,-.02,-.03,.13,.15,.05,.1,-.01,-.09,-.08,.14,.16,.1,.16,-.19,-.03,.24,-.01,-.11,.13,-.06,0,.19,-.09,.11,-.11,.09,.09,.09,.01,.09,-.01,.02,.12,.18,.19,0,.14,.02,.15,.01,-.02,.1,.1,.08,.03,-.11,-.06,-.03,.12,-.1,.04,.07,-.03,.09,.12,.12,.06,.06,.18,.17,.07,.05,.16,.04,-.19,-.06,.01,.06,-.05,.1,.14,.01,.03,.13,-.07,-.07,.01,-.01,.03,.18,.13,.01,-.12,.26,.04,-.07,.12,.1,-.02,.14,.02,.05,-.04,.15,.04,.18,.03,-.09,.01,-.2,-.14,.11,.07,-.01,-.14,.12,.02,-.02,-.14,.19,-.07,.11,0,.04,.12,.14,.08,.12,.03,.17,.15,.02,.12,.08,-.01,.15,.04,.12,.11,.12,-.01,-.11,0,.09,-.03,.05,.07,.08,.05,-.02,.04,0,.01,.06,.1,.01,-.02,.03,-.03,.03,.11,.13,.15,.16,.2,.12,.12,.05,.03,-.08,.15,-.02,.05,.08,0,.09,.16,.06,.07,-.03,-.1,-.01,.13,.11,.01,.21,-.07,.09,-.16,.07,.09,.21,.25,-.04,-.04,-.06,-.04,0,.06,-.14,-.14,.14,.03,.08,.11,.15,.07,.19,-.01,-.01,.04,.11,.12,.06,.01,.17,.04,.02,-.11,.15,.09,.13,-.05,.01,.17,.08,.12,.1,.15,-.06,-.07,.03,-.07,.02,.13,.04,.01,.12,.14,-.02,0,.14,.05,.07,0,.04,.1,-.21,.14,.14,.14,-.15,.18,.09,-.04,.16,.03,.16,.12,.03,-.03,.07,.04,.16,.07,-.11,.14,.2,-.11,-.12,-.03,.12,-.1,-.04,.13,.08,.04,.04,.1,.15,.12,.05,.14,-.04,.06,.03,-.05,-.06,.1,.08,.03,0,.18,.17,.09,-.13,-.25,.12,.16,.03,-.05,.03,.17,.19,-.06,.22,.06,-.2,.17,.21,.11,.13,.17,0,.07,.13,.08,.18,.13,-.05,.02,.03,.23,.06,.2,.03,-.04,.18,.19,.12,.2,.12,.02,.02,.05,-.03,.08,-.04,.1,-.1,.1,.14,.15,.07,.11,.19,-.02,.07,-.08,.02,.05,.13,-.14,-.01,.12,.05,.03,-.05,-.06,.01,.11,.15,.13,.21,-.07,0,-.1,-.01,.08,-.08,-.09,.13,.04,.12,.21,.08,.13,.07,-.14,.12,.15,0,.06,.1,-.03,-.13,.09,-.09,.12,.22,0,.18,0,.15,-.23,.14,-.17,-.09,.08,-.14,-.14,.13,.13,.11,.16,-.02,.05,.01,-.2,.09,.13,.19,.09,.18,.19,-.07,.03,0,.17,-.05,-.07,.16,.02,.14,.26,.04,.2,-.03,-.12,0,.21,-.01,-.11,.09,.17,.11,.13,-.07,.02,.04,.04,.03,-.01,.12,-.05,0,.2,-.1,.1,-.08,.1,.03,.08,.13,-.01,-.09,.13,-.11,-.08,-.03,-.08,-.04,-.01,-.27,.1,-.08,-.08,.13,.18,.12,-.01,.11,.06,.06,.13,.11,.18,.08,0,.16,.2,0,-.03,-.03,-.14,-.15,-.14,.13,.14,.04,-.01,.12,.01,-.06,.07,-.02,.2,.05,.07,.04,-.04,-.1,.05,.08,.08,.08,.07,.07,.06,.01,-.1,.15,-.01,.17,-.06,.03,.11,0,.14,.09,.18,.18,-.07,.01,.15,.17,-.03,0,-.05,.18,-.03,-.07,-.03,-.08,-.06,-.03,-.05,.25,-.07,.15,.1,.05,-.06,.14,.14,-.11,.09,.03,-.05,-.11,-.03,.16,.13,.14,.12,-.07,.14,.17,.12,.08,.17,-.07,.12,.18,.16,-.01,.11,.07,.14,-.01,.12,.15,.18,.06,-.14,.21,.16,.13,.11,.01,.09,.15,.15,.11,.1,.11,.09,-.12,.12,.04,-.06,.11,.2,-.01,.03,.21,.12,.18,.09,.2,.17,.18,.09,-.17,.06,.29,.02,-.02,-.04,.12,-.08,0,.03,.19,-.11,.11,.07,.04,-.02,-.02,-.03,.14,.05,.02,.21,.15,.17,.06,.13,.04,-.07,.02,.1,.12,-.03,-.05,.07,.17,.08,-.04,.13,.14,.16,.06,.13,.05,.1,.11,-.01,.07,.02,.01,-.04,-.13,-.02,-.18,.14,.16,.18,.13,-.09,.04,.13,.07,.13,.06,-.15,.05,.15,.11,-.06,.13,.14,.07,.24,.15,.13,.1,.11,.07,.06,.08,.21,-.06,.11,-.02,.05,-.04,-.02,.13,-.13,-.07,.12,.07,-.09,.11,.17,.02,.06,.16,-.09,.13,.15,-.03,.16,.03,.16,.02,-.05,.11,.15,-.06,.13,.15,.08,.01,.03,.13,.11,.2,.18,.05,-.22,.03,.16,.16,.05,-.07,0,-.11,.09,.14,.01,.19,.08,.14,.11,-.14,0,.13,.05,-.01,.02,-.12,-.11,.22,.13,.06,.09,-.03,-.01,.06,.14,.17,-.01,.09,.06,.04,.12,.16,-.07,-.07,.11,.09,.15,.12,.15,.18,.11,-.04,.1,-.15,.15,.2,.14,-.19,.14,.06,.24,-.07,0,.16,.11,.18,.06,.13,.15,.08,.07,.12,.05,.17,-.14,.14,.16,.15,.06,.13,.04,.15,.13,.2,-.1,.15,.01,.1,-.01,-.09,.19,.07,.12,.14,.16,-.24,.1,-.02,.15,.01,.05,.02,.1,.16,.08,0,.16,0,.11,.04,.08,.01,.12,.01,.04,.13];export{a as rvalData};
