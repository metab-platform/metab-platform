const a=[.05,-.04,-.09,-.14,-.2,-.09,.02,.06,.27,-.08,.26,-.24,-.03,.1,.2,-.07,.03,-.18,-.03,.07,.11,-.21,.05,.38,.2,-.07,-.12,-.17,-.17,-.02,-.06,-.03,-.18,-.08,-.01,.01,-.03,.31,-.01,-.19,.1,-.1,-.14,-.17,-.16,.19,.16,.04,-.05,.12,.31,-.31,-.19,.13,-.28,.49,.15,-.12,-.28,.07,.06,-.22,.02,-.01,-.14,-.33,-.09,.26,-.05,.08,.06,-.04,.07,-.03,-.12,.05,.1,0,.06,-.04,.07,.06,.15,-.11,-.22,-.12,.04,.03,.05,.1,-.21,.02,.28,-.2,-.05,-.08,.21,.05,-.22,-.02,-.09,.04,-.19,-.02,-.13,.09,.23,.41,-.02,-.18,.24,0,.11,.02,-.28,-.19,.19,-.3,.08,.22,.13,0,-.04,-.11,-.23,-.05,-.13,-.24,-.22,-.02,.04,-.05,.16,.08,-.05,-.2,-.11,.01,-.15,-.06,-.22,-.04,-.16,.05,-.03,.09,.17,-.35,.07,.11,.05,.45,.12,.18,.11,-.31,-.19,-.14,.21,.33,-.36,-.3,.11,-.05,.27,.02,-.1,-.13,-.04,.11,-.1,-.22,-.09,-.13,-.21,-.14,.05,-.05,0,-.09,.21,-.04,-.08,-.19,-.22,.07,-.1,-.2,-.1,-.05,.03,.17,-.08,.08,-.02,-.08,-.2,-.01,-.11,-.2,.5,.24,-.02,.1,.16,-.25,-.12,-.16,.06,-.08,.14,.18,-.12,.12,-.12,.14,.04,.18,-.12,.13,-.18,-.13,-.08,.02,-.09,-.02,.05,-.19,-.3,-.49,0,-.17,.17,-.11,-.03,-.06,.11,.38,-.09,.12,-.04,.21,.14,-.14,.26,.36,-.08,.11,-.23,-.03,-.08,-.26,-.24,-.23,-.27,.14,-.14,.3,-.09,-.22,.08,-.33,.35,-.23,-.32,-.13,.11,-.16,.17,.1,-.22,.06,-.03,-.02,-.13,-.03,-.13,.05,.17,-.06,-.17,.14,.45,.03,-.27,.15,.03,.03,-.14,-.25,.08,-.1,-.1,.4,.11,-.18,.36,0,.17,.08,.09,-.25,-.1,.12,-.03,-.02,-.13,-.01,-.33,.44,-.05,.04,0,-.04,-.52,.06,.05,-.21,-.08,-.01,-.14,-.17,.13,-.03,-.05,-.22,-.22,-.31,-.1,-.24,.09,-.21,-.1,.06,-.29,.11,-.26,-.08,.19,.03,.16,-.25,.03,.04,.04,-.09,.07,-.23,-.11,-.16,-.08,-.04,-.11,-.23,.26,.45,-.22,.07,-.01,-.19,.28,.12,-.34,.34,-.07,.16,-.41,-.03,-.19,.13,-.33,.13,.32,.04,-.08,-.09,-.15,-.17,0,-.23,-.09,-.03,0,.05,-.04,-.24,.09,-.15,-.12,-.19,.02,.09,.01,.18,.19,-.22,-.05,.2,-.36,-.23,-.24,-.31,-.04,.24,-.14,0,.15,-.1,-.08,-.24,-.04,.02,-.35,.04,-.4,-.03,-.23,-.31,-.19,.19,-.12,.03,-.36,.25,.18,-.07,-.19,-.06,-.14,-.12,.21,-.01,.23,.01,-.08,.11,.35,-.19,-.12,-.12,-.31,-.01,-.11,.2,.25,-.1,-.2,-.14,.29,-.07,.42,-.05,.06,-.2,.18,-.27,-.01,-.08,-.23,.21,-.04,-.12,.16,-.06,-.11,-.12,.17,.05,-.11,.13,.41,-.04,-.1,-.08,-.22,.04,.25,.62,-.14,-.07,-.13,.17,-.4,.27,.17,-.22,-.23,-.12,-.31,-.12,.01,-.23,.36,-.32,-.25,-.04,-.19,.3,.04,-.09,-.21,-.28,-.15,.02,-.03,-.11,-.45,.07,-.22,-.09,-.15,-.19,-.1,.02,.27,-.2,-.27,.19,-.04,-.13,-.1,-.22,-.18,.01,-.13,-.12,-.1,-.36,.27,-.08,0,-.17,.13,-.01,-.03,0,-.16,-.21,-.36,-.23,.02,-.26,.04,-.15,-.12,-.24,-.2,-.14,-.03,-.22,.05,-.02,-.02,-.1,.02,.05,.05,-.11,.08,-.06,-.09,-.2,-.28,.22,.14,.16,.02,.07,-.28,.05,-.13,-.07,.41,-.06,-.32,-.12,.05,-.17,-.12,-.08,-.1,-.16,-.2,-.21,.03,.15,-.14,-.06,-.33,-.05,.14,.17,.12,-.1,.19,-.01,.16,-.08,-.2,.17,0,-.05,-.28,.03,-.39,-.13,-.26,.04,-.09,-.28,.01,-.04,.01,.14,.05,.1,-.22,.32,.03,-.14,.1,-.12,-.02,.13,-.23,-.23,.21,-.3,-.26,.33,.25,.35,.1,-.01,-.2,.03,-.01,.02,.19,-.02,-.01,.03,-.09,-.17,.02,-.25,-.36,-.05,-.03,.02,-.14,0,-.15,-.12,.04,.03,.17,.05,.04,.17,-.28,-.19,-.16,-.26,.04,-.06,.13,-.23,.15,.05,.35,-.18,0,-.01,-.25,-.24,.08,-.04,-.17,-.03,.16,-.38,-.19,-.12,-.12,-.03,.13,-.05,-.02,.13,.09,-.2,-.41,.16,-.14,.3,-.11,-.15,-.03,.08,-.18,.21,.14,-.12,-.04,.05,.02,-.28,-.09,-.07,.11,-.08,-.21,.23,-.13,.05,.26,-.23,.12,.02,.13,-.31,-.02,.26,.09,-.25,-.06,.06,-.04,-.21,.11,.02,-.16,-.02,.08,-.15,-.01,.03,-.23,.18,.17,-.03,.04,-.14,.09,.04,.22,0,-.14,-.16,-.04,-.13,-.2,-.21,-.09,.18,-.21,-.22,-.16,.01,-.02,-.15,-.03,-.01,-.24,.21,-.13,0,.07,-.05,-.41,-.31,-.09,-.07,-.23,.05,.15,.32,-.22,-.15,-.12,-.2,-.1,-.19,-.13,-.33,-.2,.04,-.38,-.05,-.23,-.26,-.26,.31,-.12,-.08,-.08,-.1,.06,-.16,.35,.05,-.06,-.11,-.05,-.02,.38,-.29,-.3,.12,-.08,-.11,-.19,-.27,-.18,.05,.24,-.06,.04,-.21,-.08,.14,.21,.04,.37,-.01,.16,-.13,-.07,.12,-.4,-.03,-.13,-.28,-.08,-.08,.21,.01,-.08,-.1,-.19,.11,.12,.02,.23,-.07,.43,-.22,.21,-.02,-.01,-.19,.13,-.15,-.14,-.17,-.31,-.26,.25,-.04,.05,-.01,-.07,.01,-.35,-.39,.03,-.1,-.13,.13,-.04,0,-.01,-.24,-.16,-.25,-.13,.08,-.04,-.09,-.17,.33,-.04,-.03,.01,.08,-.1,-.01,-.33,.28,-.04,.13,.2,-.13,-.32,0,.18,.09,-.04,.07,.11,-.16,-.09,.17,-.06,.17,-.05,-.19,-.09,-.09,.03,-.12,-.06,-.2,-.11,-.26,-.04,-.14,-.02,.09,-.14,.15,.01,.09,-.29,-.19,-.05,-.09,-.38,-.25,.14,-.15,-.17,-.13,-.14,.16,.01,-.27,.01,-.22,-.08,-.25,-.22,-.02,-.23,-.17,.32,-.12,.07,.07,.21,.16,-.23,-.15,-.15,.16,-.16,-.46,-.16,.08,-.01,.2,.17,.05,-.26,-.04,-.09,-.14,.12,.21,-.15,-.27,.27,.09,-.21,1,-.12,-.45,.05,.05,-.01,-.08,-.27,.2,.23,.22,-.13,-.07,-.11,-.09,.15,.17,-.16,.26,.12,-.17,.06,-.02,.03,.03,-.14,-.07,-.15,-.11,-.03,.07,-.11,-.12,-.11,-.13,.09,-.04,.06,-.01,.06,-.01,.35,-.08,-.38,-.07,-.07,-.12,.01,-.28,.04,-.28,0,-.04,-.06,.03,-.11,.14,-.1,-.28,0,.13,.03,.29,-.07,.25,-.04,-.12,.29,-.07,.2,-.24,-.24,.06,-.09,-.11,.17,.28,-.2,.07,.01,.35,-.09,-.11,-.18,.02,.01,-.14,.24,.08,.04,-.13,-.16,.51,-.03,-.04,-.3,-.11,-.14,-.16,-.22,.03,.09,-.18,-.27,.04,-.03,-.15,.04,-.08,.04,-.22,.1,-.08,-.23,.11,.08,-.27,-.03,-.21,-.04,-.13,.19,-.23,-.1,-.15,.06,.07,-.07,.39,-.28,.12,-.07,.05,-.13,-.25,-.04,-.14,-.01,.08,-.13,-.03,-.18,.13,-.25,-.12,.08,.2,0,.04,.11,-.09,.04,.12,-.27,.03,-.16,-.16,-.02,.03,.07,-.27,-.01,-.26,-.02,-.11,-.11,-.15,.1,.11,-.26,-.04,.02,-.21,-.06,.27,.02,-.22,-.11,-.28,-.08,-.22,-.03,.05,-.13,0,.2,.2,-.32,.21,.05,-.22,-.1,-.03,-.09,.05,-.12,-.2,.04,-.3,.01,.1,.02,.01,.17,.1,-.05,-.05,-.02,-.13,.11,.06,-.09,.02,-.2,-.06,-.18,.14,.19,-.08,-.12,.05,-.13,-.03,-.23,-.04,-.1,-.04,.02,.03,-.28,-.2,-.1,-.16,-.29,.06,-.14,-.13,.14,-.11,-.09,-.28,.23,-.15,-.05,-.2,.03,-.06,.23,-.03,-.05,-.28,-.16,0,-.38,-.31,-.27,-.22,.07,-.25,-.23,.34,.02,.07,-.19,-.05,-.01,-.2,0,-.12,-.05,-.02,-.04,-.19,-.1,-.16,-.04,.04,-.39,-.29,-.11,.18,-.14,-.09,.19,-.14,.08,-.27,.27,-.09,-.09,-.15,-.12,-.14,.14,-.12,.12,-.04,-.07,.36,.03,.27,-.08,-.15,.03,.09,-.18,-.12,.4,.03,.11,-.14,-.21,.12,.18,-.09,-.19,-.01,-.09,-.16,-.38,-.04,-.17,-.21,.08,-.06,.02,.05,.32,.1,-.07,.07,.05,-.32,-.03,.01,-.18,-.23,.11,-.45,-.26,-.15,-.14,.2,-.11,-.04,-.02,-.11,-.05,-.08,-.23,-.21,-.22,-.08,-.07,-.01,-.01,-.07,-.41,-.05,-.25,-.09,-.03,-.01,.14,-.01,.39,.17,.13,.09,.28,.01,.11,-.12,.05,-.07,.04,-.03,.01,.14,-.01,-.06,-.05,-.07,-.32,0,-.06,-.08,.07,.05,.02,.04,.05,-.18,.13,.28,.26,.12,.12,.16,-.06,.02,-.11,-.26,-.16,.09,.2,.03,-.03,-.01,.1,.32,.18,.11,-.13,-.01,-.3,-.02,-.3,-.09,-.04,.03,0,.05,-.19,.05,-.09,.05,.14,-.03,-.02,.3,-.11,-.04,.11,-.3,-.13,-.11,-.06,-.23,-.23,.12,.15,-.15,-.08,-.07,.11,-.23,.04,-.01,.44,-.02,-.09,.03,.06,.09,.2,-.11,.07,-.17,-.01,.04,-.2,-.02,-.04,-.09,-.18,.11,.02,-.11,-.01,.07,0,-.35,-.2,.05,.13,-.01,-.07,.25,.04,.16,-.27,-.26,-.08,.06,-.07,-.22,-.04,-.17,-.21,-.04,-.12,-.16,.03,-.04,-.16,-.19,.09,-.23,-.08,.04,-.15,0,-.15,.11,-.19,.17,.24,-.03,-.14,0,-.18,.22,.18,-.14,-.21,-.02,-.14,.04,-.4,-.18,-.03,.05,.09,.15,-.17,.08,0,-.18,-.14,.09,.02,-.07,-.16,.17,.4,.08,.06,.15,.02,.08,-.1,-.07,.02,.34,-.21,-.15,-.05,.11,.26,-.19,-.19,.05,-.05,-.24,-.35,0,.07,.05,.03,.16,-.18,-.09,-.1,-.25,-.13,-.05,-.02,-.12,-.15,.04,-.25,-.05,-.04,.14,-.1,.09,-.09,.11,-.07,-.17,-.09,.07,-.14,-.08,.18,.01,.07,.05,-.31,.02,-.04,.23,.23,-.14,-.11,-.04,.12,-.14,-.07,.21,.11,-.25,.01,.25,-.12,.12,-.02,-.26,.14,.2,.1,.01,-.12,.05,-.02,-.09,-.07,.07,.33,-.05,-.25,.17,.12,.21,-.3,-.19,-.54,.18,.12,-.03,.1,-.39,-.02,.29,.1,-.11,.04,.39,.2,.06,-.25,-.09,-.02,-.05,-.01,.03,.12,-.17,.34,-.14,-.02,.11,.08,-.26,-.09,-.09,-.07,-.01,.1,.03,.1,.05,.19,-.1,.2,-.12,-.36,.25,.02,.02,-.03,.04,.1,-.13,.18,-.07,-.41,.1,-.4,.04,.07,.15,-.11,-.16,.17,-.18,-.3,-.12,-.23,.01,-.16,.02,.06,.01,-.07,-.05,.04,.13,-.07,.1,-.11,.12,-.09,.04,.02,-.12,-.02,.27,.21,.16,-.22,.26,.05,.22,.17,.11,-.15,-.05,.08,-.23,-.14,.28,-.4,-.13,.27,.32,.1,-.09,-.22,-.05,.24,-.38,-.05,.08,.11,.23,.17,.14,.05,-.13,-.14,-.2,.15,.21,.04,0,.22,-.09,-.33,.4,.42,.01,.04,.17,.05,.02,-.29,-.1,-.15,.19,-.15,.08,.2,-.14,-.07,-.14,-.08,0,.04,.04,-.09,-.16,-.24,-.17,.11,.03,.01,.02,-.09,-.16,.05,-.05,.09,-.15,.16,.17,.03,.1,.14,.04,.09,-.17,-.16,-.01,.06,0,-.13,.07,-.03,.2,-.08,.08,.11,-.13,-.17,-.08,-.01,.45,0,-.19,-.04,-.1,-.2,-.15,.09,-.27,.04,.12,-.03,-.08,.24,.07,-.18,-.06,-.28,-.11,.42,-.19,.05,.08,-.16,.13,.24,-.13,.07,-.12,-.05,-.05,-.19,.14,-.21,.25,-.14,.07,-.3,.02,-.21,-.08,.11,-.16,-.16,-.22,-.31,-.22,-.15,.12,-.04,0,-.06,-.03,-.01,.19,-.22,.36,.12,-.21,.09,-.06,.03,-.21,.27,-.11,.06,-.16,.01,0,-.26,.06,-.21,-.2,-.1,.02,-.21,0,.05,.18,.08,-.17,-.15,-.19,.12,.2,0,-.15,-.09,-.04,-.05,.12,-.19,-.15,.09,.22,-.23,.05,-.03,-.08,.08,-.08,-.03,-.05,-.19,-.12,.05,-.11,-.14,-.15,-.2,-.07,.14,.04,-.13,-.22,.01,.03,-.18,-.16,-.28,-.09,-.19,.01,-.19,-.1,.19,.03,0,.26,.08,.13,.07,0,-.04,-.14,.18,.16,-.15,-.25,.09,.03,-.46,-.01,-.15,.05,.04,.05,-.27,.11,-.12,.1,.05,-.12,-.08,-.18,-.17,-.06,-.03,-.13,-.24,-.11,-.11,-.07,-.12,-.12,-.18,.08,-.19,-.04,-.1,-.29,-.09,.01,-.02,.01,.06,-.08,.05,.17,-.09,0,-.22,.28,.17,-.2,-.13,-.06,.05,.28,.12,-.06,-.18,.26,-.05,.05,.04,.11,.03,-.08,.21,-.02,-.13,.18,.07,-.1,.39,.12,-.29,-.16,-.07,-.09,-.24,-.08,-.16,-.01,.19,.08,-.04,-.32,-.09,-.04,.03,-.3,-.21,.01,.19,-.12,-.23,.04,.17,-.04,-.09,.05,-.12,-.05,.05,-.19,.08,.04,-.07,-.01,-.14,-.02,-.1,-.26,.04,-.08,.08,-.09,-.1,-.15,.04,.02,-.27,-.09,-.03,.02,.02,.25,-.28,-.02,-.11,-.24,-.05,.02,-.23,-.36,-.08,.06,-.15,-.01,.05,.27,-.09,-.61,-.19,-.11,.14,-.01];export{a as rvalData};
