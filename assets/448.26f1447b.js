const a=[-.47,.36,.66,-.13,.77,0,.25,.07,.39,.28,.58,-.06,.12,-.67,.64,-.1,.11,.06,-.13,-.05,-.08,-.34,.14,.37,.57,.83,-.3,.29,.52,-.24,.53,-.28,.88,-.08,.02,.16,.72,.44,.33,.7,.04,.81,.64,-.14,.16,.33,0,-.12,.13,.29,.14,-.13,.27,.67,.55,.44,.53,.02,.23,.72,.4,.81,.75,-.05,.4,-.25,.81,.47,-.01,-.11,-.06,.5,.4,-.13,.72,-.05,-.13,.34,.21,.03,-.49,.61,-.21,.79,-.18,-.17,.81,.13,-.66,.48,.16,.18,.34,-.63,0,.18,-.74,-.33,-.06,.42,-.12,.72,.45,-.13,.57,.22,-.01,.02,.91,.51,-.15,.39,.02,-.61,-.03,.65,-.07,-.26,-.14,.57,-.07,-.07,.25,-.07,.32,.55,.61,-.31,-.27,.79,.08,-.2,-.2,.18,.25,-.14,.21,.3,-.24,-.24,.85,-.12,.75,.8,-.1,-.07,.01,.01,.71,-.23,.71,0,-.07,-.09,.12,.11,.18,-.11,-.27,.55,.13,.6,.16,.26,.32,.29,.43,-.26,0,.76,-.13,-.15,.06,-.08,.82,-.1,-.05,-.09,.24,.76,-.08,.08,.09,.6,.67,.1,.01,.05,.13,-.26,-.11,.13,.17,.65,.77,.73,.66,.02,-.11,-.25,.09,.66,.79,-.03,-.42,.67,.26,.33,.4,.04,.02,.54,-.12,.64,0,.39,-.05,.21,-.14,-.2,.61,.43,.28,.73,.59,.81,.07,-.2,.3,.28,-.06,-.09,.56,.58,.24,-.06,.52,.13,-.04,.08,.32,.52,.12,.1,.31,-.12,.06,.17,.18,-.12,-.01,.07,.56,.28,.84,.11,.25,.28,.04,.52,.14,.07,.34,.85,0,.52,-.09,.78,.16,.5,-.07,-.62,.72,.6,.54,.03,.03,.29,.64,.12,.32,-.19,.24,-.38,.41,.79,-.08,.72,-.03,-.07,.05,.43,.91,-.06,.12,.65,.36,-.43,0,.33,.03,.76,-.22,-.25,.08,.55,.06,.55,.05,.29,.75,-.06,-.11,-.12,.22,.32,-.02,.14,.56,.26,.79,-.06,.48,.81,0,.37,.95,-.15,.21,.4,-.47,.61,.47,.16,-.26,-.11,-.15,.57,.01,-.21,.58,.62,-.18,-.11,.72,.71,.08,.33,.64,.39,.82,-.18,.08,.38,-.48,.3,.34,.03,.59,.52,.38,.18,.37,.02,0,-.63,.04,.8,.33,.14,.19,-.23,.31,-.06,.28,.23,.27,.78,-.01,.2,.12,.1,.14,.17,-.01,.5,-.12,.01,.81,.88,.65,.04,.11,.16,.14,.77,-.48,-.2,-.16,.33,-.15,.24,.62,.51,.27,.13,.48,.65,.63,.57,.57,-.51,-.23,.64,.1,-.04,.81,.72,.32,-.2,.03,.79,-.12,.04,.12,.82,.84,.08,.36,-.12,.1,-.12,.51,.01,.08,.62,-.19,.94,.85,.58,.69,.7,.78,-.05,.17,.47,.79,1,-.03,-.52,.4,.39,-.85,.2,-.2,.04,-.13,.79,0,.46,.61,.91,-.66,.3,.07,.09,-.35,-.04,-.59,.64,.09,.76,.42,-.09,.25,.88,.69,.03,.7,-.21,.76,.61,.6,.38,.12,.24,.46,-.23,.56,.47,.04,-.07,-.13,-.11,.71,.83,-.08,-.12,.5,.03,.36,-.15,.56,.57,.69,-.1,.1,.75,.86,.37,.77,.1,.81,.22,.17,-.11,.05,.22,.28,.72,-.03,.75,.18,-.11,.35,-.15,.34,.2,.11,.86,.26,-.07,-.11,.02,-.09,0,.25,.54,-.17,.12,.05,.24,0,.04,.03,-.1,.18,.07,.51,.21,-.13,.8,.78,.49,.66,-.01,-.38,.14,-.32,0,.46,-.16,.36,-.01,-.09,-.21,-.09,.02,.14,-.04,.58,.59,.04,-.19,.68,.75,-.19,-.25,.32,.21,-.02,.11,.74,.28,.5,.57,.81,.53,-.16,.72,-.2,.07,.03,.62,.07,-.79,.76,.66,.27,.3,.53,.71,.66,.15,.59,-.29,.27,-.14,.06,.11,.12,.67,.01,.11,-.06,-.08,.8,-.11,-.02,-.01,.03,.03,.35,-.14,.21,-.29,.3,.12,.75,-.16,-.07,-.32,-.19,.2,.35,.35,.88,.11,-.1,-.19,.08,.83,-.41,.21,.08,.79,-.15,.8,.17,.49,-.21,-.81,.35,.83,.88,.11,.23,-.09,-.16,-.04,.76,.68,.77,.16,.15,-.04,.07,.27,.68,.71,.49,.06,-.13,-.25,.4,-.07,.66,.71,-.36,.17,-.06,-.14,.66,.82,-.01,.2,-.45,.82,.92,-.16,-.14,-.14,-.04,-.04,-.21,-.21,.24,.02,.51,-.54,.78,.19,.5,.69,.05,.01,-.29,.42,-.09,-.24,.8,.07,.16,.22,-.1,-.2,.18,.14,-.19,-.18,.16,.73,.68,.05,.73,.64,-.21,-.32,-.37,.53,-.54,.29,.88,.07,.52,.22,.75,-.11,.3,0,.5,.59,-.34,-.01,-.07,-.48,.46,.7,.14,.47,-.27,.09,-.18,.42,.52,.28,.04,.18,.74,-.13,.21,-.28,.89,.1,.29,.51,.74,-.05,-.03,.01,-.06,.14,.71,-.09,.27,-.5,.16,.08,.8,.26,.72,.07,-.09,.79,.54,.66,.6,.27,.17,-.18,-.31,.19,.56,.36,.92,-.26,.76,.75,-.21,.45,.12,.21,-.37,.73,.47,.64,.37,-.27,.19,.02,.02,-.07,.88,-.28,.63,.2,-.59,.01,.11,.86,-.1,.18,0,.68,-.01,.78,-.1,.18,-.03,-.11,.05,.79,-.02,-.1,.04,-.09,-.2,.22,.06,-.19,.68,.75,.1,.14,-.26,.57,.1,-.17,.6,-.01,-.08,-.19,.52,-.06,.08,.37,.17,.14,.27,.04,.67,.8,.01,-.23,-.12,.04,-.35,-.01,.36,.01,-.1,.12,0,.27,0,.18,.36,.17,-.08,-.02,-.19,.62,.28,.79,.67,0,.16,.46,.82,.02,.83,-.49,-.49,.42,.72,.04,-.5,-.14,.47,.77,.43,-.15,.11,-.03,-.17,.78,.04,.3,-.14,.18,-.25,-.03,-.16,-.08,.59,.45,-.08,.17,.06,-.03,-.04,-.03,-.16,.38,.83,.71,-.13,.78,.61,.16,.12,.63,.68,.82,.73,-.71,.31,-.06,.37,.76,-.18,.17,.08,.69,.21,.28,.11,.68,.09,.16,.12,-.06,.27,.01,.28,.17,.83,.11,.78,.21,.91,.04,.05,-.05,.65,.12,.02,.12,-.5,-.12,-.04,-.25,.4,-.62,.76,-.14,-.03,.24,.25,.78,.79,.09,-.31,.23,.26,.17,-.15,0,-.08,.11,.55,-.05,.3,-.05,-.24,.2,.01,0,.1,.17,0,.01,-.01,-.05,.11,0,-.23,.16,-.12,-.11,-.07,.54,.26,-.04,-.03,-.19,.44,-.29,-.16,.04,.72,.25,.46,.59,.15,.32,.83,.06,.02,.03,.13,-.09,.29,.41,.06,.58,.77,-.03,.41,-.07,.17,.79,-.17,-.07,-.14,.25,-.01,-.21,-.09,.46,.09,.63,.25,.21,.45,-.32,-.27,.12,.05,.92,-.05,-.12,.16,.64,.09,.33,-.23,.34,.59,-.11,.41,.16,.28,.67,-.05,.77,.64,.1,.55,.74,-.09,-.13,.01,-.08,.3,.08,.05,-.1,-.28,.74,.18,-.12,.74,-.18,.38,.68,0,.34,.89,.91,-.18,-.28,-.2,.29,.76,.46,.71,.09,.81,-.04,-.03,.38,.37,.05,-.11,-.09,-.14,.62,.25,.88,-.28,.54,-.34,-.06,-.22,.02,-.12,.3,.08,-.13,.03,.88,.8,-.13,.01,.71,.92,.05,-.05,-.24,.89,-.1,.01,.26,.79,-.11,.83,.31,.62,-.13,.01,-.34,.18,.72,.12,.23,-.12,.18,.04,-.15,.47,.38,-.23,.21,.9,.37,.78,.77,.57,.63,-.03,.03,-.72,.39,.59,.19,.72,.13,.47,-.07,.08,-.05,.03,-.15,-.31,-.1,.81,.75,.15,.53,.19,-.08,-.38,.14,.84,-.07,-.23,.7,.74,-.42,0,.53,-.14,.78,.41,.75,-.13,.53,.34,.08,.74,-.07,-.3,-.16,.56,.15,-.16,.83,.4,.17,0,.71,.37,-.12,-.08,.19,.03,-.15,.17,.04,-.22,-.32,.8,.19,.67,.61,.52,.03,-.13,-.12,.73,.81,.7,-.03,-.09,-.18,-.2,.32,.94,.02,.82,-.1,-.13,.13,.01,-.01,.52,-.27,.03,.73,-.72,.82,-.02,-.05,-.01,.1,-.34,-.24,.31,-.14,.65,-.05,.7,.16,.28,-.13,.72,-.36,.01,-.09,.7,-.08,.54,.13,.28,-.13,.79,-.01,-.1,-.05,-.31,.74,.8,.56,-.09,.18,.01,.66,.53,.47,.92,.52,.01,.18,.12,.54,.22,.06,.81,-.18,.23,.81,-.65,.45,.16,.29,.24,.54,.78,-.13,.33,.09,-.15,-.19,.09,.06,.51,.77,.49,-.16,-.04,.82,-.12,.55,.1,.16,-.12,-.08,-.12,.81,.38,-.12,-.34,.51,.19,.09,.08,.66,-.14,-.11,.34,.26,.45,.51,.27,.37,.18,.44,.12,.22,.5,.6,.09,.05,-.12,.23,.66,.37,-.07,-.35,-.41,.19,.3,.45,.41,-.02,-.1,-.14,.31,-.25,-.18,-.08,.08,.04,.15,.23,.28,-.08,.58,.67,.17,.54,.39,.51,.77,.13,.08,.07,.79,-.27,.24,-.04,.03,.66,.54,.47,.21,.38,-.41,-.09,.82,.78,.11,.27,.02,.67,.07,-.14,.33,-.04,.57,.06,-.09,.29,-.03,.04,.75,-.12,-.08,.75,-.2,.18,.72,.27,.71,.81,.02,-.32,.36,.16,.35,.49,-.04,.76,-.11,.06,-.14,-.22,.1,.44,-.49,.05,.11,.55,.75,.74,.86,.08,-.05,.09,-.12,.05,.25,-.25,.51,.65,.35,-.08,.12,.42,.27,-.22,-.28,-.21,.59,-.26,.75,.55,.53,-.05,.32,.33,-.11,.49,.05,.6,.52,-.01,.02,.43,-.09,.62,.42,.04,-.04,.59,-.01,.09,.12,.39,.25,.32,.74,.39,-.21,.56,.8,.47,.1,.49,.44,.29,-.01,.39,-.08,.25,.74,-.11,.45,.5,.13,.27,.47,.22,-.04,.29,.87,-.15,.15,-.23,-.04,.64,.22,.46,.57,-.14,.17,.82,.52,.79,.88,.2,.59,.69,.79,.51,-.07,.07,.64,-.08,.74,.22,.77,.54,-.17,.22,.82,.33,.75,.58,.03,-.27,.5,.44,.47,.17,.58,.22,.46,.09,.82,.62,.51,.84,-.07,.75,.06,-.3,.55,.47,-.17,-.04,.68,.56,.5,.32,.46,.34,.7,.72,.78,.09,-.08,.22,.1,.25,.71,.17,.02,.69,.17,.43,.46,.27,.64,.68,-.32,.04,.51,.35,.5,.69,-.11,-.02,.67,.47,.41,.74,.29,.8,.05,.76,-.29,.54,-.12,-.02,.18,.09,-.08,.5,.56,.23,.5,.07,.42,.09,.05,.63,.81,.8,.81,.85,.01,.04,-.08,.31,.3,-.07,-.08,.85,.46,.72,.13,.47,-.02,-.06,.28,.08,.64,-.04,.07,.75,.77,.81,.84,-.02,.54,.52,.58,.38,-.46,.7,.23,-.14,.74,-.19,.56,-.07,.6,.71,.06,.82,-.12,.17,.53,.17,.15,.35,.35,0,.01,.09,.34,.01,-.06,.83,.79,.43,.03,.78,.44,.52,.67,.77,.87,.14,-.1,.22,.82,.05,-.45,-.23,.2,.22,.06,.81,.54,.3,-.1,.61,.29,-.19,.53,.07,.66,.55,.36,-.38,-.1,-.13,-.07,.22,.3,.55,.57,.55,-.04,.38,.31,.96,-.12,.22,-.18,.07,.68,-.13,.6,.55,.78,.76,-.02,.45,.53,.77,-.23,.15,-.16,.63,-.37,-.18,.22,-.69,-.06,-.26,-.01,0,-.28,-.02,.55,.56,-.04,.68,.77,-.11,.57,-.15,-.3,-.44,-.09,.83,.81,.84,.4,.13,.46,.4,.56,.52,.65,.14,.79,.81,.61,.46,.41,.46,-.06,.44,.74,.69,.08,-.15,.1,.18,.8,.34,.57,-.06,.59,.78,.72,.58,.74,.78,.65,.01,.59,-.04,-.28,.69,.24,-.11,.11,.84,.76,.76,.45,.25,.53,.43,.62,.12,-.08,.05,-.06,-.11,-.16,.58,-.2,.2,.02,.95,-.08,.58,-.12,.09,.09,-.08,-.18,-.15,.78,-.14,.24,.47,.24,.47,.74,-.12,-.3,-.28,-.07,.8,.02,.03,.61,.59,.34,.03,.7,.06,.83,.1,.79,.18,.5,.44,0,.4,.23,.28,-.2,-.59,-.17,-.18,.67,.69,.73,.45,-.24,0,.78,.46,.48,-.01,-.14,-.04,.83,.69,.07,.47,.8,.44,.37,.18,.74,.76,-.22,.1,.28,.41,.5,.11,-.23,.4,.32,-.04,-.12,.79,-.23,-.09,.72,.25,-.05,.61,.06,-.12,-.18,.71,-.56,.52,.09,.04,-.2,-.05,.54,.5,-.21,0,.23,-.15,.74,.84,.46,-.01,.5,.67,.8,.75,.97,.16,.1,.46,.8,.25,.08,-.11,-.17,-.05,.74,.82,-.02,.58,-.09,.29,.71,.17,.38,-.12,.14,-.38,-.21,.08,.05,.59,.73,.51,.77,.44,-.07,.55,.16,.2,.06,-.02,.04,.74,.76,.31,-.14,-.72,.46,.73,.3,.64,.35,.85,.3,.16,.82,-.78,.79,.82,.83,.12,.64,.15,.71,.45,.26,.6,.53,.81,.23,.78,.81,.58,.03,.78,.27,.37,-.2,.79,.78,.72,.76,.73,-.1,.74,.57,.49,-.66,.75,-.09,.79,-.21,.01,.69,.42,.74,.69,-.17,-.05,-.04,.01,.69,.25,.73,.46,.78,.01,-.24,.02,-.21,.14,0,.54,.04,.37,.86,-.05,.08,.39];export{a as rvalData};
