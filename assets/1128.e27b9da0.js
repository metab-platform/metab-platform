const a=[-.27,.36,.46,0,.51,-.08,.13,-.29,.35,-.13,.43,-.04,-.08,-.42,.62,-.09,.34,-.07,-.09,-.02,.04,.18,-.11,.64,.71,.58,.24,-.24,-.15,.34,.25,.16,.4,-.11,.44,.02,.65,.79,.2,.27,0,.54,-.04,.05,.02,.67,.31,.02,.26,-.12,.29,-.02,.24,.72,-.13,.47,.42,-.19,.14,.47,-.16,.36,.45,-.12,.15,.22,.54,.78,.13,-.04,-.05,.31,-.15,-.11,.59,-.04,.07,-.21,.67,.06,-.2,.43,.12,.51,-.04,.17,.53,.08,-.5,.72,-.35,.01,-.05,-.6,.13,-.18,-.44,.06,-.13,-.16,-.06,.58,.2,-.14,.18,.03,.11,.32,.49,.29,.09,-.09,-.01,-.48,0,.66,.25,.14,-.14,.6,-.07,.06,.1,-.18,-.46,.1,.53,-.05,.04,.65,-.43,-.43,0,-.23,.25,.1,-.48,.11,.22,-.07,.37,-.02,.25,.51,-.1,-.16,-.05,-.27,.4,-.02,.57,-.09,.05,.11,-.41,-.38,-.12,0,-.06,.68,-.57,.31,-.1,-.05,-.01,-.25,.24,.08,-.24,.56,-.04,.01,-.43,-.51,.12,.29,.01,.38,-.25,.55,.2,.02,-.16,.53,.02,-.15,.15,0,-.39,-.19,-.11,-.21,.15,.23,.24,.56,.27,.3,.09,.03,.54,.3,.64,.1,-.32,-.03,-.42,-.17,-.18,-.17,-.43,.78,-.04,.75,-.18,-.17,.06,-.33,.25,.22,.24,.11,.26,.61,.21,.63,-.42,.16,0,-.27,-.05,-.13,.64,.47,.13,-.03,.64,.4,-.13,.09,-.19,.81,-.4,-.65,-.16,-.27,.15,.03,.05,-.07,-.25,-.2,-.14,-.06,.39,0,-.08,.4,-.11,.54,.18,-.34,.3,.39,-.31,.17,.02,.47,.2,.36,.15,.01,.63,.45,.73,-.01,.41,-.23,.4,.24,-.46,.26,.65,-.36,-.1,.27,.36,.68,-.1,.17,-.21,-.27,.35,-.2,-.07,-.03,.24,-.11,.01,-.11,-.08,.49,.15,.02,-.02,.13,.14,.22,-.29,.32,.39,-.12,.06,-.09,.18,-.12,.02,-.35,.4,.01,.42,-.03,.77,.58,-.27,-.1,.38,-.25,-.12,-.04,-.37,.18,-.08,.04,-.02,.13,.1,-.03,-.26,.07,-.04,.03,-.12,.09,.73,.44,-.08,-.3,-.09,-.2,.3,-.65,.07,-.09,-.18,.7,.07,.08,.43,.59,.46,.01,-.18,.29,-.07,-.38,-.01,.63,-.24,.04,.34,-.26,.37,-.24,-.23,-.09,.05,.43,-.02,-.24,.05,.01,.09,-.01,.1,.11,-.04,.04,.4,.42,.42,-.05,.04,-.26,-.22,.48,.05,-.07,-.23,-.41,-.05,-.09,.42,.33,-.32,.11,.71,.39,.47,.43,.44,-.29,-.29,.46,-.1,.08,.4,.42,-.45,-.24,-.11,.65,.14,-.09,.36,.62,.49,.09,-.24,-.7,-.41,-.21,.59,.04,-.4,.67,-.27,.38,.49,.21,.29,.46,.25,.1,-.07,0,.47,.3,.07,-.07,.17,.09,-.53,-.13,.14,-.26,.32,.62,-.18,.28,.52,.24,-.4,-.23,-.21,.28,-.29,-.11,-.31,.69,.31,.64,.26,.11,-.34,.43,.2,.1,.58,.28,.24,.76,.44,.08,-.08,-.11,-.02,-.56,.13,.38,.15,-.03,.1,-.62,.36,.61,-.13,.04,.32,-.51,-.24,-.22,.47,.44,.5,-.24,-.35,.44,.43,-.24,.39,-.08,.34,-.2,-.04,.09,-.33,-.2,-.28,.54,-.03,.44,-.09,0,.16,-.03,.02,.09,-.01,.18,-.22,-.15,-.18,-.46,-.09,-.15,-.1,.16,-.47,.09,.09,-.31,-.01,.42,-.07,-.19,-.28,.47,.48,-.26,.28,.63,.44,.51,.14,-.08,-.21,-.58,-.12,-.05,.59,.25,-.03,-.26,-.06,-.07,-.15,.08,-.33,-.05,.38,.48,.37,-.44,.51,.5,.02,-.22,-.24,.18,-.04,.08,.3,-.12,.15,.79,.5,.33,.09,.68,-.01,.07,.06,.35,-.3,-.51,.34,.49,.02,-.19,.37,.63,.44,-.06,.19,.25,-.48,-.06,.12,-.25,.04,.67,-.08,-.21,-.17,.1,.47,-.28,.15,-.02,-.37,-.35,-.25,-.08,-.22,-.03,-.05,-.2,.35,-.29,-.02,-.12,-.14,-.26,.25,.24,.43,-.51,-.29,.2,-.12,.4,-.01,-.21,.31,.46,-.48,.5,.13,.13,.07,-.48,-.44,.49,.44,-.02,.87,0,-.11,.16,.48,-.01,.62,-.34,.33,.14,.12,-.11,.43,.48,.38,-.01,-.04,.31,.11,-.67,.4,.65,-.29,-.1,.02,-.37,.11,.39,-.27,.06,-.29,.5,.48,-.22,-.19,-.32,-.38,-.05,-.12,-.01,.06,.22,.41,-.32,.48,-.17,.04,.37,-.09,0,-.09,.37,-.15,.26,.54,-.49,-.1,-.15,-.11,-.06,.06,.01,-.05,-.1,-.18,.35,.66,-.1,.44,.32,-.13,.09,-.06,.42,-.32,-.05,.42,.13,-.04,-.53,.68,-.19,-.11,-.14,.67,.23,.03,.42,-.02,-.22,.37,.7,-.21,-.05,-.01,.26,-.02,-.12,.75,-.02,.11,.46,.27,.06,.03,.16,.49,.24,.44,.6,.47,-.17,.16,.01,-.55,-.33,.43,-.02,-.32,-.09,.03,-.21,.51,-.28,.45,.05,-.04,.41,.45,.25,-.11,-.26,.11,.22,.1,-.3,.26,.78,.5,.06,.57,.29,-.37,-.02,.03,.15,-.1,.43,.58,.37,.14,-.08,-.29,-.02,0,-.36,.4,.07,.34,-.43,-.41,.17,.12,.48,.13,.19,-.3,.51,-.03,.66,.02,.08,-.04,-.15,-.18,.64,-.15,-.17,-.15,.18,.07,-.02,.15,.15,-.04,.47,-.06,-.51,.16,.54,.34,.16,-.03,0,.01,.22,.27,-.01,-.02,-.08,-.32,-.35,-.06,.21,.25,.56,.09,-.29,-.4,-.48,-.18,.06,-.35,-.46,-.37,.07,-.09,-.31,-.43,-.37,-.16,-.11,.02,-.08,.25,.28,.07,.49,.69,-.12,-.28,.27,.33,-.34,.51,-.45,-.3,-.06,.3,0,-.24,-.27,.26,.59,.05,.09,.02,.06,-.08,.32,.07,-.47,.12,-.56,-.12,.42,.21,-.58,.31,-.05,-.06,-.43,-.53,-.03,-.4,0,-.4,.46,.34,.47,-.09,.51,.52,-.3,-.23,.45,.6,.47,.38,-.5,-.13,.01,.33,.53,.2,.11,-.18,.41,-.22,-.26,-.23,.56,.12,.11,-.33,.02,-.06,.11,-.44,.21,.5,-.31,.46,-.02,.48,.15,-.35,.05,.3,.05,-.04,-.12,-.39,-.1,.11,-.26,.71,-.44,.47,.12,.06,-.17,-.26,.35,.53,-.55,.13,-.25,-.2,-.35,-.65,.08,.06,.08,-.05,-.41,-.29,-.33,.01,-.41,.03,.06,-.06,.1,-.04,-.01,.05,-.15,.09,.45,.03,.05,-.05,.03,.23,.05,-.23,.36,-.2,-.3,.1,-.41,-.43,.22,.46,-.28,.19,-.11,0,-.16,.34,-.02,.08,-.12,-.53,-.04,.05,-.05,-.06,.07,.68,-.22,.32,.03,-.38,.51,.36,-.12,-.01,-.33,.16,-.32,-.18,.26,-.33,.17,.11,-.22,.29,.05,-.07,-.13,-.45,.46,.34,.02,-.21,.69,-.29,.06,.09,.45,.41,-.07,-.2,-.11,-.02,.51,.17,.05,.69,-.33,.15,.63,-.04,.09,-.01,.03,-.26,.28,.11,-.23,.17,.45,-.08,-.46,.41,.05,.41,.3,-.29,-.05,.46,.3,-.23,-.06,-.65,.32,.4,.28,.2,.13,.27,.03,-.03,-.25,-.18,-.07,.06,.11,-.15,.68,-.1,.53,-.16,.81,.07,.15,-.07,.02,.07,1,-.35,.02,-.43,.36,.54,-.21,.16,.5,.47,-.57,-.05,-.15,.51,.28,.03,.2,.41,-.12,.58,.42,.32,-.08,-.03,-.03,-.15,.35,.15,-.29,-.09,-.16,-.1,-.08,.58,.21,-.06,-.28,.44,.02,.51,.45,.49,-.04,-.15,.08,-.25,-.09,.21,.18,.72,.01,.43,.06,-.52,-.16,.12,-.38,-.24,.01,.56,.69,-.02,.5,-.19,-.27,-.36,.14,.48,-.01,-.11,.45,.34,-.24,-.06,.29,-.08,.49,-.08,.32,-.3,.48,.46,-.4,.43,.21,-.01,-.46,.59,-.12,.08,.46,.43,-.41,-.34,.39,.52,-.1,-.1,-.29,-.03,.32,-.15,-.33,.25,-.35,.38,.13,.47,.31,.54,0,-.05,-.13,.69,.54,.47,-.17,-.08,-.17,.08,.14,.15,-.07,.53,-.11,-.11,-.36,.15,.11,.02,-.07,-.38,.33,-.35,.41,.06,-.32,.26,.13,.2,.13,-.14,.06,.71,-.05,.52,.51,.07,-.37,.01,-.14,-.39,-.1,.17,-.09,.52,-.26,.21,-.09,.47,.27,-.01,.11,-.12,.49,.42,.14,-.51,-.15,.09,.36,.28,.25,.48,.21,.01,.05,.2,.75,-.25,-.64,.63,.19,.23,.42,-.53,-.05,-.18,-.26,-.18,.49,.65,-.05,-.02,-.17,-.14,-.44,-.25,-.22,.48,.46,.28,.24,.1,.42,-.62,.04,-.24,.03,-.51,.04,.07,.24,.07,-.28,.15,.6,.24,-.1,.15,.04,.01,-.22,-.11,-.01,.33,.51,-.1,.06,-.13,-.11,-.39,-.2,.3,.36,-.13,-.15,-.52,-.18,.31,-.15,.2,.1,-.12,.02,.01,.49,-.12,-.13,-.37,-.53,-.04,-.36,.21,-.28,-.29,.03,-.25,.18,.22,.14,.06,.47,-.23,.31,-.19,-.05,.65,.49,-.49,.09,.38,-.21,-.51,-.16,.16,.44,.49,.76,.11,-.14,-.12,-.26,.3,.37,.04,-.25,-.27,.72,-.11,.13,.04,.04,.37,.05,.1,-.28,-.01,.2,.33,-.03,.08,.69,-.03,-.3,.56,-.24,.53,.5,-.08,-.08,-.13,-.07,-.24,.73,-.49,.5,-.02,-.29,-.11,-.01,.03,.35,-.2,-.48,.18,.6,.62,.43,.31,-.29,.22,-.04,-.06,-.2,.24,.12,-.06,.47,-.02,-.14,.35,.34,-.31,-.02,-.42,.25,.4,-.08,.24,.32,.08,-.13,-.29,.5,-.03,.22,-.29,.52,-.12,-.02,-.06,-.01,-.48,.45,-.01,-.07,-.14,-.06,.04,-.1,.08,.55,-.29,-.32,.56,-.25,-.35,.05,.56,-.06,-.34,.41,.67,.14,.15,-.08,-.04,-.01,.5,-.32,.24,.65,-.37,-.3,.04,.11,.13,.05,.38,-.08,.26,.15,-.39,.39,0,.31,.38,0,-.3,.35,0,.46,.38,-.33,.4,.35,.3,.31,-.34,-.18,.29,.14,.32,.04,.4,.42,.02,-.3,.42,.39,.38,.26,.27,.01,.35,.24,.08,-.37,.34,.03,.82,-.02,.35,.41,.56,.47,-.07,.22,-.21,.14,.16,.81,-.47,.05,.4,.3,.34,-.16,-.12,.26,.4,.52,.48,.16,.14,-.16,.18,-.43,.55,-.26,.17,.6,.08,.2,.26,.18,.71,.44,.02,.06,.56,.03,-.04,.4,-.15,.06,.3,.09,-.14,.29,.13,.43,.08,.57,-.1,.05,.11,-.06,-.1,.12,.18,.16,.57,.11,.49,0,-.01,-.15,-.19,.43,.41,.28,.39,.49,-.34,.13,-.17,-.17,.38,-.07,-.2,.35,.27,.43,-.31,.41,-.36,-.06,.1,-.24,.2,-.3,.04,.46,.44,.3,.35,-.27,.53,-.01,.24,.16,-.42,.12,.24,-.52,.4,.02,.39,.11,.46,.26,.1,.5,-.07,-.18,.42,-.11,.03,.55,-.09,-.29,-.01,-.04,-.09,-.04,.06,.35,.51,.77,-.57,.37,.67,.63,.58,.51,.51,.05,-.21,-.39,.43,.03,-.15,.1,-.1,-.02,-.04,.47,.5,.4,-.08,.7,.28,.11,.29,.36,.46,.33,.13,-.11,.23,.12,-.06,-.08,-.11,.51,.19,.23,-.33,.17,-.12,.36,-.05,-.05,-.31,-.03,.43,-.12,.51,.19,.44,.37,.08,.34,.41,.56,.22,.23,.04,.37,-.47,-.09,-.33,-.25,.05,-.43,.01,-.01,-.13,.17,.33,.29,-.16,.67,.52,-.4,.42,-.29,.16,-.08,.11,.42,.49,.51,.36,.25,.47,.11,.28,.11,.06,-.07,.54,.52,.49,.06,.14,-.11,.18,.3,.48,.42,-.35,.3,.31,-.1,.56,-.01,0,-.02,.35,.58,.36,.44,.57,.6,.38,.05,.31,0,-.07,.38,-.41,-.17,-.39,.42,.56,.31,.15,-.3,.24,-.16,.47,.03,-.06,.12,-.12,-.09,-.09,.57,-.6,-.05,-.21,.36,-.11,.45,-.09,-.54,.36,.07,-.12,-.17,.6,.11,-.4,.42,-.29,-.18,.35,-.29,-.58,-.03,.23,.46,-.18,-.49,.38,-.07,.37,-.17,.63,-.11,.53,.03,.63,-.1,-.2,-.21,.08,.47,.11,-.1,-.02,-.67,-.14,-.05,.42,.52,.36,.39,-.21,.28,.33,-.17,-.1,-.01,-.02,.04,.5,.42,-.17,.55,.48,.16,-.18,-.03,.39,.59,.31,-.52,.21,.01,.32,.09,-.03,.19,.36,-.13,.08,.44,-.11,.32,.49,-.41,-.06,.37,-.1,.16,-.11,.59,-.14,.69,-.35,.01,-.23,-.01,.64,-.09,-.08,0,-.3,-.08,.63,.49,.49,.12,.5,.61,.53,.45,.4,-.14,-.23,.06,.51,-.34,.45,0,-.04,.1,.61,.48,-.46,.63,.16,.43,.49,.28,-.11,.06,-.06,-.11,-.06,.2,.02,.44,.47,.38,.45,-.03,.21,-.02,.34,.48,.15,.08,.33,.39,.66,-.15,.01,-.38,-.14,.55,.24,.46,-.2,.56,.02,-.14,.39,-.42,.53,.33,.52,.15,.49,-.07,.34,.37,-.26,.21,.5,.51,.5,.61,.56,.7,.01,.62,.48,-.1,.06,.62,.6,.61,.56,.58,-.32,.3,.72,-.22,-.27,.66,-.06,.47,-.43,-.01,.34,.3,.62,.57,.09,.15,.38,-.5,.5,-.19,.23,.29,.38,-.33,.29,-.04,.25,-.11,.03,.31,.38,-.28,.46,-.07,.15,.29];export{a as rvalData};
