const a=[-.24,.2,.66,-.18,.59,.07,.1,.15,.21,.4,.65,-.1,-.02,-.59,.69,-.07,.22,-.07,-.31,-.08,-.03,-.38,.26,.47,.46,.56,-.32,.29,.32,-.28,.41,-.22,.73,-.01,.1,.13,.67,.49,.05,.48,.03,.51,.72,-.14,.06,.33,-.05,-.01,0,.25,.24,-.14,.27,.61,.41,.62,.44,.08,-.03,.56,.51,.57,.66,-.06,.07,-.35,.59,.48,-.09,-.05,.09,.42,.42,-.11,.48,.1,-.11,.43,.27,.13,-.38,.4,-.14,.43,-.25,-.26,.55,.05,-.48,.41,.11,.05,.43,-.64,.05,-.07,-.51,-.11,-.28,.43,-.16,.62,.22,-.13,.35,.08,-.16,-.14,.77,.31,.04,.34,-.07,-.49,-.1,.37,.13,-.35,-.08,.46,-.15,-.17,.43,-.27,.33,.42,.41,-.43,-.23,.66,.19,-.11,-.12,.28,.38,-.4,.2,.08,-.19,-.09,.61,.01,.45,.58,.07,.07,.11,-.22,.6,-.13,.63,.32,.03,.17,.22,.05,-.12,0,-.05,.61,.12,.38,.19,.14,.45,.31,.36,-.17,.02,.56,-.03,-.1,.17,-.18,.58,-.1,-.02,-.22,.27,.61,-.04,.05,.1,.43,.41,-.03,.18,.23,.32,-.15,-.11,.36,.01,.57,.69,.73,.46,.18,-.05,-.32,.29,.65,.67,.07,-.36,.59,.28,.24,.45,-.18,.2,.43,-.02,.54,.07,.46,-.12,.38,-.1,-.29,.38,.2,.14,.68,.36,.69,.23,-.16,.23,-.04,-.08,-.14,.33,.57,.16,.08,.41,.28,-.12,.17,.3,.44,.15,.03,.47,.21,.07,.21,.07,-.05,.05,-.24,.39,.03,.62,-.02,.17,.33,-.08,.4,.14,-.13,.51,.6,-.14,.3,-.06,.44,.15,.37,-.16,-.49,.64,.66,.31,-.19,-.1,.33,.76,-.02,.27,-.26,.43,-.43,.11,.81,-.11,.65,-.02,-.22,.11,.26,.74,.24,.17,.7,.57,-.2,.22,.41,.25,.6,-.23,-.17,.08,.31,-.05,.45,-.16,.51,.51,0,-.24,.05,-.02,.4,.03,.05,.6,.36,.43,-.15,.46,.59,-.01,.05,.72,-.38,.14,.05,-.4,.4,.23,0,-.39,0,-.21,.45,.27,-.09,.65,.61,-.21,-.15,.65,.67,.08,.19,.71,.08,.67,-.11,.16,.05,-.33,.49,.14,.11,.58,.41,.29,.27,.02,-.16,-.01,-.5,-.1,.7,.33,.05,-.05,-.14,.2,-.04,.38,.18,.05,.45,-.02,.11,.07,.08,.14,.22,-.06,.29,.04,-.06,.67,.68,.71,-.13,.13,.4,.37,.64,-.46,-.13,-.41,.3,-.28,-.16,.64,.4,.23,.12,.41,.64,.44,.29,.61,-.48,-.54,.68,-.03,.04,.53,.51,.26,-.27,.19,.62,-.24,.04,.03,.66,.67,-.04,.18,-.14,.14,-.11,.4,.16,.16,.53,.17,.75,.71,.59,.42,.4,.47,.01,.36,.41,.65,.75,0,-.41,.65,.35,-.69,-.11,-.14,-.08,-.24,.67,-.04,.54,.56,.83,-.47,.27,.21,-.03,-.32,.03,-.4,.64,-.02,.67,.54,.09,.11,.84,.97,.44,.69,-.36,.61,.55,.35,.46,.29,-.09,.44,-.16,.37,.47,.03,-.1,-.1,-.12,.66,.65,-.14,-.05,.57,-.02,.19,-.33,.44,.43,.46,-.15,-.09,.77,.66,.46,.6,-.19,.53,.12,.37,-.26,.24,.28,.25,.43,-.01,.65,.07,-.15,.14,-.05,.33,.23,.21,.8,.27,-.14,-.06,.07,0,.19,.14,.46,-.31,.04,.19,.1,-.17,-.17,.09,-.25,.17,-.15,.44,-.07,-.18,.68,.8,.52,.58,-.08,-.36,.06,-.21,-.1,.44,-.28,-.09,.15,-.11,-.14,-.17,.07,.24,.03,.53,.58,.29,-.14,.35,.68,-.17,-.26,.25,.06,.08,.21,.49,-.03,.5,.46,.72,.33,-.28,.66,-.14,.19,-.01,.49,.17,-.58,.85,.56,.25,.56,.58,.52,.54,.24,.49,-.35,.17,-.11,.16,-.22,.11,.61,-.02,.36,-.12,-.03,.66,.21,-.07,.12,.13,.03,.41,-.08,-.06,-.14,.31,-.03,.5,.09,-.1,-.13,-.1,.22,.33,.36,.82,.13,.14,-.28,.1,.65,-.39,.28,.15,.48,-.34,.54,-.03,.47,-.18,-.63,.27,.74,.84,.19,.23,-.05,-.28,-.01,.61,.67,.57,.13,.13,.02,.09,-.11,.49,.52,.39,.09,-.08,-.28,.27,-.09,.53,.52,-.37,.2,.04,-.35,.48,.66,.01,.28,-.32,.51,.76,-.01,-.05,-.22,-.27,-.18,-.08,-.14,.44,0,.42,-.35,.41,.3,.5,.59,.1,-.01,-.17,.3,.1,-.27,.74,.02,.24,.53,-.16,-.13,.06,.11,-.1,-.18,.28,.5,.66,.13,.55,.47,-.16,-.26,-.19,.43,-.37,.31,.69,.1,.49,.18,.66,-.1,.25,.07,.39,.68,-.23,-.24,-.11,-.27,.27,.65,-.09,.43,-.07,-.07,-.23,.19,.38,.43,-.14,.05,.68,-.05,.28,-.26,.79,.2,.08,.63,.56,-.14,-.12,-.01,-.26,-.06,.57,.07,.12,-.32,.26,.3,.58,.17,.65,-.05,.06,.52,.55,.44,.31,.39,-.06,-.2,-.49,-.13,.4,.41,.69,-.12,.71,.44,-.33,.31,.06,.18,-.47,.67,.53,.35,.64,-.33,.07,.03,.02,-.08,.67,-.44,.32,.11,-.5,-.15,-.01,.66,0,.09,.14,.51,0,.66,-.09,.23,-.19,.01,-.23,.66,-.06,-.23,-.07,-.24,.02,.24,.15,-.24,.64,.62,-.08,.07,-.07,.52,-.02,-.23,.66,.05,-.09,-.22,.39,-.03,.07,.16,.11,0,.41,-.01,.57,.71,-.11,-.14,-.32,-.09,-.33,.11,.07,.09,-.25,.2,-.11,.12,-.07,.05,.18,.24,-.05,.11,-.31,.93,.16,.58,.55,.03,.16,.2,.64,.24,.55,-.51,-.41,.37,.45,-.03,-.29,-.13,.41,.7,.51,-.3,.05,-.03,0,.75,.08,.23,0,.16,-.07,-.24,-.12,-.1,.41,.26,.06,.08,.02,.03,-.05,-.07,-.14,.3,.64,.57,.04,.69,.31,.05,.36,.61,.47,.57,.43,-.63,.33,-.24,.37,.51,-.04,-.01,.02,.42,0,.28,.31,.63,.16,.06,.19,.02,-.19,-.11,.25,.1,.6,-.17,.48,.34,.76,.19,.21,0,.38,.11,-.06,.29,-.42,-.09,-.27,-.33,.48,-.58,.37,.21,-.11,.02,.3,.81,.69,.15,-.46,.38,.58,.22,-.17,.12,.09,.15,.55,.13,.22,.2,-.15,.05,.06,.06,.07,.13,-.11,-.16,.04,-.03,.08,.06,-.12,.11,-.18,-.03,-.06,.56,.29,-.25,.04,-.14,.7,-.25,-.37,.05,.43,.22,.33,.38,.27,0,.82,.12,.18,-.08,.1,-.07,.31,.05,-.07,.63,.64,.16,.3,0,.16,.71,-.3,-.3,.02,.11,-.03,-.1,-.04,.43,.28,.89,.11,.42,.17,0,-.26,.01,0,.77,-.2,-.01,.41,.44,.17,.1,-.17,.41,.61,-.25,.19,.1,.3,.59,-.24,.72,.67,-.04,.47,.6,.05,-.18,.12,-.14,.42,-.17,.06,-.17,-.37,.51,.08,-.39,.66,-.25,.46,.49,.13,-.12,.76,.76,-.06,-.27,-.15,.26,.58,.33,.75,.09,.74,-.14,-.2,.39,.36,.06,-.26,-.23,-.27,.47,.16,.66,-.21,.49,-.16,.18,-.15,.03,-.01,.22,-.01,-.16,-.08,.73,.72,-.13,.05,.5,.76,-.09,.1,-.35,.67,-.04,.07,.29,.52,.05,.7,.2,.61,.02,.09,-.43,.19,.55,.12,.03,.04,.08,.13,.06,.44,.5,-.26,.23,.75,.32,.66,.62,.48,.59,-.09,.22,-.66,.06,.5,.18,.63,.12,.25,-.13,.04,-.15,.09,-.13,-.32,.08,.65,.66,-.1,.54,-.07,.13,-.17,0,.74,.13,-.17,.65,.58,-.43,.09,.45,.12,.76,.08,.54,-.26,.56,.1,.24,.73,-.08,-.28,-.17,.38,-.15,-.09,.46,.25,.18,.05,.52,.39,.03,.07,.14,-.1,-.33,-.08,-.05,-.37,-.32,.8,.07,.53,.86,.32,.07,-.05,.05,.64,.53,.72,-.03,.05,-.03,-.03,.26,.79,.09,.63,-.02,-.29,.08,.05,-.04,.38,-.36,.12,.62,-.48,.67,0,-.13,-.21,.13,-.4,-.19,.45,0,.6,-.01,.55,.22,.37,.12,.68,-.2,-.01,-.03,.45,.01,.64,.14,.17,-.07,.66,-.02,-.03,.05,-.23,.49,.59,.49,-.19,.05,-.1,.59,.44,.44,.75,.42,.06,.11,.03,.49,.33,-.06,.69,-.13,.09,.63,-.58,.14,-.22,.28,.24,.5,.62,0,.19,-.18,-.29,-.06,-.06,-.21,.41,.53,.47,-.31,-.07,.75,-.15,.28,-.2,-.01,-.03,-.07,-.04,.78,.62,-.19,-.44,.34,.49,.06,.07,.55,.03,-.16,.4,.23,.48,.38,.04,.25,.02,.33,.04,.21,.52,.47,-.07,.15,-.05,.28,.65,.18,.05,-.11,-.18,.42,.43,.63,.18,.15,-.03,-.1,.24,-.04,-.2,.08,.19,.04,.41,.69,.2,-.11,.45,.56,.14,.54,.1,.38,.65,.19,.04,.13,.7,-.22,.22,0,.19,.65,.33,.51,.02,.31,-.37,-.16,.7,.64,.14,.04,-.12,.65,.08,-.18,.35,-.02,.48,.03,-.01,.32,.3,0,.73,-.16,-.07,.58,.05,.2,.62,.17,.46,.59,-.06,-.14,.41,.08,.25,.52,-.02,.47,.04,.13,-.15,-.42,-.01,.56,-.31,.04,.14,.45,.58,.56,.57,0,-.1,.01,-.13,-.12,.26,-.17,.37,.53,.3,-.21,.22,.44,.13,-.31,-.12,-.3,.5,-.01,.58,.55,.35,-.07,.16,.41,-.07,.31,.02,.44,.34,.34,.06,.24,-.12,.63,.38,.03,-.18,.3,.02,.02,.15,.47,.26,.55,.59,.24,-.36,.66,.71,.29,-.04,.48,.48,.24,-.05,.48,-.17,.18,.45,-.15,.43,.43,-.01,.19,.33,.32,.04,.1,.62,.03,.11,-.31,-.25,.48,.21,.25,.59,.03,.05,.69,.47,.66,.73,.13,.66,.58,.66,.22,-.27,.06,.41,.17,.41,.07,.52,.55,-.02,.11,.52,.38,.54,.35,.05,-.12,.49,.23,.16,.3,.4,.37,.44,.07,.68,.66,.3,.57,.08,1,.13,-.38,.52,.47,-.19,.02,.69,.28,.53,.49,.58,.21,.66,.65,.61,-.14,-.14,.27,.08,.11,.54,.33,.15,.63,-.06,.19,.01,.26,.63,.7,-.22,-.35,.57,.47,.52,.63,-.12,-.02,.6,.6,.19,.51,.27,.59,.23,.61,-.23,.45,-.07,-.09,.16,.2,-.05,0,.56,.14,.35,.15,.48,.12,.16,.65,.74,.53,.76,.52,-.22,.11,.05,.35,.23,.01,-.12,.52,.53,.47,-.06,.53,-.25,-.07,.35,.33,.43,-.16,.08,.67,.61,.69,.64,.04,.51,.55,.58,.26,-.47,.5,.13,-.06,.48,-.16,.45,-.13,.6,.66,.21,.56,-.2,.44,.46,.27,0,.38,.39,.13,-.02,.19,.21,-.03,-.09,.57,.7,.46,.01,.5,.52,.53,.62,.42,.64,.17,.02,-.06,.5,.17,-.4,-.14,.33,.32,.11,.71,.56,.31,-.16,.55,.29,-.24,.4,-.01,.38,.87,.66,-.32,-.13,-.08,-.02,.19,.16,.61,.39,.79,-.17,.28,.44,.75,.03,.06,-.17,.01,.75,0,.54,.41,.62,.57,.07,.41,.51,.62,-.25,.05,-.17,.32,-.25,-.22,.3,-.62,-.07,-.12,-.06,-.01,-.16,-.02,.32,.52,-.06,.54,.69,-.19,.63,.03,-.34,-.45,-.13,.72,.69,.67,.27,.36,.31,.29,.34,.39,.35,0,.74,.61,.41,.45,.26,.31,.2,.43,.42,.67,-.06,-.17,-.01,-.02,.58,.4,.45,.16,.56,.71,.6,.55,.67,.68,.54,.05,.4,.08,-.27,.81,.14,-.14,.08,.7,.78,.58,.21,.06,.39,.3,.57,.16,-.06,.03,-.08,.06,.03,.7,-.29,.51,.31,.76,-.14,.37,.11,.03,-.18,-.07,-.2,-.28,.71,-.09,.11,.35,.07,.33,.47,.07,-.37,-.01,-.05,.75,-.03,-.01,.38,.47,.46,.31,.52,-.15,.54,.12,.67,.31,.39,.34,.11,.42,.02,.37,-.11,-.54,-.29,-.24,.51,.53,.59,.36,-.17,-.19,.45,.37,.21,.1,-.14,.08,.53,.59,.05,.38,.51,.19,.22,.25,.68,.56,-.28,.05,.25,.45,.4,.18,-.25,.6,.21,-.1,-.02,.69,-.14,.05,.4,.15,-.06,.48,-.15,.02,-.2,.63,-.32,.41,-.03,.03,-.15,.03,.49,.51,-.09,.15,.13,-.04,.69,.72,.41,.07,.52,.61,.62,.44,.72,.07,.05,.33,.5,.08,.1,-.04,-.32,.06,.64,.58,-.01,.49,-.12,.36,.62,.08,.41,-.06,.12,-.42,-.04,-.01,.07,.42,.62,.35,.77,.42,.04,.47,.23,.12,.31,-.18,.1,.63,.67,.16,.11,-.47,.3,.59,.31,.64,.24,.64,.11,.06,.76,-.51,.54,.63,.71,.26,.51,.21,.51,.32,.36,.23,.5,.58,.41,.68,.54,.6,.12,.67,.28,.16,-.14,.68,.51,.54,.55,.54,-.17,.52,.57,.48,-.69,.55,.03,.69,-.04,-.02,.43,.25,.55,.59,-.13,.13,-.17,.08,.65,-.06,.75,.47,.49,-.28,-.28,.1,-.22,.11,.2,.36,-.23,0,.67,.05,.03,.33];export{a as rvalData};
