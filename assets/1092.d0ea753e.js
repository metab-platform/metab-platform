const a=[.1,-.12,-.41,.2,-.37,-.01,.01,.15,-.07,-.18,-.31,.06,.03,.32,-.53,.04,-.27,.09,.29,.22,-.13,-.28,-.02,-.45,-.38,-.28,-.25,.09,.21,-.24,.08,-.21,-.28,-.02,-.21,0,-.44,-.47,.02,-.14,-.01,-.22,-.27,.16,.12,-.35,-.11,-.09,-.06,-.09,-.48,.02,-.13,-.44,.13,-.53,-.25,.11,-.03,-.2,.17,-.17,-.31,.05,.14,-.01,-.23,-.46,.01,.02,-.04,-.23,.11,.12,-.26,-.1,-.09,.22,-.51,.04,.18,-.13,-.1,-.08,-.01,.06,-.16,-.07,.25,-.33,.19,.03,-.1,.38,-.09,.34,.23,-.11,.28,.14,.11,-.32,-.05,.28,-.05,.08,-.06,-.18,-.25,-.11,-.23,.05,0,.29,.04,-.35,-.23,-.05,.05,-.28,.07,.03,-.37,.25,.02,-.21,-.21,.17,.14,-.39,.23,.28,.01,0,-.34,.07,.31,.12,-.14,-.01,-.14,-.09,-.02,-.18,-.06,-.07,-.07,.39,-.07,.05,-.31,-.06,-.03,-.16,.19,.26,.28,-.04,-.06,-.53,.22,-.14,.09,.27,-.15,.25,-.06,-.04,.06,-.25,-.08,-.05,.22,.37,-.12,-.06,-.06,-.23,.15,-.27,-.02,.09,-.01,-.4,.22,.16,-.2,-.13,-.02,.04,.09,.08,.16,-.15,-.14,-.36,-.06,-.3,-.05,.07,-.41,-.06,-.42,-.04,.15,-.04,.01,.04,.12,.21,.19,-.39,-.01,-.38,.11,.03,.08,.12,-.06,-.12,.13,-.03,.03,-.37,.04,-.37,.21,-.07,.13,.16,.03,.2,-.19,-.38,-.18,-.1,-.32,-.43,.13,-.19,.16,-.47,.26,.48,-.01,.08,-.03,-.09,.07,.1,.05,.28,.14,.3,-.16,.12,-.08,-.16,-.05,-.45,-.11,.33,-.2,-.15,.43,-.04,.05,-.1,-.07,-.17,0,.05,-.38,-.46,-.38,.24,-.17,.19,-.49,-.05,.28,-.13,-.51,.32,.35,-.22,-.27,-.46,.03,-.05,.11,.26,-.28,.01,-.01,-.23,-.22,-.01,-.27,-.01,-.08,-.38,-.01,-.05,.03,.05,-.04,-.02,.35,-.38,-.17,.17,.11,-.07,.03,0,-.14,.21,-.46,-.17,-.09,.1,-.49,-.26,.06,.36,-.19,.44,-.12,.31,.25,.07,.35,.03,-.12,-.15,.05,.21,-.1,-.23,-.06,-.23,.02,-.07,-.46,-.29,-.11,.4,-.29,.39,-.19,.37,-.03,.37,.14,-.53,.16,-.12,-.33,-.45,-.2,-.09,.43,-.1,.08,.29,.07,-.4,.17,.12,-.14,.04,-.13,.03,.27,.1,-.03,-.17,-.02,.19,-.02,.03,-.17,-.06,.12,.1,0,.15,-.17,-.23,-.39,.16,-.09,-.12,-.17,-.41,-.22,.09,.41,-.01,.06,.47,-.31,-.23,.28,.14,-.4,-.31,-.15,.01,-.44,.26,.51,-.38,.18,-.05,-.15,-.3,.28,.24,-.05,-.35,-.06,-.01,-.28,-.42,-.37,.07,.2,.38,.29,.09,-.29,-.12,.12,-.46,-.1,-.29,-.39,-.17,-.03,-.05,.02,-.22,-.29,.01,-.36,-.12,-.17,.01,-.21,-.07,.28,.5,-.11,.27,-.08,-.39,.24,-.29,-.4,-.26,.22,.3,-.08,.09,.31,-.12,.19,-.51,-.22,-.43,-.28,-.27,.26,-.39,-.4,-.35,-.35,-.07,-.14,-.46,-.17,-.19,-.18,.42,-.19,.24,-.01,-.35,-.1,0,-.09,.18,-.34,-.37,-.05,-.04,-.3,.48,.42,.35,-.26,-.23,-.18,.22,.3,-.28,-.31,.17,-.13,.46,-.05,.26,-.25,.25,.05,.13,.31,-.26,.06,-.39,.22,.05,.18,-.07,-.25,-.04,-.15,-.14,.22,-.09,.02,.31,.02,0,.13,-.13,.47,-.04,-.33,.26,.19,-.18,.07,.25,.32,-.17,-.35,.35,-.13,-.39,-.45,-.4,-.31,.12,.14,.36,.15,.15,-.51,-.11,.21,.16,.04,-.02,.15,-.13,.09,-.19,-.3,-.43,-.34,.25,-.2,-.43,.1,.21,.21,-.06,.04,-.12,-.11,.39,-.17,-.42,-.39,.02,0,-.45,-.07,-.18,-.02,-.13,.15,.24,-.35,-.43,.02,-.1,-.29,-.34,-.37,-.04,-.38,-.15,.38,-.06,-.18,.37,.04,-.48,.04,.06,.16,-.21,-.38,.08,-.01,0,.05,.11,-.03,.05,.4,-.03,-.12,.3,-.1,.14,0,-.13,-.04,.26,-.2,-.2,-.36,.36,.16,-.08,.02,-.09,-.08,.02,-.31,-.14,.51,-.26,-.04,-.14,-.09,.22,.19,-.4,-.39,.03,-.58,.02,.24,-.02,-.39,-.21,-.32,.23,-.13,.02,-.1,.44,-.21,-.19,-.27,.01,-.04,-.25,.01,.44,-.12,-.36,.32,0,-.06,.5,-.1,-.28,.25,-.07,.06,-.18,-.31,.12,.04,.27,.35,.19,-.01,-.02,-.26,-.07,-.31,.21,-.07,.1,-.2,-.22,.13,.1,.01,-.31,-.08,-.31,-.32,.35,-.1,-.11,.2,.08,.01,.07,.07,.12,.06,-.1,-.45,-.06,-.13,-.16,.15,.02,-.01,-.29,.19,.05,-.19,-.05,-.03,.35,-.44,.06,.04,.08,-.35,-.18,-.14,-.15,-.05,.1,-.2,-.49,.19,-.01,-.07,0,-.13,.1,-.43,-.19,.04,-.23,-.14,-.23,-.11,-.05,-.35,-.3,-.14,-.6,-.2,.17,.01,-.06,.56,.4,-.31,-.17,.24,.05,-.13,.01,-.3,.22,-.32,.01,.01,-.13,-.35,-.05,.36,.28,.21,-.11,.04,.38,-.13,-.47,-.28,-.01,-.42,.02,.69,.13,.08,-.07,.11,-.27,-.41,.01,-.22,.11,.22,-.01,.02,.41,-.2,.05,-.01,.41,.21,.08,.14,-.33,-.11,-.13,.19,-.31,-.08,-.38,-.05,-.13,.17,-.09,.48,-.42,.17,.28,.2,-.09,-.18,.1,-.14,.03,-.04,-.24,.13,.45,-.08,-.36,-.22,-.23,-.09,-.09,.08,-.11,-.21,-.06,0,.14,.23,.26,-.08,-.04,-.14,-.43,.04,.18,.47,.46,.12,-.11,.35,.28,.43,.05,.2,.25,.4,.26,.21,-.09,-.1,0,-.17,-.43,-.02,-.16,-.39,.08,.33,.07,-.19,.1,-.12,.35,.15,.11,-.08,-.01,.05,.11,-.07,-.37,-.04,.01,-.06,.09,-.1,-.34,-.24,.32,-.12,.21,-.01,-.15,.15,.22,-.09,.16,.02,.33,.44,-.12,.36,-.04,.32,-.07,-.19,-.42,-.07,-.42,-.21,.22,.07,-.44,-.32,-.22,-.08,.33,.17,.13,-.19,-.28,-.13,.06,.1,-.06,.54,.13,.02,-.3,-.19,.02,.16,-.09,.5,0,.15,-.18,-.24,.24,-.18,.02,-.25,-.32,.11,-.01,-.01,.02,.12,-.17,.23,-.05,.02,.27,-.52,.28,-.12,-.27,.09,.14,.17,-.14,-.38,.29,.05,.11,-.15,.24,.44,-.09,-.1,-.15,-.03,.25,.24,.16,-.09,.29,.01,-.11,.08,0,.11,.09,-.12,.22,.04,-.19,-.04,-.02,.15,.04,.01,-.18,-.03,-.03,.01,.07,-.27,.16,.54,-.09,-.2,.08,-.06,.14,-.36,.33,-.31,-.15,-.18,.16,.36,-.09,-.14,.34,.09,-.13,-.38,.04,-.08,.01,.31,-.42,-.13,.28,-.08,.28,.01,.12,0,-.21,-.02,-.41,.02,-.09,-.03,-.21,.06,.13,.36,-.23,-.16,-.06,-.19,-.26,.09,-.01,.02,-.27,-.37,.2,.22,.15,.07,-.32,.04,0,-.49,.34,-.05,-.36,-.03,-.07,.04,.05,.17,.04,-.05,.26,-.25,-.11,.08,1,-.31,-.03,-.39,-.13,.18,.49,-.29,-.22,.1,-.03,.38,-.29,-.27,-.19,-.27,-.15,-.22,.01,.2,.1,.23,-.03,.26,.03,.17,-.33,.2,-.3,.12,-.51,-.04,-.26,-.03,.07,-.05,-.46,.28,-.01,.36,-.19,-.44,.14,-.11,-.35,-.31,.39,-.06,.28,-.26,-.06,-.27,-.1,-.15,-.03,-.32,-.29,-.29,.01,-.11,.16,.15,-.25,-.08,.32,-.06,.27,-.02,-.07,-.36,-.22,.08,.16,-.24,-.03,-.38,-.3,-.26,-.05,.05,-.16,.25,.34,-.19,-.1,-.47,-.01,-.14,-.08,.49,.33,.01,.22,.11,-.07,-.4,-.44,.24,-.39,.28,.1,.2,.09,-.31,-.07,-.09,-.28,-.12,.25,.05,-.16,-.1,-.35,.29,-.07,.27,-.42,-.26,.2,-.37,-.09,-.02,.29,-.22,.35,-.19,-.08,-.31,.28,.25,-.18,-.06,-.03,-.02,.13,.11,-.1,.25,.25,-.06,.05,-.31,.1,-.38,-.37,-.32,-.05,.02,-.06,-.44,-.23,-.41,.13,-.03,-.06,-.07,-.01,-.09,.09,-.25,0,.19,.19,-.05,-.17,.01,.14,.25,-.19,.17,-.36,-.16,.33,-.21,-.15,-.14,-.05,.05,-.07,-.41,.05,-.2,-.29,-.12,.17,-.12,0,.28,.04,0,.02,-.43,.06,-.15,.04,-.38,-.13,-.18,-.01,-.12,-.19,-.1,-.14,.34,.23,.02,-.26,-.33,-.2,-.24,-.05,-.1,.04,-.02,-.53,.18,.4,-.38,-.26,-.03,-.29,.47,-.04,.39,.11,.08,-.11,-.38,-.04,.11,.27,.36,.39,.23,.41,-.38,-.12,-.28,-.04,.07,-.26,.26,.11,.39,.11,.38,-.09,-.07,-.19,-.16,.2,-.15,-.26,-.4,.08,-.06,-.02,-.06,.24,.07,.1,-.22,-.19,.26,.21,.36,.21,.28,.19,-.14,-.14,.14,.1,.26,.22,-.2,.16,-.28,-.34,-.02,-.16,-.03,-.6,.09,.04,.27,.31,.02,.13,-.07,.13,.1,-.06,-.06,-.45,-.23,.05,.05,-.21,.14,-.18,.26,.08,-.42,-.21,.46,-.25,-.38,.22,.35,.08,-.22,-.35,-.15,-.47,-.06,.23,.03,.27,-.15,-.21,-.03,.36,.17,-.5,.06,.18,.03,.08,-.16,.09,0,.09,-.06,.02,-.34,.06,.04,-.39,-.17,.06,-.29,.19,-.28,-.18,.15,.01,.11,.09,.11,-.57,.35,-.19,.02,.2,.03,.33,.02,-.21,.11,.27,-.04,-.29,-.35,-.2,-.13,.22,-.12,.04,.15,.12,-.08,-.07,.12,-.2,.17,.27,-.26,-.22,.24,.06,.29,-.34,-.25,-.15,-.12,-.2,.09,.14,.27,-.29,.09,.06,.26,-.2,.13,-.25,.06,0,.29,-.33,-.29,-.05,.23,.04,-.06,.1,-.11,-.27,-.09,.02,-.33,.31,.36,-.15,-.45,.11,.19,-.35,-.37,-.19,-.06,-.1,.13,.03,-.24,.29,-.21,-.35,.23,.21,-.03,-.24,-.11,.12,-.21,-.02,-.12,-.01,.35,-.08,.04,.03,-.3,-.11,.21,-.16,.03,-.37,-.23,.13,-.4,-.18,-.14,.06,.28,.1,-.09,-.24,-.01,.11,-.1,-.31,-.14,.24,-.08,-.31,-.08,-.07,-.05,.04,-.28,-.13,.17,.05,-.11,-.25,-.51,.06,-.22,-.44,-.21,-.15,-.05,-.39,0,-.01,-.12,-.5,.36,-.08,-.32,-.07,-.27,-.12,-.08,-.25,-.31,-.31,-.2,.07,.09,.08,-.2,.34,-.44,-.01,-.28,-.39,.13,.06,.03,0,-.45,-.38,-.15,.11,-.4,-.19,-.06,-.3,.14,-.11,-.23,-.25,.26,-.06,-.17,-.13,-.14,-.23,-.02,.04,-.23,-.09,.11,-.22,-.2,.19,-.46,-.07,-.18,-.09,-.15,.17,-.05,-.33,-.26,-.02,-.26,-.13,.35,-.25,.09,-.02,-.15,.05,.28,-.05,-.27,-.19,.28,-.42,.36,-.02,-.21,.07,.12,.17,-.19,-.4,-.33,-.16,-.16,.1,-.5,-.09,-.19,-.06,.36,.04,-.27,.36,-.09,-.05,-.25,-.03,-.4,-.22,-.16,-.19,.14,-.17,-.05,-.08,.08,-.17,.06,.18,-.01,-.17,.08,.02,.02,-.17,-.3,-.47,.3,-.07,-.5,-.43,-.38,-.17,-.3,-.03,.21,.35,-.08,-.18,.23,.09,-.18,-.26,-.12,-.4,-.43,-.41,.08,-.4,-.17,0,-.16,-.2,-.18,-.44,-.27,.16,-.13,.01,.05,.15,.09,-.45,.1,-.35,.37,-.1,-.08,-.23,-.08,.04,.29,.17,-.38,.06,-.38,-.14,-.2,-.19,-.15,-.19,-.18,-.24,-.23,-.09,-.02,.05,.28,.29,.05,.2,.01,.28,.08,.02,.1,.1,-.04,-.21,.18,-.38,-.45,.21,-.4,.17,-.19,.07,-.07,-.27,-.4,-.34,-.08,-.35,-.17,.11,0,-.04,.05,-.02,-.32,-.23,-.2,-.01,.12,.17,-.25,-.21,-.18,-.3,.32,-.06,-.22,.1,-.24,-.02,.07,-.14,-.27,-.4,-.17,-.37,-.46,-.43,-.25,-.14,-.11,.03,.11,-.37,.26,.28,.16,-.25,-.43,-.17,-.13,.27,-.22,.08,-.36,-.17,.2,.07,.21,-.07,-.06,-.39,.47,-.16,-.12,-.26,.15,-.21,-.02,.32,-.08,.03,-.05,.24,-.44,-.19,.31,-.12,.27,.2,-.15,.08,.44,.06,-.01,-.31,.27,.32,-.11,.07,-.33,-.17,-.35,.36,-.23,-.02,-.38,-.03,.15,.16,-.2,-.34,.12,.06,.02,.42,.24,.04,-.13,-.23,-.15,-.17,.08,-.08,-.03,.12,0,-.11,.01,.03,-.2,-.44,.04,-.24,-.16,-.08,.1,-.02,-.37,-.28,-.17,.45,-.03,.03,.04,-.09,.06,-.36,-.17,.26,-.05,-.4,.05,-.29,-.16,.31,-.05,-.17,.26,-.12,.26,-.32,-.1,-.33,.3,-.11,.14,-.07,-.37,-.24,.06,-.11,.21,.06,-.44,-.39,-.37,-.12,-.42,-.45,-.36,-.07,-.19,.14,.15,.12,-.15,.32,-.15,.02,.22,-.23,-.44,-.18,.29,-.34,-.16,-.28,-.45,-.21,.03,-.1,-.09,.15,.08,-.18,-.04,-.09,-.4,-.09,-.44,.1,-.14,.02,-.16,-.32,-.3,.12,-.22,-.35,-.45,.36,-.05,.12,.07,-.41,-.24,-.36,.13,-.29,.21,.26,-.27,.1,-.25,-.19,-.4,-.19,-.21,-.06,-.11,-.31,.13,.05,-.41,-.17,-.39,-.4,-.24,-.54,-.01,-.38,-.32,.17,-.07,-.45,-.26,-.34,-.37,-.35,.36,-.09,-.49,.12,.27,-.37,-.07,-.41,.28,-.06,-.07,-.08,-.35,-.3,.03,-.23,-.14,.32,-.42,.56,-.3,-.27,-.21,.42,-.21,-.1,-.1,.07,-.11,-.16,.1,.32,-.34,-.04,-.04,-.05];export{a as rvalData};
