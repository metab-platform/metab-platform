const a=[-.02,-.01,-.13,-.17,-.06,0,.01,.4,.07,.22,-.41,-.01,.12,-.07,-.37,.04,-.26,-.01,.02,-.11,.05,-.3,.13,-.45,-.19,0,-.4,.05,-.12,-.43,-.02,-.33,-.11,-.07,-.5,.01,-.19,-.27,.23,-.05,-.05,-.04,-.1,.06,.15,-.22,-.28,-.36,-.53,.65,.22,.03,0,-.03,.44,-.23,-.14,.14,.35,-.31,.22,-.01,.18,-.04,-.35,-.4,.02,-.35,.06,.14,.05,-.09,.36,-.12,-.08,-.1,-.17,.22,.08,-.62,-.02,-.32,.02,-.05,-.08,-.39,-.11,.02,-.01,-.09,.44,.09,.42,.3,-.16,.19,.07,-.24,-.02,.27,-.04,.1,.3,0,.39,-.05,-.15,-.1,-.14,.28,-.13,.56,.28,.05,0,-.16,-.22,-.37,-.34,-.1,.18,-.23,.01,.02,.27,.34,-.03,-.12,-.42,-.17,.56,.41,.03,.66,-.31,-.07,.58,.3,-.37,-.15,.11,-.07,.2,-.09,-.02,.25,.03,.03,.08,.08,.04,.35,.14,0,.55,.37,-.04,-.08,-.1,-.37,.62,.32,.04,.25,.36,.27,-.24,-.48,.33,-.18,-.06,-.46,.51,.45,.15,-.5,.06,-.41,.44,-.17,-.3,-.14,.1,-.14,.33,.2,-.15,.04,.51,-.03,-.05,.4,.01,.24,.16,-.11,.18,.18,-.17,-.25,-.02,.04,-.13,-.02,.02,.14,.3,.66,.37,.24,.58,-.35,.02,-.24,.11,0,.01,.48,-.52,-.07,.27,.37,.11,-.11,.26,-.15,.62,-.42,.31,.37,.03,-.01,-.16,-.05,.04,-.09,-.4,-.21,.18,-.11,.51,-.41,.44,.51,.4,.4,-.11,.18,-.16,.06,.44,-.12,.45,0,.05,-.01,.03,-.04,.31,-.07,-.05,.43,.13,.11,.07,.38,-.29,.08,-.13,-.08,-.12,-.02,-.12,.09,.13,.06,-.48,.36,-.04,-.54,.6,-.23,-.1,.07,.49,.03,-.34,-.23,.48,-.22,.3,.44,-.07,.42,.3,-.09,-.21,-.18,.14,.44,-.02,-.15,-.31,.06,-.03,.02,.08,.39,.33,-.24,-.07,.02,-.07,-.04,.14,.43,.66,.5,.05,.28,.05,.11,-.33,.05,1,.51,-.04,.13,.09,.53,.06,.19,-.11,-.08,-.27,-.11,-.54,.17,.17,-.18,.44,-.17,0,0,-.18,-.1,.1,.5,-.04,.48,.21,.56,-.05,.47,.12,-.06,.22,-.07,.06,-.11,-.13,-.05,.46,-.08,-.09,.02,.21,-.14,.15,-.08,-.45,-.08,.12,.21,.1,.33,.05,0,.06,.52,-.06,-.12,-.13,.05,0,.08,-.12,-.02,-.02,-.05,.09,.08,.03,.24,.15,-.15,-.33,.03,.16,.29,-.09,.21,.01,.11,.43,-.16,-.27,.11,.21,.15,.08,-.02,.13,.11,.23,.01,.13,-.23,.59,-.11,.02,-.08,-.28,.15,-.13,-.18,-.15,-.06,.32,.5,.46,.2,-.07,.09,.71,-.11,.2,.02,-.11,.12,.28,-.04,.12,-.1,.55,.21,-.2,0,.07,-.22,.11,.47,.03,.12,-.14,.01,-.48,-.15,.22,.09,.04,.08,.04,.32,.26,.08,.01,-.02,-.12,-.04,-.11,-.2,-.15,-.14,.6,-.1,.05,.26,-.1,-.3,.25,-.23,.05,.32,.45,.24,.47,.45,-.31,-.01,-.06,.01,.23,.41,-.01,-.17,.79,-.03,-.08,.5,.5,.17,.1,-.15,.04,.11,-.03,-.08,-.1,.31,.11,.27,.07,.05,.54,-.48,.35,.56,.38,-.01,-.21,-.07,.07,.12,-.03,-.1,.2,.03,.23,.05,.63,.78,.1,.65,-.04,.14,.43,0,.23,.03,.1,.47,.03,-.32,-.49,.03,.11,-.33,.17,.07,-.35,-.16,-.04,-.04,.1,.09,-.26,.4,-.14,.13,.21,-.25,.35,.45,.13,.07,.12,0,.38,-.01,.08,-.04,.01,.38,0,-.16,.03,-.05,.52,-.11,-.55,-.01,.25,.15,.49,-.41,-.17,.07,-.28,-.2,.04,-.02,.04,.05,.5,.02,0,-.09,.18,.3,-.16,-.08,-.06,.38,.05,-.44,.5,-.32,-.08,.04,-.15,-.22,.25,.41,.21,.15,-.14,.41,-.12,-.11,.38,.08,.2,.04,.36,-.16,.11,.29,.17,.45,-.01,-.06,.02,.41,.06,.4,-.11,.59,.3,-.43,.18,-.23,-.3,0,.07,.11,.33,.08,.11,.52,-.27,-.04,.59,-.14,-.11,-.01,-.2,-.11,.04,-.02,-.14,-.09,-.09,.42,-.08,.09,0,.25,-.01,-.14,.15,-.12,0,-.4,.3,.54,.18,-.11,-.13,-.17,.02,.13,-.31,-.05,.25,0,-.01,.04,-.03,.38,.02,-.01,.26,.05,.03,.31,-.02,0,.2,-.18,0,.39,.33,-.16,.02,-.14,-.12,-.15,-.06,-.38,-.03,.43,.37,.32,.19,-.03,.13,.12,.03,-.11,.35,.13,-.18,.14,-.32,-.26,.05,-.56,-.12,.15,-.1,.49,-.07,-.05,.42,.63,-.22,.01,-.01,.07,-.37,-.12,-.32,-.36,.08,0,.13,-.22,.29,.33,-.07,-.25,-.15,.11,.05,.18,0,-.38,-.11,-.07,-.27,-.35,-.13,.33,-.33,-.11,.18,.11,-.21,-.07,.34,.33,-.02,-.03,.58,-.19,.58,.38,-.1,.43,-.14,-.11,0,.15,-.01,.27,.39,.23,-.15,-.4,-.42,.29,.26,-.32,-.09,-.51,-.1,.13,-.13,.27,.18,.12,.09,.05,-.19,.2,.13,-.2,.37,.02,.02,-.14,-.04,-.38,.13,.46,.12,-.57,-.31,-.15,-.11,-.03,.49,-.03,-.1,-.21,.02,.28,-.26,-.01,.06,-.14,.28,.05,.09,-.12,-.02,.35,.05,-.4,.04,-.33,.04,.5,-.49,.09,-.13,-.34,.42,-.15,.05,-.55,.23,.06,.01,.07,.35,.47,.42,-.39,.21,-.13,-.02,.11,.16,.52,-.31,-.1,.34,.55,.11,-.13,.16,.58,.21,.43,-.05,.4,-.03,-.02,-.31,-.02,-.06,.02,-.14,.28,.3,.06,.07,.41,.05,.19,.15,.4,.04,.05,-.05,.08,-.05,-.08,-.05,.11,-.01,-.16,-.09,-.1,-.02,.65,-.21,.67,-.04,-.36,-.59,.31,.15,.02,0,.53,.56,.06,.23,.02,.32,-.13,.07,-.05,.07,-.19,.1,.41,.44,.01,-.17,-.08,-.04,.07,.46,.09,.17,-.01,-.29,.13,.29,-.09,.19,.08,.39,-.09,-.03,-.18,.41,-.12,.17,.02,.62,-.13,-.02,.05,-.01,-.13,-.14,-.01,.41,-.01,.17,.12,.02,.34,-.01,.05,-.09,.05,-.53,.02,.04,-.05,.53,.51,.47,-.05,-.03,.56,-.42,.47,.34,.46,.53,-.08,-.1,.46,.38,.55,.68,.48,.08,.49,-.19,.13,-.11,.02,.13,-.03,.12,-.01,-.13,-.43,-.1,-.23,-.06,-.04,-.11,.27,.31,-.24,.2,.08,.16,.23,.2,-.04,.04,.12,-.04,.41,.04,.24,.06,0,-.08,-.23,.61,.02,.04,.44,.05,.38,-.22,.3,.01,-.01,.43,-.2,-.38,.03,.07,.6,-.06,.12,-.13,-.01,.47,.03,.15,.45,-.06,-.01,-.11,.23,.2,-.14,-.29,-.13,.21,-.25,.51,.19,-.55,.06,-.07,.08,.44,.28,.19,-.12,-.08,.11,-.12,.6,.12,-.11,-.07,-.32,-.13,.11,.29,-.32,-.06,.18,-.29,-.02,-.03,.06,-.05,-.3,-.02,.27,.49,.18,0,-.08,.36,-.19,.56,-.06,-.15,.1,-.1,.03,-.01,.1,.04,.55,.38,.11,-.45,-.22,.15,-.26,.29,-.12,-.32,-.4,-.26,-.05,-.08,-.09,.02,-.27,.4,-.13,.39,-.02,-.12,.17,-.09,-.05,-.05,.36,-.04,.08,-.08,-.48,.07,-.22,.12,-.04,-.2,-.12,-.1,.22,.03,-.15,.32,.1,.01,.5,-.05,.3,.03,-.04,-.08,.09,.04,.47,-.15,-.11,-.01,-.05,.16,.23,.72,-.18,.06,.49,.41,-.28,-.23,-.06,-.12,.05,.5,.14,-.1,.71,.04,-.03,-.12,-.24,-.1,-.03,.04,.22,.15,.01,-.08,-.22,.06,.07,.17,-.43,-.51,.09,-.04,.02,.4,.25,.16,-.01,.11,.61,-.08,-.35,.12,.48,-.06,.34,-.13,.01,.08,.1,0,0,-.07,-.03,-.02,.4,.09,-.37,.2,.36,-.35,.64,.13,-.13,-.08,-.02,.06,-.02,.03,-.02,-.24,0,-.09,.09,-.05,.01,-.25,-.01,.05,-.04,.07,.06,.17,.41,-.2,.07,.4,.06,.41,.12,-.03,-.14,.04,.54,-.1,.43,-.41,-.42,.45,-.1,-.03,.1,.18,-.65,.22,.51,-.13,-.16,.37,0,.31,.05,-.09,.56,-.03,-.09,-.14,-.18,.07,-.04,.56,-.11,.08,.36,.51,.45,.04,.09,.08,.43,-.14,.07,.06,.04,-.2,-.24,.25,.39,-.15,.04,.55,-.19,.07,.28,.17,.07,.33,-.03,-.18,-.07,.29,.17,.1,.28,.45,.34,-.1,0,.12,-.27,.04,-.07,.59,.17,.04,-.4,.52,-.18,-.01,.14,.18,.15,-.09,-.32,.2,.16,-.28,.35,-.15,-.15,.41,.53,.26,.25,.24,.43,.52,.57,.23,.61,.19,.21,.11,.3,.44,.37,.25,.64,-.05,-.13,-.12,.25,.34,-.04,.59,.14,.31,.49,.33,.37,-.22,.37,.46,-.06,.52,.14,.28,-.04,.47,.21,.31,.24,.44,.53,-.18,-.52,.5,-.09,-.1,-.14,.61,.05,-.39,-.06,.18,-.33,-.13,.46,-.28,.11,.08,0,.15,.26,.12,-.26,.15,-.45,.12,-.11,-.33,-.01,-.31,.17,-.17,-.01,.06,.15,-.14,-.2,-.06,.38,.13,.45,-.03,-.08,.04,-.11,.44,.15,.48,-.17,.53,-.02,-.09,.55,.09,-.23,.11,.09,-.04,.32,-.03,-.09,-.02,.04,.03,.45,-.25,.07,.05,.34,-.14,-.4,.45,.21,-.05,.02,.05,.2,.46,-.1,.42,-.29,.23,0,.28,.22,.46,.05,.38,.24,-.02,.31,.63,.12,.53,.26,-.05,.33,.63,.01,.4,.67,.04,.2,-.07,.1,.07,-.07,.11,.09,-.05,.34,-.07,.4,-.12,.37,.37,-.3,-.01,-.12,-.37,.56,.18,-.27,-.02,.13,.22,-.28,.44,.44,.38,.23,-.1,-.11,.02,-.06,0,-.58,.19,.01,.65,.18,.26,0,.5,.01,.46,-.14,.01,.5,.13,.25,.07,.06,.36,.51,.09,-.12,.2,-.05,.22,.23,-.16,.45,.12,-.34,.11,.26,-.1,-.05,.1,.14,.35,.66,.12,.55,-.39,-.12,.03,.11,.02,.14,-.05,-.01,.73,-.48,.46,-.32,.48,-.08,.12,.06,.32,.46,.48,-.25,-.02,-.15,.1,-.48,-.21,.6,0,.61,-.22,.67,.06,-.27,-.11,.1,.12,.23,-.03,-.07,-.02,-.1,-.09,.32,.44,-.02,.18,.14,.13,.2,.41,.25,.59,.18,.04,.09,.04,.43,-.02,.76,.06,-.13,.09,.24,-.13,-.05,.18,-.06,.56,.09,.74,.1,.02,.23,.02,.04,.29,-.03,.45,.58,.2,.03,-.03,.11,.38,.05,-.07,.22,.29,-.02,.53,.45,.31,.67,.1,-.16,-.15,.09,.01,.52,-.02,.51,.39,.47,.2,.37,-.16,.45,.23,.05,.2,.09,-.06,.18,-.02,-.01,-.2,.34,-.46,.54,.23,-.41,.37,.5,-.06,.69,-.04,-.13,.2,.04,-.1,-.35,.6,.13,-.54,-.35,.07,0,-.17,-.03,-.01,.15,-.05,-.05,-.23,-.19,.59,.53,.64,-.18,-.03,-.19,-.08,-.24,.32,-.55,.14,-.29,.12,-.04,.12,-.12,-.29,.02,-.06,.17,.48,.05,.19,.04,.51,.22,.62,.05,-.07,.26,.14,.08,.1,-.07,-.11,-.04,-.1,-.11,-.01,.39,-.18,.1,-.29,-.01,-.02,-.1,.29,.05,.44,-.19,-.07,.15,.02,-.01,.12,-.14,.24,.27,.2,-.15,-.17,.09,.09,.38,-.33,-.33,.02,-.01,-.16,-.06,-.42,-.12,.19,-.2,.15,.52,.12,-.2,-.01,-.16,.11,.25,.45,.21,-.04,.31,.04,.1,.44,-.51,-.12,.1,-.12,-.15,.48,-.03,.08,-.2,.08,-.05,-.17,-.23,.12,-.03,.23,.03,0,-.06,.47,.02,.37,-.1,-.27,.22,.18,.48,-.23,.47,-.04,.13,0,-.02,.08,-.04,.04,-.36,.39,.23,.41,.04,.14,-.17,.23,.56,-.16,-.21,.08,-.2,-.09,-.11,.49,.1,.43,.15,.13,.37,.38,-.05,-.05,-.01,.12,.7,.25,.38,.14,.35,-.05,-.22,.02,-.08,-.16,.51,.47,.57,-.03,-.06,.15,-.2,.02,.37,.03,-.01,.21,.19,-.07,.07,-.09,-.34,-.03,.53,.24,-.02,.09,-.05,.03,-.12,.3,.09,.07,-.03,.37,.06,.05,-.04,-.44,.52,.23,.43,.17,.18,-.23,.07,-.41,-.02,-.28,-.11,.25,-.1,-.06,.38,.17,.26,-.08,-.17,-.03,.09,-.15,-.22,.48,.05,.2,.04,-.01,.02,-.1,-.04,.41,-.07,-.18,-.1,.04,-.49,-.07,-.1,-.13,.07,-.01,.28,.29,.36,-.03,.47,-.56,.11,.02,-.04,-.05,-.06,.48,-.16,.02,.1,-.19,-.26,.46,-.07,.29,-.24,-.1,-.25,.02,-.1,-.14,.02,-.15,.41,-.18,.48,.01,-.39,.35,.12,-.28,.06,-.25,.43,-.03,-.02,.35,-.1,-.22,.03,.45,-.08,.31,.36,.03,0,-.05,.08,-.12,-.04,.18,.05,.09,-.02,.45,-.02,0,-.08,.16,-.17,-.04,-.2,-.55,-.18,-.53,.36,-.24,-.2,-.09,-.07,-.07,-.02,.52,.17,-.14,.28,-.1,-.16,-.03,-.15,.42,.09,.17,.21,-.05,.07,-.31,-.02,-.53,.59,-.07,.37,-.13,.21,.2,.03,-.41,-.06,-.28,-.3,-.06,.17,.01,.24,-.14,-.01,.07,.34];export{a as rvalData};
