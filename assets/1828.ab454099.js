const a=[-.25,.08,.09,-.04,.25,.03,.21,.24,-.1,.19,-.34,.04,.1,-.17,-.33,.07,-.05,.05,.17,-.03,-.02,-.42,.14,-.42,-.17,.18,-.41,.28,.24,-.5,.2,-.38,.06,0,-.48,-.01,-.15,-.41,.37,.07,-.2,.24,.22,-.01,.08,-.48,-.11,-.26,-.47,.43,.14,-.09,.07,.04,.57,-.27,-.15,.19,.48,-.07,.46,.24,.34,-.02,-.12,-.37,.28,-.4,-.08,-.04,.01,-.11,.51,-.07,.18,-.18,-.33,.46,-.01,-.28,-.25,-.04,-.15,.22,.1,-.44,.18,.06,-.14,-.1,.88,.2,.27,.08,-.1,.39,-.27,-.45,.22,.52,.02,.29,.52,-.08,.57,0,-.33,-.25,.04,.41,-.2,.54,.18,-.13,.01,-.01,-.03,-.39,-.21,-.06,.06,-.2,.04,.01,.09,.4,.27,.03,-.33,-.07,.45,.23,.01,.48,-.28,0,.63,.33,-.38,-.19,.43,-.13,.47,.19,-.16,-.02,-.02,.41,.4,-.14,.26,.15,-.05,-.18,.39,.8,.18,-.16,-.21,-.4,.54,.49,-.12,.31,.27,.43,.01,-.38,.36,-.03,-.17,-.31,.47,.36,.2,-.58,.02,-.49,.41,0,-.28,-.09,.1,-.05,.51,.29,-.26,-.05,.49,.06,.06,.36,.01,.36,.38,.04,.46,.23,-.18,-.32,-.16,.22,-.02,-.11,-.19,.5,.17,.58,.49,.22,.39,-.34,-.04,-.13,.15,.08,.16,.36,-.61,-.38,.44,.51,.45,.05,.39,-.03,.46,-.39,.44,.33,.06,.01,.02,.12,.16,-.14,-.28,-.45,.41,-.12,.53,-.36,.4,.57,.24,.23,.07,.07,-.1,.05,.36,-.12,.63,.21,.39,-.1,.12,0,.22,.02,-.1,.9,.16,.41,.38,.54,-.24,.35,-.18,-.06,-.21,-.2,-.02,.16,0,.2,-.39,.41,.22,-.49,.65,-.5,-.3,-.02,.63,.06,-.49,-.18,.4,-.26,.12,.64,.13,.19,.24,.27,-.33,-.21,.05,.47,-.04,.11,-.24,-.06,.09,.18,.06,.5,.77,-.4,.25,.05,-.01,-.19,.31,.49,.46,.91,.19,.26,.32,.15,-.24,.27,.48,.68,.17,.35,-.04,.65,-.23,.36,.08,.05,-.28,-.22,-.36,.41,-.14,-.37,.44,.26,.2,0,-.09,.2,.15,.68,.28,.52,.39,.39,-.08,.65,-.16,-.27,.3,-.15,.32,.04,-.18,-.05,.65,-.21,.05,-.24,.08,0,.6,.01,-.34,-.03,-.13,.23,.37,.4,.33,.3,-.12,.78,-.1,.06,-.13,.02,-.02,.04,-.14,.03,.15,.16,.25,.21,-.08,-.11,-.17,.13,-.44,-.1,.38,.13,.12,.55,.25,-.03,.49,.04,-.19,.29,.36,.4,.2,-.2,.31,.28,.47,-.14,.44,.01,.65,-.13,-.08,-.01,-.38,.07,-.13,-.01,-.02,-.02,.56,.44,.41,.22,-.07,-.03,.65,.03,.06,.24,.17,.28,.58,.24,.41,-.35,.39,.6,.02,.25,-.2,-.43,.23,.39,-.21,.45,-.11,.28,-.48,0,.37,.08,.24,.26,-.23,.48,.01,.08,.02,.03,-.24,.02,-.29,-.1,-.08,-.28,.87,.02,.11,.05,.03,-.49,.36,-.19,.23,.21,.36,.43,.39,.18,-.06,.15,-.03,.04,-.01,.3,.21,-.03,.48,-.12,.05,.55,.71,.31,.32,-.05,.25,.11,.52,.07,.03,.6,.41,.41,.34,.16,.36,-.46,.31,.45,.54,.18,-.09,.22,.21,.08,.35,-.21,.02,.1,-.02,.19,.48,.47,.09,.43,-.09,-.04,.71,.12,.41,0,.01,.95,.16,-.35,-.32,.06,.02,-.35,.28,.35,-.45,-.03,.13,-.05,.21,.21,-.39,.46,-.31,-.02,.11,-.45,.38,.18,-.03,0,.1,-.07,.43,-.03,.23,.16,-.19,.23,.23,.08,-.03,-.22,.58,-.1,-.37,-.04,.45,.5,.47,-.23,.06,.34,-.39,-.17,-.03,.04,.06,.36,.24,-.14,.02,.14,.34,.13,.06,.14,.24,.3,.09,-.43,.73,-.07,-.12,.31,-.02,-.27,.37,.36,.23,-.1,.15,.24,-.19,-.13,.32,.1,.44,-.02,.66,-.16,.27,.72,.48,.15,.09,-.53,-.14,.55,.13,.37,.01,.57,.12,-.3,.3,.09,-.42,.16,.17,.46,.5,.22,.01,.51,-.21,-.29,.5,.14,.02,.04,-.31,-.25,.07,.01,.12,.33,.07,.82,.17,.04,.13,.55,.2,.15,.04,-.05,-.12,-.49,.52,.7,.34,.15,-.09,-.03,-.04,.44,-.06,-.01,.45,.09,-.26,.24,.15,.1,-.07,-.05,.67,.1,-.03,0,-.12,.01,.31,-.23,.26,.21,.25,.16,.16,-.04,.01,-.03,-.16,-.42,.17,.37,.15,.16,.15,.01,.03,.29,-.17,-.08,.19,.39,-.19,.01,-.04,.01,-.19,-.55,-.3,.34,-.31,.39,.16,-.07,.44,.7,-.14,.1,.25,.12,-.42,.07,-.43,-.4,.01,-.26,-.04,-.24,.36,.44,-.28,-.2,0,.16,-.05,.05,-.03,-.12,.09,.02,.11,-.35,.04,.37,-.01,-.04,.33,.22,-.32,-.06,.59,.64,.21,-.12,.88,-.15,.34,.11,.17,.93,.04,-.03,-.16,.36,.13,.52,.52,.39,.09,-.45,-.37,.51,.44,-.42,.14,-.38,.14,.39,.05,.51,0,.1,-.26,.32,-.21,.28,.2,-.22,.81,-.02,.08,.03,.18,-.3,.43,.49,-.11,-.42,-.08,.07,-.16,-.18,.24,.11,-.01,-.03,-.23,.41,-.15,-.04,.33,-.02,.38,.11,.25,-.29,-.07,.35,-.08,-.49,.41,-.09,.05,.49,-.53,.27,-.29,-.46,.4,-.29,-.01,-.46,.02,-.01,-.06,.37,.8,.89,.26,-.25,.36,.06,-.09,-.1,.54,.76,-.23,-.1,.39,.4,.12,-.12,.21,.86,.58,.86,.26,.26,-.09,-.08,-.4,-.02,-.07,.3,-.1,.09,.54,.17,.39,.29,.3,.15,-.05,.63,.32,.08,-.17,.11,.25,.08,.05,-.12,-.05,-.08,-.2,-.02,-.21,.73,-.25,.53,-.1,-.39,-.57,.34,.49,.24,.02,.49,.44,-.1,.53,-.03,.02,.09,.4,.24,-.02,.03,.22,.91,.38,.11,-.03,.22,.28,-.13,.46,.05,.22,.26,-.28,.2,.49,.2,.24,.31,.11,-.02,-.13,-.16,.33,-.06,.5,.02,.46,-.06,.24,.35,.31,.05,.03,-.06,.32,.02,.39,.1,.07,.01,-.15,-.1,-.27,.27,-.45,-.29,.22,-.22,.28,.62,.44,.14,.2,.4,-.43,.27,.21,.39,.58,-.19,-.2,.54,.51,.4,.64,.36,-.05,.66,-.14,-.02,-.04,.16,.08,.14,.11,.06,-.11,-.32,-.23,-.06,-.07,-.01,-.22,.34,.41,-.41,.28,.21,.22,.04,.55,-.16,.35,.29,.09,.64,0,.57,.15,.04,-.23,-.02,.59,-.18,.12,.61,.23,.41,-.05,.26,.05,-.14,.35,.03,-.39,.08,-.1,.87,-.01,-.06,-.17,.28,.52,.11,.27,.3,.1,-.21,-.15,.19,.58,.03,-.5,-.2,-.14,-.16,.61,.29,-.38,.1,.14,.09,.45,.29,.44,-.07,-.01,.11,-.08,.47,.35,.08,-.2,-.35,-.04,.03,.42,-.4,.06,.06,-.41,.21,-.04,.27,.31,-.29,.06,.47,.24,.52,.21,.2,.08,-.26,.4,-.08,0,-.13,.11,.07,.16,-.05,.08,.55,.51,0,-.47,-.22,.11,-.22,.36,.06,-.29,-.34,-.38,-.17,-.25,-.12,-.14,-.3,.86,-.07,.51,.21,.11,-.04,-.09,.25,.12,.57,-.09,.25,.11,-.47,-.03,.13,.42,-.17,-.04,-.07,.17,-.13,-.1,-.06,.38,.24,-.03,.8,-.2,.39,.1,-.15,-.12,.1,-.1,.51,.06,.04,.2,-.03,.27,.38,.54,-.16,.1,.66,.43,-.07,-.17,-.1,-.02,-.04,.6,.04,-.13,.57,-.11,-.14,.07,-.15,.17,.01,.29,.07,.08,-.03,.16,-.2,.11,.28,.45,-.18,-.34,.23,-.12,.22,.63,.52,.37,.13,.2,.45,.15,-.22,-.08,.35,.01,.54,-.37,.28,.25,.37,.16,.23,0,-.17,-.16,.76,.14,-.53,.7,.82,-.36,.49,.21,.2,.19,.08,.13,0,-.1,-.16,-.14,.19,.01,.09,-.16,-.14,-.25,.09,.23,-.08,.2,-.01,0,.77,-.2,-.21,.53,-.12,.3,.35,-.36,.08,-.18,.38,-.19,.5,-.41,-.37,.47,-.22,.01,.07,.29,-.47,.21,.3,.14,-.1,.22,.01,.52,.04,-.13,.4,-.17,-.22,.15,-.1,-.15,-.1,.42,.15,.31,.43,.59,.48,.03,.37,.21,.51,.03,.19,-.2,.1,-.13,-.31,.38,.63,-.01,-.24,.44,.08,-.03,.28,.35,.3,.36,.08,-.06,-.09,.28,.47,.12,.05,.63,.51,-.06,.3,.27,-.45,0,.24,.45,.35,.31,-.11,.33,-.16,-.06,.3,.26,.09,-.36,-.24,-.07,0,-.2,.62,-.26,.07,.36,.43,.42,.18,.38,.39,.42,.61,.46,.47,.15,.29,.17,.22,.37,.36,.38,.7,-.29,-.36,-.25,.09,.21,.01,.67,.03,.15,.29,.36,.12,-.2,.19,.32,-.14,.25,.13,.15,-.01,.57,.36,.43,.26,.67,.7,-.08,-.5,.52,-.29,.11,-.17,.63,0,-.33,.11,.28,-.36,-.12,.52,-.27,.04,.28,.21,.11,.48,.13,-.2,.23,-.23,.32,-.08,-.05,-.02,-.35,.23,-.26,.01,0,-.09,-.27,-.11,-.24,.27,.3,.88,.15,.18,.07,-.2,.53,.24,.85,-.39,.35,.3,-.22,.44,.02,.13,.05,-.05,-.26,.2,.04,-.06,.17,.19,.12,.24,-.28,.05,-.06,.55,-.04,-.53,.49,.36,.15,-.02,-.04,.16,.7,-.11,.2,-.4,.4,-.2,.49,.24,.62,0,.53,.06,.1,.32,.52,.24,.68,-.1,-.07,.57,.44,.26,.37,.42,.34,.68,-.03,.05,.12,.09,-.04,-.04,.19,.57,.13,.32,.02,.44,.81,-.26,.05,-.12,-.26,.54,.12,-.06,.22,.09,.29,-.31,.91,.91,.47,.1,-.3,.07,.32,-.22,-.06,-.53,.62,.24,.43,.19,.36,-.15,.87,.16,.55,.14,.21,.68,.25,.44,.26,.12,.58,.33,.12,-.1,.39,.07,.42,.37,-.21,.9,.35,-.13,.28,.33,.02,-.15,.28,.12,.48,.43,.25,.4,-.38,.19,.21,.24,.03,.33,-.14,.06,.57,-.45,.53,-.34,.33,.1,.33,.26,.37,.4,.33,.02,.23,-.04,.32,-.26,-.44,.45,-.11,.5,-.02,.46,-.01,-.19,-.39,.28,.37,.28,0,.09,-.13,-.07,-.02,.23,.45,.16,.15,-.14,.17,0,.65,.47,.43,.39,-.15,.24,-.09,.54,-.28,.49,.07,-.1,-.03,.31,.05,-.05,.29,-.08,.57,.05,.48,.33,.1,.44,.12,.27,.69,-.24,.38,.49,.26,.05,-.11,.33,.48,.21,.52,.24,.7,-.06,.42,.39,.52,.62,.1,.04,.14,.29,.23,.36,.04,.39,.47,.39,.24,.57,-.26,.31,.42,-.03,.4,-.02,.12,.31,-.01,.15,-.14,.16,-.33,.44,.16,-.32,.35,.24,-.08,.32,.22,-.17,.02,.27,.13,-.38,.55,.33,-.42,-.28,.03,.17,.11,-.09,.04,.43,.29,-.01,-.31,-.14,.47,.46,.35,.08,.14,.04,-.06,-.05,.47,-.36,.12,-.38,.4,.01,.17,-.12,-.28,-.06,-.09,.28,.4,.11,.37,.21,.46,.37,.45,.22,-.18,.31,.03,.14,.28,-.11,.11,.07,.08,.17,.02,.39,-.02,.24,-.39,.1,-.03,.05,.14,.02,.24,-.27,-.09,.16,-.08,-.05,-.11,0,.41,.33,.14,-.02,.03,-.05,.17,.2,-.41,-.42,-.07,.2,.09,.21,-.06,-.42,.27,.11,.32,.54,.44,-.04,.18,.06,.3,.37,.48,.42,-.19,.39,.17,.31,.85,-.57,-.29,.51,.12,.03,.62,.03,.16,-.05,.4,.1,.02,-.08,.38,-.08,.47,.04,-.16,.17,.82,-.02,.39,.16,-.09,.39,.26,1,.15,.64,.15,.22,.11,.14,.07,-.16,-.16,-.26,.37,.16,.16,.25,.13,-.02,-.08,.61,-.25,-.05,-.09,-.03,-.08,-.07,.84,.19,.96,.3,.38,.12,.3,-.25,-.08,.14,.18,.61,.37,.59,.03,.07,.12,.26,.19,-.07,-.04,.33,.61,.7,-.13,-.09,.1,.1,-.08,.23,.1,-.21,.34,.29,.28,.22,-.07,-.24,.32,.62,.67,-.09,-.09,-.2,.17,.11,.23,.09,.27,.11,.78,.09,.26,.14,-.51,.47,.26,.4,.3,.02,-.22,.11,-.3,-.04,-.35,.09,.07,-.21,.27,.6,.01,.42,.25,-.15,.01,.28,-.41,-.29,.86,-.17,.15,.1,-.08,.07,-.21,-.11,.9,.05,-.11,.17,.14,-.45,-.03,.03,.04,.29,.18,.43,.12,.42,.24,.78,-.52,-.03,-.04,-.09,.11,.17,.29,.03,-.11,.01,-.06,-.35,.29,-.03,.35,-.26,-.18,-.33,-.03,.19,.12,.3,.1,.5,-.21,.51,0,-.3,-.02,.03,-.21,.12,-.12,.46,-.21,-.26,.53,-.12,-.19,.26,.87,.13,.53,.28,.13,-.27,.17,.39,.13,-.13,.31,.08,.38,.15,.3,.11,.1,.17,.15,-.04,.2,-.23,-.38,-.05,-.49,.86,-.34,-.02,.16,.16,.04,.21,.35,.52,-.26,.42,-.07,-.01,-.12,.04,.2,.08,.52,.21,.17,.27,-.28,-.13,-.45,.54,.21,.31,.12,.14,.26,.36,-.43,-.05,-.34,-.1,-.14,.08,-.07,.18,.06,-.04,.04,.38];export{a as rvalData};
