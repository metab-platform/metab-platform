const a=[.07,-.06,.08,-.07,.07,.17,.02,.43,.1,.32,.32,-.07,.01,-.11,.16,-.05,-.03,.05,-.16,.09,-.07,-.32,.23,.01,.1,.09,-.44,.3,.15,-.46,.25,-.27,.32,.03,.04,.11,.12,.04,-.13,-.03,.01,.02,.43,-.14,.17,.06,-.13,.13,0,.25,.06,-.09,-.04,-.02,.27,.21,.28,.11,-.25,.24,.41,.16,.12,.08,.01,-.39,.1,-.06,-.12,.06,-.04,.16,.45,-.04,-.06,.06,-.03,.41,-.18,.06,-.11,.21,-.04,.02,-.22,-.17,.11,-.09,-.02,-.08,.02,-.11,.44,-.16,0,.03,-.01,-.05,-.16,.41,-.03,.03,-.07,.13,.06,.09,-.2,-.36,.3,-.03,.04,.3,-.09,0,-.03,-.15,0,-.29,.16,.16,.02,-.01,.37,.11,.43,.24,-.11,-.13,-.18,.14,.41,.14,-.01,.31,.21,-.29,.36,.04,-.29,-.02,.17,.02,.15,.13,.13,.14,.09,-.09,.11,0,.06,.39,-.01,.2,.46,.09,-.15,.03,-.08,.08,.35,.01,.32,.24,.45,.4,.2,-.19,.1,.18,.05,-.02,.33,.19,.32,-.1,.01,-.39,.42,.15,-.08,.02,.02,-.15,.19,.14,.05,.16,.49,.01,-.01,.51,0,.31,.3,.15,.13,-.17,-.11,-.17,-.08,.42,.17,.09,.02,.36,.27,.28,.43,-.08,.44,-.02,.05,.03,.1,.58,-.18,.52,-.11,-.31,0,-.03,-.13,.08,.12,.15,.45,-.19,.08,.11,-.11,.09,-.12,-.07,-.04,.1,-.02,.04,-.21,.13,.35,-.05,.44,.4,.6,.37,-.12,.12,-.05,-.03,.17,.04,.26,.25,.16,-.01,0,.12,0,-.17,-.09,-.13,.23,.16,.1,.02,-.06,.06,.12,.07,-.21,-.24,.2,.01,-.08,-.16,-.35,.39,.16,0,.41,-.37,.03,-.17,.03,.43,-.31,.17,-.03,-.24,.41,.32,.34,.39,.3,.41,.42,-.25,.15,.11,.24,.09,-.26,-.12,0,.07,-.11,.14,-.04,.27,.19,.06,-.1,.15,-.14,.1,-.18,.01,0,.14,.06,-.16,-.12,.07,.09,-.01,.24,-.38,.28,-.04,.05,.12,.17,-.1,-.3,-.01,-.22,.18,.5,-.04,.52,.34,-.3,-.03,.03,.07,-.06,.27,.45,.15,.26,.23,.12,-.03,-.16,.05,-.04,0,.03,-.19,.05,.24,0,-.34,-.02,-.12,-.08,.14,.38,0,-.21,-.01,.1,.13,.39,.19,-.13,.02,-.09,.04,-.04,-.06,.17,.2,0,.21,-.04,-.05,.16,.19,.11,-.08,.07,.5,.47,.09,-.23,-.08,-.37,.36,-.25,-.13,.06,.16,.41,.01,-.05,.14,.04,-.11,-.04,-.07,-.17,.07,-.08,.06,.1,.09,.41,.17,.24,.14,-.09,.08,.04,.08,.19,-.16,.19,.17,.43,.09,.14,.16,.21,-.11,.17,.26,.16,.29,.02,.07,.17,.03,.21,.23,.1,.32,.1,-.19,.43,.29,-.19,-.12,-.22,.07,-.26,.09,.1,.42,-.06,.37,0,.32,.18,-.1,-.16,.24,-.09,-.02,-.29,.13,.21,-.03,.15,.39,.51,.37,.11,-.4,.26,-.02,-.07,.44,.18,-.05,.31,.33,.23,-.14,-.1,-.07,-.14,.09,.17,.18,-.09,.05,.28,.31,.14,-.34,-.1,.03,.04,.08,.05,.28,.17,.46,.16,-.13,.14,.31,.21,-.1,.34,.28,.29,.01,-.05,.08,.05,-.03,.04,.01,.17,-.01,.18,.49,.34,-.11,-.05,.22,.04,.24,.01,.33,.08,-.04,.07,-.01,-.18,-.46,.29,-.06,.3,-.45,-.13,-.08,-.35,.14,.18,-.08,.36,-.1,-.08,.37,.02,.02,-.11,-.23,-.06,.38,.03,-.09,-.09,.1,.32,.19,0,-.07,.07,.05,0,.07,-.02,-.02,.24,.1,.27,.03,.09,-.09,.22,-.05,.18,.02,-.06,.09,-.06,.06,-.11,-.03,.4,-.2,.45,-.03,.14,.57,.24,-.05,.01,.24,.16,-.45,.28,.09,.09,-.17,.04,.07,-.17,.48,-.01,-.1,.11,.39,-.07,.1,.25,.34,.32,-.02,-.02,-.11,.29,.01,.1,.31,-.16,.13,.05,.26,.09,.08,.36,.35,.39,-.37,.1,.31,-.16,.27,-.21,.02,.09,.07,-.1,.22,-.24,-.17,.46,.17,.38,.13,-.31,.02,-.09,.01,.08,.35,.08,.04,-.08,-.06,-.09,-.04,.19,.13,.1,.06,.06,-.46,-.04,.2,.15,-.05,-.07,.24,.09,-.05,.27,.25,.18,.25,.02,.06,.29,.29,.02,.04,-.05,-.07,-.05,-.06,.3,.09,-.11,-.04,.04,.46,.42,.14,.1,-.02,-.14,-.04,.16,-.42,.26,.39,.17,.54,-.12,.01,.08,.11,-.03,.02,.44,.11,.12,.18,.2,.21,.04,-.07,-.08,-.12,-.02,.27,.19,-.17,.37,.36,.11,.09,.16,.1,.09,.34,-.12,-.47,-.05,.07,.1,.09,.03,.38,-.03,-.1,-.23,.3,-.08,.27,-.14,-.33,.34,-.16,.15,-.29,.31,-.11,-.29,-.07,.03,-.01,-.19,.1,.11,.14,.18,.09,.14,-.11,.11,.53,.09,.02,.09,-.09,.09,.1,-.06,.03,.2,.45,-.1,-.24,-.26,.02,.03,-.12,.2,-.16,.09,.13,-.02,.19,.1,.03,-.16,.14,.03,.07,.51,0,-.04,.05,.04,.06,.19,-.21,.02,.39,-.09,-.1,-.15,.2,-.22,.06,.38,.1,.03,.13,-.04,.04,-.17,-.05,-.05,.16,.05,-.17,.07,-.26,-.11,.15,.02,-.23,.39,.27,.06,.44,-.05,-.05,-.3,-.15,.56,.13,.06,-.3,.21,.19,.03,.15,.06,-.07,.44,-.01,.28,.12,-.06,.1,-.04,.07,-.12,.1,.35,.37,.2,.26,.03,.14,.23,-.01,.02,.26,-.04,.19,-.47,.48,.2,.05,.05,.17,.27,.04,.18,.4,.05,-.1,-.07,.14,.06,-.1,-.17,.02,.01,.21,.35,-.15,-.07,-.04,.03,.34,0,.33,.03,.36,-.02,-.47,-.03,.16,-.13,.37,.08,.32,.38,.2,.23,-.04,.19,-.15,.18,.05,.06,.12,-.07,-.03,.5,.03,-.01,.08,.1,-.08,.35,-.08,.07,.07,-.1,-.09,.07,.19,.15,.28,.55,.18,.13,.01,.47,.07,-.14,-.11,.45,.03,.17,.01,0,.35,.28,.08,.4,.12,.04,.1,.08,.41,.07,-.02,-.18,.05,-.03,-.07,-.02,.08,-.13,0,.47,.34,.12,.41,-.28,.53,.57,.45,.18,.14,.08,-.08,.43,.36,.31,.37,-.12,.25,.12,.05,.18,-.04,-.05,-.21,-.04,-.03,-.08,-.16,-.08,-.06,-.12,-.01,-.1,.41,.33,-.34,.23,-.1,.56,.08,-.05,-.06,.02,.27,.09,.23,.11,.11,.37,.35,.09,-.07,.35,-.01,.22,-.03,-.11,.44,.14,.41,-.01,.11,.31,.14,-.42,-.25,.02,.14,.02,.16,.1,.01,.3,.52,-.06,.41,.01,.07,-.19,.01,.25,.31,-.29,.05,.51,.09,.2,.16,-.19,.01,.08,-.14,.26,.1,.19,.08,-.18,.53,.01,.16,.22,.02,.18,-.12,.12,.04,.42,-.19,-.01,-.01,-.29,.17,-.01,.02,.04,-.18,-.16,.07,.36,-.1,.24,.34,.27,-.17,.19,.08,.16,.19,.39,.04,.35,-.02,-.11,.49,.36,.09,-.1,-.2,-.1,.15,.18,.22,.12,-.11,-.05,.01,.01,.11,-.05,-.32,-.07,-.21,.24,.27,.09,.07,.05,0,.28,.2,.13,-.03,.19,.01,.25,.31,.09,.14,.23,-.22,.07,.17,.11,-.16,.14,.1,.14,.07,.14,.25,.11,.09,.25,.37,-.14,.32,.31,.28,.12,.15,-.03,.43,-.06,.1,-.41,-.04,.19,.01,.07,.09,.08,-.08,.34,-.05,.08,-.08,-.19,.09,.1,.11,-.19,-.1,-.13,.44,.22,-.03,.21,.19,-.06,.11,.12,-.05,.29,.14,.02,.16,-.05,.1,.01,-.03,-.4,.45,.15,-.2,-.18,.01,-.1,-.03,.04,.05,-.2,.5,.36,.18,.05,.13,.15,.03,-.04,-.42,-.07,-.07,-.43,-.14,.25,-.04,.02,.43,.01,-.08,.06,.14,.08,.07,.08,.07,.12,.13,-.05,-.03,.44,.17,.17,.06,-.09,.03,.02,.02,.2,-.24,.46,.14,-.06,.19,.11,.1,-.34,-.11,-.45,-.22,.39,-.01,-.05,0,.07,-.04,.04,.36,.31,-.05,.38,.09,.08,.16,.19,.26,.19,.04,.12,-.13,-.11,.03,-.19,.1,.11,.27,.03,.13,-.12,.11,.29,.08,.29,.24,.12,.05,-.01,-.03,.38,.24,.15,-.25,-.11,.13,-.01,.1,-.14,.27,.17,.18,.08,.03,.15,-.1,-.09,.27,0,.02,-.11,.04,-.08,-.32,-.15,.2,.19,.1,-.18,.11,.31,.03,.05,.35,.5,.05,-.24,.07,.26,.33,-.05,.24,.08,.04,.37,.15,-.05,.01,.1,.08,.11,.28,.14,.25,.16,.08,.02,.21,.16,.24,.23,.18,.14,-.1,.14,.3,.35,.13,.05,.15,.24,.16,.09,.24,-.16,.32,.34,.12,.47,.35,-.08,-.06,.23,.04,.07,.11,.09,.22,.13,.09,.38,.07,.24,.09,.39,.12,.01,.03,-.1,-.03,.11,.34,-.15,.04,.26,.1,.03,.11,-.03,.06,.1,-.12,.17,-.04,.09,.09,.26,.5,.38,-.07,.36,-.06,-.05,.12,.15,.31,.05,.02,.07,.15,.01,-.05,.41,.09,.07,-.02,.28,0,.15,.21,-.15,-.29,.02,.18,.02,.32,.03,.16,0,.11,.17,.28,-.12,.09,-.09,-.01,.16,-.13,.23,.02,.24,-.01,-.23,.01,.22,-.15,.14,-.28,-.02,.14,.17,.1,.11,.06,.22,-.03,.05,.11,.1,-.04,.2,.29,.01,.09,.18,.13,.3,-.03,-.13,.11,0,.1,.01,.04,.36,1,.04,.34,-.09,.42,.12,.18,-.05,.3,.04,.05,.02,.38,-.02,.17,.03,.09,.15,.08,-.03,.04,.27,.09,-.05,.14,.18,.11,-.1,-.24,.03,.12,.17,.05,.13,.07,-.06,.25,.32,.15,.24,.22,.03,.17,.22,.05,-.02,.1,.25,-.13,.13,.12,.09,-.05,-.01,.03,.09,-.04,.13,.15,-.1,-.16,-.04,.11,.01,.46,.05,.18,-.11,.01,.18,.02,.08,.09,.13,.55,.19,-.27,.2,-.1,.16,.04,.12,-.06,.17,.53,.55,-.04,.08,.23,.06,-.09,-.04,.27,.06,.36,.04,.41,-.01,.21,.24,.11,-.21,.18,-.02,.12,-.18,-.17,-.07,.46,.41,.05,.03,-.01,.4,.44,.18,.14,.1,.11,.21,.09,-.09,.19,-.05,-.12,.15,0,-.12,-.11,-.06,.13,-.12,.19,.26,.17,.2,.1,.35,.08,.35,.08,-.02,.09,.23,.36,-.2,.05,.17,.11,.05,.18,.05,-.06,-.04,-.05,.03,.5,.05,-.05,-.16,.21,.1,.24,.16,.14,-.09,.4,.2,.17,-.17,.21,.04,.27,.07,-.1,-.02,-.12,-.02,.28,.1,.16,0,.62,.18,.14,-.04,.06,.39,.37,-.06,.07,.23,-.01,.03,.16,.13,-.05,.31,.17,.02,.06,.26,.02,.12,.1,.15,.19,.07,.11,-.05,-.14,.2,.1,.12,.15,-.05,-.16,.01,.04,-.18,-.28,.17,-.16,-.05,.42,.51,-.12,-.03,-.2,.01,.15,.1,-.02,.22,.34,.05,.23,.41,.29,.11,.08,.03,.11,.14,-.06,-.12,.18,.15,.04,-.07,.06,.11,.1,-.41,-.12,-.19,.07,.06,-.05,.54,-.21,-.08,.32,-.09,.14,.01,-.05,-.05,.14,.06,.13,.08,.22,-.01,.22,-.44,-.22,-.1,.24,.13,.14,.09,.2,-.1,.31,.04,.26,.19,.13,.26,.14,-.03,.38,.11,.29,.04,.04,.01,.09,-.05,-.18,-.3,-.06,.11,.33,.2,.04,.26,.13,.17,-.05,.02,.12,.05,.08,-.05,-.06,-.18,.25,.12,.1,.21,.23,.21,.19,.15,-.04,.09,.09,-.03,-.01,-.01,-.04,.08,.13,.15,.25,.12,.45,.38,.27,-.09,.17,.27,.22,-.3,-.05,-.03,-.01,.2,-.13,.13,-.02,-.03,.13,.07,.32,.14,.06,-.1,.31,.05,.19,0,.24,.04,.34,-.04,.04,.08,.02,.14,.33,.29,.31,.19,.08,.13,.38,-.08,-.11,-.07,-.09,.03,.05,.21,-.04,-.01,-.34,.16,.33,-.01,.08,-.03,.14,.09,.11,.15,-.06,.07,.06,.05,-.02,.2,.02,-.31,.38,.16,.35,.09,.2,-.13,.32,.22,.17,.09,.15,-.06,-.08,-.04,.31,-.08,.1,-.08,-.06,-.02,.04,-.21,-.05,-.01,.14,.08,-.08,.02,.63,.01,.02,.03,.25,.12,.18,-.14,.19,-.09,-.09,.17,.06,.25,.03,.13,.14,.03,.14,.06,-.05,-.16,-.08,.05,.17,.3,-.02,-.18,-.11,.06,-.18,.49,-.08,.12,-.28,.04,-.21,.14,.07,.07,-.1,.2,.28,-.01,.34,-.18,-.14,.19,-.09,-.18,.16,.18,.1,.11,-.03,.21,.06,.21,.04,.01,.14,-.06,.08,.34,-.14,.12,.18,.14,.07,.06,.19,.05,.02,.52,.17,-.06,.15,-.04,.11,.03,-.02,.27,.12,.03,-.01,-.06,.16,.03,.01,.1,-.02,.08,.08,.03,.37,-.48,.1,.11,.13,.18,-.03,-.01,-.03,-.02,.03,-.09,.11,-.28,.32,.05,-.02,.44,.18,.14,-.04,-.3,.16,-.29,.26,.21,.13,-.54,.14,.24,.09,.04,.1];export{a as rvalData};
