const a=[.36,.22,.15,.01,.12,.43,.09,.13,.04,-.03,.22,.5,-.36,-.12,.23,-.02,.3,.01,-.18,.27,-.09,.1,-.04,.16,.2,.07,.09,-.11,-.09,.09,.07,.21,.2,.37,.32,.19,.23,.15,.02,.12,.08,.11,.12,.27,-.26,.2,.01,.41,.16,-.19,.1,.46,.09,.06,.14,.11,.13,.39,-.14,.13,.11,.21,0,.06,.19,.13,.15,.16,.1,-.1,-.12,.16,.02,-.11,.13,.24,-.01,.12,.07,.22,-.02,.13,-.01,.08,.11,-.04,.1,.09,-.11,.02,.02,-.11,-.08,-.07,.44,-.26,-.08,.44,.1,.1,-.03,.11,.13,.02,-.04,-.06,-.18,-.25,.19,.04,.08,-.05,-.15,-.02,.3,.11,.08,.16,.06,.17,-.38,.05,.32,-.03,-.01,-.13,.13,.25,.13,.16,-.08,-.01,.05,-.09,.28,.11,-.01,-.29,.12,.32,.11,.31,-.01,.12,.44,.19,.18,.21,.1,.08,.1,.03,-.07,.33,-.04,.06,-.14,.53,.22,.19,-.05,.07,-.23,-.04,.01,.08,.13,.17,.11,.1,.52,.1,-.12,0,-.05,.13,.17,.02,.05,.19,.11,.28,0,.08,.01,-.32,.28,.35,0,.23,.07,.1,-.11,.11,.13,.21,.06,.27,.26,.23,.05,.07,.13,.22,.06,.16,-.2,-.07,-.03,-.28,-.08,.23,.31,.19,.41,-.04,-.03,-.09,.17,-.08,-.02,-.04,.15,.15,-.09,.14,-.01,.15,.3,.04,-.06,.12,.09,.07,-.44,.46,.21,.04,-.09,.14,.03,.15,-.09,-.05,-.02,-.02,.17,-.14,.1,-.02,.01,-.07,.06,.16,.15,-.16,-.09,.27,.13,.09,-.07,-.06,.1,.12,.14,-.02,.08,.05,.22,.32,.41,.35,.19,.07,.11,-.05,.09,.15,.08,.15,-.04,-.05,.1,-.25,-.04,0,.03,.23,.13,.18,.02,-.32,.09,0,-.11,.11,.12,.17,-.06,-.15,0,.15,.18,-.13,.33,-.03,-.03,.06,.02,.2,.09,-.13,-.35,.38,.26,-.14,-.17,-.09,.04,-.11,0,.25,.19,.06,-.2,-.07,.16,-.05,.04,-.09,-.08,-.03,.15,-.24,.02,.16,.21,.1,0,.11,.05,.05,-.08,.03,.14,.07,-.06,.02,-.02,-.02,.07,0,.51,-.03,-.08,.05,.1,-.07,.11,.17,.25,-.22,-.13,-.3,.27,.01,.39,.12,.11,-.18,.15,-.15,0,.09,.21,.24,-.04,.03,.08,.04,.14,.12,.12,-.21,.2,.24,.01,.06,.18,.17,.12,-.42,.06,-.09,-.12,.12,.1,-.03,.02,-.14,.07,.01,.11,.05,-.01,-.06,.15,.09,-.03,.06,-.03,-.15,.05,.1,.3,.17,.07,.17,-.02,-.34,.31,0,.3,-.39,.09,.13,.13,-.22,-.02,-.13,-.22,.05,.21,.32,-.12,.05,-.11,.11,.09,.35,.07,.09,.08,.34,-.15,.03,.21,.01,.16,.17,-.03,.01,-.1,-.02,-.06,-.03,.01,.19,.29,.07,.06,.12,-.04,.16,-.12,.25,-.19,.05,.19,.11,-.24,.19,.41,.37,-.09,.15,.08,-.01,.23,.06,.04,.17,.21,.02,-.11,-.04,.02,-.14,.22,.07,.14,.44,-.17,-.13,.2,.13,-.16,-.13,.26,0,-.01,.06,.15,.12,.08,.07,.13,.21,.08,.08,.12,.08,.02,-.13,-.11,.18,.32,-.12,.14,.06,.06,.15,-.03,.02,.07,.48,.03,.25,-.18,.16,-.08,-.19,-.25,-.12,.44,.45,.05,.05,-.03,.39,-.07,-.13,-.51,.02,.19,.1,.26,.02,.05,-.19,-.09,.16,.08,.16,.09,-.43,0,-.15,-.16,.07,.06,.15,-.08,-.01,-.07,-.16,.07,-.16,.23,-.07,.04,.09,.1,.01,.14,.12,-.06,.02,-.21,.05,.24,.54,.04,.01,-.01,.19,.1,.07,.22,.21,-.18,.03,-.11,.06,-.1,.08,.02,.06,.34,.07,.26,.14,.14,.36,.08,-.01,0,.15,.3,-.14,0,.25,-.32,.14,-.34,-.01,.13,.01,-.21,.46,-.02,-.02,-.05,.11,-.07,.44,-.15,.01,.1,-.07,-.32,-.07,.03,.07,.17,.06,.19,-.1,-.06,-.01,.06,.18,.15,0,.19,.15,-.08,.02,-.2,-.03,.41,.05,-.22,.14,.15,.27,.17,-.11,-.19,.02,.17,.04,.18,.1,-.05,.39,.02,-.06,.11,.16,-.04,.34,0,.04,.26,-.11,.06,.1,.07,.04,-.06,-.04,.14,.14,.22,.33,-.03,.05,.13,.12,.16,.05,-.06,-.46,.35,-.09,.36,.37,.04,.13,.07,-.03,.03,0,.08,-.26,.14,.23,.37,.03,.11,-.05,.2,-.01,-.01,-.07,-.04,.25,-.14,.04,.08,.09,.23,-.15,.16,-.11,-.03,.09,.39,.05,.16,.03,.16,-.11,-.07,-.1,.18,-.01,-.1,-.22,.19,.15,.1,.01,-.15,.28,-.03,.16,-.04,.1,.43,.05,.11,.28,.17,.05,-.06,.16,.29,.12,.01,.01,.13,.01,.07,.06,.01,-.39,.11,.35,-.06,.02,.08,.44,-.06,.32,-.08,.04,.14,-.07,.11,.1,.41,.08,.15,.08,-.03,.13,.22,.07,.13,-.05,.06,.19,.07,.08,.1,.04,-.11,-.02,-.17,.08,-.26,.1,.35,.04,.08,.12,.1,-.07,.14,.03,.17,.18,.07,-.1,-.38,.04,.03,.17,.34,.32,-.06,-.06,-.31,.15,.11,.22,.01,.16,-.05,.14,.06,.07,-.08,.2,-.05,-.16,.48,-.01,.15,.16,-.35,-.15,.28,.09,-.19,.17,-.07,.12,.02,.2,.13,.01,.14,-.08,.11,-.12,0,.21,.12,.13,-.11,-.04,.02,-.12,-.01,.52,-.12,-.11,.06,.38,-.18,-.05,-.05,-.01,-.21,.01,-.06,.51,.11,.13,.12,.08,.07,.01,.04,.04,.16,-.07,.03,-.43,-.2,.07,.18,-.37,.03,-.34,.13,.09,.11,.28,.07,-.13,.42,.18,.42,-.12,.45,-.12,.26,.01,.22,-.1,.07,.19,.24,0,-.14,-.07,.05,-.09,-.19,.26,.13,.1,.47,.11,.14,-.03,.09,.09,.12,.09,.12,-.24,.04,0,.29,.12,.47,.08,.03,-.02,.12,-.13,-.03,.3,.04,.02,-.06,.08,-.06,-.01,-.09,.06,.12,-.03,.11,.1,.16,-.05,-.07,.14,.03,.09,-.1,.11,-.12,-.25,-.19,.22,.21,-.02,.04,-.11,-.12,-.08,-.02,.18,.06,-.07,.02,-.08,-.02,-.19,-.13,.48,.58,.12,-.16,-.08,-.09,-.09,-.15,-.01,.01,-.05,-.03,-.07,.07,-.04,.15,.09,.26,.19,.45,.27,-.12,.31,.05,.24,-.02,.02,.06,.01,.02,.07,0,.17,.04,-.26,.12,.03,-.05,-.25,.14,-.02,.46,-.09,-.19,-.03,.18,-.03,-.07,.14,.16,-.03,.12,-.14,-.05,.16,-.26,-.1,.15,-.08,.39,-.12,-.12,.09,-.07,.11,.21,-.06,-.1,.13,.15,.1,-.05,.1,-.03,.5,-.13,.12,-.03,.11,.17,.01,.07,.16,.01,.27,.33,.13,.15,0,.12,-.02,.32,.1,.48,.12,.03,-.01,.16,.02,0,-.13,.08,.08,-.3,-.05,.05,.14,.04,-.01,-.08,-.07,.08,.09,.13,-.17,.01,.13,.12,.19,.04,-.01,.14,.25,-.44,.01,-.02,-.15,.19,-.1,.01,.17,.08,.11,.1,.18,.51,.24,-.21,.21,.01,.15,.03,.08,-.12,.15,.09,-.16,.23,.15,.12,-.13,.41,.08,.1,.48,-.05,.17,.13,.44,.1,.09,.17,-.06,.36,.33,.27,.03,-.04,-.15,.41,.03,.44,.46,.2,.16,.4,-.09,.07,.08,.08,.11,.06,.09,-.2,.48,-.18,-.09,.05,-.11,.13,.14,.1,-.09,-.14,-.01,.16,-.21,-.21,.43,.09,.15,0,.1,-.19,.09,-.02,-.05,.09,.46,-.16,.06,.08,-.05,.2,.25,.38,.11,-.02,.07,.02,.17,.05,-.03,.15,.37,-.31,-.01,.2,-.05,.32,.04,.06,0,.03,.09,.18,.43,.42,.14,-.04,.01,.11,.09,.03,-.14,.01,-.01,.14,.11,-.02,.06,.32,.4,.2,.12,.13,.01,.43,.16,.48,.02,.07,.5,.07,-.16,.33,.12,1,.22,-.08,-.08,0,.06,.14,.14,.19,.03,-.16,.15,.05,.05,.02,.56,.06,-.03,.12,.1,-.03,-.09,-.06,.42,.03,-.13,.01,.41,.12,-.06,.12,.49,.16,-.02,.12,.45,-.08,.24,.07,.22,-.04,-.04,-.03,.11,.04,-.01,.11,.19,.24,-.24,.07,.14,.18,-.1,.14,.03,-.08,.15,-.16,.04,-.17,-.15,.14,.17,.2,.33,-.07,-.13,-.29,-.16,0,-.26,.15,.08,.05,-.01,-.15,.15,-.14,.06,-.18,.36,-.05,.22,-.16,.15,.03,-.5,.1,.12,.09,-.2,-.05,.09,.25,-.03,.1,-.1,.06,.03,-.46,.03,-.13,-.02,0,-.1,.14,.11,-.5,.01,-.27,-.02,.13,-.05,.05,-.07,-.04,.09,0,.14,-.36,.05,.02,-.09,.13,-.07,.03,.01,-.04,.08,-.06,.08,-.36,-.02,.06,.07,.05,.09,.09,.01,.2,.26,-.01,.42,.11,-.1,-.14,-.03,-.02,.14,.05,.13,.16,.02,-.12,.32,.12,.18,.42,.08,.12,.17,-.16,-.08,.13,.07,.11,.43,.12,.04,.11,.16,.02,.12,-.01,.15,.08,.11,.06,-.09,.11,.11,.31,.46,.08,-.16,.02,.14,-.04,.09,.45,-.13,.06,.01,.04,.1,.3,-.06,.17,.14,.08,.06,.12,-.04,.2,-.18,.22,-.25,.44,.22,.05,.07,-.08,-.09,.23,.17,.04,.27,-.1,.15,.12,.2,.08,.08,.07,-.22,0,.04,-.21,-.02,-.08,.07,0,.02,-.05,.13,-.1,.23,-.03,-.18,-.03,-.04,.11,-.07,0,.25,.06,.02,.04,-.03,-.15,-.02,.13,-.05,-.17,.34,.08,-.01,.16,-.06,-.17,-.38,.13,-.17,-.06,.1,-.06,-.05,-.03,.23,-.07,.17,.1,.39,.13,.21,-.02,.14,-.19,-.03,.08,-.09,-.04,.17,.04,.18,.12,-.02,.04,.07,.16,.05,-.17,.03,.13,-.11,0,-.09,.05,-.02,.4,-.07,.03,.12,.03,-.05,.06,-.06,-.03,.12,-.05,-.05,.06,-.03,.21,.01,.15,.05,.12,.08,.48,.05,-.2,.15,-.05,.18,.01,.07,.11,.13,-.03,-.05,-.01,.02,.16,.1,.07,.16,-.01,-.07,.07,-.13,.2,-.16,.08,.24,.03,.04,.08,0,.06,.17,.07,.07,.22,.01,-.09,.14,-.24,-.06,.04,.08,-.02,-.02,-.07,.06,.22,.09,-.19,.19,.09,-.17,-.19,.1,-.08,-.01,.14,0,.17,.32,-.14,-.17,-.17,.07,.12,0,.1,.05,-.06,.32,.09,-.01,.14,-.18,-.07,.03,-.08,.1,.12,-.06,-.04,-.14,-.1,.07,-.03,-.1,-.14,.2,.16,.12,.18,.1,.11,-.05,-.04,.02,-.17,0,.1,-.1,.01,-.31,.1,-.39,.16,.07,.1,.09,-.02,.07,.19,.01,.06,.17,-.07,-.07,-.17,-.15,.11,-.07,.08,.2,.2,.27,0,.07,.22,.22,.12,.05,.14,-.11,.01,-.04,.07,-.1,-.1,.17,-.04,-.06,-.17,.18,.14,.13,.15,.18,.01,.08,-.01,.08,.13,.08,.08,.28,-.12,.08,.01,.07,.22,.1,.06,.13,-.03,-.01,-.14,.05,.5,.05,0,-.2,.06,.09,.19,.21,.26,.19,.08,-.05,.27,.08,-.02,-.05,.01,.1,-.12,-.11,-.06,-.12,-.21,-.19,-.18,.16,.13,.45,.09,-.08,-.3,.11,.14,.07,.06,-.02,-.05,.02,-.06,.08,.1,.09,.11,.04,.13,0,.06,-.04,.1,.22,.14,.23,.06,.14,-.03,-.21,-.07,-.07,.09,.14,.07,.1,-.23,-.07,.11,.17,.09,.12,.09,.22,.04,.14,.13,.15,.12,.12,.02,-.14,-.09,.22,0,-.11,.16,.14,.21,.11,.13,-.2,.11,.07,.11,-.13,.22,.22,-.03,.41,.53,.28,.07,.05,.08,.07,-.29,.11,.14,-.03,-.16,-.21,.11,.31,.1,-.01,-.1,.08,-.17,-.11,.04,.08,-.01,.37,-.23,.17,-.37,-.05,.1,.16,.13,-.03,.13,-.04,.05,-.08,.19,-.14,.03,-.04,.19,.11,.09,.12,.37,-.32,-.43,.22,.05,.06,.19,.13,-.07,.01,.14,-.07,-.1,.46,-.04,.27,.05,.09,-.32,.31,.08,0,.12,.05,.1,.09,.2,-.12,-.01,.1,.1,-.27,-.18,.04,.13,-.1,.22,.13,-.41,.08,.16,-.05,-.26,.01,-.1,.49,.05,.1,.26,.18,.05,.02,.17,-.18,-.13,.07,.43,.16,-.03,-.02,.21,.12,.12,.2,.15,.13,.14,.03,.1,-.45,.03,-.03,.05,-.25,.39,.28,.25,.24,.1,.16,-.06,.17,.12,.26,.2,-.1,-.17,.45,-.18,-.08,.31,-.1,-.21,-.01,.18,-.11,.13,0,-.03,-.15,.04,.17,.06,-.12,-.08,-.04,.16,.04,.01,-.11,-.07,.09,.31,.11,-.04,.14,.16,-.19,.1,.06,.08,.17,.11,.29,.02,.22,.03,.11,-.08,.12,.15,.13,.09,.21,.09,.18,.24,.19,.14,-.03,.08,.17,.1,.08,.15,.04,-.07,.14,.06,-.05,-.14,.13,.49,.13,-.01,0,.1,.23,.1,.1,.11,-.05,.19,-.11,.13,-.01,.17,.17,-.01,-.05,.03,.16,.17,-.25,.26,-.18,.14,.06,.13,.48,-.13,.1];export{a as rvalData};
