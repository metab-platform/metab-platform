const a=[-.01,-.05,.11,-.13,.16,.16,-.09,.48,-.19,.54,-.19,.03,-.03,-.23,-.24,.11,-.07,.07,-.08,-.03,-.01,-.36,.28,-.41,-.16,.05,-.56,.17,.07,-.63,.18,-.43,.16,.23,-.29,.08,-.03,-.31,-.03,-.13,-.19,.05,.35,-.07,.11,-.33,-.27,-.21,-.43,.52,.18,.1,.02,-.04,.44,-.2,-.14,.3,.26,-.04,.51,.17,.23,.1,-.35,-.4,.16,-.39,-.2,.06,0,.07,.55,-.04,.01,-.02,-.28,.53,-.03,-.3,-.27,-.12,-.06,-.03,-.1,-.48,-.04,-.06,-.08,-.16,.51,.05,.38,.11,-.12,.01,-.1,-.12,-.02,.52,-.01,.14,.21,0,.29,-.09,-.47,-.57,0,.18,-.09,.57,-.05,-.05,-.03,-.1,.02,-.31,-.24,-.06,-.02,-.22,.36,-.03,.41,.34,.03,-.09,-.19,.01,.57,.18,.03,.58,.04,-.22,.62,.1,-.33,.07,.29,.11,.28,0,.15,.22,.03,.16,.15,.06,.12,.36,.08,.15,.55,.57,-.1,-.01,-.08,-.34,.7,.37,.19,.31,.43,.53,.09,-.33,.35,-.1,.05,-.22,.66,.33,.26,-.41,.04,-.62,.62,.02,-.37,-.06,.22,-.1,.28,.12,-.07,.29,1,.05,-.02,.61,-.03,.28,.37,.15,.27,.21,-.14,-.3,-.12,.16,.06,.03,-.12,.39,.33,.6,.44,-.04,.64,-.34,.04,-.14,.27,.39,-.08,.61,-.38,-.51,.15,.25,.14,0,.22,.04,.69,-.27,.28,.3,-.1,.06,-.3,.05,.05,.12,-.31,-.27,.24,.09,.65,-.4,.42,.56,.53,.47,-.09,.14,.01,.03,.52,-.24,.46,.18,.3,-.17,.12,-.04,.2,-.01,-.12,.4,.19,.29,.2,.26,-.2,.1,-.12,-.05,-.24,-.12,.06,.18,.01,-.03,-.52,.55,.2,-.44,.68,-.6,-.16,-.14,.25,.13,-.49,-.05,.36,-.34,.33,.48,.12,.49,.34,.37,-.06,-.17,.24,.35,.11,.12,-.38,-.08,.02,.13,-.07,.39,.42,-.13,.19,.11,-.19,.15,.13,.33,.32,.56,.18,.37,.08,-.07,-.26,.11,.51,.26,.08,.03,.16,.23,-.03,.18,-.09,-.08,-.38,-.12,-.33,.23,.37,-.21,.57,.3,-.19,-.03,-.08,.09,.08,.52,.38,.25,.33,.51,.07,.22,-.17,-.15,.2,-.04,.17,.02,-.19,.19,.26,-.56,-.06,-.19,.23,.04,.58,-.05,-.4,-.08,-.22,.24,.54,.41,.2,.05,-.07,.53,-.06,0,.01,.16,.04,.1,0,-.03,.07,.11,.23,-.01,.01,.4,.3,.12,-.37,.01,.05,.39,-.16,.01,.19,-.1,.62,-.05,-.24,.28,.21,.09,.14,-.09,.05,.2,.22,-.02,.29,-.03,.67,-.09,.22,-.04,-.09,.04,-.05,-.01,.03,-.07,.34,.41,.4,.2,-.06,.21,.64,-.11,.25,.2,.15,.38,.3,.02,.23,-.13,.49,.41,.03,.13,-.05,-.3,.28,.49,-.17,.03,-.19,.2,-.62,.02,.38,.38,.15,.29,-.16,.52,.25,-.1,-.1,.16,-.07,-.01,-.54,-.01,.14,.01,.57,.09,.35,.33,.12,-.63,.3,-.2,.21,.36,.48,-.01,.59,.55,-.01,.02,-.2,.05,-.17,.38,.28,.04,.48,-.07,.28,.44,.46,.05,.1,-.21,.12,.15,.22,.05,0,.7,.29,.07,.17,.21,.45,-.36,.67,.33,.53,.03,-.06,.2,-.02,.07,.11,.01,.15,.25,.13,.24,.52,.45,-.02,.48,.04,.25,.34,.1,.36,-.03,.13,.49,-.14,-.6,-.08,-.1,.25,-.64,.06,.1,-.56,.04,.17,-.01,.41,-.06,-.28,.48,-.23,-.02,.19,-.32,.1,.47,-.09,-.03,.03,.05,.7,.14,.2,.09,.06,.34,.14,.06,-.04,-.15,.53,-.07,-.11,.11,.32,.04,.45,-.28,.11,.17,-.11,-.06,-.05,.04,-.09,.15,.48,-.12,.22,.07,.41,.47,.26,0,.2,.4,.36,-.57,.56,-.16,.07,.02,-.02,-.15,.08,.64,.04,.08,.13,.49,-.18,.06,.41,.35,.36,-.05,.23,-.04,.28,.42,.3,.35,-.15,-.24,0,.55,.1,.34,.07,.51,.35,-.56,.3,0,-.29,.14,.04,.2,.37,.07,-.07,.46,-.23,-.2,.52,.14,.08,.07,-.34,-.12,.01,-.04,.14,.32,.08,.52,.03,.03,-.01,.04,.09,.11,-.13,.07,-.07,-.63,.32,.57,.22,-.02,-.16,.11,.02,.2,-.04,.03,.46,.27,-.21,.05,.09,.38,.05,.05,.35,-.09,.16,-.01,.25,.15,.08,-.07,.04,.43,.37,.19,.1,-.1,.02,-.09,.01,-.58,.2,.47,.43,.43,.06,.06,-.1,.25,-.09,-.13,.38,.17,-.06,.1,-.07,.04,-.09,-.44,-.12,.21,-.21,.42,.09,-.06,.37,.65,-.06,-.01,.06,.09,-.39,.17,-.34,-.67,-.05,-.07,-.14,-.13,.18,.64,-.06,-.32,-.14,.2,-.01,.21,-.19,-.19,.17,.03,.08,-.34,.05,.33,-.16,-.02,.24,.01,-.34,.09,.43,.38,.23,.14,.59,-.16,.4,.41,.13,.5,.06,-.17,.09,.27,.09,.34,.27,.53,-.21,-.44,-.47,.11,.23,-.45,.05,-.28,.13,.22,-.2,.31,-.1,-.02,-.18,.28,-.04,.09,.36,-.02,.48,-.01,.04,.02,.11,-.4,.13,.41,-.08,-.48,-.23,.11,-.16,-.16,.49,0,-.12,-.01,-.16,.29,-.3,-.07,.17,.06,.24,-.14,.16,-.4,-.02,.29,.05,-.51,.31,-.07,0,.44,-.43,.2,-.55,-.3,.55,-.17,.12,-.43,.02,.05,-.11,.08,.53,.47,.4,-.41,.26,.06,-.15,-.03,.27,.53,-.34,.09,.27,.44,.07,.12,0,.57,.4,.44,.07,.37,-.09,.18,-.52,.21,.11,.13,-.04,.12,.46,-.03,.36,.51,.06,0,-.05,.5,.23,-.01,-.1,.15,.12,.13,.04,-.18,.01,-.07,.08,.05,-.04,.63,.03,.56,.12,-.67,-.33,.45,.12,.37,.2,.41,.46,.14,.44,-.08,.1,-.14,.35,.16,.19,.04,.19,.48,.65,.09,-.12,.07,.13,-.12,.58,-.04,.2,.18,-.08,-.03,.35,.07,.26,.17,.41,.14,.03,-.21,.38,-.02,-.09,-.09,.59,.01,.22,.12,.11,.09,-.02,.08,.51,.09,.22,.2,.02,.48,-.01,-.15,-.24,.17,-.42,-.23,-.03,-.1,.24,.41,.61,.12,.16,.57,-.43,.53,.52,.41,.43,.1,.03,.43,.49,.55,.58,.54,-.06,.55,.02,.1,-.01,-.04,0,-.1,.13,.04,-.09,-.45,-.08,.01,-.13,.04,-.27,.53,.38,-.55,.3,.08,.44,.11,.27,-.07,.13,.17,.01,.42,.14,.2,.26,.31,.06,-.08,.57,-.08,.17,.19,-.07,.5,-.04,.44,-.07,-.12,.35,.06,-.75,-.1,0,.58,.04,.01,0,.11,.44,.35,.13,.39,-.04,-.02,-.16,.06,.4,-.02,-.6,-.03,.35,-.15,.68,.07,-.35,-.15,.05,-.02,.37,.33,.45,.05,-.12,.2,-.05,.3,.44,-.01,.08,-.36,.03,.09,.53,-.29,.06,.01,-.35,.02,-.18,-.02,.13,-.29,0,.29,.48,-.08,.19,.2,.34,-.26,.5,-.05,.13,-.06,.31,.12,.2,.08,-.16,.76,.57,.04,-.34,-.41,-.06,-.13,.36,.09,-.17,-.39,-.15,.06,-.21,-.04,-.1,-.39,.48,-.28,.37,.13,.07,.06,-.1,.16,.07,.52,.18,.1,.09,-.24,.17,.26,.28,.13,0,-.21,.01,.16,.09,-.12,.44,.19,.03,.38,.12,.19,.19,.12,.04,.41,.08,.51,-.03,.29,.19,-.09,.16,.42,.42,.07,-.19,.23,.4,-.07,-.12,-.11,-.12,-.12,.47,-.09,.06,.43,-.16,.07,.03,-.08,-.04,0,0,.37,.22,-.1,.21,0,.04,.21,.32,-.23,-.08,.1,.07,.2,.22,.32,.12,.15,-.05,.68,.18,-.32,-.06,.35,-.1,.23,-.18,.03,.08,.43,.27,.18,-.16,.14,.1,.51,0,-.65,.33,.48,-.44,.4,.23,-.03,.17,.3,.06,.08,.04,.15,-.08,.12,.06,.17,.11,.12,-.05,.06,.21,.12,.12,.01,.16,.51,0,-.1,.43,-.15,.38,.21,-.18,.15,-.04,.33,-.3,.41,-.53,-.32,.59,-.03,-.07,.1,.16,-.58,.13,.5,.11,-.05,.37,.05,.35,.21,-.18,.45,-.04,.05,.13,-.13,-.09,.08,.45,0,.2,.5,.44,.38,-.09,.27,.33,.48,-.03,.13,-.04,-.08,-.17,-.29,.55,.57,.04,-.16,.33,.05,-.12,.25,-.07,.16,.47,-.08,-.02,.14,.13,.03,-.04,.27,.33,.27,.02,.11,.05,-.56,-.18,.16,.55,.11,0,-.12,.48,-.15,.07,.31,.41,.05,-.34,-.29,.16,.11,-.15,.46,-.01,.01,.51,.32,.23,-.08,.15,.12,.31,.48,.22,.37,.16,.18,-.03,.16,.26,.18,.29,.5,-.06,-.29,-.1,.2,.3,.18,.31,.07,.27,.38,.23,.29,-.24,.37,.44,-.02,.54,.43,-.01,-.09,.41,.17,.28,.14,.33,.54,.01,-.27,.47,-.05,.24,-.09,.63,.17,-.17,.05,-.1,-.35,-.12,.52,-.26,.05,.25,.12,.19,.18,.16,-.14,.14,-.3,.18,-.06,-.3,.05,-.04,.39,.03,-.12,.22,-.12,-.14,-.11,.09,.52,.15,.53,.06,0,.11,-.09,.58,.18,.55,-.24,.37,.09,.02,.31,.01,-.21,-.12,.01,-.03,.24,.01,-.06,.03,-.02,-.01,.45,-.27,-.08,-.16,.32,-.03,-.27,.37,.17,.11,-.04,-.06,-.01,.49,-.21,.2,-.32,.23,.08,.32,.12,.38,-.04,.32,0,.08,.13,.33,-.02,.52,.23,-.11,.32,.46,.24,.48,.41,.15,.32,.1,-.05,.1,.07,.19,.49,.07,.45,-.24,.43,.03,.39,.44,-.13,-.05,-.02,-.17,.65,.07,-.09,.07,0,.16,-.41,.45,.49,.47,.15,-.21,.11,.23,.06,-.02,-.44,.34,.05,.45,.02,.32,0,.49,.11,.65,.18,.18,.5,.24,.4,.21,-.09,.27,.31,.19,-.05,.21,-.05,.22,.19,.06,.5,.11,-.17,.15,.29,-.09,-.19,.13,.19,.14,.7,.23,.48,-.41,.02,.13,.21,-.08,.18,.14,.32,.54,-.34,.44,-.35,.41,.01,.23,.1,.32,.67,.54,-.02,.14,.09,.14,-.55,-.39,.55,.03,.51,-.02,.68,.02,-.16,-.03,.17,.03,.14,-.06,.11,-.11,-.17,.03,.4,.52,.07,.05,-.1,.27,.3,.43,.33,.42,.18,.14,.12,-.09,.39,-.12,.44,.12,.04,-.09,.01,.05,.02,-.06,.12,.61,.14,.6,.24,.02,.21,.03,.05,.36,-.06,.5,.59,-.07,.12,-.09,.08,.38,.2,.2,.17,.38,-.03,.41,.66,.23,.42,-.01,.2,.13,.25,.14,.45,.03,.5,.42,.34,.07,.34,-.15,.3,.19,-.11,.27,-.14,.05,.26,.09,.14,-.1,.6,-.47,.44,.02,-.32,.39,.49,-.1,.38,0,-.12,.06,.18,.14,-.35,.67,.19,-.4,-.32,.2,-.09,.06,.05,.03,.24,-.02,.11,-.24,-.32,.51,.44,.52,.12,.13,.05,-.26,-.1,.26,-.4,.02,-.39,.27,.27,.38,-.15,-.28,-.06,.06,.03,.41,.17,.38,.3,.33,.34,.61,.17,.09,.14,.11,.2,.28,-.01,0,.14,.08,.02,-.02,.34,-.07,.13,-.46,-.01,-.2,-.19,.06,-.02,.52,-.28,-.24,.33,-.14,-.01,-.06,-.07,.13,.19,.05,.05,.03,.07,.15,.28,-.5,-.42,-.12,.25,.07,.15,-.1,-.1,-.08,.13,0,.49,.27,.03,.21,.09,-.05,.47,.3,.35,-.15,.28,.07,.21,.47,-.42,-.54,.05,-.03,-.01,.44,-.01,.05,.06,.22,.03,0,-.03,.3,.02,.18,-.04,-.15,.22,.49,-.04,.49,-.01,-.02,.24,.07,.49,.08,.42,.09,.13,.04,-.05,.08,.16,.17,-.13,.39,.35,.38,.21,-.07,.04,.2,.56,-.56,-.06,-.03,-.17,.06,-.06,.46,-.11,.5,.26,.2,.36,.35,.02,-.07,.08,-.01,.61,.15,.46,.01,.33,.02,-.1,0,-.01,.04,.44,.51,.61,.08,-.02,.09,.19,.02,.14,-.06,-.12,.11,.15,.28,.09,-.07,-.35,.13,.56,.25,.15,-.12,-.08,.04,.18,.36,-.07,.16,-.03,.45,.05,.33,.04,-.43,.53,.14,.55,.09,.15,-.3,.39,-.22,-.02,-.06,.13,.03,-.22,.02,.45,-.04,.2,.14,-.06,-.03,.14,-.24,-.27,.52,.12,.23,0,-.15,.43,-.02,.02,.49,.32,-.01,.16,.13,-.13,-.03,-.06,.12,.1,.1,.17,.18,.24,.07,.45,-.27,.03,-.08,-.03,.05,.05,.32,-.12,-.24,-.16,.04,-.47,.47,.1,.3,-.35,-.05,-.48,.09,.03,.14,-.06,.13,.5,-.02,.49,-.11,-.32,.17,-.17,-.15,.01,-.01,.13,-.11,-.09,.39,-.13,-.08,.2,.5,.08,.11,.11,.04,-.13,.1,.35,.12,.04,.17,.33,.2,.1,.52,.06,.14,-.01,.18,.02,.05,-.14,-.09,.02,-.37,.37,-.2,0,0,.04,.09,.05,.32,.32,-.2,.36,-.33,.05,.14,.08,.24,0,.24,.02,.03,.14,-.19,.09,-.42,.54,.15,.07,.23,.21,.21,.08,-.48,.08,-.41,-.09,.1,-.08,-.52,.18,.11,.15,.02,.34];export{a as rvalData};
