const a=[-.36,.37,.81,-.05,.89,.13,.23,.04,.12,.39,.37,.11,-.08,-.8,.51,.06,.25,.08,-.23,-.04,-.07,-.3,.15,.22,.46,.79,-.32,.21,.38,-.31,.56,-.35,.86,.23,.09,.16,.76,.32,.3,.62,-.1,.83,.67,0,.1,.18,-.06,-.15,-.09,.24,.14,.1,.37,.7,.64,.23,.3,.23,.4,.66,.5,.85,.81,-.02,.18,-.14,.88,.35,-.1,-.07,-.08,.5,.45,-.18,.82,.01,-.23,.48,.44,-.02,-.58,.52,-.15,.74,-.1,-.3,.69,.07,-.76,.49,.39,.12,.18,-.58,.08,.02,-.83,-.2,-.03,.54,-.08,.82,.6,-.15,.64,-.01,-.3,-.31,.76,.65,-.11,.42,-.07,-.63,0,.71,.1,-.2,-.32,.47,-.15,-.21,.42,-.16,.18,.56,.77,-.13,-.12,.78,.02,-.3,-.14,.21,.34,-.08,.23,.23,-.2,.01,.94,.12,.75,.7,.08,-.08,-.03,.15,.74,-.19,.81,-.04,-.01,-.01,.01,.37,.04,.08,-.25,.37,.23,.83,.01,.28,.23,.41,.48,-.23,.11,.65,.08,-.1,.15,-.12,.68,-.17,-.01,-.21,.36,.79,-.19,.04,.16,.67,.66,-.02,.12,.28,.36,-.11,-.12,.23,.08,.63,.83,.85,.8,.37,0,-.26,.06,.53,.79,.04,-.55,.76,.08,.43,.37,-.12,-.01,.44,0,.61,.21,.3,-.04,.11,-.19,-.41,.62,.49,.47,.78,.56,.8,.1,-.16,.47,.33,-.11,-.07,.41,.75,.15,.14,.42,-.05,.1,.04,.43,.42,-.07,.06,.17,-.16,.15,.15,.23,-.05,.16,-.19,.62,.25,.97,-.16,.21,.31,.13,.71,.03,.26,.36,.95,.13,.59,-.22,.77,.09,.47,-.02,-.38,.78,.75,.64,-.04,-.03,.39,.74,-.1,.37,-.41,.19,-.54,.39,.56,-.27,.7,.22,-.12,-.02,.39,.79,-.12,.07,.71,.11,-.31,.08,.35,.02,.87,-.22,-.23,.15,.44,.02,.67,.3,.08,.76,-.09,-.25,.06,.47,.34,.15,.32,.75,.34,.74,.01,.45,.82,.07,.37,.86,-.02,.12,.38,-.63,.62,.25,.05,-.3,-.08,-.09,.54,-.15,-.28,.52,.71,-.22,-.11,.72,.81,.15,.44,.61,.24,.85,-.13,.24,.36,-.57,.24,.45,-.04,.76,.75,.24,.13,.34,-.34,-.06,-.71,.27,.81,.55,.05,.14,-.3,.02,-.01,.48,.29,.31,.76,-.04,.41,.1,.06,.07,.11,.02,.42,-.1,.05,.78,.87,.8,-.12,.08,0,-.05,.88,-.5,-.21,.03,.18,-.08,.21,.79,.27,.34,.11,.42,.82,.71,.69,.71,-.6,-.1,.79,.29,.02,.93,.74,.39,-.47,.16,.68,-.02,-.13,.1,.81,.82,.03,.37,-.19,-.14,-.06,.42,.15,.2,.66,-.26,.9,.89,.78,.87,.67,.74,-.13,.22,.58,.83,.82,-.16,-.51,.27,.49,-.88,.12,-.21,.15,-.3,.83,.21,.48,.78,.85,-.73,.44,.11,.17,-.42,-.06,-.5,.7,-.26,.79,.59,.09,.39,.75,.62,-.02,.85,-.38,.78,.57,.88,.25,.23,.19,.6,-.18,.5,.67,.02,.11,-.36,-.09,.91,.79,.11,-.22,.65,0,.37,.03,.73,.46,.75,-.12,.26,.7,.79,.57,.9,.11,.78,.12,.23,-.16,.38,.07,.4,.74,-.05,.92,.13,-.08,.47,.06,.24,.43,0,.74,.24,.09,-.18,-.03,.06,.14,.39,.42,-.03,.18,.07,.4,-.17,-.09,-.06,-.15,.18,-.07,.65,.12,-.32,.8,.83,.67,.66,-.13,-.47,-.04,-.41,-.13,.69,-.16,.25,-.08,-.16,-.25,-.1,-.01,.44,-.07,.76,.76,.02,-.23,.85,.84,-.22,-.39,.37,.18,-.08,.28,.84,.26,.59,.52,.86,.67,-.09,.74,-.23,.06,-.02,.79,-.04,-.69,.67,.77,.51,.18,.69,.8,.89,.28,.74,-.31,.31,-.22,.18,.05,.08,.67,.04,.25,-.19,-.05,.9,-.14,-.08,.11,.01,-.01,.32,-.08,.2,-.07,.19,.34,.9,-.27,-.2,-.63,-.35,.35,.42,.46,.76,.04,-.14,-.31,.22,.72,-.43,.17,.31,.91,-.04,.74,.07,.58,-.06,-.79,.18,.89,.75,.11,.31,-.14,-.22,-.07,.89,.72,.85,.41,.26,.15,.04,.23,.58,.7,.21,.13,-.15,-.35,.56,0,.7,.79,-.38,.16,-.1,0,.56,.72,.16,.32,-.6,.77,.82,-.15,-.07,-.19,.15,-.28,.05,-.35,.43,.26,.63,-.56,.75,.07,.4,.71,.11,-.11,-.16,.55,0,-.31,.81,-.02,.3,.15,-.09,-.15,-.13,.23,-.3,-.18,.05,.85,.72,-.09,.63,.59,-.31,-.39,-.22,.77,-.61,.33,.87,.06,.43,.23,.74,-.12,.24,-.13,.3,.61,-.41,-.16,-.13,-.44,.21,.67,.1,.64,-.09,-.04,-.1,.33,.67,.14,-.03,.34,.72,-.02,.36,-.27,.78,.38,.39,.57,.81,-.16,-.2,.14,.09,.27,.82,.13,.43,-.37,.21,-.07,.87,.44,.79,-.01,.01,.86,.74,.85,.53,.38,.24,-.25,-.36,.12,.74,.24,.85,-.23,.85,.72,-.43,.55,-.22,.26,-.48,.89,.6,.53,.29,-.15,.43,-.06,.05,-.08,.86,-.24,.64,.05,-.75,-.18,.06,.87,.05,.04,-.08,.59,-.15,.79,-.16,.38,-.15,-.08,.16,.79,.15,-.09,.05,-.2,-.16,.2,.27,-.34,.72,.66,-.16,-.03,-.32,.82,-.23,-.19,.48,-.05,-.06,-.16,.34,-.09,.06,.28,.43,.32,.17,-.09,.66,.82,-.1,-.39,.04,.19,-.45,.18,.11,-.14,-.28,.15,-.09,.42,.11,.39,.24,.18,-.15,.17,-.23,.53,.13,.83,.65,-.01,.29,.31,1,-.1,.81,-.61,-.59,.58,.84,-.03,-.49,-.22,.56,.76,.3,-.17,.09,-.09,.03,.58,.12,.31,.08,.12,-.01,-.17,-.14,-.04,.76,.44,.07,.11,-.1,-.03,.1,-.14,-.38,.48,.99,.87,.1,.81,.83,.38,.24,.75,.66,.83,.72,-.85,.42,-.01,.58,.89,.04,.18,.2,.59,.14,.18,-.08,.81,.06,-.01,-.08,-.07,.15,-.03,.17,.15,.9,.19,.83,.15,.75,.06,-.05,-.05,.79,.14,.01,.21,-.64,-.24,-.15,-.06,.32,-.79,.71,-.33,.05,.39,.31,.73,.84,.02,-.36,.09,.2,-.08,-.13,.15,.11,.43,.47,-.09,.33,-.1,-.21,.28,-.02,.06,.09,.13,0,-.03,.18,.07,.16,-.01,-.07,.25,-.16,.11,-.2,.64,.21,-.21,.02,-.2,.36,-.32,-.01,.1,.76,.1,.43,.64,.11,.27,.82,.07,.19,-.03,.08,-.17,.35,.38,-.01,.58,.72,-.07,.35,-.15,.04,.84,-.47,-.12,-.11,.4,.12,-.29,-.14,.56,.12,.54,.37,.15,.27,-.26,-.3,.06,.16,.73,-.29,.03,-.01,.54,.33,.32,-.19,.16,.7,-.1,.41,.3,.52,.77,.03,.5,.7,.03,.74,.78,.09,-.23,.05,-.02,.41,0,.08,-.29,-.27,.61,-.05,-.19,.81,-.19,.59,.78,-.08,.2,.88,.84,-.17,-.4,-.15,.14,.82,.28,.68,.06,.77,.07,-.2,.51,.47,-.09,-.19,-.27,-.19,.51,.33,.84,-.25,.45,-.21,.15,-.41,.04,-.18,.33,.34,-.18,.04,.84,.83,-.33,.03,.89,.8,.12,.14,-.1,.83,.03,-.03,.4,.93,.06,.71,.37,.71,-.29,.09,-.18,.38,.82,.07,.31,.05,.07,.25,.04,.43,.49,-.02,.24,.68,.41,.86,.63,.75,.54,.12,.27,-.67,.39,.64,.09,.68,.07,.36,-.13,.02,-.16,.05,-.02,-.41,.12,.82,.71,.08,.68,.07,-.11,-.41,.05,.9,-.01,-.18,.83,.92,-.4,-.06,.58,.04,.86,.39,.88,-.09,.77,.59,.11,.88,.09,-.35,-.13,.57,.28,-.24,.77,.59,.23,.01,.73,.36,.06,.08,.45,-.02,-.36,.44,.33,-.18,-.13,.79,.22,.87,.56,.52,.09,.01,.07,.72,.82,.76,-.06,.08,-.1,-.01,.3,.74,.15,.81,-.11,.04,.4,.16,-.12,.59,-.39,-.14,.84,-.74,.88,-.14,-.06,-.1,.44,-.34,-.24,.35,.05,.67,-.06,.8,-.03,.33,-.19,.55,-.23,-.11,-.14,.75,.09,.35,.09,.09,.03,.89,.02,-.05,.14,.01,.72,.85,.75,.06,.23,-.03,.87,.55,.72,.74,.47,-.13,.06,.07,.48,.39,.14,.81,-.1,.45,.85,-.78,.51,.03,.18,.4,.46,.77,.13,.25,.03,-.3,-.26,.22,.07,.69,.81,.61,-.37,-.1,.86,-.04,.39,.03,.15,-.13,-.05,-.1,.81,.28,-.31,-.4,.33,.19,-.02,0,.76,-.07,-.12,.43,.28,.63,.4,.1,.32,.18,.44,.18,.14,.59,.7,-.12,-.06,-.26,.07,.7,.42,-.05,-.39,-.52,.13,.21,.57,.28,-.11,-.18,-.16,.4,-.34,-.19,-.13,.01,-.04,.1,.36,.07,-.09,.66,.74,.28,.58,.4,.62,.78,.17,0,.08,.86,-.36,.2,-.08,.04,.74,.5,.34,.1,.43,-.5,-.04,.85,.81,.26,.2,.05,.63,.09,-.14,.34,-.01,.33,.15,-.08,.27,-.22,.06,.68,-.21,-.18,.63,-.14,.26,.78,.49,.73,.71,.1,-.15,.47,.1,.55,.45,-.17,.8,.04,-.05,-.04,-.08,0,.41,-.46,-.19,.16,.45,.78,.59,.74,.17,-.08,-.03,-.1,.21,.32,-.17,.57,.74,.34,-.08,.26,.47,.39,-.23,-.4,-.14,.77,-.16,.82,.57,.6,-.19,.26,.4,-.13,.44,.03,.55,.58,-.07,-.12,.56,-.1,.82,.46,.11,.16,.59,.08,-.05,.13,.53,.05,.18,.79,.43,-.36,.53,.79,.42,.24,.35,.41,.14,-.08,.45,-.13,.08,.78,-.19,.48,.25,.31,.44,.48,.33,-.2,.31,.9,-.05,.2,-.2,.13,.65,.23,.32,.74,-.15,.36,.77,.68,.9,.87,.29,.77,.85,.84,.32,.01,.17,.56,.05,.68,.02,.81,.68,.09,.41,.76,.33,.77,.56,.09,-.19,.64,.43,.49,.2,.6,.3,.39,.13,.82,.77,.41,.81,.12,.64,.12,-.24,.65,.41,-.12,.03,.82,.69,.59,.32,.41,.33,.82,.68,.82,-.11,-.23,.22,.01,.1,.78,.17,.1,.55,0,.49,.61,.27,.68,.77,-.27,0,.71,.23,.46,.78,-.2,-.25,.53,.4,.54,.78,.4,.82,.17,.8,-.33,.66,-.23,.16,.03,.07,-.04,.39,.76,.21,.55,.17,.49,-.04,.15,.79,.59,.78,.6,.77,.18,-.03,.02,.36,.34,-.03,-.25,.75,.6,.73,.29,.58,.18,-.09,.43,.2,.66,.08,.1,.84,.89,.85,.86,.1,.7,.52,.67,.43,-.38,.69,.12,-.32,.75,-.25,.79,-.17,.78,.7,.08,.83,-.22,.14,.22,.28,.18,.26,.31,-.07,-.1,.11,.28,-.06,-.05,.88,.9,.33,.2,.79,.36,.36,.68,.67,.89,.04,-.16,.18,.71,.02,-.53,-.25,.27,.29,.18,.88,.79,.54,-.26,.61,.53,-.22,.28,-.04,.9,.51,.28,-.33,-.16,-.11,-.12,.13,.4,.77,.69,.59,-.02,.42,.31,.86,.08,.15,-.18,.05,.82,-.13,.74,.53,.83,.8,.04,.6,.54,.81,-.28,.2,-.18,.43,-.52,-.16,.03,-.78,-.15,-.24,-.13,-.03,-.26,.13,.66,.62,-.17,.7,.83,-.3,.7,-.25,-.36,-.58,-.14,.89,.86,.88,.45,-.12,.48,.49,.5,.63,.63,.23,.83,.89,.55,.56,.47,.44,-.14,.57,.77,.86,.32,-.2,-.25,.18,.74,.2,.66,.03,.45,.84,.75,.75,.8,.77,.88,-.06,.77,-.11,-.24,.79,.37,-.19,.24,.75,.73,.82,.45,.39,.7,.52,.79,.17,.02,.1,-.03,.08,.04,.53,-.13,.13,-.03,.91,-.24,.56,-.14,.16,-.23,0,-.23,-.12,.74,-.06,.34,.37,.41,.37,.77,-.15,-.2,-.13,-.01,.66,-.16,.15,.72,.71,.36,-.06,.78,.02,.77,0,.81,.14,.58,.53,-.01,.3,.21,.3,-.01,-.61,-.29,-.17,.71,.77,.87,.58,-.27,-.02,.77,.53,.48,.19,-.2,-.11,.78,.83,.03,.53,.82,.32,.55,.23,.89,.78,-.21,.03,.26,.57,.55,-.01,-.41,.48,.16,-.12,-.05,.86,-.33,-.07,.77,.32,-.08,.66,.26,.07,-.13,.81,-.44,.49,.33,.02,-.12,-.01,.5,.42,-.07,.1,.42,.01,.78,.89,.76,-.03,.68,.75,.82,.74,.86,0,.16,.48,.79,.28,.16,.04,-.17,.11,.78,.79,-.19,.55,-.09,.37,.8,-.09,.23,.21,.17,-.47,-.15,-.17,.02,.66,.86,.42,.83,.49,.02,.45,.24,.22,.03,-.18,.19,.55,.7,.21,-.28,-.72,.49,.66,.33,.85,.54,.85,.33,.02,.61,-.7,.78,.99,.87,.22,.72,.4,.86,.55,.09,.47,.8,.71,.46,.81,.82,.64,-.01,.81,.22,.54,-.2,.77,.79,.76,.8,.79,-.13,.9,.55,.33,-.66,.78,.12,.84,-.31,.02,.87,.45,.79,.81,-.17,-.01,.01,.03,.86,.15,.71,.49,.78,.01,-.3,.09,-.1,-.11,.14,.23,0,.33,.85,.18,0,.58];export{a as rvalData};
