const a=[-.28,.36,.91,.02,.82,-.01,.24,-.28,-.09,.33,.29,.16,-.1,-.72,.54,-.01,.34,0,-.28,-.05,-.05,-.13,.09,.35,.3,.56,-.03,.11,.2,-.04,.31,-.16,.65,.27,.13,.08,.74,.38,.2,.6,-.09,.61,.6,-.06,.05,.2,-.05,-.24,-.21,.08,.15,.09,.47,.74,.39,.26,.11,.17,.26,.49,.28,.62,.73,-.15,-.09,.02,.66,.41,-.12,.01,0,.48,.14,-.05,.73,.15,-.2,.26,.69,-.01,-.52,.34,-.08,.47,-.01,-.18,.42,-.03,-.63,.54,.21,.01,-.08,-.63,.13,-.25,-.71,.01,-.2,.27,-.08,.75,.47,-.19,.43,-.09,-.18,-.17,.53,.53,-.01,.13,-.04,-.66,-.08,.6,.26,-.16,-.46,.23,-.22,-.15,.38,-.29,0,.37,.7,-.25,0,.67,-.27,-.46,-.09,.06,.38,-.23,-.1,.08,-.03,.12,.67,.23,.4,.43,.12,-.08,.01,-.12,.52,-.17,.75,-.13,.06,.02,-.32,.1,-.2,.15,-.09,.43,-.04,.66,-.1,.07,-.02,.19,.31,-.09,-.08,.49,.07,-.1,-.15,-.42,.43,-.09,-.03,-.04,.13,.67,-.09,.08,.06,.8,.35,-.2,.23,.31,.15,-.14,-.16,-.02,.05,.4,.58,.81,.63,.55,.08,-.18,.19,.27,.66,.03,-.56,.55,-.01,.15,.12,-.2,-.28,.38,.05,.51,.17,.09,.04,-.21,-.08,-.29,.41,.31,.36,.79,.26,.69,-.18,-.07,.33,.1,-.04,-.11,.26,.92,.16,.15,.38,.04,.01,.06,.11,.46,-.46,-.35,-.14,-.35,.2,.05,.22,.04,.03,-.32,.35,-.13,.73,-.18,.11,.23,.1,.88,.08,.05,.3,.68,-.14,.4,-.11,.48,.03,.36,.06,-.26,.66,.92,.56,-.03,.09,.13,.8,-.21,.03,-.28,.37,-.59,.08,.37,-.12,.59,.29,-.11,-.24,.06,.51,-.3,-.1,.63,.07,-.12,.03,.33,.06,.82,-.11,-.1,.23,.1,-.13,.44,.01,.11,.48,-.11,-.22,.09,.33,.33,.27,.11,.94,.37,.46,-.02,.48,.67,-.01,.04,.6,-.12,-.04,.06,-.68,.33,-.01,0,-.14,.08,-.01,.25,-.35,-.21,.24,.65,-.13,-.14,.72,.85,.12,.1,.51,-.2,.64,-.33,.16,.04,-.52,.41,.21,.05,.85,.87,.14,.07,.01,-.23,-.07,-.61,.17,.73,.31,-.05,.12,-.23,-.06,-.21,.29,.14,.06,.53,-.03,.17,.01,.05,.05,.1,-.03,.22,.04,.07,.66,.67,.88,-.16,.15,-.04,-.12,.84,-.38,-.18,-.05,.02,.03,-.14,.88,.12,.06,.09,.45,.81,.59,.48,.9,-.63,-.42,.86,.15,.07,.66,.7,.05,-.69,.13,.6,-.1,-.08,.03,.71,.69,.04,.05,-.44,-.51,-.24,.19,.17,.1,.77,-.21,.67,.78,.62,.64,.37,.4,-.12,.29,.28,.78,.53,-.23,-.33,.09,.28,-.67,-.14,-.19,-.12,-.24,.75,-.01,.27,.89,.66,-.62,.19,.03,.04,-.37,-.12,-.35,.77,-.09,.73,.59,.19,.05,.56,.59,-.04,.82,-.24,.61,.58,.73,.01,.26,-.17,.46,-.38,.28,.9,.08,.16,-.35,-.24,.88,.62,.1,-.14,.54,-.34,.02,.02,.72,.45,.58,-.27,.01,.57,.68,.33,.68,-.19,.51,-.16,.26,-.21,.26,-.16,.11,.58,.04,.88,-.07,-.14,.3,.12,.11,.46,.12,.46,-.02,.07,-.17,-.24,.06,.18,.22,.26,-.28,.19,.22,.18,-.2,.05,-.19,-.22,-.01,.06,.79,-.08,-.15,.69,.86,.9,.41,-.15,-.4,-.4,-.27,-.14,.83,-.1,-.16,-.34,-.08,-.16,-.09,.01,.24,-.09,.85,.91,.15,-.46,.67,.87,-.17,-.41,.13,.13,-.18,.3,.61,-.07,.47,.49,.8,.54,-.18,.73,-.17,.05,.07,.75,-.37,-.48,.59,.85,.33,.02,.56,.75,.89,.16,.7,-.08,-.04,-.38,.23,-.08,.1,.66,.05,.02,-.18,-.04,.83,-.32,-.02,.07,-.09,-.24,.16,-.1,-.13,.08,-.04,.07,.69,-.42,-.06,-.55,-.33,.12,.37,.41,.59,-.26,-.28,-.18,.05,.49,-.37,.13,.46,.64,-.37,.59,.03,.47,.05,-.61,-.18,.81,.56,.15,.5,-.09,-.27,-.16,.83,.62,.68,.21,.2,.19,.05,-.13,.27,.5,.12,.13,-.08,-.07,.44,-.26,.54,.75,-.37,.03,-.12,-.26,.44,.6,-.06,.19,-.49,.53,.6,-.35,-.07,-.28,-.14,-.29,.2,-.35,.47,.15,.76,-.5,.48,-.23,.17,.62,-.05,-.07,-.1,.64,.06,-.04,.62,-.4,.29,.01,.02,-.12,-.32,.12,-.21,-.23,-.22,.68,.73,-.12,.45,.48,-.26,-.2,-.1,.85,-.52,.22,.67,.18,.16,-.11,.67,-.2,.16,-.16,.2,.57,-.3,-.01,-.07,-.36,.04,.68,-.11,.38,.02,-.19,.02,.01,.69,.16,-.2,.39,.54,.18,.48,-.13,.6,.51,.35,.77,.67,-.24,-.16,-.03,-.23,-.06,.69,.16,.09,-.23,.21,-.33,.68,.21,.84,-.07,.11,.6,.93,.68,.19,.16,.08,-.13,-.35,-.22,.69,.4,.63,-.07,.85,.37,-.63,.4,-.4,.31,-.47,.81,.63,.26,.07,-.28,.2,-.03,-.01,-.21,.66,-.28,.4,-.37,-.69,-.29,.02,.71,.12,-.05,-.37,.49,-.1,.7,-.19,.27,-.25,.01,-.13,.66,.06,-.03,.01,-.08,.12,.05,.29,-.21,.55,.49,-.27,-.44,-.15,.87,-.07,-.17,.18,-.06,-.21,-.07,.18,-.08,-.01,.02,.21,.11,-.05,-.16,.44,.76,-.22,-.33,-.22,-.07,-.35,.13,-.38,-.48,-.58,.05,-.13,.09,-.14,.18,.11,.05,-.21,.15,-.01,.55,-.06,.67,.63,-.03,.07,.02,.77,-.33,.61,-.62,-.55,.34,.59,-.06,-.34,-.19,.59,.62,.16,-.14,.03,-.11,.11,.4,.16,-.04,.15,-.14,.12,-.02,-.12,-.22,.73,-.03,.1,-.22,-.48,-.08,-.17,-.12,-.43,.43,.76,.87,.16,.81,.68,.18,0,.87,.59,.66,.49,-.82,.16,-.04,.55,.7,.15,0,.03,.31,-.27,.09,-.37,.7,.09,-.02,-.44,-.07,-.21,-.17,-.17,.09,.67,.05,.62,.07,.51,.17,-.32,-.04,.57,.02,-.02,.08,-.66,-.24,-.1,-.29,.51,-.72,.49,-.16,-.05,.18,.01,.56,.78,-.28,-.33,-.23,.02,-.44,-.39,.14,.16,.42,.17,-.35,0,-.31,-.07,-.08,.05,-.03,-.01,.2,0,-.18,.23,.04,.06,.23,0,.19,-.13,.1,-.17,.41,0,-.11,-.15,-.13,.11,-.37,-.27,.1,.55,.02,.35,.37,.14,-.02,.67,-.04,.22,-.11,-.23,-.15,.24,.08,-.06,.33,.57,-.32,.35,-.17,-.3,.82,-.25,-.21,-.08,.07,.09,-.25,-.12,.6,.07,.44,.38,.04,.01,-.11,-.18,-.08,-.06,.49,-.15,.03,-.03,.33,.23,.06,-.06,.1,.84,-.06,.1,.14,.34,.8,-.06,.18,.83,-.3,.54,.73,.14,-.21,.1,-.08,.2,-.02,.12,-.35,-.15,.31,0,-.42,.77,-.17,.87,.62,-.37,-.16,.69,.63,-.39,-.35,-.32,.02,.75,.09,.54,.06,.6,-.04,-.2,.25,.21,-.06,-.27,-.18,-.22,.32,.05,.63,-.17,.54,-.02,.29,-.31,-.02,-.06,.48,.14,-.05,-.32,.67,.82,-.32,.04,.81,.58,-.18,.12,-.32,.6,.07,-.07,.19,.67,.09,.5,.5,.79,-.39,.14,-.26,.24,.77,.04,.02,.1,-.22,.18,.11,.23,.31,-.03,.01,.46,.14,.77,.63,.79,.19,.05,.31,-.5,.06,.5,.12,.66,.06,.2,-.07,-.36,-.23,-.03,-.06,-.39,.2,.75,.65,-.08,.91,-.05,-.31,-.56,-.07,.77,-.02,-.15,.82,.73,-.31,-.19,.45,.15,.83,.11,.67,-.34,1,.73,-.18,.9,.25,-.17,-.38,.54,.02,-.22,.49,.71,-.02,-.13,.49,.3,.09,.14,.23,0,-.24,.16,.15,-.02,-.14,.74,.05,.84,.46,.42,.08,.04,.12,.65,.61,.85,-.15,.11,-.02,.13,.2,.41,.03,.64,-.1,-.05,.18,.17,-.19,.4,-.3,-.5,.77,-.6,.79,-.21,-.4,0,.46,-.08,-.11,.11,.12,.74,-.08,.65,.15,.47,-.38,.45,-.14,-.47,-.14,.46,-.06,.36,-.05,-.11,.04,.83,.08,.04,.09,.17,.47,.65,.51,-.1,-.02,-.18,.84,.3,.65,.49,.26,-.17,-.06,.07,.61,.21,-.19,.71,.09,.41,.75,-.79,.34,-.29,.08,.21,.3,.71,.21,.1,-.29,-.33,-.33,.01,-.2,.86,.64,.76,-.27,.02,.74,-.19,.01,-.1,-.04,-.42,.01,-.1,.6,.01,-.41,-.3,.1,.29,-.09,.05,.49,-.05,-.19,.23,.1,.62,.28,-.1,.13,-.08,.11,-.01,-.09,.5,.51,-.21,-.26,-.4,-.18,.56,.07,.04,-.02,-.49,.05,.06,.72,.02,-.22,-.44,-.35,.23,-.5,-.16,-.38,-.27,-.02,-.03,.5,.11,-.14,.4,.63,.1,.52,.01,.33,.68,.2,-.38,.12,.75,-.32,-.15,-.09,.26,.84,.39,.43,-.09,.13,-.37,-.13,.66,.7,.24,-.08,-.02,.61,-.02,-.03,.21,.02,.17,.06,-.21,0,-.23,.1,.61,-.13,-.11,.44,-.14,.01,.72,.24,.55,.43,.01,-.06,.17,0,.32,.59,-.49,.58,.14,-.27,-.04,-.12,-.03,.44,-.39,-.5,.2,.21,.7,.36,.53,-.06,.02,-.07,-.06,.08,.27,-.01,.35,.65,.24,-.23,.49,.54,.08,-.28,-.52,-.02,.73,-.09,.62,.53,.35,-.14,-.03,.51,-.12,.24,-.19,.46,.29,-.03,-.14,.33,-.38,.77,.26,.06,.12,.26,.1,-.11,.07,.51,-.12,-.03,.72,.1,-.38,.38,.75,.11,.05,.22,.34,.16,-.18,.22,-.17,-.01,.61,-.25,.39,.21,.1,.22,.17,.41,.01,.07,.63,-.02,.14,-.09,-.17,.47,.1,.01,.73,-.02,.16,.58,.39,.83,.66,.04,.9,.68,.67,-.05,-.14,.12,.32,.4,.32,-.34,.56,.77,.21,.18,.47,.55,.57,.25,.13,.01,.7,.23,.29,-.03,.36,.3,.48,0,.7,.92,.13,.56,.13,.56,.01,-.11,.51,.47,-.36,.11,.83,.53,.53,.05,.2,.29,.83,.52,.69,-.28,-.23,.02,-.1,-.33,.75,.03,.16,.41,-.26,.22,.41,.13,.76,.87,-.11,-.2,.85,-.01,.18,.84,-.16,-.27,.2,.26,.23,.48,.28,.59,.16,.63,-.22,.46,-.14,.14,-.02,.12,.05,.01,.9,-.04,.49,.23,.33,-.09,.06,.81,.38,.49,.4,.5,-.13,-.05,-.23,.17,.34,0,-.31,.46,.62,.49,.04,.73,-.14,-.1,.45,-.04,.42,-.08,.18,.73,.81,.66,.68,.01,.87,.31,.57,.19,-.45,.38,.13,-.61,.48,-.12,.76,-.11,.92,.54,.08,.6,-.19,-.1,.09,.23,.17,.28,.1,-.35,-.04,.19,.07,.01,-.02,.65,.81,.43,-.01,.53,.5,.33,.48,.44,.72,.09,-.26,-.22,.41,.07,-.47,-.17,.26,.35,.12,.82,.94,.77,-.29,.53,.66,-.16,.04,.07,.69,.5,.07,-.3,-.1,0,-.07,-.02,.17,.93,.42,.55,-.37,.13,.14,.61,.07,-.07,-.21,-.09,.85,-.03,.86,.4,.7,.68,.15,.57,.45,.64,-.02,.23,-.05,.11,-.59,-.15,-.3,-.66,-.01,-.31,-.05,-.04,-.21,.06,.52,.58,-.14,.56,.85,-.54,.89,-.44,-.1,-.45,-.05,.74,.82,.76,.41,-.07,.41,.32,.25,.39,.22,.16,.63,.72,.44,.3,.22,.18,.07,.55,.56,.86,.1,-.1,-.09,-.03,.54,.03,.41,.07,.24,.77,.54,.9,.84,.74,.78,-.03,.67,-.05,-.16,.77,.1,-.23,.05,.57,.68,.62,.23,.13,.67,.29,.89,.2,.02,.08,-.09,.12,.08,.5,-.37,-.03,-.13,.67,-.2,.29,-.26,-.1,-.21,.04,-.24,-.25,.68,0,.05,.34,.15,.17,.53,-.37,-.45,-.08,.08,.44,-.2,-.1,.57,.45,.45,-.11,.74,-.28,.57,.06,.7,-.03,.28,.22,-.01,.28,-.01,.2,.12,-.54,-.35,-.15,.62,.63,.65,.51,-.23,-.02,.45,.25,.25,.2,-.07,-.1,.57,.78,-.05,.47,.59,.22,.3,.29,.81,.66,-.08,-.34,.12,.35,.36,-.11,-.36,.48,-.02,-.19,.03,.81,-.27,.07,.57,.06,-.03,.51,.2,.14,-.06,.73,-.18,.48,.11,-.03,-.19,.16,.6,.21,.07,.14,.18,-.03,.75,.78,.92,-.1,.89,.86,.67,.44,.6,-.09,.19,.24,.58,0,.18,.11,-.14,.29,.76,.52,-.52,.47,0,.54,.81,.07,-.09,.26,.06,-.27,-.14,-.01,0,.53,.84,.34,.85,.24,.11,.18,.39,.24,.17,-.26,.38,.46,.61,-.04,-.22,-.55,.27,.71,.25,.92,.33,.66,.17,-.07,.41,-.46,.57,.75,.79,.29,.63,.37,.71,.51,-.24,.13,.93,.43,.59,.71,.62,.75,-.11,.72,.37,.3,-.06,.64,.61,.66,.67,.72,-.46,.67,.63,0,-.56,.63,.13,.82,-.46,.08,.66,.37,.74,.75,-.06,0,.07,-.24,.89,-.12,.57,.44,.57,-.3,-.15,.07,.03,-.24,.13,.07,.04,.04,.68,.12,-.1,.39];export{a as rvalData};
