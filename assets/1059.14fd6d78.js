const a=[.11,-.22,-.06,.09,-.05,.41,.3,.31,-.13,-.13,-.36,.07,-.01,.01,-.46,.01,-.07,.1,0,.03,-.08,-.31,.15,-.53,-.27,-.03,-.41,.36,.37,-.54,.2,-.25,-.11,.24,-.08,.05,-.35,-.59,.15,-.23,-.19,-.06,.24,.03,-.01,-.65,-.15,.14,-.38,.25,-.12,.07,-.31,-.11,.48,-.4,-.22,.39,.01,0,.51,-.06,.13,-.02,-.11,-.43,.04,-.64,-.14,0,-.03,-.32,.59,-.02,-.1,.01,-.21,.54,-.23,-.06,.01,.15,-.04,.04,.09,-.27,0,-.1,.02,-.3,.65,.01,.32,.07,-.12,.41,-.03,-.25,.26,.63,.02,.08,.4,.06,.42,-.05,-.24,-.3,-.06,.27,-.04,.24,.18,.05,.03,-.24,.27,-.42,.19,-.15,-.07,-.17,.03,.11,.01,.26,-.07,.4,-.31,-.34,.48,.11,.07,.26,-.21,.13,.47,.26,-.46,.12,.15,.15,.23,-.02,.17,-.02,-.07,.6,.27,0,.12,.12,.04,-.07,.38,.67,-.1,-.02,-.17,-.53,.4,.33,-.08,.37,.31,.52,.05,-.37,.62,0,.15,-.18,.43,.13,.15,-.37,.13,-.55,.55,-.11,-.09,.14,.03,-.38,.38,.31,-.2,.03,.4,.15,.2,.5,-.02,.36,.26,-.13,.47,.2,-.11,-.18,-.42,.16,-.29,-.12,.01,.49,-.05,.54,.61,.09,.34,-.51,-.07,-.41,.36,.43,.06,.33,-.45,-.58,.37,.43,.42,-.05,.18,-.3,.46,-.38,.36,.2,-.08,.17,-.35,-.08,-.18,.15,-.47,-.63,.28,-.02,.28,-.5,.39,.57,.26,.11,.01,-.08,-.09,.02,.36,-.06,.49,.33,.13,-.14,.01,.05,.12,-.29,-.25,.57,.21,.11,.7,.44,-.12,.06,-.31,-.17,-.26,-.11,-.26,-.12,-.2,.05,-.53,.45,.08,-.37,.52,-.66,-.39,.06,.5,.05,-.61,-.39,.44,-.21,.18,.48,.01,.03,.4,.31,-.49,-.04,.02,.38,.04,-.15,-.25,-.19,.09,-.05,.11,.28,.82,-.58,.06,.06,.06,.17,.24,.4,.3,.6,-.04,.03,.11,.03,-.52,.09,.2,.53,0,.15,.03,.5,-.09,.17,.16,-.04,-.24,-.12,-.35,.35,-.2,-.16,.36,.27,.17,-.11,-.37,-.02,-.01,.66,.21,.27,.29,.4,.05,.52,-.37,-.38,.15,-.11,.15,-.25,-.28,.01,.56,-.29,.08,.09,.15,-.28,.62,-.09,-.27,.07,-.21,.63,.49,.38,-.07,.1,-.21,.63,-.14,.13,-.04,-.05,0,.16,-.12,-.02,0,-.06,.04,.05,.07,-.12,-.23,-.13,-.3,-.04,.19,-.05,.07,.53,.01,-.02,.41,-.01,-.42,.12,.28,.28,-.08,-.09,.34,.05,.36,-.08,.15,-.03,.52,.01,.15,-.29,-.31,-.01,.05,-.26,-.24,-.09,.45,.27,.36,.61,-.14,.1,.54,-.26,-.19,.06,-.06,.29,.35,.03,.12,-.3,0,.51,-.21,.05,-.17,-.3,.08,.34,.05,.43,-.05,.48,-.3,-.27,.58,-.03,.01,.12,.06,.56,-.07,.16,.06,0,-.12,-.14,-.37,-.32,-.03,-.31,.69,-.02,0,0,-.15,-.63,.34,-.46,.06,.27,-.01,.4,.35,.34,.04,-.05,-.09,.06,-.03,.22,.06,-.18,.18,-.22,.01,.57,.48,.23,.08,-.04,0,.25,.74,.09,-.17,.55,.23,.32,.01,.38,-.02,-.13,.25,.35,.53,.08,0,-.01,.37,.06,.56,.08,-.16,-.04,-.13,.12,.48,.18,.04,.21,.17,.3,.57,.14,.74,-.03,-.11,.59,-.06,-.5,-.06,.12,.32,-.49,-.07,.3,-.57,-.29,-.09,-.23,-.03,-.05,-.09,.31,-.15,-.08,-.19,-.34,.1,.24,-.17,-.08,.08,-.13,.31,-.07,.01,-.05,-.31,-.11,.04,-.16,.06,-.17,.35,.13,-.12,-.09,.3,.49,.41,-.41,-.16,.31,-.31,-.39,-.13,.04,-.05,.14,.26,.15,.05,-.14,.42,.07,.02,-.14,-.01,.22,-.15,-.43,.49,.23,-.09,.29,.03,-.43,.35,.47,.09,-.23,-.11,.12,-.28,.03,.48,.15,.6,.04,.64,-.02,-.04,.54,.31,.04,-.02,-.53,-.14,.53,.17,.2,-.03,.37,.27,-.24,.39,.12,-.23,.3,.03,.15,.72,.08,-.02,.41,-.1,-.03,.34,-.07,-.02,.04,-.61,-.21,.05,-.07,-.14,.32,-.22,.57,.02,.08,-.14,.57,.12,-.02,-.04,.02,-.09,-.54,.38,.5,.25,-.11,.06,.17,-.12,.72,-.02,-.03,.7,.17,-.07,-.02,.03,.29,.04,.12,.76,0,.24,.02,-.06,.08,.01,.06,.07,.24,.29,-.12,.17,-.17,.13,.16,.04,-.39,.07,.25,.03,.16,.15,.06,-.01,.19,-.24,.06,.23,.22,-.37,-.07,.01,.01,-.11,-.19,-.1,.13,-.08,.18,-.05,-.14,.31,.52,-.41,.15,.28,.09,-.34,.12,-.12,-.49,-.14,.04,-.1,-.46,.15,.37,-.05,-.04,.06,.27,-.28,0,.04,-.32,.17,-.04,.34,-.44,-.02,.2,-.26,-.3,.03,.12,-.47,.28,.79,.82,-.01,.12,.69,.07,.25,.15,-.09,.6,-.07,-.13,-.1,.08,-.07,.35,.43,.47,.27,-.33,-.16,.56,.37,-.68,-.01,-.34,-.08,.1,.23,.63,-.09,.1,-.27,.2,-.28,.17,.08,-.07,.46,-.04,.04,.19,-.06,.03,.16,.44,-.07,-.36,-.06,-.11,-.16,-.08,.26,-.12,-.08,-.24,-.23,.26,-.13,.01,.44,-.3,.59,.14,.22,-.23,-.17,.24,.07,-.4,.48,.01,.03,.53,-.22,.09,-.37,-.4,.34,-.22,.03,-.32,.02,-.02,-.05,.35,.57,.5,.36,.06,.33,-.18,.1,.01,.77,.54,-.12,.2,.28,.25,.24,-.08,.06,.67,.92,.53,.29,.33,-.15,.19,-.52,-.08,-.06,.04,-.45,.04,.81,.09,.16,.11,.02,.23,-.01,.49,.06,-.12,-.01,-.05,.04,-.16,.24,-.25,.03,-.07,.12,-.13,-.17,.54,.01,.45,.21,-.47,-.19,.14,.17,.38,.2,.43,.43,-.1,.9,-.02,-.05,-.11,.14,-.02,.17,-.19,-.02,.58,.48,-.19,-.22,-.02,.08,.06,.45,-.04,.21,.01,-.24,.27,.47,.01,.19,.39,.14,-.17,-.05,-.33,.33,.15,.51,.14,.33,-.23,.05,.59,.01,.42,-.06,-.02,.04,.17,.28,-.05,.09,.1,-.03,-.03,-.38,.62,-.49,-.09,.13,-.18,.18,.55,.49,.14,-.01,.34,-.34,.28,.25,.31,.37,.02,.02,.45,.26,.27,.52,.16,-.2,.72,-.07,-.08,.11,.03,.09,.09,.09,.06,-.03,-.37,-.14,-.01,.03,.06,-.36,.36,.64,-.58,.66,.12,.12,.28,.77,.01,.08,.35,-.19,.49,-.18,.57,.03,.01,-.01,-.08,.42,-.09,.14,.46,.14,.31,-.33,.35,-.16,-.05,.18,-.17,-.34,-.01,.03,.69,.05,-.03,-.12,.17,.54,.04,.17,.29,-.07,-.03,-.06,.19,1,-.07,-.62,.01,-.17,-.25,.39,.56,-.32,-.06,-.13,0,.41,.26,.58,-.25,.12,.02,-.35,.34,.31,-.12,.15,-.1,-.04,.04,.52,-.39,-.02,-.04,-.32,.1,.01,.36,.08,-.12,-.11,.34,.25,.52,.08,.11,.22,-.13,.4,-.19,-.09,-.1,-.16,.12,.14,.09,-.09,.5,.49,-.03,-.2,-.23,.09,-.29,.48,-.09,.18,-.55,-.2,-.08,-.05,.01,-.06,-.45,.58,-.03,.5,.08,-.12,-.1,.13,-.04,.05,.7,.24,.59,-.07,-.1,-.07,.31,.17,.19,-.18,-.42,.07,-.46,.02,.3,.44,.18,-.09,.72,.16,.5,.13,.12,-.11,.06,.07,.46,-.01,.14,.01,-.14,.2,.11,.25,-.05,.11,.52,.33,-.1,-.47,-.07,-.03,-.19,.55,-.06,-.03,.26,-.07,.11,-.2,-.43,-.17,-.17,.32,.24,.38,.1,.04,.06,.09,.2,.23,.37,-.08,.33,.01,.06,.52,.33,.69,-.06,-.13,.44,.02,-.05,-.12,.05,-.25,.78,-.19,.08,-.01,.67,.5,.02,.13,.18,.21,.53,.04,-.67,.73,.55,-.52,.24,.1,.11,-.06,.05,-.04,-.08,-.01,.18,-.41,-.06,-.09,.03,.16,.05,-.16,.01,.07,.15,.16,-.04,.14,.53,-.05,-.22,.4,-.2,.34,.31,-.03,-.07,-.15,.21,-.38,.43,-.44,-.41,.42,-.03,-.13,-.08,.21,-.15,.29,.21,.22,.09,.14,.11,.37,.36,-.1,.4,-.14,.01,-.11,-.1,-.18,-.02,.12,0,.05,.39,.41,.58,.13,.27,.04,.32,-.07,.28,-.27,.04,-.02,-.6,.5,.7,-.28,-.27,.31,-.17,.18,.2,.34,.36,.28,.02,-.34,.18,.28,.52,-.06,-.04,.5,.54,-.27,.05,.08,-.58,-.22,.07,.35,.02,.28,.06,.43,-.05,.1,.17,.12,.03,-.16,-.37,.06,.15,-.28,.49,-.14,.15,.49,.45,.27,.08,.22,.35,.3,.47,.63,.42,.23,.18,.05,.21,.22,.27,.2,.5,.27,.08,.2,.17,.24,-.21,.31,-.02,.12,.13,.12,.08,-.13,.16,.25,.04,.26,-.02,-.32,-.11,.46,.18,.36,.27,.5,.56,-.35,-.09,.56,-.22,-.13,0,.48,.03,-.4,-.11,.14,-.61,.12,.4,-.28,.2,.09,-.08,.16,.52,.17,-.46,.2,-.17,.28,.11,-.08,.02,.06,.32,-.29,-.1,-.22,-.23,-.27,-.31,-.08,.21,.1,.53,-.09,-.01,.12,.08,.44,.16,.46,-.54,.2,.01,.16,.42,-.07,.19,.01,.1,.01,-.08,-.05,-.15,-.14,-.04,0,.4,-.15,-.04,-.04,.43,.05,-.25,.46,.19,.16,.08,-.19,.16,.75,-.17,.08,-.33,.21,-.05,.36,.25,.45,.02,.59,.09,.18,.18,.33,.06,.53,.03,-.05,.58,.32,.14,.39,.09,.28,.27,-.1,.02,.08,.05,-.2,.25,-.11,.73,.13,.36,-.23,.31,.39,-.18,-.11,-.17,-.29,.39,.12,.01,-.06,.13,.15,-.31,.6,.6,.21,.05,-.32,.14,-.01,.13,-.05,-.33,.82,.14,.35,.09,.29,-.13,.52,.02,.43,-.08,0,.63,-.02,.26,.07,.03,.48,.26,.03,-.1,.12,.11,.25,.04,.14,.58,.16,-.22,.14,-.03,.03,-.06,.04,-.07,.45,.37,-.08,0,-.58,.17,-.01,-.06,-.05,.14,.17,0,.46,-.32,.41,-.6,.19,.13,.1,.1,.21,.35,.34,-.37,-.02,-.26,.01,.01,-.38,.33,-.23,.3,-.19,.3,-.14,-.33,-.27,.24,.26,.55,-.13,-.13,-.12,.1,-.22,.27,.3,-.1,.08,-.33,.08,.23,.6,.28,.36,.22,-.08,.12,-.17,.45,-.32,.22,.01,-.14,-.15,.04,-.14,.07,.14,-.06,.44,.03,.2,.18,.09,.23,.11,.02,.79,-.24,.19,.28,.08,.01,.07,.17,.14,.08,.73,-.09,.77,-.13,.26,.49,.37,.41,-.1,-.14,-.11,.07,-.05,0,-.25,.42,.34,.27,.31,.43,-.28,.17,.26,-.19,.2,-.25,-.07,.26,-.07,.01,0,.18,-.18,.19,-.06,-.29,.4,.25,-.15,.09,.51,-.2,-.07,-.03,-.11,-.58,.51,.15,-.43,-.46,-.05,.09,-.13,-.11,.23,.57,.14,0,-.06,.04,.07,.02,.1,-.13,-.04,-.27,-.06,-.25,.22,-.24,.05,-.31,.15,0,.08,.04,-.12,-.11,-.08,.49,.29,-.09,.11,.14,.25,.23,.27,.04,.12,.18,.05,.02,.07,-.06,-.16,-.08,-.1,-.07,.02,.21,-.11,.12,-.64,-.14,-.21,-.05,.04,-.02,.18,-.03,-.15,.52,-.06,.1,.02,0,.31,.24,.07,-.18,-.2,-.01,-.12,.15,-.56,-.38,-.23,.07,-.12,-.04,.21,-.68,.15,.4,.24,.4,.15,.35,.06,-.14,.07,.37,.39,.22,-.07,.22,-.06,.09,.6,-.44,-.36,.52,-.12,.35,.48,.14,.18,-.27,.21,-.08,-.24,-.29,.23,-.12,.33,0,-.11,.04,.67,.07,.48,.12,-.29,.32,.47,.58,.36,.41,-.06,-.04,.1,.12,.24,.17,.17,-.34,.24,.15,.19,.07,0,-.13,.01,.3,-.25,.03,-.08,.17,-.32,-.04,.7,.03,.58,.14,.04,.13,.33,-.2,-.15,.05,.13,.36,.25,.52,0,.14,-.19,.54,.07,-.08,-.29,.3,.55,.62,-.03,-.17,.16,.23,.01,.26,-.02,-.06,.27,.21,.23,.19,.02,-.32,.16,.57,.19,.09,-.2,.06,.05,-.12,0,-.04,-.04,.03,.4,.23,.06,-.15,-.52,.32,.51,.42,.29,-.07,-.09,-.13,-.25,.11,0,-.17,-.11,-.15,0,.84,.01,.29,.39,-.11,.11,.09,-.2,-.42,.62,-.08,.23,.06,-.27,.21,.14,-.01,.62,.49,-.33,-.04,-.05,-.22,-.21,-.32,-.12,.1,0,.15,.07,.26,-.05,.66,-.16,.02,-.06,.03,-.18,.08,.11,-.19,-.04,-.03,-.22,-.3,.25,.14,.26,-.26,.08,-.26,-.05,.27,-.09,-.13,-.08,.28,-.2,.32,-.16,-.34,.01,-.04,-.09,-.03,-.29,.23,-.38,.01,.48,-.33,-.07,.09,.47,-.1,.5,.06,.11,-.01,-.04,.17,-.1,-.09,.25,.24,.18,-.12,.29,-.06,-.11,-.01,.09,-.29,-.09,-.47,-.12,-.29,-.29,.64,-.18,-.26,-.09,-.08,-.21,-.09,.15,.29,-.42,.21,.02,-.21,.2,-.18,.1,-.07,.32,.14,-.14,.09,-.18,-.05,-.3,.38,.02,.19,.22,-.01,.13,.56,-.48,.13,-.26,-.07,-.05,-.03,-.32,.09,-.07,.19,0,.32];export{a as rvalData};
