const a=[-.3,.33,.6,.02,.69,.24,.27,.17,.26,.17,.05,.04,-.07,-.71,.21,.03,.15,.04,-.19,.02,-.05,-.32,.15,-.06,.4,.73,-.41,.13,.27,-.45,.51,-.42,.6,.19,.05,.24,.49,.16,.36,.46,-.2,.71,.4,-.01,.18,.03,-.11,-.24,-.38,.5,.15,.14,.14,.65,.7,.02,.2,.3,.49,.48,.53,.66,.82,-.05,-.1,-.36,.8,.11,-.15,-.06,-.03,.22,.55,-.33,.66,-.05,-.28,.53,.52,-.39,-.49,.4,-.01,.67,-.15,-.37,.58,.08,-.65,.49,.45,.11,.37,-.42,-.01,.18,-.73,-.27,-.03,.63,-.06,.81,.78,-.14,.86,.04,-.24,-.19,.55,.82,-.04,.51,.13,-.56,-.05,.62,.09,-.37,-.38,.45,-.01,-.29,.22,-.02,.03,.73,.64,.05,-.39,.52,.24,-.21,-.02,.36,.09,.1,.33,.4,-.42,-.01,.81,.13,.75,.58,.08,-.01,-.01,.17,.76,-.1,.8,.04,.09,-.07,.18,.47,-.09,-.06,-.31,.14,.34,1,-.02,.44,.4,.52,.35,-.53,.34,.58,.09,-.39,.24,-.08,.62,-.38,.08,-.34,.55,.61,-.1,.01,.11,.47,.73,.1,.07,.15,.37,-.21,-.14,.39,.05,.75,.78,.66,.89,.53,0,-.34,.07,.47,.56,.01,-.49,.67,-.08,.73,.52,-.01,.14,.23,-.11,.41,.28,.25,.13,.18,-.42,-.42,.74,.71,.62,.65,.59,.56,.29,-.39,.55,.46,-.01,.02,.24,.63,.13,.12,.13,-.23,.25,-.04,.47,.2,.04,.15,.23,-.12,.12,.16,.12,-.08,.4,-.25,.7,.3,.82,-.13,.16,.4,.29,.57,-.03,.36,.5,.82,.21,.81,-.39,.74,-.06,.41,-.12,-.23,.54,.64,.7,.05,-.24,.51,.6,-.37,.49,-.52,.19,-.47,.61,.41,-.4,.42,.56,-.17,.08,.53,.58,-.11,.35,.46,-.2,-.28,.16,.44,-.03,.62,-.36,-.1,.09,.32,.16,.77,.52,-.24,.59,-.09,-.1,.06,.52,.44,.54,.39,.66,.37,.7,-.05,.24,.78,.32,.63,.64,0,.14,.67,-.57,.62,.13,.03,-.41,-.1,-.42,.53,-.28,-.23,.54,.45,-.12,-.08,.49,.63,.16,.6,.33,.35,.88,.04,.16,.61,-.59,.23,.52,-.18,.75,.61,.25,.12,.56,-.22,-.06,-.46,.37,.55,.48,-.02,-.03,-.28,.16,.25,.43,.42,.15,.75,-.11,.58,.03,.1,-.04,.06,.13,.43,-.23,.06,.64,.65,.73,-.01,-.01,-.1,-.2,.62,-.52,-.16,.08,.07,-.15,.39,.7,.4,.43,.03,.22,.74,.87,.75,.63,-.49,.05,.74,.37,0,.85,.55,.51,-.39,.17,.51,-.17,-.03,.27,.57,.54,.08,.46,-.12,.01,.24,.43,.13,.43,.54,-.34,.72,.66,.78,.95,.61,.66,-.14,.3,.63,.55,.6,-.03,-.59,.19,.7,-.71,.24,-.1,.19,-.39,.57,.39,.42,.74,.65,-.63,.58,.06,.35,-.3,-.16,-.56,.63,-.18,.51,.36,0,.57,.56,.37,.08,.66,-.47,.84,.35,.84,.41,.3,.33,.74,0,.21,.59,.06,.06,-.06,-.03,.71,.59,.49,-.24,.51,.13,.48,.15,.76,.44,.71,0,.22,.6,.53,.53,.87,.31,.64,.11,.28,-.32,.33,.3,.55,.75,-.24,.7,.17,.06,.51,.06,.12,.34,.01,.49,.52,.47,-.13,.1,.04,.19,.55,.27,.2,.1,.03,.48,-.09,-.23,-.34,-.1,.14,-.21,.68,.18,-.46,.56,.6,.56,.54,-.09,-.51,-.08,-.41,-.12,.69,-.21,.39,.15,-.13,-.12,.01,-.1,.42,-.15,.7,.65,.07,-.18,.81,.57,-.14,-.41,.46,.2,-.39,.11,.92,.41,.82,.27,.57,.72,-.22,.46,-.11,.02,.03,.76,.14,-.55,.56,.6,.57,.06,.5,.67,.72,.37,.54,-.39,.33,-.28,.05,.18,.07,.41,.23,.39,-.06,0,.63,-.1,-.18,-.04,.2,.01,.44,-.06,.42,-.2,.06,.43,.92,-.19,-.1,-.76,-.42,.53,.45,.66,.56,.15,.01,-.36,.32,.51,-.47,.09,.3,.85,.19,.72,.18,.82,-.1,-.73,.25,.64,.56,.07,.28,-.2,-.12,-.02,.63,.48,.67,.43,.25,.15,.05,.42,.58,.57,.38,-.02,-.16,-.47,.68,.07,.77,.66,-.37,.09,-.03,.24,.27,.62,.36,.26,-.57,.7,.68,.1,-.1,-.17,.34,-.15,.11,-.03,.22,.34,.68,-.51,.7,.19,.53,.5,.06,-.16,-.16,.52,-.06,-.37,.72,.04,.31,.15,.04,-.14,.05,.19,-.28,-.08,.19,.84,.46,-.14,.42,.36,-.29,-.49,-.25,.79,-.67,.33,.65,.03,.52,.36,.44,-.11,.14,-.09,.19,.43,-.39,-.29,-.05,-.36,.37,.41,.25,.69,-.15,-.05,-.15,.28,.66,.05,.1,.13,.5,-.03,.24,-.47,.6,.57,.18,.44,.8,-.06,-.32,.24,.25,.43,.65,.12,.59,-.33,.5,.02,.65,.49,.61,-.09,-.05,.79,.66,.96,.62,.44,.25,-.29,-.4,.28,.89,.04,.67,-.52,.64,.66,-.36,.69,-.11,.25,-.4,.84,.41,.61,.2,-.17,.43,-.1,.06,-.16,.65,-.27,.66,.13,-.62,-.47,-.04,.62,-.07,.11,.13,.46,-.15,.55,-.18,.39,-.23,-.1,.28,.55,.39,-.07,.04,-.2,-.14,.36,.24,-.44,.59,.45,-.09,.12,-.42,.82,-.16,-.3,.51,-.15,.01,-.36,.49,-.07,-.05,.34,.43,.38,.39,-.17,.75,.6,.04,-.41,.27,.29,-.48,.18,.09,-.01,-.15,.01,0,.59,.31,.42,.19,.27,-.24,.17,-.36,.28,.03,.74,.42,.1,.52,.34,.83,-.1,.71,-.36,-.46,.75,.7,.03,-.46,-.2,.49,.56,.3,-.15,.08,-.15,.02,.38,.04,.45,.05,.33,.04,-.29,-.32,-.08,.78,.45,.1,.23,.06,-.08,.29,-.16,-.33,.38,.82,.69,.12,.54,.86,.43,.39,.53,.48,.69,.58,-.69,.59,.03,.63,.78,-.09,.29,.37,.48,.1,.14,.02,.63,-.04,-.17,.01,.03,.33,.1,.27,.06,.78,.26,.74,.18,.55,.11,-.13,.05,.84,.04,.03,.26,-.56,-.17,-.2,.11,.07,-.7,.76,-.3,.39,.69,.45,.57,.71,.14,-.45,.17,.21,.04,-.05,.06,.03,.74,.5,-.01,.56,-.08,-.09,.5,-.07,.11,.11,.15,.04,.02,.11,.02,.04,-.15,-.14,.11,-.11,.02,-.3,.68,.46,-.3,.3,-.19,.25,-.16,.24,.07,.74,.08,.28,.7,-.01,.44,.65,0,.08,-.14,.23,-.08,.22,.61,.1,.57,.46,.08,.21,-.1,.05,.56,-.43,-.05,-.1,.57,.05,-.27,-.28,.49,.29,.35,.33,.27,.28,-.18,-.31,.13,.33,.52,-.4,-.07,-.13,.4,.49,.52,-.49,.25,.46,-.02,.52,.44,.6,.55,.16,.31,.49,.2,.66,.64,.08,-.27,-.04,.09,.5,-.11,.09,-.27,-.3,.58,-.05,-.14,.7,-.23,.54,.9,.13,.38,.74,.62,.07,-.38,.04,.19,.63,.35,.28,.18,.59,.2,-.15,.62,.62,-.1,-.35,-.3,-.1,.37,.5,.62,-.28,.21,-.26,.09,-.4,-.04,-.11,.31,.41,-.14,.16,.65,.6,-.31,.1,.72,.68,.29,.16,.17,.64,-.04,-.06,.3,.87,.08,.46,.24,.55,-.41,.06,-.03,.5,.79,.05,.5,.05,.21,.21,0,.41,.44,.07,.38,.48,.27,.74,.54,.86,.39,.45,.06,-.49,.64,.81,0,.4,.01,.42,-.05,.15,-.11,.06,.16,-.36,.12,.58,.41,-.12,.58,.16,-.02,-.22,.16,.73,-.16,-.17,.83,.88,-.4,-.36,.7,-.03,.73,.57,.93,.16,.66,.7,.29,.69,-.01,-.2,-.03,.51,.6,-.22,.7,.59,.2,.02,.59,.44,.08,.11,.45,.03,-.49,.6,.37,-.4,.1,.73,.14,.67,.43,.64,.02,-.01,.07,.43,.72,.6,-.07,.09,-.1,-.1,.23,.49,.07,.81,-.06,.22,.39,.07,.02,.73,-.36,-.02,.85,-.66,.64,-.02,.14,-.15,.73,-.44,-.49,.45,-.02,.63,-.07,.89,-.14,.38,-.09,.32,-.26,-.04,-.07,.85,.2,.33,.38,.1,.02,.62,0,-.01,.09,.22,.59,.78,.82,.14,.53,.12,.84,.46,.89,.54,.59,-.13,.13,-.02,.25,.48,.28,.56,-.16,.81,.55,-.64,.66,.18,.11,.47,.47,.53,.12,.37,.25,-.24,-.32,.43,.34,.58,.73,.67,-.51,-.16,.65,.16,.29,.14,-.01,.08,-.07,0,.69,.2,-.22,-.13,.08,.32,.11,-.1,.85,-.14,-.18,.63,.62,.81,.58,.24,.56,.42,.62,.3,.44,.71,.76,-.05,.05,-.19,.16,.73,.65,.11,-.18,-.47,.23,.36,.46,.49,-.11,-.11,-.08,.37,-.23,-.12,-.03,.1,-.09,.21,.25,.12,-.06,.83,.86,.39,.73,.54,.82,.51,.1,.14,.01,.58,-.38,.33,-.19,-.23,.56,.71,.1,.21,.57,-.62,-.01,.71,.61,.32,.33,.1,.36,.18,-.19,.33,0,.14,.13,-.09,.27,-.51,.06,.42,-.19,-.17,.46,-.18,.29,.82,.55,.67,.59,.08,-.18,.56,.16,.58,.27,-.1,.74,.06,.23,-.02,-.01,.02,.48,-.39,-.32,.09,.44,.68,.55,.63,.42,-.07,-.06,-.06,.48,.23,-.23,.71,.87,.23,-.06,.33,.6,.62,-.2,-.26,-.19,.88,-.19,.92,.73,.8,-.09,.45,.61,-.03,.53,.26,.68,.75,-.02,-.07,.75,.12,.76,.65,.37,.25,.45,.05,-.04,.14,.58,-.16,.01,.64,.6,-.4,.64,.57,.53,.27,.18,.45,.15,-.25,.61,.07,.02,.7,-.15,.52,.16,.4,.5,.55,.37,-.16,.31,.72,-.08,.16,-.36,.32,.7,.58,.41,.87,-.18,.46,.62,.76,.65,.67,.51,.71,.92,.7,.35,.29,.42,.52,-.04,.63,.04,.87,.74,.09,.47,.76,.15,.73,.52,.1,-.19,.66,.52,.74,.36,.52,.35,.16,0,.65,.67,.5,.8,.13,.38,.49,-.35,.86,.2,-.03,.07,.77,.69,.71,.39,.51,.05,.64,.49,.74,-.21,-.37,.44,.1,.21,.55,.39,.18,.34,-.15,.52,.71,.57,.63,.58,-.14,.05,.53,.39,.51,.57,-.07,-.13,.49,.45,.72,.82,.72,.86,.09,.82,-.23,.8,-.14,.56,-.12,.01,.11,.51,.61,.26,.72,.05,.71,-.18,.38,.79,.54,.76,.56,.71,.39,-.02,.13,.47,.5,-.09,-.32,.74,.68,.72,.24,.57,.38,-.1,.65,.37,.77,.44,.15,.56,.62,.71,.64,.12,.57,.68,.85,.65,-.21,.81,.1,-.26,.85,-.14,.89,-.04,.61,.78,-.03,.75,-.19,.18,.02,.47,.29,.05,.37,.14,-.16,.39,.36,-.25,.04,.7,.66,.12,.37,.75,.1,.15,.63,.72,.63,-.13,-.08,.15,.67,-.08,-.49,-.14,.34,.36,.45,.59,.68,.34,-.27,.44,.71,-.36,.43,-.09,.9,.39,.2,-.25,-.12,-.05,-.26,.33,.5,.68,.6,.51,.19,.54,.44,.68,.08,.26,-.16,.04,.76,-.24,.59,.38,.61,.57,.07,.8,.45,.82,-.45,.18,-.07,.35,-.45,-.11,.08,-.63,-.17,-.16,-.06,.03,-.11,.04,.86,.76,-.05,.56,.55,-.3,.58,-.09,-.5,-.67,-.06,.75,.59,.69,.34,-.4,.69,.43,.67,.83,.44,.24,.73,.65,.65,.64,.72,.43,-.21,.78,.7,.73,.4,-.4,-.18,.24,.59,.18,.8,.06,.55,.57,.69,.61,.55,.49,.87,-.11,.89,-.08,-.21,.63,.44,-.17,.38,.62,.42,.89,.62,.49,.62,.6,.67,.21,.04,.1,.06,.09,.06,.24,-.1,.17,.07,.71,-.15,.34,-.08,.18,-.09,.01,-.21,-.18,.49,.08,.44,.49,.5,.29,.68,-.06,-.1,-.19,.04,.57,-.07,.31,.9,.79,.41,.01,.66,.08,.75,-.14,.56,.33,.72,.73,-.05,.22,.29,.07,.03,-.34,-.27,-.13,.85,.9,.71,.67,-.27,-.13,.67,.74,.37,.17,-.14,-.04,.77,.58,.06,.59,.73,.31,.49,.27,.77,.69,-.39,.12,.58,.71,.69,.03,-.37,.3,-.06,-.18,-.09,.57,-.13,.02,.71,.53,0,.84,.33,.01,-.06,.82,-.47,.32,.44,-.04,-.06,.06,.5,.25,-.02,.07,.47,.2,.51,.66,.73,-.29,.57,.52,.6,.71,.66,.07,.24,.56,.68,.4,.06,.05,-.1,.15,.64,.68,-.15,.43,.03,.44,.57,-.14,.31,.16,.25,-.55,-.19,-.21,-.03,.65,.65,.37,.6,.61,.06,.55,.33,.02,.18,-.05,.18,.54,.44,.26,-.45,-.64,.63,.45,.18,.76,.55,.69,.5,.11,.57,-.61,.67,.83,.63,.05,.82,.38,.83,.4,.19,.38,.68,.58,.62,.55,.71,.4,-.32,.54,-.01,.66,-.22,.51,.69,.69,.62,.7,.08,.9,.39,.18,-.49,.6,.14,.56,-.23,-.03,.93,.51,.68,.82,-.31,.02,-.13,.16,.72,.31,.49,.49,.82,.07,-.47,.12,-.1,-.32,.01,.38,.16,.31,.62,.18,.04,.79];export{a as rvalData};
