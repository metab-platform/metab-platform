const a=[-.42,.36,.82,-.04,.9,.08,.21,.04,.15,.39,.39,.06,-.05,-.81,.52,.03,.23,.08,-.24,-.08,-.06,-.29,.13,.23,.49,.8,-.33,.19,.37,-.31,.52,-.36,.87,.19,.07,.17,.76,.34,.3,.62,-.11,.84,.65,-.03,.12,.19,-.07,-.19,-.08,.25,.14,.05,.36,.71,.61,.25,.31,.18,.41,.66,.48,.85,.81,-.04,.19,-.14,.89,.37,-.13,-.07,-.06,.49,.44,-.14,.82,.03,-.24,.45,.45,-.04,-.6,.52,-.17,.74,-.15,-.29,.7,.09,-.75,.51,.36,.16,.19,-.6,.07,.03,-.83,-.22,-.05,.52,-.07,.81,.57,-.14,.63,.02,-.29,-.28,.76,.65,-.11,.41,-.06,-.65,-.03,.72,.09,-.19,-.32,.49,-.09,-.16,.39,-.12,.18,.57,.75,-.15,-.13,.8,.02,-.29,-.16,.2,.35,-.1,.22,.25,-.2,-.04,.94,.08,.76,.72,.03,-.08,-.01,.12,.74,-.17,.8,-.04,-.04,-.07,.02,.35,.05,.03,-.24,.39,.23,.82,.07,.27,.24,.4,.48,-.24,.09,.66,.02,-.11,.13,-.11,.69,-.17,0,-.19,.34,.79,-.15,.03,.17,.68,.65,0,.09,.25,.35,-.15,-.14,.22,.09,.64,.83,.84,.78,.36,-.01,-.28,.08,.53,.81,.03,-.57,.73,.08,.43,.36,-.09,-.01,.46,-.01,.63,.17,.28,-.02,.12,-.19,-.4,.63,.48,.47,.78,.58,.82,.09,-.16,.43,.34,-.11,-.05,.42,.75,.2,.09,.44,-.03,.1,.03,.42,.44,-.07,.04,.19,-.14,.15,.13,.23,-.04,.17,-.18,.6,.27,.97,-.13,.21,.32,.14,.72,.03,.25,.38,.95,.1,.58,-.23,.79,.1,.46,-.05,-.41,.78,.75,.65,-.03,-.02,.37,.73,-.09,.36,-.41,.21,-.54,.37,.58,-.27,.7,.19,-.12,-.01,.4,.79,-.12,.08,.7,.12,-.35,.08,.35,.01,.89,-.22,-.23,.12,.46,.03,.66,.28,.1,.77,-.07,-.23,.01,.46,.34,.15,.3,.75,.36,.75,-.04,.46,.82,.07,.37,.86,-.02,.14,.39,-.61,.61,.22,.08,-.3,-.1,-.07,.53,-.12,-.28,.51,.7,-.25,-.09,.73,.81,.17,.43,.6,.25,.86,-.16,.19,.36,-.59,.26,.46,-.01,.76,.75,.26,.18,.34,-.31,-.05,-.71,.23,.82,.53,.11,.15,-.31,.05,-.03,.45,.25,.34,.78,-.02,.4,.13,.04,.06,.13,.03,.4,-.08,.05,.78,.86,.81,-.07,.06,.03,-.02,.88,-.5,-.2,.03,.19,-.12,.21,.79,.28,.35,.13,.43,.81,.72,.69,.72,-.6,-.1,.79,.24,.02,.93,.74,.37,-.41,.14,.72,-.02,-.07,.13,.82,.83,.05,.36,-.21,-.12,-.07,.44,.14,.19,.67,-.24,.91,.9,.76,.86,.67,.75,-.15,.23,.57,.84,.83,-.16,-.55,.3,.48,-.89,.11,-.22,.15,-.3,.83,.18,.5,.79,.85,-.74,.42,.1,.18,-.42,-.06,-.53,.7,-.23,.79,.55,.08,.38,.75,.62,0,.85,-.38,.78,.59,.88,.27,.23,.19,.61,-.17,.49,.67,.03,.06,-.32,-.09,.9,.8,.11,-.21,.66,-.03,.36,.03,.72,.47,.75,-.12,.22,.7,.78,.55,.91,.11,.79,.09,.23,-.16,.35,.06,.38,.75,-.05,.92,.14,-.07,.44,0,.22,.43,0,.73,.24,.09,-.17,-.04,-.01,.09,.38,.39,-.04,.14,.08,.39,-.13,-.09,-.06,-.18,.14,-.07,.64,.13,-.32,.82,.82,.65,.66,-.09,-.45,-.05,-.4,-.12,.69,-.14,.26,-.06,-.17,-.26,-.09,0,.41,-.04,.76,.76,.04,-.21,.86,.84,-.21,-.38,.36,.17,-.09,.24,.85,.26,.58,.53,.87,.65,-.08,.74,-.21,.09,0,.79,-.03,-.73,.69,.78,.49,.17,.69,.8,.9,.25,.74,-.3,.29,-.23,.18,.05,.09,.66,.05,.24,-.18,-.06,.9,-.13,-.06,.06,-.01,-.02,.31,-.1,.19,-.13,.21,.33,.91,-.26,-.17,-.61,-.33,.34,.41,.43,.76,.02,-.15,-.3,.22,.72,-.43,.14,.29,.91,-.05,.74,.09,.57,-.09,-.82,.19,.89,.75,.08,.33,-.15,-.19,-.08,.89,.71,.85,.38,.26,.11,.04,.22,.59,.71,.24,.1,-.18,-.34,.52,-.02,.7,.8,-.4,.17,-.07,-.01,.55,.71,.14,.28,-.63,.78,.83,-.14,-.1,-.21,.14,-.24,0,-.31,.41,.23,.61,-.58,.75,.08,.41,.74,.1,-.1,-.18,.53,-.04,-.3,.83,-.03,.29,.15,-.12,-.11,-.1,.2,-.26,-.17,.06,.84,.72,-.06,.64,.6,-.32,-.41,-.27,.76,-.63,.31,.87,.08,.43,.23,.75,-.11,.22,-.14,.31,.61,-.41,-.15,-.12,-.44,.23,.68,.09,.64,-.15,-.03,-.13,.3,.67,.15,-.02,.34,.71,-.03,.35,-.26,.79,.38,.41,.59,.81,-.15,-.18,.1,.07,.24,.83,.08,.42,-.4,.23,-.06,.87,.42,.79,-.02,-.02,.86,.75,.85,.52,.36,.24,-.24,-.35,.11,.74,.25,.85,-.23,.86,.72,-.42,.54,-.19,.23,-.45,.89,.57,.54,.3,-.16,.41,-.08,.05,-.1,.86,-.24,.65,.06,-.72,-.16,.07,.88,0,.03,-.07,.62,-.12,.8,-.14,.35,-.15,-.08,.17,.81,.12,-.13,.07,-.23,-.12,.21,.22,-.33,.7,.65,-.12,-.04,-.32,.82,-.2,-.18,.49,-.04,-.07,-.17,.34,-.07,.07,.27,.4,.31,.18,-.1,.66,.82,-.1,-.37,.02,.18,-.43,.13,.1,-.13,-.3,.15,-.07,.41,.1,.37,.23,.15,-.15,.13,-.24,.52,.15,.83,.68,-.01,.28,.35,.99,-.09,.81,-.58,-.56,.57,.84,.02,-.51,-.22,.56,.77,.3,-.17,.08,-.05,-.03,.59,.06,.3,.05,.11,-.06,-.17,-.15,-.02,.75,.45,.03,.12,-.1,-.01,.07,-.11,-.35,.48,1,.87,.04,.81,.84,.37,.23,.74,.66,.84,.72,-.83,.4,-.01,.54,.89,.01,.17,.21,.61,.13,.16,-.07,.81,.05,.02,-.07,-.05,.14,-.03,.17,.15,.9,.16,.84,.15,.76,.05,-.05,-.04,.79,.12,-.03,.2,-.61,-.21,-.1,-.09,.34,-.81,.72,-.29,.07,.38,.3,.72,.84,.01,-.36,.09,.21,-.06,-.15,.13,.07,.42,.48,-.09,.33,-.09,-.2,.27,.01,.06,.13,.15,-.03,-.02,.15,.04,.14,-.01,-.1,.23,-.15,.07,-.21,.63,.21,-.21,.02,-.18,.38,-.37,-.02,.07,.78,.09,.43,.62,.14,.27,.81,.1,.13,-.02,.08,-.12,.34,.38,0,.56,.74,-.05,.34,-.11,.04,.84,-.44,-.11,-.13,.39,.09,-.29,-.15,.52,.1,.54,.34,.16,.34,-.28,-.32,.06,.14,.75,-.28,0,.02,.56,.33,.31,-.19,.19,.7,-.11,.41,.27,.5,.77,.05,.5,.7,.01,.74,.79,.04,-.23,.04,-.04,.39,.03,.05,-.26,-.26,.63,-.03,-.19,.81,-.2,.59,.78,-.07,.21,.89,.85,-.17,-.37,-.18,.17,.83,.28,.69,.08,.75,.06,-.15,.51,.48,-.09,-.19,-.26,-.21,.53,.3,.85,-.27,.47,-.25,.13,-.41,.02,-.18,.34,.31,-.2,.01,.84,.83,-.27,.02,.9,.81,.12,.09,-.1,.84,0,.01,.4,.93,0,.73,.38,.7,-.26,.08,-.2,.34,.83,.11,.29,0,.07,.22,-.02,.45,.51,-.07,.25,.7,.4,.87,.64,.75,.53,.13,.23,-.66,.38,.64,.13,.7,.07,.37,-.13,.01,-.14,.06,-.03,-.41,.08,.83,.73,.08,.67,.07,-.09,-.41,.07,.9,-.04,-.2,.83,.91,-.43,-.07,.57,0,.86,.38,.88,-.11,.76,.6,.11,.88,.04,-.31,-.14,.55,.26,-.26,.78,.61,.19,-.01,.73,.37,0,.03,.42,-.03,-.35,.42,.31,-.17,-.13,.79,.21,.87,.57,.55,.09,-.03,.02,.73,.83,.75,-.06,.03,-.08,-.05,.28,.74,.1,.81,-.09,.01,.36,.13,-.12,.59,-.36,-.15,.83,-.77,.89,-.14,-.06,-.07,.43,-.34,-.23,.35,0,.67,-.04,.79,-.03,.33,-.18,.54,-.27,-.12,-.11,.76,.05,.36,.1,.12,-.01,.89,.03,-.07,.1,.02,.72,.86,.74,.06,.22,-.03,.87,.57,.72,.75,.48,-.13,.1,.02,.5,.37,.13,.82,-.12,.45,.85,-.79,.52,.05,.16,.4,.47,.78,.08,.24,.04,-.26,-.26,.21,.09,.7,.82,.6,-.36,-.12,.85,-.04,.39,.03,.14,-.14,-.04,-.08,.8,.29,-.25,-.4,.34,.2,.01,.04,.76,-.09,-.13,.42,.29,.63,.4,.15,.31,.18,.42,.17,.14,.58,.7,-.07,-.06,-.27,.07,.69,.41,-.08,-.42,-.53,.14,.2,.59,.29,-.09,-.16,-.16,.39,-.32,-.18,-.12,.02,-.05,.1,.37,.11,-.1,.65,.74,.26,.57,.39,.61,.79,.16,-.02,.04,.87,-.34,.2,-.11,.06,.74,.51,.37,.08,.43,-.49,-.1,.84,.81,.22,.19,.01,.64,.1,-.15,.33,0,.35,.13,-.06,.28,-.21,.02,.67,-.2,-.14,.65,-.15,.23,.79,.48,.74,.73,.06,-.21,.47,.15,.56,.45,-.17,.81,0,-.06,-.03,-.09,0,.41,-.48,-.18,.15,.47,.79,.61,.74,.17,-.08,-.02,-.1,.21,.3,-.17,.56,.75,.31,-.08,.28,.46,.37,-.21,-.38,-.12,.77,-.18,.83,.57,.59,-.19,.26,.41,-.12,.43,.02,.56,.56,-.07,-.12,.55,-.1,.83,.47,.11,.13,.59,.07,-.03,.12,.54,.05,.18,.8,.42,-.36,.52,.8,.44,.25,.34,.43,.18,-.07,.44,-.09,.12,.79,-.18,.46,.28,.3,.42,.48,.32,-.19,.32,.9,-.1,.2,-.2,.11,.67,.23,.33,.75,-.17,.36,.76,.68,.91,.87,.27,.77,.85,.83,.33,.02,.14,.56,.05,.69,.04,.81,.69,.04,.39,.77,.33,.77,.57,.12,-.21,.64,.44,.49,.19,.61,.29,.41,.12,.81,.77,.44,.81,.06,.64,.13,-.23,.65,.43,-.13,0,.82,.7,.6,.32,.4,.35,.82,.69,.82,-.11,-.23,.23,.03,.1,.79,.18,.1,.56,.01,.49,.61,.27,.68,.77,-.26,-.01,.7,.25,.46,.77,-.2,-.22,.54,.4,.53,.78,.4,.83,.16,.8,-.31,.64,-.2,.17,.06,.06,-.05,.41,.77,.24,.55,.17,.5,-.01,.16,.79,.6,.79,.61,.79,.16,-.05,.02,.36,.32,-.01,-.25,.75,.6,.75,.25,.58,.15,-.08,.43,.2,.66,.08,.12,.84,.89,.85,.85,.08,.69,.51,.68,.43,-.39,.68,.15,-.32,.76,-.24,.79,-.16,.77,.71,.08,.84,-.2,.15,.22,.27,.15,.27,.3,-.06,-.07,.11,.27,-.08,-.07,.87,.91,.35,.19,.8,.38,.38,.68,.68,.9,.07,-.13,.15,.72,.02,-.51,-.22,.26,.29,.19,.88,.78,.55,-.25,.63,.53,-.22,.3,-.04,.9,.52,.3,-.36,-.12,-.12,-.15,.12,.36,.77,.69,.59,-.01,.43,.32,.86,.03,.13,-.18,.06,.82,-.12,.73,.53,.81,.79,.03,.61,.55,.81,-.27,.21,-.2,.45,-.52,-.15,.04,-.74,-.15,-.26,-.14,-.04,-.25,.11,.66,.62,-.17,.71,.83,-.29,.7,-.24,-.35,-.58,-.14,.89,.86,.88,.43,-.09,.49,.5,.5,.64,.63,.2,.84,.9,.58,.55,.47,.47,-.16,.6,.78,.85,.29,-.19,-.22,.17,.76,.2,.64,.01,.46,.84,.75,.75,.81,.77,.89,-.07,.77,-.08,-.24,.79,.34,-.17,.23,.75,.74,.82,.45,.4,.69,.49,.8,.19,.01,.08,-.04,.03,-.01,.54,-.15,.14,-.03,.91,-.22,.56,-.14,.17,-.19,.02,-.21,-.14,.75,-.05,.32,.37,.41,.37,.77,-.14,-.19,-.16,.04,.67,-.13,.14,.73,.7,.36,-.05,.79,.02,.78,.05,.82,.15,.58,.52,-.04,.31,.22,.27,-.04,-.61,-.27,-.22,.71,.78,.87,.57,-.29,0,.77,.54,.48,.14,-.2,-.15,.79,.84,.05,.51,.83,.34,.53,.2,.89,.8,-.21,.01,.26,.56,.55,.03,-.39,.49,.18,-.11,-.07,.85,-.3,-.06,.78,.3,-.08,.67,.24,.03,-.13,.81,-.46,.51,.31,.03,-.14,.02,.53,.42,-.11,.07,.41,.02,.79,.9,.76,-.03,.68,.75,.82,.75,.86,.03,.16,.47,.8,.27,.15,.02,-.19,.09,.79,.79,-.18,.56,-.1,.36,.8,-.09,.22,.15,.2,-.44,-.2,-.17,.01,.64,.88,.44,.84,.49,.02,.46,.25,.25,.04,-.18,.18,.56,.71,.19,-.27,-.71,.48,.66,.31,.85,.54,.86,.3,.02,.62,-.72,.79,.99,.87,.18,.72,.38,.85,.55,.1,.49,.79,.72,.46,.82,.83,.64,-.02,.82,.2,.53,-.21,.78,.8,.78,.81,.81,-.12,.9,.57,.33,-.66,.79,.06,.84,-.31,.04,.87,.41,.81,.81,-.14,.01,.01,.02,.86,.14,.69,.47,.79,.01,-.29,.09,-.13,-.07,.12,.27,.01,.33,.85,.12,0,.56];export{a as rvalData};
