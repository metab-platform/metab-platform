const a=[-.05,.25,.34,0,.37,.24,.27,.29,.31,.14,.06,.21,-.16,-.37,.13,.04,.06,-.05,-.06,.12,-.15,-.42,.23,-.01,.29,.45,-.37,.17,-.01,-.41,.4,-.29,.35,.13,.01,.19,.29,.17,.32,.32,-.05,.41,.24,-.02,.15,.11,-.09,-.13,-.53,.58,.27,.12,.14,.44,.6,.23,.25,.34,.16,.27,.57,.41,.6,-.09,-.3,-.53,.5,.06,-.06,-.09,.01,.06,.51,-.48,.35,-.02,-.27,.55,.42,-.44,-.28,.2,-.05,.38,.04,-.41,.33,.09,-.39,.34,.39,.1,.51,-.25,.06,.11,-.38,-.23,0,.58,-.09,.62,.7,-.16,.72,.02,-.18,-.11,.35,.63,.12,.6,.2,-.37,.01,.29,.06,-.53,-.34,.36,-.01,-.24,.2,-.09,-.05,.64,.32,-.15,-.49,.28,.39,.02,-.04,.58,-.06,-.02,.4,.3,-.45,-.05,.49,.09,.46,.34,.13,.07,-.06,.01,.58,-.06,.61,.33,.07,.22,.32,.35,-.36,.03,-.12,.15,.27,.66,-.13,.4,.46,.5,.24,-.54,.29,.37,.17,-.52,.28,-.06,.35,-.51,.06,-.44,.52,.41,-.13,.02,-.08,.22,.5,.06,.03,.14,.34,-.01,.01,.48,.1,.64,.59,.42,.6,.46,-.07,-.28,.2,.48,.33,-.08,-.28,.49,-.11,.58,.58,.01,.27,.12,0,.26,.32,.25,.23,.27,-.51,-.28,.43,.58,.48,.39,.31,.31,.4,-.45,.58,.25,.07,-.16,.18,.39,0,.16,-.01,-.06,.33,.04,.52,.09,.26,.22,.34,.15,.1,.12,-.08,-.14,.37,-.36,.62,.14,.44,-.06,-.03,.42,.32,.28,.07,.26,.54,.47,-.03,.7,-.37,.43,.01,.33,-.06,0,.34,.49,.44,.1,-.42,.54,.48,-.54,.49,-.4,.25,-.26,.53,.35,-.29,.26,.63,-.25,.12,.48,.35,.2,.4,.25,.02,-.09,.13,.36,.1,.28,-.31,-.02,.33,0,.02,.68,.31,-.05,.33,-.17,-.08,.09,.19,.37,.55,.36,.49,.36,.4,.2,.14,.52,.4,.49,.35,-.27,-.01,.49,-.41,.37,.1,-.06,-.47,-.02,-.63,.31,-.11,-.16,.59,.2,-.04,-.03,.32,.41,.02,.47,.25,.34,.61,.22,.14,.5,-.21,.33,.37,-.25,.6,.31,.26,-.05,.34,-.15,0,-.23,.25,.32,.36,-.14,-.36,-.11,.29,.28,.39,.56,-.02,.4,.02,.42,.01,.17,.04,-.03,.12,.35,-.38,.06,.43,.4,.58,-.13,.2,-.03,-.08,.29,-.43,-.13,-.2,-.01,-.06,.26,.5,.42,.35,-.1,.13,.59,.61,.38,.47,-.34,-.06,.62,.39,-.02,.49,.2,.5,-.4,.18,.31,-.36,-.01,.15,.29,.28,.06,.29,.09,.2,.29,.35,.21,.45,.37,-.12,.38,.36,.6,.63,.38,.4,.02,.49,.47,.25,.35,.16,-.37,.36,.6,-.45,.15,-.05,-.17,-.46,.34,.33,.34,.49,.46,-.36,.55,-.05,.28,-.18,-.04,-.41,.46,-.09,.3,.22,-.05,.44,.39,.41,.41,.4,-.43,.6,.26,.39,.44,.47,.1,.55,0,-.17,.37,.13,.21,.07,-.06,.41,.31,.52,-.21,.33,.29,.37,-.1,.62,.29,.51,-.02,-.01,.46,.25,.47,.6,.2,.39,.04,.47,-.54,.31,.49,.56,.39,-.27,.36,.12,.07,.31,.13,.12,.25,.21,.41,.55,.5,-.03,.25,.16,.3,.4,.19,-.03,.18,0,.38,-.17,-.32,-.35,.01,.11,-.32,.58,0,-.4,.32,.43,.41,.43,-.14,-.49,.02,-.4,-.09,.5,-.33,.19,.28,-.12,.03,.05,-.07,.36,-.1,.45,.42,.29,.01,.37,.3,-.13,-.38,.46,.07,-.39,.18,.57,.22,.79,.17,.29,.47,-.45,.28,-.07,-.01,0,.56,.25,-.32,.41,.33,.43,.23,.31,.39,.36,.53,.21,-.4,.39,-.26,.02,-.02,-.09,.22,.15,.47,.04,.18,.3,.18,-.24,.03,.31,.03,.4,.12,.36,-.04,.05,.23,.54,.07,-.11,-.46,-.22,.56,.33,1,.39,.35,.17,-.37,.18,.3,-.42,.15,.24,.52,-.02,.44,.08,.79,-.14,-.47,.24,.38,.38,.09,.24,-.18,-.12,-.01,.29,.25,.39,.36,.21,.16,.03,.24,.43,.36,.42,-.08,.01,-.45,.64,.2,.61,.38,-.33,.06,-.03,-.03,.1,.41,.32,.27,-.29,.43,.44,.27,-.08,-.15,.09,-.09,.16,.06,.21,.28,.54,-.24,.39,.28,.49,.26,0,-.2,-.06,.18,.03,-.39,.52,.21,.23,.36,.26,-.15,.09,.2,-.14,-.24,.34,.5,.28,-.12,.19,-.03,-.06,-.46,-.13,.51,-.37,.53,.37,.01,.51,.42,.24,-.11,.13,.03,.16,.24,-.37,-.37,-.11,-.13,.35,.25,.26,.55,-.02,-.2,-.05,.12,.43,.15,-.06,-.19,.31,.01,.08,-.51,.36,.49,-.15,.31,.56,-.06,-.29,.2,.04,.25,.35,.19,.46,-.14,.51,.26,.38,.43,.32,-.05,.08,.47,.42,.63,.47,.49,-.06,-.28,-.54,.19,.61,.13,.37,-.5,.39,.41,-.27,.52,0,.32,-.37,.56,.25,.38,.39,-.26,.33,.01,.01,-.26,.4,-.43,.42,.2,-.43,-.61,-.1,.3,.03,.21,.26,.28,-.1,.32,-.09,.34,-.26,-.17,-.02,.32,.28,.08,.11,-.08,.02,.35,.16,-.48,.44,.25,-.03,.26,-.31,.55,-.08,-.37,.52,-.07,-.01,-.48,.45,-.01,.01,.15,.34,.29,.51,-.18,.63,.38,-.03,-.27,.08,.19,-.39,.16,.12,.19,-.11,.13,-.01,.46,.21,.31,-.01,.29,-.1,.21,-.42,.38,.02,.49,.26,.03,.41,.17,.46,.11,.44,-.2,-.24,.61,.32,-.06,-.2,-.2,.4,.36,.24,-.01,-.05,-.1,.08,.27,.08,.47,-.01,.42,.1,-.38,-.43,-.02,.56,.2,.06,.32,.18,-.08,.23,-.18,-.18,.26,.43,.38,.22,.32,.44,.34,.48,.34,.23,.39,.32,-.47,.63,-.02,.56,.44,-.11,.09,.29,.29,-.01,.2,.26,.39,.07,-.21,.24,.06,.15,0,.33,-.03,.46,.02,.4,.18,.33,.12,.07,.13,.47,.03,.11,.26,-.48,-.05,-.38,0,.02,-.4,.38,.03,.28,.47,.51,.43,.46,.21,-.52,.3,.39,.23,.14,0,.1,.63,.52,.18,.54,.15,-.02,.35,-.17,.12,-.11,.04,.07,.06,.06,.01,-.03,-.16,-.12,.11,-.12,.02,-.09,.6,.47,-.3,.26,-.14,.39,.12,.04,-.01,.47,.15,.22,.58,-.04,.19,.51,-.09,.11,-.12,.32,-.14,.21,.49,-.04,.65,.25,.27,.06,-.08,.16,.31,-.35,-.03,-.02,.45,-.05,-.05,-.24,.41,.5,.39,.34,.4,.05,.01,-.24,.16,.2,.31,-.29,.01,-.03,.16,.52,.36,-.55,.4,.29,0,.37,.44,.49,.31,-.09,.24,.35,.33,.41,.42,.13,-.32,.03,.04,.53,-.38,.12,-.19,-.42,.38,-.21,-.2,.46,-.34,.39,.57,.26,.18,.48,.31,.19,-.43,.21,.23,.29,.37,.12,.14,.44,.05,-.19,.49,.57,-.01,-.52,-.29,.04,.18,.41,.29,-.26,.13,-.18,0,-.18,-.02,-.07,.24,.32,.06,.15,.4,.37,-.2,.25,.35,.45,.06,.15,.03,.29,-.11,.02,.16,.52,.11,.21,.19,.36,-.2,.07,-.2,.53,.39,-.05,.37,.1,.26,.23,.11,.31,.35,.06,.41,.29,.1,.45,.37,.57,.46,.48,.05,-.34,.46,.73,-.09,.21,.03,.28,-.12,.29,-.1,.09,.22,-.32,.11,.31,.22,-.26,.41,.01,.11,-.07,.01,.43,-.01,-.11,.56,.55,-.41,-.37,.62,.02,.52,.41,.62,.1,.41,.42,.37,.43,-.07,-.15,.14,.41,.38,-.05,.38,.35,.16,.04,.36,.41,.12,.14,.4,.09,-.46,.29,.3,-.55,.14,.56,-.02,.3,.45,.44,.09,.08,.11,.23,.38,.39,-.08,.13,0,-.15,.04,.3,.07,.52,-.05,.14,.33,.06,.13,.5,-.35,.2,.55,-.38,.27,.16,.19,-.28,.62,-.44,-.54,.47,.03,.41,-.05,.63,-.08,.23,.14,.08,-.15,.21,-.14,.54,.19,.43,.41,.1,.12,.3,-.06,-.06,.13,.21,.36,.53,.64,.04,.39,0,.51,.31,.7,.3,.49,.05,.13,.03,.14,.49,.12,.34,-.07,.64,.26,-.35,.43,.01,.17,.41,.45,.3,.08,.35,.13,-.23,-.15,.39,.16,.3,.46,.54,-.44,-.17,.5,.15,.22,-.05,-.13,.17,-.05,-.02,.59,.37,-.13,-.04,-.04,.37,.15,-.08,.65,-.07,-.18,.6,.57,.67,.62,.08,.55,.46,.61,.15,.56,.54,.52,-.14,.16,-.01,.29,.67,.56,.12,.01,-.29,.33,.47,.37,.43,0,-.04,.03,.25,-.03,-.26,.11,.2,-.1,.36,.4,.13,-.15,.7,.68,.28,.63,.42,.66,.28,.02,.32,.09,.28,-.36,.36,-.23,-.22,.4,.6,.07,.05,.53,-.59,.08,.53,.41,.39,.22,.09,.23,.18,-.28,.34,-.23,0,.1,-.18,.29,-.2,-.04,.29,-.12,-.15,.27,-.12,.18,.63,.41,.45,.35,.11,-.01,.58,.13,.44,.16,.07,.4,.1,.4,-.06,-.23,.04,.4,-.23,-.09,.14,.35,.46,.43,.37,.31,-.16,.05,-.07,.26,.14,-.31,.62,.67,.13,-.14,.28,.59,.53,-.21,-.05,-.4,.65,-.06,.68,.62,.7,-.01,.33,.57,.03,.44,.41,.57,.65,.17,-.04,.6,.2,.52,.54,.49,.08,.26,-.03,.01,.2,.45,-.1,.08,.39,.44,-.28,.65,.35,.34,.25,.16,.46,.05,-.32,.68,-.05,-.09,.46,-.13,.53,.14,.36,.44,.36,.42,.05,.12,.43,0,.08,-.51,.09,.47,.66,.23,.73,-.12,.4,.42,.54,.32,.44,.55,.54,.68,.51,.14,.14,.48,.34,-.05,.35,-.06,.59,.64,.05,.39,.46,.13,.47,.31,.11,-.12,.46,.44,.43,.47,.35,.6,.08,.06,.46,.5,.35,.54,.16,.36,.64,-.53,.77,.13,.06,.26,.63,.37,.67,.48,.58,-.06,.47,.31,.55,-.36,-.34,.55,.19,.27,.2,.56,.2,.25,-.33,.22,.22,.58,.45,.4,-.08,-.27,.32,.44,.48,.38,.03,.06,.4,.39,.52,.54,.7,.61,.01,.56,-.17,.7,.01,.56,-.21,.13,.08,.21,.34,.17,.65,.07,.72,-.26,.49,.64,.5,.47,.5,.41,.16,.13,.29,.6,.58,-.17,-.26,.43,.68,.45,.01,.53,.15,-.33,.69,.46,.51,.46,.09,.26,.25,.53,.44,.43,.39,.64,.75,.65,-.22,.65,-.08,.02,.59,-.11,.61,-.06,.43,.67,-.08,.43,-.27,.33,.01,.6,.17,.1,.37,.25,-.29,.52,.28,-.17,.19,.47,.37,.09,.3,.5,.05,.22,.47,.43,.26,-.26,-.05,-.05,.39,-.01,-.47,-.09,.6,.6,.47,.29,.39,.08,-.2,.28,.63,-.41,.44,-.12,.5,.43,.39,-.14,-.16,-.11,-.25,.35,.46,.47,.42,.55,.21,.52,.56,.39,.14,.17,-.21,.01,.6,-.37,.41,.23,.41,.37,.03,.61,.36,.56,-.42,.07,.01,.11,-.1,-.16,.2,-.49,-.1,.02,.01,.08,-.06,.02,.62,.6,.06,.3,.27,-.15,.41,.12,-.49,-.57,-.15,.46,.32,.42,.14,-.15,.61,.06,.55,.66,.22,.07,.52,.31,.57,.58,.64,.27,.02,.58,.43,.52,.34,-.51,-.09,.13,.36,.14,.7,-.01,.51,.3,.53,.36,.29,.25,.55,.08,.61,-.03,-.19,.51,.36,-.16,.24,.44,.28,.63,.42,.37,.17,.6,.37,.1,.01,.16,0,.11,.15,.19,-.06,.4,.28,.39,-.02,.12,.04,.17,-.12,-.24,-.09,-.25,.3,.1,.35,.54,.36,.06,.42,.1,-.12,-.03,.02,.47,-.1,.34,.67,.6,.47,.25,.39,-.11,.43,-.28,.32,.45,.49,.62,.1,.26,.17,.16,.06,-.19,-.25,.04,.61,.63,.37,.53,-.22,-.4,.41,.59,.26,.22,-.11,.01,.42,.22,.05,.61,.47,.12,.4,.1,.49,.44,-.44,.21,.58,.62,.49,.15,-.28,.27,-.16,-.23,-.15,.32,-.06,.12,.38,.39,-.12,.66,-.04,0,-.18,.59,-.32,.1,.38,-.06,.06,.05,.33,.16,.06,.01,.4,.15,.3,.37,.42,-.31,.38,.31,.3,.37,.37,.13,.17,.49,.4,.31,-.09,.11,-.05,.09,.44,.4,.03,.29,0,.46,.28,-.11,.32,.12,.06,-.54,-.12,-.17,-.15,.37,.3,.34,.39,.65,-.04,.56,.32,-.22,.37,-.17,.05,.48,.27,.38,-.11,-.47,.47,.25,-.05,.51,.44,.39,.5,.24,.51,-.41,.41,.45,.36,.02,.62,.19,.49,.31,.28,.21,.39,.35,.54,.32,.4,.26,-.36,.3,-.07,.47,-.15,.29,.4,.41,.31,.44,.15,.6,.22,.18,-.34,.3,.16,.27,.03,-.05,.59,.5,.42,.6,-.34,-.06,-.36,.29,.43,.27,.34,.47,.47,-.21,-.49,.02,-.17,-.35,.05,.39,.09,.04,.3,.18,-.04,.67];export{a as rvalData};
