const a=[.25,-.3,-.38,0,-.42,.4,-.06,.15,.03,-.43,.14,.08,-.01,.34,0,-.12,-.1,.03,-.06,.07,.18,.44,-.05,.07,.04,-.25,.35,.03,.07,.3,-.1,.57,-.21,-.13,.46,-.05,-.29,-.1,-.23,-.33,.14,-.34,-.08,-.02,-.28,-.07,.11,.76,.53,-.3,-.1,.04,-.31,-.34,-.19,.01,.27,-.06,-.34,-.1,-.15,-.24,-.43,.01,.41,.13,-.3,-.06,.13,-.14,-.07,-.19,-.14,.1,-.45,.04,.19,-.21,-.4,.47,.23,-.01,0,-.25,.22,.42,-.09,.03,.34,-.28,-.14,-.02,.05,.05,.12,.3,.31,.14,.38,-.19,.04,-.37,-.19,.09,-.27,-.05,-.05,.01,0,-.33,-.01,-.2,-.12,.24,.46,-.29,.17,.35,1,-.01,-.13,.17,-.01,.13,.01,-.22,-.37,.5,.03,-.29,.13,.33,-.02,-.32,.08,.3,-.12,-.21,.25,-.05,-.32,-.09,-.35,-.11,.07,.02,.08,.28,-.14,.2,-.36,-.07,.05,.11,.09,.06,.08,.15,.09,.02,-.16,-.38,-.11,-.18,.05,-.24,0,.36,.33,-.14,.14,.35,-.04,-.01,-.17,.42,.18,.27,-.23,-.23,.12,.22,-.09,-.49,-.27,-.01,.01,-.09,-.24,.16,.03,-.01,-.07,-.16,-.3,-.19,-.28,-.24,.07,.5,-.24,-.01,-.29,.06,.43,-.07,-.06,-.21,0,-.07,.02,-.03,.08,-.16,-.05,.03,-.11,.04,.38,.22,-.18,-.16,-.13,-.27,-.1,-.32,-.03,.38,-.06,-.29,-.15,.14,-.06,-.45,-.27,.1,-.04,.02,-.18,-.08,-.32,-.06,.22,.05,.04,.1,-.05,-.19,-.08,.07,-.11,.28,-.22,.3,-.34,.08,-.02,-.08,-.29,-.55,-.19,-.14,-.08,-.34,.31,-.23,.26,-.23,-.01,-.23,.2,.03,-.26,-.51,-.37,-.15,.22,-.25,-.24,.53,-.22,.16,-.26,.08,-.1,.06,.22,-.18,-.25,.53,.16,-.23,-.07,.07,.08,-.1,.02,.24,-.14,-.15,.14,-.33,.39,-.24,-.06,.02,.54,-.36,.09,.04,-.31,.08,.06,.07,.1,-.14,-.42,-.12,-.51,-.33,-.29,.19,-.1,-.28,-.34,-.07,-.1,-.06,.37,-.1,.29,-.16,.24,-.21,.32,-.08,.21,.04,.26,.65,-.18,-.12,.12,.05,-.33,-.33,-.12,-.24,-.08,-.08,-.26,-.1,.11,-.05,.01,-.26,-.26,.08,-.39,-.52,-.07,-.17,-.06,.08,.28,.2,-.15,-.33,-.2,-.17,.34,.02,-.08,.41,-.23,-.09,-.11,-.25,-.09,-.13,.07,.05,.01,-.21,-.01,.04,.09,.01,-.11,-.13,-.4,-.1,-.08,-.05,-.01,-.33,.56,-.1,-.12,-.03,.2,.17,-.43,.01,-.23,.04,-.11,-.34,-.34,-.15,-.5,.21,.23,-.4,.02,-.05,-.37,-.07,-.24,.44,.04,-.22,.31,-.15,.04,-.24,-.22,-.23,-.12,.07,.21,.41,.01,.13,-.31,-.51,0,-.14,-.31,-.23,-.35,-.29,-.38,.06,-.53,.05,-.28,-.14,.04,.28,.12,-.33,.29,.26,.14,.36,.6,-.34,.1,-.08,-.55,-.13,.37,-.26,-.04,.27,-.02,.2,.22,-.34,-.04,-.33,-.07,-.06,-.11,.06,-.13,-.02,-.22,.29,-.3,-.26,-.36,.06,-.61,.2,-.23,.09,.17,-.49,0,.08,.24,-.08,-.4,-.2,-.45,-.13,-.01,.16,-.14,-.16,-.34,-.12,-.42,.19,.28,.13,-.15,-.33,-.37,.12,-.44,.18,-.52,.49,-.21,.03,-.25,-.28,.15,-.33,.32,.04,-.08,.1,.08,-.35,-.06,-.05,-.15,-.39,0,-.14,.12,-.04,.03,.19,.24,.12,.07,-.18,-.05,.22,.5,.07,.05,.24,-.57,-.06,.18,-.31,-.37,-.48,-.28,-.17,.29,.06,-.03,-.04,-.6,.25,.01,.15,-.21,-.2,0,-.08,-.22,.11,-.48,-.47,-.27,-.01,-.33,-.39,.1,.47,-.35,-.01,.52,.05,-.4,.17,-.28,-.07,-.29,-.38,.3,-.31,-.11,.14,0,-.4,.09,.22,-.1,-.45,-.08,-.03,0,-.45,-.43,-.09,-.36,.31,-.08,.86,-.06,-.07,-.07,-.22,-.06,-.01,-.09,-.11,-.3,.11,-.17,.15,0,.16,.28,0,.18,.23,-.18,-.04,-.34,.11,-.07,.25,.15,-.29,.11,-.34,.05,-.1,.11,.5,-.05,-.1,.62,.1,-.23,-.3,.22,-.32,.09,-.28,.14,.31,-.02,-.28,.06,.08,-.26,-.11,.05,.09,-.32,-.12,-.31,-.11,-.02,.05,-.13,.16,-.03,-.29,-.06,.17,-.07,.3,-.19,-.01,-.26,-.42,.3,.08,-.1,.22,-.07,-.2,.14,.04,.32,-.32,-.07,.26,0,.13,.24,-.04,-.11,.16,-.13,.03,-.54,.34,-.3,.03,-.06,-.42,.24,-.11,.25,-.06,.06,.37,-.18,.1,-.25,.22,-.16,.05,.24,.08,-.05,.15,.09,-.28,-.25,-.06,-.03,-.07,.15,.48,.22,-.5,.36,-.14,-.13,-.09,-.08,-.13,-.26,.12,.06,-.05,.26,.05,.72,.25,-.13,.28,-.08,-.25,-.01,-.39,.14,.67,.28,.03,-.47,0,.51,-.03,.1,-.02,-.09,.27,0,-.29,-.02,-.37,-.4,-.01,.06,.23,.13,.12,-.34,.04,-.13,.24,-.25,.13,-.26,-.23,-.33,.41,.07,-.37,-.48,-.35,-.2,-.21,.37,.43,.57,.25,-.28,-.12,-.17,.28,-.33,-.36,.38,-.21,.12,-.15,.02,-.38,-.23,-.04,.11,.33,-.19,-.02,.08,.06,-.15,.59,-.12,.09,.16,.46,-.12,-.23,-.03,.09,.14,-.17,-.05,-.32,.09,0,.09,.08,.1,-.3,-.05,.07,-.1,.25,-.17,-.09,-.05,.48,-.01,-.02,-.04,.11,.4,-.52,-.04,.49,-.17,.17,.23,.43,-.09,.09,.08,.13,-.09,-.24,.08,.72,-.2,-.35,.49,.13,.25,-.21,.18,.3,.03,.14,.43,.15,-.12,-.13,.19,-.18,-.01,.04,.25,.06,.19,-.06,.05,-.38,-.34,-.2,-.04,.2,-.32,.04,-.35,.17,.13,-.2,-.3,-.28,.18,-.17,-.33,-.31,.41,-.02,.04,.03,.13,.09,-.08,-.12,.12,-.1,-.08,.27,.44,-.12,-.52,.3,.24,.06,.12,.02,.24,-.02,.06,-.17,-.32,-.44,-.06,-.33,-.39,-.21,-.03,-.46,-.21,-.32,-.27,.32,-.3,-.03,-.25,-.34,.1,.43,.01,-.18,.14,.02,.12,-.2,-.03,-.1,.2,.21,.23,.55,-.07,-.2,-.33,.09,-.36,.53,.01,.18,.02,.16,-.29,-.18,.02,.16,.35,-.01,-.09,.46,-.01,.33,-.23,.08,-.09,-.1,-.15,.06,-.37,.02,.35,.02,.21,.15,-.03,.14,.18,-.27,-.2,.08,-.19,.04,-.26,.01,-.17,-.08,-.07,.09,-.13,-.02,-.17,-.09,-.04,.06,.11,-.16,-.12,.16,.13,-.19,.24,.15,.44,.06,.06,.21,.23,-.06,-.37,.05,-.29,-.23,-.1,0,-.2,.03,.02,-.12,-.12,.06,.16,-.1,-.03,-.18,-.17,.24,-.13,.03,.26,-.29,.24,-.21,.06,-.11,.18,.14,.07,-.3,-.03,-.02,-.18,.06,.03,.35,.17,.03,.19,.01,.2,.21,-.08,-.03,-.51,.15,.34,.01,-.37,-.15,-.14,-.28,-.03,-.37,.4,-.01,-.42,.12,-.21,-.38,.05,.65,-.07,-.04,-.14,.08,-.23,.02,.44,-.05,-.07,.05,-.37,.57,-.48,-.38,.14,.22,-.15,-.06,.27,.26,-.11,.02,-.24,.05,-.23,.05,-.05,.3,-.07,-.32,-.34,-.1,.47,.17,.01,-.02,-.13,-.21,.36,-.13,.19,-.09,.37,.13,0,-.14,-.15,.06,-.03,-.18,-.39,-.02,.16,-.44,-.06,.12,.08,.39,-.19,.47,.03,.15,-.36,.07,-.05,-.23,-.25,-.07,-.06,.47,-.28,-.33,.09,-.04,.08,.18,-.01,.06,.01,-.08,.08,-.24,.05,.15,-.36,-.29,-.46,-.1,-.36,.09,.16,-.07,-.33,-.1,-.28,-.03,-.16,-.13,.09,.06,.24,-.43,.02,-.01,-.36,-.24,-.05,-.47,-.02,.3,.5,.39,-.2,.35,.17,-.38,-.34,.33,.51,-.03,.04,-.35,0,-.36,.49,-.46,-.61,-.02,-.31,-.04,-.11,-.13,-.21,0,.17,-.28,-.55,.18,.31,-.33,.08,.06,.07,-.13,-.05,.24,.08,-.15,.01,-.23,-.35,.13,-.46,-.08,-.32,-.01,-.03,.05,-.23,-.34,-.34,.07,.06,.05,.1,-.04,-.09,.17,-.23,0,-.07,-.15,.06,.03,-.18,.09,.28,-.29,.43,-.23,.04,.18,-.01,-.29,.29,.33,-.18,.14,-.35,-.04,-.26,.27,-.2,.08,.08,.31,.16,.13,-.32,.39,.09,-.08,.17,.03,-.31,-.03,-.1,.03,-.43,-.17,-.42,-.31,-.06,-.02,.54,-.35,-.04,-.55,0,-.04,-.07,-.03,.14,-.24,-.26,.09,-.32,0,-.49,-.26,.38,-.27,.25,.03,-.4,.08,-.3,-.08,-.16,.39,-.05,-.26,-.03,.02,-.51,-.41,-.37,.3,-.1,-.21,-.07,.07,-.08,.25,.19,.12,.12,-.2,.14,-.01,.09,.21,.15,-.02,-.13,-.21,.12,.16,-.16,-.08,-.21,-.11,-.07,-.06,-.25,-.19,.19,-.02,-.02,-.21,-.04,.43,.1,.28,-.3,-.12,.29,.25,.62,.33,.08,-.36,-.16,.41,.41,.16,-.11,.36,.12,.38,.33,.07,.04,-.1,-.22,.01,-.29,-.29,-.07,-.02,-.04,-.26,-.28,.4,.1,-.08,-.34,.22,-.11,.01,-.15,-.41,-.1,-.1,.18,-.3,.11,.02,-.23,-.34,-.04,.2,-.16,-.23,.01,.15,-.02,.02,.4,.01,.39,-.08,.18,-.09,-.24,-.13,.04,-.06,.25,-.13,-.37,-.27,-.38,-.11,.06,.3,-.22,-.04,-.32,-.14,.12,-.34,.03,.18,-.06,.16,-.05,.1,.24,.17,-.06,0,-.43,-.07,-.06,-.27,.4,.06,-.03,-.11,.24,.29,-.18,-.32,.01,-.08,-.24,-.01,-.07,.15,.31,.36,-.39,.18,-.29,-.01,-.24,-.12,.15,-.17,-.11,-.19,0,-.12,-.27,.28,.03,-.1,.13,-.28,.02,-.34,-.03,-.25,-.25,.03,-.15,-.1,.14,.16,-.5,-.13,.16,-.07,-.32,-.02,-.15,.21,-.13,-.17,.19,-.17,.02,.01,-.4,.01,-.2,.16,-.19,-.21,-.1,-.27,-.13,-.04,-.28,.18,-.06,.39,.24,-.11,-.21,.16,-.38,-.06,-.22,-.03,-.37,-.29,-.15,-.09,-.52,-.38,-.24,.14,-.02,-.35,-.24,-.15,-.19,.39,-.26,-.56,.03,-.21,-.18,-.27,-.14,-.34,-.13,-.02,-.47,-.33,-.18,-.17,-.19,-.53,-.03,.18,-.28,-.53,.05,-.22,.04,-.08,-.21,.21,-.33,-.11,-.05,-.01,-.34,-.33,-.37,-.17,-.06,-.34,-.34,-.21,-.47,.75,.22,-.2,-.07,-.05,-.17,-.33,-.23,.01,.14,-.11,-.19,.11,-.33,-.41,-.06,.23,-.34,.07,-.14,-.38,-.09,-.1,-.11,.1,-.28,-.28,-.22,-.23,0,-.27,-.14,-.21,-.1,-.41,.01,-.02,-.23,-.11,-.39,.17,-.13,-.23,-.24,.04,-.43,-.39,.04,-.23,.03,-.28,.18,-.03,.03,-.24,0,-.02,.3,-.18,-.5,-.29,.27,-.58,.18,-.08,-.46,0,-.24,-.15,-.19,-.29,-.31,-.24,-.24,-.31,-.48,-.1,-.36,-.15,.26,-.22,-.04,.24,-.24,-.18,-.43,-.19,-.45,-.21,.16,-.32,.06,.02,.42,-.44,-.31,-.05,-.03,.12,-.07,-.51,.35,.12,-.06,-.29,-.26,-.02,-.15,-.29,.04,.07,-.22,-.14,-.23,.05,.08,.25,-.07,.12,.28,.14,-.5,-.5,-.42,-.29,-.47,-.42,.19,-.22,-.6,.35,.02,.24,-.39,-.09,.11,.29,.32,-.15,.11,.25,-.11,-.44,-.52,.02,.14,-.11,-.29,-.18,.13,-.03,.03,-.15,-.38,.18,-.39,-.16,-.12,-.25,.04,-.52,.14,-.28,.11,-.26,-.18,.16,.33,-.09,.03,.27,.04,.1,-.05,.19,-.02,.1,-.26,-.35,-.12,-.28,-.33,.21,-.5,.34,.14,.26,-.15,-.25,-.33,-.36,-.09,-.05,-.05,.08,-.09,-.29,-.19,-.1,-.2,-.2,-.15,-.29,-.21,-.18,.22,-.47,-.39,-.47,-.15,.36,-.03,.14,-.25,.54,-.26,.16,.09,-.21,-.3,-.47,-.35,-.31,-.34,-.12,-.34,-.12,.01,-.14,-.01,.05,0,.07,-.11,-.23,.06,-.21,-.12,-.19,-.39,-.2,-.05,0,-.01,.04,.14,.06,-.09,.25,.31,-.16,-.11,-.07,.4,-.22,.09,-.04,.15,.32,-.4,-.04,-.02,-.07,-.26,-.16,-.42,.38,.1,.23,-.12,-.03,.06,-.31,-.29,-.18,-.05,.21,-.48,.46,-.25,.1,-.31,.05,-.18,-.23,-.01,-.09,.15,.01,-.1,.01,.05,0,-.33,-.25,-.26,-.06,.02,.07,-.27,-.19,-.32,-.05,-.19,.33,-.27,-.31,-.36,-.08,-.39,-.25,-.22,-.01,-.39,-.41,.26,-.06,.07,-.26,-.03,-.13,.24,-.47,.28,.14,.15,-.37,-.06,-.02,-.31,.05,-.16,-.32,-.06,.15,.12,-.35,.22,-.13,-.14,-.04,.1,.05,-.18,.11,.09,-.03,-.19,.06,-.3,-.3,-.52,.44,-.47,-.43,-.29,-.21,-.16,-.2,-.35,-.27,-.39,-.02,.39,-.07,-.12,-.17,-.46,-.19,.2,-.17,.35,-.01,-.31,-.09,0,-.03,.07,.09,.27,-.05,-.11,-.15,-.37,-.44,-.29,-.34,.03,-.17,-.11,.21,.07,.25,.06,-.22,-.14,-.07,.04,.4,-.01,-.29,.31,-.46,-.25,-.3,-.07,-.13,.03,.3,-.32,-.33,-.33,-.02,-.4,-.12,-.29,-.46,.06,-.1,-.48,-.11,-.22,-.33,-.36,-.37,.47,-.33,.12,-.18,-.06,-.2,-.32,-.35,-.33,-.46,.19,-.37,-.16,.27,.16,-.28,.1,-.3,.3,-.08,-.32,-.17,-.46,-.38,.12,.09,.38,-.12,-.4,-.17,.06,-.29,-.39,.27,.28,.11,.33,.35,-.07,-.03,.02,-.09,-.21,.11,0,-.26];export{a as rvalData};
