const a=[-.25,.41,.34,-.13,.46,.12,.25,.25,.33,.14,.15,-.03,-.03,-.5,.24,.14,.16,.12,-.07,.09,.05,-.33,.09,.15,.41,.67,-.39,-.05,.4,-.35,.54,-.33,.51,-.04,-.07,.25,.42,.26,.3,.31,.01,.59,.21,.02,.12,.16,.02,-.15,.02,.36,.16,.05,.19,.53,.47,.18,.25,.12,.41,.42,.37,.53,.63,-.11,.26,-.26,.66,.25,-.03,.04,-.05,.3,.46,-.32,.57,.02,-.05,.35,.26,-.13,-.25,.37,-.04,.65,-.2,-.22,.62,.17,-.49,.42,.26,.14,.41,-.35,0,.23,-.49,-.28,-.02,.44,-.11,.64,.45,-.12,.55,.06,-.1,-.04,.58,.59,-.07,.39,-.02,-.27,-.03,.53,-.05,-.23,-.16,.49,.06,-.26,.13,.12,.14,.5,.56,-.05,-.25,.49,.29,-.02,-.08,.23,.06,.11,.31,.34,-.26,-.05,.67,.01,.69,.64,.03,-.06,-.02,.16,.67,-.16,.6,.16,.08,-.03,.31,.26,.25,-.04,-.24,.2,.18,.62,.08,.33,.38,.3,.22,-.32,.18,.52,.02,-.26,.39,.04,.53,-.12,.08,-.2,.4,.54,-.25,0,.01,.22,.56,.16,.03,.08,.18,-.18,-.07,.34,.09,.56,.57,.5,.57,.21,-.03,-.22,.21,.48,.49,.03,-.37,.39,.06,.51,.37,.08,.3,.35,-.09,.47,.12,.25,.03,.39,-.19,-.12,.69,.46,.36,.54,.7,.51,.33,-.23,.29,.15,-.09,-.05,.42,.31,.05,.01,.28,0,.03,.01,.42,.26,.23,.23,.41,.15,.1,.19,.12,-.2,.18,-.06,.49,.27,.66,.02,.19,.3,-.02,.24,-.02,.21,.36,.67,.33,.5,-.32,.65,-.01,.44,-.07,-.37,.46,.32,.5,.04,-.14,.35,.37,.03,.33,-.22,.21,-.28,.55,.46,-.25,.42,.21,-.07,.11,.38,.51,.09,.24,.24,.13,-.27,.12,.43,.05,.4,-.28,-.06,.02,.5,.22,.58,.31,.03,.56,-.09,-.05,.03,.32,.43,.25,.25,.31,.1,.66,-.01,.28,.66,.19,.55,.6,.15,.12,.56,-.31,1,.35,.06,-.48,-.01,-.21,.63,-.01,-.19,.54,.16,-.18,-.03,.46,.37,.11,.47,.16,.45,.68,.06,.06,.54,-.22,.26,.32,-.21,.38,.28,.38,-.01,.51,0,-.1,-.3,.21,.49,.23,.03,.08,-.35,.25,.13,.28,.3,.19,.61,0,.38,.12,.1,.07,.03,-.01,.37,-.32,-.01,.55,.56,.43,.02,-.03,-.01,-.01,.39,-.49,-.22,.17,.13,-.13,.37,.4,.44,.24,.08,.2,.42,.67,.69,.3,-.17,-.02,.45,.21,.02,.67,.36,.35,-.1,.14,.49,-.1,.03,.18,.48,.42,-.06,.42,-.07,.22,.12,.46,.08,.26,.38,-.09,.61,.5,.42,.63,.61,.66,.03,.2,.4,.4,.61,.11,-.35,.25,.55,-.6,.29,-.06,.1,-.13,.49,.23,.45,.45,.54,-.4,.38,.12,.26,-.21,-.16,-.5,.5,0,.42,.28,-.06,.42,.5,.35,.09,.49,-.22,.56,.36,.53,.39,.14,.37,.44,.1,.39,.21,.03,-.02,.08,-.09,.42,.55,.18,-.01,.41,.22,.52,.21,.48,.34,.6,-.04,.09,.5,.43,.36,.6,.32,.63,.27,.12,0,.15,.32,.37,.57,-.31,.44,.17,-.07,.38,-.02,.2,.14,.11,.5,.43,.17,0,.26,.06,.08,.36,.23,.17,.09,.02,.3,-.03,-.04,-.22,-.12,.24,-.01,.38,.22,-.25,.5,.38,.27,.42,0,-.39,.1,-.26,-.01,.38,-.2,.47,.32,.06,-.05,-.04,-.08,.22,-.05,.34,.32,.07,-.03,.55,.38,-.12,-.27,.31,.19,-.26,.09,.68,.46,.51,.34,.41,.52,-.07,.41,-.05,.06,.01,.44,.31,-.51,.5,.33,.35,.19,.43,.53,.4,.24,.34,-.39,.28,-.19,.01,.19,.21,.37,.2,.33,.04,-.09,.44,.16,-.11,-.05,.19,.15,.27,-.07,.37,-.22,.16,.2,.61,.18,-.12,-.42,-.33,.32,.31,.37,.52,.21,.12,-.25,.12,.54,-.43,-.11,.11,.66,.2,.6,.2,.5,-.22,-.6,.32,.49,.51,.05,.17,-.12,-.06,.11,.39,.25,.55,.26,.13,.17,.14,.44,.61,.54,.38,-.01,-.04,-.34,.41,.05,.59,.51,-.29,.12,.06,.19,.16,.48,.23,.25,-.43,.65,.61,.12,-.03,-.11,.21,-.11,-.06,.06,.06,.1,.37,-.35,.65,.34,.44,.33,.13,-.15,-.17,.2,.05,-.35,.6,.15,.19,.18,-.08,-.19,.23,.07,-.1,-.08,.31,.62,.39,-.03,.45,.29,-.24,-.37,-.22,.46,-.43,.36,.56,.03,.54,.31,.43,-.06,-.04,.02,.22,.32,-.29,-.1,.05,-.25,.4,.39,.29,.52,-.12,.11,-.27,.35,.46,-.03,.21,.16,.5,-.29,.09,-.27,.57,.28,.25,.33,.59,.04,-.05,.18,.23,.35,.45,.03,.42,-.28,.38,.21,.48,.34,.39,-.01,-.04,.7,.28,.6,.59,.31,.16,-.32,-.29,.34,.46,.18,.6,-.27,.42,.66,-.03,.35,.15,.26,-.18,.58,.32,.68,.28,-.24,.24,-.01,.09,-.03,.54,-.22,.6,.33,-.4,-.04,.01,.5,-.07,.23,.32,.4,-.03,.47,-.24,.25,-.11,-.11,.34,.48,.19,-.09,.08,-.17,-.17,.3,.08,-.29,.37,.44,.06,.25,-.32,.49,.04,-.29,.56,-.05,.09,-.25,.44,-.03,.05,.28,.22,.23,.37,-.11,.56,.5,.1,-.25,.19,.26,-.31,.06,.31,.22,-.03,.07,.07,.42,.18,.26,.29,.25,-.11,.12,-.27,.31,.06,.61,.37,.21,.35,.55,.62,.24,.66,-.24,-.3,.53,.58,-.01,-.39,.01,.29,.55,.28,-.12,.12,-.15,-.04,.41,.08,.37,.02,.21,-.06,-.1,-.09,-.03,.44,.42,0,.21,.16,.07,.18,-.13,-.11,.49,.61,.41,.06,.38,.58,.24,.34,.28,.38,.53,.51,-.45,.44,-.04,.43,.59,-.16,.31,.19,.43,.36,-.04,.22,.48,.07,.01,.22,-.16,.36,.19,.32,.12,.6,-.03,.59,.1,.59,.05,.23,0,.61,.26,.01,.21,-.33,-.16,-.07,-.04,.08,-.4,.65,-.21,.38,.39,.35,.55,.53,.27,-.3,.39,.21,.21,0,.05,-.04,.34,.5,.23,.45,.2,-.06,.38,-.13,.1,.07,.04,.05,.01,.07,-.05,.06,-.13,-.13,-.03,-.08,.01,-.03,.39,.24,-.05,.15,-.23,.34,-.17,.16,.06,.55,-.08,.24,.5,.08,.37,.53,.06,.08,-.05,.26,-.11,.13,.56,.11,.56,.47,.13,.26,.01,.26,.4,-.27,-.01,-.18,.41,-.04,-.04,-.27,.35,.14,.32,.23,.17,.26,-.12,-.29,.21,.17,.58,-.15,-.07,0,.55,.24,.28,-.3,.36,.33,.01,.34,.34,.35,.38,.09,.53,.39,.27,.47,.52,.01,-.16,.06,.1,.37,.08,.07,-.04,-.3,.65,.24,.07,.45,-.17,.2,.67,.33,.44,.6,.52,.11,-.13,.05,.27,.43,.36,.34,.04,.49,.28,-.06,.45,.4,-.05,.01,-.09,-.06,.47,.38,.57,-.27,.27,-.27,-.02,-.26,-.02,.02,.18,.23,-.12,.18,.56,.45,-.05,0,.45,.61,.23,.11,.14,.67,-.12,-.04,.24,.68,0,.58,.01,.28,.03,.03,-.1,.3,.54,.1,.37,.01,.31,.14,-.03,.43,.38,.01,.34,.51,.27,.53,.42,.54,.41,.15,0,-.43,.56,.46,-.06,.39,.03,.38,.06,.26,.01,.16,.14,-.21,.08,.46,.41,.17,.29,.22,.01,-.06,.21,.53,-.1,-.2,.55,.66,-.43,-.25,.4,-.07,.53,.5,.69,.12,.33,.24,.35,.45,-.07,-.31,.09,.35,.35,-.03,.66,.25,.09,-.01,.53,.4,.03,.06,.3,.07,-.22,.37,.15,-.28,-.04,.55,.19,.4,.42,.47,.01,-.1,.01,.4,.62,.4,.08,.04,-.1,-.17,.37,.56,.08,.66,-.06,.09,.23,-.03,.15,.61,-.26,.18,.56,-.5,.42,.08,.26,-.09,.3,-.42,-.29,.44,-.05,.54,.12,.67,-.08,.32,.15,.38,-.29,.07,-.05,.71,.08,.31,.26,.17,-.05,.41,.03,-.06,.03,.02,.54,.67,.57,.06,.47,.2,.49,.39,.53,.58,.44,.08,.3,.02,.26,.31,.25,.5,-.19,.42,.39,-.37,.25,.26,-.05,.24,.43,.46,.03,.31,.19,-.11,-.08,.27,.24,.26,.61,.24,-.23,-.01,.48,.02,.5,.17,-.01,.23,-.07,.02,.57,.34,-.06,-.16,.34,.22,.13,-.06,.62,.01,-.11,.41,.44,.44,.37,.25,.46,.36,.55,.08,.32,.48,.61,.01,.15,-.04,.28,.59,.48,0,-.33,-.32,.2,.31,.26,.4,.03,.09,.04,.45,-.07,-.05,.09,.21,-.07,.22,.12,.13,.07,.57,.59,.25,.45,.48,.59,.47,.02,.24,.05,.42,-.23,.32,-.17,-.25,.32,.49,.23,.3,.35,-.36,-.03,.52,.5,.17,.36,.06,.37,.19,-.13,.13,-.07,.3,.06,0,.33,-.12,.2,.43,.04,-.13,.52,-.05,.22,.63,.38,.5,.64,.06,-.16,.36,.21,.39,.29,.12,.58,.01,.22,-.04,-.06,.11,.39,-.29,.01,.12,.48,.57,.53,.51,.22,-.12,.01,-.11,.25,.2,-.14,.44,.59,.27,.13,.05,.34,.35,-.14,-.04,-.23,.51,-.32,.62,.47,.56,.07,.39,.39,.04,.56,.22,.5,.56,.06,.1,.39,.13,.48,.31,.31,.09,.43,.1,.12,.15,.44,-.09,.12,.54,.4,-.16,.46,.47,.62,.17,.27,.46,.13,-.16,.42,.04,.09,.52,-.01,.36,.19,.19,.32,.48,.1,-.09,.34,.58,-.04,-.03,-.29,.16,.47,.38,.65,.51,-.09,.26,.53,.66,.41,.57,.26,.4,.63,.51,.6,.09,.31,.47,-.19,.73,.39,.74,.43,-.03,.29,.76,.08,.54,.59,-.03,-.11,.39,.42,.58,.33,.52,.18,.23,.04,.52,.34,.52,.69,.06,.4,.23,-.33,.55,.28,.08,.05,.48,.42,.5,.36,.37,.08,.42,.51,.63,-.07,-.06,.35,.18,.35,.34,.27,.2,.38,.14,.5,.51,.36,.51,.36,-.2,.09,.38,.38,.56,.3,.07,.07,.52,.35,.46,.75,.4,.69,.18,.69,-.16,.53,-.05,.21,-.08,.03,.14,.58,.32,.21,.46,-.05,.45,-.12,.24,.46,.53,.67,.54,.69,.27,.11,.13,.26,.37,-.15,-.07,.69,.39,.57,.11,.35,.25,-.05,.35,.31,.74,.18,.08,.47,.42,.53,.48,.1,.25,.5,.56,.4,-.16,.68,.21,.03,.73,-.04,.5,.07,.32,.61,-.11,.63,-.1,.21,.22,.27,.19,.24,.31,.3,-.09,.16,.16,-.11,-.03,.58,.52,.22,.14,.63,.1,.21,.61,.61,.53,-.19,-.01,.26,.68,-.13,-.34,-.18,.12,.12,.27,.43,.37,.07,-.12,.41,.29,-.21,.38,-.07,.59,.38,.29,-.19,-.26,.03,-.17,.25,.43,.34,.49,.32,.26,.44,.35,.59,.01,.23,-.1,.15,.45,-.29,.29,.26,.5,.41,-.05,.43,.28,.69,-.37,.15,-.02,.62,-.23,-.14,.29,-.48,-.04,-.16,.02,-.04,-.12,.06,.52,.49,.13,.51,.37,-.02,.24,.13,-.42,-.44,.03,.54,.43,.56,.18,-.02,.43,.3,.5,.55,.52,.07,.61,.55,.45,.48,.5,.4,-.05,.4,.53,.49,.22,-.19,.01,.1,.59,.15,.54,-.04,.47,.45,.58,.29,.37,.44,.53,.06,.47,.01,-.2,.4,.27,-.1,.2,.48,.38,.63,.33,.36,.29,.48,.38,.14,-.16,.11,.04,.02,-.06,.27,-.05,.16,.1,.62,0,.38,.08,.18,.08,.01,-.17,-.03,.47,-.07,.31,.38,.31,.46,.61,.05,-.09,-.13,-.1,.54,0,.23,.55,.59,.31,.1,.54,.13,.64,-.19,.5,.3,.57,.54,.05,.29,.33,-.03,-.05,-.35,-.18,-.2,.61,.67,.59,.34,-.09,-.09,.61,.58,.29,.08,.01,0,.66,.35,-.06,.45,.62,.18,.39,.29,.54,.61,-.28,.24,.36,.5,.63,.16,-.22,.26,.13,-.08,-.06,.39,-.05,.05,.56,.29,.03,.55,.16,-.04,-.1,.63,-.44,.35,.25,.04,-.13,.05,.34,.18,-.12,.01,.29,-.06,.44,.5,.33,-.21,.28,.36,.52,.77,.63,.12,.11,.57,.66,.3,-.02,0,-.04,-.03,.5,.62,.11,.41,-.01,.22,.34,-.01,.5,-.04,.26,-.38,-.08,-.09,.19,.5,.38,.44,.41,.41,.04,.56,.13,.04,.13,.19,-.02,.4,.46,.4,-.26,-.5,.58,.35,.22,.46,.37,.62,.32,.22,.54,-.54,.58,.61,.47,.12,.61,.16,.66,.24,.39,.39,.32,.64,.34,.47,.6,.31,-.2,.46,0,.46,-.08,.47,.59,.58,.46,.52,.18,.59,.31,.43,-.43,.54,.01,.38,-.02,-.06,.64,.53,.54,.62,-.23,-.02,-.09,.19,.45,.42,.41,.48,.63,.12,-.32,-.02,-.14,-.18,.08,.41,.15,.23,.54,.1,.2,.58];export{a as rvalData};
