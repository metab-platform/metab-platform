const a=[-.43,.33,.89,-.11,.9,-.05,.25,-.26,.05,.31,.48,.07,-.07,-.75,.67,-.07,.28,.01,-.2,-.17,-.02,-.19,.11,.47,.5,.74,-.08,.22,.28,-.03,.44,-.17,.8,.11,.19,.12,.87,.53,.28,.64,-.07,.78,.65,-.07,.09,.33,.05,-.16,0,.13,.16,-.05,.45,.83,.38,.41,.28,.02,.26,.68,.32,.77,.81,-.09,.11,-.04,.81,.57,-.11,-.04,-.04,.53,.21,-.09,.82,.08,-.13,.26,.6,.05,-.54,.55,-.11,.66,-.09,-.18,.63,.01,-.76,.61,.14,.07,.04,-.73,.1,-.13,-.77,-.12,-.16,.29,-.1,.82,.45,-.19,.47,.07,-.09,-.05,.75,.5,0,.23,-.03,-.72,-.07,.74,.22,-.15,-.33,.44,-.11,-.12,.38,-.27,.01,.41,.72,-.35,-.05,.86,-.26,-.46,-.13,.09,.41,-.24,-.05,.15,-.01,-.09,.82,.03,.57,.64,-.03,-.12,-.01,-.12,.62,-.21,.82,-.13,-.01,.03,-.27,.04,-.07,.05,-.2,.58,-.1,.64,.04,.11,.06,.15,.48,-.09,-.09,.65,-.05,-.07,-.16,-.45,.55,-.03,-.09,.04,.09,.82,-.08,.1,.09,.81,.41,-.08,.14,.23,.13,-.18,-.09,-.01,.12,.48,.7,.89,.67,.34,-.03,-.22,.23,.48,.86,.01,-.57,.58,-.01,.15,.2,-.14,-.28,.59,.01,.71,.02,.25,-.02,-.13,-.03,-.23,.47,.33,.39,.86,.38,.88,-.2,-.03,.28,.04,-.1,-.15,.5,.85,.24,.03,.53,.17,-.02,.09,.19,.64,-.31,-.27,-.01,-.29,.19,.08,.18,.01,-.04,-.22,.37,.04,.84,-.09,.16,.24,.02,.82,.15,.03,.3,.82,-.15,.44,-.07,.65,.05,.41,.03,-.43,.81,.88,.65,-.06,.17,.12,.83,-.03,.03,-.18,.38,-.54,.11,.58,-.01,.78,.06,-.07,-.23,.14,.76,-.23,-.05,.67,.21,-.29,.01,.27,.01,.91,-.07,-.16,.15,.29,-.04,.55,-.03,.24,.68,-.06,-.15,-.05,.28,.26,.09,.09,.86,.38,.65,-.04,.62,.81,-.1,.09,.79,-.24,-.04,.11,-.67,.42,.12,.13,-.17,.02,-.03,.32,-.23,-.18,.37,.69,-.21,-.12,.88,.91,.11,.09,.63,-.02,.73,-.41,.12,.08,-.52,.45,.24,.15,.82,.84,.24,.16,.06,-.12,-.12,-.72,.05,.89,.34,.14,.17,-.25,.05,-.21,.26,.11,.18,.64,-.04,.13,.03,.1,.09,.16,.02,.28,.02,.07,.78,.83,.87,-.08,.16,0,-.06,.92,-.36,-.14,-.23,.03,-.07,-.08,.85,.23,.11,.19,.58,.83,.65,.56,.85,-.66,-.4,.85,.08,.07,.79,.74,.04,-.49,.05,.8,-.04,0,.07,.87,.86,.12,.07,-.44,-.35,-.24,.38,.13,-.03,.82,-.28,.84,.93,.61,.67,.57,.58,-.17,.27,.38,.88,.76,-.24,-.44,.28,.31,-.85,-.07,-.16,-.11,-.13,.89,-.08,.4,.86,.81,-.74,.14,.03,.05,-.39,-.07,-.47,.84,.01,.89,.55,.06,.07,.76,.71,.02,.89,-.19,.67,.72,.75,.11,.23,-.08,.4,-.38,.4,.78,.08,.06,-.32,-.27,.89,.82,-.05,-.09,.59,-.27,.08,-.21,.7,.5,.71,-.23,.02,.69,.84,.35,.77,-.13,.68,-.02,.27,-.17,.11,-.09,.1,.68,.06,.93,.02,-.11,.4,-.04,.28,.38,.04,.67,-.02,-.08,-.2,-.24,-.07,.03,.19,.41,-.38,.19,.15,.17,-.12,.12,-.04,-.25,0,.14,.76,-.02,-.04,.88,.93,.81,.56,-.09,-.38,-.27,-.32,-.14,.8,-.08,-.05,-.31,-.12,-.2,-.11,.05,.14,0,.79,.88,.11,-.42,.73,.94,-.18,-.4,.14,.19,-.04,.17,.67,-.01,.47,.68,.92,.6,-.13,.86,-.17,.16,.07,.75,-.29,-.71,.69,.87,.28,.15,.63,.82,.88,.11,.67,-.07,.01,-.22,.22,-.09,.1,.78,.02,-.01,-.18,-.07,.93,-.29,.04,.04,-.1,-.19,.22,-.09,-.09,-.08,.13,.08,.75,-.39,-.09,-.47,-.27,.09,.39,.39,.76,-.2,-.28,-.15,.07,.7,-.34,.2,.35,.76,-.4,.73,.09,.45,-.11,-.77,-.08,.93,.75,.07,.52,-.07,-.25,-.06,.9,.69,.84,.14,.3,.11,.08,-.04,.48,.65,.26,.08,-.13,-.06,.42,-.28,.63,.84,-.46,.1,-.11,-.32,.58,.7,-.12,.25,-.52,.71,.79,-.38,-.1,-.3,-.16,-.16,-.05,-.38,.4,.12,.69,-.55,.66,-.17,.24,.76,.03,-.04,-.15,.58,-.07,-.07,.8,-.28,.19,.06,-.1,-.12,-.19,.16,-.17,-.21,-.18,.71,.84,-.03,.65,.65,-.31,-.22,-.26,.74,-.58,.22,.83,.12,.29,-.07,.85,-.16,.26,-.08,.44,.65,-.3,.07,-.08,-.48,.16,.82,-.14,.39,-.13,-.03,-.06,.13,.73,.19,-.1,.41,.68,.05,.44,-.09,.77,.33,.45,.76,.76,-.18,-.14,-.02,-.27,-.03,.81,.02,.1,-.35,.16,-.25,.88,.21,.85,-.04,.05,.75,.83,.66,.25,.15,.05,-.1,-.33,-.12,.61,.51,.82,-.05,1,.55,-.54,.41,-.25,.27,-.45,.85,.64,.4,.25,-.28,.15,-.02,.01,-.16,.82,-.3,.52,-.22,-.67,-.08,.11,.87,.08,-.05,-.33,.7,-.07,.89,-.1,.24,-.1,-.06,-.11,.86,-.04,-.16,.01,-.06,-.01,.1,.21,-.19,.62,.7,-.12,-.3,-.14,.84,.03,-.12,.34,-.02,-.14,-.05,.23,-.07,.04,.15,.15,.06,-.01,-.02,.52,.89,-.13,-.29,-.28,-.14,-.32,.06,-.15,-.39,-.49,.09,-.09,.1,-.16,.12,.19,.08,-.11,.04,-.03,.65,.07,.81,.8,-.05,.03,.18,.85,-.26,.79,-.62,-.54,.32,.71,.04,-.41,-.19,.61,.79,.23,-.13,.07,-.06,-.06,.59,.03,-.01,.02,-.16,-.1,.06,-.06,-.28,.69,.17,-.02,-.15,-.38,.01,-.18,-.06,-.38,.44,.86,.88,0,.91,.69,.16,-.02,.88,.71,.79,.66,-.83,.16,-.09,.51,.82,.06,.07,.02,.54,-.15,.2,-.25,.79,.13,.07,-.3,-.06,-.1,-.08,-.08,.19,.84,0,.74,.08,.74,.08,-.23,-.07,.62,.11,-.06,.05,-.66,-.22,-.01,-.32,.57,-.81,.62,-.08,-.12,.12,.04,.68,.89,-.3,-.28,-.12,.08,-.26,-.38,.12,.07,.25,.37,-.31,.03,-.25,-.14,-.08,.03,-.04,.04,.22,-.08,-.08,.13,.01,.1,.19,-.08,.23,-.13,.03,-.14,.44,.06,-.02,-.16,-.2,.32,-.44,-.34,.12,.68,.14,.35,.39,.18,.03,.8,.04,.13,-.01,-.18,-.09,.29,.11,-.05,.45,.79,-.24,.39,-.08,-.17,.93,-.16,-.17,-.05,.07,.04,-.27,-.11,.58,.03,.6,.34,.05,.22,-.2,-.24,-.1,-.08,.72,-.05,-.02,.02,.56,.11,.15,-.06,.27,.8,-.14,.12,.05,.28,.86,-.09,.43,.89,-.22,.56,.85,.01,-.18,.08,-.06,.18,.06,.09,-.27,-.19,.53,-.01,-.42,.84,-.2,.73,.64,-.32,-.05,.85,.81,-.43,-.31,-.42,.13,.81,.18,.72,.08,.73,-.05,-.14,.23,.23,-.02,-.21,-.16,-.27,.58,.06,.83,-.23,.69,-.16,.24,-.26,0,-.12,.57,.07,-.08,-.25,.82,.94,-.23,.08,.87,.77,-.24,.02,-.36,.79,.04,.02,.33,.78,-.05,.73,.55,.72,-.26,.07,-.38,.13,.75,.14,.02,-.05,-.13,.1,-.05,.4,.39,-.17,.06,.71,.28,.9,.71,.74,.42,-.02,.2,-.62,.1,.53,.24,.84,.02,.35,-.06,-.26,-.18,.09,-.19,-.37,.06,.91,.84,.01,.83,.01,-.29,-.57,.02,.88,.03,-.19,.81,.78,-.32,-.04,.47,-.03,.92,.14,.73,-.3,.85,.59,-.19,.91,.13,-.19,-.36,.57,.02,-.25,.69,.64,.07,-.09,.64,.37,-.06,-.02,.19,-.07,-.14,.12,.07,-.03,-.3,.83,.17,.86,.59,.5,.02,-.07,-.04,.84,.79,.86,-.08,-.04,-.11,-.01,.28,.65,.01,.77,-.19,-.17,.13,.1,-.22,.38,-.27,-.38,.76,-.72,.88,-.23,-.37,.07,.28,-.13,-.07,.13,.01,.82,-.05,.72,.23,.32,-.36,.57,-.28,-.34,-.11,.53,-.09,.49,-.15,.03,-.09,.92,.13,-.06,.08,-.05,.65,.78,.54,-.25,-.04,-.1,.81,.45,.59,.73,.29,-.18,.05,.1,.7,.15,-.25,.88,.01,.32,.87,-.86,.28,-.18,.2,.14,.42,.85,.03,.16,-.2,-.27,-.35,-.04,-.15,.78,.79,.66,-.16,-.03,.89,-.31,.25,-.08,.06,-.46,-.04,-.05,.74,.21,-.29,-.39,.43,.22,-.08,.18,.53,-.08,-.2,.21,.09,.58,.4,0,.15,0,.18,-.02,-.04,.5,.58,-.08,-.21,-.38,-.09,.65,.12,.06,-.13,-.41,.05,.11,.7,.13,-.18,-.4,-.39,.24,-.48,-.11,-.32,-.19,.06,-.01,.45,.23,-.05,.44,.7,.05,.52,.08,.35,.85,.28,-.28,.03,.86,-.33,-.08,-.05,.27,.86,.45,.59,-.05,.18,-.37,-.21,.8,.83,.11,-.05,-.09,.79,.03,-.1,.27,-.03,.35,.05,-.11,.04,-.13,.09,.74,-.17,-.09,.69,-.12,.04,.79,.23,.7,.65,-.06,-.22,.22,.09,.3,.68,-.41,.72,.02,-.23,-.05,-.23,.02,.43,-.47,-.34,.25,.42,.82,.59,.67,-.13,-.02,-.02,-.09,-.04,.25,-.11,.34,.69,.28,-.2,.34,.48,.07,-.25,-.54,-.07,.69,-.17,.67,.53,.38,-.13,-.01,.48,-.1,.33,-.19,.55,.31,-.06,-.09,.34,-.39,.75,.28,.04,-.02,.41,.09,-.03,.15,.51,-.05,.09,.82,.14,-.35,.44,.88,.21,.03,.36,.49,.2,-.05,.3,-.16,.15,.74,-.25,.45,.46,.07,.2,.29,.31,0,.22,.81,-.11,.21,-.13,-.18,.54,.1,.18,.72,-.04,.12,.72,.41,.92,.84,.04,.85,.75,.78,.16,-.23,-.02,.47,.27,.53,-.13,.68,.77,0,.17,.64,.56,.7,.45,.19,-.1,.71,.31,.27,-.01,.53,.33,.6,.08,.79,.87,.31,.69,0,.71,-.03,-.15,.53,.62,-.37,.07,.83,.55,.62,.13,.27,.41,.89,.7,.81,-.11,-.14,.07,-.04,-.19,.84,.02,.16,.61,-.05,.33,.39,.19,.83,.86,-.15,-.14,.8,.08,.27,.86,-.18,-.23,.44,.36,.24,.62,.27,.73,.15,.76,-.26,.45,-.16,.02,.06,.15,.02,.15,.86,.12,.49,.18,.37,-.02,.05,.83,.59,.65,.6,.69,-.14,-.08,-.2,.21,.32,.01,-.25,.63,.63,.65,.06,.71,-.15,-.02,.4,-.05,.48,-.16,.19,.87,.9,.8,.8,-.03,.82,.37,.6,.29,-.45,.48,.13,-.5,.61,-.16,.71,-.13,.88,.62,.11,.77,-.21,-.03,.33,.2,.12,.42,.21,-.31,-.02,.11,.1,-.01,-.04,.78,.9,.55,-.15,.69,.58,.54,.66,.6,.88,.15,-.19,-.13,.61,.06,-.5,-.17,.25,.33,.12,.93,.86,.67,-.25,.71,.53,-.12,.22,.09,.75,.6,.26,-.38,0,-.02,-.06,.02,.14,.88,.53,.61,-.34,.26,.24,.82,-.05,.02,-.26,.01,.88,-.06,.84,.51,.8,.81,.15,.53,.53,.77,-.04,.23,-.14,.3,-.59,-.16,-.2,-.74,-.03,-.29,-.1,-.11,-.23,.07,.51,.55,-.15,.75,.93,-.49,.84,-.44,-.12,-.51,-.05,.86,.92,.89,.53,.1,.42,.35,.38,.42,.45,.11,.79,.85,.53,.37,.28,.23,.03,.52,.72,.86,.05,-.02,.02,.03,.72,.13,.42,.07,.38,.89,.69,.83,.91,.88,.81,0,.64,-.05,-.25,.81,.07,-.22,-.08,.74,.84,.66,.31,.14,.64,.27,.84,.25,-.07,.08,-.1,-.03,-.08,.64,-.43,.07,-.13,.84,-.18,.55,-.26,-.16,-.07,.04,-.24,-.27,.85,-.05,.05,.38,.16,.24,.68,-.34,-.52,-.2,.1,.65,-.13,-.18,.57,.44,.41,-.13,.81,-.16,.71,.12,.87,.01,.27,.22,0,.38,.05,.34,-.03,-.7,-.31,-.21,.65,.7,.79,.56,-.23,.07,.62,.26,.32,.08,-.13,-.14,.71,.87,.03,.51,.79,.3,.32,.15,.87,.79,-.06,-.28,.2,.35,.39,.06,-.33,.48,.17,-.14,-.02,.91,-.31,.08,.66,.03,-.04,.54,.07,.04,-.16,.81,-.34,.62,.05,.09,-.22,.02,.66,.34,-.15,.09,.19,-.04,.88,.93,.79,.04,.82,.9,.85,.61,.81,-.01,.03,.29,.75,.06,.23,.01,-.21,.16,.85,.71,-.42,.61,-.06,.43,.85,.17,.04,.09,.06,-.36,-.15,.07,.09,.63,.91,.46,.92,.33,.06,.31,.34,.33,.09,-.17,.33,.61,.8,-.01,-.16,-.65,.23,.82,.25,.89,.31,.82,.17,-.05,.6,-.65,.75,.85,.93,.25,.69,.25,.75,.58,-.13,.36,.86,.64,.47,.88,.79,.83,.03,.88,.44,.3,-.09,.83,.78,.76,.84,.83,-.4,.74,.75,.18,-.61,.81,-.01,.91,-.47,.06,.7,.35,.84,.81,-.02,.06,.11,-.23,.9,-.09,.73,.46,.67,-.25,-.07,.06,-.03,-.03,.08,.24,-.02,.04,.84,-.01,.05,.42];export{a as rvalData};
