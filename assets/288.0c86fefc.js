const a=[-.27,.45,.68,-.13,.79,0,.13,-.05,.41,.25,.73,-.01,-.09,-.68,.85,-.01,.37,-.02,-.28,0,-.03,-.1,-.02,.7,.81,.82,-.08,0,.11,.05,.49,-.15,.85,.07,.3,.11,.95,.84,.19,.58,.06,.82,.44,0,.02,.72,.16,.04,.31,.03,.31,.03,.37,.77,.18,.67,.59,0,.12,.75,.18,.75,.65,-.04,.32,.03,.81,.84,.08,-.04,-.08,.66,.14,-.18,.8,.06,.05,.12,.48,.13,-.41,.62,-.06,.74,-.16,-.13,.77,.07,-.7,.65,-.2,.01,.14,-.7,.19,-.24,-.64,.04,-.24,.17,-.08,.71,.25,-.11,.29,.04,-.01,.05,.85,.36,.07,.18,-.07,-.52,-.06,.79,.05,.01,-.18,.75,-.16,-.05,.38,-.17,.01,.33,.67,-.31,0,.95,-.28,-.42,-.16,-.04,.5,-.06,-.18,.03,.06,-.02,.72,.08,.57,.79,.08,-.11,.01,-.24,.56,-.14,.71,.03,-.03,.19,-.15,-.23,0,.16,-.1,.82,-.27,.42,.02,.03,.18,.06,.48,0,-.27,.77,.11,.05,-.21,-.31,.47,.14,-.05,.15,.01,.84,.03,.08,-.01,.69,.27,-.2,.27,.22,-.05,-.18,-.15,-.01,.06,.48,.61,.79,.4,.13,.1,-.18,.46,.59,.96,.14,-.38,.32,-.09,-.01,.05,-.25,-.21,.88,.01,.93,0,.2,-.12,-.03,.13,.01,.28,.17,.18,.79,.37,.94,-.21,.06,.13,-.03,-.12,-.16,.75,.56,.07,.16,.77,.46,-.19,.13,.18,.87,-.18,-.31,.15,-.14,.1,.19,.18,-.08,-.15,-.16,.16,.07,.74,-.06,.03,.42,-.05,.65,.21,-.29,.33,.73,-.28,.25,-.05,.7,.33,.65,.08,-.21,.92,.6,.72,-.15,.27,.1,.61,.28,-.1,.06,.58,-.55,-.06,.59,.13,1,-.2,-.02,-.1,-.03,.77,-.05,-.07,.43,.57,-.24,.09,-.05,.06,.79,-.06,-.17,.06,.4,-.07,.42,-.32,.56,.76,-.16,-.24,.06,.13,-.07,-.21,-.23,.55,.11,.68,-.08,.81,.75,-.23,-.09,.79,-.35,.06,-.05,-.47,.42,.15,.03,-.18,.03,.07,.2,.05,-.14,.36,.42,-.31,.01,.93,.65,.03,-.07,.39,.04,.6,-.43,.24,-.08,-.25,.63,.19,.05,.52,.67,.6,.13,-.14,-.03,-.08,-.62,.09,.94,.12,.11,.29,-.29,.36,-.28,.12,.02,.24,.64,.07,-.13,.21,-.04,.16,.14,-.03,.26,-.05,-.05,.66,.77,.6,-.23,.15,.01,.05,.79,-.2,-.22,-.35,-.01,-.19,-.11,.58,.46,-.06,.05,.75,.56,.49,.43,.54,-.45,-.39,.6,-.06,.13,.7,.65,-.08,-.32,.13,.82,.17,-.17,.29,.91,.86,-.05,-.04,-.45,-.24,-.33,.72,.13,-.28,.78,-.17,.76,.84,.5,.46,.72,.64,.25,.12,.23,.81,.72,.17,-.21,.38,.23,-.84,-.19,-.07,-.22,.02,.94,-.13,.52,.62,.69,-.58,.06,0,.07,-.44,-.06,-.43,.77,.11,.96,.6,.29,-.17,.79,.62,.18,.79,.03,.5,.89,.61,.26,.12,-.12,.18,-.43,.45,.44,.1,0,-.21,-.41,.7,.91,-.26,-.02,.58,-.34,-.05,-.34,.51,.53,.73,-.27,-.22,.66,.78,.15,.66,-.12,.72,-.05,.17,-.02,.04,-.09,.01,.68,-.04,.74,-.09,-.15,.21,.09,.28,.26,.11,.68,-.09,-.27,-.17,-.26,.06,.04,-.1,.31,-.53,.15,.11,-.19,-.23,.2,.13,-.19,.01,.22,.54,-.13,.07,.94,.75,.59,.64,-.21,-.33,-.24,-.19,-.03,.62,.06,.09,-.15,-.03,-.26,-.21,.06,.04,-.05,.5,.59,.31,-.27,.7,.8,-.18,-.36,-.02,.2,.15,.32,.52,-.09,.25,.88,.84,.46,.11,.94,-.16,.07,-.05,.53,-.15,-.72,.62,.68,.23,.15,.61,.83,.67,.14,.56,-.07,-.15,-.12,.29,-.21,.04,.94,-.25,.01,-.34,.07,.79,-.12,.11,.18,-.27,-.11,-.09,-.05,-.27,-.04,.3,-.12,.57,-.22,-.15,-.11,-.21,-.06,.26,.26,.8,-.23,-.19,-.13,-.02,.76,-.2,.02,.19,.7,-.52,.7,-.02,.22,.04,-.68,-.08,.83,.8,.07,.7,.01,-.26,.03,.8,.41,.9,-.14,.26,.15,.11,-.16,.67,.76,.4,.09,-.08,.01,.19,-.47,.54,.81,-.39,.1,-.02,-.48,.54,.71,-.21,.29,-.4,.77,.82,-.23,-.1,-.26,-.41,-.28,-.09,-.25,.43,.25,.45,-.46,.71,.04,.33,.63,-.01,0,-.16,.38,.02,-.05,.8,-.19,.13,.07,-.27,-.13,.05,.02,-.13,-.14,.03,.55,.94,-.08,.71,.48,-.25,-.17,-.06,.43,-.4,.16,.77,.01,.27,-.24,.97,-.19,.05,-.21,.71,.46,-.25,.17,-.04,-.33,.44,.94,-.07,.3,.04,.06,-.13,.25,.79,.11,-.08,.44,.63,-.06,.12,-.03,.81,.08,.44,.68,.65,-.34,.1,.14,-.49,-.25,.76,.15,-.14,-.24,-.02,.04,.83,-.1,.67,0,.05,.72,.54,.4,.13,.08,0,-.05,-.17,-.23,.32,.76,.84,-.01,.78,.64,-.44,.08,-.01,.23,-.29,.65,.78,.44,.41,-.15,-.07,-.02,0,-.23,.76,-.16,.48,-.15,-.61,.19,.12,.86,.19,.32,-.19,.63,-.06,.93,.06,.17,-.02,-.08,-.22,.95,-.19,-.27,-.15,0,-.09,-.05,.27,-.08,.35,.79,-.18,-.27,-.03,.6,.16,.08,.36,.15,-.02,.06,.47,-.07,.1,.02,-.1,-.22,.09,.08,.52,.88,-.14,-.35,-.48,-.35,-.3,.17,.03,-.25,-.31,.22,-.13,-.14,-.4,-.17,.01,-.01,.02,.12,.01,.63,.22,.73,.86,-.02,-.19,.31,.7,-.11,.74,-.77,-.53,.1,.64,-.09,-.4,-.31,.36,.87,.18,-.02,.03,.03,.05,.7,.3,-.19,.18,-.28,-.07,.15,.08,-.32,.45,.22,-.04,-.18,-.34,.04,-.37,-.07,-.35,.53,.7,.71,.04,.82,.63,-.16,-.01,.68,.74,.78,.66,-.74,.09,-.09,.46,.79,.22,-.04,-.17,.66,-.03,-.06,.03,.81,.14,.23,-.11,-.03,-.17,-.13,-.09,.36,.81,-.26,.73,-.03,.83,.07,-.03,-.06,.49,.16,-.01,.03,-.55,-.12,0,-.33,.74,-.6,.61,.03,-.19,-.18,-.01,.63,.78,-.28,-.1,.02,.07,-.18,-.46,.26,.21,.02,.29,-.26,-.08,-.18,-.15,-.25,.08,.08,.07,.03,-.01,-.11,.07,-.04,.22,.32,.07,.21,-.2,.07,.15,.4,-.12,.15,-.26,-.29,.45,-.36,-.53,.18,.69,-.13,.46,.18,.19,-.14,.74,.08,.29,-.01,-.32,-.04,.24,-.04,-.15,.43,.95,-.13,.44,-.01,-.15,.83,-.07,-.15,0,-.17,.16,-.22,-.07,.35,-.2,.57,.16,-.09,.33,-.1,-.26,0,-.39,.82,.15,.14,.05,.83,-.06,.11,.01,.42,.64,-.19,.09,.1,.17,.75,-.06,.53,.83,-.21,.48,.84,.12,-.14,.07,-.06,.09,.26,.09,-.29,-.1,.68,-.06,-.46,.65,-.15,.43,.46,-.19,-.12,.79,.72,-.22,-.26,-.45,.46,.69,.5,.68,-.02,.61,-.05,-.22,.09,.09,-.07,-.01,-.14,-.23,.86,0,.87,-.18,.87,.02,.22,-.23,.16,-.06,.68,-.2,-.1,-.3,.73,.83,-.25,.12,.75,.79,-.44,.12,-.35,.84,.19,.06,.35,.71,.06,.87,.44,.51,.05,.08,-.28,.07,.52,.14,-.25,.07,-.1,.1,.05,.71,.45,-.09,-.05,.74,.28,.77,.68,.49,.49,-.25,.28,-.71,-.09,.35,.19,.95,.19,.51,.02,-.32,-.2,.1,-.39,-.31,.14,.87,.96,.08,.57,-.14,-.18,-.49,-.02,.78,.14,-.19,.59,.59,-.43,.14,.43,.06,.74,-.08,.54,-.41,.59,.39,-.19,.71,.21,-.31,-.3,.64,-.23,.13,.71,.49,-.13,-.17,.74,.43,.06,.08,-.04,-.09,.1,-.11,-.2,.06,-.47,.64,.12,.72,.62,.54,.1,.03,.05,.96,.81,.68,-.08,.09,-.08,.13,.2,.69,.15,.71,-.12,-.11,-.1,.23,.19,.21,-.32,-.17,.5,-.55,.76,.16,-.27,.09,.03,-.12,-.01,.12,.17,.73,-.05,.62,.39,.04,-.27,.35,-.19,-.13,-.17,.41,-.03,.59,-.15,.34,.09,.79,.17,.01,.22,-.33,.8,.72,.45,-.41,-.16,-.13,.52,.58,.35,.82,.4,.21,.03,.18,.83,.07,-.44,.94,.04,.08,.8,-.78,.17,-.23,-.05,.08,.55,.92,.06,.09,-.28,-.34,-.27,-.24,-.36,.61,.71,.34,.04,.02,.75,-.49,.35,-.22,.26,-.41,.1,-.05,.67,.36,-.34,-.1,.74,.16,-.05,.17,.32,.09,-.17,.1,-.06,.31,.43,-.13,.05,-.07,.07,-.32,-.15,.35,.51,-.24,-.17,-.45,-.1,.54,-.03,.01,-.26,-.37,.03,.05,.61,-.07,-.15,-.29,-.45,.18,-.38,.01,-.24,-.18,0,-.11,.31,.11,0,.29,.55,-.06,.31,.03,.14,.97,.38,-.28,.34,.8,-.24,-.22,-.12,.27,.64,.39,.82,.19,.11,-.24,-.13,.66,.71,.16,-.21,-.11,.95,-.08,-.03,.17,-.08,.5,.19,.1,.1,.21,.17,.72,-.05,.02,.91,0,.02,.67,-.03,.78,.8,.04,-.08,.17,-.08,.04,.79,-.32,.74,.08,-.29,-.04,-.24,.09,.31,-.27,-.13,.13,.74,.83,.68,.63,-.13,.06,-.01,-.1,-.25,.35,-.02,.17,.53,.22,-.06,.19,.26,-.14,-.07,-.47,.03,.49,-.08,.47,.31,.22,-.23,-.2,.3,-.21,.26,-.28,.46,.08,-.05,-.08,.16,-.41,.62,.16,-.12,-.18,.34,.12,-.06,.06,.51,.11,.17,.8,-.02,-.4,.24,.88,.13,-.23,.68,.66,.26,.27,.13,-.22,.13,.75,-.24,.37,.65,-.21,-.1,.25,.24,.01,.2,.77,.03,.23,-.01,-.38,.53,-.06,.32,.47,-.02,-.15,.64,.29,.79,.75,-.15,.55,.56,.65,.41,-.45,-.05,.61,.01,.57,.13,.58,.49,.08,-.12,.62,.46,.59,.55,.16,-.15,.44,.49,.11,-.07,.54,.2,.84,.04,.69,.57,.6,.65,.11,.65,-.24,-.04,.29,.85,-.33,-.02,.58,.44,.42,.16,.17,.55,.64,.83,.73,.09,.08,-.05,.29,-.1,.78,-.08,.17,.88,.24,.36,.3,.07,.74,.7,-.16,-.01,.64,.23,.26,.65,-.32,.08,.64,.3,.09,.51,.08,.62,.29,.71,-.25,.27,.12,-.21,-.01,.2,.02,.29,.67,.17,.43,.22,.12,-.07,-.11,.56,.67,.54,.67,.76,-.37,.31,-.08,.08,.25,-.05,-.12,.62,.36,.69,-.17,.48,-.37,-.06,.14,-.04,.32,-.37,.03,.83,.78,.66,.73,-.04,.64,.18,.37,.23,-.6,.37,.35,-.36,.54,-.21,.49,-.13,.64,.5,.13,.78,-.16,.17,.56,.03,.12,.65,.12,-.19,-.05,-.03,.02,.03,0,.75,.81,.8,-.35,.63,.75,.8,.8,.65,.86,.08,-.15,-.15,.66,.01,-.33,-.09,.11,.13,-.02,.83,.62,.47,-.08,.87,.22,-.01,.38,.22,.63,.62,.42,-.21,-.03,0,-.06,-.12,.04,.61,.54,.46,-.29,.31,.1,.76,.13,-.01,-.29,-.03,.62,-.13,.62,.49,.77,.7,.02,.34,.54,.72,.04,.2,-.08,.54,-.52,-.2,.03,-.58,-.09,-.4,-.14,-.01,-.21,.17,.34,.37,-.29,.87,.81,-.11,.55,-.3,-.08,-.25,.03,.73,.81,.83,.46,.46,.37,.28,.34,.28,.51,.16,.81,.84,.5,.38,.16,.21,-.03,.33,.72,.66,-.23,.14,.12,-.12,.86,.08,.23,-.02,.51,.9,.65,.58,.82,.9,.57,.05,.37,-.06,-.21,.66,-.24,-.13,-.16,.68,.89,.53,.26,-.18,.39,.07,.62,.07,-.08,.07,-.13,.08,.06,.81,-.4,.1,-.12,.76,-.28,.77,-.1,-.26,.11,0,-.18,-.16,.92,-.09,-.25,.36,-.16,.14,.69,-.22,-.48,-.03,.07,.76,-.33,-.27,.44,.23,.3,-.12,.82,-.16,.73,.04,.95,-.09,.11,0,.11,.47,.12,.25,-.01,-.89,-.33,-.06,.49,.58,.67,.39,-.28,.14,.69,.05,.24,.2,-.05,-.03,.73,.73,-.12,.57,.77,.26,.14,-.03,.71,.83,.14,-.25,.09,.24,.33,.07,-.23,.51,.51,-.05,.05,.81,-.36,.08,.72,-.26,-.14,.46,-.12,.21,-.24,.71,-.25,.78,-.23,.1,-.17,-.15,.57,.32,-.05,.04,-.11,-.17,.95,.84,.52,.24,.61,.78,.87,.66,.8,-.2,-.06,.26,.77,-.28,.38,.04,-.17,.12,.85,.79,-.25,.76,-.07,.3,.79,.23,.16,.11,-.1,-.31,-.04,.13,.05,.54,.75,.52,.78,.24,.16,.23,.16,.47,.01,-.09,.12,.61,.94,.07,.04,-.63,.02,.77,.44,.62,.01,.88,.04,-.16,.67,-.62,.8,.7,.85,.32,.57,.1,.57,.59,0,.55,.61,.8,.32,.94,.83,.89,.22,.95,.53,.02,-.04,.95,.84,.79,.85,.77,-.31,.57,.76,.11,-.65,.9,.09,.81,-.41,-.01,.52,.32,.81,.7,-.05,.11,.19,-.25,.71,-.07,.61,.47,.62,-.33,.09,.08,0,.01,.27,.35,.07,0,.83,.13,.08,.35];export{a as rvalData};
