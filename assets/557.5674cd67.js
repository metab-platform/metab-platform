const a=[.18,-.23,-.34,-.04,-.42,-.1,-.21,-.23,-.15,-.17,-.07,.13,-.01,.47,-.16,-.08,-.27,-.02,.17,-.08,-.04,.35,-.26,-.06,-.3,-.47,.36,-.09,-.12,.34,-.32,.38,-.36,-.1,.11,-.03,-.34,-.17,-.15,-.24,.17,-.46,-.26,-.03,-.01,-.06,-.06,.17,.29,-.35,-.25,-.12,-.21,-.47,-.41,-.19,-.2,-.25,-.33,-.26,-.38,-.37,-.55,.06,.11,.32,-.48,-.11,-.01,.02,-.06,-.19,-.4,.34,-.44,.29,.26,-.36,-.33,.2,.32,-.22,-.02,-.44,.03,.44,-.43,.05,.42,-.32,-.33,.08,-.32,.24,.14,-.01,.4,.19,.08,-.44,.06,-.54,-.46,.09,-.55,.1,.14,.07,-.37,-.39,-.05,-.45,0,.19,.16,-.27,.03,.34,.29,-.34,.09,.34,-.14,.22,-.01,-.43,-.48,.15,.31,-.33,-.25,.11,-.06,-.28,-.04,-.05,-.28,-.34,.29,.04,-.52,-.12,-.51,-.45,-.09,.14,.06,-.03,-.49,.09,-.54,-.23,.01,-.16,-.25,-.3,-.04,.04,.21,-.14,-.16,-.51,.14,-.26,-.36,-.32,-.18,.34,-.06,-.35,-.09,.19,-.25,-.02,-.35,.33,-.02,.34,-.38,-.38,.12,.1,-.02,-.2,-.4,.04,-.06,-.08,-.28,.2,.19,-.31,.05,-.5,-.49,-.37,-.45,-.21,-.09,.4,-.23,-.43,-.37,-.16,.43,-.33,-.02,-.39,-.39,.05,-.26,-.17,.19,-.32,-.23,-.15,-.16,-.28,.36,.16,-.41,-.47,-.3,-.39,-.36,-.36,-.28,.32,-.31,-.12,.03,.11,-.3,-.31,.04,-.17,-.11,.07,-.13,.01,-.41,-.15,-.17,-.17,-.31,-.14,-.07,-.14,-.02,.07,-.17,.35,-.43,.06,-.5,.14,-.12,-.28,-.24,-.28,-.1,-.23,-.37,-.52,-.01,-.53,.29,-.5,-.05,-.34,.25,.14,-.37,-.35,-.37,.07,.23,-.33,-.41,.29,-.34,.29,-.24,.42,-.38,-.32,.21,-.33,-.26,.27,-.07,-.38,-.35,-.15,-.22,-.26,-.08,.12,-.16,-.32,-.12,-.3,.38,.06,.1,-.14,.07,-.52,-.24,.03,-.41,.01,.03,-.09,-.19,-.32,-.33,-.31,-.38,-.24,-.47,.02,-.2,-.51,-.26,-.33,-.38,.07,.05,-.35,.51,-.39,.01,.14,.32,.03,.35,-.3,.07,.33,-.47,-.19,.02,.02,-.36,-.36,-.13,-.38,-.24,-.27,-.52,-.12,-.16,-.32,.2,-.3,-.27,.18,-.41,-.31,-.26,0,-.28,.13,.12,.35,-.21,-.4,-.33,.04,.18,.21,-.21,-.04,-.26,-.37,-.06,-.41,.13,-.39,.14,0,.05,-.02,-.05,-.16,.18,.08,-.31,-.35,-.4,.06,.13,.06,.09,-.32,.43,.22,-.01,-.04,.06,-.23,-.41,-.25,-.2,.01,-.26,-.35,-.49,-.45,-.38,.22,.09,-.42,-.2,.03,-.51,-.28,-.33,.28,-.21,-.32,.27,.16,-.11,-.38,-.31,.11,-.26,.04,-.14,-.03,-.35,-.05,-.37,-.42,0,-.41,-.42,-.41,-.54,-.44,-.48,-.04,-.34,-.42,-.3,-.38,-.13,.24,-.31,-.45,.46,-.09,-.01,.05,.36,-.38,-.27,-.3,-.47,-.39,.35,-.39,-.02,-.1,.13,.07,.43,-.41,.06,-.33,-.24,-.1,-.36,-.34,-.36,-.24,-.37,.34,-.43,-.28,-.36,-.35,-.38,-.11,-.35,.06,-.01,-.26,-.05,.15,.01,.07,-.45,-.37,-.26,.11,-.25,-.15,-.36,-.08,-.42,-.25,-.49,.1,-.08,-.34,-.29,-.41,-.52,-.17,-.48,0,-.31,.36,-.23,-.33,-.35,-.42,.28,-.39,.09,.01,-.26,-.09,-.07,-.24,-.14,-.4,-.34,-.23,-.14,-.22,-.1,-.08,-.27,-.07,.02,.15,-.21,-.36,.07,.15,.27,.01,-.06,.18,-.48,-.05,.3,-.38,-.4,-.29,-.35,0,1,-.13,.24,.03,-.41,.32,-.24,-.18,-.06,.07,.13,.04,-.19,.09,-.35,-.34,-.18,-.03,-.41,-.34,.1,.4,-.32,-.01,.28,-.13,-.51,-.18,-.47,-.26,-.33,-.43,.29,-.34,.09,.08,.01,-.4,-.16,.36,-.32,-.31,-.39,-.16,-.24,-.46,-.37,-.23,-.25,.37,-.3,.22,-.02,-.04,-.02,-.24,-.04,-.34,.06,-.13,-.34,-.16,.16,0,-.1,.01,-.17,.22,-.19,.09,-.36,-.28,-.51,-.09,-.08,.32,.35,-.34,-.18,-.49,-.33,-.26,-.21,.33,-.23,-.31,.4,-.04,-.19,-.51,-.02,-.47,.12,-.5,.01,.45,-.23,-.4,-.33,-.04,-.21,.15,.1,-.08,-.33,-.26,-.41,-.37,-.2,-.16,.04,-.16,-.44,-.44,-.31,.03,.14,.37,-.52,-.12,-.51,-.44,.3,-.1,-.17,-.03,-.08,-.35,-.24,-.13,.3,-.45,-.44,-.08,-.01,.19,-.1,.17,-.13,.02,-.17,-.19,-.41,.29,-.46,-.22,-.41,-.28,.05,.02,.25,-.2,.02,.34,-.44,-.07,-.19,-.22,.13,-.04,-.09,-.12,.3,.04,-.24,-.46,-.32,.11,-.27,-.09,.19,.44,.1,-.47,.34,-.29,-.33,.05,-.45,-.28,-.31,.13,-.09,-.02,-.07,-.21,.41,.24,-.08,.3,-.26,-.28,-.05,-.43,.07,.2,.12,-.21,-.4,.03,.07,-.06,-.29,-.19,-.08,.33,-.38,-.36,-.04,-.32,-.52,.1,.14,-.11,-.06,-.21,-.4,-.14,-.38,.24,-.2,-.22,-.37,-.42,-.33,.18,.15,-.49,-.31,-.48,-.36,-.33,.05,.39,.37,-.02,-.42,-.13,-.4,.32,-.38,-.51,.23,-.35,-.05,-.15,.26,-.49,-.28,-.38,-.34,.31,-.36,.06,.08,.18,-.35,.37,-.46,-.19,.35,.33,.17,-.34,-.1,-.18,-.16,-.25,-.05,-.36,.21,-.28,.23,-.02,.09,-.37,-.32,.08,.07,.19,.12,-.08,-.1,.35,-.32,-.24,.06,-.17,.4,-.47,.04,.31,-.47,.29,.08,.4,-.36,-.01,.16,-.11,-.34,-.28,-.34,.17,-.52,-.42,.16,.43,-.07,-.24,.45,-.11,-.17,-.16,.05,.13,.09,-.38,-.14,-.35,-.1,-.13,.23,-.09,.35,-.31,0,-.47,-.26,-.18,-.31,-.24,-.47,-.17,-.47,.31,.37,-.45,-.37,0,.15,.1,-.29,-.44,-.05,.23,.06,.06,-.05,-.31,-.13,-.31,-.03,-.24,-.03,.23,.31,.09,-.48,-.18,-.06,-.17,-.06,.1,-.15,.18,.15,-.28,-.45,-.38,-.12,-.33,-.39,-.35,-.34,-.35,-.3,-.4,-.4,.38,-.38,.09,-.37,-.47,-.03,-.04,-.17,-.31,-.12,-.06,-.2,-.32,.11,.03,-.16,-.01,-.11,.12,-.27,-.17,-.46,-.04,-.47,-.04,-.35,-.14,-.2,-.01,-.39,0,-.11,-.05,.43,.1,.28,.01,-.07,.38,-.41,.05,-.2,-.29,-.37,-.34,-.47,-.22,.39,-.28,-.2,-.15,-.06,-.07,-.01,-.43,-.45,-.16,-.38,-.18,.06,-.27,.1,-.18,.03,-.07,.05,.04,-.03,.01,-.04,-.03,.06,.05,.3,-.05,-.05,-.42,-.19,.21,-.11,-.01,-.34,.12,-.06,-.01,-.5,-.01,-.16,-.42,-.11,-.27,-.41,.04,-.04,.17,-.18,.23,-.03,-.33,-.02,-.48,-.33,-.1,-.23,.13,-.1,-.33,.26,.08,.12,-.38,-.11,.12,.43,-.39,-.37,-.37,-.11,-.09,-.06,.02,.17,-.16,-.09,-.33,.22,.04,.02,-.27,-.39,-.22,.34,-.34,-.27,.12,-.28,-.29,-.42,-.29,.06,-.29,-.35,-.15,-.49,-.45,-.1,.34,-.11,-.08,-.33,.23,-.27,.19,.36,-.43,-.03,.14,-.46,.33,-.25,-.52,-.15,-.14,-.44,-.35,-.07,.41,-.1,-.18,-.26,-.26,-.23,.01,-.27,.08,.16,-.41,-.38,.02,.39,.19,.04,-.3,-.29,-.39,.28,-.18,.09,-.11,.12,-.07,-.01,-.21,-.32,.12,-.13,-.36,-.4,.26,-.08,-.39,-.4,-.13,-.15,0,-.43,.15,0,-.14,-.53,-.1,-.31,-.01,-.33,-.01,.03,.14,-.37,-.38,.15,-.33,-.09,-.19,-.05,-.06,-.31,-.19,-.05,-.34,-.27,.02,-.43,-.36,-.47,-.38,-.26,-.17,.26,-.31,-.44,-.13,-.28,-.08,-.24,-.06,-.17,.17,.19,-.22,.17,-.11,-.36,-.3,-.06,-.28,-.05,.04,.16,.13,-.42,.14,-.08,-.49,-.48,.35,.28,-.43,.06,-.46,-.29,-.56,.03,-.4,-.29,-.27,-.36,-.04,.37,-.08,-.31,-.19,.01,-.46,-.36,-.06,.07,-.47,-.27,-.11,-.1,-.37,-.01,.33,-.32,-.3,.29,-.09,-.47,-.1,-.39,-.39,-.35,-.05,-.08,-.1,-.29,-.43,-.33,.06,-.11,.19,-.01,-.29,-.34,-.06,-.48,-.09,-.08,-.28,0,-.14,-.45,.44,-.16,-.46,.38,-.29,-.12,-.11,.22,-.42,.43,.35,-.39,.02,-.4,-.03,-.52,.05,-.25,-.11,-.15,.17,-.06,.08,-.46,-.05,-.28,-.27,-.09,-.07,-.36,.06,-.03,-.14,-.11,-.44,-.51,-.48,-.11,-.26,.07,-.44,-.41,-.52,-.33,-.37,-.08,-.14,.05,-.19,-.35,-.12,-.38,.2,-.39,-.27,.41,-.21,.01,-.04,-.23,-.32,-.34,-.08,-.26,-.07,.19,.06,-.21,-.07,-.25,-.49,-.31,.42,-.08,-.41,-.04,-.32,-.05,.07,-.1,.08,.09,-.47,-.35,.24,.13,-.07,-.1,.06,.28,-.51,.03,.22,-.36,-.28,-.45,-.3,-.07,-.35,-.24,-.45,.03,-.27,-.28,-.34,.16,-.03,-.01,-.15,-.49,-.39,.05,.17,.28,-.13,-.18,-.27,-.31,.09,.1,.03,-.21,.09,.06,.02,-.06,.08,-.15,-.22,-.07,-.07,-.5,-.48,-.28,-.34,-.35,-.46,-.35,.11,-.19,-.18,-.35,.17,-.26,.08,.11,-.31,-.39,-.15,-.15,-.4,.34,.06,-.4,-.36,-.29,-.12,.03,-.29,.06,.08,-.23,.2,-.14,-.14,.22,-.25,.08,-.21,-.36,.05,.25,-.32,.15,-.18,-.53,-.44,-.44,-.44,-.15,.08,-.39,.01,-.49,-.2,-.01,-.45,-.03,-.18,.06,.11,.05,-.21,.27,.03,-.08,-.33,-.49,-.38,-.27,-.22,.09,.2,.06,-.29,-.04,.29,-.41,-.48,-.24,.21,-.13,-.25,-.35,.17,.07,.29,-.47,.04,-.49,-.33,-.49,.1,-.15,-.27,.06,-.3,-.19,-.32,-.43,.02,.02,-.43,-.06,-.42,-.38,-.2,-.12,-.4,-.01,.08,-.08,-.4,.08,-.08,-.45,-.31,.21,-.34,-.39,-.27,-.18,-.18,-.41,-.03,-.02,-.42,.04,.1,-.41,.19,-.4,-.13,-.34,-.44,-.34,-.13,.18,-.08,-.43,-.07,-.08,.42,-.17,-.37,-.31,-.3,-.48,.07,-.35,-.32,-.53,-.36,-.35,-.34,-.4,-.54,-.37,-.25,-.13,-.42,-.35,.07,-.41,-.09,-.52,-.49,-.08,-.39,-.44,-.13,-.34,-.43,-.03,.06,-.42,-.34,-.37,-.31,-.24,-.33,-.17,.14,-.34,-.39,-.32,-.53,-.14,-.36,-.26,.4,-.49,-.19,-.05,-.16,-.41,-.27,-.47,-.38,-.32,-.17,-.36,-.37,-.52,.24,.17,-.25,-.13,-.25,-.27,-.33,-.11,-.26,.2,-.33,-.32,-.28,-.4,-.33,.14,.13,-.32,-.37,-.5,-.3,.08,-.09,-.43,-.16,-.41,-.53,-.36,-.5,-.08,-.52,.14,-.46,.03,-.26,.1,-.24,-.08,-.29,-.3,0,-.37,-.1,-.42,.1,-.28,-.45,-.4,-.43,-.4,-.49,-.18,-.17,-.24,-.33,-.22,-.04,.16,-.47,-.47,-.42,-.12,-.38,-.19,.01,-.46,-.32,-.53,-.23,-.08,-.32,-.34,-.4,-.35,-.17,-.31,-.37,-.52,-.35,.01,-.53,.05,0,-.53,.08,-.45,0,-.35,-.45,-.02,-.43,.1,-.26,-.02,-.34,-.32,-.13,-.27,-.13,.13,-.36,-.11,.24,-.04,-.42,-.35,-.12,-.12,-.48,-.07,-.16,-.43,-.41,-.37,.09,-.05,-.06,-.45,0,.3,.17,-.33,-.31,-.2,-.33,-.39,-.16,.07,-.34,-.46,.37,-.38,.14,-.48,-.39,-.33,.22,.15,.09,.23,-.17,-.26,-.36,-.43,-.35,-.14,-.35,-.31,-.44,-.12,-.05,.16,.1,-.46,.25,-.25,-.2,-.32,-.27,-.03,-.52,-.19,-.51,.31,-.12,-.06,-.21,.21,.1,-.22,.41,.19,.16,.05,-.08,.08,.11,-.43,-.42,.07,-.38,-.32,.11,-.31,-.04,.35,.35,-.06,-.45,-.33,-.47,-.14,-.01,-.37,-.1,-.33,-.48,-.34,-.06,-.45,-.33,-.39,-.44,-.39,-.29,-.01,-.49,-.37,-.49,-.29,.34,.06,-.15,-.42,0,-.5,-.06,-.4,-.33,-.54,-.28,-.33,-.31,-.42,.08,-.44,-.06,.07,-.39,-.28,.13,-.18,-.34,-.29,-.52,-.29,-.39,-.2,-.36,-.32,-.15,.02,-.08,.03,-.1,-.08,-.17,.07,-.17,-.11,-.41,.09,-.24,.06,-.22,.06,-.05,.13,.22,-.34,.08,-.28,-.4,-.37,-.19,-.51,.03,.08,.09,.03,-.44,.04,-.27,-.42,-.41,-.2,0,-.44,.03,-.45,.15,-.37,-.13,-.36,-.42,-.02,-.08,-.1,-.07,0,.24,.2,.12,-.51,-.5,-.37,-.33,.15,.12,-.45,-.4,-.35,-.27,-.03,-.04,-.45,-.28,-.08,-.31,-.47,-.16,-.4,-.11,-.47,-.45,.31,-.2,-.28,-.44,-.37,-.05,.4,-.34,-.02,.17,.19,-.34,.08,.08,-.47,-.22,.01,-.52,-.1,-.1,.09,-.55,.34,-.16,-.35,.09,-.13,.08,-.22,-.09,-.03,.03,-.42,.05,-.34,-.42,-.34,.25,-.29,-.33,-.36,-.41,-.41,-.02,-.06,-.33,-.43,-.27,.11,.04,.1,-.2,-.47,-.43,-.02,-.37,.02,-.19,-.31,.05,-.34,0,-.12,.3,.06,.09,-.07,-.41,-.35,-.38,-.38,-.42,-.03,-.4,-.1,.13,-.02,-.03,.09,-.42,-.35,-.3,.18,.44,-.34,-.25,-.15,-.46,-.43,-.46,-.35,-.04,-.41,.43,-.45,-.47,-.41,-.14,-.51,-.02,-.44,-.3,-.27,-.21,-.32,-.44,-.36,-.35,-.46,-.27,.26,-.36,0,-.45,.19,-.38,-.44,-.45,-.34,-.46,-.07,-.51,-.2,-.17,.35,-.38,-.15,-.32,.06,-.09,-.51,-.21,-.42,-.54,.28,-.09,.23,-.27,-.44,-.18,-.27,-.35,-.48,0,.32,.03,.17,.15,-.19,-.28,-.02,-.01,-.36,-.22,-.09,-.47];export{a as rvalData};
