const a=[-.32,.22,.51,.03,.54,.04,.16,.19,.32,.17,.1,-.3,-.04,-.58,.23,-.01,.2,-.11,-.21,-.1,0,-.49,.1,.03,.36,.59,-.54,.13,.09,-.54,.31,-.56,.44,.1,-.07,.16,.38,.23,.25,.4,-.2,.57,.32,-.04,.18,.07,-.07,-.38,-.53,.48,.2,-.03,.04,.63,.5,.2,.15,.24,.36,.38,.54,.42,.75,-.07,-.38,-.51,.63,.15,-.23,-.01,.13,.09,.51,-.29,.52,-.08,-.25,.53,.54,-.47,-.37,.31,.05,.51,-.42,-.55,.48,.05,-.57,.54,.36,.08,.45,-.38,-.16,.09,-.55,-.26,-.38,.63,.02,.71,.53,-.05,.72,.06,-.14,-.05,.4,.67,.16,.39,.17,-.45,-.41,.4,.05,-.56,-.47,.44,.08,-.33,.15,-.09,-.07,.66,.46,-.16,-.44,.42,.22,-.24,.07,.37,.04,-.04,.31,.43,-.54,-.06,.61,.08,.63,.5,-.01,.01,-.02,-.18,.68,.03,.72,.29,.12,-.09,.23,.31,-.2,-.24,-.15,.23,.25,.78,.11,.34,.47,.55,.22,-.62,.18,.54,-.06,-.49,.19,-.07,.41,-.53,.04,-.4,.52,.43,.15,-.1,.12,.39,.61,.13,.06,.03,.28,-.4,-.2,.44,-.07,.75,.71,.48,.7,.48,.04,-.66,.28,.53,.45,.06,-.47,.48,-.08,.63,.54,-.03,.18,.17,-.31,.34,.24,.2,.17,.26,-.56,-.44,.57,.55,.51,.55,.42,.46,.3,-.55,.3,.33,.07,-.01,.18,.57,.24,.02,.11,-.05,.14,-.05,.37,.2,.08,.07,.28,.03,.02,.32,-.03,-.02,.36,-.46,.5,.01,.58,-.1,.13,.52,.26,.48,.05,.18,.63,.61,-.05,.67,-.36,.56,-.02,.36,-.44,-.13,.45,.61,.55,.01,-.37,.51,.59,-.53,.46,-.48,.41,-.4,.41,.39,-.43,.33,.4,-.51,.12,.53,.41,.01,.38,.36,-.05,-.29,.39,.41,-.14,.43,-.54,.07,-.07,.11,-.08,.69,.27,-.12,.47,.07,-.16,-.02,.12,.41,.6,.25,.61,.46,.56,-.37,.23,.62,.31,.48,.42,-.17,-.05,.52,-.46,.4,-.12,.12,-.52,-.02,-.54,.36,-.22,-.38,.5,.31,-.1,-.1,.42,.53,.22,.52,.26,.25,.73,.08,.04,.42,-.4,.42,.36,-.15,.67,.51,.29,.33,.37,-.1,-.13,-.32,.17,.46,.4,.09,-.32,-.12,.33,.12,.41,.2,.01,.62,-.09,.48,-.02,.01,-.16,.17,.08,.18,-.12,-.04,.42,.39,.66,.08,-.02,.02,-.05,.44,-.61,-.03,-.09,-.04,-.44,.16,.65,.41,.44,.03,.22,.6,.75,.49,.62,-.43,-.15,.68,.1,-.04,.63,.3,.47,-.3,.05,.43,-.47,.09,.28,.43,.37,.09,.36,-.14,.1,.09,.42,-.07,.45,.58,-.11,.5,.51,.66,.76,.54,.55,-.12,.47,.5,.39,.44,.09,-.63,.37,.67,-.59,.05,.05,.06,-.54,.45,.26,.39,.7,.45,-.47,.56,-.01,.17,-.16,-.21,-.56,.59,-.02,.41,.24,.02,.45,.44,.42,.38,.46,-.58,.74,.32,.54,.47,.5,.18,.55,-.13,-.06,.59,.06,-.27,.07,-.13,.56,.44,.43,-.01,.34,0,.35,.04,.67,.45,.57,0,-.05,.48,.33,.5,.75,.14,.56,-.1,.47,-.58,.22,.41,.53,.63,-.29,.52,-.01,-.02,.32,-.07,-.05,.25,.09,.35,.53,.43,.03,.12,-.1,.13,.4,.08,0,-.24,.03,.36,-.03,-.37,-.45,-.27,-.01,-.38,.68,.07,-.43,.44,.54,.51,.44,.03,-.49,-.12,-.22,-.19,.6,-.42,.16,.2,-.01,.06,-.01,-.08,.28,-.1,.62,.58,.3,-.15,.56,.47,-.05,-.52,.46,.09,-.5,-.02,.75,.24,.75,.2,.44,.6,-.49,.37,.04,.04,.05,.69,.18,-.45,.54,.53,.43,.12,.31,.58,.55,.29,.3,-.45,.2,-.43,-.02,.04,.12,.32,.24,.43,-.01,.08,.45,.01,-.2,-.14,.13,-.13,.32,-.02,.24,-.41,.18,.26,.73,-.06,.02,-.53,-.3,.55,.23,.58,.41,.21,.17,-.51,.4,.4,-.63,.07,.22,.63,0,.59,.01,.75,-.12,-.65,.19,.49,.45,-.03,.32,-.07,-.15,.05,.42,.36,.47,.31,.27,.01,.08,.22,.49,.5,.5,-.2,-.1,-.51,.42,.02,.7,.58,-.42,.05,.26,.01,.13,.51,.28,.16,-.46,.57,.53,.12,-.09,-.38,.07,-.07,.06,.12,.18,.27,.68,-.52,.52,.29,.55,.45,-.04,0,-.17,.37,-.11,-.42,.63,-.03,.2,.18,-.11,.01,.13,-.07,-.15,-.05,.25,.65,.37,-.06,.28,.21,-.31,-.54,-.29,.65,-.64,.13,.41,-.02,.51,.32,.36,-.1,.08,.04,.13,.3,-.51,-.46,.03,-.33,.43,.32,.09,.58,-.23,-.31,-.38,.11,.56,.01,-.13,-.08,.24,.02,.16,-.56,.46,.51,-.06,.49,.67,-.03,-.28,.1,-.01,.21,.48,.05,.47,-.32,.53,.18,.43,.43,.51,-.38,-.24,.57,.59,.75,.47,.47,.02,-.41,-.58,.03,.75,.12,.52,-.56,.52,.55,-.29,.6,.05,.16,-.3,.71,.36,.42,.34,-.29,.29,-.05,-.03,-.17,.39,-.48,.43,.12,-.42,-.59,-.03,.41,-.13,.1,.17,.38,.01,.47,-.18,.26,-.27,.02,.05,.45,.38,-.32,-.08,-.47,.08,.36,.17,-.51,.44,.33,-.06,.12,-.3,.74,-.02,-.48,.53,-.18,-.06,-.51,.49,-.05,-.12,.24,.29,.27,.46,-.33,.74,.51,-.12,-.37,.03,.18,-.46,.03,0,.06,-.22,-.08,.04,.46,.22,.33,.07,.15,-.3,.03,-.49,.35,-.03,.62,.36,.2,.46,.14,.57,-.02,.59,-.25,-.28,.65,.45,.18,-.36,-.13,.41,.51,.24,-.28,.03,.06,-.1,.31,-.05,.37,-.1,.33,.03,-.44,-.48,-.15,.75,.15,.02,.19,.08,-.02,.18,-.13,-.25,.28,.6,.55,.01,.44,.6,.32,.43,.47,.33,.55,.43,-.5,.58,-.1,.49,.59,-.14,-.04,.2,.43,-.13,.14,.18,.45,-.15,-.09,.1,.14,.12,-.16,.21,.1,.59,.07,.59,.11,.39,.13,-.09,.04,.62,-.04,0,.1,-.47,.03,-.25,-.12,.15,-.64,.58,.07,.3,.46,.44,.48,.62,.14,-.59,.24,.27,.14,-.04,-.06,-.1,.69,.56,.04,.51,.01,.08,.36,.12,.24,.3,.12,-.04,.03,.06,-.03,-.02,-.09,-.19,.03,-.05,-.13,-.27,.62,.38,-.41,.19,-.1,.35,-.25,.01,.05,.63,.07,.25,.5,.12,.33,.54,.06,-.05,-.16,.22,-.05,-.02,.38,.18,.46,.36,.16,.14,.05,-.04,.43,-.3,-.04,-.11,.44,-.1,-.2,-.37,.43,.4,.44,.03,.32,.27,-.12,-.38,.05,.22,.41,-.47,-.2,.03,.28,.56,.38,-.58,.45,.36,-.05,.41,.4,.47,.38,-.13,.26,.47,.08,.48,.56,.01,-.5,0,.14,.53,-.32,.16,-.23,-.48,.5,-.02,-.21,.68,-.51,.56,.78,.17,.19,.59,.42,.08,-.3,.06,.31,.43,.31,.22,.13,.4,-.13,-.08,.52,.62,-.03,-.6,-.31,-.24,.27,.44,.44,-.37,.22,-.32,.17,-.33,-.06,.05,.3,.28,-.12,.12,.43,.52,-.22,.03,.54,.54,.12,.05,.02,.45,-.24,.06,.16,.65,0,.33,.14,.53,-.27,0,-.21,.46,.64,.03,.39,-.02,.21,.06,-.05,.39,.41,-.09,.45,.37,.08,.6,.52,.79,.33,.48,-.05,-.39,.45,.74,.16,.35,.05,.45,.03,.08,-.18,-.09,.22,-.25,.04,.44,.35,-.23,.54,.04,.04,-.2,-.05,.57,-.23,-.22,.76,.7,-.43,-.46,.61,.01,.62,.35,.77,-.01,.55,.64,.3,.53,-.05,-.09,-.03,.38,.41,-.18,.52,.55,.1,-.17,.5,.47,0,.01,.29,-.12,-.55,.34,.24,-.48,.09,.68,-.01,.54,.52,.59,0,-.07,-.01,.32,.55,.52,-.1,.01,-.21,-.09,.11,.36,-.08,.67,.1,.05,.23,-.07,.09,.58,-.38,.05,.72,-.58,.44,.1,.01,-.22,.65,-.56,-.59,.52,-.12,.58,-.07,.74,-.02,.37,.03,.17,-.34,-.1,.03,.67,-.02,.43,.41,.03,-.09,.46,.13,.11,.01,.17,.47,.65,.67,.04,.44,-.11,.71,.36,.86,.42,.6,.03,.22,-.09,.26,.52,.1,.45,-.29,.75,.36,-.56,.49,.01,.12,.46,.49,.37,.06,.34,.1,-.15,-.16,.31,.22,.49,.61,.69,-.57,-.11,.51,.07,.11,.03,-.12,.05,-.09,.03,.58,.3,-.1,-.04,-.03,.36,.07,.01,.73,-.14,-.26,.6,.61,.78,.63,.25,.54,.39,.56,.21,.46,.63,.69,.03,.03,-.08,.17,.69,.53,.04,-.06,-.42,.23,.38,.51,.44,-.11,-.2,-.16,.34,-.17,-.04,-.05,.02,-.11,.24,.34,.22,.01,.76,.78,.37,.63,.37,.71,.39,-.03,.1,.01,.39,-.26,.32,-.17,-.11,.52,.66,.2,.1,.56,-.56,-.21,.54,.47,.13,.08,-.06,.34,.15,-.15,.36,.04,.11,.04,-.09,.27,-.31,.12,.3,-.1,-.12,.35,-.1,.23,.74,.48,.58,.49,-.17,-.27,.59,.07,.52,.21,-.08,.64,-.02,.29,-.04,-.07,-.02,.42,-.31,-.3,-.06,.44,.64,.53,.4,.38,-.22,-.06,-.08,.45,.09,-.34,.59,.8,.21,-.11,.32,.47,.52,-.24,-.19,-.35,.81,-.13,.79,.62,.64,0,.28,.63,.06,.44,.24,.57,.57,.02,.08,.62,.04,.67,.52,.33,.14,.34,.07,-.06,.14,.56,-.22,.04,.61,.54,-.43,.58,.49,.35,.19,.12,.53,.23,-.19,.58,.13,.08,.58,-.06,.51,.26,.35,.45,.42,.38,-.01,.12,.52,-.14,.13,-.51,.1,.63,.56,.24,.81,-.01,.39,.42,.64,.45,.46,.48,.68,.76,.53,.2,.25,.45,.36,.11,.42,-.06,.7,.79,.05,.41,.57,.23,.57,.43,.19,-.15,.7,.47,.62,.34,.32,.44,.17,-.16,.47,.62,.45,.59,.03,.43,.55,-.49,.81,.24,-.06,.05,.68,.53,.74,.49,.49,.07,.52,.41,.66,-.35,-.39,.43,.2,.17,.38,.48,.28,.31,-.37,.35,.41,.55,.59,.54,-.02,-.18,.43,.48,.49,.45,-.01,.06,.49,.37,.63,.64,.66,.71,.14,.72,-.06,.64,.01,.53,-.09,.01,.22,.31,.54,.15,.6,.13,.68,-.11,.49,.75,.52,.58,.55,.58,.15,.07,.16,.4,.34,.04,-.28,.58,.74,.6,0,.67,.11,-.09,.7,.41,.65,.41,.26,.4,.43,.55,.4,.06,.49,.59,.82,.59,-.19,.71,.07,-.19,.69,-.02,.79,.08,.56,.7,-.04,.58,-.14,.3,0,.55,.32,.11,.29,.18,.01,.58,.25,-.31,-.08,.45,.47,.16,.24,.53,.14,.21,.52,.6,.43,-.09,.13,-.04,.51,-.03,-.34,.08,.41,.41,.45,.43,.6,.27,-.21,.44,.79,-.45,.47,-.2,.64,.53,.34,-.27,-.17,.06,-.27,.27,.24,.59,.53,.53,.09,.46,.5,.51,-.02,.1,-.08,.01,.73,-.21,.47,.24,.32,.35,.06,.91,.36,.73,-.45,.19,.02,.18,-.39,.01,.16,-.4,-.18,-.13,.03,0,.01,-.06,.75,.81,0,.46,.43,-.26,.56,-.05,-.49,-.6,.03,.58,.43,.55,.25,-.2,.61,.35,.62,.71,.28,.16,.65,.41,.58,.63,.66,.42,-.18,1,.51,.69,.24,-.53,-.01,.21,.52,.1,.67,.23,.59,.4,.63,.56,.46,.38,.69,-.1,.79,.18,-.15,.57,.31,-.03,.28,.47,.38,.76,.47,.39,.42,.4,.58,.3,.02,-.02,.12,.02,-.01,.25,-.17,.27,.06,.5,-.03,.15,-.14,.17,-.07,.12,-.27,-.34,.44,.14,.34,.42,.44,.18,.56,-.09,-.17,-.18,.12,.54,-.01,.3,.8,.62,.36,.05,.6,.03,.62,-.08,.44,.33,.64,.63,-.12,.21,.1,.06,.03,-.21,-.15,-.28,.79,.78,.52,.53,-.17,-.2,.51,.63,.29,.1,-.04,.01,.6,.41,.15,.42,.54,.26,.34,.23,.62,.61,-.51,.1,.55,.67,.59,.2,-.32,.42,-.12,-.13,-.13,.43,.05,.12,.6,.43,.12,.86,.21,-.03,-.05,.75,-.43,.23,.29,-.01,-.16,.18,.52,.08,-.08,.01,.41,.17,.4,.53,.62,-.43,.52,.44,.41,.55,.47,.14,.24,.53,.54,.24,-.11,.06,-.13,.24,.62,.54,-.12,.45,-.15,.35,.41,-.02,.29,0,.15,-.47,-.23,-.12,.07,.51,.53,.48,.51,.63,.13,.46,.38,-.11,.16,-.09,.11,.6,.32,.2,-.23,-.52,.4,.34,.07,.67,.45,.55,.35,.1,.56,-.51,.55,.58,.5,-.06,.75,.29,.64,.32,.24,.19,.53,.48,.66,.43,.57,.39,-.44,.44,-.13,.53,-.15,.42,.55,.6,.46,.63,0,.72,.37,.03,-.38,.43,.02,.41,-.18,.05,.74,.33,.59,.72,-.35,.18,-.37,.22,.63,.2,.3,.41,.68,-.16,-.51,.11,-.23,-.29,-.04,.46,.11,.07,.43,.06,.11,.69];export{a as rvalData};
