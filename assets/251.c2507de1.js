const a=[.06,-.05,-.03,-.04,-.02,.27,.13,.47,.13,.13,-.2,.09,-.16,-.07,-.26,.13,-.06,.11,-.31,.08,-.09,-.34,.02,-.41,-.02,.05,-.44,.17,-.14,-.51,.13,-.31,.06,.18,-.04,.13,-.13,-.24,.15,-.06,-.08,.01,.07,.01,.1,-.21,-.05,-.08,-.51,.5,.04,.15,-.12,-.08,.46,-.14,-.02,.36,.09,-.07,.53,.12,.14,.08,-.44,-.46,.13,-.34,-.25,.19,-.07,-.1,.48,-.14,-.09,.11,-.07,.56,.05,-.44,-.15,-.1,.17,-.01,-.05,-.44,-.04,.04,-.03,-.03,.39,.02,.43,.17,-.03,.09,-.04,-.05,.04,.53,0,.12,.37,.03,.39,-.05,-.38,-.41,-.04,.32,-.01,.5,.13,-.07,.01,.01,-.07,-.33,-.11,.06,.16,-.28,.2,.08,.08,.45,-.04,.05,-.3,-.09,.51,.22,.14,.53,-.11,.03,.52,.09,-.38,.04,.16,.11,.19,-.02,.18,.24,.15,.08,.2,.09,.12,.32,.02,-.01,.48,.49,-.25,.02,-.05,-.26,.54,.4,0,.38,.4,.57,.01,-.42,.4,-.04,.15,-.38,.46,.26,.08,-.46,.12,-.46,.58,-.03,-.15,.02,.18,-.17,.32,.1,.04,.19,.52,.09,-.16,.57,-.13,.36,.31,.04,.29,.3,-.02,-.24,-.11,.21,-.04,-.06,-.06,.3,-.05,.58,.49,.09,.44,-.26,.01,-.13,.32,.22,.03,.39,-.42,-.37,.12,.39,.19,-.06,.21,-.07,.57,-.32,.42,.4,-.04,.12,-.25,-.02,-.07,.16,-.38,-.19,.18,-.11,.55,-.33,.33,.47,.35,.3,.06,.19,-.1,.13,1,-.18,.44,.32,.14,-.17,-.04,.21,.32,-.08,-.14,.3,.32,.17,.15,.38,-.28,.07,-.08,.02,-.15,.2,-.02,.05,.07,-.08,-.46,.55,.05,-.49,.61,-.55,-.1,-.13,.34,.05,-.42,-.15,.48,-.23,.34,.46,.04,.28,.42,.09,-.18,-.04,.19,.14,.03,-.03,-.28,.04,.16,0,.05,.42,.4,-.24,.02,.02,-.14,.13,.26,.14,.37,.38,.08,.3,.05,.1,-.2,.05,.44,.35,-.02,-.11,.09,.38,-.01,.18,-.05,-.01,-.36,-.17,-.47,.1,.14,-.09,.41,.03,-.06,-.15,-.15,.02,.13,.52,.06,.32,.27,.47,.21,.35,-.15,-.13,.34,-.12,.18,-.04,-.02,.03,.28,-.42,-.05,.02,.27,-.09,.43,-.08,-.43,-.01,0,.33,.48,.36,-.08,.04,-.06,.48,.08,-.02,-.08,-.09,.19,.15,-.01,-.02,.11,.05,.19,-.06,-.08,.09,.03,-.05,-.22,-.13,-.07,.1,-.13,.21,.12,.09,.52,-.14,-.24,.2,.26,.06,.03,-.01,.23,.16,.36,-.05,.18,-.19,.62,-.07,.21,-.03,-.13,.02,.06,-.12,-.05,-.02,.34,.37,.36,.34,.07,.1,.48,-.14,.05,.03,-.02,.4,.32,.06,.13,-.07,.34,.37,-.1,-.01,.1,-.25,.26,.49,-.11,.2,.01,.2,-.52,-.08,.43,.2,.03,.09,-.1,.58,.05,.15,.07,.02,-.22,-.08,-.41,-.14,.1,.04,.49,.02,.09,.33,.03,-.48,.3,-.22,.19,.35,.41,.09,.44,.31,-.19,.01,-.01,.13,-.01,.22,.07,-.05,.51,.01,.15,.47,.41,0,.26,-.15,.08,.15,.1,.09,-.08,.52,.29,.21,.08,.01,.36,-.37,.5,.42,.58,.03,-.14,.01,.16,.25,.11,.13,.04,.18,.1,.07,.56,.51,-.06,.37,.11,.32,.32,-.01,.28,.02,-.1,.34,-.12,-.5,-.1,-.05,.16,-.56,.16,.05,-.4,-.09,-.01,-.02,.19,-.15,-.17,.24,-.19,-.09,.08,-.3,.14,.44,.04,-.03,.15,-.08,.55,.05,.09,-.04,.06,.31,.16,-.12,-.03,-.07,.44,-.13,-.17,.1,.28,.19,.51,-.26,-.06,.18,-.11,-.17,.06,.11,0,.16,.41,-.04,.07,-.06,.39,.3,.16,-.06,.04,.44,.06,-.42,.47,-.1,-.04,0,-.09,-.18,.1,.58,0,.03,-.05,.33,-.11,.09,.27,.22,.38,.08,.36,-.04,.08,.4,.26,.22,-.08,-.25,-.01,.57,.19,.37,.01,.46,.3,-.39,.33,-.05,-.16,.17,.03,.17,.31,.02,-.04,.51,-.11,-.16,.37,-.04,.03,.16,-.18,-.15,-.01,.2,-.05,.07,.01,.38,.03,.13,-.08,.18,.09,-.03,.04,-.07,-.11,-.49,.39,.47,.31,-.07,-.02,.02,-.03,.22,-.11,.02,.47,.23,-.16,.03,.05,.47,.03,-.06,.32,-.14,.2,.13,.18,.25,.21,.02,.03,.38,.41,.05,.05,-.2,-.06,-.09,.1,-.45,.13,.44,.41,.39,.12,.19,.05,.15,-.04,.04,.44,.22,-.14,-.03,-.13,-.24,-.06,-.38,-.05,.09,-.22,.37,.04,-.06,.4,.54,-.16,.01,.11,-.06,-.19,.04,-.25,-.58,.08,.05,.01,-.2,.26,.45,-.02,-.21,-.07,.07,0,.14,.03,-.32,0,-.01,-.02,-.39,-.02,.34,-.27,-.15,.15,-.09,-.37,.2,.34,.31,.06,.14,.48,-.1,.46,.36,.01,.36,-.04,-.09,.17,.16,.02,.36,.31,.58,-.01,-.2,-.38,.24,.29,-.36,-.04,-.45,-.04,.15,-.04,.33,-.05,.07,-.08,.21,-.1,.06,.29,.01,.32,-.08,.03,-.01,.06,-.29,.19,.36,-.19,-.56,-.02,-.07,-.1,.04,.45,0,-.15,-.09,-.13,.17,-.2,.13,.16,-.06,.32,.02,.17,-.17,-.01,.24,.18,-.38,.22,-.08,-.09,.43,-.29,.15,-.41,-.2,.35,-.07,.2,-.4,.12,.06,.01,.12,.37,.34,.46,-.25,.33,-.09,.02,-.05,.25,.33,-.21,.17,.2,.4,.18,0,-.01,.47,.39,.38,-.1,.21,-.08,.25,-.44,.01,.09,.08,-.1,.34,.47,-.05,.16,.23,.02,.1,.01,.55,.14,-.01,-.12,0,.08,-.02,.16,-.05,-.02,-.08,.14,-.02,-.05,.56,.05,.54,.14,-.58,-.26,.24,.19,.34,.17,.51,.41,.08,.39,-.24,.11,-.04,.17,0,.22,-.12,.2,.33,.58,-.07,-.16,.04,.01,-.05,.55,.02,.21,.1,-.08,-.03,.28,.04,.14,.17,.38,.11,-.08,-.2,.39,.08,.08,.03,.45,.06,.1,.11,.06,.19,-.05,.06,.24,.05,.29,.06,-.05,.45,-.05,-.09,-.24,.24,-.36,-.06,.04,-.08,.25,.48,.54,.11,.02,.43,-.34,.36,.47,.35,.35,.14,.07,.5,.44,.35,.6,.33,.06,.45,-.12,.03,.05,.01,.04,0,.02,.12,.02,-.25,-.01,-.03,-.01,.01,-.27,.43,.42,-.46,.33,-.02,.32,.26,.29,-.11,.08,.14,-.03,.42,-.04,.1,.16,.16,.04,-.05,.46,.18,-.03,.3,.01,.39,-.12,.42,.12,.21,.27,-.11,-.54,0,.03,.47,.02,.02,-.1,.06,.38,.18,.19,.33,.06,.07,-.28,.17,.36,-.07,-.48,.01,.04,-.18,.59,.23,-.42,.06,-.11,.06,.46,.45,.4,-.07,.06,.07,-.15,.47,.27,-.05,.14,-.33,.01,.06,.58,-.29,-.05,.03,-.33,.04,-.31,.05,.1,-.25,.01,.23,.44,.11,.08,-.01,.47,-.16,.5,.09,.01,.12,0,.23,.02,.22,-.18,.54,.56,-.09,-.36,-.41,-.09,-.13,.39,-.03,-.11,-.35,-.08,.06,-.16,.01,-.09,-.25,.4,-.3,.33,-.01,-.1,.05,.1,.01,.02,.33,.2,.24,-.07,-.03,.18,.16,.18,.17,-.14,-.12,-.08,-.06,.07,0,.49,.08,.08,.32,.14,.27,.23,.1,.07,.35,.15,.46,-.07,.26,.08,-.07,.15,.31,.53,.02,-.12,.36,.43,-.24,-.19,.04,.01,.05,.45,.03,.15,.28,-.13,.17,-.13,-.18,-.39,-.02,-.06,.34,.25,-.02,.08,.06,-.01,.14,.27,-.2,-.13,.34,.09,.11,.3,.31,.34,.03,.12,.55,.04,-.12,-.01,.35,-.03,.36,-.11,0,-.02,.33,.23,.04,.11,.18,.2,.38,.12,-.53,.33,.39,-.5,.31,.13,-.11,-.02,.18,.1,-.11,-.02,.19,-.15,.06,-.05,.13,.16,.12,.03,-.09,.04,.12,.11,.07,.24,.36,.01,.11,.32,-.08,.39,.18,-.15,-.01,.1,.41,-.31,.48,-.42,-.4,.51,.03,-.1,.06,.23,-.4,-.05,.3,-.19,0,.41,.1,.3,.27,0,.48,.03,.17,-.02,-.08,.07,.09,.29,0,.15,.44,.25,.47,.06,.19,.12,.43,-.07,.28,.05,.05,-.11,-.32,.57,.37,-.06,-.12,.46,-.08,-.01,.34,.2,.16,.43,.17,-.12,.08,.17,.22,-.04,.13,.5,.32,-.01,.06,.19,-.47,.01,.07,.48,.04,-.01,-.07,.43,.05,.21,.24,.28,.01,-.05,-.33,.19,.19,-.1,.42,-.02,-.23,.54,.52,.38,.19,.17,.36,.44,.52,.39,.53,.32,.34,-.03,.24,.12,.27,.27,.48,.01,-.12,-.11,.31,.35,.02,.27,.13,.25,.28,.28,.28,.01,.37,.37,-.16,.36,.21,-.09,.16,.5,.3,.38,.29,.34,.48,-.09,-.08,.48,-.04,-.03,-.12,.51,-.09,-.31,-.05,.2,-.31,-.03,.49,-.23,.04,.22,.03,.17,.2,.15,-.19,.14,-.21,.31,-.07,-.26,.21,.09,.33,-.21,.17,-.05,.05,.01,-.11,.08,.32,.14,.42,.06,-.02,.01,-.02,.55,.09,.41,-.28,.3,.07,.11,.44,.13,.01,-.04,.1,.05,.11,-.04,.08,-.01,.06,.03,.5,-.12,-.11,.11,.37,.1,-.22,.51,.3,.04,-.01,.03,.23,.55,-.1,.24,-.29,.31,.07,.37,.26,.45,-.04,.33,.18,-.12,.05,.44,.21,.41,.11,-.05,.45,.48,.2,.46,.36,.25,.12,.02,-.01,-.05,.17,-.04,.17,-.05,.43,-.27,.4,-.1,.18,.32,-.11,.04,-.03,-.15,.57,.15,-.05,.1,.08,.23,-.19,.37,.38,.3,.21,-.2,.02,.1,.06,.04,-.36,.31,.32,.5,.02,.35,.16,.37,-.02,.44,-.01,.08,.54,.15,.37,.24,-.06,.26,.45,.16,-.01,.09,-.05,.22,.21,.07,.32,.05,-.34,.13,.1,-.08,-.28,.14,.25,.25,.58,.13,.36,-.32,-.07,.05,.05,.09,.11,.18,.05,.6,-.35,.48,-.3,.42,-.11,.21,.1,.43,.47,.49,-.2,.06,0,.07,-.3,-.35,.56,.12,.43,-.1,.54,.14,-.09,-.18,.12,.09,.4,-.1,-.02,.1,-.18,-.09,.36,.3,-.02,.02,.02,.18,.28,.55,.2,.5,.23,.11,.14,.04,.49,-.03,.51,-.08,-.01,.04,.08,-.05,.03,.26,.08,.52,-.05,.54,.23,.08,.14,.11,.03,.31,0,.42,.45,.23,.16,-.03,.07,.35,.15,.09,.12,.31,-.11,.5,.59,.21,.5,.06,-.04,-.04,.21,.06,.41,0,.46,.49,.5,.16,.36,-.04,.26,.19,-.07,.34,-.09,-.03,.37,-.07,.09,-.23,.45,-.25,.54,.15,-.26,.39,.47,-.22,.46,.2,-.07,.07,.12,0,-.31,.55,.1,-.33,-.16,.1,.03,-.09,-.11,.09,.08,0,-.07,-.18,-.04,.41,.37,.47,-.08,.04,-.17,-.22,-.12,.28,-.35,.18,-.28,.23,.15,.28,-.04,-.08,.05,-.13,.27,.36,.09,.29,.26,.37,.35,.5,.03,.17,.23,.08,.06,.2,.01,-.04,.14,.03,-.02,.06,.35,.13,.14,-.42,-.12,-.07,-.14,.08,-.05,.32,-.2,-.2,.24,-.2,-.05,.08,-.07,.37,.23,.03,-.01,-.12,.07,.03,.27,-.45,-.44,.04,.11,-.08,-.01,-.13,-.31,.28,.11,.33,.49,.08,.03,.15,-.02,.21,.47,.51,.25,-.24,.36,.05,.11,.35,-.41,-.41,.12,-.03,.13,.51,.12,.21,-.07,.16,-.05,-.14,-.17,.29,-.14,.27,-.13,-.19,.16,.36,.01,.5,.03,-.11,.28,.21,.36,0,.35,0,.1,.13,0,.12,.17,.19,-.12,.29,.31,.37,.05,-.09,-.07,.19,.36,-.35,-.07,-.01,-.02,-.12,.05,.37,.08,.36,.05,.08,.35,.32,.12,.05,.09,-.05,.53,.36,.42,.12,.26,-.03,-.03,.01,-.12,-.07,.41,.47,.51,-.09,-.13,.21,.13,.13,.21,-.14,-.06,.2,.22,.12,.31,-.1,-.32,.08,.5,.09,.2,.01,.02,.04,-.04,0,.16,.1,-.13,.27,-.05,.16,.04,-.43,.37,.37,.53,.17,.04,-.24,.12,-.21,.03,.03,-.05,.15,-.07,.09,.47,0,.33,.18,.05,.06,.13,-.2,-.11,.38,.02,.19,.12,.02,.16,.06,-.05,.36,.24,-.11,-.01,.09,-.14,-.03,-.19,-.06,.09,-.01,.12,.33,.3,.03,.35,-.1,.19,-.04,.1,-.02,.04,.26,-.08,-.03,.11,-.07,-.43,.33,.1,.16,-.44,-.01,-.46,.01,.04,-.01,-.08,-.05,.57,-.06,.43,.11,-.31,.21,.08,.01,.05,-.16,.27,-.11,-.05,.39,-.21,-.06,.08,.37,-.03,.23,.08,.12,-.09,.03,.16,-.06,-.1,.18,.22,.21,-.1,.35,.07,.03,-.02,.24,-.09,0,-.18,-.15,-.09,-.36,.35,-.24,-.11,0,0,-.01,-.01,.38,.3,-.12,.17,-.14,-.06,.2,-.11,.28,-.01,.31,-.01,-.03,.16,-.23,0,-.42,.46,.01,.28,-.03,.14,.16,-.07,-.47,.17,-.18,-.16,-.01,.09,-.11,.19,-.03,.21,.09,.46];export{a as rvalData};
