const a=[.04,.09,-.12,.02,-.15,-.21,-.06,.01,-.04,.03,-.14,-.06,-.07,.15,-.08,.14,-.02,.08,-.02,.12,.02,-.05,-.11,-.01,-.09,-.14,-.04,-.29,-.2,-.05,-.1,-.06,-.18,-.08,-.2,.06,-.16,-.02,0,-.09,.09,-.12,-.28,-.07,.03,.01,.1,-.24,-.14,.08,.09,-.13,.08,-.08,-.16,.04,-.1,-.14,.04,-.15,-.15,-.17,-.07,.14,-.16,-.06,-.17,.01,-.02,.13,.02,-.08,-.1,-.09,-.09,.06,.01,-.11,.09,-.22,.27,-.2,.47,-.15,-.15,-.08,-.14,-.05,.15,-.05,-.08,-.07,-.01,.16,-.02,-.22,.18,.02,-.2,-.15,-.23,-.09,-.15,-.23,-.12,.04,.12,.11,-.23,.01,.09,-.08,.03,.18,-.21,-.1,-.1,-.13,-.24,-.06,.28,.09,-.12,.04,-.06,-.03,-.11,-.06,-.14,-.13,-.01,-.02,.43,.09,-.05,-.11,-.06,-.07,-.13,-.03,-.21,-.05,-.11,-.15,-.13,-.06,-.13,-.35,-.14,-.12,-.12,.16,-.08,.03,.01,-.17,.01,-.17,-.08,-.04,-.05,-.1,.06,.06,-.01,-.06,-.09,-.13,-.17,-.1,-.13,-.14,0,.08,-.16,-.16,-.21,-.07,-.03,-.18,-.14,-.04,-.08,-.07,-.06,-.01,-.06,-.12,-.08,-.11,-.16,0,.01,-.12,-.15,-.21,-.19,.06,.2,-.05,.21,-.18,-.15,.04,0,-.25,.02,.02,-.18,.02,.04,-.09,-.02,-.07,-.15,-.16,.07,-.05,-.14,.11,-.1,-.14,-.13,-.17,-.1,-.13,.02,-.18,-.2,-.08,.46,-.14,-.08,-.07,.13,-.13,-.11,.13,-.15,.02,.01,-.08,-.02,-.05,-.02,.11,.18,-.11,-.1,-.16,.04,-.1,-.1,-.21,-.19,-.06,-.17,.06,.13,-.05,.09,0,.04,-.21,-.11,-.15,-.17,-.18,.08,-.06,-.11,.17,-.13,-.05,-.04,.12,-.08,-.07,-.12,-.12,-.06,.08,.09,.21,-.04,-.16,.06,-.17,.04,-.15,.07,.02,-.27,.06,.01,-.3,.04,-.04,.08,.05,-.05,-.17,-.05,1,.06,0,-.09,-.08,-.15,.09,-.14,-.08,.01,-.14,-.18,.04,.14,-.08,-.06,.18,-.11,-.1,-.01,-.15,.06,-.06,-.26,.09,-.16,-.01,.14,-.06,-.05,.15,-.15,.2,-.09,-.11,.08,-.07,-.09,-.29,-.03,0,-.06,-.13,-.08,-.1,-.29,-.01,-.15,.1,.01,-.05,.29,.09,-.1,-.14,-.09,-.03,.03,.11,-.11,.13,-.24,.21,-.15,-.15,-.21,.06,-.21,.21,.07,-.11,-.13,-.06,-.06,-.12,-.1,-.08,-.21,-.11,.02,.11,.02,-.06,-.25,-.2,-.17,-.21,-.07,.09,-.09,.14,.18,-.21,-.05,.14,.15,-.04,-.12,-.14,-.15,-.04,-.01,-.2,-.1,-.12,-.09,-.13,-.04,.12,-.06,-.07,-.19,0,-.18,-.26,-.04,.11,-.2,-.12,-.2,.13,.04,-.15,-.21,.16,.16,-.03,-.01,-.11,-.06,-.12,.09,0,.17,-.25,-.2,-.15,-.19,-.08,-.11,.07,.11,-.27,-.24,-.25,.14,.02,-.13,-.01,.16,-.09,.08,-.02,-.1,-.16,-.16,.09,-.09,-.24,.16,-.06,-.03,-.15,.23,-.05,.07,-.07,.11,-.18,-.19,.05,-.1,-.23,-.14,.13,-.2,.03,-.16,-.04,-.19,-.02,.17,.04,-.11,0,-.14,-.05,.16,-.06,.13,-.04,-.2,-.19,.17,.47,-.08,-.06,-.06,.18,-.01,-.06,-.07,-.11,-.33,-.22,-.24,-.12,-.18,-.16,-.11,.01,.19,-.13,-.09,-.01,-.04,-.11,-.28,-.23,-.28,.25,-.2,-.11,-.07,.02,-.13,-.24,-.03,.14,-.1,.09,-.12,-.13,-.14,-.25,-.11,0,-.03,-.1,.06,-.04,-.3,-.01,-.16,-.06,.1,-.1,.08,-.13,-.15,-.04,-.06,.15,.06,.06,.13,-.04,-.01,-.08,-.01,.08,.44,.8,.11,-.02,-.05,-.03,-.07,-.08,.19,.06,-.18,-.14,-.07,0,.01,.03,-.28,-.17,-.11,.01,-.02,-.11,-.21,-.09,-.13,-.14,.92,.04,.06,-.16,.04,.11,-.12,-.07,-.19,0,-.12,-.07,-.15,-.08,-.14,-.04,-.08,-.23,-.12,-.06,-.02,-.16,-.03,-.06,.23,.03,-.21,.09,.14,-.14,-.03,-.03,-.2,-.07,-.11,-.1,.05,-.17,-.18,.19,.18,.22,-.05,-.03,-.13,-.02,-.25,.03,-.03,-.01,-.09,-.21,-.18,-.32,.03,-.18,-.07,-.15,.11,-.06,-.03,.1,-.05,-.2,-.25,-.12,.08,.16,-.1,.49,-.21,-.29,-.16,-.11,-.06,-.08,.28,-.1,-.11,-.11,.05,-.2,.29,-.03,-.1,-.04,-.13,-.07,-.08,-.15,.21,-.1,-.23,-.21,-.14,-.16,.1,-.1,-.2,.01,.1,.03,-.16,.17,-.07,.12,-.09,-.06,.12,-.02,-.14,0,-.1,-.13,-.14,.08,-.02,-.17,-.06,-.06,-.19,.02,.06,-.06,.07,-.06,.03,-.16,.26,-.11,.06,-.19,-.15,.11,-.21,-.25,.11,-.05,-.03,-.09,0,-.05,-.18,-.13,-.08,-.04,-.16,-.02,-.29,.09,-.11,-.28,-.08,-.08,.42,.1,.1,-.12,-.02,-.09,-.05,-.2,-.21,-.14,-.06,-.09,-.08,-.11,-.28,-.04,-.17,-.09,-.21,.06,-.17,0,-.17,.22,.17,-.09,-.16,-.13,-.13,-.14,-.08,.07,.11,.06,-.25,-.05,-.16,-.17,.03,-.18,-.07,-.18,-.08,-.08,-.2,-.08,-.13,-.06,-.18,.03,-.22,-.09,-.16,-.1,0,-.11,.16,.06,.21,-.15,-.12,-.12,-.06,-.21,-.09,.07,-.01,-.06,-.21,-.12,-.07,-.14,.25,-.1,.09,-.23,-.1,-.04,.08,-.1,.13,-.17,.06,-.24,.01,-.08,-.03,-.14,-.08,-.08,.05,-.02,.13,.13,-.06,-.05,-.31,-.21,.12,-.03,-.09,-.09,.11,-.15,-.05,-.02,.25,-.16,-.07,.05,-.19,-.05,-.13,-.07,-.02,-.29,-.09,-.14,-.08,.03,-.14,-.02,.21,-.17,-.08,.06,-.03,-.02,.1,-.07,-.17,0,-.16,0,.07,-.17,.01,-.15,-.2,-.14,-.06,.36,-.13,-.06,-.23,.1,-.15,.24,.16,-.08,-.17,.19,.13,.26,-.17,-.11,-.16,.12,.01,-.03,-.14,-.21,.02,-.07,-.08,.02,-.02,-.06,-.16,-.08,-.03,-.34,-.18,-.13,0,-.02,-.23,-.11,.06,-.01,-.23,-.13,-.05,-.17,-.11,-.03,-.05,-.13,-.12,-.14,-.13,.15,.03,.02,-.19,-.18,-.03,-.18,.3,-.12,-.13,-.29,.06,-.19,-.04,.09,-.02,-.24,-.14,-.13,-.1,.3,-.2,-.23,-.11,-.24,-.23,.06,.06,-.12,-.13,.07,-.2,-.05,.12,.07,.08,-.25,-.05,.01,-.13,.12,.07,-.14,-.03,-.23,-.16,.02,-.1,0,-.09,.04,.01,-.15,-.17,-.01,-.03,.06,-.04,.05,.99,-.02,.05,.05,-.1,-.02,-.03,.1,-.11,-.09,0,.14,0,-.06,.14,-.11,-.05,-.08,-.16,0,-.09,-.02,-.14,-.01,-.15,-.17,-.09,-.31,-.08,-.11,.01,-.13,-.16,-.03,-.16,-.18,.04,.01,-.3,-.04,.1,-.09,-.17,.05,.03,.24,-.07,-.17,.09,.08,.02,-.07,-.05,-.16,-.18,.08,.02,-.13,-.07,-.07,-.02,.05,.02,-.1,-.19,-.2,.02,-.14,.2,-.13,.11,-.15,-.15,.09,-.09,.16,-.11,.01,-.22,-.18,-.06,-.16,-.07,-.05,-.19,-.11,-.06,-.19,-.1,.13,-.1,-.13,.32,.08,-.07,-.13,.05,-.05,-.18,-.2,.02,-.09,.08,-.12,-.26,-.26,.02,.11,.08,.06,-.22,-.09,-.22,.14,-.24,-.03,.08,-.07,-.07,.1,-.15,.06,.06,-.14,-.09,-.18,-.12,-.07,0,-.01,-.1,-.18,.13,.02,-.08,.03,-.01,-.17,-.17,.11,-.1,-.14,-.21,-.06,-.12,-.09,-.18,-.22,.02,-.06,-.19,-.14,-.16,-.15,-.08,.18,-.15,-.04,-.07,-.14,.25,-.06,-.14,-.1,-.14,-.1,-.07,.04,-.09,.04,-.21,-.06,-.19,-.11,-.06,-.15,.17,-.18,.17,-.07,-.05,-.08,-.11,-.19,.16,.42,-.02,.07,-.02,.18,.23,-.01,-.15,-.15,.04,-.03,-.11,-.03,-.03,.03,-.24,-.24,-.07,-.13,-.19,-.11,-.29,-.22,-.09,-.16,-.11,-.16,-.17,-.1,.03,.04,-.2,-.07,.22,.13,-.01,-.13,.04,-.17,-.04,-.21,-.3,-.08,-.07,-.12,-.15,-.15,.01,.01,-.15,-.06,-.02,.18,-.11,-.17,-.11,-.16,.04,0,-.08,-.13,-.16,-.17,-.11,.03,-.12,-.06,-.01,-.21,-.24,-.15,-.19,.07,-.05,-.13,-.13,.1,-.16,.02,-.01,-.13,.11,-.23,.14,.02,-.05,-.01,-.02,-.09,.01,-.1,-.06,.01,-.15,-.06,.03,.1,-.25,-.01,.02,-.14,-.09,-.19,-.06,.09,-.04,-.16,-.2,.07,.15,.01,.17,-.2,-.12,-.15,-.05,.03,-.05,-.14,-.11,.02,-.21,-.15,.12,.13,-.11,-.05,-.02,-.02,-.12,-.07,.05,-.2,.11,-.09,-.01,-.3,.01,-.12,-.15,-.07,-.04,-.01,.13,.04,.04,-.05,-.06,-.12,-.04,.07,.28,-.24,.03,-.08,-.04,-.14,.01,-.02,.25,-.19,-.12,.13,.17,-.12,-.01,-.04,.13,-.12,-.02,-.13,-.02,-.04,-.12,-.02,-.01,-.09,.07,-.07,-.24,-.03,-.11,-.1,.08,-.12,.07,-.09,-.11,-.02,-.12,0,-.07,-.13,-.02,0,.02,-.06,-.07,0,-.07,.01,.43,-.05,-.11,.01,0,-.02,.17,.54,-.14,-.13,-.12,-.15,-.13,-.04,-.17,-.23,-.05,-.02,-.19,-.23,-.12,-.08,0,-.09,-.07,.01,-.06,.03,.23,-.16,-.21,-.17,-.2,-.1,-.01,-.11,.14,-.01,-.25,.04,-.21,-.16,-.14,-.02,.07,.27,-.19,.36,-.04,-.12,0,-.1,-.08,-.07,-.06,-.14,-.15,-.11,-.11,.09,-.04,-.01,.1,-.12,-.05,-.04,.02,-.03,-.1,-.16,.05,.04,.02,-.04,-.07,-.15,-.22,.03,-.08,.1,.04,.11,-.08,-.05,-.16,-.12,-.04,-.04,.11,-.12,-.1,.11,.08,-.07,-.06,.05,-.15,-.14,-.12,.24,-.09,-.04,.34,-.05,-.02,-.05,-.03,-.05,-.07,-.13,-.04,-.12,-.12,.16,-.09,-.13,.26,.12,-.03,-.07,.01,-.12,-.07,-.14,.03,-.1,-.15,-.05,.04,-.1,.03,.12,-.05,0,-.05,-.03,-.09,.09,-.16,-.02,-.06,-.06,.03,.09,.26,-.02,-.15,-.14,.09,-.13,-.18,-.09,0,-.02,-.12,.52,-.02,-.17,-.06,-.23,-.21,0,-.03,-.13,-.16,.01,.06,.11,-.11,.03,-.06,-.01,-.11,.01,-.1,-.05,-.13,.09,-.28,.01,-.04,.05,-.04,.06,-.11,.12,-.05,.12,-.03,-.1,-.22,-.05,-.04,-.14,-.12,-.17,.09,-.13,-.06,-.01,.18,-.07,-.09,-.02,-.04,0,-.08,0,-.14,-.11,-.08,-.27,-.14,-.05,.21,-.02,-.21,.1,.73,-.11,-.13,-.14,-.18,-.09,-.1,-.09,.79,-.18,-.03,-.03,.02,-.15,.26,.24,-.09,-.04,-.09,-.08,.01,-.14,-.04,-.11,.93,-.18,.2,.12,-.25,.12,.9,.01,-.06,-.11,-.14,-.14,-.05,-.34,.11,-.08,-.16,-.23,-.16,-.13,-.18,.1,.03,-.03,-.03,-.13,-.24,-.16,.05,-.15,-.32,.02,-.16,-.01,.08,-.03,-.12,.09,.04,-.17,-.24,-.21,-.22,.08,-.04,-.09,-.01,-.01,-.02,-.1,.2,.05,-.09,.81,-.06,.65,-.09,-.13,-.01,-.16,-.05,-.01,-.19,.17,.28,.02,-.07,.09,.07,.17,-.28,-.13,.03,-.13,-.18,-.01,-.03,-.12,-.09,-.06,-.14,-.13,-.22,-.2,-.07,-.22,-.16,-.07,-.05,.07,.12,.09,.19,-.25,-.12,-.02,-.12,-.1,.08,-.13,-.05,-.08,-.17,-.09,-.08,.04,-.04,.27,-.17,-.05,.09,-.12,-.04,-.17,.08,.07,.05,-.24,-.12,.02,-.16,.11,-.11,-.26,-.09,-.03,-.22,-.21,.01,.02,-.13,-.13,.02,.05,.76,-.05,.02,-.1,0,.09,.05,-.01,.22,-.27,-.01,-.09,-.04,.06,.18,-.13,-.16,-.02,-.09,.06,.05,.08,.46,-.21,-.18,-.17,-.18,.12,-.12,-.27,0,-.08,-.15,-.09,-.16,-.2,-.14,-.04,-.01,-.04,-.03,.07,-.17,-.13,-.04,-.16,.11,-.01,-.1,-.2,-.15,.07,-.11,-.21,-.12,-.06,-.12,-.13,-.22,.16,-.13,.05,.15,-.15,-.11,-.19,-.17,-.33,-.15,-.14,-.18,-.06,-.21,-.07,-.1,-.01,-.11,-.05,-.12,-.14,-.11,-.13,.11,-.03,-.09,-.26,.25,-.26,-.08,.09,.07,.1,.04,-.07,-.11,.56,-.09,.02,-.07,-.13,-.08,-.09,.03,.01,.01,-.15,.09,.1,-.06,-.14,-.08,-.07,-.03,-.15,-.15,-.24,-.16,.1,-.09,-.03,-.01,.02,-.13,-.2,.1,.16,.1,-.04,-.09,-.12,-.2,-.27,.23,-.05,-.15,-.07,-.01,-.09,.48,-.12,-.14,-.1,.11,-.14,-.17,.03,-.13,-.03,-.18,-.06,-.11,.06,-.09,-.06,-.11,.22,.05,.01,.01,-.11,-.03,-.17,.62,.56,-.13,-.14,.06,-.06,-.16,-.08,-.15,-.09,.02,-.11,-.1,.03,-.14,0,-.06,-.2,-.12,.12,-.09,-.13,-.17,-.22,-.06,-.27,-.07,-.07,-.23,-.08,-.25,.17,.22,-.04,-.13,-.07,-.23,.07,.12,.13,-.05,-.23,.07,-.09,.08,-.05,-.19,.05,.05,-.02,.04,.12,-.15,.06,.16,-.19,-.17,.07,-.2,-.05,0,-.04,.03,-.21,.06,.08,-.1,-.07,-.18,-.08,.27,.09,-.02,-.16,-.18,-.11,-.06,-.15,-.17,.15,-.17,.08,-.09,-.24,-.21,-.08,-.07,-.07,-.18,.08,-.04,-.16,-.1,-.14,.02,-.15,-.1,-.1,-.3,-.15,-.16,-.08,.19,-.15,-.13,-.1,-.19,-.1,.05,-.15,-.08,-.16,.23,-.13,-.14,-.25,.05,.12,-.17,-.19,-.04,-.08,-.03,.05,-.16,.05,-.11,-.03,-.28,-.1,-.13,-.13,-.09,-.1,-.1,-.18,-.07,.07,.12,-.1,-.24,-.14,.06,-.06];export{a as rvalData};
