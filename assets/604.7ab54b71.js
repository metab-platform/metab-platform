const a=[.37,.15,.11,-.03,.09,.4,.15,.48,.2,.18,-.02,.36,-.26,-.25,.02,.11,.12,-.08,-.22,.37,-.03,-.39,.04,-.07,.12,.19,-.36,.1,-.08,-.38,.33,-.2,.19,.31,-.03,.22,.16,.07,.17,.17,.01,.17,.16,.09,-.12,.05,-.02,.18,-.37,.41,.29,.35,.06,.16,.55,.14,.14,.55,.09,.02,.55,.31,.32,.04,-.18,-.42,.3,-.04,.11,-.01,.04,.1,.51,-.29,.13,.12,-.14,.54,.2,-.24,-.04,-.02,-.01,.15,.01,-.51,.16,0,-.13,.03,.46,.01,.37,-.04,.25,0,-.08,.1,.11,.54,-.04,.36,.45,-.05,.41,-.16,-.33,-.29,.22,.34,.1,.54,.15,-.04,.13,.03,-.02,-.35,-.09,.21,-.1,-.15,.31,-.07,.14,.33,.2,-.02,-.34,.1,.44,.28,.01,.56,.03,.05,.51,.04,-.3,.22,.29,.27,.26,.19,.44,.25,.21,.12,.39,-.01,.32,.44,.11,.26,.46,.42,-.23,.41,.03,.01,.37,.37,-.19,.28,.4,.46,.12,-.34,.27,.09,.44,-.4,.36,.2,.06,-.41,.12,-.43,.51,.11,-.14,.18,-.01,-.06,.38,-.05,.13,.35,.4,.14,.07,.54,-.15,.46,.4,.22,.3,.38,.06,-.18,.18,.4,.14,.13,.03,.37,-.05,.47,.5,-.18,.44,0,.25,.12,.53,.2,-.08,.39,-.38,-.25,.24,.3,.31,.19,.22,.11,.53,-.3,.61,.17,.03,-.11,.09,.11,-.37,.4,-.03,0,.1,.01,.57,-.05,.38,.43,.43,.38,.08,.14,-.11,-.04,.44,-.37,.52,.18,.25,-.23,-.2,.34,.26,.01,-.05,.28,.39,.28,.09,.41,-.2,.23,.04,.32,.13,.21,.17,.22,.15,-.1,-.34,.58,.23,-.37,.51,-.36,.13,-.2,.41,.17,-.3,.14,.52,-.21,.25,.3,.19,.44,.26,.14,.13,.12,.23,.28,.15,.04,-.2,-.08,.32,.07,.01,.55,.29,.05,.16,-.2,-.34,.37,.17,.3,.37,.39,.18,.09,.17,.26,-.01,.23,.38,.38,.21,-.07,.14,.37,-.16,.24,.12,-.3,-.41,-.05,-.42,.35,.11,-.11,.59,.03,-.06,.14,.1,.16,-.09,.48,.09,.42,.39,.47,.37,.39,.04,.11,.2,-.11,.3,.03,.24,-.14,.22,-.34,.11,-.08,.4,.1,.39,-.29,-.38,-.2,.17,.26,.45,.52,-.14,.14,.06,.49,.08,-.03,.02,.02,.08,.22,-.07,-.06,.28,.23,.33,-.36,.05,.03,-.02,.07,-.29,-.13,-.07,.05,-.08,.26,.25,.27,.38,-.26,-.03,.32,.31,.22,.15,-.24,0,.32,.43,.14,.26,-.03,.53,-.36,.41,.03,-.16,-.27,-.02,.1,.07,-.31,.23,.31,.29,.23,.23,.38,.46,.09,.11,.19,.12,.5,.36,.19,.28,.23,.43,.42,.04,.15,.22,-.19,.34,.47,-.22,.15,-.08,-.04,-.43,.19,.47,.19,.16,.31,-.04,.55,.03,.24,-.12,-.05,-.05,.21,-.3,.11,.37,.16,.48,.21,.32,.42,.22,-.33,.35,.08,.17,.39,.39,.11,.33,.13,-.1,.08,.09,.34,.01,.02,.21,.09,.35,-.18,.24,.47,.45,.02,.34,0,.26,0,.12,.32,.07,.51,.34,.35,.22,.09,.45,-.36,.56,.53,.6,.1,-.12,.13,0,-.03,.19,.39,.2,.2,.21,.36,.5,.34,-.19,.45,.4,.52,.4,.05,.06,.27,.02,.33,-.43,-.36,-.18,-.05,.32,-.34,.29,-.06,-.37,.12,.16,.16,.3,-.35,-.23,.2,-.22,.03,.2,-.31,.15,.4,-.04,-.11,.04,-.06,.54,-.22,.18,.13,.2,.19,.11,.07,-.14,-.24,.3,-.09,-.17,.47,.27,.17,.52,-.06,.05,.29,-.19,.12,-.12,-.08,-.1,.28,.33,-.01,.17,.01,.53,.35,.18,.16,.09,1,.03,-.49,.47,-.07,.27,-.06,-.21,.11,-.06,.58,-.24,.19,.06,.44,-.22,.38,.22,.14,.34,.14,.3,.2,.12,.29,.3,.32,-.2,-.21,-.1,.55,.18,.53,.23,.52,.31,-.4,.27,.17,-.27,.14,.12,.31,.07,.17,-.17,.51,.06,-.13,.34,.14,.21,.29,.03,-.13,-.22,.03,.08,.1,.18,.46,0,.44,.08,.21,.28,.14,.19,.19,-.07,-.39,.48,.37,.36,.1,-.13,.15,0,-.02,-.01,.22,.45,.45,-.07,.2,.26,.33,.03,.03,.13,-.36,.28,.11,.36,.34,.29,-.01,.15,.34,.39,-.06,.19,-.31,0,-.06,.26,-.42,.28,.39,.31,.4,.1,-.09,.11,.33,-.07,-.15,.44,.3,.17,-.09,.02,-.32,-.1,-.47,.24,.15,-.01,.58,.22,-.11,.5,.47,.08,-.03,.02,-.14,0,.19,-.26,-.43,-.08,.16,.19,.05,.35,.45,.29,-.2,-.04,.31,.21,.18,-.08,-.2,.31,-.13,-.08,-.38,.16,.26,-.25,.1,.25,-.23,-.2,.33,.16,.31,.23,.41,.49,.21,.4,.43,.13,.43,.08,.01,.28,.28,.14,.34,.37,.52,-.04,-.35,-.44,.19,.32,-.02,.13,-.35,.11,.28,-.08,.28,-.03,.29,-.36,.28,.2,.22,.44,-.12,.42,-.09,.06,.01,.23,-.35,.26,.38,-.26,-.47,-.11,.08,.14,.26,.37,-.03,-.26,.11,.01,.42,-.24,.02,-.03,.11,.31,0,-.05,-.09,-.04,.13,.47,-.45,.35,.1,-.35,.37,-.22,.24,-.28,-.26,.45,.08,.05,-.41,.36,-.06,.16,.08,.48,.32,.46,-.12,.44,.13,-.12,-.09,.13,.23,-.3,.43,.19,.42,.15,.34,.06,.49,.24,.39,-.11,.39,.07,.46,-.38,.34,.05,.24,0,.17,.38,.09,.28,.34,.2,-.29,-.22,.54,.27,-.31,.02,-.25,.14,.16,.19,.22,-.13,-.12,.36,.2,.29,.49,.24,.46,.32,-.41,-.29,.13,.31,.2,.31,.38,.36,-.06,.29,-.38,.01,.22,.25,.13,.52,.07,.16,.39,.55,.13,0,.14,.14,-.23,.57,-.03,.54,.19,.17,.11,.27,.14,.15,.1,.4,.28,-.01,-.17,.38,.05,.09,-.07,.43,-.03,.2,-.12,.13,.11,.19,.04,.34,.1,.25,.15,-.02,.32,-.18,-.03,-.46,.22,-.15,-.11,.1,.03,.16,.28,.52,.32,.17,.36,-.47,.4,.42,.26,.36,.38,.43,.51,.37,.42,.49,.39,-.08,.39,-.15,.15,-.11,-.08,.11,-.1,.08,.11,0,-.14,.24,.05,-.27,.33,.04,.5,.34,-.31,.28,-.03,.44,.35,.1,-.03,.18,-.02,.11,.45,.01,.05,.34,-.07,.4,-.23,.33,-.1,.13,.35,-.08,.63,.08,.31,.12,-.09,.36,.06,-.57,-.19,.24,.47,.19,-.03,-.15,.19,.45,.36,.3,.37,-.15,.19,-.13,.25,.22,.12,-.34,.31,.02,.01,.49,.23,-.35,.27,.13,.08,.43,.6,.54,.07,-.01,.2,.13,.49,.41,.13,.44,-.3,.01,-.05,.63,-.36,0,-.1,-.41,.21,-.22,-.04,.14,-.28,.1,.3,.36,.13,.24,.15,.35,-.38,.48,.24,0,.33,.07,.04,.31,.19,-.39,.51,.47,-.16,-.34,-.44,-.03,.03,.32,.05,-.17,-.03,.18,.18,-.23,.21,-.08,-.06,.43,-.03,.26,.27,.11,-.12,.15,.08,.22,.14,.44,.08,.1,.05,-.12,.14,.31,.41,.05,0,.16,.08,.3,0,.59,.09,-.05,.32,.38,.4,.41,.4,.18,.25,.3,.34,.12,.05,.15,.11,.24,.52,.33,.28,-.23,.29,.45,-.32,.01,.1,.07,-.04,.41,-.06,.23,.29,-.28,.46,.07,.04,-.13,.13,-.06,.28,.15,-.08,.16,.31,-.09,.22,.36,-.37,-.17,.44,.3,.26,.3,.36,.2,.16,.09,.51,.22,.01,-.24,.3,.18,.22,.14,.15,.08,.27,.11,.24,.28,.41,.43,.52,-.06,-.42,.31,.42,-.48,.19,.28,.07,.04,.34,.06,.17,.22,.39,.06,.17,.14,.1,.42,.09,.21,-.07,.24,.43,.22,0,.3,.52,.36,.25,.4,-.26,.44,.25,-.02,.04,.23,.39,-.44,.49,-.42,-.4,.49,.4,.11,-.01,.38,-.22,.13,.38,-.03,.12,.46,-.18,.34,.45,.23,.4,.09,.35,.07,-.05,.19,.34,.14,.23,.29,.57,.22,.33,-.01,.22,.18,.43,.13,.3,.24,-.16,.04,-.06,.55,.18,.14,-.09,.34,.07,-.12,.18,-.07,.06,.29,.33,.12,.27,.22,.12,-.3,.02,.43,0,.03,.2,.28,-.31,-.09,.28,.28,.29,-.12,-.03,.35,-.01,.04,.48,.41,-.29,-.07,-.07,.26,.01,-.2,.5,.17,-.07,.56,.42,.42,.33,-.15,.45,.39,.56,.23,.51,.42,.39,-.37,.28,.13,.37,.47,.46,.05,-.1,-.17,.33,.39,.15,.19,.11,.23,.2,.35,.19,-.13,.29,.36,-.18,.34,.34,-.14,-.07,.57,.39,.36,.4,.48,.53,.13,-.1,.5,.28,.1,-.27,.42,-.1,-.23,.19,.3,-.04,.08,.47,-.46,.21,.35,.21,.57,.2,.16,.06,.13,-.32,.33,-.01,-.04,.24,-.12,.34,.11,.1,.16,-.03,-.11,.07,.04,.29,.3,.4,.18,.19,.27,.36,.56,-.11,.43,.02,.33,.18,.41,.41,-.06,-.22,.15,.24,.24,.21,.07,.2,.19,.27,.18,.26,-.07,-.08,.04,.11,.34,-.18,.53,.36,.13,-.09,.15,.4,.51,.04,.2,-.36,.31,.03,.41,.37,.55,-.26,.29,.29,-.14,.26,.42,.29,.49,.24,-.06,.51,.37,.3,.35,.37,.06,.21,.12,-.1,-.07,.3,.06,.24,.13,.34,-.26,.46,.14,.32,.21,.18,.28,-.09,-.19,.58,-.12,-.37,.19,-.06,.34,-.03,.39,.44,.41,.41,-.12,.06,.23,.33,-.09,-.43,.14,.31,.47,.16,.42,-.03,.44,.3,.47,.11,.28,.52,.25,.41,.34,.14,.07,.48,.19,-.18,.25,-.01,.34,.34,.26,.44,.23,-.05,.26,.22,.04,-.11,.17,.3,.2,.53,.21,.52,-.07,.08,.26,.22,.18,.24,.43,.24,.49,-.41,.5,-.02,.26,.1,.36,.11,.42,.46,.48,-.12,.21,.1,.29,-.22,-.29,.58,.18,.41,-.04,.5,.22,.16,-.25,.26,.03,.35,.17,.23,-.02,-.25,.16,.38,.41,.18,-.16,.1,.3,.31,.44,.31,.43,.36,.25,.3,-.19,.64,.04,.36,-.14,.01,.01,.14,.09,.05,.44,.1,.52,-.15,.41,.32,.31,.3,.32,.21,.18,.3,.44,.55,.44,-.14,-.16,.24,.41,.19,.11,.25,.19,-.23,.43,.56,.34,.37,-.14,.08,.06,.36,.28,.6,.12,.5,.47,.51,0,.49,.04,.33,.31,-.25,.37,-.2,.2,.44,.05,.16,-.16,.43,.01,.57,.16,-.02,.38,.38,-.21,.35,.14,-.23,.15,.33,.21,.05,.4,.26,-.1,.1,.27,.14,.06,-.17,.08,.07,.18,-.02,-.35,.03,.53,.45,.36,.11,.16,-.12,-.04,.1,.3,-.38,.26,-.23,.25,.33,.42,.23,-.43,.02,-.09,.29,.52,.2,.32,.37,.38,.36,.5,.16,.43,.13,-.03,-.17,.33,.01,.17,.2,.25,.19,-.05,.34,.26,.3,-.36,-.08,.05,.06,.14,-.16,.35,-.35,-.14,.14,-.26,.07,.1,.25,.34,.29,-.17,.08,.04,.08,.19,.3,-.47,-.42,-.07,.17,.08,.16,-.05,-.03,.4,-.01,.29,.46,.24,.06,.3,.14,.33,.54,.47,.1,-.12,.29,.16,.31,.45,-.42,-.3,.11,.18,.13,.59,.14,.33,.14,.34,.12,.06,.03,.28,.14,.26,.01,-.22,.34,.38,-.09,.42,.23,.17,.38,.24,.3,-.06,.5,.09,-.1,.1,.21,.01,.39,.5,.13,.26,.39,.44,.19,-.24,.07,.28,.36,-.3,-.28,-.05,.09,.07,-.01,.37,.29,.3,.09,.24,.34,.09,.28,-.22,.33,-.24,.45,.34,.58,.29,.29,.15,-.14,.15,-.18,.15,.37,.49,.52,.12,.04,.14,.21,.26,-.12,-.4,.03,.34,.32,.16,.28,-.26,-.46,.22,.48,.18,.45,-.06,.21,.15,.05,-.09,.52,.23,-.19,.51,.13,.23,.19,-.32,.31,.32,.58,.34,-.13,-.32,.17,-.22,-.08,-.06,.11,-.09,-.02,.17,.33,-.22,.38,-.08,.34,-.08,.33,-.01,.02,.48,-.01,.23,.01,.04,.09,.3,.09,.42,.01,.16,.14,.13,-.18,.13,.09,.09,.17,.17,-.15,.24,.3,.15,.21,-.09,.28,.04,.25,.18,.19,.31,.13,.08,.38,.04,-.27,.38,.36,0,-.46,.2,-.28,-.21,.15,.06,.15,.17,.56,-.03,.45,.17,-.17,.28,-.08,-.22,.21,.07,.52,.04,-.14,.34,.06,.2,.21,.42,.16,.46,.01,.32,-.04,.18,.27,.12,.17,.32,.2,.25,.14,.37,.15,.12,.21,.3,.13,.16,.09,-.15,.11,-.09,.4,-.24,.13,.14,.12,.1,.11,.31,.35,.04,.31,-.3,.07,.46,.07,.3,-.17,.33,.34,.15,.33,-.2,.02,-.39,.54,.14,.31,.18,.37,.17,-.18,-.42,.17,-.1,-.47,.2,.1,.02,.04,.05,.47,-.06,.5];export{a as rvalData};
