const a=[-.45,.44,.82,-.09,.93,-.12,.26,-.26,.2,.28,.51,.03,.01,-.75,.71,-.06,.3,.05,-.16,-.11,-.06,-.2,.07,.54,.58,.84,-.1,.16,.34,0,.47,-.23,.84,.07,.08,.13,.91,.62,.36,.7,0,.88,.61,-.07,.1,.44,.11,-.19,.12,.13,.2,-.08,.44,.84,.29,.47,.36,-.04,.3,.76,.23,.81,.81,-.06,.26,-.04,.85,.65,-.04,-.06,-.07,.66,.18,-.12,.9,.06,-.07,.17,.51,0,-.51,.66,-.14,.8,-.16,-.19,.74,.01,-.79,.59,.03,.09,.04,-.71,.06,-.16,-.76,-.12,-.22,.24,-.07,.8,.38,-.13,.44,.11,.07,.1,.8,.49,-.01,.22,-.01,-.65,-.15,.83,.09,-.12,-.36,.53,-.09,-.06,.31,-.18,.05,.44,.76,-.42,-.07,.93,-.35,-.56,-.19,.04,.44,-.17,-.1,.14,-.04,-.12,.85,0,.68,.74,-.06,-.17,.01,-.15,.58,-.28,.8,-.19,-.04,.04,-.27,-.1,.07,.04,-.2,.63,-.19,.58,.04,.08,.04,.1,.47,-.12,-.22,.75,-.06,-.07,-.24,-.4,.59,-.04,-.08,.11,.05,.87,-.05,.06,.02,.83,.41,-.08,.13,.19,.03,-.23,-.13,-.13,.12,.49,.65,.81,.6,.17,-.01,-.26,.31,.49,.93,-.01,-.51,.48,.02,.1,.1,-.08,-.32,.7,-.04,.8,-.04,.31,-.07,-.15,-.04,-.12,.41,.3,.29,.86,.41,.94,-.28,-.07,.15,.08,-.09,-.13,.66,.75,.23,.01,.65,.25,-.1,.09,.2,.73,-.29,-.26,0,-.35,.13,.13,.18,-.05,-.13,-.11,.29,.02,.86,-.05,.15,.23,.03,.8,.17,-.05,.21,.85,-.18,.39,-.08,.74,.09,.56,.02,-.43,.87,.78,.69,-.03,.21,.11,.75,.09,-.01,-.04,.4,-.51,.05,.57,.08,.87,-.06,-.09,-.3,.12,.82,-.26,-.09,.61,.29,-.35,0,.16,0,.9,-.11,-.15,.1,.41,-.12,.53,-.13,.33,.81,-.08,-.14,-.06,.15,.14,-.02,0,.76,.31,.78,-.09,.65,.84,-.12,.05,.85,-.24,-.03,.08,-.61,.46,.17,.14,-.13,.06,-.02,.3,-.21,-.28,.38,.63,-.26,-.06,.92,.81,.12,.04,.57,.05,.72,-.42,.11,.04,-.41,.46,.22,.1,.71,.8,.39,.15,0,.02,-.09,-.7,.05,.94,.27,.18,.23,-.23,.2,-.29,.16,.07,.3,.73,.01,.03,.08,0,.13,.16,-.06,.29,-.06,0,.73,.84,.75,-.06,.15,-.05,-.06,.92,-.35,-.16,-.24,.06,-.12,-.08,.72,.37,.04,.09,.65,.73,.61,.53,.75,-.59,-.42,.74,-.04,.07,.83,.75,0,-.42,0,.84,.01,.01,.16,.94,.88,.05,.08,-.44,-.34,-.34,.48,.07,-.13,.88,-.33,.87,.96,.52,.62,.71,.72,0,.26,.31,.91,.81,-.07,-.41,.22,.3,-.88,-.1,-.19,-.17,-.1,.95,-.18,.42,.81,.79,-.73,.1,.01,-.07,-.38,-.09,-.53,.83,.17,.95,.52,.11,0,.75,.64,-.04,.81,-.08,.64,.8,.71,.12,.22,-.05,.29,-.42,.46,.64,.04,.02,-.3,-.27,.83,.91,-.11,-.04,.51,-.32,.05,-.24,.6,.57,.82,-.24,-.04,.6,.87,.26,.74,-.15,.81,.02,.27,-.14,-.01,-.12,.05,.75,.02,.88,-.07,-.14,.4,-.07,.3,.29,.1,.69,-.09,-.13,-.18,-.23,-.07,0,.06,.35,-.45,.17,.1,.06,-.1,.19,-.05,-.21,-.02,.21,.71,.09,.04,.94,.89,.73,.67,-.1,-.36,-.2,-.24,-.07,.76,-.04,.12,-.34,-.06,-.17,-.14,.09,.02,-.04,.68,.79,.1,-.38,.78,.93,-.16,-.46,.1,.26,-.05,.2,.67,0,.36,.76,.91,.62,-.05,.9,-.15,.11,.03,.68,-.29,-.75,.62,.85,.21,.06,.53,.9,.82,.07,.68,-.1,-.04,-.25,.22,.03,.09,.84,-.08,-.13,-.14,-.05,.92,-.34,.08,.06,-.18,-.16,.06,-.09,-.14,-.16,.25,.01,.71,-.41,-.1,-.35,-.26,.01,.28,.31,.76,-.21,-.33,-.16,.02,.78,-.36,.13,.24,.78,-.44,.83,.07,.34,-.11,-.77,-.05,.94,.76,.03,.55,-.05,-.2,-.06,.91,.63,.91,.04,.24,.06,.11,-.06,.6,.77,.37,.06,-.06,-.03,.3,-.36,.63,.91,-.46,.09,-.09,-.39,.67,.77,-.24,.24,-.45,.83,.83,-.47,-.08,-.24,-.23,-.15,-.12,-.39,.37,.1,.64,-.6,.79,-.15,.28,.75,-.04,-.01,-.17,.5,-.09,-.07,.78,-.23,.16,-.09,-.17,-.15,-.08,.07,-.16,-.16,-.17,.67,.87,0,.74,.65,-.3,-.28,-.25,.66,-.55,.15,.83,.03,.29,-.13,.92,-.18,.18,-.07,.5,.5,-.37,.16,-.05,-.46,.34,.88,-.08,.38,-.13,-.07,-.13,.26,.77,.13,-.14,.45,.65,0,.37,-.11,.78,.15,.49,.75,.76,-.16,-.08,.01,-.33,-.09,.85,.01,.03,-.37,.04,-.22,.91,.13,.8,-.09,0,.83,.71,.57,.25,.07,-.07,-.13,-.3,-.14,.48,.58,.9,-.1,.91,.69,-.48,.29,-.15,.31,-.35,.79,.66,.46,.21,-.28,.11,.02,0,-.15,.83,-.3,.56,-.17,-.63,.04,.17,.93,.08,.11,-.36,.74,.01,.94,-.05,.13,-.05,-.09,-.15,.93,-.1,-.19,-.01,-.03,-.04,-.02,.22,-.21,.52,.79,-.05,-.27,-.17,.75,.19,-.09,.38,.06,-.15,-.05,.39,-.09,.04,.16,.06,0,-.05,-.09,.53,.96,-.18,-.29,-.36,-.22,-.3,.01,.03,-.38,-.43,.09,.01,.03,-.26,.04,.25,.03,-.06,.01,-.01,.58,.11,.86,.85,-.06,-.08,.23,.82,-.25,.86,-.66,-.55,.21,.75,.01,-.45,-.18,.51,.84,.1,-.08,.06,-.02,-.09,.64,.18,-.07,.04,-.18,-.15,.14,-.11,-.26,.65,.16,-.09,-.16,-.37,0,-.29,0,-.38,.51,.83,.88,-.05,.94,.69,.08,-.14,.83,.77,.86,.77,-.83,.1,-.07,.5,.87,.05,-.01,-.04,.67,-.1,.13,-.21,.75,.11,.24,-.27,-.12,-.08,-.17,-.05,.32,.9,-.03,.83,-.09,.79,.08,-.17,-.12,.6,.11,-.01,-.1,-.65,-.16,.09,-.37,.6,-.72,.71,-.09,-.19,0,0,.59,.92,-.32,-.23,-.11,-.06,-.27,-.4,.1,.05,.1,.37,-.36,-.02,-.31,-.13,-.1,.06,-.08,.05,.14,-.03,-.09,.13,-.05,.13,.2,-.06,.21,-.11,-.02,-.08,.4,-.03,.09,-.25,-.22,.28,-.41,-.42,.15,.78,.06,.43,.32,.2,.02,.8,.03,.17,.02,-.2,-.03,.25,.08,-.06,.43,.87,-.29,.42,-.03,-.22,.94,-.05,-.1,-.05,0,.05,-.23,-.06,.5,-.06,.54,.29,-.1,.3,-.27,-.23,-.04,-.2,.78,.05,-.02,-.02,.68,.07,.17,-.1,.29,.77,-.1,.13,.05,.18,.85,-.15,.48,.87,-.24,.53,.92,.01,-.23,.11,-.03,.1,.21,.11,-.26,-.19,.64,.1,-.4,.82,-.25,.6,.65,-.35,-.02,.84,.82,-.48,-.28,-.42,.28,.79,.33,.72,.01,.7,-.09,-.09,.18,.16,.04,-.16,-.1,-.24,.69,.02,.91,-.24,.77,-.15,.16,-.31,.04,-.12,.56,0,-.06,-.23,.84,.97,-.21,.02,.89,.81,-.29,-.01,-.44,.87,-.03,0,.28,.81,-.07,.81,.52,.64,-.15,.09,-.42,.09,.68,.14,-.04,-.06,-.12,.07,-.08,.46,.35,-.2,.02,.73,.24,.91,.78,.65,.49,-.13,.14,-.67,.06,.48,.25,.91,.13,.49,-.01,-.3,-.18,0,-.25,-.32,.05,1,.91,.13,.74,.11,-.42,-.67,-.03,.86,0,-.23,.74,.72,-.32,-.05,.4,-.07,.87,.08,.68,-.36,.75,.57,-.26,.84,.17,-.21,-.33,.58,-.04,-.11,.82,.67,-.01,-.17,.78,.27,-.07,-.03,.11,-.04,0,.07,-.01,.03,-.37,.78,.13,.87,.52,.55,.02,-.03,-.07,.91,.88,.8,-.1,-.04,-.12,-.03,.25,.73,.02,.79,-.21,-.16,.06,.09,-.06,.36,-.24,-.36,.66,-.73,.87,-.07,-.37,.15,.13,-.13,-.1,.08,.01,.82,-.03,.68,.29,.21,-.42,.56,-.29,-.27,-.12,.54,-.15,.47,-.16,.15,-.08,.9,.14,-.03,.07,-.16,.78,.83,.51,-.31,-.09,-.19,.69,.55,.5,.79,.3,-.02,.05,.19,.75,.07,-.31,.94,-.01,.23,.9,-.85,.29,-.18,.14,.13,.37,.92,0,.17,-.23,-.25,-.35,-.13,-.21,.75,.85,.54,-.05,.03,.85,-.4,.37,.02,.16,-.53,0,-.04,.74,.18,-.27,-.25,.56,.05,-.03,.17,.46,-.04,-.13,.13,-.03,.4,.41,.01,.05,0,.14,-.17,-.14,.35,.56,-.08,-.33,-.42,-.2,.62,.08,.01,-.21,-.5,-.12,-.02,.63,.13,-.34,-.49,-.48,.2,-.59,-.08,-.45,-.31,.07,-.15,.25,.25,-.04,.39,.64,-.05,.35,.12,.3,.92,.2,-.28,.18,.89,-.28,-.12,-.04,.28,.82,.4,.65,.09,.18,-.28,-.16,.76,.85,.07,-.1,-.05,.85,.01,-.11,.15,-.07,.37,.06,-.11,.07,-.06,.1,.78,-.09,-.08,.8,-.16,.05,.77,.18,.82,.75,-.03,-.25,.14,.03,.24,.72,-.41,.8,0,-.33,-.04,-.26,.12,.26,-.45,-.25,.15,.51,.91,.66,.7,-.09,-.01,.04,-.11,-.07,.26,-.16,.25,.63,.27,-.12,.21,.3,.02,-.15,-.63,-.08,.61,-.23,.61,.36,.31,-.06,-.12,.32,-.1,.36,-.28,.49,.24,-.22,-.06,.3,-.46,.64,.22,.04,-.09,.52,.11,-.03,.12,.39,.03,.1,.89,.12,-.27,.31,.95,.22,0,.46,.51,.32,.1,.22,-.16,.22,.85,-.21,.46,.48,.01,.12,.3,.27,.03,.26,.87,-.12,.24,-.14,-.21,.51,.01,.23,.61,-.09,.06,.68,.38,.9,.84,.01,.75,.69,.75,.29,-.29,-.01,.61,.14,.65,-.03,.69,.69,-.04,.1,.7,.57,.69,.58,.15,-.12,.65,.47,.25,-.06,.57,.33,.67,.07,.83,.78,.41,.73,-.02,.65,-.13,-.13,.43,.68,-.37,.02,.73,.53,.52,.1,.2,.6,.8,.75,.86,-.07,-.07,0,.12,-.1,.85,-.01,.15,.69,.11,.37,.43,.08,.82,.84,-.19,0,.69,.08,.29,.82,-.16,-.06,.56,.3,.22,.64,.16,.73,.11,.76,-.24,.35,0,-.06,.06,.13,.04,.32,.79,.12,.44,.22,.27,-.01,0,.74,.61,.66,.62,.81,-.18,.07,-.27,.17,.23,0,-.17,.73,.55,.73,.01,.67,-.2,-.01,.29,-.17,.45,-.24,.18,.9,.9,.76,.82,-.05,.77,.27,.51,.25,-.54,.5,.3,-.48,.64,-.14,.6,-.09,.8,.57,.09,.86,-.14,-.04,.38,.15,.16,.51,.17,-.35,.04,.09,-.01,.01,0,.83,.87,.61,-.25,.73,.61,.61,.72,.7,.93,.13,-.22,-.05,.72,.01,-.42,-.19,.25,.3,.09,.93,.77,.58,-.15,.79,.42,-.1,.31,.11,.75,.51,.21,-.35,-.09,-.03,-.05,-.1,.12,.75,.58,.43,-.37,.29,.18,.86,-.05,.04,-.26,.02,.75,-.15,.78,.58,.79,.82,.09,.44,.42,.77,0,.21,-.08,.43,-.63,-.16,-.11,-.7,-.03,-.31,-.04,-.1,-.27,.07,.44,.48,-.12,.84,.93,-.3,.75,-.52,-.09,-.41,-.01,.84,.93,.95,.58,.21,.35,.35,.34,.38,.59,.22,.78,.86,.52,.39,.22,.28,-.07,.44,.82,.8,-.02,-.02,.18,-.04,.83,0,.33,-.02,.4,.9,.75,.75,.91,.96,.72,.01,.53,-.07,-.21,.69,-.05,-.14,-.14,.71,.84,.63,.32,.07,.58,.22,.76,.23,-.07,.11,-.06,-.04,-.1,.6,-.43,-.09,-.28,.87,-.11,.71,-.38,-.2,.11,.04,-.18,-.25,.93,-.11,-.06,.33,.09,.3,.81,-.46,-.55,-.33,.06,.69,-.19,-.22,.51,.36,.28,-.25,.89,-.16,.8,.08,.94,-.11,.22,.15,.01,.37,.06,.32,-.04,-.77,-.28,-.12,.61,.65,.76,.42,-.19,.14,.75,.17,.45,.06,-.07,-.19,.81,.86,.01,.47,.86,.39,.29,.08,.84,.89,0,-.24,.11,.28,.31,.06,-.27,.48,.27,-.06,-.03,.93,-.36,0,.76,-.08,.01,.53,.02,.05,-.16,.79,-.37,.67,-.03,.08,-.24,-.02,.61,.32,-.16,-.01,.11,-.16,.92,.95,.68,.02,.74,.9,.93,.71,.87,-.02,.05,.32,.86,-.05,.17,-.02,-.15,.13,.92,.79,-.39,.68,-.1,.27,.86,.3,.09,.04,-.03,-.28,-.18,.22,.12,.64,.88,.58,.9,.28,.05,.28,.14,.33,-.07,-.13,.16,.68,.88,.05,-.18,-.73,.16,.87,.31,.8,.22,.91,.17,-.04,.63,-.7,.85,.83,.97,.25,.7,.13,.72,.7,-.13,.54,.75,.75,.29,.93,.9,.86,.03,.94,.48,.26,-.03,.91,.89,.83,.92,.88,-.44,.71,.72,.13,-.62,.91,-.04,.92,-.57,.07,.66,.39,.91,.79,-.06,.02,.09,-.25,.84,-.05,.7,.48,.74,-.18,-.02,.05,-.1,-.01,.11,.33,-.03,.06,.91,-.03,.06,.36];export{a as rvalData};
