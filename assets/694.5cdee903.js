const a=[-.54,-.15,-.27,-.12,-.16,-.54,.03,-.18,.09,-.01,-.1,-.28,.46,.3,-.19,-.26,-.41,.03,.51,-.09,-.1,-.03,.05,-.14,-.08,-.09,0,-.09,.02,0,.01,-.03,-.23,-.62,-.23,-.25,-.35,-.1,.12,-.22,-.02,-.15,-.28,-.2,.32,-.09,.06,-.37,-.04,.17,.01,-.7,-.33,-.15,-.23,-.1,-.01,-.68,-.05,-.02,-.24,-.21,-.14,-.02,0,-.13,-.2,-.11,.01,.07,-.01,-.19,-.06,.24,-.18,-.2,-.2,-.22,-.13,-.25,-.01,.02,.1,-.09,-.01,.25,-.05,.09,.19,-.04,-.22,.08,.05,-.04,-.18,.44,.13,-.52,.03,-.22,0,-.19,-.12,.02,-.04,.38,.15,.33,-.23,-.1,-.26,.02,.19,-.09,-.06,-.13,-.08,-.17,-.04,-.06,.27,.25,-.52,.14,-.14,.04,-.18,-.15,-.23,-.19,.02,-.03,.11,.07,-.52,-.25,-.14,.23,-.15,-.54,-.19,-.64,-.04,-.13,-.75,-.15,-.14,-.17,-.14,-.04,-.17,-.05,-.07,-.32,-.05,-.23,.09,-.69,-.19,-.14,-.1,-.15,.26,.23,.02,-.1,-.17,-.19,-.1,-.04,-.77,-.17,-.07,.05,.05,-.08,-.05,.03,-.12,-.15,.01,-.13,-.01,-.12,-.03,.53,-.41,-.67,-.09,-.23,.1,-.16,.37,-.17,-.19,-.28,-.06,-.34,-.49,.02,-.02,-.07,-.18,-.39,.12,-.2,.08,-.03,-.09,.58,-.02,-.17,-.22,-.16,-.68,.02,.11,.01,-.1,.12,-.08,.06,-.02,-.21,.08,-.18,-.09,-.18,-.27,-.05,-.02,.05,-.05,-.19,.55,-.78,-.14,-.07,.07,-.06,-.11,-.12,.11,-.04,-.02,-.03,-.07,-.18,-.29,-.11,-.14,.38,-.12,.15,-.23,.36,.07,-.14,-.11,-.19,-.01,.04,-.1,-.19,-.11,-.02,.15,-.11,-.02,-.36,-.26,-.3,-.25,-.16,-.05,.33,-.05,-.28,-.14,-.02,-.08,.15,-.09,.32,.06,-.05,.2,-.28,-.09,0,-.02,.22,-.11,.04,.07,-.26,-.08,-.3,-.28,0,-.17,-.2,-.01,.17,-.26,.09,.07,-.18,-.04,-.07,-.1,.1,.57,-.71,-.26,0,.02,.01,-.2,.04,-.03,-.15,-.16,-.08,.05,.06,-.26,.05,-.01,.07,.17,-.11,.04,.33,.01,-.18,-.16,-.15,-.02,.02,-.09,-.15,.15,-.05,-.21,-.19,-.06,-.12,-.11,.06,-.16,-.2,-.69,.09,.04,-.05,-.04,.08,-.13,-.24,-.18,.08,.14,.46,.05,.1,-.62,-.2,-.23,.09,-.1,.2,.11,-.13,-.3,-.07,.07,-.07,-.01,-.26,-.31,0,-.07,-.04,-.03,-.08,-.01,.04,-.13,-.19,-.2,.79,-.08,.12,.18,-.2,.01,.12,-.04,.02,.07,.02,-.17,-.02,-.01,.18,-.13,-.19,-.05,-.14,-.09,.24,.08,-.17,-.26,-.39,-.14,-.19,-.1,.55,-.59,.04,-.29,.64,.08,-.21,-.22,.37,.05,.05,.28,-.05,-.11,-.44,-.07,-.12,.03,-.17,-.18,-.43,-.18,-.05,-.08,-.39,.03,-.14,-.2,-.04,-.15,-.27,-.01,-.08,.11,.12,.03,-.1,.15,-.27,-.43,.06,-.17,-.2,-.05,-.25,-.14,-.09,.21,.18,-.12,-.18,.28,-.24,-.74,-.67,-.06,-.17,-.21,-.02,-.33,.11,-.13,-.21,-.28,.03,-.01,.01,-.1,.09,-.09,-.2,-.05,-.27,.26,.03,-.38,-.13,.1,.2,-.15,.03,-.07,-.07,-.18,-.12,-.11,0,-.25,-.25,-.14,-.21,-.19,.02,-.09,.27,-.02,.01,-.6,.01,-.19,-.09,.11,-.26,.09,.2,-.08,-.77,-.19,-.5,-.09,-.28,0,.09,.11,-.07,-.71,-.59,-.06,.04,.03,-.15,-.03,.05,.77,0,-.14,.15,-.46,.04,-.13,.1,.17,-.18,-.21,-.29,-.1,.55,.17,.13,.14,.06,-.17,-.01,.1,.01,.12,.26,.12,.18,-.46,.18,-.15,-.21,-.01,-.03,-.14,-.21,.29,.14,.08,0,-.22,-.69,-.11,-.08,-.03,-.13,-.21,-.11,-.21,-.31,.22,-.04,.05,-.18,.13,-.23,-.02,-.1,-.61,-.05,-.19,-.2,-.22,-.36,-.19,.07,-.04,-.07,-.38,.11,-.02,-.39,.37,-.23,.52,-.16,-.19,-.06,.08,-.72,.15,-.1,-.03,-.01,.11,-.55,.01,-.09,-.16,.06,.43,.13,.14,-.07,-.08,-.09,-.21,-.03,-.13,.24,-.3,-.1,-.07,-.23,-.13,-.2,.06,-.06,.43,-.02,-.58,-.13,.07,-.23,-.18,-.08,-.13,.14,.41,.11,-.24,-.14,-.24,-.3,-.03,-.52,.08,.12,-.08,-.15,.08,-.31,.01,.01,-.13,.01,-.04,-.12,.04,-.25,-.11,.04,-.13,-.26,-.3,-.54,-.11,-.06,-.16,-.09,-.27,.12,.01,1,-.58,.23,-.74,-.42,-.1,-.1,-.05,.02,-.13,.07,-.21,.29,-.19,-.3,-.57,.02,-.14,.04,-.34,-.1,.3,.01,.21,-.03,.21,0,-.11,-.22,-.39,.31,-.1,.13,.18,.15,-.63,-.11,-.2,-.11,-.2,.07,-.05,-.03,-.25,.14,-.09,.34,-.07,-.15,0,.07,.19,-.34,.07,-.25,.13,-.19,-.75,.08,-.11,-.33,-.22,.17,.13,-.24,-.37,-.02,-.07,-.03,-.17,-.13,-.06,-.16,-.13,.61,.04,-.56,.05,-.07,-.17,-.81,-.06,-.24,.13,-.07,-.19,-.1,-.15,.07,-.26,-.15,-.23,-.18,.01,-.23,-.16,.18,.06,.1,-.17,-.12,-.1,-.06,-.16,-.08,.21,-.02,.33,-.21,.26,-.21,-.5,.09,-.12,-.14,-.26,.14,-.15,-.01,-.18,-.08,-.03,.09,.43,.05,.04,-.19,-.55,-.28,.11,.22,.31,-.17,-.17,-.41,.04,-.26,.09,-.16,-.29,.11,.14,.08,-.04,.24,-.66,.07,-.3,-.1,.74,.17,-.16,-.2,.24,-.17,0,-.22,.03,-.18,-.12,.07,-.16,.1,-.32,.02,-.06,-.15,-.18,-.23,.23,.21,0,.02,.09,-.76,.15,.04,.15,-.22,.25,-.08,0,-.17,.07,.04,-.1,-.72,.01,-.28,.07,-.1,-.03,-.01,-.11,.08,-.28,.07,-.05,.63,.38,-.23,-.27,.33,-.16,.49,-.1,-.07,-.13,.02,-.12,.18,-.75,-.15,-.61,-.01,-.58,.02,-.58,.06,-.12,.12,-.16,-.05,-.44,-.06,.12,-.03,-.05,.24,.26,-.21,-.24,-.21,-.67,-.21,-.14,-.1,-.18,-.23,-.05,-.14,.02,.21,-.09,.12,-.4,-.16,-.64,-.01,0,.1,-.07,.01,.02,-.33,0,.01,.09,-.03,.24,.09,-.06,.05,-.14,.1,-.1,-.02,-.18,.06,-.02,.07,-.07,-.1,.07,-.17,.34,.04,.35,-.25,-.16,.11,-.04,.16,.09,0,-.03,-.23,-.13,-.05,.09,.01,-.09,.31,.04,-.72,-.79,-.32,.14,.04,-.05,.06,.15,-.02,.1,-.26,.06,.17,-.03,.21,-.16,-.18,-.36,-.11,-.67,-.22,.24,-.58,.01,-.3,.08,.17,-.11,.17,-.16,-.11,.01,-.14,-.05,.26,-.22,-.06,-.26,.29,-.24,.06,-.78,.24,.13,.22,-.19,.07,.13,-.18,-.14,.13,-.09,-.13,-.06,-.2,.5,.26,-.19,-.06,-.32,.04,.21,-.18,-.06,-.26,-.04,.04,.37,-.21,-.01,-.12,0,-.11,.16,-.73,.16,-.04,-.06,-.13,-.19,-.01,-.15,.03,-.13,-.4,-.52,-.21,-.04,-.06,-.21,-.02,-.46,-.15,-.7,.04,-.15,-.06,-.32,.1,.04,.41,.05,-.04,.17,.19,-.16,.08,-.23,-.08,.11,.22,-.21,-.13,-.13,.15,-.16,-.04,-.17,-.19,-.1,.21,-.22,-.13,.74,-.14,-.02,.26,0,.32,.27,-.04,-.2,-.08,-.05,-.13,-.49,-.56,.22,-.44,-.09,-.05,-.2,.01,.1,-.2,-.18,.36,-.26,-.19,-.14,.09,-.73,-.03,-.13,-.41,.11,.02,-.22,-.75,-.07,-.13,-.27,.07,-.35,-.2,-.5,-.12,.17,.02,-.74,-.05,-.57,-.71,-.09,-.05,-.6,.08,.01,-.14,-.16,-.16,-.14,-.2,.1,-.74,.28,.08,-.05,.07,-.17,-.29,.09,.17,.12,.13,-.21,-.02,.13,-.66,-.15,-.19,.07,-.22,.16,-.02,.09,.24,-.19,-.59,-.04,-.17,-.21,.15,-.19,-.31,-.56,-.2,.05,-.18,-.05,-.29,-.16,-.05,-.26,-.54,.44,-.04,-.14,.09,-.32,-.06,-.08,-.14,-.01,-.11,-.16,-.74,-.72,-.41,.32,.17,-.21,-.26,-.01,.06,-.13,-.11,-.21,-.18,.16,-.25,-.38,-.74,-.21,-.14,-.2,-.1,-.74,-.02,-.6,-.06,-.14,-.71,-.08,-.1,-.45,-.37,-.46,-.21,-.08,.4,-.03,-.18,-.2,-.22,-.14,-.01,.22,-.34,.08,-.04,-.12,-.77,-.07,-.03,-.19,.04,-.08,.04,-.05,-.48,-.07,.07,-.08,-.55,-.14,.01,.03,-.7,-.21,.01,-.3,-.65,.12,-.25,-.13,-.39,-.09,.1,.1,-.22,0,-.1,-.11,-.14,-.21,.16,-.09,-.1,-.3,.05,-.18,-.15,-.01,-.22,.31,-.05,.26,.03,-.19,-.1,-.18,-.59,.03,.15,.57,.09,-.08,.54,-.23,-.09,-.22,.12,.13,-.24,.03,-.07,.14,-.07,-.07,-.26,.12,-.29,-.06,.68,.04,-.04,-.05,.23,.06,-.19,-.5,.1,-.18,0,-.22,.01,.66,-.09,.07,-.09,-.08,.02,-.25,-.25,.81,-.04,.04,-.08,-.25,.01,-.07,.12,.17,-.12,.11,-.11,.38,-.02,-.06,-.01,-.31,.08,.07,0,-.01,-.07,.02,-.14,.61,.1,-.2,-.14,-.44,-.14,-.23,-.06,-.26,-.18,.01,-.58,-.2,.11,.01,.19,-.18,-.25,-.02,-.1,-.27,-.01,.27,-.22,-.19,-.2,-.55,.15,-.04,-.22,.18,.01,-.25,-.04,-.15,-.36,-.24,-.13,-.03,-.16,-.18,.05,.22,-.09,-.31,-.15,-.07,-.14,-.06,-.14,-.19,-.66,-.23,.37,-.2,-.21,.04,-.11,-.59,.01,-.13,.06,0,-.19,-.35,0,-.07,-.05,-.14,-.06,-.16,-.14,-.07,.26,-.08,.11,-.39,-.29,-.24,-.14,-.11,-.05,-.08,-.23,-.08,-.22,.08,-.11,-.2,-.3,-.14,-.14,-.09,.33,.13,-.05,.38,.07,-.02,.04,0,-.1,.06,-.24,0,-.25,-.06,.12,-.1,-.05,-.13,.25,.09,-.24,-.06,-.07,-.1,-.07,.24,-.04,-.23,.03,.21,-.28,-.08,.17,-.07,.02,.31,.4,-.07,.08,-.03,.05,-.08,-.15,.01,-.33,.19,.04,-.13,-.59,-.17,-.11,-.04,-.15,.16,.12,-.17,-.03,-.14,-.17,-.16,-.23,-.17,-.03,-.16,-.14,-.21,.04,.28,-.26,-.06,-.03,.04,.11,-.07,-.11,-.7,-.12,.01,-.21,-.09,.03,.03,-.1,-.03,-.02,-.06,-.09,.02,0,-.15,.08,-.21,-.14,.01,-.06,-.76,-.18,.14,.04,-.02,-.16,-.03,.06,-.19,-.12,-.03,-.06,-.02,-.04,-.21,-.13,-.15,-.08,-.08,.13,.02,.08,-.25,.12,-.2,-.17,.11,0,-.15,.08,-.15,-.28,0,-.04,-.31,.01,0,-.17,.34,.13,.02,-.22,-.15,-.03,.01,-.09,-.57,-.13,.18,-.32,.03,.12,.24,-.16,.04,.04,-.25,.01,-.2,-.32,.05,.24,.09,-.12,-.09,-.05,-.11,-.09,.02,-.37,-.08,-.02,-.12,.05,.15,-.09,-.01,-.04,-.28,-.09,-.04,.22,-.06,-.17,-.1,.07,.02,-.22,-.25,-.21,-.2,-.08,-.2,-.01,-.05,-.02,0,-.11,.02,.06,-.02,.37,-.18,.44,-.31,-.14,-.01,-.11,.12,-.11,-.13,-.06,-.07,-.11,0,.14,.24,.07,-.1,-.01,.12,-.21,-.25,-.19,-.12,-.04,-.15,-.16,-.14,-.05,-.2,.13,-.08,-.12,-.07,.11,.19,-.01,.05,.09,.17,-.24,-.31,-.17,.14,-.13,-.09,.02,.06,.04,-.21,-.24,-.12,-.37,.36,.13,.11,-.05,-.23,-.29,-.14,-.21,-.03,.08,.07,-.1,-.81,.22,.08,.39,-.18,.01,-.21,-.1,-.27,-.23,-.17,-.05,-.25,-.15,0,-.04,.04,-.05,.09,.21,.02,.21,.25,.09,.2,-.04,.02,-.34,-.1,-.12,.38,-.08,-.25,-.08,-.12,.04,.05,.06,.16,-.15,-.18,-.12,-.05,-.02,-.12,-.06,0,-.03,-.14,-.29,-.17,-.27,-.01,-.15,-.01,.05,.14,-.07,-.1,-.3,-.2,-.04,.27,.02,-.16,-.12,-.2,-.43,-.08,-.31,-.1,-.24,-.21,-.19,-.23,.11,-.12,0,0,-.29,-.1,.14,-.31,-.21,-.26,-.19,-.18,.1,-.18,-.2,-.19,.11,-.09,-.13,.08,-.74,-.72,-.27,-.07,-.07,-.18,-.17,.45,-.14,-.2,-.05,.32,.01,.06,-.19,-.12,-.01,-.04,-.02,.07,-.07,-.13,-.14,.02,-.46,-.07,-.17,.67,-.07,-.11,-.31,-.11,.02,-.17,.02,-.08,.1,-.25,.13,-.21,-.06,-.02,.01,-.14,-.16,-.54,.29,.6,-.12,-.17,-.15,-.24,-.2,.01,.05,-.13,-.05,-.02,-.76,.11,-.26,-.08,-.18,.42,-.31,-.14,.18,-.33,-.28,-.25,-.13,-.16,.08,.13,-.2,-.14,.28,.17,-.13,.04,.14,-.27,-.18,.51,.06,-.2,-.04,.23,-.12,-.09,-.69,.09,-.19,-.43,-.18,-.17,-.08,-.15,.03,.02,.09,-.61,-.29,-.15,.07,-.33,-.21,-.26,-.22,-.3,-.21,-.2,-.09,-.16,.71,-.09,-.04,-.06,.18,-.28,-.45,-.05,-.44,-.17,-.2,.04,-.12,-.01,-.32,-.32,.03,.1,-.67,.2,.18,-.42,.01,.1,-.1,-.24,.08,-.27,-.09,-.25,.18,-.11,-.19,.01,.23,-.04,-.01,-.14,-.26,.07,-.02,0,-.2,-.52,-.25,-.13,-.17,-.16,.3,-.11,-.23,-.08,-.27,-.19,-.52,-.09,-.38,-.21,.02,.07,0,-.26,-.14,-.13,-.26,-.14,-.35,-.29,-.24,-.23,-.08,-.04,-.18,-.1,-.12,-.12,-.05,.04,-.22,-.17,-.08,.2,-.11,-.78,-.22,-.03,.06,-.23,-.19,-.08,-.18,-.02,-.14,-.14,-.11,-.24,-.04,-.21,-.3,-.06,.08,.03,-.22,-.26,.39,-.61,.27,-.06,-.08,-.19,-.79,.16,-.16];export{a as rvalData};
