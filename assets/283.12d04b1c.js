const a=[-.11,.26,.4,-.08,.37,-.06,.06,.06,.49,.12,.5,-.24,-.04,-.36,.64,-.03,.33,-.17,-.22,.07,.1,-.13,-.07,.62,.68,.49,-.15,-.33,-.13,-.05,.17,-.14,.34,-.05,.12,-.03,.52,.77,0,.16,.08,.41,.03,-.09,.05,.62,.09,-.08,.02,.11,.47,-.11,.1,.64,-.1,.74,.41,-.06,-.04,.39,.04,.23,.46,-.08,-.03,-.12,.42,.72,.14,.07,-.01,.23,.12,-.15,.48,.11,.05,.04,.55,-.01,-.16,.32,.14,.38,-.26,-.15,.5,.09,-.34,.64,-.32,-.04,.32,-.6,.11,-.27,-.29,.02,-.45,.11,-.08,.54,.04,-.14,.13,.01,.01,.24,.43,.19,.28,-.05,-.01,-.33,-.29,.42,.19,-.23,-.26,.66,.01,-.03,.24,-.18,-.23,.22,.37,-.17,-.15,.5,-.13,-.27,.03,-.01,.18,-.11,-.32,.07,-.12,.09,.23,.11,.26,.52,.06,.04,.15,-.46,.43,.02,.54,.44,.1,.07,0,-.42,-.2,-.07,.05,.72,-.38,.19,.06,-.01,.41,.04,.03,-.16,-.22,.56,.02,-.14,-.14,-.26,.14,.02,.03,-.01,.05,.38,.23,-.07,-.15,.3,.04,-.04,.18,-.04,-.16,-.21,-.06,.19,0,.42,.32,.39,.14,.38,.05,-.32,.79,.44,.51,.08,-.24,-.08,-.19,0,-.02,-.17,0,.62,-.09,.62,-.05,-.05,-.04,.12,-.03,.02,.18,.01,.06,.55,.22,.51,-.04,-.19,-.05,-.25,-.01,-.19,.48,.36,.12,.07,.49,.59,-.22,.15,-.07,.67,-.11,-.47,.28,.15,.12,.18,-.01,-.04,-.1,-.33,-.1,-.21,.26,-.02,-.13,.68,-.12,.36,.09,-.47,.63,.26,-.43,.11,-.04,.35,.34,.5,-.15,.01,.48,.41,.52,-.12,.02,.05,.45,.01,-.23,.05,1,-.28,-.15,.33,.06,.58,-.01,-.24,.06,-.16,.29,.17,.14,.03,.52,-.1,.27,.07,.01,.28,-.19,.09,-.05,.13,-.18,.17,-.43,.53,.38,-.1,-.07,.05,-.15,.05,.14,-.35,.35,.03,.31,-.3,.62,.45,-.1,-.16,.25,-.28,-.11,-.11,-.25,.21,-.19,-.04,-.37,.04,-.1,-.01,.08,-.18,.25,-.01,-.22,-.01,.58,.29,.05,-.15,-.01,-.19,.33,-.34,.04,-.14,.03,.93,-.03,.03,.36,.39,.64,.16,-.22,.2,-.17,-.15,-.11,.52,-.17,0,.01,-.14,.6,-.16,-.01,-.04,-.04,.38,.06,-.23,.05,-.11,.06,.13,-.01,-.09,0,-.15,.21,.2,.4,-.09,.07,.1,.14,.3,-.26,.01,-.25,-.2,-.32,-.22,.36,.53,-.13,0,.58,.25,.38,.2,.4,-.23,-.54,.44,-.29,.04,.27,.22,-.21,-.2,.07,.52,-.24,.06,.52,.47,.33,-.09,-.13,-.56,-.08,-.17,.67,.1,-.09,.63,.24,.26,.37,.27,.15,.44,.27,.4,.23,-.03,.29,.24,.45,-.15,.41,.16,-.45,-.37,.1,-.36,-.07,.48,-.16,.42,.5,.21,-.22,.01,-.01,.05,-.25,-.03,-.35,.64,.26,.52,.27,.17,-.28,.43,.42,.57,.36,-.08,.27,.68,.18,.46,.19,-.29,.08,-.43,-.01,.31,.19,-.22,.29,-.53,.3,.49,-.06,.1,.33,-.45,-.19,-.14,.35,.45,.42,-.3,-.54,.4,.2,-.05,.35,-.18,.35,-.23,.19,-.18,-.11,.07,-.02,.46,-.15,.29,-.18,-.12,-.08,.02,-.14,-.03,.24,.21,.06,-.07,-.05,-.25,-.02,.03,-.17,.03,-.43,-.14,.14,-.32,-.1,0,-.22,-.27,-.23,.01,.4,-.31,-.01,.5,.4,.37,.25,-.09,-.24,-.43,.04,-.01,.43,-.07,-.11,.12,.11,-.02,-.14,.05,-.19,-.01,.27,.38,.79,-.32,.29,.38,-.04,-.39,-.05,.03,-.19,.08,.28,-.25,.25,.61,.36,.22,-.21,.54,.09,.1,.02,.21,.11,-.42,.52,.4,.03,.11,.35,.56,.3,.13,.12,-.15,-.42,-.29,.12,-.33,.02,.55,-.09,.2,-.23,.16,.29,.14,.12,-.05,-.08,-.27,-.2,-.05,-.33,-.21,.2,-.31,.25,.12,.08,.08,-.13,-.02,.09,.25,.41,-.27,.02,-.16,-.05,.39,-.34,-.3,.38,.29,-.48,.4,-.03,.23,0,-.43,-.22,.37,.43,.08,.75,.12,-.17,.1,.27,.02,.4,-.34,.09,.07,.14,-.27,.5,.5,.56,-.05,-.1,-.04,-.02,-.6,.36,.54,-.3,-.01,.16,-.44,-.03,.37,-.15,.07,-.26,.43,.44,.06,-.03,-.32,-.57,-.09,-.03,.24,.12,.13,.37,-.23,.33,.3,.41,.24,-.13,.02,-.14,.22,-.02,-.06,.54,-.42,.03,.12,-.16,-.02,.28,-.22,.08,-.12,.24,.2,.54,.05,.31,.1,-.16,-.11,-.09,.33,-.21,.01,.21,.07,.17,-.37,.54,-.07,-.29,-.1,.48,.16,-.21,-.01,.1,-.06,.52,.55,-.13,.23,-.02,-.15,-.29,-.04,.58,.19,-.2,.15,.15,-.07,.01,-.19,.47,.37,.09,.68,.34,-.26,.2,.04,-.58,-.4,.33,.13,-.27,-.05,.24,.26,.24,-.23,.35,-.24,-.06,.28,.35,.14,-.07,.02,-.14,-.1,-.23,-.39,.18,.72,.39,-.11,.38,.3,-.4,-.02,.32,.12,-.12,.39,.53,.34,.44,-.41,-.33,-.09,-.1,-.38,.18,-.19,.16,-.21,-.26,-.09,-.03,.32,.06,.44,.07,.37,.08,.5,.02,.06,-.16,.12,-.35,.5,-.14,-.35,-.28,-.07,.26,.02,.17,-.18,-.08,.41,-.05,-.3,.04,.46,.29,-.21,.3,.06,-.1,-.13,.47,.01,-.08,-.25,-.35,-.34,.34,-.08,.43,.5,-.11,-.21,-.47,-.38,-.24,.01,-.22,-.13,-.37,.05,-.04,-.27,-.35,-.36,-.19,.03,-.07,.02,-.13,.51,.03,.37,.5,.11,-.12,.23,.19,.11,.37,-.37,-.15,.08,.11,-.07,-.18,-.17,.16,.62,.1,-.09,-.18,.06,.03,.4,.26,-.33,.09,-.27,.08,-.03,-.08,-.31,.26,-.18,-.16,-.32,-.31,.15,-.32,.05,-.31,.49,.21,.37,.1,.4,.29,-.32,.18,.32,.35,.39,.28,-.37,.12,-.15,.32,.37,.07,-.23,-.21,.31,-.33,-.34,.25,.38,.11,.17,.01,.1,-.27,-.22,-.19,.27,.35,-.49,.36,-.06,.43,.18,.05,.01,.16,.05,-.13,-.04,-.28,.06,-.12,-.4,.69,-.31,.34,.45,.09,-.29,.01,.38,.47,-.17,-.21,.19,.1,-.03,-.52,.07,.05,.16,.1,-.08,-.1,.05,.1,-.28,.16,.13,.15,.03,-.06,-.14,.05,-.18,.07,.32,-.03,-.01,-.12,-.09,.2,.26,-.12,-.01,-.13,-.21,.4,-.27,-.52,.15,.4,-.34,.27,-.1,.1,-.18,.32,.11,.14,-.07,-.4,.06,.01,-.15,.06,.29,.54,.11,.17,.09,-.32,.36,.12,-.2,.08,-.29,-.06,-.18,-.14,.25,-.11,.39,-.03,.03,.19,.19,-.18,-.09,-.39,.44,0,-.03,.19,.6,.03,-.03,-.15,.63,.36,-.07,-.13,.12,.03,.28,-.15,.21,.61,-.33,.14,.55,.08,-.21,.09,-.09,.04,-.05,.15,-.19,-.14,.48,.09,-.51,.34,-.24,.36,.32,.07,-.22,.38,.22,.07,-.08,-.38,.57,.21,.48,.26,.03,.19,-.21,-.13,.02,.07,-.13,-.18,-.1,-.19,.61,-.03,.39,-.15,.67,0,.21,-.14,-.08,.16,.65,-.38,-.04,-.31,.24,.45,-.13,.11,.33,.44,-.39,.08,-.12,.44,-.04,.16,.23,.3,.03,.53,.03,.34,.14,.09,-.13,.01,.3,.04,-.29,.05,.02,-.06,.08,.7,.36,-.17,.06,.39,-.15,.39,.44,.44,.04,-.12,.03,-.3,-.19,.28,.08,.57,.02,.47,.18,-.37,-.16,.02,-.18,-.19,.12,.4,.55,-.12,.36,-.26,.07,-.17,-.06,.33,.01,-.19,.46,.22,-.42,-.21,.33,.11,.43,-.2,.26,-.43,.37,.25,-.01,.33,.02,-.05,-.31,.42,-.26,.37,.32,.38,-.41,-.3,.42,.51,.04,.06,-.28,-.01,-.04,-.34,-.4,-.07,-.25,.42,.01,.38,.6,.55,.09,-.03,.04,.52,.36,.43,-.15,.06,-.05,.04,.11,.19,-.06,.47,0,-.21,-.34,.1,.43,.1,-.26,-.04,.32,-.26,.26,.44,-.26,-.05,.16,-.19,-.19,.24,.04,.62,.03,.44,.48,.26,.05,.01,-.23,-.26,-.09,.21,-.14,.64,.11,.34,-.06,.3,.14,.08,.05,-.05,.43,.34,.22,-.42,-.04,-.2,.28,.28,.34,.43,.42,.44,.1,-.07,.63,.07,-.46,.51,.18,.16,.21,-.41,-.08,-.35,-.35,.08,.5,.47,.1,.08,-.29,-.18,-.14,-.26,-.32,.31,.32,.21,-.09,.03,.25,-.5,-.06,-.34,-.11,-.21,.02,-.02,.25,.37,-.14,.28,.34,.46,.02,.16,.13,.06,-.33,.09,.12,.29,.47,-.07,.08,-.12,-.01,-.45,-.08,.29,.31,-.12,-.06,-.34,-.07,.32,-.11,.05,.11,-.17,.19,.15,.66,-.1,-.06,-.28,-.5,-.01,-.15,.17,-.14,-.15,-.19,.02,.44,.19,.05,.13,.4,-.21,.26,-.22,.04,.51,.2,-.33,.34,.3,-.14,-.32,-.18,.11,.33,.4,.73,.19,0,-.08,-.2,.14,.22,.06,-.23,-.28,.64,-.11,-.11,.01,.07,.35,.01,.03,-.01,.28,.15,.27,0,.01,.58,.09,-.08,.54,-.2,.47,.52,-.13,-.1,.07,-.08,-.16,.58,-.29,.45,.08,-.14,0,-.23,.06,.34,-.1,-.32,.1,.66,.57,.41,.1,-.08,-.13,-.02,-.07,-.27,.16,-.05,0,.4,-.12,-.15,.3,.27,-.21,-.09,-.23,-.05,.39,-.13,.23,.28,.1,-.12,-.16,.5,-.04,.12,-.24,.42,-.02,.21,.01,-.04,-.37,.51,.08,-.06,-.35,-.02,.04,-.04,.13,.65,-.11,.03,.57,-.12,-.36,.16,.51,.03,-.32,.53,.77,.32,.15,.07,-.08,-.04,.39,-.18,.16,.61,-.33,-.23,.07,.25,.12,-.12,.21,.07,-.02,-.16,-.51,.38,.11,.28,.4,.15,-.28,.19,.21,.26,.2,-.22,.39,.28,.13,.3,-.39,.05,.28,.15,.24,.11,.33,.41,.1,-.27,.35,.3,.19,.24,.26,-.04,.32,.36,.05,-.04,.16,.21,.69,-.15,.25,.4,.57,.34,.05,.43,0,-.14,.25,.72,-.36,.04,.37,.16,.39,.29,.08,.26,.27,.51,.45,-.13,-.06,.06,.45,-.24,.28,.11,.26,.65,-.11,.15,.02,.2,.62,.37,.06,-.21,.46,.44,.2,.28,-.17,.39,.49,.15,-.07,.27,.16,.33,.17,.5,0,.09,.4,-.03,-.1,.11,.19,.02,.46,.05,.38,.16,.14,-.13,.03,.4,.51,.21,.49,.4,-.48,.49,.01,-.03,.27,.03,-.17,.28,.31,.4,-.49,.42,-.52,-.04,.22,.16,.22,-.27,.06,.35,.23,.16,.13,-.14,.43,.1,.32,.1,-.54,.19,.33,-.32,.34,.03,.37,.13,.38,.33,-.03,.37,-.07,.32,.29,.12,-.02,.52,.03,.09,.04,.19,-.08,-.1,.02,.2,.34,.69,-.41,.26,.66,.56,.6,.42,.33,.03,.04,-.47,.35,-.01,-.1,.2,.11,.11,.07,.35,.43,.29,.06,.7,.3,-.12,.43,.16,.23,.62,.47,-.16,-.08,.13,-.13,-.01,-.15,.37,.2,.33,-.33,.23,.08,.25,.06,-.09,-.22,-.03,.42,-.09,.32,.11,.2,.16,.07,.42,.25,.5,-.06,.12,.1,.3,-.3,-.16,.14,-.11,.04,-.25,-.03,.06,.01,.02,.21,.35,-.18,.57,.38,-.1,.38,.01,-.14,-.07,.2,.29,.34,.41,.17,.53,.39,.07,.24,.15,.05,.06,.55,.27,.46,.27,.12,-.05,.22,.41,.26,.42,-.4,-.05,.27,-.16,.56,0,.07,.05,.54,.4,.39,.35,.47,.49,.25,.17,.22,.21,-.21,.39,-.41,-.11,-.19,.27,.5,.3,.06,-.3,.11,-.14,.36,0,-.12,.04,-.11,.06,.03,.59,-.46,.24,.03,.25,-.16,.25,.04,-.29,.23,-.07,-.1,-.2,.55,.13,-.39,.42,-.29,-.08,.3,-.11,-.48,.06,.01,.54,-.18,-.26,.28,.05,.38,.11,.59,-.3,.47,0,.5,.08,.01,-.04,.11,.5,-.06,-.2,.01,-.53,-.15,-.17,.39,.44,.27,.12,-.25,0,.25,.01,-.06,.11,.11,.05,.43,.26,-.12,.44,.29,.21,-.17,.06,.37,.52,-.03,-.3,.23,.2,.35,.15,-.02,.57,.29,-.14,0,.32,0,.31,.4,-.31,-.04,.45,-.34,.09,-.2,.55,-.14,.57,-.39,0,-.13,.04,.55,.04,.02,.07,-.27,-.09,.52,.38,.31,-.11,.37,.44,.39,.36,.28,-.05,.04,.11,.4,-.39,.12,.05,-.07,.21,.6,.43,-.25,.68,-.03,.35,.36,.18,.19,.03,.02,-.18,-.08,.11,-.02,.28,.37,.51,.37,.09,.1,.2,.29,.26,.33,-.07,-.02,.49,.56,-.01,.19,-.31,-.09,.32,.26,.41,-.2,.49,-.06,-.21,.49,-.34,.45,.2,.39,.07,.49,-.08,.22,.34,.16,.08,.31,.52,.6,.48,.43,.62,-.15,.48,.27,-.14,-.05,.56,.47,.6,.36,.54,-.32,.19,.53,-.21,-.4,.49,.03,.31,-.23,0,.21,.18,.54,.53,.06,.24,-.08,-.24,.46,-.25,.15,.29,.34,-.45,-.01,.02,-.08,-.21,.24,.46,.14,-.4,.33,0,.15,.32];export{a as rvalData};
