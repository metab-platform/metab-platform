const a=[-.25,.35,.35,-.06,.59,.06,.16,.22,.2,.25,.19,-.04,.01,-.46,.25,.02,.18,.1,-.1,-.06,-.04,-.39,.04,.09,.33,.64,-.45,.16,.33,-.34,.46,-.44,.58,.11,-.25,.05,.46,.16,.34,.46,.05,.7,.38,-.05,.04,.13,-.05,-.09,.06,.3,.21,0,.21,.38,.44,.21,.23,.17,.43,.48,.35,.7,.54,.12,.39,-.27,.63,.17,.13,-.16,-.09,.44,.43,-.15,.61,-.06,-.1,.31,-.02,-.15,-.43,.49,-.24,.7,-.14,-.51,.62,-.05,-.51,.14,.36,.15,.21,-.21,-.04,.13,-.48,-.19,-.03,.43,.06,.47,.37,.04,.46,.06,-.08,-.09,.55,.37,0,.46,.08,-.17,-.16,.49,-.22,-.22,-.19,.41,-.06,-.16,.25,-.01,.26,.42,.49,-.2,-.27,.54,.08,-.17,-.21,.29,.22,.07,.41,.23,-.3,-.17,.75,-.03,.75,.63,-.03,-.04,.03,.17,.45,-.25,.44,0,-.06,.07,.2,.27,.35,.04,-.14,.17,.21,.44,.05,.24,.2,.29,.39,-.32,.05,.51,.02,-.17,.19,.2,.5,-.34,-.1,-.21,.32,.51,-.17,.09,.04,.33,.56,.01,-.06,.14,.27,-.14,-.07,.12,-.06,.5,.58,.32,.44,-.14,-.07,-.42,.06,.45,.56,.03,-.18,.47,.22,.36,.29,-.02,.13,.32,-.1,.45,.14,.38,-.12,.24,-.36,-.24,.36,.37,.25,.43,.46,.56,.13,-.31,.2,.27,.01,0,.5,.19,-.01,.05,.27,.05,0,.1,.56,.24,.27,.4,.25,.03,.02,.19,.09,-.06,.08,-.05,.46,.17,.68,-.09,.14,.18,.13,.27,.06,.36,.07,.72,.22,.41,-.16,.66,.14,.48,-.12,-.22,.51,.25,.37,.02,-.11,.34,.35,.05,.41,-.18,.05,-.19,.34,.38,-.21,.51,-.05,-.26,-.05,.38,.64,.01,.05,.38,.19,-.44,.07,.18,-.09,.48,-.35,-.15,.05,.5,-.11,.57,.28,.12,.77,.06,-.26,-.06,.07,.18,-.05,.38,.23,.2,.74,-.08,.2,.6,.12,.39,.66,.07,.02,.37,-.31,.52,.26,.06,-.21,0,-.16,.44,.04,-.46,.54,.36,-.17,-.03,.45,.36,.08,.43,.37,.57,.59,.14,.18,.36,-.09,.01,.32,-.03,.28,.31,.32,.11,.35,-.12,-.01,-.47,.2,.53,.45,.25,-.04,-.11,.2,-.04,.28,.17,.41,.59,.05,.39,.16,-.06,.15,.1,-.05,.21,-.18,-.02,.41,.59,.28,-.07,.04,-.01,-.02,.48,-.39,-.16,.09,.22,-.13,.3,.27,.32,.32,.02,.23,.33,.42,.45,.23,-.31,.08,.29,.13,.08,.68,.32,.42,-.12,.01,.45,-.02,-.11,.08,.56,.53,-.1,.46,.08,.16,-.11,.4,.06,.19,.42,-.2,.64,.59,.38,.54,.67,.79,.07,.27,.36,.49,.65,.1,-.29,.2,.41,-.62,.21,-.14,.08,-.3,.57,.13,.37,.34,.58,-.36,.37,-.04,-.1,-.19,-.07,-.43,.34,-.07,.51,.3,.02,.47,.45,.33,-.03,.34,-.25,.51,.37,.43,.25,.3,.32,.18,-.03,.35,.12,-.03,-.07,-.24,.07,.49,.55,.02,-.09,.28,.23,.45,-.01,.34,.33,.63,.04,.25,.28,.52,.45,.56,.3,.76,.2,.33,-.19,.21,.16,.36,.5,-.06,.48,-.01,-.13,.44,-.05,.33,.13,.01,.62,.18,.04,-.04,.26,.05,-.01,.29,.15,-.05,.03,-.07,.4,-.15,-.08,-.11,-.03,.19,-.1,.33,.28,-.15,.55,.43,.17,.67,-.14,-.34,.41,-.31,.07,.31,-.28,.52,.01,.01,-.11,-.07,-.03,.26,-.05,.25,.27,-.07,.11,.54,.46,-.11,-.43,.4,.19,-.12,.22,.58,.34,.29,.36,.49,.54,-.05,.45,-.13,.03,-.05,.41,.1,-.48,.24,.39,.33,.15,.28,.57,.41,.24,.35,-.44,.42,-.08,.18,.19,.12,.41,-.06,.11,-.06,-.12,.5,.01,-.01,.17,-.06,.18,.1,-.07,.26,-.18,.41,.33,.56,-.02,-.12,-.26,-.23,.29,.01,.22,.45,.35,-.09,-.38,.32,.61,-.37,.07,-.1,.69,.09,.62,-.04,.27,-.04,-.5,.36,.52,.45,-.02,.04,-.14,-.09,-.06,.5,.38,.59,.4,.13,.08,.08,.32,.62,.62,.3,.03,-.04,-.34,.3,.21,.49,.54,-.16,.16,0,-.04,.52,.46,.11,.35,-.28,.71,.58,-.14,-.02,-.09,.17,-.14,-.1,-.25,.2,.19,.27,-.38,.72,.15,.37,.43,.09,-.15,-.01,.08,-.04,-.42,.48,.31,.25,-.05,-.25,-.13,.13,.05,-.16,-.14,.13,.45,.41,0,.52,.33,-.31,-.53,-.15,.22,-.28,.22,.57,-.17,.47,.38,.49,-.11,.09,.02,.19,.12,-.5,-.13,-.06,-.26,.33,.4,.24,.57,-.09,-.13,-.17,.57,.4,-.02,-.13,.13,.48,-.14,-.01,-.34,.44,-.11,.2,.17,.5,-.09,-.08,.17,.18,.38,.54,.06,.48,-.25,-.01,.14,.63,.48,.31,-.18,-.05,.7,.14,.41,.51,.27,-.06,-.44,-.32,.31,.26,.09,.65,-.33,.45,.78,-.1,.3,.05,.2,-.19,.45,.29,.49,.24,-.19,.48,0,.07,.06,.59,-.27,.54,.39,-.35,.01,.11,.6,.02,.19,.03,.39,-.04,.53,-.02,.2,.02,-.11,.14,.57,.17,-.17,.03,-.22,-.24,.04,.15,-.42,.43,.49,.01,.32,-.36,.31,-.04,-.22,.55,-.03,.02,-.28,.39,-.09,.07,.27,.43,.36,.13,-.16,.5,.57,-.16,-.18,.02,.28,-.35,.1,.6,.2,.09,.12,.03,.48,.12,.42,.22,.14,-.01,.08,-.34,.23,.14,.65,.4,.04,.16,.3,.63,.16,.68,-.39,-.33,.4,.61,-.04,-.38,-.09,.26,.52,.01,-.05,.12,0,-.1,.48,.18,.37,0,.27,-.12,-.16,-.35,.12,.45,.37,-.04,.31,.24,.08,.11,-.12,-.14,.31,.63,.46,-.03,.51,.41,.43,.11,.38,.36,.61,.71,-.4,.29,-.03,.32,.61,-.02,.08,.23,.67,.36,.11,.16,.37,-.01,.29,.25,-.17,.3,-.13,.35,.26,.66,.1,.64,-.14,.54,-.12,.26,-.08,.48,.19,.12,-.07,-.35,-.15,-.04,.01,.02,-.36,.57,-.2,-.09,.16,.33,.34,.52,.19,-.32,.23,-.01,.18,.17,.17,.07,.09,.53,.12,.34,.07,-.14,.44,.01,-.04,.14,0,.05,.04,.07,0,.19,-.16,.01,.18,-.1,.05,-.07,.47,.11,-.14,-.04,-.08,.33,-.1,.01,.1,.65,.03,.41,.47,.13,.27,.55,.1,.11,.06,.28,-.07,.19,.35,.01,.5,.52,.04,.23,-.03,.24,.48,-.33,.11,-.06,.47,.11,-.13,-.14,.28,.17,.34,.16,-.04,.26,-.35,-.17,.19,.15,.54,-.16,.08,.02,.44,.31,.38,-.33,.2,.31,.02,.43,.35,.31,.32,-.11,.51,.3,.24,.53,.54,0,-.41,.04,.08,.33,.07,.11,-.05,-.36,.61,0,.05,.49,-.38,.04,.53,.03,.35,.56,.57,-.1,-.26,.13,.3,.39,.4,.48,-.1,.44,-.08,-.14,.42,.32,.01,-.16,-.18,-.11,.44,.34,.61,-.27,.26,-.18,.05,-.31,.16,-.09,.06,.39,-.08,.3,.61,.54,-.04,-.09,.57,.56,.17,.02,-.09,.62,-.25,.04,.3,.69,-.03,.54,.15,.25,.13,.01,-.18,.32,.33,.01,.38,-.05,.38,.16,-.05,.33,.27,-.07,.32,.46,.3,.51,.45,.29,.71,.1,.08,-.52,.35,.38,.14,.45,.16,.44,-.03,.25,-.15,-.08,.11,-.17,.01,.59,.47,.34,.14,.19,-.13,-.37,-.07,.47,.06,-.1,.35,.53,-.28,-.11,.27,-.09,.47,.34,.56,.04,.22,.2,.15,.36,.09,-.25,.22,.27,.21,-.01,.72,.33,.29,0,.7,.05,-.02,-.03,.48,-.07,-.18,.4,.39,-.19,0,.43,.17,.5,.23,.29,.05,.06,-.05,.49,.65,.27,.11,-.01,-.15,-.04,.24,.69,.21,.52,-.2,.04,.44,.1,.09,.4,-.24,.19,.36,-.46,.48,.11,.13,-.07,.06,-.44,-.33,.27,.06,.31,.14,.43,-.12,.04,0,.34,-.19,.26,-.01,.57,.07,.11,.12,.15,-.04,.48,-.01,-.12,.18,-.09,.67,.63,.51,.16,.2,-.15,.35,.57,.36,.54,.28,.18,.07,.11,.17,.28,.19,.55,-.24,.15,.55,-.42,.31,.15,.12,.34,.21,.5,-.02,.3,.11,-.08,-.09,.25,.07,.2,.64,.12,-.11,-.04,.54,-.01,.73,.18,.3,-.04,.02,-.13,.62,.28,-.14,-.21,.4,-.26,-.07,.01,.54,-.02,.04,.3,.05,.1,.24,.07,.15,.31,.45,.04,.13,.13,.45,-.09,-.15,-.03,.05,.49,.46,-.15,-.58,-.4,-.21,-.02,.1,.41,-.29,-.13,-.07,.34,-.25,-.18,-.14,-.02,-.01,-.02,-.09,.08,-.04,.47,.34,.13,.07,.55,.48,.54,-.23,.3,.19,.53,-.09,.36,.03,-.04,.39,.18,.16,.26,.44,-.29,.08,.56,.6,.07,.14,.17,.41,.1,-.24,.14,-.11,.2,.22,-.1,.3,.05,.12,.47,.04,-.28,.52,-.12,.22,.44,.52,.62,.64,.15,-.11,.38,-.03,.51,.18,.19,.65,-.06,0,0,-.19,.13,-.11,-.19,.32,-.03,.39,.6,.6,.52,.17,-.22,.01,-.12,.19,.08,-.45,.33,.33,.34,.12,-.22,-.05,.42,-.01,-.26,-.28,.35,-.22,.49,.06,.43,-.01,.13,-.09,-.1,.36,.07,.18,.42,-.32,-.02,.5,.03,.31,.3,.16,-.01,.8,.02,-.04,.01,.1,.21,.19,.57,.45,-.02,.21,.56,.42,.32,.31,.27,.16,.11,.36,-.02,.05,.66,-.06,.34,.17,.45,.46,.5,.09,-.27,.32,.74,-.1,.13,-.38,.22,.33,.08,.36,.29,-.1,.46,.45,.52,.5,.61,.43,.26,.51,.53,.48,.08,.22,.58,-.34,.74,.27,.6,.34,-.1,.46,.64,.18,.5,.72,.1,-.33,.26,.52,.32,.27,.51,.37,.16,.08,.6,.28,.39,.6,.02,.35,.09,-.33,.33,.19,.21,-.1,.34,.43,.31,.33,.27,.48,.41,.44,.64,-.01,-.22,.23,.24,.5,.41,.24,.09,.41,.21,.48,.41,.07,.28,.39,-.19,.13,.17,.23,.5,.36,-.05,.1,.59,.15,.48,.63,.14,.58,.15,.53,-.16,.39,-.01,.06,.11,.05,-.02,.63,.23,.08,.18,.21,.32,.07,.23,.34,.44,.64,.46,.72,.25,.17,.09,.35,.02,.04,.07,.68,.37,.63,.3,.32,.24,-.07,.19,.11,.45,.17,.03,.56,.52,.57,.57,.22,.24,.3,.34,.4,-.21,.61,.12,.13,.58,-.23,.37,-.22,.31,.4,.02,.66,-.1,.21,.17,.27,.17,.22,.32,.02,0,.13,.09,-.03,-.01,.67,.48,.16,.1,.62,.06,.27,.48,.56,.61,.02,.04,.42,.66,-.07,-.29,-.13,.3,.28,.18,.52,.26,.13,.02,.47,.19,-.24,.33,-.19,.56,.17,.23,-.15,-.37,-.07,.01,-.06,.37,.18,.65,.11,.18,.41,.36,.63,.04,.16,-.03,.04,.31,-.22,.28,.45,.51,.53,-.03,.28,.13,.54,-.29,.05,-.02,.49,-.29,-.01,.3,-.46,-.16,.04,-.12,-.07,-.14,.09,.33,.33,-.05,.51,.46,.16,.21,-.16,-.38,-.39,-.06,.47,.51,.63,.29,.11,.11,.27,.31,.48,1,.31,.51,.55,.27,.53,.33,.41,-.34,.28,.61,.46,.42,-.35,-.06,.19,.64,-.03,.42,-.07,.32,.46,.65,.27,.42,.52,.41,.08,.32,.05,-.22,.3,.36,.07,.15,.43,.43,.5,.4,.44,.26,.38,.29,.04,-.03,.05,.1,-.01,-.04,.19,.22,-.09,-.16,.64,-.02,.64,-.25,.35,.02,-.05,-.16,.02,.54,-.17,.38,.07,.46,.36,.81,-.15,-.01,-.32,-.08,.54,-.19,.31,.4,.47,-.04,-.18,.57,.14,.58,.02,.56,0,.46,.42,-.02,.19,.18,.32,-.01,-.4,-.2,-.05,.41,.4,.56,.14,-.03,-.03,.78,.4,.73,.09,-.08,-.13,.59,.46,.05,.19,.68,.32,.62,-.1,.5,.61,-.23,.36,.09,.38,.23,.05,-.25,.23,.21,.09,-.11,.53,-.37,-.21,.65,.23,.02,.42,.05,.07,-.11,.47,-.37,.26,.37,.09,.02,-.13,.08,.27,-.17,-.22,.49,-.2,.48,.6,.17,-.18,.19,.39,.61,.66,.67,.06,.11,.43,.69,.3,-.17,.06,-.01,.05,.55,.65,.22,.38,-.26,-.12,.37,.01,.34,.1,.04,-.26,-.09,-.03,.06,.43,.47,.53,.45,.42,-.05,.44,-.2,-.01,-.28,-.06,-.35,.47,.51,.39,-.12,-.54,.25,.4,.21,.34,.48,.63,.33,.04,.46,-.53,.64,.65,.58,.14,.47,.07,.5,.51,.22,.66,.22,.64,-.13,.54,.68,.32,-.08,.55,.03,.52,-.08,.58,.64,.51,.6,.54,.09,.59,.17,.39,-.4,.58,0,.48,-.19,.05,.55,.34,.56,.44,-.24,-.1,-.24,.27,.4,.31,.48,.3,.58,.17,-.25,-.06,-.33,-.1,.12,.28,-.11,.31,.59,.1,.04,.37];export{a as rvalData};
