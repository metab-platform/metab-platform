const a=[.5,-.15,-.21,.05,-.26,.68,.07,.16,.06,-.37,.2,.35,-.26,.16,.13,.02,.16,.05,-.18,.22,.12,.39,-.07,.14,.17,-.11,.35,.08,-.04,.32,.03,.55,-.07,.16,.56,.05,-.04,.07,-.15,-.22,.04,-.19,.05,.15,-.37,.09,.12,1,.46,-.33,.03,.36,-.17,-.17,-.04,.15,.27,.24,-.33,-.03,-.01,-.09,-.27,-.04,.32,.17,-.11,.07,.24,-.07,-.06,-.07,-.06,-.09,-.25,.1,.24,-.05,-.18,.52,.23,.07,.08,-.11,.29,.23,0,0,.2,-.19,-.04,-.22,.06,0,.4,.05,.2,.39,.35,-.04,-.08,-.15,-.01,-.06,-.18,-.11,-.14,-.11,.15,-.25,.13,-.16,-.06,.22,.53,-.11,.22,.35,.76,.12,-.33,.05,.23,.04,-.09,-.23,-.18,.53,.05,-.13,.06,.27,.07,-.26,.27,.4,-.11,-.38,.31,.22,-.17,.22,-.25,.01,.42,.07,.11,.3,-.02,.14,-.14,0,.01,.37,.06,.11,-.09,.56,.15,.14,-.2,-.24,-.34,-.19,.07,-.17,.04,.39,.31,-.05,.55,.37,-.06,-.11,-.23,.38,.16,.23,-.16,-.05,.13,.24,-.18,-.37,-.25,-.19,.24,.19,-.21,.33,.09,.09,-.18,-.01,-.16,-.03,-.17,.06,.25,.44,-.09,.08,-.13,.26,.38,.05,-.25,-.2,.03,-.34,-.06,.13,.32,.02,.25,.02,-.19,-.04,.37,.12,-.17,-.17,0,-.08,-.15,-.16,-.02,.4,.2,-.3,-.13,-.03,.08,-.32,-.54,.46,.05,.09,-.19,.03,-.21,.09,.16,0,.05,.09,-.02,-.14,.05,-.02,-.08,.07,-.1,.2,-.18,-.2,-.23,.06,-.15,-.37,-.06,-.11,.03,-.2,.3,-.16,.19,-.1,.05,.04,.46,.32,-.04,-.34,-.21,-.26,.23,-.1,-.12,.47,-.22,.11,-.08,-.07,-.07,.05,.12,.04,-.05,.48,.13,-.37,.04,.08,.07,.01,.08,.35,-.05,-.23,.14,-.18,.39,-.24,.17,-.1,.39,-.19,.1,.07,-.17,-.16,-.1,.38,.2,-.22,-.34,-.1,-.34,-.45,-.19,.34,.06,-.13,-.36,-.1,.03,-.16,.22,-.14,.11,-.15,.21,-.38,.27,.05,.2,.03,.17,.54,-.05,-.05,0,.14,-.12,-.2,-.2,-.16,-.05,-.11,-.15,-.08,.43,-.06,.01,-.09,-.21,.03,-.22,-.34,.1,-.22,-.14,-.11,.2,.12,.15,-.17,-.02,-.25,.31,-.11,-.03,.46,-.07,.06,-.15,-.19,-.03,-.03,.13,.07,.1,-.19,.11,.06,.01,.01,-.03,-.03,-.23,-.53,-.02,-.2,-.17,-.19,.55,-.21,-.2,-.21,.18,.16,-.28,.06,-.27,-.08,.06,-.2,-.22,-.06,-.37,.08,.12,-.23,.26,.17,-.23,0,-.2,.09,.34,-.18,.4,-.46,.08,-.1,-.11,-.36,-.14,0,.04,.46,.17,.3,-.27,-.32,-.06,-.05,-.15,.06,-.2,-.14,-.25,.32,-.44,.13,-.13,-.12,.17,.38,.12,-.21,.16,.13,.03,.16,.46,-.12,.29,-.09,-.36,-.02,.3,-.13,-.12,.37,-.15,.12,.26,-.13,-.14,-.11,.25,.22,-.1,.15,-.02,.07,-.03,.25,-.19,-.04,-.17,.11,-.48,.09,-.19,-.01,.13,-.34,.09,.37,.11,-.13,-.16,-.07,-.42,-.15,.1,.15,-.09,-.25,-.18,-.03,-.23,.06,.36,.23,-.06,-.17,-.19,.15,-.32,.08,-.41,.33,.04,.06,-.11,-.14,.08,-.16,.24,0,.04,.48,.17,-.13,-.12,.1,-.14,-.39,-.18,-.18,.49,.29,.02,.21,.13,.32,.05,-.19,-.42,.2,.54,.09,.18,.22,-.34,-.16,.06,-.13,-.21,-.27,-.15,-.33,.17,-.07,-.12,.04,-.38,.27,-.1,.07,-.14,-.27,-.13,-.12,-.03,-.08,-.32,-.29,-.13,-.06,-.19,-.22,-.03,.31,-.42,.03,.58,.4,-.3,.14,-.17,.11,-.15,-.2,.34,-.08,-.17,.07,-.13,-.25,-.01,.26,-.09,-.34,.22,.07,.09,-.24,-.26,.18,-.27,.25,-.05,.82,.23,-.17,-.14,.02,-.26,.11,-.37,.03,-.17,.12,-.14,.48,.01,.14,.27,.16,.06,.53,-.2,.01,-.2,.01,-.22,.13,.04,-.24,.17,-.13,.16,-.11,.13,.38,.11,.01,.58,.23,-.06,-.11,.11,-.21,-.07,-.2,.42,.29,-.1,-.1,.15,.14,-.05,-.05,-.19,.09,-.17,-.05,-.1,.03,.05,.39,-.04,.08,.08,-.12,-.05,.33,-.06,.27,0,-.08,-.16,-.24,.18,.1,-.12,.15,-.03,-.06,.27,.3,.28,-.19,.04,.27,-.01,.13,.18,-.37,.18,.08,.2,.3,-.32,.4,-.16,.01,.02,-.41,.3,-.21,.25,.12,.32,.31,-.04,.01,-.09,.21,-.2,-.05,.13,.22,-.1,.08,.13,-.11,0,-.2,.02,-.16,.04,.36,.51,-.36,.45,0,-.03,-.18,-.03,-.17,-.07,-.01,.11,-.21,.34,.12,.6,.23,-.12,.36,-.05,-.05,0,-.25,.51,.54,.3,.18,-.2,-.06,.3,.09,.26,.08,-.01,.24,.1,-.17,.02,-.19,-.27,-.31,.06,.48,.06,.12,-.15,.43,-.11,.48,-.21,.14,-.08,-.14,-.26,.38,.25,-.21,-.3,-.22,-.23,-.08,.34,.3,.48,.18,-.18,.04,-.08,.27,-.16,-.24,.13,-.16,-.04,.06,-.17,-.21,.11,-.06,.23,.28,-.06,-.04,.1,.06,-.05,.53,-.1,-.03,-.12,.32,-.08,-.1,.27,.33,.04,-.24,-.21,-.13,.28,.18,.09,.08,-.04,-.13,.12,.12,-.16,.34,-.18,-.19,.3,.36,.13,.09,-.36,0,.39,-.29,-.11,.49,-.14,.15,.2,.42,.02,.04,.14,.05,.07,-.22,.11,.77,-.02,-.16,.29,-.01,.21,-.21,.19,.67,-.01,.06,.31,.34,-.19,-.09,.17,-.08,-.1,.1,.16,.39,.2,.09,.05,-.24,-.23,-.07,.03,.12,-.15,.01,-.25,-.21,0,-.11,-.11,-.48,.21,-.37,-.22,-.15,.36,.12,.08,-.04,.46,.17,.28,-.16,.4,-.17,.23,.24,.42,-.3,-.34,.26,.35,.01,-.01,-.1,.26,-.11,-.12,0,-.19,-.27,.32,-.18,-.25,-.08,.07,-.25,-.1,-.19,-.16,.09,-.19,-.09,.05,-.16,.46,.36,.01,-.12,.05,.05,.1,.02,.05,-.04,.15,.23,.15,.44,-.09,-.08,-.17,.04,-.24,.44,.11,.11,.03,.12,-.18,-.05,.05,.16,.13,.02,-.32,.56,.14,.26,-.15,.04,-.15,-.11,-.15,.15,-.21,-.05,.29,-.01,.15,-.01,-.07,.51,.59,-.05,-.24,.03,-.17,-.02,-.26,-.03,-.15,-.01,-.1,-.07,.02,-.1,.01,0,.12,.23,.42,.03,-.26,.44,.18,.03,.23,.09,.41,-.01,.15,.29,.18,.07,-.24,-.04,-.23,-.15,-.08,-.18,-.08,-.1,.4,-.16,-.23,-.07,.26,-.07,-.09,0,-.01,.14,.06,.01,.13,-.14,.03,-.26,.21,-.1,.34,.06,0,-.05,-.02,.06,-.03,.03,-.11,.41,.12,.13,.14,.06,.11,.57,-.23,.06,-.43,.24,.37,.09,-.24,-.19,-.12,-.02,.25,-.24,.36,0,-.21,.12,.02,-.2,.41,.51,-.05,-.06,.03,.05,-.18,-.16,.33,.02,-.24,-.09,-.21,.49,-.33,-.29,.02,.09,-.04,-.01,.29,.04,-.1,.1,-.22,.22,-.15,.1,.07,.37,-.4,-.24,-.28,-.16,.35,-.01,-.02,.12,-.03,-.12,.39,.02,.49,.18,.24,.32,0,.02,-.02,.12,-.1,-.02,-.21,-.25,.39,-.27,.05,-.07,.43,.34,-.11,.66,-.1,.19,-.16,.42,.01,-.09,-.13,-.11,.06,.54,-.02,-.26,-.03,-.09,.41,.15,.3,.41,.15,-.04,.33,-.23,.07,.1,-.17,-.17,-.32,.02,-.38,.44,.06,-.14,-.19,-.14,-.11,.09,-.1,-.08,.03,.04,.31,-.4,-.05,.37,-.19,-.08,-.09,-.32,-.11,.22,.38,.2,-.1,.61,.1,-.25,-.2,.26,.55,.23,.32,-.17,0,-.23,.45,-.24,-.44,-.04,-.15,.27,-.35,-.1,-.05,-.03,.4,-.18,-.41,.2,.37,-.17,.21,.41,.38,.08,-.13,.17,.17,-.01,.02,-.26,-.25,.15,-.28,.04,-.26,.09,.34,.39,-.05,-.18,-.21,.11,.41,.09,.41,-.15,-.03,.49,-.12,-.04,.13,.05,.41,.19,-.2,-.12,.27,-.19,.48,-.14,.18,.1,-.15,-.05,.22,.28,-.09,.53,-.21,.02,-.08,.32,-.19,.03,0,.54,.15,-.02,-.23,.66,.21,-.12,.2,.37,-.19,.06,.04,.41,-.38,.04,-.28,-.05,-.14,-.13,.38,-.22,0,-.4,.06,.1,.07,-.13,.2,-.09,-.09,-.05,-.16,.13,-.36,-.13,.19,-.24,.04,.03,-.23,.17,-.12,.22,-.12,.26,-.32,-.28,-.03,-.23,-.36,-.27,-.26,.18,-.03,-.05,-.18,.06,-.18,.34,.1,.27,.04,-.03,.2,-.4,.15,.26,.15,-.14,-.14,-.11,.23,.11,-.08,-.08,-.05,.01,-.46,0,-.23,-.14,.09,-.02,.1,-.06,-.46,.38,-.03,.26,-.08,-.11,.33,.28,.51,.34,.01,-.16,-.34,.31,.28,.02,-.04,.22,.13,.28,.24,.09,.01,.01,-.45,.03,-.14,-.12,.08,.06,.07,-.2,-.09,.49,.09,.27,-.21,.01,-.19,-.05,-.04,-.22,.03,.04,.25,-.25,-.02,.23,-.12,-.19,.28,.16,-.04,-.02,-.12,.12,.13,-.02,.39,.29,.31,-.09,.19,.13,-.16,-.13,.01,.06,.27,-.05,-.23,-.19,-.22,.01,.21,.61,-.06,-.23,-.24,.01,.03,-.18,.39,.14,-.04,.12,.03,.16,.39,.08,.05,.11,-.25,.02,-.02,-.23,.38,-.15,.04,-.24,.44,.3,-.08,-.15,.03,-.11,-.13,.14,-.02,.23,.18,.33,-.23,.3,-.17,.06,-.08,-.29,.07,-.07,-.26,-.13,0,0,-.17,.27,-.07,.05,.05,-.08,0,-.36,-.04,-.18,-.01,.02,-.11,.09,.05,.13,-.33,-.09,.09,-.06,-.17,-.11,-.26,.43,.05,-.24,.21,-.13,-.25,-.18,-.26,-.07,-.09,.21,-.14,-.12,-.12,-.03,-.21,.06,-.18,.42,-.01,.35,.22,-.01,-.23,.1,-.21,.04,-.14,.04,-.28,-.13,-.06,-.05,-.37,-.23,-.11,.12,-.18,-.2,-.07,-.13,-.18,.24,-.17,-.39,.34,-.14,-.12,-.1,-.09,-.3,-.02,-.02,-.35,-.22,-.13,-.13,-.13,-.38,.12,.21,-.14,-.37,.12,-.15,.43,-.01,-.22,.2,-.23,.06,-.09,.12,-.16,-.24,-.22,-.08,-.05,-.23,-.2,-.09,-.28,.68,.22,-.21,-.06,-.11,-.02,-.35,-.06,.16,.06,-.01,-.09,.12,-.16,-.21,.05,.21,-.16,.09,-.11,-.25,-.28,-.14,-.03,.19,-.19,-.23,-.15,-.13,.2,-.13,-.2,.01,-.06,-.41,-.14,.05,-.17,-.16,-.23,.06,.09,-.01,-.22,-.16,-.41,-.23,.14,-.2,.13,-.17,.16,.23,.1,-.21,.23,-.14,.09,-.11,-.38,-.17,.35,-.43,.17,-.14,-.34,.09,-.19,-.19,-.31,-.12,-.16,-.11,-.11,-.14,-.27,-.13,-.24,-.07,.17,-.15,-.11,.14,-.17,-.32,-.26,-.39,-.2,-.05,.15,-.21,-.19,.09,.44,-.32,-.11,.09,.04,.02,-.35,-.46,.31,.04,.01,-.11,-.1,.16,-.16,-.18,.18,.2,-.02,-.06,-.12,-.08,.03,.18,0,.01,.07,.17,-.38,-.42,-.43,-.13,-.24,-.27,.24,-.03,-.4,.3,.02,.25,-.21,.06,.22,.44,.12,-.02,.07,.29,-.01,-.22,-.31,.15,.04,-.1,-.29,-.12,.52,-.05,-.16,-.2,-.24,.12,-.2,-.11,.06,-.09,.04,-.4,.24,-.14,.11,-.24,-.07,.15,.24,-.29,0,.12,-.1,.05,-.23,.22,.05,.4,-.14,-.27,-.35,-.1,-.18,.21,-.36,.23,.08,.23,-.1,-.16,-.17,-.19,.05,0,.12,.03,.04,-.21,-.09,.09,-.04,-.07,0,-.11,-.13,-.32,.16,-.38,-.25,-.23,0,.34,-.13,.19,-.1,.47,-.1,.3,.18,-.03,-.14,-.3,-.19,-.15,-.17,-.02,-.22,-.2,-.05,.02,.01,-.13,.02,.18,.04,-.08,.2,-.26,-.05,-.02,-.27,-.28,.1,.21,-.16,.38,.44,.21,-.11,.25,.34,-.09,-.34,.07,.43,-.29,-.04,-.07,.08,.41,-.23,-.07,-.04,.07,-.28,-.19,-.27,.35,-.02,.43,-.16,.15,-.33,-.31,-.18,-.02,.07,.16,-.3,.32,-.14,-.04,-.12,-.03,-.15,-.2,.14,.04,.16,.12,.09,-.23,-.32,.13,-.18,-.12,-.1,.09,-.03,.05,-.12,-.2,-.26,.35,-.13,.37,-.17,-.18,-.48,.25,-.21,-.23,-.01,.07,-.2,-.25,.34,-.15,.09,-.15,.07,-.22,.2,-.32,.28,-.05,.19,-.22,-.33,.06,-.14,.01,-.3,-.18,-.12,.52,-.01,-.15,.41,-.02,-.01,-.07,.22,-.13,-.18,.07,.35,.14,-.1,.1,-.07,-.14,-.33,.5,-.27,-.26,-.13,-.14,-.07,-.5,-.38,-.26,-.27,-.11,.51,.04,-.14,.13,-.26,-.01,.08,0,.35,.19,-.14,-.07,-.09,.31,-.14,-.04,.55,-.04,-.23,-.05,-.2,-.36,-.11,-.22,.08,-.2,-.08,.33,.11,.13,.07,-.16,.03,.06,.04,.25,-.09,-.14,.42,-.26,-.2,-.15,.13,-.25,.12,.32,-.16,-.16,-.16,.28,-.23,.08,-.17,-.3,.02,-.04,-.28,.03,-.08,-.11,-.2,-.12,.55,-.13,.27,-.1,-.03,-.04,-.17,-.18,-.17,-.32,.06,-.17,-.03,.16,.03,-.13,.47,-.14,.2,-.16,-.17,.07,-.29,-.17,.03,.08,.39,-.12,-.2,-.19,.16,-.01,-.29,.11,.3,.22,.37,.08,.27,-.13,.07,-.19,-.1,.49,-.04,-.07];export{a as rvalData};
