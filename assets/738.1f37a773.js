const a=[.05,-.18,-.16,-.01,-.12,-.02,-.07,.05,-.01,.02,-.07,-.01,-.03,.09,-.11,-.08,-.16,-.07,.12,-.02,-.01,.01,.03,-.08,-.1,-.16,-.02,-.08,-.02,-.09,-.07,.03,-.15,-.1,-.03,-.02,-.21,-.17,-.08,-.18,.04,-.14,-.1,-.04,.1,-.17,.07,-.01,0,-.03,.02,-.14,-.16,-.18,-.05,-.13,-.03,-.07,-.13,-.06,-.04,-.16,-.13,-.01,.03,-.01,-.15,-.15,-.22,.05,-.04,-.25,0,.16,-.15,.03,.02,.01,-.14,.08,.15,-.03,-.1,-.11,-.04,.07,-.09,.15,.15,-.1,.04,.08,0,.02,.05,.15,.04,-.05,.09,.02,0,-.14,-.08,.03,-.09,-.09,-.1,-.04,-.16,-.03,-.07,-.03,-.08,.02,.05,-.21,.13,-.03,.12,-.06,.13,.08,-.01,-.07,-.06,-.1,-.12,.2,.05,-.19,.03,.12,-.09,-.07,-.09,.12,-.03,0,-.08,-.09,-.16,-.15,-.11,-.09,-.14,.17,.02,.18,-.04,-.02,-.12,.05,-.16,-.27,.05,.09,.06,-.16,-.05,-.12,.03,-.11,.01,-.03,.03,.03,-.16,0,.12,-.1,-.11,.01,.02,.14,-.11,0,.09,-.08,.02,-.23,.01,.02,.13,-.16,-.11,.25,-.1,-.29,-.01,.2,.26,.09,-.08,-.02,-.11,-.17,-.05,-.03,-.16,0,-.07,-.06,-.17,.1,-.1,-.02,-.05,.02,-.02,.13,.06,-.11,.06,-.16,-.08,-.06,.07,.06,-.05,-.05,.01,-.04,-.01,-.16,.03,-.18,.05,-.05,-.02,-.02,-.13,.13,-.13,-.11,.08,-.13,-.14,-.14,.05,-.02,-.07,-.07,.05,.05,.05,.05,.05,.07,-.08,.11,.01,.06,-.06,.18,-.12,.05,.03,.09,.01,-.15,-.09,.15,.04,-.15,.21,-.07,.06,-.09,.06,-.13,-.09,-.01,-.2,-.16,-.11,-.03,-.04,-.03,-.08,-.05,.02,-.07,-.07,.2,0,-.13,-.09,-.19,.01,.06,.1,.01,-.12,.03,-.12,-.07,-.06,-.02,.05,0,.02,-.16,.06,-.02,-.08,.03,.02,-.13,.13,-.08,-.06,.05,0,-.1,.12,0,-.03,.03,-.16,-.05,-.11,-.04,-.2,-.17,.01,.04,-.17,.16,-.05,.01,.23,-.06,.03,-.07,-.06,-.12,.05,0,-.01,-.01,-.06,-.07,-.01,.05,-.24,-.15,.08,.04,-.07,.03,-.09,0,-.13,.02,-.01,-.08,-.08,.01,-.08,-.16,-.09,-.03,.04,-.04,.06,.22,-.18,-.19,.03,-.08,0,.13,-.06,.09,.02,-.07,-.05,-.11,-.02,.02,-.12,.09,-.01,-.1,0,.02,.02,.18,-.15,-.15,-.11,.2,-.01,0,-.04,-.17,-.01,.17,.15,-.08,.02,.14,-.09,-.05,.15,.17,-.09,-.11,-.16,-.07,-.1,.07,.14,-.11,.02,.09,-.11,-.11,0,.14,-.03,-.14,-.08,.02,.07,-.18,-.15,-.09,.15,.04,.11,.14,-.05,-.12,.01,-.18,.09,-.16,-.16,-.1,-.06,-.1,-.08,-.07,-.08,.12,-.17,-.11,-.01,.01,-.01,-.13,.15,.04,-.14,.09,0,-.2,-.01,-.03,-.13,-.16,.15,-.01,-.01,.03,.08,.09,.15,-.17,-.12,-.18,-.2,-.1,.06,-.12,-.13,.02,-.19,-.04,-.16,-.16,-.11,.02,-.1,.02,-.02,.09,-.07,-.11,.1,-.04,.03,.09,-.19,-.15,-.05,-.01,-.04,.06,-.02,.12,-.13,-.26,-.16,-.06,.09,-.09,-.21,0,-.1,-.1,-.14,.11,-.13,.07,-.05,-.06,.04,-.1,.07,-.13,.16,.15,-.02,-.16,-.2,-.14,-.05,-.1,-.03,-.01,-.06,-.05,-.1,-.11,.13,-.02,.16,-.08,-.06,.07,.05,-.19,.04,-.01,-.06,-.1,-.19,-.03,-.06,-.21,-.18,-.23,-.06,.04,.13,.01,.02,-.1,-.21,.03,.03,.05,-.09,-.06,.08,.04,-.04,.11,-.2,-.13,-.14,-.12,-.08,-.17,.12,.05,-.04,-.03,.02,-.26,-.07,.03,-.09,-.17,-.17,-.11,-.03,-.22,.05,.12,.07,-.12,.14,.09,-.04,-.08,-.1,.04,0,-.14,-.1,-.03,-.18,-.02,.06,.1,-.15,.03,-.07,-.23,.18,.06,.09,-.1,-.14,.08,.14,-.18,.12,-.13,.09,-.07,.1,-.09,-.06,.21,-.08,.04,.24,.05,-.02,.03,-.03,-.11,-.16,.01,-.05,-.03,-.04,-.03,0,-.14,.09,-.12,.18,-.16,.04,-.05,-.06,.09,-.06,-.19,-.13,-.04,-.14,-.02,.1,.07,-.17,-.05,-.23,.06,-.18,-.08,-.03,.16,-.07,-.15,-.08,-.26,-.11,-.08,-.04,.08,-.08,-.17,.06,-.08,-.02,.17,-.13,-.15,.07,-.09,.06,-.13,-.12,.11,-.03,.02,.14,.14,-.12,.13,-.17,-.02,-.25,.05,-.12,.05,-.06,-.1,-.01,-.02,-.1,-.12,-.02,0,-.13,-.04,-.15,-.02,-.02,.21,.02,.11,.11,.17,0,-.12,-.21,.21,-.06,-.08,-.14,.07,-.02,-.07,-.01,-.06,-.15,-.08,-.07,.03,-.2,1,-.08,.1,-.11,.02,.06,-.08,-.14,.09,-.08,-.21,.03,-.12,-.13,0,-.02,.01,-.18,.14,.09,-.11,-.2,.14,.06,-.03,-.11,.03,-.07,-.15,-.14,.1,-.16,-.07,.13,.09,-.11,-.12,.08,.12,.09,.04,-.19,.07,-.14,0,-.08,-.15,-.17,-.09,-.04,-.02,.14,-.05,.09,.11,-.02,-.18,-.18,.03,-.16,-.13,.15,-.01,.08,-.1,-.02,-.1,-.24,-.05,-.02,.04,.06,.16,-.04,0,-.16,.12,-.08,.08,.18,.03,-.06,-.18,-.11,-.1,.06,-.01,.16,-.17,-.11,0,-.09,.14,.17,-.2,.05,.1,-.07,0,-.06,0,-.16,-.1,-.08,-.1,.06,.08,.07,-.11,-.11,-.07,-.04,.08,-.08,.02,-.14,-.13,-.01,-.05,.01,.1,.03,-.01,-.04,-.19,.08,.14,.18,.08,.15,-.11,-.02,.07,.14,-.02,.26,.03,.18,.05,-.05,-.04,.17,-.07,-.03,-.15,-.08,-.13,-.21,-.03,.05,.07,-.12,.04,-.16,.25,.2,-.05,-.18,.11,0,0,-.02,-.12,0,-.05,-.24,-.23,-.16,-.17,-.1,-.03,-.06,0,-.1,-.08,.03,.11,-.1,-.01,-.03,.01,0,0,.14,.02,.05,-.05,-.11,-.09,-.05,-.22,-.09,.05,.06,-.2,-.08,-.07,-.12,.2,.01,.2,-.15,-.13,-.01,-.01,.11,-.13,-.05,-.06,.04,-.19,.08,-.03,.07,.03,.1,.03,-.03,-.14,-.15,.16,-.11,.04,-.13,-.11,.04,-.02,-.07,.04,-.11,.04,.25,-.04,.01,.16,-.1,.13,-.12,.03,.01,-.01,.03,-.08,-.17,.01,-.01,.04,-.01,.11,.04,-.19,-.15,-.03,-.09,.05,0,.04,-.01,.09,-.04,-.06,.12,.14,.04,.08,.14,.05,-.09,-.11,-.05,-.16,.13,-.13,.02,-.09,.03,-.18,.11,.05,.04,.08,.13,-.07,-.1,.01,-.04,-.05,-.13,.08,-.19,.21,-.15,.08,-.01,.11,-.01,0,.14,-.08,-.16,.12,-.24,0,0,-.17,.03,-.11,.1,.05,-.14,.12,-.01,-.09,.02,-.12,-.05,.1,.07,.09,.09,.03,.15,-.12,-.08,-.09,-.02,-.1,.04,.05,0,-.05,-.17,.03,-.11,-.02,-.04,-.18,-.01,-.15,-.18,.06,-.05,-.16,-.07,.06,-.03,0,-.05,-.19,-.3,.02,.03,-.04,.06,.06,-.14,.05,-.15,-.07,.04,.12,-.17,-.14,.08,.23,.02,-.01,-.16,-.13,-.17,-.12,-.14,.01,.2,.01,.02,.14,.07,.08,.12,-.11,.04,-.12,.09,-.16,.04,-.13,-.01,-.1,-.03,-.19,.05,.13,.13,-.15,-.18,.06,-.11,-.11,-.14,.13,-.1,.18,-.14,.03,.07,.1,-.12,-.13,-.1,-.16,-.04,-.06,-.01,.21,-.06,-.12,-.02,.1,-.15,.03,.01,-.17,-.02,-.08,-.09,.11,-.07,-.18,-.17,-.21,-.08,-.15,0,-.14,.14,-.01,-.09,-.03,-.21,-.1,-.04,-.08,.08,.11,.14,0,-.1,-.08,-.18,-.18,-.01,-.19,-.02,.17,.19,.04,-.18,.07,-.06,-.08,-.1,.12,.03,-.12,-.18,-.15,-.04,-.1,.09,-.2,-.13,.04,-.14,-.12,.11,-.07,-.18,.09,-.02,-.1,-.07,.03,.12,-.12,0,-.14,-.13,-.07,-.04,-.09,.05,.07,-.02,.03,-.16,.11,-.11,-.06,-.04,-.14,-.02,-.13,-.18,-.18,-.15,-.02,-.14,.11,-.04,-.12,-.12,-.11,-.15,-.01,-.14,-.02,-.01,-.02,0,-.05,.06,-.05,.02,-.14,.01,.1,-.01,-.04,-.03,0,0,-.18,-.16,.02,-.11,-.01,-.01,.12,-.09,.03,.01,.04,-.13,.05,-.13,.08,.08,-.13,-.13,0,.04,-.12,.03,-.13,-.17,-.05,.09,.13,.07,-.03,-.06,-.06,-.13,-.04,.01,.04,-.15,-.09,0,.18,-.2,-.09,-.08,-.16,.15,-.09,.12,-.06,-.14,-.01,-.19,-.1,.01,.19,.14,.04,.08,.19,-.15,-.15,-.09,.01,-.06,-.19,.06,-.12,0,-.03,.14,-.03,.06,-.17,-.01,.17,.05,-.09,.05,.06,.05,-.03,-.13,-.06,-.01,-.01,-.06,-.05,.16,0,0,-.06,-.02,-.02,-.07,-.11,.19,.05,.08,.02,-.13,-.01,-.05,0,.16,.05,.07,-.04,.01,.06,.08,.03,-.12,.11,.05,.1,.06,-.05,-.01,-.03,-.06,.01,-.07,-.14,.03,-.07,-.03,-.01,-.19,-.03,.05,-.14,-.13,-.03,.02,.07,-.07,-.2,-.03,-.17,-.07,-.07,.15,.04,-.16,-.12,-.1,.15,-.15,-.17,.07,-.15,-.08,.06,0,-.16,.07,.19,.01,-.15,-.19,-.02,-.15,-.14,.14,.01,-.12,-.02,-.11,-.1,-.08,-.1,-.02,.13,-.02,-.19,.05,-.1,-.02,0,.06,.02,.04,-.09,.11,0,-.04,-.03,-.16,-.14,-.18,.02,-.08,.18,.12,.05,.03,0,-.1,-.11,-.21,.04,0,-.06,.05,.07,.1,.04,-.11,.04,-.07,-.05,-.01,.05,.17,-.02,.11,-.12,-.07,-.07,0,.02,.17,-.09,.01,-.04,.03,-.08,-.11,0,-.08,.04,-.09,-.01,.01,.09,-.11,.01,.06,-.03,-.16,-.04,.08,-.05,-.06,.08,.05,-.07,.17,-.04,-.12,-.08,-.14,.02,.11,.03,-.14,0,-.06,.02,-.15,-.09,-.17,.05,.14,-.06,.02,-.01,-.08,-.15,.01,-.09,-.04,-.17,-.16,.03,-.14,-.12,-.17,-.05,.17,-.16,-.14,.04,-.04,.09,-.08,-.15,-.15,.05,-.1,-.18,-.17,-.14,.05,.12,-.08,-.07,-.02,-.08,-.09,-.08,-.13,.12,-.19,-.14,-.01,-.11,-.11,-.1,.03,-.01,-.06,-.15,.02,.22,-.16,-.01,-.03,0,-.02,-.1,-.11,-.14,-.14,.07,.09,-.1,-.04,-.04,-.18,-.02,-.08,-.05,-.07,.01,0,.06,-.17,-.19,.06,-.01,-.09,.04,-.06,-.09,.06,-.01,-.04,-.16,.05,-.07,.01,-.12,-.08,-.13,.03,-.06,-.03,-.01,.08,-.26,-.11,-.04,-.08,.21,-.03,-.06,-.04,.07,-.06,-.11,-.08,-.03,-.09,-.14,.11,-.07,.15,.01,-.09,.08,.02,-.13,-.13,-.12,.08,-.23,.1,.06,-.17,.08,-.06,.01,.02,-.18,-.13,-.14,-.13,-.03,-.2,-.04,-.13,-.05,.09,-.07,-.04,.04,-.05,.08,-.12,.08,-.15,-.13,.08,-.16,.11,.04,-.08,-.11,-.17,-.22,-.11,.09,.06,-.17,.14,-.1,-.06,-.14,-.15,-.17,.06,-.07,-.07,-.12,-.15,-.09,-.15,.14,.12,-.05,-.1,-.05,.11,.17,-.05,-.06,-.02,-.16,-.12,-.08,.07,-.13,-.13,.16,-.04,0,-.11,-.11,-.01,-.02,.08,-.19,-.02,.06,-.03,-.19,-.12,-.08,.05,.01,-.08,-.16,-.1,.26,.08,.14,-.13,.05,-.22,-.11,-.17,-.1,.08,-.09,-.06,-.12,-.09,.09,-.14,-.01,.08,0,.04,.15,-.01,.07,-.03,.12,.21,-.11,-.09,-.11,.05,-.18,-.18,.08,-.13,.11,-.04,.15,-.05,-.17,-.17,-.17,-.03,-.06,-.02,.06,-.01,-.05,-.11,-.01,-.08,-.17,0,-.03,-.06,-.04,.04,-.1,-.18,-.12,.06,-.04,-.11,.17,-.11,.13,-.04,.06,-.04,-.2,-.11,-.12,-.15,-.22,-.06,.07,-.04,.03,.16,-.11,.04,.08,.04,-.15,-.15,-.07,0,.1,0,.03,-.16,.09,.03,.01,.1,-.15,-.05,-.09,.13,.09,.04,-.16,-.03,-.17,.02,.09,-.04,-.11,.17,.12,-.2,.18,.06,-.04,.06,-.11,-.13,.08,.15,-.01,.03,-.11,.28,.03,-.09,0,-.03,.05,-.14,.1,-.11,.18,-.19,.08,.01,.03,-.06,-.05,0,-.11,-.07,.11,.23,-.1,-.08,-.11,-.09,-.08,.14,.02,-.08,.03,-.03,-.12,-.13,-.02,-.13,-.09,.03,-.08,-.21,0,-.09,.02,-.15,-.16,-.09,.01,.06,0,.02,.08,.05,-.04,.06,.15,-.23,-.17,.1,.08,-.12,.09,.03,-.04,-.06,-.08,.02,-.13,-.03,-.16,.06,0,.06,-.08,-.14,.05,-.06,.07,.06,.05,-.22,-.17,-.13,0,-.16,-.17,-.17,-.13,-.15,.07,.15,.05,-.12,.04,0,-.02,-.03,-.22,-.17,-.12,.06,-.08,.09,-.06,-.19,-.18,-.04,-.05,.15,.05,-.04,-.13,.02,-.05,-.17,-.03,-.19,-.09,-.05,-.01,.08,-.06,-.02,.07,-.11,-.22,-.17,-.08,0,.07,-.05,-.26,.01,-.11,0,-.13,-.07,-.11,-.09,.06,-.09,-.12,-.19,-.12,-.11,-.16,-.15,-.04,.06,-.11,-.14,-.09,-.04,-.2,-.14,-.22,.01,-.18,-.11,.02,-.03,-.14,-.13,-.12,-.18,-.09,.05,-.1,-.19,-.14,.11,-.19,-.11,-.17,.09,.14,-.07,-.12,-.12,-.16,.11,-.14,-.01,.04,-.11,-.1,-.1,-.2,-.13,.16,-.03,.04,.18,.04,.01,-.08,-.02,-.03,-.17,-.09,.16,-.03];export{a as rvalData};
