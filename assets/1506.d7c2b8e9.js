const a=[-.15,.07,.41,-.14,.3,.27,.16,.4,.3,.13,.24,.01,-.05,-.47,.24,-.08,-.02,-.12,-.2,-.03,-.04,-.49,.28,-.04,.27,.41,-.51,.25,.16,-.53,.5,-.29,.47,-.01,.1,.19,.3,.11,.18,.35,-.03,.31,.37,-.11,.16,.04,-.18,-.06,-.42,.65,.16,-.1,-.01,.43,.76,.23,.32,.2,.03,.35,.65,.46,.6,-.09,-.16,-.66,.46,.03,-.16,-.11,.07,.06,.68,-.31,.22,0,-.24,.59,.27,-.37,-.27,.23,-.01,.3,-.16,-.33,.33,.06,-.36,.31,.36,.08,.64,-.34,-.03,.27,-.39,-.25,-.06,.61,-.18,.57,.6,-.14,.72,.12,-.23,-.19,.52,.62,.01,.64,.19,-.42,.03,.19,.05,-.62,-.07,.34,-.01,-.32,.19,-.08,.23,.65,.26,-.13,-.61,.29,.56,.16,.01,.67,-.02,-.23,.56,.38,-.55,-.17,.51,-.06,.41,.32,.04,.14,.08,0,.63,-.06,.57,.4,.07,.09,.46,.35,-.35,-.09,-.18,.18,.47,.64,.12,.49,.58,.54,.33,-.6,.45,.43,.01,-.48,.43,.07,.59,-.41,.1,-.51,.62,.39,-.11,.04,.15,.16,.71,.24,.06,.09,.43,-.14,-.07,.61,.1,.69,.73,.53,.7,.29,-.13,-.29,.02,.58,.33,-.03,-.2,.7,.15,.72,.8,.02,.45,.07,-.04,.18,.18,.46,.03,.47,-.47,-.36,.6,.59,.42,.46,.47,.32,.58,-.47,.53,.25,.06,-.03,0,.43,.02,.03,0,-.11,.11,.07,.55,.02,.39,.41,.51,.29,.06,.24,-.07,-.15,.4,-.26,.75,.28,.48,-.01,.19,.41,.19,.16,.04,.15,.62,.5,.17,.69,-.3,.36,.03,.14,-.18,-.3,.34,.5,.37,-.05,-.5,.59,.59,-.41,.64,-.45,.16,-.28,.61,.69,-.34,.24,.45,-.22,.37,.62,.53,.28,.47,.38,.1,-.22,.24,.66,.2,.28,-.36,-.1,.14,.2,.26,.69,.31,.05,.25,-.07,-.09,0,.23,.66,.5,.32,.48,.47,.34,.01,.03,.52,.4,.56,.51,-.23,.31,.57,-.35,.46,.31,-.05,-.55,-.08,-.67,.6,.11,.01,.75,.31,-.06,-.2,.28,.52,.07,.59,.39,.43,.76,.27,.13,.57,-.44,.21,.42,-.11,.59,.2,.09,.18,.48,-.18,.09,-.29,.04,.33,.36,-.04,-.35,-.16,.19,.36,.45,.42,-.19,.36,-.11,.47,-.03,.15,.1,.1,.1,.5,-.18,-.03,.64,.57,.65,-.04,.1,.36,.28,.32,-.53,-.05,-.23,.21,-.23,.22,.56,.46,.5,.03,-.03,.64,.62,.46,.48,-.41,-.05,.64,.29,.03,.47,.25,.63,-.21,.16,.36,-.43,.1,-.03,.31,.39,.05,.45,.16,.39,.33,.29,.2,.54,.23,-.06,.57,.38,.66,.6,.24,.34,-.22,.43,.55,.32,.56,-.07,-.56,.5,.66,-.49,.22,-.08,.15,-.38,.33,.25,.5,.39,.7,-.36,.55,.24,.33,-.22,-.05,-.4,.45,-.14,.28,.29,-.18,.53,.63,.66,.43,.51,-.51,.74,.16,.37,.56,.38,.27,.7,.18,.13,.38,.08,.02,.09,.08,.43,.34,.4,-.17,.49,.43,.47,-.13,.55,.29,.34,.05,.01,.73,.41,.54,.59,.18,.32,.34,.43,-.36,.33,.63,.55,.33,-.26,.4,.34,.11,.29,-.04,.34,.08,.18,.62,.72,.41,-.03,.4,.02,.27,.53,.39,.08,.12,.06,.35,-.11,-.39,-.25,-.11,.31,-.35,.44,-.12,-.41,.32,.5,.4,.43,-.07,-.34,.17,-.37,-.05,.41,-.41,.19,.46,-.15,-.01,.04,-.05,.42,-.1,.51,.39,.11,-.02,.29,.32,-.17,-.18,.53,.05,-.31,.05,.61,.31,.88,.02,.36,.4,-.46,.28,-.09,.13,.05,.53,.45,-.41,.71,.29,.34,.53,.44,.26,.32,.46,.24,-.55,.46,-.13,0,-.19,.06,.25,.27,.59,.09,0,.35,.29,-.23,0,.43,.13,.67,.05,.45,-.17,.04,.23,.55,.24,-.07,-.33,-.13,.59,.5,.65,.62,.47,.34,-.33,.27,.41,-.44,.23,.06,.46,.1,.45,.22,.87,-.25,-.54,.5,.42,.62,.23,-.02,-.24,-.14,.01,.29,.39,.34,.32,.09,.09,0,.36,.4,.24,.43,-.03,-.06,-.53,.58,.26,.66,.26,-.28,.13,-.01,.03,.24,.52,.3,.26,-.3,.38,.59,.34,-.08,-.13,.12,-.04,-.04,.1,.21,.17,.44,-.31,.31,.42,.56,.27,.19,-.21,-.23,.23,.07,-.48,.6,.37,.35,.64,.1,-.26,.13,.24,-.16,-.09,.43,.56,.31,.08,.29,.2,-.09,-.4,-.22,.41,-.42,.55,.57,.04,.68,.58,.24,-.03,.2,.17,.25,.57,-.19,-.48,-.1,-.16,.35,.29,.19,.54,-.11,.02,-.2,.15,.3,.38,.15,-.4,.53,-.14,.11,-.58,.54,.34,-.33,.25,.5,.05,-.37,.07,.19,.41,.36,0,.53,-.36,.63,.4,.35,.37,.46,0,.08,.42,.45,.66,.69,.57,.18,-.25,-.57,.28,.68,0,.46,-.58,.44,.34,-.22,.66,.08,.12,-.44,.58,.26,.47,.47,-.24,.25,-.04,.11,-.03,.57,-.42,.44,.41,-.38,-.57,-.15,.34,-.16,-.01,.46,.34,-.08,.32,-.08,.4,-.24,-.13,.07,.31,.33,-.03,.02,-.16,-.2,.58,.14,-.41,.67,.37,.03,.47,-.23,.49,-.14,-.41,.72,-.03,0,-.52,.48,-.06,-.01,.35,.28,.25,.65,-.03,.66,.37,.15,-.15,.07,.18,-.4,.16,.18,.35,-.01,.12,-.11,.53,.29,.28,0,.51,-.09,.11,-.53,.62,.12,.45,.19,.12,.53,.25,.53,.23,.45,-.17,-.32,.66,.36,-.01,-.27,-.11,.33,.35,.67,-.21,.12,-.18,-.06,.5,-.16,.64,-.1,.59,-.07,-.47,-.29,0,.46,.43,.17,.42,.4,-.05,.31,-.17,-.05,.1,.52,.32,.11,.32,.36,.25,.61,.36,.23,.33,.25,-.43,.68,-.14,.44,.35,-.26,.36,.33,.26,.17,.29,.41,.49,.12,-.23,.39,.08,.24,.19,.49,-.17,.44,.06,.3,.53,.51,.15,.11,.16,.52,0,.02,.58,-.34,-.11,-.37,.02,-.02,-.44,.38,.09,.31,.53,.66,.72,.42,.42,-.64,.48,.7,.44,.14,.03,.01,.51,.62,.39,.66,.31,-.11,.53,-.17,.09,0,.17,-.02,0,.02,.03,-.03,-.3,-.23,.01,-.19,-.05,-.24,.64,.66,-.37,.42,-.11,.52,.03,.05,-.03,.28,.27,.14,.7,0,.3,.72,-.06,.06,-.21,.49,-.01,.28,.55,.01,.74,.25,.38,.08,-.03,.45,.35,-.43,-.19,.07,.52,-.06,-.13,-.18,.31,.57,.62,.22,.72,.09,.03,-.23,.12,.36,.51,-.36,-.11,.33,.15,.38,.49,-.61,.35,.33,-.14,.53,.31,.43,.38,.04,.55,.35,.45,.37,.33,.02,-.18,-.07,0,.63,-.37,-.01,-.12,-.46,.39,-.09,-.15,.45,-.23,.36,.59,.46,.28,.58,.51,.27,-.34,.24,.09,.42,.34,.29,.22,.67,.17,-.15,.66,.66,.06,-.37,-.29,-.11,.18,.48,.4,-.21,.06,-.26,.07,-.16,.01,0,.05,.23,-.11,.28,.57,.37,-.14,.13,.26,.61,.25,.08,.07,.39,-.07,-.04,.24,.47,.02,.34,.09,.48,-.17,.08,-.19,.4,.54,.08,.49,-.01,.43,.14,-.04,.29,.5,-.16,.53,.57,.32,.42,.42,.61,.54,.48,-.01,-.52,.55,.77,-.04,.2,.01,.23,-.15,.46,-.01,.11,.2,-.25,.03,.31,.23,-.41,.42,-.09,.39,.11,.24,.53,-.02,-.15,.61,.63,-.43,-.28,.61,.05,.59,.5,.66,.22,.38,.17,.58,.52,-.25,-.14,.11,.3,.44,-.29,.36,.11,.39,.16,.26,.54,.01,.06,.31,-.04,-.55,.25,.14,-.74,.06,.75,.04,.24,.58,.29,.02,-.07,.01,.22,.35,.54,-.03,.02,-.01,-.21,.16,.55,.06,.62,.06,-.07,.26,-.02,-.1,.57,-.35,.36,.71,-.38,.38,-.07,.34,-.33,.44,-.58,-.55,.53,-.08,.44,-.09,.69,-.15,.49,.33,.42,-.19,.27,-.02,.61,.23,.54,.43,.07,-.12,.35,-.12,-.02,.01,.04,.27,.5,.66,.13,.58,.22,.61,.29,.68,.5,.5,-.13,.17,-.05,.08,.51,.28,.34,-.19,.59,.34,-.31,.42,.14,.27,.43,.59,.26,-.07,.37,.22,-.26,-.1,.39,.29,.22,.42,.56,-.52,-.24,.56,.3,.31,-.2,-.18,.38,-.17,.04,.75,.47,-.05,-.38,0,.66,.26,-.14,.77,-.12,-.18,.82,.74,.7,.6,.25,.71,.51,.73,.43,.74,.78,.58,.06,.41,.14,.55,.7,.68,.33,0,-.04,.61,.77,.28,.58,.3,.21,.22,.29,.19,-.25,.36,.47,0,.69,.54,.25,-.1,.77,.67,.35,.85,.41,.76,.27,.12,.47,-.14,.35,-.34,.59,-.1,-.26,.45,.55,.03,.08,.63,-.69,-.05,.71,.48,.26,.35,.04,.19,.32,-.35,.4,-.08,.17,.02,-.09,.44,-.13,-.09,.45,-.2,-.17,.29,-.02,.3,.61,.33,.3,.35,-.02,-.1,.65,.16,.38,.22,.31,.28,.04,.6,-.16,-.34,-.05,.75,-.23,.07,.07,.32,.34,.48,.61,.33,-.1,.1,-.07,.27,.17,-.34,.73,.64,.28,-.15,.35,.73,.6,-.31,.15,-.43,.63,.08,.77,.85,.73,.05,.56,.7,.03,.52,.5,.57,.73,.44,.12,.61,.36,.57,.66,.42,-.02,.13,-.09,.07,.14,.45,.05,.42,.31,.57,-.41,1,.35,.53,.11,.16,.36,-.04,-.47,.84,.02,.02,.31,-.02,.53,.24,.24,.39,.55,.45,-.04,.14,.48,-.07,.04,-.57,.08,.54,.73,.42,.74,-.08,.31,.67,.63,.36,.64,.59,.57,.71,.66,.29,.16,.37,.35,-.08,.4,.07,.66,.59,-.09,.31,.57,.04,.61,.32,.06,-.18,.5,.21,.49,.63,.39,.47,.01,.02,.57,.5,.33,.56,.05,.66,.67,-.63,.86,.06,.18,.09,.67,.38,.7,.56,.89,-.38,.52,.36,.47,-.21,-.32,.69,-.01,.42,.2,.66,.17,.28,-.16,.26,.13,.73,.46,.47,-.14,-.33,.39,.56,.64,.46,.07,-.11,.48,.74,.53,.62,.76,.7,.1,.63,-.19,.78,-.23,.48,0,.06,.04,.2,.33,.27,.54,.03,.84,-.01,.52,.66,.68,.63,.69,.39,.16,-.1,.24,.72,.48,-.16,-.16,.48,.68,.39,0,.46,.13,-.16,.66,.59,.64,.45,.13,.29,.28,.7,.52,.27,.29,.95,.84,.75,-.19,.72,-.06,.2,.64,-.12,.59,-.02,.42,.81,.14,.46,-.26,.44,.25,.59,.1,-.01,.61,.46,-.15,.46,.48,-.19,.02,.46,.49,.07,.43,.54,.04,.21,.49,.42,.3,-.1,.05,.01,.41,.09,-.5,-.09,.5,.46,.53,.37,.37,-.06,-.24,.18,.49,-.51,.46,-.2,.4,.59,.49,-.24,-.02,-.14,-.16,.54,.52,.48,.35,.73,.34,.48,.76,.61,.02,.27,-.17,.01,.68,-.14,.38,.21,.48,.44,.07,.59,.51,.64,-.6,-.08,-.11,.24,-.08,-.18,.32,-.62,-.16,.09,-.01,.11,-.04,-.1,.65,.73,.12,.22,.33,-.25,.45,.3,-.64,-.69,-.16,.55,.35,.39,.09,-.12,.57,.23,.63,.78,.21,-.06,.59,.41,.47,.61,.76,.33,.15,.58,.37,.55,.21,-.49,-.14,.15,.32,.53,.79,.11,.59,.36,.49,.41,.31,.27,.55,.01,.62,0,-.28,.65,.51,-.17,.33,.63,.38,.76,.55,.32,.3,.58,.4,.15,.01,.02,-.02,0,.07,.32,.02,.62,.52,.57,-.02,.07,.28,.29,-.17,-.24,-.19,-.22,.34,.05,.51,.46,.29,.13,.32,.33,.01,-.04,-.06,.59,.12,.41,.69,.73,.62,.49,.27,-.08,.44,-.13,.32,.69,.68,.75,.1,.3,.2,.26,-.07,-.16,-.25,-.12,.69,.7,.43,.55,-.16,-.45,.35,.77,.08,.05,-.17,.2,.44,.29,.1,.51,.39,.05,.27,.26,.49,.34,-.65,.36,.71,.78,.65,.15,-.32,.16,-.09,-.14,-.06,.36,.08,.15,.22,.64,.07,.64,-.04,-.1,-.13,.58,-.42,.15,.28,.01,-.1,.03,.43,.41,-.13,.05,.33,.17,.31,.38,.38,-.28,.38,.3,.3,.37,.52,.19,.2,.56,.29,.45,-.03,.04,-.22,-.07,.35,.42,.26,.13,.08,.55,.28,-.14,.57,.01,.24,-.63,-.07,-.22,-.01,.43,.31,.12,.46,.66,-.06,.71,.41,-.25,.57,-.07,.11,.53,.26,.32,.02,-.38,.64,.35,.07,.51,.4,.36,.4,.28,.7,-.41,.31,.51,.36,.06,.59,.3,.53,.12,.47,.16,.4,.35,.54,.32,.32,.2,-.3,.31,-.08,.42,-.21,.3,.3,.27,.29,.32,.31,.55,.36,.54,-.46,.25,.06,.35,.2,-.07,.55,.41,.31,.55,-.36,.03,-.39,.41,.4,.35,.56,.46,.5,-.11,-.65,.16,-.17,-.2,-.03,.46,.03,.26,.37,.06,.04,.66];export{a as rvalData};
