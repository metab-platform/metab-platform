const a=[-.36,.38,.55,-.02,.65,.14,.43,.14,.4,.03,.16,-.08,.01,-.64,.29,-.02,.24,-.02,-.12,.03,-.07,-.42,.09,.15,.55,.8,-.45,.09,.3,-.42,.6,-.43,.56,.09,.09,.22,.52,.35,.42,.36,-.12,.73,.29,-.07,.14,.18,.04,-.22,-.27,.5,.21,.01,.08,.79,.56,.21,.25,.2,.36,.59,.5,.58,.86,-.17,-.06,-.43,.82,.27,-.1,0,-.04,.21,.59,-.28,.71,-.06,-.18,.47,.55,-.33,-.38,.58,.03,.76,-.16,-.34,.71,.09,-.69,.59,.29,.1,.45,-.57,-.05,.18,-.68,-.31,-.09,.6,-.1,.88,.72,-.14,.83,.12,-.06,.06,.62,.79,.02,.44,.19,-.57,-.19,.65,.21,-.47,-.34,.61,.04,-.26,.1,.02,-.17,.69,.66,-.06,-.44,.58,.18,-.3,0,.32,.05,.06,.21,.51,-.43,-.04,.77,.11,.77,.68,.03,-.15,-.04,.08,.82,-.12,.88,.15,.1,-.03,.16,.24,-.12,-.15,-.27,.27,.06,.87,0,.44,.45,.45,.36,-.55,.21,.73,.02,-.45,.17,-.24,.57,-.3,.1,-.29,.51,.66,-.02,.08,.06,.39,.65,.2,-.01,.07,.21,-.3,-.06,.37,.11,.77,.76,.63,.86,.43,-.07,-.4,.29,.62,.61,-.04,-.49,.52,-.21,.61,.55,.02,.12,.39,-.2,.54,.18,.35,.14,.21,-.38,-.32,.77,.68,.62,.73,.66,.61,.23,-.42,.38,.19,-.05,-.04,.42,.56,.11,.04,.27,-.08,.16,.06,.4,.39,.09,.06,.32,-.06,.09,.15,.06,-.12,.26,-.3,.57,.23,.76,-.02,.06,.49,.16,.46,.02,.18,.59,.76,.16,.79,-.29,.76,-.07,.46,-.2,-.3,.58,.58,.75,.12,-.24,.45,.61,-.26,.33,-.4,.38,-.41,.55,.5,-.3,.49,.4,-.24,.07,.47,.57,-.04,.38,.34,-.06,-.31,.16,.43,.02,.54,-.39,-.09,.06,.33,.12,.77,.37,-.1,.65,-.08,.04,.03,.34,.42,.49,.26,.59,.29,.8,-.13,.33,.88,.21,.57,.63,-.13,-.01,.62,-.57,.67,.16,.12,-.52,-.05,-.47,.48,-.31,-.3,.6,.32,-.12,-.04,.58,.59,.05,.53,.23,.34,.87,-.07,.09,.56,-.51,.45,.38,-.13,.72,.52,.39,.1,.49,.02,-.1,-.42,.23,.61,.39,.1,-.08,-.34,.37,.18,.36,.38,.05,.74,-.13,.43,.01,.17,.08,.06,.04,.39,-.23,.03,.62,.6,.68,.07,.04,-.15,-.2,.55,-.57,-.16,-.07,-.14,-.17,.36,.65,.54,.29,.09,.34,.69,1,.8,.59,-.46,-.11,.72,.23,.02,.82,.48,.34,-.29,.09,.63,-.28,.05,.37,.59,.49,.1,.35,-.28,.07,.18,.58,.08,.31,.64,-.35,.68,.66,.65,.84,.72,.7,-.11,.3,.53,.48,.63,.03,-.6,.31,.7,-.74,.24,-.01,.07,-.28,.6,.31,.45,.74,.61,-.58,.51,-.07,.32,-.28,-.22,-.65,.74,.06,.56,.28,-.1,.43,.59,.42,.2,.62,-.41,.81,.48,.69,.48,.26,.27,.56,-.12,.22,.49,.07,-.05,.08,-.27,.59,.67,.33,-.1,.44,.11,.43,.03,.71,.53,.79,-.04,.1,.62,.51,.46,.83,.24,.7,.19,.25,-.26,.06,.34,.45,.8,-.22,.6,.12,.03,.62,-.01,.06,.19,.06,.5,.49,.3,-.05,.05,-.01,.15,.46,.27,.09,.01,-.02,.31,-.04,-.15,-.35,-.18,.12,-.13,.68,.15,-.35,.61,.57,.51,.46,-.08,-.49,-.12,-.28,-.05,.67,-.26,.31,.17,-.05,-.07,-.03,-.05,.16,-.16,.63,.59,.21,-.34,.74,.54,-.05,-.5,.34,.25,-.4,-.03,.88,.37,.79,.43,.53,.79,-.29,.51,-.08,.04,.03,.69,.15,-.63,.62,.54,.49,.06,.45,.71,.59,.31,.34,-.43,.18,-.28,.01,.12,.15,.44,.3,.36,0,-.01,.56,-.05,-.1,-.11,.18,-.11,.36,-.07,.34,-.29,.1,.3,.85,-.08,-.02,-.63,-.36,.46,.42,.61,.59,.1,.02,-.34,.23,.64,-.57,.03,.27,.8,.08,.82,.18,.78,-.18,-.78,.18,.62,.59,.03,.37,-.16,-.06,.02,.53,.37,.67,.21,.33,.15,.04,.42,.7,.67,.56,-.07,-.15,-.44,.57,-.11,.82,.74,-.42,.11,.01,.14,.21,.62,.31,.23,-.54,.77,.73,.05,-.14,-.25,.18,-.05,.04,.05,.1,.22,.68,-.51,.77,.25,.55,.48,.05,-.12,-.23,.43,-.09,-.39,.8,-.02,.16,.11,.03,-.13,.17,.15,-.22,-.09,.22,.77,.49,-.1,.55,.38,-.35,-.45,-.32,.7,-.64,.36,.6,.03,.57,.22,.51,-.16,.1,.02,.36,.4,-.43,-.21,.01,-.38,.52,.47,.18,.6,-.2,-.01,-.16,.28,.71,.07,.05,.09,.52,-.1,.3,-.46,.65,.49,.16,.5,.78,-.04,-.24,.19,.13,.38,.67,.04,.45,-.34,.53,.1,.62,.36,.58,-.2,-.18,.79,.57,.81,.58,.4,.14,-.33,-.43,.21,.76,.23,.73,-.5,.65,.72,-.27,.66,.05,.3,-.34,.82,.4,.73,.3,-.31,.2,-.09,.01,-.2,.59,-.33,.7,.17,-.55,-.36,.07,.6,-.12,.19,.14,.55,0,.65,-.24,.32,-.17,-.15,.18,.6,.37,-.1,.07,-.19,-.13,.34,.15,-.44,.5,.58,.06,.15,-.35,.8,.09,-.42,.61,-.21,-.03,-.42,.56,-.09,-.07,.29,.21,.21,.45,-.12,.79,.63,.03,-.37,.15,.11,-.47,.08,.13,-.02,-.16,-.07,.02,.45,.29,.22,.22,.32,-.17,.11,-.4,.38,.07,.8,.5,.11,.5,.44,.71,-.04,.81,-.33,-.44,.6,.62,.07,-.43,-.15,.48,.67,.3,-.17,.07,-.06,-.05,.42,0,.31,-.01,.16,.02,-.21,-.22,-.25,.69,.39,.03,.1,.02,-.06,.28,-.09,-.35,.45,.72,.63,.07,.54,.74,.28,.36,.47,.5,.68,.62,-.62,.55,-.06,.67,.76,-.17,.25,.25,.59,.09,.11,.1,.61,.05,-.13,.09,.07,.34,.06,.19,.1,.79,.1,.72,.19,.62,.08,-.1,.1,.76,.06,.03,.1,-.54,-.1,-.19,.01,.2,-.66,.8,-.08,.38,.49,.43,.62,.76,.02,-.45,.24,.16,.09,-.17,0,-.06,.59,.52,0,.48,-.02,-.08,.36,-.03,.04,.08,.14,.05,.02,.08,-.09,.04,-.05,-.23,.09,-.1,-.06,-.16,.57,.36,-.17,.27,-.27,.35,-.19,.12,.06,.77,.06,.25,.59,-.03,.43,.64,-.05,.05,-.15,.13,-.05,.16,.57,.09,.62,.56,.13,.28,0,-.03,.54,-.18,0,-.09,.43,0,-.27,-.32,.52,.25,.37,.29,.17,.34,-.19,-.36,.14,.28,.61,-.28,-.16,-.14,.58,.36,.51,-.5,.47,.47,0,.42,.36,.53,.51,.1,.39,.57,.14,.59,.73,.07,-.3,-.03,.06,.44,-.03,.19,-.25,-.41,.72,.09,-.15,.67,-.32,.45,.87,.15,.41,.76,.6,0,-.32,-.07,.31,.55,.39,.28,.2,.59,.1,-.12,.53,.56,-.07,-.31,-.23,-.14,.54,.41,.67,-.27,.38,-.3,.08,-.25,-.01,.04,.47,.22,-.12,.11,.65,.64,-.23,.18,.63,.73,.14,.13,.14,.7,-.09,-.06,.36,.82,.03,.59,.14,.48,-.3,.08,-.12,.42,.73,.07,.42,.02,.29,.03,-.05,.55,.42,-.05,.41,.6,.22,.74,.6,.87,.36,.29,-.06,-.46,.55,.76,.06,.48,.03,.56,.02,.12,-.16,.04,.06,-.32,.1,.61,.49,-.15,.54,.18,-.05,-.19,.14,.72,-.17,-.15,.84,.82,-.31,-.38,.68,-.16,.76,.51,.88,.13,.59,.55,.23,.63,-.02,-.14,-.19,.48,.56,-.15,.77,.57,.15,-.03,.67,.61,.04,.07,.25,.04,-.4,.44,.15,-.42,-.08,.76,.15,.59,.52,.7,-.02,-.13,.01,.49,.76,.6,-.09,.05,-.11,-.19,.22,.51,-.03,.9,-.08,.08,.2,-.03,.05,.64,-.34,.02,.8,-.68,.54,.02,.02,-.15,.59,-.49,-.51,.47,-.1,.78,-.1,.93,.1,.42,-.04,.33,-.36,-.09,-.05,.82,.07,.49,.3,.14,-.08,.56,.13,-.06,.01,.06,.68,.81,.75,-.07,.52,.07,.74,.45,.83,.62,.61,-.06,.21,.09,.33,.42,.09,.62,-.2,.75,.47,-.58,.4,.13,.09,.31,.58,.57,.09,.39,.21,-.21,-.28,.25,.3,.46,.78,.55,-.42,-.1,.66,-.09,.29,.11,-.07,.01,-.07,.1,.68,.31,-.17,-.07,.25,.33,.16,-.03,.74,-.15,-.18,.57,.59,.73,.69,.28,.56,.41,.59,.14,.4,.63,.74,.02,.02,-.24,.13,.74,.53,.25,-.06,-.35,.19,.34,.43,.44,-.2,-.23,-.28,.24,-.31,-.03,-.11,.01,-.04,.15,.23,.16,0,.78,.86,.24,.69,.44,.73,.56,.18,.15,0,.5,-.35,.22,-.17,-.24,.53,.73,.27,.24,.5,-.58,-.13,.66,.55,.24,.23,.04,.46,.17,-.16,.32,.05,.22,.02,-.02,.27,-.35,.13,.4,-.17,-.1,.59,-.14,.12,.9,.4,.71,.69,-.03,-.26,.48,.1,.41,.34,-.15,.74,.06,.21,-.1,-.05,.13,.51,-.38,-.37,.1,.59,.75,.63,.56,.27,-.1,-.05,-.14,.31,.22,-.28,.6,.86,.27,0,.28,.55,.49,-.27,-.32,-.31,.78,-.3,.84,.69,.74,-.01,.32,.68,.12,.58,.17,.72,.64,0,.01,.64,-.03,.7,.5,.33,.16,.39,.08,.01,.17,.63,-.32,.04,.71,.55,-.33,.62,.59,.49,.1,.29,.66,.19,-.23,.56,.08,.12,.7,-.12,.54,.36,.24,.36,.53,.32,-.04,.27,.67,-.07,.12,-.43,.2,.69,.58,.54,.85,-.08,.28,.57,.73,.58,.63,.39,.65,.86,.64,.46,.12,.37,.58,0,.69,.16,.9,.74,.05,.34,.83,.21,.73,.57,.18,-.15,.65,.52,.69,.3,.51,.33,.3,-.1,.61,.6,.62,.81,.06,.44,.43,-.39,.82,.36,-.14,.12,.73,.59,.77,.41,.47,.06,.57,.56,.8,-.19,-.28,.44,.17,.17,.47,.37,.18,.44,-.08,.53,.59,.67,.76,.55,-.14,.05,.5,.46,.55,.51,.01,-.03,.62,.47,.62,.85,.67,.88,.04,.9,-.21,.7,-.07,.4,-.09,0,.13,.48,.55,.19,.7,.01,.66,-.15,.3,.78,.67,.78,.68,.79,.27,.03,.04,.37,.5,-.09,-.22,.79,.67,.77,.14,.59,.24,-.08,.59,.35,.81,.24,.11,.54,.53,.65,.56,.01,.47,.64,.85,.61,-.29,.8,.17,-.26,.89,-.08,.78,.04,.55,.81,-.13,.79,-.12,.17,.2,.4,.22,.26,.42,.15,-.07,.37,.26,-.24,-.02,.63,.61,.29,.08,.77,.22,.27,.77,.79,.6,-.1,-.05,.12,.76,-.06,-.41,-.08,.29,.31,.38,.56,.63,.21,-.22,.58,.66,-.39,.52,-.04,.79,.49,.31,-.25,-.06,.02,-.21,.32,.34,.61,.59,.47,.06,.55,.44,.69,0,.2,-.22,-.01,.72,-.25,.53,.31,.54,.53,.04,.8,.37,.9,-.5,.23,-.05,.46,-.47,-.14,.11,-.54,-.08,-.09,.01,.07,-.13,0,.79,.75,.03,.69,.51,-.28,.52,-.11,-.53,-.63,.01,.71,.57,.72,.47,-.22,.69,.43,.66,.74,.42,.22,.8,.6,.69,.66,.72,.36,-.08,.75,.72,.71,.22,-.32,.07,.2,.68,.19,.71,.01,.64,.53,.78,.53,.53,.54,.77,.04,.77,.04,-.25,.57,.24,-.14,.19,.62,.46,.84,.59,.36,.52,.44,.58,.16,-.08,.13,.07,.04,-.01,.31,-.28,.16,.01,.68,-.05,.43,-.12,-.01,.15,.08,-.21,-.18,.59,.04,.3,.55,.36,.25,.69,-.16,-.27,-.32,.08,.68,-.02,.13,.83,.65,.46,.03,.71,.13,.82,-.13,.6,.32,.58,.61,.01,.38,.3,.1,-.01,-.44,-.23,-.17,.9,.93,.72,.62,-.25,-.13,.7,.64,.28,.09,-.07,-.04,.8,.48,.06,.61,.76,.29,.31,.25,.69,.75,-.4,.04,.69,.65,.73,.07,-.28,.32,.08,-.11,-.06,.52,-.09,.12,.71,.43,.05,.86,.23,-.05,-.08,.88,-.53,.44,.25,-.04,-.18,.06,.57,.19,-.07,-.07,.33,.24,.54,.66,.6,-.3,.5,.51,.64,.8,.68,.14,.09,.53,.73,.31,.06,.03,-.07,.11,.71,.75,-.19,.57,-.04,.39,.48,.08,.41,.02,.2,-.51,-.2,-.03,.1,.76,.56,.53,.59,.57,.05,.62,.28,-.01,.22,.04,.15,.62,.56,.25,-.37,-.64,.51,.47,.15,.72,.35,.73,.5,.08,.69,-.67,.73,.71,.63,.05,.92,.18,.76,.42,.25,.39,.56,.69,.62,.58,.75,.46,-.33,.59,.1,.57,-.17,.58,.75,.74,.63,.75,-.03,.79,.47,.14,-.46,.67,.07,.51,-.31,-.06,.83,.54,.74,.88,-.27,.08,-.16,.09,.66,.28,.51,.51,.82,.03,-.41,.09,-.2,-.25,.01,.53,.11,.05,.61,.07,.17,.79];export{a as rvalData};
