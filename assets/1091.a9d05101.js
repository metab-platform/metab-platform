const a=[-.11,.02,.01,.02,.01,-.22,.05,-.12,.02,-.06,-.12,-.31,.25,0,-.01,.07,-.08,.04,.11,.02,.04,-.05,.13,.14,-.09,.14,.02,-.08,.66,0,-.11,-.01,-.06,-.14,-.42,.17,-.02,-.03,.02,.03,.07,.08,.08,-.16,.05,-.17,-.04,-.24,.21,-.04,-.11,-.09,.08,.2,-.18,-.01,-.18,-.11,.22,.05,-.2,-.13,.21,.04,.2,.01,.03,.05,.08,.14,.22,-.01,-.14,.07,.15,-.06,0,-.19,-.16,.12,.07,.06,-.13,.21,-.3,.12,.2,-.06,-.01,.04,-.15,.12,.04,-.14,-.38,.05,-.06,-.23,-.1,-.1,-.18,.09,-.21,-.14,-.05,-.01,.44,.48,.09,-.06,-.03,-.28,-.07,.02,-.32,.05,-.06,-.05,-.07,-.05,.21,.14,-.28,.01,.27,-.03,0,-.16,-.05,0,-.03,-.12,-.06,-.23,-.05,.01,-.16,.19,-.02,.04,0,0,.19,.19,-.03,-.09,.04,.07,.08,-.06,.06,-.15,.08,-.22,.05,-.23,.43,-.26,-.06,.01,-.2,-.05,.26,-.21,.03,-.2,-.24,-.02,-.13,.12,-.18,-.05,.01,-.14,.26,.14,-.08,.17,-.09,0,.1,0,-.07,-.02,-.01,.11,-.16,-.23,-.18,-.28,.01,-.18,-.03,.01,-.11,-.05,-.04,-.13,-.1,-.1,.14,-.12,-.02,-.01,-.17,-.24,.33,-.05,-.17,.17,.02,-.02,-.26,-.03,-.11,.09,0,.12,.1,.2,.29,-.09,-.25,.12,.09,.03,-.06,-.06,-.37,-.12,-.03,-.11,.12,.01,.16,-.12,.05,.03,-.07,.06,-.29,.06,-.06,-.11,.13,-.09,-.09,-.06,.21,-.13,-.31,.2,-.17,-.26,.01,.15,.09,-.23,-.16,0,.11,-.13,-.09,0,.06,-.07,.01,.14,-.32,.15,-.14,-.58,-.11,.01,-.11,.03,.15,-.17,-.03,.22,-.2,.16,.09,.14,.04,.13,.05,-.06,-.08,-.01,-.21,-.02,.05,-.14,.01,.07,-.04,-.11,-.01,.29,.04,-.05,-.19,.05,-.28,.28,0,-.14,-.11,-.02,.1,-.05,.15,.01,-.27,.29,.12,-.12,.01,-.13,.22,-.31,-.05,.1,-.03,.07,.12,.27,-.01,.1,.04,.24,.12,.13,-.02,.06,.08,.24,-.09,-.13,.03,-.01,0,.2,.03,-.07,-.05,-.08,.06,-.04,.09,-.05,-.25,.07,.07,.09,-.22,.13,-.11,-.08,.16,.19,.09,.53,-.16,.12,-.03,.01,-.25,.13,.27,-.01,.18,-.07,-.24,-.09,.06,.24,.05,-.14,-.01,-.01,-.02,.24,-.18,.05,.02,-.08,-.06,-.07,-.07,.25,-.13,.06,-.01,-.01,-.21,.11,.21,.28,-.16,.02,-.09,.23,-.19,-.03,.09,-.12,.09,.15,.04,-.01,-.42,-.08,-.37,-.11,.04,.14,-.2,.16,.03,.09,-.16,.25,.11,.11,-.08,.01,.1,-.21,.01,-.11,-.06,-.16,.04,.14,.12,.13,.09,-.2,-.06,.1,.19,.12,-.01,-.16,0,.18,.1,-.11,-.21,-.02,.05,.05,-.1,-.03,.17,0,-.11,-.16,.14,.06,.04,-.14,.07,-.25,.15,-.16,-.22,.17,.5,-.02,-.14,-.16,-.1,.03,.05,-.17,-.1,.11,.09,.04,-.12,.07,-.18,.16,-.02,.01,.15,-.04,-.14,-.35,.36,.03,-.06,.11,-.1,.07,-.27,-.22,.1,.33,-.2,.22,.1,-.16,.01,-.06,.06,-.22,-.08,-.12,.2,.14,-.22,.14,-.37,.04,-.13,.21,0,-.07,-.15,-.13,.01,-.14,-.09,-.1,.14,.04,-.04,-.1,.12,.07,-.11,-.08,-.15,-.06,.13,-.2,.04,-.12,.24,.21,-.21,-.12,.08,.22,-.1,.53,.16,.03,.06,-.04,-.08,.16,-.03,.04,.12,.06,-.07,.01,.19,.02,0,.08,-.05,.04,-.39,0,0,.07,-.01,-.16,-.04,.05,-.02,-.1,-.16,.13,-.2,-.28,.14,.13,-.11,.01,-.01,.07,-.06,-.01,.02,.01,.09,-.13,.04,-.03,.13,.08,-.1,-.12,-.27,.11,-.06,-.22,.07,.02,-.19,-.21,-.01,.55,.14,-.02,.14,-.22,.17,-.07,-.01,-.11,.14,-.21,.04,-.07,.03,-.23,-.01,-.42,.11,-.19,.04,.04,.13,-.01,-.15,-.17,-.12,-.21,.03,-.16,.01,.06,-.14,.09,-.21,-.14,-.04,-.07,.06,.25,.08,-.1,-.2,-.06,.05,.05,.03,-.17,-.1,.15,.03,-.12,-.05,.09,-.06,-.19,-.3,-.27,.03,.07,.15,.16,.28,-.16,-.08,.09,-.26,-.25,-.03,.11,-.16,.15,.11,.15,-.05,.21,-.1,-.11,.09,.16,.1,-.23,.11,.09,0,.17,-.04,.17,-.24,-.53,-.06,-.02,.16,.05,.09,.06,-.17,.17,-.09,.11,-.14,.1,0,-.29,-.15,-.24,-.11,-.04,.33,-.26,.07,-.09,-.01,.02,-.03,.16,.21,.15,-.16,.01,-.2,.12,-.03,-.19,-.06,.12,.02,-.13,-.01,.06,-.12,.17,-.11,-.01,0,.24,.03,-.1,.23,-.04,-.08,-.02,-.23,0,-.25,.2,-.1,-.03,.05,.19,.01,-.18,.12,.04,.14,-.01,.24,.25,.06,.21,.21,-.04,.03,-.06,-.03,-.1,-.1,-.17,.1,-.1,-.1,-.06,.06,-.12,-.24,.14,-.03,-.05,.07,-.22,-.21,-.16,0,.04,-.1,.04,.14,.06,-.01,.2,.22,-.11,.35,.15,.09,.05,-.13,.25,-.19,-.29,-.18,.04,.05,.04,-.07,-.11,.01,0,.12,.21,.06,.05,-.19,.12,.01,.03,.33,0,-.23,-.3,.05,.04,-.01,-.05,-.04,-.12,.03,-.03,.11,-.13,-.21,.08,-.14,.06,.27,-.05,-.13,0,.49,-.17,.13,-.08,-.13,0,.19,-.02,-.01,-.02,-.21,-.12,-.01,-.15,.02,.1,.07,.15,.08,-.06,.13,-.29,.07,-.02,-.07,-.22,.25,-.12,-.02,-.17,.67,-.1,-.11,-.11,.07,.03,-.18,.1,-.03,-.05,0,.31,-.05,.14,.14,.17,.12,-.07,0,.13,.05,.19,-.03,.08,-.1,-.18,-.04,-.03,-.06,.07,.11,-.11,-.17,-.01,-.01,.26,-.06,-.04,0,-.14,-.24,-.23,-.02,-.03,-.05,.18,.09,.12,-.03,.05,-.12,.07,-.07,-.13,-.21,-.09,.01,.12,.06,.06,-.11,-.09,-.11,.01,-.29,-.03,-.04,.04,.03,-.06,-.04,-.2,-.05,.22,-.07,-.05,.08,-.01,.08,.02,.04,-.01,.11,-.21,.14,.02,.07,-.2,-.04,.06,-.07,-.36,.1,.22,.27,-.24,.01,.03,.28,.08,.18,-.07,-.14,-.01,.17,.07,-.04,.15,-.22,0,-.17,-.24,-.3,-.13,-.02,-.08,-.09,.01,.07,0,.09,-.03,.14,.05,-.13,-.08,-.13,-.24,-.12,-.11,-.18,-.19,.17,-.24,-.04,-.11,-.03,.14,-.03,0,-.15,-.1,.03,0,.11,-.04,-.05,-.14,.18,.2,-.08,-.05,-.06,.13,-.05,.08,-.07,.04,.06,-.06,-.02,-.24,.05,.11,-.13,.04,.32,.01,-.17,-.11,-.34,.12,-.04,.14,-.06,.03,-.17,-.19,.03,-.09,.1,.14,.01,.17,.1,-.21,.05,.16,-.14,-.11,.01,.12,-.01,.07,-.22,-.06,-.11,-.04,-.2,.16,.03,-.25,0,.12,-.07,.03,.19,-.08,-.2,.24,-.02,.14,-.02,.2,1,.08,.06,-.04,-.01,.24,.02,.15,.07,.17,-.22,.25,-.06,.11,0,.07,-.02,-.05,.1,-.09,.2,-.03,-.14,.12,.16,.25,-.06,.05,-.09,.1,-.15,.05,-.23,-.08,.02,-.09,.18,-.08,-.18,.03,-.06,.06,.12,.18,-.24,-.05,.13,.22,-.01,-.12,.26,-.38,-.09,-.27,.02,-.02,.19,-.24,-.02,.07,.09,-.18,-.11,.16,-.08,-.01,0,-.06,-.23,-.05,-.11,-.28,-.06,-.06,.1,-.28,.11,.24,.09,-.19,-.3,-.34,.05,.06,-.01,.22,.01,.04,.09,.05,-.16,.12,-.13,.06,.03,-.09,.1,0,.43,0,.6,-.31,-.09,.08,.03,-.24,-.2,.12,-.02,.02,-.21,-.11,-.22,.05,.08,.02,-.1,0,-.07,-.05,-.01,-.09,.05,-.2,-.16,-.03,.13,.24,.13,-.28,-.05,.11,-.18,-.02,-.05,-.2,.04,.16,-.06,-.23,.09,-.15,.14,-.04,.01,.05,.1,0,-.13,-.03,-.05,.11,.1,-.04,-.01,-.16,-.24,.27,.17,-.15,.14,0,-.02,-.22,-.3,.13,.2,.14,-.11,.09,-.08,.04,.07,-.18,.2,-.1,-.02,.02,.03,-.24,.22,.08,.02,.16,.32,0,.51,-.27,-.19,.07,.21,-.28,.07,.17,.06,-.13,-.04,-.16,-.01,-.31,-.12,.07,.11,-.07,-.13,.05,-.01,-.05,-.03,-.07,.17,-.03,.15,.2,-.08,.07,-.21,.12,.02,-.1,-.1,-.07,0,-.1,.14,-.04,-.22,-.26,0,-.02,.23,.04,.17,0,-.17,-.02,0,.12,-.06,.12,.23,-.07,-.17,.12,.55,-.24,-.01,-.08,-.03,-.06,-.12,.2,.12,.01,-.09,.09,.06,0,-.01,.04,-.16,-.04,-.09,-.06,.23,-.01,-.07,-.08,-.23,-.14,-.11,-.01,.25,-.13,.08,-.07,-.01,-.12,-.09,.11,-.15,-.14,-.17,.06,.1,-.2,-.14,-.09,-.1,-.19,.02,-.28,-.16,.03,-.1,-.22,.16,-.06,-.09,.01,-.08,-.08,.03,-.01,-.03,-.28,-.17,.1,.02,-.02,-.07,.01,.07,.01,.03,.05,.23,-.2,.15,-.16,-.16,-.01,-.08,.1,-.07,0,-.08,.07,-.27,.18,.23,-.29,-.11,0,-.07,-.06,.07,0,-.05,.04,-.05,-.08,.11,-.07,-.01,.19,-.15,-.23,-.33,.04,-.02,.11,-.13,.12,-.06,-.09,-.11,-.09,.11,0,-.12,-.12,-.04,-.06,.14,.01,0,.05,-.01,-.05,-.08,0,-.18,.1,-.11,.02,.02,.02,-.14,-.13,-.13,-.18,-.08,-.05,-.13,-.48,-.01,-.04,-.09,.21,.09,-.05,.2,.13,-.18,.03,.03,-.05,.2,-.16,-.18,-.15,-.06,.01,-.06,.11,.01,.03,.03,-.09,.02,-.01,.14,0,.29,-.09,.14,.23,-.12,-.01,.01,.43,-.08,-.2,-.01,.17,.02,.08,-.09,-.02,-.15,-.05,-.04,-.15,.19,.05,-.06,.06,-.04,-.01,.02,-.08,.01,.22,-.06,-.06,-.13,-.03,.09,-.05,-.05,-.22,0,-.07,-.19,.27,-.03,.01,.04,.1,.22,.3,.11,-.02,-.06,-.04,.21,.14,-.05,.05,-.14,.11,.04,.07,.17,-.12,-.04,-.17,0,-.06,.06,.04,-.02,.15,-.05,.08,-.13,.04,-.07,-.02,-.22,-.12,-.07,-.09,-.09,-.03,-.14,.14,-.08,-.02,.14,-.06,.18,-.15,.09,-.02,0,-.07,-.03,-.04,.06,.07,.16,-.15,.19,.04,-.11,.2,-.02,.05,.09,-.06,.13,.27,.11,.06,-.08,.2,-.15,.02,-.2,.09,.1,-.13,.18,-.14,.15,-.14,.07,.24,.02,.05,-.07,-.21,-.06,.12,-.17,-.08,.07,.16,.08,.22,.06,.1,-.35,-.27,-.15,-.08,.02,.29,-.12,.04,.02,.03,0,.2,-.08,-.21,.29,-.2,0,.01,-.02,-.16,-.1,-.35,-.01,-.05,-.06,-.35,.02,.13,.19,-.12,.12,.2,-.13,.25,-.02,.03,-.16,.09,.28,-.17,0,-.19,0,.02,-.03,.01,.25,-.02,-.21,-.12,-.19,-.07,-.08,-.01,-.22,.09,0,-.17,.04,.23,.1,.15,.11,.14,.27,-.07,.05,-.07,-.23,-.19,-.18,.02,.01,-.04,.11,-.02,-.1,.1,.17,.12,-.04,.03,-.18,-.17,-.27,-.12,0,-.01,-.07,-.05,-.11,-.2,-.19,-.15,-.17,.14,-.15,-.1,.07,.08,-.05,-.01,-.06,-.02,-.12,-.1,.01,-.02,-.32,.08,.06,-.02,-.04,.28,0,-.03,.16,.22,.2,-.03,.24,-.04,-.06,-.29,-.14,0,.18,.06,.04,.07,.02,-.05,.12,.2,.05,.06,.05,.13,.03,.07,-.09,.05,-.12,-.2,0,.11,-.01,-.09,0,-.18,-.21,.04,-.02,-.02,.11,-.04,-.17,.08,.51,-.03,.12,-.12,-.13,0,.04,-.02,.06,-.02,.06,.13,-.06,.01,-.1,.26,.1,-.17,-.19,-.06,.05,-.04,-.05,-.05,-.08,-.04,.05,-.05,-.02,.01,-.24,-.12,-.01,-.02,-.17,-.2,-.26,-.23,-.17,.13,.17,-.03,-.2,-.12,.43,.1,.05,-.12,.07,-.07,-.11,.06,-.06,.58,.15,-.29,-.29,-.37,.02,.04,.27,-.19,-.15,.03,-.1,-.07,.11,.13,.25,.15,0,-.12,.05,.03,-.03,0,.06,-.35,-.16,.09,.11,-.12,.12,.06,-.02,-.32,.11,.13,.05,.05,.1,-.08,.03,-.06,.26,-.03,.15,-.17,.06,.28,-.11,.43,.03,.13,.02,-.11,-.12,-.16,.06,.07,.2,.12,-.08,-.03,-.08,-.03,.11,-.16,.09,-.05,.17,.01,.09,-.28,-.08,.09,-.09,-.06,-.15,.04,-.26,.2,.05,-.14,0,.04,-.09,-.09,-.01,.08,-.11,-.22,-.03,.04,.11,.24,.17,.12,.09,-.04,.2,0,-.29,-.25,.06,.03,.11,.08,-.13,.09,0,-.2,.05,.42,.14,-.33,.14,.16,-.13,.44,.21,.17,.02,.3,.04,-.2,-.04,.05,-.2,0,-.15,.09,-.17,.22,.07,.08,-.3,-.03,.12,.08,.03,.01,-.11,.14,.01,.05,.08,-.07,.13,-.03,.09,-.03,.14,-.25,.04,-.04,.16,-.06,-.12,.19,-.09,-.01,.14,.01,-.17,-.01,.08,.01,.08,.01,.11,.19,.03,.15,-.2,-.07,-.01,.07,.04,.06,-.12,.02,-.09,-.09,-.05,.09,.12,.06,.12,.08,0,-.13,.04,.04,-.05,.09,.22,.25,.03,-.11,-.16,.05,-.03,.25,-.05,-.08,.1,-.14,.13,-.21];export{a as rvalData};
