const a=[.56,-.21,-.51,-.02,-.55,.14,-.13,0,-.14,-.25,-.27,.07,-.02,.46,-.3,.01,-.01,-.07,.09,.09,.15,.22,.1,-.13,-.38,-.51,.26,.06,-.13,.23,-.33,.32,-.51,.03,-.14,.05,-.42,-.29,-.18,-.28,.06,-.52,-.24,.18,-.08,-.2,-.01,.28,.11,-.14,-.14,.18,-.05,-.45,-.27,-.15,-.23,.1,-.25,-.47,-.3,-.48,-.49,-.03,-.01,.07,-.57,-.28,.07,.02,-.17,-.27,-.29,.02,-.53,.05,.24,-.32,-.38,.08,.4,-.38,.06,-.46,.07,.13,-.46,-.12,.46,-.47,-.13,-.01,-.1,.54,-.04,-.13,.54,.33,.01,-.32,-.04,-.52,-.38,.03,-.42,-.11,.3,.19,-.38,-.48,.19,-.27,.02,.55,.04,-.46,-.17,.15,.32,-.4,-.04,.1,-.07,.02,.14,-.37,-.55,.05,0,-.51,0,.29,.09,-.06,-.07,.15,.01,-.2,.16,.16,-.57,.14,-.46,-.46,.21,.24,0,-.02,-.53,.05,-.54,-.02,-.02,.2,.06,-.18,.01,.28,.26,-.25,-.05,-.57,-.04,-.32,-.17,-.35,-.25,.19,-.03,-.45,.21,.07,-.1,.13,-.35,.1,-.01,.16,-.2,-.56,.13,.04,-.13,-.44,-.39,-.11,.02,.03,-.21,.25,.12,-.18,-.2,-.36,-.52,-.56,-.54,-.24,.23,.19,-.14,-.38,-.51,.19,.35,-.35,.16,-.23,-.18,-.11,.05,-.34,.18,-.46,.1,-.1,-.09,-.06,.09,.34,-.41,-.34,-.46,-.45,-.48,-.52,-.02,.11,-.21,-.18,.1,.04,-.27,-.49,-.31,.18,-.31,.08,-.12,-.01,-.24,-.32,.12,.13,-.1,.07,-.1,-.06,-.13,.07,-.16,.11,-.31,-.28,-.59,.03,-.18,-.34,-.15,-.48,0,-.08,-.38,-.61,.09,-.43,.2,-.49,-.16,-.24,.19,.26,-.5,-.49,-.5,-.03,.06,-.2,-.47,.15,-.16,.3,-.26,.34,-.23,-.28,.2,-.4,-.14,.1,.02,-.27,-.36,.06,-.02,-.32,-.11,.24,.05,-.14,.03,-.58,.19,.1,0,-.33,-.02,-.38,-.17,-.05,-.48,.01,.06,.22,-.34,-.13,-.09,-.14,-.48,-.15,-.47,.12,-.31,-.53,-.01,-.22,-.39,-.01,.03,-.26,.42,-.43,-.11,-.19,.29,.2,.02,-.24,.12,.19,-.23,-.37,.12,.13,-.43,-.5,-.26,-.24,-.23,-.06,-.5,.29,.13,-.24,.35,-.28,-.33,.08,-.55,-.52,-.21,-.07,-.25,.17,.1,.44,.06,-.52,-.32,0,-.05,.24,-.04,.06,-.36,-.11,-.23,-.48,0,-.08,-.04,-.12,0,-.01,.06,-.31,.02,-.07,-.52,-.48,-.55,-.23,-.03,.09,.01,-.55,.4,.25,-.06,0,.04,-.16,-.57,-.12,-.19,-.18,-.26,-.51,-.54,-.48,-.47,.27,-.05,-.55,-.06,.09,-.59,-.41,-.18,.19,.08,-.52,.11,-.1,-.23,-.48,-.47,-.24,-.19,.29,.07,.06,-.34,.04,-.03,-.45,.14,-.48,-.52,-.44,-.57,-.47,-.45,.22,-.14,-.3,-.5,-.45,.15,.45,-.22,-.35,.62,-.04,0,-.04,.2,-.49,0,-.45,-.56,-.4,.59,-.28,.05,-.21,.15,.02,.46,-.45,.19,-.48,-.13,.2,-.15,-.4,-.3,-.06,-.54,.3,-.47,-.36,-.61,-.16,-.17,-.06,-.38,.09,-.29,-.44,-.07,.02,.21,.2,-.51,-.52,-.11,.16,-.54,.1,-.21,-.09,-.52,-.24,-.5,.18,.04,-.42,-.39,-.35,-.64,-.15,-.47,-.04,-.08,.02,-.1,.06,-.26,-.49,.07,-.58,-.05,-.08,-.26,.19,.16,-.19,.07,-.3,-.19,-.06,.02,.19,.22,.18,-.2,-.18,-.01,.06,.01,-.23,-.19,.14,.07,.02,.1,.13,-.41,-.03,.24,-.52,-.47,-.4,-.33,-.14,.3,.18,.1,.02,-.45,.11,-.1,-.01,.15,.13,.09,.06,-.16,-.04,-.47,-.47,-.15,.22,-.62,-.5,-.01,.22,-.2,-.15,.11,.09,-.56,-.06,-.39,-.39,-.52,-.46,.13,-.41,.11,0,-.02,-.51,-.02,.61,-.49,-.51,-.17,-.03,-.57,-.52,-.6,-.07,-.44,.17,-.1,.26,.06,-.01,.01,-.31,-.22,-.18,.07,.14,-.57,.08,.09,.32,-.06,.12,-.15,.1,-.09,.26,-.08,-.2,-.6,.17,-.08,.48,.29,-.27,-.28,-.29,-.4,.12,.13,.16,-.01,-.44,.33,.11,-.3,-.58,.05,-.38,-.17,-.4,.22,.67,.02,-.52,-.4,-.03,-.32,.15,.01,.01,-.54,-.35,-.53,-.09,-.24,0,-.05,-.1,-.36,-.45,-.07,-.03,.12,.27,-.34,.08,-.47,-.54,.3,-.05,.13,-.06,-.23,-.31,-.07,.02,1,-.5,-.46,.03,.06,.12,-.04,-.11,.16,.15,-.05,-.08,-.4,.44,-.45,-.1,-.19,-.55,-.05,-.02,.23,-.29,.22,.24,-.59,.11,-.07,-.07,-.03,.08,.08,-.09,.19,.14,-.02,-.53,-.37,.02,-.38,-.37,.25,.25,.46,-.55,.52,-.2,-.49,-.16,-.26,-.05,-.45,.06,-.01,.08,-.2,-.28,.3,.16,.07,.45,-.11,-.4,-.05,-.42,.38,.03,.09,.09,-.45,-.08,-.07,-.24,-.21,-.04,-.27,.17,-.47,-.38,-.33,-.39,-.53,-.03,.02,.17,-.04,-.05,-.49,.19,-.19,.35,-.25,.09,-.56,-.19,-.55,.03,.15,-.53,-.51,-.57,-.27,-.26,-.2,.09,.23,-.07,-.49,-.19,-.5,.12,-.52,-.43,.22,-.41,.13,-.06,.13,-.6,-.32,-.44,-.19,.19,-.13,.16,.02,.12,-.47,.14,-.45,.06,.44,.11,-.14,-.51,.09,.09,-.03,-.48,-.02,-.51,.2,-.06,.09,-.02,-.17,-.52,.05,.09,-.09,.23,.15,-.2,.11,.17,-.29,-.4,-.1,.11,.23,-.61,.18,.2,-.24,.18,.08,.14,-.12,.01,.07,-.12,-.1,-.16,-.08,.17,-.41,-.45,-.07,.4,-.04,-.06,.32,.17,.08,.17,.23,.08,.19,-.17,-.08,-.12,-.07,-.04,.27,.14,.19,-.23,-.15,-.55,-.5,-.01,-.21,-.31,-.6,.09,-.51,.19,.14,-.33,-.54,-.17,.41,.03,-.41,-.58,-.14,.08,-.04,-.04,.24,-.29,.2,-.1,.14,.07,.2,.18,-.04,-.04,-.49,-.34,.07,.01,.19,-.02,-.03,.03,.27,-.37,-.63,-.55,.18,-.45,-.65,-.14,-.2,-.4,-.51,-.55,-.48,.57,-.3,.06,-.33,-.62,.15,.02,-.06,-.34,-.07,.04,.07,-.56,-.06,.18,.08,.03,-.13,.01,.03,-.08,-.58,-.1,-.55,-.16,-.4,-.08,.11,0,-.54,-.09,.12,-.08,.32,.11,-.05,.18,-.31,.58,-.43,.13,-.11,-.24,-.22,-.45,-.53,.11,.14,-.02,-.1,.03,.19,.19,.28,-.26,-.34,.07,-.14,.06,.09,-.08,-.02,.02,-.17,-.13,.1,.04,-.15,-.05,-.13,-.06,.36,-.12,-.02,.17,.02,-.34,-.08,.09,.05,.05,-.2,.31,-.01,.11,-.53,.01,-.24,-.35,.11,-.27,-.43,-.08,.21,-.21,.06,-.03,-.16,-.24,-.02,-.24,-.51,-.08,-.19,.1,.09,-.48,.22,-.01,.16,-.16,.05,.31,.05,-.23,.04,-.23,-.24,-.05,-.43,.2,.31,.13,-.07,-.42,.19,.3,.05,-.43,-.29,-.05,.13,-.15,-.43,.09,-.16,-.05,-.22,-.5,-.12,-.25,-.45,.11,-.38,-.51,.2,.16,.04,.03,-.21,-.12,-.05,.18,.17,-.42,.09,.06,-.52,.08,-.41,-.5,-.05,-.17,-.52,-.43,.14,.28,.26,-.16,-.55,-.08,-.38,-.08,-.34,0,-.14,-.26,-.41,.16,.07,.08,.05,-.4,-.14,-.53,.17,-.32,.33,.07,.16,.26,.15,-.29,-.08,.22,.07,-.4,-.49,.19,.06,-.59,-.45,-.09,.17,-.03,-.5,.02,-.09,-.41,-.59,.24,-.45,-.22,-.39,.22,.03,.11,-.1,-.54,-.02,-.11,.24,.06,.07,.27,-.37,-.45,.22,-.16,-.41,-.24,-.55,-.29,-.53,-.17,-.11,.02,.32,-.27,-.38,-.08,-.44,.06,-.33,.1,.04,.09,-.01,.11,.25,.09,-.45,-.46,.02,-.47,.06,-.02,.19,-.13,-.58,.3,.13,-.54,-.6,.25,.08,-.31,.1,-.52,-.24,-.58,.13,-.49,-.46,-.06,-.57,.14,.03,.16,-.43,-.21,.28,-.46,-.46,.04,.11,-.44,-.37,.23,.2,-.11,-.13,.25,-.19,-.1,.08,.09,-.47,-.1,-.59,-.42,-.53,-.02,.23,.22,-.44,-.51,-.49,.21,.24,-.04,.2,-.23,-.31,.28,-.51,.09,.15,-.07,-.03,.15,-.31,.27,.19,-.53,.65,-.53,.13,.07,.02,-.25,.17,.13,-.24,.32,-.47,.21,-.53,-.05,-.15,.14,-.17,.41,.27,.14,-.47,.19,-.19,.02,-.03,.21,-.55,-.07,.1,.24,-.11,-.43,-.58,-.4,.03,-.25,-.03,-.57,-.38,-.53,-.42,-.35,.17,-.11,.1,-.34,-.25,-.02,-.52,.12,-.38,-.47,.49,-.29,-.11,.03,-.22,-.41,-.51,.13,-.12,-.01,.11,.08,-.1,-.28,-.51,-.54,-.32,.31,.12,-.51,.1,-.03,.04,-.04,.13,.01,-.06,-.38,-.19,-.02,.23,-.19,-.16,-.13,-.07,-.44,.32,.16,-.22,-.2,-.45,-.23,-.37,-.17,-.09,-.18,-.01,-.01,-.34,-.42,-.26,.07,.32,.07,-.37,-.18,.12,.31,.37,-.09,-.18,-.43,-.15,.06,.13,.23,-.12,.21,.02,.06,.05,.21,.02,-.3,-.19,.05,-.37,-.52,-.02,-.37,-.03,-.34,-.49,-.2,.12,.19,-.52,.08,-.03,.14,.06,-.42,-.37,-.28,.11,-.29,.29,.11,-.47,-.43,.1,-.11,.03,-.4,.03,.08,-.17,-.03,-.14,.02,0,-.13,.16,-.02,-.3,.26,-.06,-.43,.26,-.01,-.58,-.26,-.52,-.44,-.06,.43,-.25,-.22,-.28,-.2,.24,-.55,.23,.12,-.05,-.09,.05,-.25,.47,.33,-.08,-.37,-.52,-.32,-.34,-.03,.07,.03,.03,-.13,-.03,.14,-.29,-.54,-.11,.02,-.35,-.29,-.18,.31,.27,.12,-.53,.21,-.51,-.36,-.38,.18,-.2,-.33,-.04,-.28,.04,-.45,-.31,.07,.1,-.25,.14,-.63,-.23,-.03,-.1,-.25,.04,-.07,-.15,-.52,.17,.02,-.55,-.18,.24,-.3,-.44,-.24,-.16,-.11,-.36,-.17,.05,-.27,-.09,-.11,-.52,.14,-.22,-.17,-.12,-.17,-.28,-.07,.03,-.18,-.52,.31,.06,.06,0,-.53,-.16,-.23,-.52,.16,-.11,-.42,-.44,-.56,-.47,-.08,-.51,-.57,-.5,-.2,-.09,-.02,-.29,-.15,-.38,-.04,-.51,-.47,.15,-.13,-.49,-.03,-.52,-.37,-.22,.28,-.5,-.34,-.27,.01,-.46,-.12,-.31,-.11,-.45,-.48,-.36,-.5,.21,-.32,-.09,.05,-.44,-.33,.21,.02,-.54,-.46,-.42,-.19,-.15,-.21,-.47,-.46,-.51,.15,.19,-.2,-.1,.05,-.42,-.06,0,-.37,.03,-.28,-.38,-.26,-.46,-.41,.23,.11,-.48,-.15,-.27,-.44,.13,.13,-.33,-.14,-.27,-.48,-.28,-.53,.15,-.56,.19,-.32,.06,-.14,0,.03,.04,-.2,-.53,-.2,-.34,.03,-.3,.02,-.11,-.54,-.3,-.54,-.3,-.47,-.05,.15,-.12,-.14,-.16,-.08,.16,-.4,-.41,-.51,.01,-.35,-.04,.01,-.37,-.17,-.41,.01,-.13,-.51,-.53,-.48,-.45,-.08,-.44,-.28,-.46,-.25,.37,-.36,-.13,.35,-.5,.03,-.63,-.06,-.46,-.42,.09,-.53,.15,-.09,-.08,-.18,.04,-.25,-.05,-.06,-.02,-.05,-.15,.24,.17,-.51,-.58,-.22,-.04,-.5,-.31,-.22,-.45,-.41,-.52,.04,.03,.09,-.42,.04,.21,.05,-.12,-.15,-.14,-.52,-.54,-.4,.09,-.47,-.43,.13,-.21,-.04,-.63,-.36,-.2,.44,-.17,.03,.19,-.02,-.05,-.5,-.44,-.37,.03,-.31,-.15,-.45,.21,.01,.06,-.11,-.55,.04,-.48,-.27,-.48,-.46,.04,-.52,-.39,-.53,.24,-.24,.17,-.24,.38,-.02,.06,.43,.08,.27,.12,.05,.13,.05,-.46,-.41,.14,-.53,-.47,.36,-.44,.12,.26,.49,.09,-.56,-.5,-.54,-.29,.1,-.35,-.35,-.36,-.41,-.28,-.04,-.59,-.55,-.44,-.4,-.32,-.26,.05,-.46,-.48,-.53,-.07,.08,.2,-.02,-.49,-.09,-.38,.29,-.3,-.49,-.52,-.46,-.51,-.43,-.6,-.04,-.54,-.04,.18,-.55,-.07,0,-.03,-.38,-.44,-.51,-.14,-.26,-.43,-.2,-.59,-.21,.08,.03,-.03,.21,.28,-.38,.17,-.09,.11,-.49,.07,-.28,.1,-.05,.08,-.06,.18,.14,-.45,0,-.09,-.25,-.24,-.11,-.42,.15,.11,.16,-.07,-.36,-.14,-.03,-.52,-.35,-.33,-.01,-.54,.02,-.47,.04,-.5,-.11,-.32,-.26,.02,-.28,-.14,-.08,.11,.4,-.03,.27,-.43,-.52,-.59,-.4,.36,.04,-.46,-.32,-.18,.13,.16,.28,-.48,-.53,-.15,-.32,-.49,-.21,-.18,.01,-.52,-.55,.21,.1,-.27,-.35,-.37,-.02,.08,-.38,-.14,.02,.1,-.5,.03,-.04,-.52,-.12,-.09,-.46,-.17,.21,0,-.52,.46,-.41,-.06,.08,.13,0,-.42,-.23,.26,.1,-.17,-.12,-.47,-.53,-.55,.05,-.43,-.43,-.48,-.47,-.44,-.26,-.01,-.26,-.53,-.09,-.18,.01,.17,.07,-.5,-.49,.26,-.44,.05,-.18,-.48,.19,-.07,.12,-.15,.28,.38,.27,-.08,-.43,-.55,-.3,-.44,-.3,.08,-.34,-.23,-.18,-.05,.05,-.32,-.24,-.45,.08,.16,.51,-.24,-.3,-.03,-.58,-.3,-.54,-.07,.01,-.31,.62,-.49,-.6,-.51,.25,-.48,-.16,-.55,-.33,-.05,-.27,-.55,-.44,-.46,-.5,-.53,-.35,.08,-.52,.01,-.3,.1,-.48,-.53,-.54,-.5,-.58,.1,-.58,-.36,-.03,.38,-.52,.22,-.48,.26,-.03,-.57,-.18,-.57,-.58,.07,-.07,-.06,.11,-.56,-.03,-.3,-.14,-.47,.01,.2,.06,.15,-.07,.14,-.2,-.07,-.12,-.46,.16,.01,-.41];export{a as rvalData};
