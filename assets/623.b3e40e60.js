const a=[-.03,-.11,.13,-.09,.09,.45,.22,.25,.07,-.07,-.01,.15,-.05,-.15,-.02,-.06,-.07,-.01,-.07,.04,0,-.2,.27,-.21,0,.19,-.17,.41,.44,-.3,.26,.04,.19,.04,.08,.23,-.04,-.24,.12,.12,-.09,.11,.48,-.09,0,-.36,-.11,.27,-.25,.4,-.05,.02,-.14,.1,.56,-.01,.13,.27,.06,.14,.56,.25,.34,-.08,-.09,-.49,.24,-.25,-.2,-.02,.06,-.1,.43,-.22,-.03,-.01,-.14,.52,-.05,-.08,-.15,.12,-.02,.14,.08,-.14,.18,.07,-.12,0,.49,.07,.47,-.17,.01,.44,-.28,-.27,.25,.52,-.11,.29,.51,-.1,.55,.13,-.2,-.18,.29,.33,-.06,.4,.15,-.27,.25,-.01,.19,-.35,.28,.07,-.07,-.26,.15,-.03,.23,.48,.02,.13,-.42,-.03,.53,.24,.08,.34,-.02,.05,.44,.16,-.32,-.08,.31,.01,.26,.18,.13,.05,.07,.28,.45,-.06,.3,.08,.09,.03,.41,.56,-.13,-.04,-.23,-.06,.39,.44,-.05,.3,.43,.42,.15,-.27,.65,.15,.11,-.25,.33,-.05,.35,-.29,.15,-.26,.4,.13,-.1,.09,.09,-.11,.42,.28,-.08,0,.36,-.01,.03,.45,-.08,.46,.4,.26,.49,.25,-.19,0,-.22,.35,.01,-.06,-.09,.6,.13,.52,.64,.08,.28,-.19,0,-.11,.25,.43,.03,.33,-.28,-.33,.41,.49,.4,.19,.27,.01,.43,-.2,.52,.18,-.04,-.03,-.12,.16,0,.12,-.22,-.25,.23,-.08,.25,-.21,.37,.38,.35,.12,0,.01,.04,-.01,.38,.01,.56,.35,.27,0,.15,.1,.09,-.07,-.08,.37,.33,.26,.34,.54,-.14,.21,-.31,.05,-.03,-.34,.02,.21,-.09,-.01,-.27,.39,.38,-.22,.46,-.43,-.2,-.14,.51,.42,-.3,-.09,.45,.06,.16,.46,.34,.13,.46,.48,-.2,.02,.04,.45,.14,.11,-.09,-.2,.18,.14,.38,.38,.54,-.24,.07,.02,.02,.09,.28,.47,.32,.48,.23,.21,.18,.15,-.18,.26,.2,.53,.32,-.11,.3,.48,-.25,.27,.34,-.11,-.21,-.14,-.44,.51,0,.24,.48,.4,.09,-.06,-.05,.28,.02,.42,.48,.24,.49,.24,.09,.5,-.42,-.17,.16,-.11,.36,-.07,-.03,.03,.46,-.14,.07,-.12,.06,.01,.41,-.17,-.11,-.07,-.02,.59,.34,.45,-.03,.21,-.23,.46,-.09,.28,-.03,.06,.07,.37,-.1,.08,.38,.32,.37,.01,-.01,.07,-.02,.14,-.15,-.11,-.17,.25,.04,.35,.3,.26,.38,.09,-.13,.39,.36,.25,.22,-.31,.02,.35,.4,-.03,.28,.23,.47,-.03,.22,.06,-.24,.06,.01,.08,.09,-.02,.4,.26,.35,.58,.03,.1,.38,-.07,-.08,.39,.22,.47,.44,.06,.16,-.17,.17,.64,.11,.35,-.06,-.41,.32,.39,-.21,.41,-.08,.27,-.16,.02,.39,.19,.16,.47,-.21,.4,.06,.28,-.13,.05,-.24,.12,-.16,-.03,.11,-.25,.51,.42,.41,.21,.21,-.37,.47,-.16,.17,.42,.08,.32,.51,.22,.13,.16,.03,.16,.15,.19,.22,.11,.19,-.24,.26,.44,.42,-.07,.25,.18,.11,.17,.44,.5,.23,.4,.34,.24,.09,.33,.08,-.23,.22,.51,.47,.19,-.08,.2,.33,.1,.28,.05,.19,.06,.1,.41,.47,.23,.01,.21,.11,.24,.54,.4,.35,.18,.1,.49,-.04,-.26,.04,-.01,.22,-.25,.17,.27,-.37,.02,.26,.07,.27,.04,-.17,.19,-.37,-.11,0,-.27,.17,.32,-.21,-.1,.04,-.14,.3,-.06,.28,.17,-.18,-.01,.11,.1,-.09,.04,.28,.04,-.02,-.02,.37,.4,.6,-.16,.14,.23,-.29,-.08,-.13,.1,0,.3,.29,-.14,.41,.09,.38,.27,.24,-.01,.15,.34,.14,-.22,.47,.3,-.12,.24,.01,-.11,.27,.43,.12,-.09,.17,.16,-.29,.02,.5,.21,1,-.07,.52,-.04,0,.39,.38,.04,.01,-.45,-.16,.43,.39,.4,.4,.33,.29,-.06,.25,.2,-.07,.42,.09,.26,.29,.21,.19,.62,-.15,-.29,.41,.23,.42,.16,-.3,-.22,-.09,.01,.12,.49,.06,.43,.13,.06,-.04,.42,.26,.06,.24,.06,-.12,-.31,.51,.36,.38,.02,-.17,.17,-.13,.34,.15,.31,.46,.2,-.15,.16,.37,.26,-.1,-.06,.5,-.03,.06,.11,.06,.01,.23,-.09,.13,.23,.43,.09,.27,-.1,-.03,.24,.1,-.15,.32,.28,.16,.51,.09,-.12,.2,.32,-.18,-.02,.27,.4,-.04,-.04,.14,.12,-.16,-.18,-.18,.24,-.21,.35,.3,-.06,.48,.49,-.07,.09,.36,.16,.02,.42,.14,-.31,-.06,-.1,.09,-.1,.25,.34,-.12,.18,.08,.19,-.15,.21,.27,-.18,.38,.05,.28,-.33,.36,.32,-.1,.07,.27,.12,-.37,.25,.37,.44,.13,.08,.51,-.1,.42,.18,.16,.46,.19,.19,.02,.23,.18,.48,.42,.41,.18,-.02,-.22,.47,.49,-.3,.25,-.27,.22,.15,.09,.52,.02,.13,-.45,.38,-.07,.31,.34,-.11,.33,-.05,.07,.06,.31,-.19,.3,.29,-.28,-.33,-.15,.15,-.16,.05,.33,.12,-.05,.01,-.18,.25,-.15,0,.15,0,.32,.17,.12,-.03,-.12,.35,.04,-.19,.61,.2,-.01,.39,-.16,.22,-.16,-.11,.43,-.1,.02,-.24,.22,0,-.04,.45,.42,.35,.45,.2,.44,.11,.32,-.04,.46,.22,-.14,.24,.16,.28,.23,.02,0,.5,.55,.39,.37,.43,-.06,.16,-.29,.33,-.02,.21,-.12,.03,.55,.25,.32,.15,.17,.03,-.13,.59,.22,-.1,-.13,-.06,.25,.08,.62,-.19,.07,-.2,.1,.33,-.1,.56,-.07,.52,.01,-.28,-.18,.01,.29,.47,.24,.39,.32,-.18,.56,-.1,-.02,-.03,.31,.14,.08,.09,.14,.42,.43,.05,0,.21,.14,-.23,.43,-.08,.27,.18,-.21,.4,.35,.09,.05,.47,.21,.17,-.02,-.27,.3,.23,.36,.36,.43,-.13,.23,.33,.16,.59,.3,.23,.07,.02,.3,-.05,.03,.34,-.11,-.09,-.38,.3,-.17,-.24,.23,-.02,.18,.58,.38,.46,.25,.35,-.39,.29,.56,.35,.23,.02,.04,.47,.48,.26,.48,.19,-.2,.51,-.18,-.05,-.03,.17,-.05,-.05,-.04,.03,-.11,-.26,-.19,-.04,-.19,.02,-.26,.48,.8,-.36,.62,.05,.35,.19,.39,-.12,.16,.45,-.12,.55,-.04,.42,.36,-.06,.04,-.14,.42,-.08,.29,.46,.08,.46,-.01,.34,.03,-.06,.38,.15,-.28,-.22,-.02,.49,-.09,.01,-.12,.28,.59,.4,.18,.53,.11,.12,-.19,.14,.6,.28,-.35,-.05,-.01,-.09,.27,.39,-.28,.18,.08,-.1,.27,.2,.51,.05,.18,.3,-.04,.35,.31,.07,.08,.13,.01,-.03,.56,-.31,-.11,-.07,-.18,.24,.03,-.03,.34,.09,.11,.42,.33,.38,.39,.43,.22,-.16,.23,.08,.18,.15,.11,.17,.49,.23,-.13,.42,.47,.01,-.24,-.2,-.02,-.07,.3,.14,.03,-.21,-.2,-.03,.06,-.03,-.07,-.25,.4,-.02,.26,.33,.14,-.17,.15,.06,.39,.43,.19,.23,.16,.03,-.06,.19,.26,.13,.08,-.03,.25,-.4,.05,.01,.29,.29,0,.48,.09,.26,.18,.07,0,.21,-.02,.32,.36,.2,.28,.18,.28,.38,.23,.01,-.18,.49,.53,-.04,-.12,-.03,.05,-.09,.43,.08,.23,.02,-.25,.08,.06,-.07,-.15,.13,.31,.25,.27,.32,.34,.13,-.01,.35,.39,-.05,.02,.5,.01,.31,.58,.41,.48,.16,0,.41,.28,-.18,-.17,.05,.01,.44,-.13,.16,-.01,.47,.38,.08,.22,.11,.14,.42,.05,-.44,.49,.33,-.6,.02,.39,.14,.04,.37,.13,.01,-.04,.13,-.07,.14,.23,.01,.11,.02,-.17,.12,.35,.09,.31,-.03,0,.39,-.05,-.08,.51,-.23,.31,.45,-.21,.23,-.04,.27,-.29,.43,-.27,-.29,.39,-.07,.1,-.09,.38,-.07,.22,.19,.5,-.03,.23,.06,.42,.36,.3,.42,.07,-.01,.15,-.12,-.1,-.04,-.05,.14,.25,.42,.12,.46,.36,.38,.22,.35,.28,.37,-.19,.07,.04,-.22,.37,.49,.02,-.2,.29,.13,-.09,.33,.29,.43,.19,.26,-.02,.01,.29,.48,-.16,-.25,.35,.34,0,.2,.41,-.39,-.14,.37,.32,.24,.22,-.08,.34,-.11,.11,.47,.37,-.06,-.2,-.15,.37,.15,-.2,.64,-.19,.02,.5,.51,.57,.32,.21,.46,.25,.48,.52,.56,.49,.35,.06,.43,.22,.48,.44,.51,.19,.17,.07,.53,.49,.12,.46,.26,.25,.22,.19,.19,-.15,.31,.43,.05,.44,.32,.05,-.1,.53,.46,.39,.62,.42,.58,-.05,.1,.4,-.1,.14,-.14,.49,.03,-.28,.17,.43,-.24,.14,.37,-.41,.02,.41,.22,.25,.54,.07,-.1,.17,-.12,.35,-.04,.23,.04,-.06,.24,-.3,-.07,.13,-.27,-.11,.04,-.04,.22,.32,.4,.07,.18,.04,0,.39,.17,.42,-.17,.15,.16,.11,.56,-.15,-.03,.03,.43,-.22,.01,.11,.05,.08,.28,.35,.17,.06,.02,-.09,.36,.19,-.11,.54,.45,.29,-.22,.1,.51,.61,-.21,.19,-.21,.36,-.07,.56,.62,.55,.01,.62,.31,.02,.32,.39,.45,.61,.29,.1,.56,.35,.29,.62,.23,.28,.24,-.06,.15,.07,.21,.06,.32,.01,.46,-.07,.67,.09,.42,.3,.12,.08,.03,-.29,.6,0,.07,.09,.01,.35,0,.39,.49,.35,.17,-.13,.19,.25,.08,-.03,-.25,.47,.39,.52,.22,.45,-.06,.37,.43,.35,.19,.37,.57,.28,.45,.37,.11,.35,.23,.12,.02,.19,.13,.39,.28,.02,.44,.34,-.07,.37,.05,-.08,-.23,.27,.11,.45,.41,.22,.16,-.21,.13,.32,.24,.09,.32,.13,.41,.52,-.39,.59,-.23,-.01,.16,.44,.12,.42,.36,.59,-.27,.26,.08,.19,.1,-.3,.43,-.03,.28,.11,.34,-.03,.04,-.34,.11,.18,.55,.13,.18,-.12,-.12,.04,.41,.37,.17,.1,-.13,.25,.55,.43,.37,.5,.43,-.11,.29,-.22,.6,-.17,.26,-.03,.02,-.1,.08,.08,.17,.41,-.12,.64,-.04,.19,.4,.43,.38,.44,.17,.52,-.11,.18,.41,.42,-.05,-.07,.36,.36,.2,.42,.14,.48,-.11,.38,.43,.43,.37,0,.12,.13,.39,.28,.11,.08,.61,.56,.4,.14,.54,-.17,.16,.37,-.11,.35,-.11,.15,.54,-.03,.18,-.24,.26,.14,.33,.07,-.21,.45,.32,-.2,.16,.52,-.13,-.03,.26,.19,-.19,.38,.26,-.11,-.02,.13,.27,.14,-.11,.05,.28,.32,.02,-.3,-.11,.21,.23,.19,.17,.14,-.13,-.1,-.06,.23,-.22,.35,-.11,.23,.36,.33,-.14,.01,-.12,-.06,.62,.36,.22,0,.61,.27,.24,.38,.35,.09,.3,-.02,.02,.4,0,.16,.19,.26,.23,.03,.29,.36,.29,-.37,-.09,-.15,.11,.1,-.16,.23,-.32,-.04,.13,-.05,.14,-.02,-.05,.43,.37,.11,0,.08,-.06,.18,.29,-.38,-.44,-.13,.37,.13,.2,.1,-.42,.43,.23,.46,.43,.1,.05,.31,.13,.36,.33,.43,.21,.06,.32,.12,.22,.39,-.31,-.15,.38,.07,.58,.58,.19,.45,.12,.32,.11,.06,0,.39,-.16,.41,-.11,-.3,.44,.55,-.11,.46,.48,.14,.5,.41,.44,.26,.57,.17,.14,.08,.1,.06,.1,.1,.05,-.02,.52,.45,.38,-.01,-.08,.19,.14,-.18,-.1,-.11,-.03,-.06,-.01,.52,.35,.4,.31,.12,.27,-.01,-.09,-.06,.36,.18,.19,.4,.63,.28,.32,-.04,.27,.24,-.07,0,.45,.55,.59,-.05,0,.24,.22,-.13,.03,-.16,-.14,.39,.39,.26,.42,-.05,-.25,.18,.58,.12,.09,-.22,.1,.23,.11,.07,.28,.17,.03,.36,.3,.32,.09,-.4,.21,.51,.42,.44,-.06,-.1,-.04,-.13,-.07,-.11,.11,.01,-.07,.12,.67,-.05,.4,.22,-.05,-.02,.29,-.23,-.19,.43,-.15,.04,.17,.14,.34,.01,.12,.43,.27,-.01,.22,.11,-.07,.06,-.02,.1,.19,.3,.14,-.03,.29,.08,.55,-.02,-.11,-.24,-.03,.04,.22,.12,0,.18,.3,.12,-.15,.31,-.04,.22,-.41,.05,-.17,-.02,.25,.15,-.04,.26,.46,-.11,.48,.17,-.14,.29,.1,.22,.32,.03,.24,-.28,-.18,.61,.03,.13,.25,.41,.13,.42,.22,.45,-.19,.11,.3,.17,-.06,.29,.21,.37,-.15,.37,.06,.09,.18,.27,0,.1,-.15,-.01,0,-.09,.5,-.27,.03,.1,.11,.08,.09,.22,.42,-.01,.51,-.22,-.01,.16,.14,.24,-.1,.38,.25,.04,.28,-.27,-.01,-.18,.28,.21,.15,.44,.23,.25,.15,-.41,.28,-.08,.05,-.1,.29,-.09,.1,.17,.15,.07,.37];export{a as rvalData};
