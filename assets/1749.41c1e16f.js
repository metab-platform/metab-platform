const a=[-.26,.39,.76,-.07,.76,.14,.24,-.05,.18,.23,.54,.31,-.15,-.68,.67,0,.18,.07,-.26,.02,-.05,-.14,.04,.43,.53,.71,-.07,.12,.29,-.02,.56,-.07,.85,.15,.32,.18,.82,.5,.28,.72,.08,.75,.56,-.03,.05,.41,.02,.06,.13,.11,.09,.1,.37,.64,.53,.38,.49,.14,.18,.69,.37,.87,.66,-.04,.35,-.06,.77,.53,.05,-.1,-.1,.6,.24,-.18,.72,.06,-.11,.31,.39,.07,-.48,.53,-.18,.67,.06,-.08,.64,.05,-.67,.5,.1,-.02,.08,-.62,.27,.02,-.72,-.05,.08,.31,-.11,.7,.55,-.15,.49,0,-.21,-.21,.81,.53,-.08,.35,-.05,-.61,.21,.7,.06,-.06,-.12,.49,-.23,-.15,.36,-.14,.15,.43,.69,-.18,-.1,.8,-.14,-.27,-.21,.11,.38,-.08,.04,.08,-.05,-.06,.79,.05,.53,.64,.07,-.09,.02,.03,.62,-.17,.7,-.16,.04,.11,-.15,.09,.02,.22,-.21,.57,0,.61,-.07,.22,.07,.23,.53,-.09,.01,.66,.12,-.05,-.09,-.23,.6,0,-.06,.04,.15,.81,-.15,.24,.08,.7,.54,-.16,.19,.24,.08,-.03,-.17,.02,.17,.48,.68,.86,.63,.21,.04,.02,.09,.51,.79,.04,-.38,.64,.05,.17,.23,-.13,-.19,.6,.12,.69,.14,.27,0,-.1,.02,-.16,.45,.39,.32,.76,.46,.8,-.09,.01,.47,.18,-.06,-.17,.49,.69,.01,.14,.53,.13,-.06,.05,.31,.58,-.17,-.08,.02,-.25,.22,.03,.26,-.07,.03,-.06,.51,.25,.81,-.04,.14,.3,.09,.65,.13,.02,.26,.79,.02,.46,-.09,.65,.2,.52,.25,-.32,.77,.7,.6,-.02,.17,.2,.68,.11,.14,-.14,.2,-.57,.26,.61,-.01,.77,.12,.14,-.07,.18,.76,-.18,-.1,.56,.3,-.18,-.14,.21,.08,.81,.03,-.22,.32,.4,.11,.54,.03,.29,.63,-.19,-.24,.01,.4,.21,-.07,.06,.67,.25,.62,.18,.53,.73,-.1,.21,.86,-.15,.19,.22,-.58,.5,.46,-.07,-.15,-.07,-.01,.47,-.1,-.01,.4,.57,-.19,-.15,.76,.8,.04,.17,.5,.17,.72,-.26,.28,.24,-.45,.26,.33,0,.68,.67,.33,0,.17,-.23,.05,-.68,.18,.81,.27,-.04,.25,-.3,.08,-.12,.3,.24,.16,.6,0,.13,.15,.17,.13,.07,.01,.53,-.1,.15,.87,.93,.75,-.2,.16,0,-.02,.82,-.27,-.28,-.14,.16,.07,.12,.72,.3,.11,.16,.47,.74,.54,.55,.63,-.57,-.15,.72,.26,.07,.74,.73,.15,-.44,.12,.71,.12,-.19,.01,.82,.86,-.03,.18,-.24,-.25,-.14,.44,.2,-.09,.62,-.34,.84,.81,.67,.65,.56,.58,-.01,.08,.39,.85,.78,-.1,-.3,.21,.32,-.81,.15,-.24,.01,-.05,.83,.03,.42,.62,.84,-.65,.26,0,.23,-.4,-.06,-.36,.66,-.14,.81,.62,.13,.09,.79,.61,-.08,.87,-.06,.62,.66,.73,.13,.09,.09,.39,-.28,.53,.59,.13,.28,-.34,-.22,.77,.79,-.09,-.22,.68,-.06,.19,-.13,.67,.49,.66,-.22,.07,.77,.84,.3,.71,.08,.63,.11,.11,.04,.23,-.04,.21,.59,0,.82,.17,-.02,.35,.12,.37,.39,.09,.75,.05,-.1,-.23,-.12,.13,.14,.24,.43,-.29,.41,.12,.12,-.24,.14,.07,-.06,.19,.17,.6,-.04,-.01,.81,.79,.7,.61,-.25,-.32,-.13,-.39,0,.6,-.01,.2,-.16,-.15,-.27,-.06,-.08,.26,-.1,.66,.66,-.02,-.26,.7,.81,-.25,-.2,.15,.15,.07,.37,.61,.13,.46,.62,.84,.54,-.01,.79,-.24,.11,.07,.72,-.18,-.65,.65,.69,.33,.15,.69,.71,.74,.25,.64,-.09,.17,-.09,.25,-.07,.05,.76,-.08,.03,-.24,-.08,.84,-.21,-.01,.2,-.13,-.02,.26,-.03,.06,.11,.03,.11,.68,-.31,-.18,-.4,-.3,.12,.44,.41,.83,-.07,-.23,-.09,-.02,.72,-.2,.13,.23,.75,-.31,.64,.1,.43,.02,-.68,.03,.83,.79,.22,.41,-.14,-.28,-.09,.83,.57,.83,.15,.19,.26,.02,.11,.51,.61,.23,.14,-.14,-.08,.49,-.18,.6,.7,-.27,.11,-.29,-.25,.67,.73,-.05,.31,-.48,.69,.8,-.21,-.06,-.18,-.11,-.27,-.02,-.39,.47,.24,.56,-.48,.65,-.1,.26,.61,.16,-.1,-.13,.47,.09,-.09,.73,-.03,.28,.16,-.03,-.21,-.08,.22,-.21,-.17,-.04,.72,.81,-.14,.66,.49,-.19,-.17,-.1,.56,-.42,.37,.92,.08,.31,.03,.79,-.17,.17,-.2,.55,.64,-.18,.09,-.14,-.35,.22,.78,.08,.38,.02,.14,.06,.25,.63,.17,.1,.33,.75,0,.23,-.14,.78,.17,.36,.53,.67,-.26,-.05,.12,-.16,.05,.72,.08,.12,-.26,.08,-.15,.84,.14,.75,.2,.2,.71,.67,.65,.43,.24,.24,-.02,-.22,.08,.57,.44,.8,-.11,.8,.56,-.38,.36,-.22,.3,-.48,.73,.65,.47,.22,-.12,.19,0,.07,-.06,.93,-.16,.6,-.07,-.74,0,.05,.85,.11,.11,-.18,.59,-.18,.78,.01,.21,-.09,-.08,0,.79,-.05,.05,.01,.12,-.21,.07,.27,-.07,.63,.72,-.2,-.14,-.1,.64,-.1,.02,.31,.07,-.01,0,.33,-.1,.09,.19,.17,.03,.04,.12,.51,.79,0,-.31,-.19,-.12,-.32,.24,.03,-.24,-.2,.23,-.17,.12,-.14,.14,.12,.13,-.05,.19,0,.57,.13,.75,.71,-.06,.02,.34,.83,-.22,.73,-.67,-.62,.34,.75,-.19,-.44,-.32,.56,.69,.42,-.03,.05,-.12,.03,.69,.18,.1,.14,-.02,-.08,.07,.08,-.21,.61,.35,.14,.02,-.22,-.07,-.14,-.24,-.3,.5,.81,.72,.09,.81,.69,.1,.02,.71,.7,.75,.65,-.82,.23,-.04,.5,.75,.13,.23,.05,.54,.13,.1,-.15,.84,.15,.07,-.18,-.1,.09,.08,0,.1,.78,.03,.7,.22,.8,.09,-.16,-.08,.67,.06,.05,.23,-.6,-.38,-.07,-.19,.5,-.63,.6,-.24,-.12,.16,.15,.75,.72,-.13,-.22,-.08,.15,-.19,-.28,.24,.23,.16,.32,-.22,.08,-.22,-.21,.04,-.14,-.06,-.05,.22,-.02,-.12,.04,.08,.13,.18,.03,.22,-.22,.17,-.02,.48,.11,.08,-.09,-.23,.26,-.26,-.24,.07,.59,.02,.41,.52,.03,.01,.83,-.1,.23,-.05,-.1,-.1,.33,.29,-.16,.5,.75,-.18,.4,-.14,.08,.83,-.28,-.16,-.05,.1,.16,-.18,-.06,.45,0,.52,.46,.05,.19,-.14,-.25,.01,-.1,.76,.04,.12,-.01,.57,.05,.2,-.07,.18,.67,-.12,.25,.21,.33,.82,.08,.51,.72,.02,.57,.73,.13,-.05,.01,-.13,.29,.16,-.01,-.26,-.12,.55,-.12,-.2,.67,-.04,.55,.55,-.17,.13,.82,.78,-.24,-.4,-.27,.19,.81,.38,.61,.01,.79,.17,-.23,.22,.24,-.05,.04,-.17,-.11,.58,.11,.79,-.12,.61,-.03,.16,-.27,.12,-.14,.44,.08,-.05,-.18,.82,.77,-.29,.17,.74,.79,-.15,.09,-.25,.76,.26,-.08,.37,.74,.04,.73,.52,.65,-.23,.08,-.2,.21,.64,.13,.04,.03,-.02,.23,.05,.4,.45,-.01,.02,.73,.44,.74,.67,.58,.54,-.07,.32,-.73,.21,.51,.05,.74,.1,.34,-.12,-.09,-.12,.16,-.28,-.39,.17,.79,.77,.05,.69,-.05,-.16,-.48,.16,.83,.17,-.21,.67,.76,-.38,.06,.54,.1,.79,.27,.68,-.18,.7,.48,-.09,.81,.16,-.34,-.22,.67,.06,-.14,.67,.4,.1,-.01,.61,.41,.03,.09,.21,.04,-.05,.18,.07,-.11,-.35,.73,.18,.7,.47,.37,.13,.03,.04,.79,.73,.76,-.08,.06,-.02,.07,.3,.71,.19,.71,-.21,-.02,.16,.26,-.06,.4,-.31,-.21,.69,-.58,.83,-.09,-.1,-.02,.18,-.11,-.09,.1,.16,.64,-.09,.68,.16,.22,-.3,.53,-.17,-.06,-.23,.51,.1,.46,-.09,.17,.1,.82,-.01,0,.17,-.24,.67,.75,.53,-.17,.07,.09,.69,.45,.44,.77,.37,-.07,0,.19,.61,.21,-.13,.82,.02,.22,.87,-.7,.41,0,.09,.16,.52,.82,.06,.15,-.04,-.34,-.36,.02,-.12,.68,.71,.55,-.08,-.04,.85,-.21,.46,-.09,.24,-.26,.05,-.08,.79,.19,-.35,-.34,.49,.2,.02,.06,.56,-.01,-.12,.31,.1,.49,.38,-.02,.23,.09,.25,.04,.04,.56,.6,-.19,-.06,-.36,.05,.58,.21,.03,-.28,-.41,.15,.19,.45,.14,-.02,-.18,-.2,.28,-.35,-.17,-.16,-.06,-.02,-.01,.3,.09,-.09,.45,.61,.06,.55,.2,.37,.81,.36,-.09,.15,.79,-.36,-.01,-.12,.14,.74,.43,.5,.08,.24,-.42,-.01,.85,.83,.26,.13,.05,.7,.02,-.05,.23,-.11,.41,.16,-.07,.12,-.1,.11,.74,-.13,-.08,.69,-.07,.09,.67,.15,.67,.65,.16,-.03,.23,-.04,.24,.63,-.22,.65,.11,-.14,-.02,-.17,.04,.46,-.36,-.12,.25,.46,.69,.63,.82,-.06,.1,.03,-.06,-.02,.4,-.04,.45,.6,.38,-.16,.31,.52,.16,-.18,-.39,-.04,.6,-.08,.66,.55,.46,-.21,.12,.37,-.25,.36,-.08,.53,.38,-.03,-.13,.41,-.21,.68,.32,0,.04,.35,.04,0,.02,.45,.12,.15,.66,.15,-.36,.48,.79,.27,-.03,.5,.37,.13,-.04,.31,-.27,.03,.71,-.24,.39,.42,.02,.14,.3,.34,-.03,.28,.84,-.04,.2,-.02,-.14,.61,.09,.34,.58,-.09,.09,.84,.37,.85,.9,.12,.67,.69,.85,.32,-.2,.05,.53,.01,.57,.02,.68,.58,.05,.1,.67,.37,.73,.47,.09,-.17,.5,.4,.27,.03,.63,.2,.56,.19,.81,.67,.39,.7,.11,.62,-.07,-.15,.48,.56,-.2,.01,.73,.53,.46,.07,.36,.28,.81,.7,.72,.1,-.08,.08,.06,-.02,.76,-.03,.1,.65,.09,.34,.4,.21,.65,.77,-.2,-.08,.72,.08,.32,.78,-.25,-.16,.43,.39,.27,.59,.23,.73,.15,.7,-.3,.53,-.13,-.04,0,.11,-.05,.34,.69,.17,.51,.15,.31,-.09,-.05,.68,.63,.67,.63,.67,-.1,.04,-.11,.26,.41,-.11,-.14,.65,.48,.61,.08,.48,-.1,-.18,.3,-.01,.46,-.11,.05,.77,.83,.85,.9,.14,.68,.42,.51,.38,-.44,.52,.19,-.32,.61,-.25,.62,-.2,.73,.59,.16,.76,-.23,0,.5,.15,.15,.39,.21,-.17,-.13,-.04,.27,.03,.01,.89,.88,.53,-.04,.71,.54,.6,.59,.6,.85,.03,-.23,-.03,.64,0,-.54,-.16,.17,.2,.03,.84,.68,.45,-.18,.59,.33,-.05,.25,.15,.69,.46,.21,-.23,-.02,-.09,-.06,.07,.35,.71,.5,.58,-.08,.29,.19,.81,.11,.11,-.28,.01,.72,-.09,.76,.58,1,.86,.11,.33,.7,.71,-.08,.16,-.11,.5,-.45,-.23,-.12,-.79,0,-.33,-.11,-.02,-.28,.17,.55,.46,-.22,.63,.82,-.26,.65,-.26,-.19,-.47,-.12,.81,.83,.78,.43,.06,.46,.34,.43,.45,.51,.15,.73,.9,.5,.41,.34,.26,-.03,.32,.69,.73,.07,-.01,-.13,.01,.71,.31,.49,-.04,.4,.88,.61,.7,.79,.79,.7,.01,.57,-.17,-.23,.79,.12,-.2,.03,.77,.82,.68,.36,.08,.52,.4,.71,.07,-.02,.08,-.16,.04,.05,.67,-.22,.13,-.03,.83,-.27,.57,-.09,-.04,-.13,-.08,-.16,-.02,.72,-.1,.08,.4,.07,.22,.63,-.15,-.31,-.01,.02,.66,-.2,-.07,.62,.53,.4,-.08,.69,-.11,.66,0,.82,.03,.33,.26,.01,.33,.21,.36,.03,-.71,-.35,-.03,.58,.64,.7,.53,-.29,-.03,.67,.3,.28,.16,-.16,-.05,.69,.75,-.16,.62,.74,.24,.33,.11,.73,.73,-.04,-.1,.19,.4,.46,-.1,-.36,.26,.31,-.08,-.01,.83,-.36,.02,.65,.1,-.16,.46,.08,.16,-.16,.68,-.28,.61,.07,.04,-.12,-.09,.52,.38,-.01,.06,.13,-.16,.82,.81,.65,.11,.69,.77,.76,.61,.83,-.11,.12,.39,.7,.04,.36,.09,-.15,.04,.72,.71,-.2,.49,.12,.5,.78,.01,.12,.21,-.04,-.4,-.07,-.07,-.06,.57,.76,.31,.8,.36,.03,.35,.33,.3,.09,-.11,.28,.54,.77,.19,-.1,-.64,.37,.77,.38,.72,.26,.78,.24,-.02,.63,-.6,.69,.81,.8,.31,.55,.27,.73,.46,-.06,.53,.72,.65,.31,.82,.74,.69,.12,.82,.46,.26,-.15,.78,.73,.64,.77,.67,-.14,.71,.64,.32,-.66,.74,.11,.83,-.29,-.06,.68,.41,.71,.69,-.11,-.11,.17,-.14,.72,.17,.72,.39,.6,-.22,-.16,.12,.12,-.1,.11,.23,.19,.3,.79,.16,-.06,.43];export{a as rvalData};
