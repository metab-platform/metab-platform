const a=[-.1,0,.36,.08,.17,.06,-.07,-.05,.11,.01,.21,.1,-.12,-.28,.31,-.11,.03,-.14,-.11,-.08,.12,-.03,-.02,.18,.21,.13,.07,-.04,-.17,.07,.01,.08,.23,-.07,.29,.06,.26,.27,-.02,.37,-.05,.12,.02,-.06,0,.21,-.01,-.08,-.22,.01,-.01,.04,.19,.29,.27,.17,.19,.03,.02,.03,.14,.25,.24,-.13,-.16,.02,.19,.3,-.11,-.12,.12,-.01,.01,-.11,.13,.03,-.1,.1,.45,-.08,-.18,-.1,-.02,.04,-.05,.07,.07,.06,-.15,.38,.02,.07,.03,-.29,.18,0,-.3,-.04,-.06,.04,-.14,.31,.27,-.23,.23,-.09,-.19,-.08,.22,.36,.05,.06,-.06,-.38,.1,.18,.08,-.05,-.11,.13,.06,-.16,.08,-.18,-.11,.16,.2,-.02,-.05,.21,0,.12,-.07,.13,-.02,-.09,-.01,.07,.02,-.08,.14,-.08,-.05,.08,-.05,.15,.21,-.21,.33,.07,.31,.06,.03,-.17,-.12,.07,-.29,-.03,-.04,.3,.06,.33,.03,.09,.01,.06,.12,-.05,.11,.14,-.02,-.13,-.09,-.13,.12,.03,.07,.02,0,.16,.1,0,.16,.35,.27,.05,.19,.03,-.11,-.09,-.1,.09,.16,.17,.27,.45,.27,.39,.12,.02,.09,.16,.19,.1,-.31,.23,-.15,.12,.15,-.05,-.09,.21,.12,.21,.06,-.28,.14,-.12,.02,-.05,.28,.13,.24,.32,.16,.21,.01,.03,.35,.05,.23,-.07,.02,.51,.13,-.03,.18,.11,0,-.1,-.02,.22,-.19,-.23,-.1,-.04,.23,.09,-.01,.02,.11,-.23,.23,.03,.18,.06,.12,.34,.08,.36,0,-.08,.38,.17,-.21,.23,-.11,.14,.14,.01,.15,-.03,.23,.48,.3,.04,.06,.06,.34,-.21,.05,-.01,.29,-.22,.26,.26,.05,.16,.18,.11,.14,.06,.13,-.05,.01,.04,.05,.12,.14,.26,-.03,.26,.12,.03,.18,0,.27,.22,-.04,.06,-.1,-.12,-.12,-.09,.34,.26,.29,-.09,.43,.27,-.01,.06,.23,.2,.01,.18,.2,-.03,.07,.2,-.25,.13,.08,-.04,-.15,-.07,-.1,.22,-.1,.19,-.01,.02,-.04,-.21,.26,.46,.14,.08,.01,0,.26,-.16,.08,.21,-.24,.26,.21,-.01,.44,.38,.04,.03,.11,-.08,.05,-.17,.02,.23,-.12,-.09,0,-.15,.03,.02,.1,.07,-.27,.16,-.08,.12,-.04,.21,-.11,.04,.22,.14,.09,.17,.38,.32,.5,-.05,-.02,.04,0,.25,-.14,.03,-.02,-.07,-.06,.06,.53,.09,.16,.21,.11,.39,.28,.25,.46,-.3,.02,.51,.2,.08,.15,.18,.05,-.29,.02,.3,-.12,-.01,-.14,.18,.29,.12,-.04,-.12,-.16,.06,.1,.11,.04,.23,-.01,.2,.15,.33,.31,-.02,-.06,-.2,.06,.15,.26,.16,-.19,-.19,.19,.09,-.24,.02,-.01,0,-.01,.24,-.01,.09,.33,.23,-.28,.06,.15,.4,-.16,-.11,-.03,.34,-.08,.22,.19,.04,.01,.28,.23,.11,.45,-.03,.23,.26,.35,0,.07,.05,.26,-.22,-.1,.53,.24,.11,.05,-.15,.25,.13,.19,-.1,.33,-.13,.05,.01,.54,.16,.05,-.1,-.25,.47,.23,0,.29,.04,.01,-.18,.05,-.08,.11,.12,.08,.14,-.06,.29,.22,.12,-.1,0,.05,.18,.07,.13,.17,.19,-.13,-.04,-.05,0,.26,.16,-.18,.13,.06,.03,-.03,.09,-.15,-.16,0,.11,.37,-.31,.01,.2,.29,.51,-.03,-.04,-.1,-.38,-.21,-.08,.36,-.08,-.09,.01,-.17,.02,.16,-.06,.12,-.12,.41,.4,.15,-.16,.19,.26,-.13,.09,.08,-.11,-.16,.03,.21,.1,.37,.12,.24,.06,-.18,.25,-.03,.09,.25,.44,-.02,-.19,.34,.29,.06,.08,.3,.18,.31,.17,.11,.09,-.02,-.19,-.02,-.27,.04,.27,.08,.1,-.08,.07,.26,-.04,-.02,-.05,-.06,-.16,.17,.09,.12,.02,-.29,.02,.24,-.06,.01,-.23,0,.14,.35,.32,.29,-.06,-.05,.05,.07,.05,-.1,0,.21,.21,-.24,.04,.22,.35,.04,-.27,-.15,.23,.26,.12,.37,-.13,-.19,.01,.23,.05,.21,.03,.15,.16,.03,.07,-.04,.06,.12,.11,-.14,.09,.25,-.13,.23,.16,-.1,.05,.03,-.17,.01,.23,-.06,-.03,-.23,.1,.23,.05,-.03,-.13,-.17,-.11,-.06,.06,.16,.17,.39,-.11,.02,-.06,.01,.16,.08,-.04,-.16,.22,-.01,.07,.26,-.15,.2,.23,.07,-.13,-.08,.16,.05,-.07,0,.33,.29,-.06,-.01,.08,-.03,.04,-.02,.34,-.25,.14,.33,.18,.11,.01,.23,.08,.05,-.06,.25,.42,.08,.02,-.1,-.02,.06,.3,.01,.03,-.02,.14,-.02,-.28,.31,.21,.28,.01,.22,-.02,-.01,-.02,.26,.35,-.02,.32,.26,-.05,0,-.13,-.22,-.1,.15,-.05,.02,-.12,.28,-.11,.19,.01,.36,.19,.05,.08,.51,.41,.21,.1,.36,.18,-.13,-.09,.48,.29,.14,-.02,.34,-.07,-.21,.17,-.1,-.05,-.24,.31,.27,.11,.08,-.06,.01,-.06,.02,-.07,.32,-.1,.15,-.19,-.27,-.27,-.04,.13,.02,-.13,-.01,.21,-.16,.21,-.03,.25,-.13,.1,-.05,.19,.01,0,-.14,.02,.08,.32,.11,.08,.22,.05,-.17,-.22,.13,.4,-.09,-.03,-.06,.17,-.08,-.02,.05,-.05,-.04,.11,.01,0,.1,.13,.18,.17,.23,-.11,-.15,-.11,-.19,.08,-.41,-.12,-.21,.1,-.22,.02,-.17,.01,-.23,.09,-.03,-.01,.09,.28,.03,.18,.22,-.04,.01,.08,.24,-.23,.18,-.14,-.19,.28,.23,.02,-.06,-.13,.39,.16,.39,-.06,.03,-.08,-.07,.21,-.15,.06,-.03,-.01,-.07,.01,.07,-.15,.36,.02,.06,-.06,-.17,-.06,-.19,-.19,-.15,.18,.25,.22,.02,.22,.31,-.05,.09,.35,.23,.16,-.03,-.28,.13,-.08,.16,.16,.05,.23,0,-.06,-.13,-.02,-.13,.39,0,-.19,-.18,.16,.03,.23,-.11,-.27,.12,-.13,.11,.26,.21,.04,-.3,.04,.2,-.19,-.17,.28,-.25,-.19,-.08,-.2,.28,-.29,.11,.03,.22,.23,0,.43,.17,-.08,-.14,-.12,.22,-.09,-.19,-.01,.06,.32,0,-.07,.09,-.09,.03,-.1,-.06,.18,-.02,.31,-.13,-.01,.02,.12,-.01,.08,.03,.02,-.04,.06,.03,.13,.04,.02,-.01,-.15,.04,-.21,-.16,-.09,.02,-.02,.1,.21,-.08,-.07,.27,-.13,-.04,-.11,-.07,-.05,-.05,.25,.13,.09,.18,-.09,.02,-.07,.13,.23,-.09,-.11,.1,.01,-.03,-.16,-.04,.2,.01,.2,.12,.32,.03,.07,-.13,-.2,-.16,.19,.02,-.03,.03,.05,-.01,-.01,-.03,.18,.26,.05,.06,.08,.06,.35,.13,.04,.4,.08,.07,.17,.01,.09,-.08,-.05,.13,-.18,-.13,-.11,.01,.03,-.2,-.16,.26,.03,.54,.2,-.01,.05,.31,.13,.05,-.09,-.17,-.05,.33,.09,.06,0,.29,.1,-.06,.05,.17,-.13,-.08,.01,-.13,.06,.04,.1,-.18,.27,-.01,.14,-.09,-.01,.07,.34,-.02,.11,-.24,.18,.21,-.17,.13,.18,.22,-.16,-.07,-.03,.11,.2,-.09,-.05,.18,-.08,.11,.4,.44,-.21,.06,-.02,.08,.34,.06,.06,-.08,.03,.06,-.07,.09,.17,.02,-.01,.26,.05,.17,.23,.45,-.03,.31,.09,-.17,.19,.29,-.11,.24,-.14,.01,-.11,-.09,.1,.29,.02,-.21,.05,.14,.24,-.32,.5,-.28,.17,-.09,.27,.24,-.02,-.18,.37,.35,-.4,-.16,.32,.16,.32,.14,.3,-.11,.39,.43,0,.38,-.11,.04,-.08,.42,.07,-.3,.04,.1,-.14,-.22,-.07,.48,-.09,-.05,0,-.05,-.05,-.07,-.06,-.07,-.02,.37,.14,.18,.23,.17,.04,-.04,-.08,.23,.1,.42,-.01,-.07,-.05,.02,.17,.06,-.05,.22,.1,-.02,-.02,.04,-.09,.13,-.11,-.18,.4,-.21,.24,-.18,.08,-.07,.3,.03,-.01,.05,.03,.34,-.04,.36,0,.29,-.02,.03,-.13,-.12,-.18,.12,0,.39,-.06,-.1,-.04,.26,.02,.17,.06,.05,.03,.2,.19,-.02,.1,.31,.39,-.17,.32,.2,.19,-.2,.1,-.02,.34,.07,-.18,.21,.09,.39,.27,-.29,.19,.07,-.01,.12,.46,.22,-.08,0,.03,-.1,-.19,.11,-.01,.39,.15,.55,-.09,-.12,.28,0,-.06,-.29,-.3,0,-.14,-.03,.25,.03,-.13,-.19,-.05,.5,-.04,.2,.25,0,-.34,.22,.38,.57,.39,.04,.45,.15,.15,.18,.26,.6,.36,-.01,.27,-.02,.29,.28,.13,.02,.08,-.13,.43,.42,.31,.09,.4,.1,.09,.19,.06,-.03,.16,.14,-.2,.19,.39,.21,-.01,.27,.42,.16,.61,-.05,.18,.2,.3,-.15,-.16,.16,-.35,0,-.19,.06,.41,.45,.26,-.16,.1,-.38,-.08,.36,.32,.1,.02,-.14,.22,.08,-.03,.21,.04,.18,-.14,-.11,-.06,-.21,-.02,.18,-.12,.1,.16,-.07,-.08,.34,-.04,.09,.08,-.05,-.05,.16,0,.01,.33,-.08,.13,.02,.19,.05,-.03,-.16,.61,-.12,-.21,.17,.14,.19,.2,.32,-.05,0,.07,.12,-.02,.17,.12,.36,.41,.02,-.21,.56,.66,.01,-.11,.09,.03,.41,.03,.35,.61,.27,-.09,.17,.63,-.06,.17,.19,.46,.18,.33,.07,.13,.07,.44,.1,.11,.01,-.22,-.04,-.05,0,.46,-.14,-.18,.18,-.03,-.41,.41,.19,.09,-.07,0,.22,-.09,-.3,.19,-.06,-.12,.09,-.09,.17,.25,-.05,.03,.06,.35,.13,-.06,.17,-.16,-.02,.02,-.3,.35,.29,.12,.4,.02,.03,.39,.08,.23,.3,-.02,.47,.32,.33,-.01,-.05,.04,-.05,.18,-.02,-.2,.26,.45,-.03,-.02,.18,.16,.34,-.09,.19,.03,.39,-.05,.17,-.05,.14,.09,.28,-.08,.28,.43,.13,.18,-.06,.23,.14,-.09,.38,.3,-.11,.17,.48,.25,.33,-.07,.21,-.28,.44,.21,.23,-.01,0,.14,-.12,-.21,.22,.03,.19,.23,-.26,-.03,.07,.29,.37,.39,.04,-.28,.53,0,.04,.42,-.07,-.16,-.08,.21,.1,.16,.38,.32,.06,.31,-.07,.34,-.19,.26,.01,.09,.09,-.04,.46,.15,.45,-.02,.26,-.06,.09,.41,.25,.23,.24,.08,-.23,-.16,.02,.17,.48,-.1,-.31,.1,.35,.02,-.25,.31,-.21,-.13,.38,.05,.28,.14,.29,.1,.2,.37,.28,.04,.38,.32,.37,.3,-.15,.15,-.03,-.15,.24,-.02,.46,.1,.42,.34,-.04,.13,-.1,-.1,.23,.17,.07,0,.05,0,-.02,.13,.2,-.05,-.1,.23,.38,.28,.08,.18,.26,.28,.11,.15,.17,.05,-.09,-.42,.07,.03,-.32,.13,.08,.13,.18,.24,.4,.26,-.28,.12,.4,-.05,.06,.08,.22,.26,.07,-.06,.13,-.04,-.14,.26,.16,.48,.02,.47,.11,.05,.11,.19,-.02,-.12,-.19,-.17,.49,.11,.41,-.01,.33,.3,.19,.38,.6,.32,.02,.13,.03,.03,-.01,-.12,-.27,-.31,.02,-.33,.03,.06,.1,-.03,.43,.41,-.03,.04,.27,-.43,.44,.1,.01,-.26,-.09,.22,.22,.12,-.09,-.03,.52,.05,.34,.25,-.2,-.3,.25,.32,.37,.03,.37,.02,.2,.38,.13,.35,-.04,0,-.08,.05,.12,.29,.3,.14,.21,.32,.07,.45,.31,.18,.34,-.03,.46,.03,-.01,.48,.08,-.27,-.05,.33,.32,.34,.08,0,.16,.21,.42,.14,.01,-.05,-.22,-.09,-.01,.39,-.18,.34,.22,.2,-.1,-.23,.2,-.03,-.12,-.17,-.05,-.11,.15,.23,.03,.45,-.02,-.13,-.03,.16,-.18,.28,.05,.17,.08,.01,.43,.29,.52,.17,.19,-.21,.15,.07,.22,.29,.19,.17,-.14,.16,.01,-.09,.09,-.16,-.15,-.2,.36,.4,.1,.49,-.18,-.06,-.04,.19,-.17,.01,-.15,.14,.13,.23,-.12,.44,.14,0,-.01,.26,.26,.17,-.08,-.13,.26,.24,.42,-.04,-.15,.05,-.07,-.3,-.02,.22,.09,.24,.11,.06,-.01,.3,-.06,.05,-.09,.32,-.11,.3,-.03,-.05,-.21,.08,.56,-.11,-.05,.19,-.01,-.1,.25,.16,.5,-.06,.49,.39,.07,.03,.18,-.03,.26,.19,.08,.03,.22,.13,-.01,.01,.2,.1,-.09,.14,.23,.67,.28,-.09,-.15,.08,.04,-.25,-.11,-.14,-.14,.12,.26,.02,.31,.21,.04,.13,1,.13,.42,-.13,.38,.17,.1,.02,.15,-.19,.16,.3,.09,.39,.08,.14,.01,.07,.24,-.16,.09,.21,.15,-.02,.21,.19,.35,-.1,-.11,-.08,.47,.08,.53,.22,.13,.32,-.15,.21,.11,.02,-.06,.16,.12,.16,.12,.19,.08,.27,.47,.05,-.15,.08,-.02,.25,.12,-.01,.31,.14,.2,.33,.01,-.05,.1,-.05,.32,.16,.08,.16,.11,-.37,-.1,.06,.35,-.21,-.06,.1,.53,.14,.13,-.02,-.05,.3];export{a as rvalData};
