const a=[-.42,.39,.88,-.09,.91,-.07,.2,-.27,.1,.35,.58,.08,0,-.73,.75,-.04,.31,.04,-.24,-.11,-.06,-.17,.09,.53,.52,.75,-.05,.19,.35,0,.42,-.16,.88,.14,.2,.13,.89,.56,.25,.72,0,.81,.71,-.09,.1,.37,.07,-.14,.1,.05,.14,-.03,.42,.77,.32,.47,.36,.03,.19,.77,.29,.81,.75,-.05,.23,-.02,.8,.61,-.08,-.09,-.04,.63,.14,-.14,.83,.11,-.11,.24,.49,.1,-.54,.61,-.2,.69,-.13,-.13,.67,.04,-.77,.58,.03,.08,-.02,-.73,.11,-.19,-.78,-.09,-.2,.26,-.09,.75,.36,-.13,.38,.08,-.03,-.05,.79,.47,-.04,.16,-.08,-.68,-.1,.75,.16,-.09,-.29,.46,-.12,-.06,.37,-.25,.1,.39,.71,-.39,0,.9,-.34,-.54,-.2,-.02,.49,-.21,-.12,.08,-.02,-.06,.81,.06,.58,.67,-.01,-.16,.01,-.15,.57,-.23,.76,-.21,-.04,.05,-.31,-.05,-.03,.05,-.17,.65,-.14,.56,.05,.06,.02,.15,.53,-.05,-.18,.71,-.03,.01,-.26,-.43,.59,-.01,-.09,.09,.05,.86,-.05,.1,.07,.86,.39,-.14,.17,.21,.06,-.19,-.15,-.1,.12,.46,.67,.87,.6,.22,.02,-.18,.21,.46,.89,-.01,-.52,.57,.05,.05,.1,-.13,-.35,.65,-.03,.75,.03,.3,-.06,-.18,.02,-.2,.37,.26,.31,.84,.33,.91,-.29,-.01,.2,.11,-.07,-.13,.52,.82,.23,.05,.63,.22,-.09,.08,.14,.68,-.35,-.3,-.05,-.38,.16,.08,.21,-.04,-.11,-.11,.3,.03,.84,-.04,.18,.24,.01,.83,.15,-.08,.23,.81,-.2,.34,-.06,.65,.1,.52,.03,-.45,.84,.83,.59,-.07,.21,.11,.8,.07,-.01,-.14,.36,-.56,0,.59,.05,.83,-.04,-.07,-.27,.11,.8,-.29,-.15,.71,.3,-.27,-.04,.15,.04,.94,-.07,-.17,.17,.34,-.13,.46,-.14,.35,.73,-.08,-.2,-.02,.18,.14,-.1,-.03,.81,.33,.66,-.06,.65,.77,-.2,-.03,.83,-.27,.05,0,-.63,.4,.18,.12,-.13,.07,.05,.32,-.19,-.18,.31,.74,-.25,-.06,.88,.87,.11,0,.67,-.07,.7,-.44,.15,-.03,-.51,.4,.22,.07,.77,.83,.33,.16,-.05,-.11,-.08,-.71,.05,.92,.3,.12,.25,-.2,.08,-.27,.25,.04,.25,.67,.04,-.01,.1,.03,.12,.15,-.05,.33,-.02,.01,.78,.86,.81,-.1,.2,.01,-.02,.95,-.32,-.16,-.26,.13,-.09,-.14,.79,.29,.06,.13,.62,.78,.54,.45,.79,-.63,-.43,.79,-.01,.03,.77,.8,0,-.46,.05,.8,.02,-.03,.12,.93,.9,.07,.07,-.44,-.41,-.34,.4,.11,-.17,.82,-.3,.86,.95,.6,.6,.6,.62,-.05,.19,.32,.96,.79,-.14,-.41,.23,.25,-.86,-.12,-.17,-.11,-.1,.92,-.14,.43,.81,.82,-.74,.13,-.01,-.06,-.41,-.05,-.47,.79,.04,.93,.58,.14,-.05,.79,.7,-.05,.87,-.12,.63,.77,.71,.08,.17,-.1,.33,-.43,.51,.73,.07,.07,-.39,-.26,.89,.87,-.18,-.11,.61,-.37,-.01,-.22,.63,.58,.72,-.25,-.01,.66,.88,.29,.74,-.18,.71,-.03,.2,-.1,.08,-.2,.07,.68,.06,.92,-.06,-.14,.34,-.03,.25,.4,.08,.68,-.13,-.19,-.21,-.31,-.05,.06,.05,.39,-.44,.2,.14,.05,-.14,.13,.05,-.2,0,.15,.68,.03,.01,.91,.93,.79,.65,-.14,-.33,-.26,-.3,-.11,.71,-.01,-.01,-.36,-.14,-.19,-.15,.09,.1,0,.74,.84,.08,-.39,.74,.96,-.16,-.39,.11,.25,.05,.24,.63,-.02,.36,.73,.95,.56,-.06,.89,-.18,.11,.01,.72,-.34,-.72,.69,.88,.25,.08,.62,.85,.88,.06,.74,-.04,-.05,-.22,.25,-.02,.1,.82,-.1,-.09,-.18,-.09,.96,-.37,.03,.09,-.18,-.17,.15,-.12,-.17,-.09,.18,-.03,.7,-.47,-.15,-.39,-.26,.03,.31,.31,.8,-.26,-.32,-.13,0,.76,-.3,.18,.27,.73,-.49,.72,.05,.33,-.05,-.75,-.11,.96,.79,.08,.51,-.02,-.23,-.07,.95,.73,.86,.04,.19,.04,.08,-.13,.51,.7,.27,.11,-.03,-.04,.33,-.35,.58,.85,-.46,.16,-.12,-.39,.73,.78,-.19,.21,-.48,.73,.81,-.45,-.08,-.26,-.25,-.2,-.04,-.45,.45,.1,.63,-.6,.68,-.19,.23,.78,0,.03,-.13,.57,-.05,-.03,.77,-.27,.15,.01,-.14,-.14,-.17,.08,-.19,-.18,-.18,.69,.86,-.04,.72,.68,-.29,-.16,-.24,.67,-.56,.11,.86,.11,.23,-.15,.9,-.17,.22,-.09,.48,.61,-.29,.1,-.12,-.47,.22,.86,-.14,.36,-.12,-.06,-.07,.18,.68,.15,-.14,.44,.68,.05,.44,-.1,.8,.18,.48,.75,.72,-.16,-.09,.01,-.35,-.14,.81,.04,-.02,-.35,.01,-.27,.89,.1,.87,-.01,.04,.74,.79,.59,.22,.13,.02,-.04,-.28,-.19,.53,.54,.86,-.04,.93,.58,-.46,.33,-.25,.25,-.43,.82,.67,.35,.21,-.2,.09,.01,.02,-.15,.85,-.26,.49,-.26,-.71,.03,.13,.93,.1,.05,-.38,.69,-.05,.91,-.12,.13,-.06,-.06,-.17,.89,-.16,-.17,.01,-.04,0,0,.21,-.16,.6,.78,-.12,-.35,-.09,.75,.06,-.04,.3,.09,-.19,.01,.31,-.1,.06,.18,.07,-.03,-.08,-.05,.49,.93,-.17,-.31,-.35,-.24,-.29,.06,-.11,-.44,-.44,.14,-.09,-.02,-.25,.03,.23,-.02,-.1,.09,.01,.63,.12,.8,.82,-.1,-.07,.16,.84,-.31,.77,-.67,-.57,.24,.71,0,-.43,-.19,.55,.8,.22,-.11,.08,-.03,-.02,.65,.15,-.09,.06,-.19,-.1,.08,-.03,-.24,.66,.17,-.05,-.18,-.43,-.03,-.27,-.06,-.39,.48,.84,.9,-.03,.97,.68,.04,-.11,.84,.76,.83,.71,-.86,.09,-.06,.45,.82,.08,-.02,-.05,.57,-.15,.16,-.26,.79,.11,.2,-.33,-.06,-.17,-.16,-.13,.24,.85,0,.77,.05,.78,.13,-.25,-.11,.6,.12,-.05,-.01,-.66,-.21,.04,-.39,.65,-.76,.62,-.12,-.26,0,0,.65,.89,-.33,-.24,-.17,.03,-.32,-.45,.11,.09,.11,.33,-.41,-.09,-.35,-.15,-.13,.07,-.07,.09,.15,-.04,-.05,.12,-.03,.13,.23,-.07,.27,-.12,-.02,-.1,.44,.01,0,-.23,-.18,.26,-.44,-.42,.09,.7,.1,.42,.33,.21,-.03,.83,.05,.19,.02,-.23,-.07,.31,0,-.09,.38,.83,-.28,.4,-.07,-.22,1,-.13,-.16,-.1,-.05,.06,-.24,-.08,.54,-.08,.6,.32,-.04,.27,-.23,-.25,-.07,-.17,.77,.02,0,.03,.59,.08,.1,-.02,.2,.81,-.15,.1,.06,.24,.89,-.11,.45,.86,-.32,.56,.87,.03,-.15,.06,-.03,.15,.13,.07,-.27,-.15,.54,.04,-.42,.83,-.17,.7,.6,-.38,-.1,.85,.85,-.48,-.27,-.45,.22,.87,.26,.75,.01,.73,-.09,-.11,.15,.18,.02,-.12,-.09,-.23,.62,.02,.87,-.19,.74,-.13,.19,-.28,.02,-.13,.51,-.02,-.07,-.28,.83,.95,-.24,.04,.88,.8,-.28,.02,-.45,.82,.08,.03,.32,.75,-.03,.77,.55,.74,-.26,.09,-.41,.11,.72,.14,-.1,-.02,-.21,.16,-.01,.4,.4,-.16,-.01,.73,.34,.88,.77,.65,.45,-.19,.25,-.72,0,.46,.23,.88,.14,.43,-.11,-.35,-.18,.02,-.35,-.37,.07,.94,.89,.07,.8,.04,-.35,-.65,-.03,.9,.03,-.24,.77,.73,-.29,.05,.44,.02,.87,.03,.66,-.39,.82,.58,-.28,.91,.2,-.25,-.39,.6,-.1,-.15,.71,.64,.03,-.14,.7,.28,-.04,.01,.11,-.05,-.06,.05,-.02,0,-.42,.79,.1,.87,.58,.49,.04,-.04,-.01,.89,.81,.86,-.1,0,-.08,.01,.26,.71,.04,.74,-.17,-.16,.04,.16,-.12,.33,-.29,-.42,.7,-.72,.94,-.13,-.43,.08,.14,-.09,-.05,.07,.03,.76,-.09,.64,.3,.22,-.46,.62,-.26,-.33,-.12,.49,-.12,.48,-.16,.11,-.01,.95,.11,-.04,.06,-.19,.7,.78,.48,-.32,-.12,-.18,.75,.52,.48,.78,.31,-.08,.07,.16,.73,.14,-.27,.92,-.02,.17,.94,-.87,.34,-.21,.17,.14,.38,.9,.05,.13,-.26,-.28,-.37,-.16,-.25,.82,.79,.62,-.11,-.04,.88,-.36,.28,-.03,.22,-.53,.02,-.1,.74,.17,-.28,-.31,.48,.13,-.03,.19,.48,-.04,-.14,.15,-.06,.45,.32,-.03,.02,-.09,.08,-.08,-.17,.42,.54,-.1,-.31,-.45,-.19,.59,.01,-.02,-.19,-.5,-.03,.03,.69,.03,-.25,-.45,-.44,.21,-.56,-.11,-.41,-.3,.07,-.12,.37,.18,-.09,.35,.61,-.03,.41,.04,.27,.9,.29,-.35,.16,.92,-.29,-.14,-.04,.37,.87,.37,.62,.02,.14,-.29,-.15,.79,.86,.1,-.1,-.04,.83,.01,-.05,.19,-.05,.38,.06,-.08,.1,-.08,.04,.77,-.12,-.05,.73,-.14,.04,.74,.13,.76,.68,0,-.21,.15,.06,.24,.68,-.46,.74,.01,-.35,-.05,-.21,.03,.33,-.5,-.31,.18,.44,.83,.59,.71,-.12,0,.02,-.07,-.07,.28,-.06,.26,.6,.32,-.15,.3,.36,0,-.22,-.63,-.03,.64,-.16,.62,.42,.27,-.1,-.09,.32,-.12,.3,-.32,.47,.22,-.16,-.08,.28,-.48,.71,.25,-.06,-.02,.42,.09,-.05,.1,.44,.08,.14,.82,.09,-.34,.35,.92,.16,-.01,.45,.42,.31,.08,.2,-.18,.22,.79,-.22,.42,.46,-.01,.1,.23,.29,.06,.26,.85,-.06,.23,-.03,-.24,.51,-.04,.13,.62,-.09,.01,.73,.33,.95,.85,-.02,.79,.68,.79,.17,-.29,-.06,.5,.21,.51,-.11,.62,.68,.04,.06,.62,.6,.67,.45,.12,-.11,.66,.41,.21,-.09,.51,.27,.66,.14,.83,.82,.31,.68,.03,.71,-.16,-.1,.42,.64,-.4,.02,.77,.54,.49,.07,.2,.54,.87,.75,.79,-.05,-.11,-.05,.07,-.21,.88,-.07,.13,.68,.01,.31,.38,.07,.77,.89,-.19,-.1,.76,.05,.23,.86,-.19,-.14,.47,.34,.18,.56,.12,.68,.13,.7,-.26,.35,-.04,-.13,.02,.19,0,.19,.85,.14,.42,.23,.26,-.03,-.08,.77,.59,.6,.6,.71,-.22,.03,-.26,.14,.22,0,-.21,.64,.53,.66,.04,.66,-.24,-.05,.26,-.15,.38,-.28,.17,.93,.93,.79,.85,-.08,.82,.27,.49,.2,-.54,.43,.27,-.55,.55,-.16,.62,-.13,.85,.58,.1,.8,-.17,-.04,.4,.13,.08,.5,.1,-.38,.02,.02,.1,.05,-.05,.83,.91,.59,-.2,.67,.66,.63,.62,.62,.93,.11,-.24,-.1,.64,.05,-.43,-.19,.19,.26,0,.97,.81,.66,-.21,.74,.41,-.02,.24,.13,.72,.56,.21,-.38,-.03,-.05,-.05,-.07,.11,.81,.51,.56,-.41,.23,.13,.84,-.02,-.01,-.22,.01,.81,-.1,.84,.6,.83,.84,.1,.42,.55,.71,.01,.23,-.12,.35,-.64,-.13,-.18,-.72,-.03,-.37,-.04,-.11,-.31,.07,.44,.49,-.15,.76,.96,-.36,.79,-.51,-.08,-.41,-.1,.88,.96,.92,.57,.15,.33,.38,.32,.33,.48,.21,.77,.88,.47,.36,.15,.29,-.05,.43,.73,.81,-.05,0,.05,-.03,.77,.11,.33,-.01,.37,.93,.68,.82,.94,.94,.75,-.02,.55,-.07,-.2,.8,-.03,-.16,-.07,.74,.89,.63,.26,.03,.65,.22,.83,.23,-.03,.06,-.08,.01,-.07,.68,-.44,.01,-.24,.86,-.17,.61,-.34,-.19,-.03,.01,-.21,-.21,.88,-.05,-.07,.31,.05,.27,.71,-.42,-.52,-.23,.05,.66,-.16,-.25,.52,.38,.31,-.21,.83,-.15,.73,.08,.91,-.1,.23,.13,.01,.35,.06,.38,-.04,-.76,-.3,-.12,.56,.61,.77,.46,-.19,.1,.68,.17,.35,.08,-.14,-.16,.74,.9,-.02,.44,.79,.36,.25,.1,.86,.82,-.01,-.31,.08,.28,.29,.02,-.31,.5,.27,-.08,-.01,.95,-.36,.02,.72,-.04,-.04,.47,.07,.06,-.14,.74,-.32,.63,-.06,.06,-.22,.02,.6,.38,-.11,.05,.08,-.12,.91,.95,.74,.12,.8,.9,.89,.6,.84,-.04,.06,.27,.77,-.08,.28,-.02,-.21,.17,.87,.73,-.45,.62,-.13,.33,.91,.22,0,.08,-.05,-.28,-.19,.13,.09,.6,.93,.46,.94,.27,.06,.2,.23,.35,-.04,-.21,.28,.65,.85,-.04,-.16,-.69,.2,.84,.32,.84,.22,.86,.09,-.06,.6,-.66,.79,.84,.96,.26,.61,.25,.72,.64,-.18,.47,.81,.67,.34,.91,.82,.84,.12,.92,.51,.22,0,.88,.81,.78,.88,.83,-.48,.71,.72,.14,-.63,.84,0,.96,-.54,.01,.66,.34,.85,.76,-.06,.01,.15,-.31,.88,-.1,.74,.41,.66,-.24,-.06,.06,-.02,.03,.1,.25,-.05,.11,.91,.01,-.04,.31];export{a as rvalData};
