const a=[-.11,-.05,.1,.05,.1,-.11,-.11,-.07,-.06,.18,.03,.08,-.09,-.03,.04,-.12,-.16,.08,.18,-.16,.03,-.01,.04,.05,-.02,-.01,-.01,-.08,-.12,-.03,-.03,-.07,.04,-.05,-.15,-.15,.01,-.01,-.05,.06,.18,.01,.01,-.08,.12,.01,.06,-.16,-.09,.03,.04,-.15,.08,0,.02,.02,0,-.1,.05,.01,-.07,0,-.01,.1,.02,-.01,-.03,0,-.05,0,-.29,0,-.01,.12,.07,.13,.04,-.05,.06,-.08,-.09,.05,.08,-.01,.09,0,-.06,.01,-.07,.01,.09,.12,-.08,-.01,.04,-.04,-.07,-.01,.01,-.05,.05,0,.04,-.1,-.01,.08,-.02,.04,-.03,-.04,-.02,.03,-.05,-.17,.03,-.02,-.02,-.09,-.08,-.05,-.06,.11,.02,.06,0,.01,.03,-.01,-.02,.01,-.1,-.06,.07,.03,-.06,-.2,.02,-.04,-.09,-.14,.01,-.12,-.04,-.04,-.16,.11,-.03,.01,-.05,.03,-.01,.02,-.12,-.1,-.1,.01,-.08,-.03,.09,.02,0,-.03,.01,.07,-.06,.02,-.19,-.06,-.04,-.01,-.11,-.07,-.07,.16,-.06,-.13,.15,-.03,-.02,-.01,-.07,-.08,.1,.12,-.03,-.05,-.11,-.15,0,.06,-.09,-.1,-.01,0,0,-.02,0,-.01,-.03,-.01,0,-.02,.01,-.03,-.13,.03,.08,-.02,-.04,.1,-.09,-.06,-.03,-.01,-.12,-.12,-.03,-.09,-.15,-.01,0,.05,-.05,-.02,-.05,.01,-.08,-.14,-.07,.06,-.07,-.02,-.01,.12,.12,-.1,-.01,0,.08,-.1,.01,.02,-.09,-.04,-.1,-.06,-.03,.11,-.09,.18,-.01,.1,.05,-.02,.02,-.06,.09,-.01,-.04,.12,-.14,.12,.01,.03,-.02,0,0,-.04,.19,-.04,.01,.06,0,.08,.01,.07,-.09,-.05,.1,-.1,.01,.04,0,.04,-.04,-.04,.02,-.01,.06,-.05,.03,-.03,-.01,-.09,.04,.01,.01,-.09,-.09,.04,-.14,.1,.03,.12,.01,-.02,-.13,-.03,0,.05,.03,.1,-.02,-.2,.07,.04,.03,.09,.07,.19,0,.05,.03,-.02,.09,.01,-.04,.03,-.19,-.01,-.01,-.06,.01,.05,.05,.14,.02,-.06,-.06,-.13,-.02,.05,.1,-.18,.02,.07,.08,-.03,.03,-.04,-.03,-.05,-.03,-.01,.03,.04,-.03,-.04,.1,.15,-.06,-.12,.02,-.01,-.07,.08,-.16,.01,.05,.06,-.11,-.09,.04,-.11,-.06,.08,.08,-.02,0,-.01,-.09,-.11,.01,-.21,-.07,-.15,-.05,.14,-.04,.03,.05,.09,-.09,.11,.11,.03,-.06,.14,.11,-.1,.08,-.03,.07,-.08,.03,.16,.12,.03,-.06,-.06,.14,-.03,0,.05,.02,-.06,.03,-.02,.02,-.08,-.32,.05,-.12,.08,-.03,-.01,.06,.07,-.04,.03,-.06,-.13,-.04,-.17,.05,.1,.03,-.01,.02,-.03,0,.01,-.02,-.04,.12,-.06,.01,.01,-.04,-.1,-.07,-.02,-.04,-.12,.01,-.01,-.09,.02,-.1,.1,.06,.01,-.08,-.03,.05,-.02,-.07,.1,-.04,-.02,.02,.02,-.05,.02,.02,-.02,0,-.04,-.04,-.02,.02,-.01,-.02,-.04,.09,-.04,.04,-.13,.01,.13,.04,.08,-.13,-.07,.05,-.04,.03,.25,.03,.02,-.09,0,.11,-.05,0,-.11,-.02,-.08,.02,.02,-.02,-.21,.01,-.12,.09,-.09,-.01,-.07,0,-.02,-.01,.1,.04,.04,-.01,-.11,-.05,-.04,-.15,-.02,-.08,.02,.1,-.03,-.11,-.15,.13,-.1,-.1,.01,-.01,.13,.12,.03,-.13,-.17,-.12,-.02,.13,-.12,-.08,0,.07,.08,-.02,.11,-.09,-.02,.03,-.06,.06,-.11,-.01,-.14,.17,.08,-.1,-.09,.01,.08,.1,.07,-.05,-.08,.03,.1,-.06,-.01,.07,.03,-.13,.05,.01,-.09,-.01,.01,.08,-.01,-.14,.01,.13,-.02,.05,.03,-.1,-.04,-.04,.17,-.1,-.02,.08,.07,.1,-.17,.06,-.06,.07,-.09,-.35,-.11,.18,0,.06,-.09,.24,.07,.04,-.07,-.06,-.15,-.03,-.08,-.1,.11,.03,.08,-.05,.06,-.03,-.04,.06,.03,.05,-.03,-.04,-.05,-.02,-.01,-.14,-.07,-.04,.03,-.1,-.11,.1,.03,-.05,-.01,.1,0,.03,-.04,-.1,.01,-.05,.06,.04,-.11,.02,.1,.08,.04,.01,.13,.06,-.07,.01,-.03,-.05,-.03,-.02,-.03,.1,-.03,.11,.07,.03,.1,.09,-.31,.1,-.11,.04,-.08,-.14,-.07,-.03,.01,-.01,-.01,-.11,-.08,-.05,.06,-.12,-.02,-.01,.09,.09,-.15,-.01,-.09,-.01,.05,-.16,-.11,-.09,-.01,-.07,-.01,-.04,-.03,.13,-.05,-.07,.17,-.06,.02,-.04,-.02,-.16,-.06,-.02,.09,-.03,.01,.07,-.11,-.01,.1,-.09,.02,0,-.06,-.07,.01,.01,.14,-.11,.09,-.08,-.05,-.13,-.05,.22,0,-.04,.02,.08,-.03,-.07,-.18,0,-.05,.04,.17,-.08,-.07,-.07,.16,.04,-.08,-.05,.12,-.07,.02,.07,.13,.09,-.21,-.04,-.02,.05,-.13,.04,-.09,0,-.07,0,.08,.08,-.01,.02,-.07,.07,-.03,0,-.06,0,-.06,-.04,.08,.05,.04,-.01,-.01,.06,-.03,-.2,.07,0,0,.02,-.01,-.06,-.04,-.07,-.17,.16,.2,.02,-.21,.01,.01,.02,0,.01,-.1,.06,-.01,-.03,-.07,-.12,.15,.08,0,-.03,.16,-.04,.03,.08,.02,.08,.13,-.02,.07,-.05,.18,-.03,-.12,.01,-.03,.11,-.02,.01,.04,-.01,-.1,-.04,.09,.02,-.15,-.08,.08,-.08,-.07,.06,.1,-.07,-.14,.01,.05,-.1,-.08,-.12,.09,-.01,-.14,.01,-.06,-.18,.1,.07,.04,-.08,.18,-.16,-.03,-.03,-.18,.02,-.02,-.03,.02,.02,.01,-.09,-.06,.02,-.06,.04,.04,0,-.07,-.1,.07,-.18,.15,.17,.01,-.12,-.07,.1,-.04,-.19,-.05,-.03,-.01,-.18,0,-.14,-.05,-.14,.09,.1,-.18,-.11,-.03,-.08,.06,-.09,-.04,-.02,-.06,.04,.08,-.13,.06,.02,.05,-.08,.15,-.01,.03,.04,-.04,-.06,-.03,-.02,.03,.04,-.17,-.07,.04,-.12,-.07,-.09,-.06,.03,.01,-.09,-.11,-.02,-.15,-.11,.14,-.01,.05,.06,-.04,-.06,-.02,.02,-.14,.02,.02,.1,.05,-.06,.03,-.12,-.05,.04,.01,-.03,.02,-.14,-.06,0,-.08,.01,-.07,-.11,-.11,-.08,-.03,.09,-.06,-.12,-.01,-.01,-.01,0,-.05,.13,.02,-.01,-.09,.04,.03,.05,0,.14,.15,.09,-.1,-.08,0,-.1,-.05,-.07,-.02,-.14,.04,-.2,.12,-.05,-.05,-.11,-.04,.02,-.05,.08,.05,-.12,.02,-.01,.03,-.19,-.1,.06,-.05,.02,-.05,.24,.01,-.01,.02,-.07,.03,-.07,.01,.04,0,.14,.04,.11,-.01,.04,-.08,.12,-.07,.08,.02,.04,-.06,.22,-.05,-.07,-.04,-.03,-.11,.12,-.08,.07,.02,-.09,-.07,.09,-.06,.02,-.09,-.08,.01,-.16,-.12,.07,0,-.05,.04,-.13,-.1,-.07,.05,-.09,-.08,.12,-.04,-.01,-.06,-.09,-.06,.08,-.04,.09,-.03,-.13,-.04,-.06,.02,-.1,.12,-.06,-.09,.03,-.1,.08,-.05,-.05,0,.03,.03,-.02,.16,-.14,.14,-.14,-.06,-.11,.06,-.07,.03,.04,-.13,.01,-.14,-.12,-.01,.08,.1,-.02,-.06,.05,-.1,-.07,.11,-.04,-.05,-.23,-.03,0,-.11,.04,.03,.02,-.16,-.02,-.04,.15,-.01,-.09,.04,-.03,.02,.16,.05,-.17,-.04,-.22,-.2,-.02,.03,-.15,.08,.01,-.22,-.02,.01,.05,-.03,.1,-.05,-.01,-.01,.04,.02,.02,-.03,.03,.15,-.02,.09,-.22,.11,-.04,-.14,.07,.01,-.01,.07,-.16,-.04,-.16,-.1,0,-.05,-.03,.01,-.05,-.03,-.14,-.04,-.07,.02,.05,0,-.06,.08,.11,-.06,.01,-.05,.14,.01,-.11,-.05,-.07,.01,.19,.01,-.13,0,-.07,-.18,-.18,.05,-.03,-.05,-.01,.09,.03,.11,-.02,-.09,.16,-.07,.07,-.06,-.1,-.16,.01,-.04,.03,-.14,-.18,-.02,.09,-.05,-.04,-.12,-.03,.07,-.13,.01,0,-.07,-.1,.04,-.08,.05,-.1,.03,-.02,-.09,-.06,-.03,-.02,-.08,-.04,-.11,-.05,.09,-.04,-.01,.09,-.06,-.08,.1,-.11,-.09,-.04,-.11,-.1,0,-.07,-.23,.08,.08,.07,.03,.15,.01,-.02,-.01,.12,.05,-.13,.09,0,.04,-.06,-.06,.04,.04,.08,.1,-.06,-.03,0,.05,-.04,.07,-.02,.01,0,-.06,.03,-.02,-.04,-.1,-.13,-.07,.11,-.07,.06,.06,.09,.02,.04,.03,.05,.01,.01,0,-.12,.02,-.15,-.07,-.03,-.02,-.09,-.04,-.03,-.09,-.03,-.21,0,.02,-.11,-.16,-.06,-.07,-.05,-.03,.03,-.08,-.06,0,.05,-.09,-.1,-.09,.13,-.14,-.05,-.09,.03,.09,-.11,-.07,-.01,-.12,-.07,.06,.08,-.05,-.14,-.07,.16,-.08,-.12,-.1,-.11,.14,-.02,.04,.13,.05,-.02,-.05,-.07,-.07,-.07,-.01,.01,-.13,-.03,-.05,.02,-.02,-.03,.13,-.02,.06,-.04,.04,-.16,.01,-.05,-.13,.01,.07,-.1,.11,-.13,.01,.09,-.24,-.09,-.19,-.06,.01,-.18,.13,.09,-.01,.02,.05,-.18,-.04,-.13,.08,-.02,.11,.04,-.05,-.21,-.13,-.02,0,.1,0,-.04,0,-.08,-.11,-.08,-.07,-.03,-.11,-.07,0,.09,-.04,.04,-.05,-.02,-.19,-.04,.32,-.15,.03,.04,-.23,-.06,-.04,-.1,-.13,.11,-.01,.06,.1,-.05,0,.07,.13,.01,-.06,-.04,.17,.03,-.01,.1,.07,-.04,-.02,0,-.13,.15,0,-.04,.06,-.1,.01,-.12,.14,-.07,.14,.02,-.03,.05,-.03,.05,-.04,.14,-.07,.07,-.07,.21,-.06,-.02,-.06,-.04,-.02,-.03,.05,.08,.07,.1,.05,.11,.06,.02,.12,-.26,-.18,.04,-.15,.07,-.11,-.07,-.02,-.07,-.07,-.01,-.01,.08,0,-.02,.02,-.01,.06,.09,-.02,.05,-.08,.09,-.12,-.13,.19,-.02,-.09,-.01,.07,-.15,.06,-.01,-.05,.01,.06,.05,-.13,.07,-.02,.04,.01,-.02,.1,.01,-.31,.03,.09,-.03,.01,-.19,-.02,-.01,-.04,-.01,.03,.03,.13,.09,.15,.07,-.04,-.01,.08,.1,-.11,.02,-.06,.04,-.08,-.01,-.02,.09,.03,.05,.03,-.11,-.12,-.01,-.05,-.02,.06,.05,-.05,.07,-.06,-.05,.15,.23,-.03,-.08,-.15,-.01,-.05,0,-.01,-.04,-.04,.1,-.03,.03,.04,.12,-.01,.12,-.03,.12,.05,-.04,.3,-.04,.12,.03,.06,-.04,-.01,-.04,0,-.06,-.05,-.02,.09,-.08,.1,-.01,-.05,.08,-.03,-.02,.07,-.06,.03,.04,-.07,-.06,.06,.1,.03,.06,.01,.02,.05,.09,-.06,-.03,.01,-.13,-.03,.09,-.06,-.01,.07,.05,.11,.1,-.07,.16,-.01,-.13,-.04,-.11,0,.08,.01,-.02,-.08,.03,.08,-.01,.29,0,.01,0,-.02,0,.07,.07,-.01,-.08,-.02,.01,.12,.08,-.04,-.03,-.03,-.03,.05,.12,.15,.06,.01,.08,.16,.06,.05,.13,-.21,-.05,-.02,-.01,-.09,-.06,-.01,.05,-.09,.01,-.12,-.02,.02,.02,-.07,-.09,.03,.02,-.02,-.13,.14,-.04,-.07,.03,-.04,.03,.13,-.06,.02,0,.08,-.04,-.04,.01,-.08,.02,-.03,-.06,.02,-.06,.01,-.05,-.11,-.06,.12,.03,.06,.1,.09,.18,-.05,.09,-.05,.09,-.11,0,-.05,.12,-.01,.03,.02,-.04,.01,-.06,-.09,.03,.04,.05,-.04,-.03,-.01,-.01,-.02,0,.05,.13,.05,-.06,.1,.08,-.14,0,-.04,.03,-.06,-.01,.06,-.05,-.01,.03,.13,.06,.02,.02,.08,.04,-.12,-.11,.02,.1,-.09,-.11,-.04,.02,0,0,.08,.04,.1,.06,.14,.01,-.09,-.11,-.19,-.09,0,.08,-.13,-.09,.01,.25,-.03,-.15,.13,-.02,-.03,-.03,-.04,.04,.08,.05,.01,.11,-.16,.04,-.09,.04,-.04,.07,-.06,.12,.09,.05,-.02,-.02,-.07,.08,-.16,-.03,.09,.01,.05,0,-.03,-.1,-.02,-.09,-.02,-.13,.02,.21,-.13,-.03,-.04,0,-.09,.15,.08,.01,-.02,.12,-.05,.13,-.14,-.05,.09,-.08,-.05,-.04,.09,.04,-.02,0,.03,-.12,.05,-.07,-.05,-.05,.04,-.11,.11,.05,-.01,0,.09,.13,.06,.02,-.01,.06,.04,-.09,-.03,-.08,0,-.08,-.09,.05,-.05,-.22,.08,0,.08,-.09,-.08,.08,-.22,0,.01,.08,-.15,.05,.09,0,-.02,-.02,.06,.13,.09,0,.06,-.16,-.12,-.06,-.05,.07,-.03,.01,.04,-.01,.01,-.03,-.03,-.07,-.04,.11,.05,-.15,-.01,.06,-.14,.04,.1,.04,-.04,-.19,.06,-.01,-.14,.08,.01,-.05,-.03,-.02,-.09,.11,-.09,.01,.03,.02,.08,.05,.01,-.01,.17,-.04,-.08,0,.03,.03,-.05,-.01,-.11,0,.08,-.08,.03,.07,-.04,.02,.02,-.01,.03,-.14,.02,-.18,.06,.1,.05,.01,0,.03,.03,-.11,-.02,.04,-.12,.03,.01,-.16,.07,-.05,1,.01,.01,.07,-.01,.06,-.07,-.11,-.04,.06,-.09,-.06,0,-.01,.03,-.04,.05,-.05,-.02,0,-.03,-.01,.01,-.01,-.11,.18,-.01];export{a as rvalData};
