const a=[.31,-.12,-.35,.04,-.33,.13,-.2,.5,-.14,.19,-.34,.09,-.08,.25,-.48,.16,-.24,-.05,-.01,.1,-.08,-.26,.04,-.6,-.42,-.37,-.4,-.04,-.21,-.45,.02,-.3,-.22,.22,-.39,-.09,-.42,-.55,-.08,-.11,.03,-.28,-.21,.13,0,-.34,-.3,-.11,-.31,.22,-.06,.14,-.07,-.56,.35,-.41,-.2,.3,.02,-.39,.15,-.09,-.34,.19,-.03,-.21,-.32,-.58,.07,-.04,-.02,-.15,.27,.03,-.35,-.04,-.09,.21,-.42,-.28,.13,-.41,-.01,-.31,.11,-.34,-.35,-.05,.33,-.46,.41,.07,.07,.65,-.05,.06,.26,.08,.2,.17,.05,-.38,.03,.07,.03,-.13,-.19,-.38,-.34,-.1,-.03,.34,.07,.41,.04,-.45,-.42,-.18,-.09,-.32,-.01,-.11,.03,.12,.37,-.04,-.27,.15,-.14,-.43,.45,.43,.03,.45,-.26,-.01,.6,-.02,-.33,.09,-.15,.08,-.1,-.34,.12,.19,0,.27,-.25,-.08,-.41,.27,-.14,0,.43,.38,.08,.14,.05,-.55,.66,-.1,-.05,.17,.05,.29,-.09,-.26,.2,-.39,.17,-.16,.53,.79,-.05,-.39,-.14,-.49,.36,-.4,-.3,-.03,.15,-.35,.21,.02,-.04,.11,.39,.19,.09,.27,-.16,-.07,-.02,-.43,-.15,-.21,.01,-.1,-.38,-.2,-.42,.05,.24,.11,.32,.31,.2,.01,.49,-.52,.09,-.49,.26,-.03,-.08,.32,-.41,-.2,-.07,.04,-.14,-.5,-.01,-.43,.51,-.31,.19,.41,.18,.08,-.42,-.38,-.27,.12,-.45,-.34,.14,-.06,.48,-.64,.44,.73,.17,.39,-.09,.23,.02,.07,.29,0,.34,.1,-.16,-.11,.01,-.08,.17,-.4,-.08,.45,-.14,-.15,.3,.03,-.06,-.24,.19,-.19,-.05,.31,-.36,-.36,-.32,.06,-.48,.38,-.37,-.29,.59,-.24,-.46,.28,.3,-.24,-.38,-.4,.14,-.26,.37,.35,-.27,.31,.06,-.21,-.1,0,.09,.13,.04,-.36,-.22,.11,.08,-.01,-.15,.05,.33,-.17,-.19,.04,-.19,.09,.05,.13,.08,.38,-.36,.09,-.25,.11,-.52,-.38,.39,.29,-.24,.4,.06,.24,.3,-.05,.11,-.08,-.17,-.14,-.16,.1,.26,-.27,.17,-.23,.08,-.08,-.52,-.3,-.02,.48,-.19,.51,-.16,.74,.12,.28,.27,-.53,.27,-.13,-.33,-.35,-.26,-.06,.31,-.36,.07,.22,.21,-.43,.23,.06,-.43,.11,-.19,.08,.27,.15,.02,-.27,.02,.41,-.01,-.04,-.02,.05,.02,.03,-.11,-.01,-.24,-.2,-.31,-.13,-.01,.28,.27,-.38,-.17,.03,.44,.28,.04,.29,-.29,-.23,.42,-.09,-.54,-.27,-.28,-.16,-.4,.16,.53,-.35,.35,.15,-.19,-.45,.6,.01,.06,-.52,-.08,-.2,-.32,-.45,-.29,-.08,.43,.66,.4,.07,-.29,.1,.5,-.49,.2,-.27,-.42,-.03,-.08,-.23,-.06,.02,.15,-.02,-.37,-.2,.02,.11,-.12,.07,.31,.16,-.09,.21,-.45,-.38,.26,-.09,-.44,-.16,.35,.36,.21,-.12,.17,.02,.34,-.55,-.38,-.44,-.08,.05,.47,-.37,-.26,-.04,-.38,-.24,-.13,-.53,-.21,-.02,.26,.23,.09,.43,-.11,-.3,-.09,.07,-.17,.46,-.23,-.47,.32,-.08,-.19,.6,.39,.33,-.19,-.36,-.3,.17,.2,-.35,-.34,.3,-.2,.29,-.15,.19,.21,-.16,.53,.23,.41,-.39,-.12,-.33,-.02,.09,-.11,.13,.1,.02,-.05,-.09,.33,.34,.11,.6,.22,.15,.25,-.19,.33,0,-.19,.38,-.14,-.44,-.17,.23,.34,-.46,-.29,-.04,-.33,-.43,-.38,-.37,0,-.03,.07,.61,-.07,.18,-.34,-.27,.31,.33,.13,.1,.14,-.23,.56,-.14,-.22,-.41,-.18,.56,-.29,-.39,-.13,.1,.44,-.27,-.17,.15,-.1,.2,-.01,-.6,-.38,-.18,-.06,-.43,.1,-.17,-.08,-.21,.37,.38,-.35,-.35,.11,.22,-.18,-.38,-.3,.26,-.16,-.44,.59,-.1,-.03,-.05,-.06,-.4,-.01,.29,.09,.06,-.37,.39,.03,.21,.17,.35,-.02,.01,.3,.18,.09,.31,-.18,.42,-.01,.15,.06,.37,-.21,-.06,-.36,.66,.25,-.34,.18,-.29,-.11,-.06,-.25,-.15,.45,-.32,-.18,0,.16,.36,.49,-.44,-.38,.11,-.56,-.13,.02,-.01,-.34,-.24,-.35,.43,-.26,.07,-.07,.24,-.25,-.33,-.29,.04,.03,-.42,.14,.73,-.2,-.45,.38,-.08,.08,.23,-.11,-.31,.27,.12,.17,-.28,-.34,.34,.1,.21,.27,-.07,.19,.01,0,.12,-.26,.19,-.25,.25,-.02,-.3,.13,-.12,.08,-.41,.18,-.47,-.39,.64,.3,.12,.13,-.05,-.05,.1,.03,-.02,.24,-.23,-.42,-.01,-.39,-.42,.04,-.33,.23,-.34,.22,.26,-.22,-.11,.11,.62,-.46,.13,-.11,0,-.49,-.2,-.27,-.46,.01,.25,-.18,-.45,.25,.22,.19,-.28,.01,.24,-.37,-.03,-.18,-.46,-.17,-.15,-.42,-.32,-.43,-.18,-.49,-.61,-.28,-.01,-.09,.05,.51,.41,-.32,.12,.46,.13,.01,.34,-.33,.36,-.34,-.1,.16,-.22,-.34,-.08,.34,.32,.06,-.36,-.19,.32,-.13,-.58,-.38,-.3,-.43,-.05,.16,.08,.02,-.15,0,-.34,-.3,-.15,-.08,.14,.48,-.05,.07,.22,-.18,-.07,-.09,.48,.24,-.3,-.06,-.36,.07,-.08,.36,-.48,-.14,-.48,.1,.29,.09,-.04,.23,-.42,.25,.14,.04,-.16,-.22,.17,.03,-.27,-.02,-.42,-.04,.57,-.27,-.39,-.38,-.23,.1,-.01,.1,-.34,-.13,-.11,-.07,-.04,.44,.46,.13,-.28,-.11,-.42,-.2,.12,.26,.6,-.04,.12,.46,.57,.35,.07,-.02,.46,.24,.49,-.27,.13,.03,.13,-.31,-.28,-.01,-.3,-.47,.19,.2,-.14,-.13,.37,-.29,.18,.07,.2,-.16,-.02,.1,.11,-.15,-.43,-.07,.14,.06,-.16,.09,-.28,.06,.56,.02,.58,.17,-.48,-.31,.58,-.13,.09,.14,.5,.62,-.01,.26,-.21,.32,-.32,-.15,-.33,.22,-.43,-.25,.37,.3,-.27,-.43,-.3,-.22,.37,.32,.15,-.17,-.34,.01,-.02,.26,-.24,.42,-.06,.3,-.32,-.11,-.04,.39,-.23,.18,-.17,.45,-.13,-.32,.17,-.27,-.06,-.36,-.34,.42,-.06,-.12,.12,.09,.3,.21,-.05,-.21,.3,-.65,.3,-.32,-.22,.07,.19,.43,-.27,-.5,.58,-.22,.28,.11,.37,.67,.12,.1,.06,.05,.54,.44,.42,.1,.52,-.15,.19,-.06,-.16,.18,.11,.01,.3,.16,-.41,.2,.1,-.05,.13,-.06,.11,0,-.32,.07,.21,-.02,.35,.32,-.13,-.28,-.08,.13,.28,-.07,.14,-.2,.02,.03,0,.54,-.11,-.08,.25,.06,.12,-.45,.3,-.22,-.13,.49,-.44,-.54,.17,.03,.48,.12,-.01,.03,-.29,.23,-.21,-.02,.22,-.25,-.14,.18,.16,.24,-.36,-.3,.17,.26,-.48,.39,.14,-.28,-.31,-.3,.17,.41,.38,.11,-.36,-.02,-.04,-.51,.54,-.02,-.47,.01,-.3,-.08,.02,.3,-.26,0,.17,-.26,-.29,-.26,.47,-.38,-.2,-.35,-.21,.36,.15,-.37,-.32,.38,-.05,.73,-.22,-.3,-.08,-.19,-.15,-.22,-.03,-.13,.38,.29,-.04,-.13,-.26,.22,-.48,.32,-.35,-.07,-.62,.09,-.11,-.13,.14,-.01,-.6,.44,-.08,.55,-.22,-.46,.08,-.15,-.28,-.36,.44,.11,.22,-.37,-.22,-.1,-.08,-.18,.12,-.43,-.24,-.22,.26,.03,.2,.36,-.27,-.15,.4,.08,.38,.18,.08,-.31,-.06,.16,.37,-.35,.06,-.47,-.34,-.31,.2,.45,0,.07,.24,-.04,-.2,-.5,-.04,-.26,0,.6,.11,-.09,.55,.15,-.02,-.43,-.49,.07,-.4,-.18,.38,.24,-.17,-.42,.02,.19,-.37,-.18,-.12,-.16,-.17,.17,-.4,.21,-.13,.21,-.37,-.25,.5,-.37,-.05,-.09,.7,-.27,.17,-.03,-.26,-.29,.34,.11,-.19,-.28,.13,.09,.43,-.01,-.31,.22,.44,-.24,.57,-.3,-.08,-.31,-.35,-.42,.06,.13,.12,-.45,-.34,-.39,.18,.12,.07,.1,-.09,-.09,.26,-.38,.25,.26,.47,.07,0,-.03,0,.48,-.24,.31,-.35,.05,.55,-.28,-.01,-.33,-.3,.13,.15,-.58,.08,-.29,-.66,-.03,.45,-.32,.25,.57,-.03,.02,.2,-.48,.28,-.05,.13,-.34,-.25,-.03,.21,.23,-.26,-.24,.08,.68,.3,-.13,-.22,-.17,-.03,-.37,-.12,.16,-.12,-.21,-.58,.32,.55,-.42,-.14,.01,-.25,.41,.18,.14,-.07,.39,-.22,-.43,.07,.1,.12,.08,.44,.39,.2,-.38,-.29,-.25,-.18,-.09,-.31,.62,.21,-.07,0,.55,-.02,-.17,-.09,-.06,.06,-.16,-.41,-.21,-.06,-.24,.1,.05,.15,.29,.11,-.26,-.28,-.06,.12,.35,.32,.3,.32,-.2,-.18,-.1,.14,.47,.25,-.18,.41,-.25,-.46,.01,-.06,.11,-.5,.26,.16,.4,.6,.15,.36,-.23,.35,.32,-.1,.26,-.19,-.17,0,.14,-.36,.31,-.21,.39,.23,-.42,-.51,.61,.03,-.3,.05,.55,.04,-.27,-.35,-.34,-.58,0,.39,-.1,.3,-.11,-.18,.16,.21,.34,-.51,.2,-.18,.02,-.01,-.42,.23,-.11,.32,.1,-.05,-.27,.13,-.22,-.45,.04,.25,-.41,.34,-.29,-.32,.24,.21,.34,-.09,.3,-.53,.71,-.3,-.03,.31,.11,.03,-.04,-.3,.33,.64,-.18,-.32,-.41,-.28,-.12,.32,-.24,.07,0,.27,-.15,-.29,.19,-.36,.08,.27,-.19,-.22,.41,.18,.46,-.26,-.2,.26,-.1,-.23,.18,.02,.25,-.35,-.1,-.12,.45,-.4,.27,-.03,-.07,.16,.6,-.24,.08,.19,.12,.13,.05,.02,-.04,-.33,.34,.12,-.37,.31,.12,.02,-.4,.11,.32,-.3,-.45,-.35,-.2,.19,.03,-.32,-.26,.23,-.19,-.47,.46,.37,.27,.1,-.28,-.09,-.14,.03,-.02,-.3,.26,-.2,.15,-.07,-.29,0,.43,-.18,.18,-.34,-.19,.46,-.33,-.18,-.11,-.03,.37,.33,-.11,-.39,-.05,0,-.17,-.27,.04,.36,-.18,-.4,-.19,.06,-.11,-.08,-.37,-.07,.01,.49,-.08,.17,-.63,-.03,-.21,-.33,-.24,-.2,.12,-.29,.29,-.26,-.04,-.59,.76,-.07,-.32,.03,-.21,.21,.19,-.26,-.27,-.36,-.29,-.22,-.16,.3,-.05,.6,-.47,.37,-.01,-.41,.04,-.06,-.09,-.12,-.6,-.33,.09,-.08,-.34,.02,.17,-.26,.1,.03,-.17,-.12,.3,-.1,.04,-.23,.13,-.33,.17,.16,-.11,.28,.01,.02,-.01,.17,-.45,-.09,-.28,.12,.08,.04,.37,-.35,-.31,-.08,-.3,-.26,.26,.02,.41,.42,-.24,-.03,.09,-.22,-.1,-.24,.15,-.29,.31,-.12,.01,.32,-.05,.51,-.12,-.36,-.33,-.1,-.11,.53,-.4,.12,-.13,.2,.26,.04,-.19,.63,-.18,-.03,-.15,-.06,-.34,-.17,.02,-.29,-.08,.25,-.38,.25,.1,-.44,.17,.36,-.09,.14,.09,.1,.07,-.12,-.31,-.55,.62,-.13,-.62,-.44,-.37,-.35,-.36,-.12,.15,.29,-.31,-.05,-.06,-.06,.28,.16,.29,-.39,-.38,-.3,0,-.48,-.09,-.26,-.16,-.44,-.2,-.39,-.09,.22,-.31,-.05,.06,-.01,.35,-.43,.11,-.29,.62,.11,.3,-.27,.18,.16,.17,-.02,-.34,-.02,-.36,-.12,-.22,-.2,-.13,-.14,-.23,-.32,-.32,-.04,.13,-.12,.32,.14,.33,.06,-.23,.28,-.13,-.05,.06,-.01,-.08,-.12,.05,-.49,-.4,.37,-.34,.37,-.32,0,-.01,-.38,-.4,-.41,-.44,-.1,-.3,-.27,-.1,.19,.22,.02,-.36,-.25,-.34,.15,.17,.17,-.29,-.17,-.25,-.22,.47,-.45,-.38,.13,-.32,-.07,.2,-.04,-.26,-.42,-.23,-.28,-.42,-.48,-.28,.05,-.14,-.05,.03,-.31,.51,.09,.39,-.35,-.43,-.11,.04,.37,-.29,.26,-.36,-.19,.17,-.02,0,.11,.19,-.4,1,.04,.21,-.26,.04,-.23,.18,.79,-.32,-.19,.06,.21,-.39,.02,.51,-.29,.36,-.07,-.12,.36,.76,.16,-.12,-.3,-.06,.78,-.1,.18,-.27,.1,-.36,-.05,-.37,-.1,-.4,.18,.27,.33,-.06,-.27,0,.04,.14,.48,.03,.22,-.24,-.32,-.21,-.29,.13,-.29,-.08,.28,.21,.13,.06,.07,-.36,-.33,.1,-.27,-.27,-.14,.36,-.16,-.32,-.37,-.35,.69,-.15,.21,-.13,-.07,-.15,-.19,-.23,.11,-.08,-.32,.13,-.17,-.26,.35,-.11,-.17,.04,.06,-.03,-.38,.08,-.45,.45,-.01,.22,-.24,-.59,.02,.11,-.01,.36,-.09,-.43,-.42,-.31,-.3,-.38,-.41,-.38,-.23,-.27,.02,.31,.14,-.33,.37,-.41,.2,.18,-.1,-.41,-.27,.69,-.48,-.17,-.21,-.42,-.35,.2,.3,.09,-.01,.15,-.29,-.14,-.36,-.39,-.21,-.41,.2,-.12,.14,-.18,-.48,-.05,-.11,-.5,-.31,-.51,.32,.29,.2,.15,-.41,-.13,-.36,.34,-.38,.1,.08,-.3,.26,-.37,-.14,-.43,-.02,-.31,.07,-.24,-.14,.26,.04,-.33,-.31,-.36,-.38,-.33,-.49,-.21,-.39,-.58,.17,-.12,-.4,-.39,-.48,-.38,-.43,.59,-.12,-.56,.23,.24,-.45,.13,-.39,.45,.08,-.13,-.15,-.4,-.4,-.17,-.17,-.44,.66,-.41,.43,-.27,-.19,-.23,.24,-.42,-.05,-.17,-.29,.06,-.24,-.04,.49,-.39,.21,-.17,-.03];export{a as rvalData};
