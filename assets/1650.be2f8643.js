const a=[-.34,.4,.5,-.03,.69,.16,.3,.16,.5,.04,.32,-.07,.02,-.62,.44,-.02,.19,.07,-.16,.07,-.06,-.36,.07,.29,.6,.91,-.36,.18,.59,-.31,.54,-.35,.71,.05,-.04,.25,.61,.38,.39,.59,0,.87,.47,-.06,.11,.23,0,-.11,.04,.38,.13,.05,.16,.74,.53,.32,.41,.2,.43,.67,.43,.74,.84,-.02,.32,-.35,.87,.38,.03,-.04,-.04,.4,.45,-.28,.77,-.09,-.1,.38,.23,-.15,-.43,.65,-.11,.93,-.23,-.3,.88,.04,-.69,.49,.22,.13,.43,-.53,-.04,.23,-.72,-.3,-.05,.53,-.1,.81,.59,-.11,.73,.13,.1,.16,.82,.62,-.04,.38,.13,-.5,-.11,.71,-.06,-.32,-.18,.66,.01,-.19,.11,-.02,.16,.64,.62,-.14,-.39,.68,.13,-.24,-.1,.16,.16,.18,.23,.38,-.35,-.1,.86,.05,.91,.88,.05,-.11,0,.16,.82,-.18,.79,-.02,.06,-.04,.21,.19,.25,-.08,-.31,.42,.04,.74,.03,.29,.41,.34,.35,-.41,.13,.8,.04,-.3,.08,-.13,.73,-.22,.02,-.09,.35,.71,0,.15,.01,.44,.69,.1,0,.03,.08,-.3,-.13,.19,.07,.77,.74,.61,.72,.15,0,-.34,.21,.63,.7,.03,-.44,.52,.07,.47,.42,.07,.07,.5,-.21,.62,.18,.39,.04,.24,-.27,-.15,.75,.59,.42,.73,.64,.72,.13,-.33,.34,.28,-.05,-.07,.63,.45,.09,.1,.4,.06,.06,-.02,.34,.47,.16,.14,.35,-.13,.08,.17,.16,-.1,.07,-.03,.54,.26,.82,.05,.08,.36,.07,.44,.11,.17,.39,.84,.14,.68,-.21,.9,-.01,.67,-.09,-.47,.63,.47,.6,.07,-.03,.38,.54,.04,.31,-.2,.28,-.36,.54,.64,-.19,.62,.19,-.12,-.03,.43,.79,-.11,.25,.48,.11,-.34,.05,.34,-.03,.6,-.3,-.16,.02,.57,.12,.67,.26,.06,.79,-.06,-.14,.03,.23,.33,.19,.21,.45,.18,.93,-.11,.42,.87,.11,.57,.86,-.05,.11,.61,-.49,.69,.41,.11,-.34,-.05,-.3,.61,-.17,-.29,.6,.41,-.13,-.01,.64,.56,.03,.44,.41,.47,.86,-.05,.16,.55,-.4,.32,.37,-.1,.55,.45,.56,.12,.51,.14,-.05,-.44,.26,.69,.31,.16,.17,-.24,.46,.12,.25,.33,.28,.89,-.07,.35,.12,.1,.02,.13,0,.45,-.22,-.01,.67,.73,.55,0,.02,-.11,-.16,.61,-.49,-.17,-.05,.16,-.2,.44,.51,.66,.25,.05,.44,.55,.79,.72,.47,-.47,-.16,.57,.16,-.01,.87,.62,.32,-.2,.09,.67,-.12,-.04,.34,.74,.62,.02,.42,-.18,.12,.07,.63,0,.15,.64,-.31,.85,.77,.59,.8,.85,.88,.11,.16,.55,.61,.85,.19,-.52,.28,.55,-.79,.34,-.12,.08,-.16,.7,.23,.38,.63,.75,-.58,.43,-.03,.18,-.26,-.22,-.66,.67,.19,.65,.36,-.02,.37,.74,.47,.05,.58,-.22,.8,.55,.63,.48,.12,.39,.43,-.18,.44,.36,.05,-.1,.08,-.16,.61,.8,.07,-.12,.35,.08,.48,.02,.55,.66,.83,-.06,.19,.64,.71,.34,.8,.29,.87,.21,.14,-.16,0,.34,.42,.85,-.14,.61,.11,-.08,.52,-.01,.22,.19,.08,.71,.36,.09,-.08,.09,.06,.13,.36,.34,.01,.08,-.04,.29,-.06,.02,-.17,-.1,.21,.05,.55,.44,-.2,.71,.62,.4,.64,-.1,-.47,.09,-.32,-.01,.46,-.19,.56,.1,-.05,-.14,-.06,-.11,.07,-.2,.49,.5,.08,-.16,.73,.6,-.15,-.41,.3,.29,-.21,.11,.86,.48,.59,.53,.62,.71,-.16,.59,-.14,.04,.02,.62,.12,-.66,.6,.56,.46,.06,.36,.76,.56,.24,.43,-.34,.26,-.15,.05,.38,.13,.57,.1,.18,-.07,-.03,.64,-.13,-.07,.04,.07,-.01,.36,-.12,.34,-.34,.3,.24,.84,-.15,-.05,-.49,-.33,.31,.29,.43,.74,.13,-.05,-.26,.2,.78,-.45,.1,.12,.85,.03,.89,.13,.57,-.11,-.76,.31,.71,.74,.01,.28,-.1,-.07,-.01,.61,.5,.75,.22,.18,.07,.08,.46,.84,.8,.66,-.03,-.17,-.31,.49,-.11,.75,.76,-.36,.19,.02,.08,.46,.8,.18,.26,-.4,.92,.87,-.07,-.11,-.13,.16,-.09,-.05,-.01,.16,.12,.54,-.51,.91,.24,.6,.54,.05,0,-.21,.42,-.08,-.27,.78,.04,.14,.05,-.14,-.15,.37,.06,-.17,-.06,.22,.76,.57,-.11,.71,.44,-.32,-.44,-.28,.56,-.54,.23,.74,-.03,.58,.23,.63,-.13,.16,-.02,.45,.37,-.38,-.02,-.02,-.39,.64,.55,.22,.56,-.19,.07,-.21,.54,.58,.05,.12,.24,.65,-.15,.16,-.38,.79,.2,.33,.49,.79,-.07,-.05,.28,.07,.29,.68,.07,.39,-.36,.28,.1,.73,.35,.57,-.08,-.15,.88,.43,.72,.62,.29,.1,-.28,-.32,.31,.61,.29,.88,-.4,.63,.89,-.08,.48,.23,.34,-.33,.75,.42,.77,.3,-.32,.27,0,.03,-.08,.73,-.3,.73,.24,-.56,-.06,.13,.76,-.02,.4,.08,.59,-.04,.69,-.11,.19,-.05,-.12,.15,.69,.24,-.12,-.01,-.1,-.16,.17,.17,-.29,.54,.7,.03,.19,-.36,.61,.22,-.24,.62,-.08,-.01,-.27,.69,-.13,.01,.37,.24,.17,.37,-.02,.8,.74,.07,-.29,.11,.09,-.4,.12,.41,.06,-.02,.02,.09,.39,.15,.24,.49,.19,-.11,.11,-.26,.4,.13,.85,.53,.06,.32,.58,.75,.01,.87,-.44,-.47,.55,.73,-.02,-.43,-.21,.42,.71,.3,-.15,.07,-.03,-.02,.64,.2,.31,-.02,.23,-.07,-.02,-.25,-.19,.67,.45,-.05,.19,.1,-.1,.13,-.05,-.21,.51,.75,.62,-.02,.64,.67,.26,.17,.44,.57,.84,.77,-.63,.4,-.11,.52,.8,-.12,.23,.18,.73,.23,.17,.13,.56,-.06,.14,.14,0,.43,.05,.3,.24,.85,.15,.85,.07,.83,.03,.02,-.08,.73,.11,.01,-.06,-.52,-.07,-.09,-.06,.26,-.59,.92,-.13,.19,.37,.28,.65,.8,.11,-.37,.27,.09,.15,-.14,.08,.01,.36,.57,-.07,.39,-.07,-.16,.35,-.01,.04,.13,.12,.07,.05,-.06,-.1,.13,-.05,-.12,.13,-.14,-.07,-.08,.59,.36,-.06,.17,-.22,.36,-.21,.06,.11,.86,.08,.39,.57,.07,.4,.69,-.07,.11,-.03,.14,-.04,.18,.55,.07,.59,.68,.01,.39,0,.09,.64,-.12,.04,-.08,.37,.03,-.2,-.25,.47,.16,.47,.22,.06,.45,-.27,-.29,.22,.17,.82,-.13,-.03,-.12,.67,.21,.48,-.38,.49,.41,-.04,.42,.35,.47,.51,.03,.61,.51,.16,.64,.78,.08,-.22,.03,.03,.37,.12,.12,-.12,-.33,.88,.29,-.05,.73,-.27,.29,.85,.08,.51,.85,.8,-.06,-.26,-.06,.47,.61,.6,.41,.05,.67,.03,-.1,.4,.43,.02,-.15,-.12,-.12,.64,.34,.79,-.3,.47,-.29,.01,-.29,.1,-.06,.35,.21,-.03,.11,.78,.71,-.16,.13,.66,.88,.17,.14,-.04,.87,-.13,-.1,.25,.86,.05,.75,.17,.47,-.19,.08,-.19,.35,.66,.06,.35,.04,.28,.06,0,.52,.31,-.03,.3,.75,.21,.78,.74,.65,.56,.05,-.03,-.59,.55,.68,.14,.58,.16,.63,.02,.11,-.04,.01,-.06,-.32,.08,.73,.61,.22,.42,.43,-.19,-.34,.19,.75,-.05,-.25,.73,.76,-.38,-.2,.65,-.15,.72,.54,.84,.05,.46,.44,.13,.59,.05,-.3,-.1,.51,.38,.02,.94,.5,.09,-.03,.8,.41,.05,.08,.27,-.01,-.18,.42,.15,-.3,-.24,.73,.16,.6,.52,.63,.03,-.07,.03,.6,.87,.57,-.01,.08,-.2,-.15,.34,.8,.14,.88,-.12,.1,.2,.03,.23,.65,-.27,.1,.72,-.65,.66,.19,.04,-.07,.35,-.42,-.4,.4,-.02,.68,-.01,.82,.17,.26,-.12,.58,-.33,.06,-.08,.84,.07,.52,.31,.34,0,.62,.05,-.04,.08,-.26,.85,.86,.67,-.1,.35,.08,.61,.55,.58,.83,.63,.16,.25,.16,.39,.3,.14,.71,-.25,.43,.62,-.62,.47,.27,.16,.25,.49,.66,.04,.43,.28,-.14,-.32,.17,.13,.43,.85,.46,-.21,0,.72,-.16,.62,.37,.17,-.04,-.02,-.03,.76,.33,-.2,-.03,.46,.09,.07,-.02,.74,-.09,-.09,.42,.38,.54,.63,.25,.48,.33,.53,.07,.3,.51,.71,-.03,0,-.17,.19,.72,.48,-.02,-.27,-.49,.1,.21,.35,.46,-.21,-.17,-.23,.33,-.33,-.05,-.18,-.02,.01,.02,.01,.15,-.03,.69,.77,.23,.54,.58,.64,.67,.05,.15,.22,.61,-.29,.24,-.1,-.14,.53,.69,.37,.41,.43,-.48,-.04,.69,.68,.25,.33,.07,.57,.09,-.14,.26,-.03,.5,.06,-.08,.29,-.21,.15,.53,-.09,-.12,.72,-.18,.19,.81,.39,.78,.89,.04,-.21,.38,.05,.43,.4,-.08,.87,.05,.15,-.08,-.11,.16,.34,-.38,-.09,.08,.64,.82,.8,.74,.24,-.08,-.02,-.14,.21,.26,-.24,.57,.77,.37,0,.06,.37,.43,-.17,-.31,-.24,.66,-.39,.81,.54,.65,-.03,.35,.37,-.05,.56,.1,.65,.6,-.14,.04,.61,-.06,.56,.49,.17,.09,.65,.05,.04,.08,.45,.04,.11,.74,.5,-.17,.48,.74,.55,.11,.46,.56,.39,.02,.42,-.02,.19,.8,-.11,.48,.43,.24,.37,.49,.22,-.08,.35,.8,0,.2,-.31,.2,.68,.36,.59,.63,-.15,.29,.68,.63,.63,.74,.34,.51,.75,.67,.66,.04,.3,.7,-.17,.83,.36,.89,.58,-.01,.34,.91,.25,.75,.67,.07,-.22,.5,.64,.67,.21,.57,.22,.39,0,.73,.51,.66,.9,.09,.52,.2,-.32,.64,.41,-.16,-.05,.62,.6,.55,.34,.38,.34,.55,.62,.84,.07,-.16,.27,.31,.31,.6,.2,.13,.61,.07,.59,.66,.41,.67,.56,-.21,.2,.39,.44,.54,.52,-.09,.17,.74,.43,.56,.86,.42,.87,.08,.85,-.21,.63,.07,.15,.01,.04,.06,.72,.47,.21,.63,.02,.49,-.05,.09,.62,.78,.86,.8,.95,.26,.22,-.04,.26,.38,-.1,-.09,1,.49,.81,.24,.45,.21,-.07,.36,.14,.8,.12,.03,.63,.62,.68,.69,-.05,.45,.51,.66,.45,-.3,.86,.29,-.15,.88,-.15,.62,-.06,.49,.73,-.06,.87,-.09,.15,.41,.24,.29,.33,.37,.08,-.03,.22,.28,-.16,-.04,.77,.63,.36,.01,.83,.3,.41,.73,.93,.78,-.01,.01,.31,.96,-.15,-.4,-.09,.16,.18,.14,.65,.49,.17,-.07,.62,.39,-.21,.66,.04,.77,.45,.29,-.23,-.23,-.06,-.14,.3,.38,.47,.58,.39,.07,.46,.28,.85,.05,.19,-.15,-.02,.6,-.23,.49,.52,.65,.63,.01,.57,.4,.86,-.32,.14,-.05,.71,-.41,-.14,.26,-.55,-.09,-.22,.02,0,-.17,.03,.66,.61,-.04,.71,.59,0,.44,-.13,-.38,-.46,0,.76,.65,.82,.44,-.06,.59,.4,.65,.59,.68,.31,.78,.68,.68,.55,.51,.47,-.23,.58,.8,.63,.23,-.25,.2,.27,.83,.21,.63,.02,.7,.65,.8,.45,.6,.67,.67,-.06,.65,.04,-.22,.54,.24,-.1,.23,.73,.59,.8,.58,.33,.48,.47,.5,.08,-.04,.06,.05,.05,0,.36,-.22,.1,-.06,.85,-.08,.6,-.2,.02,.26,.03,-.18,-.1,.66,-.09,.27,.52,.33,.55,.86,-.2,-.31,-.36,-.01,.8,-.06,.07,.71,.66,.23,-.13,.74,.24,.94,-.01,.71,.12,.61,.54,-.09,.29,.31,.11,-.07,-.53,-.22,-.12,.8,.81,.69,.44,-.21,.02,.86,.53,.52,.14,-.09,0,.94,.53,.01,.54,.86,.46,.42,.25,.7,.83,-.25,.11,.42,.49,.62,.06,-.25,.31,.22,-.06,-.13,.62,-.25,-.09,.85,.33,-.03,.77,.18,-.01,-.14,.81,-.5,.46,.23,-.04,-.15,-.01,.46,.25,-.05,-.03,.34,-.05,.63,.77,.4,-.18,.4,.54,.76,.89,.89,.06,.12,.52,.87,.27,.02,-.07,-.08,.1,.75,.88,-.07,.66,-.03,.23,.59,.22,.43,-.05,.12,-.43,-.13,.14,.04,.69,.63,.65,.64,.51,-.01,.57,.1,.11,-.05,.07,-.07,.77,.68,.43,-.38,-.73,.51,.57,.33,.59,.38,.86,.51,.09,.8,-.72,.84,.77,.75,.13,.79,.06,.75,.46,.3,.63,.41,.89,.28,.69,.88,.5,-.14,.69,.19,.54,-.16,.71,.86,.81,.73,.78,-.02,.8,.44,.34,-.5,.74,.09,.61,-.26,-.05,.8,.54,.76,.79,-.24,0,-.08,.06,.64,.37,.59,.5,.88,.14,-.3,.08,-.21,-.1,.05,.62,.15,.23,.77,.13,.14,.57];export{a as rvalData};
