const a=[-.52,-.15,-.18,-.13,-.08,-.45,.13,-.04,.13,-.02,-.05,-.24,.44,.22,-.12,-.15,-.38,.07,.4,-.2,-.14,-.09,.18,-.12,.02,.03,-.13,-.14,.14,-.1,.04,-.09,-.09,-.46,-.28,-.11,-.24,-.1,.17,-.18,-.02,-.03,-.2,-.21,.2,-.08,.04,-.36,.01,.26,-.03,-.58,-.21,-.05,-.13,-.03,.03,-.53,-.01,.1,-.2,-.1,-.04,-.14,.13,-.2,-.1,-.1,-.14,.14,-.07,-.11,.09,.1,-.06,-.24,-.18,-.18,-.14,-.25,-.05,.15,.13,.04,-.04,.14,.07,.25,.05,.02,-.23,.12,.17,-.04,-.31,.34,.05,-.53,.02,-.13,-.08,-.1,-.07,-.07,.03,.32,.22,.36,-.09,.02,-.12,.08,.08,-.12,-.13,-.08,-.03,-.22,-.04,.05,.25,.16,-.42,.18,.01,.13,-.14,-.14,-.25,-.09,.05,-.08,.16,.13,-.39,-.22,-.09,.34,-.25,-.43,-.08,-.5,.08,0,-.59,-.19,-.13,-.04,-.07,-.09,-.09,0,-.09,-.32,.04,-.24,.12,-.65,-.17,-.1,-.04,-.09,.26,.19,.13,-.03,-.11,-.27,-.06,.11,-.62,-.17,.04,.11,.25,-.08,.05,-.05,.04,-.05,.01,-.14,.07,-.08,.05,.55,-.43,-.53,0,-.21,-.02,-.08,.36,-.04,-.05,-.22,.01,-.33,-.46,-.03,-.02,-.04,-.09,-.38,0,-.14,.17,.07,0,.55,.07,-.11,-.34,-.09,-.53,.15,.04,.12,-.14,.07,.02,.11,-.05,-.18,.18,-.08,0,-.26,-.32,-.01,-.07,.02,-.01,-.18,.5,-.64,-.05,-.07,.06,.03,-.02,-.07,.18,.05,.12,.01,-.1,-.18,-.05,-.19,-.09,.38,-.03,.2,-.09,.37,.2,-.09,-.06,-.17,-.01,-.06,-.04,-.07,-.02,.05,-.02,-.02,-.02,-.2,-.28,-.38,-.12,-.15,.02,.26,-.18,-.13,-.09,.05,-.01,.11,-.05,.3,.12,.07,.18,-.18,-.11,-.04,.04,.24,.01,.04,.22,-.18,-.02,-.34,-.23,.1,-.16,-.12,-.14,.12,-.24,.25,.04,-.11,-.02,.04,.05,.13,.44,-.54,-.21,.08,.02,-.02,-.18,.13,.1,-.17,-.2,.02,.04,.11,-.12,.05,-.03,.12,.09,.06,.13,.37,-.08,-.14,-.18,-.07,.06,-.05,.06,-.11,.03,-.08,-.12,-.18,.07,-.04,-.07,.16,-.02,-.1,-.59,.14,-.01,-.01,-.05,-.03,-.12,-.19,-.04,.17,.13,.42,-.05,.05,-.46,-.09,-.19,.16,-.07,.11,.2,-.06,-.25,.05,.13,.04,-.04,-.23,-.28,.06,.03,.05,-.09,.09,-.21,.03,-.05,-.07,-.17,.66,-.04,.27,.29,-.12,-.09,.1,.02,.12,.05,0,-.18,.1,.07,.13,-.1,-.13,.06,-.02,-.11,.19,.06,-.14,-.25,-.28,-.02,-.08,-.02,.5,-.49,.14,-.26,.52,.18,-.12,-.09,.29,.11,.01,.28,-.01,-.01,-.34,0,-.08,-.01,-.04,-.09,-.3,-.12,.07,.06,-.28,.05,-.2,-.12,.1,-.05,-.27,-.02,.04,.01,.12,.1,-.06,.08,-.18,-.29,.16,-.11,-.07,-.09,-.12,-.04,-.11,.17,.19,-.25,-.1,.31,-.15,-.59,-.58,-.03,-.05,-.12,-.01,-.28,.02,-.04,-.12,-.19,.13,-.02,.02,.03,.1,.04,-.2,-.09,-.25,.25,.07,-.27,.01,.08,.23,-.08,.06,-.01,.02,-.12,.03,0,.05,-.19,-.17,-.07,-.14,-.1,-.08,.05,.32,-.04,.08,-.51,.03,-.1,.04,-.1,-.19,.03,.17,0,-.63,-.14,-.42,.05,-.1,.04,.1,.15,0,-.59,-.46,-.1,.12,.09,-.12,-.09,-.02,.62,-.02,-.17,.03,-.27,-.03,-.14,.13,.08,-.08,-.14,-.26,.02,.41,.06,.21,.05,.02,-.12,0,.24,.11,.16,.17,.1,.13,-.39,.2,-.12,-.18,-.04,-.03,-.04,-.15,.27,.08,.11,.06,-.24,-.58,.04,.02,.02,-.06,-.12,-.04,-.15,-.2,.25,.02,.05,-.2,.22,-.31,.09,-.08,-.44,.01,-.06,-.11,-.16,-.35,-.06,-.07,.01,-.11,-.38,.12,.1,-.29,.26,-.16,.38,.01,-.1,-.02,.15,-.62,.25,-.03,-.01,-.08,.19,-.53,.05,-.13,-.1,.13,.27,.16,.15,-.03,0,-.03,-.08,-.02,-.1,.14,-.3,.04,-.15,-.27,-.13,-.12,.12,.07,.4,.05,-.52,-.19,.11,-.13,-.06,-.23,-.16,-.01,.32,.14,-.16,-.09,-.13,-.32,-.07,-.46,-.1,.15,.08,0,.2,-.22,-.04,-.06,-.13,-.03,.04,-.02,.01,-.11,-.04,.04,-.04,-.08,-.2,-.46,-.1,.05,-.03,-.04,-.11,.07,.03,.74,-.44,.16,-.56,-.43,-.1,-.16,.08,.13,.03,.15,-.21,.09,-.29,-.2,-.41,-.09,-.03,.13,-.19,-.07,.18,-.01,.26,-.06,.14,.06,0,-.15,-.29,.25,.05,.19,.11,.05,-.61,-.08,-.21,-.04,-.09,.03,.05,.01,-.17,.06,-.18,.23,0,-.11,-.08,.03,.23,-.26,.16,-.16,.03,-.03,-.69,.06,-.1,-.11,-.14,.17,.08,-.24,-.19,-.08,0,-.14,-.04,-.13,-.07,-.13,-.07,.45,.13,-.37,.11,.02,-.08,-.66,-.03,-.37,.15,.03,-.11,-.13,-.07,-.02,-.37,-.03,-.22,-.11,.13,-.16,-.15,.04,.02,.13,-.13,-.08,.03,-.18,-.12,.06,.12,.05,.38,-.24,.2,-.12,-.37,.21,-.09,-.21,-.26,.04,-.15,-.03,-.07,-.05,.05,.18,.27,.04,.09,-.07,-.49,-.13,.2,.29,.36,-.07,-.2,-.37,.12,-.24,.11,-.07,-.23,.05,.14,.08,-.08,.2,-.57,-.02,-.2,.03,1,.23,-.28,-.14,.28,-.21,.16,-.23,.07,-.21,.02,.09,-.22,.08,-.35,-.03,.04,-.18,-.05,-.1,.19,.19,0,-.03,0,-.67,.28,.08,.08,-.17,.17,-.05,.06,-.18,.1,.16,-.04,-.58,-.11,-.18,.17,-.01,.06,.06,-.02,.22,-.16,.14,.06,.52,.25,-.21,-.15,.3,-.17,.36,-.07,.05,-.08,-.03,-.09,.17,-.62,-.03,-.44,.05,-.5,.08,-.49,-.01,-.13,.22,-.17,.08,-.37,-.04,.19,.07,.01,.19,.1,-.1,-.12,-.11,-.54,-.13,-.08,-.15,-.11,-.21,.02,-.03,.12,.18,0,.15,-.28,-.05,-.64,.03,0,.17,.03,-.06,.11,-.27,0,.04,.18,-.03,.24,.07,.08,.17,-.01,.15,0,.02,-.04,-.07,.05,-.01,-.04,-.03,.08,-.12,.21,.07,.33,-.21,-.16,.11,.09,.12,.12,.02,.11,-.14,-.05,.04,-.01,.13,-.04,.31,.01,-.63,-.69,-.31,.17,.1,.02,.13,.11,.09,.02,-.24,.04,.11,-.11,.19,-.09,-.29,-.21,-.24,-.6,-.1,.12,-.55,-.03,-.15,.08,.11,-.05,.06,-.11,-.16,.01,-.15,.04,.12,-.16,.02,-.12,.32,-.13,.05,-.66,.22,.14,.18,-.22,.14,.16,-.02,-.05,.19,-.11,.02,-.03,-.12,.39,.32,-.32,-.01,-.28,0,.12,-.13,-.03,-.11,-.02,-.01,.41,-.26,-.07,-.14,.03,.03,.16,-.62,.28,.08,-.01,.02,-.27,.02,-.15,.05,-.05,-.3,-.37,-.13,-.08,.05,-.16,0,-.29,-.03,-.54,.05,-.06,-.07,-.25,.1,.07,.35,0,.11,.27,.13,-.1,.01,-.24,.03,.21,.22,-.09,-.03,-.09,.16,-.1,.04,-.03,-.04,0,.21,-.08,-.09,.57,.06,.03,.16,.07,.23,.1,.05,-.09,.07,-.01,-.1,-.5,-.49,.28,-.38,.04,-.06,-.26,-.07,.09,-.11,-.09,.35,-.22,-.1,0,.2,-.58,.05,.03,-.43,.17,.08,-.1,-.61,.08,-.22,-.21,.13,-.1,-.16,-.35,.01,.1,.08,-.58,.07,-.52,-.61,.04,.11,-.49,.17,.12,-.05,-.08,.01,-.07,-.1,.07,-.67,.11,.1,.07,.16,-.09,-.27,.19,.2,.15,.06,-.22,-.01,.07,-.55,-.05,-.1,.06,-.21,.16,.04,.09,.23,-.09,-.48,-.06,-.09,-.15,.11,-.23,-.23,-.53,-.11,.11,-.07,-.03,-.27,-.17,.03,-.18,-.5,.27,0,-.15,.13,-.19,.07,-.05,-.05,-.11,.05,-.15,-.59,-.6,-.34,.33,.09,-.15,-.27,-.08,.05,-.01,-.17,-.09,-.09,.2,-.15,-.36,-.6,-.12,0,-.13,-.14,-.59,.07,-.6,.01,.01,-.57,.05,.01,-.31,-.34,-.35,-.12,-.03,.3,.03,-.09,-.28,-.12,-.04,.01,.22,-.3,-.04,-.16,-.08,-.67,0,-.04,-.11,0,.04,.07,.07,-.51,.01,.04,.06,-.52,-.04,.06,.16,-.6,-.12,0,-.29,-.56,.04,-.08,-.02,-.2,-.06,.22,.06,-.15,.04,-.04,.01,-.04,-.1,.22,-.06,-.05,-.21,.14,-.09,-.16,.02,-.14,.2,.03,.29,-.03,-.1,-.08,-.11,-.46,.02,.08,.42,.09,-.04,.47,-.18,-.01,-.23,.06,.07,-.17,-.01,.06,.14,-.03,-.01,-.27,.17,-.17,-.01,.6,.05,.02,-.04,.2,.14,-.08,-.39,-.05,-.08,.01,-.26,.05,.56,-.07,.07,.01,-.1,0,-.27,-.17,.69,-.07,.04,-.1,-.17,.08,.02,-.01,.12,-.13,.13,-.08,.37,-.09,-.07,.01,-.2,-.01,.1,-.02,-.01,.01,.04,-.16,.51,.13,-.13,-.11,-.42,-.13,-.09,.02,-.15,-.15,.08,-.41,-.1,.08,.05,.07,-.24,-.17,-.04,-.09,-.03,.05,.23,-.28,-.12,-.11,-.44,.19,-.06,-.13,.13,-.07,-.29,-.06,-.1,-.29,-.13,.08,-.06,-.14,-.08,.03,.02,.03,-.21,-.06,0,-.13,.06,0,-.25,-.64,-.17,.29,-.15,-.15,.11,-.03,-.48,-.03,-.12,-.01,.01,-.14,-.35,.05,-.17,.04,-.03,-.03,-.04,-.04,-.02,.18,-.11,.09,-.29,-.28,-.15,-.13,-.09,-.08,-.1,-.23,0,-.19,-.02,-.12,-.18,-.28,-.05,-.12,-.05,.29,.16,-.06,.27,.13,-.04,.01,.08,-.09,.05,-.14,.01,-.19,.04,.16,-.12,.05,-.09,.27,.14,-.18,.03,.06,-.01,.02,.24,.03,-.11,.17,.1,-.12,-.04,.19,-.07,.07,.26,.36,.06,.05,.01,.09,-.11,-.15,.1,-.25,.15,.1,0,-.49,-.11,-.15,-.01,-.12,.18,.24,-.1,.03,-.14,-.13,.02,-.15,-.08,0,-.14,-.07,-.14,.18,.23,-.18,.13,-.12,.19,.25,.06,-.11,-.58,-.13,.14,-.14,-.01,.13,-.05,-.2,-.01,.09,.01,.03,.12,.02,-.12,.01,-.12,-.12,.11,.08,-.62,-.08,.13,-.02,0,-.12,.07,.14,-.14,-.03,.04,.05,.08,0,-.12,-.02,-.05,-.12,.01,.16,.15,.16,-.16,.17,-.16,-.1,.23,.05,-.08,.1,-.09,-.24,-.04,.05,-.24,.1,.17,-.19,.21,.23,.13,-.05,-.09,.12,.04,0,-.55,-.01,.17,-.26,.1,.1,.09,-.13,.06,.16,-.18,.06,-.22,-.17,.08,.09,.12,-.08,.03,.04,.01,.05,.03,-.25,-.08,.05,-.19,.02,.09,.03,-.03,.1,-.2,-.11,-.01,.23,0,-.11,.03,.05,.09,-.05,-.16,-.13,-.12,-.12,-.2,.09,0,.01,-.06,0,.12,.06,.11,.31,-.18,.4,-.26,0,-.19,.04,.13,-.01,-.1,-.03,-.08,-.12,.1,.19,.22,.06,-.05,-.05,.01,-.1,-.18,-.18,-.12,.06,-.15,-.12,.01,.09,-.08,-.02,-.14,.06,.07,-.05,.1,-.13,.04,.06,.2,-.14,-.26,-.22,.09,-.04,-.1,-.09,.18,-.06,-.13,-.16,-.08,-.41,.3,.01,-.01,-.04,-.12,-.26,-.07,-.21,.01,.15,.14,.02,-.66,.16,0,.3,-.15,-.16,-.2,-.03,-.2,-.15,-.15,-.04,-.29,-.04,-.16,.01,-.02,.12,.02,.1,.16,.19,.17,.14,.21,.01,.01,-.38,-.04,-.08,.25,.02,-.14,.02,-.18,.05,-.08,.02,.15,-.08,-.11,-.01,.02,.05,-.14,.03,0,.02,.01,-.1,-.06,-.14,0,-.05,.05,.09,.18,-.06,.04,-.23,-.21,-.08,.29,-.04,-.03,-.04,-.14,-.44,.01,-.22,.01,-.19,-.14,-.06,-.15,.14,-.11,-.09,-.02,-.24,-.1,-.01,-.26,-.13,-.2,-.08,-.02,.05,-.12,-.13,-.17,.12,-.21,-.08,.03,-.58,-.61,-.21,-.04,-.1,-.18,-.04,.35,-.06,-.21,.02,.38,-.08,.09,-.19,0,0,-.03,-.02,.02,.02,.01,-.13,0,-.52,-.13,-.06,.48,-.01,-.06,-.17,-.12,.03,-.06,.05,.06,-.06,-.14,.11,-.08,.04,.07,.03,-.03,-.16,-.51,.2,.44,-.14,-.09,-.05,-.03,-.26,-.04,0,.02,.05,.02,-.65,.14,-.25,.06,-.12,.36,-.34,-.03,.27,-.26,-.22,-.15,-.02,-.22,.14,.17,-.11,-.06,.22,.12,-.06,.14,.01,-.24,-.12,.38,.02,-.1,.02,.23,-.05,-.04,-.63,.02,-.11,-.47,-.08,-.18,.05,-.24,0,.05,.23,-.53,-.31,-.13,.1,-.21,-.11,-.24,-.22,-.28,-.17,-.05,.1,-.02,.58,.03,.02,.06,.18,-.29,-.42,.01,-.44,-.06,-.03,.08,-.04,-.03,-.36,-.22,.1,.25,-.59,.21,.1,-.5,.06,.19,-.05,-.15,.09,-.18,-.08,-.3,.31,-.17,-.22,.01,.2,-.14,.12,-.02,-.2,.05,-.09,.1,-.11,-.35,-.19,-.15,-.03,-.14,.27,.01,-.31,.05,-.15,-.1,-.48,.02,-.38,-.18,.1,.15,.1,-.24,0,-.15,-.15,-.02,-.27,-.29,-.13,-.24,-.04,-.01,-.07,0,-.02,-.02,.04,.02,-.14,-.1,.01,.11,.01,-.63,-.15,-.08,.11,-.16,-.03,.04,-.11,-.04,-.06,-.16,-.06,-.2,.01,-.06,-.15,.07,.19,-.08,-.24,-.35,.33,-.52,.37,-.13,.03,-.03,-.66,.23,-.1];export{a as rvalData};
