const a=[-.21,.17,.09,-.12,.21,.13,.13,.33,.47,-.09,.22,.02,.09,-.2,.27,-.04,-.03,.13,.04,.1,.18,.06,.04,.25,.55,.54,-.06,-.29,.42,-.07,.27,.05,.29,-.2,-.03,.22,.22,.3,.13,.04,.1,.45,-.04,.05,-.03,.2,.09,.12,.35,.21,.25,0,-.03,.36,.18,.21,.48,-.07,.33,.31,.01,.3,.36,-.14,.52,-.05,.46,.34,.18,0,-.06,.14,.21,-.14,.36,-.08,-.15,0,.03,.12,-.12,.27,0,.53,.01,.16,.64,.14,-.21,.3,.01,.19,.43,-.36,.11,.42,-.32,-.4,.27,.12,-.17,.41,.3,-.27,.35,.04,-.07,.19,.5,.3,-.11,.2,.05,-.26,.26,.35,.03,.01,.2,.57,.02,.08,-.05,.16,.11,.3,.29,.26,-.26,.3,.29,.16,.03,-.04,-.04,.24,-.01,.25,-.07,-.1,.38,-.12,.48,.63,-.08,-.1,.08,.31,.56,.1,.35,.12,.03,-.09,.33,.09,.37,-.16,-.24,.29,-.04,.34,.03,.21,.46,.02,-.02,-.09,.26,.43,-.04,-.07,.2,.08,.42,.16,.12,.1,.1,.3,.02,.07,-.02,-.03,.31,.27,-.22,-.2,-.03,-.11,-.04,.22,.26,.39,.28,.3,.26,.13,-.09,.15,.26,.35,.31,0,-.15,.06,.04,.26,.1,.19,.25,.4,0,.41,-.07,.01,.15,.36,.08,.08,.59,.32,.2,.3,.62,.31,.24,0,.17,0,-.07,-.14,.52,.02,.1,-.06,.28,.12,.06,.09,.07,.33,.3,.05,.45,.22,.15,-.16,.13,-.16,-.05,.24,.23,.42,.38,.23,.06,.3,-.02,-.02,-.03,.06,.38,.4,.23,.34,-.15,.59,.07,.38,.12,-.41,.29,.03,.36,.17,.14,.06,.12,.35,.03,.04,.23,-.15,.5,.39,-.01,.31,.08,.33,.23,.13,.31,.22,.28,0,.13,-.13,-.14,.27,.01,.17,.09,-.06,-.1,.62,.52,.19,.24,.15,.38,-.21,.08,-.08,.34,.26,.09,.11,-.03,-.12,.51,.08,.28,.45,.06,.51,.44,.26,.31,.53,-.11,.55,.44,-.08,-.24,-.26,.01,.48,.22,.17,.33,-.05,-.06,.08,.27,.05,.03,.17,-.02,.38,.43,-.12,-.02,.55,-.09,.28,.11,-.15,.09,.01,.5,-.09,.48,.27,.05,-.19,.07,.29,-.15,-.08,.4,-.34,.43,.26,-.12,.33,.33,.53,-.14,.11,.11,.13,.11,.06,-.05,.41,-.24,0,.35,.35,.13,.18,-.08,.01,.03,.18,-.13,-.11,.25,.15,.08,.54,.06,.5,.03,.07,.26,.12,.44,.61,.01,-.1,.05,.17,.06,-.14,.43,.35,.04,.21,-.02,.39,.09,.05,.42,.33,.19,-.12,.33,-.13,.31,.27,.57,.03,.05,.16,.06,.45,.27,.19,.35,.48,.46,.21,-.15,.25,.15,.46,.31,-.21,.26,.19,-.39,.39,-.12,.14,.25,.25,.19,.34,.17,.34,-.25,.08,-.01,.5,-.18,.09,-.38,.31,.12,.21,0,-.23,.19,.45,.13,.13,.24,.12,.29,.33,.29,.51,-.26,.4,.32,.05,.4,-.09,.15,-.02,.5,-.18,.09,.43,.03,-.08,.3,.12,.4,.29,.19,.29,.38,-.08,.07,.44,.24,-.07,.32,.37,.38,.22,-.27,.27,-.18,.27,.13,.52,-.18,.17,.3,.12,.11,-.09,.08,-.04,.05,.36,.27,.03,-.03,.06,-.02,-.13,.29,.27,.27,.17,.15,.11,.14,.23,-.07,-.01,.06,.24,.05,.26,-.11,.32,.1,-.11,.2,.09,-.24,.1,-.21,.09,.05,.11,.62,.39,-.09,-.11,-.04,-.2,-.11,.02,.08,.04,.12,-.03,.38,.12,-.06,.11,-.09,.08,-.09,-.03,.43,.38,.28,.35,.18,.19,.08,.21,.03,.17,.14,.09,.38,-.48,.39,.09,.21,0,.34,.31,.13,.09,.13,-.07,.11,.16,-.06,.25,0,.2,.15,.2,-.03,0,.2,.22,-.03,-.16,.18,.1,.25,-.1,.42,-.23,.13,.09,.42,.27,.15,-.12,-.12,.04,.39,.17,.45,-.02,.02,.12,-.13,.4,-.06,-.34,.24,.46,.25,.44,.31,.27,-.24,-.45,.22,.25,.43,.04,.21,-.21,.09,.13,.16,.05,.34,0,.11,.12,.03,.46,.63,.47,.47,-.03,-.3,-.05,.24,-.15,.32,.34,-.2,.05,-.11,.29,-.1,.32,.2,-.01,-.31,.53,.51,.31,-.01,-.01,.24,.08,-.18,.37,-.15,-.1,.07,-.18,.5,.41,.43,.15,.16,-.13,-.24,.12,-.12,-.01,.46,.03,.01,.16,-.04,-.08,.59,.05,-.01,0,.38,.37,.2,0,.42,.12,-.13,-.08,-.29,.22,-.17,.26,.35,.02,.29,.07,.27,.07,-.24,-.07,.36,.16,.08,.19,.07,-.11,.48,.2,.27,.2,-.26,.46,-.01,.33,.22,.08,.51,.26,.35,-.17,-.14,-.05,.53,.27,.38,.23,.35,.04,.31,.14,.17,.19,.25,-.08,.22,-.17,.26,.25,.28,.1,.13,.27,-.16,.46,0,.33,.37,-.05,.32,-.02,.15,.41,.19,.22,.44,-.09,.18,.48,.11,.06,.51,.12,-.07,.29,.15,.79,.29,-.24,.03,-.09,.06,-.19,.34,.17,.57,.21,-.23,.23,-.12,.33,-.19,.39,.4,.4,.03,.24,-.02,.06,-.11,-.12,.28,.3,-.01,.04,.07,.13,-.17,.15,-.08,.04,.03,.31,.22,.17,-.19,.18,.15,.01,.37,-.08,.16,-.02,.43,.13,-.03,.15,-.01,.07,.4,.23,.41,.27,.43,-.08,.28,.08,-.13,-.03,.3,.28,.19,.05,.01,.21,.13,0,.3,.22,-.02,-.07,0,.15,.16,.36,.22,-.02,.12,1,.31,.33,.41,-.06,-.1,.26,.38,-.17,-.29,-.17,.06,.45,.31,-.04,-.08,-.03,-.11,.41,.13,.15,-.07,.05,-.17,.19,.08,-.02,.14,.42,-.1,.12,.19,0,.17,.17,-.04,.47,.35,.16,-.09,.12,.41,.07,.2,-.1,.3,.41,.4,-.21,.2,-.02,.18,.39,-.23,.48,.24,.4,.36,-.26,.28,.28,.11,.02,.32,.09,.55,.47,.22,.08,.39,-.03,.46,.2,.54,.13,.28,.04,.37,.03,-.05,.08,.01,-.13,.05,.07,.17,-.2,.57,-.01,.49,.27,.15,.43,.31,.22,-.02,.4,.16,.33,-.1,-.04,-.12,.16,.21,.24,.25,.25,-.06,.25,-.12,.09,.03,.23,-.06,-.06,-.12,-.16,0,-.06,-.21,-.21,-.21,-.01,.15,.27,.25,.13,.3,-.08,.29,-.08,.22,-.03,.43,-.21,.01,.26,-.14,.38,.2,-.04,-.09,-.07,.01,.09,.16,.54,.04,.32,.42,.23,.18,-.03,.25,.16,.08,-.05,-.08,.2,.04,-.09,-.14,.15,-.03,.17,.16,.04,.47,.04,-.18,.2,.09,.54,.08,-.06,-.01,.6,-.07,.22,-.08,.46,.02,-.09,.08,.09,.23,.08,.35,.39,.14,.19,.32,.31,-.03,.26,-.14,-.14,.02,.25,-.06,.07,.12,.67,.31,.07,.18,.19,-.12,.44,.42,.61,.46,.43,.27,.01,-.16,.44,.2,.46,.11,.12,.34,.28,.09,.18,.1,-.1,.28,.06,.06,.52,.06,.42,-.14,.26,-.29,-.24,-.05,-.06,0,.27,-.01,.01,.01,.33,.2,.01,.06,.22,.52,.34,.03,.34,.57,-.08,.01,.28,.43,-.1,.58,-.21,.05,.09,-.01,.19,-.02,.3,.12,.23,-.09,.25,-.13,-.08,.53,.31,0,.15,.48,.08,.3,.23,.24,.15,-.06,-.18,-.12,.47,.34,-.04,.25,-.04,.29,.07,.16,.1,.15,-.06,-.25,-.04,.23,.28,.38,-.03,.28,.18,.16,.52,.32,-.07,-.12,.28,.33,-.38,-.1,.32,-.19,.26,.53,.4,.19,.02,-.02,.27,.15,-.26,-.21,-.09,.32,.25,.2,.5,.1,-.22,-.01,.38,.37,-.09,-.08,.03,.19,.06,.25,-.07,-.07,-.11,.25,.2,.17,.34,.47,.09,-.18,-.11,.28,.42,.13,-.07,-.08,.01,-.3,.36,.4,-.03,.48,-.05,.04,-.01,.04,.35,.44,-.04,.25,.3,-.3,.23,.29,.32,.13,.18,-.13,-.04,.33,-.14,.35,0,.45,.09,.21,.24,.31,-.26,.15,-.19,.49,.03,.39,.33,.51,-.14,.19,-.07,-.1,-.09,-.13,.47,.39,.28,.01,.41,.5,.2,.41,.18,.54,.43,.22,.2,.1,.24,-.04,.25,.3,0,.16,.13,-.12,.1,.47,-.26,-.04,.41,.27,-.06,.23,.47,.04,-.27,.12,.3,-.01,.33,-.07,.05,.05,.21,-.15,.47,.22,-.01,.26,-.07,.11,.23,.37,.06,.13,.43,.27,.15,-.03,.36,-.14,-.07,.12,.3,.25,.39,.35,.32,.11,.25,-.1,.16,.29,.41,.17,.35,.02,.32,.22,.33,-.09,-.28,-.05,.32,.23,.17,.32,.23,.29,.02,.16,.15,.14,.24,.32,-.12,.08,.01,.17,.08,.25,.38,-.04,.34,.36,.32,.29,.08,.12,.07,.17,-.27,.05,-.21,-.4,-.02,.49,.29,.35,.11,-.15,-.11,.18,.17,.15,.51,-.17,.27,-.01,-.15,-.08,-.04,.58,0,-.02,.09,-.01,.09,.18,.03,.02,.54,-.07,.02,.44,.11,.34,.63,.04,-.16,.05,.11,.15,.24,.15,.46,-.05,.18,-.05,.05,.08,.31,-.23,.03,.12,.56,.37,.47,.34,.01,.15,.08,-.15,-.01,.2,.03,.29,.37,-.04,-.12,.06,.26,.16,-.07,.15,.09,.2,-.38,.35,.35,.38,-.16,.49,.24,.03,.36,.15,.53,.4,.21,-.06,.17,.15,.3,.32,.09,-.05,.31,-.03,.18,.07,.41,.08,.04,.3,.12,.01,.25,.28,.56,.05,.43,.48,.24,0,.2,0,-.01,.32,-.12,.03,.34,-.02,.09,.35,-.02,-.03,.2,.34,-.02,.07,-.03,.17,.42,.28,.81,.2,-.1,.07,.38,.38,.18,.3,.01,.03,.31,.17,.78,.06,.06,.38,-.31,.65,.7,.54,.07,-.15,.11,.66,-.17,.35,.39,.07,-.18,.04,.36,.39,.11,.47,-.15,.33,.07,.23,.05,.66,.57,-.08,.2,.09,-.12,.25,.34,-.1,-.07,.2,.23,.18,.23,.15,.05,.09,.33,.34,.31,.08,.13,.37,.23,.2,.01,.02,.43,.21,.33,.45,.3,.32,.01,-.11,.29,.17,.46,.37,.03,-.09,.31,.54,.25,.19,.56,.26,.47,-.11,.48,-.04,.26,.19,.03,-.02,-.09,.07,.61,.11,.26,.41,-.22,.24,-.12,-.1,.13,.5,.51,.48,.56,.27,.24,.22,.05,.36,-.24,-.13,.58,.04,.48,.08,-.07,.24,-.01,.08,.2,.55,.04,-.07,.21,.17,.19,.23,-.08,.03,.27,.26,.19,-.16,.47,.26,.07,.58,.05,.19,.18,-.01,.31,-.09,.4,.11,.19,.31,-.11,.01,.15,.16,.4,-.03,-.14,.19,-.26,-.06,.35,.26,.32,-.09,.51,.18,.25,.51,.58,.39,-.03,.06,.19,.64,-.1,-.24,.05,-.16,-.18,0,.18,.05,-.06,.16,.34,-.01,-.09,.49,.12,.37,.24,.3,-.18,-.01,-.07,-.23,.28,.3,.04,.11,.18,.32,.37,.02,.41,-.07,.18,-.2,.04,.14,-.12,.05,.12,.34,.18,.03,.17,.25,.47,-.14,-.01,-.03,.8,.06,-.26,.35,-.07,.09,-.27,.03,.14,-.12,.02,.3,.15,-.1,.41,.13,.17,-.02,.38,-.14,-.11,.05,.33,.16,.33,-.01,.09,.46,.17,.34,.26,.3,-.04,.45,.32,.52,.15,.25,.21,.14,.14,.38,.12,.04,.07,.13,.26,.48,.31,.27,-.22,.54,.26,.35,-.03,.18,.25,.26,.13,.24,.09,-.15,.2,.08,-.25,.09,.35,.26,.37,.25,.17,.07,.27,.12,-.04,-.12,.02,-.16,-.1,-.08,.25,-.14,.22,.22,.43,-.07,.32,.27,.02,.31,-.18,.13,.15,.22,.01,.09,.5,.11,.37,.37,.2,-.06,-.11,.02,.51,.15,-.02,.33,.37,.27,.2,.32,.29,.55,-.04,.29,.22,.31,.31,.1,.4,.4,-.39,-.23,-.33,.08,-.23,.37,.46,.3,.07,-.33,.02,.4,.34,.16,-.06,-.08,-.05,.54,.15,-.05,.38,.36,.27,.14,.18,.23,.39,-.01,.08,.33,.17,.57,.02,.05,.12,.38,-.17,-.15,.12,.08,.1,.42,.1,-.08,.36,0,-.22,-.24,.39,-.4,.32,.06,-.04,-.05,-.04,.25,.19,-.1,.02,.09,-.07,.23,.28,-.02,-.05,-.09,.11,.31,.66,.46,.17,-.07,.25,.46,.2,.03,-.16,-.09,-.25,.29,.47,.18,.46,.32,.17,.17,-.07,.43,-.17,.35,-.14,-.11,-.08,-.03,.26,.16,.32,.14,.11,-.23,.45,.08,.25,.19,.35,-.12,.31,.39,.34,-.13,-.32,.42,.09,.23,.15,.14,.47,.23,.09,.47,-.48,.43,.32,.24,-.05,.35,-.21,.31,.1,.45,.37,0,.63,.27,.27,.45,.1,-.08,.26,0,.24,-.26,.36,.44,.47,.29,.36,.28,.32,.18,.39,-.31,.39,-.05,.12,.15,-.06,.35,.28,.33,.36,.02,.06,.16,-.03,.18,.19,.18,.15,.42,.29,-.05,.04,-.15,.03,-.03,.51,.35,.09,.3,.01,.27,.28];export{a as rvalData};
