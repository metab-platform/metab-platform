const a=[-.07,.03,-.06,-.09,0,.01,-.01,.34,.04,.18,-.51,.01,.03,-.1,-.4,.04,-.2,-.02,.06,-.05,.04,-.17,.16,-.53,-.17,.03,-.3,0,-.23,-.4,-.01,-.29,-.12,-.05,-.39,.09,-.2,-.28,.16,-.05,-.2,-.03,-.15,.02,.23,-.21,-.27,-.42,-.65,.66,.21,.06,.01,.01,.43,-.32,-.18,.11,.44,-.33,.13,0,.22,-.03,-.53,-.35,.06,-.38,-.03,.04,.08,-.19,.31,-.24,-.05,-.13,-.29,.17,.28,-.75,-.1,-.37,.07,-.06,-.02,-.34,-.17,-.01,-.01,0,.41,.07,.36,.3,-.14,.15,-.02,-.21,-.04,.23,-.05,.15,.42,-.15,.49,-.04,-.18,-.13,-.21,.4,-.02,.51,.25,-.04,-.01,-.02,-.21,-.33,-.45,-.1,.21,-.15,0,.1,.16,.47,.01,.01,-.44,-.18,.49,.29,.07,.67,-.34,0,.48,.31,-.36,-.14,.11,-.07,.2,-.15,-.06,.24,.03,0,.07,.08,.1,.24,.03,-.09,.42,.4,-.17,-.14,-.14,-.41,.63,.49,0,.27,.32,.24,-.2,-.53,.33,-.18,-.05,-.51,.44,.33,.16,-.5,.06,-.38,.43,-.14,-.18,-.21,.09,-.04,.3,.21,-.06,.01,.48,-.08,-.06,.34,.01,.24,.15,-.06,.27,.35,-.13,-.24,-.05,-.08,-.13,-.08,-.06,.13,.16,.72,.32,.22,.45,-.37,-.04,-.26,.09,-.13,.18,.31,-.53,-.15,.27,.43,.19,-.1,.2,-.17,.54,-.41,.33,.5,.14,.03,-.28,.06,.14,-.1,-.43,-.27,.31,-.07,.43,-.42,.28,.36,.24,.24,-.06,.13,-.12,-.07,.51,-.16,.44,0,.09,-.07,.08,-.02,.42,.07,-.07,.42,.16,.12,.03,.48,-.43,.09,-.17,-.13,-.11,.09,-.12,.18,.27,.14,-.45,.33,-.02,-.62,.54,-.29,-.06,.01,.51,-.11,-.31,-.26,.63,-.18,.27,.44,-.12,.24,.4,-.14,-.39,-.15,.19,.37,-.01,-.08,-.3,.17,-.04,-.08,.16,.38,.39,-.39,-.12,-.09,.05,-.08,.25,.38,.8,.46,.19,.37,.04,.03,-.27,.07,.79,.52,-.1,.13,.14,.56,-.04,.18,-.24,-.04,-.22,-.12,-.56,.07,.04,-.1,.31,-.16,.08,-.02,-.17,-.03,.16,.47,-.1,.38,.24,.46,-.11,.5,-.03,-.06,.3,-.21,.17,.05,-.17,.02,.46,-.11,0,.01,.27,-.15,.11,-.13,-.39,-.07,.06,.23,.04,.35,-.01,.09,-.06,.53,-.1,.04,-.1,.01,.11,.07,-.23,.03,-.02,-.07,.17,.13,-.12,.14,.08,-.08,-.23,.03,.18,.22,-.06,.19,.13,.1,.41,-.17,-.32,.18,.33,.2,.17,-.04,.2,.19,.31,-.05,.17,-.14,.55,-.14,.02,-.08,-.23,.17,-.01,-.18,-.13,.1,.34,.37,.31,.25,-.08,.01,.71,-.06,.08,0,-.1,.18,.36,-.07,.07,-.14,.55,.22,-.16,-.08,.05,-.24,-.03,.53,.01,.06,-.06,0,-.47,-.14,.25,.06,.15,.02,-.07,.3,.23,.18,0,.02,-.14,.02,-.14,-.21,-.19,-.12,.57,-.15,-.09,.2,-.05,-.29,.29,-.27,.2,.27,.51,.17,.6,.43,-.38,.13,-.03,.04,.25,.4,.03,-.17,1,-.07,-.05,.35,.42,.22,.25,-.09,.06,.12,-.07,-.11,-.12,.24,.15,.24,.02,-.05,.48,-.54,.34,.47,.35,.08,-.3,-.01,.03,.17,-.06,-.07,.16,.05,.15,-.08,.6,.96,.06,.52,-.1,.08,.42,-.06,.28,.02,.1,.45,.1,-.28,-.58,.06,-.01,-.31,.28,.01,-.39,-.16,-.05,.06,.09,.1,-.26,.22,-.21,.04,.36,-.24,.35,.38,.07,.19,.2,-.05,.41,.02,.21,.07,.09,.34,.12,-.12,-.05,-.07,.43,-.12,-.63,-.07,.34,.15,.57,-.41,-.16,.08,-.23,-.2,.12,-.03,.13,.12,.38,.01,-.03,.01,.17,.15,-.14,-.04,.07,.35,.15,-.34,.4,-.38,-.1,.06,-.08,-.23,.31,.36,.23,.2,-.09,.25,-.13,-.2,.38,.12,.19,.04,.39,-.16,-.01,.28,.25,.3,.06,-.23,-.03,.43,.17,.52,-.16,.44,.19,-.33,.19,-.33,-.25,-.05,.13,.16,.35,.09,.18,.6,-.2,-.09,.48,-.11,-.15,-.02,-.04,-.17,.06,-.03,-.07,-.12,-.04,.36,-.02,-.02,.04,.23,-.03,-.13,.15,-.18,-.01,-.36,.39,.45,.16,-.05,-.11,-.11,.09,.21,-.37,-.04,.24,.01,-.11,.03,-.07,.36,.02,-.01,.32,.1,.05,.34,-.1,.1,.31,-.15,.01,.29,.29,-.06,-.06,-.19,-.15,-.04,-.08,-.3,-.03,.33,.35,.18,.22,-.1,.09,.08,-.01,-.09,.31,.21,-.2,.04,-.39,-.23,.02,-.5,-.14,.31,-.25,.37,-.09,0,.33,.56,-.24,-.05,-.05,.04,-.36,-.14,-.28,-.35,.12,-.01,.14,-.21,.38,.39,-.13,-.23,-.08,0,.19,.09,.08,-.31,-.19,-.03,-.24,-.35,-.15,.49,-.28,-.05,.2,.18,-.27,-.03,.33,.32,-.01,-.03,.57,-.14,.64,.23,-.05,.38,-.08,-.1,.04,.16,.13,.41,.33,.18,-.08,-.31,-.35,.24,.4,-.33,-.11,-.54,-.05,.09,-.3,.28,.08,.05,.08,.11,-.18,.17,-.01,-.1,.37,-.03,.04,-.18,-.05,-.32,.18,.27,.04,-.69,-.3,-.14,-.2,-.1,.41,-.05,-.12,-.2,-.05,.3,-.27,-.08,.13,-.13,.34,.03,.11,-.1,.01,.38,.01,-.39,0,-.38,.08,.34,-.49,.22,-.16,-.26,.28,-.14,.07,-.5,.18,.13,-.12,.05,.32,.46,.39,-.42,.22,-.11,.04,-.03,.22,.49,-.2,-.11,.15,.39,0,-.2,.09,.57,.17,.39,-.13,.33,-.12,-.04,-.26,-.16,-.08,.01,-.11,.19,.31,.03,.11,.24,.03,.25,.11,.45,.09,.13,-.1,.1,.05,-.1,-.11,.11,-.01,-.18,-.11,-.19,-.09,.59,-.18,.62,-.04,-.35,-.6,.33,.22,.05,0,.4,.42,.06,.19,-.02,.15,-.15,.11,.04,.1,-.17,.29,.4,.39,.04,-.13,-.06,-.07,.01,.46,.09,.18,.07,-.26,.17,.4,-.11,.02,.03,.25,-.04,-.1,-.27,.27,-.07,.14,.1,.54,-.15,.02,.1,.02,-.14,-.22,.04,.2,.11,.21,.05,.03,.37,-.03,.04,-.05,.11,-.5,-.07,.11,-.19,.65,.69,.43,-.14,0,.46,-.33,.3,.23,.3,.42,-.14,-.16,.63,.3,.38,.66,.31,.18,.48,-.17,.22,-.11,.09,.07,.02,.09,-.03,-.22,-.45,-.15,-.17,-.06,-.07,-.22,.3,.33,-.25,.23,.04,.01,.19,.26,-.06,.08,.09,-.08,.42,0,.28,0,.04,-.14,-.15,.53,.06,0,.48,.12,.28,-.24,.2,-.12,-.1,.24,-.18,-.36,.09,-.03,.57,-.08,.02,-.1,.07,.4,-.07,.11,.42,-.07,-.05,-.08,.12,.18,-.23,-.31,-.18,.12,-.27,.52,.24,-.58,0,-.06,.12,.44,.29,.17,-.08,.03,-.07,-.09,.48,.09,-.1,-.1,-.29,-.12,.14,.23,-.26,0,.09,-.16,-.1,-.1,-.05,.01,-.24,.11,.34,.42,.15,-.02,-.14,.38,-.16,.47,-.09,-.07,.04,-.19,.17,-.03,.18,.05,.55,.39,.05,-.52,-.2,.17,-.27,.33,-.14,-.4,-.39,-.23,-.05,-.21,-.16,0,-.13,.37,-.06,.34,-.07,-.1,.09,-.09,.05,-.07,.38,-.05,.16,-.11,-.4,.1,-.21,.16,-.07,-.26,.01,-.08,.04,.01,-.05,.3,.19,.05,.47,-.09,.21,.04,-.1,-.06,.1,.09,.39,-.23,-.11,.03,-.05,.31,.08,.86,-.24,.1,.5,.49,-.19,-.23,-.17,-.09,.09,.36,.06,-.1,.68,-.03,-.12,-.11,-.26,-.2,.07,0,.17,.12,.05,-.06,-.31,.08,.15,.22,-.43,-.6,.15,-.08,.02,.41,.31,.19,.1,.35,.53,-.02,-.33,.17,.45,.04,.43,-.19,0,.16,.01,-.07,-.05,-.08,-.06,-.06,.35,.12,-.36,.27,.35,-.31,.72,.13,-.12,.01,-.1,.22,-.09,.01,-.06,-.26,.04,-.05,.03,-.07,.04,-.22,-.01,-.1,-.13,.11,.14,.28,.34,-.16,.09,.42,.06,.24,.2,-.1,-.1,.04,.47,-.05,.61,-.29,-.43,.37,-.14,.02,.06,.24,-.66,.21,.35,-.24,-.15,.28,0,.34,.06,-.11,.54,-.09,-.11,-.09,-.14,.03,-.06,.72,-.15,.08,.41,.5,.47,.14,.2,.05,.56,-.22,.12,-.05,.08,-.24,-.21,.21,.39,-.16,.04,.75,-.17,.01,.47,.15,.01,.4,-.05,-.16,-.09,.18,.17,.08,.13,.51,.41,.06,.01,.25,-.33,-.05,-.09,.65,.02,.02,-.44,.43,-.11,-.01,.07,.02,.16,.05,-.43,.26,.18,-.2,.37,-.16,-.1,.42,.62,.38,.27,.24,.43,.51,.53,.25,.6,.26,.26,.13,.21,.3,.24,.24,.66,.02,-.02,-.2,.22,.37,.05,.61,.11,.23,.45,.22,.3,-.19,.31,.38,-.14,.49,.13,.32,-.05,.49,.29,.33,.32,.41,.55,-.19,-.42,.34,-.12,-.08,-.26,.51,-.14,-.41,-.03,.29,-.37,-.05,.43,-.37,.04,.07,-.02,.13,.22,.13,-.29,.21,-.34,.08,-.15,-.43,0,-.31,.13,-.41,-.05,-.01,.06,-.06,-.21,-.11,.28,.19,.42,.01,-.15,.03,-.15,.4,.17,.43,-.16,.37,.02,-.13,.5,.12,-.12,.05,.13,-.06,.08,-.06,-.09,0,-.04,.02,.52,-.2,.01,.02,.5,-.18,-.32,.48,.31,-.15,-.04,.18,.3,.47,-.06,.32,-.14,.33,.01,.35,.3,.51,.08,.37,.36,.06,.28,.63,.23,.56,.19,-.03,.38,.6,.11,.5,.74,.15,.09,-.01,.02,.07,.04,.01,-.09,-.01,.34,-.1,.4,-.12,.36,.39,-.37,-.01,-.05,-.49,.56,.19,-.24,.04,.06,.19,-.33,.41,.4,.39,.24,-.03,-.07,.04,-.22,-.04,-.5,.22,.06,.71,.13,.36,-.06,.47,-.04,.44,-.09,-.02,.51,.23,.35,.06,-.01,.49,.53,.08,-.15,.13,-.13,.25,.33,-.12,.4,.13,-.25,.11,.21,-.09,-.07,.22,.18,.41,.61,.1,.52,-.4,-.15,.01,.2,.05,.15,-.06,-.14,.79,-.35,.54,-.33,.41,.02,.19,.16,.36,.39,.42,-.29,.01,-.14,.09,-.53,-.33,.6,.02,.45,-.15,.67,.16,-.32,-.16,.07,.25,.29,.02,-.03,.06,-.04,-.04,.28,.36,-.01,.2,.06,.05,.18,.43,.27,.71,.19,-.04,.13,.11,.45,-.02,.96,-.1,-.12,.22,.25,-.03,.04,.28,-.05,.62,-.11,.77,.18,-.06,.17,-.06,.03,.33,-.08,.37,.58,.28,-.12,-.26,.07,.44,.09,-.1,.29,.34,-.03,.63,.39,.3,.81,.2,-.14,-.11,.08,-.03,.46,.11,.51,.47,.54,.13,.35,-.14,.25,.28,.13,.36,.22,.01,.26,-.07,.02,-.1,.25,-.61,.57,.29,-.48,.27,.42,-.15,.69,-.01,-.28,.19,.03,-.08,-.35,.64,.15,-.53,-.41,.07,.05,-.16,-.18,-.06,-.02,-.08,-.06,-.32,-.16,.58,.56,.77,-.15,.08,-.02,-.18,-.24,.46,-.56,.13,-.25,.26,-.12,-.01,-.11,-.16,-.02,-.21,.18,.48,.15,.17,.04,.5,.27,.55,0,-.07,.23,-.04,.05,.16,-.19,.01,-.09,-.09,-.12,.05,.47,-.14,.13,-.26,-.01,.08,-.18,.17,.04,.29,-.13,-.14,.08,.01,-.01,.12,-.15,.37,.36,.2,-.11,-.15,-.07,.14,.28,-.26,-.38,.06,0,-.13,-.05,-.38,-.3,.3,-.21,.23,.59,.02,-.15,-.01,-.12,.19,.23,.53,.16,-.11,.43,.1,.1,.4,-.49,-.15,.07,-.15,-.21,.48,-.04,.08,-.18,.02,.04,-.15,-.21,.22,.01,.37,-.06,0,-.05,.43,-.13,.35,-.12,-.32,.27,.25,.48,-.09,.43,.05,.18,0,-.06,-.03,-.07,-.01,-.4,.32,.14,.36,.01,.13,-.23,.19,.47,-.13,-.15,.11,-.23,-.1,.12,.45,.19,.43,.04,.1,.3,.28,-.08,-.01,-.1,.1,.65,.38,.38,.2,.3,-.01,-.23,.05,-.22,-.17,.5,.45,.59,.01,-.05,.15,-.32,.05,.4,.01,.01,.28,.29,-.06,.17,-.11,-.29,-.05,.58,.19,0,.08,-.05,.06,-.04,.27,.14,.09,.05,.31,.06,.13,-.01,-.4,.41,.32,.4,.21,.13,-.2,.06,-.49,-.23,-.19,-.1,.32,.05,-.01,.39,.17,.34,.04,-.2,-.07,.14,-.22,-.23,.46,0,.11,.04,.08,0,-.12,.02,.37,.12,-.2,-.1,.21,-.52,.04,-.06,-.12,.07,-.07,.26,.34,.3,-.01,.44,-.47,.07,.07,-.01,-.01,-.08,.32,-.18,.08,.17,-.11,-.29,.31,0,.35,-.29,-.2,-.3,-.05,-.07,-.07,-.04,-.11,.41,-.05,.41,.19,-.38,.39,.04,-.14,.07,-.28,.22,-.16,-.06,.42,-.07,-.3,.11,.44,-.07,.29,.27,-.05,-.05,-.05,.11,-.11,-.15,.23,.17,.18,.01,.3,-.08,.14,-.15,.32,-.18,-.02,-.17,-.63,-.19,-.53,.34,-.19,-.22,-.06,-.02,-.02,.04,.48,.23,-.1,.11,-.02,-.11,-.03,-.14,.29,.03,.25,.19,.01,.13,-.28,-.01,-.43,.46,.01,.28,-.19,.2,.28,0,-.38,-.03,-.21,-.41,-.14,.16,.11,.27,-.13,-.02,.01,.41];export{a as rvalData};
