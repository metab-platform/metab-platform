const a=[-.4,.44,.54,-.2,.71,.03,.22,.03,.58,.11,.72,-.08,.02,-.61,.81,-.07,.33,0,-.18,-.03,.03,-.08,-.03,.68,.91,.88,-.1,-.1,.2,.02,.48,-.1,.79,-.09,.29,.14,.82,.81,.27,.47,.06,.83,.31,-.07,.03,.66,.2,.06,.38,.14,.34,-.09,.2,.77,.16,.68,.65,-.12,.17,.79,.15,.71,.66,-.09,.43,-.07,.83,.83,.08,-.06,-.11,.54,.18,-.21,.76,0,.03,.09,.41,.08,-.38,.69,.01,.81,-.17,-.04,.88,.18,-.67,.66,-.23,.06,.3,-.72,.15,0,-.65,-.15,-.12,.18,-.12,.73,.31,-.12,.38,.17,.03,.18,.87,.41,.03,.2,0,-.54,-.02,.8,.06,-.02,-.06,.88,-.06,-.01,.26,-.05,-.06,.42,.63,-.19,-.15,.89,-.15,-.35,-.08,-.04,.35,.03,-.17,.15,-.02,-.17,.71,-.06,.65,.88,-.08,-.12,.04,-.17,.66,-.12,.71,.06,-.03,.11,-.04,-.22,.1,-.05,-.16,.82,-.3,.46,.09,.13,.33,.06,.45,-.09,-.11,.84,-.03,-.04,-.17,-.29,.53,.13,.03,.18,.03,.81,.07,.08,-.03,.54,.33,0,.11,.01,-.11,-.24,-.15,.06,.15,.55,.61,.73,.44,.11,.01,-.12,.51,.65,.9,.06,-.37,.27,-.12,.08,.09,-.1,-.13,.9,-.06,.93,-.12,.22,-.07,.07,.11,.09,.4,.27,.25,.75,.52,.89,-.14,.01,.1,-.04,-.11,-.14,.82,.43,.17,-.01,.73,.47,-.16,.12,.16,.85,-.04,-.27,.27,-.07,.1,.12,.15,-.12,-.11,-.04,.17,.21,.71,.06,.06,.49,-.03,.5,.12,-.27,.42,.72,-.17,.35,-.05,.79,.29,.65,.03,-.31,.85,.47,.74,-.03,.25,.08,.56,.36,-.1,.09,.58,-.46,.1,.66,.17,.91,-.18,.08,-.01,.06,.77,.01,.08,.3,.49,-.35,.04,0,.03,.69,-.06,-.12,-.02,.54,.13,.43,-.2,.52,.77,-.13,-.08,-.08,.17,-.02,-.17,-.19,.41,.09,.75,-.09,.79,.8,-.2,.09,.78,-.29,.13,.14,-.41,.52,.24,.1,-.23,-.02,-.01,.3,.08,-.04,.39,.3,-.26,.01,.86,.54,.04,-.04,.29,.16,.64,-.47,.15,.1,-.28,.63,.23,.01,.47,.54,.69,.11,.02,.17,-.07,-.56,0,.86,.02,.14,.34,-.32,.51,-.1,.03,.05,.32,.72,.04,-.12,.19,.01,.16,.11,.04,.35,-.12,-.06,.66,.74,.52,-.02,.05,-.02,.05,.68,-.17,-.19,-.3,-.02,-.17,.05,.48,.61,-.06,.08,.74,.5,.59,.53,.43,-.4,-.29,.54,-.08,.03,.71,.62,-.09,-.09,.03,.86,.13,-.02,.46,.86,.77,0,.08,-.44,-.06,-.13,.84,.05,-.29,.7,-.18,.77,.78,.44,.48,.79,.68,.23,.05,.29,.7,.75,.25,-.32,.42,.28,-.84,-.02,0,-.14,.14,.84,-.1,.61,.55,.65,-.61,.05,-.06,.21,-.42,.01,-.55,.74,.22,.85,.38,.1,-.1,.82,.53,.23,.7,.08,.51,.86,.58,.42,.01,.06,.19,-.36,.47,.29,.14,-.07,.05,-.4,.55,.92,-.21,.03,.58,-.27,.04,-.28,.49,.58,.74,-.21,-.22,.69,.72,.06,.65,.01,.71,.09,.06,.06,-.16,.02,.03,.75,-.08,.63,.03,-.04,.23,-.07,.24,.12,.07,.63,.01,-.22,-.16,-.25,-.08,-.09,-.02,.36,-.39,.11,.07,-.15,-.05,.24,.08,-.15,-.09,.25,.46,-.03,.08,.89,.63,.42,.62,-.1,-.32,-.2,-.27,-.05,.52,.06,.28,.01,-.03,-.17,-.16,.06,-.11,.03,.41,.47,.31,-.26,.71,.66,-.11,-.28,-.01,.25,.07,.13,.58,.09,.32,.88,.73,.46,.11,.81,-.07,.11,-.03,.46,.03,-.82,.66,.58,.19,.12,.61,.78,.56,.07,.45,-.06,-.14,0,.13,-.11,.06,.8,-.12,.04,-.19,.01,.71,-.07,.06,.01,-.16,-.07,.04,-.09,-.08,-.23,.31,-.11,.59,-.13,-.05,-.11,-.17,-.03,.33,.27,.81,-.22,-.17,-.03,-.06,.78,-.18,-.12,.19,.72,-.38,.74,.17,.29,-.09,-.77,-.02,.75,.82,.02,.67,-.05,-.13,.15,.68,.33,.86,-.21,.27,.08,.15,.04,.81,.79,.58,.03,-.12,-.01,.21,-.49,.61,.79,-.43,.09,-.01,-.32,.43,.69,-.14,.16,-.43,.84,.86,-.1,-.15,-.23,-.28,-.09,-.25,-.04,.18,.16,.41,-.48,.77,.18,.43,.58,.01,0,-.21,.33,-.12,-.04,.84,-.13,.03,.11,-.22,-.15,.29,.02,-.08,-.12,.14,.55,.79,-.01,.76,.5,-.26,-.13,-.26,.38,-.46,.14,.74,0,.35,-.2,.88,-.14,-.03,-.08,.79,.42,-.15,.2,.03,-.37,.6,.83,.03,.3,-.17,.24,-.15,.27,.72,.13,.13,.4,.59,-.09,.08,-.08,.85,.13,.47,.62,.64,-.16,.17,.14,-.39,-.17,.71,-.02,-.09,-.32,.09,.12,.79,-.1,.57,.05,-.07,.74,.41,.42,.22,.04,.07,.04,-.08,-.06,.32,.73,.86,-.1,.69,.69,-.29,.12,.23,.19,-.23,.63,.63,.64,.46,-.2,-.14,-.01,.01,-.29,.73,-.1,.6,-.04,-.56,.25,.13,.81,.02,.4,-.01,.72,.04,.86,0,.09,.05,-.12,-.11,.9,-.19,-.25,-.11,.06,-.16,.07,.1,-.05,.28,.8,.03,-.15,-.05,.54,.27,.07,.43,.06,.05,.02,.57,.01,.06,.16,-.19,-.19,.22,.15,.58,.81,.07,-.31,-.33,-.33,-.28,.07,.13,-.13,-.16,.15,-.05,-.08,-.29,-.2,.09,.09,.06,0,-.02,.54,.27,.74,.82,0,-.13,.54,.63,-.02,.77,-.58,-.42,.16,.59,-.04,-.41,-.24,.3,.88,.27,-.03,.04,.06,-.11,.75,.19,-.14,.04,-.23,-.22,.18,.08,-.35,.4,.38,-.12,-.14,-.23,.09,-.26,.03,-.3,.57,.65,.61,-.11,.71,.64,-.16,.03,.49,.73,.79,.71,-.67,.13,-.07,.4,.78,.04,.13,-.05,.72,.05,-.12,.13,.74,.13,.24,.04,.03,.08,.08,-.03,.38,.81,-.25,.76,.06,.88,.11,.01,-.04,.5,.16,-.04,.02,-.43,-.14,.03,-.27,.68,-.56,.72,.09,-.01,-.07,.03,.65,.76,-.21,-.08,.13,.12,-.01,-.46,.11,.03,.03,.37,-.18,-.01,-.11,-.11,-.12,.05,.04,.07,.09,-.04,.02,0,-.15,.15,.26,-.09,.14,-.17,-.05,.18,.39,.04,.2,-.08,-.28,.47,-.36,-.39,.14,.74,-.14,.35,.21,.1,.02,.68,.1,.1,.01,-.25,.03,.2,.14,-.04,.44,.94,.02,.43,.04,-.07,.73,.09,-.07,-.08,-.11,.08,-.24,-.17,.35,-.2,.51,.15,-.06,.55,-.1,-.34,.06,-.31,.87,.19,-.02,.03,.93,-.1,.2,-.08,.54,.49,-.14,.1,.05,.16,.62,.08,.56,.71,-.13,.43,.81,-.02,-.03,.01,-.03,.06,.28,.08,-.16,-.05,.83,.04,-.39,.6,-.05,.28,.52,-.01,.13,.79,.72,-.1,-.14,-.49,.6,.63,.58,.57,.09,.57,.04,-.07,.09,.12,-.04,.07,0,-.15,.95,.03,.87,-.17,.84,-.15,.07,-.18,.07,-.02,.69,-.24,-.1,-.23,.7,.75,-.15,.13,.67,.85,-.3,.01,-.17,.87,.13,.13,.42,.7,-.1,.92,.3,.4,.05,0,-.2,-.02,.5,.17,-.16,-.08,0,0,-.11,.81,.51,-.18,.02,.82,.3,.75,.66,.48,.45,-.23,.06,-.63,.08,.42,.16,.88,.15,.64,.08,-.23,-.1,.16,-.44,-.28,.02,.8,.89,.12,.43,-.03,-.08,-.33,.17,.75,.04,-.2,.57,.57,-.43,.07,.46,-.13,.69,.09,.56,-.25,.44,.31,-.11,.59,.03,-.25,-.29,.65,-.08,.16,.78,.42,-.19,-.17,.74,.51,-.09,-.07,-.12,-.01,.14,-.03,-.26,-.03,-.47,.61,.14,.62,.63,.68,.03,-.1,-.11,.89,.83,.59,-.08,-.06,-.09,-.07,.25,.68,.01,.77,-.18,-.16,-.18,.15,.27,.26,-.24,-.06,.49,-.61,.68,.24,-.14,.11,.03,-.13,-.07,.18,-.02,.74,-.04,.67,.41,.04,-.19,.36,-.31,-.07,-.13,.5,-.05,.67,-.03,.48,-.07,.69,.17,-.06,.09,-.35,.83,.73,.42,-.45,.03,.08,.46,.63,.34,.88,.5,.23,.16,.17,.75,.03,-.33,.87,-.02,.13,.69,-.68,.17,.01,-.11,.04,.63,.86,-.07,.13,-.04,-.2,-.37,-.2,-.15,.47,.72,.25,.07,.02,.68,-.48,.45,-.11,.26,-.3,.04,.02,.61,.45,-.18,.02,.8,.23,.04,.19,.37,-.05,-.16,.13,.07,.33,.55,.09,.14,-.01,.15,-.32,-.05,.38,.56,-.04,-.04,-.43,0,.54,.08,.04,-.24,-.28,.13,.14,.56,.1,-.08,-.2,-.43,.14,-.28,.12,-.13,-.08,.01,-.07,.23,.23,.08,.32,.6,-.13,.37,.1,.22,.89,.4,-.2,.23,.68,-.24,-.17,-.11,.08,.51,.53,.8,.28,.15,-.24,-.17,.6,.63,.06,-.02,-.1,.89,-.06,-.04,.1,-.07,.6,.09,.12,.1,.11,.18,.58,-.02,.06,1,-.03,0,.72,-.03,.8,.88,.02,-.24,.14,.06,.04,.7,-.23,.79,-.04,-.16,-.06,-.16,.08,.35,-.36,-.14,.13,.86,.83,.76,.63,-.11,.08,.03,-.13,-.16,.31,-.08,.17,.58,.19,-.07,.18,.29,-.06,-.09,-.37,.04,.48,-.22,.51,.38,.29,-.14,-.03,.35,-.09,.37,-.22,.6,.17,0,-.01,.2,-.33,.59,.25,-.04,-.17,.36,.07,.05,.1,.57,.06,.12,.76,.03,-.37,.29,.8,.29,-.17,.71,.75,.35,.26,.21,-.1,.2,.76,-.22,.34,.74,-.22,-.11,.34,.17,.03,.29,.76,-.06,.21,-.02,-.27,.6,.07,.56,.47,-.03,-.16,.64,.33,.69,.72,-.09,.44,.57,.59,.62,-.32,-.07,.67,-.07,.7,.38,.68,.44,-.08,-.12,.75,.32,.6,.6,.16,-.24,.42,.58,.22,-.04,.61,.13,.83,.03,.65,.46,.79,.74,-.04,.58,-.13,-.08,.34,.85,-.3,-.04,.54,.44,.44,.22,.21,.48,.54,.85,.72,.21,.06,.02,.42,-.01,.71,-.05,.18,.9,.27,.4,.36,.23,.72,.55,-.12,.09,.53,.38,.35,.51,-.2,.21,.75,.34,.12,.62,.18,.7,.13,.77,-.18,.27,.19,-.15,0,.15,.07,.46,.55,.25,.49,.05,.21,-.06,-.1,.53,.77,.61,.76,.83,-.23,.31,-.03,.07,.34,-.05,-.08,.72,.34,.77,-.17,.4,-.25,-.03,.13,.01,.42,-.28,.05,.75,.67,.61,.65,-.13,.49,.24,.42,.31,-.53,.46,.39,-.29,.67,-.1,.46,.01,.48,.55,.02,.81,-.13,.21,.62,0,.09,.64,.17,-.01,-.01,-.04,.1,-.03,0,.72,.73,.8,-.4,.69,.69,.8,.84,.78,.82,.06,-.15,-.08,.79,-.01,-.3,-.06,.04,.06,.01,.73,.47,.32,-.04,.87,.17,0,.57,.22,.63,.59,.47,-.29,.09,.03,-.09,.03,.09,.48,.46,.45,-.15,.42,.12,.77,-.03,.11,-.29,.05,.54,-.17,.52,.46,.69,.62,0,.37,.56,.77,-.04,.17,-.04,.7,-.46,-.23,.12,-.49,-.05,-.43,-.05,.02,-.19,.1,.42,.38,-.17,.89,.69,-.06,.42,-.14,-.14,-.26,.09,.71,.71,.8,.43,.41,.48,.29,.47,.34,.52,.09,.84,.78,.61,.39,.26,.24,-.01,.35,.75,.55,-.24,.13,.23,-.02,.88,.19,.25,-.1,.65,.8,.67,.44,.72,.83,.53,.07,.38,-.05,-.25,.59,-.23,-.13,-.17,.68,.81,.57,.32,-.11,.34,.1,.52,.07,-.15,.07,-.11,-.08,-.1,.75,-.45,.2,-.07,.75,-.15,.76,-.05,-.28,.3,-.01,-.12,-.11,.84,-.04,-.22,.49,-.11,.17,.69,-.15,-.45,-.18,.05,.83,-.17,-.29,.51,.26,.34,-.06,.79,0,.8,.03,.88,.03,.16,.08,.09,.55,.23,.09,-.13,-.85,-.19,-.11,.54,.65,.65,.39,-.26,.21,.73,.12,.22,.03,-.05,-.08,.8,.62,-.06,.58,.77,.35,.07,-.03,.64,.84,.1,-.2,.27,.24,.46,.15,-.14,.41,.61,-.04,-.01,.69,-.22,.15,.75,-.18,-.06,.53,-.14,.05,-.24,.72,-.41,.77,-.24,.07,-.19,-.14,.58,.32,-.2,-.06,-.12,-.14,.83,.77,.39,.17,.43,.65,.83,.77,.8,-.03,-.14,.28,.8,-.17,.36,-.05,-.14,-.02,.8,.83,-.17,.81,.01,.27,.67,.23,.28,-.08,.02,-.33,-.14,.13,.11,.56,.66,.57,.66,.25,.09,.36,.16,.45,.09,.12,.09,.66,.93,.07,-.02,-.68,.12,.65,.38,.53,-.01,.88,.07,-.07,.75,-.73,.83,.64,.78,.13,.6,-.03,.57,.53,.14,.61,.45,.88,.36,.86,.85,.74,.13,.86,.42,.07,-.07,.92,.87,.83,.82,.78,-.17,.57,.69,.18,-.56,.9,-.06,.7,-.34,-.04,.54,.36,.8,.71,-.07,.11,.21,-.27,.63,-.02,.58,.44,.65,-.18,.06,.06,-.04,.1,.13,.57,.18,-.02,.8,-.01,.21,.41];export{a as rvalData};
