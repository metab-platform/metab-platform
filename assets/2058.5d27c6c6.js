const a=[-.12,.04,.11,.07,.12,.05,-.16,.26,.05,.18,.02,.04,.05,-.17,-.02,-.04,-.28,.12,-.11,-.08,-.11,-.02,.02,-.36,-.11,.1,-.18,.18,.12,-.23,.05,-.17,.34,-.01,-.08,.09,.04,-.26,-.04,.45,.04,.12,.16,-.01,.2,-.05,-.33,-.19,-.05,.17,-.3,.15,.09,-.19,.52,-.3,.14,.11,.18,.01,.07,.34,-.01,.1,.23,.01,.08,-.23,-.04,-.18,-.05,.07,.12,-.03,0,-.06,-.11,.1,-.2,-.19,-.17,-.12,-.17,.09,-.08,0,.01,.09,-.07,-.09,.14,.15,.04,.23,-.07,.2,-.21,-.11,.09,.12,.06,-.08,.18,.03,.23,.07,-.12,-.33,.17,.21,-.19,.25,-.04,-.06,.17,.08,-.53,.05,-.09,-.09,.05,-.02,.01,.17,.6,.23,-.01,.08,-.07,.07,.23,.26,-.19,.2,-.03,.04,.42,.19,-.19,-.13,.25,-.09,.16,-.01,-.05,.15,-.06,.17,0,-.01,-.11,-.17,-.17,-.25,.18,.24,.19,-.03,-.17,-.16,.66,.31,.19,.16,-.03,.18,.13,-.17,.14,.04,0,-.02,.23,.49,.53,-.06,-.12,-.13,.2,.07,-.15,-.03,.21,.23,.52,.03,.03,.09,.18,-.11,-.18,.01,.09,.13,.24,.08,.24,-.21,.02,.05,-.6,-.06,.05,-.02,-.06,.4,.43,.37,.17,.11,.14,-.15,-.05,-.15,.11,-.06,-.05,.09,-.11,-.14,.26,.21,-.05,-.07,.2,.06,.21,-.1,.26,.78,.15,.15,-.23,.1,.07,-.02,-.09,-.27,-.01,-.13,.23,-.25,.14,.4,.01,-.14,-.06,.12,.2,-.08,.19,.3,.48,.32,.27,.11,.28,-.11,.23,.14,0,.19,-.15,.27,.14,.2,-.17,.14,.18,-.05,.05,-.17,.03,.05,.13,.09,-.11,.2,-.12,-.02,.52,-.16,-.4,.01,.46,.17,-.18,0,.06,.08,.32,.4,.26,-.18,0,.18,-.09,-.24,-.06,.11,-.17,.23,-.12,-.1,.02,.18,.15,.11,.17,-.16,.02,0,-.18,-.07,.35,.11,-.02,.09,.05,.2,.11,.03,-.17,.02,.24,.39,.36,.23,.42,.41,.06,.23,.33,.12,.09,-.15,.02,.29,.14,-.01,.06,.18,-.09,-.19,-.07,.14,.1,.41,.17,.49,.23,.29,.11,.41,-.28,-.43,.46,-.08,-.02,.14,-.17,.08,.47,-.27,.13,-.17,.32,.05,.09,.06,.12,-.03,-.09,.02,.16,.05,.06,.23,.05,.27,.14,.05,-.02,0,.11,.44,-.14,.1,.3,.35,.05,-.01,.01,.31,.28,.19,-.17,-.07,.29,.57,-.06,.3,.09,-.01,.41,-.01,-.26,.13,.05,.12,0,-.07,.44,0,.28,-.02,.2,.25,.51,-.03,.04,.06,.16,-.06,-.25,.08,.34,.2,.39,.38,.12,0,-.12,.01,.23,-.16,-.17,.31,.08,.24,.33,.01,.18,-.18,-.11,.07,.25,.37,-.16,-.1,-.22,.17,-.13,.25,-.2,.3,-.17,.07,.12,-.02,-.07,.31,-.13,.25,.27,.15,-.07,-.04,-.04,-.2,-.28,.04,.1,-.02,.31,.18,-.05,-.41,.13,-.08,.3,-.17,.33,-.05,-.02,.38,.42,.24,.32,.15,-.05,.02,-.24,.41,.21,.05,.27,-.23,.08,.25,.3,.23,.16,.09,-.06,.17,.17,.13,.34,.13,.19,.28,.15,.06,-.06,.05,.35,.09,.25,.1,-.1,.18,.25,-.02,-.1,.01,.28,.19,-.07,.29,.3,.28,-.04,.29,-.02,.01,.21,.2,.25,.09,-.12,.19,-.02,-.07,.01,.17,.37,-.07,-.03,.1,-.16,.06,.06,.09,.18,0,-.01,.34,-.24,.08,0,.01,.46,.07,-.09,-.04,.15,-.15,.42,-.04,.19,.02,-.33,.31,.23,.1,-.22,.27,.36,.02,-.04,.09,.3,.32,.15,-.24,.17,-.06,.12,.06,-.12,-.17,.03,.17,.15,-.1,.12,.08,.11,.13,.06,-.03,.21,.04,.38,-.14,.43,-.18,-.04,.09,.06,.09,-.02,.02,.02,0,.2,-.14,-.04,.03,0,.3,.1,-.07,.34,-.07,-.1,.15,.26,-.07,-.16,-.1,.05,.19,.15,.04,.21,.29,-.04,-.13,.1,.05,-.04,.14,-.25,.22,.29,.07,.17,.16,.02,-.1,.47,.09,.18,.03,-.3,-.06,-.03,-.19,.22,.18,.13,.18,-.2,-.14,-.18,.33,-.08,-.04,-.08,.03,.01,-.2,.19,.37,.01,-.08,.18,.12,.05,.19,.35,.28,.06,.01,-.12,.11,.16,.12,-.01,.14,.18,-.08,-.05,-.14,.14,.12,.01,-.19,.14,.09,.11,.16,.03,-.09,-.21,.17,.06,-.16,-.02,.39,.29,.1,.07,-.16,-.04,.04,-.06,0,.13,.29,.03,-.05,0,.19,.12,-.18,-.07,.08,-.16,.09,.34,.06,.15,.47,.02,-.03,.19,-.11,-.02,.12,-.12,-.11,-.11,-.07,.04,.05,.25,.26,-.07,.08,-.06,.31,.01,.05,.2,-.17,.22,-.16,-.28,-.17,.16,-.15,-.13,-.29,.11,.05,0,-.01,.33,.26,.03,-.05,.3,-.33,-.03,.02,.18,.1,.21,.18,.05,.14,.14,.39,.56,.16,.46,-.04,.02,.34,.33,-.31,.18,-.25,.04,.14,-.02,.27,-.06,-.14,.07,.05,-.03,.12,-.23,.27,.26,-.02,.1,.16,.36,.09,.16,.25,-.16,-.08,-.03,.23,-.1,-.1,.1,.01,-.23,-.01,.1,.1,.06,-.07,.34,.06,.08,.1,.09,-.08,-.28,.2,.01,.06,.31,-.05,.03,.28,-.19,-.04,-.3,.1,.05,.11,-.01,-.06,.11,-.01,.1,.25,.2,.2,.04,-.03,.11,0,.09,.02,.14,.37,-.14,.02,.36,.21,.2,.05,-.13,.31,.06,.25,0,.04,-.1,.03,-.02,-.12,.25,.04,.02,.04,.09,.09,.33,-.1,.09,-.04,-.13,.26,.3,.13,-.26,-.02,.07,-.08,.23,.1,.23,-.1,-.08,.16,-.07,.48,-.14,.49,-.14,-.13,-.12,.39,.15,.37,-.02,.45,.36,.04,0,-.14,.23,-.2,.33,.1,-.06,.09,.32,.09,.03,.15,.11,.15,.06,-.08,.2,.19,-.13,.11,-.15,.23,.16,.03,.41,.16,.03,.16,-.11,-.01,.09,-.13,.3,.1,.42,-.2,.13,.38,.15,.11,.19,-.22,-.05,0,.29,-.02,0,.41,-.06,-.12,.16,.07,-.28,-.05,.22,-.61,.15,.48,.23,.16,-.06,.42,0,.07,.12,.15,.28,-.01,-.04,.01,.08,.06,.4,-.09,-.11,.37,-.05,.23,.11,0,.06,.12,-.07,.14,.1,-.33,0,.14,.03,-.04,-.21,.24,.11,-.06,-.03,-.04,-.17,-.01,.19,-.05,.03,.17,.26,.47,.03,.27,.21,.04,-.06,.11,.41,-.02,.07,.44,.09,.05,-.01,-.09,-.02,-.16,.42,.11,-.41,.16,-.22,.31,.02,-.06,.06,-.07,-.03,-.04,.03,.28,.12,-.41,-.01,.09,.09,.2,-.06,.03,.26,-.1,.05,.27,-.15,-.37,-.02,.09,.6,.23,.04,.2,.18,.31,-.1,.41,.19,-.09,-.09,.05,-.16,.06,.16,.06,-.14,.16,.05,-.03,-.08,.32,.03,.07,.04,.13,.1,.32,.19,.24,.18,-.08,.28,-.25,.4,.15,.13,-.03,.27,.16,.05,.32,.25,.02,.06,-.03,.08,-.13,.36,.18,-.2,-.23,-.19,-.15,-.15,.08,-.16,-.28,.11,-.08,.27,.26,-.01,.09,-.1,.18,.19,.35,-.1,.03,.14,-.01,-.01,-.21,.22,-.05,.03,.18,.18,-.1,.01,.06,.18,.36,.07,.28,-.05,.18,.1,-.12,-.12,.01,.15,.09,.17,.36,.01,.21,.07,.2,.35,.05,-.37,.45,.19,-.07,-.01,.03,-.04,-.15,.25,.14,-.02,.22,0,-.2,.06,.01,.03,.08,-.02,.19,-.11,.14,.13,-.16,-.07,.04,.24,-.3,-.01,.13,-.03,-.01,.39,.25,.07,.04,.21,.21,.13,-.12,-.13,.33,.16,.25,-.26,.16,-.12,.21,-.01,.01,-.12,-.04,-.03,.18,.01,-.09,.17,.14,-.02,.22,.13,.01,.14,-.19,-.02,.05,-.03,-.04,.02,.15,.11,.09,-.04,-.04,-.1,.18,.36,.12,.11,.16,.32,.18,.06,-.08,.2,.03,.1,.24,-.14,.32,-.15,.35,.02,0,-.13,-.13,0,-.04,-.17,-.06,.1,-.5,.07,-.05,.16,-.07,.29,-.04,.29,.05,-.16,.15,.04,.08,.22,-.23,.01,.01,-.03,.02,.13,.23,.48,.21,.16,.2,-.04,.11,.2,.15,-.11,.09,-.1,-.06,.12,.43,.06,-.14,.19,.32,-.1,.71,.39,.17,.36,.03,.08,-.11,.15,.18,.06,.18,.32,.25,.21,.06,.19,-.09,-.2,.1,.55,.26,.06,.08,.28,-.05,-.26,.2,-.23,.06,-.22,-.11,-.02,.1,-.09,.3,-.04,-.04,.26,.27,.04,.02,.18,.31,.29,.33,.45,.32,.27,.19,.1,.17,.18,.27,.06,.42,-.2,-.46,-.3,.14,.24,-.22,.33,.26,.35,.53,.33,.16,-.3,.23,.27,.02,.24,-.25,.04,-.16,.33,.05,.38,.22,.41,.28,.06,-.12,.23,-.06,.21,-.05,.42,-.09,-.18,.09,.09,-.25,.15,.31,-.33,.18,.33,.24,.04,.31,.25,-.11,.06,-.07,.18,-.02,.01,.14,-.04,.27,-.31,-.14,.24,.03,-.04,-.02,-.14,.26,-.06,.12,.05,.03,.13,-.08,.28,.12,.22,-.08,.37,.08,-.16,.2,.04,.07,-.03,.16,-.12,.37,-.12,-.11,-.06,.08,.56,.42,-.01,.1,.11,.28,-.02,0,.47,.06,.15,.17,.01,.18,.31,.08,.17,.08,.14,.06,.31,.21,.28,0,.41,-.03,-.26,.15,.37,.05,.37,-.01,-.04,.25,.47,.07,.33,.08,.16,.15,-.08,.06,-.09,-.16,.48,.14,-.04,.35,-.07,.26,.05,.3,.11,-.1,-.42,-.08,-.21,.1,.07,-.04,.12,.11,-.04,-.12,.17,.13,.26,.06,-.1,.16,.31,-.19,.02,.04,.1,.18,.14,.08,-.01,-.21,.19,.34,.2,.22,.31,.22,.05,.16,.34,.15,.31,.2,.13,-.35,.17,0,.18,-.04,-.09,.11,.2,-.15,.28,.14,-.24,-.18,-.04,.06,.35,.24,.11,-.1,-.27,-.04,.25,.05,.01,.23,-.03,0,.1,-.07,.16,-.25,.38,-.22,.07,.42,-.1,.01,.26,-.18,.16,.04,.02,.09,.03,.19,-.18,.41,.19,.12,-.07,-.04,.35,.13,.38,-.05,-.18,.09,-.15,.22,.02,-.05,.12,.18,-.02,-.19,-.04,.18,.34,.17,.18,.16,.07,.05,-.04,.32,-.28,.26,.09,-.05,-.07,.44,.01,.25,.05,.05,.1,.06,.15,-.05,.08,.28,.07,.16,.12,-.19,.04,.25,-.05,-.13,-.01,.23,-.07,.1,.12,-.08,.15,-.06,.07,0,.21,.38,.04,.12,.24,.33,.37,.15,.09,.32,.07,.26,-.03,.23,.01,.18,.17,-.11,.17,-.02,.07,.18,.02,.19,0,0,0,.09,.18,-.32,.07,.09,-.03,.04,.41,.08,-.07,.32,.19,-.27,.61,.21,-.24,-.17,-.08,.16,.23,.02,-.06,.34,.09,-.04,-.22,-.24,-.02,-.03,.13,.14,0,.02,-.13,-.25,-.05,-.16,.05,-.05,.22,-.26,-.26,-.14,-.05,-.26,-.11,.12,.43,.05,.22,-.03,.43,.04,.12,.33,0,.21,.11,0,.03,-.05,.1,.19,.3,.27,-.13,.06,.23,.07,-.12,.02,-.06,.21,0,.11,.14,-.28,-.17,-.15,.02,-.02,-.05,-.06,.28,.2,.02,-.12,.15,.13,.03,.05,-.1,-.18,-.17,.16,.15,.04,-.23,-.25,.07,.09,.22,.31,.31,.05,-.01,.33,.02,.04,.26,.34,-.29,.07,.22,.09,.16,-.15,-.29,.16,.02,.21,.35,-.13,-.02,.15,-.1,.17,.08,.04,.13,-.12,.31,-.17,.06,.05,.41,.02,.39,.23,.01,.32,.31,.18,.22,.33,.15,-.07,-.03,-.19,0,-.05,-.03,-.04,.49,-.02,.13,.34,-.02,-.03,.14,.54,-.2,-.15,0,.09,.05,.05,.37,.01,.16,.2,.11,.24,.44,.03,-.1,-.02,.04,.49,.33,.38,.02,.05,-.02,.02,.15,.01,.07,.16,.43,.38,-.16,-.13,.24,-.03,.01,.17,-.01,.05,.12,.11,.12,.14,-.05,-.04,.2,.39,.19,.02,-.14,.11,.18,.18,.08,-.02,.16,.22,.23,.07,.13,.01,-.14,.41,-.08,.2,.11,-.03,-.18,-.12,-.03,-.02,-.03,.19,-.01,-.13,.12,.39,.01,.09,.25,-.16,0,-.08,-.18,.01,.17,.09,-.04,-.13,.02,.29,-.06,.08,.12,-.13,.04,.08,.17,-.03,.1,.05,.09,.12,.33,.02,.39,.21,.08,.31,-.03,.09,.09,-.13,-.06,.14,.38,-.24,-.03,.11,.21,-.19,.1,.08,.17,-.11,-.14,-.22,-.17,-.07,.17,-.25,.06,.18,-.07,.14,.14,-.07,0,-.07,-.05,.07,-.09,.22,-.06,-.16,.39,.22,.07,.02,.27,.1,.06,.22,.08,-.17,.04,.32,.06,-.05,-.07,.34,.21,-.1,.09,.28,.17,.02,-.22,.09,.09,-.07,-.04,.08,-.21,.09,-.09,0,.03,-.08,.13,-.03,.39,.26,.02,.33,-.15,.02,0,.19,.21,.01,.25,.06,-.03,-.08,-.13,-.21,0,.23,.03,.55,.09,.01,.3,.2,-.25,-.04,.03,0,-.17,.08,.26,1,.23,.05,-.2,.02];export{a as rvalData};
