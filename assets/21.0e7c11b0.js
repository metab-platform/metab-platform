const a=[.08,.04,-.01,-.35,-.08,.08,-.18,.05,-.08,.04,-.1,.01,.14,-.09,.03,-.01,-.02,.05,-.02,-.19,1,.26,-.1,.01,.02,-.05,.17,-.25,-.01,.18,-.15,.2,-.08,-.06,.01,.09,.01,0,-.19,-.08,.06,-.07,-.11,-.04,-.01,-.09,-.04,.12,.15,-.04,.18,.13,0,.03,-.14,.06,-.01,-.03,.19,-.14,-.18,-.02,-.04,-.16,.08,.1,-.05,.08,.07,0,-.02,.04,-.18,-.06,-.02,.01,-.07,-.24,.11,.06,.04,-.19,-.04,-.07,-.11,.08,-.03,-.07,.04,.02,.01,-.01,-.03,.04,.13,.02,.09,.05,-.05,-.19,-.03,-.02,-.13,-.18,-.15,-.19,-.13,.05,-.03,-.11,.06,-.1,.08,.09,.04,0,-.05,.18,.18,-.07,.13,.05,.11,.06,.06,-.11,.03,.07,-.04,-.02,.02,.07,0,-.11,.17,.13,-.08,-.11,.14,.01,-.08,0,-.12,-.02,.03,.05,.18,-.07,-.06,.17,-.06,-.01,.1,.02,-.01,.01,.07,.09,.07,.03,-.03,-.05,.15,-.12,-.01,-.27,-.01,.13,.14,-.1,-.01,.12,-.03,-.02,-.16,.1,-.1,.17,-.1,-.15,-.09,-.04,-.04,-.06,-.14,-.03,-.07,-.1,-.01,-.08,.01,-.05,.16,-.11,-.15,.04,-.15,.09,.1,.1,.11,-.1,-.05,.12,.05,-.15,.08,.03,-.13,-.01,.04,.05,.01,0,.01,-.16,-.08,0,.11,.13,.03,-.16,-.02,-.04,0,-.04,-.01,.13,-.11,-.18,-.02,-.11,.03,.01,-.04,.02,.03,.29,-.14,.04,-.12,.01,-.06,-.1,-.03,.11,.01,.03,.04,.06,-.09,-.05,-.11,-.14,-.08,0,.06,.01,-.04,-.01,-.03,.01,.02,-.06,.01,-.15,.08,-.03,-.14,-.09,.06,-.09,0,-.02,0,-.05,.17,-.19,-.02,.14,-.14,.15,.1,-.23,-.05,-.04,.1,-.03,-.05,.16,.1,-.16,-.13,.05,-.01,-.1,-.14,.01,.12,.16,-.04,-.06,.14,.02,-.07,.02,.34,-.09,.01,.02,-.12,-.05,-.03,0,.07,.16,.11,-.02,-.04,-.04,-.08,-.03,.04,-.06,.05,-.01,-.04,.16,.33,0,.11,.05,-.08,-.34,.13,.05,.12,.12,.14,.28,-.09,-.15,-.12,.11,.04,-.05,-.03,-.19,-.07,-.1,-.06,-.03,-.06,-.04,.03,.05,-.08,.08,-.07,-.04,-.02,.06,.01,.02,-.09,-.2,.05,0,-.27,-.15,.12,0,-.07,.11,-.25,-.18,-.02,-.05,-.08,.06,-.01,-.15,-.01,.11,-.08,-.2,.07,-.17,-.07,-.04,-.03,-.03,-.1,.07,.01,-.07,.19,.14,.15,.06,-.07,-.02,-.12,-.05,-.01,-.09,-.01,-.07,-.07,.07,-.04,.02,-.05,-.02,-.23,-.17,-.09,.03,-.18,.12,-.04,.01,.16,.06,.01,.01,-.06,-.36,-.02,-.08,-.05,.05,0,.14,0,-.04,.12,-.01,-.06,-.06,-.11,-.14,-.15,.05,0,.03,-.05,-.08,.07,.05,.01,-.11,.06,-.09,.12,.17,.21,-.09,.03,.03,-.03,-.03,.13,-.2,.05,.08,-.28,0,.04,.05,-.01,-.08,.08,.08,-.01,-.01,.01,.05,0,.19,-.09,.02,-.04,0,-.07,.06,-.04,.11,.01,-.02,.04,.02,.19,-.02,-.04,-.04,.04,.06,.08,-.09,-.03,.14,-.05,-.12,-.09,-.1,-.06,.02,-.07,-.24,-.18,.11,-.18,-.09,-.03,.12,-.04,-.04,-.19,-.08,.03,-.02,.08,-.03,-.11,.02,.2,0,.24,-.1,-.12,.03,-.12,.04,-.04,-.12,.05,-.02,-.02,0,.53,-.02,-.08,.24,-.14,-.35,-.06,.19,-.06,-.09,.14,-.05,-.07,-.05,-.1,0,-.04,-.09,-.13,.01,.03,.1,.05,.08,-.04,-.03,-.11,-.04,-.12,.16,-.06,-.01,-.05,.01,-.05,-.05,-.15,.13,-.13,-.07,-.1,.09,-.11,.03,-.06,.03,-.04,-.12,.11,.01,.07,.08,.1,-.1,.03,.03,-.01,-.06,.02,-.02,.02,-.03,-.05,-.03,-.03,.17,-.16,.16,.06,-.07,.02,-.02,-.05,-.03,-.02,-.02,-.07,.09,-.07,.02,-.1,.06,0,-.17,-.01,.04,-.03,-.1,-.08,.15,-.02,.16,.05,-.28,-.02,-.15,-.01,-.07,.06,.11,.13,-.13,.19,-.25,.07,-.07,.01,-.08,.28,-.07,-.05,.06,-.07,-.03,0,-.06,.09,.07,-.03,.03,-.08,-.12,-.08,.04,.1,.12,.12,-.04,-.01,-.08,0,-.01,-.11,.23,-.13,-.07,-.15,-.07,-.32,.12,.09,-.05,-.17,-.08,.03,.07,.15,-.07,-.03,.05,.07,-.11,.06,-.1,-.03,.15,.02,.11,-.05,-.04,-.08,-.05,-.03,-.3,.23,-.09,-.03,.07,-.02,.24,-.06,-.1,.06,.04,-.27,-.07,.11,-.19,.12,-.02,-.02,.07,.06,-.01,-.07,-.05,-.15,.17,.02,-.06,.06,-.04,-.01,-.02,-.06,-.08,-.02,-.01,-.23,.06,.02,.1,.26,.17,.1,.01,-.12,-.01,.04,-.09,.05,.23,-.08,-.01,.01,-.13,.29,.13,-.04,.13,-.05,.15,-.02,.08,.08,.09,-.01,-.04,.14,.08,-.07,0,.03,.01,-.01,-.05,-.01,-.02,-.08,-.01,-.11,-.03,.1,-.06,-.06,-.08,-.09,-.25,.05,.04,.15,-.07,-.07,.02,-.06,.12,-.02,-.12,-.04,-.12,.04,.01,.16,-.08,.07,.08,-.02,.05,.01,.03,.05,-.06,-.07,.12,-.01,-.09,.09,.12,-.56,-.1,-.06,-.04,.05,.03,0,-.1,.07,0,-.16,.17,.02,-.04,-.06,-.23,.03,.11,.03,-.11,.07,.06,-.12,-.09,-.14,-.12,.16,-.04,-.01,.17,-.06,.08,-.09,.07,-.03,.13,-.09,.05,-.02,0,0,.08,-.13,-.05,.23,-.1,-.02,0,.15,.09,-.18,.04,.02,-.02,-.01,.01,-.07,.03,-.02,-.06,.07,-.04,.17,-.01,-.05,-.12,-.05,0,-.23,.18,-.07,.07,-.07,.06,.04,.02,0,-.24,.04,.04,-.18,-.05,.06,-.14,-.04,-.05,.04,.03,.06,-.11,.13,-.07,.01,.19,.04,-.06,-.08,-.13,.06,-.05,-.05,.31,-.04,-.08,.04,.02,-.06,-.03,-.01,-.05,-.04,0,-.04,-.04,.03,-.1,-.09,.21,-.15,-.03,-.17,-.08,.04,.21,0,-.15,.02,-.26,-.02,.03,-.01,.12,-.06,.06,0,.3,-.06,-.09,-.12,-.19,-.08,0,-.03,.43,.1,-.08,-.03,.02,-.07,.13,.05,-.04,.12,-.05,.03,.01,-.05,.11,.1,-.03,-.15,-.01,-.07,.05,.01,-.02,0,-.05,-.12,.19,.1,.03,-.11,.1,-.11,.08,.03,.01,-.05,.18,-.04,.03,-.23,-.1,.02,0,-.21,-.02,.1,-.42,-.27,.1,-.03,-.06,-.01,.14,.07,.09,-.05,-.02,-.05,.03,-.12,-.24,-.25,-.13,.13,-.11,-.03,.17,.03,-.25,-.1,0,-.12,-.04,.17,-.08,-.05,-.07,-.09,.19,.12,-.06,.05,-.23,.09,-.01,.04,.1,-.22,.05,.03,.05,0,0,-.21,.48,.12,.01,-.08,-.05,.14,.07,.05,.01,-.11,-.1,.08,.07,-.03,-.09,-.17,-.05,-.03,-.03,.14,-.1,.01,-.04,-.04,-.09,.04,.18,-.16,.15,-.06,.02,-.19,.07,.21,-.05,.04,-.13,-.07,.13,.04,-.01,.06,.04,-.02,-.05,.08,.29,-.1,.04,-.08,.01,-.09,0,-.07,.36,-.06,-.06,-.24,0,.13,.12,-.2,0,-.21,-.07,-.05,.04,.02,.2,-.19,.04,.13,.04,-.02,0,-.13,-.06,-.06,.02,-.11,-.08,-.03,.07,.03,.09,-.01,.02,.17,-.03,-.1,.02,.01,-.03,-.05,.13,.07,.05,-.15,-.05,.05,.01,.03,.04,-.12,.13,.01,.05,.16,-.03,-.05,.02,-.07,-.08,-.01,-.08,.05,.03,.07,.01,-.03,-.06,.01,-.1,-.12,.07,-.14,.18,.17,.05,.27,.05,-.06,0,.18,0,-.05,.04,.05,.18,-.05,.08,-.14,-.05,0,-.13,-.12,-.11,.07,-.03,-.03,-.08,.16,-.05,-.07,.01,-.07,-.19,-.04,-.01,-.01,-.07,.11,-.09,-.12,-.21,-.15,-.15,-.01,0,.01,.03,-.16,.13,.01,-.02,.09,.13,-.01,.17,-.06,-.05,-.1,-.07,.02,.04,-.04,-.09,-.05,.24,.01,-.2,.05,.02,-.1,.04,-.05,0,.05,.02,-.09,.1,.17,-.04,-.03,-.07,.16,-.07,.04,.1,.14,.02,.1,.14,-.01,.08,.01,.21,-.02,-.13,.11,.13,.04,-.04,-.02,.06,-.14,.09,.02,.01,.06,-.05,-.05,.06,.18,.03,.13,-.13,-.12,-.13,.02,.06,.29,-.02,.15,-.07,-.02,-.12,.03,.1,-.05,.07,-.16,-.02,-.06,.21,-.07,-.08,-.06,-.17,-.03,-.25,-.16,.01,-.06,.03,-.18,.11,.05,-.25,-.01,-.08,-.04,-.13,-.05,.16,0,-.11,.03,.07,-.09,-.18,.03,-.18,.01,-.08,-.01,.1,.05,-.01,.16,-.05,.01,-.03,.15,-.01,-.06,-.03,.02,-.08,-.05,-.07,-.13,-.1,-.1,-.08,.07,.02,-.03,.09,.12,.04,-.07,0,.05,.06,.15,.1,-.08,.04,0,.19,.12,.03,.07,.12,.2,.11,.11,.06,.02,.05,.07,.06,-.14,-.08,-.06,0,-.02,-.03,-.02,-.01,-.14,-.01,-.06,-.14,-.07,.06,.05,-.03,-.03,.08,0,-.26,.03,-.27,-.09,-.07,0,-.02,-.32,.01,.01,-.06,-.23,-.11,.1,-.08,-.02,-.15,-.08,.06,.12,.23,-.1,.03,.28,.08,-.02,-.02,-.11,-.03,-.1,.1,-.18,.06,-.03,.18,.04,-.05,.06,.02,.13,-.14,-.08,.08,.16,.02,.04,-.04,-.05,.12,-.03,-.24,.07,0,-.04,-.03,-.02,.11,-.1,-.07,-.01,-.2,.04,.02,-.1,.07,.12,.28,-.02,-.03,-.1,.03,-.12,-.08,.03,.07,-.09,-.06,-.04,-.06,-.04,.22,.02,-.08,.07,-.04,.03,-.02,-.14,-.04,-.01,-.15,.04,.02,.03,-.07,-.09,-.21,-.11,-.04,-.03,.12,0,-.01,.04,-.08,-.01,.01,-.08,-.21,-.12,.06,-.16,.12,-.02,-.03,-.01,-.02,-.01,-.03,-.06,.04,-.02,.08,-.02,-.07,-.1,.2,-.05,.03,.03,.03,-.1,-.08,-.05,-.07,-.01,-.09,-.13,.1,-.01,-.05,-.21,0,.05,.15,-.03,-.02,.05,-.01,.01,.09,-.08,.03,.06,.07,-.01,-.08,.01,.05,0,-.05,.08,-.06,-.12,-.02,.01,-.06,-.01,-.03,-.03,-.1,-.08,.09,-.03,-.07,-.09,-.23,-.04,-.07,-.06,-.08,.01,.03,-.08,.12,-.07,-.06,.01,-.05,-.03,-.11,.1,-.05,-.05,-.12,-.04,-.07,.04,-.07,.08,.08,.1,.01,.01,-.06,.05,.12,-.01,-.06,-.18,-.02,.01,-.03,.18,-.02,.03,-.13,.13,0,-.07,.2,.14,.05,.01,.03,-.06,.04,.04,-.03,-.07,-.05,-.04,-.07,-.06,-.06,.02,.06,.07,-.07,.03,-.07,-.06,-.06,-.01,-.13,-.04,.05,.03,-.04,-.02,-.03,-.01,.05,.04,-.08,-.04,-.08,-.15,-.01,0,-.03,-.07,.02,.25,-.05,0,.04,-.01,.01,-.03,.05,-.01,-.08,.1,-.1,.05,-.01,-.01,-.05,-.01,-.1,-.24,.05,.09,-.07,-.13,.02,-.05,-.09,0,.16,-.09,-.08,-.03,.09,-.08,-.05,-.02,.01,.04,-.12,-.05,.11,-.11,.03,-.15,-.19,-.02,-.05,0,.05,-.11,-.01,-.07,-.01,-.06,.02,-.08,.01,0,.12,-.13,.03,.05,-.07,.12,-.04,-.2,.03,.1,.04,-.06,-.04,0,-.09,-.11,.05,-.03,.08,-.05,-.13,-.05,-.11,.14,-.04,.05,0,.18,-.07,.03,.11,.08,-.19,-.02,-.01,.1,-.18,.07,-.01,-.04,-.06,-.08,-.07,-.03,-.07,-.02,0,-.05,.17,.16,.01,.07,-.07,-.05,-.08,-.18,.12,-.01,-.07,-.06,-.01,-.04,-.21,-.07,-.04,-.07,-.13,-.1,-.11,.06,0,-.13,-.05,0,.06,0,.03,-.05,.07,-.17,.08,-.02,0,-.11,-.03,-.01,-.04,-.05,.02,-.07,.12,-.03,-.01,.01,-.2,-.01,-.03,.03,-.06,-.11,-.02,-.12,-.05,-.03,.02,-.18,-.09,-.26,.03,.04,.02,-.08,.06,.11,-.02,-.01,-.05,.16,-.04,.03,-.01,.12,.05,-.1,.06,-.03,.01,-.04,-.02,-.06,.1,-.11,.11,-.05,-.05,-.15,-.06,-.1,-.01,.04,.07,-.02,-.06,-.05,.03,-.06,.03,-.03,-.05,-.01,.03,.08,-.21,.08,-.03,-.02,-.35,-.06,0,-.18,-.02,.09,.02,-.16,-.01,-.1,.04,0,-.03,-.05,-.02,-.1,-.05,-.09,-.15,.05,.08,-.01,-.07,.13,-.03,-.06,-.03,.06,.08,.02,-.12,0,-.14,.05,-.07,.03,.1,-.09,-.08,.09,-.13,-.11,.06,-.13,0,.05,-.03,.02,.19,.01,.28,.1,-.1,-.01,-.09,-.03,-.18,-.03,-.06,-.02,-.05,-.01,.02,-.05,0,-.06,-.09,0,-.06,-.09,-.06,.02,.03,-.08,.12,-.05,-.18,.08,-.06,.19,.08,-.08,-.11,.08,.05,.07,.25,.11,-.09,.13,-.08,-.02,-.1,-.03,-.15,.08,-.1,.12,.18,.14,.26,-.08,0,-.01,-.07,.02,.19,-.01,-.06,.17,-.01,.01,-.07,-.15,-.09,-.06,.15,-.07,-.08,-.09,.04,-.11,-.02,.03,-.13,-.02,-.01,-.02,-.04,.09,-.12,-.08,.03,-.07,-.1,.09,-.05,.02,0,-.09,-.03,-.08,-.1,.1,-.14,.07,.16,-.14,-.04,.05,-.02,.08,.03,-.05,-.09,-.09,-.05,.04,.16,.15,-.06,-.05,-.15,-.07,-.1,-.1,-.05,.14,.14,.14,-.15,-.03,0,.13,-.11,-.09,.03,.17,-.03];export{a as rvalData};
