const a=[.08,.14,.01,.05,.19,.39,.19,.51,.27,.01,-.21,.07,-.07,-.25,-.18,.12,0,.03,-.07,.14,-.02,-.35,.11,-.32,.08,.37,-.44,.3,.31,-.49,.31,-.31,.21,.17,-.29,.22,.02,-.21,.32,.2,-.05,.35,.22,.12,.01,-.19,-.18,.07,-.21,.43,.06,.34,.07,.15,.68,-.16,.07,.51,.43,.03,.44,.31,.39,.03,.11,-.39,.39,-.26,.05,-.07,.02,-.05,.54,-.24,.22,-.12,-.1,.42,-.09,-.25,-.11,.08,-.13,.43,-.09,-.45,.36,.05,-.21,-.04,.66,.1,.48,.15,-.03,.26,-.24,-.11,.17,.57,-.05,.34,.54,-.1,.61,-.03,-.07,-.08,.32,.43,-.02,.51,.14,.01,.05,.15,-.24,-.3,-.04,.19,.03,-.19,.12,.16,.32,.46,.18,.19,-.45,.05,.55,.32,-.05,.44,-.08,.35,.68,.31,-.4,.04,.48,.16,.6,.38,.27,.11,.05,.47,.47,-.08,.3,.2,-.03,0,.59,.65,.23,.15,-.14,-.23,.54,.54,-.1,.23,.43,.37,.07,-.43,.4,.19,.3,-.33,.51,.41,.41,-.4,.01,-.39,.51,.12,-.07,.06,0,-.12,.59,.13,.02,.19,.33,.02,.03,.43,-.15,.59,.45,.06,.46,.15,.13,-.3,-.17,.32,.09,.12,-.1,.48,.19,.7,.58,.02,.47,-.12,-.03,0,.48,.17,.09,.47,-.48,-.22,.58,.5,.31,.12,.44,.08,.56,-.38,.53,.48,.05,.04,.15,-.03,-.2,.29,-.14,-.35,.21,-.07,.52,-.22,.57,.68,.43,.24,-.04,.24,.05,-.01,.34,-.09,.65,.29,.42,-.07,.03,.11,.23,-.08,.03,.62,.21,.45,.46,.56,-.29,.51,-.1,.26,-.02,-.08,.09,.02,.16,.05,-.34,.54,.05,-.2,.68,-.37,-.22,-.03,.75,.25,-.44,.03,.39,-.15,.26,.53,.34,.18,.39,.23,-.19,-.14,.15,.4,-.02,.06,-.31,-.13,.1,.28,.21,.56,.65,-.32,.32,-.09,-.21,.23,.33,.41,.41,.6,.03,.09,.48,.13,-.15,.36,.44,.8,.43,.25,.12,.79,-.08,.48,.28,-.04,-.25,-.13,-.4,.55,0,-.27,.57,.1,.02,.09,.01,.09,.03,.76,.16,.76,.51,.56,.26,.76,-.15,-.18,.35,-.12,.14,-.05,.15,-.04,.72,-.1,.15,-.08,.53,.06,.45,.03,-.14,-.13,.2,.42,.3,.48,.15,.45,-.04,.8,.15,.11,-.04,.06,.06,.27,-.27,.02,.22,.26,.13,-.19,-.05,-.05,-.14,.07,-.37,-.16,.26,.2,-.15,.67,.1,.37,.45,-.1,-.11,.19,.44,.5,.02,-.19,.27,.14,.52,.05,.46,.09,.68,-.15,.25,.03,-.13,-.22,.03,.1,.08,-.15,.6,.44,.48,.37,.22,.15,.62,.01,-.09,.39,.19,.43,.61,.39,.54,.09,.2,.56,.06,.39,.16,-.25,.21,.5,-.24,.48,-.09,.31,-.35,.12,.63,.02,.13,.39,-.05,.56,.09,.23,-.02,-.17,-.24,.1,-.1,.01,.18,.05,.81,.23,.11,.06,.07,-.35,.51,-.08,.28,.42,.16,.6,.44,.22,.08,-.02,-.04,.07,.16,.28,.21,.13,.41,-.23,-.01,.61,.79,.25,.28,.18,.33,.24,.54,.24,.17,.46,.43,.56,.44,.15,.21,-.32,.36,.64,.6,.36,-.2,.14,.19,-.01,.37,.24,.3,.14,0,.42,.62,.43,.02,.57,.29,.32,.6,.21,.46,.1,-.1,.63,-.24,-.22,-.24,.06,.45,-.22,.17,.41,-.47,.06,.07,-.07,.28,-.16,-.35,.52,-.32,.12,.05,-.29,.62,.39,-.04,-.09,.09,-.23,.43,-.22,.11,.04,-.15,.29,.27,.04,-.15,-.17,.41,0,-.26,.25,.55,.67,.49,-.14,.05,.36,-.17,-.01,-.09,-.01,-.01,.27,.39,-.07,.08,-.01,.62,.2,-.04,.19,.11,.48,.06,-.48,.68,.04,.06,.36,.06,0,.12,.43,-.04,.06,.09,.25,-.21,.24,.29,.24,.42,.02,.68,-.04,.23,.53,.51,.23,-.14,-.37,-.18,.46,.19,.42,.24,.62,.27,-.35,.45,.23,-.31,.24,-.04,.52,.57,.4,-.04,.5,.08,-.2,.65,.15,.24,-.03,-.24,-.16,-.08,.01,.09,.2,.2,.68,.04,.16,.04,.67,.45,.29,.35,.01,-.13,-.45,.5,.53,.38,.15,-.04,.14,.11,.47,.03,.31,.59,.41,-.03,.39,.35,.32,.04,.03,.58,-.23,.2,.17,.11,.28,.19,-.1,.46,.4,.5,.03,.17,-.22,.01,.12,.14,-.4,.25,.46,.22,.16,-.06,-.07,.34,.21,-.18,-.02,.44,.45,0,-.11,.1,-.07,-.21,-.6,.07,.2,-.14,.35,.27,-.1,.61,.69,-.01,-.03,.23,-.06,-.09,.09,-.33,-.3,-.08,.03,.35,-.08,.4,.49,.09,0,-.11,.63,.12,-.05,.11,-.14,.38,-.18,-.14,-.41,.24,.12,-.09,-.11,.4,-.09,-.25,.42,.56,.7,.21,.28,.8,-.05,.33,.36,.23,.68,-.01,-.06,-.02,.48,0,.54,.65,.39,.21,-.51,-.25,.6,.44,-.28,.31,-.5,.08,.54,.12,.46,.15,.25,-.21,.29,.02,.45,.24,-.07,.68,-.09,.1,.1,.27,-.16,.45,.6,-.18,-.3,-.03,.17,.05,.28,.38,-.01,-.18,.06,.06,.45,-.08,-.04,.36,.08,.56,.01,.08,-.2,-.14,.24,.24,-.37,.46,.07,-.09,.62,-.42,.16,-.09,-.26,.54,-.1,.14,-.36,.45,-.07,.08,.3,.69,.56,.51,.01,.57,.13,.02,-.13,.52,.61,-.19,.32,.64,.55,.3,.07,.15,.81,.53,.67,.27,.28,-.01,.3,-.38,.05,.02,.33,-.08,.17,.57,.36,.4,.31,.37,-.11,-.17,.64,.42,-.06,-.16,-.17,.15,.1,.21,.02,.11,-.08,.2,.2,.21,.73,.06,.64,.14,-.27,-.47,.19,.37,.43,.13,.61,.63,-.11,.53,-.15,.05,.1,.39,.15,.25,.03,.28,.65,.43,.03,.01,.28,.28,-.11,.49,.08,.35,.3,-.05,.35,.47,.26,.44,.27,.35,.09,-.17,-.04,.47,-.03,.59,.14,.67,-.09,.33,.36,.36,.1,.3,-.15,.34,.08,.45,.08,.07,.16,-.21,.06,-.29,.42,-.4,-.2,.47,-.3,.4,.65,.49,.27,.2,.55,-.37,.48,.21,.45,.49,.21,.19,.54,.43,.4,.75,.3,-.13,.72,-.17,.17,.02,.02,.12,.11,-.02,.06,.09,-.33,.1,.04,-.11,.14,-.17,.53,.49,-.29,.43,-.03,.27,.21,.54,-.03,.39,.12,.22,.62,.1,.47,.27,-.03,.16,-.17,.55,-.18,.14,.71,.17,.53,.05,.25,.12,.01,.45,.04,-.43,.11,0,.81,.12,-.03,-.23,.18,.45,.22,.14,.31,.12,-.18,-.09,.44,.5,.27,-.37,.2,-.12,.06,.38,.62,-.43,.24,-.04,.07,.65,.56,.61,-.06,.08,.39,-.08,.66,.53,.14,.2,-.23,-.05,.08,.5,-.23,.02,0,-.36,.43,.03,.26,.24,-.25,-.12,.53,.38,.62,.35,.3,.35,-.21,.54,.12,.04,.37,0,.05,.33,.2,-.24,.58,.45,-.09,-.29,-.32,.04,.02,.55,.2,-.35,-.22,-.11,.03,-.25,.22,-.05,-.19,.65,.02,.51,.37,.11,-.1,.1,.19,.36,.54,.32,.31,.29,-.2,-.14,-.04,.5,.27,.13,-.11,.11,-.05,.11,.15,.61,.29,-.07,.76,.24,.58,.28,.21,.12,.02,.32,.48,.22,.13,.22,.22,.27,.51,.43,.02,-.17,.76,.51,-.13,-.07,.1,.18,-.06,.62,.07,.04,.49,-.1,.1,.12,-.05,.15,-.09,.35,.11,.13,.04,.2,.08,-.01,.26,.43,-.3,-.24,.5,.03,.19,.68,.56,.49,.01,.12,.55,.09,-.03,-.31,.43,.1,.6,.04,.46,.09,.41,.16,.32,.14,.28,.25,.69,-.07,-.4,.7,.61,-.39,.33,.26,.2,.1,.12,.14,.07,.14,.24,-.04,.35,.01,.24,.28,-.16,.01,.08,.46,.36,.38,.06,.45,.66,.09,.21,.57,-.19,.54,.37,-.12,.12,.16,.52,-.24,.5,-.5,-.44,.52,.17,.07,.14,.45,-.36,.2,.32,.2,.09,.44,-.01,.66,.4,.1,.53,.13,.21,.08,-.1,.01,.28,.08,.38,.37,.65,.52,.5,.16,.29,.23,.42,.28,.43,.12,.22,-.03,-.24,.41,.58,.08,-.27,.45,.11,-.11,.44,.34,.25,.42,.21,.04,.14,.46,.53,-.1,.03,.63,.29,-.12,.33,.2,-.34,-.08,.26,.4,.55,.33,.04,.49,.02,-.14,.45,.28,-.17,-.07,.01,.02,.02,-.25,.69,.1,.04,.5,.57,.39,.4,.09,.62,.54,.75,.46,.64,.34,.46,-.19,.36,.38,.55,.49,.79,-.05,-.31,-.23,.24,.27,-.1,.57,.08,.31,.36,.47,.15,-.18,.28,.42,-.01,.31,-.13,-.09,-.03,.73,.44,.64,.38,1,.74,.05,-.34,.65,.18,.09,-.24,.64,-.16,-.43,.07,.45,-.27,.37,.52,-.5,.22,.33,.23,.39,.54,.21,-.09,.16,-.26,.4,-.01,.18,.25,-.09,.35,-.21,.08,.1,-.04,-.3,.1,-.03,.38,.31,.67,.23,.39,.18,.13,.62,.06,.67,-.17,.47,.37,.12,.59,.04,.01,.24,.16,.07,.35,-.03,.19,.23,.36,.39,.47,-.07,-.06,-.04,.41,.17,-.31,.64,.43,.18,.14,-.15,.27,.73,.16,.24,-.28,.37,-.1,.59,.36,.71,-.09,.61,.16,-.12,.41,.64,.32,.71,0,-.01,.7,.57,.2,.51,.36,.21,.6,.05,.02,.09,.11,.14,.09,.16,.72,.12,.41,.13,.57,.41,.09,.15,-.01,-.17,.5,0,-.16,.28,.09,.24,-.1,.66,.71,.55,.22,-.29,.19,.36,.1,.15,-.47,.61,.36,.49,.41,.34,-.16,.71,.31,.61,.11,.29,.65,.09,.42,.31,.47,.4,.53,.36,-.39,.53,.3,.54,.22,.11,.7,.52,-.13,.4,.39,-.07,-.08,.07,.28,.66,.55,.26,.24,-.27,.06,.27,.07,.32,.51,.31,.1,.5,-.44,.52,-.23,.39,-.01,.23,.35,.28,.47,.45,-.09,.14,.04,.36,.01,-.19,.45,.04,.69,.07,.43,.09,.02,-.04,.38,.54,.36,.08,.06,-.09,.27,-.07,.43,.51,.07,-.02,.04,.39,.33,.7,.58,.5,.49,.19,.38,-.13,.7,-.14,.43,-.03,-.05,.02,.62,-.06,.1,.46,.02,.49,-.1,.38,.2,.38,.53,.39,.48,.66,.16,.33,.47,.32,-.16,-.1,.58,.26,.35,.55,.09,.66,-.17,.32,.43,.64,.61,-.04,.08,.12,.33,.29,.27,-.04,.51,.45,.5,.17,.74,-.05,.42,.56,-.21,.33,-.19,.05,.48,-.01,.31,-.13,.29,-.01,.37,.32,-.19,.41,.35,-.2,.29,.36,-.22,.02,.34,.12,-.23,.55,.44,-.36,-.14,.27,.46,.2,-.12,.16,.63,.49,-.11,-.33,-.07,.28,.22,.28,.07,.03,-.23,.01,.01,.26,-.33,.44,-.2,.42,.06,.21,.17,-.45,-.11,-.16,.46,.61,.02,.41,.14,.56,.43,.4,.38,.29,.27,-.04,-.07,.16,-.19,.05,.2,.2,.19,-.01,.36,.07,.39,-.43,.03,0,.4,.13,-.1,.48,-.25,-.21,.12,-.09,.02,-.04,.13,.48,.36,-.05,.08,.02,.28,-.01,.27,-.46,-.34,-.11,.21,.08,.24,-.05,-.32,.42,.12,.49,.58,.55,.19,.27,.18,.38,.45,.57,.36,-.31,.37,.33,.26,.69,-.48,-.09,.48,.27,.2,.7,.22,.42,.07,.4,0,-.01,0,.32,-.07,.44,.01,-.06,.11,.72,-.1,.59,.34,-.02,.55,.61,.67,.15,.68,.01,-.06,.06,.19,.03,.26,.27,-.17,.39,.16,.32,.39,-.07,.17,.14,.53,0,-.05,.01,.11,.04,-.06,.76,.32,.63,.42,.48,.28,.28,-.05,-.13,.37,-.16,.6,.47,.71,.06,.12,.16,.37,.42,-.09,.1,.35,.73,.75,-.07,0,.31,.02,.1,.06,-.24,-.01,.5,.44,.31,.27,-.08,-.22,.47,.7,.57,.33,-.07,.18,.4,.02,-.04,.32,.4,.19,.73,.28,.25,.23,-.36,.56,.34,.5,.47,.01,-.19,0,-.17,-.12,-.15,.06,-.14,-.16,.39,.64,-.18,.53,.21,.12,-.09,.35,-.21,-.15,.72,-.06,.15,-.02,-.08,.09,.15,.04,.7,.03,.03,.2,0,-.31,-.07,-.01,.15,.49,.41,.02,.16,.48,.33,.59,-.31,.09,.06,.1,.15,.42,.46,.13,0,.13,.02,-.09,.47,.19,.22,-.35,.14,-.1,-.19,.25,.08,.24,.1,.49,-.05,.49,-.05,-.21,.01,.07,-.39,.31,-.01,.71,-.25,-.25,.57,.04,.16,.14,.67,.27,.68,.17,.4,-.2,.28,.43,.16,.1,.4,.17,.37,.05,.48,.32,-.02,.39,.05,.09,.33,-.11,-.24,.07,-.35,.71,-.26,.09,.27,.23,.14,.19,.47,.54,-.11,.51,-.15,.11,.32,.03,.27,-.07,.54,.41,.17,.3,-.31,-.07,-.33,.59,.13,.56,.22,.35,.49,.42,-.4,.05,-.21,-.28,.08,.31,.11,.41,.19,.39,-.03,.45];export{a as rvalData};
