const a=[.09,.17,.51,0,.28,.29,.2,.02,.19,-.06,.31,.33,-.23,-.38,.45,-.1,.14,-.18,-.25,.04,.08,0,.02,.25,.32,.27,.11,.03,-.12,.08,.2,.22,.34,.02,.36,.09,.41,.34,.11,.43,.02,.2,.18,.07,-.06,.3,-.05,.19,-.18,.09,.14,.16,.25,.44,.48,.3,.33,.19,-.06,.15,.22,.33,.37,-.19,-.02,-.04,.33,.36,.06,-.16,-.05,.04,.14,-.2,.26,.15,-.07,.17,.56,.03,-.09,.01,.03,.16,.11,.05,.21,.13,-.24,.42,.16,.01,.19,-.38,.35,-.03,-.32,.1,.04,.17,-.18,.49,.48,-.31,.38,-.03,-.22,-.09,.43,.44,.05,.14,.08,-.44,.32,.27,.17,-.15,-.01,.25,-.19,-.07,.25,-.16,-.09,.24,.36,.12,-.2,.27,.06,.16,-.02,.19,.12,-.04,.02,.03,-.03,.05,.28,.09,.02,.21,.19,.17,.14,-.06,.47,.03,.48,.17,.05,.03,-.05,.11,-.38,.3,.03,.42,.06,.44,-.22,.09,.16,.08,.11,-.08,.2,.28,.24,-.16,-.06,-.15,.21,.01,.1,-.02,.06,.31,.06,.07,-.03,.34,.35,-.1,.28,.15,-.16,.09,-.05,.18,.08,.37,.38,.55,.43,.58,.18,.14,.13,.28,.27,.12,-.18,.46,-.17,.21,.29,-.18,-.07,.28,.25,.28,.18,-.22,.08,-.09,-.05,-.07,.43,.29,.28,.48,.25,.28,.07,-.04,.57,.06,.08,-.17,.14,.57,-.11,.2,.2,.09,-.08,.03,0,.3,-.13,-.19,0,-.04,.31,.03,.03,-.05,.11,-.26,.42,.04,.31,-.06,-.02,.44,.13,.39,0,-.01,.52,.29,-.05,.38,-.11,.22,.19,.14,.33,.04,.33,.56,.4,-.05,.03,.12,.48,-.16,.08,-.1,.35,-.36,.36,.38,-.02,.3,.39,.19,.16,.01,.3,-.06,.09,.19,.09,.14,.05,.38,.07,.32,.17,-.05,.35,-.1,.28,.32,.04,.13,-.03,-.28,-.15,.1,.47,.38,.37,.03,.53,.16,.08,.32,.33,.36,.1,.26,.39,-.1,.18,.29,-.37,.22,.18,-.21,-.14,-.04,-.14,.33,-.16,.23,.19,.15,.01,-.17,.37,.53,.05,.16,.1,.04,.42,-.14,.29,.32,-.34,.38,.24,-.01,.57,.42,.11,-.16,.2,-.1,.15,-.26,.13,.31,-.01,-.23,.04,-.21,.13,.12,.12,.21,-.29,.24,-.01,.2,.08,.14,.08,-.09,.17,.32,-.05,.1,.58,.46,.63,-.32,.09,0,-.03,.34,-.15,-.15,-.06,-.12,.07,.17,.58,.26,-.01,.02,.22,.56,.39,.38,.53,-.42,-.11,.63,.39,.1,.26,.36,.09,-.51,.21,.33,-.16,-.17,-.08,.3,.39,-.06,.07,-.17,-.16,.14,.24,.29,.16,.32,-.07,.36,.27,.53,.43,.07,0,-.04,.09,.26,.35,.29,-.09,-.15,.22,.16,-.31,.07,-.11,-.02,.01,.35,.12,.09,.41,.44,-.24,.12,.12,.55,-.29,-.06,-.09,.49,-.06,.32,.44,.09,.1,.48,.39,.18,.57,-.04,.44,.35,.4,.17,.04,.08,.38,-.29,.06,.6,.35,.33,.09,-.22,.41,.22,.17,-.23,.39,-.01,.1,.01,.63,.31,.16,-.18,-.07,.68,.36,.06,.38,.09,.07,-.14,.1,-.13,.21,.24,.13,.26,-.1,.43,.35,.04,.02,.26,.16,.15,.08,.37,.25,.17,-.23,-.06,.22,.24,.37,.3,-.17,.35,.11,.1,-.26,.11,-.16,-.07,.09,.17,.49,-.41,-.08,.29,.43,.59,-.01,-.16,-.19,-.38,-.3,-.03,.44,-.03,-.08,0,-.17,-.11,.05,-.08,.19,-.19,.52,.49,.19,-.28,.25,.38,-.25,.01,.03,-.08,-.16,.34,.32,.14,.52,.23,.35,.17,-.26,.41,-.11,.1,.17,.47,-.05,-.17,.46,.35,.23,.16,.38,.3,.4,.38,.15,0,.05,-.04,.13,-.37,-.05,.44,.07,.21,-.17,.11,.34,-.01,-.11,.18,.09,-.21,.3,.05,.17,.27,-.31,.02,.36,-.06,-.04,-.24,-.13,.11,.56,.46,.51,-.05,.01,.11,.03,.21,-.11,.11,.43,.36,-.22,.24,.14,.51,.17,-.27,-.04,.36,.47,.26,.43,-.13,-.36,-.02,.33,.19,.3,.15,.08,.32,.04,.18,.13,.09,.24,.14,-.09,.06,.44,-.12,.36,.29,-.1,-.08,-.07,-.14,.07,.39,.07,.16,-.18,.19,.42,.13,-.04,-.22,-.11,-.32,.1,.06,.3,.28,.51,-.17,.13,.01,.19,.08,.14,-.26,-.15,.47,.18,.1,.39,-.18,.19,.35,.14,-.2,-.04,.22,-.14,-.12,.12,.48,.46,-.04,.11,.02,.03,-.05,.15,.47,-.15,.35,.47,.19,.19,.01,.31,-.06,.14,-.16,.39,.5,.1,.05,-.14,.04,.15,.42,.05,.08,.24,.19,.08,-.09,.42,.25,.19,-.02,.42,.01,.09,-.13,.45,.48,-.08,.42,.34,-.22,-.08,.06,-.18,.03,.23,.19,.12,-.01,.36,0,.24,.08,.46,.27,.27,.17,.62,.5,.3,.14,.49,.09,-.11,.05,.62,.38,.28,-.15,.43,0,-.39,.36,-.11,.2,-.42,.41,.44,.26,.2,-.14,.1,-.08,.07,-.21,.45,.01,.26,-.14,-.51,-.32,-.11,.24,.17,.07,-.03,.23,-.25,.28,.12,.44,-.16,.08,-.05,.26,.13,.17,-.09,.21,-.02,.26,.38,.03,.45,.2,-.36,-.17,.13,.49,-.05,-.03,.08,.08,-.13,-.02,.24,-.03,.15,.06,.12,.03,.27,.3,.39,.31,.1,-.16,-.11,-.09,-.16,.33,-.34,-.1,-.24,.17,-.19,.13,-.09,.13,-.24,.21,-.02,.2,.06,.49,-.05,.25,.25,-.01,.12,.17,.37,-.19,.27,-.38,-.34,.36,.23,-.22,-.12,-.37,.34,.23,.56,.04,.02,-.23,.17,.35,.09,.11,.12,.04,.09,.05,-.01,-.27,.45,0,.21,.03,-.14,-.1,-.07,-.19,-.23,.33,.36,.35,.3,.32,.35,.05,.19,.47,.29,.23,.03,-.48,.2,-.09,.4,.23,.15,.36,.13,-.03,-.17,.05,-.06,.52,.18,-.16,-.09,.08,.12,.22,-.06,-.26,.21,-.07,.2,.4,.41,.12,-.25,.14,.36,-.12,-.12,.38,-.38,-.15,-.34,0,.38,-.33,.24,0,.21,.3,.05,.61,.29,-.05,-.23,-.06,.3,-.1,-.19,.2,.31,.46,-.01,-.05,.17,-.09,-.06,.01,-.22,.16,-.15,.24,.06,-.04,.08,.07,.09,.19,.13,.04,-.19,.23,-.01,.3,.2,-.01,.15,-.19,.16,-.03,-.14,.05,.12,-.01,.16,.39,-.08,-.05,.45,-.23,.22,-.25,-.1,-.09,.28,.34,.05,.34,.26,-.06,.13,-.08,.1,.33,-.14,-.24,.12,.11,.1,-.17,-.14,.31,.17,.33,.3,.41,-.1,.19,-.03,.07,-.03,.36,-.03,.2,-.02,.14,-.04,.26,-.07,.31,.43,-.04,.19,.18,.26,.4,.22,.16,.51,.18,.21,.29,.18,.14,-.08,-.16,.23,-.28,-.11,-.24,-.01,.16,-.2,-.28,.36,.11,.59,.3,-.04,.14,.41,.29,.1,-.25,-.15,-.03,.32,.25,.09,.12,.48,.22,-.27,.09,.13,-.14,-.15,-.13,-.06,.14,.17,.22,-.08,.34,.13,.2,-.14,.02,.02,.43,.06,.12,-.19,.42,.32,-.33,.27,.28,.42,-.2,.16,.02,.23,.31,-.15,0,.3,.15,.23,.36,.62,-.33,.1,.1,.18,.48,.01,.13,.13,.12,.24,.15,.23,.18,.08,.03,.41,0,.29,.39,.54,.07,.23,.3,-.26,.3,.45,-.22,.31,.01,.02,-.15,-.07,.03,.18,.03,-.26,.18,.27,.3,-.38,.59,-.31,.17,-.06,.16,.37,.19,-.11,.5,.43,-.42,-.17,.57,.26,.46,.3,.42,0,.54,.42,.06,.52,.12,-.22,-.15,.49,.14,-.09,.15,.18,-.06,-.07,.03,.64,.14,.2,.15,-.03,-.13,.07,.02,-.17,-.02,.5,.14,.28,.35,.18,.1,.07,.14,.31,.18,.55,-.15,.16,0,.15,.07,.21,.16,.41,.09,-.01,.11,.26,-.03,.21,-.28,-.07,.58,-.13,.34,-.09,.07,-.1,.45,-.01,-.1,.12,.25,.46,-.08,.56,.13,.47,-.03,.16,.13,-.14,-.22,.27,.26,.59,.06,.01,.1,.36,.01,.15,.17,.02,.18,.26,.36,.02,.16,.24,.55,-.08,.4,.37,.35,-.11,.02,0,.41,.11,-.17,.3,.24,.4,.33,-.32,.24,0,.03,.18,.59,.31,.08,.12,.08,-.38,-.29,.19,-.1,.41,.21,.64,-.14,-.12,.43,-.03,0,-.39,-.19,.01,-.01,-.11,.43,.11,-.39,-.17,.06,.68,0,-.06,.41,.04,-.3,.34,.47,.68,.57,-.17,.54,.08,.27,.26,.35,.75,.47,-.25,.37,-.09,.4,.44,.24,.21,.2,-.06,.6,.45,.39,.12,.41,.09,.02,.26,.04,-.12,.17,.22,-.06,.29,.49,.09,-.1,.42,.57,.28,.8,.13,.31,.29,.35,-.07,.03,.22,-.43,-.03,-.28,-.08,.49,.61,.35,-.01,.11,-.49,.01,.46,.37,.36,.22,-.1,.32,.05,-.08,.37,-.01,.36,.13,-.16,-.03,-.18,.02,.28,-.15,-.11,.27,.04,.01,.47,.02,.15,.23,.04,.26,.24,-.03,.11,.46,-.07,.19,.21,.26,-.06,-.05,.01,.79,-.08,-.23,.24,.24,.28,.33,.5,-.07,.18,.02,.1,-.02,.41,.07,.48,.55,.02,-.27,.61,.93,.15,.01,.08,.05,.58,.18,.51,.81,.45,-.17,.29,.77,-.22,.26,.28,.62,.34,.42,-.02,.32,.06,.6,.27,.1,-.01,-.15,-.09,.08,.04,.59,-.06,-.11,.25,.07,-.34,.55,.33,.12,-.1,.23,.37,-.19,-.39,.25,-.23,-.27,.17,-.16,.26,.41,0,.12,.11,.46,0,-.06,.24,.07,.06,-.07,-.21,.51,.3,.22,.56,-.08,.1,.56,.15,.34,.43,.09,.56,.41,.46,.11,-.09,.13,.01,.14,.07,-.18,.39,.5,.14,.05,.31,.2,.44,-.09,.16,.08,.36,-.09,.32,.08,.1,.13,.37,.02,.42,.52,.26,.34,.18,.36,.22,-.24,.49,.39,-.15,.15,.62,.34,.4,.02,.35,-.35,.53,.24,.31,.11,-.06,.17,-.19,-.18,.33,.05,.21,.35,-.34,.01,.2,.44,.51,.49,0,-.23,.62,.14,.09,.53,-.13,-.23,.03,.37,.16,.24,.45,.45,.16,.44,-.16,.57,-.22,.23,-.14,.01,.1,-.03,.51,.17,.72,.07,.31,-.22,.05,.51,.48,.31,.46,.2,-.15,-.02,-.02,.25,.73,-.24,-.31,.23,.4,.11,-.09,.4,-.14,-.23,.42,.16,.38,.16,.08,.18,.29,.47,.42,.11,.51,.45,.48,.38,-.23,.31,-.06,-.17,.35,-.12,.56,-.01,.58,.5,.15,.2,-.3,-.02,.37,.26,.05,.14,.14,-.01,-.21,.1,.42,-.06,0,.34,.49,.4,.08,.3,.4,.37,.26,.29,.27,-.1,-.09,-.29,.21,.1,-.49,.11,.14,.19,.08,.35,.52,.26,-.09,.23,.46,-.18,.17,.15,.29,.39,.18,.01,.05,-.11,-.22,.44,.31,.6,.03,.61,.06,.12,.16,.34,.2,.1,-.32,-.21,.57,.03,.58,.06,.5,.43,.18,.35,.65,.45,-.05,.01,.05,.17,-.07,-.33,-.2,-.46,-.01,-.33,-.05,.13,-.03,.23,.56,.51,-.13,.13,.4,-.43,.53,.11,-.1,-.32,-.15,.34,.33,.24,-.01,-.06,.74,.01,.47,.35,-.12,-.17,.39,.39,.55,.13,.44,-.09,.32,.35,.21,.54,.05,-.07,-.06,.14,.25,.47,.49,.25,.41,.41,.19,.57,.41,.27,.45,.03,.59,-.04,-.15,.61,.23,-.35,.08,.57,.42,.54,.36,.01,.31,.38,.5,-.01,.04,.15,-.27,.12,.24,.51,-.21,.37,.4,.35,-.19,-.1,.31,-.04,-.14,-.22,-.04,0,.24,.19,.17,.62,-.04,-.15,.05,.19,-.21,.34,0,.4,-.13,.01,.57,.45,.77,.34,.29,-.23,.3,-.1,.3,.34,.27,.26,.06,.35,.08,-.03,.16,-.29,-.34,-.03,.55,.55,.24,.6,-.25,-.15,.08,.3,-.12,.23,-.13,.32,.26,.27,-.31,.75,.18,-.02,.13,.36,.34,.24,-.09,-.2,.39,.34,.58,-.13,-.21,.05,-.06,-.3,.05,.33,-.01,.34,.19,.19,-.16,.45,-.09,.23,-.16,.48,.04,.38,.08,-.05,-.1,.06,.57,.03,.15,.25,.06,-.16,.38,.28,.55,-.1,.57,.48,.16,.15,.33,-.16,.13,.27,.13,.06,.26,.24,-.09,.15,.31,.27,-.08,.27,.42,1,.37,-.05,0,.3,.09,-.33,.1,-.09,-.33,.24,.34,.03,.42,.22,.03,.2,.67,.19,.63,-.09,.34,.29,.23,.25,.12,-.22,.34,.43,.28,.53,.2,.26,.33,.07,.47,-.13,.14,.33,.28,.21,.38,.28,.42,.03,-.06,-.1,.56,.24,.66,.33,.2,.43,-.16,.3,.2,.16,-.21,.29,.21,.24,.18,.26,.01,.37,.56,.17,-.28,.17,.23,.37,.13,.01,.42,.37,.28,.46,-.02,-.05,.07,-.06,.45,.11,.29,.32,.23,-.31,-.15,.18,.32,-.35,.11,.19,.53,.11,.22,.21,-.12,.41];export{a as rvalData};
