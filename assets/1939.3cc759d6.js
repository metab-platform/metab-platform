const a=[-.01,-.01,.18,.04,.27,.2,.19,.27,-.14,.2,-.3,.12,-.08,-.23,-.27,.13,.09,.02,0,.02,-.03,-.47,.12,-.35,-.16,.18,-.45,.35,.21,-.52,.22,-.41,.09,.22,-.42,.04,-.04,-.37,.33,.13,-.17,.26,.32,.08,-.06,-.46,-.13,-.1,-.49,.36,.14,.08,.1,.1,.61,-.2,-.15,.41,.41,-.04,.56,.25,.38,.03,-.15,-.38,.31,-.38,-.02,-.07,.05,-.07,.57,-.13,.22,-.13,-.29,.56,0,-.19,-.21,.01,-.13,.24,.07,-.6,.18,-.11,-.18,-.12,.94,.12,.25,.06,-.04,.21,-.25,-.28,.14,.62,-.03,.33,.53,-.09,.55,-.17,-.32,-.31,.09,.4,-.03,.51,.16,-.03,-.04,-.02,-.01,-.42,-.19,-.06,-.07,-.28,.18,-.05,.08,.36,.27,.05,-.3,-.04,.41,.19,.02,.47,-.1,.04,.64,.24,-.38,-.04,.46,.06,.47,.21,.08,.03,.03,.42,.43,-.15,.31,.19,-.08,-.04,.38,.84,.1,.08,-.15,-.36,.5,.47,-.22,.26,.26,.47,.06,-.36,.38,0,.09,-.27,.44,.31,.13,-.61,.04,-.53,.46,.05,-.22,-.06,.07,-.04,.5,.12,-.14,.17,.49,.15,.11,.41,-.12,.43,.43,.08,.46,.31,-.04,-.41,-.13,.28,.01,.04,-.16,.55,.1,.55,.55,.01,.37,-.3,.04,-.1,.37,.15,.14,.34,-.63,-.49,.39,.48,.44,.11,.28,0,.46,-.4,.48,.26,.05,-.03,.02,.17,-.08,.13,-.26,-.43,.39,-.05,.56,-.31,.38,.6,.24,.24,.08,.08,-.05,.05,.36,-.28,.63,.08,.41,-.26,.07,.05,.32,.04,0,.86,.21,.42,.42,.52,-.28,.33,-.15,.05,-.18,-.05,.04,.2,-.02,.02,-.41,.51,.28,-.51,.66,-.54,-.27,-.1,.56,.07,-.57,-.11,.43,-.35,.07,.55,.18,.18,.26,.36,-.28,-.09,.16,.47,-.04,.12,-.28,-.09,.13,.12,-.05,.56,.76,-.37,.29,.01,-.2,.03,.25,.48,.45,.88,.24,.22,.32,.14,-.26,.27,.41,.61,.21,.27,-.11,.57,-.32,.29,.05,-.11,-.29,-.15,-.35,.42,-.15,-.44,.49,.3,.12,-.01,-.04,.23,.18,.71,.32,.49,.42,.48,.12,.58,-.13,-.23,.25,-.15,.35,.07,-.13,-.01,.56,-.34,.05,-.23,.21,.04,.7,-.01,-.39,-.01,-.15,.3,.47,.41,.26,.29,-.15,.83,-.08,.01,-.11,.06,.01,0,-.11,.01,.14,.18,.29,-.07,-.04,-.14,-.24,.15,-.46,-.09,.32,.03,.05,.49,.28,-.03,.47,-.01,-.17,.31,.33,.39,.22,-.23,.26,.32,.51,-.06,.43,-.01,.66,-.28,.1,-.06,-.37,-.13,-.18,.03,.02,-.17,.51,.39,.32,.25,-.04,.07,.68,.09,.03,.25,.21,.4,.58,.26,.42,-.21,.4,.62,.05,.23,-.15,-.34,.26,.39,-.2,.37,-.17,.28,-.56,.07,.46,.02,.28,.3,-.16,.56,-.02,.07,-.01,-.02,-.18,.08,-.33,-.03,.14,-.12,.87,.05,.19,.1,.08,-.58,.4,-.13,.24,.21,.39,.4,.34,.12,-.13,.2,-.05,.08,-.1,.27,.32,-.02,.37,-.2,.06,.54,.68,.26,.35,-.02,.28,.08,.59,.12,.03,.68,.44,.35,.35,.11,.41,-.51,.46,.46,.6,.18,-.1,.27,.2,.02,.42,.03,.06,.19,-.01,.29,.46,.38,.08,.44,.16,.19,.68,.07,.36,.01,.04,.91,-.11,-.4,-.28,.01,.17,-.41,.32,.31,-.5,.01,.2,.03,.24,.01,-.42,.42,-.3,-.06,.14,-.51,.28,.14,-.07,-.07,.1,-.13,.51,-.12,.23,.21,-.21,.18,.2,.14,-.1,-.35,.52,-.1,-.31,.19,.43,.49,.47,-.2,.1,.4,-.41,-.08,-.06,.12,.09,.42,.18,-.04,.01,.16,.5,.17,.06,.18,.26,.42,.06,-.48,.73,-.03,.07,.25,-.05,-.17,.2,.42,0,-.03,.16,.25,-.2,.13,.26,.12,.43,.04,.59,.01,.28,.7,.49,.1,-.05,-.53,-.21,.59,.08,.4,.05,.59,.18,-.41,.48,.14,-.43,.27,.15,.47,.45,.23,-.19,.49,-.01,-.21,.42,.19,.05,.07,-.3,-.24,-.11,-.03,.15,.37,.1,.91,.13,.21,.04,.5,.23,.19,.02,.04,-.16,-.51,.52,.67,.36,.18,-.1,.07,-.04,.38,.01,.06,.51,.26,-.17,.25,.17,.11,.06,-.05,.63,-.15,.15,-.09,.15,.16,.3,-.13,.27,.17,.28,.1,.19,-.15,.07,.03,.03,-.47,.19,.34,.26,.16,0,.07,-.05,.25,-.23,-.09,.21,.41,-.07,-.05,0,-.09,-.19,-.6,-.06,.31,-.18,.38,.18,-.16,.44,.69,-.09,.06,.28,-.01,-.39,.1,-.47,-.45,-.04,-.11,-.05,-.19,.26,.47,-.02,-.29,.01,.25,.01,-.01,-.14,-.12,.22,.03,.17,-.4,.05,.34,-.08,0,.31,0,-.39,.12,.56,.68,.25,.15,.89,-.02,.27,.14,.21,.97,.05,-.15,-.09,.37,.17,.51,.5,.47,.07,-.56,-.43,.48,.45,-.39,.15,-.37,.19,.4,-.02,.52,-.12,.17,-.36,.36,-.04,.2,.25,-.24,.9,-.08,.06,.1,.19,-.32,.36,.46,-.22,-.47,-.1,.08,.03,-.08,.17,-.01,-.06,.02,-.14,.48,-.2,.06,.28,.01,.52,.06,.12,-.33,-.07,.22,.16,-.56,.53,-.04,-.13,.46,-.48,.32,-.32,-.46,.42,-.24,.01,-.44,.07,-.04,-.04,.29,.9,.85,.27,-.19,.42,.13,-.22,-.15,.51,.71,-.23,.15,.36,.37,.08,-.03,.11,.88,.6,.91,.21,.21,-.07,.13,-.47,.08,-.13,.33,-.14,.09,.6,.09,.42,.26,.31,-.07,-.2,.63,.37,-.09,-.12,-.13,.28,.09,.05,-.15,-.01,-.09,.04,.01,-.04,.69,-.03,.52,.09,-.45,-.57,.26,.53,.18,.17,.52,.41,-.12,.57,-.09,-.05,.12,.41,.26,.19,.08,.18,.94,.43,.18,-.05,.23,.29,-.17,.48,-.05,.36,.28,-.06,.13,.51,.19,.18,.34,.12,.03,-.13,-.14,.32,-.03,.41,-.09,.45,-.03,.26,.34,.3,.03,.05,-.07,.3,-.01,.4,.05,.09,-.02,-.27,-.03,-.42,.35,-.39,-.27,.19,-.17,.16,.53,.45,.19,.23,.38,-.51,.25,.21,.3,.59,.08,.08,.6,.48,.37,.63,.32,-.08,.66,-.16,.02,-.01,.15,.03,.02,.08,.12,.01,-.3,0,-.03,-.13,.17,-.23,.43,.41,-.52,.31,.19,.28,.13,.51,-.03,.34,.24,.11,.6,.08,.46,.22,-.05,.04,-.1,.51,-.22,.12,.54,.12,.48,-.04,.2,.01,-.14,.32,.08,-.51,-.02,.07,.88,.09,-.01,-.18,.34,.62,.21,.24,.29,-.04,-.1,-.06,.18,.62,.04,-.58,.08,-.17,-.19,.62,.37,-.35,.14,.15,.03,.45,.39,.58,-.04,-.11,.11,-.01,.46,.45,.14,.05,-.43,.05,-.02,.55,-.49,.09,-.08,-.5,.21,-.09,.21,.37,-.38,.12,.47,.16,.42,.24,.22,.08,-.37,.46,-.08,-.01,-.06,.1,0,.21,-.06,-.18,.58,.51,-.06,-.52,-.37,.03,-.2,.41,.06,-.22,-.3,-.19,.06,-.29,.04,-.09,-.3,.92,.01,.47,.26,.17,-.16,-.02,.27,.14,.51,.15,.25,.12,-.36,-.09,.15,.45,.08,-.04,-.06,.25,-.15,-.02,-.01,.54,.22,-.11,.8,.04,.42,.26,.09,-.1,.08,.03,.51,.04,-.02,.23,.02,.29,.46,.48,.08,.04,.57,.44,.01,-.15,-.04,-.04,-.11,.56,-.04,-.15,.57,-.12,.1,.11,-.12,.13,.05,.23,.07,.04,-.17,.18,.01,.09,.31,.46,-.14,-.29,.34,.09,.27,.56,.54,.37,.18,.2,.44,.21,-.04,-.23,.34,-.03,.53,-.26,.29,.28,.46,.19,.25,.06,.07,.07,.9,0,-.61,.75,.9,-.39,.44,.25,.15,.23,.14,.02,.07,.1,.07,-.1,.19,.05,.06,.07,-.11,-.04,.01,.26,.18,.21,.01,.08,.89,-.03,-.16,.53,-.27,.32,.37,-.23,.1,-.12,.32,-.33,.56,-.48,-.41,.49,.06,.02,.09,.31,-.4,.24,.28,.14,.07,.24,-.02,.49,.21,-.05,.37,-.21,.01,.16,-.03,-.05,.14,.34,.23,.33,.54,.59,.4,-.06,.4,.2,.52,.04,.23,-.12,.01,-.08,-.3,.49,.56,.02,-.22,.39,.12,-.1,.24,.26,.32,.39,.1,-.05,.07,.28,.38,-.11,.01,.63,.32,-.04,.32,.3,-.54,-.07,.32,.37,.38,.24,-.02,.31,-.08,-.04,.4,.29,-.13,-.37,-.25,-.09,-.1,-.22,.65,-.09,.06,.43,.39,.45,.19,.1,.41,.4,.59,.47,.45,.2,.33,-.11,.18,.36,.35,.44,.66,-.21,-.34,-.22,.07,.15,.02,.51,-.03,.09,.22,.38,.05,-.21,.13,.26,-.13,.21,.15,-.06,-.03,.61,.36,.51,.25,.7,.68,-.03,-.45,.54,-.09,.13,-.21,.6,-.05,-.2,.2,.25,-.34,-.05,.52,-.35,.11,.32,.27,.27,.39,.11,-.13,.22,-.22,.38,-.07,-.02,.08,-.31,.25,-.18,.01,.05,-.16,-.39,-.12,-.16,.3,.29,.93,.16,.21,.13,.05,.61,.05,.88,-.32,.3,.3,.02,.41,.05,.08,.03,-.04,-.11,.19,.04,-.05,.21,.21,.12,.26,-.3,-.04,-.02,.49,.02,-.5,.57,.37,.22,-.1,-.05,.18,.75,-.07,.12,-.44,.41,-.05,.5,.23,.63,-.14,.43,.07,0,.24,.48,.16,.64,-.11,-.11,.69,.36,.31,.34,.33,.32,.68,-.03,-.06,.08,.13,-.05,.03,.22,.62,.11,.33,.08,.37,.71,-.17,.09,-.2,-.21,.52,-.03,-.17,.21,.08,.34,-.3,.93,.96,.4,.24,-.35,.05,.32,-.02,.03,-.57,.64,.24,.35,.1,.4,-.1,.92,.16,.56,.17,.23,.72,.27,.46,.29,.08,.46,.4,.13,-.09,.34,.01,.41,.41,0,.95,.3,-.02,.27,.29,.06,-.12,.28,.11,.43,.43,.22,.43,-.34,.2,.25,.27,0,.29,.11,.13,.51,-.51,.52,-.31,.33,.12,.36,.23,.4,.42,.34,.03,.27,-.04,.36,-.24,-.4,.4,-.13,.46,.03,.43,.04,-.14,-.48,.29,.32,.27,.04,.17,-.08,-.14,.05,.23,.43,.21,-.03,-.17,.18,.09,.7,.46,.4,.4,.02,.27,-.11,.61,-.28,.39,.01,-.07,-.04,.23,.11,-.05,.32,.07,.53,-.03,.43,.37,.14,.43,.17,.27,.67,-.1,.37,.5,.25,.03,-.18,.34,.48,.2,.6,.26,.68,-.09,.46,.44,.51,.57,.11,.07,.17,.33,.25,.38,.05,.38,.47,.39,.24,.59,-.29,.3,.4,-.18,.42,-.21,.23,.35,.02,.15,-.16,.2,-.26,.47,.19,-.23,.41,.16,-.16,.31,.25,-.22,.01,.29,.16,-.33,.52,.33,-.35,-.21,.07,.16,.13,-.11,.14,.43,.29,-.04,-.35,-.04,.49,.46,.27,.12,.21,.04,-.03,.01,.52,-.38,.09,-.42,.4,.11,.23,0,-.4,-.12,-.13,.34,.42,.16,.42,.26,.4,.35,.44,.22,.09,.14,-.01,-.01,.32,-.1,.13,.07,.13,.19,.13,.38,.01,.27,-.43,-.01,-.04,.01,.1,-.07,.22,-.29,-.19,.23,-.18,-.06,-.06,.1,.41,.35,-.05,-.02,.08,-.03,.2,.14,-.45,-.44,-.15,.21,.13,.24,.02,-.39,.27,.14,.32,.51,.49,.12,.21,.08,.28,.45,.47,.35,-.23,.41,.15,.41,.91,-.61,-.32,.51,.16,.04,.65,.2,.19,.01,.46,.16,.07,-.03,.43,-.08,.47,.07,-.12,.25,.84,-.07,.4,.21,-.01,.42,.34,.9,.2,.66,.18,.19,.18,.15,.05,.08,.1,-.18,.36,.14,.18,.26,-.04,.03,-.09,.6,-.33,-.01,-.13,.01,-.06,-.08,.85,.13,.92,.29,.41,.11,.28,-.11,-.06,.2,-.03,.6,.37,.65,.04,.05,.16,.27,.19,-.09,.02,.24,.64,.69,-.07,-.11,.04,.24,.09,.11,-.14,-.15,.38,.31,.33,.25,-.07,-.34,.35,.61,.69,.16,-.11,-.14,.16,.15,.09,.16,.27,.06,.86,.13,.3,.16,-.51,.42,.24,.47,.32,-.07,-.27,.13,-.35,-.08,-.25,.13,-.12,-.2,.3,.62,-.07,.45,.26,.07,-.04,.33,-.23,-.27,.91,-.15,.21,.05,-.12,.01,.01,0,1,.04,-.02,.22,.18,-.4,.06,.09,.08,.26,.2,.17,.16,.45,.24,.69,-.46,.07,-.05,.13,.16,.22,.26,.04,-.12,.06,0,-.29,.23,.19,.22,-.3,.01,-.27,-.06,.23,.15,.3,.18,.53,-.15,.43,-.01,-.26,-.07,-.17,-.24,.13,-.1,.52,-.18,-.23,.48,-.08,-.09,.32,.89,.15,.6,.11,.17,-.15,.18,.43,.18,.1,.36,.21,.4,.18,.26,.1,.14,.2,.16,.02,.22,-.13,-.31,.01,-.35,.89,-.31,.03,.17,.16,.05,.21,.27,.56,-.22,.38,-.13,0,.14,.09,.17,.08,.56,.24,.18,.31,-.3,-.07,-.45,.58,.27,.29,.19,.21,.24,.29,-.46,.03,-.33,-.24,.09,-.03,-.12,.12,.08,.22,.01,.41];export{a as rvalData};
