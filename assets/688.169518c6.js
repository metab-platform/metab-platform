const a=[-.43,.48,.59,-.09,.8,.01,.29,.06,.52,.16,.42,-.08,.01,-.66,.56,.02,.23,.05,-.14,.02,-.07,-.35,.04,.43,.71,.96,-.33,.01,.41,-.25,.59,-.4,.76,.07,-.02,.18,.74,.56,.43,.6,.03,.96,.38,-.05,.11,.4,.1,-.19,.06,.34,.28,-.04,.22,.82,.39,.45,.46,.09,.42,.76,.35,.8,.86,-.09,.32,-.28,.93,.56,.02,-.02,-.09,.52,.39,-.26,.89,-.04,-.07,.31,.38,-.18,-.47,.71,-.05,.96,-.21,-.32,.92,.07,-.78,.61,.11,.11,.33,-.63,0,.12,-.76,-.29,-.13,.44,-.07,.85,.56,-.09,.66,.17,.08,.18,.82,.61,-.03,.37,.13,-.58,-.2,.82,-.01,-.29,-.32,.75,.04,-.15,.16,-.07,.01,.61,.73,-.25,-.31,.83,-.04,-.39,-.08,.13,.21,.07,.09,.36,-.3,-.13,.89,.03,.9,.92,-.04,-.13,-.03,-.02,.79,-.2,.83,0,.02,-.02,.06,.05,.21,-.1,-.28,.55,-.1,.7,.04,.31,.34,.29,.42,-.38,-.04,.86,-.03,-.31,-.03,-.17,.63,-.22,0,-.04,.29,.81,-.01,.11,-.01,.58,.6,.07,.01,.02,.05,-.28,-.11,.12,.08,.71,.75,.67,.66,.16,-.04,-.37,.4,.65,.84,-.01,-.47,.42,-.02,.35,.28,.03,-.03,.68,-.18,.79,.07,.34,.02,.13,-.24,-.12,.61,.53,.41,.8,.62,.85,-.01,-.3,.25,.18,-.04,-.11,.75,.53,.17,.01,.55,.22,.06,.06,.37,.65,.04,-.02,.27,-.14,.11,.15,.13,-.08,.03,-.1,.41,.21,.85,.03,.07,.44,.12,.56,.16,.08,.4,.87,-.02,.62,-.21,.91,.12,.74,-.12,-.38,.77,.56,.72,.06,.03,.31,.61,.05,.18,-.12,.43,-.4,.36,.59,-.08,.77,.09,-.16,-.11,.33,.78,-.1,.14,.4,.25,-.41,.05,.22,-.03,.7,-.28,-.1,.04,.61,-.01,.67,.11,.22,.89,-.09,-.1,-.04,.17,.21,.11,.12,.52,.21,.96,-.13,.57,.91,.04,.4,.82,-.1,.02,.44,-.55,.65,.31,.15,-.37,-.02,-.23,.48,-.15,-.36,.54,.39,-.19,-.01,.78,.61,.09,.29,.35,.37,.82,-.2,.13,.38,-.31,.47,.35,-.1,.6,.58,.65,.14,.32,.13,-.08,-.54,.15,.82,.26,.18,.15,-.28,.48,-.04,.2,.24,.36,.86,.02,.2,.15,.01,.09,.13,-.05,.35,-.21,-.04,.68,.77,.61,.04,.07,-.12,-.12,.71,-.48,-.16,-.08,.04,-.17,.27,.58,.64,.16,.06,.59,.58,.77,.69,.54,-.47,-.21,.63,.02,.03,.9,.6,.2,-.23,.02,.79,-.11,.01,.4,.84,.72,.03,.32,-.29,-.01,-.09,.72,-.04,.02,.79,-.28,.83,.84,.55,.75,.92,.91,.16,.21,.44,.7,.82,.23,-.5,.32,.49,-.88,.15,-.08,-.05,-.17,.83,.07,.53,.71,.71,-.66,.34,-.12,.11,-.32,-.17,-.69,.76,.2,.8,.36,.02,.24,.72,.47,.11,.65,-.17,.71,.73,.68,.41,.21,.21,.33,-.29,.4,.41,.07,-.09,0,-.28,.66,.88,.03,-.03,.48,-.08,.32,-.04,.61,.64,.92,-.15,-.01,.6,.71,.31,.82,.18,.92,.14,.23,-.16,-.04,.16,.32,.86,-.14,.68,0,-.07,.48,-.07,.2,.22,.09,.67,.2,.03,-.09,-.02,-.05,.01,.22,.28,-.2,.07,0,.18,-.05,.06,-.21,-.14,.04,.07,.64,.27,-.12,.84,.68,.48,.73,-.1,-.45,-.04,-.27,-.02,.6,-.17,.48,.01,.03,-.13,-.1,-.01,.03,-.13,.53,.57,.19,-.22,.82,.71,-.11,-.51,.25,.28,-.23,.1,.82,.29,.52,.7,.72,.74,-.14,.72,-.07,.06,.03,.66,.04,-.79,.59,.66,.36,.04,.49,.89,.65,.2,.49,-.3,.11,-.24,.08,.22,.1,.68,.02,.1,-.08,-.02,.72,-.14,-.02,-.04,-.05,-.07,.16,-.1,.15,-.34,.36,.14,.81,-.18,-.02,-.42,-.36,.25,.24,.43,.72,.02,-.19,-.29,.13,.82,-.47,-.06,.2,.88,-.17,.9,.11,.5,-.13,-.84,.14,.78,.72,.01,.5,-.07,-.06,.06,.71,.43,.86,.12,.27,.07,.12,.27,.86,.87,.63,-.06,-.12,-.26,.44,-.25,.76,.88,-.46,.14,-.01,-.13,.48,.75,.03,.21,-.5,1,.86,-.16,-.1,-.22,-.03,-.06,-.11,-.08,.16,.13,.6,-.58,.94,.16,.52,.65,-.02,-.04,-.23,.34,-.12,-.28,.84,-.04,.13,-.02,-.18,-.13,.28,.01,-.16,-.11,.11,.72,.69,-.05,.77,.46,-.35,-.43,-.32,.58,-.6,.23,.76,-.03,.5,.07,.77,-.13,.01,-.04,.52,.34,-.47,.01,.07,-.44,.62,.69,.2,.54,-.23,-.03,-.2,.41,.73,.04,0,.33,.57,-.12,.14,-.34,.78,.21,.41,.6,.8,-.11,-.02,.18,-.12,.12,.77,0,.26,-.37,.21,.05,.81,.26,.62,-.14,-.14,.92,.49,.66,.5,.22,-.01,-.26,-.35,.14,.53,.48,.91,-.35,.71,.91,-.21,.37,.19,.33,-.3,.78,.53,.73,.33,-.38,.19,-.02,-.03,-.19,.76,-.32,.74,.11,-.58,-.01,.18,.82,0,.38,-.01,.7,.02,.83,-.13,.13,-.06,-.13,.06,.84,.07,-.18,-.03,-.1,-.1,.11,.14,-.34,.41,.77,.05,.04,-.32,.68,.23,-.23,.57,-.06,0,-.25,.64,-.11,.03,.26,.13,.13,.24,-.13,.74,.85,-.04,-.38,-.11,-.03,-.42,.02,.32,-.06,-.14,.01,.03,.26,-.03,.14,.32,.13,-.08,.05,-.23,.41,.16,.92,.72,.08,.13,.53,.77,-.02,.94,-.52,-.51,.42,.77,0,-.52,-.19,.43,.84,.16,-.08,.02,.03,-.1,.63,.21,.14,.01,.05,-.11,0,-.22,-.2,.69,.34,-.12,.04,-.07,-.05,-.05,0,-.33,.6,.78,.71,-.05,.74,.75,.18,.1,.54,.66,.9,.86,-.71,.34,-.05,.54,.88,-.07,.09,.11,.82,.12,-.01,.08,.65,.03,.17,.04,-.01,.27,-.07,.13,.39,.92,-.03,.91,-.07,.82,.05,.02,-.09,.72,.11,.03,-.11,-.57,-.1,-.02,-.24,.43,-.65,.88,-.05,.08,.18,.23,.6,.86,-.05,-.35,.17,.01,.03,-.24,.05,-.04,.26,.56,-.14,.24,-.1,-.08,.19,.06,.01,.14,.11,.05,.03,.03,-.07,.14,.05,-.17,.15,-.14,-.1,0,.53,.16,0,-.02,-.23,.38,-.28,-.16,.1,.92,-.07,.44,.45,.07,.27,.72,-.02,.08,-.02,-.01,-.05,.16,.4,.02,.56,.82,-.03,.44,-.01,-.04,.73,-.08,.05,-.07,.23,.03,-.25,-.23,.46,.03,.44,.25,-.06,.52,-.27,-.35,.17,-.02,.81,-.03,-.11,-.08,.79,.23,.34,-.35,.52,.53,-.06,.31,.29,.35,.62,-.03,.53,.66,0,.6,.89,.03,-.31,.03,-.01,.28,.17,.19,-.19,-.31,.88,.16,-.18,.75,-.33,.37,.8,0,.34,.84,.76,-.16,-.28,-.21,.56,.65,.56,.5,.02,.58,-.05,-.07,.33,.38,-.02,-.16,-.13,-.14,.78,.23,.87,-.29,.65,-.28,.03,-.3,.01,-.06,.5,.12,-.03,.01,.75,.81,-.2,.08,.77,.86,-.03,.05,-.14,.91,-.15,-.02,.37,.89,-.05,.82,.25,.48,-.09,.02,-.27,.28,.62,.11,.2,-.04,.15,.05,-.08,.63,.43,-.13,.25,.73,.23,.83,.72,.66,.57,0,-.03,-.62,.37,.62,.16,.75,.17,.69,.12,-.02,-.16,.01,-.14,-.29,.04,.83,.76,.22,.49,.25,-.25,-.46,.09,.78,-.08,-.26,.73,.76,-.43,-.23,.55,-.16,.77,.36,.8,-.14,.53,.52,.01,.64,.07,-.22,-.15,.58,.21,.05,.95,.61,-.03,-.13,.88,.41,-.04,0,.19,.02,-.1,.28,.08,-.2,-.27,.72,.13,.71,.54,.72,.04,-.1,-.06,.76,.92,.61,-.1,-.01,-.14,-.14,.27,.74,.01,.87,-.19,-.02,.12,.05,.25,.55,-.32,-.04,.66,-.75,.71,.23,-.07,0,.26,-.36,-.36,.33,-.07,.76,-.07,.8,.23,.18,-.19,.44,-.41,-.03,-.16,.76,-.07,.52,.18,.36,-.06,.7,.14,-.04,.06,-.19,.91,.91,.62,-.24,.25,-.04,.62,.66,.6,.82,.55,.22,.2,.16,.56,.26,-.06,.84,-.14,.39,.7,-.7,.38,.12,-.01,.22,.53,.8,.03,.34,.09,-.19,-.35,.09,.05,.53,.9,.42,-.14,.03,.75,-.31,.58,.2,.22,-.22,.03,-.01,.74,.34,-.16,-.01,.58,.04,.06,.1,.63,-.14,-.13,.33,.21,.47,.58,.21,.3,.24,.41,-.15,.11,.41,.67,-.01,-.17,-.31,0,.69,.35,-.07,-.35,-.54,-.05,.12,.48,.35,-.32,-.31,-.38,.29,-.44,0,-.29,-.16,-.06,-.1,.08,.22,.04,.58,.73,.04,.41,.39,.53,.81,.08,0,.24,.7,-.29,.09,-.12,-.02,.6,.61,.54,.3,.36,-.37,-.1,.7,.74,.18,.13,-.01,.73,.05,-.18,.15,-.05,.43,.08,-.09,.21,-.1,.19,.58,-.03,-.07,.84,-.21,.06,.85,.34,.91,.92,.03,-.28,.31,.01,.37,.53,-.18,.93,.01,-.07,-.02,-.16,.19,.23,-.44,-.14,.1,.74,.93,.8,.68,.1,-.14,.05,-.15,.12,.24,-.29,.42,.73,.3,0,.12,.28,.27,-.18,-.45,-.22,.66,-.37,.73,.42,.55,-.05,.13,.35,-.01,.52,-.07,.61,.46,-.24,0,.51,-.24,.62,.36,.17,-.01,.66,.07,.05,.07,.49,-.01,.06,.87,.33,-.24,.38,.84,.44,.11,.52,.67,.42,.11,.37,-.02,.21,.9,-.16,.48,.51,.16,.26,.45,.25,-.04,.31,.87,-.07,.2,-.29,0,.67,.26,.55,.63,-.05,.21,.64,.58,.71,.77,.23,.57,.76,.69,.63,-.07,.23,.75,-.14,.86,.31,.87,.64,-.05,.25,.88,.34,.71,.76,.15,-.26,.55,.73,.49,.12,.66,.31,.58,.01,.75,.58,.7,.87,.01,.51,.1,-.29,.58,.6,-.19,-.03,.65,.61,.6,.3,.3,.52,.61,.73,.91,-.01,-.18,.19,.42,.2,.66,.16,.18,.73,.1,.58,.58,.31,.73,.62,-.15,.08,.5,.38,.48,.59,-.1,.23,.78,.32,.47,.84,.34,.86,.07,.88,-.18,.5,.16,.1,0,.07,.11,.68,.58,.15,.58,.09,.42,-.08,.09,.67,.74,.81,.75,.97,.06,.28,-.02,.25,.34,-.04,-.13,.92,.55,.89,.05,.54,.03,-.06,.35,.08,.68,0,.1,.75,.7,.7,.73,.01,.54,.39,.63,.45,-.46,.75,.35,-.26,.85,-.09,.64,-.02,.57,.66,-.09,.92,-.13,.14,.39,.24,.27,.48,.28,0,-.04,.2,.12,-.12,.04,.83,.73,.53,-.15,.84,.45,.56,.81,.9,.85,-.01,-.08,.12,.93,-.13,-.36,-.11,.24,.27,.17,.73,.56,.32,-.08,.8,.44,-.18,.6,.03,.8,.48,.32,-.31,-.16,.04,-.15,.09,.28,.52,.66,.37,-.05,.51,.28,.83,-.03,.15,-.19,.05,.63,-.26,.57,.54,.69,.68,.01,.58,.42,.88,-.24,.2,0,.7,-.52,-.15,.16,-.57,-.06,-.29,-.05,-.01,-.17,.05,.61,.57,-.06,.84,.68,-.04,.51,-.23,-.33,-.45,.1,.77,.74,.89,.49,.11,.52,.39,.57,.55,.71,.27,.85,.76,.68,.58,.45,.43,-.21,.57,.86,.69,.13,-.21,.21,.14,.93,.06,.52,-.11,.64,.73,.86,.53,.71,.79,.69,.05,.59,.03,-.25,.58,.06,-.07,.06,.68,.7,.75,.46,.24,.44,.35,.58,.14,-.06,.1,.04,-.02,-.08,.48,-.28,.03,-.2,.83,-.07,.71,-.29,-.04,.26,0,-.18,-.16,.8,-.08,.1,.48,.26,.4,.93,-.32,-.35,-.36,.05,.8,-.1,0,.69,.53,.25,-.19,.89,.08,.93,-.03,.84,.02,.47,.39,0,.41,.24,.13,-.09,-.69,-.19,-.13,.75,.78,.73,.39,-.22,.06,.91,.4,.54,.07,0,-.19,.93,.64,.03,.54,.91,.45,.37,.07,.75,.94,-.19,.01,.34,.45,.54,.12,-.25,.42,.34,-.02,-.14,.73,-.24,0,.91,.1,-.03,.73,.06,-.01,-.19,.85,-.53,.6,.12,-.01,-.17,-.02,.51,.24,-.13,-.1,.25,-.14,.76,.83,.49,-.17,.49,.67,.85,.9,.87,.08,.1,.51,.95,.09,.05,-.05,-.1,.08,.88,.9,-.16,.76,-.11,.19,.66,.22,.36,-.04,.04,-.4,-.23,.13,.09,.69,.7,.75,.7,.47,0,.51,.1,.21,-.09,.04,-.04,.76,.81,.29,-.25,-.81,.35,.63,.29,.65,.3,.93,.34,.04,.75,-.8,.93,.79,.83,.12,.81,-.01,.75,.63,.18,.68,.5,.92,.32,.82,.96,.65,-.16,.83,.25,.46,-.11,.85,.96,.9,.85,.89,-.13,.79,.54,.2,-.55,.87,-.01,.7,-.4,.01,.78,.49,.89,.84,-.2,.01,-.06,-.03,.71,.25,.56,.5,.84,-.05,-.23,.03,-.22,-.1,.08,.59,.15,.11,.81,.04,.18,.58];export{a as rvalData};
