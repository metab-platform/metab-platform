const a=[-.05,-.07,-.09,-.02,-.09,.05,-.02,-.11,.02,-.1,.19,.46,.06,.13,.14,-.09,-.24,.21,.25,.07,-.03,.47,-.02,.07,.06,-.08,.54,.04,0,.47,-.1,.63,.04,-.34,.26,0,-.04,.06,0,.01,-.01,-.16,-.02,.04,-.04,.14,.16,.38,.35,-.16,-.06,0,.08,-.22,.05,-.03,.31,-.24,-.05,-.12,-.25,.06,-.26,-.07,.36,.36,-.07,.14,.19,-.05,-.18,.02,-.26,-.01,-.19,-.12,-.04,-.25,-.1,.33,-.05,-.16,-.1,-.14,.45,.56,-.05,.21,.21,-.09,-.06,.1,-.1,-.05,.42,.36,.01,-.15,.55,-.32,-.15,-.16,.05,-.28,-.12,.09,-.23,-.11,.11,-.11,-.33,-.02,-.1,-.14,.8,.02,.04,.45,.41,-.02,-.19,.2,-.01,.02,.11,-.17,-.06,.25,.14,-.03,0,.4,-.06,-.15,-.13,.09,-.11,-.13,.44,-.18,-.09,-.3,-.23,-.05,-.15,.06,-.01,.22,-.05,.16,-.18,-.22,.04,0,-.08,.06,.05,.11,-.09,.12,.01,-.09,-.18,-.05,-.11,-.28,-.14,.44,.11,-.18,-.04,.32,-.1,.03,.05,.42,.16,.38,-.38,-.05,-.11,.09,.01,-.02,-.08,.1,-.09,-.14,-.17,.23,-.15,-.18,.28,-.22,-.2,.11,-.1,.01,-.13,.73,-.24,-.09,-.04,.01,.15,.06,.07,-.2,-.18,.16,-.14,.06,.4,.01,-.25,-.32,-.05,-.14,.44,.31,-.05,-.05,-.02,-.1,-.03,-.06,-.1,.5,.23,0,-.01,-.19,.08,-.07,.12,-.11,.08,.02,.06,-.08,-.24,.06,.01,-.13,-.1,-.06,.11,-.26,-.05,-.17,-.09,.48,.08,.38,-.05,.13,.01,-.21,-.16,-.07,-.14,.05,-.14,-.07,-.02,-.11,.05,-.04,.13,-.2,.61,-.1,-.03,-.1,-.08,.09,.39,-.3,-.12,.36,-.16,.25,-.24,.04,.15,.03,.27,0,-.01,.73,.16,-.18,.07,.03,-.15,-.03,.04,.18,-.43,-.16,-.06,.06,.63,-.17,.2,.12,.51,-.28,.01,.05,-.25,-.36,.14,-.2,.42,-.14,-.25,.03,-.13,-.28,-.19,.62,.15,-.09,-.11,.07,.1,.07,.39,.04,.1,-.01,.36,-.03,.36,-.08,.31,.06,.17,.63,-.2,.03,.2,.08,-.06,-.03,-.14,-.22,.08,-.02,-.15,-.28,-.07,.16,-.02,-.18,-.12,-.16,-.1,-.07,-.12,-.34,.1,0,.1,-.06,-.11,-.07,-.24,-.3,.45,-.13,-.16,.03,-.27,.2,.13,-.1,-.06,-.17,.05,.15,.04,-.16,.11,.26,-.06,.17,.17,.16,-.07,.02,-.06,-.05,.03,.04,.46,-.17,0,.16,.48,.17,-.07,-.1,-.18,0,.03,-.03,-.2,-.04,-.1,.07,.17,-.07,.33,-.17,-.08,.2,-.16,.12,-.11,.03,.36,-.04,-.13,-.02,.08,.1,-.14,.2,.02,.11,-.05,-.03,-.27,-.25,.05,.05,-.05,-.09,-.08,-.19,-.23,-.08,-.3,-.01,.04,.07,-.16,.15,-.03,-.21,.06,.29,-.12,0,.51,-.05,-.07,-.03,-.23,.07,-.11,-.34,-.02,.45,-.06,.33,.15,-.17,-.16,-.06,-.07,-.22,-.11,.15,-.08,-.2,.1,.45,-.19,0,.03,-.08,-.43,.14,.07,-.02,.22,-.1,.18,.46,.09,.02,-.12,-.03,-.1,-.04,.12,.1,0,-.08,0,-.13,-.22,-.1,.11,.19,.18,-.29,-.14,.13,-.22,.02,-.39,.32,-.08,-.02,-.25,-.12,.07,0,.4,.06,-.28,-.05,.16,-.07,-.12,.06,-.13,-.08,-.19,-.17,-.03,-.21,.08,.34,.06,.54,.07,0,.21,.43,.41,.26,-.11,.45,-.15,-.08,.18,-.04,-.07,-.11,-.18,.1,.18,-.02,-.2,.13,-.2,.4,.09,-.06,-.15,-.13,-.09,.06,-.01,.11,-.06,-.1,-.18,.09,-.03,-.06,-.11,.63,-.27,.02,.39,.04,-.19,.06,-.11,.05,.01,-.36,.32,-.03,-.17,.01,.06,-.11,-.08,-.07,-.01,-.13,-.18,.01,.16,-.22,-.03,.01,.11,.43,.11,.45,-.05,-.03,-.08,.01,-.04,-.17,0,.05,.04,-.01,-.05,-.06,.01,.1,.19,.11,.2,.28,-.2,.02,-.1,-.06,.04,.05,.25,-.25,.41,-.05,.17,-.17,-.11,.58,-.34,-.12,.51,.09,.1,-.02,0,-.18,.29,-.11,-.07,.04,-.01,-.01,.13,.18,.01,-.13,-.05,0,.05,.04,0,-.04,.1,.02,.06,.17,-.13,-.21,-.18,.23,.02,.41,.08,.04,-.18,-.17,.18,-.2,-.34,.07,-.04,-.04,-.11,-.19,.03,-.14,.04,.08,-.24,.16,.11,.07,-.26,.01,-.11,-.07,-.08,.11,-.17,-.09,-.15,-.04,.14,-.02,-.08,.02,-.08,.46,-.07,.05,-.04,.23,.23,-.13,.08,.32,-.04,-.04,-.02,.02,-.03,-.08,-.06,.05,.37,.41,-.02,-.06,.11,.2,.14,.12,-.17,-.06,0,0,.15,-.13,.18,.12,.51,.42,-.07,.01,-.1,.02,.28,-.35,-.05,.57,.4,-.14,-.18,.22,.49,.17,.1,0,-.12,.43,.14,.06,.25,-.08,-.12,.2,.32,-.14,-.01,-.12,-.13,-.15,-.11,.07,-.07,-.14,.02,-.13,-.05,1,.16,-.13,-.05,-.04,-.07,-.27,.41,.53,.5,.28,-.02,.1,-.04,.34,-.04,-.25,.03,-.25,0,-.04,-.03,-.18,-.05,0,.02,.27,-.06,.17,.16,-.06,.17,.4,.03,-.11,-.1,.34,-.07,.02,-.07,-.04,-.02,.1,-.18,-.1,.13,.06,.05,-.22,.04,-.03,-.32,.39,.16,.49,-.15,.12,-.05,.48,.01,-.09,-.02,-.1,.17,-.2,-.16,.52,-.3,.13,.11,.39,-.17,.12,.18,.25,-.03,.01,-.11,.52,-.21,-.11,.41,.13,.1,-.07,.19,-.03,-.03,0,.23,.19,-.07,-.1,-.14,-.05,-.01,.11,.13,-.15,.52,-.02,.2,-.2,.01,-.17,-.23,.27,-.01,-.04,-.16,.03,.13,-.14,.02,-.14,-.02,.02,-.07,-.08,.27,.26,.05,-.09,-.06,.12,-.11,.01,-.16,-.1,-.29,.43,.3,.02,-.19,.19,-.02,.01,-.04,-.13,-.07,.06,.08,.01,-.02,-.09,-.1,-.08,.05,-.05,-.17,-.06,.06,-.08,-.12,-.09,-.22,.05,-.15,-.08,-.04,.44,-.04,-.09,.07,.1,-.12,.09,.18,-.08,.02,.07,.27,.55,-.04,-.19,-.11,.04,-.09,.31,.11,0,0,.04,-.05,.05,.02,.23,.23,-.24,.06,.14,.09,.18,-.07,-.2,.06,.17,-.26,.14,-.15,-.05,.45,-.12,.16,.03,.05,-.09,-.01,-.13,-.2,-.02,-.12,-.02,-.18,-.17,-.21,-.12,-.14,.1,.16,0,-.07,-.12,-.09,.07,-.11,-.05,-.03,.13,.25,-.16,.08,.33,.01,.03,-.05,0,.09,-.17,-.19,.2,-.16,.11,-.24,.03,-.09,-.1,-.13,.08,.02,-.04,.23,.19,-.04,-.09,.06,-.03,.13,-.3,.23,-.01,.15,-.07,-.03,-.11,.12,.03,.28,-.05,-.23,-.06,.26,.13,.14,.04,-.02,0,-.13,.1,.32,0,-.07,.02,-.41,-.13,.42,-.14,-.04,-.15,-.09,-.26,-.16,-.01,.42,.04,-.09,.17,-.15,-.22,-.16,.62,-.23,-.06,-.29,.19,-.24,.12,.51,-.1,-.12,.01,-.1,.62,-.12,-.24,-.01,.2,.02,.08,.09,.01,-.25,-.14,.07,-.07,.08,.16,.14,.32,.18,-.25,-.27,.05,.38,.31,.26,-.01,-.24,-.05,.08,.02,-.02,-.35,.24,-.12,-.25,.05,-.05,.08,-.18,.02,-.13,.01,.11,-.08,.03,-.06,-.18,.09,-.04,.31,-.06,-.03,-.1,-.19,.04,.15,-.03,-.07,-.14,.2,-.35,-.05,.15,-.09,-.19,-.1,-.04,-.11,-.05,-.01,.01,-.37,.16,.06,-.08,-.19,-.24,-.09,-.13,.06,.13,.1,-.09,-.22,-.01,-.05,-.24,-.11,.04,.17,.15,-.21,-.18,-.15,-.09,.02,.08,-.09,-.01,.1,.19,.41,0,.1,.05,-.2,-.09,-.08,.38,-.01,-.01,-.13,.23,-.14,.11,-.07,-.11,-.1,-.02,-.12,-.05,-.06,.21,-.11,-.11,-.13,-.25,-.13,.21,-.24,0,-.2,-.19,-.07,.25,.36,-.04,-.07,.27,-.09,-.18,.17,-.13,-.08,-.04,0,-.09,-.17,.04,-.09,-.06,-.1,-.18,.1,-.09,.05,.03,-.07,-.13,0,-.05,-.05,.1,-.07,-.13,.28,-.01,-.1,.05,.07,-.15,.16,.24,-.12,.45,.46,-.21,-.06,-.16,-.09,-.1,.02,-.17,-.05,.07,.1,.09,-.26,-.12,.05,.08,-.12,.04,-.07,.04,-.19,-.04,-.16,-.07,-.13,-.18,-.22,.04,-.14,.52,-.11,-.09,-.32,.1,-.07,-.19,-.07,.23,.11,-.37,.04,-.06,.25,-.19,.07,.17,.01,.38,.1,-.24,.09,.02,-.26,-.23,.31,.09,-.14,.05,.1,-.07,-.19,-.07,.34,.11,-.03,.07,.05,-.07,.05,.03,.02,-.08,-.11,.02,-.01,-.09,.19,.15,.02,.03,-.13,-.15,.09,-.29,-.03,.01,.03,.09,.05,-.17,-.08,.17,0,.08,-.07,.14,.43,.06,.28,-.1,-.05,-.13,-.06,.2,.35,.2,-.03,.02,.52,.4,.28,.11,.33,-.04,.35,.35,.12,.13,.06,.11,-.02,-.18,-.02,-.05,.16,-.06,-.18,-.03,.27,-.06,-.19,.01,-.16,-.1,.03,-.08,-.1,.14,.11,-.08,-.25,.12,.17,.01,-.02,.07,.38,.02,-.01,-.09,.07,.1,-.22,.32,-.01,-.1,-.26,-.01,-.03,.01,-.06,.23,.05,-.15,.05,-.16,-.2,-.19,-.06,.16,.05,-.18,.12,-.15,.04,.07,-.13,-.13,.09,-.19,.2,-.09,.2,-.12,.13,.27,-.04,-.22,-.03,.16,-.3,.36,.09,.01,-.14,.24,.29,.02,-.05,-.16,-.18,.05,.26,-.17,.03,.3,.4,-.15,.03,-.07,.15,-.03,-.14,.28,-.06,-.12,.14,.14,.26,0,.27,-.06,-.21,.22,-.04,-.02,-.06,.06,-.1,-.08,.19,-.07,-.02,.19,-.09,-.2,-.31,.09,0,-.11,.02,.05,.1,-.13,-.21,-.05,-.13,-.19,-.05,-.15,-.06,.04,.05,-.14,-.16,-.05,-.19,-.04,.05,-.02,-.09,-.11,.42,-.04,0,-.07,.12,-.21,-.08,-.11,.18,-.29,.03,.08,-.22,-.14,-.13,.03,.07,-.02,-.37,-.12,-.09,-.1,.14,-.12,-.26,-.24,-.14,-.04,-.21,-.01,-.21,-.06,-.12,-.16,-.23,-.06,-.2,.12,-.25,.13,.25,.01,-.11,.01,-.02,-.18,-.05,-.16,.38,-.16,.07,-.1,.02,.01,-.05,-.21,-.24,-.08,-.14,-.01,-.04,-.24,.48,.26,-.13,-.16,-.09,.13,-.3,-.15,.09,.15,-.16,.06,-.06,-.14,-.08,-.14,.14,-.01,-.14,-.16,-.02,-.07,-.2,-.22,-.03,-.22,-.2,-.09,-.08,-.19,-.18,-.15,-.03,-.17,-.13,.02,-.1,-.14,-.06,-.08,.06,.17,-.25,-.14,-.01,-.28,-.18,.01,-.09,-.02,-.14,.03,-.2,.05,-.1,.32,-.26,-.1,-.08,-.26,-.2,.05,-.28,.05,.05,-.16,-.19,-.13,-.06,-.15,-.05,0,0,.11,.02,.01,-.06,-.18,-.11,.02,-.2,-.07,.07,-.13,.03,-.13,.1,-.13,-.1,.15,-.18,-.07,-.17,.23,-.28,-.15,-.1,-.07,-.03,-.14,-.39,.22,.12,.1,.09,.05,.09,.01,-.07,.12,.1,-.11,-.07,.04,-.05,-.21,.02,-.05,.02,-.2,-.06,-.23,-.17,-.23,0,-.16,.04,.16,-.16,-.29,.26,-.09,.28,-.05,-.12,-.02,-.01,.31,-.14,.03,.17,.09,-.02,-.28,.13,.17,-.15,-.26,0,-.12,.2,-.15,.05,-.1,.09,.01,.01,.2,.1,-.05,-.34,.3,-.19,.37,-.1,-.09,.13,.39,-.24,-.1,-.02,.1,-.22,-.09,.23,-.09,.17,-.03,-.2,-.08,-.11,-.02,-.02,-.11,.22,.36,.17,-.11,.01,-.02,-.1,-.23,-.05,.2,-.19,.03,-.19,-.18,-.35,-.1,.08,.13,-.41,-.12,-.16,.29,-.38,-.11,-.22,-.03,.44,-.17,.18,-.13,.28,-.06,-.21,-.02,.08,-.27,-.12,-.04,-.06,-.08,-.02,-.05,-.27,-.08,.04,.07,-.26,-.09,.19,.06,-.1,-.11,-.03,-.07,.1,-.04,-.07,.04,.02,-.34,-.22,-.14,.16,-.1,.18,.3,.05,-.05,-.05,.39,-.11,-.09,-.35,.02,.3,-.14,-.04,-.04,.23,-.12,-.01,-.28,.35,.05,.24,-.13,-.05,.09,-.2,-.08,-.03,.16,.24,-.24,.02,-.11,-.09,-.06,.1,-.14,-.12,.11,.1,.15,-.15,-.32,-.04,.19,.11,-.22,-.13,-.14,.12,-.18,.11,-.19,-.14,-.15,-.13,-.14,.15,-.12,.02,-.12,.23,-.09,-.07,-.02,.04,-.13,-.19,.37,-.12,-.07,-.32,.01,-.16,.11,-.21,.21,-.21,.01,-.03,.06,.02,-.15,-.12,-.09,-.22,-.05,-.06,-.13,-.21,.01,.05,-.02,-.11,.03,-.13,.07,.2,-.15,.11,-.15,-.11,-.04,-.06,-.09,.37,-.13,-.04,-.07,-.11,.03,.07,-.17,-.18,-.15,.14,.22,-.27,-.15,-.37,-.24,-.11,.1,-.04,.46,.27,.01,-.25,-.1,-.08,.11,-.03,-.03,-.22,-.2,-.24,-.05,-.31,-.05,-.17,-.21,-.01,.19,.32,.23,.23,.27,-.15,.01,.06,.09,.04,.11,.05,.03,-.16,-.06,-.09,0,.31,-.02,-.01,-.14,-.04,-.07,-.04,-.31,.02,-.02,-.27,-.07,0,-.03,-.06,-.03,-.04,-.15,-.1,.34,-.07,.1,-.13,-.06,-.06,-.12,-.13,-.07,-.18,.19,-.09,.06,.3,.01,-.08,-.12,.01,.31,-.01,-.11,.14,-.17,-.17,.14,-.11,.4,-.22,-.12,-.01,.02,.04,-.18,.02,.37,-.03,.28,.29,-.16,-.08,.32,.18,-.02,-.11,-.02,-.22];export{a as rvalData};
