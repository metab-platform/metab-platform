const a=[-.07,-.1,-.11,.05,.02,-.06,.01,-.05,.03,.05,-.17,.03,.19,.04,-.12,.06,-.19,-.05,.06,.14,-.03,.16,-.06,-.15,-.1,-.07,.08,-.12,-.09,.05,.05,.07,-.02,-.02,0,-.03,-.1,-.12,.02,-.09,-.04,-.01,-.14,.15,.13,-.1,.01,-.09,.04,-.06,-.02,.05,.05,-.16,.02,-.19,-.04,-.04,-.01,-.03,-.18,-.01,-.13,-.07,.09,.16,-.04,-.12,-.09,.09,-.14,-.06,-.11,.16,-.04,-.15,-.05,-.15,.02,-.04,-.02,-.08,.05,-.03,.09,.13,-.06,.21,.06,-.06,-.05,.12,-.15,.06,-.07,.09,-.09,-.03,.27,-.09,.13,-.13,.04,.11,-.04,0,-.02,.01,-.12,-.01,-.01,.03,0,0,.05,-.01,-.05,.13,-.03,-.06,.1,.07,-.12,.08,-.01,-.09,-.03,.18,.04,-.07,-.03,0,-.01,-.09,-.05,.09,-.07,.13,.02,.02,-.08,0,-.05,-.09,-.1,-.03,0,.1,-.12,-.14,-.14,-.13,-.06,-.05,-.11,.01,.02,-.09,-.1,-.15,.08,.03,.07,-.02,-.1,-.04,-.02,.03,0,-.06,-.05,.03,.01,.11,.01,.05,-.07,.08,.02,-.11,0,-.06,-.03,.02,-.02,.07,-.15,0,-.04,.16,.01,-.1,.01,-.09,-.11,-.12,0,-.01,-.19,.14,-.17,-.11,-.06,-.11,-.12,-.01,.04,.04,-.13,-.13,-.07,-.08,.01,-.09,-.02,-.13,-.04,-.1,.02,.1,-.03,.02,.09,-.12,-.03,-.07,-.07,.03,.02,.17,.05,.04,-.06,-.05,.08,-.09,-.09,-.13,.13,-.09,-.05,-.05,-.04,-.01,-.14,-.12,-.05,-.03,-.03,.32,.02,.13,0,.21,-.02,.03,-.01,-.05,0,.03,-.07,.12,-.14,-.05,.04,-.01,.11,-.03,.06,-.11,.05,.02,-.09,-.1,.08,-.04,.05,-.12,-.17,.08,-.03,.01,-.15,.1,.09,-.23,.05,-.09,.07,.16,.07,-.01,-.09,-.06,.08,-.1,-.11,-.12,-.12,-.14,-.12,0,.04,.02,.03,.11,.07,-.1,.08,-.14,-.04,.13,.08,-.04,.17,-.11,-.04,-.01,-.12,.06,-.04,.12,-.12,-.09,.09,.09,-.08,.22,.06,.05,.14,-.04,-.04,.08,.14,-.05,.12,-.11,-.08,.02,-.15,-.04,-.03,.07,-.1,-.08,-.05,.01,-.13,.02,-.09,-.03,-.04,.05,.02,-.12,.02,.11,-.07,-.01,-.08,-.14,.04,.05,-.08,-.01,.11,-.07,-.04,-.1,.11,-.16,-.05,.03,-.12,-.01,.04,-.06,.05,.01,.04,-.11,.03,-.05,.07,.03,.09,.11,-.08,-.04,-.12,.16,.02,-.01,-.05,-.03,.08,.13,.19,.04,.13,-.03,-.09,-.02,.03,.07,-.02,-.09,-.06,.04,-.06,.02,.18,-.11,.07,.01,-.02,.05,-.01,.06,-.04,-.04,.08,.05,.08,-.1,-.02,0,.03,.1,-.05,.07,-.06,-.04,-.03,-.1,-.08,-.08,-.08,-.08,.03,-.05,-.03,-.08,-.2,0,-.05,-.06,-.02,.09,-.21,-.12,.07,.02,.05,.02,.07,-.1,.09,-.07,-.1,-.11,.02,-.08,-.04,.02,.07,-.04,-.01,-.16,-.04,-.09,-.17,-.03,.01,-.13,-.24,-.21,-.1,.13,-.09,-.13,.06,-.11,-.22,.09,.03,-.05,.03,-.05,-.12,.09,-.05,.11,-.07,-.07,.09,-.13,0,.01,-.09,.14,.01,-.12,-.08,.02,.09,-.14,-.06,-.1,-.03,.17,-.07,-.03,-.16,.19,-.05,-.17,-.07,-.03,.11,-.04,-.05,.07,.01,-.05,-.07,.06,-.05,-.19,-.09,.09,-.11,-.07,-.16,-.07,.01,.06,.12,.1,.03,.03,.09,.05,-.02,.03,-.05,.05,-.06,.02,-.05,-.09,-.15,-.1,-.08,.07,.09,-.03,.04,-.16,-.03,.19,.13,-.05,.01,-.07,-.15,-.06,-.01,-.06,0,-.08,-.17,-.09,.08,-.07,.16,.13,.01,0,-.04,-.08,-.01,.03,-.09,-.1,-.06,-.07,.11,-.08,.04,-.1,-.17,-.08,0,-.03,-.1,-.05,0,-.2,.01,-.06,.01,-.03,.03,.1,0,0,0,.02,.05,-.12,.15,-.1,-.03,-.07,-.04,-.09,.07,-.17,-.1,.01,-.08,-.12,.09,0,-.19,.04,.02,-.12,.05,.01,-.16,-.07,.07,-.02,-.13,-.07,-.12,.04,-.15,-.09,.09,-.13,-.01,-.01,.13,-.07,.18,-.06,-.05,.01,0,-.12,-.12,.02,-.05,.07,.01,.02,.01,-.08,-.06,-.01,-.02,-.07,-.04,.02,-.09,-.12,-.13,-.17,-.04,.06,.05,.05,-.09,-.06,0,-.18,-.08,.1,-.04,-.06,.09,-.13,.06,-.05,-.11,.01,-.13,-.02,.1,.12,.04,.01,-.13,-.04,-.08,-.05,0,-.06,-.12,.02,-.05,-.25,0,0,-.11,.08,-.12,-.01,-.17,-.13,.05,.09,.02,.09,.07,-.05,-.14,.03,-.09,.05,-.06,.04,-.1,.06,-.11,-.03,-.06,0,-.05,.09,-.04,-.05,-.09,.2,-.08,-.19,-.09,-.01,.01,.08,-.02,.06,-.05,-.14,.09,-.11,-.14,.1,.06,.06,.01,-.03,.06,.01,-.1,.08,-.14,.06,-.1,-.07,.04,-.2,-.04,0,-.02,-.01,.11,.05,0,-.08,.01,-.01,-.05,-.11,-.04,-.04,-.02,.05,-.03,-.04,-.03,.03,0,-.15,.19,.06,.18,0,.03,-.09,-.05,-.03,-.09,-.05,.04,-.05,-.11,-.1,.05,-.08,-.16,-.02,-.16,.21,-.03,-.05,.06,.04,-.04,.24,.02,-.05,.1,.1,-.05,-.06,-.13,-.02,-.04,-.01,.02,-.08,-.1,-.07,-.06,-.02,.12,-.06,-.08,.13,.14,.11,.11,-.06,-.17,.02,-.1,-.06,.15,-.02,-.11,-.07,-.04,.11,-.15,.03,.13,.14,-.07,-.01,.06,-.07,-.03,.13,-.14,.04,-.12,-.14,.01,.01,.09,.12,.06,-.13,.01,-.05,.07,.04,.15,.01,.08,.01,-.11,-.1,.09,-.03,.12,-.25,-.13,-.09,.03,.02,-.06,-.02,-.01,-.11,-.04,.18,.08,-.1,-.12,.08,-.13,-.09,-.11,-.06,-.09,.2,-.14,-.1,-.05,-.15,-.01,-.04,-.02,-.03,-.06,.05,.01,.09,-.06,0,-.2,.03,-.01,-.02,.04,-.05,.1,-.13,-.01,0,-.03,-.1,.09,.04,-.1,-.06,.05,-.01,-.04,.09,-.07,1,-.02,0,-.09,.08,.1,-.09,.02,-.09,-.1,-.09,-.09,.06,-.11,-.16,.09,.05,-.05,.05,-.04,.13,-.01,.02,-.09,-.11,-.06,-.11,.06,-.09,.15,.01,.09,-.05,.2,.08,-.12,.01,0,-.27,.04,.11,-.01,-.16,-.12,-.04,.14,-.09,-.13,-.03,.05,-.17,-.11,-.06,-.18,-.02,-.02,-.1,.02,.01,-.14,-.1,-.04,-.03,-.08,-.07,.02,.07,-.2,.05,-.1,-.1,.15,-.09,-.03,-.08,-.05,.08,.01,-.03,-.23,.06,.12,-.02,-.04,-.07,-.07,.01,-.01,.15,-.14,.08,-.06,-.01,-.06,-.08,-.08,.05,.08,-.13,-.07,-.03,.07,-.06,-.07,-.06,.03,.04,-.17,.04,0,.04,.01,-.04,-.15,-.24,.11,-.03,.12,-.05,-.07,.1,-.04,-.1,.13,-.14,.01,-.03,-.05,.03,.04,-.2,0,-.06,.11,.03,-.04,-.02,.23,-.13,-.15,0,-.02,-.07,-.09,.14,-.13,.06,-.16,-.02,-.18,.03,.18,-.06,-.09,.13,-.17,.2,-.08,-.04,-.03,.07,-.11,-.05,.02,.08,-.02,-.09,0,-.03,-.1,.07,-.11,.17,.21,.03,-.09,-.06,.12,-.1,.1,-.07,-.04,0,-.01,-.13,-.1,-.02,-.07,.06,-.12,.01,-.02,-.09,.05,-.01,-.12,.08,-.11,.03,-.11,.07,-.12,.16,-.06,.01,-.03,-.02,-.03,-.09,-.09,-.02,-.06,-.06,-.07,.11,-.03,.01,.09,.06,-.07,-.11,-.03,-.11,-.01,-.08,.11,-.09,-.08,.04,-.1,-.1,-.04,-.14,.04,-.11,.05,.02,-.08,-.11,-.08,-.06,-.03,.07,.02,0,.05,-.02,0,-.1,-.07,-.09,.07,-.07,-.05,.01,.04,.08,-.08,-.09,.02,-.09,-.05,.06,-.02,-.08,-.09,-.14,.03,-.06,.04,-.04,.06,-.05,-.08,-.1,.08,-.11,-.01,.1,0,-.06,.04,.04,.02,-.05,-.1,-.07,-.08,-.04,.24,.04,.05,.03,.14,.1,-.16,-.07,-.01,-.24,.01,-.01,.01,-.08,-.07,-.03,-.14,-.01,-.06,-.01,-.04,-.18,-.14,-.16,-.07,-.02,.15,0,0,-.03,.04,.11,-.09,-.03,-.04,-.01,-.05,.04,.07,.01,.11,.07,-.21,-.12,-.12,-.14,-.06,-.1,-.06,-.11,-.14,-.07,-.04,-.05,-.03,-.06,-.26,.05,.13,-.02,-.02,-.05,-.07,-.01,.17,-.06,-.09,-.05,.11,.04,.04,0,.02,-.03,-.1,-.09,-.06,.02,-.01,-.03,-.07,.08,-.08,.03,.04,-.02,.04,.16,0,-.13,-.18,-.05,-.03,0,-.06,.02,.16,0,.14,.13,-.02,-.09,-.02,.12,.07,-.14,.11,-.1,-.01,.08,-.05,-.07,-.08,-.17,-.2,.16,.1,-.03,-.06,-.06,0,-.06,.06,.05,-.1,-.06,-.13,-.13,.13,-.06,-.01,-.08,-.04,-.08,-.12,-.07,.08,-.02,-.03,-.09,-.17,.02,-.05,-.13,.01,-.07,-.12,-.05,.01,-.05,.03,.06,-.01,-.02,-.01,.01,.01,-.02,-.1,-.17,.04,0,-.05,-.13,-.08,-.08,.08,-.03,-.07,-.05,-.03,-.06,-.05,.13,-.09,.08,-.07,-.13,-.04,-.16,.01,-.07,.1,.01,-.09,-.1,-.05,.09,-.02,-.13,-.04,-.02,-.1,.05,-.1,.21,.06,-.09,-.15,0,-.09,.12,-.16,-.07,-.04,-.11,-.11,0,.01,-.1,.07,-.1,-.07,.16,-.01,-.08,.01,-.04,-.06,-.09,-.05,.08,.13,-.12,.04,-.01,-.01,-.07,-.11,-.18,.02,-.03,.21,.08,.08,.09,-.1,.07,-.07,-.11,-.12,.11,.01,-.07,.01,.18,-.02,.21,-.08,-.02,-.04,-.09,-.03,-.14,.08,-.07,-.19,-.02,0,-.04,-.01,-.09,-.1,-.04,.06,-.09,.02,.03,-.01,-.03,.01,-.11,0,-.14,.1,-.08,-.13,-.04,.13,-.14,-.14,-.05,.08,-.03,-.16,-.04,.09,-.14,.13,-.04,.02,-.06,-.08,-.05,0,-.07,.1,-.06,-.09,-.09,-.02,-.04,-.01,.12,.08,-.05,0,-.03,-.1,.1,-.05,-.06,-.04,-.03,-.07,-.04,-.12,-.1,-.1,.06,.17,-.03,.02,.01,.02,.13,-.05,-.14,-.05,-.02,-.03,-.12,-.14,-.03,-.08,.08,-.13,-.01,.04,-.06,-.02,-.11,-.09,.16,-.13,-.08,.01,-.02,-.06,-.24,-.04,.09,-.11,-.11,.12,-.02,-.15,.07,-.12,-.12,-.1,-.05,-.06,-.07,-.12,.05,.12,-.11,-.07,-.03,.01,-.07,-.13,-.13,.13,.12,.14,-.07,-.16,-.15,.09,.14,-.07,-.11,-.15,-.03,-.05,-.07,-.13,-.15,-.02,-.05,.03,-.09,-.12,-.09,.07,-.05,-.03,.07,-.02,-.15,-.02,.09,-.04,-.01,-.02,-.23,-.15,-.03,-.02,-.1,-.14,-.05,-.15,-.05,.09,-.08,.06,-.03,-.01,.25,0,-.11,-.16,-.01,.07,-.17,.09,.08,-.18,-.09,-.09,.04,-.07,0,-.01,-.09,0,.01,-.04,-.09,-.13,-.01,.05,-.08,.03,-.05,-.03,.06,-.09,.1,-.11,-.12,-.02,-.06,.01,-.1,-.13,-.08,.01,-.12,-.08,-.02,-.05,-.07,.07,.16,.32,-.02,-.05,-.14,.09,-.05,-.12,-.14,-.13,.01,-.02,.1,-.1,.09,-.08,-.11,.18,-.01,-.08,-.08,.04,-.07,-.1,0,.02,-.1,-.13,.05,-.1,.03,.02,-.29,-.22,-.04,.12,.06,.09,-.01,.05,-.1,-.04,-.21,.04,.14,-.15,-.08,-.09,.29,.11,.25,-.13,.15,-.06,.1,-.04,-.03,-.18,-.05,-.06,-.09,.06,.1,.05,.08,.01,.21,-.1,.04,.25,-.01,-.09,-.22,.12,-.1,.06,-.14,-.09,-.04,-.07,.09,-.06,-.02,.05,.12,.05,-.07,-.03,-.06,-.04,-.17,-.05,.07,-.04,.01,-.03,.04,-.1,0,-.01,-.08,-.04,-.07,-.08,-.1,-.03,-.11,.02,.03,-.04,-.01,-.09,-.02,-.06,-.18,-.15,-.08,-.16,-.03,-.07,-.11,-.04,-.08,.01,-.1,.03,-.19,0,.1,.05,-.1,-.13,-.03,.01,.05,0,-.04,0,-.15,-.09,.27,.14,-.09,-.08,-.11,.15,-.14,-.1,-.08,-.05,-.03,-.03,.08,.08,-.07,-.04,-.02,-.06,.07,.02,-.07,.02,-.11,-.06,-.02,.16,0,-.04,-.17,.1,.05,0,-.05,-.12,-.06,-.05,.07,-.03,.14,-.09,-.01,-.07,-.04,-.03,-.1,.14,-.14,-.2,.05,.1,-.04,-.1,-.07,-.04,-.03,-.04,.11,0,0,-.03,-.09,.01,-.18,-.04,-.02,.02,-.15,-.06,.02,0,-.14,-.08,-.09,.08,-.07,-.08,-.06,-.04,-.08,.02,-.14,.02,.11,-.14,-.05,.12,.11,-.01,-.02,-.06,-.1,.08,-.11,.2,-.13,-.06,-.07,.07,-.13,.08,.05,-.04,.08,-.01,-.02,-.05,.08,-.12,-.09,.03,.04,-.06,-.07,-.07,-.02,-.07,.09,.12,-.14,-.04,-.04,.01,-.11,-.04,-.08,-.12,-.05,.01,-.12,-.01,-.09,-.05,-.07,-.02,.03,.17,.16,-.02,-.08,-.13,-.13,-.04,-.12,-.13,-.16,0,-.1,-.08,.02,-.11,.23,-.02,-.13,-.1,-.06,-.06,.04,-.04,-.08,-.02,-.09,-.04,-.07,.01,.05,-.17,-.02,-.05,-.03,-.1,-.05,-.1,0,-.08,.03,-.14,-.04,-.01,-.1,-.09,-.11,-.05,-.16,-.04,-.09,-.14,-.01,-.04,-.09,-.06,-.06,-.04,-.02,.04,-.02,-.15,-.08,-.05,-.04,-.08,-.04,-.05,-.03,0,-.02,-.03,-.13,-.06,-.11,.12,-.02,-.08,.02,-.08,-.03,-.03,.16,.06,-.12,.08,.03,-.14,-.02,.1,.19,-.02,-.08,-.05,-.07];export{a as rvalData};
