const a=[-.35,.33,.53,-.06,.66,.14,.26,.24,.37,.17,.16,-.11,.04,-.65,.29,.1,.15,0,-.16,.02,-.02,-.47,.22,.14,.51,.82,-.54,-.01,.47,-.49,.65,-.47,.61,.09,-.12,.22,.53,.27,.39,.41,-.02,.79,.33,-.03,.13,.1,-.07,-.23,-.15,.52,.22,-.03,.15,.74,.58,.23,.26,.19,.5,.61,.5,.68,.87,-.06,.18,-.46,.84,.25,-.06,-.06,-.01,.29,.63,-.27,.74,-.08,-.2,.47,.35,-.29,-.4,.54,-.05,.82,-.24,-.38,.78,.07,-.67,.49,.37,.12,.48,-.5,-.15,.2,-.67,-.34,-.05,.6,-.14,.85,.65,-.13,.79,.06,-.08,.04,.69,.72,-.04,.52,.05,-.49,-.19,.62,.05,-.45,-.28,.59,.07,-.26,.12,0,.09,.68,.67,-.09,-.48,.59,.28,-.2,-.03,.37,.09,.02,.35,.47,-.47,-.07,.85,.05,.87,.76,.01,-.09,.01,.17,.84,-.19,.81,.16,.07,-.02,.29,.31,.15,-.15,-.29,.25,.17,.82,.1,.44,.48,.44,.38,-.56,.23,.71,-.03,-.42,.32,-.02,.68,-.34,.06,-.34,.55,.67,-.13,.05,.06,.35,.74,.2,-.07,.07,.33,-.22,-.01,.39,.07,.75,.81,.62,.78,.29,-.06,-.42,.28,.6,.63,0,-.46,.55,.06,.65,.52,.06,.29,.37,-.17,.55,.17,.43,.07,.37,-.41,-.27,.82,.65,.49,.71,.75,.64,.34,-.44,.36,.19,-.05,-.03,.48,.48,.1,.01,.28,-.06,.14,.05,.54,.32,.22,.26,.44,.09,.11,.16,.12,-.12,.2,-.21,.6,.27,.82,-.04,.2,.42,.14,.38,.07,.28,.51,.84,.28,.74,-.27,.82,-.03,.51,-.22,-.44,.59,.52,.64,.05,-.23,.49,.61,-.14,.43,-.35,.27,-.35,.6,.59,-.28,.51,.32,-.23,.05,.55,.67,.08,.35,.37,.03,-.39,.18,.59,.04,.52,-.43,-.08,0,.58,.16,.79,.44,0,.75,-.04,-.07,.01,.29,.58,.42,.37,.5,.34,.85,-.14,.26,.85,.25,.64,.72,.11,.08,.67,-.52,.75,.3,.06,-.55,-.08,-.41,.7,-.11,-.34,.71,.32,-.2,-.02,.57,.56,.09,.58,.29,.51,.91,.08,.13,.62,-.4,.33,.44,-.08,.61,.43,.42,.19,.58,.02,-.04,-.45,.21,.62,.38,.17,-.03,-.29,.31,.21,.35,.38,.24,.8,-.07,.51,.03,.06,.05,.18,.03,.39,-.21,-.04,.65,.69,.61,.07,-.02,.03,-.05,.55,-.64,-.11,.12,.08,-.22,.41,.56,.56,.37,.09,.3,.62,.85,.84,.51,-.41,-.05,.64,.15,-.01,.87,.45,.44,-.21,.11,.59,-.26,.05,.28,.64,.53,.02,.56,-.14,.2,.18,.56,.08,.39,.58,-.21,.77,.68,.62,.82,.76,.83,-.06,.3,.56,.51,.74,.06,-.63,.34,.67,-.76,.29,-.13,.18,-.3,.62,.28,.54,.67,.71,-.57,.52,.09,.2,-.26,-.17,-.61,.7,.05,.56,.31,-.08,.55,.63,.49,.17,.6,-.4,.79,.48,.67,.51,.27,.38,.53,0,.31,.37,0,-.11,.08,-.07,.6,.69,.27,-.11,.48,.2,.58,.17,.62,.47,.8,-.05,.15,.62,.52,.5,.81,.28,.79,.35,.28,-.17,.13,.38,.5,.75,-.21,.59,.13,.07,.58,-.09,.21,.19,.07,.62,.49,.26,-.06,.26,-.03,.11,.47,.3,.14,.03,.02,.42,-.06,-.16,-.39,-.21,.2,-.12,.55,.29,-.32,.64,.58,.41,.61,-.07,-.53,.12,-.35,-.05,.58,-.3,.54,.29,-.05,-.06,-.02,-.06,.22,-.13,.52,.51,.12,-.14,.71,.54,-.09,-.5,.45,.18,-.42,.06,.9,.48,.72,.4,.55,.76,-.27,.51,-.03,.1,.02,.65,.31,-.65,.62,.53,.48,.18,.49,.72,.56,.31,.4,-.51,.32,-.24,.03,.22,.12,.44,.19,.37,.02,-.07,.58,.09,-.08,-.04,.21,.04,.37,-.09,.4,-.34,.26,.36,.85,.07,-.07,-.55,-.4,.47,.36,.54,.63,.24,.07,-.38,.29,.69,-.6,-.09,.17,.83,.18,.83,.18,.71,-.2,-.78,.33,.65,.63,.01,.24,-.19,-.01,.06,.54,.39,.69,.34,.25,.09,.04,.49,.78,.73,.55,-.04,-.17,-.48,.56,.01,.81,.71,-.41,.15,.01,.16,.28,.64,.28,.27,-.48,.84,.76,.06,-.08,-.17,.26,-.03,-.03,.02,.09,.16,.52,-.48,.83,.31,.56,.5,.08,-.18,-.18,.3,-.1,-.48,.79,.13,.21,.14,-.09,-.13,.27,.15,-.19,-.14,.24,.73,.48,-.01,.62,.38,-.36,-.52,-.33,.63,-.6,.36,.69,-.01,.67,.36,.52,-.07,-.03,.08,.29,.43,-.45,-.21,0,-.34,.52,.47,.2,.69,-.23,.01,-.27,.42,.61,.06,.1,.12,.61,-.19,.17,-.49,.67,.35,.22,.47,.79,-.02,-.19,.19,.25,.47,.68,0,.57,-.4,.45,.18,.65,.48,.55,-.2,-.12,.86,.46,.79,.7,.39,.1,-.41,-.46,.31,.66,.18,.77,-.5,.62,.84,-.17,.57,.16,.27,-.37,.79,.39,.79,.34,-.37,.38,-.08,.05,-.07,.68,-.36,.73,.36,-.5,-.25,.04,.64,-.1,.19,.28,.55,-.01,.62,-.21,.3,-.16,-.16,.25,.62,.32,-.13,-.01,-.22,-.18,.33,.11,-.47,.51,.61,.12,.29,-.45,.7,.07,-.45,.73,-.14,.06,-.42,.59,-.08,-.03,.31,.34,.33,.45,-.18,.76,.67,.07,-.32,.19,.26,-.49,.07,.32,.16,-.07,.04,.07,.57,.28,.34,.33,.31,-.12,.09,-.45,.41,.08,.83,.46,.09,.46,.56,.78,.17,.84,-.34,-.48,.66,.71,.01,-.44,-.1,.43,.68,.29,-.22,.04,-.08,-.09,.5,.06,.43,-.01,.3,-.04,-.22,-.29,-.05,.67,.46,-.01,.19,.2,-.05,.26,-.1,-.27,.53,.78,.6,.02,.56,.69,.37,.38,.43,.45,.72,.71,-.6,.56,-.05,.57,.76,-.18,.32,.37,.65,.31,0,.2,.56,-.01,-.01,.19,-.02,.41,.1,.34,.17,.81,.06,.77,.12,.69,.08,.13,.02,.78,.11,.05,.11,-.5,-.13,-.14,-.01,.11,-.64,.81,-.09,.37,.44,.5,.64,.74,.22,-.54,.38,.21,.23,-.05,.01,-.07,.49,.63,.17,.52,.16,-.08,.54,-.06,.05,.11,.14,-.05,.07,.05,-.04,.06,-.19,-.21,.06,-.17,-.06,-.2,.6,.37,-.18,.27,-.22,.4,-.2,.15,.05,.77,-.06,.32,.59,.06,.45,.7,-.02,.07,-.14,.26,-.08,.21,.61,.06,.69,.57,.17,.24,-.01,.2,.56,-.28,-.03,-.07,.55,-.03,-.26,-.28,.46,.27,.47,.26,.17,.36,-.2,-.28,.21,.28,.69,-.26,-.14,.01,.6,.4,.47,-.53,.45,.43,-.04,.42,.38,.52,.5,.05,.52,.51,.19,.63,.72,.03,-.31,.03,.04,.44,-.02,.2,-.16,-.44,.8,.2,-.06,.66,-.33,.34,.9,.28,.47,.78,.7,.03,-.31,.05,.35,.55,.45,.38,.12,.62,.12,-.11,.6,.56,-.01,-.21,-.25,-.18,.55,.45,.72,-.32,.34,-.33,.08,-.34,0,-.01,.29,.34,-.1,.25,.71,.65,-.17,.01,.63,.78,.33,.11,.1,.8,-.23,-.1,.39,.86,-.01,.67,.05,.46,-.09,.09,-.14,.42,.67,.05,.53,-.01,.34,.08,-.07,.51,.48,-.09,.51,.63,.26,.72,.58,.76,.54,.25,-.08,-.52,.62,.74,.1,.48,.05,.52,.01,.27,-.1,.05,.16,-.3,.05,.64,.5,.12,.42,.26,-.01,-.19,.19,.72,-.14,-.22,.78,.82,-.43,-.41,.58,-.16,.75,.56,.89,.11,.48,.39,.36,.61,-.1,-.22,.01,.41,.51,-.13,.84,.51,.18,-.03,.73,.47,.01,.02,.38,.01,-.38,.52,.27,-.44,-.02,.77,.22,.59,.53,.59,.07,-.08,-.03,.5,.77,.56,-.01,.02,-.16,-.22,.3,.66,.05,.87,-.14,.04,.32,-.02,.07,.74,-.35,.14,.77,-.65,.56,.06,.19,-.14,.46,-.56,-.51,.5,-.09,.7,.02,.86,-.04,.45,.12,.49,-.35,.07,-.07,.89,.09,.44,.36,.24,-.12,.55,0,-.09,.05,.04,.72,.85,.76,.05,.57,.12,.69,.57,.77,.69,.54,.02,.21,-.02,.27,.42,.27,.63,-.23,.6,.51,-.55,.37,.19,-.01,.36,.51,.55,.06,.42,.27,-.18,-.27,.33,.3,.38,.82,.43,-.38,-.08,.68,-.03,.59,.21,.03,.13,-.11,-.02,.76,.39,-.1,-.2,.33,.24,.12,-.06,.82,-.13,-.09,.6,.51,.61,.56,.3,.52,.45,.65,.09,.39,.56,.71,.03,.06,-.09,.21,.73,.63,.1,-.3,-.38,.15,.3,.37,.55,-.16,-.11,-.11,.33,-.23,-.08,-.04,.12,-.08,.19,.19,.21,.02,.75,.76,.21,.6,.58,.8,.57,-.02,.27,.04,.57,-.36,.37,-.08,-.23,.51,.61,.22,.28,.54,-.54,-.12,.7,.65,.25,.33,0,.45,.23,-.24,.17,.06,.3,.02,-.11,.35,-.22,.04,.49,-.15,-.26,.62,-.15,.21,.85,.52,.71,.78,-.02,-.26,.48,.13,.54,.36,.06,.77,.01,.21,-.1,-.17,.08,.41,-.39,-.1,.08,.57,.76,.65,.63,.28,-.18,.03,-.2,.32,.18,-.36,.57,.75,.33,-.03,.17,.41,.54,-.24,-.22,-.36,.71,-.34,.83,.6,.72,.01,.42,.52,.08,.59,.18,.58,.71,-.02,0,.65,.03,.65,.53,.36,.07,.58,.05,0,.18,.54,-.1,.14,.7,.56,-.27,.62,.64,.66,.24,.28,.6,.25,-.15,.63,.07,.15,.72,-.09,.5,.28,.34,.48,.66,.31,-.15,.35,.77,-.06,.18,-.49,.26,.63,.55,.69,.74,-.12,.41,.64,.83,.57,.72,.46,.59,.85,.65,.66,.16,.37,.65,-.12,.89,.34,.96,.66,-.03,.46,.91,.17,.74,.71,.11,-.18,.57,.57,.64,.39,.62,.36,.26,.03,.68,.55,.61,.88,.04,.51,.39,-.49,.77,.31,.04,.01,.66,.58,.69,.46,.54,.15,.58,.58,.83,-.18,-.28,.45,.24,.37,.44,.43,.19,.46,.01,.64,.58,.53,.68,.55,-.18,.03,.5,.5,.66,.51,0,.08,.72,.48,.62,1,.57,.91,.05,.89,-.17,.68,-.04,.34,.04,0,.13,.68,.5,.24,.56,.01,.67,-.05,.3,.7,.68,.9,.69,.86,.35,.09,.11,.46,.39,-.06,-.18,.86,.64,.79,.2,.52,.32,-.01,.5,.36,.89,.29,.1,.58,.55,.69,.64,.08,.38,.67,.79,.6,-.25,.89,.19,-.06,.95,-.08,.69,0,.5,.76,-.04,.82,-.12,.25,.2,.4,.25,.22,.5,.28,-.04,.31,.19,-.2,0,.7,.66,.25,.15,.84,.14,.27,.75,.78,.67,-.02,.01,.23,.84,-.08,-.41,-.15,.32,.31,.38,.58,.53,.15,-.19,.56,.53,-.35,.55,-.13,.78,.48,.35,-.3,-.21,-.03,-.12,.28,.49,.49,.64,.43,.22,.64,.51,.77,-.03,.21,-.13,.12,.67,-.23,.46,.38,.59,.57,.03,.67,.34,.9,-.52,.13,-.06,.62,-.39,-.15,.28,-.58,-.11,-.07,-.02,.04,-.15,-.03,.7,.66,.03,.64,.52,-.17,.48,.02,-.59,-.6,0,.74,.58,.75,.38,-.1,.54,.43,.59,.76,.63,.18,.8,.65,.6,.68,.68,.47,-.15,.64,.75,.69,.33,-.39,.06,.2,.74,.19,.7,-.01,.62,.57,.83,.47,.53,.58,.73,.01,.67,.05,-.24,.56,.37,-.14,.27,.61,.49,.83,.55,.47,.45,.54,.51,.14,-.04,.14,.06,.02,-.03,.29,-.1,.17,.02,.77,-.06,.5,-.11,.21,.13,-.01,-.16,-.17,.6,-.04,.42,.45,.47,.43,.81,-.09,-.13,-.31,.02,.71,.02,.27,.73,.73,.34,.01,.72,.15,.83,-.04,.63,.3,.69,.7,.01,.33,.27,.08,-.08,-.44,-.23,-.21,.83,.87,.73,.42,-.18,-.14,.78,.7,.47,.06,-.08,-.07,.84,.51,.13,.5,.79,.34,.47,.26,.69,.77,-.44,.26,.55,.71,.73,.15,-.31,.31,.1,-.08,-.17,.56,-.11,0,.73,.42,.01,.77,.15,-.06,-.11,.85,-.56,.37,.36,.03,-.15,.02,.43,.24,-.14,-.04,.46,.04,.55,.68,.48,-.38,.41,.51,.67,.87,.76,.18,.17,.6,.81,.37,-.08,-.06,-.11,.02,.71,.77,.03,.53,-.03,.24,.47,.03,.56,0,.24,-.5,-.17,-.04,.1,.71,.56,.61,.59,.56,-.01,.68,.16,-.03,.08,0,-.08,.64,.58,.38,-.31,-.66,.59,.43,.18,.66,.48,.77,.48,.12,.7,-.69,.76,.79,.66,.06,.87,.12,.76,.48,.38,.5,.47,.78,.47,.61,.8,.41,-.36,.61,.01,.65,-.2,.63,.77,.73,.64,.73,.13,.8,.39,.38,-.49,.68,.02,.53,-.19,-.05,.83,.54,.73,.82,-.29,.03,-.23,.22,.63,.37,.55,.52,.81,.16,-.49,.05,-.25,-.25,.07,.54,.09,.17,.65,.07,.21,.73];export{a as rvalData};
