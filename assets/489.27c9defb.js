const a=[-.22,.27,.4,-.09,.43,.07,.12,0,.06,.11,.46,.12,.07,-.3,.45,0,.05,.27,-.13,-.04,.01,.09,-.03,.26,.32,.44,.04,-.03,.5,.01,.31,.07,.59,.09,.2,.07,.42,.21,-.02,.32,.13,.43,.41,-.01,.01,.16,.06,.13,.46,-.14,-.05,.01,.1,.27,.2,.17,.31,-.05,.03,.56,.04,.49,.24,0,.65,.13,.39,.3,-.01,.02,-.22,.45,.08,.07,.43,.15,0,.02,-.05,.38,-.27,.49,-.05,.44,.03,.21,.47,.03,-.34,.13,-.1,.03,-.03,-.38,.16,.1,-.42,-.05,.15,.08,.02,.27,.12,-.08,.09,.13,-.03,-.08,.57,.15,-.21,-.04,-.25,-.37,.2,.41,.1,.13,.17,.28,-.15,.08,.14,-.04,.3,.11,.38,.07,.07,.47,-.13,-.27,-.09,-.25,.29,-.04,-.12,-.02,.03,.11,.45,.06,.31,.44,.03,-.2,-.09,.25,.27,-.08,.27,-.23,-.12,-.05,-.13,-.1,.24,.04,-.25,.34,-.06,.21,.1,.12,.01,.02,.31,.12,-.02,.46,.04,.25,-.04,-.09,.54,.28,-.01,.16,0,.48,-.19,.23,.12,.33,.29,0,.03,.07,-.01,-.09,-.1,-.09,.24,.19,.34,.43,.31,-.11,.02,.24,-.11,.18,.44,-.11,-.22,.36,.18,-.04,-.02,.04,-.16,.35,.05,.37,-.04,.27,-.24,-.03,.25,-.08,.3,.12,.09,.39,.38,.47,-.15,.13,.11,.1,-.16,.07,.27,.28,.05,.04,.41,.08,-.2,.03,-.04,.32,-.12,-.06,.04,-.24,.12,-.07,.13,-.03,-.19,.28,.2,.37,.49,.04,.09,.08,-.28,.27,-.1,-.1,-.01,.46,.18,.1,.1,.35,.15,.26,.14,-.47,.39,.2,.22,.09,.2,-.07,.31,.47,-.06,0,-.01,-.21,.08,.39,.08,.45,-.19,.25,-.02,.01,.5,-.21,-.16,.43,.2,-.23,-.3,.07,.06,.52,.14,-.14,.11,.45,.14,.02,0,.25,.44,-.05,-.08,.04,.29,.07,-.4,-.1,.2,.03,.41,.06,.35,.39,-.31,.04,.59,.08,.27,.05,-.13,.39,.54,.16,.02,.02,.32,.33,.06,.08,.15,.46,-.19,-.14,.38,.34,-.13,0,.38,.04,.36,-.28,.14,.06,-.39,.01,.14,.06,.22,.31,.19,-.1,.09,-.04,.02,-.35,.03,.44,.09,.1,.49,-.23,-.01,-.02,.11,.07,.24,.41,-.09,-.07,.07,.06,.14,.01,-.21,.43,-.06,-.09,.5,.56,.24,-.01,.17,.1,.17,.5,-.08,-.11,.09,.29,.11,.13,.21,.17,0,.02,.25,.3,.22,.36,.17,-.28,-.07,.2,-.02,-.07,.41,.58,-.05,-.05,-.03,.39,.26,-.02,.16,.5,.52,.04,.15,-.2,-.15,-.09,.24,.07,-.22,.24,-.2,.58,.49,.26,.23,.35,.38,.03,-.31,.09,.53,.56,-.06,-.14,-.01,.01,-.46,.16,-.06,.2,.24,.44,0,.31,.22,.53,-.36,.01,.08,.06,-.21,-.01,-.22,.28,-.06,.45,.34,-.02,-.08,.54,.3,-.3,.43,.09,.3,.3,.39,.07,-.31,.1,.18,-.14,1,.18,.05,.12,-.25,-.15,.41,.54,-.38,-.03,.44,-.09,.03,.13,.15,.31,.3,-.04,.25,.43,.56,.05,.31,0,.37,.29,-.32,.45,-.05,-.25,-.01,.39,.11,.45,.13,-.05,.23,.03,.19,.15,-.13,.48,-.15,-.39,-.19,-.24,-.01,0,.11,.41,.06,.3,-.05,-.09,-.05,.22,.25,-.04,.19,.22,.07,.11,.01,.45,.39,.18,.34,-.09,-.01,-.03,-.14,.02,.08,.17,.18,-.14,-.13,-.15,-.15,-.02,.02,-.04,.32,.24,-.11,-.27,.41,.46,-.06,.04,-.08,.29,.26,.12,.34,.16,.02,.4,.54,.24,.2,.42,-.15,.02,-.16,.19,-.11,-.41,.45,.33,.11,-.03,.49,.37,.41,-.1,.48,0,.01,.13,.08,.07,.13,.45,-.03,-.11,-.08,-.22,.53,-.24,-.14,.07,-.06,.09,.13,-.09,.06,.01,0,-.05,.35,-.2,-.06,-.13,-.02,-.1,.29,-.17,.57,-.24,-.29,.11,-.17,.58,-.03,-.05,.11,.38,-.01,.39,.22,-.01,-.03,-.38,.07,.49,.54,.05,.04,-.05,.05,-.03,.51,.44,.45,-.08,0,-.06,.07,.11,.35,.41,.06,.24,.02,0,.18,-.22,.2,.4,-.07,.13,-.12,.05,.54,.45,-.02,.05,-.29,.4,.51,-.19,-.07,0,.04,-.09,-.03,-.3,.18,-.05,.1,-.32,.44,-.03,.12,.41,.2,.03,-.1,.39,-.02,.07,.4,-.06,.03,-.02,.02,-.16,.04,.06,-.09,.05,-.06,.34,.39,-.09,.57,.55,-.14,.13,-.18,.24,-.2,0,.56,.04,.06,-.14,.45,-.07,.01,-.04,.36,.42,.05,.17,-.05,-.31,.1,.42,-.01,.17,-.1,.29,.03,.38,.17,.12,.16,.32,.55,-.09,.22,.01,.57,-.12,.36,.23,.27,-.02,.18,.11,.04,.09,.4,-.02,-.06,-.25,-.17,-.12,.44,-.1,.5,.22,.06,.38,.23,.25,.24,-.02,.32,.14,.15,.08,.17,.16,.56,.11,.4,.34,-.07,.13,-.02,.09,-.14,.34,.31,.38,.01,.03,-.07,.03,.12,.12,.55,.24,.39,-.05,-.36,.37,.2,.6,.01,.13,-.13,.43,-.08,.42,-.15,-.02,.15,-.11,.12,.45,-.15,.01,.14,.1,-.18,-.07,.06,.11,.34,.56,.04,-.1,.02,.19,-.04,.12,.16,.04,-.07,.19,.16,-.09,.08,.2,-.07,-.11,-.06,.2,.21,.44,.12,-.07,.01,-.09,-.02,.07,.17,-.19,-.05,.14,-.11,-.06,-.01,-.07,.27,.08,-.08,.07,.1,.27,.27,.36,.36,-.03,-.04,.4,.5,-.1,.39,-.33,-.28,.06,.43,-.07,-.31,.01,.1,.42,.33,-.03,.15,.01,.02,.47,.16,-.07,.09,-.13,-.03,.18,.29,0,.15,.39,-.09,-.05,-.15,-.01,-.01,0,-.12,.23,.49,.4,-.05,.46,.36,-.08,-.11,.26,.46,.48,.45,-.4,-.01,.03,.03,.42,-.05,.21,-.03,.33,.27,-.04,-.13,.43,.09,.12,-.12,-.05,.16,.12,-.05,.15,.47,.19,.44,.25,.59,0,-.05,-.06,.35,.11,-.12,.12,-.19,-.3,.12,-.07,.31,-.39,.43,-.31,-.18,-.01,-.02,.44,.37,-.07,.04,0,-.02,-.09,-.26,.07,.03,-.21,.04,-.2,-.13,-.19,-.14,.05,.01,-.09,.05,-.01,.07,.06,.12,.03,.22,.15,-.08,.26,-.04,-.04,.01,.21,.04,.13,-.04,-.07,.08,-.26,-.03,.06,.33,-.05,.22,.26,0,.08,.42,.02,.07,.09,-.15,.01,.2,.09,-.12,.18,.46,-.08,.33,-.07,-.01,.51,-.03,.03,-.19,-.06,.11,-.21,.04,.22,-.25,.23,.26,-.13,.28,-.26,-.09,0,.04,.58,.08,0,.12,.47,-.2,.14,.17,-.06,.39,-.08,.12,-.05,.09,.43,.23,.42,.27,-.16,.39,.37,.05,.25,-.05,-.11,-.01,.32,-.06,.02,.14,.4,.15,-.01,.27,.24,.1,.27,-.11,.22,.49,.61,-.19,.02,-.28,.11,.58,.22,.47,.03,.52,.16,.04,.04,-.01,.01,.39,.14,-.07,.43,-.09,.6,.1,.32,-.11,-.06,-.13,-.06,-.22,.13,-.14,-.15,-.09,.53,.42,-.03,.05,.43,.53,.11,.04,-.05,.58,.18,-.06,.37,.4,.01,.59,.03,.34,-.18,.15,.04,-.07,.45,.18,-.05,.03,-.02,.02,.02,.28,.28,-.04,-.04,.56,.48,.38,.39,.19,.18,-.4,.13,-.48,.08,.12,-.07,.41,.03,.27,-.05,-.13,-.03,.09,-.37,-.18,-.02,.46,.45,.24,.25,.14,-.12,-.21,.25,.49,.04,-.14,.31,.36,-.01,.25,.16,-.08,.35,.21,.29,-.02,.28,.02,-.13,.44,.1,-.25,-.25,.29,0,.02,.45,.09,.09,.03,.42,.1,.01,.05,-.05,.05,.06,.12,-.15,.09,-.36,.32,.13,.42,.24,.22,.06,-.15,.04,.46,.43,.44,-.02,.03,.02,-.06,.35,.53,.08,.41,-.11,-.04,-.08,.22,-.07,.12,-.08,-.16,.34,-.34,.59,-.06,-.17,.12,-.17,.01,.09,-.04,-.01,.28,-.12,.27,.24,.18,-.25,.59,-.12,-.13,-.14,.32,0,.16,-.11,.23,0,.52,.01,-.08,-.03,-.35,.43,.35,.15,-.16,.06,.13,.33,.26,.02,.58,.19,-.01,.11,.22,.29,-.01,.12,.47,-.07,-.19,.54,-.35,.21,.15,-.03,.03,.16,.48,.12,.05,.1,-.08,-.24,-.17,-.01,.29,.37,.04,.04,-.02,.42,-.21,.26,.08,.3,-.16,0,-.04,.34,.01,-.12,-.17,.44,.03,0,-.01,.22,0,.01,.03,-.18,-.03,-.04,.1,-.1,-.18,-.03,.02,-.25,.15,.23,.02,-.11,-.32,-.09,.14,-.04,0,-.26,-.14,-.01,-.03,.17,-.06,-.04,-.08,-.17,.14,-.25,-.03,-.15,-.07,.17,-.12,-.01,-.05,-.06,.04,.13,-.13,.14,.08,.08,.46,.25,-.13,.1,.52,-.09,-.13,.04,-.02,.27,.05,.25,.24,-.03,-.06,0,.38,.38,.04,.24,.1,.38,-.05,-.04,-.04,.08,.42,.05,.11,.18,.02,.1,.39,.01,.04,.47,-.08,.05,.27,-.09,.33,.46,.07,-.07,-.09,.11,.01,.3,-.15,.37,.05,-.3,-.18,.04,.08,.17,-.23,-.05,.22,.26,.31,.3,.51,-.11,.2,.06,-.14,-.14,.29,.17,.07,.12,.22,.15,0,.09,-.01,-.05,-.31,.16,.15,-.18,.26,.14,.04,-.08,.19,-.04,-.06,.16,-.26,.16,.13,-.11,-.08,.06,-.22,.31,.16,-.29,.01,.25,.2,.09,.01,.13,.24,.23,.35,.06,-.03,.13,.45,.19,-.1,.4,.04,.19,.16,-.06,-.09,.21,.4,-.1,.04,.26,-.15,-.11,.19,-.04,-.12,.27,.49,.09,.14,.24,.02,.29,-.23,.32,.09,-.09,-.16,.5,.19,.54,.5,-.12,.18,.21,.41,.38,-.15,-.19,.34,-.04,.43,.26,.34,-.01,.07,-.15,.48,.12,.38,.28,-.04,-.15,.04,.17,.14,-.09,.32,-.27,.32,.11,.4,.21,.24,.46,.02,.37,-.36,.12,.02,.28,-.19,-.13,.22,.38,-.02,-.04,.03,.23,.36,.41,.29,.3,.01,-.16,.05,-.07,.5,-.27,-.02,.43,.37,.27,.36,-.04,.26,.34,-.14,.26,.33,.03,.1,.34,-.1,-.11,.3,.2,0,.31,-.18,.32,.01,.33,-.11,.08,-.05,-.38,.03,.18,-.02,.28,.34,.15,.04,0,-.07,.03,-.35,.19,.36,.35,.35,.43,.03,.01,-.24,-.12,-.03,-.07,.07,.44,-.08,.37,.25,-.02,.02,-.05,-.2,-.13,.22,-.36,-.22,.55,.54,.36,.48,-.22,.28,.1,.05,-.09,-.35,.2,.4,-.26,.29,-.03,.13,-.07,.27,.21,.1,.46,.01,-.06,.41,-.26,-.06,.26,-.01,-.14,.1,-.39,.24,.16,-.14,.49,.5,.27,-.11,.41,.39,.26,.31,.4,.6,.07,-.15,.3,.45,0,-.14,-.2,-.3,-.29,-.29,.53,.24,.22,-.08,.32,-.15,.07,.12,.05,.34,.18,.01,-.15,.05,-.04,.05,-.04,.16,.22,.18,.17,-.17,.17,-.14,.55,0,.16,-.1,0,.22,.05,.3,.43,.53,.49,-.15,-.03,.28,.32,-.06,.09,-.11,.54,-.37,-.06,0,-.34,.12,-.23,-.05,-.03,-.32,.06,.15,.12,-.12,.41,.51,.04,.16,-.19,-.06,-.09,-.05,.49,.5,.45,.33,.04,.01,.38,.11,.08,.35,.25,.4,.58,.11,.1,-.08,.19,.04,-.06,.4,.27,-.12,.2,-.05,.19,.43,.33,.09,-.17,.19,.51,.26,.3,.46,.51,.27,-.01,.14,-.15,-.19,.34,.01,-.1,.09,.45,.47,.32,.2,-.06,.47,.05,.35,-.22,-.13,.01,-.02,.04,-.03,.39,-.11,-.05,-.13,.57,-.09,.4,-.07,-.07,.01,-.03,-.01,.23,.44,-.08,-.04,.09,-.09,.25,.34,-.16,-.13,-.2,-.21,.38,-.05,-.21,.18,.21,.06,-.12,.35,.14,.44,.06,.47,-.14,.17,.05,-.01,.2,.23,.15,-.15,-.46,0,-.09,.2,.23,.5,.07,-.09,.21,.45,.06,.14,.02,-.14,-.02,.46,.47,-.09,.12,.36,.24,.05,.17,.37,.36,.11,-.1,-.06,.04,.16,-.1,-.12,.14,.49,.07,.12,.48,-.2,-.01,.36,.07,-.11,.08,.17,-.06,0,.25,-.2,.37,-.16,-.02,-.19,-.04,.13,.52,-.03,.01,-.13,-.05,.44,.49,.21,.22,.2,.34,.52,.46,.57,-.05,-.04,.11,.42,-.01,.31,-.09,-.1,-.14,.34,.47,-.13,.3,.06,.06,.49,.06,.13,.06,.16,-.02,-.09,.04,.06,.31,.47,.09,.42,-.09,-.17,.13,-.1,.26,-.11,.11,.12,.24,.52,-.06,-.12,-.36,.27,.39,.4,.29,0,.48,-.02,-.06,.36,-.44,.42,.49,.49,.12,.18,.08,.3,.3,0,.35,.27,.45,-.05,.48,.42,.29,.28,.48,.25,.02,.06,.51,.42,.37,.45,.33,-.22,.3,.27,.3,-.35,.49,.02,.5,-.26,.01,.28,.16,.37,.26,.09,-.03,.31,-.3,.38,.01,.56,.06,.37,.25,.01,.08,-.03,.21,-.03,.13,-.04,.32,.59,.04,-.07,-.03];export{a as rvalData};
