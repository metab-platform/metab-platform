const a=[.38,.12,.08,.29,-.02,.36,-.14,.12,-.03,-.15,.04,.07,-.35,-.06,.09,.14,.21,.11,-.38,.18,.1,.1,-.13,.09,.04,0,.08,-.1,-.08,.04,-.1,.06,.01,.39,.19,.07,.14,.1,-.25,.11,.04,.03,.01,.14,-.25,.14,-.02,.25,.11,-.25,-.07,.47,.12,.06,-.05,.02,0,.39,.03,-.06,0,-.05,-.01,0,.05,.19,0,.11,.02,-.01,.05,.08,-.14,-.06,.06,.21,.21,0,.07,.16,.13,-.05,.2,-.01,-.09,-.05,-.01,-.19,0,.01,-.01,-.26,-.08,.15,.13,-.45,.16,.5,-.18,-.01,.01,.02,-.05,-.01,-.1,-.2,.01,-.1,.04,-.04,.12,-.24,-.14,.26,-.05,.06,-.07,.18,.07,0,-.19,-.02,.19,-.02,.02,-.17,-.02,.19,.15,.03,-.09,-.02,.15,-.21,.31,.22,-.05,-.25,.12,.39,-.02,.4,-.06,.01,.44,.01,-.08,-.02,.02,.08,.01,.01,-.06,.17,-.03,.02,0,.47,.16,.09,-.1,0,-.17,-.22,-.1,-.09,.1,.14,-.07,-.01,.41,.11,-.08,-.01,-.13,.13,-.11,.01,-.07,.03,.11,.12,-.14,.01,-.06,-.52,.49,.39,-.14,.01,-.09,-.04,-.27,.03,-.03,.05,-.11,.19,1,.05,.08,-.11,.01,.36,.06,-.07,-.15,-.08,-.09,-.38,-.06,.11,.17,.09,.4,-.18,-.11,-.11,.12,.11,0,-.18,-.16,.06,-.11,.02,-.04,.12,.12,-.02,.15,.11,.02,.01,-.38,.46,.08,.03,-.29,.02,-.04,.07,-.17,-.07,-.12,-.04,.13,.06,.14,.06,-.02,-.23,-.12,-.23,.01,-.21,-.21,.09,.01,.05,.16,-.06,0,-.02,.08,-.13,.02,.01,.07,.18,.22,.32,.06,-.02,.01,-.17,.09,.02,-.06,.09,-.09,-.01,.05,-.21,-.09,-.03,.01,.1,-.04,.01,0,-.18,-.06,-.17,-.09,-.03,.05,.28,.18,-.03,.05,-.01,-.02,.2,.08,-.2,-.05,-.01,-.04,-.02,-.05,-.03,-.26,.41,.1,-.06,-.04,-.16,0,-.09,-.04,0,.17,-.05,-.17,-.14,.04,.07,-.08,-.08,.05,-.03,-.03,-.23,.05,.13,.15,.02,.01,-.03,-.14,-.13,-.03,.03,.08,0,-.09,-.01,-.17,-.06,-.04,.11,.54,-.13,-.01,.05,-.04,.01,-.07,.07,.1,.04,-.16,-.17,.09,.11,.38,.03,-.05,-.02,.12,-.02,-.08,.03,.08,-.11,-.17,.04,.02,.09,.18,-.15,0,.17,.16,-.02,0,-.13,-.05,-.04,-.04,-.51,0,-.1,-.13,-.03,.07,-.12,.13,-.16,-.17,.06,-.02,-.01,-.14,-.18,.06,-.09,-.07,.04,-.06,-.04,-.04,-.06,.06,.24,-.05,0,-.07,-.25,.26,-.13,.22,-.5,-.04,.01,.01,-.18,-.13,-.08,-.24,-.02,.06,.3,-.02,.05,-.01,-.03,-.03,.09,0,-.02,-.06,.25,-.2,-.07,.05,-.11,.1,.3,-.09,-.05,.07,-.1,-.07,.11,.03,.08,.2,-.16,-.02,-.06,.22,.05,.04,.01,.05,-.22,.22,.09,-.08,.05,.43,.61,-.08,-.03,-.05,-.04,.09,.07,-.04,.08,.06,-.1,-.09,.01,-.15,-.04,.02,.04,.16,.05,-.04,-.1,.1,-.01,-.13,.15,0,-.13,-.02,.13,.01,.02,-.04,.07,.06,.06,-.05,-.07,-.01,-.06,0,-.25,-.07,.08,.22,-.06,-.01,.01,-.14,-.01,-.11,-.02,-.03,.46,.08,.26,-.05,-.03,-.09,-.14,-.14,.01,.39,.29,-.1,-.19,-.03,0,-.07,-.15,-.51,.1,.03,-.01,.25,.08,.01,-.08,.06,0,-.02,.11,-.08,-.36,-.09,-.09,.03,.06,0,.13,-.05,-.03,.05,.08,-.02,-.19,.13,-.2,-.05,0,.02,.04,-.01,.03,.01,-.03,-.14,-.07,.1,.43,-.05,.05,-.13,.05,-.01,.02,.17,.11,.15,-.15,-.24,.04,-.14,.27,-.11,-.05,.29,-.01,-.04,.09,.01,.06,-.03,.04,-.13,.03,.22,-.07,.05,.2,-.37,.02,-.27,.12,-.02,-.04,-.06,.52,-.18,.03,-.19,.04,-.09,.35,-.04,-.05,-.01,-.04,-.08,.03,-.02,-.13,-.08,-.07,0,-.05,.13,-.01,.25,-.03,.06,-.01,-.05,.02,-.02,-.02,-.31,-.16,.51,.23,-.13,-.01,-.01,0,.12,-.01,-.12,.12,.02,-.12,.06,.11,-.05,.36,.07,-.05,0,.07,-.02,.23,.04,.08,0,-.15,-.06,.02,.04,.06,.18,.02,-.03,.07,.08,.29,.23,-.04,-.02,.08,-.01,.01,-.05,-.49,.39,-.03,.42,.36,.02,.15,.02,-.08,-.06,-.19,.05,.05,.33,.14,.25,.05,-.03,-.1,.02,-.11,-.12,.11,-.06,-.04,.1,.16,.02,0,.16,-.25,-.04,-.12,-.01,-.01,.54,-.04,.15,-.18,0,-.08,-.08,-.14,.07,-.16,-.1,-.12,.07,-.02,.07,.03,.09,.25,-.01,.09,-.26,-.07,.55,-.01,-.07,.12,.09,-.37,-.07,.18,.18,.01,-.14,.07,.01,-.08,0,.08,.03,-.39,.08,.36,-.1,0,.04,.41,-.08,.26,-.17,.02,-.05,-.06,-.01,-.13,.24,-.02,.04,0,-.08,.02,.12,-.06,.07,-.13,.01,.12,-.03,.08,-.03,-.04,-.01,-.09,-.12,-.03,-.08,-.01,.29,-.13,-.07,-.02,.09,0,.08,-.03,-.05,.13,-.02,-.13,-.1,.05,.03,-.01,.45,.19,-.1,-.25,-.28,.01,.26,.13,-.02,.03,.05,0,.2,-.14,-.3,.02,0,-.23,.35,.16,.02,-.04,-.46,-.17,.19,0,-.05,.14,-.13,.18,.13,.16,.09,-.08,.02,-.16,.15,-.16,-.01,.14,.03,.03,-.2,-.15,0,0,-.02,.54,-.14,-.06,-.13,.23,.01,-.04,-.11,.04,-.1,-.21,-.03,.38,.07,.02,-.03,-.04,-.11,.14,-.01,-.09,0,-.12,-.07,-.38,-.2,.05,.11,-.24,.25,-.16,-.13,-.11,.06,0,.06,.09,.45,-.05,.36,-.14,.45,-.12,.42,.07,.13,-.3,.03,-.1,.28,-.01,-.08,.01,-.11,-.19,-.09,.11,-.01,-.03,.39,.01,0,-.05,-.02,.04,-.05,-.03,-.1,-.01,-.07,-.19,.08,-.02,.55,-.04,.11,-.09,.04,-.2,-.08,.07,-.04,.15,-.18,-.03,-.13,-.06,-.12,.05,-.04,-.06,.01,-.07,0,0,-.08,.08,-.08,-.12,-.09,.03,-.14,-.02,-.17,.12,.13,-.04,0,-.11,-.01,-.11,-.16,.04,-.06,-.02,.02,-.09,-.14,-.25,-.11,.5,.56,.15,-.18,-.13,-.1,-.16,.2,-.05,.12,.25,.04,-.25,.08,.07,-.02,.1,.2,.23,.6,.14,-.11,.38,.03,.05,-.17,-.01,.02,-.01,-.06,.04,.01,.01,-.05,-.37,.08,-.17,.26,-.34,.02,-.07,.38,-.22,-.19,-.13,-.07,-.09,-.1,-.09,-.01,-.16,.12,.14,-.01,.02,-.15,-.06,.1,-.06,.38,-.11,-.2,.05,-.12,.03,-.11,-.23,-.22,.11,.04,.16,-.11,-.02,.01,.54,-.13,.01,-.07,.05,.17,.06,-.01,.01,-.01,.24,.21,.03,-.04,-.14,.07,-.06,.14,.02,.45,-.06,.03,-.03,.02,-.01,.13,-.09,.04,-.03,-.1,-.05,-.06,-.04,.1,-.03,-.12,-.13,0,-.06,.09,0,.07,.01,-.01,.09,-.12,-.07,-.02,.07,-.39,-.13,-.11,-.11,.06,-.13,-.14,.02,.07,-.04,.06,.11,.46,.37,-.15,.37,.17,.09,.05,.08,-.21,.03,-.01,-.19,.24,-.01,-.01,-.11,.42,0,-.01,.34,-.13,-.12,.02,.45,-.02,-.01,.09,.02,.07,.26,.24,0,-.04,-.06,.45,-.02,.29,.42,.03,-.1,.43,-.11,-.11,.1,-.06,.04,.04,-.06,-.12,.43,-.08,-.08,-.13,-.03,.04,.19,0,.1,-.15,.05,.19,0,.07,.35,-.01,.04,.05,.06,-.09,-.07,-.06,-.12,-.02,.28,-.03,.01,.01,-.06,.06,.13,.36,-.04,-.11,.01,-.03,.08,.06,-.07,.01,.39,-.27,.05,.06,-.1,.18,-.02,-.11,-.05,-.18,.02,.1,.45,.45,.1,-.28,.03,.12,.06,.11,-.05,-.05,.04,0,-.06,-.15,.25,.33,.43,.04,-.03,.04,.34,.45,-.05,.55,-.02,-.05,.52,-.04,.07,.31,.06,.26,.18,-.08,-.11,-.01,-.02,.31,-.01,.11,-.01,-.13,.15,-.02,.04,-.03,.58,0,.14,.02,.09,.04,-.05,-.1,.46,-.06,.01,-.03,.35,.06,-.04,0,.46,0,.14,.29,.6,-.19,.06,-.02,.04,.01,-.13,-.05,.01,-.19,-.05,-.01,.02,.13,-.03,-.01,.05,.08,-.1,.03,-.04,-.06,.01,-.14,-.04,-.18,-.2,.06,.01,.04,.39,.02,-.08,-.31,-.05,-.01,-.43,.08,-.02,.05,-.01,.07,-.01,-.05,.02,-.06,.09,0,.22,-.03,.02,-.11,-.42,.1,.05,-.01,-.15,0,-.01,.43,-.09,.04,-.03,.03,-.02,-.47,.03,0,-.05,-.01,-.08,.12,.08,-.6,.01,-.01,.05,0,-.08,.03,.06,-.04,-.02,-.11,-.03,-.33,.04,-.01,-.01,.15,-.1,.24,-.07,-.09,-.01,-.15,-.08,-.41,.21,-.02,0,.19,-.01,.13,-.07,.06,.09,-.09,.34,-.05,-.08,-.15,-.21,.12,.05,-.02,.08,.19,-.07,-.03,.14,-.05,.01,.31,-.13,.1,.06,-.16,.08,.03,.04,.12,.16,.15,.01,.1,.3,-.03,.12,0,.01,.24,.02,-.04,-.05,-.04,.04,.1,.43,.01,-.21,.04,.17,-.05,.01,.38,-.06,.04,0,-.16,.06,.37,-.02,.01,.02,.02,-.02,.03,.11,.16,-.12,.09,-.09,.26,.25,-.01,-.01,.01,.05,.08,.06,-.09,.26,.01,.11,.06,.3,-.04,0,-.05,-.1,-.16,0,-.19,-.2,-.04,-.13,-.15,-.01,-.05,.05,-.06,.01,-.07,-.19,-.05,-.11,.27,-.2,-.17,.09,-.01,-.11,-.03,0,-.11,-.13,.04,-.12,-.19,.17,.03,.05,.21,-.16,-.1,-.09,-.06,-.06,-.2,.04,-.04,-.01,-.17,.16,.01,0,-.07,.35,.11,.16,0,.07,-.21,-.03,-.06,.14,0,-.02,-.03,0,-.04,-.08,-.02,-.06,-.01,.01,-.2,.13,.02,.02,-.1,-.13,-.04,-.04,.47,-.03,-.08,.19,0,-.09,-.03,.24,-.16,-.02,.04,-.04,-.17,-.18,.14,-.14,-.06,-.07,.02,-.03,.46,-.05,-.2,.06,-.1,.14,.01,-.07,-.05,.03,-.12,-.1,-.14,-.02,0,-.06,0,.09,.06,-.26,-.03,-.11,.08,-.2,.39,.09,-.06,.07,.07,-.14,.04,.09,.37,.07,.13,-.08,-.13,0,-.15,-.04,-.11,.05,-.02,-.06,-.13,-.03,.42,.01,.15,.03,-.05,-.14,-.15,.29,.24,.06,.09,-.08,.07,.19,-.18,-.25,-.17,-.07,-.01,-.12,-.01,.02,-.08,.26,-.04,-.14,.06,-.05,-.1,0,-.11,-.03,.11,-.04,-.05,-.24,-.09,-.03,0,-.05,-.09,-.03,.01,-.03,-.03,-.11,.01,-.16,-.07,-.06,.06,-.02,.14,-.04,-.06,-.04,0,-.21,.11,-.02,.1,-.02,0,-.05,.11,-.11,.23,.06,-.11,-.12,-.16,-.09,-.04,-.05,-.12,-.03,.04,.16,-.02,-.07,.11,.09,-.03,-.01,.02,0,.03,.07,-.01,-.04,.07,.01,-.2,-.23,-.17,0,.1,.08,-.1,.03,.03,.17,-.05,.06,.02,.03,-.05,.36,-.25,.07,-.1,.04,.07,.05,.02,-.02,0,-.09,-.18,-.05,.47,-.26,-.09,-.32,-.02,-.06,.03,.02,.04,-.07,-.06,-.04,.14,.02,.09,.06,.26,.05,-.08,-.12,-.11,.01,-.19,-.21,-.09,.01,-.14,.32,0,.03,-.19,-.06,.03,.04,-.04,-.02,.07,.18,.12,-.04,-.02,-.05,-.02,.06,.02,-.01,.01,-.06,-.07,.09,-.02,.09,-.08,-.02,-.05,.02,-.13,.04,-.02,.08,.01,.07,-.07,.03,.04,.03,-.05,.49,-.01,.1,-.06,.06,.02,.03,-.02,-.1,-.01,.04,.16,.03,-.01,-.11,.11,.02,.06,.04,.08,-.18,.03,.04,-.01,-.2,.11,0,-.06,.45,.41,.1,.01,-.02,.01,-.05,-.2,-.04,.06,-.04,-.12,.16,.02,.11,-.02,.11,-.03,.09,-.16,-.01,-.01,.02,.01,.37,.08,.03,-.44,-.01,.02,.02,.03,-.15,.06,-.01,-.01,.01,.06,-.15,.01,-.07,.01,-.05,0,-.03,.37,-.12,-.38,.14,.05,.02,.02,.03,.11,.01,0,-.11,-.03,.44,.12,.31,.01,-.01,-.42,.14,-.01,-.05,.08,.27,0,.02,.2,-.07,-.16,.04,.03,-.12,-.07,-.05,.09,-.09,.2,-.03,-.2,.1,.08,-.09,-.35,.01,-.05,.5,.03,.06,.38,.05,.03,.02,.11,.04,-.1,-.26,.46,.3,-.04,-.13,.1,-.01,.07,.05,.12,.06,-.03,.01,-.02,-.54,-.01,-.08,-.04,-.23,.24,.22,.07,.37,.02,.03,-.04,.05,.09,.18,.08,.03,-.2,.44,-.2,.03,.42,.06,-.21,-.03,.02,-.04,.05,-.1,.24,-.29,.12,.1,-.11,-.13,-.08,-.05,.01,.14,.06,.08,-.05,.05,.33,.02,.02,0,.03,-.21,0,.24,0,.02,-.02,.36,-.01,.08,0,-.09,-.12,-.07,.07,.04,.03,.08,.02,.17,.13,.05,.16,-.05,.07,.05,-.01,.01,-.07,-.09,-.02,.01,.09,-.1,.07,0,.46,-.02,0,-.03,.06,-.02,-.03,.06,.03,.07,.18,.01,.05,.08,-.03,-.01,-.03,-.1,.04,.08,.32,-.32,.35,-.16,.21,.02,-.01,.46,-.15,.01];export{a as rvalData};
