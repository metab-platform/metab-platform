const a=[-.01,-.07,.15,.17,.06,.33,.03,.11,.09,-.21,.17,.15,-.05,-.13,.13,-.08,-.01,.04,-.13,.01,.05,.3,-.1,-.05,.17,.06,.14,-.03,.01,.07,.08,.25,.17,-.03,.44,-.03,.02,-.05,-.08,.07,-.03,.02,-.02,.12,-.11,.01,-.1,.34,.21,-.25,-.15,.15,-.11,-.03,.33,-.15,.26,.05,-.04,.05,-.05,.1,-.09,-.1,.37,.29,.09,.01,.06,-.17,-.12,-.23,.07,.08,-.01,-.03,-.08,-.02,.06,.35,-.01,.03,0,.05,.18,.35,.12,.18,0,.06,.14,.06,-.02,-.14,.21,.25,-.21,-.02,.33,.03,-.04,.04,.23,-.12,.15,-.06,-.34,-.27,.21,.21,-.11,-.11,-.07,-.17,.45,.05,.11,.24,.37,.12,-.16,.06,.02,.09,-.05,-.02,.13,.68,.08,-.02,.1,.26,-.01,-.24,0,.23,-.01,.08,.09,.02,.1,-.03,-.06,.09,0,.01,0,.42,.25,.12,.04,-.07,-.14,-.21,-.05,.29,-.03,.09,-.11,.04,.16,.25,-.13,.06,.02,0,.09,.17,.33,.1,.13,.29,.04,.16,.19,.33,.09,.06,-.05,.06,.08,.01,.08,.01,.28,.07,.05,-.01,-.21,.12,-.04,.1,.12,.13,.14,.19,.28,.23,.12,.35,-.38,.05,-.03,.08,.01,.35,-.14,.12,.11,-.11,-.06,.06,.09,0,.07,-.34,.01,-.08,.19,-.12,.38,.16,.24,.06,.25,-.03,.03,.2,.32,.22,-.03,.1,-.06,.14,-.09,.08,.06,-.27,-.01,-.08,-.2,.03,-.02,-.03,-.09,-.12,.15,-.13,.15,-.04,-.01,.13,.27,.4,.18,-.03,.11,.23,.02,.02,-.14,.14,.21,.13,.39,.15,-.01,.12,.25,-.19,.21,.02,.04,-.04,.17,-.03,.13,-.05,0,.23,.06,-.15,-.14,-.13,.4,.08,-.13,0,.05,.42,.35,.01,.11,-.2,.06,.06,-.16,.03,-.1,.1,-.14,.14,.25,-.2,0,.07,.5,-.07,.36,-.19,-.1,-.12,-.04,-.01,.7,.1,-.06,.01,-.02,-.17,-.02,.2,.03,.08,-.15,.33,.22,.3,.34,.34,-.06,.16,.26,-.06,.12,-.17,.3,.28,-.07,.31,-.16,.09,.05,-.13,-.06,.14,.05,.24,-.09,.11,.14,-.18,.2,.39,-.4,-.13,.25,-.04,.08,.09,-.14,-.12,.41,-.19,.18,-.14,.13,-.01,.02,-.13,.4,-.18,-.13,.31,.06,-.01,-.07,.19,-.14,.22,.07,.08,0,-.22,.18,.3,-.02,.12,.27,.23,.07,-.1,-.07,-.07,-.08,.1,.08,-.1,.38,-.08,.18,.47,.12,-.04,.04,.15,-.03,.12,.14,.4,-.03,-.09,.5,.08,.39,-.06,.11,.3,.07,-.02,.05,.04,.17,-.25,.01,.01,.18,0,.21,-.05,-.03,.34,.12,.13,-.01,-.17,-.17,.18,-.01,.25,.3,-.02,-.09,-.23,-.57,.21,.1,.17,-.26,-.01,-.04,-.07,-.07,.33,-.03,.51,.32,0,.27,-.04,-.04,.14,-.06,.03,.08,.65,-.15,.06,.04,-.04,-.33,-.02,.14,-.08,.19,.22,-.14,-.28,.21,.02,.15,-.02,.35,.01,-.53,.45,.23,-.08,.32,.17,.15,.14,-.01,-.05,.12,0,-.08,-.27,.25,.09,.12,.29,.28,.07,-.16,.03,.37,.4,.14,-.07,.19,.32,-.12,.05,-.53,.41,.09,-.02,.01,.16,-.01,.19,.56,.07,.06,.13,-.09,-.02,-.32,.12,.14,-.09,-.12,-.2,.09,-.05,.37,.33,.42,.15,-.04,.13,-.02,.14,.2,.09,.16,.19,-.11,-.19,-.14,-.03,-.06,.02,-.27,-.05,.05,-.2,-.22,-.07,-.1,.22,.16,.01,-.25,-.22,0,-.15,.13,-.09,.11,.05,-.23,-.2,.22,.03,-.09,.36,-.07,.05,.18,.11,.17,.44,.09,.02,.09,-.06,.14,.02,-.17,.02,.05,.14,.03,-.05,.18,-.01,.17,-.08,.3,-.03,.2,-.04,.02,.14,.1,.35,-.03,-.18,.04,.08,.13,.11,-.19,-.1,.13,-.11,-.09,.02,-.02,-.02,.18,.02,.42,.2,-.37,.26,.25,-.13,-.05,-.24,-.05,-.01,.43,-.06,.25,-.15,-.07,.28,.06,.1,.18,-.01,.15,.24,.38,-.04,.24,.09,.24,-.07,0,.06,.22,.13,-.02,-.12,-.12,-.06,.13,.08,.04,.14,.09,.12,-.17,.48,0,-.06,-.15,.18,-.15,.04,.2,.02,.04,-.02,.23,.02,-.1,.45,-.01,.06,.26,-.05,-.2,-.01,.17,.26,-.07,.03,.35,-.16,-.02,.04,.01,.26,-.05,0,.05,.04,-.02,-.08,.2,-.21,-.1,.42,.07,.17,.12,-.09,-.04,.14,.01,-.07,-.04,.14,-.22,.08,.08,.33,.04,-.11,.05,.18,.03,.24,.06,.14,-.04,.01,.25,.1,-.02,.04,-.02,.14,.13,-.24,.24,.28,.32,.13,-.18,.05,-.05,.02,.11,-.07,.06,.56,.19,.03,.04,.02,.48,.06,.28,-.05,-.01,.07,.25,.15,.07,-.15,.03,-.06,.07,.07,.34,.35,.01,.03,.2,-.01,-.03,-.08,.07,.04,.16,.41,-.04,-.03,.18,.36,.29,-.02,1,.23,.45,.36,.43,-.08,.11,.04,.05,-.12,0,.28,-.11,-.16,-.14,.08,.11,.22,-.06,.28,.14,-.1,.15,.05,.22,.64,.16,0,-.31,.14,-.06,.07,-.02,-.08,.01,0,-.22,-.02,.08,.32,.01,.06,.44,-.02,.18,.2,0,.08,-.29,.21,.07,.3,.3,.03,-.15,-.03,.17,.09,-.31,.22,-.2,.03,.03,.31,-.06,.02,.09,.23,.15,.11,.09,.58,.12,-.09,.36,-.15,.4,.2,-.03,.26,-.12,-.05,.13,.09,-.28,.21,.27,.17,-.18,.05,-.05,.05,.13,-.07,.1,-.05,-.07,-.11,.23,.32,.24,-.24,.01,-.08,-.12,.16,.15,-.08,-.18,-.31,.05,-.03,.5,-.01,.17,-.08,.02,.08,-.15,.1,.07,-.06,-.04,.13,.33,-.07,.09,.37,.11,.12,.01,-.06,.26,-.03,-.16,.12,.24,.06,.05,-.04,.29,.06,.1,.03,.16,.05,-.05,-.12,0,.19,.01,.07,.05,.55,.22,-.1,.23,-.04,-.14,.23,.03,-.23,-.01,.12,.52,.47,-.1,-.32,.03,.35,.06,.53,.22,-.05,-.28,.18,.3,-.18,-.08,.31,-.02,-.14,-.12,.45,.09,-.11,.18,-.38,.25,.38,-.03,.39,-.1,.03,.23,-.11,.11,-.01,-.06,.07,.11,.17,-.27,-.04,.12,-.17,-.22,.2,-.12,.12,.09,.15,0,.09,.03,.06,.17,.02,.02,.02,-.04,.17,-.05,.06,.13,-.01,.31,-.13,-.12,-.08,.41,.01,-.04,-.03,.03,.27,-.23,.32,.04,-.08,-.02,-.06,-.08,-.09,.21,.42,.14,-.09,.05,.01,-.03,-.14,.19,.02,-.09,-.07,-.08,.21,.21,-.22,-.03,.01,-.16,-.1,.07,.24,.15,0,.02,.01,.27,.21,-.04,.16,-.12,.1,-.3,.39,.23,-.09,.02,-.08,.26,.01,.21,.05,.59,.05,-.03,.21,.15,-.08,-.01,.5,-.26,-.07,-.01,-.04,-.22,-.11,.32,.08,-.21,.21,.01,.5,.08,.07,.01,.5,.18,.16,.24,0,-.2,-.25,.22,.03,-.09,.09,.22,.35,-.02,.02,0,-.19,.33,.07,.04,.04,.23,.1,.16,-.03,0,-.05,0,.04,-.05,.11,.08,.02,.03,.16,-.07,-.26,.11,.12,.19,.24,.02,.56,.09,.43,-.12,.13,.16,0,.11,.02,.31,-.41,-.11,.61,-.01,.35,.01,.28,-.01,.21,.07,-.04,.16,.07,.15,-.08,.25,.22,-.04,-.04,.18,-.23,.05,.17,-.01,.39,.05,-.13,-.04,-.08,-.07,-.23,.07,.13,.09,-.08,-.09,-.04,-.07,-.02,-.15,.04,-.21,.37,.24,.35,.12,.03,.03,.14,.21,-.02,.18,.33,.1,.01,.4,.21,.36,.08,.1,.04,.15,.01,-.25,-.16,.23,.4,-.19,.06,-.12,.11,.1,-.15,.46,-.01,.01,.1,.05,-.05,.36,.1,.11,.02,.02,.25,.1,-.04,.03,.07,-.05,-.01,.01,0,.1,-.12,0,-.01,.03,.04,.07,.09,.16,.11,.12,.11,.22,-.18,.07,-.15,.01,.32,0,.19,-.25,.21,-.03,.18,.11,.15,-.06,.08,-.01,-.17,.25,.01,.26,-.07,.05,.18,-.13,-.1,.16,.27,.13,-.03,.06,.01,.15,-.04,-.04,.06,-.1,.05,-.04,.12,.32,.24,.51,.3,-.13,.04,.22,.29,-.31,.07,-.03,.04,-.04,.26,-.03,.03,.14,.13,0,.25,.46,-.03,.07,.41,.01,-.02,-.04,.44,-.15,-.21,.28,.29,.03,-.06,.12,-.09,-.22,.08,.09,-.05,-.22,.13,.2,.02,-.14,.01,-.1,-.15,-.16,.08,.34,-.01,-.14,.21,-.02,-.04,.1,.32,.27,.19,.07,.37,-.04,.09,.44,.14,.45,.22,-.02,.46,-.04,.37,-.01,.23,.1,-.11,.2,.45,.26,-.08,.02,.5,.37,.17,.16,.2,-.02,.34,.32,-.01,.1,-.01,-.19,-.08,.17,.14,.3,.45,.21,.14,-.01,.41,.01,-.24,.01,-.13,-.04,-.2,-.25,-.01,.34,-.03,.1,-.01,-.29,.09,.14,0,.1,.41,-.1,-.05,.01,.1,.24,.14,.43,.08,.17,-.02,-.26,-.1,-.09,-.25,-.09,.07,-.06,0,.04,.03,-.09,.11,.09,.17,.13,.09,.04,-.01,.07,.06,-.02,.17,-.06,.43,-.13,.5,-.05,-.12,.04,.1,-.12,.04,.35,.01,.3,.03,.18,.1,.27,.23,.32,.16,-.03,-.01,.27,.49,.18,.08,.19,.37,.2,.16,.24,.44,.22,-.26,.47,.31,-.19,.1,.23,.28,.19,.26,-.12,.2,.22,.34,.15,-.29,.15,-.12,-.18,0,-.04,.35,.03,-.1,-.08,.2,-.06,.18,-.1,.16,-.02,.09,-.02,-.35,-.16,-.12,-.01,-.16,-.07,-.01,-.09,.18,.05,.06,.05,.05,-.27,.06,.06,-.05,-.02,.32,.25,.33,0,.29,.08,-.21,.05,.31,.05,.14,.14,-.03,-.02,.07,.15,.27,.22,-.16,-.09,-.11,.04,.2,.18,-.12,.07,.03,.21,-.16,.23,-.21,.06,.03,-.06,-.32,.34,-.17,-.03,-.53,.06,.16,.06,-.05,.26,.19,.01,-.06,-.11,.14,.07,.03,-.01,.02,.12,.34,-.11,-.16,.02,-.47,.11,-.01,-.1,.56,.15,-.1,-.37,-.13,.19,-.31,-.14,.11,.07,.18,.44,.29,0,-.02,-.1,.27,.22,-.01,-.1,.1,-.22,-.48,-.16,.14,.18,.1,.17,.18,.01,.15,-.15,.26,-.47,-.06,-.02,-.17,-.12,.15,.15,.29,.34,-.13,-.08,-.08,-.3,.02,.17,.19,.14,.05,.26,-.28,.06,-.1,.31,-.17,-.12,.1,-.23,-.02,.34,-.27,.28,-.03,-.11,.07,.25,.09,-.07,-.02,.13,.14,.15,-.27,-.02,.14,.01,.12,0,.08,-.13,-.08,.19,-.15,.2,-.05,.1,.12,.1,.01,-.05,-.14,.31,-.27,-.09,-.1,-.02,.01,-.13,-.43,.66,-.01,-.15,.1,.21,.01,.22,.14,.13,0,-.01,.19,.14,-.01,-.02,.22,.13,.05,-.09,.13,-.46,-.46,-.28,.07,.1,.05,.03,-.05,-.02,.08,-.04,.21,.2,-.09,-.09,.04,.31,-.23,-.19,.41,.19,.09,-.08,.17,.27,.03,-.27,.14,.09,.13,-.12,-.09,.04,.12,.1,-.15,.24,.17,.01,.01,.45,.14,-.09,-.02,-.15,.32,.03,-.12,-.2,-.08,-.08,-.25,-.08,.16,-.01,.18,.37,.18,-.24,-.07,.08,-.18,-.04,.2,-.03,-.03,-.23,.09,.06,-.06,-.05,-.37,.42,.27,.34,.15,-.06,-.04,.12,.27,.24,-.11,.24,0,.14,.02,.01,.12,.1,.18,-.32,.41,.03,.58,.24,.07,.18,.11,-.11,.16,.05,-.07,.2,-.14,.41,-.12,.03,.18,.35,-.18,.17,.34,.06,.33,.39,.09,.4,.19,.19,-.19,.04,.07,-.13,-.03,.06,.25,.06,.15,.24,.18,-.24,-.12,.39,.1,-.11,-.09,0,.35,-.12,.17,.3,.27,.07,-.17,-.18,.32,.29,.3,-.09,.09,.03,.03,.35,.29,.36,.18,-.06,.38,.13,.01,-.01,.17,.25,.18,-.04,.12,.26,-.18,-.04,-.09,-.02,-.12,.19,.26,.19,.37,-.18,.1,.04,.21,-.15,.02,-.27,.23,.08,.1,-.3,.27,-.06,.05,.05,.24,0,-.1,.06,-.07,.24,.09,.47,-.22,.04,-.25,.21,-.12,.06,.01,-.04,.21,.09,.33,-.09,.15,.25,.05,.03,.05,-.03,.19,.12,-.12,-.04,-.08,.16,.11,.04,.2,.07,.07,0,0,.21,.2,.06,.02,-.06,.11,.16,-.13,-.01,.06,-.06,.22,.41,.07,-.07,-.11,-.13,.16,.07,0,.31,.49,.1,-.31,-.1,.23,.26,-.1,.05,-.31,-.3,.12,.1,-.32,0,-.14,-.07,-.03,.36,.32,.25,.02,.24,-.15,-.06,.06,-.04,0,.28,.01,.3,.12,.13,.04,.15,-.04,.14,-.06,-.05,.22,-.04,-.01,0,.3,.19,-.23,-.08,-.06,.2,.11,.26,.02,-.02,-.08,.14,0,-.01,.14,-.18,.01,-.01,0,-.07,-.05,.21,.19,.13,.16,-.07,-.02,.09,.08,.18,0,.29,.11,-.06,.05,.08,-.05,.42,-.14,.12,.17,.1,-.08,.07,.34,.04,.09,.38,.05,-.04,-.04,.51,.46,.09,.14,-.1,.11];export{a as rvalData};
