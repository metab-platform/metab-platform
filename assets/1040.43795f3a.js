const a=[.04,.15,-.08,-.03,-.12,.01,.03,.04,.14,-.19,-.02,-.19,-.09,.09,-.02,.08,.06,.13,-.24,-.15,.19,-.12,-.06,.09,.08,.01,-.11,0,-.01,-.04,-.1,-.05,-.05,0,.03,.2,-.01,.07,.09,-.1,.13,-.01,-.08,-.11,.13,.07,.12,.01,.1,-.06,-.1,.05,-.02,.05,-.18,.13,-.12,.06,0,.06,.04,-.1,.01,.1,-.06,-.09,-.01,.05,-.25,.19,.06,-.07,-.02,-.05,-.04,.16,.27,0,-.03,-.04,.12,.09,.03,.05,-.37,-.03,.03,.09,-.03,.03,-.17,-.08,.14,.04,-.1,-.15,.14,.11,-.22,0,-.05,-.01,-.2,.1,-.14,.05,.18,.19,.01,-.01,.13,-.07,0,.06,-.26,.01,.01,-.01,.03,.06,.49,.05,.02,.11,-.08,-.06,-.09,-.08,.02,.04,-.01,-.05,.07,-.04,.12,0,.03,.03,-.03,.03,-.07,.08,-.01,.03,.07,-.04,.13,-.16,-.01,-.01,-.01,.08,-.03,.01,.06,-.13,-.04,-.04,.06,.05,-.14,-.1,.3,-.09,.04,-.01,.02,-.04,-.06,.07,-.01,-.05,-.04,-.05,-.15,.02,-.13,.07,.01,-.02,.12,-.01,-.06,-.14,-.08,-.08,0,.01,-.12,0,-.11,.06,-.04,.03,-.05,-.06,-.1,-.06,.14,-.16,.11,.04,.02,.09,.01,-.19,-.12,-.01,0,.09,.01,.09,-.21,.08,.07,.13,.01,.04,.03,.17,.02,-.17,-.07,-.04,.03,.02,.02,-.03,-.19,-.14,-.02,.11,.07,-.12,-.05,.03,.01,.21,-.14,.03,0,.05,0,-.01,.11,.09,.05,.09,0,.09,.21,-.09,-.18,-.05,-.09,-.06,-.17,.07,.01,-.12,-.01,-.17,.05,-.05,0,-.15,-.18,-.01,-.09,.03,-.13,.02,.02,-.13,-.03,-.02,.01,.01,-.1,.09,-.06,.04,.09,.04,-.12,.09,-.04,-.01,-.15,-.14,0,0,-.06,-.01,.08,-.11,.05,-.15,.11,-.02,.04,-.13,-.13,.24,-.01,-.04,.02,.06,-.12,.11,0,.14,-.14,.1,-.16,-.04,-.03,-.22,-.13,.04,.02,-.18,.04,-.03,-.01,-.07,-.05,-.15,-.14,-.03,.2,.01,-.05,.12,-.08,.22,-.07,0,.06,-.03,0,-.17,-.24,.11,.06,-.09,.01,-.04,-.16,.04,-.03,.02,.08,-.12,.05,.1,.05,.12,-.12,-.12,.1,.14,-.13,.13,-.15,.09,.03,-.02,-.05,.24,-.1,0,.15,.05,-.01,-.2,-.17,-.06,.07,-.06,.15,-.13,.03,.03,.03,-.11,0,-.13,-.07,-.1,-.08,-.05,-.15,.03,-.04,-.13,-.01,.09,-.14,-.11,-.34,-.1,-.15,.11,.07,-.05,0,-.06,0,-.04,-.14,.02,-.09,-.1,-.37,.17,-.08,-.19,-.08,.2,-.02,.12,.02,.06,.08,-.02,-.08,-.07,.06,-.13,.05,-.03,.07,.06,-.08,-.02,-.05,-.07,-.06,-.03,-.13,.04,.01,.02,.01,-.1,-.13,-.07,.1,-.04,.1,.08,.01,-.11,.2,.09,.05,-.05,.08,.03,-.08,-.1,.11,.05,.01,-.14,.13,-.1,-.18,.03,.17,-.05,-.03,.15,-.09,-.04,.02,.13,-.08,.01,.02,.07,-.11,.04,.04,.05,-.16,.05,-.07,-.15,.09,-.16,.1,-.06,-.15,.01,-.1,.3,-.07,-.02,.01,-.13,-.15,.03,.04,.06,-.11,-.03,-.1,-.02,-.06,-.03,-.01,-.04,.08,.05,-.12,.04,0,-.03,-.11,-.17,-.07,.09,.07,.03,.06,.01,.05,-.05,0,-.15,-.14,.07,-.02,.04,-.16,-.08,-.06,-.21,-.15,-.21,-.06,0,0,-.35,.1,-.04,-.1,.06,.14,-.03,-.09,-.08,-.08,-.05,.13,-.03,.06,-.08,-.06,.04,-.09,.11,.12,.15,-.02,.11,-.15,.11,-.15,-.13,.03,.03,-.05,-.12,.06,-.05,-.13,.12,.01,0,-.06,.06,-.07,.09,-.1,.05,.05,-.04,.21,.12,.04,-.1,.05,.03,-.03,-.13,.08,.02,-.11,-.03,-.18,-.09,-.23,0,-.17,.03,-.08,.02,.14,0,-.12,.02,.07,-.07,-.14,.03,.16,.04,-.1,-.05,-.06,.05,-.04,-.15,.09,-.04,-.11,.1,-.09,.15,0,-.13,-.13,-.08,-.04,.03,.16,-.1,.18,.03,0,-.03,-.14,-.1,-.02,-.02,.02,-.09,.02,.01,0,-.06,-.01,-.26,.03,.11,.09,.2,-.15,-.16,-.03,-.13,.01,0,.05,-.11,.07,.04,.16,-.14,.16,.02,-.27,-.12,.06,-.03,-.16,.29,.29,-.03,-.05,0,.08,.16,.1,-.01,-.03,.06,.14,-.22,-.06,-.13,.02,.05,.1,.09,-.08,.08,.04,.06,.03,-.05,-.06,-.03,0,-.07,.12,-.03,0,.01,-.1,-.05,-.25,.08,.09,-.24,.07,.18,.09,-.01,-.02,.16,.1,-.09,-.13,-.05,.02,-.21,.05,-.11,-.06,-.05,.1,-.03,0,0,-.03,.11,.06,-.05,.02,-.05,.02,.13,.07,0,-.14,-.03,.05,.01,-.3,.05,-.01,-.15,.03,-.05,-.1,-.04,.04,.01,-.04,-.16,-.03,-.04,0,-.02,.01,.09,-.09,-.05,.01,-.02,-.11,-.14,.03,.1,-.06,-.13,-.13,-.3,-.02,-.01,-.16,-.13,-.06,.04,-.14,-.02,-.07,-.15,-.15,.08,-.02,-.07,-.08,.01,.15,-.01,.11,.15,.21,-.03,-.07,-.02,.1,.01,-.16,.04,.11,.05,-.11,-.03,0,.07,.06,.05,.15,-.08,-.12,.03,.08,.05,.15,.02,.15,-.27,.03,.14,.09,0,.06,-.2,.19,-.12,.18,-.06,0,-.03,-.1,.06,.02,.06,.19,-.06,.18,-.01,.08,.03,.01,-.01,.05,.15,.07,.01,-.15,-.23,.07,-.02,.02,-.06,.08,-.05,-.09,-.14,.11,.02,.01,.06,-.13,.04,.11,-.1,.02,-.12,.04,-.09,.01,.09,-.1,.02,-.02,.02,.06,.2,.02,-.03,-.15,.01,.01,.15,.24,.01,-.04,.11,.02,.05,-.1,-.02,-.01,-.04,.04,.13,.01,-.02,0,-.08,.07,-.07,.03,-.01,.1,-.13,-.1,0,-.08,-.01,.08,.18,-.04,-.06,-.01,.1,-.11,-.09,-.07,-.06,-.13,-.17,.01,-.17,-.02,-.05,-.1,.18,-.02,-.06,-.06,-.08,-.02,-.14,-.04,.01,.07,-.05,.14,-.03,0,.19,.07,.01,-.08,0,-.01,.06,-.03,-.14,-.07,-.02,.03,.1,.04,-.1,-.1,.23,-.11,-.05,-.02,.26,.15,-.06,.03,-.01,0,.25,-.04,-.18,.02,-.01,-.03,-.01,-.05,.09,.01,.06,-.07,.07,0,-.08,.07,0,-.02,.05,.25,-.02,.02,.01,.04,-.12,-.1,.08,.04,-.09,.13,.07,.03,-.08,.12,-.1,-.14,-.05,-.04,.06,.04,-.2,.08,-.06,-.08,-.13,-.03,-.14,-.01,-.2,.15,-.19,.01,.13,.02,-.01,.04,.11,-.13,-.15,0,-.04,0,.03,.11,1,-.01,-.07,.09,-.02,.09,-.11,-.1,-.02,-.24,-.11,.01,.13,-.17,-.11,.05,.21,-.09,-.01,-.05,.03,.05,.02,-.05,.08,-.03,.03,-.03,.19,-.1,.08,-.1,.06,.02,-.07,-.01,.07,-.01,-.02,.04,.03,.18,-.1,.01,.11,.04,.09,-.12,.07,-.12,.07,.11,.01,-.06,-.19,-.09,-.03,.1,-.03,-.06,-.08,0,.2,0,.13,-.12,.09,-.09,.02,-.03,.13,-.01,-.06,0,.07,0,.05,-.38,.06,-.05,-.01,.07,.04,.04,.15,-.06,.09,.11,.03,-.18,-.17,0,-.07,-.05,.05,.13,-.15,-.01,-.11,.06,-.07,-.02,.02,.23,-.06,-.09,.08,.02,-.08,-.19,.14,.16,-.09,.04,-.12,.1,-.05,.1,.06,.03,.06,.04,.07,.08,.07,0,.1,-.03,.02,-.05,.01,-.05,-.11,-.01,-.03,-.04,-.01,.04,.11,.18,.05,0,.22,.18,-.06,.13,.2,-.03,.01,-.09,-.07,.01,-.05,.05,.02,-.03,.1,-.24,-.05,-.05,.06,.02,-.04,-.08,0,-.15,-.07,.13,-.17,-.12,.03,-.12,.03,.14,.03,-.13,-.05,.1,0,-.14,.02,-.09,-.03,.08,.09,.06,-.14,-.23,.02,-.08,-.13,-.06,-.13,.03,0,-.12,.03,-.02,-.09,-.01,.08,-.02,-.01,-.09,.21,.08,-.1,.01,-.16,-.01,.03,.02,.01,.07,-.19,-.14,.07,-.08,-.04,.08,-.07,.05,-.12,.05,.01,0,-.06,-.05,0,.04,0,.02,.13,.01,.07,-.09,.05,-.04,0,.11,.25,-.09,0,.12,-.04,.07,.02,-.13,.08,.24,.08,-.13,-.01,0,-.03,-.24,.01,-.02,-.11,.02,-.07,.03,-.05,.05,.41,-.06,-.04,.04,-.14,0,-.12,-.02,-.12,0,-.19,-.05,-.02,.02,.03,-.05,.06,.05,0,.05,-.01,-.01,-.1,-.11,-.02,-.07,.06,.14,-.04,-.2,-.06,.05,-.01,0,.06,.23,-.01,.07,.03,.07,.12,0,.1,.17,-.07,.16,-.19,.02,.02,-.06,.08,.03,.02,.1,.03,-.09,.02,.02,.09,.04,-.02,.04,.02,.09,-.03,.12,.11,.04,-.02,-.08,-.06,-.11,-.11,-.05,-.11,.06,-.01,.18,-.01,-.05,.14,-.03,-.06,-.06,.21,-.02,.02,.02,-.07,.01,-.02,.02,.07,.02,-.01,-.11,.08,.01,-.15,.14,-.02,-.03,.07,.04,-.04,.05,-.28,-.05,-.1,-.18,-.18,-.23,.03,-.05,-.03,-.07,.04,.02,-.05,.31,.14,.05,.11,-.02,.2,-.11,.04,.19,-.08,.01,-.06,0,.03,-.34,0,-.02,.08,-.09,.06,.03,-.03,.16,.03,.02,-.14,.03,.02,.18,0,.03,.09,.02,.02,-.08,.1,.03,-.08,.11,-.08,-.04,.02,-.13,.02,-.06,.09,-.07,-.09,-.06,.08,-.01,-.07,-.05,-.04,-.05,-.06,-.14,.18,-.11,.03,.12,.06,-.03,0,-.14,0,.11,-.04,-.04,-.13,-.12,-.04,-.16,-.1,.06,.04,-.07,.02,-.14,.11,-.07,.02,0,-.03,-.03,-.05,-.13,.01,.13,.16,.06,.02,.1,.1,-.01,.04,-.08,.1,-.14,-.12,-.07,-.04,.09,.08,-.07,.03,.14,-.01,-.07,.06,-.07,.03,.01,.1,-.11,-.03,-.01,-.14,-.06,-.07,-.08,-.07,-.02,.08,-.11,.04,0,.1,.03,.07,-.02,-.02,.01,-.14,0,-.01,-.02,-.07,.13,.04,-.05,.04,0,.05,-.06,-.01,.04,-.12,-.07,-.16,.05,-.08,.06,0,0,-.1,-.05,.07,.05,-.16,-.08,-.07,.05,.03,.04,-.01,-.08,.03,0,.01,.06,-.05,.12,.05,-.1,-.03,.28,.04,.08,-.02,-.15,.08,.06,-.05,.14,.03,-.07,.06,0,-.16,.16,.17,.1,.15,-.06,-.01,-.04,.01,.11,.04,.25,-.11,.14,-.11,-.1,.02,.21,.02,-.07,.03,-.06,0,-.06,-.05,.01,-.03,.05,-.06,.06,.02,-.08,.04,-.03,-.12,-.1,.13,.23,0,-.02,.01,-.08,.02,-.1,-.06,-.08,.03,-.03,-.11,.02,-.05,-.09,-.06,-.15,-.13,-.11,-.03,0,.04,.05,.02,.11,.05,-.02,.16,-.06,.12,-.1,.04,.01,.04,.01,.05,.13,.07,-.02,.13,-.05,.1,.16,.05,-.14,.02,-.17,-.13,-.09,.03,-.16,-.03,0,.08,.02,.03,-.08,-.07,.04,-.04,.01,-.05,.16,.13,-.09,-.14,-.04,-.12,-.1,-.23,-.13,.05,-.12,.02,.12,.01,-.09,.09,.08,.08,-.04,.02,-.15,-.05,-.04,-.09,.05,-.05,-.06,-.01,.08,-.02,.04,-.11,-.01,.07,-.07,-.04,-.08,.04,-.14,-.06,.05,.02,-.03,.04,-.05,-.13,.02,.06,-.04,0,.06,.06,.13,.11,.15,-.2,.03,-.07,-.04,.02,.13,.04,-.08,0,-.16,-.01,-.02,-.07,.08,-.08,-.06,-.04,.05,.08,-.04,.11,.07,-.01,-.03,-.01,.02,-.08,-.04,.09,.02,.04,-.04,.05,.04,-.09,-.15,.05,.16,-.14,.05,.03,-.11,.15,.04,-.05,0,-.13,-.08,0,-.1,0,-.15,.14,.03,-.08,-.21,.07,.03,-.06,-.01,-.07,-.01,-.14,-.13,-.09,-.16,-.02,-.02,.01,.04,.09,-.02,-.01,-.13,.01,-.04,-.08,.13,.04,-.01,-.14,.24,.13,.1,-.04,0,.13,-.12,-.03,-.16,.01,.02,0,-.1,-.02,.28,.07,-.06,-.06,-.05,-.05,-.03,-.05,.01,.08,-.01,-.04,0,.05,-.03,-.06,-.05,-.01,.2,.05,.14,.03,-.04,-.27,.01,.01,-.04,-.08,.21,.09,-.02,-.02,-.12,.04,.14,-.01,.01,-.12,-.08,-.04,.01,-.06,-.12,.01,-.08,.04,0,.03,.07,.04,.01,.25,.13,-.07,.13,.11,.14,-.13,.06,.14,-.01,-.04,.08,.02,-.1,.03,.06,.01,0,.07,-.15,.13,-.19,.21,.12,-.16,-.04,-.17,-.14,.07,-.02,-.06,-.13,.03,-.08,-.1,-.08,.1,-.03,-.06,0,.03,.03,-.14,.05,.18,.09,.15,0,0,.01,.03,-.06,-.08,-.11,.15,.08,-.08,-.26,-.01,.06,.15,.26,.07,-.08,.03,-.09,.01,.05,-.07,-.07,-.02,-.01,.1,-.04,.03,-.03,.01,.06,.14,-.16,-.06,.12,-.1,-.15,-.02,-.12,0,.06,.03,.04,-.12,-.07,-.07,.04,-.09,-.05,-.08,.04,.02,-.14,.03,-.05,-.04,.02,.01,.04,-.02,.05,-.07,.23,-.04,.01,0,-.04,-.04,-.02,-.1,.13,-.01,.05,.02,.01,-.1,-.01,.03,-.07,-.05,-.02,.03,.03,.07,-.02,.01,-.14,.01,-.06,0,-.02,-.03,.01,.17,.09,.04,.08,.14,-.07,-.16,-.05,-.01,.13,.02];export{a as rvalData};
