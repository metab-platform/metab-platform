const a=[-.43,.45,.58,-.04,.83,.01,.37,.05,.44,.22,.33,-.08,.01,-.65,.46,0,.29,.09,-.09,.05,-.12,-.34,.03,.32,.65,.92,-.35,.11,.38,-.31,.5,-.45,.7,.14,-.05,.16,.64,.46,.47,.48,-.11,.94,.46,-.05,.14,.28,.11,-.24,-.07,.32,.26,-.03,.19,.76,.38,.35,.38,.14,.41,.72,.4,.72,.83,.01,.15,-.27,.91,.44,-.04,-.02,-.11,.45,.41,-.25,.87,-.07,-.15,.39,.39,-.17,-.52,.69,-.04,.91,-.17,-.36,.87,.08,-.78,.57,.21,.14,.31,-.59,.02,.08,-.77,-.33,-.12,.53,-.05,.83,.55,-.09,.66,.12,.02,.08,.7,.61,-.03,.34,.12,-.56,-.23,.77,.08,-.3,-.37,.7,.01,-.12,.2,-.04,-.07,.64,.7,-.17,-.25,.75,-.06,-.46,-.05,.1,.18,.13,.06,.33,-.32,-.06,.87,.1,.9,.88,-.01,-.19,-.07,.05,.76,-.16,.84,.01,.03,-.05,.05,.16,.14,-.12,-.3,.45,-.07,.74,-.03,.27,.37,.4,.36,-.37,.01,.79,0,-.24,-.03,-.2,.58,-.29,.02,-.13,.31,.75,0,.04,0,.55,.52,.06,-.03,.01,.13,-.23,-.1,.16,.06,.73,.72,.6,.7,.29,-.05,-.42,.34,.62,.79,-.01,-.53,.44,-.1,.36,.28,.04,-.07,.56,-.2,.7,.12,.31,.09,.11,-.3,-.26,.54,.53,.47,.71,.54,.77,-.03,-.33,.25,.27,-.06,-.1,.65,.53,.21,.07,.47,.09,.13,-.02,.33,.56,0,-.06,.25,-.2,.1,.12,.1,-.05,.08,-.13,.42,.2,.85,-.01,-.01,.44,.11,.59,.05,.18,.42,.86,-.02,.62,-.22,.89,.07,.7,-.18,-.3,.71,.55,.68,.12,-.03,.34,.59,-.09,.21,-.31,.4,-.43,.29,.45,-.24,.69,.18,-.25,-.11,.37,.7,-.11,.17,.49,.12,-.39,.04,.1,-.07,.71,-.29,-.09,.04,.46,-.14,.62,.2,.09,.9,-.09,-.1,-.01,.2,.09,.13,.22,.55,.18,.92,-.15,.55,.87,.04,.36,.72,-.13,-.04,.39,-.56,.55,.13,.15,-.35,-.06,-.22,.33,-.26,-.44,.49,.5,-.16,.04,.69,.57,.12,.32,.42,.26,.77,-.22,.08,.33,-.39,.44,.33,-.14,.65,.62,.6,.11,.28,.03,-.14,-.54,.17,.76,.43,.14,.11,-.21,.44,-.01,.3,.28,.43,.88,-.06,.26,.04,.01,-.03,.12,-.05,.29,-.23,-.03,.54,.64,.6,.06,.06,-.23,-.23,.71,-.46,-.19,-.09,0,-.14,.28,.59,.53,.22,.03,.59,.61,.77,.61,.54,-.5,-.19,.64,.09,-.06,.91,.62,.23,-.25,.03,.7,-.12,.01,.53,.77,.62,.03,.3,-.32,-.04,-.06,.68,-.01,.06,.77,-.28,.75,.83,.59,.78,.92,.89,.14,.24,.51,.64,.72,.23,-.53,.29,.49,-.85,.13,-.07,-.03,-.28,.74,.15,.47,.76,.62,-.67,.41,-.21,.07,-.31,-.12,-.67,.68,.1,.73,.31,.03,.27,.63,.4,.14,.57,-.32,.7,.63,.69,.43,.24,.16,.38,-.32,.33,.44,.06,-.09,-.05,-.31,.68,.83,.08,-.07,.43,-.12,.27,-.03,.6,.64,.92,-.14,.12,.48,.61,.4,.85,.16,.9,.05,.22,-.28,.02,.11,.39,.9,-.14,.7,-.06,-.07,.5,-.04,-.01,.23,.05,.55,.19,.07,-.08,-.17,-.01,.04,.24,.22,-.1,.01,-.02,.28,-.01,-.09,-.16,-.09,-.06,-.09,.64,.33,-.28,.77,.65,.43,.7,-.04,-.5,-.07,-.27,-.07,.57,-.17,.38,-.05,-.02,-.14,-.06,-.02,.1,-.12,.55,.61,.24,-.26,.85,.69,-.08,-.57,.27,.28,-.19,.05,.83,.25,.52,.66,.69,.74,-.16,.62,-.07,.04,-.01,.66,-.02,-.73,.53,.69,.42,-.08,.45,.88,.71,.18,.51,-.29,.13,-.24,.06,.29,.03,.56,.04,.16,-.1,.03,.72,-.19,-.01,-.06,-.02,-.12,.16,-.11,.14,-.35,.41,.23,.85,-.28,-.01,-.55,-.39,.31,.17,.47,.62,-.04,-.19,-.31,.12,.76,-.48,.02,.31,.89,-.1,.86,.02,.51,-.13,-.83,.1,.76,.63,-.03,.46,-.05,-.05,.07,.71,.53,.8,.18,.28,.02,.13,.24,.83,.88,.56,-.08,-.14,-.35,.43,-.2,.74,.89,-.42,.11,0,-.01,.42,.68,.13,.18,-.53,.92,.79,-.16,-.11,-.23,.08,-.05,-.03,-.11,.16,.17,.63,-.61,.9,.18,.56,.66,-.07,.07,-.15,.42,-.17,-.28,.81,-.12,.07,-.06,-.11,-.02,.21,.01,-.21,-.08,.12,.71,.59,-.11,.68,.44,-.34,-.43,-.35,.65,-.63,.16,.64,-.08,.43,.07,.69,-.1,.11,-.1,.37,.26,-.54,-.11,.02,-.48,.56,.57,.16,.58,-.26,-.16,-.18,.39,.67,.03,-.13,.35,.48,-.04,.28,-.37,.71,.34,.42,.58,.78,-.08,-.07,.24,-.08,.13,.76,.07,.3,-.29,.18,.02,.78,.35,.58,-.19,-.22,.88,.5,.69,.39,.29,-.04,-.28,-.33,.1,.58,.36,.84,-.36,.68,.89,-.25,.45,.12,.33,-.33,.81,.43,.62,.34,-.31,.25,-.03,-.06,-.27,.64,-.29,.7,.05,-.58,-.1,.15,.79,-.04,.39,-.08,.65,.05,.77,-.17,.16,-.08,-.09,.06,.78,.1,-.17,.04,-.18,-.04,.07,.15,-.4,.41,.7,.04,-.02,-.39,.73,.14,-.25,.51,-.14,-.04,-.26,.58,-.12,-.07,.24,.21,.2,.24,-.19,.76,.8,-.15,-.41,.03,.04,-.4,.01,.27,-.13,-.16,-.03,.11,.29,.1,.23,.34,.12,-.17,.08,-.27,.32,.07,.87,.66,.05,.24,.43,.76,-.07,.86,-.45,-.45,.46,.71,.02,-.49,-.18,.46,.82,.06,-.14,-.05,.07,-.06,.53,.21,.13,.01,.02,-.04,-.11,-.3,-.18,.73,.33,-.12,.02,-.14,-.09,.06,.01,-.38,.55,.78,.77,-.02,.7,.77,.29,.15,.5,.63,.91,.84,-.72,.38,-.04,.58,.91,-.07,-.05,.11,.78,-.01,.09,.04,.58,-.07,.16,.01,.01,.21,-.19,.08,.42,.91,.12,.94,-.09,.71,.06,-.03,-.09,.72,.14,.03,-.2,-.58,-.08,-.1,-.12,.38,-.69,.85,-.07,.05,.24,.23,.49,.87,-.11,-.32,.13,-.03,-.01,-.22,0,-.06,.4,.51,-.21,.25,-.16,-.07,.19,.08,.02,.16,.09,.07,.03,.02,-.12,.1,.11,-.16,.17,-.12,-.1,-.08,.58,.21,-.15,.02,-.18,.38,-.3,-.03,.11,1,.03,.44,.47,.07,.32,.61,.05,.04,.04,-.03,-.08,.16,.33,.05,.52,.76,.02,.35,-.03,-.22,.7,-.12,.06,-.14,.27,.03,-.24,-.24,.48,.07,.39,.26,-.09,.51,-.27,-.38,.09,.08,.7,-.23,-.1,-.19,.7,.36,.35,-.33,.46,.52,-.02,.31,.31,.43,.54,-.06,.39,.59,-.09,.64,.87,.03,-.37,.05,.02,.31,.06,.2,-.22,-.32,.84,.11,-.2,.78,-.35,.38,.82,-.07,.28,.79,.72,-.16,-.32,-.22,.54,.61,.47,.46,.03,.52,-.15,-.07,.36,.43,-.05,-.3,-.19,-.08,.69,.22,.8,-.25,.54,-.31,.01,-.34,-.03,-.15,.46,.2,-.1,-.01,.68,.77,-.23,.12,.83,.77,.03,.11,-.06,.82,-.16,.04,.4,.9,0,.72,.19,.48,-.23,.04,-.22,.31,.63,.06,.21,-.01,.07,.08,-.03,.62,.4,-.12,.29,.63,.16,.85,.67,.66,.48,.02,-.02,-.52,.32,.64,.15,.66,.09,.69,.07,-.07,-.18,-.06,-.14,-.36,.06,.78,.67,.18,.46,.29,-.26,-.43,-.03,.77,-.12,-.19,.75,.75,-.31,-.18,.59,-.17,.73,.31,.81,-.12,.55,.59,-.01,.62,.08,-.24,-.22,.55,.26,.07,.9,.73,.01,-.07,.89,.34,.01,.02,.25,.05,-.25,.38,.17,-.19,-.21,.63,.09,.76,.53,.79,.03,-.08,0,.68,.88,.55,-.1,.03,-.13,-.14,.22,.63,.01,.82,-.13,.01,.18,.04,.24,.55,-.32,-.07,.67,-.78,.7,.24,-.17,-.06,.41,-.35,-.38,.38,-.09,.68,-.07,.75,.24,.11,-.26,.35,-.36,-.1,-.1,.75,-.07,.42,.23,.33,0,.71,.11,-.08,.05,-.11,.89,.87,.65,-.19,.21,-.17,.66,.67,.65,.71,.62,.2,.17,.13,.48,.33,.01,.78,-.19,.43,.65,-.69,.45,.08,.08,.28,.45,.73,.1,.35,.1,-.12,-.33,.07,.08,.54,.87,.44,-.29,-.01,.69,-.29,.39,.28,.23,-.25,0,.01,.65,.33,-.18,.08,.44,-.02,.02,.05,.64,-.15,-.15,.28,.2,.5,.54,.22,.23,.16,.36,-.09,.06,.34,.64,-.01,-.23,-.38,-.11,.66,.32,-.14,-.31,-.59,-.08,.05,.55,.3,-.41,-.4,-.47,.24,-.47,.02,-.34,-.23,-.08,-.15,.1,.12,0,.59,.75,.08,.36,.39,.54,.74,.05,-.05,.24,.68,-.27,.05,-.12,-.04,.55,.61,.46,.29,.4,-.31,-.11,.6,.64,.19,.13,.01,.65,.09,-.1,.24,-.04,.35,.07,-.07,.23,-.19,.14,.46,-.08,-.08,.74,-.2,.12,.83,.43,.92,.87,.04,-.3,.37,.07,.45,.35,-.31,.95,-.02,-.11,-.01,-.01,.15,.1,-.47,-.29,.09,.7,.9,.73,.53,.18,-.14,-.03,-.16,.22,.23,-.28,.41,.75,.22,-.01,.09,.22,.34,-.16,-.52,-.21,.71,-.4,.74,.35,.55,-.1,.12,.27,.04,.44,-.11,.61,.48,-.33,-.09,.54,-.26,.66,.39,.1,.11,.71,.08,.02,.13,.52,-.08,.02,.87,.41,-.22,.28,.78,.36,.22,.49,.65,.39,.17,.34,-.02,.2,.91,-.21,.47,.4,.27,.35,.41,.22,-.07,.3,.81,-.05,.21,-.27,.15,.68,.24,.37,.67,-.11,.28,.52,.59,.72,.65,.27,.57,.76,.62,.46,.02,.22,.68,-.06,.75,.2,.81,.64,.02,.35,.8,.3,.64,.65,.14,-.26,.57,.74,.53,.09,.58,.31,.49,0,.65,.59,.66,.82,.05,.43,.15,-.23,.59,.5,-.28,.06,.65,.62,.58,.36,.21,.6,.57,.68,.86,-.08,-.26,.16,.42,.12,.67,.15,.14,.64,-.05,.54,.65,.31,.66,.57,-.15,.14,.41,.4,.43,.55,-.13,.18,.73,.19,.54,.77,.33,.79,.02,.81,-.18,.49,.17,.14,-.08,.06,.09,.55,.58,.17,.59,.1,.42,-.13,.11,.69,.64,.72,.65,.91,.17,.27,0,.2,.31,0,-.15,.86,.54,.87,.18,.52,.14,-.07,.37,.13,.61,.02,.09,.72,.7,.61,.64,-.02,.55,.31,.63,.36,-.4,.72,.3,-.38,.78,-.09,.7,-.02,.55,.62,-.08,.86,-.09,.18,.22,.23,.23,.41,.23,-.07,-.01,.2,.17,-.13,.04,.77,.65,.4,-.08,.78,.41,.45,.75,.86,.8,-.06,-.08,.18,.86,-.12,-.34,-.1,.26,.29,.13,.7,.59,.41,-.09,.79,.51,-.16,.57,0,.85,.46,.33,-.3,-.16,.02,-.17,.08,.18,.53,.68,.36,-.13,.52,.21,.73,0,.16,-.19,.07,.63,-.29,.56,.53,.59,.61,.01,.65,.33,.8,-.27,.26,-.01,.52,-.55,-.11,.15,-.5,-.07,-.23,-.04,-.03,-.21,.07,.61,.54,-.12,.84,.65,-.03,.51,-.31,-.34,-.43,.06,.75,.71,.89,.53,-.04,.53,.41,.54,.54,.65,.4,.82,.67,.7,.6,.41,.5,-.26,.63,.79,.68,.22,-.26,.11,.2,.88,-.01,.52,-.06,.63,.66,.86,.51,.68,.72,.74,-.05,.66,-.03,-.23,.55,.09,-.07,.12,.6,.61,.71,.46,.35,.53,.33,.61,.17,-.03,.08,.06,.03,-.05,.4,-.28,.01,-.25,.75,-.1,.67,-.38,-.05,.18,.1,-.16,-.15,.71,-.01,.12,.45,.38,.38,.9,-.37,-.33,-.4,.09,.74,-.13,-.01,.69,.52,.11,-.28,.86,.16,.9,-.07,.76,0,.46,.41,-.09,.28,.19,.14,-.07,-.62,-.13,-.13,.71,.74,.76,.42,-.27,.08,.89,.4,.59,.12,-.05,-.23,.89,.65,.07,.49,.87,.51,.42,.03,.78,.9,-.19,-.07,.34,.42,.48,.07,-.31,.52,.29,-.02,-.16,.69,-.26,-.07,.94,.17,-.06,.78,.19,-.01,-.16,.82,-.53,.48,.2,-.07,-.09,0,.44,.26,-.06,-.08,.34,.05,.68,.83,.52,-.13,.44,.59,.81,.85,.76,.11,.08,.46,.91,.15,.03,-.04,-.06,.14,.86,.87,-.29,.79,-.17,.12,.65,.16,.27,.01,.11,-.36,-.26,.09,.07,.67,.73,.74,.67,.5,.02,.46,.02,.2,-.15,-.03,-.03,.71,.74,.22,-.37,-.78,.34,.5,.26,.68,.38,.9,.36,-.01,.66,-.79,.92,.79,.81,.07,.8,.05,.73,.69,.15,.62,.51,.87,.38,.74,.93,.57,-.11,.75,.2,.53,-.15,.79,.94,.93,.81,.91,-.24,.84,.4,.02,-.51,.84,.04,.64,-.48,.02,.81,.42,.89,.83,-.21,.03,-.09,-.06,.76,.1,.52,.42,.84,.03,-.22,.09,-.27,-.06,.08,.53,0,.03,.77,.08,.11,.56];export{a as rvalData};
