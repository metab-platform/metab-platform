const a=[-.14,.21,-.04,-.08,.14,.12,.17,.41,1,-.14,.45,-.22,.04,-.2,.4,-.1,.07,-.05,-.05,.22,-.08,-.22,-.14,.34,.73,.55,-.29,-.11,-.03,-.22,.33,-.2,.33,-.2,.12,.11,.25,.55,.25,.18,.08,.43,-.11,-.06,.1,.55,.13,.06,.09,.34,.25,-.1,-.23,.34,.18,.52,.65,0,-.08,.4,.18,.25,.3,-.09,.17,-.37,.43,.45,.07,0,-.04,.1,.32,-.29,.24,-.05,.03,.17,.09,-.23,-.07,.39,.16,.5,-.22,-.08,.61,.26,-.25,.43,-.22,.05,.63,-.33,.06,.25,-.26,-.2,-.11,.27,-.01,.36,.26,.03,.39,.19,.15,.33,.5,.29,.08,.28,.16,-.22,-.06,.37,-.19,-.26,.03,.79,.12,-.08,0,.16,-.07,.42,.13,.02,-.42,.34,.25,.07,.08,.13,-.17,.2,.07,.31,-.34,-.15,.25,-.06,.44,.6,-.01,.02,.02,-.15,.5,.01,.36,.42,-.03,.02,.4,-.15,-.02,-.18,-.15,.52,-.09,.26,.11,.26,.62,.26,.08,-.37,.08,.59,.02,-.31,.05,.15,.32,-.12,.12,-.06,.24,.31,.26,.03,-.2,0,.34,.19,.02,-.21,-.19,-.17,-.07,.33,.04,.6,.36,.15,.22,.02,-.03,-.2,.41,.63,.37,.06,-.04,.03,-.14,.28,.29,.09,.22,.51,-.2,.48,0,.09,.07,.34,-.18,.13,.32,.33,.13,.28,.4,.34,.22,-.31,.13,.18,.04,-.09,.51,-.04,.05,.03,.36,.32,-.01,-.01,.18,.44,.4,.03,.5,.22,-.1,.28,-.08,-.13,.13,.03,.2,.29,.22,.23,-.08,.62,.04,-.05,.04,-.24,.57,.26,-.17,.36,-.14,.5,.39,.54,-.17,.02,.33,-.03,.44,.05,-.12,.3,.09,.09,.16,.01,.49,-.12,.3,.45,-.04,.41,.01,-.09,.38,.23,.39,.27,.38,-.12,.41,-.22,.16,-.08,-.01,.06,-.2,-.04,-.07,.35,.12,.29,-.11,.32,.37,-.15,.02,-.02,-.02,-.09,.03,-.2,-.09,-.08,.46,-.12,.4,.42,.07,.33,.35,-.26,.18,.36,-.01,.33,.22,.06,-.36,-.08,-.35,.18,.17,-.04,.39,-.18,-.09,.05,.28,.02,.04,.18,-.11,.4,.37,-.05,.03,.34,-.01,.52,.24,-.2,.08,-.01,.73,.05,.26,.33,.1,-.02,0,.3,-.11,.01,0,-.17,.81,.21,0,.19,.08,.48,.02,-.02,.14,0,.02,0,.05,.25,-.25,-.07,.26,.25,.09,.08,.03,.07,.13,.05,-.19,-.1,-.28,-.07,-.3,.29,.08,.81,.11,-.05,.36,.05,.4,.22,-.03,-.07,-.03,.13,-.03,-.06,.3,.12,.16,.18,.03,.41,-.16,.08,.57,.27,.22,.06,.18,0,.43,.18,.8,-.09,-.05,.26,.04,.29,.2,.27,.28,.59,.45,.42,.02,.23,.1,.39,.62,-.26,.47,.35,-.4,.14,.13,-.12,-.01,.27,.09,.41,.08,.21,-.17,.25,-.12,.3,-.15,-.01,-.42,.27,.32,.28,-.01,-.04,.04,.46,.14,.47,.11,-.03,.33,.39,.12,.66,0,.25,.14,-.18,.06,-.12,.05,-.18,.46,-.3,0,.41,.04,.08,.19,.08,.18,-.22,.24,.45,.4,-.04,-.3,.41,.19,-.02,.36,.28,.41,.08,.05,-.14,-.19,.45,.27,.47,-.32,.02,.15,-.04,0,-.03,.03,-.2,.17,.31,.41,.05,.06,.03,-.01,.02,.01,.16,-.11,-.1,-.08,-.16,.05,-.06,-.06,-.01,-.01,-.06,.14,-.01,-.14,.32,.07,-.07,.34,-.04,-.15,.01,-.03,.09,.03,-.08,.43,.43,.11,-.04,-.06,-.09,-.11,-.07,-.01,-.04,.43,.03,.29,.04,-.08,-.13,.09,.11,-.11,-.05,.35,.22,.36,.4,.1,.19,-.1,.24,.03,-.05,0,.14,.46,-.46,.38,.05,.11,.16,.14,.31,-.01,.2,-.06,-.28,-.02,-.01,-.13,-.05,.03,.3,.01,.3,-.02,.15,.07,.21,-.06,-.12,0,.03,.07,.02,.17,-.35,.3,-.08,.28,.2,.05,.09,-.03,.17,.12,.31,.44,.14,.19,-.13,.02,.42,-.18,-.14,-.03,.36,-.07,.41,.16,.34,-.09,-.45,.23,.15,.47,.07,.37,0,.01,.2,.06,-.1,.34,-.25,.1,-.04,.03,.25,.68,.45,.75,-.17,-.08,-.23,.14,-.23,.45,.29,-.16,.05,.14,-.07,.02,.41,.08,.06,-.14,.52,.5,.38,-.14,-.15,-.2,.09,-.18,.45,-.1,.17,.18,-.18,.45,.57,.62,.12,-.16,0,-.23,-.02,.01,-.21,.48,.15,-.1,.27,-.08,-.08,.66,-.16,-.01,.05,.5,.27,.24,0,.34,-.03,-.03,-.19,-.19,-.01,-.25,.12,.26,-.05,.41,.07,.31,-.01,-.08,-.04,.57,0,-.16,-.1,.14,-.05,.81,.27,.29,.2,-.15,.14,-.25,.25,.33,.18,.15,-.15,.15,-.14,-.32,-.35,.48,.04,-.08,.15,.31,-.04,.14,.22,-.22,-.09,.19,0,.03,-.18,.23,.53,.23,-.12,.08,.02,-.18,.33,-.04,.22,.34,.2,.09,.01,-.1,.16,.19,.41,.42,-.42,.05,.48,.07,.1,.59,.11,-.03,.2,.22,.53,.49,-.14,-.2,.03,-.06,-.29,.24,-.08,.36,.27,-.17,0,.07,.24,-.14,.67,.4,.3,.13,.3,.07,.07,-.06,-.04,-.01,.36,.01,-.1,-.1,0,-.06,.26,.03,-.14,0,.41,.13,.29,-.06,.11,.34,-.07,.45,.03,.12,-.24,.75,.01,0,.15,-.24,-.16,.6,.13,.58,.26,.16,-.19,-.12,-.17,-.21,.01,.4,.32,.21,.01,.05,.02,-.06,-.18,-.07,.19,.03,-.01,-.23,.21,.27,.33,.29,.16,.09,.47,.12,.22,.38,-.14,-.07,.19,.14,-.04,-.26,-.2,.04,.43,.33,.06,-.07,.17,-.06,.45,.18,.12,-.06,.17,-.11,-.09,-.14,-.18,.16,.31,-.16,.19,.25,0,-.03,.11,.01,.28,.15,.08,-.09,.1,.28,-.22,.3,-.08,.3,.38,.3,-.2,.33,.03,.27,.31,-.19,.02,-.07,.47,.1,-.1,.56,.26,-.03,.11,.46,.17,.32,.07,.22,.25,.34,-.17,.39,.15,.53,.09,.18,.05,.28,.02,.02,.07,-.14,.14,-.14,-.09,.31,-.08,.49,.27,.23,.06,.25,.38,.26,.18,-.13,.44,.29,.44,-.1,-.01,-.09,.13,.33,.12,.32,.14,-.04,.07,.09,.11,.09,-.03,.08,.03,-.17,-.14,.09,.04,-.15,-.06,-.06,-.18,.2,.36,.27,.04,.15,-.22,.43,.06,-.11,.01,.44,-.1,.29,.22,-.09,.2,.27,.06,.01,-.01,.07,.07,-.07,.32,.13,.38,.45,.37,.25,.14,.11,.1,.13,.03,.04,.02,-.02,-.1,-.21,-.02,.01,.25,-.05,.23,.57,.06,-.27,.19,-.13,.54,.05,-.09,.08,.59,.01,.34,-.38,.64,-.03,-.07,.32,.23,.11,.05,.09,.43,.16,.26,.11,.34,0,-.09,-.09,-.02,.22,.01,.08,-.03,-.18,.67,.02,-.07,.18,-.11,-.14,.32,.4,.35,.36,.24,.4,-.06,-.06,.7,.11,.71,.06,.09,.17,.01,-.01,.15,.3,0,-.09,-.04,.06,.6,.2,.37,-.13,.37,-.2,-.16,-.06,.07,0,.35,-.23,0,.05,.23,.16,-.07,.19,.11,.51,-.08,.04,.17,.4,-.03,.13,.14,.31,0,.45,-.13,.07,.11,-.03,-.01,.12,.14,.11,.03,-.01,.28,-.12,-.06,.71,.32,-.11,.22,.51,.06,.23,.34,.19,.31,.05,-.24,-.32,.3,.42,-.04,.31,.13,.62,.2,.14,.06,.11,-.2,-.05,-.04,.2,.32,-.09,-.05,-.03,.26,.13,.16,.26,-.08,-.15,.22,.19,-.41,-.1,.51,-.08,.18,.21,.31,.04,-.09,.07,.24,.02,-.16,-.08,.01,.42,.12,.37,.45,.08,-.16,-.07,.4,.53,0,.02,-.2,.09,0,-.1,-.31,-.32,-.24,.24,.01,.05,.42,.59,-.01,-.13,-.04,.32,.38,.09,-.09,.02,-.06,-.2,.02,.39,-.02,.47,.01,0,-.23,.04,.63,.24,-.15,.43,.22,-.26,.11,.61,.26,-.12,.08,-.3,-.36,.35,-.1,.29,-.15,.45,.31,-.09,.16,-.06,-.19,.29,-.1,.38,0,.61,.38,.59,.01,.08,.03,.07,.01,-.36,.53,.36,.29,-.26,.28,.11,.08,.36,.2,.54,.66,.51,.29,.05,.29,.17,-.11,.33,-.13,.22,.11,-.13,.25,.23,-.11,.15,.67,.31,-.1,.25,.24,-.03,-.09,.04,.11,-.05,.3,.06,-.05,.03,.18,-.17,.27,-.08,.14,.18,.1,.02,.3,.47,.02,.42,.42,.29,.14,0,.29,-.07,-.17,.27,.4,.25,.66,.26,.43,.27,.37,-.14,.37,.3,.37,.08,.29,-.08,.33,.38,.3,-.01,-.12,-.1,.34,.39,.17,.26,.13,.12,-.15,.13,.15,.1,.22,.19,-.11,.15,-.01,.18,.08,.4,.44,.06,.34,.27,.27,.33,.17,.2,.28,.07,-.06,.1,-.17,-.29,-.02,.62,.43,.44,.3,-.26,-.03,.21,.12,.13,.16,-.07,.37,-.01,-.12,.21,-.06,.46,.08,.13,.19,.16,.14,.11,.05,.06,.58,-.05,.04,.4,-.05,.49,.6,.03,-.16,.32,0,-.05,.2,.15,.46,-.03,.32,-.03,-.05,.21,.28,-.1,.1,-.07,.8,.4,.55,.35,.21,-.02,.09,-.08,-.01,.2,-.21,.3,.43,-.02,.06,.04,.24,.16,.02,.09,-.13,.29,-.14,.38,.33,.37,-.03,.22,.33,.01,.34,.2,.55,.25,.12,.07,.24,.13,.26,.3,.05,-.18,.14,-.05,.16,-.01,.38,.05,.1,.3,.24,-.24,.3,.28,.26,-.18,.56,.63,.27,.18,.25,.06,.13,.4,0,.23,.56,-.15,-.1,.29,.15,.1,0,.29,-.01,.02,-.21,-.16,.58,.35,.52,.27,-.05,-.12,.27,.24,.07,.25,.13,-.01,.27,.23,.65,-.05,.24,.48,-.35,.42,.48,.43,.13,-.1,-.13,.49,-.11,.31,.32,.02,-.26,.08,.56,.34,.17,.33,.07,.41,-.16,.21,-.03,.81,.44,0,.21,.21,-.23,.34,.43,0,-.05,.18,.25,.28,.39,.33,.07,-.02,.44,.32,.22,.06,.27,.57,.33,.14,.23,.08,.62,.13,.25,.2,.45,.26,.03,-.05,.09,-.03,.64,.31,.01,-.05,.5,.66,.27,.27,.37,.34,.44,.01,.46,-.07,.3,.37,.09,-.08,.05,.07,.48,-.01,.22,.52,-.11,.23,-.1,.07,.15,.68,.37,.66,.53,-.11,.5,.25,.14,.38,-.1,.07,.5,.11,.48,-.28,.06,-.16,-.12,.14,.29,.34,.07,.02,.11,.02,.21,.19,-.03,0,.28,.34,.41,-.38,.45,.34,.14,.49,-.03,.23,.17,-.05,.42,-.07,.41,-.06,.44,.49,.13,.13,.39,.19,.42,-.08,.18,.29,-.09,.12,.28,.13,.41,-.11,.38,.34,.49,.55,.62,.23,-.14,.07,.01,.55,-.1,-.05,.13,.07,.04,.13,.1,-.06,-.23,.11,.48,.06,-.14,.77,.1,.22,.37,.49,-.1,.04,.06,-.2,.3,.07,-.04,.25,.23,.19,.45,.17,.34,.03,.27,-.12,.01,.12,-.23,.02,.17,.18,.13,-.11,.33,.36,.46,-.26,-.03,.08,.59,-.03,-.14,.45,-.07,-.09,-.23,.05,.17,.04,-.04,.41,.31,-.04,.43,.04,.35,-.06,.29,-.3,-.12,.2,.22,.1,.27,.04,.24,.57,.1,.57,.34,.2,.07,.49,.21,.6,.4,.42,.28,-.06,.32,.35,.11,-.22,-.15,.33,.08,.54,.25,.32,-.1,.76,.18,.37,-.04,.13,.22,.11,.01,.26,-.02,-.19,.17,-.15,.06,.07,.39,.28,.42,.38,-.1,-.06,.1,.03,-.07,-.08,.04,.03,-.03,-.01,.38,-.14,.37,.2,.28,.02,.33,.18,-.07,.44,-.15,0,-.09,.32,.05,-.08,.55,-.1,.03,.33,.19,-.06,-.05,0,.62,-.02,.03,.46,.21,.23,.17,.34,.1,.53,-.14,.32,.31,.26,.23,.08,.37,.22,-.15,-.18,-.36,.03,-.03,.39,.45,.15,.21,-.23,-.04,.45,.25,.08,.07,.08,.08,.49,-.04,-.12,.48,.35,.22,-.06,-.09,.13,.43,-.16,.13,.46,.28,.48,.19,.03,.19,.46,.04,-.05,.09,.07,.16,.45,.04,-.06,.54,-.19,-.06,-.21,.36,-.4,.39,-.2,-.16,-.08,-.07,.31,.13,-.02,-.06,-.14,-.05,.24,.18,-.08,-.06,-.07,.04,.26,.48,.39,.11,.01,.32,.39,-.09,.08,-.05,-.05,-.11,.34,.52,.22,.55,.02,.19,.12,.18,.46,-.16,0,-.33,-.06,.09,-.06,.25,.06,.41,.08,.35,-.06,.41,.11,.09,.23,.25,-.19,.54,.37,.34,.13,-.4,.16,.11,.22,.02,-.11,.44,.21,.12,.66,-.46,.45,.13,.18,-.11,.39,-.15,.23,.09,.46,.42,-.1,.61,.26,.29,.42,.19,-.1,.29,-.01,.02,-.11,.4,.46,.45,.27,.36,.2,.26,.23,.08,-.3,.37,0,.07,.07,-.06,.27,.25,.33,.36,-.22,.06,-.14,.09,.09,.29,.09,.34,.42,-.12,-.15,.04,-.15,.02,0,.75,.35,.05,.28,.05,.17,.38];export{a as rvalData};
