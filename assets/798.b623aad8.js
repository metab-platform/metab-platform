const a=[-.32,.41,.43,-.07,.69,.04,.27,.22,.48,.2,.27,-.13,.02,-.58,.35,.08,.22,.05,-.11,.13,-.12,-.54,.09,.24,.58,.87,-.54,.07,.46,-.46,.6,-.57,.67,.14,-.21,.21,.59,.38,.45,.49,-.01,.89,.36,0,.15,.23,.05,-.24,-.05,.41,.2,.02,.2,.67,.46,.31,.32,.23,.43,.67,.49,.73,.79,.03,.24,-.4,.86,.35,.03,.01,-.06,.47,.53,-.26,.8,-.11,-.12,.48,.18,-.23,-.44,.63,-.07,.92,-.27,-.48,.86,.04,-.69,.48,.26,.11,.39,-.44,-.09,.13,-.67,-.31,-.11,.59,-.06,.77,.51,-.03,.66,.09,.02,.06,.71,.57,-.04,.49,.07,-.39,-.28,.67,-.11,-.38,-.36,.67,.02,-.21,.15,0,.09,.6,.65,-.25,-.33,.68,.12,-.31,-.07,.25,.13,.1,.29,.37,-.42,-.03,.86,.1,.95,.87,.05,-.12,-.03,.11,.76,-.2,.74,.11,.01,.02,.26,.19,.28,-.1,-.26,.34,.06,.66,.07,.37,.41,.47,.37,-.47,0,.75,.03,-.35,.18,.02,.59,-.36,.01,-.26,.46,.68,-.06,.09,.04,.39,.65,.08,-.04,.07,.22,-.26,-.06,.27,.02,.73,.74,.51,.62,.1,-.04,-.49,.34,.66,.71,.03,-.46,.41,.03,.44,.38,.04,.17,.49,-.18,.65,.21,.44,.03,.32,-.37,-.21,.6,.53,.39,.64,.6,.72,.2,-.41,.27,.25,-.04,-.07,.65,.35,.07,.09,.4,.08,.12,.01,.55,.43,.22,.24,.4,.02,.03,.25,.14,-.05,.15,-.12,.49,.23,.81,-.02,.03,.4,.1,.38,.12,.22,.37,.84,.11,.61,-.22,.88,.07,.74,-.22,-.32,.64,.4,.58,.08,-.15,.49,.47,-.06,.38,-.26,.3,-.31,.42,.52,-.26,.64,.12,-.34,-.04,.48,.7,.06,.21,.38,.2,-.39,.11,.23,-.01,.54,-.42,-.1,.02,.59,-.13,.72,.24,.13,.9,-.05,-.15,.04,.09,.22,.13,.27,.37,.2,.94,-.17,.39,.81,.13,.48,.73,-.01,-.05,.5,-.46,.66,.3,.11,-.49,-.08,-.31,.51,-.1,-.54,.66,.33,-.21,.05,.62,.46,.04,.48,.32,.53,.79,.06,.16,.45,-.22,.33,.39,-.13,.48,.42,.63,.15,.41,.02,-.12,-.43,.25,.69,.43,.2,-.02,-.24,.46,-.02,.38,.34,.4,.82,.01,.36,.1,.01,0,.2,-.03,.32,-.19,-.08,.53,.64,.47,.03,.02,-.11,-.12,.56,-.6,-.15,0,.1,-.26,.35,.45,.58,.32,.01,.44,.48,.72,.63,.39,-.36,-.11,.49,.09,-.01,.87,.43,.39,-.19,.11,.61,-.16,-.03,.36,.7,.55,0,.43,-.1,.17,-.07,.65,-.03,.19,.64,-.2,.72,.72,.55,.73,.93,.97,.19,.29,.48,.55,.75,.28,-.51,.33,.56,-.79,.23,-.1,.01,-.37,.7,.24,.48,.59,.62,-.57,.54,-.08,0,-.23,-.18,-.62,.59,.09,.65,.32,.04,.4,.58,.42,.14,.5,-.32,.68,.55,.58,.47,.31,.29,.32,-.16,.34,.24,-.03,-.15,-.04,-.14,.56,.77,.09,-.04,.34,.13,.5,.04,.49,.52,.89,-.08,.11,.45,.54,.5,.79,.27,.95,.21,.3,-.23,.11,.29,.52,.78,-.16,.54,-.04,-.06,.52,-.02,.13,.25,.1,.63,.35,.08,-.04,.18,.05,.12,.25,.17,-.04,-.01,-.08,.32,-.06,-.15,-.22,-.09,.17,-.15,.53,.42,-.26,.72,.55,.31,.72,-.08,-.51,.2,-.25,.02,.45,-.29,.55,.17,.06,-.13,-.05,-.08,.18,-.15,.42,.42,.19,-.03,.73,.55,-.12,-.57,.4,.2,-.25,.13,.81,.37,.51,.52,.57,.75,-.17,.56,-.06,.01,-.06,.59,.19,-.67,.47,.51,.47,.09,.37,.79,.52,.28,.4,-.49,.31,-.3,.09,.34,.07,.51,-.01,.26,-.09,0,.57,.02,-.01,.05,.01,.03,.15,-.1,.23,-.36,.49,.3,.78,-.03,-.08,-.43,-.37,.42,.13,.41,.57,.24,0,-.45,.21,.76,-.58,-.03,.08,.84,.02,.84,-.04,.49,-.14,-.75,.29,.64,.58,0,.28,-.09,-.04,.09,.56,.39,.75,.26,.2,.09,.11,.33,.85,.85,.56,-.05,-.16,-.46,.44,-.02,.75,.76,-.37,.15,.04,.02,.41,.66,.2,.29,-.43,.91,.75,-.07,-.07,-.15,.09,-.08,0,-.09,.16,.16,.49,-.48,.91,.31,.57,.57,.01,.02,-.16,.18,-.1,-.49,.74,.15,.18,0,-.14,-.05,.32,.04,-.15,-.08,.26,.64,.53,-.11,.68,.31,-.35,-.58,-.28,.48,-.54,.26,.64,-.13,.56,.28,.62,-.13,.02,-.03,.3,.25,-.62,-.19,.04,-.38,.6,.5,.22,.66,-.19,-.18,-.31,.54,.58,-.01,-.13,.21,.51,-.16,.09,-.44,.63,.15,.3,.43,.75,-.12,-.06,.25,.08,.26,.68,.08,.41,-.32,.22,.2,.71,.42,.47,-.25,-.15,.9,.32,.63,.59,.42,-.12,-.42,-.46,.21,.45,.27,.8,-.43,.55,1,-.07,.39,.24,.31,-.29,.71,.43,.69,.37,-.33,.33,-.05,0,-.09,.64,-.43,.7,.34,-.48,-.1,.16,.7,-.02,.42,.15,.54,.04,.69,-.18,.16,-.03,-.13,.11,.7,.19,-.18,-.01,-.22,-.16,.13,.16,-.48,.39,.67,.06,.26,-.48,.58,.12,-.38,.68,-.13,.05,-.39,.64,-.12,-.04,.24,.29,.26,.33,-.27,.75,.72,-.14,-.33,.05,.17,-.43,.04,.5,.14,.01,.06,.16,.4,.14,.28,.39,.11,-.1,.12,-.41,.33,.14,.86,.55,.14,.31,.48,.72,.16,.87,-.44,-.47,.53,.71,-.01,-.43,-.15,.38,.75,.07,-.14,-.02,.03,-.04,.55,.25,.32,0,.22,-.02,-.2,-.32,-.04,.66,.41,-.1,.19,.15,-.05,.13,-.08,-.21,.54,.72,.59,.01,.6,.64,.33,.25,.38,.51,.83,.83,-.58,.51,-.05,.53,.81,-.09,-.01,.14,.81,.3,.05,.23,.52,-.09,.22,.2,-.05,.31,-.18,.31,.41,.85,.01,.86,-.13,.7,-.05,.21,-.14,.68,.22,.12,-.14,-.51,-.07,-.1,-.12,.18,-.55,.81,-.1,.09,.22,.4,.5,.76,.15,-.43,.35,.04,.18,-.01,.07,-.02,.3,.63,.05,.41,.08,-.09,.35,.03,.02,.15,.02,.04,.04,-.01,-.01,.13,-.04,-.11,.14,-.12,-.06,-.04,.58,.2,-.13,.01,-.14,.42,-.17,.02,.1,.89,-.04,.44,.52,.09,.36,.63,.04,.11,0,.17,-.08,.09,.44,.04,.63,.68,.09,.38,.01,.06,.58,-.25,.1,-.08,.39,.03,-.19,-.25,.42,.13,.42,.21,-.07,.44,-.31,-.31,.21,.1,.7,-.22,-.06,-.09,.68,.41,.33,-.44,.47,.38,0,.41,.45,.45,.45,-.13,.55,.48,.12,.65,.78,.08,-.49,.11,.02,.43,.1,.23,-.12,-.51,.86,.2,.02,.65,-.47,.19,.79,.15,.37,.73,.68,-.05,-.33,.05,.54,.5,.54,.46,-.01,.51,-.08,-.13,.49,.53,-.03,-.22,-.25,-.1,.65,.34,.76,-.33,.43,-.28,.03,-.38,.09,-.06,.29,.29,-.15,.19,.68,.66,-.13,.02,.66,.74,.15,.14,-.07,.82,-.26,-.04,.35,.86,.05,.7,.08,.34,.02,.1,-.26,.44,.5,.05,.32,.04,.26,.09,.01,.55,.38,-.05,.41,.6,.2,.72,.63,.56,.65,.06,-.04,-.56,.44,.61,.15,.57,.17,.65,.1,.19,-.12,-.03,.03,-.26,.1,.69,.59,.3,.31,.34,-.18,-.35,-.02,.68,-.09,-.24,.63,.71,-.39,-.24,.52,-.14,.66,.39,.78,-.06,.37,.39,.21,.5,.04,-.27,.05,.45,.29,.08,.91,.54,.1,-.06,.89,.31,.06,.06,.33,.03,-.26,.38,.23,-.31,-.17,.63,.14,.6,.5,.61,.05,-.03,.03,.6,.85,.46,.01,.08,-.18,-.11,.26,.73,.13,.77,-.13,.1,.28,.04,.29,.59,-.29,.16,.57,-.67,.56,.28,.07,-.12,.29,-.54,-.46,.47,-.03,.59,.02,.72,.06,.13,-.01,.37,-.35,.16,-.1,.8,-.01,.35,.3,.34,.04,.56,.05,-.05,.13,-.16,.87,.89,.67,-.08,.33,-.16,.52,.64,.6,.71,.56,.3,.16,.1,.32,.44,.12,.72,-.28,.39,.57,-.56,.37,.14,.04,.34,.43,.65,.1,.42,.14,-.09,-.14,.16,.11,.36,.87,.3,-.28,.05,.65,-.16,.64,.34,.21,-.02,-.05,-.04,.72,.41,-.16,-.03,.44,-.11,.03,.02,.67,-.09,-.06,.42,.25,.39,.49,.23,.34,.38,.53,-.07,.21,.31,.61,-.05,-.16,-.15,.05,.66,.45,-.18,-.49,-.58,-.11,.09,.33,.4,-.36,-.24,-.26,.31,-.35,-.04,-.22,-.1,-.1,-.06,0,.1,.07,.65,.66,.17,.29,.54,.62,.68,-.11,.23,.28,.6,-.24,.29,-.05,-.1,.45,.51,.34,.35,.52,-.34,-.03,.63,.65,.23,.18,.11,.57,.07,-.14,.2,-.02,.3,.15,-.09,.34,-.06,.2,.47,-.01,-.14,.69,-.17,.22,.75,.48,.84,.87,.08,-.25,.45,.03,.5,.29,-.01,.88,.03,.04,-.03,-.12,.17,.08,-.34,.01,.05,.66,.84,.71,.55,.3,-.25,-.03,-.18,.2,.17,-.37,.46,.66,.35,.09,-.04,.11,.42,-.14,-.34,-.42,.58,-.41,.7,.29,.61,-.06,.19,.18,-.03,.47,.04,.48,.55,-.31,.01,.55,-.09,.52,.36,.19,.08,.75,.13,.01,.11,.4,-.02,.13,.78,.49,-.19,.34,.7,.5,.19,.43,.59,.37,.16,.44,-.04,.18,.85,-.08,.47,.3,.31,.41,.54,.22,-.13,.34,.81,0,.22,-.43,.17,.61,.32,.51,.56,-.08,.34,.52,.7,.57,.66,.37,.44,.73,.62,.62,.02,.36,.75,-.18,.86,.34,.83,.55,0,.4,.83,.2,.65,.78,.07,-.3,.47,.77,.52,.28,.64,.37,.34,-.02,.64,.44,.63,.82,.1,.44,.19,-.36,.58,.38,.01,-.06,.53,.54,.56,.44,.34,.51,.48,.66,.86,-.14,-.19,.3,.45,.41,.48,.3,.14,.57,.09,.59,.54,.29,.56,.49,-.17,.09,.31,.44,.58,.45,-.1,.28,.8,.26,.61,.84,.31,.8,.08,.79,-.17,.55,.18,.13,.01,.06,.06,.71,.39,.13,.48,.1,.45,-.03,.2,.57,.64,.79,.66,.93,.21,.33,.11,.32,.24,.02,-.06,.89,.51,.85,.16,.44,.18,-.05,.34,.24,.72,.1,.01,.62,.58,.63,.65,.12,.37,.4,.61,.44,-.3,.81,.3,-.07,.82,-.15,.57,-.06,.41,.62,-.07,.86,-.08,.27,.25,.32,.31,.38,.37,.14,-.03,.27,.08,-.13,.04,.76,.58,.32,.02,.79,.21,.39,.74,.8,.72,-.02,0,.27,.88,-.18,-.32,-.13,.32,.29,.22,.59,.42,.15,-.06,.68,.4,-.25,.6,-.13,.76,.43,.36,-.23,-.35,.04,-.08,.09,.33,.36,.76,.28,.1,.58,.36,.74,.05,.18,-.09,.1,.52,-.24,.4,.52,.56,.57,-.05,.57,.26,.79,-.4,.16,-.01,.64,-.42,-.07,.34,-.5,-.13,-.12,-.06,-.02,-.17,.06,.56,.49,-.07,.74,.52,.12,.38,-.14,-.49,-.44,.09,.69,.59,.8,.44,.07,.41,.37,.52,.58,.78,.34,.76,.63,.57,.69,.5,.53,-.36,.55,.79,.61,.29,-.35,.1,.14,.86,-.03,.58,-.08,.58,.58,.86,.36,.55,.64,.61,-.02,.52,.04,-.26,.44,.18,0,.21,.53,.54,.69,.41,.39,.33,.41,.43,.09,-.01,.11,.1,.07,0,.31,-.05,.03,-.18,.73,-.08,.69,-.3,.16,.17,.05,-.22,-.13,.67,-.14,.24,.36,.42,.51,.93,-.24,-.18,-.35,.03,.73,-.12,.2,.61,.58,.04,-.23,.78,.15,.84,-.04,.71,.06,.56,.51,-.06,.23,.26,.19,-.05,-.52,-.18,-.09,.69,.69,.7,.29,-.2,-.03,.91,.49,.61,.16,.01,-.16,.86,.49,.1,.43,.87,.4,.5,.05,.66,.86,-.3,.23,.31,.54,.5,.11,-.32,.43,.25,.05,-.14,.58,-.24,-.18,.86,.22,-.06,.71,.15,.01,-.12,.76,-.54,.4,.28,-.04,-.05,-.09,.29,.2,-.06,-.13,.4,-.05,.61,.72,.33,-.25,.31,.48,.75,.88,.78,.1,.16,.56,.9,.21,-.11,-.04,-.01,.09,.77,.85,0,.67,-.24,0,.5,.13,.48,-.01,.04,-.39,-.15,.06,.14,.64,.57,.77,.55,.6,0,.58,-.07,.02,-.21,.02,-.22,.68,.67,.45,-.27,-.74,.39,.43,.19,.53,.41,.84,.44,.05,.66,-.73,.87,.74,.71,.1,.77,.01,.68,.57,.35,.7,.33,.87,.21,.68,.89,.47,-.18,.69,.07,.55,-.16,.71,.87,.81,.73,.79,.01,.78,.29,.24,-.49,.76,.06,.53,-.29,-.03,.75,.43,.79,.75,-.28,0,-.26,.2,.58,.38,.46,.47,.8,.09,-.37,.02,-.36,-.14,.14,.52,0,.14,.69,.13,.21,.59];export{a as rvalData};
