const a=[.11,-.04,-.1,.15,0,.26,.01,.53,.21,.09,-.25,-.2,-.12,-.13,-.32,.08,-.04,.06,-.15,.1,-.24,-.36,.15,-.45,-.05,.14,-.57,.21,.09,-.62,.09,-.49,.07,.19,-.21,.14,-.13,-.27,.03,-.03,-.23,.08,.08,.05,.27,-.18,-.23,-.23,-.43,.41,-.14,.25,-.11,-.02,.43,-.3,-.06,.4,.2,-.05,.38,.03,.2,.21,-.33,-.4,.14,-.38,-.08,-.01,.04,-.16,.47,-.26,-.03,-.05,-.09,.45,-.09,-.43,-.12,-.03,.04,.12,-.34,-.36,.03,-.07,-.09,-.05,.22,-.01,.47,.25,-.31,.08,-.06,-.11,-.16,.53,0,.1,.21,.19,.38,-.07,-.11,-.3,0,.31,.06,.34,.01,.14,-.2,-.01,-.17,-.32,-.27,.08,.16,-.16,.09,.16,.29,.41,-.12,.11,-.25,-.09,.5,.16,.03,.41,-.15,.13,.49,.25,-.46,.15,.18,.22,.37,.06,.25,.21,-.09,.18,.16,.09,.1,.26,.03,-.11,.56,.35,-.04,-.09,-.23,-.33,.58,.42,.22,.33,.44,.51,.01,-.49,.31,.07,.19,-.29,.49,.31,.34,-.35,.01,-.53,.58,-.03,.05,-.1,.06,-.18,.41,.12,.08,.17,.45,-.09,-.05,.51,-.15,.42,.28,-.08,.29,.14,.11,-.4,-.19,.13,-.05,.03,-.1,.21,.12,.64,.41,-.01,.49,-.28,-.15,-.19,.38,.23,.08,.47,-.4,-.33,.28,.3,.08,-.06,.16,-.07,.57,-.41,.25,.58,.1,.19,-.29,-.11,-.04,.22,-.34,-.36,.12,-.09,.42,-.36,.39,.5,.44,.19,-.11,.23,0,-.09,.5,-.1,.39,.16,.18,-.09,0,.13,.3,-.09,-.09,.16,.21,.18,.24,.35,-.41,.2,-.13,.12,-.29,.08,-.06,-.05,.13,-.02,-.52,.55,-.13,-.42,.63,-.5,-.08,.05,.41,.07,-.56,-.13,.39,-.37,.33,.5,.1,.16,.42,.11,-.2,-.17,.23,.12,0,-.07,-.49,.03,-.11,-.03,-.08,.33,.34,-.36,.11,.05,-.11,.26,.08,.12,.37,.19,0,.17,.17,-.22,-.27,.08,.45,.42,.08,0,.1,.45,.07,.22,-.08,.02,-.34,-.11,-.42,.17,.11,-.29,.38,.04,-.15,-.01,-.18,-.11,.09,.6,.03,.4,.32,.53,.15,.39,-.18,-.13,.27,-.2,-.01,-.06,.04,.19,.4,-.29,-.06,.1,.46,-.11,.34,-.01,-.26,.03,.17,.34,.41,.3,-.05,.25,-.08,.47,0,.02,-.15,.11,.23,.2,-.24,-.03,-.04,-.06,0,-.07,-.1,.14,.06,-.08,-.38,-.01,.06,.28,-.39,.26,.03,.21,.56,-.12,-.27,.06,.27,.11,-.08,-.04,.2,0,.18,.02,.21,-.04,.64,.02,.33,-.11,-.13,-.05,.17,-.1,-.05,.07,.41,.3,.38,.3,.1,.05,.54,-.13,-.03,.08,-.02,.32,.36,.16,.26,.06,.2,.28,-.11,.08,.23,-.21,.01,.55,-.05,.1,-.15,.2,-.52,-.08,.49,.08,.04,.07,-.03,.59,.17,.04,.09,-.12,-.14,-.08,-.27,-.12,.02,.06,.46,0,-.03,.15,-.07,-.53,.39,-.24,.22,.39,.27,.26,.49,.45,-.11,-.07,-.09,-.18,.07,.34,.09,-.01,.52,-.08,-.06,.33,.42,.14,.06,.08,.11,.28,.16,-.02,-.07,.43,.29,.26,.21,.08,.2,-.32,.44,.43,.54,.23,-.3,-.05,.06,0,.11,.16,-.03,.17,.07,.16,.65,.5,0,.41,.16,.36,.18,-.06,.48,-.21,-.23,.2,-.1,-.52,-.15,.12,.38,-.54,-.02,.24,-.52,-.08,-.08,-.09,.21,-.1,-.22,.3,-.06,-.01,.04,-.2,.32,.46,-.06,.06,.18,-.09,.47,-.1,.03,-.07,.07,.28,.19,-.13,-.03,-.2,.47,.07,-.2,-.02,.41,.27,.42,-.32,-.09,.19,-.09,-.15,0,-.1,-.06,.07,.48,.02,.1,-.09,.42,.17,-.11,-.01,.01,.26,.11,-.51,.36,-.29,-.01,.26,.01,-.12,0,.5,0,.07,-.09,.19,-.09,.08,.29,.21,.17,.02,.32,-.26,.15,.26,.32,.18,-.14,-.27,-.11,.54,-.02,.31,-.02,.42,.38,-.51,.34,-.02,-.32,.16,-.13,.18,.5,.16,-.12,.43,-.07,-.08,.51,-.06,.01,-.08,-.26,-.08,-.01,0,-.05,.06,.01,.22,-.21,-.07,-.06,.24,.16,.09,.19,-.11,-.03,-.6,.19,.33,.22,-.07,.04,.2,.14,.43,-.08,.19,.48,.14,-.03,.1,.07,.43,.12,.1,.29,-.14,.24,.19,.12,.23,.04,-.01,.17,.51,.49,.07,-.14,.05,-.08,.09,.08,-.51,.09,.33,.26,.2,.11,.1,.12,-.03,-.08,.11,.54,.21,-.15,-.03,-.1,-.09,-.01,-.44,-.01,.15,-.18,.08,-.04,-.15,.33,.54,-.17,.02,.12,.01,-.26,-.11,-.35,-.54,-.09,.06,.28,-.18,.19,.55,.01,-.29,-.34,.35,.06,-.01,-.07,-.31,.02,-.15,-.14,-.46,.03,.17,-.28,-.21,.18,.03,-.29,.34,.42,.38,.03,.21,.45,-.1,.31,.41,0,.23,-.06,-.3,-.02,.22,-.04,.39,.42,.5,.01,-.38,-.3,.23,.32,-.42,.05,-.5,-.13,.3,.03,.37,.17,.02,.02,.18,-.07,.16,.09,.06,.22,-.02,-.02,.05,-.03,-.22,.1,.43,-.05,-.45,-.01,.02,-.17,.17,.44,-.14,-.1,-.09,-.01,.08,-.15,-.02,.28,-.06,.42,-.11,0,-.36,-.1,.28,.16,-.37,.15,-.1,-.04,.47,-.36,.1,-.27,-.27,.41,-.06,.17,-.38,.35,-.02,-.06,.11,.27,.21,.49,-.28,.41,-.06,-.03,-.02,.35,.42,-.2,.14,.38,.4,.17,-.05,.12,.44,.4,.2,.12,.2,-.19,.27,-.51,-.1,.02,.07,-.17,.19,.56,.01,.17,.22,.06,.08,.04,.5,.15,.11,-.04,-.05,0,-.01,0,-.08,0,-.01,.15,-.01,.11,.54,0,.59,.21,-.53,-.33,.23,.15,.36,.04,.48,.5,.04,.41,-.02,.09,-.1,.17,-.01,.21,-.11,.25,.19,.52,-.13,-.12,.08,.05,0,.58,-.03,.15,.13,-.14,-.04,.28,.11,.26,.18,.43,-.01,-.19,-.12,.38,.06,.15,-.08,.6,-.02,.16,.26,.11,-.03,0,-.11,.18,.09,.26,.11,-.05,.28,-.05,.09,-.13,.26,-.44,-.08,.25,-.26,.42,.51,.54,.02,.05,.54,-.26,.5,.25,.36,.3,.07,.02,.46,.29,.26,.67,.19,.03,.51,.04,.25,.2,-.09,.12,.07,.03,.02,.02,-.35,.02,.04,.13,-.02,-.24,.48,.39,-.53,.32,-.06,.15,.21,.4,.11,.18,.15,.07,.38,.03,.29,.08,.16,.08,-.02,.49,.04,-.02,.35,-.01,.28,-.14,.25,-.08,.1,.19,-.12,-.51,.06,-.16,.46,-.06,0,-.11,.03,.24,.05,-.1,.27,.05,-.2,-.14,.16,.4,.01,-.56,.05,.1,-.06,.47,.39,-.47,-.06,-.26,.1,.55,.49,.39,-.1,-.12,.2,-.2,.37,.36,-.03,.19,-.36,-.01,.17,.46,-.17,.02,.03,-.32,.12,.05,.22,.02,-.36,-.1,.36,.44,.18,.09,.03,.47,-.15,.53,.05,.04,.23,-.1,.02,.09,.02,-.07,.6,.55,.02,-.27,-.28,.08,-.09,.63,.01,-.14,-.4,-.14,.03,-.26,.12,0,-.29,.21,-.18,.4,.04,-.09,.03,.04,.03,.09,.49,.28,.25,.04,-.17,.07,-.06,.25,.28,-.08,-.25,-.07,-.05,.08,.06,.54,.22,-.04,.37,.25,.32,.22,.12,.1,.12,.26,.38,-.08,.11,.07,.08,.21,.17,.46,-.07,-.17,.41,.4,-.14,-.21,-.02,.16,-.1,.38,.01,.01,.38,-.04,.09,-.09,-.2,-.17,-.12,.16,.26,.19,-.02,.04,-.13,-.05,.16,.21,-.17,-.17,.3,-.03,.02,.29,.33,.21,-.06,.13,.56,-.04,-.09,-.07,.35,-.04,.47,.04,.17,.04,.25,.13,.14,.01,.28,.26,.23,-.07,-.49,.31,.22,-.39,.29,.12,-.06,.01,.08,.23,-.09,.13,.26,-.19,.14,-.06,.12,.27,.01,-.06,.09,.15,.2,.19,.09,.48,.22,-.04,.23,.35,-.12,.41,.23,-.06,.01,.23,.34,-.28,.44,-.53,-.46,.52,.02,-.07,.08,.24,-.4,.06,.27,-.07,-.04,.38,.13,.42,.24,-.08,.57,.06,.27,-.08,-.2,.02,.13,.15,.08,.18,.52,.32,.41,-.04,.18,.09,.41,.01,.39,.14,.16,-.12,-.31,.5,.48,-.05,-.27,.52,-.1,0,.52,.18,.16,.53,0,-.12,.19,.39,.18,.02,.3,.32,.31,-.02,.08,.09,-.54,-.14,-.04,.51,.01,.23,-.09,.52,-.01,.02,.16,.13,.03,.14,-.29,.09,.24,-.21,.38,0,-.08,.52,.56,.21,.23,.17,.4,.48,.54,.3,.53,.29,.32,-.04,.13,.19,.21,.25,.52,0,-.15,-.25,.17,.34,-.05,.29,-.02,.21,.3,.19,.2,-.13,.24,.27,-.12,.38,-.08,-.16,-.01,.53,.26,.46,.2,.47,.5,-.11,-.19,.44,.14,.01,-.02,.53,-.13,-.32,-.1,.21,-.37,.32,.57,-.3,.22,.09,-.03,.15,.2,.22,-.24,.08,-.11,.22,.02,-.2,.12,.13,.41,-.26,-.03,-.02,-.03,-.07,-.11,-.03,.41,.12,.29,.09,.07,.1,-.06,.55,.11,.33,-.26,.29,.15,.1,.42,.05,-.02,-.04,.08,.06,.09,-.19,.09,.02,.01,.08,1,-.24,-.12,.08,.37,-.04,-.14,.51,.28,-.01,.25,-.13,.08,.51,-.02,.17,-.28,.25,.02,.37,.18,.45,.1,.36,.11,.04,.17,.43,.11,.47,.03,.01,.4,.46,.1,.46,.27,.14,.13,.08,-.03,-.02,.1,.04,.28,.03,.64,-.17,.33,-.07,.33,.09,-.07,-.03,.13,-.11,.38,.14,0,.1,.04,.08,-.27,.25,.28,.24,.12,-.17,.16,.07,.08,.04,-.32,.36,.18,.49,.07,.28,-.1,.27,-.03,.54,-.05,.01,.43,.03,.32,.1,.09,.33,.53,.26,-.3,.16,.02,.25,.08,.15,.25,.15,-.28,.14,.12,-.14,-.1,.03,.3,.45,.54,-.04,.17,-.41,-.13,.04,-.04,.17,.2,.28,0,.51,-.24,.43,-.37,.34,-.15,.05,.24,.19,.5,.39,-.17,-.09,-.01,.11,-.27,-.14,.4,.11,.51,-.09,.53,.09,-.14,.11,.29,.31,.31,-.08,-.07,-.03,.16,-.2,.42,.39,-.14,.02,.06,.26,.33,.61,.28,.47,.19,.12,.16,.05,.45,.01,.5,-.1,-.1,.05,.3,-.13,.19,.18,-.03,.42,-.05,.5,.07,.11,.19,.12,.16,.36,.13,.3,.34,.02,.03,.05,.24,.14,.26,.15,-.01,.35,-.12,.35,.51,.33,.47,.01,-.04,-.07,.08,0,.11,-.08,.42,.36,.36,.11,.42,-.03,.2,.27,-.05,.26,-.01,-.1,.29,-.07,.2,.02,.42,-.3,.33,.21,-.2,.29,.43,-.15,.4,.24,-.28,.04,.06,-.09,-.42,.64,.19,-.41,-.38,.18,.2,-.04,-.14,.17,.3,.1,-.14,-.02,-.07,.22,.14,.4,-.09,-.04,-.24,-.12,-.18,.18,-.34,.3,-.21,.27,.02,.1,-.06,-.26,-.08,-.24,.28,.36,0,.38,.01,.36,.23,.37,.12,.24,.16,.12,.05,.06,-.24,-.16,.04,-.06,-.13,-.05,.39,-.1,.17,-.49,-.09,-.03,.01,0,.15,.49,-.03,-.32,.25,.03,.01,.07,-.12,.31,.32,.07,.01,-.14,.22,-.09,.18,-.46,-.24,-.09,.11,-.1,.01,-.06,-.31,.18,.26,.28,.48,.17,.3,.11,-.01,.11,.43,.46,.4,-.33,.38,.17,.07,.24,-.4,-.26,.1,.02,-.06,.5,.12,.22,-.1,.11,-.08,-.15,-.13,.18,-.19,.31,-.02,.07,-.06,.3,.18,.52,.01,-.23,.34,.37,.24,.13,.36,-.07,-.05,.04,-.06,.27,.26,.22,-.27,.32,.15,.24,.1,-.03,-.03,.12,.39,-.2,.06,.01,-.08,-.05,.09,.36,.11,.27,.27,.18,.26,.32,-.01,-.05,.07,0,.54,.34,.44,-.06,.13,0,.15,.19,-.16,-.06,.39,.59,.6,-.09,-.17,.21,-.08,.14,.26,-.07,.1,.3,.27,.13,.1,-.04,-.18,.2,.54,.14,.25,-.08,.14,.22,-.05,.16,.06,.16,.2,.18,.15,.16,.05,-.37,.46,.29,.48,.21,.19,-.22,.17,-.2,.13,0,-.08,.02,-.14,.16,.54,-.01,.39,.23,-.08,.08,.11,-.19,-.2,.29,.1,.2,-.12,-.09,.14,.18,.14,.26,.34,-.12,0,.03,-.19,-.09,-.23,0,.18,.1,.02,.3,.34,.11,.35,-.17,.11,.1,.15,0,.18,.25,-.09,-.16,-.07,0,-.21,.35,.08,.13,-.39,-.02,-.22,-.01,.15,0,-.04,-.1,.45,.03,.31,-.05,-.3,.04,-.14,-.2,.14,-.18,.29,-.31,-.07,.35,-.13,-.07,.02,.24,.07,.28,.1,.12,-.11,.12,.2,-.04,-.07,.26,.34,.16,-.09,.47,.08,-.02,.08,.1,-.08,.09,-.19,-.19,-.07,-.34,.23,-.16,-.13,.04,.07,.02,.05,.32,.31,-.18,.03,-.1,-.01,.26,-.14,.19,-.19,.28,.08,-.01,.12,-.21,0,-.37,.45,.01,.37,-.05,.15,.41,.23,-.46,.07,-.23,-.18,.09,.2,-.13,.42,.06,.26,-.07,.36];export{a as rvalData};
