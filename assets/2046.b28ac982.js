const a=[.06,.12,-.1,.14,-.09,.14,0,.36,.29,-.14,-.14,-.01,-.06,-.06,-.22,.07,-.2,-.04,-.04,.2,-.15,-.51,.02,-.29,-.04,.16,-.47,.07,.16,-.41,.36,-.38,.11,.06,-.2,.22,-.04,-.17,.24,.36,.13,.16,-.18,.06,.1,-.05,-.15,-.19,-.25,.41,-.26,.18,-.01,-.01,.55,-.2,0,.34,.18,.04,.4,.25,.17,.01,.08,-.38,.17,-.21,-.04,-.07,.01,0,.39,-.22,.05,-.12,0,.39,-.19,-.41,0,0,-.09,.27,-.16,-.3,.16,-.01,-.11,.02,.28,.09,.24,.23,-.11,.27,-.05,-.14,.07,.35,.01,.14,.39,.13,.45,.1,.05,-.03,.16,.37,-.08,.46,.13,.07,-.06,.05,-.48,-.33,-.17,.06,.1,-.33,-.25,.11,.19,.26,.07,-.09,-.33,-.02,.41,.29,-.07,.41,-.25,.12,.62,.42,-.43,-.02,.24,.03,.32,.14,.1,.02,-.01,.16,.3,-.05,.11,.1,0,-.02,.38,.26,.15,-.01,-.15,-.21,.4,.31,.08,.44,.11,.39,.15,-.46,.16,.12,.08,-.47,.35,.44,.26,-.36,.05,-.32,.46,.08,-.13,.13,.07,-.06,.66,.04,-.02,.07,.07,-.19,-.01,.23,.05,.29,.31,0,.3,-.18,.08,-.17,-.17,.25,-.04,.06,0,.24,.1,.45,.46,.16,.37,-.08,-.04,-.05,.34,.15,.13,.28,-.37,-.03,.45,.45,.22,.03,.31,0,.42,-.37,.37,.4,.18,.11,.05,-.05,-.27,.07,-.14,-.22,.15,-.17,.54,-.23,.39,.62,.19,.14,-.02,.22,.02,-.05,.28,-.04,.52,.25,.16,.15,-.01,.12,.2,-.15,.11,.29,.08,.23,.26,.43,-.25,.24,.06,.21,-.05,-.01,-.05,-.08,.11,.13,-.31,.49,-.13,-.24,.58,-.1,-.25,.07,.67,.17,-.24,-.07,.21,-.19,.2,.53,.13,.05,.12,-.18,-.06,-.1,.08,.32,-.11,-.12,-.29,-.03,.13,.26,.09,.51,.31,-.18,.07,.02,-.12,.05,.1,.33,.23,.23,-.1,.17,.29,.08,-.26,.17,.37,.65,.23,.24,.07,.66,-.03,.42,.49,.03,-.39,-.02,-.41,.53,-.08,-.26,.34,-.26,-.04,-.04,-.06,.07,-.04,.64,-.2,.78,.31,.56,.19,.66,.03,-.24,.48,-.2,0,-.12,.14,-.06,.63,-.02,.08,.1,.35,-.03,.12,.14,-.29,-.11,.18,.13,.32,.27,-.15,.19,.03,.44,.05,.1,-.09,0,.1,.36,-.16,.04,.27,.24,.02,-.06,.02,.01,-.04,-.13,-.48,-.04,.25,.13,-.16,.49,.04,.24,.4,.02,-.26,.06,.28,.32,-.07,.07,.42,.03,.29,.06,.2,-.17,.57,-.05,.1,-.01,-.19,-.08,-.27,-.03,.05,.13,.39,.43,.36,.15,.06,.02,.35,-.08,-.2,.13,-.07,.19,.37,.24,.37,-.07,.09,.15,-.02,.25,.02,-.19,.01,.39,-.09,.46,-.03,.14,-.29,.03,.32,0,-.08,.17,-.02,.53,.02,.21,.12,-.3,-.16,-.06,-.03,-.06,.06,-.09,.47,.03,-.08,-.13,.05,-.16,.34,-.09,.13,.08,.2,.56,.12,.18,.01,-.05,-.02,-.06,.01,.23,-.03,-.01,.28,-.1,-.05,.57,.6,.27,.19,.07,.18,.18,.05,.15,.07,.29,.24,.54,.31,.24,.17,-.06,.22,.48,.56,.05,-.26,-.11,.23,.07,.25,.08,.21,.16,.03,.22,.56,.29,.08,.64,.13,.19,.31,-.04,.19,.05,-.28,.29,-.08,-.18,-.31,.06,.52,-.16,.14,.25,-.12,0,-.07,.03,.1,-.07,-.18,.4,-.15,.23,-.02,-.3,.52,.37,.08,.05,.19,-.18,.29,-.29,.07,-.12,-.16,.35,.08,-.13,-.06,-.05,.44,.06,-.35,.06,.32,.56,.34,-.23,-.11,.33,-.22,-.04,-.08,-.13,.01,.28,.35,-.01,-.01,-.14,.27,.11,-.12,.02,-.13,.31,-.15,-.43,.53,-.32,-.07,.25,.1,-.03,0,.23,.11,.01,-.1,.14,-.1,.1,.05,.22,.15,.05,.5,-.12,0,.28,.25,.23,-.11,-.2,-.13,.49,.07,.27,.05,.63,.27,-.33,.26,.15,-.34,.02,-.4,.24,.28,.2,.02,.33,-.01,-.1,.44,-.09,.03,.09,-.26,-.06,.07,-.05,-.12,-.18,.09,.31,-.05,.16,-.1,.58,.16,.1,.2,-.02,.03,-.37,.36,.42,.34,-.04,.06,.12,.08,.22,.11,.2,.24,.15,-.03,.25,.11,.22,-.06,.04,.18,-.04,.1,.04,0,.15,.11,-.05,.27,.21,.13,-.05,.14,-.12,-.15,-.21,.07,-.5,.06,.57,.25,.09,.11,-.08,.21,.05,-.03,.07,.25,.25,-.05,-.12,.1,-.2,.02,-.42,.03,-.04,-.12,.33,.24,-.1,.42,.6,-.07,-.1,.02,.08,-.01,0,-.33,-.23,-.02,.01,.27,-.07,.34,.29,.05,-.04,-.23,.3,.04,-.15,.15,-.35,.17,-.26,-.35,-.39,.01,-.19,-.29,-.29,.21,.01,-.07,.11,.38,.42,-.03,0,.44,-.23,.21,.22,.03,.31,.02,-.01,.01,.25,-.04,.35,.78,.45,.17,-.27,-.37,.43,.27,-.17,.11,-.46,-.09,.38,.39,.31,.17,.09,0,.08,-.02,.3,-.04,-.04,.32,-.06,.11,.28,.26,-.32,.32,.57,-.08,-.24,.06,-.02,.02,.11,.36,-.07,-.16,-.03,-.02,.15,.04,-.15,.35,-.04,.35,.13,.01,-.06,-.25,.29,.08,-.23,.2,.01,.01,.59,-.27,0,-.03,-.35,.3,-.03,.01,-.41,.31,-.14,.01,.27,.28,.25,.25,-.17,.27,-.04,.09,-.03,.21,.39,-.26,.09,.47,.46,.35,.08,-.02,.46,.21,.33,.1,.09,-.07,.13,-.31,-.09,.15,.26,-.11,.24,.36,.19,.15,.13,.29,-.02,-.2,.45,.27,.01,-.1,0,.11,-.09,.21,.08,.18,-.03,.01,.06,-.05,.6,-.05,.56,.04,-.23,-.17,.15,.3,.28,.07,.53,.56,-.12,.19,-.27,.23,.06,.14,-.15,.06,-.08,.13,.21,.24,-.06,-.08,.09,.11,.04,.49,.02,.13,.05,-.13,.22,.13,.17,.62,.09,.23,.07,-.16,.03,.29,-.07,.53,.05,.44,-.15,.11,.04,.14,.02,.15,-.26,.12,-.01,.32,.02,.16,.11,-.19,-.05,-.09,.07,-.41,.07,.25,-.24,.29,.38,.44,.22,-.05,.5,-.34,.3,.09,.33,.44,.03,.02,.16,.34,.34,.56,.22,-.04,.48,-.09,.11,.07,-.02,.11,.16,-.14,.16,.1,-.31,.03,.04,0,.02,-.07,.18,.17,-.04,.06,-.06,-.01,.19,.27,-.07,.1,-.01,.23,.48,-.07,.32,.22,-.28,.05,-.02,.55,-.1,-.11,.66,.03,.31,-.07,.07,.12,.01,.57,-.1,-.31,.24,.05,.45,-.04,.08,-.22,.01,.22,-.05,.05,.19,.04,-.24,-.05,.23,.19,.14,-.08,.01,-.01,-.02,.27,.25,-.44,.11,-.14,.15,.56,.54,.24,.04,.09,.29,-.11,.61,.18,0,.09,-.28,-.07,.11,.45,-.05,.05,.14,-.46,.21,.04,.56,.03,-.3,-.08,.27,.36,.53,.14,.05,.23,-.26,.57,.01,.08,.29,-.14,-.13,.17,.17,-.08,.36,.49,.01,-.04,-.12,.02,-.06,.44,.05,-.27,-.19,-.14,-.06,-.04,.2,.03,-.19,.33,.01,.42,.18,-.1,.06,.03,-.09,.15,.27,.05,.09,.09,-.15,-.27,-.19,.24,.09,-.04,-.02,.01,.1,.11,-.07,.5,.06,-.04,.49,.08,.46,.11,.02,-.11,-.06,.21,.38,.11,.15,-.05,.16,.16,.41,.4,-.07,-.23,.65,.29,-.12,-.12,.11,.19,-.04,.58,.13,.03,.39,.07,.06,-.05,-.11,.06,-.01,.19,.11,-.01,.09,.05,-.06,-.19,.09,.28,-.31,-.33,.25,0,.05,.51,.35,.22,-.12,.09,.41,-.05,-.02,-.09,.5,.1,.43,-.17,.28,-.16,.21,-.01,.11,.23,.1,.12,.29,0,-.16,.27,.25,-.38,.11,.2,.01,-.15,-.09,-.06,.1,.01,.07,-.09,.14,.02,.14,.11,-.15,-.09,.13,.29,.22,.18,.05,.35,.31,-.01,.09,.34,-.08,.37,.19,-.06,-.06,.01,.58,-.2,.09,-.47,-.43,.23,.04,-.01,-.02,.29,-.39,.1,.25,.01,-.08,.48,-.1,.42,.14,.01,.29,-.01,.16,-.1,-.09,.06,.14,-.13,.15,.34,.32,.3,.45,.13,.05,-.09,.23,.14,.23,.1,.15,0,-.25,.41,.31,0,-.29,.39,.03,.05,.32,.44,.08,.29,.26,-.04,.02,.4,.33,0,.21,.44,.3,-.06,.29,.16,-.15,-.07,.13,.34,.51,.24,-.02,.46,-.09,-.16,.35,0,-.02,-.16,-.09,-.12,.15,-.11,.39,-.02,-.01,.53,.46,.21,.28,.18,.65,.7,.62,.31,.61,.32,.27,-.03,.21,.33,.45,.31,.54,-.11,-.39,-.28,.05,.3,-.43,.43,.09,.29,.41,.35,.1,-.21,.18,.22,-.01,.2,-.33,-.03,.01,.54,.25,.41,.28,.56,.49,-.02,-.24,.62,-.01,-.09,-.08,.61,-.1,-.3,.04,.26,-.24,.18,.49,-.41,.21,.35,.24,.27,.27,.27,-.15,.15,-.13,.22,-.08,-.07,.12,-.13,.3,-.19,.09,.06,.08,-.05,-.02,-.17,.14,.15,.3,.13,.16,.13,.07,.43,-.05,.33,-.14,.5,.12,.1,.49,-.08,-.02,.11,.19,.02,.4,-.03,.06,.07,.27,.4,.37,-.14,.07,.09,.26,-.07,-.24,.56,.23,.3,.25,.04,.19,.48,.02,.27,-.49,.19,-.15,.36,.28,.51,.11,.36,.16,-.07,.36,.52,.14,.47,-.11,.19,.44,.45,-.04,.13,.35,.14,.17,.02,.03,-.06,-.02,0,-.02,.01,.47,-.03,.35,-.03,.38,.08,-.15,-.04,-.13,-.21,.34,.15,-.03,.14,.21,.24,-.09,.29,.32,.34,.14,-.01,.14,.22,.04,.04,-.37,.14,.25,.46,.34,.14,-.11,.35,.27,.37,-.08,.26,.45,0,.28,.33,.39,.25,.57,.25,-.39,.34,.15,.39,.16,-.04,.29,.34,-.19,.35,.31,-.06,-.18,.07,.25,.46,.38,.23,.17,-.28,-.14,.24,-.07,.13,.28,.1,-.06,.34,-.42,.37,-.21,.53,-.11,.08,.27,.2,.1,.38,-.29,.08,-.02,.25,-.09,-.01,.47,.03,.63,-.18,.33,.08,-.06,.09,.29,.19,.28,-.02,.04,-.07,-.06,-.05,.09,.27,.06,.13,.13,.13,.17,.52,.37,.3,.37,.06,.27,-.05,.51,-.15,.3,.01,0,.02,.59,-.17,.04,.23,.01,.29,.01,.31,.05,.2,.45,.21,.29,.21,-.01,.17,.4,.19,-.07,.13,.37,.2,.17,.04,.05,.21,-.11,.25,.21,.54,.48,-.02,-.14,-.08,.35,.3,.35,-.15,.44,.31,.49,.15,.52,-.05,.47,.38,-.11,.17,-.03,-.04,.31,-.13,.24,-.07,.02,.15,.43,.36,-.11,.34,.34,-.11,.31,.2,-.05,0,.27,.06,-.19,.4,.29,-.38,-.06,.03,.24,.01,-.15,.1,.25,.28,-.21,-.14,-.07,.2,.15,.3,-.09,-.13,-.38,-.14,-.15,.15,-.27,.27,-.24,.15,-.11,-.07,.07,-.29,-.04,-.05,.29,.49,-.08,.38,-.02,.62,.26,.38,.23,.09,.12,.17,-.02,.04,-.1,-.06,.14,.17,.18,-.1,.24,.18,.27,-.4,-.06,.1,.3,.08,.12,.2,-.27,-.11,.08,.01,.05,.05,-.02,.41,.31,.18,-.12,-.13,.14,-.07,.24,-.42,-.32,-.04,.06,-.08,.01,-.15,-.2,.23,.01,.38,.41,.31,-.03,.07,.16,.14,.36,.57,.32,-.35,.2,.24,.1,.35,-.37,-.03,.11,.14,.12,.52,-.07,.13,-.03,.19,-.02,-.14,-.09,.08,-.05,.26,.07,-.08,0,.4,.11,.4,.17,-.07,.34,.25,.31,-.16,.44,-.05,-.06,.09,-.06,.17,.08,.09,-.15,.43,.05,.06,.15,.11,-.04,.04,.48,.04,-.19,-.2,.04,-.05,-.08,.45,.13,.29,.28,.25,.18,.39,.03,0,.12,.06,.61,.4,.47,.04,-.04,.03,.06,.18,-.15,.02,.2,.51,.5,-.14,-.12,.29,.09,.11,.18,-.14,.07,.37,.28,.03,.2,.04,-.25,.3,.48,.16,.13,.03,.2,.21,-.17,.06,.2,.27,-.02,.32,.11,-.04,.15,-.41,.59,.25,.49,.37,-.03,-.22,-.29,-.17,.07,-.09,-.06,.03,-.11,.17,.42,0,.28,.13,0,.08,.14,-.19,-.07,.34,-.08,-.04,-.06,-.01,-.22,.06,-.12,.29,-.15,-.03,-.07,-.03,-.4,.01,-.06,-.04,.26,.24,.03,.35,.51,.19,.34,-.21,.15,.18,-.04,-.01,.18,.47,-.13,-.1,.11,-.12,-.04,.35,.01,-.12,-.26,.05,-.07,-.02,.15,-.12,.17,-.07,.51,-.08,.37,.16,-.38,-.06,.04,-.2,.15,-.13,.62,0,-.2,.39,.05,-.1,-.04,.29,.07,.43,.36,.21,-.12,.09,.15,-.07,.01,.22,.05,.25,-.13,.3,.34,-.08,.17,-.11,.01,.15,-.13,-.36,-.01,-.24,.36,-.01,-.08,.11,-.04,-.01,-.01,.58,.27,-.07,.36,0,-.04,.09,-.08,.3,-.09,.32,.3,0,.14,-.34,-.17,-.33,.54,-.13,1,-.04,.23,.22,.09,-.53,-.1,-.06,-.31,-.05,.23,.4,.55,-.01,.15,.01,.38];export{a as rvalData};
