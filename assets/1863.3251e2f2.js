const a=[-.42,-.26,-.19,-.08,-.17,-.4,-.02,-.1,-.02,-.01,-.11,-.26,.42,.24,-.2,-.26,-.3,-.03,.38,-.05,-.15,-.11,.16,-.17,-.18,-.14,-.05,0,.13,-.05,-.01,-.05,-.19,-.54,-.2,-.15,-.34,-.18,-.01,-.15,0,-.18,-.17,-.1,.21,-.22,.09,-.33,-.1,.13,-.1,-.53,-.23,-.16,-.07,-.19,0,-.48,-.03,-.08,-.06,-.18,-.09,.04,-.04,-.12,-.18,-.17,-.03,-.11,.04,-.27,.01,.1,-.23,-.19,-.22,-.03,-.14,-.11,-.01,-.08,0,-.14,.02,.26,-.1,.02,.1,-.09,-.06,.25,.08,-.07,-.33,.46,0,-.53,.09,-.08,.01,-.15,-.05,.09,.03,.27,.02,.15,-.18,-.01,-.27,.08,.03,-.14,-.02,-.26,.03,-.16,.06,-.14,.24,.13,-.48,.01,-.04,.03,-.16,-.11,-.13,-.21,.18,.15,.1,.08,-.42,-.31,.02,.3,-.12,-.49,-.15,-.53,-.08,-.13,-.58,-.14,.01,-.04,-.01,.11,-.15,-.03,-.04,-.34,.06,-.01,.08,-.65,-.17,-.18,.06,-.07,.25,.23,.04,.04,-.18,-.12,.07,-.12,-.64,-.12,.05,.09,.06,-.04,.02,-.03,-.02,-.17,.05,-.12,.1,-.14,.09,.42,-.44,-.55,-.01,-.15,.05,-.02,.21,-.13,-.12,-.15,0,-.26,-.44,.05,-.14,0,-.22,-.25,0,-.05,.11,.05,.06,.38,.1,-.24,-.27,-.21,-.48,0,.15,.12,-.06,.01,.1,.15,.02,-.11,.13,-.2,.07,-.11,-.12,-.02,.09,.11,-.15,-.05,.48,-.63,-.15,-.18,.19,-.08,-.06,-.19,.14,.06,.06,.04,-.03,-.2,-.35,-.06,-.05,.35,-.01,.19,-.16,.35,.26,-.13,-.04,-.19,-.17,.1,.02,-.15,-.02,.08,-.03,-.13,-.12,-.35,-.28,-.39,-.26,-.08,-.15,.19,-.06,-.15,-.08,-.09,.05,0,-.18,.29,.17,.06,.09,-.33,-.01,.02,.08,.27,-.1,.09,.13,-.14,-.1,-.14,-.21,.17,.04,-.17,-.01,.09,-.29,.13,.15,-.1,.06,-.11,-.19,.22,.39,-.53,-.11,.17,.07,.11,-.12,.17,-.1,-.11,-.24,-.12,.12,.17,-.18,.15,.04,.14,.04,0,.12,.22,-.11,-.2,-.14,.05,0,.08,-.04,-.07,.13,-.09,-.25,-.09,.18,.01,-.04,.05,-.06,-.1,-.44,.2,-.02,-.15,-.07,-.07,-.06,-.21,-.24,-.03,.22,.28,.12,.12,-.47,-.2,-.12,-.04,-.1,-.02,-.01,-.01,-.12,.07,-.01,-.11,-.07,-.12,-.31,.09,-.08,-.17,-.04,.05,.06,.11,-.02,-.1,-.07,.71,-.2,.16,.17,-.16,-.13,.17,.05,.1,.11,.09,-.04,-.02,.08,.33,-.17,-.09,-.02,-.02,-.03,.15,.11,-.06,-.14,-.29,-.12,-.14,.03,.44,-.38,.04,-.34,.51,-.12,-.22,-.19,.28,.14,.14,.3,.02,-.2,-.39,.04,-.19,.1,-.11,-.18,-.29,-.08,-.14,-.1,-.47,.02,.02,-.18,.02,-.25,-.28,.01,-.05,.08,.18,-.04,.08,.1,-.27,-.22,.05,-.14,-.11,-.12,-.09,.04,.08,.16,.16,-.08,-.18,.12,-.25,-.61,-.6,.05,-.1,-.08,-.04,-.19,.01,-.05,-.25,-.2,.02,-.06,.13,.05,.13,-.05,-.1,-.01,-.27,.21,.12,-.29,-.16,.1,.02,-.05,.14,.07,.05,-.1,-.12,-.18,.09,-.13,-.08,-.13,-.06,-.11,.09,-.11,.22,-.09,.05,-.38,.1,-.05,-.13,.04,-.18,.21,.15,-.09,-.64,-.22,-.3,-.07,-.14,.15,.07,.19,.06,-.58,-.45,.12,.05,.14,-.19,.06,.17,.67,-.05,-.08,.12,-.2,-.01,-.15,.12,.09,-.2,-.16,-.2,-.21,.47,.04,.08,.13,-.09,-.18,-.12,.07,.11,-.13,.2,.11,.01,-.27,.17,-.06,-.13,-.14,-.02,-.15,-.19,.29,.2,.08,-.07,-.15,-.61,-.05,.01,.06,-.23,-.2,-.1,-.25,-.32,.11,.01,.21,-.09,.2,-.2,.08,-.08,-.4,-.02,-.1,-.24,-.17,-.24,-.15,.01,.08,-.08,-.42,.15,0,-.4,.49,-.08,.51,-.19,-.13,.03,0,-.6,.22,-.04,.18,-.12,.22,-.44,-.06,.05,-.06,.13,.31,0,.06,.03,0,-.1,-.11,.08,.02,.15,-.25,-.11,-.08,-.12,-.09,-.18,.11,-.13,.29,.1,-.54,-.15,.11,-.2,-.13,-.03,-.24,.03,.37,.09,-.19,-.03,-.25,-.11,-.06,-.39,-.07,.16,-.16,-.21,.02,-.28,.01,-.07,-.03,.15,-.04,-.18,-.04,-.13,-.07,.14,-.14,-.18,-.11,-.52,-.14,-.1,-.11,.01,-.07,.05,.09,.67,-.49,.22,-.56,-.49,-.09,-.07,-.15,.06,-.07,.06,-.19,.15,-.22,-.28,-.42,-.05,-.09,.08,-.23,.08,.2,.04,.1,.11,.13,.05,-.01,-.1,-.37,.32,-.08,.11,.13,.1,-.53,-.02,-.23,-.01,-.11,.04,.04,.13,-.26,.28,.01,.35,-.15,-.01,.03,-.03,0,-.24,-.05,-.27,.1,-.18,-.65,.09,-.03,-.31,-.29,.19,.24,-.24,-.23,-.01,-.02,-.01,-.11,.01,-.06,-.15,-.08,.63,0,-.56,.17,.01,-.17,-.66,.05,-.27,.2,-.05,-.2,.02,-.06,.09,-.3,-.15,-.09,-.05,.14,-.05,.03,.15,0,.15,-.01,-.2,-.12,.01,-.13,-.12,.28,.07,.23,-.29,.17,-.09,-.51,.15,-.06,-.1,-.11,.02,-.12,.02,-.09,-.08,.06,.16,.27,0,-.02,-.19,-.53,-.37,.18,.17,.29,-.19,-.34,-.24,-.1,-.05,.16,-.2,-.15,.22,.16,-.04,-.13,.31,-.59,.04,-.12,-.14,.48,.21,-.06,-.14,.08,-.2,.02,-.16,0,-.17,-.16,.06,-.03,.16,-.14,.14,.01,-.12,-.12,-.22,.28,.22,.11,.1,-.03,-.65,.06,.12,.17,-.29,.14,.03,.12,-.07,.14,.11,-.14,-.53,-.04,-.15,-.01,-.07,-.11,-.16,.06,.15,-.16,.09,-.06,.58,.27,-.03,-.19,.27,-.14,.33,.04,-.1,.05,-.1,-.09,-.08,-.61,-.07,-.59,.15,-.62,.11,-.52,-.02,-.03,.17,-.07,.07,-.32,.05,.17,-.05,.08,.25,.25,-.12,-.13,-.18,-.52,-.2,-.11,-.02,-.04,-.21,-.05,-.16,-.05,.16,0,.1,-.28,-.16,-.56,.12,.08,-.01,.06,.1,.04,-.25,-.02,-.17,.09,.1,.22,.14,0,-.09,-.15,.11,-.13,.1,-.13,.09,-.03,.15,-.04,-.14,-.08,-.02,.28,-.05,.19,-.18,-.2,.1,-.07,.08,.18,.14,.1,-.03,-.11,.08,0,.1,.09,.32,.14,-.68,-.7,-.18,.15,.16,.09,.14,.09,.05,-.01,-.2,.08,.33,-.1,-.01,-.15,-.11,-.29,-.14,-.62,-.33,.14,-.46,-.08,-.24,.14,.04,-.01,.07,-.09,0,.1,-.27,-.13,.33,-.24,.05,-.33,.37,-.15,-.05,-.62,.09,.25,.23,-.05,.15,.12,-.11,-.18,.15,-.13,-.06,.16,-.16,.28,.09,-.14,.05,-.3,.06,.11,-.13,.06,-.16,-.08,.18,.28,-.08,-.01,-.04,.13,-.07,.04,-.66,.17,-.12,.01,-.16,-.12,-.08,-.12,-.01,-.06,-.34,-.3,-.14,-.04,.02,-.18,.08,-.27,-.18,-.52,.14,-.17,-.03,-.15,-.03,-.07,.32,0,-.08,.27,.27,-.13,.15,-.11,-.03,.18,.26,-.12,.01,-.05,.07,-.06,-.17,-.08,-.26,-.08,0,-.08,-.1,.63,-.01,.12,.14,.07,.31,.16,-.16,-.04,-.12,-.06,-.22,-.44,-.43,.19,-.3,-.08,-.18,-.07,.02,.15,-.16,-.17,.26,-.29,-.2,-.1,.23,-.58,.02,-.11,-.31,.02,-.02,-.18,-.57,-.11,-.13,-.1,.02,-.25,-.17,-.35,-.05,.23,.12,-.56,-.08,-.44,-.58,-.18,-.02,-.44,.12,.05,-.17,-.17,-.14,-.04,-.15,.11,-.51,.24,.19,-.03,-.06,-.22,-.27,-.04,-.1,.19,.19,-.17,.04,.04,-.45,-.19,-.21,.03,-.1,.13,.12,.16,.29,-.11,-.54,.08,-.07,-.08,.06,-.13,-.24,-.48,-.12,.19,-.08,.05,-.2,-.14,.09,-.14,-.53,.33,-.06,-.18,.16,-.42,-.09,-.06,-.03,.02,-.17,-.03,-.58,-.56,-.27,.2,.02,-.12,-.14,-.09,.05,-.04,-.03,-.2,-.06,.07,-.26,-.42,-.57,-.25,-.17,-.1,-.21,-.59,-.03,-.53,.12,-.07,-.63,-.08,-.03,-.33,-.23,-.37,-.28,.07,.24,.02,-.02,-.21,-.15,-.26,.11,.05,-.17,.02,.02,.02,-.72,-.08,-.13,-.1,-.08,.04,.14,.08,-.4,0,.03,-.07,-.44,-.14,.04,-.13,-.54,-.16,-.03,-.22,-.55,.06,-.26,-.07,-.26,.04,.24,.22,-.07,-.07,-.03,-.08,-.12,-.28,.15,-.08,-.17,-.13,.19,-.21,-.21,.03,-.19,.3,-.04,.35,.13,-.17,-.01,-.2,-.49,.1,.18,.45,.12,.01,.57,-.15,-.08,-.06,-.01,.01,-.15,.15,-.03,.16,-.17,.12,-.25,.13,-.17,.03,.53,-.17,-.13,.07,.19,.03,-.06,-.45,-.01,-.04,.14,-.03,-.01,.62,.09,.13,.02,.12,.14,-.04,-.14,.76,.15,.24,.09,-.17,.09,-.11,.08,.11,.08,.24,-.15,.37,.17,.12,.17,-.15,.19,-.04,.15,.15,-.09,.15,-.01,.5,.04,-.07,-.06,-.2,.06,-.16,.02,-.28,-.14,.09,-.57,-.18,.11,.15,.14,-.2,-.17,.04,-.18,-.34,.09,.08,-.19,-.07,-.12,-.39,.23,-.13,-.27,.17,-.01,-.14,-.07,-.05,-.32,-.3,.02,-.07,-.25,-.07,-.08,.07,-.17,-.31,-.15,-.03,0,-.16,-.16,-.15,-.58,-.13,.24,.01,-.24,.12,-.17,-.46,.15,-.19,.08,-.05,.03,-.44,.01,-.06,-.15,-.18,-.12,-.07,0,-.09,.22,0,.14,-.27,-.16,-.04,-.06,-.08,-.08,.09,0,.02,-.33,.2,-.16,-.13,-.22,-.05,.06,.02,.33,.24,.05,.41,.09,.14,.11,.08,.09,.15,-.17,.1,-.15,-.05,.13,.04,-.08,-.25,.22,-.09,-.09,-.06,.05,-.18,.01,.19,.12,-.23,.14,.26,-.32,-.13,.11,-.21,.09,.3,.35,-.18,.01,-.06,-.03,.01,-.01,.06,-.37,.1,-.01,-.12,-.41,-.21,-.09,.02,-.1,.23,.12,-.07,-.08,-.06,0,-.05,-.17,-.09,0,-.05,-.04,-.08,0,.33,-.15,-.24,.04,-.01,.11,-.03,-.04,-.59,.05,.01,-.24,0,-.08,0,.02,.06,-.13,.04,.01,-.09,-.05,-.22,-.03,-.1,-.07,-.09,-.06,-.6,-.03,.18,-.07,.07,-.2,.01,.08,-.05,-.12,.02,-.04,.08,-.2,-.11,-.15,-.11,-.05,.03,.13,-.11,.1,-.24,.13,-.23,-.19,-.01,-.01,-.12,.16,-.13,-.2,-.17,-.11,-.17,.01,.04,-.08,.35,-.01,-.05,-.08,-.03,.02,.1,-.02,-.57,-.09,.1,-.13,-.11,.11,.17,-.26,-.03,-.02,-.16,.16,-.1,-.45,.12,.21,.05,-.04,-.06,.06,-.06,-.12,.07,-.43,-.01,.06,-.01,.12,.13,-.06,.02,-.12,-.15,-.12,.04,.3,0,-.02,.06,.09,.17,-.22,-.2,-.09,-.11,-.07,-.19,.11,.03,-.01,.05,-.03,-.1,.12,.01,.32,-.09,.49,-.23,-.07,-.04,-.12,.14,-.11,-.07,.01,-.1,-.14,.02,.23,.16,.01,.03,-.12,0,-.16,-.16,-.24,.04,0,-.19,-.21,-.18,-.08,-.17,.06,.13,-.06,-.06,.03,.16,.06,.01,.09,.13,-.18,-.2,-.16,.07,-.23,-.05,-.09,-.01,-.05,-.17,-.15,-.07,-.4,.37,-.04,-.06,.06,-.1,-.14,-.17,-.03,.09,-.03,.09,-.04,-.66,.2,.25,.14,-.06,.1,-.15,-.12,-.2,-.15,-.05,-.01,-.07,-.11,-.08,-.12,-.02,-.05,.19,.29,.01,.14,.15,-.02,.19,.03,.12,-.36,-.02,-.05,.43,-.18,-.22,-.2,-.06,.16,.02,-.06,-.1,-.04,-.19,-.15,-.14,-.12,-.02,.07,-.03,-.02,-.19,-.38,-.12,-.2,-.01,-.12,.05,.11,.23,-.01,-.16,-.21,-.09,-.03,.11,0,-.2,.02,-.02,-.23,-.07,-.25,-.1,-.14,-.18,-.2,-.11,.07,-.01,.14,.1,-.1,.04,.16,-.15,-.12,-.21,-.09,-.2,.18,-.11,-.04,-.06,.27,-.05,-.13,.18,-.59,-.58,-.2,-.06,.08,.01,-.09,.44,-.31,-.04,.1,.13,-.05,.06,-.18,-.19,.1,.09,.02,.15,.05,-.17,.03,.09,-.27,.01,-.16,1,.03,-.03,-.12,.04,.13,-.22,.07,-.1,.03,-.25,.28,-.04,.09,-.05,-.04,-.01,-.16,-.46,.3,.46,-.21,-.06,-.07,-.19,-.09,0,.03,-.18,.11,-.09,-.63,-.17,-.14,-.1,-.14,.35,-.25,-.16,.07,-.27,-.11,-.19,-.17,-.24,.11,.15,-.08,.05,.09,.05,-.08,-.09,.16,-.26,-.16,.55,.03,-.21,.12,.24,-.06,-.03,-.65,.17,-.15,-.44,-.16,-.05,-.1,-.12,.06,.12,.05,-.48,-.16,-.03,.01,-.32,-.19,-.14,-.17,-.2,-.17,-.23,-.1,-.1,.6,.02,.03,-.1,.27,-.24,-.34,-.09,-.42,-.2,-.21,.09,-.17,-.02,-.13,-.24,-.05,.07,-.67,.23,.06,-.33,-.07,.15,-.05,-.21,-.01,-.2,.01,-.28,.17,.08,-.23,.09,.21,.13,-.08,-.21,-.15,0,-.01,.1,-.19,-.4,-.16,-.01,-.18,-.11,.36,-.07,-.19,-.11,-.19,-.2,-.37,-.09,-.22,-.07,-.16,.15,-.12,-.16,-.16,-.03,-.28,-.16,-.36,-.24,-.24,-.22,.02,-.11,-.23,-.16,-.17,-.14,-.07,.14,-.13,-.14,.1,.12,-.2,-.61,-.15,.2,.12,-.14,-.2,-.13,-.14,-.03,-.17,-.1,.03,-.18,.06,-.18,-.29,-.08,.16,-.09,-.17,-.16,.4,-.45,.15,0,.04,-.17,-.62,.14,-.07];export{a as rvalData};
