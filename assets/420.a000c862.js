const a=[-.18,-.2,-.6,-.09,-.46,-.16,-.09,.14,.18,-.2,-.04,-.38,.3,.4,-.25,-.07,-.21,.13,.27,-.02,.12,.19,-.01,-.13,-.02,-.23,.03,-.11,-.01,.04,-.19,.14,-.32,-.54,-.01,-.07,-.47,-.14,-.1,-.49,-.02,-.33,-.38,-.09,.16,-.08,.09,.09,.35,-.04,-.08,-.39,-.42,-.42,-.39,-.09,.09,-.49,-.1,-.16,-.29,-.35,-.43,.06,.15,-.01,-.34,-.14,-.05,0,-.03,-.26,-.13,.09,-.47,-.2,.06,-.27,-.46,0,.14,-.09,.08,-.22,-.19,.32,-.12,.16,.39,-.24,-.37,.11,.15,.22,-.22,.42,.37,-.27,.09,-.27,.02,-.47,-.44,.13,-.3,.24,.09,.19,-.24,-.34,-.12,-.1,.03,.31,.02,-.26,-.15,.19,.44,.03,.35,.2,-.4,.37,.02,-.15,-.47,.15,-.06,-.3,.2,.24,.1,-.16,-.23,.1,-.06,.08,.06,-.4,-.37,-.47,-.17,-.14,-.44,-.06,-.02,-.04,-.28,.22,-.48,.01,-.08,-.18,.22,-.17,.24,-.47,-.04,-.16,-.04,-.39,.41,.01,.13,-.17,-.13,.08,.03,-.17,-.43,.14,.07,.19,-.12,.21,.04,.17,-.16,-.33,.15,-.14,-.01,-.52,-.25,.36,-.32,-.49,-.09,-.13,-.03,-.01,.06,-.25,-.37,-.45,-.38,-.51,-.25,.15,-.12,-.09,-.31,-.07,.3,-.41,.04,-.07,-.14,.32,.18,-.13,-.19,-.21,-.48,.03,.04,.22,.2,.25,-.24,-.21,-.24,-.46,-.02,-.33,.06,.13,-.47,-.12,-.06,.14,-.09,-.63,.26,-.46,-.14,.06,-.08,-.01,-.17,-.18,.38,.11,.21,.22,-.16,-.15,-.2,-.16,-.07,.39,-.32,.3,-.42,.25,.04,-.16,-.18,-.58,-.19,-.17,-.15,-.37,.08,-.31,.06,-.19,-.06,-.32,-.21,-.14,-.33,-.64,-.26,.04,.06,-.23,-.5,.38,-.11,.21,-.2,.37,-.08,-.09,.12,-.32,-.37,.19,.22,.04,-.21,.22,.17,-.38,0,-.2,-.01,-.26,-.11,-.44,.04,.11,-.38,.14,.33,-.36,-.05,0,-.22,.15,.39,-.39,-.25,-.26,-.29,-.19,-.65,-.24,-.18,-.21,-.22,-.33,-.11,-.03,-.32,.01,.26,-.01,.51,-.1,.01,.15,.1,-.08,.04,-.12,.37,.31,-.17,-.35,-.06,.19,-.4,-.59,-.07,-.19,-.27,.08,-.35,-.06,-.4,-.04,.16,-.22,-.15,0,-.59,-.6,-.07,.17,.02,.31,-.02,.27,-.39,-.39,-.31,.11,.11,.08,.09,.16,-.34,-.24,.08,-.21,.02,-.28,-.04,-.05,-.02,-.07,.03,-.11,-.05,-.05,-.38,-.37,-.59,.49,-.31,.17,.21,-.47,.34,.07,-.08,.08,-.12,.06,-.59,-.01,0,.05,-.21,-.54,-.29,-.28,-.6,.5,.28,-.57,-.38,-.24,-.35,-.31,-.13,1,-.28,-.15,.14,.41,.17,-.36,-.36,.06,.07,.15,.45,.18,.02,-.27,-.23,-.51,.13,-.31,-.41,-.49,-.41,-.14,-.2,-.11,-.26,-.15,-.42,-.2,.13,-.01,.05,-.15,.31,.15,.12,.17,.38,-.46,-.19,.07,-.59,-.39,.26,-.26,-.04,.05,.18,.17,-.01,-.46,.13,-.42,-.61,-.34,-.11,-.21,-.35,.06,-.5,.21,-.37,-.32,-.43,.13,-.3,.18,-.22,.35,-.05,-.67,-.05,-.35,.38,.09,-.62,-.24,-.14,.22,-.19,.12,-.09,-.13,-.53,-.23,-.33,.18,-.14,-.28,-.32,-.32,-.4,.16,-.28,.25,-.31,.29,-.45,.06,-.22,-.24,-.05,-.54,.12,.09,-.25,-.47,-.13,-.49,-.05,-.3,-.01,-.12,.09,.01,-.44,-.46,-.24,-.1,.24,-.3,-.05,-.22,.48,.03,.26,.01,-.23,.04,-.62,.13,.14,-.33,-.56,-.68,-.19,.38,.28,.23,.18,.03,-.56,.24,.19,.31,.08,.17,.02,.18,-.37,.27,-.57,-.64,-.13,.26,-.29,-.55,.22,.38,-.11,.03,.2,-.54,-.34,.09,-.31,-.16,-.44,-.39,.24,-.44,.22,.04,-.01,-.53,.36,0,-.18,-.52,-.43,-.01,-.25,-.49,-.56,-.36,-.38,.14,-.11,.36,-.2,.11,.02,-.44,.09,-.06,.29,-.07,-.45,.18,.03,-.46,0,.17,-.03,-.04,.1,-.44,.09,-.12,-.39,.27,.12,.37,.21,-.19,-.18,-.4,-.25,.01,.18,.29,-.11,-.24,.31,-.19,-.45,-.37,.28,-.32,.31,-.3,-.37,.15,.16,-.44,-.2,-.25,-.28,.14,.31,.19,-.48,-.35,-.36,-.37,-.03,-.37,.01,.12,-.05,-.23,.03,-.21,.01,.1,-.5,.01,-.3,-.44,.13,.01,.14,.22,-.27,-.37,-.07,-.35,.19,-.23,-.24,.26,-.09,.15,.14,.55,-.53,.36,-.54,-.24,-.58,.19,-.21,.25,-.05,-.24,-.13,.2,-.14,-.44,-.28,.08,-.26,.22,-.31,.06,-.15,.08,.38,-.16,.12,.18,.19,-.35,-.47,.26,-.14,-.04,.21,.3,-.29,-.55,.12,-.25,-.34,-.1,-.06,.01,-.35,.14,-.14,.22,.02,-.28,.35,.09,.15,.06,.07,-.39,.12,-.26,-.43,.39,-.18,-.15,-.43,-.07,.37,-.17,-.4,-.11,-.27,.19,-.21,-.37,-.04,-.47,-.41,.43,.2,-.18,.13,-.05,-.36,-.47,-.13,-.08,-.1,.23,-.36,-.29,-.49,.12,-.29,-.31,-.65,-.42,-.15,-.23,-.02,.26,.39,.13,-.48,-.23,-.25,.11,-.49,-.19,.48,-.31,.43,-.3,.49,-.47,-.5,.01,.03,.29,-.36,.09,-.04,.11,-.37,.24,-.16,.27,.51,.41,-.05,-.33,-.5,-.06,.36,-.06,.27,-.35,.02,-.42,.08,-.15,.22,-.29,-.25,-.1,.1,-.03,-.08,.12,-.52,.29,-.43,-.2,.5,.28,.1,-.58,.11,.23,-.04,-.05,.23,.11,-.09,.17,.01,.15,-.36,-.22,.07,.17,-.27,-.46,.41,.18,.14,-.07,.19,-.37,.26,.31,.45,-.06,.06,-.14,.09,-.32,.06,-.03,.04,-.44,.04,-.37,.17,-.38,-.26,.01,-.12,.21,-.47,.25,-.32,.62,.53,-.26,-.37,.22,.04,.31,-.46,-.24,0,-.05,-.04,.23,-.43,-.11,-.41,-.03,-.34,.01,-.44,.09,.2,.09,-.57,.24,-.24,.05,.3,.18,.06,.2,.29,-.27,-.41,-.55,-.56,-.49,-.32,-.29,-.03,-.64,-.28,-.36,-.23,.53,-.17,.06,-.54,-.34,-.37,.15,-.03,.03,.19,-.08,.3,-.37,-.07,.03,.36,.16,.22,.36,.09,.03,-.31,-.06,-.32,.07,-.19,.13,.2,.09,-.3,-.07,-.06,-.01,.65,.14,.32,.12,-.24,.38,-.18,.19,.16,-.09,-.03,-.28,-.41,.17,.35,.23,.08,.43,.09,-.38,-.49,-.43,.02,.22,-.04,.2,.1,.03,.15,-.03,.18,-.01,-.09,.1,-.24,-.23,-.27,-.11,-.35,-.3,.16,-.29,-.01,-.3,.11,.14,.16,.04,0,-.01,.17,-.12,-.25,.09,-.34,-.3,-.11,.16,-.4,.21,-.48,.16,.17,.33,-.21,-.06,.08,-.29,-.21,.3,-.18,.2,.2,-.46,.37,.12,-.15,-.13,-.26,.22,.04,-.44,-.14,-.28,-.42,0,.34,.06,-.03,0,.01,-.13,.16,-.38,.15,.02,-.26,-.09,.05,0,-.58,-.08,-.15,-.34,-.41,-.5,.2,.01,-.52,.07,-.43,-.43,-.41,.29,-.16,.15,-.27,.24,-.13,.29,.27,-.04,.16,.24,-.45,.27,-.66,-.34,.35,.21,-.33,-.24,.26,.38,-.07,.11,-.36,-.01,-.25,.12,-.35,.11,.48,-.17,-.16,.13,.34,.34,.04,.01,-.13,-.24,.11,-.27,-.27,-.37,.32,-.11,.01,-.24,-.32,-.08,.17,-.4,-.49,.3,-.16,-.48,-.23,.2,-.4,.24,-.23,-.08,.23,.01,-.4,-.42,-.12,-.4,-.6,.3,-.23,.09,-.49,-.4,.15,-.1,-.41,.09,-.39,-.45,.02,-.01,-.27,-.02,-.1,.03,-.39,-.38,-.51,-.17,-.13,-.46,.29,-.03,-.32,.05,-.31,-.08,.03,.08,.17,.12,0,-.18,.2,-.4,-.42,-.3,.11,-.65,.11,.27,.43,.35,-.35,-.25,-.04,-.48,-.42,.21,.23,-.38,-.38,-.5,-.08,-.42,.22,-.69,-.56,.1,-.57,-.45,.26,.08,-.38,-.01,.01,-.23,-.5,-.06,.16,-.26,-.19,-.41,-.46,-.43,.04,.29,-.17,-.34,.04,-.07,-.44,-.09,-.51,-.19,-.04,-.17,-.21,-.43,-.33,-.3,-.58,.02,-.43,-.02,-.38,-.09,-.18,-.38,-.29,-.02,-.2,-.41,-.34,.09,-.17,.25,.3,-.48,.16,-.4,.1,.23,.16,-.47,.1,.2,-.04,-.48,-.41,.01,-.39,-.03,-.4,.21,-.16,-.19,.26,.21,-.27,-.17,-.18,.04,.18,-.36,-.47,-.03,-.2,-.39,-.19,-.3,-.36,-.44,-.08,.01,.33,-.53,.09,-.44,-.13,-.12,0,.22,-.03,-.28,-.31,.14,-.36,-.2,-.3,-.44,.49,-.2,.34,-.05,-.24,-.11,-.38,-.45,-.05,.27,.41,.11,-.13,.4,-.55,-.37,-.58,.23,.05,-.49,.04,.01,.13,.13,.25,-.03,.22,-.43,.11,.59,.2,.12,-.08,.2,.11,-.34,-.13,.12,-.24,-.04,-.43,-.16,.44,-.14,-.01,-.14,-.13,.02,-.28,-.28,.54,.23,.16,.1,-.39,-.05,-.01,.01,.41,.05,.03,-.36,.1,.23,.35,.19,-.22,.4,.23,.35,.26,-.01,.08,-.31,.2,.17,-.34,-.36,-.25,-.31,-.15,-.22,-.35,.04,.13,-.36,-.4,.29,.07,.12,-.19,-.62,-.18,-.15,.05,-.09,.35,-.21,-.4,-.43,-.52,.08,-.18,-.31,.07,.13,-.26,-.04,.05,-.19,.28,.04,.12,-.1,-.32,.1,.28,-.09,.05,-.1,-.4,-.28,-.26,-.15,-.22,-.33,-.22,.22,-.32,-.31,.25,-.27,-.37,.15,-.05,.1,-.05,-.23,.02,.26,-.26,.04,-.4,-.12,-.28,.02,.1,.06,-.07,.04,-.21,.03,-.33,-.36,-.16,.01,-.37,-.44,-.15,.08,.33,.16,-.49,-.17,-.37,-.31,-.31,.26,.08,-.32,.27,-.06,.02,-.17,-.22,.07,.13,-.34,.22,-.48,-.1,-.09,-.15,-.18,-.08,.28,-.05,-.28,.06,.17,-.41,-.12,.17,-.21,-.46,.09,-.02,-.08,-.13,.08,.17,-.11,.29,.31,-.33,.09,-.25,.05,-.25,-.32,0,-.54,.03,.13,-.32,-.29,-.16,.18,.11,-.24,-.03,.19,-.47,.02,-.27,-.29,-.24,-.46,-.35,-.15,-.61,-.38,-.42,.18,.18,-.31,-.13,-.31,-.06,.45,-.28,-.56,-.49,-.28,-.16,-.42,-.32,-.1,-.04,-.15,-.41,-.09,-.16,-.05,-.11,-.34,-.2,.04,-.44,-.64,.11,-.27,-.45,-.27,-.04,.17,-.33,-.21,.12,-.07,-.54,-.32,-.32,0,-.08,-.13,-.55,-.18,-.45,.32,.23,-.01,.13,.22,-.38,-.04,-.13,-.15,.41,-.02,-.25,-.01,-.45,-.6,-.01,.25,-.59,.14,-.02,-.63,.24,.21,.05,-.1,-.24,-.21,-.13,-.3,-.24,-.32,.22,-.46,.12,-.14,.13,-.16,.01,.09,-.58,.13,-.37,-.35,-.17,.15,-.07,-.52,-.14,-.27,-.15,-.21,.1,-.13,.1,-.23,-.28,.05,.32,-.2,-.44,-.15,-.15,-.52,.07,.15,-.38,0,-.26,-.01,-.11,-.38,-.46,-.41,-.45,-.23,-.6,-.16,-.34,-.11,.27,-.25,.03,.34,-.22,.22,-.49,.29,-.7,-.28,-.03,-.25,.18,.13,.05,-.28,-.15,-.13,-.11,.36,.11,-.22,-.04,-.02,-.05,-.4,-.46,-.21,-.09,-.25,-.25,-.14,-.17,-.15,-.34,.03,.15,.12,-.13,-.01,.39,.12,-.34,-.37,-.06,-.45,-.67,-.5,.2,-.26,-.56,.18,.06,.09,-.4,-.25,.04,-.04,.37,.07,.05,-.02,-.22,-.62,-.25,-.3,.21,-.03,-.09,-.25,-.42,.11,.16,.33,-.54,-.04,-.63,-.22,-.44,-.49,-.19,-.33,-.23,-.33,.05,-.14,0,.1,.32,.11,.28,.49,.06,.16,.12,.05,.13,-.19,-.35,-.39,.27,-.17,-.54,.31,-.66,.33,.11,.31,.08,-.36,-.46,-.39,-.2,.08,-.25,.04,-.11,-.22,-.12,-.22,-.28,-.38,-.22,-.22,-.15,.03,0,-.3,-.28,-.66,-.3,.24,.12,-.03,-.26,.06,-.39,-.23,-.04,-.42,-.33,-.67,-.52,-.4,-.5,.06,-.43,.04,.13,-.49,-.22,.21,-.18,-.29,-.36,-.39,-.19,-.13,-.39,-.32,-.55,-.03,-.11,-.15,.11,-.42,-.42,-.24,.01,.1,.06,-.31,.27,-.08,.19,-.08,.3,.11,.18,.08,-.34,.02,-.15,-.2,-.16,-.03,-.32,.26,.2,-.13,-.03,-.19,.44,-.11,-.34,-.37,-.29,.13,-.45,.32,-.25,.03,-.37,.14,-.23,-.16,.02,-.09,.12,-.22,-.42,.28,.43,-.18,-.41,-.33,-.39,-.33,.13,.2,-.24,-.14,-.25,-.5,.07,-.05,-.24,-.43,.25,-.41,-.31,-.05,-.4,-.26,-.44,-.34,.1,.18,0,-.3,-.17,.33,.29,-.28,.27,.19,-.08,-.48,.37,.03,-.3,-.06,.13,-.31,-.09,-.4,.08,-.45,-.16,-.22,-.26,.13,-.1,0,-.18,.05,-.44,-.23,-.28,.15,-.46,-.41,-.64,.2,-.66,-.59,-.35,-.14,-.27,.33,-.22,-.23,-.26,.03,0,-.35,-.08,-.35,-.45,-.29,.3,-.26,.07,-.51,-.48,-.07,.18,-.6,.08,.24,-.1,-.06,.2,-.24,-.46,-.2,-.52,-.19,-.06,-.01,-.29,.02,-.09,.36,-.13,-.22,-.24,-.21,.05,.33,-.11,-.45,-.18,-.63,-.34,-.32,-.32,.22,-.16,.08,-.23,-.46,-.45,-.38,-.39,-.24,-.41,-.35,.27,.03,-.63,-.15,-.34,-.42,-.31,-.52,.14,-.4,-.17,-.27,.06,-.31,-.29,-.32,-.3,-.38,.3,-.43,-.28,.07,.24,-.24,-.44,-.47,.24,-.08,-.44,-.33,-.41,-.46,.05,.1,.1,-.01,-.58,-.05,-.29,-.31,-.24,.28,.22,-.02,-.08,.57,-.31,.17,-.07,-.03,-.31,-.43,.2,-.28];export{a as rvalData};
