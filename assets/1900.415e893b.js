const a=[.05,.37,.44,-.05,.45,.4,.31,.14,.48,-.04,.39,.34,-.28,-.5,.48,.02,.28,-.1,-.14,.22,-.05,-.15,0,.38,.62,.61,-.06,.08,0,-.04,.45,.03,.5,.07,.36,.21,.57,.55,.33,.41,-.06,.53,.21,.07,-.03,.46,.12,.25,-.05,.22,.27,.22,.22,.62,.49,.39,.48,.27,.1,.4,.38,.52,.58,-.09,.05,-.15,.67,.51,.13,-.09,-.05,.23,.3,-.39,.52,.09,-.02,.34,.52,-.03,-.22,.34,.02,.55,.07,-.11,.55,.17,-.45,.53,.17,.03,.37,-.48,.37,.04,-.47,.02,.1,.37,-.21,.72,.62,-.26,.55,.05,-.16,-.02,.64,.57,.05,.34,.11,-.46,.29,.56,.17,-.16,-.08,.61,-.18,-.1,.28,-.05,-.2,.4,.56,.06,-.23,.53,.1,.02,-.02,.19,.14,.16,.09,.03,-.07,.05,.55,.14,.43,.57,.25,.12,.07,.09,.71,-.01,.71,.2,.07,.18,.11,.17,-.26,.33,-.08,.51,-.06,.59,-.25,.19,.34,.22,.22,-.16,.19,.52,.34,-.25,.01,-.22,.28,-.04,.11,-.04,.17,.57,0,.13,-.09,.32,.41,-.09,.24,.19,-.07,.04,.05,.29,.07,.6,.55,.65,.54,.54,.14,.01,.34,.56,.54,.17,-.25,.43,-.35,.28,.35,-.15,0,.55,.24,.6,.25,.01,.12,.07,-.06,-.04,.51,.39,.44,.61,.44,.53,.14,-.06,.6,.05,0,-.2,.52,.46,-.18,.28,.37,.14,.05,.07,.24,.52,.05,-.1,.23,.01,.24,.11,.03,-.15,.16,-.26,.47,.21,.53,-.11,-.12,.52,.13,.37,.03,.02,.57,.56,-.01,.55,-.21,.62,.13,.49,.34,.08,.56,.48,.61,-.03,.03,.31,.48,-.07,.13,-.13,.44,-.39,.42,.44,-.1,.57,.4,.13,.11,.08,.51,.09,.2,.21,.18,.02,.06,.17,.08,.43,.04,-.14,.33,.15,.23,.57,.13,.13,.36,-.34,-.15,.17,.45,.18,.28,.09,.46,-.02,.47,.33,.52,.64,.09,.38,.57,-.25,.08,.41,-.4,.45,.27,-.18,-.32,-.01,-.25,.4,-.18,.06,.43,.15,-.13,.07,.56,.47,-.03,.25,.12,.23,.59,-.14,.34,.43,-.28,.5,.28,-.15,.58,.42,.47,-.21,.27,-.07,.02,-.33,.27,.51,.17,-.13,.08,-.4,.37,.2,.24,.4,-.04,.51,.02,.24,.18,.15,.12,-.06,.24,.41,-.19,.1,.63,.57,.6,-.36,.07,-.24,-.24,.43,-.2,-.23,-.21,-.23,0,.33,.54,.48,.06,-.03,.45,.56,.61,.55,.44,-.4,-.11,.63,.42,.16,.56,.39,.15,-.41,.23,.51,-.02,-.26,.2,.52,.47,-.08,.13,-.2,-.01,.2,.6,.25,.07,.49,-.2,.52,.49,.64,.61,.51,.42,.2,.16,.44,.42,.47,.17,-.24,.35,.39,-.57,.16,-.1,-.13,-.03,.58,.27,.29,.5,.53,-.42,.3,-.03,.56,-.35,-.12,-.3,.65,0,.53,.47,.13,.19,.6,.41,.29,.65,-.05,.56,.56,.56,.38,.09,.16,.37,-.26,.12,.39,.35,.36,.11,-.37,.46,.53,.14,-.15,.44,.09,.28,-.14,.65,.38,.56,-.2,-.02,.71,.45,.23,.62,.26,.43,.01,.14,-.17,.18,.36,.32,.55,-.19,.49,.26,.05,.28,.3,.16,.19,.1,.52,.33,.14,-.29,-.04,.33,.32,.32,.27,-.15,.38,-.04,.12,-.28,.08,-.04,-.06,.11,.14,.56,-.14,-.16,.54,.47,.49,.28,-.22,-.31,-.28,-.29,.02,.49,0,.15,.11,-.11,-.2,-.05,-.07,.22,-.25,.45,.45,.27,-.21,.51,.43,-.19,-.19,.06,.1,-.05,.37,.53,.26,.59,.51,.45,.45,-.11,.54,-.18,.07,.05,.55,.06,-.4,.47,.38,.43,.15,.44,.55,.43,.52,.19,-.13,.14,.01,.18,-.13,-.08,.58,-.04,.32,-.23,.19,.43,.06,-.13,.23,.07,-.15,.28,.16,.22,.17,-.07,.14,.57,-.06,-.15,-.39,-.25,.25,.47,.61,.63,.02,.08,-.05,.09,.48,-.18,.12,.37,.66,-.17,.51,.09,.58,.11,-.5,.04,.52,.59,.26,.55,-.14,-.29,.09,.44,.21,.61,.18,.23,.44,.2,.28,.54,.46,.43,.16,-.1,-.09,.55,-.16,.59,.53,-.26,-.03,-.09,-.06,.12,.54,.19,.33,-.32,.54,.64,.17,-.1,-.15,-.02,-.31,.07,.07,.32,.38,.55,-.23,.51,.18,.4,.22,.09,-.17,-.11,.37,.1,-.09,.65,-.07,.15,.29,.08,-.17,.13,.28,-.25,-.11,.26,.62,.59,-.14,.37,.06,-.1,-.21,.13,.49,-.25,.46,.57,.03,.36,.06,.53,-.08,.14,-.15,.53,.44,-.08,.04,-.1,-.11,.44,.55,.24,.27,.23,.18,.01,.16,.62,.15,.15,.17,.5,-.08,.1,-.17,.6,.44,.15,.47,.6,-.25,-.03,.3,-.13,.1,.5,.29,.21,0,.4,.14,.51,.17,.41,.23,.17,.55,.48,.59,.34,.28,.27,-.03,-.18,.16,.58,.5,.53,-.21,.51,.43,-.28,.35,.03,.34,-.42,.58,.57,.52,.41,-.14,.16,.01,.12,-.25,.57,-.11,.54,.02,-.61,-.2,.03,.46,.21,.37,.07,.36,-.18,.55,.1,.45,-.08,-.05,.02,.53,.19,.09,-.11,.18,-.11,.25,.43,-.12,.43,.46,-.34,-.03,-.02,.59,.03,-.04,.31,.05,.02,-.09,.51,-.08,.14,.16,.18,.06,.39,.26,.64,.53,.06,-.36,-.01,-.09,-.24,.41,-.03,-.01,-.1,.29,-.04,.21,-.03,.13,-.04,.23,-.02,.3,-.05,.48,.08,.55,.43,.04,.22,.38,.53,-.05,.55,-.52,-.38,.44,.48,-.24,-.26,-.42,.39,.53,.42,.11,0,-.18,.22,.47,.25,.15,.18,.01,.11,.04,0,-.37,.53,.25,.19,.08,-.08,-.16,.03,-.14,-.31,.51,.51,.44,.32,.42,.56,.14,.3,.42,.46,.51,.37,-.64,.4,-.15,.63,.57,.22,.29,.1,.39,.02,.08,.11,.67,.18,-.11,.08,.06,.26,.2,.07,.02,.54,-.13,.5,.25,.62,.06,-.04,.05,.54,.13,-.01,.22,-.45,-.1,-.37,.07,.4,-.41,.52,.03,.23,.28,.16,.65,.54,-.07,-.2,.13,.25,.01,-.16,.28,.35,.52,.25,-.02,.29,-.03,-.15,.05,-.23,.08,-.13,.12,.2,-.01,.09,.04,.16,.2,.12,.13,-.21,.23,.11,.46,.24,.01,.16,-.23,.4,.03,-.06,.11,.49,-.02,.26,.44,-.11,.03,.55,-.2,.31,-.16,-.05,-.11,.3,.44,-.02,.56,.56,.04,.32,-.04,.07,.44,-.17,-.21,.17,.18,.15,-.18,-.22,.37,.12,.37,.37,.25,.15,.13,-.15,.18,-.04,.55,-.09,.23,-.25,.51,.07,.35,-.15,.53,.38,-.08,.24,.35,.44,.43,.17,.33,.56,.25,.42,.55,.26,-.05,-.04,-.05,.33,-.07,-.03,-.34,-.17,.55,-.17,-.24,.5,-.04,.39,.5,.07,.26,.59,.46,.13,-.33,-.13,.31,.36,.47,.2,.16,.56,.24,-.31,.22,.28,-.08,-.13,-.16,-.06,.51,.24,.47,-.12,.5,.13,.11,-.22,.1,-.04,.55,.15,.04,-.1,.55,.48,-.44,.37,.43,.62,-.21,.3,.05,.5,.32,-.18,.22,.61,.23,.49,.3,.44,-.23,.09,.02,.32,.45,-.05,.14,.2,.19,.33,.19,.53,.3,.13,.11,.55,.04,.54,.45,.57,.34,.13,.26,-.37,.37,.58,-.2,.5,.13,.35,-.08,.04,-.03,.29,-.09,-.38,.29,.47,.51,-.18,.48,-.08,.06,-.08,.15,.54,.22,-.21,.57,.59,-.43,-.07,.72,.18,.6,.38,.62,.06,.47,.43,.11,.54,.19,-.35,-.12,.61,.23,.11,.52,.35,-.04,.04,.4,.7,.23,.26,.23,-.04,-.11,.22,.08,-.23,-.19,.53,.13,.38,.52,.47,.07,.18,.2,.52,.54,.5,-.11,.25,-.06,.13,.09,.4,.25,.63,-.05,.11,.18,.31,.22,.34,-.37,.09,.57,-.32,.4,.17,.12,-.12,.49,-.17,-.19,.33,.29,.6,-.06,.76,.22,.18,-.02,.12,.08,.03,-.26,.51,.36,.64,.16,.23,.21,.43,.15,.13,.27,-.09,.57,.57,.57,-.15,.2,.18,.53,.23,.5,.57,.56,.11,.06,.18,.49,.25,-.19,.54,.1,.47,.42,-.43,.23,.07,.05,.2,.69,.54,.12,.26,.17,-.42,-.31,.17,-.05,.39,.52,.5,-.13,-.04,.58,-.19,.23,-.16,.03,.01,.07,.01,.6,.37,-.47,-.01,.38,.45,0,0,.52,.03,-.28,.36,.48,.69,.72,-.11,.58,.24,.41,.07,.37,.71,.65,-.31,.29,-.22,.36,.67,.33,.14,.02,-.19,.43,.38,.45,.15,.17,.01,-.16,.29,-.08,-.04,.11,.17,-.06,.17,.37,.02,0,.59,.78,.27,.71,.32,.45,.54,.39,.07,.23,.36,-.48,.02,-.27,-.12,.46,.77,.48,.18,.3,-.51,.1,.57,.5,.46,.25,-.01,.54,.06,-.11,.42,-.13,.42,.23,-.03,.1,-.11,.17,.34,-.14,-.02,.58,-.02,.1,.68,.17,.5,.58,.13,.2,.38,-.05,.19,.48,-.11,.53,.27,.25,-.09,-.08,.08,.62,-.08,-.22,.28,.6,.57,.6,.52,.06,.13,-.07,.03,-.06,.5,-.04,.5,.76,.06,-.14,.39,.76,.25,0,-.07,-.09,.65,0,.64,.71,.64,-.19,.26,.65,-.14,.44,.25,.79,.45,.21,0,.45,.01,.64,.28,.15,-.01,.14,.07,.1,.11,.68,-.17,-.06,.5,.21,-.34,.51,.5,.25,-.08,.49,.67,-.03,-.14,.37,-.2,-.19,.48,-.22,.46,.48,.05,.19,.27,.42,-.03,.14,.48,.12,.08,-.14,-.07,.63,.38,.42,.65,-.14,.16,.61,.36,.44,.55,.18,.5,.62,.58,.37,-.16,.17,.41,-.03,.41,.06,.63,.55,.15,.15,.59,.14,.58,.25,.23,-.11,.42,.32,.45,.13,.4,.24,.52,.05,.53,.46,.58,.58,.29,.38,.23,-.2,.59,.54,-.19,.17,.66,.44,.57,.24,.36,-.02,.5,.49,.58,.13,0,.26,.12,.02,.46,.11,.23,.61,-.15,.3,.37,.52,.64,.5,-.08,-.05,.52,.34,.29,.48,-.18,-.05,.42,.43,.33,.5,.48,.67,.17,.68,-.28,.67,-.05,.2,-.2,.04,.06,.25,.48,.21,.87,.05,.39,-.28,.07,.59,.66,.52,.65,.55,.02,.24,.15,.26,.8,-.28,-.25,.54,.46,.47,-.01,.4,.01,-.22,.44,.28,.54,.11,-.01,.37,.4,.58,.55,.16,.49,.43,.6,.5,-.27,.54,.08,-.14,.59,-.22,.63,-.08,.52,.65,.1,.51,-.31,.15,.46,.27,.16,.36,.28,.1,-.27,.15,.3,-.11,.09,.58,.57,.53,-.03,.58,.44,.53,.62,.59,.46,-.18,-.08,-.13,.56,-.06,-.49,.08,.21,.23,.12,.46,.49,.18,-.01,.53,.46,-.13,.42,.17,.57,.51,.41,.06,-.07,-.02,-.21,.42,.34,.57,.38,.59,.09,.34,.23,.5,.3,.15,-.35,-.1,.59,-.13,.52,.2,.62,.52,.13,.48,.63,.67,-.14,.08,0,.42,-.15,-.35,.02,-.51,-.05,-.31,-.1,.13,-.06,.33,.64,.53,-.17,.5,.42,-.21,.44,.06,-.25,-.33,-.07,.52,.44,.51,.24,0,.84,.12,.67,.49,.19,.01,.66,.53,.74,.43,.55,.1,.07,.42,.52,.57,.14,-.04,0,.13,.57,.3,.61,.15,.62,.55,.53,.42,.46,.46,.58,.07,.6,-.08,-.27,.61,.13,-.3,.08,.67,.54,.64,.44,.09,.26,.47,.44,.04,.09,.23,-.22,.19,.25,.55,-.27,.35,.28,.5,-.22,.33,.22,-.15,.01,-.17,-.12,.03,.45,.03,.12,.73,.07,.05,.41,.13,-.31,.23,.03,.66,-.25,-.03,.66,.53,.63,.2,.52,-.05,.57,-.19,.56,.29,.35,.32,.14,.43,.24,.07,.1,-.56,-.36,.04,.67,.71,.47,.64,-.3,-.08,.46,.32,.07,.34,-.08,.16,.55,.34,-.28,1,.56,.02,.28,.26,.49,.56,-.06,-.12,.51,.43,.66,-.04,-.22,.2,.14,-.23,.03,.42,-.2,.18,.53,.15,-.23,.65,-.08,.33,-.22,.7,-.14,.5,.17,-.06,-.03,-.08,.51,.07,.15,.14,.16,-.03,.56,.49,.47,-.01,.47,.49,.45,.51,.54,-.19,-.02,.42,.5,.06,.31,.13,-.1,.15,.54,.59,-.1,.56,.3,.75,.44,.02,.18,.24,-.05,-.51,.14,-.06,-.16,.49,.41,.37,.49,.47,.04,.4,.44,.25,.41,.01,.23,.44,.51,.41,-.08,-.47,.35,.46,.34,.55,.23,.56,.5,.08,.65,-.39,.52,.51,.48,.27,.62,.19,.58,.26,.15,.27,.48,.59,.62,.55,.54,.54,-.03,.53,.26,.31,-.19,.53,.57,.56,.47,.5,.03,.6,.56,.17,-.39,.5,.3,.45,-.01,-.05,.62,.6,.53,.7,-.12,-.02,.07,-.01,.51,.2,.39,.56,.48,-.22,-.12,.23,.17,-.31,.21,.34,.42,-.02,.42,.32,.04,.63];export{a as rvalData};
