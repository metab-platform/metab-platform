const a=[-.04,.04,-.1,.1,-.04,.19,-.07,.2,-.01,-.08,-.28,.02,-.07,-.05,-.34,.1,-.14,.11,.15,.03,.02,0,.03,-.34,-.07,.05,-.2,-.03,.21,-.22,.17,-.12,-.04,-.03,.01,.07,-.21,-.34,-.04,-.13,-.03,.03,-.13,-.01,.19,-.26,-.1,-.04,.02,.01,-.26,.12,-.18,-.12,.19,-.46,-.16,.1,.32,-.06,.1,-.02,-.01,.01,.14,.07,.08,-.31,-.1,-.1,-.17,-.25,.21,.06,0,.01,.03,.14,-.15,-.02,.1,.01,-.02,.13,-.03,.08,.05,.09,.02,-.13,.25,.13,.08,.13,-.05,.3,0,-.13,.22,.16,.08,-.01,.16,.11,.15,0,-.23,-.27,-.05,.21,-.18,.09,.02,.08,.16,.04,-.06,.08,.1,-.04,.09,.01,-.14,.28,0,.03,.03,.42,.08,-.13,.24,.2,.04,-.06,-.1,.25,.25,.2,-.09,-.01,.13,-.05,.19,.03,-.07,.03,-.12,.44,.18,.03,-.03,-.08,-.06,-.25,.18,.42,.17,-.12,-.12,-.38,.28,.28,.13,.2,.04,.15,.01,-.07,.31,-.04,-.07,-.03,.31,.24,.08,.04,.02,-.15,.18,-.05,-.07,-.05,.01,-.19,.27,.16,-.15,-.01,.17,.06,.1,.17,.08,.08,.06,-.02,.21,.09,.05,.05,-.33,-.03,-.15,.04,-.03,.14,-.06,.31,.13,.11,.19,-.21,-.1,-.15,.09,-.04,.17,.19,-.02,-.18,.38,.24,.21,-.08,.33,-.12,.24,0,.14,.23,-.11,.31,-.15,-.1,0,-.09,-.29,-.44,.22,-.01,.13,-.25,.19,.29,.07,.02,.06,-.09,.11,-.03,.16,.1,.18,.4,.16,0,.09,-.05,.08,-.14,-.17,.38,0,.13,.57,.16,-.17,.18,-.09,-.14,-.01,-.03,-.14,-.21,.06,.14,-.09,.15,-.2,.03,.26,-.24,-.35,.12,.42,-.11,-.31,-.22,.2,.08,.17,.21,-.02,-.12,.2,-.06,-.36,-.04,-.06,.15,-.24,-.05,-.07,-.03,-.11,.22,.3,.11,.56,-.45,.04,.23,.08,-.05,.42,.14,.11,.28,-.19,-.07,.12,-.05,-.26,.06,.06,.47,.03,.41,.05,.45,.16,.34,.17,.05,-.1,-.09,.07,.33,-.09,-.02,-.01,-.05,-.05,0,-.2,-.13,.07,.4,-.2,.3,.12,.16,.03,.45,-.22,-.32,.21,-.12,-.1,-.08,-.16,-.06,.55,-.18,.1,.05,.2,-.16,.18,-.02,.14,-.12,-.17,.3,.17,.11,.1,.15,-.05,.35,.11,.09,.02,-.17,.21,.07,-.13,.3,.04,-.01,-.12,.12,-.24,-.1,-.17,-.11,-.13,.06,.46,-.04,.03,.49,-.05,-.11,.29,.29,-.27,-.04,.18,.35,-.2,.21,.49,-.12,.22,-.02,.18,0,.25,.22,-.05,-.09,.14,-.09,.02,-.14,-.1,.05,.33,.13,.18,.32,-.03,-.02,.2,-.25,-.18,.03,-.1,.06,.28,.1,.12,-.28,-.3,.21,-.14,.05,-.2,-.07,-.17,.14,.02,.36,-.04,.5,.04,-.15,.39,-.03,-.09,-.06,.02,.23,.06,.29,.04,-.08,-.02,-.16,-.32,-.2,-.1,-.14,.4,-.11,-.3,-.27,-.04,-.17,.17,-.24,.24,.01,-.28,.45,.18,.34,.12,-.11,.06,-.01,.03,.19,-.05,-.08,.13,-.08,.03,.3,.35,.37,.03,-.11,.02,.19,.38,.01,-.1,.16,.15,.41,.05,.21,-.27,.27,.12,.09,.24,.08,-.09,-.02,.39,.06,.25,-.08,-.08,.04,-.2,-.05,.27,.12,-.08,.15,-.03,-.03,.3,.04,.64,-.08,-.19,.33,.08,-.11,.02,-.04,.24,-.08,-.19,.29,-.21,-.13,-.25,-.2,-.12,.03,.09,.17,-.05,-.11,-.13,.08,.34,.2,-.14,-.02,.1,-.08,.2,-.05,-.07,-.16,-.34,.07,.18,-.17,.17,.1,.14,.15,-.02,-.08,.23,.47,.08,-.21,-.12,.14,.11,-.22,.04,-.06,-.02,.07,.21,.01,-.06,-.13,.24,-.12,.04,-.07,0,-.03,-.05,-.11,.24,.09,-.21,.3,.37,-.23,.17,.18,.13,-.08,-.08,.01,-.06,-.09,.13,.18,.15,-.07,.52,.01,-.18,.43,.23,.01,-.07,-.35,-.12,.18,.1,-.02,-.1,.13,.14,-.07,.2,0,-.03,-.1,-.07,.2,.64,0,.15,.09,-.01,-.06,.2,-.12,-.1,-.07,-.29,-.03,.22,.04,-.06,-.04,-.04,.29,-.05,.06,0,.55,.07,.01,-.14,0,-.03,-.22,.13,.26,.08,-.09,.16,.08,-.01,.64,-.15,-.1,.4,.02,-.17,.06,-.03,.28,-.04,.08,.61,.09,-.06,.1,-.14,.21,-.14,-.02,.18,.14,.01,-.03,.06,-.07,.03,.05,-.09,-.19,-.01,.15,-.01,-.07,.04,.11,0,.08,-.12,.18,.12,.19,-.23,.04,-.01,.04,.09,-.11,-.04,.06,-.1,0,.04,.06,-.01,.31,-.21,.17,.01,.06,-.18,.01,.02,-.09,-.09,.01,-.08,-.25,.28,.16,-.08,.25,-.06,.14,-.05,-.19,.31,.04,.03,-.08,-.02,-.02,-.04,.09,.1,-.3,.14,.19,-.1,.11,.59,.51,.06,-.14,.42,-.12,.11,0,-.02,.26,-.1,.04,-.08,.13,-.11,.3,.33,.13,.44,-.12,.14,.38,.23,-.37,.01,-.04,-.11,.11,.27,.28,-.02,-.11,.12,.06,-.18,.24,-.15,.17,.33,.03,.01,.17,-.01,.25,.22,.29,0,.06,.03,-.04,-.14,-.16,.22,-.08,-.13,-.13,-.04,.06,-.05,-.15,1,-.14,.29,.11,.09,-.16,-.17,.24,-.08,-.04,.09,-.12,.11,.26,-.09,.01,-.31,-.04,.01,-.14,.19,.06,-.08,.01,.01,.17,.29,.28,.07,.06,.08,-.19,.22,-.12,.6,.49,-.03,.07,.17,.16,.16,.06,.13,.4,.48,.29,.17,.09,-.06,0,-.1,-.35,.09,.03,-.18,-.01,.4,.28,.16,.02,.04,.21,.01,.28,.17,-.02,-.25,.06,.07,-.09,.09,-.13,.09,.01,-.09,-.21,-.24,.3,.03,.13,-.01,-.1,.14,.16,.03,.37,.16,.25,.29,.07,.44,-.03,-.09,.02,.17,-.07,-.06,-.2,.25,.26,.19,-.22,-.08,.01,.01,.08,.22,.12,.02,.06,-.05,.34,.37,.06,.43,-.02,-.01,-.04,.01,-.2,.09,-.03,.52,.27,.13,-.17,.06,.38,.08,.15,-.02,-.13,.01,.11,.29,.08,.04,.16,.12,-.07,.01,.44,-.36,-.03,.18,-.4,.39,.46,.13,.04,-.1,.27,.09,.11,-.04,.13,.2,-.04,-.09,.22,.01,.16,.34,.07,-.05,.42,.04,.01,.08,.05,.12,.19,.04,.06,-.01,-.31,-.12,-.06,.11,-.05,-.21,.02,.12,-.12,.27,-.04,-.1,.01,.61,.06,.06,-.03,-.05,.2,-.16,.4,-.1,.04,-.17,.07,.27,-.05,-.02,.45,.07,-.02,-.13,.07,-.14,.09,.19,-.17,-.19,.08,-.07,.41,.02,.02,-.06,-.09,-.01,-.28,0,.03,.21,-.07,.05,.17,.44,-.02,-.22,-.07,-.19,.02,.09,.24,-.02,-.19,-.23,.09,.26,.2,.28,-.14,.32,-.05,-.26,.31,.19,-.11,-.04,.11,-.11,.07,.14,.07,-.01,.05,.04,.08,-.01,.48,-.05,.12,-.17,.2,.21,.53,.03,.02,.23,.09,.18,-.2,.03,-.13,-.21,.12,.02,.34,.14,.26,.23,-.01,.21,-.01,-.01,-.07,.36,0,.08,-.32,-.11,-.12,-.1,-.06,-.03,-.18,.3,.02,.35,0,-.18,-.08,-.03,0,-.01,.48,0,.5,.05,.08,-.11,.08,.21,-.06,-.03,-.24,-.1,-.16,-.12,.36,.16,.15,.07,.45,-.06,.23,.05,-.13,-.02,.01,.17,.1,-.02,.17,-.04,-.18,.1,-.11,.16,-.05,.09,.53,.07,-.11,-.24,-.15,0,-.16,.32,.1,.14,.2,-.02,-.02,-.15,-.22,.18,-.19,.22,.19,.3,.3,.02,-.02,-.12,.04,.18,.08,0,.04,-.11,-.08,.43,.23,.38,-.13,.01,.24,-.07,-.13,.04,.12,-.16,.53,-.24,.14,-.07,.2,.1,-.05,.1,-.05,-.05,.21,-.06,-.19,.51,.32,-.04,.12,-.09,.17,-.02,-.18,.05,.06,-.05,-.07,-.23,.05,-.18,.09,-.06,-.03,-.07,.07,-.02,.03,.08,-.09,.26,.22,-.05,-.16,.26,-.03,.14,.13,-.06,-.03,-.18,.32,-.07,.19,-.13,-.04,.14,-.09,-.13,.07,.16,-.3,.05,.12,-.01,.08,.09,.09,.28,.24,-.28,.16,-.08,-.07,-.08,.09,-.06,.04,.12,-.03,.08,.16,.39,.37,.32,.12,-.03,.14,-.02,.14,-.27,.16,-.06,-.28,.13,.49,-.14,-.2,.24,-.09,.11,.17,.45,-.02,.14,.03,-.17,-.01,.16,.4,.04,.05,.4,.51,-.1,.04,-.08,-.16,-.13,-.08,.29,.06,.26,.12,.34,-.12,.1,-.05,-.09,.07,-.09,-.07,-.06,.08,-.08,.23,-.04,.12,.18,.34,.1,.01,.22,.26,.27,.24,.31,.21,.2,.16,.12,.2,.08,.2,.04,.37,-.03,-.25,0,.05,.1,-.25,.2,.12,.31,.22,.13,.13,.05,.23,.24,.04,.07,-.26,-.17,.06,.22,.1,.27,.1,.36,.31,-.16,.01,.26,-.31,-.09,.07,.27,-.07,-.36,-.18,.13,-.35,.11,.2,-.13,.05,.01,-.08,-.04,.39,.05,-.27,.06,.08,.04,.07,.04,-.02,.21,.2,-.28,-.11,-.16,-.14,-.17,-.11,-.02,.16,.02,.3,-.06,.04,.01,-.03,.19,.23,.22,-.27,.16,.07,.01,.21,-.04,.39,-.08,.08,.02,-.02,.04,-.03,-.11,0,.07,.28,.1,.03,.08,.37,0,.05,.18,.13,.02,.15,-.03,.01,.34,.12,.18,.03,.11,-.03,.19,.12,.27,.09,.43,.05,.15,.18,.23,.08,.29,-.05,0,.21,.32,.05,.1,.06,.28,.12,-.02,.12,-.05,.09,-.1,-.05,-.1,.39,.08,.07,-.2,.28,.28,-.19,-.1,-.07,-.12,.05,.26,.03,-.04,.02,-.09,-.24,.23,.23,.09,-.2,-.24,.23,.03,-.16,-.09,.09,.5,.09,.15,.27,.03,-.19,.28,.07,.29,-.06,0,.16,-.12,.13,.04,.25,.43,.05,-.02,-.22,.23,.24,.21,-.11,-.07,.27,.22,-.32,.17,.09,.03,-.03,-.13,-.04,.43,.08,.08,-.28,-.29,.07,-.06,-.19,.12,.15,-.05,-.23,.12,0,.13,-.29,.19,-.07,-.05,.26,-.06,.01,.05,-.27,-.1,-.15,-.04,.15,.01,.13,-.15,.26,-.06,.02,-.02,-.19,.19,.31,.4,.19,-.12,-.21,-.09,.32,-.09,.03,.04,-.15,.14,-.25,-.05,.02,.29,.25,.19,.14,.02,.1,-.01,.18,-.27,.17,.02,-.26,.01,.35,-.09,.2,.1,-.15,.1,-.03,.03,-.05,-.08,.19,-.08,.1,.55,-.29,.14,0,.07,-.01,.11,.15,-.11,.11,.37,-.2,.56,.04,-.05,.2,.33,.28,-.07,-.07,-.03,0,-.04,-.11,-.23,.14,.06,.16,.24,.22,-.08,.1,.23,-.01,.13,.05,-.16,.02,-.04,.07,.15,-.07,-.11,-.04,-.01,-.22,.03,.24,-.02,-.16,.23,-.1,-.13,0,-.02,-.32,.36,.13,-.33,-.36,-.02,.12,-.01,-.06,.1,.38,.15,-.1,.09,-.02,-.25,-.25,.08,-.13,-.09,-.11,-.13,-.16,.01,.09,-.02,0,.24,-.24,-.15,.08,-.02,-.13,-.12,.24,.29,-.13,.19,-.14,.37,.09,-.01,.01,-.08,.21,.15,.25,-.11,-.06,-.14,-.04,0,-.07,-.04,.07,-.01,.09,-.23,-.04,-.08,.21,-.01,.11,.06,.04,0,.11,.03,-.02,-.02,.13,.24,.11,.14,-.09,-.19,-.03,-.23,.16,-.2,-.14,-.17,-.02,-.11,-.07,-.04,-.46,.11,.32,.22,.22,.14,.03,.01,.06,.02,.1,.25,.24,-.16,.05,.07,-.06,.34,-.01,-.32,.19,-.04,.15,.21,-.1,-.03,-.11,.01,-.11,-.21,-.21,.14,.04,.22,.03,.06,-.12,.36,.07,.29,.03,-.24,.17,.17,.33,.17,.32,-.08,-.03,.02,.03,.23,-.07,-.1,-.24,.23,-.06,.02,.04,.11,-.03,.15,.22,-.11,.17,-.09,.17,-.21,.14,.39,.02,.35,.19,.04,.19,.33,.03,.08,-.1,.16,.27,.23,.29,-.01,.02,-.08,.43,.07,-.04,-.13,.17,.34,.34,-.04,-.07,.17,-.15,-.02,.17,.15,-.16,.14,.17,.15,.11,.08,.06,.12,.32,.03,-.1,-.14,.02,.1,-.08,-.07,.02,.05,.02,.2,.19,-.02,-.05,-.11,.29,.15,.2,.33,-.01,-.02,-.2,0,.09,.02,-.14,.07,.03,.1,.41,-.08,.13,.43,-.09,.16,0,-.16,-.15,.37,-.05,-.05,.03,-.08,-.04,-.04,.03,.28,.22,-.2,-.09,0,-.05,-.18,-.21,-.09,.25,.04,.03,.03,.25,.08,.35,.03,-.03,.07,-.13,-.18,.07,.14,-.15,.1,-.05,-.16,-.33,.16,.04,.2,-.08,.05,-.34,-.06,.12,-.09,-.09,-.17,.09,.05,.11,-.05,-.02,-.07,.06,.04,-.24,-.2,.13,-.3,.02,.34,-.22,.01,-.05,.24,0,.2,.18,-.08,-.06,.02,.16,-.13,-.1,.08,.19,.16,-.19,.17,.04,-.03,.04,.02,-.15,.01,-.31,-.04,-.15,-.22,.33,-.07,-.18,0,-.02,-.12,-.08,.33,.18,-.17,.13,.09,-.03,-.03,-.14,.15,.08,.25,.15,-.08,.01,-.02,-.17,.16,.16,-.09,.35,-.05,-.05,.14,.49,-.14,.06,.04,-.03,-.11,-.05,.13,.34,-.06,.01,.06,.25];export{a as rvalData};
