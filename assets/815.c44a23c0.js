const a=[-.39,.37,.42,-.08,.59,.1,.38,.16,.36,.01,.21,.12,.03,-.47,.29,-.04,.22,.07,-.04,.1,-.01,-.29,-.03,.19,.51,.72,-.29,0,.3,-.29,.53,-.28,.58,.04,.02,.11,.45,.28,.44,.39,.01,.72,.23,-.01,.1,.15,.17,-.1,-.03,.42,.27,-.05,.15,.56,.51,.21,.37,.09,.36,.57,.38,.67,.65,-.12,.28,-.29,.72,.27,-.01,-.07,-.14,.35,.42,-.26,.64,-.07,-.19,.34,.3,-.21,-.41,.52,-.03,.72,.12,-.26,.7,.1,-.56,.36,.3,.14,.34,-.45,.09,.32,-.59,-.33,.19,.42,-.09,.69,.71,-.16,.71,.14,-.13,-.03,.61,.67,-.12,.53,.17,-.52,.07,.61,.04,-.28,-.12,.55,.02,-.16,.11,.07,-.05,.59,.63,-.03,-.36,.55,.12,-.17,-.03,.25,.05,.04,.23,.34,-.31,-.16,.73,-.04,.7,.68,-.08,-.26,.03,.21,.68,-.12,.66,.01,.01,-.01,.13,.28,.09,-.05,-.39,.27,.06,.66,-.17,.34,.32,.34,.36,-.38,.18,.6,-.04,-.41,.08,-.01,.49,-.27,-.01,-.14,.34,.61,-.12,.19,.04,.34,.6,.05,-.1,-.02,.13,-.13,-.05,.18,.22,.59,.62,.52,.65,.21,-.02,-.14,.19,.55,.56,-.13,-.38,.46,-.08,.43,.37,.13,.09,.41,-.11,.54,.08,.26,.16,.14,-.28,-.09,.59,.65,.48,.57,.67,.55,.16,-.27,.44,.21,.03,-.04,.52,.4,.07,-.02,.3,.02,.16,0,.44,.37,.16,.15,.25,-.04,.23,-.01,.02,-.06,.19,-.06,.55,.41,.7,.02,.09,.36,.1,.35,-.09,.29,.38,.72,.18,.72,-.29,.76,.06,.47,0,-.29,.52,.39,.59,.26,-.1,.32,.48,-.05,.29,-.22,.16,-.37,.51,.44,-.11,.48,.24,0,.06,.42,.54,-.01,.21,.26,.04,-.35,-.13,.29,.11,.52,-.13,-.07,.15,.53,.19,.63,.37,.05,.62,-.08,-.01,-.12,.46,.3,.18,.36,.4,.25,.73,.13,.35,.73,.13,.54,.63,.03,.12,.56,-.48,.6,.4,.04,-.37,-.12,-.29,.46,-.18,-.18,.52,.26,.05,-.05,.51,.5,.08,.37,.23,.46,.71,-.08,.11,.54,-.36,.21,.38,-.26,.56,.4,.42,-.13,.46,-.02,.03,-.49,.12,.56,.29,.01,.06,-.42,.27,.11,.24,.39,.31,.65,-.17,.37,0,.13,.07,.03,-.01,.49,-.26,-.04,.63,.67,.52,.09,.02,-.15,-.15,.51,-.36,-.18,.06,.01,.16,.46,.45,.44,.25,.04,.3,.55,.7,.72,.4,-.44,.06,.54,.27,0,.75,.43,.3,-.16,-.1,.6,-.1,-.06,.27,.56,.5,-.1,.41,-.12,.11,.06,.52,.02,.15,.49,-.32,.65,.58,.48,.68,.68,.69,-.03,.2,.47,.47,.63,.09,-.44,.26,.46,-.72,.33,-.01,.1,-.13,.54,.21,.46,.5,.58,-.56,.39,-.11,.29,-.32,-.04,-.55,.52,-.03,.49,.22,-.1,.39,.54,.31,.05,.51,-.15,.6,.43,.57,.35,.18,.33,.37,-.17,.39,.28,.22,.09,.01,-.18,.47,.63,.18,-.1,.5,.22,.44,.09,.6,.43,.7,-.07,.15,.54,.51,.34,.66,.35,.67,.21,.14,-.08,.05,.22,.36,.61,-.22,.51,.19,.05,.48,-.09,.18,.15,.05,.5,.3,.15,-.08,.08,-.04,-.02,.43,.29,.02,.25,.09,.39,-.01,.03,-.2,-.01,.07,0,.55,.17,-.19,.57,.47,.29,.49,-.07,-.46,.08,-.32,.04,.44,-.26,.51,.1,-.05,-.07,.07,-.21,.17,-.09,.45,.39,.02,-.16,.64,.47,-.07,-.3,.24,.18,-.24,.08,.7,.38,.56,.41,.48,.61,-.16,.43,-.03,.06,.11,.54,.1,-.65,.46,.45,.36,-.05,.46,.61,.48,.26,.34,-.3,.33,-.06,0,.17,.04,.37,.2,.17,.04,-.06,.54,-.01,-.15,-.04,.08,.03,.3,-.06,.44,-.1,.22,.3,.71,-.05,.08,-.44,-.27,.33,.46,.42,.55,.17,-.04,-.2,.02,.63,-.33,-.08,.2,.77,.06,.68,.15,.56,-.14,-.73,.24,.54,.53,.22,.27,-.2,.07,.09,.52,.32,.63,.28,.24,.21,.11,.46,.68,.62,.45,-.05,-.1,-.28,.62,.03,.7,.65,-.39,.08,-.15,.09,.3,.54,.2,.15,-.45,.74,.66,0,-.11,-.14,.24,-.03,-.06,-.11,.07,.13,.54,-.45,.73,.16,.4,.42,.06,-.08,-.11,.21,-.1,-.31,.66,.17,.18,.06,.06,-.1,.22,.26,-.24,-.04,.16,.65,.41,-.16,.6,.32,-.3,-.38,-.33,.47,-.53,.45,.64,-.13,.5,.25,.47,-.08,.02,.01,.34,.35,-.31,-.07,.08,-.39,.39,.41,.33,.45,-.25,.09,.07,.32,.49,.08,.19,.16,.49,-.09,.1,-.33,.56,.27,.27,.32,.63,-.01,-.04,.12,.17,.35,.63,-.07,.41,-.38,.29,.06,.61,.39,.47,.03,-.08,.72,.37,.63,.55,.26,.16,-.18,-.27,.33,.53,.21,.67,-.39,.52,.7,-.13,.44,.1,.18,-.32,.63,.26,.75,.27,-.27,.34,-.05,.07,-.17,.66,-.21,1,.27,-.49,-.12,-.03,.6,-.11,.23,.11,.6,-.01,.55,-.18,.28,-.13,-.14,.22,.56,.19,.07,.13,.05,-.23,.17,.03,-.32,.41,.54,.05,.21,-.28,.53,.01,-.22,.48,-.14,.02,-.32,.45,.06,-.1,.32,.28,.35,.27,-.05,.62,.55,.04,-.35,.13,.16,-.34,.05,.31,.08,-.05,-.04,.07,.42,.16,.31,.19,.25,-.08,-.01,-.21,.24,.13,.71,.48,.05,.27,.57,.64,.02,.74,-.28,-.44,.49,.64,-.09,-.44,-.19,.33,.6,.25,-.01,.01,-.1,-.12,.47,.03,.32,-.02,.16,-.15,-.06,-.17,-.11,.57,.46,.02,.22,.07,-.07,.16,-.05,-.24,.48,.65,.53,0,.47,.63,.37,.18,.34,.55,.68,.7,-.53,.42,.02,.45,.69,-.14,.32,.28,.64,.25,.01,.07,.5,.01,.03,.13,-.02,.45,.14,.19,.2,.71,.08,.71,.07,.61,.07,.08,-.02,.62,.05,0,.03,-.48,-.29,-.09,.02,.15,-.55,.67,-.18,.2,.37,.36,.53,.61,.05,-.33,.18,.1,.13,0,0,-.07,.35,.47,.05,.37,.05,-.07,.35,-.24,-.09,-.14,.2,.06,.03,.01,-.14,-.04,.03,-.2,.02,-.27,-.04,0,.43,.27,-.01,.16,-.03,.31,-.15,.11,-.03,.7,-.03,.2,.58,-.02,.38,.58,-.05,0,-.1,.16,-.03,.13,.57,.05,.56,.57,.12,.35,0,.16,.49,-.15,-.03,-.05,.39,.14,-.21,-.3,.36,.19,.28,.41,.04,.4,-.09,-.25,.13,.16,.58,-.1,-.13,-.15,.56,.27,.36,-.36,.39,.4,.06,.4,.28,.4,.45,.23,.37,.4,.23,.52,.62,-.03,-.2,-.1,.04,.3,.06,.04,-.08,-.26,.7,.01,-.01,.51,-.21,.24,.67,.12,.51,.65,.62,-.03,-.31,-.05,.37,.5,.33,.33,.07,.55,.16,-.02,.39,.39,-.02,-.12,-.11,.01,.51,.18,.63,-.26,.36,-.24,-.06,-.24,.11,-.04,.34,.29,-.13,.1,.61,.52,-.18,.17,.58,.64,.15,0,.08,.66,-.07,0,.44,.73,-.11,.57,.12,.36,-.15,.03,-.1,.25,.5,.13,.38,-.12,.28,.02,-.1,.46,.4,-.1,.31,.6,.29,.58,.47,.57,.48,.18,-.09,-.41,.54,.58,-.05,.44,.02,.51,.07,.21,-.08,.02,-.03,-.3,.01,.56,.48,.15,.36,.17,-.07,-.26,.22,.6,-.04,-.05,.59,.69,-.33,-.23,.48,-.17,.59,.55,.73,.12,.4,.38,.16,.48,-.04,-.22,-.07,.51,.39,-.1,.74,.42,.09,-.04,.66,.41,-.1,-.06,.31,.1,-.17,.45,.23,-.28,-.07,.55,.16,.51,.34,.54,-.09,-.08,-.1,.48,.68,.43,-.1,-.08,-.15,-.18,.23,.54,-.02,.69,-.2,-.01,.27,.07,.11,.56,-.23,.08,.58,-.64,.49,.1,.17,-.06,.36,-.32,-.34,.34,-.09,.53,-.11,.69,.02,.18,-.03,.3,-.21,.12,-.17,.66,.04,.32,.23,.24,-.12,.53,.09,-.12,.02,-.03,.67,.73,.57,.01,.42,.16,.56,.51,.55,.58,.46,.06,.19,.23,.28,.28,.18,.57,-.13,.43,.5,-.45,.36,.31,0,.16,.5,.56,-.03,.28,.3,-.15,-.34,.25,.27,.35,.71,.35,-.18,-.04,.59,-.07,.55,.16,.2,-.01,-.03,.09,.62,.31,-.12,-.1,.38,.09,.16,-.08,.62,-.19,-.12,.39,.31,.47,.49,.32,.38,.34,.49,.06,.25,.37,.57,.05,.04,-.18,.16,.56,.48,-.02,-.32,-.35,.08,.22,.23,.45,-.13,-.12,-.16,.2,-.23,0,-.05,.04,-.05,.01,.09,.19,.09,.58,.63,.06,.46,.45,.58,.53,.06,.21,.02,.46,-.32,.2,-.27,-.24,.4,.55,.26,.22,.44,-.4,-.07,.62,.58,.16,.34,.06,.43,.08,-.26,.13,-.24,.3,.04,-.14,.23,-.21,.21,.4,-.01,-.09,.6,-.18,.03,.7,.42,.66,.67,.14,-.22,.3,.08,.47,.28,-.02,.67,-.08,.11,-.08,-.08,.13,.25,-.35,-.06,.14,.54,.64,.62,.56,.1,-.02,.04,-.11,.22,.23,-.32,.46,.62,.19,-.04,.23,.39,.42,-.14,-.21,-.21,.59,-.31,.67,.45,.64,-.12,.31,.32,0,.47,.17,.61,.56,-.15,-.01,.56,.02,.52,.39,.27,.07,.54,.02,.06,.05,.41,-.04,.02,.57,.37,-.17,.44,.54,.47,.29,.36,.5,.18,-.08,.48,.05,0,.69,-.17,.36,.3,.32,.37,.52,.17,-.08,.22,.73,-.1,.11,-.29,.2,.57,.34,.58,.57,-.06,.34,.56,.53,.54,.65,.38,.43,.7,.63,.56,.15,.24,.61,-.21,.73,.29,.79,.52,-.11,.38,.78,.09,.64,.63,.21,-.3,.42,.55,.51,.24,.58,.26,.32,.02,.58,.43,.56,.73,-.06,.32,.25,-.34,.58,.34,-.01,.08,.56,.46,.56,.26,.37,.22,.51,.51,.67,.02,-.22,.32,.28,.26,.43,.17,.17,.48,0,.48,.51,.43,.51,.42,-.07,.07,.37,.32,.48,.46,0,.08,.57,.27,.49,.73,.39,.76,-.08,.71,-.16,.55,.02,.2,-.13,.04,.1,.59,.39,.13,.55,-.05,.47,-.23,.15,.58,.58,.71,.58,.75,.28,.09,.15,.37,.45,-.05,-.05,.73,.51,.69,.18,.37,.26,-.19,.37,.18,.64,.21,.07,.51,.51,.62,.63,.19,.37,.46,.6,.52,-.23,.69,.21,-.07,.75,-.05,.55,.06,.38,.58,-.03,.7,-.1,.1,.27,.28,.22,.26,.34,.12,-.05,.19,.23,-.11,.09,.72,.57,.34,.03,.76,.19,.38,.57,.68,.61,-.14,-.08,.13,.74,-.14,-.43,-.01,.27,.27,.24,.51,.39,.2,-.08,.51,.4,-.27,.47,-.13,.69,.3,.27,-.21,-.05,-.01,-.24,.21,.41,.39,.5,.36,.21,.51,.33,.65,-.08,.22,-.22,-.04,.53,-.23,.39,.44,.6,.56,.04,.46,.4,.7,-.34,.15,.03,.59,-.31,-.14,.11,-.54,-.01,-.2,-.06,-.03,-.22,-.04,.63,.48,-.02,.57,.44,-.11,.34,-.03,-.39,-.46,.07,.59,.51,.64,.3,-.1,.53,.3,.53,.62,.54,.13,.66,.59,.57,.54,.54,.42,-.12,.43,.66,.51,.29,-.24,-.03,.19,.65,.17,.58,-.18,.51,.49,.67,.35,.46,.51,.57,.03,.56,-.04,-.26,.48,.26,-.15,.13,.54,.46,.66,.42,.43,.33,.44,.45,.11,.02,.05,-.08,-.1,-.09,.29,-.09,.13,-.02,.63,.01,.5,-.13,.11,.1,-.13,-.12,.05,.47,.03,.32,.5,.4,.24,.7,-.1,-.11,-.31,.02,.63,.06,.15,.64,.55,.24,-.1,.61,.1,.69,-.17,.54,.16,.49,.47,-.02,.24,.32,.12,-.04,-.48,-.13,-.17,.63,.67,.57,.38,-.2,-.08,.73,.43,.43,.02,-.06,-.12,.69,.46,0,.54,.71,.28,.43,-.02,.57,.67,-.28,.1,.43,.45,.54,-.12,-.37,.17,.26,-.03,-.13,.47,-.07,.1,.67,.31,-.08,.62,.07,-.06,-.1,.67,-.61,.4,.32,-.1,-.08,-.07,.38,.28,-.19,-.2,.36,0,.46,.58,.38,-.22,.29,.44,.56,.73,.65,.15,.05,.49,.7,.32,.02,.03,0,-.07,.6,.65,0,.51,.08,.26,.42,-.03,.33,.01,.12,-.48,-.18,-.12,.11,.58,.48,.47,.48,.47,-.16,.58,.15,.02,.08,.19,.01,.51,.54,.31,-.21,-.68,.51,.4,.18,.52,.42,.66,.42,.08,.59,-.72,.69,.64,.55,.05,.64,-.02,.65,.47,.18,.58,.38,.67,.31,.5,.71,.33,-.2,.52,.12,.55,-.2,.58,.7,.62,.6,.64,.11,.67,.29,.33,-.45,.6,-.03,.46,-.19,.02,.7,.4,.65,.67,-.23,-.1,-.05,.14,.48,.32,.48,.32,.63,.15,-.3,.1,-.17,-.12,-.05,.45,.18,.16,.56,.02,.19,.57];export{a as rvalData};
