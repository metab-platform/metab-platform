const a=[-.08,.13,.26,.08,.3,.32,.19,.07,-.02,0,-.02,.42,-.16,-.32,.05,.12,.02,.18,-.1,.02,.07,.28,0,-.12,.19,.24,.15,.02,.02,.04,.13,.21,.29,.06,.32,.05,.17,-.03,.13,.08,-.15,.22,.12,.19,-.03,-.02,-.03,.2,.07,-.02,.04,.28,.17,.14,.44,-.23,.15,.13,.29,.05,.05,.31,.17,-.11,.2,.27,.33,.01,0,0,-.2,.03,.13,-.02,.22,-.02,-.07,.08,.3,.13,-.2,.04,.05,.21,.35,.16,.17,.16,-.19,.11,.34,.04,0,-.13,.29,.16,-.35,.01,.44,.12,-.15,.28,.5,-.3,.35,-.13,-.45,-.39,.24,.38,-.24,.17,-.05,-.33,.57,.32,.19,.26,.1,.13,-.13,-.02,.25,.03,-.04,.18,.38,.53,.1,.16,.11,.18,.04,-.02,.09,.24,.08,.02,.17,.01,.35,.01,.17,.17,.08,.04,-.01,.47,.32,.05,.25,-.16,-.06,-.14,-.01,.47,-.01,.24,-.21,-.05,.25,.52,-.3,.08,.04,.04,.08,.12,.39,.07,.21,.14,.13,.05,.22,.2,.1,.05,.04,.22,-.22,.05,.15,.16,.26,.01,.12,.19,.13,.18,-.03,.13,.09,.19,.23,.38,.42,.45,.1,.36,-.27,.04,.17,.1,-.25,.42,-.15,.3,.11,-.02,-.03,.08,.22,.13,.12,-.26,.06,-.05,.13,-.1,.42,.33,.35,.19,.38,.15,.12,.23,.52,.28,-.16,.04,.04,.28,-.04,.14,-.01,-.27,.13,-.11,.07,.05,-.06,0,-.04,-.12,.17,-.13,.2,.02,.26,.05,.4,.46,.43,-.21,.08,.08,.12,.26,-.23,.37,.14,.38,.35,.36,-.14,.34,.04,-.06,.39,.01,.23,.19,.37,.06,.14,.05,.14,.07,.15,-.24,-.15,-.28,.45,.03,-.14,.13,.32,.48,.19,.05,.19,-.1,.09,.18,-.28,.01,-.2,.12,-.02,.36,.28,-.18,.17,.14,.49,.19,.5,-.3,.07,-.2,-.04,.04,1,.12,.17,.28,.22,-.03,.16,.39,.14,.27,.14,.42,.31,.25,.24,.42,-.21,.32,.19,-.11,.11,-.16,.17,.26,-.14,.25,.03,.21,.04,-.06,.13,.27,.07,.27,.06,.13,.3,-.13,.24,.43,-.42,-.11,.26,-.11,.31,.3,-.12,-.25,.42,-.35,.01,-.29,.33,.16,.21,-.25,.37,-.32,-.25,.26,.13,.3,.12,.28,-.17,.41,.06,.18,-.03,-.17,.23,.35,-.1,.2,.38,.37,.29,-.16,-.11,-.21,-.24,.31,.09,-.17,.32,-.02,.34,.47,.29,-.09,.16,.05,.07,.36,.34,.55,.19,-.22,.38,.28,.59,.06,.4,.4,.16,-.25,.12,.19,.32,-.28,.05,.18,.28,-.05,.22,-.02,-.11,.3,.13,.19,.13,.01,-.22,.33,.22,.4,.51,.11,.1,-.2,-.23,.38,.23,.22,-.25,-.06,-.03,.17,-.27,.3,-.07,.36,.15,.19,.35,.05,.22,.27,-.3,.11,.12,.57,-.26,.09,-.06,.16,-.44,.14,.26,.04,.34,.24,-.04,-.24,.4,-.01,.27,.05,.61,.04,-.26,.29,.47,.04,.29,.25,.15,.43,-.11,.04,.34,.2,.25,-.2,.35,.18,.29,.26,.44,0,.13,-.06,.43,.37,.27,.13,.36,.27,.08,.02,-.26,.2,.3,0,.1,.29,-.04,.4,.41,.13,.19,.2,.08,.19,-.16,.19,.16,.21,-.24,-.11,.14,.04,.46,.4,.39,.38,.07,.34,-.11,.17,.12,.11,.1,.17,.18,-.05,-.24,.16,.14,.18,-.04,-.1,-.19,-.14,-.34,.01,.24,.2,.23,-.01,-.16,-.26,.03,-.13,.33,-.03,.28,.24,-.24,-.12,.48,.21,-.11,.23,0,.05,.1,.22,.37,.35,.29,.1,.25,.13,.24,.16,-.14,.03,.04,.25,-.03,-.19,.15,.17,.36,-.04,.42,.18,.42,.17,.32,.1,.27,.25,.02,-.02,-.04,.16,.15,.16,-.15,0,.33,-.08,-.14,.08,.09,.05,.28,-.04,.42,.35,-.23,.42,.46,-.14,-.07,-.46,-.14,.06,.56,.19,.27,-.1,-.11,.11,.06,.1,.16,.05,.4,.48,.37,.16,.24,.32,.17,-.25,.08,.27,.24,.13,.12,-.21,-.14,.06,.36,.2,.29,.38,.25,.28,0,.43,.11,.07,-.17,.24,-.16,.02,.51,.13,.2,.19,0,-.09,-.2,.4,-.04,.14,.32,.13,-.34,.17,.26,.19,-.06,.03,.5,-.26,.05,-.07,.16,.32,.25,-.13,.24,-.02,.07,.08,.16,-.22,-.07,.44,.05,.11,.25,-.05,.24,.1,.11,-.08,-.13,.4,-.31,-.03,.03,.5,.17,-.18,.06,.23,-.05,.02,.06,.43,-.22,.31,.36,.09,.1,.13,.14,.12,.15,-.25,.12,.33,.17,.13,-.05,-.09,-.12,.13,.24,.15,.08,.43,.34,.1,.28,.08,.43,.3,.32,.05,.11,.12,.3,.46,.31,.05,.3,-.09,-.04,.16,.4,.39,.3,.11,.37,-.03,.2,-.15,.31,.25,.25,.42,.15,.29,.31,.54,.22,.02,.7,.13,.29,.36,.54,-.07,.23,0,.28,.09,-.26,.3,-.27,.03,-.22,.31,.19,.32,0,.19,.37,-.02,.14,-.11,.36,.39,.46,0,-.45,-.04,-.1,.27,.11,-.08,-.01,.18,-.3,.14,-.01,.45,-.12,-.03,.42,.17,.24,.25,.08,.2,-.25,.16,.2,.12,.34,.04,-.21,-.06,-.05,.34,-.41,.25,-.07,-.05,.11,.21,-.06,.09,.07,.19,.38,.34,.1,.34,.22,.11,.29,-.28,.42,.33,-.1,.31,-.08,-.07,-.01,.02,-.09,.37,.24,.36,-.07,.17,-.05,.12,.2,-.04,.11,.17,.13,0,.25,.34,.47,-.18,.19,-.19,-.19,.33,.43,-.1,-.25,-.23,.22,.15,.27,.14,.14,-.24,.11,.08,-.02,.22,.16,-.01,-.01,.13,.19,-.06,.23,.44,.21,.14,-.05,-.06,.26,-.08,-.26,.2,.46,.31,.2,.1,.56,.34,.16,.21,.29,.25,.14,-.34,.13,.17,.27,.37,.18,.55,.34,-.01,.18,.01,-.19,.4,.03,-.32,-.07,-.03,.42,.48,.06,-.14,.28,.35,.27,.29,.24,0,-.12,.02,.42,.02,-.14,.39,-.2,-.27,-.1,.45,.01,-.31,.3,-.52,.37,.58,.05,.32,.16,.01,.15,-.08,.1,-.1,0,.18,.16,.45,-.07,-.01,.25,-.09,-.18,.24,-.27,.06,-.17,.13,.11,.02,.21,.06,.08,-.04,.08,.03,-.14,.23,-.03,.2,.16,.01,.29,-.1,0,-.07,.42,.05,.2,-.01,-.01,.42,-.13,.26,.16,.02,.07,-.1,.02,-.13,.22,.48,.08,.15,.19,-.02,.14,-.16,.13,.18,-.28,-.11,-.04,.36,.25,-.23,-.06,.18,-.06,-.03,.4,.13,.14,.02,-.07,.08,.24,.19,-.09,.16,-.29,.16,-.04,.32,.16,-.11,.2,0,.26,.1,.38,.23,.55,.03,.12,.27,.39,.12,.05,.33,-.16,.01,.05,.04,-.17,-.18,.28,.15,-.27,.03,.18,.36,.19,.27,0,.4,.31,.28,.18,-.06,-.11,-.2,.32,-.03,.07,.16,.28,.48,-.11,.23,.09,-.15,.14,-.05,.1,.11,.15,.23,0,0,.09,.04,-.15,-.02,-.11,.18,.33,-.11,.01,.27,.13,-.31,.16,.37,.24,.24,.13,.4,.24,.39,-.04,.21,.42,.06,.17,.18,.26,-.37,.01,.46,.12,.44,.06,.32,.03,.1,.17,.03,.18,.18,.25,-.01,.21,.24,.26,0,.33,-.06,.23,.23,-.06,.47,.26,-.25,.1,-.06,-.07,-.07,.1,.07,.2,.05,-.27,.06,.15,.12,-.08,.21,-.06,.15,.1,.35,.3,.09,.09,.3,.45,-.15,.1,.36,.06,.23,.49,.44,.3,.33,.32,.09,.32,.02,-.28,-.07,.35,.43,-.22,.23,.15,.11,.1,.09,.3,.06,.07,.35,.09,-.11,.53,.37,.12,.21,.13,.23,.32,.01,.21,-.03,.08,.06,.16,.26,.19,-.06,.06,.01,.12,.07,.11,.12,.3,-.05,.24,.34,.26,-.14,.28,-.13,-.06,.4,-.2,.33,-.24,.21,0,.48,.11,.13,.1,.15,.16,-.1,.41,-.2,.16,-.08,.04,.15,-.09,-.2,.33,.35,.03,.05,.07,.07,.34,-.06,-.02,.15,.26,.18,.19,.37,.34,.27,.48,.45,.09,.29,.2,.22,-.32,-.03,.01,.1,.03,.29,.15,.19,.37,.27,-.24,.32,.35,0,.12,.28,.22,.02,-.01,.35,-.23,-.26,.37,.28,.24,.15,.22,-.1,-.08,.25,.19,.04,-.07,.07,.13,.03,-.01,.16,-.02,-.29,-.18,.09,.25,-.03,-.15,.35,-.04,-.08,.13,.34,.43,.2,.04,.32,.07,.23,.33,.16,.42,.36,-.13,.33,-.11,.25,.21,.36,.05,-.18,0,.36,.22,.12,.12,.32,.25,.17,.24,.09,.01,.28,.32,.02,.1,.1,-.14,.04,.32,.35,.34,.46,.33,.33,.18,.31,.03,-.15,.25,-.34,.03,-.17,-.26,.13,.4,-.04,.03,.09,-.27,.16,.28,.19,.24,.44,.01,.07,-.04,-.09,.26,.01,.22,.14,.05,-.05,-.41,.08,.1,-.18,-.04,.17,-.1,.16,.25,.27,.11,.18,.22,.09,.18,.18,.28,.09,-.03,.24,.02,.12,.06,.24,-.06,.37,-.09,-.19,.19,.12,.1,.08,.33,.08,.26,-.08,.12,.21,.35,.16,.4,.37,-.09,-.09,.29,.52,.27,.06,.09,.36,.39,.11,.4,.45,.4,-.27,.45,.32,-.18,.21,.27,.42,.39,.16,-.18,.32,.27,.45,.3,.04,.2,.13,.03,.04,.05,.36,-.01,-.14,.11,.17,-.15,.23,.1,.23,.24,.06,.07,-.23,-.19,.13,-.09,-.29,.16,-.2,.08,.01,.24,.25,.22,.13,-.3,.17,.28,-.03,.05,.21,.37,.36,.19,.3,.31,-.11,.26,.33,.26,.34,.28,.11,.21,.36,.31,.19,.25,-.05,.11,-.01,.23,.06,.36,.12,.09,.25,.32,-.15,.34,.04,.01,-.03,.11,-.06,.43,.03,.24,-.18,.08,.14,.2,.21,.24,.36,.09,-.02,.07,.14,.28,.06,-.03,.12,.32,.37,.17,-.02,.11,-.22,.29,.14,.13,.26,.03,.05,-.28,-.05,.37,-.14,0,.1,.05,.26,.61,.27,.18,.14,-.07,.3,.34,.01,.05,.24,-.16,-.47,-.05,.18,.3,.29,.34,.33,.06,.28,-.2,.43,-.39,.24,-.08,-.1,-.04,.22,.29,.18,.47,-.14,.16,-.18,-.06,.24,.12,.3,.11,.21,.42,-.24,.19,.11,.45,-.15,-.24,.23,.05,.18,.4,-.01,.46,-.07,.19,.14,.34,.23,-.05,.22,.34,.28,.32,.04,.24,.24,.24,.25,.04,.23,-.1,-.15,.33,-.11,.41,-.08,.24,.24,.06,.19,-.14,-.09,.02,-.07,.1,-.15,.12,.01,-.22,-.16,.39,-.01,.04,.35,.36,.02,.33,.35,.02,-.05,.19,.25,.3,-.01,-.19,.16,.22,-.05,-.36,-.1,-.13,-.09,.03,.25,.31,.29,-.11,.07,.21,0,-.03,.17,.52,-.03,-.03,.01,.18,-.1,-.16,.29,.44,.34,.14,.23,.26,.17,-.07,.24,.14,.24,-.24,-.03,.25,.02,.25,.06,.4,.3,.05,.18,.37,.27,-.03,.21,-.15,.23,-.05,-.27,-.15,-.34,-.07,-.25,-.18,.08,-.05,.2,.46,.21,-.2,.15,.22,-.22,.17,.09,-.04,-.21,-.08,.28,.24,.19,.01,-.42,.49,.14,.36,.35,.07,-.03,.26,.39,.34,.04,.35,.07,.04,.12,.23,.28,.35,.15,-.44,.32,.11,.32,.4,.03,.14,.29,.09,.24,.19,.09,.48,-.15,.5,-.35,-.02,.29,.39,-.35,.22,.33,.12,.41,.36,.31,.41,.41,.32,-.04,.06,.18,-.23,.04,.11,.15,.05,.13,.26,.32,-.25,.08,.3,.1,-.26,-.09,.07,.27,.05,.08,.34,.36,.27,-.01,.09,.26,.17,.23,-.07,.13,-.11,.11,.42,.42,.29,.09,.15,.16,.25,-.03,.17,.19,.33,.31,-.06,.06,.34,-.15,.05,-.19,-.13,-.08,.29,.39,.36,.49,-.19,.07,.17,.29,.05,.14,-.14,.08,.23,.33,-.22,.45,.25,.05,.33,.2,.3,.12,.1,-.05,.23,.19,.41,-.19,-.22,-.06,.1,-.22,.01,.18,-.12,.09,.27,.3,-.17,.27,.24,.17,-.04,.26,-.13,.23,.38,-.07,.07,-.13,.19,.21,.02,.18,.25,.12,.16,.23,.41,.16,.19,.19,.2,.28,.27,-.15,.05,.17,.16,.34,.33,.1,-.05,-.06,.08,.26,-.04,.13,.45,.47,.28,-.41,-.03,.29,.32,-.28,.05,-.42,-.13,.21,.29,-.21,.18,.07,-.04,.17,.34,.29,.27,.13,.28,-.11,.11,.11,-.28,-.21,.42,.14,.29,.33,.36,.22,.29,0,.12,-.21,.17,.45,.18,.09,.19,.25,.4,0,-.06,.09,.4,.18,.36,.18,.19,.07,.11,.17,.02,.34,-.23,.15,.19,.21,.2,.17,.2,.44,.17,.19,-.21,.2,.18,.24,.09,.07,.48,.26,.17,.29,.05,-.05,.39,-.04,.29,.1,.22,.14,.27,.28,.06,.18,.34,-.1,.02,-.11,.34,.35,.24,.23,.08,.32];export{a as rvalData};
