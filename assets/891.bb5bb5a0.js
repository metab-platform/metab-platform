const a=[-.46,.46,.68,-.05,.82,-.04,.35,-.04,.38,.14,.39,-.05,.02,-.69,.53,-.03,.22,.02,-.09,.01,-.07,-.47,.07,.41,.61,.91,-.37,.08,.4,-.26,.64,-.42,.76,.08,0,.18,.76,.52,.5,.64,0,.92,.41,-.06,.14,.35,.11,-.25,-.04,.33,.2,-.1,.28,.85,.47,.39,.36,.08,.37,.78,.44,.82,.89,-.09,.25,-.31,.92,.52,-.01,-.05,-.09,.53,.44,-.24,.9,-.07,-.11,.38,.45,-.19,-.52,.72,-.1,.92,-.2,-.33,.85,.03,-.83,.62,.2,.14,.24,-.66,-.03,.09,-.77,-.28,-.11,.47,-.07,.89,.6,-.07,.69,.17,.05,.14,.8,.68,-.06,.43,.1,-.62,-.22,.78,.07,-.36,-.35,.64,.01,-.19,.13,-.11,-.07,.58,.8,-.33,-.29,.82,-.09,-.44,-.12,.2,.21,-.06,.14,.4,-.31,-.16,.91,-.01,.85,.84,-.08,-.17,-.01,-.01,.8,-.23,.88,-.02,.01,-.01,-.04,.08,.13,-.08,-.29,.49,-.11,.71,.05,.35,.23,.34,.49,-.4,-.05,.83,-.09,-.34,-.04,-.22,.6,-.26,.02,-.11,.31,.83,-.03,.1,.01,.63,.67,.06,0,.06,.06,-.29,-.08,.09,.13,.67,.78,.73,.75,.17,-.07,-.38,.36,.68,.83,-.03,-.51,.52,-.08,.33,.36,.01,-.08,.63,-.15,.77,.08,.39,.05,.06,-.29,-.17,.64,.55,.5,.84,.61,.85,-.03,-.33,.28,.11,-.05,-.09,.7,.63,.14,-.04,.54,.13,.05,.04,.43,.61,-.03,.01,.18,-.17,.12,.19,.1,-.04,.02,-.19,.49,.17,.88,.02,.08,.41,.1,.6,.13,.14,.39,.9,.02,.65,-.2,.86,.08,.64,-.11,-.4,.77,.65,.72,.07,-.03,.35,.7,-.05,.21,-.15,.37,-.44,.38,.6,-.11,.74,.1,-.22,-.17,.39,.78,-.13,.1,.43,.21,-.44,.03,.33,-.01,.73,-.27,-.15,.11,.53,-.04,.76,.15,.2,.86,-.03,-.07,-.1,.19,.32,.15,.18,.62,.33,.91,-.07,.5,.93,.05,.41,.82,-.1,-.05,.44,-.63,.66,.33,.14,-.41,0,-.27,.53,-.29,-.4,.56,.43,-.18,-.04,.81,.74,.1,.34,.37,.36,.85,-.2,.12,.39,-.38,.43,.36,-.05,.72,.63,.51,.11,.32,.08,-.11,-.6,.1,.84,.35,.22,.03,-.3,.35,-.1,.3,.23,.25,.8,-.03,.26,.05,.06,.08,.13,-.05,.36,-.16,0,.75,.81,.7,.05,.1,-.14,-.17,.74,-.57,-.12,-.09,-.05,-.16,.22,.69,.53,.2,.14,.55,.7,.81,.74,.64,-.54,-.19,.73,.06,.01,.9,.58,.22,-.32,-.03,.8,-.2,.04,.22,.83,.74,.06,.28,-.3,-.07,-.15,.6,.01,.06,.81,-.36,.82,.85,.58,.77,.86,.87,-.04,.29,.46,.74,.83,.02,-.56,.31,.52,-.89,.17,-.08,-.04,-.21,.84,.05,.5,.76,.75,-.7,.38,-.11,.09,-.29,-.2,-.68,.8,.17,.81,.39,-.06,.28,.7,.54,.06,.73,-.22,.75,.71,.7,.29,.28,.23,.31,-.33,.39,.52,.05,-.06,-.13,-.28,.7,.85,.03,-.05,.51,-.02,.34,-.06,.68,.59,.92,-.14,.02,.64,.73,.4,.84,.17,.91,.19,.3,-.16,-.03,.15,.33,.78,-.12,.73,.03,-.07,.6,-.11,.2,.22,.11,.67,.21,.01,-.12,0,-.08,.03,.3,.29,-.24,.09,-.01,.26,-.03,.03,-.26,-.21,.08,.05,.72,.21,-.1,.85,.75,.6,.65,-.09,-.47,-.08,-.27,-.03,.67,-.24,.35,-.07,-.01,-.14,-.07,.01,.06,-.16,.64,.66,.1,-.31,.79,.76,-.09,-.55,.31,.26,-.28,.09,.82,.29,.57,.67,.75,.82,-.24,.74,-.14,.08,.04,.77,-.04,-.77,.61,.7,.35,.04,.51,.89,.68,.2,.44,-.34,.16,-.3,.11,.14,.15,.67,.07,.08,-.05,-.08,.76,-.18,-.01,-.02,-.07,-.12,.17,-.07,.18,-.3,.26,.2,.82,-.2,-.05,-.49,-.37,.3,.27,.44,.71,.06,-.16,-.3,.14,.84,-.55,0,.16,.88,-.2,.9,.11,.55,-.17,-.85,.09,.8,.7,.06,.45,-.11,-.09,.02,.72,.47,.86,.19,.29,.11,.11,.29,.77,.83,.54,-.01,-.11,-.28,.48,-.19,.83,.89,-.46,.13,-.05,-.16,.54,.73,.01,.23,-.51,.94,.84,-.27,-.12,-.25,-.04,-.05,-.11,-.22,.19,.14,.66,-.61,.91,.05,.39,.66,.06,-.05,-.22,.35,-.14,-.34,.84,-.02,.12,-.02,-.12,-.11,.13,.09,-.2,-.09,.01,.76,.71,-.02,.79,.51,-.37,-.44,-.33,.63,-.64,.3,.82,-.01,.51,.11,.77,-.16,.08,.01,.47,.46,-.51,-.02,.01,-.48,.5,.71,.11,.51,-.23,-.06,-.23,.32,.74,.06,-.06,.25,.62,-.1,.27,-.35,.73,.19,.35,.6,.82,-.08,-.12,.09,-.08,.2,.81,-.07,.3,-.43,.23,-.05,.83,.34,.71,-.16,-.1,.91,.6,.7,.56,.29,.01,-.29,-.45,.12,.6,.46,.9,-.38,.79,.87,-.23,.49,.06,.33,-.39,.83,.53,.69,.28,-.37,.24,-.02,0,-.1,.81,-.4,.74,.15,-.6,-.09,.18,.81,-.02,.2,-.08,.72,.06,.86,-.17,.2,-.08,-.13,.04,.83,.12,-.15,0,-.09,-.15,.16,.15,-.39,.53,.79,.06,.05,-.3,.76,.21,-.35,.56,-.08,-.07,-.31,.54,-.16,-.01,.29,.19,.18,.17,-.15,.7,.86,-.1,-.38,-.13,-.02,-.42,-.01,.23,-.12,-.22,.05,.07,.3,0,.21,.28,.11,-.11,.02,-.27,.48,.11,.96,.73,.05,.21,.41,.81,-.1,1,-.51,-.55,.45,.76,.01,-.5,-.18,.53,.81,.2,-.1,.04,0,-.16,.61,.07,.17,-.02,.03,-.15,-.03,-.2,-.25,.77,.31,-.08,.04,-.1,-.03,-.03,-.06,-.34,.6,.81,.75,-.06,.79,.71,.24,.08,.64,.67,.86,.83,-.74,.38,-.04,.59,.87,-.09,.11,.08,.77,.14,.08,-.03,.7,.03,.17,-.05,-.05,.26,-.09,.08,.3,.91,-.03,.88,-.01,.79,.04,-.06,-.1,.74,.12,.05,-.12,-.66,-.14,-.04,-.25,.4,-.69,.82,-.04,.03,.17,.28,.66,.88,-.12,-.43,.1,0,-.03,-.2,.02,-.05,.26,.57,-.13,.24,-.11,-.13,.19,-.01,-.07,.09,.16,-.02,0,.06,-.03,.11,.06,-.17,.14,-.12,-.05,-.06,.47,.14,.01,-.07,-.22,.33,-.33,-.17,.08,.86,0,.42,.51,.07,.26,.79,-.08,.07,-.04,.02,-.07,.16,.41,.01,.6,.79,-.08,.42,.01,-.01,.77,-.1,.01,-.05,.28,.03,-.23,-.24,.52,.08,.46,.32,-.04,.39,-.27,-.3,.07,.02,.78,-.07,-.13,-.1,.71,.25,.33,-.37,.48,.64,-.04,.32,.27,.36,.7,-.07,.52,.74,.01,.59,.91,-.02,-.36,.07,0,.32,.1,.15,-.22,-.43,.81,.14,-.12,.78,-.38,.47,.81,-.07,.32,.84,.77,-.3,-.34,-.2,.38,.69,.43,.53,.02,.66,-.04,-.06,.35,.42,0,-.18,-.14,-.21,.69,.22,.86,-.29,.64,-.29,.08,-.33,.03,-.09,.51,.18,-.07,0,.81,.84,-.21,.07,.78,.83,-.07,-.02,-.19,.87,-.14,-.07,.37,.89,-.1,.77,.33,.57,-.14,.08,-.35,.3,.64,.11,.27,-.1,.18,.05,-.13,.52,.41,-.19,.29,.74,.25,.83,.74,.74,.58,.05,-.02,-.63,.39,.63,.17,.75,.11,.64,.02,.02,-.13,-.01,-.1,-.28,.05,.86,.76,.12,.61,.2,-.29,-.5,.05,.82,-.1,-.26,.8,.83,-.36,-.27,.53,-.15,.85,.36,.84,-.12,.61,.54,-.02,.73,.07,-.2,-.17,.56,.27,-.14,.94,.62,.07,-.14,.83,.48,-.09,-.05,.24,0,-.16,.3,.13,-.25,-.28,.81,.14,.72,.52,.62,0,-.12,-.11,.76,.89,.71,-.11,-.06,-.18,-.14,.24,.73,.01,.88,-.18,-.09,.18,.03,.02,.55,-.33,-.12,.74,-.77,.71,.01,-.1,-.03,.26,-.39,-.37,.29,-.08,.82,-.07,.83,.21,.28,-.21,.48,-.42,-.09,-.11,.74,-.09,.49,.06,.19,-.12,.74,.15,-.05,.05,-.16,.85,.94,.63,-.21,.26,-.09,.7,.58,.65,.79,.47,.05,.2,.17,.54,.3,-.12,.85,-.17,.44,.75,-.71,.31,.06,.07,.2,.56,.8,-.01,.34,.06,-.19,-.33,.09,.06,.58,.95,.52,-.2,-.01,.83,-.32,.56,.14,.15,-.27,-.05,-.03,.81,.29,-.18,-.21,.51,.06,.07,.08,.66,-.13,-.12,.39,.23,.53,.58,.21,.35,.31,.45,-.05,.14,.46,.67,-.01,-.19,-.29,0,.74,.36,.01,-.32,-.51,-.07,.14,.45,.37,-.32,-.38,-.39,.29,-.51,-.07,-.33,-.2,-.01,-.09,.15,.26,.02,.62,.77,.04,.48,.37,.57,.81,.11,.04,.09,.72,-.3,.12,-.09,.03,.72,.57,.51,.17,.42,-.43,-.16,.8,.82,.15,.1,-.02,.71,.13,-.18,.2,-.08,.35,.03,-.13,.19,-.14,.15,.64,-.1,-.11,.77,-.21,.06,.89,.38,.87,.85,0,-.28,.34,.05,.41,.53,-.2,.87,-.01,-.06,-.06,-.2,.15,.31,-.45,-.19,.14,.63,.92,.77,.7,.06,-.12,.08,-.12,.12,.22,-.36,.45,.75,.35,-.01,.2,.36,.32,-.21,-.49,-.33,.7,-.34,.76,.49,.57,-.02,.1,.44,0,.54,-.05,.59,.48,-.26,.06,.54,-.28,.65,.29,.2,-.02,.6,.07,.02,.11,.5,-.14,.05,.87,.37,-.24,.45,.83,.44,.11,.4,.64,.27,0,.43,-.04,.23,.89,-.14,.55,.48,.2,.32,.48,.32,-.04,.31,.89,-.11,.19,-.37,-.01,.66,.29,.49,.71,-.11,.24,.7,.59,.74,.83,.27,.68,.82,.78,.54,-.08,.2,.7,-.03,.83,.17,.9,.75,-.09,.3,.87,.4,.79,.71,.19,-.21,.67,.61,.48,.11,.66,.39,.53,.03,.81,.67,.57,.85,-.05,.55,.12,-.35,.63,.56,-.16,.05,.73,.6,.68,.23,.35,.42,.74,.73,.95,-.09,-.17,.23,.23,.15,.64,.17,.14,.65,.02,.55,.51,.37,.8,.72,-.21,-.04,.59,.26,.47,.71,-.07,.07,.68,.34,.49,.84,.35,.91,.04,.91,-.25,.56,0,.1,0,.08,.05,.58,.64,.14,.57,.11,.46,-.04,.15,.78,.71,.84,.72,.93,.06,.09,-.09,.33,.36,.02,-.1,.87,.67,.83,.08,.63,.02,-.05,.41,.06,.72,.01,.15,.74,.73,.8,.8,.05,.57,.46,.68,.49,-.4,.76,.26,-.27,.86,-.14,.68,-.04,.67,.71,-.02,.92,-.15,.04,.41,.31,.21,.49,.34,-.07,-.01,.21,.11,-.1,.08,.84,.8,.5,-.14,.85,.43,.55,.75,.83,.83,-.01,-.11,.07,.88,-.11,-.39,-.11,.32,.34,.22,.78,.64,.32,-.13,.78,.53,-.25,.49,-.05,.8,.48,.28,-.32,-.14,.01,-.12,.11,.28,.62,.7,.43,-.07,.51,.37,.85,-.09,.13,-.2,.05,.73,-.21,.65,.54,.73,.76,.04,.61,.45,.91,-.31,.18,-.06,.6,-.56,-.1,.02,-.68,-.04,-.23,-.04,-.04,-.21,.05,.66,.63,-.03,.79,.73,-.23,.61,-.31,-.39,-.54,.01,.81,.77,.9,.56,.05,.51,.41,.56,.6,.68,.21,.85,.79,.63,.62,.53,.41,-.18,.59,.85,.78,.18,-.24,.18,.08,.89,.08,.57,-.05,.55,.75,.89,.63,.75,.8,.75,.01,.65,.03,-.28,.65,.13,-.06,-.01,.71,.72,.77,.44,.3,.47,.39,.66,.19,-.04,.17,.04,-.08,-.12,.49,-.29,.01,-.25,.83,-.04,.66,-.35,-.02,.21,0,-.24,-.18,.8,-.12,.18,.44,.32,.34,.9,-.37,-.38,-.37,.05,.77,-.06,.02,.71,.55,.3,-.22,.88,.03,.88,-.03,.84,.05,.46,.42,-.03,.35,.22,.29,-.06,-.66,-.22,-.16,.8,.81,.77,.48,-.19,.01,.88,.42,.49,.02,-.04,-.16,.88,.67,.05,.55,.91,.37,.4,.09,.75,.93,-.28,0,.39,.52,.56,.08,-.32,.35,.23,0,-.13,.76,-.27,-.01,.84,.15,.02,.72,.06,0,-.09,.89,-.54,.58,.18,-.02,-.23,.02,.56,.19,-.18,-.16,.31,-.12,.78,.84,.58,-.23,.6,.74,.83,.86,.86,.09,.12,.56,.93,.15,.05,-.01,-.08,.07,.88,.86,-.21,.69,-.15,.27,.64,.23,.31,-.03,.01,-.43,-.21,.14,.13,.76,.72,.73,.76,.52,0,.53,.18,.13,-.06,-.01,.03,.72,.78,.27,-.22,-.79,.34,.69,.21,.74,.35,.89,.41,.08,.72,-.78,.89,.82,.85,.15,.85,.05,.8,.64,.09,.62,.6,.84,.36,.81,.93,.67,-.21,.83,.29,.52,-.1,.82,.92,.84,.82,.88,-.17,.81,.58,.24,-.56,.85,-.07,.74,-.43,.04,.82,.51,.91,.88,-.21,0,-.11,-.01,.74,.29,.62,.5,.79,-.05,-.3,.02,-.18,-.14,.06,.49,.12,.09,.8,-.03,.15,.62];export{a as rvalData};
