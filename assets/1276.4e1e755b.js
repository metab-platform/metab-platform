const a=[.22,-.18,-.36,-.13,-.39,.13,-.21,.69,.16,.15,-.15,-.16,.03,.2,-.27,.09,-.15,-.13,.04,.11,.13,-.33,.17,-.23,-.06,-.2,-.48,-.17,-.14,-.49,.07,-.21,-.26,-.13,-.37,.01,-.34,-.16,-.13,-.41,.06,-.3,-.26,0,-.06,-.11,-.23,.03,-.2,.44,.3,-.01,-.16,-.22,.19,.02,.01,.14,.04,-.36,.24,-.27,-.09,.01,-.15,-.38,-.18,-.24,.11,.07,.11,-.26,.46,-.05,-.34,-.06,-.09,.24,-.2,-.16,.2,-.38,.06,-.25,-.11,-.28,-.09,.03,.33,-.2,.3,.05,.59,.26,-.06,.16,.34,-.11,-.01,.23,-.12,-.1,-.04,-.03,.06,-.09,-.32,-.19,-.12,-.05,.05,.39,.02,.32,.01,-.44,-.12,-.32,.08,.04,.08,-.13,.07,.06,.25,.08,-.25,.07,-.34,-.33,.79,.69,.14,.54,-.29,-.14,.56,.14,-.28,.01,-.17,-.05,-.02,-.06,.07,.28,.16,.05,.1,.16,-.16,.78,.05,.16,.81,.32,.01,-.07,.11,-.24,.48,-.09,.13,.21,.6,.24,-.25,-.26,.27,-.25,0,-.26,.76,.62,-.07,-.24,.07,-.51,.43,-.35,-.16,-.12,.04,-.61,.13,.23,-.09,-.01,.5,.06,.09,.69,-.03,.15,.05,-.23,-.18,.07,-.05,-.2,.22,.18,-.3,.16,.26,-.06,.28,.43,.38,.03,.91,-.3,.12,-.22,.12,.02,-.01,.84,-.3,-.05,.13,.05,-.12,-.26,.23,-.32,.85,-.26,.14,-.1,.03,-.01,-.15,-.4,-.12,-.01,-.35,-.01,.12,.1,.45,-.39,.76,.59,.74,.95,-.04,.16,-.2,-.04,.3,-.2,.21,.04,-.2,-.01,-.01,.15,.07,-.59,-.04,.22,.36,-.16,.21,.04,-.16,-.11,.11,-.15,-.18,.07,-.25,-.29,-.21,-.06,-.48,.36,-.18,-.21,.49,-.18,.05,.18,.35,.12,-.3,-.27,.16,-.23,.58,.29,-.19,.85,.43,-.27,.23,.02,.32,.44,.19,-.49,-.25,.1,-.16,.14,.17,.14,.23,.12,-.19,.01,-.09,.06,-.08,.43,.35,.35,-.34,.07,-.2,-.02,-.32,-.18,.51,.35,-.22,.22,.14,.31,.31,.15,.02,-.18,-.5,-.18,-.35,.28,.64,-.04,.51,-.41,-.04,.05,-.32,-.35,.03,.42,-.2,.45,0,.62,.01,.34,.39,.07,-.01,-.09,-.29,-.52,0,.03,.32,-.11,.1,.23,0,-.31,.04,-.08,-.46,-.08,.16,.3,.15,.29,-.05,-.2,0,.37,0,-.07,.02,.13,.05,-.07,-.03,-.12,-.2,-.25,-.19,-.01,-.14,.47,.46,-.47,-.27,.08,.19,.18,-.18,.2,-.25,.14,.32,-.04,-.33,-.22,-.04,.02,-.29,.27,.1,-.17,.11,-.02,-.18,-.52,.48,.21,.14,-.26,-.3,.03,-.09,-.39,-.39,-.23,.32,.51,.79,.29,.07,.11,.62,-.4,.66,-.2,-.38,-.03,-.11,-.15,-.03,.1,.32,.13,-.48,-.13,.23,-.03,.47,.25,.21,.1,-.03,.12,-.3,-.34,.32,.22,-.33,-.08,.33,.28,.28,.12,.08,.18,.11,-.21,-.22,-.39,-.16,-.09,.46,-.11,.15,.61,-.27,-.28,-.05,-.27,-.34,.53,.27,.19,.19,.5,-.25,-.42,-.01,-.15,.46,.28,-.32,-.32,.35,.08,-.03,.6,.52,.19,-.17,-.33,-.22,.16,-.09,0,-.42,.29,-.14,.23,-.13,.21,.29,-.2,.34,.68,.35,-.29,-.23,-.39,.17,.12,-.23,-.06,.13,-.12,.14,.05,.64,.35,.18,.73,.05,.11,.28,.01,.33,-.12,.1,.28,-.02,-.4,-.21,-.05,.24,-.41,-.28,-.11,-.32,-.32,-.32,-.44,-.07,.04,-.11,.54,.01,.15,-.25,-.35,.21,.84,.08,.12,.07,-.03,.34,.09,-.28,-.4,.28,.5,-.39,-.46,.02,.11,.29,-.3,-.22,.03,-.07,.15,.23,-.39,-.41,-.21,-.22,-.37,.14,.11,.01,-.27,.84,.14,.05,-.46,.16,.56,-.05,-.35,-.43,.38,-.32,-.52,.44,0,-.04,-.19,-.03,-.36,.09,.69,.11,.12,-.44,.94,-.09,.02,.42,.32,.19,.1,.32,-.06,.25,.21,-.15,.93,.04,.3,.18,.35,.06,.14,-.14,.67,.64,-.32,.2,-.23,-.21,-.2,-.07,-.16,.4,-.21,-.06,.24,-.16,.13,.57,-.36,-.11,.1,-.31,-.07,.05,.1,-.48,-.3,-.32,.3,-.08,.08,.04,.21,.06,-.15,.12,-.03,-.08,-.44,.05,.5,-.01,-.38,.05,-.01,.15,.19,-.56,-.28,.4,.1,.14,-.19,-.14,.7,.08,.06,.18,.04,0,.52,-.11,0,-.26,.27,-.23,.72,.32,-.33,.17,-.15,-.03,-.49,.07,-.49,-.06,.54,.23,.57,.05,.04,.37,.09,.15,-.05,.68,-.19,-.33,.21,-.3,-.45,.07,-.33,.03,-.27,.19,.43,-.25,-.08,.4,.59,-.35,.12,-.24,.17,-.27,-.06,-.1,-.48,.09,.27,.1,-.35,.25,.23,.03,-.05,-.21,.1,-.27,.21,.06,-.48,-.07,-.18,-.4,-.25,-.15,.17,-.42,-.21,-.13,.07,0,-.03,.34,.29,-.25,.03,.45,.01,.48,.8,-.4,.31,-.44,-.05,.05,-.13,-.38,-.09,.27,.32,-.07,-.39,-.3,.21,-.15,-.24,-.29,-.24,-.36,-.01,.16,-.05,.47,-.12,.03,-.21,-.19,.16,.52,-.16,.25,-.07,.04,.03,-.25,-.23,-.03,.63,.3,-.3,-.32,-.42,-.17,.06,.86,-.28,.01,-.38,.05,.27,-.22,0,.12,-.31,.22,-.09,-.04,-.25,-.03,.38,-.09,-.3,-.11,-.36,.07,.66,-.23,-.25,-.22,-.36,.51,-.08,.23,-.42,.11,.16,-.02,-.06,.26,.31,.65,-.15,.11,-.34,.06,.18,.21,.48,-.12,.01,.36,.87,.3,.11,.06,.45,.28,.25,-.17,.39,.12,.04,-.46,.17,.06,-.23,-.36,.22,.34,.24,-.19,.9,-.21,.25,.24,.29,-.2,-.08,.12,.13,-.23,-.12,.16,-.05,-.09,-.03,0,-.05,-.05,.56,-.09,.53,.06,-.47,-.26,.37,-.25,.14,.06,.46,.75,.14,.37,0,.32,-.08,-.18,-.41,.16,-.46,-.3,.26,.71,-.38,-.43,-.35,-.24,.35,.46,-.11,-.07,-.32,-.17,.13,.29,-.13,.4,-.15,.78,-.22,.06,-.11,.76,.04,.14,.11,.6,-.16,-.29,-.27,-.28,.14,-.13,0,.81,.16,-.17,.13,.03,.42,.33,.06,-.32,.16,-.42,.25,-.27,.27,.48,.15,.52,.08,-.3,.77,-.35,.81,.6,.77,.54,.01,-.02,.23,.31,.93,.58,.93,.1,.45,-.07,.19,-.04,0,-.01,-.04,-.04,-.04,-.1,-.37,-.05,-.29,-.11,.02,.12,.18,.25,-.31,.33,.12,.51,.3,.23,-.18,-.26,-.12,-.11,.14,.05,.15,-.09,.12,-.03,-.2,.56,-.04,.01,.3,.03,.4,-.25,.65,-.13,.05,.65,-.46,-.37,-.12,.13,.46,-.05,.16,-.05,-.12,.39,.19,-.16,.51,-.07,.26,-.04,.22,.21,-.12,-.31,0,.45,-.15,.33,.01,-.31,.27,-.32,.01,.2,.27,.18,-.46,-.07,.24,-.3,.55,.02,-.36,.01,-.18,-.02,-.05,.33,-.36,0,.23,-.32,.02,0,.17,-.32,-.18,-.4,-.05,.85,.15,-.16,-.23,.68,-.07,.58,.09,-.46,.08,-.09,.06,-.08,.11,-.06,.47,.33,-.03,-.16,-.21,.06,-.17,.24,-.29,-.2,-.4,-.09,-.05,.03,0,.19,-.37,.26,-.13,.43,-.21,-.38,.2,-.13,-.43,-.14,.43,.09,.32,-.18,-.33,.07,.01,-.16,.04,-.12,-.52,-.28,.58,.01,.08,.24,-.25,-.02,.38,.04,.49,.03,.08,.1,.21,.01,.49,-.12,-.09,-.33,-.35,-.18,.22,.36,-.12,.18,.3,.1,-.22,-.37,-.13,-.21,.04,.68,.15,.05,.58,.07,0,-.42,-.35,0,-.45,-.15,.69,.65,.04,-.29,.02,.09,-.18,-.11,-.4,-.22,-.04,.07,-.2,.22,-.05,.22,-.38,-.53,.86,-.34,-.45,-.03,.55,-.26,.09,.08,-.24,-.38,.11,.13,-.15,.12,.06,.01,.27,-.01,-.38,.05,.2,-.43,.44,-.08,.02,-.42,.21,-.17,.07,0,.04,-.37,-.3,-.32,.19,.04,.04,-.11,-.06,.01,.08,-.15,.16,.04,.28,-.09,.2,.19,-.03,.8,-.15,.28,-.45,.22,.69,-.32,.15,-.51,-.26,.6,-.03,-.23,.22,-.05,-.45,.21,1,-.16,.05,.58,.01,.11,.16,.05,.54,.12,-.08,-.44,-.15,-.01,.05,.3,-.23,-.17,.15,.46,.43,.17,-.23,.02,.1,-.14,.11,.27,.09,-.3,-.38,.29,.45,-.32,-.11,.12,-.49,.41,-.23,.12,-.15,.25,.14,-.4,-.03,.13,.24,.07,.45,.35,.23,-.58,-.26,-.32,-.28,0,-.26,.43,.19,-.19,-.33,.82,-.12,.01,0,.58,.17,-.16,-.2,.37,.16,-.19,.17,.03,.02,.38,.45,.04,.08,.16,.36,.35,.46,.07,.55,.08,-.02,.04,.63,.65,.63,.07,.46,-.08,-.19,.28,.48,.46,-.13,.34,.5,.67,.58,.15,.75,-.1,.74,.74,-.15,.68,.34,.1,.05,.21,-.07,.24,.09,.32,.32,-.34,-.4,.65,-.06,-.33,-.05,.59,-.02,-.38,-.37,-.04,-.22,-.04,.34,-.14,.04,-.16,-.3,.17,.26,-.04,-.3,.11,-.26,.07,-.03,-.02,-.02,-.07,.26,.43,-.04,-.15,.07,-.12,-.19,.2,.32,-.1,.29,-.32,-.06,.03,.07,.44,.06,.27,-.27,.78,-.25,-.02,.65,-.04,-.16,-.04,.16,.24,.58,0,.06,-.26,-.07,-.25,.27,-.23,.07,-.11,.08,-.11,-.28,.2,-.08,-.07,.01,-.05,.03,.29,-.07,.77,-.37,-.13,.11,-.03,.08,.26,-.01,.41,.1,.1,.1,.6,-.05,.32,.57,.07,.03,.67,-.08,.18,.37,-.1,.01,-.03,.06,.04,.1,.16,.36,-.26,.24,.01,.33,-.34,.37,.21,-.07,.15,-.15,-.18,.47,.08,-.23,-.37,.2,-.05,-.2,.24,.32,.36,.1,-.14,-.16,-.24,.07,-.15,-.51,.12,-.09,.48,.38,-.05,.13,.31,-.11,.4,-.44,-.2,.31,-.22,-.05,-.22,.27,.2,.34,-.03,-.25,.11,.36,.01,-.14,-.09,.31,.01,-.44,-.14,.1,-.02,-.02,-.24,-.06,.04,.67,.02,.27,-.34,-.01,-.25,-.27,.09,-.09,.04,.12,.53,-.45,.19,-.25,.58,-.05,-.15,-.24,.09,.63,.47,-.4,-.32,-.14,-.15,-.29,-.07,.54,.12,.63,-.54,.64,.1,-.15,-.04,.01,-.29,.22,-.23,-.33,.03,-.26,-.22,.57,.48,-.36,.12,.26,.22,.23,.19,.12,.31,-.04,.12,-.07,.12,.21,.01,.3,.1,-.06,.04,.06,-.4,-.03,-.06,-.1,.38,.1,.5,-.2,.07,.01,.06,-.15,.19,.15,.66,.46,.08,-.01,.04,-.12,.07,-.14,-.11,-.16,.21,.01,.17,.72,.23,.41,-.07,-.36,-.47,-.15,-.28,.39,-.47,.37,.15,.25,.16,.2,-.18,.79,.05,.05,-.15,.11,-.39,.05,.06,-.28,-.05,.67,-.19,.32,.01,-.23,.38,.85,-.05,.29,-.03,-.21,.04,-.27,-.28,-.2,.42,-.1,-.41,-.24,.05,-.24,-.4,-.03,.24,.09,-.13,.1,-.04,.03,.33,.19,.38,-.42,-.36,-.46,.05,-.25,-.04,-.37,.17,-.31,-.27,.21,.54,.06,-.3,-.01,-.04,.25,.3,-.33,.03,.14,.63,.28,.51,-.18,.04,.09,.12,.08,-.14,.04,-.44,-.32,-.3,-.38,-.02,.06,-.16,-.07,-.41,-.23,.01,.07,.6,-.06,.72,.15,-.12,.29,-.07,.14,.11,-.09,-.1,.02,.1,-.29,-.46,.28,-.28,.86,-.43,-.07,.03,-.27,-.45,-.32,-.56,.28,0,-.2,.02,.24,0,-.37,-.04,-.33,-.07,.22,.28,.1,.16,.03,-.31,-.17,.26,-.35,-.21,.08,-.19,.1,.25,.06,.18,-.36,-.05,-.42,-.43,-.41,-.23,.17,-.17,.24,-.07,-.12,.38,-.03,.32,-.21,-.27,-.03,-.08,.3,-.48,.26,-.41,-.06,0,-.02,-.05,.04,.12,-.14,.45,.57,.68,-.19,.06,-.25,.63,.57,-.22,-.23,.06,-.02,-.27,-.01,.4,.06,.27,.09,-.16,.73,.48,.3,-.14,.05,.14,.61,-.09,.23,.16,.65,-.3,-.03,-.23,-.07,-.32,.58,.34,.44,.19,.15,.08,-.22,-.04,.34,.07,-.14,-.05,-.04,-.22,-.22,-.02,-.42,-.21,.42,.01,.02,.04,.19,-.25,-.42,.18,-.02,-.26,-.23,.2,.09,-.26,-.28,-.39,.67,.2,.36,.27,.19,0,.11,-.13,-.04,-.12,-.41,.37,.05,-.32,.25,-.05,.05,-.27,-.09,-.1,-.1,-.09,-.33,.32,-.02,.18,-.04,-.22,.03,-.05,.01,.28,.04,-.34,-.37,-.42,-.31,-.45,-.39,-.37,-.06,-.2,.22,.08,.23,-.25,.33,-.45,.02,0,-.18,-.29,-.21,.78,-.17,-.03,-.03,-.51,-.4,.65,-.08,.29,-.2,.13,-.38,-.02,-.25,-.46,-.01,-.35,.27,-.11,.45,-.02,-.35,.43,.06,-.46,-.14,-.29,.44,.38,.23,.23,-.46,-.15,-.28,.24,-.26,.1,.18,.06,.16,-.25,-.2,-.39,-.02,-.07,-.07,-.22,-.28,.8,-.2,-.41,-.06,.15,-.34,-.29,-.4,-.28,-.35,-.55,.15,-.25,-.27,-.33,-.26,-.42,-.32,.68,-.16,-.3,.5,-.04,-.34,.02,-.45,.76,-.06,-.16,-.02,-.33,-.16,-.18,.11,-.5,.68,-.35,.25,-.2,.08,-.18,.04,-.37,-.06,-.32,-.15,.13,.12,-.08,-.05,-.39,.07,.13,.19];export{a as rvalData};
