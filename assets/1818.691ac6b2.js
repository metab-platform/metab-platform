const a=[-.01,.01,.03,.09,-.06,-.2,-.15,.03,-.02,-.05,-.07,-.33,.08,.1,-.03,-.2,.12,-.17,-.07,-.11,.12,-.23,-.17,.12,-.07,-.03,-.2,-.13,.11,-.13,-.14,-.19,-.18,-.08,-.2,0,-.04,.02,-.15,-.01,.14,-.02,-.11,-.14,-.06,-.01,-.19,-.2,-.05,-.01,.11,-.05,-.08,.12,-.14,.05,-.19,.04,.07,-.06,.03,-.13,.1,.11,-.07,-.09,-.04,.03,.11,-.12,.17,-.2,.02,.14,.03,-.1,-.03,-.01,-.03,.01,.04,-.05,-.29,0,-.24,-.18,.06,-.1,.1,.02,.02,.15,.07,-.03,-.22,-.06,.07,-.08,-.24,.01,.03,.04,-.15,.03,-.02,-.01,.11,.19,-.05,.02,.04,-.09,.24,.09,-.36,-.08,.03,-.17,-.12,-.04,.12,-.1,-.21,-.19,-.03,-.12,-.02,-.19,-.13,-.04,.05,-.01,-.31,-.02,0,-.06,.06,.17,-.12,-.01,-.06,0,.03,.04,-.04,.06,.11,-.11,.09,.14,.01,.19,.11,-.06,.09,-.08,.08,-.24,.17,-.01,-.08,-.08,.19,-.04,.04,-.03,-.06,-.1,-.2,.03,-.1,-.09,.11,0,-.07,-.08,-.17,-.09,.02,-.09,.26,.08,0,-.08,.06,-.12,-.15,-.11,-.04,-.21,-.05,.06,-.02,.02,0,-.04,-.07,-.08,.04,-.36,.22,.04,-.06,.02,.02,-.18,.05,-.01,0,-.09,.16,-.02,-.24,-.02,.05,.01,.1,.18,-.1,-.01,.14,-.04,-.03,.11,.08,-.03,.09,-.16,-.21,-.24,.19,-.13,.03,.01,.02,-.05,0,.06,.02,.43,-.04,.01,.06,.03,.13,.21,.28,.08,-.17,.07,-.13,-.31,-.14,-.28,-.09,.09,-.04,.09,0,-.1,.07,-.02,.11,-.07,-.1,-.02,-.05,-.02,-.05,.01,-.24,-.13,-.1,-.01,-.06,-.16,-.04,.02,.02,-.08,0,.07,.21,.08,0,.02,-.12,-.06,-.16,-.29,-.11,-.04,-.1,.09,-.05,-.1,.11,.09,.17,.26,.05,-.17,-.31,.05,-.16,.05,-.11,.04,-.06,.06,.02,.1,-.1,-.02,-.35,.27,.16,.01,-.02,.01,.04,-.23,-.08,0,.03,.03,-.07,.1,-.17,.04,.03,.01,-.15,.08,-.2,0,-.04,.12,.05,-.22,.05,-.17,.03,.09,.01,-.08,0,.05,-.1,.02,.02,.11,-.11,0,.15,.16,-.07,.2,-.05,-.04,.03,0,.08,.19,-.08,.13,-.05,-.02,-.11,.21,-.19,-.03,.07,-.16,0,-.15,-.13,-.03,.2,-.03,.23,-.06,.3,-.02,-.12,-.15,.19,-.05,-.14,-.15,-.03,.05,0,0,.04,-.13,-.3,.15,.14,-.05,-.21,-.02,-.01,.07,-.13,.08,-.09,-.14,.04,.07,.06,.13,-.21,-.01,-.31,-.04,-.08,-.18,-.04,.04,-.11,-.06,-.29,-.01,-.08,-.05,-.14,-.08,.11,-.1,.08,-.22,-.02,-.06,.14,.1,.15,-.08,-.08,-.12,-.07,0,.05,-.01,.13,-.15,-.09,-.04,.01,-.01,.06,-.02,.08,-.11,.06,.05,-.09,-.03,.01,-.03,.03,-.08,.11,0,.01,-.1,.2,-.23,-.09,.1,.15,-.04,-.1,.01,.03,-.1,.08,.13,-.08,-.08,.07,.04,-.16,.02,.07,.01,-.16,.01,-.15,-.01,.27,-.35,.19,-.06,-.07,-.07,-.06,-.17,-.15,-.08,.1,.23,-.06,-.09,.02,-.04,-.15,-.03,-.13,-.01,-.04,.15,.06,-.18,.09,-.03,-.11,.11,-.01,-.04,.09,-.09,-.09,-.19,-.01,-.08,-.12,.05,-.04,-.04,.08,-.02,.09,.2,-.06,-.08,-.02,-.25,-.05,-.35,-.01,.03,-.01,-.06,-.27,-.17,.06,-.03,-.04,.1,.02,-.07,-.01,.01,-.12,-.08,-.06,.05,.18,-.05,-.01,-.17,-.08,.12,-.18,.09,-.18,.02,-.18,0,-.06,-.01,.19,-.03,-.17,-.05,0,-.17,.02,-.07,-.24,-.13,.03,-.04,-.03,-.05,-.11,.07,-.25,-.04,-.02,-.02,.06,-.01,.11,.11,.04,-.05,.04,-.05,-.15,.04,-.14,.01,-.25,-.16,-.08,-.23,.13,.06,.26,-.03,.23,.06,.03,.01,-.13,.16,-.08,-.06,-.08,-.21,-.11,-.16,-.01,-.21,.05,-.03,-.04,.22,.17,.08,.01,.05,-.08,-.03,-.11,.11,.19,-.21,.09,-.01,-.3,-.15,-.1,-.08,-.03,.03,-.15,-.05,.02,.04,-.03,-.11,-.08,-.11,-.01,.15,-.04,-.31,-.14,-.11,-.11,.01,-.12,-.09,-.05,-.02,.02,.02,.13,-.16,.05,-.06,-.16,-.03,-.03,.01,-.12,.17,.19,-.04,-.14,-.03,.06,-.03,-.04,.03,-.05,.03,-.01,-.08,-.14,0,-.02,.14,-.02,-.22,-.09,.1,.01,.11,-.03,-.03,.12,-.04,.04,-.19,-.15,-.13,-.02,-.09,-.03,-.08,-.19,.08,.13,-.29,.03,.01,.11,-.1,-.03,.24,.04,-.18,-.17,-.23,.01,-.05,-.02,-.12,-.13,.14,.06,.04,-.03,.03,-.19,.14,-.13,-.07,-.16,-.1,-.29,.05,.07,-.03,-.03,.02,-.06,-.15,-.19,-.04,0,-.16,-.09,-.07,-.11,-.06,-.1,-.07,-.07,-.07,-.09,.14,.05,.03,.07,-.19,-.06,-.02,-.07,-.03,.01,-.1,.15,.11,-.17,.08,-.05,-.27,-.23,-.04,-.02,-.08,.05,.01,-.12,-.34,-.24,-.13,-.08,.04,-.05,-.02,-.05,.04,.16,-.07,.1,.01,.15,.02,-.04,.13,.02,-.22,.01,-.08,.01,0,-.14,-.18,-.04,.1,.17,-.01,-.04,-.15,0,-.1,.09,-.07,.11,-.01,-.06,-.15,-.1,.01,.03,-.06,.03,-.21,-.03,-.34,.19,-.06,-.19,-.13,-.1,-.09,-.09,.03,-.02,.01,.14,-.32,.13,-.13,-.21,-.15,.08,-.05,.21,-.14,0,-.02,.05,-.19,.01,-.02,-.12,-.03,-.06,.03,-.13,-.13,-.06,.12,-.01,-.11,-.05,.01,.04,-.06,.12,-.17,.04,-.02,-.22,.09,-.12,.05,-.12,-.14,.05,.09,-.11,.18,.03,.09,.11,.1,-.14,.13,.04,.01,-.04,.02,-.08,-.19,-.09,-.06,-.06,-.05,-.05,-.02,-.04,-.02,.01,-.07,-.11,.05,.02,-.21,-.09,.02,.08,.15,0,-.02,.01,.09,-.08,-.08,-.05,-.03,-.17,.01,.06,-.05,-.1,-.07,-.05,.13,0,-.1,-.12,-.13,-.08,-.1,.08,-.02,.12,-.12,.11,-.12,.33,.12,.07,.14,-.05,-.12,-.03,-.29,-.08,-.19,-.01,-.11,-.04,-.05,.12,.05,-.05,-.05,.01,-.18,.1,.13,.03,-.2,.04,-.02,-.01,.25,.08,-.13,.05,.03,.01,.12,-.18,.15,-.05,.1,0,-.1,-.11,0,0,.13,.01,.15,.05,.05,.07,.08,.24,0,.01,.02,-.19,-.04,.06,-.11,-.13,-.11,.19,-.03,0,-.08,-.12,-.07,-.04,.08,.1,-.03,-.06,-.13,-.03,-.14,0,-.15,.06,.04,-.03,-.09,-.05,-.06,.02,.12,-.06,0,-.14,-.05,-.07,.03,-.13,.14,.06,-.07,.06,.04,.07,.02,-.1,0,-.07,-.03,.09,.08,-.22,-.03,-.08,-.04,.09,.21,0,-.02,-.05,-.08,.06,0,.07,-.12,-.08,.26,-.07,-.08,-.12,.17,.02,-.12,-.14,.04,.05,-.05,.05,.03,0,-.22,0,.03,.02,-.07,-.11,.06,-.22,.05,.26,.03,.03,-.31,.05,.08,.09,.02,-.01,-.1,-.04,-.08,.09,.04,-.11,.01,-.12,-.03,-.05,-.24,.04,-.05,-.01,-.06,-.03,.08,-.16,-.07,.02,-.08,-.19,.04,-.12,.06,-.04,.01,.28,0,-.02,.05,.07,-.06,.01,.12,-.15,-.11,-.06,.05,-.03,-.11,.01,-.27,-.06,-.14,-.06,-.04,.01,-.18,0,.19,-.13,-.16,.06,-.04,-.21,.07,-.02,.19,-.02,.01,-.05,-.15,-.04,.15,-.04,-.17,-.07,.02,.07,-.02,-.08,-.06,.03,.03,-.05,.06,-.03,.15,.02,-.3,-.04,-.13,-.1,.2,.18,-.01,-.07,-.03,.17,.04,.09,.01,-.01,-.14,-.07,-.07,-.06,.05,-.04,-.08,-.24,-.11,-.04,.02,-.02,-.02,-.06,-.05,-.08,.11,-.06,.04,.15,.01,-.16,-.06,-.02,.02,.02,-.13,-.16,-.03,.09,-.03,-.06,-.05,-.2,-.06,-.09,-.03,-.07,-.05,.09,.04,-.09,.09,-.1,.06,-.15,-.04,-.08,-.07,.02,-.01,-.05,-.15,-.03,.13,-.02,-.12,.01,.07,-.07,-.03,-.14,.01,.06,-.09,.06,.01,.07,-.14,-.02,-.03,-.07,-.07,-.23,-.09,.1,-.11,.11,.11,.03,.04,.22,.24,.08,-.13,-.05,-.02,.03,-.13,.04,.07,-.11,-.1,-.12,.02,-.01,-.16,.02,-.06,.02,-.08,.01,.04,-.14,-.04,-.03,.06,-.01,-.07,.1,.18,-.14,-.05,.05,-.07,-.03,-.13,.02,-.18,.02,-.24,-.06,-.1,.02,-.01,-.1,-.01,.17,-.03,0,.17,-.03,-.04,-.07,.06,-.01,-.1,-.09,-.04,-.13,.03,.08,-.23,.1,-.03,-.13,-.02,.06,.12,-.08,-.06,.02,.03,.08,0,.08,-.1,.05,.01,.01,0,.06,.1,.1,.01,-.12,.03,.01,.04,.07,-.01,.17,.04,.02,-.04,-.05,.03,-.01,-.05,-.12,-.04,.03,-.03,-.02,-.05,-.04,.01,-.08,-.07,-.05,-.08,0,.01,.05,-.22,0,-.01,-.02,-.04,.01,.02,-.05,-.24,.01,-.02,-.09,.05,.05,-.04,.06,.03,-.07,.04,-.06,-.03,-.13,-.06,-.1,-.02,-.07,-.1,-.11,-.03,-.07,-.11,-.11,.03,.05,-.16,-.01,.05,.17,-.19,-.04,-.02,-.07,-.05,.11,-.08,.08,.05,-.09,.03,-.08,-.02,-.02,-.1,.05,.05,.06,0,-.01,.05,-.14,-.11,-.06,.05,.1,.02,.01,-.03,.05,.07,-.14,-.02,-.17,-.1,.02,-.1,-.33,-.06,-.07,0,-.03,.19,.11,-.06,-.04,-.12,.07,-.22,-.03,-.15,-.06,-.01,-.02,0,-.02,.07,.07,.01,.03,-.07,-.07,.1,.19,-.08,-.05,-.05,-.1,.02,-.07,-.04,-.21,-.12,-.02,.09,-.1,-.06,.05,.01,.06,0,0,.06,-.07,-.14,.12,.19,-.14,-.02,.02,-.04,-.09,.08,-.08,0,.02,.05,.06,-.09,.03,-.08,-.13,.04,0,-.2,-.09,-.09,-.06,.06,-.01,-.05,.09,-.03,.14,-.14,-.1,-.06,.01,-.07,-.13,.08,-.13,.1,-.14,.03,.02,.12,.03,.08,-.04,.1,.01,.09,-.06,.09,.54,.18,-.04,-.06,-.01,.01,-.13,.04,-.02,-.05,-.03,0,-.04,-.01,-.04,.08,.02,-.19,-.02,.04,-.02,-.27,-.05,-.04,-.05,.06,-.04,-.04,-.03,-.1,.1,-.13,-.11,.06,.05,.04,-.23,.11,.09,0,-.12,0,-.13,-.01,.12,.01,-.06,-.12,.06,.07,.07,-.04,.06,.18,.05,-.02,-.05,.05,-.02,-.01,.09,.06,.08,-.05,.09,-.05,.21,-.08,.01,.03,.01,-.03,-.06,-.07,.01,.16,.04,-.02,-.01,.09,.01,.04,-.09,.05,-.03,-.05,-.11,.06,-.02,.04,.07,-.05,-.1,.1,-.1,-.02,.01,.07,.16,-.04,-.04,-.12,-.12,-.1,-.18,-.03,-.05,0,0,-.09,-.01,.07,-.01,.1,.04,.04,-.04,.05,.01,-.05,-.02,-.03,.19,.01,-.01,.1,-.28,.07,-.13,.08,.29,.1,-.14,-.25,-.24,-.18,-.08,.02,-.12,-.05,-.02,-.02,0,-.02,-.1,.16,.51,-.07,.04,.07,.07,.46,-.02,-.03,-.05,-.08,.04,-.11,.18,.02,.1,-.11,0,-.17,-.1,.12,.07,.07,-.25,-.16,-.06,-.01,-.06,-.02,-.02,-.05,.01,-.04,.06,-.04,-.07,-.28,.09,-.2,0,.13,-.03,-.2,-.17,-.09,.07,.09,-.16,.07,-.1,-.09,-.03,.04,.1,.12,.07,.2,.09,.07,-.01,-.05,.07,-.15,-.11,.11,.04,-.08,-.07,-.02,.02,.07,-.08,.02,-.26,-.09,-.1,-.05,-.07,.18,-.08,0,-.13,-.08,.05,-.1,0,-.12,-.03,.06,-.09,-.05,.05,.18,-.01,.04,-.03,-.12,.16,-.02,.02,-.1,-.01,-.04,0,-.1,.06,-.01,-.03,-.06,-.11,.4,-.06,1,.1,-.06,-.01,.06,.03,-.12,-.03,-.03,-.13,.04,-.1,-.04,-.02,-.11,-.1,-.08,.04,-.02,-.06,-.06,-.05,-.05,-.02,-.06,.11,-.12,.03,.06,.12,.07,-.23,-.09,0,.14,.01,-.05,.06,.13,.05,-.05,-.07,-.05,.14,.05,.14,.06,-.05,-.01,.24,.23,.04,.02,.01,.21,-.04,-.01,.04,.03,.18,.33,-.05,-.11,-.02,.1,.04,-.12,.14,.03,-.08,-.18,0,-.12,-.06,.06,.04,0,-.18,.07,-.01,-.15,.15,-.08,-.07,-.1,-.03,.15,-.07,.01,-.15,.03,-.04,.07,.07,-.05,.17,.07,-.18,-.09,.04,-.09,.07,.1,-.05,-.03,.08,.03,-.09,-.13,-.07,.06,.04,-.09,-.01,-.01,-.11,.18,.04,-.29,.01,-.17,.07,-.06,-.04,-.05,-.06,-.26,.04,.01,-.1,.04,-.04,.11,-.01,.03,.02,-.05,-.2,.02,-.02,.15,.04,-.04,.05,.03,-.22,-.04,-.11,.08,.09,-.14,0,.1,.01,.12,-.15,.05,-.08,.24,-.02,0,-.01,0,.03,-.21,-.05,-.15,-.17,.03,-.08,.14,.05,.14,-.13,-.06,-.13,.01,.04,-.03,.06,-.01,.01,.08,-.02,-.09,-.06,-.04,.07,-.04,-.02,.02,.15,-.16,-.06,.03,.02,-.05,0,.02,-.23,-.05,-.09,.04,.02,-.05,-.03,-.01,-.14,.03,.02,-.09,-.03,.05,.09,-.12,-.07,-.08,.06,-.12,-.03,-.01,0,.05,.04,.14,-.18,.13,-.03,.07,-.12,-.05,-.01,0,-.11,-.23,-.13,-.12,.11,.02,0,-.17,-.13,-.09,-.18,.01];export{a as rvalData};
