const a=[-.35,.4,.49,-.04,.68,.17,.33,.13,.55,-.02,.41,-.08,.01,-.59,.51,-.01,.22,.05,-.11,.11,-.05,-.32,.07,.4,.69,.92,-.3,.07,.57,-.24,.59,-.29,.69,.02,.04,.23,.61,.47,.41,.52,.04,.89,.4,-.07,.05,.29,.09,0,.15,.28,.19,0,.13,.75,.42,.42,.49,.14,.35,.74,.39,.72,.81,-.04,.42,-.31,.88,.48,.04,-.07,-.07,.39,.43,-.27,.79,-.07,-.06,.34,.23,-.03,-.39,.73,-.06,.95,-.19,-.23,.95,.11,-.69,.54,.17,.13,.41,-.63,-.02,.24,-.72,-.31,-.02,.49,-.11,.81,.56,-.11,.67,.16,.08,.21,.85,.59,-.02,.32,.1,-.5,-.1,.73,.04,-.28,-.07,.75,-.02,-.16,.1,-.01,.02,.58,.65,-.07,-.36,.7,.07,-.28,-.05,.05,.17,.19,.12,.36,-.31,-.1,.83,.03,.87,.94,.02,-.16,0,.18,.85,-.19,.8,.01,.04,.01,.15,.14,.26,-.1,-.27,.51,-.12,.67,0,.28,.41,.3,.39,-.34,.12,.85,.02,-.24,.02,-.18,.65,-.15,.06,-.04,.29,.74,.04,.15,-.06,.4,.62,.09,-.02,-.03,-.02,-.27,-.1,.18,.07,.75,.71,.61,.67,.15,-.01,-.29,.32,.69,.72,.02,-.41,.46,-.04,.36,.37,.03,.02,.61,-.21,.71,.13,.38,.05,.2,-.2,-.12,.7,.55,.44,.75,.63,.73,.05,-.27,.27,.12,-.06,-.09,.73,.42,.08,.07,.49,.12,.05,.03,.28,.58,.14,.05,.33,-.11,.1,.12,.16,-.1,0,-.03,.44,.3,.79,.05,.07,.45,.01,.38,.1,.12,.45,.81,.16,.63,-.17,.9,.04,.71,-.1,-.43,.65,.41,.59,.05,.03,.32,.56,.14,.18,-.15,.35,-.37,.46,.63,-.11,.66,.1,-.06,-.06,.35,.78,-.09,.25,.42,.19,-.32,.03,.28,-.01,.58,-.24,-.16,.03,.61,.14,.62,.25,.15,.83,-.07,-.07,.01,.22,.28,.09,.16,.39,.12,.93,-.1,.49,.88,-.05,.5,.83,-.05,.08,.53,-.5,.68,.43,.09,-.35,-.03,-.22,.61,-.17,-.24,.56,.37,-.13,.03,.66,.53,.03,.34,.34,.4,.82,-.17,.17,.49,-.35,.39,.3,-.11,.54,.42,.65,.1,.43,.19,-.03,-.45,.16,.7,.27,.14,.23,-.27,.49,.15,.21,.3,.32,.88,-.05,.26,.13,.09,.06,.1,-.02,.41,-.23,-.04,.66,.72,.52,.02,.01,-.18,-.19,.59,-.43,-.16,-.05,.03,-.16,.43,.48,.68,.14,.07,.53,.51,.76,.73,.42,-.42,-.15,.55,.09,-.03,.84,.6,.19,-.13,.07,.69,-.12,-.04,.43,.75,.61,-.01,.37,-.27,.1,.09,.72,0,.03,.65,-.29,.81,.76,.56,.73,.89,.87,.16,.07,.52,.6,.82,.24,-.49,.34,.46,-.8,.32,-.05,.1,-.04,.71,.21,.45,.61,.7,-.58,.37,-.13,.21,-.29,-.17,-.66,.69,.21,.66,.33,-.04,.3,.75,.45,.09,.57,-.17,.72,.62,.59,.49,.02,.38,.31,-.28,.45,.3,.07,-.09,.12,-.28,.55,.82,-.08,-.09,.41,.02,.41,.01,.55,.66,.84,-.1,.18,.68,.65,.28,.78,.29,.85,.23,.05,-.05,-.11,.27,.36,.85,-.15,.58,.13,-.05,.54,-.03,.14,.13,.05,.68,.26,-.06,-.06,-.03,.03,.06,.31,.34,-.01,.07,-.02,.23,-.04,.07,-.12,-.12,.13,.09,.51,.39,-.14,.73,.59,.34,.6,-.08,-.45,.01,-.29,-.03,.4,-.16,.53,.1,-.05,-.15,-.1,-.1,-.03,-.17,.43,.47,.12,-.24,.73,.59,-.12,-.42,.2,.31,-.14,.1,.8,.47,.51,.64,.61,.71,-.15,.6,-.1,.09,0,.59,.1,-.7,.6,.53,.42,.02,.44,.78,.53,.18,.35,-.28,.16,-.03,.04,.33,.13,.57,.07,.16,-.07,-.06,.62,-.11,-.09,0,.01,-.03,.32,-.12,.31,-.32,.3,.23,.79,-.15,-.05,-.46,-.37,.25,.3,.39,.75,.03,-.07,-.16,.14,.83,-.4,0,.15,.84,0,.87,.13,.5,-.09,-.78,.17,.71,.75,.05,.36,-.11,-.09,.08,.59,.45,.76,.16,.24,.08,.1,.43,.91,.83,.67,-.03,-.16,-.25,.44,-.22,.75,.78,-.37,.18,-.01,.08,.44,.74,.18,.24,-.42,.93,.87,-.07,-.1,-.17,.13,-.07,-.09,0,.09,.12,.49,-.48,.91,.23,.56,.52,.05,-.04,-.16,.38,-.1,-.23,.82,-.02,.05,.03,-.18,-.13,.42,.06,-.2,-.05,.2,.71,.57,-.1,.78,.44,-.34,-.35,-.29,.51,-.52,.19,.73,-.06,.53,.11,.65,-.1,.08,-.01,.54,.36,-.3,.04,.01,-.37,.65,.56,.2,.49,-.21,.14,-.19,.48,.56,.04,.14,.3,.63,-.13,.18,-.34,.8,.18,.39,.51,.75,-.08,0,.29,.02,.25,.67,.04,.31,-.31,.2,.09,.72,.31,.54,-.05,-.19,.85,.38,.65,.55,.25,.13,-.21,-.23,.29,.54,.39,.89,-.33,.61,.88,-.03,.42,.27,.3,-.36,.73,.46,.79,.36,-.33,.21,-.03,.06,-.12,.71,-.19,.74,.2,-.56,.06,.14,.74,-.02,.45,.07,.62,.04,.72,-.15,.17,-.02,-.11,.15,.71,.16,-.13,-.04,-.05,-.16,.16,.12,-.25,.48,.77,.07,.13,-.26,.59,.25,-.21,.58,-.08,.04,-.19,.67,-.1,0,.35,.18,.13,.34,.07,.77,.75,.1,-.34,.11,0,-.37,.12,.36,.01,0,.05,.07,.31,.15,.17,.45,.15,-.07,.09,-.24,.41,.13,.86,.55,.03,.28,.64,.71,.02,.88,-.44,-.46,.48,.7,-.07,-.45,-.23,.39,.76,.33,-.15,.05,.01,-.04,.66,.19,.18,.01,.08,-.1,.04,-.14,-.27,.63,.45,-.07,.09,.02,-.1,.14,-.02,-.32,.6,.72,.6,-.05,.63,.64,.21,.15,.38,.59,.85,.79,-.63,.35,-.08,.52,.8,-.09,.23,.15,.78,.22,.07,.12,.57,-.03,.16,.13,.04,.45,.09,.17,.31,.85,.07,.86,.12,.86,.08,.02,-.08,.7,.08,.04,-.13,-.5,-.08,-.11,-.05,.38,-.58,.9,-.05,.13,.24,.23,.67,.79,.01,-.31,.24,.07,.12,-.22,.04,-.02,.28,.52,-.09,.28,-.07,-.16,.29,.01,-.02,.12,.12,.01,.04,-.05,-.11,.12,.05,-.16,.1,-.15,-.07,-.03,.53,.32,0,.18,-.21,.38,-.22,.04,.11,.86,-.01,.36,.47,.03,.39,.66,-.06,.09,-.04,.02,-.07,.2,.49,.08,.57,.73,.05,.4,.01,.03,.64,-.02,-.01,-.08,.29,.03,-.21,-.26,.46,.1,.45,.21,-.01,.51,-.19,-.27,.21,.14,.85,-.07,-.05,-.17,.77,.13,.45,-.31,.58,.41,-.07,.3,.3,.45,.47,.06,.57,.52,.06,.6,.8,.06,-.15,.04,0,.31,.14,.15,-.19,-.29,.94,.27,-.08,.71,-.2,.24,.81,.07,.52,.83,.78,-.08,-.22,-.19,.56,.56,.6,.4,.06,.63,.04,-.1,.3,.36,-.03,-.07,-.08,-.14,.73,.28,.81,-.23,.56,-.27,-.01,-.24,.06,-.03,.43,.16,-.02,.05,.75,.7,-.23,.14,.64,.88,.11,.11,.04,.88,-.07,-.09,.37,.84,.02,.81,.11,.46,-.18,.05,-.12,.28,.59,.07,.3,.01,.27,.04,-.04,.61,.35,-.08,.26,.78,.22,.76,.7,.61,.53,-.09,-.04,-.55,.48,.61,.17,.61,.15,.69,.06,.07,-.1,.04,-.2,-.3,.07,.72,.64,.24,.37,.38,-.17,-.29,.21,.75,-.03,-.26,.7,.72,-.32,-.14,.64,-.15,.71,.47,.79,.07,.41,.37,.07,.57,.06,-.3,-.19,.51,.33,.09,.94,.49,.05,-.03,.82,.49,.02,.04,.21,.04,-.13,.41,.1,-.28,-.34,.68,.2,.58,.56,.66,.06,-.1,-.01,.64,.84,.55,-.07,.05,-.22,-.14,.31,.76,.09,.86,-.18,.01,.14,.07,.26,.59,-.31,.08,.67,-.65,.63,.24,.01,-.06,.28,-.36,-.34,.36,-.05,.7,-.06,.8,.32,.22,-.13,.55,-.3,0,-.11,.79,.07,.58,.24,.4,-.04,.6,.07,-.07,.06,-.33,.89,.85,.6,-.22,.33,.11,.57,.61,.51,.86,.64,.18,.23,.18,.44,.25,.07,.73,-.23,.32,.6,-.58,.33,.26,.06,.16,.57,.67,.03,.38,.29,-.18,-.41,.13,.11,.37,.84,.38,-.16,.02,.71,-.32,.61,.32,.25,-.1,0,-.01,.72,.39,-.2,.02,.57,.09,.03,.02,.68,-.09,-.1,.35,.3,.5,.62,.23,.41,.22,.45,-.02,.19,.46,.66,-.02,0,-.24,.15,.68,.39,-.01,-.27,-.41,.09,.18,.37,.37,-.21,-.2,-.34,.27,-.35,.03,-.19,-.06,-.03,-.07,.03,.13,.03,.6,.74,.12,.49,.49,.57,.69,.14,.09,.21,.58,-.27,.12,-.13,-.12,.5,.68,.46,.43,.36,-.38,-.09,.64,.66,.22,.3,-.03,.62,.06,-.1,.21,-.02,.6,.08,-.02,.22,-.13,.17,.47,-.1,-.13,.79,-.17,.09,.81,.34,.81,.94,.02,-.2,.3,.03,.36,.42,-.15,.88,.02,.07,-.1,-.06,.19,.32,-.4,-.14,.09,.73,.84,.81,.69,.1,-.03,.02,-.15,.15,.31,-.23,.45,.73,.32,-.02,.07,.33,.36,-.14,-.35,-.21,.62,-.4,.74,.5,.58,-.05,.29,.35,-.01,.54,-.01,.66,.51,-.16,.04,.56,-.17,.58,.4,.08,.05,.63,.02,.07,.11,.52,-.03,.07,.75,.42,-.15,.41,.74,.51,.08,.57,.66,.38,.11,.35,-.05,.22,.8,-.14,.45,.52,.18,.31,.46,.19,-.09,.33,.79,0,.18,-.24,.18,.7,.27,.65,.59,-.12,.22,.66,.56,.61,.72,.27,.45,.7,.63,.73,0,.19,.68,-.17,.85,.46,.87,.53,-.02,.29,.92,.28,.71,.65,.1,-.26,.47,.64,.59,.1,.6,.15,.51,.05,.7,.45,.73,.88,.06,.5,.09,-.29,.56,.51,-.22,.01,.59,.55,.53,.3,.31,.38,.53,.65,.83,.18,-.12,.18,.38,.22,.59,.1,.13,.69,.05,.58,.61,.43,.67,.52,-.19,.18,.39,.45,.49,.49,-.09,.19,.77,.38,.49,.84,.33,.86,.01,.86,-.23,.54,.11,0,-.01,.06,.06,.69,.47,.23,.62,0,.41,-.09,-.03,.61,.8,.82,.81,.95,.24,.26,-.02,.17,.41,-.09,-.09,.96,.44,.82,.23,.39,.19,-.08,.27,.13,.76,.01,.02,.63,.6,.64,.66,-.13,.4,.41,.6,.39,-.34,.8,.31,-.19,.87,-.14,.57,-.05,.46,.69,-.06,.86,-.09,.14,.51,.15,.22,.45,.32,.07,-.07,.09,.29,-.16,-.03,.75,.64,.46,-.14,.8,.42,.52,.75,.93,.78,-.03,-.01,.27,1,-.14,-.32,-.05,.08,.1,.04,.64,.45,.16,0,.72,.35,-.11,.68,.09,.73,.49,.36,-.21,-.16,-.02,-.15,.28,.29,.41,.54,.4,.02,.51,.19,.81,.03,.19,-.19,.02,.56,-.25,.47,.48,.64,.62,.02,.51,.44,.86,-.31,.13,-.03,.79,-.42,-.17,.21,-.49,-.06,-.24,0,.04,-.19,.08,.63,.54,-.07,.75,.58,0,.38,-.11,-.37,-.4,.04,.73,.64,.82,.5,-.01,.59,.43,.64,.51,.66,.3,.82,.68,.7,.55,.46,.42,-.16,.51,.76,.6,.17,-.18,.23,.25,.88,.26,.54,-.01,.74,.65,.84,.41,.59,.69,.63,-.02,.59,.04,-.26,.55,.15,-.1,.13,.74,.63,.76,.54,.29,.46,.4,.49,.08,-.07,.13,.04,.02,-.04,.45,-.31,.12,-.11,.81,-.07,.64,-.2,-.07,.31,.01,-.2,-.07,.65,-.07,.19,.54,.29,.47,.84,-.22,-.35,-.34,0,.84,-.06,-.06,.67,.59,.24,-.15,.76,.3,.93,-.02,.72,.07,.52,.44,-.03,.36,.3,.11,-.12,-.62,-.19,-.17,.76,.79,.7,.4,-.2,.06,.88,.44,.48,.1,-.08,-.06,.92,.51,-.06,.56,.83,.45,.37,.19,.66,.85,-.2,.02,.44,.43,.64,.05,-.19,.29,.36,-.04,-.12,.59,-.26,-.02,.87,.24,-.07,.74,.12,.02,-.14,.81,-.51,.49,.17,-.08,-.17,.01,.45,.22,-.06,-.08,.29,-.05,.64,.75,.34,-.13,.36,.53,.75,.91,.86,.05,.02,.49,.88,.19,.1,-.1,-.1,.07,.76,.9,-.12,.74,-.01,.21,.56,.22,.4,-.06,.1,-.39,-.12,.14,.06,.73,.6,.69,.62,.44,-.01,.52,.07,.2,-.07,.11,-.05,.74,.74,.38,-.32,-.72,.45,.51,.36,.56,.3,.87,.46,.07,.81,-.74,.86,.73,.74,.1,.78,-.03,.72,.46,.27,.63,.35,.94,.31,.7,.89,.5,-.08,.7,.24,.52,-.14,.76,.89,.84,.71,.79,-.07,.76,.44,.3,-.5,.77,.05,.59,-.3,-.03,.77,.52,.78,.79,-.21,.03,-.01,-.03,.63,.28,.58,.48,.8,.15,-.24,.07,-.17,-.04,.06,.63,.18,.09,.75,.1,.19,.56];export{a as rvalData};
