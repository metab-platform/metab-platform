const a=[.17,0,-.1,.05,-.06,.07,-.13,.09,.07,.01,.02,.09,.13,.13,.07,-.04,0,.02,.06,.15,.07,.17,-.07,.1,.12,.03,.17,-.14,-.06,.17,-.04,.19,-.07,-.12,-.04,-.18,-.01,.17,-.03,-.05,.16,-.02,-.16,.05,-.07,.24,-.05,.24,.23,-.15,.25,.08,-.04,-.01,-.06,.11,.23,-.05,.07,-.13,-.24,-.04,-.07,.13,.28,.16,-.05,.16,1,-.15,.07,.05,-.07,-.04,.03,-.18,-.03,-.23,-.03,.16,.14,-.05,-.12,.05,.26,.09,.09,-.23,.13,-.11,-.03,-.07,0,.01,.08,-.02,.07,.03,.19,-.16,-.17,-.04,-.01,-.13,-.08,-.23,-.04,.06,.07,-.17,-.04,-.04,.07,.14,.22,0,-.1,.14,.13,.09,-.2,.2,-.02,-.05,.01,-.14,.08,.14,-.05,-.03,.02,.16,-.17,-.04,-.11,.12,-.1,-.16,.15,-.05,-.07,-.06,0,.09,.01,.08,.02,.03,-.04,.07,-.08,.06,.07,.11,.06,-.08,.18,.14,-.02,.09,-.13,-.15,-.27,-.13,.04,-.26,-.2,.12,-.01,-.03,.1,.15,-.04,.14,-.08,.16,-.15,.14,-.18,-.03,.02,.03,-.2,-.12,-.05,-.12,0,-.05,-.2,.09,.11,-.12,-.06,-.05,-.16,-.09,-.2,-.01,.02,.14,.16,0,-.03,.05,.27,-.14,.1,-.15,-.17,-.14,.05,.1,.05,.08,-.07,-.22,-.17,.03,.11,.21,-.03,-.06,-.2,-.01,.03,-.05,-.02,.09,.04,-.11,.05,-.22,.19,-.16,-.14,.03,.07,.16,-.11,.05,-.09,.11,.12,-.02,.02,.11,-.01,-.1,-.09,-.08,-.25,.11,-.06,-.22,-.07,-.12,-.09,-.02,-.02,-.11,.08,.02,-.04,-.08,-.01,-.07,.09,.04,.19,.1,.24,.14,-.01,-.12,.02,-.03,.15,-.15,-.14,.25,-.13,.24,.14,.18,.03,-.04,.16,.08,0,.15,.02,-.18,.01,.11,-.02,-.17,.2,.17,-.15,-.05,.05,-.11,.12,-.02,-.07,.11,.05,-.12,-.09,.1,.01,-.25,.1,-.04,0,-.04,-.06,-.02,-.18,-.36,0,.13,.12,0,.06,.02,.03,.12,.02,.02,.02,-.03,.02,-.21,.14,-.07,.14,-.02,.12,.06,0,-.18,.15,.21,-.01,-.18,-.07,-.11,-.16,.05,-.11,-.01,.13,.08,.35,.11,-.15,0,-.2,-.12,.14,-.23,.03,.09,0,.03,.06,-.02,-.2,-.21,.16,-.12,.15,-.06,-.26,0,.1,-.01,.13,-.08,0,-.07,.03,-.06,-.03,-.08,.03,.03,-.08,-.05,-.19,-.14,-.09,-.08,-.04,-.1,.14,-.16,.12,.04,.19,.13,-.19,.12,-.33,0,.18,-.22,-.1,.06,-.16,.11,-.03,-.15,.12,-.09,-.09,-.04,-.13,-.05,-.06,-.02,.07,-.2,0,.02,-.06,-.24,-.03,.03,.06,-.06,.14,.02,-.02,-.03,.14,-.03,-.09,-.16,-.14,.02,-.02,.29,-.09,-.12,-.08,-.01,.18,.19,-.03,-.11,.04,.03,-.09,-.05,.2,0,0,-.09,-.12,-.03,.2,-.19,-.02,.08,-.06,.07,.13,0,.05,-.01,-.04,-.04,-.03,0,-.09,-.01,-.08,.26,-.1,.08,-.14,.08,-.2,.12,-.15,-.09,-.01,-.2,.08,.05,.22,-.01,-.1,-.03,-.03,-.18,-.13,.02,-.01,.06,-.07,.13,-.03,-.23,.01,-.05,-.02,-.23,-.14,.16,-.02,-.05,-.14,.08,-.06,.08,-.2,.01,.12,-.09,-.02,-.15,-.12,.05,.06,-.14,.03,.03,-.02,-.04,.02,.04,.19,.02,-.04,.01,-.05,.1,.16,-.01,.04,.22,0,.31,-.01,.26,-.13,-.03,.16,-.01,-.1,-.14,-.09,-.17,-.01,.04,0,.23,-.1,.09,.18,.02,-.04,-.03,-.09,-.06,-.11,-.07,-.22,-.14,.1,.05,-.11,-.07,0,.1,-.11,-.06,.03,.24,-.11,-.02,-.12,.09,-.1,-.11,.07,-.01,-.01,-.09,.02,-.2,-.01,.06,-.11,-.08,-.04,-.08,-.12,.01,-.14,.11,-.09,.09,-.04,.15,.14,-.04,-.12,.07,-.13,-.08,-.09,.12,-.1,.12,.09,.19,-.08,.01,-.2,.05,-.01,.17,.01,-.09,-.12,.18,-.04,.22,.03,-.22,-.11,-.06,.01,0,.01,.08,-.11,-.05,.13,-.12,.09,0,0,.02,-.16,-.15,.2,.12,.06,-.08,-.01,.18,.1,.1,-.11,-.03,-.08,-.16,-.02,-.02,-.17,.19,.08,.02,.09,-.01,.08,.24,-.04,.13,-.01,-.05,-.15,-.01,.17,-.11,-.17,-.07,-.12,-.08,-.05,.01,.07,.02,0,.02,.03,.23,-.11,.01,-.09,.14,-.1,.01,-.08,.1,.02,.07,.06,-.23,.05,.03,.16,-.03,-.07,.13,-.08,-.06,.03,-.01,.02,-.04,.17,0,-.02,-.2,.13,-.1,.01,.01,-.1,-.16,.14,.01,.21,-.09,.26,.06,-.07,.06,-.06,-.11,.02,-.22,-.13,-.08,.08,-.07,.05,.25,-.05,.07,.16,.02,.13,-.13,.18,.13,.17,.13,.04,.01,.08,.07,.05,-.13,-.29,.11,.01,-.01,.06,-.01,-.06,0,.23,0,-.01,-.01,-.05,.08,-.04,.24,-.09,.1,-.02,-.02,-.16,.19,.14,-.04,-.17,-.18,-.04,-.24,.06,-.05,.21,.16,-.16,.14,0,.04,-.11,.03,-.07,-.22,.22,.07,.1,-.16,.06,.17,.04,-.1,.06,.04,-.03,-.13,-.04,.18,-.01,.03,.05,.16,-.15,-.05,.1,.24,.02,-.14,-.11,-.06,.12,.09,-.03,0,-.1,-.02,-.04,.08,-.23,.23,-.23,-.13,.12,.17,-.17,-.06,-.14,0,.02,-.17,.04,.1,-.03,.02,.08,.08,.16,-.01,.01,-.11,.01,.03,.01,.22,-.06,-.03,.04,-.06,-.06,.06,.01,.08,.17,.12,.17,-.03,-.03,-.01,-.12,-.03,-.09,.01,-.01,.04,.18,-.02,.02,-.1,-.01,-.11,-.15,.18,-.1,.15,-.01,-.09,.04,-.12,-.05,-.29,-.04,-.13,-.1,.01,-.11,.17,.02,-.12,.03,.09,.26,-.07,.03,-.07,-.03,.25,-.04,-.04,-.14,-.1,-.01,-.03,.03,-.08,-.04,.01,.03,.12,-.13,-.1,.11,-.04,-.08,0,-.08,-.04,.1,-.06,.05,.01,-.15,-.09,0,-.05,.1,.13,.08,-.02,.09,-.16,.1,-.1,.07,.08,.11,-.03,.12,.07,0,-.09,-.09,-.08,-.05,-.09,.04,.01,.2,-.06,-.09,.04,.09,-.06,.06,.04,-.06,.06,.11,.2,.02,-.05,.07,-.11,-.08,-.04,-.09,.03,.17,.05,-.13,.06,.01,.16,.16,-.1,-.16,.07,-.06,.1,-.03,-.05,-.15,.07,-.01,.03,.09,-.1,-.06,-.05,.05,.05,.1,-.15,-.01,.12,.42,-.11,-.12,.19,-.07,.07,-.04,.2,-.05,.02,-.04,-.13,0,-.08,-.09,0,-.15,-.17,.07,-.13,-.13,-.05,.04,.05,-.06,.02,.04,-.01,-.03,-.25,.05,-.08,.09,-.06,.12,-.02,.23,.03,.23,-.05,-.16,-.08,.04,-.07,-.04,.07,.15,.1,-.14,.01,.16,.17,-.03,.12,-.22,.02,.11,.11,-.06,-.02,-.04,.01,-.05,-.19,.01,.08,-.03,.13,-.06,-.04,-.04,.12,-.06,-.16,-.18,.09,.07,.1,.16,.03,.08,.01,-.17,.12,-.18,-.1,.03,.11,-.06,-.04,.1,-.07,-.01,.05,-.18,.16,-.08,-.09,0,-.01,-.02,-.17,-.25,-.01,.13,.15,.34,.11,0,-.06,-.13,.09,.14,-.07,.04,-.01,.06,.13,-.03,.15,.03,-.05,-.05,-.03,0,-.06,0,-.07,.02,.06,.02,.03,-.08,-.05,-.04,0,.08,-.04,-.1,.24,-.21,.19,-.08,-.12,.04,-.02,-.01,.13,0,.09,.11,-.14,.07,-.25,0,-.16,-.11,-.01,-.14,-.04,-.12,.05,.11,.01,-.13,-.12,.01,-.07,-.04,-.05,-.03,.05,-.15,.04,.04,.05,-.04,.01,.2,-.18,-.05,-.02,.05,0,-.16,.08,.22,-.16,-.15,-.11,0,.01,.15,-.13,.07,-.14,-.03,-.12,-.14,-.01,-.16,.02,-.1,.05,.16,-.08,.22,.04,-.02,-.2,-.08,.02,0,0,0,.04,.04,.24,-.05,-.01,.18,.09,-.14,.05,-.11,-.07,-.05,-.08,.09,-.03,.01,-.01,-.12,-.09,-.01,0,.11,.09,.01,.08,-.05,.01,.05,0,.1,.19,-.08,.04,.15,-.17,.26,-.12,.18,.04,-.02,-.09,.11,.1,-.02,.18,-.02,.07,-.05,.08,.03,.11,-.06,.07,.01,-.11,-.06,.09,.03,.02,.09,.03,-.13,-.07,.01,.11,0,.08,-.1,-.07,.13,-.08,.09,-.2,.05,-.19,.03,-.02,.25,-.11,.08,.05,-.2,-.1,-.01,.25,-.17,-.09,.16,-.13,.08,-.17,-.14,0,.04,-.06,.05,.09,-.03,.03,-.09,-.13,-.2,-.11,-.27,.18,.03,-.1,-.09,.2,-.07,.04,.03,.1,-.21,-.09,.03,-.11,.14,.17,-.03,-.01,-.15,-.15,.04,.2,-.19,-.08,-.18,.06,-.18,-.05,-.05,-.09,-.07,-.06,-.09,-.06,-.13,.1,.1,.08,-.12,.01,-.04,-.02,.08,.01,-.06,-.09,.03,.13,.08,.03,-.13,.09,-.06,.06,.08,-.07,-.03,-.09,.05,-.05,-.12,-.13,-.13,-.1,.05,-.13,-.01,-.09,.01,.21,-.09,-.13,-.15,.01,-.04,-.12,.03,.14,.08,-.16,.02,.34,-.17,-.07,.04,.09,.12,.05,-.07,-.02,-.07,.02,.19,.03,-.14,-.16,.25,-.06,.01,-.09,.03,.08,-.02,-.03,-.07,-.07,-.07,.07,.44,.13,-.13,-.22,-.1,.12,.1,-.02,-.07,0,.04,.03,.07,-.06,.14,.17,.06,.08,-.03,.03,-.04,-.08,-.01,0,.08,-.13,.01,-.03,-.05,-.15,-.05,0,-.11,-.01,-.09,.01,.16,.11,-.17,.06,-.17,-.11,0,-.16,0,-.09,-.17,-.01,.06,-.02,-.05,.09,-.12,-.07,.06,-.09,-.07,-.09,-.1,.04,-.15,-.05,-.08,.04,.22,-.12,-.03,-.13,.2,-.16,-.02,.02,-.06,.18,.08,-.06,-.02,-.16,-.25,-.32,-.09,.02,-.03,.09,-.04,-.04,-.06,-.05,-.14,-.05,-.09,.09,-.02,.02,-.05,-.15,-.1,.21,-.22,.02,-.06,-.08,-.1,-.12,-.09,-.1,-.2,-.18,-.17,.24,-.1,-.08,-.05,-.18,.07,.21,-.07,-.18,-.01,-.04,.03,-.1,-.06,.09,.06,.1,-.24,-.05,-.06,-.08,-.02,-.05,.13,.15,-.08,-.15,.14,.06,.01,-.09,-.12,.1,-.18,.1,-.02,-.15,-.15,-.18,-.22,-.04,-.13,.04,-.15,-.05,-.02,.21,.08,-.06,.06,.05,-.07,-.13,-.07,.09,.11,.06,.07,-.11,-.02,-.13,-.01,.17,-.08,.05,.06,-.12,-.11,.14,.04,0,-.12,-.06,-.1,-.09,-.03,-.06,.03,-.06,.12,-.07,.01,-.04,.02,.13,-.16,-.01,.02,-.14,-.15,.02,-.13,-.2,.02,-.01,.01,.05,-.02,.24,.14,-.08,.13,-.1,-.02,.03,-.16,-.11,-.01,-.14,0,.05,-.11,-.06,-.03,-.08,-.13,-.1,-.13,-.16,-.08,.05,-.05,-.12,-.21,-.09,-.04,-.06,0,.14,-.03,.01,-.12,.05,-.12,-.16,.09,-.09,-.06,0,.07,-.2,-.07,.17,.03,.01,-.07,-.07,-.06,.05,.21,-.04,-.1,.16,-.12,.01,.07,.03,.03,.03,-.04,.04,.06,.06,.04,.04,-.1,.18,-.06,-.08,-.17,-.1,-.11,-.07,.38,.03,-.16,.01,.04,.16,-.07,-.15,.03,.13,-.16,-.06,.08,-.07,.1,-.17,-.09,-.16,.04,-.08,-.14,-.06,.09,-.06,-.07,-.16,-.21,.1,-.08,-.05,.05,-.1,.04,-.22,-.09,-.07,.16,-.09,.03,.19,.22,-.05,.1,.12,-.01,-.11,-.1,.09,-.03,.12,-.12,-.12,-.16,.01,-.07,.11,-.11,.15,.12,.2,-.09,-.14,-.06,-.06,-.16,.22,.03,-.25,-.09,-.1,.13,-.03,-.09,-.09,-.01,-.14,-.1,-.18,.1,-.23,-.09,-.11,0,.09,.06,.07,.01,-.13,-.05,-.07,.04,-.05,-.01,-.15,-.03,-.02,-.17,.17,-.16,.11,.12,-.13,-.03,-.09,-.14,-.06,-.05,-.09,-.01,-.08,-.15,.04,-.14,-.24,-.01,.09,-.26,-.02,.03,.02,.07,-.07,.13,-.01,-.08,.13,.2,.01,.11,-.1,.13,.22,-.03,-.04,-.04,.05,-.08,-.04,0,.11,0,.13,-.22,.04,-.03,-.05,-.12,-.11,.04,.12,-.03,.03,.01,0,-.03,.01,-.11,-.09,.09,.13,.01,-.22,-.04,-.13,-.1,.26,-.12,-.09,-.15,-.19,-.1,0,-.03,-.12,.1,.02,-.01,.09,0,-.08,-.18,.13,-.06,.11,.04,-.05,-.17,-.06,.17,.04,-.11,-.16,0,-.13,.13,-.01,.11,-.04,.02,-.07,0,-.03,.03,-.2,-.09,-.1,-.24,.11,-.21,-.05,.05,.07,0,-.18,.29,-.3,-.13,-.09,.09,.05,-.02,-.32,-.02,-.07,-.2,-.01,-.16,-.02,-.03,0,-.01,-.09,-.03,-.07,-.03,-.03,-.04,-.09,.04,.08,-.03,.03,.15,.08,.13,.06,-.11,-.02,.06,.09,.02,.06,.16,0,-.22,-.08,-.14,.01,-.14,-.19,-.09,0,-.11,.14,.09,-.1,-.28,.02,.06,.17,.1,-.02,-.09,.01,.09,-.15,-.04,-.02,.15,-.12,-.01,.05,-.03,-.1,-.07,.13,-.08,-.09,-.13,-.01,.1,.07,-.15,.08,-.08,-.04,-.01,-.02,-.01,-.06,.07,-.04,-.09,.04,-.01,0,-.05,-.07,.09,-.14,-.06,.12,-.03,-.01,.02,-.08,.17,-.05,-.11,.1,-.04,-.08,.01,-.1,.07,-.05,-.1,-.04,-.15,-.09,-.04,.06,.22,-.14,.03,-.14,.13,-.03,.14,-.04,-.06,.06,-.06,-.12];export{a as rvalData};
