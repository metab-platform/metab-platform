const a=[-.16,.12,.24,.01,.29,.12,.18,-.08,-.03,-.01,.01,0,.1,-.2,.07,.01,-.05,.16,.04,.08,-.01,-.16,.19,.07,0,.38,-.08,.22,1,-.12,.21,-.07,.29,.1,-.21,.28,.15,-.13,.12,.26,.05,.37,.52,-.11,.01,-.29,-.09,-.04,.21,.02,-.24,.07,.1,.3,.18,-.06,-.05,.17,.25,.36,.23,.3,.42,.05,.39,-.11,.35,-.02,-.06,.03,.01,.18,.13,.04,.36,.04,-.04,.2,-.24,.26,-.2,.37,-.25,.48,-.13,.04,.45,-.02,-.25,.03,.18,.13,.1,-.29,-.19,.21,-.38,-.27,.14,.28,-.14,.32,.15,-.07,.24,.11,.2,.14,.41,.17,-.15,-.06,-.05,-.23,-.07,.26,.08,-.1,.07,.04,-.03,-.01,-.06,-.02,.36,.2,.25,-.07,-.06,.21,.06,-.2,-.14,-.19,.1,.07,.06,.12,-.11,.14,.41,.14,.48,.43,.12,-.14,.03,.41,.39,-.19,.32,-.31,.15,-.13,.08,.14,.46,-.11,-.2,.02,-.03,.27,.14,.07,.08,.13,.09,-.04,.16,.33,0,.01,.08,-.23,.52,.05,-.03,.02,.11,.3,-.06,.18,.03,.12,.33,.13,-.15,-.03,.07,-.16,.04,-.03,.1,.25,.26,.26,.34,-.05,-.08,-.03,-.13,.14,.19,-.14,-.27,.28,.33,.12,.13,.15,0,.03,-.12,.09,.17,.45,0,.14,.05,-.14,.51,.2,.11,.36,.32,.25,.01,-.05,.04,.06,-.1,-.06,.18,.21,.08,.07,.08,-.18,.03,0,-.05,.04,.01,.12,.15,-.23,.08,-.12,.3,0,-.14,.26,.21,.14,.4,.17,.14,-.14,-.15,.12,.01,.15,-.04,.37,.35,.22,.05,.41,-.39,.32,-.01,-.72,.1,.17,-.08,.15,.1,.1,.25,.21,.06,-.14,-.13,-.05,.27,.36,-.11,.11,.06,.08,-.28,.2,.4,-.23,.08,.53,-.12,-.08,-.18,.36,.01,.26,-.09,-.2,.04,.46,.09,.14,.27,-.14,.4,.03,.01,.14,.02,.36,-.02,.18,.19,0,.49,-.09,-.01,.38,-.12,.3,.5,.22,.09,.3,-.21,.4,.48,.08,-.07,-.01,.06,.57,-.18,-.1,.25,.46,-.03,.02,.18,.26,-.05,.19,.47,.11,.44,0,-.01,.29,-.31,-.13,.03,.1,.2,.08,.16,.05,.35,.18,-.07,-.14,.14,.22,.19,.1,.35,-.06,.01,.16,.17,.23,.21,.48,-.07,.14,.04,.17,.02,.18,-.13,.32,-.01,0,.32,.34,.2,.1,.03,-.08,-.16,.31,-.32,-.01,.16,.38,0,.28,.17,.23,.08,.09,.1,.21,.3,.38,.19,-.24,-.24,.18,-.06,-.12,.4,.47,.06,-.01,.09,.21,-.05,.1,.1,.35,.19,-.02,.31,-.11,0,.12,.01,-.01,.06,.2,-.16,.5,.42,.22,.32,.34,.47,.01,-.14,.26,.31,.52,-.04,-.3,-.08,.1,-.28,.35,-.2,.22,.06,.23,.19,-.01,.31,.46,-.28,.19,.04,-.14,-.02,-.16,-.32,.25,.17,.2,.14,-.16,.15,.36,.28,-.31,.21,-.12,.4,.09,.23,.12,-.22,.28,.2,0,.5,.13,-.08,-.05,.04,.04,.29,.38,-.23,-.16,.04,.01,.34,.27,.04,.35,.36,-.01,.47,.27,.38,.15,.29,.09,.44,.34,-.26,.21,-.12,.06,.19,.43,.15,.28,.08,-.1,.4,-.01,.04,.14,.03,.4,.05,-.21,-.07,.01,.08,.14,.15,.26,.32,.09,-.03,.21,.06,.1,.05,-.07,.32,.11,.06,.75,-.08,.25,.34,.1,.24,.03,-.12,.19,-.11,-.03,-.02,-.06,.28,-.02,-.15,-.09,-.02,-.08,-.1,-.1,.22,.25,-.21,-.21,.26,.31,-.07,-.1,.05,.26,.03,-.06,.43,.38,.13,.12,.3,.38,-.06,.14,-.18,.05,.01,.21,-.01,-.22,.33,.26,.27,-.08,.09,.3,.25,-.08,.29,-.08,.13,0,-.03,.72,.17,.1,.11,-.05,.1,-.22,.33,-.23,-.08,-.01,.19,.07,.44,-.17,.26,-.25,.07,.12,.41,-.2,-.02,-.42,-.25,.09,.13,-.01,.37,-.06,-.05,0,0,.46,-.22,.16,.05,.3,.21,.46,.12,.13,-.18,-.32,.17,.39,.35,.01,-.25,.01,.02,-.15,.29,.55,.24,.16,-.07,-.09,.02,.3,.37,.42,.22,.06,-.12,-.1,.17,-.06,.26,.31,-.15,.29,-.11,.36,.36,.47,.19,.1,-.13,.41,.42,-.24,.06,.15,.32,.02,.09,-.1,.01,-.34,.12,-.15,.46,.02,.23,.31,.09,.08,0,.34,-.06,-.02,.29,-.13,-.04,-.11,-.01,-.08,.22,.01,-.12,-.02,-.02,.36,.12,.01,.5,.41,-.24,-.04,-.25,.34,-.19,-.04,.34,.05,.19,.08,.17,-.02,.16,.14,-.02,.28,-.04,.1,-.1,-.25,.15,.09,.05,.28,-.2,.11,-.1,.47,-.07,.01,.11,.31,.44,-.12,.4,-.08,.43,.01,.39,.26,.37,.11,-.01,.2,.28,.26,.28,.03,.17,-.22,.01,-.18,.28,.23,.32,0,-.11,.45,.15,.33,.35,.1,.01,-.13,-.07,.25,.21,-.11,.47,.03,.28,.46,.29,.25,.13,.25,-.24,.4,.02,.42,-.07,-.25,.12,.03,.08,.19,.33,-.11,.3,.1,-.24,.19,.13,.4,-.1,.16,-.03,.25,.04,.22,-.22,-.17,.06,0,.21,.17,.08,.04,.13,-.01,.01,-.04,-.03,-.03,.37,.41,.14,.08,-.18,.2,.16,-.16,.29,-.08,-.11,.03,.22,-.09,-.03,.29,.15,.1,.03,.01,.28,.34,.17,.01,.37,.11,-.06,0,.23,-.08,.05,.01,.17,.15,.33,.12,.9,.06,-.14,.12,-.05,.19,-.03,.41,.07,-.12,.29,.42,.38,.03,.4,-.06,-.2,.3,.38,-.05,-.12,.08,.23,.26,.18,-.28,.03,-.04,.08,.32,.16,.13,-.02,.11,.07,.12,.04,-.02,.28,.28,-.05,-.02,.03,-.17,.28,.07,-.1,.25,.37,.3,-.03,.35,.19,.19,-.06,.08,.2,.45,.42,-.27,.1,-.09,.12,.32,-.21,.17,.11,.29,.25,.25,-.13,.1,-.03,.13,-.08,-.03,.33,.11,.17,.03,.4,.32,.44,.11,.45,.05,0,-.21,.33,.04,.04,-.25,-.15,-.04,.08,-.02,.01,-.27,.52,-.17,.02,.2,.02,.33,.44,.12,-.15,.14,-.07,.01,-.12,-.06,-.08,.03,.21,-.13,.07,-.1,-.2,.26,.05,-.15,.1,.11,-.04,.01,-.08,-.05,.01,-.12,-.17,.07,.03,-.09,-.21,.22,.29,-.04,.18,.01,-.01,-.1,.3,.03,.38,.19,.08,.25,.06,.38,.28,-.09,.08,.12,.07,-.09,.19,.28,.06,.18,.18,-.17,.19,-.01,0,.35,.01,-.01,-.13,.16,-.15,.01,-.01,.36,.08,.23,.16,-.14,.16,-.22,-.07,.15,.37,.46,-.11,-.08,-.13,.23,-.01,.1,.02,.05,.16,.05,.02,.13,.31,.2,-.04,.38,.1,-.14,.42,.34,.1,.08,.14,-.06,.15,.21,.01,.02,-.12,.44,.66,.21,.4,0,.08,.5,-.02,.38,.45,.58,-.27,.03,-.01,.11,.34,.16,.25,.01,.46,.03,.02,.15,.13,.09,.19,.08,-.09,.15,.07,.4,-.03,.06,-.26,-.12,-.07,-.06,-.03,-.15,.15,-.01,.06,.44,.37,-.03,-.02,.25,.45,.42,.17,-.04,.52,-.16,-.21,.06,.38,.13,.4,-.13,.23,-.28,.14,-.13,.16,.4,-.09,.24,.14,.05,.04,.1,-.06,-.08,.05,.09,.39,.12,.42,.41,.25,.17,-.35,-.09,-.24,.31,.23,.11,.13,.08,.18,-.06,.05,.03,.07,-.11,-.18,.06,.34,.15,.45,.16,.8,-.31,-.16,.24,.41,-.01,-.26,.39,.35,.12,.03,.21,-.13,.36,.39,.38,.12,.2,.02,.01,.33,.02,-.22,-.22,.03,.24,.03,.5,.2,.15,.21,.37,-.07,.12,.14,.16,.06,-.09,.36,.09,-.12,-.32,.37,.15,.26,.25,.17,.08,-.1,.13,.14,.38,.33,.07,.14,-.13,-.21,.42,.51,.09,.4,-.17,.09,.12,-.09,-.02,.45,-.03,-.08,.4,-.33,.41,-.04,-.14,0,.06,-.14,-.06,.17,-.1,.29,.02,.28,.17,.3,-.14,.84,-.22,-.11,0,.49,.02,.11,.19,.15,.01,.3,-.16,-.1,-.16,-.3,.37,.42,.22,-.09,.17,.09,.28,.2,.1,.46,.21,-.03,.11,.13,-.01,.12,.37,.25,-.19,-.04,.29,-.23,.15,.24,.24,-.01,-.1,.21,.17,.33,.26,.04,-.2,-.01,.11,.17,.43,.17,-.09,.05,.35,-.13,.33,.73,.06,-.01,-.14,-.05,.33,.03,-.03,-.11,.1,-.14,.06,-.03,.38,-.06,.11,.09,.03,.15,.01,.25,.1,-.02,.14,.12,-.03,.14,.25,.1,-.1,-.02,.02,.25,.08,-.07,-.04,-.27,-.07,-.09,.1,.18,-.24,-.13,-.13,.07,-.31,-.09,-.29,-.11,.12,-.1,-.15,-.05,-.14,.2,.28,.05,.17,.31,.29,.18,-.09,.02,.12,.33,-.09,.12,.12,-.03,.25,.17,-.03,.3,.04,-.06,.03,.26,.33,.13,.42,.09,.08,0,.02,-.03,.14,.38,-.11,-.08,.13,-.22,-.04,.25,-.1,-.08,.2,-.13,.12,.34,.2,.24,.43,.01,-.14,-.07,.11,.23,.05,-.18,.39,.12,-.04,-.11,-.03,.08,.1,-.27,-.14,.11,.02,.32,.27,.35,.09,.03,0,-.13,.05,.05,.09,.18,.28,.25,.02,-.16,.03,.21,-.22,-.25,-.15,.16,-.54,.36,.19,.19,.13,.36,-.05,.1,.28,-.15,.22,.34,-.16,.11,.21,-.16,.13,.18,-.09,.13,.43,.02,.04,.12,.02,.09,.15,.29,.3,.21,.16,.35,.38,.1,.18,-.01,.42,-.01,.05,-.07,.24,.3,0,.09,-.03,.11,.25,.15,-.04,.01,.28,.33,.16,.1,.02,.36,.22,.03,.27,.19,-.14,.12,.36,.32,.31,.34,.06,.2,.28,.24,.32,.02,.05,.29,.05,.45,.3,.41,.13,.07,.23,.48,.17,.32,.2,-.11,-.04,.18,.22,.4,-.01,.22,-.17,-.01,.14,.39,.23,.03,.47,.12,.32,-.11,-.06,.19,-.06,-.28,-.11,.24,.19,.06,.04,.07,.23,.25,.18,.39,.12,-.09,-.03,.04,.08,.28,-.08,-.1,.11,.04,.27,.41,.05,.27,.26,-.25,.27,.11,.1,.2,.23,.06,.02,.29,.26,.22,.47,-.05,.36,-.15,.32,-.17,.2,0,-.22,.19,-.02,-.11,.35,.19,.08,.1,-.08,.15,.13,-.25,.23,.31,.46,.32,.46,.38,.01,-.31,-.11,0,-.05,.05,.59,.05,.34,.48,.09,.33,.06,-.03,-.08,.51,-.15,-.07,.34,.34,.24,.31,-.3,.15,.16,.2,-.18,-.01,.45,.16,-.19,.38,-.07,.13,-.1,.19,.27,-.12,.4,.16,-.14,.19,-.12,.04,.05,.17,-.05,.16,-.13,.13,0,-.17,.33,.26,-.06,-.01,.39,.05,-.06,.19,.45,.44,.16,.04,.46,.57,-.02,-.11,-.19,-.21,-.17,-.24,.35,.2,.04,-.02,.12,.01,.11,.25,.08,.3,.17,-.06,-.16,-.32,-.08,.07,.21,.19,.15,.12,.12,-.14,.04,-.09,.47,-.01,.04,.04,.1,.23,.02,.2,.33,.29,.31,.04,.09,0,.32,-.13,-.01,-.14,.43,-.18,-.09,.12,-.18,.17,.04,.16,-.04,-.24,-.09,.14,.13,.11,.24,.3,.05,.19,-.16,-.12,-.11,-.1,.46,.34,.43,.37,-.25,.05,.37,.13,.05,.33,.33,.28,.28,.16,.1,-.03,.28,-.1,.09,.35,.22,.17,0,.18,.2,.33,.21,.21,-.02,.2,.28,.39,.16,.26,.35,.3,-.08,.19,.11,-.16,.2,.17,-.08,.29,.35,.22,.31,.15,.24,.4,.29,.2,0,-.06,.04,.08,.14,-.02,-.03,-.21,-.12,-.18,.51,.05,.21,-.28,-.08,.16,.08,-.1,.04,.2,-.18,.17,.17,.22,.79,.41,-.3,-.28,-.37,-.11,.31,.13,-.15,.12,.41,-.08,-.17,.25,.38,.48,.19,.23,-.11,.34,.28,-.12,0,.17,.06,-.11,-.12,-.03,-.15,.34,.29,.39,0,.04,.09,.4,.25,.3,.05,-.14,-.07,.52,.26,.09,0,.36,.35,.23,.49,.36,.33,-.07,.01,.05,.09,.24,-.08,0,.11,-.01,0,-.05,.3,-.23,-.33,.37,.3,.01,.2,.32,-.17,0,.31,-.25,-.02,.16,-.04,-.12,.18,.04,.18,.09,.05,.21,.06,.19,.42,.06,-.06,.1,.17,.38,.49,.51,.11,.05,.16,.44,.27,-.07,-.2,.01,.05,.26,.4,-.21,.21,-.01,-.12,.32,.24,.2,-.14,.11,0,-.03,.26,.08,.39,.33,.3,.36,.07,-.14,.21,-.17,.03,-.27,.05,0,.36,.28,.22,-.55,-.29,.42,.21,.19,.27,.18,.41,.28,.1,.33,-.33,.39,.4,.4,.04,.33,-.04,.38,.12,.18,.25,.08,.42,-.09,.23,.4,.07,.08,.22,.19,.35,-.05,.23,.37,.38,.27,.32,-.21,.37,.01,.32,-.2,.28,.07,.31,-.19,-.12,.34,.26,.29,.31,.03,-.05,.06,-.09,.31,.16,.42,.16,.43,.43,-.16,.09,-.18,.13,-.06,.24,-.17,.12,.41,.06,.06,.03];export{a as rvalData};
