const a=[-.27,.22,.41,.03,.5,.24,.38,.28,.39,-.02,.03,-.02,-.05,-.5,.12,-.02,.1,-.06,-.12,.04,-.15,-.5,.17,-.1,.35,.65,-.52,.18,.24,-.56,.58,-.47,.46,.13,-.05,.15,.32,.08,.44,.43,-.15,.61,.29,-.01,.13,-.02,-.09,-.18,-.48,.67,.2,-.03,-.02,.55,.77,.11,.26,.29,.33,.45,.61,.58,.75,-.09,-.1,-.63,.68,0,-.08,-.08,-.05,.12,.69,-.41,.51,-.19,-.27,.6,.34,-.52,-.39,.42,-.01,.63,.02,-.48,.56,.05,-.54,.37,.52,.1,.54,-.32,-.1,.36,-.61,-.39,.05,.7,-.04,.74,.89,-.09,1,.11,-.11,-.04,.51,.79,.02,.66,.31,-.5,-.08,.44,.03,-.63,-.27,.46,-.05,-.4,.08,-.02,-.02,.8,.49,-.02,-.65,.35,.39,-.1,0,.55,-.14,.06,.47,.52,-.63,-.14,.71,.03,.72,.54,.01,-.12,-.06,.17,.75,-.14,.73,.18,.04,-.02,.33,.46,-.13,-.14,-.37,.09,.33,.86,-.16,.55,.5,.6,.33,-.72,.38,.58,.05,-.58,.3,.05,.58,-.59,.11,-.46,.64,.52,-.06,.08,.07,.27,.79,.17,-.02,0,.29,-.17,-.05,.45,0,.8,.76,.45,.85,.33,-.1,-.4,.09,.59,.4,-.1,-.33,.65,-.06,.77,.72,.09,.27,.14,-.19,.29,.26,.38,.18,.28,-.65,-.36,.7,.87,.62,.54,.57,.39,.4,-.6,.58,.41,.05,-.05,.25,.44,.04,.07,.02,-.22,.35,-.03,.58,.1,.29,.37,.33,.01,.08,.2,-.04,-.1,.39,-.26,.78,.3,.66,-.08,.11,.44,.29,.31,-.01,.42,.54,.68,.23,.97,-.4,.66,-.02,.4,-.25,-.19,.39,.47,.56,.08,-.43,.61,.56,-.47,.6,-.47,.13,-.32,.72,.45,-.39,.29,.54,-.28,.12,.69,.53,.02,.44,.31,-.14,-.27,.14,.5,.12,.38,-.44,-.12,.11,.28,.13,.83,.56,-.21,.52,-.06,.02,-.03,.35,.52,.56,.49,.49,.38,.67,.02,.09,.71,.39,.74,.55,-.08,.1,.76,-.58,.55,.25,.03,-.5,-.16,-.69,.52,-.27,-.28,.68,.3,.11,-.13,.33,.52,.11,.68,.27,.55,.84,.22,.12,.73,-.45,.18,.5,-.28,.66,.35,.29,.04,.65,-.07,.01,-.32,.2,.4,.47,.01,-.26,-.21,.31,.33,.4,.49,.09,.64,-.16,.6,-.07,.17,-.01,.03,.02,.45,-.33,-.02,.57,.57,.6,.04,.07,-.08,-.15,.4,-.56,-.18,-.02,.03,-.03,.51,.56,.53,.41,0,.11,.62,.83,.68,.49,-.46,.12,.63,.43,-.02,.73,.35,.61,-.3,.09,.38,-.42,-.04,.22,.41,.39,.06,.52,.08,.25,.32,.44,.03,.51,.44,-.33,.6,.5,.66,.85,.59,.64,-.11,.4,.64,.36,.57,.07,-.6,.3,.72,-.61,.36,-.03,.11,-.45,.43,.36,.4,.55,.61,-.51,.64,-.02,.31,-.21,-.12,-.58,.51,-.04,.36,.21,-.16,.66,.51,.35,.21,.45,-.49,.79,.23,.56,.5,.4,.38,.61,0,.09,.41,.08,-.02,.06,-.01,.51,.46,.49,-.24,.37,.37,.55,.05,.68,.44,.66,.06,.21,.56,.41,.54,.76,.36,.6,.25,.37,-.45,.21,.53,.64,.62,-.32,.47,.24,.07,.55,0,.16,.14,.08,.52,.64,.5,.09,.28,.03,.16,.6,.25,.15,.07,-.02,.56,-.04,-.31,-.44,.04,.15,-.3,.65,.17,-.46,.4,.48,.38,.53,-.06,-.55,.11,-.38,-.06,.5,-.44,.49,.26,-.06,-.09,.02,-.21,.34,-.22,.56,.45,.07,-.1,.58,.39,-.15,-.45,.55,.11,-.49,.03,.83,.45,.88,.15,.38,.69,-.45,.3,-.1,.01,.04,.67,.26,-.47,.49,.43,.47,.13,.35,.53,.47,.41,.27,-.54,.49,-.2,-.06,.15,.03,.25,.35,.44,.06,.02,.43,.04,-.22,-.06,.31,.04,.55,-.01,.55,-.21,.16,.44,.79,-.02,.03,-.63,-.36,.65,.41,.72,.5,.4,.13,-.39,.27,.51,-.53,.12,.15,.74,.2,.7,.12,.89,-.11,-.65,.4,.47,.5,.14,.13,-.28,-.05,-.05,.4,.36,.51,.45,.25,.12,-.05,.55,.62,.48,.52,-.11,-.14,-.57,.77,.23,.8,.54,-.31,.03,-.07,.19,.25,.55,.36,.2,-.42,.66,.62,.17,-.18,-.18,.33,-.04,.06,.02,.06,.21,.63,-.4,.64,.28,.58,.35,.11,-.15,-.16,.28,-.03,-.49,.64,.28,.27,.23,.12,-.15,.22,.18,-.29,-.04,.27,.7,.29,-.18,.39,.18,-.27,-.59,-.27,.57,-.6,.46,.55,-.08,.66,.51,.28,-.09,.14,.02,.2,.32,-.45,-.38,.03,-.34,.48,.26,.33,.64,-.19,-.1,-.03,.29,.48,.08,.07,-.17,.42,-.05,.12,-.67,.5,.42,-.09,.27,.68,.01,-.35,.2,.3,.53,.49,.05,.67,-.31,.53,.2,.5,.58,.47,-.12,-.13,.67,.46,.83,.74,.51,.15,-.36,-.53,.47,.8,-.03,.59,-.72,.47,.66,-.22,.73,.07,.25,-.45,.69,.25,.64,.29,-.33,.45,-.1,0,-.15,.58,-.39,.71,.38,-.51,-.56,-.04,.46,-.09,.19,.25,.4,-.05,.41,-.21,.43,-.18,-.16,.15,.39,.48,.09,-.01,-.13,-.26,.4,.1,-.56,.59,.43,.03,.41,-.48,.64,-.02,-.46,.64,-.23,-.01,-.58,.58,-.07,-.09,.37,.44,.46,.52,-.15,.79,.49,.04,-.37,.26,.32,-.5,.13,.32,.21,0,-.12,.01,.67,.39,.48,.14,.36,-.18,.07,-.53,.28,.02,.69,.25,.1,.58,.35,.64,.03,.69,-.25,-.45,.74,.54,.02,-.38,-.22,.41,.45,.35,-.13,.03,-.19,-.05,.38,-.02,.6,-.08,.52,-.02,-.38,-.48,-.04,.72,.44,.09,.39,.28,-.15,.39,-.15,-.23,.29,.63,.49,.08,.39,.6,.49,.44,.38,.36,.59,.56,-.53,.67,-.04,.59,.62,-.22,.3,.37,.51,.13,.21,.2,.43,-.05,-.2,.25,.09,.47,.07,.4,.04,.66,.23,.62,.22,.49,.04,-.01,.06,.72,-.03,.14,.19,-.56,-.1,-.37,.15,-.06,-.54,.68,-.13,.35,.64,.62,.54,.58,.26,-.6,.29,.29,.27,.17,-.02,-.05,.66,.63,.16,.67,.08,-.12,.6,-.19,.05,.04,.15,.08,.07,.02,0,.02,-.24,-.24,.1,-.2,-.02,-.2,.64,.59,-.34,.38,-.09,.34,.03,.24,0,.66,.17,.24,.78,-.07,.55,.61,-.16,0,-.17,.39,-.07,.18,.72,.09,.69,.34,.27,.16,-.14,.22,.38,-.32,.01,-.07,.65,0,-.22,-.3,.42,.52,.34,.28,.37,.24,-.19,-.25,.18,.42,.48,-.37,-.14,-.1,.29,.52,.63,-.7,.42,.35,-.06,.59,.45,.56,.36,.08,.35,.33,.4,.49,.54,0,-.36,-.04,.03,.59,-.24,.12,-.22,-.48,.6,-.05,-.05,.6,-.34,.35,.81,.26,.5,.63,.52,.14,-.45,.22,.27,.44,.42,.17,.12,.54,.05,-.16,.61,.69,-.05,-.48,-.31,.02,.29,.51,.5,-.26,.13,-.32,-.03,-.23,.02,-.05,.18,.47,-.08,.33,.56,.46,-.28,.17,.5,.63,.31,.1,.19,.51,-.19,-.09,.3,.73,.01,.35,.11,.46,-.34,.01,-.08,.52,.58,-.01,.63,-.03,.42,.08,-.07,.36,.37,-.09,.52,.49,.18,.57,.48,.73,.53,.52,-.1,-.43,.7,.83,.02,.23,.04,.46,.02,.39,-.12,-.08,.22,-.29,.02,.44,.26,-.18,.41,.16,.05,-.12,.12,.57,-.14,.02,.71,.74,-.35,-.47,.72,-.1,.61,.67,.85,.29,.43,.5,.39,.49,-.04,-.22,.11,.42,.65,-.18,.67,.45,.3,.05,.56,.48,.01,.05,.47,.1,-.51,.58,.38,-.63,.14,.68,.08,.44,.39,.53,-.03,-.08,0,.28,.59,.46,-.17,.02,-.08,-.22,.16,.5,.01,.74,-.02,.07,.43,-.04,.07,.69,-.39,.22,.75,-.58,.42,.08,.27,-.26,.62,-.57,-.69,.47,-.11,.5,-.16,.81,-.1,.36,.06,.27,-.24,.18,-.1,.81,.16,.39,.47,.13,-.07,.43,-.04,-.12,.03,.1,.57,.71,.77,.15,.65,.1,.68,.43,.82,.48,.6,-.03,.12,.02,.07,.52,.33,.41,-.2,.75,.39,-.42,.59,.29,.18,.42,.53,.36,.02,.45,.37,-.24,-.27,.48,.41,.32,.67,.59,-.53,-.17,.59,.21,.46,.13,.01,.2,-.05,-.03,.72,.3,-.13,-.1,.05,.26,.16,-.19,.85,-.29,-.1,.73,.66,.73,.67,.3,.66,.58,.74,.34,.62,.58,.63,.02,.13,-.01,.31,.71,.76,.17,-.13,-.32,.24,.46,.21,.68,-.09,-.08,-.02,.3,-.14,-.2,.02,.15,-.12,.26,.17,.18,-.09,.88,.78,.37,.72,.61,.85,.34,-.02,.42,0,.37,-.32,.48,-.2,-.37,.42,.7,0,.26,.68,-.68,.03,.68,.53,.33,.38,.16,.23,.24,-.31,.33,-.14,.11,.1,-.2,.35,-.4,.05,.31,-.21,-.2,.38,-.25,.21,.75,.59,.61,.55,.11,-.17,.6,.05,.6,.11,.11,.62,-.02,.43,-.1,-.11,.12,.41,-.38,-.11,0,.44,.58,.58,.59,.38,-.18,.02,-.13,.49,.12,-.48,.77,.77,.28,-.05,.25,.57,.76,-.25,-.13,-.43,.77,-.17,.88,.7,.88,-.06,.48,.56,-.01,.53,.43,.62,.81,-.03,.03,.85,.22,.59,.68,.46,.18,.49,-.02,.01,.14,.46,-.13,.06,.53,.67,-.26,.72,.44,.53,.3,.17,.45,.08,-.32,.74,.08,.05,.62,-.07,.59,.19,.52,.58,.6,.39,-.18,.21,.65,-.08,.1,-.61,.36,.66,.7,.46,.79,-.16,.52,.54,.71,.44,.61,.73,.54,.84,.66,.41,.36,.52,.53,-.19,.61,.15,.85,.69,-.02,.54,.73,.05,.68,.55,.13,-.27,.56,.52,.71,.48,.48,.45,.03,-.03,.6,.52,.5,.73,.04,.35,.65,-.57,.89,.09,.11,.14,.67,.56,.75,.47,.64,-.06,.51,.38,.68,-.18,-.42,.58,.18,.41,.3,.53,.11,.29,-.26,.49,.52,.71,.5,.43,-.15,-.09,.31,.49,.6,.45,0,.03,.55,.45,.77,.79,.75,.84,-.03,.75,-.23,.84,-.09,.57,-.13,.03,.06,.54,.36,.19,.7,-.01,.78,-.18,.45,.7,.62,.78,.65,.67,.42,.04,.2,.62,.53,-.08,-.2,.73,.71,.67,.23,.49,.39,-.17,.68,.43,.77,.55,.11,.35,.39,.67,.58,.26,.36,.76,.87,.77,-.17,.88,.01,.01,.85,-.15,.73,-.04,.44,.79,-.12,.66,-.25,.25,.1,.57,.31,.05,.54,.26,-.24,.49,.46,-.24,.1,.62,.47,.04,.34,.72,-.01,.18,.55,.69,.44,-.23,.03,.18,.67,-.14,-.47,-.04,.5,.49,.5,.41,.45,.07,-.14,.35,.67,-.53,.56,-.25,.7,.36,.29,-.24,-.08,-.06,-.26,.43,.48,.46,.51,.49,.33,.6,.58,.62,.03,.32,-.17,-.08,.63,-.32,.4,.31,.49,.49,.02,.71,.38,.76,-.6,.1,-.03,.37,-.28,-.08,.2,-.56,-.19,-.01,-.11,.11,-.08,-.06,.84,.75,.02,.41,.35,-.15,.41,.05,-.64,-.68,-.01,.6,.41,.56,.29,-.35,.68,.29,.72,.86,.46,.22,.65,.46,.66,.71,.83,.41,-.17,.72,.6,.62,.46,-.6,-.03,.31,.54,.24,.87,.02,.64,.36,.71,.43,.37,.33,.69,-.06,.8,-.02,-.27,.53,.53,-.08,.33,.6,.3,.86,.69,.57,.41,.65,.47,.16,.05,.12,.07,0,.02,.14,.03,.27,.14,.6,-.04,.28,-.1,.27,.03,-.12,-.22,-.18,.36,.02,.57,.5,.56,.19,.64,-.01,0,-.31,.02,.6,.03,.42,.85,.76,.38,.07,.51,.09,.68,-.22,.39,.38,.73,.78,-.02,.19,.3,.17,-.07,-.23,-.22,-.03,.83,.82,.55,.57,-.25,-.27,.67,.77,.44,.1,-.09,-.02,.66,.34,.11,.55,.64,.27,.5,.1,.57,.59,-.6,.29,.71,.73,.67,-.04,-.32,.14,-.07,-.1,-.21,.39,-.06,.02,.59,.64,-.01,.85,.16,-.06,-.1,.74,-.53,.18,.48,-.17,-.03,-.03,.36,.23,-.07,-.06,.55,.14,.34,.5,.47,-.46,.37,.34,.44,.63,.58,.17,.19,.62,.58,.52,-.13,-.01,-.14,.02,.54,.63,.07,.35,-.01,.38,.35,-.05,.43,.05,.19,-.63,-.18,-.12,-.02,.62,.41,.43,.46,.72,-.12,.71,.23,-.23,.2,0,.02,.6,.32,.42,-.29,-.63,.65,.33,.05,.58,.56,.55,.66,.16,.65,-.59,.55,.64,.47,-.02,.79,.18,.71,.36,.31,.41,.41,.55,.48,.39,.6,.23,-.46,.39,-.12,.72,-.28,.4,.59,.53,.47,.58,.22,.79,.21,.29,-.37,.43,.08,.38,-.1,-.01,.82,.5,.55,.72,-.43,-.01,-.38,.36,.51,.45,.46,.44,.72,.09,-.63,.06,-.22,-.31,-.02,.5,.15,.23,.46,.12,.1,.79];export{a as rvalData};
