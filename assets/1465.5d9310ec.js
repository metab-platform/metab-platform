const a=[-.01,.05,.34,.06,.32,.34,.23,.48,.3,.11,.06,.13,-.1,-.41,.07,-.01,-.01,.03,-.28,.1,-.1,-.46,.11,-.2,.18,.43,-.49,.35,.18,-.57,.38,-.38,.44,.18,-.05,.21,.23,-.03,.27,.43,-.1,.37,.34,.04,.12,-.06,-.25,-.08,-.49,.56,.02,.18,.03,.3,.88,.02,.27,.45,.18,.21,.65,.47,.54,-.06,-.15,-.51,.49,-.11,-.05,-.03,0,.08,.66,-.29,.28,-.06,-.29,.64,.17,-.33,-.31,.14,-.04,.38,-.05,-.44,.35,-.09,-.36,.2,.56,.08,.53,-.15,.06,.25,-.43,-.26,.04,.7,-.11,.52,.71,-.15,.77,-.09,-.27,-.29,.44,.61,-.01,.6,.22,-.34,.08,.23,-.12,-.5,-.18,.27,-.05,-.33,.2,-.01,.24,.63,.25,.03,-.47,.21,.54,.23,-.03,.57,-.06,.03,.59,.41,-.51,-.03,.56,.11,.52,.37,.21,.12,.05,.21,.62,.06,.51,.27,-.04,-.09,.48,.58,-.17,.07,-.28,0,.58,.71,-.06,.46,.48,.61,.21,-.54,.43,.34,.23,-.4,.42,.24,.53,-.47,.1,-.48,.62,.31,-.08,.06,.14,.16,.76,.13,.08,.23,.37,-.05,-.1,.54,.01,.71,.67,.39,.7,.36,-.01,-.28,-.15,.51,.24,.05,-.22,.67,.09,.73,.74,.02,.39,-.03,.02,.1,.42,.23,.15,.4,-.52,-.45,.62,.67,.46,.34,.42,.24,.55,-.45,.67,.55,.07,-.06,.03,.37,-.12,.25,-.09,-.23,.27,-.1,.55,-.08,.39,.5,.39,.15,.05,.19,.02,-.01,.51,-.19,.84,.3,.53,-.09,0,.34,.36,.2,0,.4,.51,.55,.21,.74,-.38,.46,.04,.27,-.09,-.12,.27,.39,.33,-.04,-.45,.67,.36,-.48,.74,-.54,0,-.27,.74,.42,-.56,.17,.56,-.21,.36,.63,.42,.13,.42,.38,-.08,-.13,.16,.46,.04,.29,-.29,-.16,.2,.17,.14,.68,.48,-.18,.28,-.17,-.23,.15,.4,.47,.48,.46,.4,.34,.42,.12,-.05,.46,.45,.72,.51,-.04,.26,.73,-.38,.44,.3,-.08,-.43,-.23,-.53,.51,-.03,-.18,.63,.3,-.04,-.16,.17,.43,.14,.77,.32,.56,.69,.41,.26,.73,-.37,.03,.45,-.24,.51,.22,.13,.05,.66,-.31,.04,-.27,.36,.27,.49,-.1,-.26,-.17,.19,.37,.52,.53,-.05,.48,-.18,.66,.01,.13,-.08,0,.08,.44,-.19,.02,.52,.48,.53,-.16,.07,.11,0,.3,-.54,-.13,.02,.21,-.11,.49,.49,.38,.56,-.05,-.06,.53,.6,.49,.38,-.37,.17,.54,.52,-.06,.54,.29,.75,-.33,.29,.24,-.32,-.09,-.02,.24,.34,.05,.45,.31,.34,.34,.26,.14,.6,.19,-.11,.5,.34,.7,.75,.36,.46,-.09,.31,.62,.28,.51,.03,-.44,.32,.59,-.42,.37,-.19,.23,-.51,.29,.47,.2,.38,.58,-.3,.7,.1,.4,-.17,-.08,-.38,.28,-.28,.22,.34,-.09,.67,.45,.37,.21,.39,-.54,.72,.08,.47,.46,.32,.4,.69,.09,.07,.39,.03,.1,.03,.15,.46,.26,.48,-.26,.3,.49,.62,.1,.58,.31,.38,.03,.26,.55,.36,.59,.65,.37,.43,.09,.31,-.42,.5,.61,.7,.41,-.23,.38,.39,0,.31,.19,.2,.27,.17,.57,.74,.48,.01,.4,.22,.38,.62,.3,.25,.13,0,.52,-.16,-.37,-.23,.02,.42,-.37,.47,.11,-.55,.25,.37,.32,.36,-.15,-.41,.21,-.36,0,.31,-.37,.36,.35,-.09,-.16,.09,-.19,.56,-.19,.46,.34,.01,.1,.42,.27,-.24,-.19,.53,.02,-.29,.19,.66,.48,.8,-.06,.3,.43,-.37,.21,-.17,.11,.1,.58,.34,-.28,.44,.26,.55,.28,.26,.29,.37,.53,.25,-.52,.63,-.21,.08,.08,-.06,.18,.15,.56,-.13,.11,.31,.18,-.22,.12,.29,.11,.54,.05,.56,-.06,.1,.39,.68,.09,-.11,-.5,-.18,.66,.37,.62,.47,.52,.23,-.44,.32,.35,-.42,.32,.09,.58,.27,.44,.02,.79,-.06,-.44,.53,.35,.46,.19,-.07,-.23,-.21,-.1,.29,.38,.33,.54,.08,.2,-.14,.5,.37,.31,.34,.05,-.22,-.55,.66,.4,.57,.28,-.14,.18,-.05,.23,.19,.48,.44,.26,-.29,.42,.5,.35,.03,-.11,.31,-.24,.15,.06,.33,.26,.49,-.27,.39,.38,.58,.23,.17,-.2,-.27,.29,.12,-.48,.48,.37,.43,.45,.1,-.09,.12,.12,-.22,-.08,.46,.67,.23,-.16,.2,.02,-.07,-.51,-.09,.43,-.35,.53,.49,-.06,.59,.65,.16,-.1,.3,-.14,.07,.34,-.4,-.45,-.06,-.1,.33,.13,.33,.58,0,-.11,-.08,.3,.29,.19,.11,-.27,.48,-.08,.05,-.55,.44,.39,-.22,.11,.48,-.13,-.3,.24,.36,.5,.33,.22,.67,-.2,.49,.31,.36,.56,.36,.02,.04,.48,.42,.77,.75,.62,.32,-.34,-.47,.45,.75,-.15,.4,-.57,.34,.46,-.14,.65,.05,.26,-.36,.55,.24,.41,.33,-.18,.5,-.11,.02,.03,.5,-.32,.46,.4,-.49,-.58,-.13,.32,-.05,.15,.33,.19,-.24,.23,-.07,.46,-.24,.01,.18,.23,.46,.07,.07,-.16,-.19,.39,.28,-.41,.66,.22,-.15,.46,-.44,.47,-.28,-.35,.55,-.06,-.01,-.49,.47,-.05,0,.29,.53,.45,.58,-.05,.7,.29,.07,-.18,.28,.42,-.39,.25,.32,.37,.09,-.01,-.17,.68,.41,.53,.09,.35,-.13,.26,-.47,.33,.1,.44,.1,.18,.6,.29,.57,.13,.45,-.25,-.37,.74,.52,-.11,-.28,-.33,.34,.27,.45,-.11,.02,-.12,.14,.33,.03,.73,-.01,.65,.09,-.45,-.39,.13,.6,.42,.17,.62,.44,-.09,.4,-.16,-.02,.15,.56,.34,.24,.24,.46,.47,.56,.31,.18,.4,.3,-.38,.69,-.07,.5,.41,-.14,.26,.33,.27,.2,.35,.3,.41,-.09,-.22,.36,.09,.41,.07,.55,-.11,.44,.27,.4,.31,.43,-.01,.09,.06,.6,-.04,.01,.39,-.41,-.06,-.41,.2,-.15,-.35,.46,-.21,.36,.69,.59,.57,.37,.46,-.54,.39,.47,.36,.33,.14,.14,.65,.52,.29,.77,.19,-.15,.57,-.16,.19,.1,.18,.06,-.07,-.03,.12,.07,-.3,-.04,.04,-.17,.11,-.24,.69,.57,-.46,.39,-.11,.35,.16,.29,-.04,.41,.27,.24,.82,-.02,.43,.53,-.14,.14,-.14,.46,-.03,.14,.71,0,.65,.18,.22,.15,-.13,.4,.26,-.56,-.01,.05,.67,.05,-.05,-.16,.36,.5,.38,.26,.54,.08,-.12,-.25,.17,.46,.4,-.48,.1,.06,.06,.48,.53,-.51,.26,.23,-.11,.72,.52,.59,.27,.04,.42,.21,.56,.52,.29,.2,-.27,-.07,-.07,.69,-.35,-.03,-.14,-.44,.38,-.11,.12,.44,-.29,.31,.62,.33,.45,.55,.45,.34,-.44,.39,.08,.37,.39,.18,.07,.53,.11,-.25,.68,.7,-.1,-.41,-.36,0,.07,.53,.31,-.25,-.08,-.25,.06,-.23,.1,-.1,-.06,.48,-.03,.31,.49,.29,-.16,.16,.34,.51,.4,.24,.21,.34,-.1,-.08,.11,.58,.2,.2,.08,.44,-.28,.11,-.06,.61,.53,.03,.6,.17,.44,.22,.14,.21,.31,.11,.49,.39,.19,.4,.38,.55,.51,.55,.11,-.4,.68,.75,-.08,.09,.03,.18,-.14,.49,-.01,-.02,.35,-.27,.15,.25,.13,-.25,.33,.08,.27,.01,.1,.45,.01,-.08,.55,.65,-.43,-.26,.73,.13,.47,.65,.73,.26,.35,.37,.53,.43,-.08,-.28,.21,.34,.57,-.2,.43,.21,.35,.14,.32,.43,.19,.25,.55,.05,-.58,.47,.44,-.56,.19,.58,.01,.29,.39,.28,.02,-.02,.2,.13,.38,.37,-.04,.21,.03,-.11,.11,.5,.22,.54,.13,.26,.52,.05,.07,.64,-.32,.36,.67,-.34,.36,.04,.39,-.36,.61,-.56,-.54,.57,.09,.27,-.15,.64,-.28,.35,.2,.24,-.11,.32,-.15,.67,.26,.38,.51,.07,.17,.33,-.12,0,.15,.06,.37,.52,.75,.38,.53,.16,.59,.22,.67,.4,.6,.02,.13,.01,-.03,.6,.41,.26,-.15,.64,.33,-.3,.62,.38,.33,.51,.5,.2,.09,.4,.35,-.25,-.03,.53,.29,.24,.43,.56,-.58,-.16,.5,.38,.33,.04,-.1,.42,-.01,-.06,.65,.31,-.15,-.23,-.15,.34,.16,-.13,.78,-.06,-.12,.72,.74,.69,.56,.18,.76,.53,.74,.52,.72,.69,.61,-.1,.35,.2,.53,.61,.72,.01,-.25,-.32,.46,.57,.14,.5,.2,.23,.26,.43,.13,-.28,.28,.39,-.14,.44,.24,-.02,-.13,.86,.65,.57,.71,.64,.76,.22,-.05,.51,.04,.29,-.35,.59,-.21,-.31,.34,.61,-.09,.14,.63,-.68,.13,.61,.42,.42,.41,.13,.09,.22,-.29,.53,-.1,.15,.13,-.17,.39,-.29,.01,.32,-.18,-.1,.17,-.17,.29,.52,.55,.33,.39,.12,.04,.74,.01,.6,.02,.29,.4,.16,.57,.01,-.07,.04,.51,-.2,.09,.04,.26,.33,.43,.56,.51,-.2,-.02,.04,.37,.21,-.31,1,.65,.25,-.08,.23,.64,.72,-.17,.14,-.38,.64,-.01,.77,.69,.82,-.18,.58,.51,-.17,.39,.61,.52,.78,.18,-.06,.75,.45,.53,.61,.35,.2,.37,-.03,.04,0,.4,.07,.23,.32,.68,-.22,.73,.28,.51,.24,.11,.24,-.11,-.36,.64,-.06,-.08,.36,.03,.45,.05,.5,.58,.45,.44,-.17,.05,.47,.05,.04,-.51,.3,.6,.66,.29,.65,-.09,.55,.51,.65,.35,.5,.63,.45,.67,.61,.26,.27,.57,.36,-.17,.38,.06,.62,.53,.07,.53,.51,-.04,.57,.27,-.02,-.22,.4,.29,.63,.57,.34,.35,-.11,-.01,.49,.42,.32,.53,.22,.37,.62,-.53,.79,-.08,.24,.03,.59,.5,.57,.5,.66,-.23,.44,.24,.48,-.14,-.25,.6,-.01,.47,.24,.52,.07,.18,-.22,.32,.41,.58,.3,.36,-.15,-.14,.25,.44,.51,.4,-.15,-.1,.37,.51,.78,.57,.69,.65,.13,.55,-.17,.88,-.22,.52,-.08,-.03,-.03,.37,.26,.15,.65,.05,.69,-.1,.45,.54,.53,.61,.55,.46,.34,.01,.28,.62,.51,-.11,-.19,.57,.53,.41,.25,.32,.34,-.21,.66,.53,.67,.56,.07,.2,.29,.62,.51,.33,.28,.74,.74,.66,-.1,.76,-.1,.18,.62,-.25,.62,-.14,.38,.7,-.04,.43,-.22,.34,.11,.54,.29,-.11,.5,.33,-.3,.44,.56,-.24,-.01,.51,.38,-.08,.6,.54,-.09,.05,.37,.48,.32,-.15,.1,.21,.45,-.11,-.53,-.05,.43,.4,.4,.3,.34,0,-.19,.12,.53,-.53,.4,-.22,.52,.34,.3,-.14,-.17,-.19,-.26,.54,.57,.43,.46,.53,.44,.43,.53,.52,.22,.15,-.15,-.16,.54,-.11,.32,.24,.45,.4,.09,.59,.44,.55,-.54,-.06,-.09,.25,-.01,-.17,.3,-.52,-.23,.05,-.14,.09,0,.01,.71,.63,-.1,.17,.26,-.02,.36,.22,-.55,-.64,-.18,.47,.3,.35,.02,-.34,.65,.22,.63,.73,.33,.14,.47,.38,.57,.57,.74,.41,-.15,.59,.37,.54,.5,-.53,-.27,.36,.35,.37,.89,.13,.54,.28,.47,.36,.25,.17,.59,-.13,.73,-.07,-.2,.51,.62,-.15,.5,.54,.24,.74,.61,.49,.32,.67,.38,.06,.08,0,-.02,.18,.24,.16,.19,.4,.41,.53,-.19,.05,.16,.46,-.24,-.21,-.13,-.08,.19,-.01,.62,.46,.49,.27,.4,.28,.2,.03,-.06,.46,-.04,.56,.74,.82,.38,.24,.27,.09,.47,-.18,.26,.48,.81,.81,-.09,.06,.29,.16,.06,-.08,-.29,-.06,.68,.64,.42,.55,-.34,-.39,.45,.79,.35,.28,-.12,.12,.45,.26,-.03,.5,.45,.15,.53,.23,.47,.34,-.57,.38,.55,.71,.62,-.06,-.35,.17,-.17,-.13,-.09,.3,-.07,-.03,.41,.7,-.08,.7,.19,-.01,-.13,.51,-.32,.1,.52,-.13,.07,.01,.29,.24,.14,.11,.57,.09,.25,.36,.39,-.26,.31,.22,.26,.41,.49,.06,.43,.57,.34,.53,-.12,.13,-.15,.1,.32,.46,.26,.17,.03,.48,.29,-.22,.41,.16,.22,-.56,-.04,-.27,-.14,.36,.32,.17,.36,.7,-.13,.62,.36,-.2,.32,-.13,-.03,.44,.12,.56,-.14,-.39,.68,.26,.11,.46,.61,.37,.61,.18,.56,-.34,.33,.56,.31,.14,.54,.37,.58,.1,.39,.24,.35,.39,.4,.26,.37,.13,-.28,.25,-.18,.59,-.33,.22,.33,.31,.26,.33,.35,.68,.16,.42,-.43,.19,.28,.27,.24,-.06,.69,.36,.29,.52,-.32,-.02,-.36,.48,.4,.56,.36,.38,.55,.03,-.61,.13,-.2,-.26,.09,.33,.18,.47,.34,.31,-.08,.6];export{a as rvalData};
