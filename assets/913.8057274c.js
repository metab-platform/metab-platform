const a=[.15,-.02,-.09,.09,-.21,.15,-.12,-.28,-.14,-.3,.21,.18,-.23,.12,.11,.06,.02,.11,-.01,.13,.04,.43,-.1,.27,.08,-.17,.44,-.17,.04,.51,0,.47,-.03,.01,.67,.08,.08,.18,-.3,-.22,.07,-.19,-.18,.05,-.19,.21,.2,.42,.64,-.62,-.34,.19,0,-.1,-.42,-.08,.03,-.13,-.29,.09,-.24,-.13,-.35,.02,.31,.57,-.13,.24,-.04,.04,-.11,.05,-.39,.2,-.13,.15,.3,-.26,-.08,.61,.14,.1,.05,-.12,.09,.6,-.1,.04,.11,.03,-.52,-.14,-.42,-.14,.16,-.13,.13,.33,.25,-.39,-.04,-.22,-.34,.12,-.48,-.03,-.03,-.08,.01,-.28,-.09,-.46,-.29,.06,.32,.04,.29,.62,.44,-.01,-.08,.18,-.09,.03,-.26,-.52,-.03,.26,.61,.06,-.33,-.09,-.01,-.63,.27,.13,-.48,-.31,.6,.19,-.24,.06,-.37,-.12,.11,-.12,-.05,.16,-.16,.11,-.2,-.35,.04,.11,-.41,-.31,.03,.2,.08,.13,-.47,-.32,.06,-.18,-.41,-.33,.14,.65,-.12,-.08,.14,.54,-.29,-.4,-.25,.8,.04,.47,-.4,.06,.03,.16,0,-.09,-.38,-.17,.14,.12,-.33,.12,.05,-.26,.14,-.45,-.31,.15,-.25,-.15,.13,.59,-.12,-.16,-.01,.11,.05,-.28,-.37,-.55,-.39,-.18,-.35,.28,.2,.15,-.09,-.06,-.11,-.32,.83,.23,-.14,-.4,-.09,-.03,-.13,.03,-.37,.72,-.19,-.44,-.21,.08,.04,-.12,-.23,.11,.23,.07,-.18,.05,-.41,.25,-.36,-.4,-.28,-.2,.11,-.24,.18,.03,-.26,.15,-.46,.22,-.17,.04,-.06,-.12,-.29,-.12,-.07,-.46,-.22,-.21,.1,-.45,.26,-.19,-.04,-.13,.38,.04,.03,-.25,-.07,-.1,.54,-.37,-.23,.61,-.57,.31,-.08,-.02,-.34,-.1,.36,.08,-.37,.57,-.14,-.53,-.14,-.18,-.28,-.17,.07,.28,-.21,-.38,.06,-.02,.5,-.16,.01,.03,.31,-.36,-.23,.07,-.21,.03,.08,.15,.19,-.39,-.56,-.53,-.25,-.37,-.24,.13,.16,-.16,-.59,-.4,-.08,-.02,.04,-.39,.17,-.09,.21,-.07,.24,.08,.6,-.07,.01,.49,-.46,-.13,-.18,.07,.04,-.1,-.2,-.43,-.24,-.4,-.31,-.43,.16,-.36,-.06,-.07,-.14,.16,-.25,-.09,-.06,-.15,-.33,-.06,-.02,.09,0,-.02,-.28,0,.54,-.19,-.3,-.04,-.09,-.23,-.16,-.26,.01,-.48,.12,.14,.12,-.14,.14,.11,.21,.13,.03,-.02,-.21,-.15,-.05,-.21,-.18,-.07,.42,.01,-.07,-.27,.15,-.11,-.18,-.3,-.35,.19,.14,-.17,-.22,-.01,-.27,.22,.1,-.24,-.14,.11,-.23,.09,-.57,.2,.05,.01,.61,-.17,-.06,0,-.01,.03,-.4,-.37,-.36,.01,-.03,.15,-.67,-.22,-.22,-.14,-.12,-.18,-.31,-.18,-.32,-.05,-.71,-.24,0,-.16,-.26,.34,-.19,-.4,.12,.02,.06,.13,.65,-.02,-.05,-.1,-.25,-.19,.07,-.34,-.03,.25,.03,-.06,.28,-.09,-.1,.04,.1,.12,-.58,-.04,-.18,-.34,.16,.43,-.35,.08,.04,-.39,-.64,-.12,-.33,-.06,.29,-.21,.05,.19,-.17,-.31,-.17,.05,-.6,.01,.11,-.25,-.33,-.08,-.25,-.18,-.2,-.02,-.01,.08,-.01,-.34,-.22,-.09,-.3,.11,-.67,.83,-.21,-.48,-.39,-.17,.21,-.1,.12,.08,.01,.17,-.14,.03,-.2,-.15,-.43,-.63,-.24,-.44,.12,-.02,-.39,.04,.04,.13,-.11,-.56,-.1,.4,.61,-.05,.13,.44,-.39,-.1,.36,.03,-.19,-.05,-.37,-.13,.31,-.37,.2,-.03,-.22,.53,-.32,-.16,-.17,-.17,-.11,.06,-.25,0,-.21,-.19,-.18,-.23,-.06,-.12,.07,.44,-.55,.13,.64,.03,-.35,-.1,-.48,.24,-.02,-.16,.6,.07,-.16,.01,-.08,-.22,-.25,.09,-.07,-.21,-.09,-.17,.19,-.18,-.15,-.29,-.14,.52,-.44,.37,.05,-.08,.04,.11,-.19,-.24,-.2,-.14,-.05,-.19,.11,.12,-.27,-.04,-.18,.04,-.27,.3,-.44,-.2,-.26,-.21,-.18,.07,.02,-.41,.08,-.43,-.01,-.54,-.13,.48,-.21,0,.53,-.07,-.08,-.23,-.08,-.29,.14,-.49,.15,.18,-.49,-.06,-.04,.03,.09,.13,.05,.06,-.05,-.19,.02,-.43,.1,.19,-.07,-.16,-.2,-.1,-.41,.2,-.03,.45,-.27,-.44,-.27,-.17,.13,.12,-.14,.1,0,-.17,-.1,-.01,-.04,-.22,-.12,-.06,.02,.19,-.11,-.12,-.03,-.16,.06,.02,-.41,.29,-.16,-.29,-.47,-.09,.17,.05,.05,.05,.05,.38,-.07,-.29,-.24,-.12,-.08,.07,-.23,.09,0,.15,-.28,-.15,.1,-.09,.15,.15,.08,.67,.24,-.22,.23,-.2,.01,.15,-.43,-.53,.1,.03,-.06,-.11,.32,.14,.59,.45,-.15,.12,-.32,.12,-.3,-.41,.22,.59,.14,-.21,-.07,-.17,.36,.41,.09,-.02,.14,.61,0,-.26,.37,-.13,-.19,-.11,.21,.08,-.1,-.22,-.07,.02,-.56,.14,-.34,-.31,-.03,-.59,-.03,.3,.16,-.18,-.12,-.28,-.36,-.23,.33,.54,.55,-.21,-.31,.18,-.11,.63,-.06,-.32,.28,-.31,-.21,-.14,.15,-.18,.12,-.12,-.18,.42,-.48,0,.09,.2,-.03,.52,-.17,-.35,-.04,.64,.18,-.02,.15,-.12,-.2,-.07,-.13,.05,.1,-.26,.19,-.04,.14,0,-.26,.06,-.03,.27,-.11,-.24,-.02,.61,-.18,.12,-.13,-.4,.52,-.19,-.08,.51,-.48,.14,.14,.7,-.38,-.05,.11,-.11,-.42,-.55,-.38,.5,-.4,-.15,.35,-.03,.02,-.43,.23,.21,-.42,-.4,.04,.24,-.25,-.55,-.15,-.54,.02,-.24,.06,.12,.45,-.09,.13,-.18,.03,-.18,-.21,.08,-.14,-.29,-.2,-.06,.05,-.38,-.04,-.07,.19,-.09,-.11,-.08,.11,.04,.07,.02,.17,-.08,-.09,-.54,.29,-.66,.04,.46,1,-.36,-.42,.19,.12,-.4,-.4,.01,-.13,-.02,-.12,.09,-.15,-.24,.01,-.08,-.05,-.52,-.26,-.21,.07,-.17,-.21,.07,-.37,.01,-.16,-.12,.35,.2,-.26,-.17,.21,-.17,-.33,.2,.13,-.07,-.36,.03,-.09,.37,-.49,-.08,-.12,-.13,-.23,.22,.02,.04,-.3,-.02,-.16,-.01,-.13,.02,.2,-.1,.25,.13,.27,.13,-.18,-.06,-.13,-.36,-.41,.07,-.18,-.4,.6,-.31,-.17,-.37,-.46,.2,.19,-.43,-.46,-.27,-.54,-.27,-.18,-.47,.03,-.09,-.06,-.06,-.08,-.03,.01,.06,.14,.31,.17,.08,.08,.2,.19,-.42,-.32,.41,-.07,-.21,-.21,-.14,.01,.1,-.3,-.19,-.21,-.46,-.19,-.33,-.15,-.06,.16,.14,-.47,.06,.06,-.3,-.2,-.4,.08,-.24,.06,.1,-.11,-.03,.22,-.11,.05,-.55,.12,-.03,.1,-.17,-.58,-.22,-.07,-.38,-.01,.18,.08,-.16,-.19,0,.38,.18,-.24,.21,-.62,-.3,.69,-.24,-.15,-.05,-.43,-.31,-.12,.09,.38,-.1,-.02,-.31,-.1,-.12,.17,.58,.03,-.01,-.32,.54,-.15,-.14,.44,-.13,-.06,.15,-.27,.56,-.14,-.39,-.19,-.13,-.09,-.06,-.12,.24,-.42,-.2,.07,-.2,-.07,.01,-.06,.34,-.04,-.47,-.39,-.1,.8,.24,-.13,.18,-.29,-.01,.37,.18,.35,.07,.2,.08,-.02,.21,-.45,-.08,-.35,-.11,-.15,-.11,.16,-.2,-.12,-.27,.11,.09,-.03,.72,-.13,.13,-.22,.11,.09,.06,-.21,-.06,.05,.28,-.33,-.18,-.01,-.5,.15,-.29,-.02,.09,.01,-.07,.22,-.49,-.01,.22,-.13,-.24,-.24,-.37,-.6,.27,.05,-.34,-.49,-.07,.08,.04,-.15,-.13,-.33,.05,.4,-.59,-.02,.19,-.11,.1,.02,-.06,-.09,-.01,.14,.32,-.01,.26,-.12,-.21,-.17,.38,.62,-.22,.03,-.13,-.28,-.3,.01,-.12,-.29,-.37,-.05,.18,-.07,-.39,-.01,-.2,.01,-.19,-.32,-.11,.15,-.24,.17,.12,.1,-.45,-.12,.45,-.2,-.41,.43,-.55,-.25,.08,-.17,-.08,-.22,.04,.02,.1,.11,-.11,-.05,-.01,.11,.07,.23,.05,-.21,.11,-.16,-.12,.05,-.44,.22,-.21,-.36,.07,-.3,-.24,.23,-.02,-.27,-.17,.14,-.38,.48,.65,-.38,.16,-.04,-.11,-.16,.32,-.26,-.26,0,.14,-.22,-.04,-.38,.18,-.09,-.54,.02,.18,-.06,.15,0,.09,-.41,-.11,-.18,-.35,-.39,-.3,.33,-.24,-.21,-.49,.01,-.23,-.26,-.1,.18,.12,-.28,-.32,0,.14,-.38,-.03,.06,-.43,-.03,-.17,-.43,.02,.05,.08,-.29,-.08,-.09,-.09,-.4,-.17,-.02,-.17,-.33,.4,0,-.07,-.42,-.25,-.07,.18,-.16,.1,.18,-.26,-.18,-.14,-.08,.32,-.04,-.05,.17,-.46,.21,.03,-.34,-.33,-.23,-.31,-.18,-.24,-.32,-.49,-.19,-.43,-.02,-.16,-.13,.01,-.36,-.17,-.32,-.56,.21,.13,.34,-.02,-.2,-.16,-.66,.16,.1,-.15,-.25,-.05,.26,.01,-.1,.13,-.31,-.13,-.36,.1,-.48,-.23,-.25,-.13,-.47,-.53,.06,.7,-.33,-.11,-.07,.13,-.49,.06,.21,-.16,-.23,.17,-.04,-.45,.25,0,-.14,-.15,-.04,-.16,-.15,.07,-.19,.36,-.12,.13,.18,.01,.51,-.23,.09,.04,-.07,-.1,.32,.08,.19,-.23,-.23,-.56,-.23,-.12,.04,.22,-.43,-.02,-.6,.17,-.33,-.24,.21,-.35,-.02,.17,-.16,.14,.18,-.26,.14,-.02,-.23,-.2,-.1,-.33,.43,-.12,.12,-.46,.21,.67,-.39,-.23,-.06,.11,.04,-.09,-.53,.06,-.09,.4,-.35,.07,-.38,-.12,-.44,-.07,-.26,-.09,.01,-.2,-.4,-.12,-.51,.04,.04,-.47,-.31,-.14,-.46,-.5,-.07,-.54,.08,-.04,-.09,.06,-.2,-.03,-.24,-.43,-.05,-.29,-.16,-.28,-.52,.1,-.1,-.1,.25,-.49,-.06,.06,-.27,-.14,-.31,.14,-.64,-.6,-.37,-.27,.06,.18,-.21,.18,0,.72,-.15,-.1,-.43,-.01,-.31,.01,-.61,.02,-.38,-.04,-.09,-.64,-.27,-.27,-.12,-.02,-.43,-.53,-.15,.13,-.22,.08,-.26,-.42,.17,-.58,-.2,-.05,-.11,-.33,.06,.17,-.26,-.32,-.31,-.53,-.07,-.66,.26,.1,-.18,-.32,-.08,-.21,.1,-.12,-.66,.58,-.48,.21,-.3,-.03,-.25,-.16,-.36,-.52,-.38,-.15,-.14,.05,-.27,.47,.48,-.44,-.23,-.49,.04,-.65,-.15,.08,.43,-.04,-.13,-.15,-.03,-.15,-.06,.22,.1,-.39,-.46,-.15,-.13,-.33,-.28,-.03,-.47,-.29,-.42,-.23,.04,-.15,-.12,-.39,-.18,-.61,.03,.04,-.18,-.24,-.03,.1,-.22,-.12,-.53,.05,-.64,-.27,-.19,-.24,-.21,-.22,-.19,-.21,-.23,-.56,-.12,.01,.14,-.25,-.51,-.22,-.01,-.44,-.17,.06,-.52,-.26,-.25,-.62,-.23,0,-.02,-.15,-.1,-.39,-.16,-.38,-.42,-.4,.06,-.46,.03,-.26,-.28,-.1,-.32,-.12,-.15,-.29,.01,-.11,.14,-.36,.4,-.59,-.24,.24,-.29,-.19,.01,-.69,-.09,.15,-.12,-.15,.04,.22,-.41,-.16,.26,.12,-.06,-.2,-.01,.13,-.06,-.12,-.14,.02,.31,.07,-.71,-.69,-.51,-.02,-.11,-.05,-.05,-.01,-.49,.54,-.33,.41,-.15,-.09,-.17,.18,.39,.07,.12,-.1,-.24,-.07,-.23,-.09,-.23,-.34,-.55,-.16,.13,-.24,.04,.05,-.22,.22,-.1,-.12,.08,-.01,-.03,-.42,.19,-.16,.32,.01,-.18,.09,-.05,-.02,-.42,.12,.11,-.12,-.02,.02,.02,.22,-.29,-.42,-.1,.02,-.07,-.13,-.24,-.1,.34,.33,-.09,-.06,-.07,-.17,.21,.02,-.18,.18,-.21,-.48,-.35,-.12,-.08,.12,-.26,-.34,-.34,-.31,.13,-.48,-.12,-.27,-.46,.81,-.1,-.27,-.14,.19,-.45,-.04,-.28,.13,-.3,-.18,-.07,.01,-.15,-.04,-.33,-.11,.12,-.06,-.49,-.01,-.27,-.04,.08,-.33,-.32,-.57,-.01,-.41,-.13,-.19,.01,.05,-.02,.11,.09,.24,-.31,-.1,-.15,-.14,-.18,.07,.19,-.56,.02,.16,.04,.27,-.08,-.04,-.53,-.14,-.58,-.11,-.38,.01,-.15,.37,.08,-.18,-.03,-.59,-.32,-.38,0,-.11,-.2,.15,-.21,.15,.04,-.29,-.48,-.55,.04,.01,.15,.05,.06,-.25,-.03,.03,-.28,-.18,-.02,.04,.06,.36,-.23,-.49,-.68,.03,-.11,.14,-.18,-.05,-.22,0,-.15,-.33,-.52,.05,-.22,-.16,.57,-.39,-.17,-.33,-.07,-.12,.2,-.29,.31,.08,.3,-.1,-.17,.05,-.2,-.38,-.13,-.44,.05,.19,.16,-.22,.29,.25,-.46,.08,-.08,-.07,0,-.12,.12,.08,-.57,.16,.06,-.12,-.09,.68,-.05,-.09,-.02,-.13,-.11,-.38,-.32,-.34,-.17,-.43,.76,0,.05,-.09,-.24,-.11,-.32,-.08,.19,-.01,.02,.01,-.33,.02,-.23,.23,.27,.01,.08,.01,-.08,-.38,-.1,-.41,.16,-.44,.07,.43,-.12,.1,.46,-.45,.09,-.36,-.06,.25,-.32,-.04,.2,-.18,-.58,-.11,-.32,-.18,-.22,.17,-.14,-.16,-.11,.11,-.3,0,-.16,-.3,-.3,-.1,-.04,-.11,-.1,.02,-.16,.03,.64,.03,.46,-.49,.21,-.05,-.12,-.16,-.07,-.25,-.15,-.29,.16,-.13,.08,.03,.11,-.02,-.08,-.14,-.27,-.16,-.21,-.17,.41,.09,.74,-.5,-.18,-.17,.01,-.19,-.33,.04,.47,.09,.5,.29,.09,-.35,.12,-.12,-.04,.07,.04,-.23];export{a as rvalData};
