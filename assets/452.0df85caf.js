const a=[-.17,.19,.26,0,.34,.21,.21,.42,.35,.13,-.02,-.11,-.11,-.43,.01,.12,.07,.11,-.14,.03,-.11,-.54,.1,-.14,.29,.51,-.63,.12,.1,-.63,.44,-.5,.35,.13,-.07,.24,.23,.09,.32,.19,-.11,.44,.21,-.04,.22,.06,-.11,-.21,-.44,.67,.15,.05,-.07,.43,.6,.06,.14,.31,.35,.35,.58,.39,.63,.06,-.26,-.65,.55,-.07,-.11,-.02,.12,.1,.67,-.4,.35,-.13,-.19,.57,.31,-.57,-.34,.35,.02,.45,-.28,-.5,.38,0,-.48,.32,.36,.01,.57,-.2,-.16,.21,-.35,-.23,-.11,.66,-.01,.58,.55,.03,.72,.05,-.16,-.15,.35,.62,.07,.6,.12,-.22,-.21,.33,-.01,-.55,-.33,.41,.13,-.35,.16,.08,.08,.64,.32,-.07,-.54,.29,.46,-.04,.02,.6,-.07,.02,.6,.49,-.59,-.07,.57,.07,.64,.4,.09,.08,-.06,.05,.56,-.04,.56,.34,.18,.14,.47,.37,-.16,-.08,-.28,0,.39,.7,.08,.51,.56,.59,.27,-.69,.34,.44,.07,-.56,.43,.1,.44,-.53,.15,-.52,.7,.38,-.08,.06,.06,.1,.62,.14,.01,.13,.49,-.22,-.11,.56,-.06,.71,.63,.33,.66,.27,-.05,-.48,.14,.51,.35,.05,-.22,.46,.01,.77,.65,.03,.42,.06,-.18,.23,.28,.46,.02,.44,-.57,-.33,.54,.57,.42,.37,.44,.33,.54,-.57,.34,.35,.03,.05,.1,.24,0,.08,.02,-.19,.14,-.02,.65,.01,.37,.42,.5,.22,-.09,.3,-.05,-.21,.49,-.31,.61,.19,.52,-.13,.12,.37,.26,.16,.02,.23,.46,.57,.22,.68,-.43,.48,-.04,.32,-.27,-.1,.34,.32,.48,0,-.53,.63,.38,-.43,.62,-.49,.16,-.29,.52,.39,-.45,.23,.49,-.4,.27,.62,.41,.24,.47,.22,-.03,-.4,.31,.41,0,.24,-.57,-.01,0,.19,.05,.75,.41,-.13,.44,-.03,-.12,.06,.17,.42,.53,.35,.33,.33,.53,-.14,.03,.56,.47,.59,.38,-.15,.03,.59,-.28,.55,.06,.04,-.55,.18,-.66,.48,-.03,-.26,.7,.15,-.09,.04,.25,.32,.02,.63,.17,.47,.69,.32,.11,.52,-.27,.2,.33,-.25,.44,.22,.25,.2,.48,-.16,-.12,-.2,.28,.29,.45,.05,-.39,-.2,.3,.28,.44,.38,-.07,.46,-.13,.54,-.06,.03,-.03,.18,.12,.38,-.28,-.03,.37,.38,.42,.01,-.03,.11,.05,.24,-.53,-.1,-.12,.06,-.33,.23,.38,.44,.55,-.07,.02,.46,.7,.46,.3,-.27,.02,.44,.22,-.02,.56,.11,.63,-.15,.15,.3,-.3,.02,.25,.28,.25,.04,.46,.12,.35,.24,.39,.06,.52,.29,-.17,.44,.35,.59,.64,.48,.54,-.05,.52,.47,.22,.39,.14,-.53,.31,1,-.48,.17,.02,.09,-.48,.32,.38,.54,.42,.45,-.34,.63,.01,.18,-.08,-.14,-.51,.4,-.11,.25,.2,-.05,.57,.38,.34,.36,.33,-.53,.67,.15,.42,.55,.49,.33,.56,.28,.01,.18,-.06,-.08,.05,.03,.37,.37,.53,.04,.32,.38,.53,-.03,.48,.26,.53,.1,.06,.38,.25,.58,.61,.27,.49,.23,.49,-.42,.33,.54,.6,.46,-.41,.3,0,.03,.44,.01,.18,.15,.08,.41,.67,.48,-.02,.41,.04,.25,.43,.13,.18,-.06,-.09,.34,-.12,-.44,-.37,-.12,.26,-.45,.42,.1,-.46,.32,.33,.25,.51,-.16,-.45,.19,-.22,.06,.44,-.38,.36,.45,-.02,.09,-.07,-.02,.39,-.04,.35,.28,.12,.07,.44,.23,.04,-.42,.55,.28,-.42,0,.67,.33,.77,.06,.24,.58,-.31,.22,-.04,-.04,-.11,.47,.42,-.37,.43,.22,.46,.34,.27,.37,.29,.47,.23,-.64,.39,-.25,.03,.08,.14,.18,.15,.54,.14,-.02,.26,.22,-.24,-.01,.25,.17,.39,.06,.37,-.31,.22,.32,.61,.21,-.13,-.43,-.22,.63,.21,.6,.35,.46,.3,-.56,.41,.37,-.5,.07,.01,.54,.25,.54,.07,.75,-.2,-.51,.42,.33,.38,0,.04,-.21,-.04,.04,.24,.2,.4,.32,.18,.05,.04,.39,.52,.39,.46,-.07,.09,-.62,.46,.22,.68,.37,-.26,.12,.12,.15,.11,.45,.39,.37,-.35,.49,.45,.3,-.13,-.18,.22,-.08,.07,.14,.15,.32,.42,-.37,.49,.42,.58,.27,.01,-.15,-.19,.13,.09,-.58,.55,.36,.29,.31,-.04,-.1,.19,.13,-.22,-.02,.43,.57,.21,-.02,.27,.15,-.19,-.53,-.21,.4,-.46,.38,.38,-.09,.67,.57,.21,-.13,.01,.17,.08,.17,-.41,-.52,-.01,-.18,.45,.19,.24,.67,-.1,-.19,-.32,.3,.44,.09,-.01,-.26,.29,-.19,.02,-.62,.37,.32,-.18,.17,.52,.1,-.28,.23,.26,.45,.37,.09,.58,-.25,.54,.38,.37,.41,.28,-.21,0,.57,.25,.61,.57,.56,-.07,-.46,-.53,.25,.58,-.07,.42,-.68,.31,.56,-.19,.58,.08,.2,-.21,.54,.2,.47,.36,-.14,.3,.13,.19,-.05,.37,-.47,.46,.45,-.33,-.53,0,.32,-.16,.15,.44,.26,-.05,.32,-.12,.31,-.25,-.17,.14,.35,.47,-.16,.08,-.32,-.2,.43,.2,-.56,.4,.3,.04,.48,-.33,.5,-.1,-.43,.7,-.11,.11,-.61,.54,-.02,-.06,.38,.32,.26,.56,-.28,.68,.35,.01,-.29,.17,.27,-.45,.14,.33,.33,.02,.04,.09,.58,.36,.32,.04,.41,-.22,.18,-.59,.27,.1,.52,.2,.21,.58,.19,.49,.23,.52,-.15,-.19,.63,.41,.08,-.3,.02,.29,.38,.24,-.05,.15,0,-.02,.29,.01,.56,-.07,.53,.04,-.49,-.4,-.05,.47,.41,.08,.38,.38,.03,.37,-.19,-.08,.18,.48,.31,.12,.25,.48,.3,.56,.22,.18,.37,.38,-.38,.69,-.12,.54,.48,-.2,.13,.31,.43,.22,.13,.4,.39,-.05,-.14,.39,0,.24,.03,.5,.07,.54,.06,.41,.15,.34,.09,.18,.08,.56,.24,.08,.34,-.32,-.1,-.26,.1,-.14,-.38,.51,-.05,.38,.51,.67,.4,.43,.36,-.57,.47,.38,.34,.2,.1,-.02,.59,.68,.3,.65,.25,-.01,.6,-.03,.09,.18,-.11,.1,.02,.09,-.07,.01,-.35,-.13,.03,-.06,.02,-.2,.64,.5,-.33,.32,-.16,.43,.01,.17,.03,.49,.07,.2,.57,.05,.35,.53,.08,.1,-.2,.56,-.06,.1,.5,.03,.66,.25,.36,.11,.08,.26,.25,-.44,-.02,-.02,.57,.02,-.13,-.33,.26,.45,.4,.2,.37,.19,-.09,-.36,.13,.34,.34,-.42,-.08,.1,.26,.57,.51,-.69,.32,.18,-.05,.51,.47,.49,.25,-.02,.37,.23,.35,.46,.39,.08,-.45,-.05,.3,.58,-.21,.11,-.11,-.52,.49,-.02,-.07,.44,-.44,.18,.68,.45,.27,.47,.33,.27,-.31,.31,.26,.31,.32,.18,.15,.42,.17,-.14,.69,.66,.18,-.42,-.24,-.1,.26,.56,.37,-.28,.01,-.23,.13,-.24,.07,-.03,.09,.3,-.18,.32,.4,.33,-.11,.08,.33,.47,.29,.15,.15,.39,-.18,.1,.26,.57,.11,.29,-.03,.22,-.04,.09,-.11,.53,.43,.06,.51,.07,.42,.16,0,.37,.48,.02,.54,.29,.24,.46,.33,.58,.5,.52,-.07,-.43,.53,.73,.02,.17,.08,.47,-.01,.4,-.08,.03,.27,-.19,.09,.3,.18,-.23,.24,.04,.15,.01,.01,.45,-.14,-.2,.55,.59,-.34,-.39,.54,-.06,.46,.46,.67,.24,.28,.29,.53,.33,-.11,-.08,.21,.22,.52,-.12,.49,.27,.33,.04,.46,.35,.1,.11,.35,-.06,-.54,.42,.26,-.63,.16,.57,.03,.28,.38,.48,-.01,.03,.07,.18,.48,.29,.03,.1,-.08,-.14,.11,.4,.11,.6,-.07,.19,.3,.01,.12,.59,-.29,.34,.56,-.4,.27,.13,.28,-.34,.54,-.66,-.66,.56,-.02,.4,-.01,.66,-.2,.26,.25,.13,-.25,.25,.13,.66,.19,.29,.52,.05,0,.24,-.1,.08,.08,.2,.42,.57,.72,.11,.61,.04,.5,.4,.72,.35,.48,.06,.23,.01,.01,.56,.28,.33,-.37,.71,.2,-.31,.42,.1,.11,.39,.4,.25,.04,.3,.18,-.15,-.04,.42,.34,.2,.52,.35,-.51,-.12,.41,.28,.33,.04,-.04,.31,-.01,.06,.6,.38,-.07,-.06,.03,.28,.21,-.22,.71,-.06,-.12,.72,.63,.54,.53,.25,.55,.59,.8,.22,.61,.52,.62,0,.15,.01,.26,.74,.68,.23,-.15,-.21,.23,.5,.21,.52,-.09,0,.08,.36,0,-.19,.15,.23,.08,.47,.21,.11,-.03,.77,.63,.32,.52,.5,.78,.28,-.06,.47,.03,.29,-.18,.59,0,-.27,.33,.49,-.04,.24,.66,-.6,-.01,.52,.39,.24,.22,.13,.14,.24,-.29,.28,-.04,-.08,.06,0,.46,-.18,.09,.3,-.08,-.17,.28,-.06,.34,.59,.46,.48,.41,.02,-.18,.65,.07,.5,.07,.22,.46,.04,.44,-.16,-.23,.01,.33,-.13,-.01,.03,.4,.45,.4,.39,.55,-.2,-.01,-.14,.43,.05,-.43,.59,.63,.26,.02,.07,.35,.64,-.28,-.03,-.43,.6,-.06,.69,.51,.68,.16,.38,.45,.18,.65,.38,.41,.67,.09,.17,.65,.31,.44,.58,.5,.07,.3,-.01,-.04,.08,.37,-.16,.29,.41,.63,-.34,.66,.32,.48,.19,.11,.4,.07,-.25,.75,.2,.02,.48,.03,.57,.07,.34,.42,.59,.35,-.1,.23,.47,-.04,.09,-.59,.27,.49,.69,.41,.67,-.09,.34,.39,.73,.28,.46,.63,.42,.71,.49,.34,.29,.52,.47,-.18,.53,.13,.68,.54,.01,.38,.56,-.02,.48,.55,.04,-.24,.48,.52,.55,.59,.43,.55,-.06,-.07,.45,.33,.44,.58,.12,.35,.66,-.5,.77,0,.25,-.03,.5,.38,.68,.61,.64,-.09,.32,.33,.53,-.33,-.32,.62,.22,.51,.17,.66,.27,.21,-.05,.47,.32,.62,.39,.36,-.1,-.09,.19,.56,.65,.22,.16,.08,.54,.51,.66,.67,.69,.66,.16,.63,-.12,.67,0,.57,-.07,0,.17,.43,.21,.2,.45,.05,.75,-.05,.62,.55,.48,.59,.51,.52,.32,.1,.35,.57,.26,-.06,-.06,.55,.63,.56,.08,.47,.28,-.09,.65,.54,.61,.51,.1,.29,.23,.51,.35,.26,.19,.73,.75,.72,-.08,.75,.07,.13,.67,-.04,.59,.02,.27,.69,.02,.57,-.17,.46,-.04,.6,.23,.04,.51,.43,-.11,.58,.21,-.25,.09,.43,.32,-.03,.4,.52,-.12,.04,.55,.49,.28,-.2,.09,.22,.46,-.15,-.31,-.09,.49,.42,.58,.26,.33,-.05,-.19,.26,.51,-.49,.49,-.23,.55,.36,.37,-.19,-.18,-.02,-.11,.3,.45,.32,.59,.36,.34,.54,.69,.48,.09,.28,-.02,.11,.5,-.32,.22,.29,.32,.23,-.09,.71,.21,.63,-.64,.07,-.05,.24,-.21,.02,.39,-.41,-.26,.14,-.06,.1,0,-.04,.64,.69,.18,.38,.2,-.1,.25,.13,-.66,-.66,-.01,.48,.26,.44,.19,-.21,.43,.26,.57,.79,.41,.18,.55,.33,.39,.73,.75,.46,-.18,.67,.47,.47,.31,-.54,-.12,.11,.4,.11,.69,.06,.52,.24,.57,.25,.19,.24,.52,-.01,.53,-.02,-.24,.37,.37,.03,.36,.37,.19,.68,.54,.39,.22,.48,.24,.15,.03,.02,.2,.09,.06,.07,.07,.28,.22,.45,.04,.27,.05,.31,-.06,-.01,-.2,-.14,.34,0,.44,.29,.4,.19,.52,.14,.06,-.17,.01,.49,-.05,.47,.68,.64,.26,.17,.4,.06,.51,-.24,.33,.48,.69,.74,.06,.15,.3,.16,-.01,-.13,-.18,-.06,.63,.67,.46,.37,0,-.39,.52,.73,.24,.14,-.07,.06,.51,.25,.17,.39,.52,.17,.36,.14,.45,.47,-.58,.37,.62,.75,.49,.26,-.36,.23,-.08,-.01,-.04,.26,0,.07,.43,.52,.2,.69,.1,-.01,-.01,.59,-.42,.06,.38,.04,-.07,.01,.23,.23,-.04,-.1,.39,.28,.25,.37,.32,-.38,.24,.18,.36,.52,.42,.16,.19,.57,.45,.4,-.11,.02,-.08,.1,.41,.48,.18,.23,-.09,.16,.19,-.13,.55,.03,.15,-.6,-.15,-.19,.2,.47,.27,.29,.31,.67,.02,.62,.09,-.31,.23,.01,-.07,.49,.26,.29,-.23,-.41,.52,.23,.05,.42,.39,.43,.4,.23,.51,-.43,.45,.51,.34,-.02,.67,.24,.55,.23,.47,.33,.27,.41,.4,.3,.45,.15,-.38,.3,-.16,.51,.04,.29,.43,.4,.37,.42,.28,.59,.19,.23,-.35,.37,.1,.21,-.01,-.02,.6,.53,.41,.58,-.49,.11,-.43,.4,.33,.39,.35,.54,.61,-.03,-.59,.1,-.23,-.32,.02,.42,-.06,.17,.35,.14,.14,.71];export{a as rvalData};
