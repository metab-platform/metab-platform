const a=[.11,.04,.03,.12,-.02,0,-.04,-.03,-.06,-.03,-.02,-.2,.03,-.05,-.02,.13,.04,-.09,-.21,-.06,-.11,.01,.03,-.04,-.04,-.07,-.04,-.08,.14,-.06,-.1,-.03,-.09,.07,.03,-.01,-.05,-.07,-.04,-.1,.05,-.03,0,.1,.01,-.15,-.18,-.02,.08,-.29,-.12,.06,-.1,.05,-.13,-.09,-.2,.03,.03,-.04,-.07,-.14,0,.03,.04,.11,-.05,-.03,.02,.06,.23,-.13,-.03,.27,.01,.17,.07,-.04,-.05,.18,.24,.02,.02,-.02,-.31,.08,.01,.02,.11,.02,-.04,-.13,-.13,-.04,-.17,-.11,.01,.14,-.1,0,.07,-.03,-.22,.15,-.14,-.13,.09,.07,-.04,-.04,-.12,-.36,-.18,.07,-.24,-.06,.08,.05,.02,-.04,.12,.06,-.05,.05,-.01,-.18,-.01,.19,.11,-.07,-.04,-.08,-.02,-.2,.06,.08,-.11,.04,.01,.21,-.06,.13,-.04,-.02,.09,.15,.02,-.05,.02,-.12,-.01,0,.08,-.15,-.05,-.07,.12,-.07,.13,-.04,-.05,0,.11,-.14,-.04,-.05,0,.04,-.05,.02,.02,.09,-.01,-.05,-.01,.17,0,-.03,-.01,-.1,.11,-.02,.2,-.04,-.03,.06,.08,.1,-.06,-.05,.11,.03,-.24,-.03,.03,-.05,-.01,.08,.04,-.12,.01,-.13,-.06,.09,-.05,-.04,-.01,-.03,-.04,-.09,-.04,-.06,-.07,-.07,.03,-.02,-.13,0,.1,-.1,.13,-.14,-.11,0,.01,-.05,-.03,.01,-.12,-.05,-.13,.29,-.12,-.01,-.04,0,.04,-.13,-.15,-.03,-.22,-.02,-.12,-.1,-.04,-.03,-.13,-.04,.2,.09,-.07,-.08,-.18,-.07,-.04,-.08,.12,.08,-.11,-.01,.08,-.1,.03,-.06,.15,-.17,.22,-.06,-.08,-.05,-.17,-.1,-.04,.01,-.07,.04,.1,-.07,-.04,.12,-.1,-.1,.07,.11,-.09,.02,0,-.08,-.06,-.08,-.08,-.07,-.08,-.08,-.06,.03,-.07,0,.2,.08,-.06,-.07,-.14,.04,-.14,.05,-.03,-.11,.01,-.09,-.02,.07,.01,.16,.01,.07,.04,-.14,-.04,-.16,-.01,-.35,-.04,-.03,-.11,-.06,-.04,.19,-.19,.01,.17,-.07,-.14,.17,0,0,.19,.09,-.08,-.11,-.13,.02,-.11,-.03,-.07,-.04,-.17,.05,-.08,-.1,-.03,-.04,.07,-.08,-.07,.03,.05,.32,-.05,.01,-.03,.24,0,.12,.04,.17,.07,-.09,.01,.11,.13,.06,.01,-.02,.04,-.2,-.07,.05,.11,.04,.11,-.14,-.1,.19,.06,-.11,.25,-.03,-.09,-.13,-.07,.05,-.09,0,-.07,-.03,-.11,.04,.17,-.06,-.28,.05,-.01,0,-.01,.02,.04,-.03,.05,.06,-.03,.03,-.01,-.07,-.16,.15,-.04,0,-.09,-.04,.21,-.1,-.03,.01,.07,0,-.1,.03,.05,-.18,-.1,.02,-.04,.08,.02,0,.05,-.02,-.05,.02,0,-.03,-.04,-.04,-.29,-.05,-.08,-.04,-.1,-.08,-.02,-.04,.09,.01,-.03,.24,.05,-.04,.05,-.13,.06,-.09,.13,-.01,.1,-.08,.08,-.22,.14,.06,.07,-.05,.07,.11,-.03,-.06,-.06,-.08,-.03,-.1,-.01,-.03,.02,-.02,-.25,.07,-.05,-.05,.08,.04,-.22,-.19,.05,-.08,.01,-.05,-.15,-.07,-.13,-.18,-.02,.23,-.08,.11,-.08,.08,.11,-.03,-.1,-.04,0,-.12,-.05,.08,-.17,.19,-.07,-.09,-.03,.09,.18,-.03,-.16,.12,.06,.03,-.16,.08,-.21,-.11,-.04,-.14,-.02,-.09,-.01,.08,.01,.06,.2,-.22,-.24,-.11,-.05,-.09,-.03,-.01,.05,-.01,-.18,.1,-.03,-.07,-.04,.01,-.12,-.04,.2,-.11,.14,0,-.06,.05,-.11,-.02,0,-.01,.09,.22,-.11,-.11,-.08,.01,.02,-.15,0,-.02,.13,-.06,.04,0,-.02,-.07,.03,.08,-.11,-.07,-.03,.03,.04,-.05,.06,-.04,-.13,-.08,-.01,.14,-.02,-.01,.03,-.02,-.07,.01,.01,-.01,-.05,.05,-.24,-.03,.05,.08,0,.01,-.08,.02,-.04,-.19,-.05,-.08,.03,.04,-.07,-.16,-.04,-.05,-.14,-.15,-.01,.06,.01,-.02,-.13,-.07,-.09,.01,-.1,-.23,-.06,-.17,-.08,-.07,.17,0,-.14,-.06,.13,-.06,.16,0,-.08,-.12,.13,.09,-.08,-.01,-.04,-.15,-.05,.03,0,.07,-.03,0,-.08,-.07,-.06,-.11,.11,.03,-.06,.02,-.07,.14,-.1,0,-.19,-.18,-.03,0,.12,.04,.15,.16,-.08,-.01,.08,.1,-.03,-.05,-.03,-.08,.07,.06,.04,-.04,.09,.06,-.09,-.02,-.12,.09,-.01,-.01,-.03,.07,.01,.06,.13,.2,.07,.06,-.04,-.26,-.04,-.13,-.05,-.07,-.03,.07,-.01,-.11,-.07,-.06,-.05,.12,-.05,.06,-.07,.1,.05,.02,.14,-.34,-.09,.22,-.07,-.14,-.05,.06,-.03,.01,-.05,.06,.04,.01,-.08,.09,.01,-.07,-.32,0,.04,.05,-.2,.09,-.02,.04,-.03,.1,0,-.26,.07,.02,0,.03,.04,.04,-.08,-.07,-.08,.03,.07,.06,-.07,.08,-.02,.1,-.06,-.05,-.1,-.06,.04,-.22,-.04,-.05,.02,.02,-.03,-.04,.14,-.01,.13,-.16,0,-.06,-.01,.05,-.03,-.02,.12,.05,-.02,.01,.02,.02,.06,-.07,-.07,.07,-.1,-.09,.05,.14,-.14,.16,-.24,-.08,.09,.03,.3,-.04,.06,-.02,-.03,-.12,-.14,-.03,-.09,-.04,.2,.07,.07,-.07,.09,-.21,-.14,-.28,.1,.02,.12,.06,-.05,-.02,-.06,-.11,.1,.04,.07,-.07,-.06,0,.02,.12,.03,-.11,.15,-.04,-.06,-.13,-.04,.07,-.04,-.08,.01,.06,.12,.02,-.01,.08,-.17,-.11,.03,.01,.02,-.05,.16,-.1,.1,-.03,-.01,.12,0,-.02,-.01,-.07,-.07,.02,.09,-.04,-.01,-.06,-.08,-.02,-.03,.01,-.04,.19,.05,.07,.01,-.05,.05,-.13,.11,.09,.08,-.12,.04,-.14,.18,-.11,.17,0,.13,-.04,-.03,0,.05,-.26,-.04,-.2,.07,-.09,-.08,-.07,0,.02,.01,-.02,-.02,-.07,0,-.05,-.08,-.04,-.07,.04,-.09,.05,-.02,-.05,.06,0,.12,-.08,-.03,-.09,-.08,-.03,-.11,-.15,-.1,-.02,-.02,-.07,-.1,-.14,-.06,.11,-.05,.1,-.02,-.16,-.16,.06,-.04,-.08,-.15,-.07,.12,.08,.06,.06,.02,-.11,.06,-.07,.06,-.03,-.08,.01,-.04,-.04,.03,-.03,-.09,-.08,-.17,.03,.02,0,-.12,-.13,-.07,-.08,.03,.03,.2,.08,.15,-.08,-.04,.18,.11,.19,.17,.04,.09,.16,.34,-.06,-.06,-.03,-.08,.01,.1,-.1,-.1,-.14,.13,.14,-.04,-.16,.09,-.19,.1,.03,-.1,.11,.06,-.12,-.15,-.07,-.09,-.11,.12,-.17,-.09,-.06,-.09,.04,-.15,-.05,.04,.11,.02,-.02,-.03,-.22,-.05,-.11,-.12,-.04,-.17,-.06,.1,-.13,-.02,.03,.11,-.02,-.08,.03,-.03,.01,-.09,.05,.1,-.09,-.02,.2,-.08,-.03,.02,-.07,.03,-.02,-.03,-.21,.04,-.04,.06,.05,.16,-.13,-.01,-.01,.12,-.04,.01,0,.18,.08,-.07,.07,.04,.04,-.03,0,-.01,-.03,-.04,.15,-.06,-.05,-.05,-.02,-.13,.02,-.09,-.12,-.1,-.05,-.01,-.07,.06,-.13,-.02,-.02,.13,-.02,.06,-.01,.08,.17,-.14,-.14,.15,.04,-.07,-.08,.1,-.04,-.01,-.02,-.17,-.02,-.03,.12,.13,.12,.03,.06,-.15,-.05,-.03,.13,.01,-.06,.08,-.14,.09,.23,.02,.13,-.07,-.01,.13,-.03,.07,.06,-.02,-.09,.06,-.13,-.06,.06,-.02,.03,.08,-.26,-.15,.07,.08,-.04,-.1,.07,-.05,.16,-.06,.01,-.15,0,.15,.03,-.07,.05,-.07,-.08,-.04,-.02,.05,.02,.09,-.01,-.03,-.06,-.17,.06,-.02,.13,0,-.01,.03,-.02,-.09,0,-.06,.02,-.01,-.03,.02,.04,.12,-.15,-.06,.07,.01,-.05,.02,.05,-.01,-.02,.05,.13,.11,-.08,-.03,-.08,.06,-.05,.08,-.06,0,.21,-.01,0,-.03,.16,.03,.1,-.06,-.04,.03,.13,.13,.03,.07,.11,-.06,.06,.02,-.07,.04,-.07,.07,-.09,-.09,.03,-.08,.08,.11,.01,-.09,-.14,.01,.03,.02,.02,-.03,.11,.06,.02,.02,.09,.22,-.03,.1,-.03,-.29,.22,.07,.01,.03,-.03,-.06,.06,-.05,-.17,.05,-.01,-.01,-.06,-.07,-.02,-.01,.03,-.02,.03,-.16,0,-.01,-.02,-.08,-.13,-.2,-.09,-.01,.02,-.06,-.1,0,-.07,.03,-.07,-.1,-.1,0,-.07,-.03,.12,.01,-.03,-.02,.04,-.02,-.01,-.05,-.08,.01,.03,-.01,-.05,-.05,-.17,.06,-.04,.01,-.04,-.03,-.11,-.15,-.05,.02,-.05,.05,-.06,-.01,.01,.15,.07,-.01,.01,.01,-.03,.04,.02,-.14,-.09,.06,-.09,.07,.01,-.04,0,-.1,-.05,-.08,-.11,.11,.06,.05,.01,-.06,.04,-.17,-.1,-.05,-.06,-.15,-.07,.08,-.07,-.07,-.1,-.07,-.06,-.14,-.02,-.03,-.04,.12,.04,-.01,.01,-.08,.03,-.14,-.01,-.04,.06,-.06,.11,.05,-.03,-.02,-.07,.09,-.06,.07,.09,-.13,-.17,-.01,-.05,.12,-.07,-.04,.26,.07,1,.06,-.02,.3,.01,-.03,-.1,-.24,-.07,.05,-.07,.02,-.1,-.04,-.1,-.07,0,.01,-.01,-.05,.05,-.1,-.06,-.08,-.01,.09,-.06,0,.2,.11,.09,.12,-.19,.02,-.04,-.03,-.15,-.08,.02,-.09,-.06,.05,.06,.06,.21,-.1,-.03,.14,.08,-.05,-.05,-.07,.05,-.04,.05,0,-.09,-.02,.02,-.11,.02,.05,.09,.08,-.01,-.16,-.1,-.1,.03,.02,-.04,-.1,.07,-.03,-.17,.12,-.11,-.04,-.04,0,.04,-.09,-.04,-.01,.06,-.16,-.08,-.04,-.08,-.12,-.07,-.04,.05,.07,-.18,.14,-.07,-.09,.04,-.06,-.08,-.1,-.05,-.05,.05,-.02,.04,-.13,.14,.21,.13,.1,.09,-.01,-.02,-.03,.07,-.11,-.04,.07,-.04,-.11,-.13,-.03,-.07,-.15,.02,.01,-.03,-.09,.2,0,-.03,-.02,-.08,.18,-.07,-.03,.04,-.03,-.1,-.17,.15,-.07,-.13,.01,-.19,-.12,-.24,-.04,.07,-.11,-.02,-.01,.02,.12,-.02,-.13,.11,-.06,-.06,-.14,-.21,-.07,.11,-.11,-.05,-.11,-.1,-.1,-.05,-.06,.05,-.04,-.09,-.09,-.17,-.05,-.07,-.01,-.06,.04,.09,.1,0,.06,.01,.07,.11,.05,0,-.13,-.06,0,-.07,-.04,.07,.01,.06,-.07,-.05,.12,.01,.05,-.06,-.05,-.08,.24,-.04,.01,-.02,.07,-.01,-.05,-.12,-.12,.16,-.17,-.04,-.04,.01,-.05,0,.04,-.03,-.11,-.25,-.12,.01,-.06,-.03,-.15,-.03,.11,-.03,.03,.08,-.14,0,.1,-.16,-.11,-.05,0,-.13,-.13,-.38,-.07,-.04,-.06,-.17,.02,-.02,.08,-.15,-.04,0,.03,-.1,0,-.06,-.08,-.02,.22,-.07,0,-.18,-.07,-.13,-.06,-.02,.26,-.05,-.04,.03,-.25,-.19,-.03,-.05,-.02,-.08,0,-.18,-.02,0,-.03,.29,-.01,.13,-.02,.13,.21,0,-.29,-.26,-.18,-.04,.09,.03,-.04,-.03,-.03,.21,-.01,.13,-.01,.02,-.11,.11,0,.13,.16,-.01,-.06,-.04,-.06,-.12,-.13,-.07,-.16,-.06,.07,.04,.18,.1,-.02,.22,.02,-.05,-.11,-.1,-.06,.1,-.08,.03,-.05,.35,-.08,-.01,-.1,.05,-.05,.18,.06,.13,.1,.01,.13,.1,-.04,.04,-.01,0,-.01,-.05,.06,-.03,-.03,.07,.02,-.04,-.02,-.05,.1,-.12,-.05,.18,-.02,-.09,-.11,.1,-.01,-.05,-.09,-.07,-.05,-.02,-.06,.04,-.01,.02,-.08,.07,.08,.15,-.03,.13,-.09,.14,-.02,-.03,-.02,.07,-.01,-.04,-.03,-.09,-.01,.03,.13,-.04,-.05,.12,.12,-.05,-.04,-.01,.04,-.08,.19,-.21,.02,-.2,.02,.19,.21,.12,.12,-.03,-.01,-.08,-.07,-.03,-.14,-.11,-.02,-.04,.1,.26,.11,-.01,-.04,.01,-.03,-.1,-.07,.05,-.09,-.09,0,.03,.08,-.03,-.07,-.1,-.04,0,-.05,-.04,-.01,.24,.04,.34,-.03,-.05,.02,-.01,-.11,-.04,-.13,-.11,.16,.06,-.07,.01,.06,.04,.09,-.04,.05,.05,-.05,.02,-.1,-.02,.02,.07,.01,-.07,-.03,-.13,-.12,.05,-.16,.33,-.01,-.05,.1,-.1,-.02,.03,.09,.14,.1,.01,-.01,.12,.09,-.06,.01,-.05,.03,.03,-.03,.02,.26,.11,.14,.03,.15,.08,-.12,-.01,-.04,.05,-.03,-.14,.17,.18,-.07,.02,-.04,-.03,.04,0,.02,-.04,-.02,-.01,-.04,-.04,.01,-.07,-.05,-.13,.12,.08,.16,.1,-.03,.01,-.12,-.01,.02,-.01,.02,.1,-.07,.1,.11,.2,-.05,.14,.01,.08,.01,-.02,-.03,-.18,.22,-.16,.04,.1,-.09,-.11,-.01,-.07,-.05,-.09,-.1,.11,-.03,-.07,.16,.03,-.1,-.02,-.08,-.2,-.05,.11,-.06,.01,-.02,-.06,.07,.01,-.07,-.13,-.02,-.18,.01,0,.09,-.01,-.03,-.02,.03,-.02,-.08,-.05,.03,-.05,-.03,0,-.06,-.06,-.11,-.01,.01,-.15,.15,-.04,.08,-.05,-.06,-.19,.01,-.05,-.04,0,.19,.01,.08,-.06,.06,-.08,-.08,-.05,.03,.1,0,.09,.1,-.04,.06,-.05,-.02,-.02,-.04,.05,-.01,-.07];export{a as rvalData};
