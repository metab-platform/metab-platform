const a=[.15,-.11,-.61,.11,-.55,.07,-.07,.1,.07,-.38,-.2,-.1,.03,.46,-.42,0,-.21,-.02,.25,.25,-.04,-.15,-.08,-.2,-.26,-.3,-.06,.06,.29,-.03,-.05,.04,-.39,-.11,-.04,.08,-.49,-.34,-.03,-.24,.12,-.29,-.3,0,-.05,-.3,.13,.13,.18,-.16,-.4,.03,-.29,-.43,-.21,-.28,-.14,.07,-.14,-.19,.1,-.3,-.37,.09,.15,-.07,-.31,-.3,-.07,-.03,.08,-.29,-.1,.05,-.4,-.04,.13,.09,-.63,.15,.32,-.09,-.07,-.12,-.17,.14,-.11,0,.31,-.28,-.04,.07,-.03,.32,-.17,.3,.38,-.08,.21,.01,.06,-.39,-.26,.32,-.22,.14,.2,.14,-.24,-.23,-.13,-.13,.03,.42,-.05,-.38,-.16,.06,.38,-.17,.2,.01,-.44,.18,-.06,-.27,-.38,.09,.11,-.4,.22,.24,.04,-.22,-.19,.25,.16,.02,-.01,-.01,-.31,-.08,-.12,-.13,-.01,-.08,.02,.24,-.09,.04,-.38,-.09,.11,-.05,.2,.07,.34,-.16,.06,-.31,-.07,-.36,.15,.07,-.1,.07,-.03,.1,.1,-.24,-.06,-.02,.08,.11,-.26,.06,.04,.02,-.03,-.36,.07,.1,-.04,-.55,-.06,.14,-.21,-.2,-.2,-.07,.11,.01,0,-.22,-.29,-.43,-.28,-.43,-.01,.13,-.2,-.03,-.44,-.07,.24,-.29,-.06,-.15,.04,.16,.13,-.23,-.09,-.29,.09,.13,.1,.15,.12,.15,-.04,-.14,-.01,-.42,-.08,-.4,.08,.09,-.14,-.13,.03,.13,-.06,-.56,-.2,-.06,-.2,-.18,.01,-.14,-.05,-.31,.3,.31,.05,.11,-.07,-.08,-.04,.06,-.04,.24,-.18,.23,-.39,.27,-.13,-.14,-.16,-.62,-.03,.07,-.21,-.34,.28,-.21,.15,-.17,-.26,-.08,-.07,-.03,-.44,-.62,-.54,.14,.02,.06,-.51,.16,.02,.12,-.4,.37,.1,-.15,.04,-.44,-.18,.07,-.03,.09,-.32,.08,-.01,-.31,-.12,.14,-.09,-.15,-.08,-.54,.05,0,-.02,.1,.12,-.15,.15,-.2,-.24,.2,.1,.03,-.26,-.14,-.28,0,-.64,-.26,-.12,.01,-.37,-.32,-.13,.15,-.27,.19,-.03,.14,.4,-.03,.31,.04,-.06,0,.03,.18,-.01,.07,-.15,-.37,.07,.2,-.46,-.45,-.2,.08,-.3,.23,-.3,.26,-.04,.14,.28,-.43,-.05,-.03,-.47,-.63,.02,-.08,.16,.22,.07,.44,-.02,-.46,-.07,.09,-.04,.18,.02,.18,.07,-.03,-.04,-.23,.05,-.05,.09,.03,-.1,-.06,.07,.04,.04,.02,-.27,-.34,-.52,.18,-.1,-.23,-.22,-.55,.03,.11,.1,-.04,-.1,.33,-.5,-.05,.05,.06,-.25,-.46,-.27,-.17,-.58,.37,.3,-.51,-.1,-.05,-.33,-.4,.01,.48,-.01,-.37,.01,.08,-.12,-.4,-.49,0,.05,.28,.34,.21,-.17,-.11,-.17,-.49,-.03,-.37,-.45,-.34,-.26,-.08,-.08,-.02,-.37,0,-.46,-.21,.05,.06,-.04,-.19,.37,.42,.11,.21,.19,-.46,.17,-.26,-.54,-.38,.35,.1,-.22,.01,.33,-.18,.14,-.5,.11,-.47,-.36,-.21,.01,-.34,-.36,-.15,-.45,.12,-.3,-.38,-.42,-.12,-.3,.39,-.43,.15,-.07,-.58,-.07,-.12,.17,.06,-.57,-.34,-.3,.04,-.39,.31,.22,.14,-.45,-.2,-.24,.25,.16,-.25,-.39,-.09,-.3,.35,-.16,.24,-.33,.32,-.25,.15,.15,-.33,.09,-.59,.07,.09,.08,-.08,-.24,-.11,-.11,-.24,.05,-.28,.07,.2,.02,-.03,-.09,-.19,.31,-.16,-.3,-.02,.15,-.05,.22,.11,.22,-.02,-.5,.47,.14,-.41,-.53,-.55,-.31,.13,.23,.32,.16,.08,-.68,-.02,.14,.24,-.02,.11,.14,-.02,-.21,-.11,-.53,-.58,-.25,.27,-.39,-.57,.18,.25,-.01,.04,.2,-.24,-.31,.37,-.32,-.3,-.5,-.1,.06,-.5,.03,-.08,-.07,-.31,.19,.29,-.37,-.58,-.04,-.15,-.4,-.44,-.61,-.08,-.58,.06,.12,.21,-.2,.48,-.02,-.5,-.02,-.02,.2,-.2,-.52,.11,-.1,-.02,.02,.09,.09,-.03,.26,-.18,-.02,.06,-.31,.14,-.02,.06,.02,.09,-.27,-.27,-.34,.23,.24,.13,.01,-.13,.13,.02,-.46,-.33,.29,-.31,-.03,-.3,-.12,.29,.06,-.46,-.33,-.03,-.49,.09,.24,.18,-.54,-.31,-.39,-.01,-.08,-.05,.03,.32,-.1,-.18,-.06,-.1,.05,0,-.21,.22,-.18,-.45,.17,.12,.06,.39,-.15,-.28,.2,-.07,.22,-.21,-.3,.12,.05,.21,.22,.21,-.05,.15,-.37,-.19,-.47,.29,-.17,.08,-.21,-.32,.14,.19,.12,-.43,-.11,-.05,-.32,.26,-.31,-.04,.03,.08,.27,-.02,.12,.13,.07,-.3,-.5,.03,-.06,-.25,.03,.18,0,-.51,.26,-.16,-.31,-.06,-.04,.14,-.43,.15,.02,.25,-.14,-.3,.19,0,-.06,.14,-.04,-.5,.1,-.23,-.09,.19,-.17,.05,-.59,-.27,.23,-.14,-.23,-.15,-.14,.1,-.32,-.46,-.06,-.54,-.28,.21,.04,.11,.26,.13,-.44,-.13,-.02,.1,-.19,.08,-.4,0,-.47,.03,-.11,-.24,-.57,-.3,.08,.12,0,.13,.14,.26,-.39,-.29,-.31,.13,-.54,-.07,1,-.12,.27,-.08,.2,-.37,-.46,-.05,-.08,.17,-.07,0,.05,.35,-.33,.04,-.13,.33,.36,.34,.18,-.42,-.09,.05,.24,-.3,.06,-.4,-.08,-.34,.23,-.04,.27,-.45,0,.06,.09,-.04,-.04,0,-.23,.19,-.21,-.17,.12,.34,.16,-.54,.1,0,-.11,.01,.09,.08,-.1,-.1,.05,.21,-.03,-.02,-.05,.1,-.23,-.47,.26,.22,.38,.07,.2,-.06,.24,.29,.58,.08,.15,-.02,.3,-.05,.38,-.18,.11,.02,-.04,-.37,-.04,-.23,-.44,.02,.15,.11,-.43,.14,-.23,.43,.28,0,-.23,.06,.28,.16,-.25,-.4,.02,-.03,-.01,.19,-.02,-.24,-.16,.09,-.06,.08,-.02,.04,.28,0,-.28,.15,.03,.19,.33,-.17,.25,-.01,.29,-.12,-.42,-.59,-.18,-.48,-.42,-.03,-.02,-.67,-.38,-.3,-.19,.48,-.02,.04,-.31,-.4,-.1,.04,-.03,-.09,.42,.1,.11,-.39,-.17,.1,.21,.05,.36,.15,.06,-.1,-.34,0,-.27,.07,-.22,-.08,.09,-.03,-.24,-.06,-.02,-.32,.41,.1,.09,.17,-.38,.4,-.2,.06,-.01,-.09,-.01,-.18,-.41,.18,.15,.14,-.07,.27,.23,-.16,-.11,-.29,.02,.18,.01,.13,-.01,.1,.09,-.09,.07,-.08,-.03,.19,-.25,.06,-.05,-.06,-.01,-.1,.22,-.07,.08,-.28,.07,.08,.16,.08,-.15,.22,.39,-.12,-.25,.05,-.19,-.19,-.15,.16,-.35,-.08,-.12,.12,.21,-.03,-.15,.09,.02,-.26,-.37,.1,-.07,.15,.29,-.46,.18,.19,-.02,.01,-.1,.22,-.11,-.27,-.03,-.3,-.23,-.16,.09,0,.02,.18,.23,-.19,.08,-.06,-.26,-.17,-.1,-.14,.12,-.01,-.58,.18,-.08,.05,-.02,-.46,.06,-.04,-.57,.18,-.2,-.39,-.01,.13,.01,.16,.08,.1,-.02,.23,-.11,-.02,.22,.69,-.36,.06,-.54,-.26,.23,.38,-.32,-.26,.1,.25,.28,.04,-.42,-.09,-.39,-.12,-.32,.05,.19,-.21,.02,0,.34,.19,.08,-.22,.06,-.36,.1,-.36,-.03,-.24,.19,.1,.08,-.37,.06,.04,.28,-.32,-.5,.2,-.07,-.57,-.29,.19,-.02,.17,-.3,.03,-.19,-.16,-.34,.03,-.29,-.33,-.46,.08,-.06,.07,.02,-.5,-.12,.08,.02,.17,-.05,-.02,-.32,-.33,.13,0,-.19,-.01,-.42,-.32,-.46,-.03,-.23,-.2,.28,.15,-.34,-.05,-.46,.13,-.01,-.06,.33,.24,.18,-.1,.14,-.02,-.48,-.43,.27,-.52,.44,.06,.3,.17,-.34,.04,-.17,-.43,-.3,.33,.21,-.23,-.14,-.43,.07,-.29,.29,-.63,-.47,.08,-.51,-.07,.07,.16,-.33,.13,.06,-.17,-.46,.11,.19,-.25,-.06,.03,.02,-.08,-.04,.14,.08,.01,-.09,-.23,-.4,.03,-.6,-.23,-.31,-.02,-.08,-.01,-.44,-.3,-.48,.2,.03,-.15,-.09,0,-.14,.06,-.35,-.05,.12,-.06,-.11,.05,-.09,.18,.29,-.4,.28,-.48,.04,.28,-.12,-.33,-.01,.1,.01,-.1,-.43,.03,-.31,0,-.35,.16,-.05,.03,.29,.1,-.16,.07,-.24,.04,.01,.1,-.53,-.03,-.1,-.1,-.42,-.19,-.19,-.33,-.06,.08,.17,-.52,-.22,-.44,-.19,-.09,.06,.13,.11,-.5,.06,.2,-.42,-.38,-.28,-.44,.49,-.29,.36,.1,-.21,-.12,-.42,-.05,.15,.35,.32,.17,.03,.22,-.52,-.19,-.35,.19,.06,-.32,.02,.14,.5,.1,.29,-.06,.11,-.26,0,.25,.09,-.05,-.36,.08,.03,-.18,.05,.23,-.06,-.03,-.26,-.16,.24,.1,.16,.02,.08,.11,-.21,-.2,.15,.15,.25,.22,-.24,-.09,-.16,-.09,.13,-.09,-.06,-.59,-.05,.04,.29,.17,-.1,.17,.19,.14,.08,0,-.15,-.48,-.21,.15,-.15,-.25,.05,-.25,.12,-.1,-.43,-.07,.34,-.14,-.5,.27,.21,.13,-.14,-.46,-.13,-.32,.08,0,.22,.12,-.29,-.32,-.1,.18,.06,-.44,.04,.23,-.03,.12,.03,-.06,.22,.03,.05,.05,-.45,.12,.18,-.29,.04,-.1,-.35,-.05,-.3,-.14,.03,.03,-.09,.09,-.09,-.49,.23,-.25,.03,.24,-.05,.21,.02,-.23,.17,.25,-.12,-.16,-.37,-.09,-.24,.03,.04,.04,.11,-.01,-.07,.13,-.14,-.26,.1,.27,-.29,-.34,.04,.13,.29,-.23,-.42,-.24,-.27,-.25,-.15,.21,.09,-.36,.2,-.02,.08,-.19,-.13,-.18,.28,-.13,.15,-.52,-.31,-.11,.11,-.08,-.06,.02,-.07,-.29,-.09,-.02,-.44,.06,.3,-.22,-.47,.05,.03,-.18,-.23,.05,.19,-.16,.19,.15,-.32,.18,-.2,-.17,0,0,-.14,-.37,.12,.12,-.34,.14,-.04,.15,.27,-.13,-.04,.04,-.41,-.02,-.02,-.22,-.2,-.52,-.31,.01,-.56,-.33,-.29,.12,.09,-.01,-.18,-.2,-.1,.3,-.22,-.43,-.09,.03,-.18,-.3,-.22,-.17,-.12,0,-.34,-.06,-.01,-.11,-.15,-.33,-.34,.08,-.31,-.62,-.15,-.23,0,-.33,-.09,.02,-.27,-.37,.14,-.1,-.45,-.3,-.33,-.18,-.16,-.16,-.45,-.32,-.29,.27,.18,-.01,.06,.23,-.5,-.14,-.15,-.28,.06,-.05,-.19,0,-.44,-.48,0,.11,-.55,-.1,-.15,-.49,.22,.16,-.12,-.16,.02,-.17,-.27,-.22,-.19,-.29,.05,-.19,.02,-.3,.08,-.08,-.12,.14,-.58,-.02,-.22,-.24,-.21,.15,-.22,-.43,-.18,-.14,-.17,-.18,.24,-.05,.05,-.23,-.18,.05,.33,-.08,-.38,-.25,.16,-.47,.22,-.05,-.39,-.01,-.02,-.03,-.19,-.47,-.49,-.3,-.3,-.1,-.63,-.21,-.29,-.18,.45,-.05,-.11,.38,-.19,.03,-.46,-.01,-.58,-.26,-.19,-.27,.21,-.14,.19,-.16,-.03,-.05,-.09,.21,.11,-.22,-.02,-.01,-.15,-.32,-.44,-.3,-.04,-.25,-.36,-.18,-.38,-.16,-.38,-.02,.25,.29,-.03,-.04,.42,.12,-.34,-.36,-.26,-.5,-.62,-.63,.1,-.35,-.42,.29,.07,-.02,-.38,-.28,-.11,.25,-.06,.07,.12,.17,-.06,-.6,-.2,-.29,.28,-.11,-.19,-.3,-.05,-.02,.35,.13,-.47,.09,-.5,-.11,-.38,-.32,-.14,-.29,-.13,-.3,-.05,-.1,.04,.07,.35,.2,.08,.35,.09,.21,.19,-.02,.1,-.01,-.24,-.35,.26,-.36,-.58,.31,-.57,.25,-.01,.24,-.05,-.33,-.51,-.41,-.08,-.19,-.2,.03,-.04,-.31,-.1,-.11,-.33,-.37,-.22,-.11,-.09,.07,-.24,-.29,-.27,-.52,.06,.11,.11,.03,-.25,.1,-.17,-.04,-.13,-.43,-.18,-.58,-.56,-.46,-.42,-.11,-.36,.16,.11,-.39,-.02,.31,.12,-.25,-.36,-.33,-.27,.05,-.41,-.09,-.54,-.11,.07,-.04,.3,0,-.02,-.33,.16,0,-.1,-.36,.22,-.2,-.01,-.01,.22,.08,.01,.19,-.51,-.11,.04,-.14,.02,.25,-.25,.08,.19,.03,-.01,-.23,.28,-.01,-.29,-.14,-.35,-.12,-.45,.49,-.27,.06,-.42,-.07,-.06,-.06,-.17,-.3,.11,.04,.01,.34,.21,0,-.25,-.32,-.34,-.19,.24,.02,-.13,-.11,-.16,-.1,-.01,.09,-.24,-.57,.04,-.28,-.25,-.21,-.14,-.01,-.48,-.3,.01,.24,-.02,-.14,-.07,.03,.21,-.44,-.04,.29,-.03,-.52,.12,-.22,-.2,.08,0,-.26,.1,-.07,.24,-.38,.03,-.38,.05,-.03,.06,.11,-.38,-.37,.07,-.17,-.02,.02,-.48,-.45,-.62,.07,-.54,-.57,-.4,-.13,-.26,.11,-.13,-.04,-.22,.07,0,-.03,.19,-.15,-.49,-.25,.22,-.27,-.09,-.39,-.51,.06,.02,-.3,-.21,.23,.13,.1,.09,-.14,-.52,-.04,-.49,.01,-.02,-.13,-.21,-.19,-.39,.27,-.13,-.25,-.38,.23,-.08,.27,-.07,-.49,-.14,-.56,-.13,-.35,.05,.23,-.18,.2,-.27,-.41,-.46,-.25,-.31,-.29,-.31,-.43,.15,.01,-.65,-.14,-.44,-.45,-.28,-.55,.17,-.44,-.17,0,.08,-.43,-.28,-.36,-.43,-.42,.31,-.28,-.46,.11,.41,-.41,-.04,-.52,.3,-.2,-.26,-.17,-.44,-.36,0,-.08,.02,.21,-.56,.39,-.33,-.28,-.35,.34,-.04,-.06,0,.25,-.17,.01,.07,-.02,-.39,-.04,.08,-.18];export{a as rvalData};
