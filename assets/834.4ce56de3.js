const a=[.07,-.13,-.1,.14,-.14,.07,.28,-.17,-.1,-.12,-.16,.5,.03,.28,-.21,-.09,-.08,.15,.24,.09,-.23,.07,.02,-.2,-.22,-.2,.24,.08,.04,.17,.05,.25,-.15,-.04,-.02,-.07,-.23,-.26,.08,-.01,-.06,-.18,-.08,.16,-.02,-.18,.09,.12,-.12,-.01,-.2,-.02,-.01,-.25,.18,-.23,-.06,.01,-.22,-.12,.01,-.05,-.22,-.18,.09,.09,-.18,-.22,.08,-.07,-.22,-.12,-.02,.03,-.18,-.1,-.19,.04,-.15,.08,.05,-.11,-.09,-.15,.68,.3,-.19,.06,.2,-.25,.14,.08,-.15,.13,.35,.26,.02,-.13,.49,-.04,-.08,-.13,.3,-.1,.09,-.04,-.11,-.1,-.15,.01,-.24,.09,.09,-.14,.48,-.13,.1,.02,.07,-.24,-.28,.02,-.19,-.01,-.09,-.06,-.07,.13,-.01,-.26,.01,.19,-.02,.03,-.33,-.05,-.03,-.12,.07,0,-.15,-.04,-.19,-.22,-.03,-.18,-.09,.31,-.09,-.08,-.13,-.18,-.07,-.11,-.1,.13,-.13,.14,-.1,-.22,.03,-.07,-.36,.21,-.18,.03,-.23,.09,.11,-.22,.04,.02,-.02,.06,-.09,0,.12,.01,-.05,-.07,-.07,.18,.01,-.1,.03,.02,-.17,-.11,-.14,.47,.24,-.13,.2,-.18,-.16,-.13,.03,.05,-.14,.42,-.27,-.13,-.28,-.15,.06,.11,-.07,-.1,.01,.27,-.13,-.25,.31,-.25,-.01,-.11,.21,-.22,.03,.01,.03,.17,.09,-.14,.02,-.26,-.04,.08,.33,.06,.06,-.1,-.15,-.03,-.05,-.01,-.21,-.23,.28,-.02,-.04,-.23,0,.08,-.19,-.17,.23,-.36,-.1,.01,.02,.33,.19,.21,-.11,.13,-.08,-.14,.03,-.1,-.22,.23,-.12,-.16,.18,.15,.11,-.16,.02,-.13,.4,.08,-.24,-.1,-.2,.29,.04,-.08,-.12,-.06,.01,-.02,-.35,.18,.2,-.13,.07,-.27,.27,.29,-.05,0,-.12,-.09,-.11,-.09,-.19,.28,-.46,-.04,.22,-.13,.38,-.08,.35,-.13,.05,-.12,.19,-.2,-.23,-.14,.19,-.08,.25,-.01,-.03,.24,-.08,-.14,-.17,.6,-.22,-.16,.05,.16,-.11,.15,-.08,.08,-.11,-.09,.3,-.18,.1,-.2,.02,-.06,-.23,.12,-.1,0,.26,-.18,-.26,-.06,-.06,.04,-.06,.07,-.14,.01,-.01,.21,-.08,-.3,-.01,-.18,.01,-.14,-.22,-.51,.21,-.03,.24,.15,-.06,-.24,.02,-.22,.04,0,-.12,.03,.01,.35,-.06,-.19,-.12,-.02,-.14,.29,.11,-.3,-.03,.18,-.07,.31,.02,-.01,-.06,.03,.09,-.18,-.16,-.11,.1,-.18,.14,-.05,.68,.25,-.06,-.15,-.02,.19,-.2,-.01,-.1,-.03,-.06,.01,.22,-.05,.47,-.05,-.12,-.01,.03,-.1,-.12,-.19,.01,-.11,-.21,-.24,-.17,.11,.04,.25,-.04,.16,-.27,-.11,.01,-.21,-.12,-.15,-.17,-.08,-.04,-.18,-.19,-.14,-.14,-.03,-.17,-.1,-.19,.09,-.26,-.16,.15,.34,-.19,-.1,.08,-.21,.03,-.27,-.17,-.05,0,.01,-.11,.2,.04,.13,.19,-.25,-.12,-.22,-.16,-.2,.02,-.15,-.21,-.29,-.1,.2,-.14,-.21,-.05,-.17,-.15,-.03,-.04,-.05,.01,-.03,.19,.45,-.09,.11,-.13,-.23,.03,-.21,-.05,.29,.09,.1,0,-.12,-.12,.02,.23,-.08,-.09,-.03,-.12,.09,-.18,.11,-.22,.13,-.02,-.03,.04,-.19,.17,-.1,.34,.08,.05,.04,-.1,-.01,-.13,-.06,-.03,.02,-.09,-.04,.13,0,.16,.06,.12,.43,-.07,.21,.09,.13,.08,.35,-.02,.11,.01,.03,-.03,-.24,-.14,-.08,-.22,.1,.08,.03,.05,.05,-.17,.08,.01,-.15,-.08,-.11,.04,-.24,0,-.16,0,-.11,-.21,-.04,-.13,-.14,0,.29,-.07,-.21,.07,.05,-.13,-.03,.02,-.22,-.18,-.08,-.03,-.24,-.07,-.14,.02,-.02,-.09,.13,-.19,-.11,-.07,-.11,-.03,-.21,-.09,0,-.09,.13,.26,.09,-.27,.09,-.06,-.24,.22,-.1,.09,-.04,-.11,-.1,.06,.03,.19,-.06,.17,.06,.23,.4,-.35,.1,-.09,-.11,.13,-.12,.01,.02,.14,.08,-.12,.02,-.18,.28,-.3,-.1,.13,.1,.12,-.09,.08,-.15,.11,.02,.04,.12,-.04,-.16,-.19,.19,-.18,-.11,.17,-.12,-.11,-.01,-.18,.11,0,.15,-.27,.24,-.23,-.24,-.22,.08,-.06,.07,.35,.24,-.11,-.16,.31,-.24,-.45,.17,-.02,-.14,.02,-.29,.09,-.18,-.15,-.04,-.23,.17,.19,.11,.09,-.14,-.08,-.21,.02,.13,-.13,-.17,-.16,-.12,0,-.11,-.1,-.13,.15,.09,-.22,.07,-.05,-.03,.5,0,-.13,.31,-.04,.03,-.13,-.04,-.24,-.1,-.15,-.17,.29,.16,.03,-.01,.09,.25,-.05,.05,-.16,.04,-.25,.1,.11,-.07,-.17,-.02,.06,.11,-.05,.1,-.25,-.21,.2,-.18,.03,.08,.54,-.05,-.23,.13,.06,-.1,0,.21,.11,.05,-.16,.07,-.04,-.23,-.1,.08,.08,-.18,.22,.12,-.16,-.1,.03,.11,-.06,-.22,-.14,.08,-.05,.39,.13,-.17,-.03,-.02,.11,.01,.2,.25,.12,.29,.02,-.2,-.18,.07,-.16,-.18,.06,.08,-.16,.09,-.17,-.1,-.27,0,-.23,-.07,.09,-.01,-.15,-.09,0,.15,.07,0,-.12,-.05,.05,-.15,-.02,-.04,-.12,-.06,-.04,-.25,-.08,-.01,-.02,-.08,.11,-.28,.01,1,.2,.45,-.23,-.03,-.04,.08,.06,-.13,.05,.07,-.1,-.14,-.12,.02,-.24,-.12,-.12,.01,-.18,-.03,.07,-.03,.11,.21,-.12,.14,-.15,-.2,.09,.13,.21,.15,.07,-.07,.04,-.05,.11,0,.11,.03,.14,.16,-.01,.15,.03,-.02,.17,-.18,-.06,-.13,-.22,-.2,.08,.04,-.09,-.13,-.15,.12,-.07,-.03,-.12,-.26,.03,-.05,.13,-.24,-.01,.11,-.23,-.23,.01,-.16,-.01,.11,-.09,.04,.03,.11,.06,.18,0,0,.06,.07,.01,-.35,.17,-.01,.08,.04,-.13,-.12,.04,-.17,-.1,.15,-.11,-.08,-.04,-.11,-.04,-.04,-.05,.13,.03,-.16,-.07,.19,.08,-.17,.08,.16,-.21,-.14,.18,-.16,-.06,.05,.28,.14,-.07,-.2,-.17,.23,-.11,.15,-.15,-.09,-.09,.03,.02,-.07,.23,-.01,-.03,-.16,-.21,.16,-.18,.22,-.13,-.28,-.03,.17,-.03,-.07,-.21,-.03,.11,-.19,-.08,-.06,.24,-.08,0,-.01,-.2,0,.02,-.08,-.1,-.02,-.3,-.35,-.33,.09,.25,-.01,.02,.13,.04,.01,-.05,.08,-.08,.13,.14,-.17,.04,.03,-.02,.08,-.22,.34,.23,-.19,-.17,.22,-.13,.24,-.48,.11,-.18,-.43,-.05,.04,.05,-.07,.12,.24,-.05,-.04,-.22,-.03,-.03,-.2,.04,-.17,.07,.06,-.06,.04,.13,-.03,.18,.06,.05,-.31,.43,-.01,-.11,-.08,.13,.08,.14,-.18,.07,0,-.24,-.28,-.04,-.04,.11,-.25,.01,0,-.02,-.04,.01,-.11,.18,-.18,-.19,.2,-.11,-.19,.02,.23,-.11,-.28,-.04,.03,-.11,.12,.07,-.19,-.12,.28,-.12,.31,-.07,-.17,-.12,.24,-.19,-.08,-.04,-.16,.05,-.27,-.08,-.15,-.12,.02,-.02,.07,.08,-.08,-.04,.02,.14,.04,.32,-.27,-.06,-.21,.28,-.21,.06,-.3,.14,.01,-.22,-.17,.18,.08,.01,-.05,-.19,-.03,.17,-.13,-.18,.06,-.04,.06,-.22,.09,-.26,-.03,-.13,-.05,-.22,0,-.03,-.27,-.04,.13,-.02,-.14,.03,.1,-.07,-.12,-.01,0,-.29,-.16,-.02,-.04,-.08,-.15,-.19,-.15,-.12,-.13,0,.05,.24,.16,-.01,-.31,-.27,-.05,-.27,-.09,.18,.19,-.01,.02,-.12,.05,-.19,-.25,.03,-.05,.07,-.04,.06,.14,-.14,.04,.27,-.14,-.09,.18,.03,.02,-.12,-.12,.29,-.09,.15,-.03,-.01,-.08,-.08,.03,-.09,.04,.02,.16,-.1,-.14,-.09,.08,.13,-.17,-.04,-.07,0,.08,.3,.04,.1,.12,.01,.05,-.2,.1,-.15,-.27,-.17,-.1,.09,-.03,-.2,-.2,-.14,-.17,-.05,.31,-.09,-.06,-.14,-.03,-.17,-.02,-.03,.14,.07,-.16,-.07,.1,-.06,-.04,.03,-.13,-.15,.07,-.11,.03,.23,.05,-.15,0,-.22,-.07,-.12,-.05,0,-.09,-.06,.2,.06,-.19,-.13,0,-.23,-.03,-.04,0,-.12,-.13,-.19,-.07,.05,-.15,-.13,-.14,.17,.06,.09,-.04,-.28,-.14,-.19,-.08,-.18,-.16,.18,-.19,-.03,.15,-.23,.2,-.06,-.09,.31,.05,.23,.12,-.02,-.06,-.16,.02,-.06,.19,.12,.02,.05,.23,-.1,-.12,-.02,.1,.06,-.09,.17,-.02,.11,.05,.06,-.07,-.04,-.11,-.19,-.1,-.06,-.23,-.11,-.06,-.19,-.06,-.37,.1,-.09,-.02,-.05,-.07,0,.02,.06,-.03,.22,.04,-.13,-.16,.08,.05,.05,.04,-.17,0,-.09,.06,.03,.04,-.06,-.26,.06,.08,.04,.13,-.06,.02,-.24,.01,.02,-.07,-.11,-.11,-.08,-.14,-.06,-.09,-.08,.05,.01,-.07,-.25,0,.14,-.1,-.17,-.07,-.05,.08,-.26,-.13,.01,-.27,-.17,-.02,-.01,.23,-.04,-.09,.18,.38,.14,-.26,.03,-.05,-.03,-.21,-.12,.03,-.36,-.07,-.14,-.1,-.16,-.02,-.09,-.25,-.24,-.15,-.13,.03,-.19,-.22,.17,.11,-.12,-.07,-.02,-.25,.04,-.22,.1,.04,-.15,.16,.01,-.04,-.13,0,.16,-.28,-.25,-.2,-.02,-.11,.09,.02,-.04,-.1,0,-.03,.07,-.1,-.1,-.07,.1,.18,.12,-.01,.08,-.05,-.11,-.02,-.05,.02,.1,-.05,.19,-.09,-.08,-.07,.13,.08,.14,-.04,-.1,0,.1,-.13,-.09,-.08,.14,-.07,-.06,.11,-.1,-.14,-.04,-.17,-.25,-.06,.31,-.03,-.23,-.14,.17,-.11,-.27,-.14,-.25,-.08,-.13,.06,-.13,-.05,0,-.2,.13,.07,-.14,-.04,-.1,.05,-.12,-.01,-.03,.07,.14,-.05,-.02,-.07,-.1,-.14,.04,-.07,-.18,-.1,-.1,.04,-.1,-.09,0,-.18,.09,-.01,-.16,.03,-.16,-.15,-.11,-.14,-.07,.07,-.11,-.29,-.05,-.32,.02,.05,-.11,-.18,.08,-.05,-.04,-.12,-.2,.03,-.04,-.06,-.22,-.13,-.05,-.23,.01,.08,-.04,-.21,0,.14,0,-.06,-.12,-.24,-.02,-.19,-.06,-.22,-.16,.1,0,-.06,-.22,-.06,-.15,-.11,-.28,-.2,-.12,-.13,.02,.04,-.22,-.15,-.09,.02,-.1,-.23,-.14,.01,-.02,-.2,-.3,-.18,.01,-.13,-.04,-.1,-.33,-.22,-.1,.08,-.18,-.01,-.04,-.11,-.2,-.11,-.17,-.06,.1,-.17,-.12,-.07,-.23,-.1,-.15,-.07,-.16,-.2,.15,-.17,-.06,-.02,.28,-.03,.02,-.12,-.11,-.18,.18,-.22,.17,.04,-.1,-.11,-.08,.05,-.14,-.2,-.12,-.07,.03,.22,-.06,-.07,-.09,-.07,0,-.11,-.12,.04,-.12,-.02,-.1,.04,-.09,-.1,-.13,-.2,-.1,-.26,-.06,-.11,-.05,-.14,.1,-.08,-.15,-.15,.16,.2,.22,0,-.13,-.24,.1,-.02,-.14,-.18,-.26,-.15,-.17,-.12,-.12,.03,-.13,-.1,-.09,.01,.01,.02,-.16,-.14,-.11,-.06,.02,-.26,-.05,-.09,-.2,-.05,-.12,-.31,-.24,.01,.16,-.05,.07,.16,.04,-.05,-.22,-.06,.05,-.13,-.16,-.14,-.04,.25,-.02,-.13,-.17,.11,-.02,-.01,.05,.08,-.12,-.23,-.02,-.23,.03,-.2,.06,-.09,.22,-.05,-.2,-.01,.18,.02,-.03,.23,-.01,.08,.04,-.17,.01,-.25,-.16,-.06,-.06,.01,.04,.06,-.09,-.11,-.14,-.18,-.07,-.3,.08,-.12,-.01,-.1,-.17,-.07,-.22,-.14,.07,-.19,.02,-.11,.18,-.32,-.13,-.12,.18,.04,-.14,.05,-.22,.05,.08,-.24,-.19,-.19,-.18,-.07,-.14,-.23,-.04,.05,0,-.21,-.01,-.09,.18,-.09,-.06,-.06,-.23,-.07,-.08,.11,-.07,.23,-.07,-.14,.23,.14,-.11,-.09,-.05,-.18,.14,-.13,.03,-.16,.03,-.2,-.02,.05,-.12,-.19,.15,.19,-.28,-.04,.12,.1,.1,-.07,-.21,.02,.13,.04,.01,-.18,.22,.03,-.03,-.01,.07,.02,-.25,-.1,-.2,-.13,-.25,-.01,-.11,-.02,-.01,-.08,.06,.03,-.16,.16,.11,.18,-.13,-.17,-.14,.02,-.13,-.06,-.15,-.06,-.01,-.08,-.08,-.09,-.19,-.17,-.05,.09,-.16,-.1,.01,-.07,-.2,-.23,.04,.03,.03,-.14,-.01,-.47,.06,-.25,-.08,-.03,-.15,-.14,.05,-.09,-.19,.14,-.1,-.15,.03,-.1,.02,-.21,-.03,-.18,.13,-.38,.12,-.14,-.16,.05,.08,.12,.06,-.05,-.24,-.2,-.05,-.03,-.13,-.14,-.25,-.17,-.14,.15,.02,-.03,-.19,.23,-.06,-.09,-.05,-.23,-.24,-.19,-.01,-.17,.23,.17,-.13,-.15,-.17,.01,-.06,.1,.06,-.11,-.26,-.18,-.2,-.17,-.14,-.03,-.45,.02,0,-.17,.09,.08,.14,-.26,-.23,.17,-.02,-.06,.11,-.15,-.17,-.1,.03,-.22,.29,.12,-.15,.02,-.19,-.13,-.2,-.01,-.15,-.08,-.04,-.07,-.14,-.05,-.07,-.22,-.13,-.22,-.2,-.26,-.01,-.23,-.01,.07,-.19,-.25,-.19,-.22,-.2,-.16,.06,-.06,-.25,0,.13,-.23,-.02,-.12,.11,.13,-.06,.07,-.16,-.16,-.07,-.4,.02,-.01,-.17,.13,-.05,-.17,-.19,.15,-.01,-.05,.06,.03,-.02,-.18,.15,.1,-.22,-.01,-.07,-.07];export{a as rvalData};
