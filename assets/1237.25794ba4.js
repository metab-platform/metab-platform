const a=[-.51,.34,.4,-.1,.63,-.02,.25,.08,.59,.16,.35,-.17,.1,-.5,.46,-.12,.2,.1,.02,-.01,-.1,-.1,0,.32,.71,.78,-.2,-.09,.17,-.21,.3,-.27,.53,-.13,.06,.1,.45,.51,.31,.23,-.16,.69,.23,-.1,.23,.37,.18,-.26,-.05,.35,.32,-.17,-.01,.64,.2,.38,.47,-.11,.31,.57,.15,.45,.64,-.03,.03,-.22,.71,.47,-.05,-.03,-.08,.2,.27,-.25,.63,-.04,-.13,.19,.46,-.24,-.38,.54,.11,.68,-.18,-.05,.7,.24,-.57,.58,-.07,.12,.43,-.6,.02,.16,-.65,-.41,-.12,.33,-.07,.68,.4,-.13,.53,.25,.01,.16,.54,.51,-.01,.2,.08,-.57,-.11,.67,.12,-.22,-.32,.74,.1,.02,.12,.14,-.14,.61,.48,0,-.27,.59,.03,-.33,.07,.05,-.02,.09,-.11,.32,-.27,-.15,.59,-.05,.67,.71,-.17,-.09,-.03,-.11,.62,-.03,.68,.13,.03,-.13,.1,-.03,-.01,-.33,-.32,.49,-.09,.64,.09,.28,.51,.27,.15,-.35,.11,.69,-.16,-.22,-.06,-.22,.51,-.13,.13,-.03,.19,.56,.07,-.11,-.08,.41,.34,.24,-.05,-.21,.06,-.26,-.15,.22,.16,.64,.52,.48,.54,.37,-.15,-.25,.41,.5,.63,-.11,-.47,.23,-.14,.35,.14,.1,-.03,.52,-.22,.6,-.12,.1,.09,.14,-.17,-.12,.46,.41,.4,.57,.48,.6,.01,-.27,.13,.27,-.03,-.11,.48,.41,.44,-.13,.41,.2,.04,-.04,.09,.53,-.01,-.28,.31,-.13,.04,.09,0,-.19,.1,.04,.26,.23,.6,.08,.01,.51,.08,.49,-.05,-.08,.54,.6,-.17,.5,-.24,.73,.11,.52,-.2,-.26,.56,.44,.69,.18,-.04,.18,.45,-.05,.07,-.24,.55,-.32,.25,.38,-.13,.54,.21,-.08,.11,.26,.51,-.03,.33,.27,.12,-.4,.03,.01,-.14,.54,-.2,.04,-.09,.33,.04,.36,.06,.11,.64,-.13,.13,-.13,.21,-.01,.21,0,.42,.12,.69,-.21,.58,.69,.06,.27,.49,-.21,.09,.33,-.34,.47,-.02,.21,-.31,.01,-.22,.16,-.12,-.15,.32,.3,-.13,.01,.54,.37,.17,.13,.22,.07,.61,-.39,-.08,.27,-.37,.59,.22,-.2,.52,.52,.58,.1,.22,.18,-.17,-.39,.01,.57,.12,.02,.18,-.24,.57,.11,.07,.23,.33,.76,-.12,.05,-.04,.01,-.03,.05,.08,.29,-.27,-.01,.4,.42,.49,.27,-.05,-.08,-.03,.53,-.29,-.09,-.16,-.01,-.17,.15,.48,.59,.14,.03,.53,.46,.7,.44,.43,-.37,-.21,.53,-.03,-.17,.68,.54,.08,-.04,-.06,.65,-.12,.21,.74,.57,.46,.16,.19,-.37,.04,.09,.71,-.13,-.01,.61,-.11,.56,.61,.44,.59,.72,.6,.15,.18,.35,.44,.52,.35,-.5,.27,.48,-.68,-.02,-.01,-.12,-.09,.53,.04,.57,.63,.39,-.62,.21,-.16,.23,-.35,.02,-.6,.59,.16,.54,.01,-.11,.08,.56,.26,.29,.42,-.22,.54,.55,.57,.56,.12,.08,.45,-.21,.22,.34,.11,-.12,.24,-.36,.44,.68,.22,.11,.43,-.26,.07,-.09,.52,.57,.68,-.15,-.15,.43,.42,.13,.66,.07,.6,-.02,.06,-.21,-.15,.11,.2,.83,-.22,.5,.02,.01,.19,-.19,-.14,.04,.03,.32,.23,.18,-.05,-.31,-.22,-.08,.14,.2,-.04,-.06,.02,.06,.24,-.05,-.15,-.07,-.27,-.05,.49,.13,-.26,.6,.44,.29,.52,.14,-.35,-.26,-.24,-.14,.49,-.03,.33,.11,-.01,.07,-.07,.06,-.05,.03,.42,.47,.43,-.27,.72,.49,0,-.34,.15,.35,-.2,-.19,.69,.14,.51,.57,.49,.44,-.11,.46,.06,.04,.03,.43,.14,-.73,.57,.56,.18,-.09,.42,.67,.57,.06,.46,-.18,-.1,-.2,-.17,.14,.05,.42,.14,.18,.12,.07,.53,-.12,-.02,-.34,.08,-.1,.13,-.07,.09,-.48,.28,.01,.66,-.17,.09,-.38,-.18,.21,.24,.44,.53,-.23,-.1,-.15,-.08,.53,-.34,-.16,.39,.66,-.09,.66,.24,.51,-.26,-.78,.04,.56,.55,-.02,.56,-.11,.02,.17,.53,.33,.61,-.15,.25,-.14,.18,.12,.71,.69,.62,-.12,.01,-.25,.29,-.37,.59,.7,-.4,-.02,.08,.01,.12,.55,.06,-.09,-.53,.72,.66,.07,-.17,-.2,-.03,.16,-.18,.23,-.09,.14,.56,-.51,.67,.34,.61,.55,-.24,.08,-.26,.4,-.21,-.1,.71,-.22,-.04,.06,.01,-.04,.35,-.02,-.06,-.05,.24,.55,.4,-.02,.47,.41,-.18,-.21,-.49,.59,-.59,.03,.41,-.03,.32,-.06,.53,-.04,-.03,.05,.42,.13,-.27,-.07,.12,-.4,.67,.45,.23,.43,-.43,-.01,-.21,.16,.6,.2,.07,.25,.24,-.02,.15,-.29,.64,.5,.34,.55,.62,.18,.08,.11,-.19,-.08,.56,-.11,.1,-.26,.3,.11,.57,.05,.46,-.04,-.27,.63,.41,.57,.21,.12,.03,-.03,-.12,.03,.53,.4,.66,-.31,.5,.61,-.31,.31,.3,.15,-.16,.64,.29,.59,.34,-.26,-.08,.09,-.05,-.44,.41,-.14,.54,-.07,-.42,-.11,.06,.6,-.26,.4,.1,.63,.11,.58,-.2,.05,-.12,-.09,.05,.64,-.03,-.17,.02,-.09,.04,.3,-.02,-.24,.14,.51,.2,-.11,-.2,.62,.18,-.12,.4,-.09,.04,-.2,.58,.08,-.13,.27,-.13,.02,.37,-.12,.66,.59,.07,-.3,-.01,-.09,-.31,-.16,.1,-.12,-.16,-.09,.15,.09,0,-.07,.15,.24,-.17,-.09,-.17,.23,.12,.6,.59,.03,.14,.47,.52,-.03,.62,-.19,-.16,.32,.44,.13,-.49,.01,.33,.73,.12,-.04,-.02,.08,-.21,.43,.09,.01,-.16,-.03,-.19,-.07,-.22,-.21,.5,.3,-.23,-.1,-.17,.01,-.01,.17,-.27,.42,.55,.6,-.16,.48,.74,0,.19,.31,.56,.7,.62,-.59,.33,.01,.43,.73,-.23,-.01,.04,.62,-.18,-.06,.16,.46,-.01,.03,.06,.07,.18,.01,.05,.37,.71,.02,.74,.02,.57,.16,-.05,.02,.54,.13,-.08,-.01,-.3,-.07,-.03,-.18,.42,-.55,.76,.02,.29,.29,.13,.38,.69,-.12,-.13,.19,.1,.1,-.34,-.21,-.27,.4,.36,-.2,.22,-.13,.05,.06,.13,.08,.15,.1,.06,.05,.03,-.22,-.05,.13,-.34,.05,-.03,-.26,-.01,.48,.27,-.06,.09,-.22,.31,-.32,-.07,.09,.79,.01,.24,.33,-.06,.34,.4,.17,-.17,.04,-.04,-.03,.06,.29,.15,.34,.65,.17,.22,-.02,-.3,.49,.07,.02,-.17,.07,-.08,-.27,-.14,.33,-.05,.26,.19,.09,.65,-.16,-.39,-.02,-.04,.59,-.16,-.31,-.03,.69,.2,.28,-.31,.45,.34,-.02,.2,.13,.21,.39,.05,.28,.48,-.16,.38,.66,-.14,-.13,-.1,.12,.11,.06,.19,-.09,-.05,.72,.1,-.32,.58,-.13,.3,.68,.11,.23,.61,.52,.06,-.1,-.38,.58,.52,.44,.32,.17,.37,-.02,.14,.26,.33,.09,-.23,.07,0,.67,.16,.63,-.21,.48,-.39,-.16,-.2,-.19,-.04,.54,-.13,-.06,-.14,.45,.56,-.11,.13,.63,.65,0,-.06,.09,.66,-.13,.19,.35,.66,-.15,.63,.05,.35,-.21,-.09,-.1,.07,.59,.16,.04,-.16,-.03,-.08,-.21,.72,.48,-.2,.16,.55,.09,.68,.52,.6,.14,.09,-.25,-.35,.26,.6,.06,.54,-.05,.66,.17,-.19,-.08,.04,-.21,-.32,-.11,.55,.54,-.03,.36,.15,-.03,-.18,.15,.59,-.3,-.14,.63,.53,-.35,-.18,.52,-.24,.53,.24,.62,-.15,.42,.53,.04,.45,-.17,-.04,-.31,.54,.21,.14,.67,.59,-.22,-.16,.63,.39,-.14,-.12,-.11,.19,-.16,.13,-.15,-.15,-.15,.48,.04,.6,.52,1,-.08,-.2,-.15,.54,.69,.43,-.15,-.14,-.04,-.29,.21,.38,-.25,.71,-.1,-.04,-.17,-.02,.36,.41,-.14,-.06,.56,-.7,.54,.36,-.14,-.01,.41,-.2,-.3,.36,-.3,.61,-.1,.66,.28,.1,-.17,.16,-.4,-.19,-.1,.59,-.16,.5,.32,.41,-.16,.53,.07,-.03,-.13,.02,.66,.62,.47,-.29,.27,.04,.54,.56,.57,.59,.65,.2,.25,.12,.51,.14,-.03,.6,-.09,.47,.41,-.5,.45,.13,-.07,.21,.47,.58,-.05,.22,.09,.07,-.31,0,.22,.47,.59,.34,-.25,-.04,.41,-.22,.08,.11,.06,-.18,-.09,.09,.36,.32,.02,.33,.37,.29,.15,.08,.46,-.29,-.23,.18,.33,.47,.6,.38,.21,.04,.28,-.15,.09,.37,.52,.24,-.05,-.4,-.08,.53,.27,-.06,-.09,-.39,.16,.27,.64,.29,-.18,-.26,-.42,.11,-.21,.11,-.13,-.08,-.02,.05,.2,.3,.05,.43,.69,-.07,.42,.14,.4,.56,.19,-.19,.13,.48,-.23,-.06,-.11,-.17,.34,.69,.48,.31,.29,-.23,-.17,.35,.37,0,.18,-.07,.53,.04,-.08,.09,-.03,.34,-.04,-.02,.15,-.21,.09,.28,-.03,.07,.68,-.27,.1,.73,.13,.76,.7,-.06,-.49,.23,.21,.18,.32,-.31,.77,-.16,-.03,-.06,.05,.1,.24,-.49,-.42,.1,.74,.71,.54,.37,.23,-.05,.08,-.13,.18,.17,-.15,.28,.7,-.05,-.08,.2,.3,.17,-.17,-.33,.02,.63,-.34,.61,.41,.42,.06,.22,.41,.24,.49,-.08,.72,.4,-.02,-.07,.29,-.17,.61,.43,.17,0,.36,.03,.12,.18,.59,-.12,.01,.68,.24,-.33,.29,.57,.34,.08,.48,.67,.42,.07,.28,.1,.21,.71,-.19,.34,.45,-.01,.04,.32,.14,.05,.19,.55,-.17,.04,-.11,-.01,.62,.36,.41,.6,-.08,-.01,.37,.45,.51,.42,.08,.46,.61,.38,.43,.1,.1,.53,-.02,.56,.26,.65,.49,-.12,.04,.66,.14,.42,.46,.07,-.25,.5,.66,.47,.06,.43,.19,.5,-.13,.44,.46,.76,.69,-.12,.32,.23,-.07,.54,.51,-.36,.07,.54,.51,.49,.37,.18,.38,.34,.58,.59,-.05,-.18,.16,.5,0,.56,.17,.2,.6,.01,.37,.56,.39,.58,.38,-.06,.17,.31,.53,.33,.34,.08,.25,.65,.22,.32,.59,.44,.62,-.12,.67,-.06,.33,.31,.26,-.08,-.03,.22,.41,.49,.29,.58,-.06,.4,-.12,.13,.55,.59,.51,.58,.7,.05,.27,.07,.09,.37,-.06,-.19,.63,.4,.74,-.11,.41,.01,0,.35,.17,.45,.02,.19,.54,.48,.35,.37,-.17,.46,.28,.55,.32,-.48,.51,.35,-.43,.66,.16,.63,.28,.35,.52,-.07,.67,-.02,.27,.14,.13,.13,.35,.13,.11,.01,.22,.19,-.16,.07,.52,.45,.4,-.09,.61,.43,.37,.71,.77,.59,-.08,-.13,-.03,.66,-.06,-.23,-.05,.13,.19,.21,.49,.45,.36,-.07,.67,.41,-.13,.63,.14,.67,.43,.35,-.41,.11,.07,-.23,.16,.08,.42,.41,.34,-.12,.45,.14,.53,-.17,.29,-.25,.15,.51,-.3,.43,.34,.37,.33,0,.63,.32,.66,-.2,.22,.05,.44,-.44,-.1,.2,-.27,-.04,-.33,.09,.05,-.14,-.02,.58,.52,.09,.76,.45,-.08,.39,-.1,-.22,-.34,.16,.6,.5,.67,.32,0,.6,.31,.54,.48,.29,.23,.71,.48,.7,.41,.36,.38,.01,.59,.61,.46,-.09,-.13,.17,.14,.69,.04,.37,-.17,.68,.47,.59,.37,.51,.55,.55,.01,.58,-.1,-.23,.42,-.12,-.08,0,.47,.45,.61,.37,.13,.43,.19,.48,.22,-.17,.02,.02,-.15,-.2,.39,-.42,.17,-.06,.55,.1,.45,-.13,-.19,.26,.07,-.09,-.19,.58,.18,-.1,.58,.14,.19,.58,-.17,-.32,-.35,.06,.61,.07,-.13,.64,.34,.25,-.03,.69,.1,.77,-.12,.57,.26,.34,.32,0,.38,.21,-.21,-.22,-.48,.08,-.2,.58,.67,.56,.35,-.23,.16,.61,.32,.26,-.06,-.02,-.23,.75,.49,.11,.47,.62,.57,.06,.06,.62,.71,-.12,-.16,.44,.27,.47,.22,-.14,.54,.36,-.07,-.09,.47,.05,.19,.72,.07,.08,.71,.07,-.21,-.16,.66,-.59,.47,-.07,-.06,-.14,.01,.53,.33,-.18,-.01,.02,.17,.47,.6,.44,-.08,.29,.41,.61,.68,.54,.25,.01,.3,.68,.08,.09,-.16,-.09,-.01,.68,.68,-.29,.72,.01,.18,.51,.1,.27,-.17,.27,-.33,-.39,.01,.13,.47,.56,.53,.45,.32,-.02,.42,.17,.25,.2,.15,.11,.62,.61,-.04,-.31,-.65,.31,.34,.15,.52,.1,.73,.12,.14,.57,-.76,.73,.54,.58,-.18,.66,.04,.55,.46,.23,.41,.4,.7,.55,.55,.7,.43,-.15,.55,.08,.22,-.05,.62,.74,.82,.63,.77,-.19,.61,.4,-.15,-.42,.7,-.14,.45,-.35,.07,.59,.37,.73,.69,-.1,.07,.01,-.23,.61,-.06,.3,.42,.74,-.04,-.09,.13,-.21,.04,-.1,.65,.13,-.02,.61,-.13,.2,.47];export{a as rvalData};
