const a=[.11,.06,-.2,.04,-.13,-.04,.02,-.05,.06,-.08,-.06,.35,-.13,.18,-.03,.1,-.16,.05,.09,.14,-.14,.22,-.19,.02,0,-.09,.3,-.14,-.28,.31,-.11,.29,-.09,-.03,.06,.09,-.05,.07,.18,0,.15,-.09,-.25,.17,-.16,.21,.1,.12,.17,-.02,.07,.14,.1,-.17,-.06,-.07,.06,-.03,-.01,-.16,-.27,-.02,-.23,.07,.14,.23,-.11,.05,.17,.1,-.04,.09,-.2,.04,-.09,.14,.27,-.27,.06,-.06,.16,-.12,.16,-.1,.27,.22,-.13,.18,.06,-.06,-.11,.01,-.19,.14,.2,-.04,.17,.18,.17,-.28,.05,-.16,.01,.11,-.13,.14,.09,.09,-.1,-.1,-.03,.01,.02,.12,.33,-.03,-.08,.26,-.02,-.05,.12,.26,.08,.11,-.02,-.17,-.06,.08,.1,-.04,-.1,.19,.13,.01,-.05,.07,-.06,-.09,.21,-.06,-.15,-.08,-.15,-.14,.02,.12,.02,0,-.23,-.13,-.21,-.09,-.19,.09,-.11,-.12,.03,.25,.01,-.02,-.05,-.15,-.16,-.06,-.18,-.26,-.08,.15,-.13,-.17,.11,.03,-.16,.09,-.16,.11,.08,.25,-.24,-.08,-.18,.17,-.33,.01,-.12,-.11,.12,.05,-.18,.05,.06,-.16,.06,-.19,-.25,-.15,-.22,-.04,0,.36,.03,-.18,-.06,.01,.24,-.17,-.08,-.13,-.28,.02,-.13,.08,.3,.01,-.02,-.28,-.05,-.19,.13,.28,-.23,-.17,-.06,-.17,-.11,-.08,-.12,.16,.11,.07,.11,-.07,.12,-.16,-.11,-.02,.07,.08,-.08,-.04,-.04,.03,-.03,-.06,-.14,-.04,.02,-.12,-.06,-.08,-.05,.21,-.08,.04,-.15,.03,-.21,-.11,.15,-.07,-.09,.03,-.24,-.12,-.17,-.09,.05,-.07,.1,.01,.38,.27,-.08,-.15,.06,.05,.15,-.15,-.26,.15,-.14,.28,-.09,.08,.03,-.21,.27,-.02,.01,.26,-.02,-.2,-.09,.03,-.12,-.28,.06,.01,-.3,-.22,-.02,-.06,.3,.12,.24,-.13,.08,-.11,-.12,.08,-.17,-.12,0,-.03,.14,-.22,-.08,-.11,-.17,-.1,-.13,.34,.04,-.14,.11,-.05,-.1,.05,.02,-.03,.18,-.12,.1,0,.24,.1,.14,-.13,.05,.18,-.17,-.26,.01,.22,-.03,-.14,-.11,-.18,-.25,.08,-.23,-.04,.01,-.01,.28,-.07,-.11,.01,-.15,-.06,.06,-.37,-.12,.1,.1,.06,.13,-.11,-.22,-.06,.08,-.15,.02,-.09,-.26,.02,-.04,-.14,.14,-.1,.03,.02,.05,-.05,.12,.17,-.18,.03,.01,-.03,-.17,-.12,.06,-.1,.01,-.1,.3,.05,.05,-.06,.24,.03,-.18,-.03,-.13,-.17,.01,-.15,-.17,-.12,-.19,.03,.13,-.18,.13,.06,-.16,-.11,-.12,-.05,-.05,-.04,.24,-.13,-.05,-.09,-.04,-.01,-.07,.08,-.07,-.13,-.03,.16,-.17,-.12,-.05,-.15,-.17,-.12,-.17,-.1,-.11,.18,0,-.24,-.05,-.15,.09,.27,-.15,-.05,.15,-.05,-.03,-.29,.19,-.05,-.06,-.09,-.23,-.15,.09,-.22,-.13,.07,0,.1,.22,-.12,.05,-.07,-.14,-.01,-.13,-.16,-.24,-.11,-.12,.37,-.22,0,-.09,-.17,-.04,-.02,-.12,0,-.03,-.16,.07,.39,.01,.04,-.19,-.1,.11,.11,-.09,.04,-.06,-.01,-.09,-.18,-.12,.06,-.1,-.16,-.03,-.25,-.2,.2,-.12,-.13,-.02,.08,-.03,-.11,-.16,-.14,.02,-.16,-.12,.06,-.18,.07,.16,.04,0,-.11,-.15,.09,-.13,.02,.02,.08,-.11,.06,-.13,.35,-.01,-.1,-.09,.25,.02,.15,-.04,.26,-.03,-.17,.19,-.08,-.19,-.09,-.12,-.15,.23,-.01,.06,.24,-.04,.28,.09,-.08,.17,.09,.05,.04,-.03,.04,-.15,-.12,-.05,.13,-.1,-.13,.05,.18,-.17,.03,.03,.14,-.21,-.09,-.18,.01,-.16,-.18,.21,-.02,.06,-.06,.04,-.2,-.09,.14,-.26,-.15,-.09,-.03,-.13,-.11,-.14,.22,-.05,.19,-.03,.09,.08,-.08,-.22,0,-.22,-.21,0,-.11,-.11,-.03,.07,.1,-.15,.02,-.19,.04,-.06,.25,-.11,-.15,-.17,.04,-.06,.2,.14,-.17,-.01,-.01,-.13,-.02,-.18,.15,-.15,-.17,.24,-.1,.06,-.08,-.1,-.14,.08,-.19,.11,.21,-.03,-.18,-.15,.05,.12,-.07,-.04,.08,-.08,-.29,-.04,-.12,-.07,.14,.03,-.06,-.13,-.24,-.06,.2,.24,.25,.04,-.02,-.2,-.12,.11,-.11,-.06,-.14,-.09,-.09,-.11,-.02,.08,-.08,-.15,-.01,.03,.09,-.09,.02,.01,.07,.01,.1,-.01,.08,-.12,-.16,-.21,-.21,-.12,-.08,.02,-.11,.07,.19,-.19,.12,-.02,-.11,.18,-.02,.03,.19,.09,-.03,-.07,-.11,-.03,-.02,-.19,-.19,.13,.03,.18,-.17,.22,.13,-.08,-.09,-.05,-.08,-.03,-.05,-.11,-.17,.06,-.21,.15,.26,.15,.15,-.02,-.02,.1,-.21,.14,.1,.28,-.01,.02,.06,.04,.05,-.13,-.11,-.33,.18,-.15,-.1,.04,-.16,-.22,.02,.14,.02,-.08,-.11,-.13,0,-.11,.25,-.05,-.08,-.08,-.17,-.19,.26,.25,-.1,-.14,-.19,-.14,-.25,-.01,.23,.21,.05,-.18,.11,-.15,.05,-.13,-.14,-.03,-.22,-.02,.04,.1,-.29,-.04,-.05,-.13,.16,-.06,-.04,.01,-.1,-.04,.17,-.01,-.11,.1,.09,.04,-.1,.16,.11,-.06,-.11,-.11,-.09,.23,-.03,.11,-.06,-.13,-.05,-.16,.11,.02,.41,.18,-.07,.09,.17,-.22,-.17,-.03,-.06,.11,-.19,.05,.26,-.23,.16,.18,.12,-.09,.15,.24,-.01,-.07,-.07,-.17,.07,-.19,-.15,.01,.14,-.11,-.08,.2,.04,.05,.01,.09,.07,.09,-.11,-.27,-.08,-.25,.01,.22,.05,.32,-.21,.08,-.12,.03,.14,-.25,-.04,-.17,-.05,-.1,-.02,.19,-.25,-.05,.01,.04,-.03,-.12,-.14,-.16,1,.03,.02,.04,-.14,.11,-.1,-.05,-.08,-.08,.26,.04,-.04,-.17,-.12,-.08,-.01,0,.05,-.23,.04,.18,-.06,-.17,-.14,.07,-.14,-.03,-.07,-.22,-.08,-.05,-.14,-.09,.07,-.16,.2,0,-.09,.13,.07,-.05,-.07,.03,-.15,-.08,-.02,.02,.03,-.05,-.26,.03,.09,.01,.1,-.14,-.1,-.15,-.23,-.12,-.1,.02,-.04,-.18,.22,-.17,.05,.07,-.07,.19,0,-.03,.22,-.12,-.16,.01,-.09,-.14,-.22,-.21,-.11,.21,-.14,-.16,-.08,.05,.06,.11,-.15,-.17,-.02,-.13,-.01,.13,-.15,-.05,-.07,-.22,-.03,.15,.01,.12,-.06,0,.15,.16,.04,.02,.14,.21,-.13,-.19,.33,-.18,0,-.17,.1,-.09,-.02,-.14,-.13,-.04,-.09,-.07,-.2,-.14,-.03,.09,-.09,-.03,-.05,.05,.01,-.02,-.09,-.02,-.05,.22,-.04,.03,-.11,.08,-.09,.08,-.11,.08,-.05,.06,-.07,-.25,-.22,.25,-.09,0,.01,.14,.02,-.25,-.15,.32,.16,-.05,-.05,-.2,-.03,.11,-.05,-.09,.17,-.01,-.02,-.15,-.05,.15,-.11,-.09,.14,-.11,-.12,.07,.16,-.14,.09,-.23,.17,-.07,.15,.23,-.15,-.18,.01,-.27,.14,-.17,-.26,-.06,0,-.21,-.22,.01,.16,.01,.03,-.11,-.01,-.12,.02,-.13,.2,.09,-.21,-.24,-.09,.08,.19,.17,-.02,-.24,-.11,-.02,.02,.23,-.11,.11,.01,-.06,.09,-.1,.19,-.08,-.09,-.17,.15,.12,-.1,-.16,-.17,-.03,-.05,-.15,.1,.07,-.12,-.15,0,-.14,.18,-.21,.14,.11,.12,-.1,-.21,.13,-.13,0,-.02,.12,.05,-.06,-.12,.17,-.18,-.15,-.05,-.17,-.15,-.25,-.04,.06,0,.1,-.05,-.16,-.3,-.01,-.01,-.02,.22,-.04,.1,.12,-.02,.15,.03,-.08,-.04,.08,-.1,-.09,-.06,-.03,.04,-.24,.03,.13,-.29,-.22,-.08,.02,-.12,-.06,-.22,-.03,-.2,-.01,-.14,-.01,-.13,-.19,.09,.01,.17,.03,-.15,.16,-.11,-.06,-.12,-.12,-.11,-.11,0,.02,-.06,.08,.32,-.12,-.01,.25,.16,-.26,-.13,-.15,-.29,-.04,-.02,.11,-.02,-.02,-.07,-.18,.06,.01,.02,.1,-.21,-.13,.07,-.21,-.15,.17,-.03,.28,.16,-.17,.25,-.02,-.28,.23,-.14,.08,.1,.04,-.09,.26,.15,-.2,.15,-.11,-.09,-.16,-.08,-.23,-.05,-.28,.11,.12,-.24,-.21,.03,-.08,-.08,.16,.1,-.12,.03,0,.11,.13,-.03,-.17,-.15,-.01,-.16,.07,-.25,-.1,-.22,-.13,-.21,.1,-.05,0,.06,-.23,-.16,-.08,.19,-.06,-.08,.12,.01,-.09,-.15,-.18,-.07,-.01,-.1,-.05,-.08,.06,.03,.05,-.1,-.04,-.15,-.15,.35,.17,-.14,.05,.03,-.11,.05,-.12,.21,.03,-.17,-.17,-.09,.18,.13,-.11,-.05,-.04,-.21,0,-.03,-.22,-.15,-.22,-.05,-.17,-.1,-.07,-.05,-.1,-.05,-.16,-.13,-.07,.03,-.03,-.03,-.12,-.01,-.07,-.06,.02,-.07,-.02,-.12,-.07,.07,.12,.14,.12,.06,.06,.04,.03,.04,-.07,-.16,.06,.12,-.14,-.16,-.11,-.14,.02,-.17,-.03,-.04,-.01,.12,-.12,.05,-.12,-.05,-.02,-.09,-.05,.05,-.01,-.1,.14,.16,-.13,-.07,.09,-.01,.03,-.04,-.11,-.04,-.06,-.13,-.13,.26,-.11,-.25,.06,.22,-.07,.27,.18,-.03,-.2,-.11,-.17,-.15,-.08,-.13,.13,.15,-.17,.03,-.12,.02,.12,-.12,.03,-.08,.12,.01,.35,-.17,.14,.17,.05,-.05,-.12,-.11,-.03,-.08,.14,.17,.18,-.11,.03,.07,-.11,-.17,-.13,.05,.07,-.01,-.14,.28,.12,.23,-.18,.08,-.18,-.16,-.11,-.04,-.07,-.11,-.08,-.02,.07,-.01,-.13,-.06,-.29,-.09,.1,-.2,-.11,.14,-.07,-.12,.11,.12,.04,-.18,.11,-.15,-.18,-.27,.14,-.21,-.12,-.15,-.05,-.01,-.12,-.05,.07,-.12,.02,-.25,-.05,.05,-.24,.01,-.09,-.16,.09,.11,.17,-.06,-.09,.03,-.06,.18,-.16,-.11,-.04,-.03,-.19,.04,-.09,-.07,-.23,-.11,-.08,-.09,-.21,-.21,-.1,.02,-.01,-.04,.03,-.28,-.04,-.02,-.16,-.18,-.04,-.12,-.12,-.09,-.19,-.02,-.08,.05,-.29,.04,-.21,-.09,-.04,.05,.04,.06,-.1,-.17,-.01,-.14,.01,-.3,-.07,.16,-.21,.02,.14,-.06,-.17,-.09,-.16,-.2,-.19,.01,-.1,-.15,-.17,.11,.15,-.1,.03,.01,-.05,-.15,.12,-.02,.16,-.08,-.04,-.17,-.16,-.11,.17,.06,-.09,-.19,-.19,-.1,.08,.08,-.15,-.08,-.18,-.22,-.12,-.14,-.01,-.19,.07,-.09,.16,.06,-.13,.02,.12,.08,-.17,-.16,-.01,-.01,-.18,-.12,0,-.23,-.15,-.13,-.16,-.11,-.1,.09,.11,.07,.04,-.09,.01,-.15,-.18,-.11,-.15,-.11,-.08,-.15,-.14,-.2,-.25,.03,-.1,-.07,-.11,-.11,0,.24,-.04,-.18,-.24,.01,-.04,-.19,.14,.1,-.18,.1,-.15,.03,-.13,-.19,.01,-.14,-.08,-.13,-.03,.02,.11,.1,-.1,-.05,-.11,-.04,-.13,.05,.27,.02,-.1,.06,-.02,-.08,-.05,.01,-.12,-.11,-.1,-.09,-.29,-.06,-.15,-.15,.06,-.07,.08,.1,.04,-.14,-.18,-.03,.12,-.11,-.2,.08,-.08,.22,-.12,-.33,-.18,.12,.03,.22,.02,-.03,.19,-.18,-.05,-.24,.11,-.06,-.08,-.16,.04,.03,.04,-.09,-.23,-.1,-.07,-.01,-.03,-.06,-.01,-.22,-.02,-.2,.26,.09,.21,.03,.14,.14,-.09,.02,.05,-.17,-.06,-.14,-.06,.18,-.12,-.23,-.01,-.11,-.13,.1,-.14,.01,.24,.11,.24,-.26,-.13,-.15,-.16,.1,-.02,-.32,-.12,-.13,-.05,-.09,-.19,-.04,-.05,-.17,-.09,-.23,-.08,-.28,-.04,-.19,-.03,.15,.04,-.01,-.12,-.21,-.1,-.15,-.16,-.1,-.2,-.13,-.13,-.08,-.18,.16,-.2,-.19,-.01,-.21,-.13,.12,-.11,-.1,-.1,-.18,-.03,-.12,-.24,-.06,-.19,-.12,-.03,.13,.03,-.02,.06,-.04,.14,-.11,.02,-.16,.07,.05,.15,.02,.06,-.18,.13,.25,-.07,.01,-.14,.06,-.17,-.18,-.1,.07,.11,.12,-.15,-.14,-.1,.01,-.11,-.14,-.03,-.08,-.09,-.16,-.16,-.12,-.07,-.08,-.2,-.2,.13,.05,.1,-.12,.12,.01,0,.19,-.23,-.19,-.19,-.15,-.02,.02,-.12,-.17,-.04,-.01,.22,-.01,-.15,-.06,.03,.11,-.04,-.02,.03,-.23,-.25,-.11,.23,-.05,-.2,-.23,-.22,.03,.05,-.2,-.02,.13,.04,-.11,-.03,.18,-.1,-.26,-.22,-.23,-.23,.1,.07,-.2,.23,.07,-.01,.09,.02,-.08,-.08,-.07,.02,.02,-.15,-.11,-.04,-.16,-.12,.04,-.1,-.04,-.1,-.14,-.12,-.1,-.03,-.21,-.13,-.06,.01,.19,.19,.13,-.13,-.12,.13,-.08,.18,.04,-.11,0,-.15,.14,-.12,.07,.08,.01,-.09,-.24,-.16,-.14,-.2,-.16,-.08,-.15,-.06,.17,.09,.19,-.08,-.13,-.09,.05,.19,.14,-.14,.02,-.07,-.23,-.12,-.13,-.02,.07,-.18,.17,-.11,-.16,-.15,.01,-.22,-.04,-.24,-.01,-.15,.08,-.12,-.12,-.2,-.06,-.12,-.04,0,-.08,.03,-.14,.05,-.1,-.11,-.15,-.03,-.12,.12,-.14,.03,-.04,.08,-.09,.04,-.13,.08,-.07,-.2,.06,-.07,-.17,.12,.03,.14,-.05,-.2,.08,-.17,.01,-.18,-.12,.23,-.1,.17,-.11,-.14,-.05,.27,.1,-.15,-.01,-.12,-.16];export{a as rvalData};
