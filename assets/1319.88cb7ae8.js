const a=[-.41,.51,.75,-.09,.87,-.1,.21,-.2,.31,.28,.62,.05,-.04,-.72,.77,-.05,.34,.03,-.18,-.01,-.06,-.12,-.01,.6,.69,.82,-.04,.08,.21,.06,.45,-.15,.87,.02,.25,.11,.92,.73,.29,.66,-.02,.85,.51,-.05,.07,.59,.17,-.12,.23,.05,.26,-.02,.42,.79,.23,.53,.49,-.06,.22,.75,.19,.8,.71,-.08,.28,.06,.84,.76,.04,-.05,-.07,.67,.1,-.14,.85,.03,-.06,.14,.51,.08,-.49,.61,-.13,.76,-.13,-.09,.74,.08,-.73,.63,-.12,.04,.03,-.71,.17,-.16,-.74,-.05,-.17,.18,-.09,.75,.34,-.12,.36,.12,-.01,.02,.81,.43,-.07,.19,-.06,-.64,-.04,.84,.06,0,-.3,.63,-.13,.01,.33,-.18,0,.36,.75,-.37,.03,.96,-.32,-.48,-.19,-.03,.45,-.11,-.17,.08,.08,-.12,.79,-.01,.61,.75,-.05,-.16,-.02,-.22,.57,-.21,.75,-.14,-.04,.08,-.25,-.15,.04,.06,-.17,.72,-.22,.53,.01,.09,.06,.08,.48,-.01,-.24,.73,-.03,-.01,-.27,-.38,.53,.1,-.08,.17,-.01,.87,-.05,.1,.05,.8,.34,-.15,.2,.18,-.02,-.23,-.14,-.1,.14,.44,.61,.84,.51,.16,.04,-.14,.35,.52,.95,.04,-.49,.4,-.06,.02,.04,-.14,-.3,.81,-.01,.88,-.06,.19,-.09,-.13,.12,-.04,.35,.24,.27,.82,.4,.95,-.27,.06,.2,.07,-.12,-.11,.69,.68,.2,.03,.74,.36,-.13,.1,.17,.8,-.27,-.33,.02,-.3,.13,.09,.18,-.09,-.12,-.09,.22,.09,.81,-.02,.1,.3,.02,.77,.17,-.16,.25,.8,-.26,.32,-.05,.73,.22,.59,.09,-.33,.9,.72,.73,-.01,.32,.06,.65,.19,-.07,-.01,.47,-.53,.02,.57,.17,.92,-.11,.01,-.2,.05,.76,-.19,-.16,.51,.43,-.29,-.02,-.01,.08,.88,-.05,-.15,.12,.41,-.07,.46,-.24,.41,.76,-.13,-.14,-.05,.22,-.02,-.14,-.13,.67,.17,.71,-.04,.77,.79,-.18,-.02,.82,-.29,.04,.03,-.54,.46,.18,.09,-.12,.03,.08,.24,-.12,-.17,.3,.53,-.27,-.04,.93,.74,.06,-.03,.47,.04,.64,-.48,.16,-.01,-.38,.52,.26,.05,.63,.76,.47,.1,-.06,-.03,-.04,-.67,.09,.95,.18,.07,.32,-.27,.25,-.33,.15,.05,.28,.68,.07,-.09,.15,.02,.14,.12,.03,.35,-.02,.01,.74,.82,.69,-.09,.13,-.07,-.05,.88,-.25,-.24,-.29,.05,-.1,-.07,.68,.38,-.02,.08,.73,.67,.57,.49,.66,-.53,-.37,.68,0,.1,.77,.74,-.06,-.38,.03,.87,.15,-.08,.21,.94,.88,.05,-.01,-.45,-.33,-.36,.58,.08,-.26,.82,-.28,.81,.9,.5,.56,.7,.67,.08,.14,.28,.88,.78,-.01,-.32,.28,.25,-.89,-.1,-.13,-.21,-.01,.95,-.17,.46,.73,.73,-.71,.07,-.07,.04,-.42,-.05,-.47,.79,.1,.96,.52,.19,-.13,.76,.59,0,.84,.03,.55,.85,.71,.14,.14,-.09,.24,-.43,.48,.55,.09,.05,-.29,-.36,.77,.92,-.16,-.05,.56,-.35,0,-.27,.57,.55,.77,-.24,-.16,.63,.84,.19,.72,-.11,.75,-.02,.18,-.03,.01,-.16,.02,.72,.03,.82,-.07,-.11,.28,-.02,.25,.32,.08,.66,-.1,-.19,-.23,-.29,-.05,-.02,-.04,.36,-.49,.18,.11,-.07,-.11,.23,.09,-.07,-.05,.25,.64,0,.09,.95,.82,.69,.63,-.12,-.34,-.25,-.23,-.01,.7,.05,.09,-.27,-.06,-.21,-.14,.12,.03,-.02,.61,.7,.2,-.31,.78,.87,-.15,-.34,.04,.22,.09,.25,.6,-.04,.3,.83,.88,.53,.1,.92,-.15,.04,-.01,.61,-.26,-.79,.61,.77,.19,.08,.59,.86,.78,.12,.66,-.02,-.09,-.22,.21,-.06,.03,.87,-.15,-.09,-.21,0,.88,-.28,.09,.09,-.25,-.13,-.02,-.14,-.2,-.1,.25,-.07,.65,-.36,-.09,-.28,-.22,-.04,.28,.3,.77,-.25,-.32,-.1,-.04,.75,-.24,.07,.25,.75,-.5,.74,.06,.28,-.04,-.78,-.08,.9,.76,.07,.65,0,-.17,.02,.89,.52,.93,-.07,.26,.12,.16,-.11,.59,.76,.33,.1,-.06,.01,.31,-.42,.58,.85,-.47,.08,-.08,-.42,.6,.73,-.24,.23,-.51,.8,.81,-.38,-.14,-.19,-.34,-.18,-.14,-.36,.36,.15,.58,-.52,.75,-.09,.25,.73,-.03,.05,-.18,.44,-.08,-.03,.78,-.22,.14,-.02,-.13,-.16,-.05,.1,-.12,-.19,-.1,.64,.89,-.05,.71,.61,-.23,-.16,-.19,.58,-.52,.16,.82,.11,.23,-.2,.95,-.19,.15,-.13,.62,.51,-.29,.19,-.05,-.47,.35,.91,-.04,.32,-.09,.04,-.1,.2,.79,.12,-.07,.5,.61,.02,.25,-.01,.8,.14,.52,.71,.74,-.2,.03,.02,-.42,-.21,.81,.01,-.1,-.31,.02,-.15,.9,-.02,.76,.02,.04,.79,.66,.52,.19,.07,.01,0,-.19,-.19,.42,.68,.87,-.02,.85,.65,-.42,.18,-.12,.25,-.29,.73,.7,.47,.28,-.18,0,.01,-.03,-.21,.82,-.23,.56,-.21,-.66,.13,.16,.91,.1,.19,-.3,.7,-.05,.94,-.07,.08,-.04,-.11,-.17,.95,-.2,-.16,-.04,0,-.08,-.04,.2,-.09,.42,.77,-.11,-.32,-.08,.68,.14,.05,.3,.05,-.1,.05,.4,-.08,.08,.12,-.04,-.11,-.03,-.01,.49,.9,-.13,-.36,-.41,-.26,-.3,.06,-.01,-.36,-.34,.14,-.05,-.09,-.36,-.08,.13,-.03,-.06,.04,.07,.55,.22,.79,.9,-.05,-.16,.27,.77,-.23,.8,-.69,-.54,.17,.73,0,-.44,-.21,.47,.86,.13,-.01,.06,-.03,-.06,.66,.19,-.14,.11,-.26,-.17,.18,.05,-.3,.55,.24,-.04,-.18,-.4,-.02,-.37,-.05,-.33,.52,.78,.81,-.04,.88,.72,-.05,-.11,.76,.85,.83,.74,-.82,.08,-.03,.45,.85,.14,0,-.07,.64,-.04,.05,-.14,.82,.12,.23,-.24,-.09,-.1,-.12,-.1,.31,.86,-.14,.79,-.06,.8,.1,-.16,-.06,.55,.15,-.05,-.01,-.6,-.18,.09,-.39,.68,-.69,.66,-.11,-.17,-.05,-.04,.62,.85,-.32,-.1,-.1,-.01,-.25,-.45,.16,.09,.05,.31,-.36,-.08,-.3,-.13,-.22,.05,-.01,-.01,.09,.02,-.07,.1,-.07,.16,.3,-.02,.23,-.08,0,.13,.35,-.09,.16,-.3,-.26,.3,-.39,-.46,.15,.73,-.01,.44,.27,.17,-.06,.75,.08,.17,.02,-.27,-.08,.22,.05,-.08,.38,.92,-.26,.46,-.05,-.2,.9,-.05,-.08,-.09,-.12,.12,-.29,-.09,.43,-.21,.5,.28,-.11,.38,-.21,-.29,-.03,-.34,.79,.15,.01,-.04,.76,-.01,.05,.02,.28,.73,-.07,.11,.05,.15,.84,-.04,.5,.85,-.23,.51,.87,.02,-.14,.08,-.05,.07,.28,.09,-.23,-.1,.63,0,-.38,.72,-.14,.54,.54,-.29,-.04,.81,.77,-.36,-.29,-.48,.34,.79,.36,.7,0,.65,-.04,-.1,.1,.13,-.02,-.03,-.06,-.11,.77,-.01,.89,-.22,.83,-.04,.13,-.32,.06,-.09,.65,-.12,-.16,-.31,.78,.89,-.21,.05,.84,.79,-.38,.01,-.43,.85,.15,.06,.3,.76,-.06,.84,.56,.57,-.09,.03,-.35,.04,.61,.15,-.2,-.05,-.16,.08,-.04,.56,.39,-.13,-.11,.74,.3,.85,.71,.58,.44,-.19,.21,-.67,0,.4,.18,.94,.16,.49,-.01,-.35,-.13,.11,-.36,-.34,.07,.92,.95,.12,.69,-.01,-.32,-.59,.02,.84,.02,-.21,.66,.69,-.39,.08,.39,-.05,.79,.02,.61,-.43,.71,.53,-.26,.79,.15,-.27,-.34,.73,-.14,-.05,.76,.57,-.13,-.19,.74,.35,-.06,-.02,0,-.01,.1,-.04,-.12,.1,-.43,.69,.13,.8,.55,.58,.02,0,-.06,.95,.87,.75,-.06,-.03,-.06,.06,.23,.69,.03,.74,-.17,-.11,-.06,.2,.03,.28,-.26,-.32,.57,-.69,.84,0,-.31,.12,.09,-.05,0,.08,.05,.77,-.05,.65,.32,.07,-.4,.43,-.28,-.24,-.17,.46,-.13,.49,-.18,.24,.01,.87,.17,-.02,.1,-.22,.76,.79,.44,-.37,-.13,-.12,.6,.54,.42,.8,.33,.04,.03,.18,.8,.06,-.39,.95,.02,.18,.87,-.82,.27,-.16,.05,.1,.47,1,-.02,.1,-.25,-.23,-.29,-.19,-.24,.73,.78,.46,.04,.02,.81,-.4,.32,-.08,.23,-.48,.03,-.02,.68,.23,-.3,-.18,.65,.1,-.01,.21,.37,-.03,-.13,.08,-.05,.37,.41,.02,.05,-.02,.08,-.25,-.15,.37,.53,-.12,-.25,-.47,-.15,.56,0,-.05,-.26,-.48,-.03,.05,.63,.02,-.22,-.37,-.44,.16,-.48,0,-.33,-.25,.03,-.16,.27,.21,0,.32,.61,-.06,.35,.04,.19,.96,.34,-.32,.21,.86,-.28,-.19,-.07,.29,.74,.43,.73,.1,.14,-.24,-.06,.72,.77,.11,-.12,.01,.91,-.07,-.03,.18,-.03,.41,.11,0,.05,.02,.15,.76,-.06,.07,.86,-.14,.02,.72,.04,.8,.74,.15,-.23,.13,.05,.12,.74,-.39,.78,0,-.33,-.04,-.21,.07,.3,-.41,-.23,.18,.61,.86,.65,.67,-.12,.04,-.03,-.07,-.16,.31,-.02,.2,.61,.23,-.09,.26,.32,-.11,-.15,-.54,.01,.56,-.15,.55,.36,.27,-.14,-.15,.31,-.13,.34,-.28,.54,.17,-.14,-.05,.19,-.43,.64,.17,-.04,-.1,.4,.13,-.06,.04,.46,.06,.08,.84,.01,-.38,.26,.89,.17,-.08,.54,.54,.34,.18,.15,-.15,.14,.8,-.3,.39,.55,-.13,-.03,.22,.2,.08,.31,.83,-.08,.21,.01,-.33,.54,-.03,.26,.54,-.06,-.08,.68,.31,.88,.8,-.12,.66,.64,.73,.31,-.35,-.07,.61,.09,.59,-.01,.63,.58,-.01,-.04,.65,.51,.64,.54,.13,-.12,.55,.49,.2,-.11,.58,.23,.77,.07,.76,.69,.49,.71,0,.62,-.21,0,.35,.78,-.39,-.02,.67,.49,.46,.08,.16,.58,.72,.82,.79,.01,-.02,-.02,.17,-.15,.84,-.09,.13,.78,.2,.35,.4,.05,.77,.77,-.17,.02,.69,.1,.24,.75,-.2,-.02,.55,.27,.14,.55,.13,.67,.14,.72,-.25,.31,.02,-.13,.03,.2,.02,.31,.74,.14,.47,.13,.17,-.03,-.1,.65,.61,.59,.61,.78,-.29,.14,-.17,.09,.28,-.02,-.18,.66,.44,.71,-.11,.56,-.3,-.07,.2,-.14,.37,-.33,.1,.88,.87,.73,.8,-.02,.73,.21,.43,.22,-.58,.4,.31,-.47,.58,-.12,.57,-.05,.72,.53,.07,.83,-.12,.01,.46,.05,.15,.58,.1,-.29,.01,.01,-.01,.04,.03,.82,.86,.72,-.29,.69,.68,.69,.73,.67,.91,.11,-.27,-.14,.67,.06,-.38,-.18,.15,.21,0,.9,.71,.58,-.16,.81,.31,-.01,.33,.19,.72,.53,.27,-.32,-.01,.02,-.06,-.11,.11,.71,.55,.45,-.33,.27,.09,.8,-.01,.03,-.25,.02,.69,-.1,.75,.57,.82,.78,0,.39,.54,.73,.07,.29,-.08,.46,-.58,-.18,-.1,-.68,-.03,-.44,-.07,-.07,-.25,.13,.42,.42,-.16,.86,.87,-.25,.67,-.42,-.04,-.32,.01,.8,.89,.89,.51,.29,.4,.31,.37,.31,.5,.12,.79,.88,.54,.35,.19,.22,-.06,.37,.79,.71,-.14,.13,.11,-.1,.83,.03,.29,-.07,.4,.93,.66,.67,.88,.93,.67,.02,.47,-.1,-.16,.69,-.17,-.14,-.17,.68,.87,.57,.21,-.06,.48,.15,.73,.15,-.05,.08,-.11,-.04,-.07,.7,-.43,0,-.22,.81,-.17,.7,-.23,-.25,.1,.03,-.14,-.21,.92,-.09,-.2,.38,-.05,.23,.72,-.34,-.53,-.14,.06,.69,-.2,-.27,.5,.27,.32,-.19,.85,-.18,.76,.07,.95,-.08,.14,.06,.04,.44,.16,.26,-.03,-.85,-.29,-.04,.54,.61,.72,.48,-.25,.18,.71,.1,.31,.08,-.06,-.12,.77,.8,-.05,.54,.84,.32,.17,0,.78,.86,.14,-.26,.08,.23,.32,.04,-.24,.48,.4,-.06,.01,.87,-.31,.04,.76,-.2,-.09,.48,-.02,.11,-.17,.74,-.39,.76,-.15,.04,-.15,-.11,.61,.31,-.12,.01,-.05,-.18,.93,.9,.64,.18,.69,.85,.9,.67,.84,-.08,-.01,.28,.82,-.17,.36,0,-.1,.08,.86,.77,-.37,.71,-.08,.31,.85,.23,.07,.03,-.08,-.25,-.18,.12,.11,.58,.84,.51,.83,.27,.11,.24,.22,.41,-.01,-.08,.21,.6,.91,.02,-.12,-.75,.09,.83,.36,.72,.12,.89,.08,-.07,.61,-.73,.84,.77,.91,.25,.61,.12,.67,.62,-.1,.56,.72,.74,.32,.93,.86,.86,.16,.95,.53,.11,-.02,.91,.86,.82,.91,.82,-.36,.66,.73,.11,-.65,.92,-.02,.88,-.48,-.04,.61,.36,.86,.75,-.03,0,.22,-.29,.78,-.04,.64,.43,.68,-.3,.07,.02,0,.03,.13,.31,.08,.08,.88,0,.08,.36];export{a as rvalData};
