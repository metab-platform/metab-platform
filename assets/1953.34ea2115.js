const a=[-.46,.5,.63,-.09,.84,-.09,.3,-.04,.39,.21,.38,-.06,.02,-.68,.53,.05,.26,.09,-.09,.02,-.09,-.35,.06,.43,.64,.93,-.3,.03,.44,-.21,.54,-.4,.76,.06,-.04,.17,.76,.54,.44,.59,.01,.95,.42,-.05,.18,.36,.12,-.27,.07,.25,.21,-.03,.3,.82,.33,.39,.35,.06,.45,.76,.34,.79,.85,-.05,.29,-.19,.92,.55,-.03,.03,-.11,.55,.32,-.22,.92,-.03,-.08,.31,.39,-.12,-.52,.7,-.11,.95,-.23,-.29,.88,.06,-.79,.62,.1,.11,.22,-.62,-.02,.06,-.76,-.28,-.15,.41,-.02,.85,.49,-.07,.58,.14,.03,.13,.77,.59,-.05,.32,.01,-.59,-.22,.84,.02,-.23,-.39,.67,.02,-.12,.17,-.07,-.01,.55,.76,-.31,-.18,.85,-.15,-.48,-.12,.07,.24,.02,.03,.3,-.22,-.09,.89,.01,.88,.88,-.07,-.15,-.04,0,.74,-.2,.83,-.08,.03,-.06,-.03,.03,.23,-.11,-.25,.51,-.14,.68,.09,.27,.23,.27,.41,-.3,-.14,.81,-.08,-.26,-.05,-.24,.6,-.17,-.01,-.02,.25,.82,-.02,.09,.03,.63,.55,.05,0,.06,.07,-.27,-.1,.05,.12,.63,.71,.7,.65,.17,-.04,-.36,.38,.58,.86,-.05,-.54,.4,-.04,.27,.2,.06,-.11,.65,-.15,.8,.05,.33,.07,.07,-.17,-.13,.57,.45,.39,.79,.59,.88,-.07,-.23,.22,.15,-.1,-.05,.73,.56,.23,-.02,.56,.18,.08,.07,.35,.64,-.07,-.08,.18,-.2,.13,.15,.15,-.07,.03,-.09,.36,.21,.87,.02,.1,.36,.06,.63,.14,.08,.31,.89,-.03,.53,-.19,.89,.05,.7,-.1,-.41,.78,.6,.71,.08,.08,.27,.61,.05,.13,-.12,.4,-.4,.28,.52,-.07,.77,.07,-.17,-.22,.29,.75,-.15,.06,.44,.22,-.42,0,.18,-.06,.75,-.26,-.13,.07,.56,-.08,.64,.09,.19,.91,-.05,-.1,-.07,.16,.17,.07,.11,.57,.21,.93,-.12,.58,.89,-.03,.32,.8,-.08,-.07,.36,-.54,.66,.26,.2,-.33,-.04,-.13,.42,-.21,-.4,.48,.44,-.22,0,.81,.62,.08,.25,.39,.3,.78,-.25,.08,.31,-.33,.44,.31,-.07,.62,.64,.58,.14,.25,.08,-.11,-.56,.16,.84,.3,.18,.18,-.26,.37,-.15,.24,.22,.39,.85,.04,.17,.16,.04,.07,.15,-.04,.3,-.16,0,.66,.75,.62,.08,.08,-.15,-.18,.75,-.48,-.16,-.06,.03,-.17,.2,.6,.51,.16,.09,.6,.6,.73,.67,.57,-.46,-.25,.63,0,0,.91,.62,.14,-.26,0,.8,-.06,.04,.34,.86,.73,.06,.24,-.35,-.11,-.19,.63,-.05,-.03,.81,-.3,.81,.87,.52,.73,.9,.91,.09,.22,.4,.74,.8,.13,-.48,.25,.45,-.88,.13,-.1,-.09,-.18,.85,.04,.47,.76,.68,-.71,.32,-.11,.03,-.26,-.16,-.68,.77,.15,.82,.38,.02,.18,.66,.47,.03,.68,-.16,.68,.73,.71,.3,.21,.13,.31,-.3,.42,.45,.05,-.07,-.11,-.27,.7,.89,-.01,0,.46,-.14,.29,-.03,.6,.57,.93,-.14,0,.54,.71,.33,.82,.12,.94,.1,.22,-.12,-.04,.05,.29,.84,-.08,.72,-.03,-.08,.5,-.1,.14,.28,.09,.62,.12,-.01,-.15,-.08,-.08,-.01,.17,.25,-.21,.08,-.04,.17,-.02,.07,-.17,-.18,.01,.09,.65,.32,-.07,.87,.72,.53,.68,-.08,-.43,-.08,-.25,-.07,.63,-.13,.39,-.09,.01,-.18,-.09,.01,.04,-.07,.56,.61,.17,-.25,.85,.75,-.07,-.54,.23,.25,-.2,.11,.81,.21,.44,.72,.77,.76,-.1,.75,-.12,.07,0,.68,-.06,-.79,.56,.7,.34,0,.5,.91,.7,.15,.54,-.25,.08,-.31,.1,.26,.12,.69,.01,.04,-.13,-.07,.76,-.21,.01,-.04,-.08,-.09,.08,-.07,.1,-.33,.33,.16,.81,-.25,-.06,-.47,-.34,.21,.22,.4,.67,-.06,-.23,-.28,.09,.81,-.48,-.05,.21,.87,-.19,.89,.08,.43,-.19,-.84,.05,.81,.66,-.01,.5,-.06,-.03,.04,.75,.47,.88,.11,.26,.05,.16,.2,.79,.88,.51,-.06,-.15,-.22,.38,-.27,.75,.9,-.46,.1,-.06,-.13,.5,.72,-.01,.23,-.53,.95,.81,-.27,-.1,-.22,-.05,-.06,-.09,-.2,.18,.1,.59,-.57,.94,.08,.42,.72,-.04,.01,-.19,.35,-.16,-.25,.81,-.11,.1,-.11,-.12,-.08,.17,.03,-.14,-.12,.03,.71,.71,-.07,.76,.51,-.35,-.41,-.36,.63,-.62,.19,.75,.02,.41,.01,.8,-.12,.04,-.06,.44,.36,-.5,.04,.02,-.48,.5,.7,.13,.53,-.26,-.08,-.23,.37,.74,0,-.06,.41,.54,-.1,.24,-.25,.73,.21,.51,.64,.82,-.13,-.02,.13,-.13,.08,.8,-.02,.21,-.39,.17,-.06,.84,.26,.64,-.15,-.12,.94,.52,.65,.44,.21,-.06,-.27,-.34,.08,.5,.47,.9,-.25,.75,.9,-.22,.34,.09,.33,-.28,.8,.54,.67,.25,-.34,.19,-.01,-.01,-.15,.74,-.34,.7,.07,-.58,.02,.23,.84,-.01,.28,-.1,.73,.04,.86,-.17,.06,-.04,-.14,.08,.85,.03,-.19,.04,-.12,-.06,.05,.13,-.34,.4,.76,.06,-.05,-.33,.72,.19,-.24,.5,-.08,-.01,-.19,.52,-.1,.04,.2,.14,.12,.13,-.19,.66,.87,-.09,-.35,-.12,-.03,-.36,-.05,.24,-.16,-.24,.06,.11,.2,-.06,.12,.37,0,-.11,.02,-.18,.39,.15,.93,.76,.04,.11,.46,.79,-.07,.93,-.51,-.48,.4,.78,.02,-.51,-.15,.47,.85,.06,-.13,-.02,.04,-.12,.57,.17,.07,-.01,-.05,-.12,.03,-.17,-.17,.7,.3,-.16,-.02,-.16,.01,-.08,0,-.34,.63,.8,.76,-.07,.78,.76,.18,.04,.58,.67,.9,.86,-.73,.3,-.04,.51,.91,-.07,.01,.05,.81,.12,.02,-.03,.66,.04,.19,-.07,-.05,.19,-.12,.07,.4,.93,-.03,.92,-.14,.77,.03,-.02,-.1,.72,.17,.03,-.17,-.57,-.15,.08,-.29,.43,-.67,.86,-.1,.02,.14,.18,.56,.88,-.13,-.29,.11,-.08,-.07,-.28,.01,-.07,.22,.52,-.21,.17,-.15,-.11,.11,.05,-.05,.16,.1,.02,.02,.06,-.04,.1,.09,-.18,.18,-.06,-.12,-.04,.46,.07,.03,-.13,-.22,.32,-.35,-.17,.11,.91,-.05,.43,.4,.09,.21,.7,.05,.06,.05,-.06,-.02,.14,.32,-.01,.51,.82,-.12,.44,.03,-.12,.77,-.08,.05,-.13,.18,-.01,-.22,-.2,.48,-.04,.42,.3,-.17,.46,-.32,-.33,.12,-.05,.77,-.04,-.13,-.14,.78,.24,.22,-.26,.42,.57,-.03,.22,.26,.31,.66,-.11,.49,.7,-.09,.6,.91,.01,-.34,.12,-.02,.22,.22,.17,-.18,-.31,.83,.2,-.15,.77,-.34,.41,.79,-.09,.26,.82,.75,-.27,-.26,-.24,.47,.68,.45,.56,.04,.58,-.05,-.02,.3,.34,-.03,-.11,-.14,-.19,.75,.19,.88,-.29,.66,-.28,.04,-.37,-.01,-.12,.51,.13,-.07,-.03,.74,.84,-.16,.03,.81,.8,-.07,.01,-.21,.91,-.15,.01,.36,.89,-.08,.81,.29,.47,-.1,.07,-.33,.25,.63,.11,.14,-.07,.06,.04,-.1,.56,.41,-.12,.19,.68,.23,.86,.71,.66,.52,-.05,-.02,-.59,.31,.56,.18,.78,.15,.63,.06,-.09,-.15,.02,-.15,-.34,.04,.86,.79,.26,.54,.29,-.35,-.52,.06,.8,-.1,-.31,.73,.77,-.37,-.19,.47,-.18,.79,.29,.79,-.2,.58,.55,-.06,.68,.09,-.2,-.18,.55,.17,-.02,.94,.66,-.06,-.15,.87,.34,-.07,-.04,.17,.05,-.08,.25,.09,-.1,-.31,.71,.16,.76,.52,.68,.02,-.1,-.08,.78,.93,.63,-.09,-.04,-.16,-.14,.29,.71,0,.84,-.24,-.01,.12,.05,.15,.51,-.26,-.16,.65,-.79,.73,.13,-.16,.09,.24,-.31,-.27,.29,-.09,.77,.01,.76,.22,.15,-.25,.45,-.43,-.11,-.1,.73,-.15,.42,.08,.26,-.06,.74,.15,-.05,.03,-.14,.86,.92,.58,-.25,.17,-.12,.63,.61,.59,.78,.47,.14,.18,.16,.58,.24,-.1,.87,-.15,.36,.73,-.73,.34,.05,.02,.21,.44,.82,.03,.32,.02,-.13,-.3,.04,.04,.6,.92,.42,-.13,.07,.76,-.34,.51,.25,.22,-.3,-.01,-.02,.7,.28,-.14,-.07,.56,-.04,.05,.17,.58,-.11,-.12,.25,.14,.43,.49,.23,.22,.21,.33,-.17,.01,.36,.66,.01,-.27,-.36,-.1,.65,.26,-.11,-.36,-.59,-.15,.01,.52,.27,-.39,-.39,-.43,.29,-.51,0,-.37,-.23,-.06,-.18,.08,.21,.04,.52,.72,.02,.34,.33,.48,.84,.07,-.08,.19,.75,-.25,.03,-.1,.04,.62,.53,.53,.22,.31,-.28,-.15,.69,.75,.11,.09,.01,.74,0,-.11,.12,-.05,.37,.07,-.07,.19,-.13,.19,.6,-.03,-.07,.8,-.18,.09,.83,.32,.89,.88,-.03,-.33,.26,.09,.36,.53,-.28,.93,0,-.18,-.04,-.14,.13,.17,-.45,-.21,.14,.66,.94,.73,.63,.11,-.14,.01,-.15,.08,.22,-.23,.34,.71,.27,0,.08,.22,.2,-.19,-.54,-.22,.64,-.43,.69,.35,.49,-.06,.08,.3,-.04,.45,-.15,.57,.4,-.32,.01,.42,-.33,.62,.26,.12,.02,.66,.14,0,.1,.46,-.09,.03,.9,.29,-.22,.29,.85,.39,.12,.44,.62,.44,.16,.3,-.02,.27,.92,-.19,.47,.42,.14,.24,.38,.18,-.04,.36,.87,-.11,.2,-.23,-.01,.61,.18,.46,.62,-.11,.18,.6,.56,.75,.75,.14,.6,.76,.68,.53,-.11,.15,.72,-.02,.84,.22,.83,.64,-.06,.23,.84,.37,.7,.73,.15,-.23,.59,.69,.44,.05,.65,.3,.57,.05,.74,.61,.61,.84,-.02,.5,.02,-.19,.53,.59,-.24,-.03,.64,.59,.59,.25,.21,.59,.66,.74,.91,-.08,-.14,.13,.35,.11,.69,.1,.12,.67,.11,.56,.57,.22,.75,.65,-.21,.09,.54,.26,.42,.61,-.14,.15,.71,.22,.43,.81,.26,.82,.06,.85,-.22,.44,.12,.05,.01,.05,.05,.6,.64,.12,.52,.09,.36,-.07,.06,.68,.64,.78,.65,.95,.05,.2,-.09,.17,.28,0,-.12,.87,.54,.88,.07,.56,.01,-.03,.31,.01,.64,-.08,.09,.78,.75,.69,.73,0,.6,.31,.58,.35,-.43,.69,.35,-.35,.81,-.12,.63,-.04,.61,.62,-.07,.92,-.07,.07,.32,.2,.23,.47,.2,-.09,.02,.15,.02,-.1,.03,.83,.75,.5,-.18,.81,.44,.52,.78,.84,.87,.02,-.11,.1,.88,-.14,-.33,-.13,.21,.24,.13,.77,.62,.38,-.11,.79,.44,-.11,.48,.03,.84,.46,.26,-.33,-.19,.04,-.12,-.02,.23,.58,.7,.33,-.16,.47,.22,.81,-.07,.13,-.14,.13,.65,-.23,.6,.57,.7,.69,0,.56,.36,.85,-.18,.21,-.08,.62,-.57,-.1,.09,-.56,0,-.28,-.03,-.07,-.2,.05,.56,.51,-.1,.86,.73,-.12,.55,-.34,-.27,-.41,.06,.8,.78,.92,.55,.09,.44,.44,.49,.49,.69,.27,.83,.77,.62,.55,.38,.42,-.24,.54,.88,.7,.11,-.14,.16,.07,.91,-.04,.45,-.11,.52,.76,.84,.56,.75,.83,.72,.02,.56,.02,-.25,.56,.01,-.05,.02,.63,.7,.68,.34,.24,.47,.32,.61,.16,-.06,.12,.07,-.05,-.13,.46,-.33,-.06,-.31,.81,-.1,.72,-.38,-.08,.2,.05,-.19,-.17,.82,-.14,.05,.4,.26,.44,.92,-.4,-.42,-.37,.07,.72,-.1,-.06,.63,.48,.18,-.27,.91,.05,.9,0,.87,-.07,.41,.34,-.02,.35,.22,.17,-.08,-.67,-.16,-.14,.7,.74,.77,.38,-.23,.1,.89,.33,.52,.05,-.02,-.22,.92,.67,.03,.5,.92,.42,.36,.08,.78,.95,-.12,-.05,.26,.4,.46,.13,-.25,.46,.29,-.01,-.1,.77,-.29,-.09,.9,.04,-.02,.68,.13,-.03,-.11,.84,-.52,.6,.1,.06,-.17,.02,.52,.22,-.16,-.1,.24,-.11,.79,.87,.54,-.14,.54,.71,.87,.9,.84,.1,.1,.47,1,.05,.06,-.07,-.08,.07,.89,.87,-.27,.75,-.15,.13,.7,.19,.28,-.06,.01,-.37,-.25,.1,.13,.7,.75,.76,.72,.44,.02,.46,.08,.22,-.18,.01,.03,.68,.82,.24,-.31,-.78,.3,.64,.23,.69,.3,.94,.31,.01,.65,-.8,.94,.82,.86,.11,.8,.04,.75,.65,.1,.65,.56,.87,.31,.84,.97,.69,-.12,.85,.27,.44,-.09,.84,.96,.91,.87,.9,-.23,.79,.54,.15,-.55,.9,-.05,.73,-.47,0,.78,.47,.91,.84,-.12,-.04,-.03,-.11,.74,.19,.54,.47,.83,-.04,-.17,.01,-.21,-.07,.07,.48,.06,.08,.83,-.01,.19,.53];export{a as rvalData};
