const a=[.22,-.04,-.13,-.01,-.19,.04,-.07,.04,-.05,-.11,-.12,.1,-.18,.17,-.06,.04,.03,.03,-.15,.11,.08,.08,-.21,-.01,-.06,-.19,.09,-.24,-.25,.04,-.16,.09,-.21,.14,-.01,.02,-.15,-.06,-.07,-.12,.1,-.15,-.24,-.05,-.12,-.05,.12,.05,-.07,.02,.05,.09,.01,-.11,-.14,.04,-.11,.05,-.08,-.15,-.13,-.17,-.14,-.03,-.12,-.01,-.2,-.02,-.01,.17,-.03,-.12,-.14,-.04,-.13,.21,.11,-.1,.04,-.1,.27,-.17,.5,-.19,-.03,-.09,-.16,-.06,.19,-.12,-.06,-.22,-.04,.18,.15,-.29,.22,.2,-.12,-.13,-.18,-.13,-.09,-.21,-.15,-.03,.06,.04,-.22,-.04,.17,-.14,.04,.24,-.08,-.1,-.04,-.03,-.06,-.07,.15,.03,0,.04,-.13,-.1,-.2,.1,-.1,-.18,-.07,-.01,.42,-.01,.07,.05,-.11,-.22,-.04,.15,-.26,.13,-.18,-.17,.1,.03,-.12,-.21,-.17,-.12,-.16,.1,-.09,.14,-.04,-.13,-.06,.08,-.05,-.02,-.09,-.14,-.1,-.09,-.04,-.1,-.03,-.01,.01,-.13,.12,-.12,-.1,.01,-.25,-.09,-.16,0,-.05,-.22,-.11,.13,-.04,-.12,-.16,-.11,.08,.07,-.11,.02,-.02,-.01,-.1,-.11,-.17,-.23,-.21,.16,.37,.07,.16,-.2,-.19,.03,.04,-.23,-.09,-.05,-.16,-.14,-.03,-.06,.16,-.08,.06,-.17,-.04,-.14,-.07,.14,-.18,-.14,-.07,-.2,-.21,-.17,-.04,-.06,-.06,-.1,.4,-.1,-.1,-.13,-.11,.12,-.15,.14,-.2,.04,-.05,-.04,-.05,-.08,-.1,.05,.17,-.12,0,-.02,.1,-.19,-.13,-.18,-.24,-.08,-.3,.1,.09,-.08,.18,.01,.01,-.27,-.04,-.16,-.06,-.22,.03,-.01,.03,.31,-.18,-.1,-.08,.07,-.02,-.08,-.13,-.06,-.12,.07,.06,.15,-.11,-.21,.1,-.16,.05,-.01,.08,-.14,-.28,-.02,-.03,-.26,-.05,.07,.03,-.06,-.14,-.19,.09,.79,.17,-.06,-.03,-.12,-.09,.02,-.18,-.08,-.06,.06,-.07,-.08,.06,-.09,-.1,.08,-.16,.01,-.01,-.18,-.02,-.13,-.27,.02,-.12,-.07,.18,-.2,-.05,.05,-.02,.2,-.02,-.19,.04,.04,-.14,-.28,-.03,.02,-.09,-.14,-.15,-.14,-.26,-.04,-.19,.11,.22,-.11,.22,.04,-.13,-.05,-.09,-.05,.07,.04,-.18,.03,-.17,.19,.01,-.19,-.18,.05,-.13,.18,.03,.05,-.1,-.09,-.09,-.19,-.15,0,-.17,-.07,.04,.13,.06,-.06,-.13,-.18,-.18,-.21,-.1,-.13,.08,.05,.06,-.23,.12,.13,.08,-.15,-.06,-.15,-.18,-.05,-.06,-.2,-.08,-.16,-.14,-.15,-.09,.05,-.03,-.09,-.05,.1,-.24,-.25,-.1,-.01,-.04,-.19,-.04,-.04,.09,-.18,-.22,.03,.01,-.04,-.1,.05,-.03,.08,.01,-.05,.09,-.27,-.23,-.09,-.21,-.13,-.19,.19,-.03,-.23,-.23,-.32,.18,.16,-.12,-.1,.23,-.1,.05,.01,-.05,-.18,0,-.01,-.14,-.26,.26,-.07,-.15,-.07,.12,-.1,.19,-.1,.03,-.19,-.05,.16,-.12,-.22,-.19,.11,-.2,.05,-.19,-.05,-.17,-.05,.04,.02,-.18,-.06,-.14,-.07,.16,.09,.11,-.05,-.19,-.2,.06,.42,-.05,-.06,-.14,.11,0,-.04,-.15,-.08,-.17,-.17,-.26,-.16,-.21,-.13,-.21,-.08,.08,-.05,-.03,-.07,-.05,-.14,-.2,-.23,-.16,.23,-.14,.12,-.02,.08,-.17,-.28,-.11,.06,-.16,-.01,.09,.06,-.1,-.26,-.1,.16,-.01,-.14,-.23,-.01,-.16,-.02,-.09,-.04,.09,-.15,.1,-.17,-.19,-.07,-.08,-.09,.14,0,-.02,-.04,-.06,-.02,-.08,.03,.39,.62,.16,-.12,0,-.09,-.13,-.09,.12,.01,-.21,-.17,-.07,.05,-.13,.05,-.14,-.03,-.17,.05,-.06,-.12,-.22,-.1,-.01,-.15,.78,.11,.01,-.18,-.03,.21,-.18,-.13,-.03,-.04,-.1,-.11,-.18,-.02,-.2,.06,-.11,-.01,.01,-.12,-.07,-.14,-.12,-.04,.01,.03,-.23,.04,.12,.08,-.02,-.07,-.12,.02,-.12,.11,-.04,-.12,-.19,.08,.12,.22,-.03,-.04,-.07,-.08,-.25,-.04,-.03,.02,-.01,-.2,.01,-.21,.04,-.19,-.06,-.17,.04,-.13,.16,.22,-.17,-.23,-.23,.05,.06,.14,-.16,.46,-.22,-.28,-.2,-.07,-.08,.14,.23,-.08,-.1,-.14,.01,-.15,.18,.07,-.01,-.08,-.13,-.11,-.05,-.11,.09,-.07,-.22,-.22,0,-.06,.23,-.15,-.23,.06,.07,.04,-.1,0,.16,.1,.05,.1,.08,.1,-.16,-.07,-.12,-.22,-.02,-.01,.16,-.04,.1,.05,-.21,-.03,.06,-.05,.04,.06,.01,-.05,.27,0,.01,-.23,-.14,-.05,-.21,-.31,-.04,.02,.15,-.18,.14,-.08,-.21,-.2,-.14,-.12,-.18,.06,-.22,.02,-.02,-.26,.08,-.02,.41,.17,.04,-.16,-.09,-.17,.15,-.11,-.03,-.05,-.09,-.09,-.05,-.06,-.16,.03,-.15,-.04,-.23,.01,-.16,-.04,-.25,-.04,.1,.17,-.13,-.09,-.12,.1,-.11,.19,.05,.03,-.23,-.07,-.2,-.14,.14,-.24,-.1,-.2,-.17,-.1,-.1,0,-.01,-.01,-.18,.01,-.25,-.05,-.15,-.17,0,-.13,.08,-.02,.09,-.19,-.05,-.2,-.07,-.17,-.09,.09,.08,-.1,-.23,.02,-.07,-.18,.22,-.06,.02,-.25,.07,.11,.01,-.16,.01,-.19,.16,-.13,.05,.03,-.09,-.17,.01,-.09,-.07,.15,.12,0,.11,.01,-.25,-.18,-.04,-.1,.04,-.13,.05,.01,-.13,-.01,.24,-.01,-.07,-.05,-.21,-.07,-.09,-.1,-.04,-.07,-.11,-.2,-.1,.05,-.09,-.1,.25,.12,-.14,0,.05,.05,.04,-.1,-.09,0,-.22,-.02,.18,.04,.09,-.17,-.24,-.2,-.11,.37,-.13,-.11,-.27,-.01,-.21,.12,.07,-.11,-.18,.03,.22,.04,-.23,-.17,-.08,.17,.05,-.03,.12,-.2,.16,-.15,.16,-.04,.16,-.01,-.06,-.21,-.06,-.3,-.04,-.1,-.08,-.04,-.11,-.11,.03,-.07,-.26,-.18,.17,-.18,-.15,-.01,-.06,-.14,-.17,-.15,-.14,.21,-.03,.09,-.13,-.2,.17,-.1,.29,-.16,-.17,-.27,0,-.19,-.03,.1,-.07,-.19,-.13,-.04,-.15,.29,-.24,-.16,-.15,-.15,-.23,-.03,-.03,-.15,-.16,-.05,-.23,-.06,.08,.02,.02,-.08,-.04,.06,-.18,.1,-.02,-.16,-.13,-.21,-.19,-.06,-.04,-.09,-.1,-.06,-.02,.1,.14,.04,-.15,-.03,-.11,-.04,.79,-.04,-.03,-.04,-.14,-.02,-.06,.12,-.07,-.07,-.02,.22,.22,.02,.04,.01,-.01,-.04,-.09,-.03,.04,.13,-.14,.08,-.08,-.07,-.15,-.33,-.19,-.16,.07,-.24,-.17,-.03,.04,-.21,-.11,0,-.27,-.09,.04,-.11,-.19,.03,.04,.14,-.09,-.19,.04,.05,.17,-.1,.13,-.12,-.23,.09,.02,-.14,0,-.08,-.04,.13,.09,-.1,-.12,-.24,.03,.13,.11,-.15,.02,-.04,-.04,.08,-.15,.12,-.1,.1,-.08,-.22,.04,-.3,-.11,-.04,-.12,-.14,.13,-.09,-.17,.07,-.06,-.18,.27,.03,.02,-.15,-.11,-.15,-.23,-.11,0,-.16,.01,-.15,-.26,-.27,.07,.15,.1,.11,-.24,-.07,-.26,.17,-.26,.11,-.17,-.12,-.16,.12,-.1,-.09,.05,-.12,-.12,-.21,-.02,-.06,.15,.19,-.04,-.02,.21,.02,-.04,.1,-.13,-.16,-.21,.09,.13,-.16,-.23,-.12,.08,.03,-.24,0,.01,.02,-.23,.08,-.2,-.14,-.08,.06,-.04,.13,.04,-.19,.19,-.1,.07,-.09,-.01,.11,-.04,-.02,.12,-.03,-.22,.05,-.21,-.14,-.11,-.15,.09,-.05,.17,-.14,-.08,-.13,-.14,-.16,.14,.46,-.07,.01,.13,.06,.24,.15,-.19,-.16,-.06,-.08,-.13,.02,0,0,-.26,.05,-.04,-.18,-.22,.01,-.15,-.08,.07,-.18,-.16,-.2,-.06,-.11,-.01,-.03,-.23,.06,.12,.04,-.05,-.11,.18,-.23,-.1,-.17,-.2,-.12,-.02,.09,.09,-.06,-.03,.02,-.07,-.01,.01,.13,-.18,-.14,-.15,-.19,-.06,.03,.04,.1,-.15,-.19,-.12,.12,.09,.08,.15,-.26,-.29,.08,-.23,-.02,.05,-.03,.07,.17,-.24,.05,-.01,-.18,.25,-.24,.19,.01,-.02,.05,.02,-.03,-.04,.16,-.1,-.01,-.17,0,-.01,.03,-.28,.2,-.03,-.11,-.14,.04,-.02,.08,.04,.07,-.21,.15,.22,.22,.09,-.15,-.19,-.1,-.07,-.05,.01,-.16,-.17,-.07,-.24,-.11,.18,.07,0,-.09,.01,-.06,-.16,0,-.02,-.21,.06,-.1,-.02,-.28,-.09,-.1,-.17,.13,-.06,.05,-.02,-.06,.03,-.2,-.09,-.18,-.04,.09,.14,-.22,0,-.1,-.1,-.03,-.02,-.01,.22,-.2,-.15,-.02,.26,-.09,0,-.13,.13,-.15,.07,-.16,-.02,-.1,-.1,-.02,-.2,-.11,-.02,-.14,-.15,-.07,-.1,-.13,-.17,-.07,-.01,-.08,-.14,-.09,-.01,.1,.06,-.09,-.06,-.02,-.15,-.06,-.07,-.06,-.12,-.01,.51,-.05,-.13,.08,-.07,-.05,-.05,.54,-.15,-.16,-.09,-.14,-.09,-.11,-.18,-.1,-.06,.13,-.26,-.26,-.2,-.14,.05,-.12,-.08,-.02,.04,-.11,.23,-.07,-.23,-.19,-.06,-.11,.06,-.13,.06,-.06,-.16,.07,-.14,-.09,-.02,-.09,.01,.33,-.29,.34,-.02,-.12,.21,-.1,-.15,-.11,-.09,-.16,-.08,.12,-.11,.02,-.07,-.03,.04,-.16,.13,-.04,.12,-.05,-.05,-.16,.24,-.01,.08,-.03,-.13,-.13,-.23,-.03,-.01,.03,.19,-.02,.05,.07,-.15,-.16,-.09,-.02,.12,-.08,-.11,.21,.05,.06,-.07,.12,-.18,-.15,-.11,.04,-.12,-.05,.11,-.23,-.07,-.08,-.12,-.06,-.09,-.04,-.06,-.13,-.07,.04,-.14,-.16,.26,-.01,-.1,-.09,0,-.18,-.16,-.16,-.04,-.14,-.18,-.14,-.1,.06,.01,.05,.1,-.07,-.09,-.17,-.12,-.01,-.21,.02,-.04,-.08,-.12,.19,.24,-.08,-.2,.11,.07,-.01,-.09,-.1,-.07,-.09,-.13,.56,-.01,-.25,-.15,-.23,-.24,.01,-.11,-.17,-.18,-.04,-.05,.09,-.05,.07,-.15,-.05,-.17,-.04,.13,-.08,-.21,.09,-.33,-.11,-.08,-.02,-.07,.04,-.15,.06,-.11,.04,-.01,-.13,-.28,-.11,-.05,-.2,.1,-.22,.02,-.04,-.12,-.01,.15,-.02,-.14,-.04,-.06,-.07,-.12,-.04,-.15,-.17,-.15,-.09,-.13,-.11,.18,-.11,-.16,-.04,.69,-.1,-.19,-.1,-.16,-.08,-.14,-.14,1,-.14,-.06,-.06,-.1,-.17,.09,.19,-.13,0,-.09,-.18,-.02,-.18,.07,-.15,.79,-.13,.19,.02,-.33,.17,.73,-.07,-.08,-.18,-.12,-.05,-.11,-.42,-.01,-.11,-.15,-.27,-.15,-.19,-.13,.2,.08,-.09,.04,-.09,-.25,-.21,-.03,-.15,-.17,-.08,-.11,-.06,.01,-.03,-.19,.04,.03,-.18,-.25,-.22,-.23,.03,-.07,-.15,-.07,-.01,.08,-.15,.15,.02,-.16,.58,-.13,.33,-.09,-.16,.06,-.21,-.09,-.02,-.11,.08,.23,-.04,-.08,-.01,-.02,.08,-.16,-.07,.07,-.14,-.21,.05,-.09,-.19,-.06,.01,-.17,-.16,-.24,-.15,-.17,-.17,-.19,-.08,-.02,.09,.03,0,.08,-.26,-.13,-.02,-.07,-.11,-.01,0,-.06,-.03,-.19,-.09,-.06,.15,-.04,.29,-.13,.04,.09,-.12,-.13,-.14,.04,.03,-.05,-.28,.12,0,-.18,-.01,-.14,-.11,-.12,-.03,-.2,-.21,.14,-.06,-.05,-.16,.05,.05,.65,-.08,.01,-.21,-.08,.1,.02,0,.12,-.24,.05,-.01,-.04,-.01,-.03,-.15,-.18,.09,-.12,.04,.08,.16,.49,-.27,-.2,-.21,-.14,.07,-.09,-.26,0,-.14,-.19,.02,-.18,-.21,-.15,-.05,-.06,-.13,-.1,-.02,-.22,-.13,0,-.1,.05,.1,-.14,-.05,-.15,.19,-.08,-.21,-.16,-.09,-.14,-.16,-.21,.05,-.14,-.06,.06,-.15,-.1,-.23,-.08,-.27,-.11,-.15,-.06,-.13,-.18,-.09,-.15,-.05,-.15,-.05,-.14,.08,.15,-.09,.09,0,-.04,-.3,.05,-.23,-.05,0,-.01,.03,.06,.09,-.18,.54,-.1,.01,-.14,-.21,-.15,-.05,.07,.1,0,-.14,-.17,.01,-.08,-.14,-.09,-.09,-.09,-.09,-.19,-.15,-.18,.01,-.11,-.12,-.01,-.06,-.11,-.12,.26,.06,-.12,.01,-.13,-.16,-.18,-.18,.27,-.06,-.16,-.18,-.08,.14,.44,-.09,-.2,-.12,-.1,-.08,-.21,-.03,-.09,-.03,-.2,-.13,0,-.09,-.06,-.08,-.16,.07,-.02,-.11,.08,-.1,.05,-.2,.39,.6,-.15,-.12,-.04,-.1,-.19,.13,-.12,-.12,.22,-.08,-.07,0,.07,-.02,-.16,-.2,.08,.18,-.08,-.08,-.17,-.23,-.09,-.11,-.08,-.11,-.24,-.16,-.29,-.09,.11,-.16,-.21,-.15,-.05,.17,.11,.27,-.1,-.22,.02,-.07,.12,0,-.19,.03,-.08,.22,-.02,.08,.06,.03,.07,-.21,-.15,-.06,-.19,-.11,.02,-.12,.04,-.08,.05,.07,-.06,-.11,-.17,-.11,.22,.18,-.07,-.19,-.08,-.13,-.11,-.21,-.12,-.08,-.16,.21,-.14,-.26,-.23,.08,-.12,-.04,-.24,0,-.14,-.16,-.11,-.16,-.01,-.16,-.16,-.1,-.13,-.17,-.09,-.11,.17,-.14,-.18,-.15,-.21,-.15,.01,-.18,-.1,-.21,.23,-.17,.12,-.26,.03,.05,-.17,-.19,-.11,-.12,.07,.03,-.02,0,-.11,-.07,-.22,-.1,-.2,-.15,-.01,.03,.04,-.24,.01,-.01,.14,-.15,-.24,.09,.08,-.08];export{a as rvalData};
