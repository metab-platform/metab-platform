const a=[-.1,0,0,-.08,.03,.19,.1,.46,.35,.02,-.19,-.1,.03,-.19,-.18,.04,-.18,-.1,0,.11,-.1,-.44,.31,-.29,.14,.26,-.51,.07,.03,-.56,.36,-.34,.07,-.09,-.18,.16,-.05,-.05,.24,.03,-.11,.15,-.03,.01,.22,-.09,-.18,-.23,-.54,.77,.14,-.04,-.12,.24,.58,-.06,.12,.18,.27,.01,.46,.16,.45,-.07,-.36,-.64,.29,-.18,-.1,.04,.06,-.13,.6,-.33,.06,-.11,-.16,.46,.24,-.63,-.14,-.02,.11,.2,-.15,-.34,.18,.04,-.18,.23,.36,.09,.65,-.04,-.21,.33,-.18,-.32,.01,.51,-.11,.41,.54,-.08,.7,.09,-.14,-.02,.16,.53,0,.63,.22,-.22,-.03,.05,-.05,-.58,-.21,.25,.14,-.27,-.05,.07,.08,.62,.09,0,-.6,-.01,.68,.29,.13,.71,-.31,-.01,.56,.5,-.55,-.16,.29,-.08,.38,.18,-.01,.18,.04,.04,.48,.08,.38,.42,.13,-.01,.59,.37,-.18,-.22,-.23,-.13,.48,.58,.06,.49,.6,.48,.03,-.67,.48,.18,-.05,-.63,.51,.22,.35,-.49,.15,-.49,.62,.08,-.1,-.09,.08,-.12,.54,.4,-.07,-.07,.45,-.2,-.01,.6,0,.56,.44,.15,.5,.3,-.21,-.29,.11,.37,.04,-.02,-.12,.33,.06,.79,.65,.17,.59,-.15,-.07,-.02,.15,.24,.13,.54,-.55,-.22,.54,.61,.37,.17,.41,.03,.68,-.53,.45,.3,.02,.02,-.04,.1,.07,-.07,-.25,-.22,.26,-.14,.54,-.2,.5,.45,.53,.38,-.1,.25,-.1,-.11,.5,-.18,.58,.24,.23,.03,.07,.29,.2,-.06,-.01,.29,.5,.28,.16,.67,-.39,.31,-.14,.09,-.21,-.11,.05,.22,.31,.08,-.53,.57,.21,-.52,.61,-.39,.11,-.03,.68,.3,-.36,-.06,.61,-.23,.35,.63,.17,.4,.63,-.02,-.16,-.21,.24,.55,.04,-.06,-.38,0,-.03,.14,.27,.62,.43,-.23,.09,-.02,.09,-.04,.19,.54,.73,.4,.18,.37,.27,-.04,-.17,.33,.65,.7,.16,-.01,.16,.71,-.13,.38,.1,-.03,-.55,-.14,-.76,.43,.05,-.07,.63,-.09,-.04,-.03,-.01,.14,.05,.61,-.01,.52,.53,.43,-.03,.68,-.13,.15,.32,-.19,.31,-.05,.12,.12,.6,.01,-.01,.01,.17,.01,.21,-.08,-.42,-.14,.32,.42,.26,.51,-.11,.27,-.12,.54,-.15,.09,-.16,.11,.16,.3,-.25,.02,.26,.17,.31,.13,-.05,.21,.1,-.03,-.45,.05,-.04,.1,-.23,.36,.26,.44,.51,-.02,-.12,.35,.58,.38,.22,-.13,.09,.35,.31,-.07,.32,-.08,.62,-.03,.13,.12,-.42,.19,.11,0,-.01,.07,.4,.31,.54,.45,.24,.07,.65,.04,.04,.22,.06,.38,.51,.2,.28,-.12,.47,.44,-.08,.22,.13,-.46,.35,.69,-.21,.28,-.06,.06,-.4,.02,.35,.31,.22,.27,-.16,.52,.18,.34,-.05,-.06,-.32,.23,-.03,-.04,-.07,-.26,.61,.21,.21,.44,.14,-.42,.51,-.07,.2,.58,.42,.31,.62,.33,-.23,.09,-.03,-.08,.38,.13,.07,.08,.71,-.07,.15,.5,.56,.05,.36,.12,.26,.13,-.05,.31,.02,.4,.39,.31,.22,.25,.41,-.44,.22,.74,.57,.26,-.36,.03,.2,.18,.21,-.1,.14,-.03,.26,.22,.81,.71,.09,.54,-.07,.19,.52,.17,.29,0,0,.41,.1,-.41,-.46,-.06,.18,-.37,.3,.09,-.42,.03,.1,.08,.24,.05,-.31,.22,-.29,.05,.28,-.39,.41,.62,-.01,.09,.16,-.05,.34,-.11,.25,.1,.16,.18,.18,-.06,.02,-.16,.53,.01,-.53,-.13,.5,.37,.79,-.21,-.04,.32,-.41,-.05,.02,.04,.08,.29,.6,-.22,.34,.03,.3,.3,.08,.08,.04,.47,.01,-.52,.46,-.24,-.15,.08,-.08,-.09,.34,.58,.26,.14,-.03,.39,-.12,-.15,.49,.16,.52,.07,.53,-.31,.08,.32,.41,.41,.04,-.33,-.14,.63,.3,.66,.19,.54,.42,-.39,.24,.07,-.4,.02,.03,.31,.33,.32,.23,.83,-.3,-.35,.53,.05,.2,.06,-.04,-.2,.07,.1,-.06,0,.11,.31,.12,.01,.01,.45,.32,.13,.45,-.16,-.07,-.53,.5,.34,.52,.08,-.19,-.05,.06,.22,-.22,.23,.38,.12,-.16,.26,.26,.49,-.1,-.1,.28,.16,-.02,.43,-.14,.15,.33,-.18,.22,.5,.52,.03,.05,-.14,-.2,-.03,-.09,-.48,.33,.41,.28,.44,.21,-.1,.34,.2,-.01,-.09,.48,.35,-.05,.03,-.02,-.1,-.08,-.48,-.22,.31,-.35,.5,.17,-.03,.63,.61,-.08,.02,0,.19,-.03,.13,-.25,-.44,.07,-.09,.42,-.07,.35,.48,-.21,-.05,-.22,.09,.2,.22,.18,-.41,.13,-.19,-.16,-.54,.18,.44,-.31,.04,.38,.21,-.34,.09,.34,.41,.11,-.05,.6,-.19,.74,.45,.06,.39,.09,-.07,-.03,.33,.14,.54,.58,.45,0,-.3,-.48,.36,.53,-.17,.16,-.63,.1,.32,-.04,.47,.3,.07,-.18,.32,-.02,.45,.33,-.19,.27,-.03,.03,-.08,.18,-.44,.34,.49,-.09,-.64,-.17,0,-.26,.08,.63,.13,-.05,.01,-.12,.34,-.28,-.21,.15,.03,.42,-.02,-.01,-.14,-.09,.61,0,-.43,.23,.01,.18,.57,-.4,.32,-.04,-.43,.61,-.13,.17,-.6,.44,0,-.11,.25,.27,.34,.68,-.22,.52,.07,.24,-.05,.26,.36,-.36,0,.27,.51,.18,-.02,.13,.6,.35,.29,.03,.47,-.1,0,-.48,.17,.03,.27,-.02,.19,.53,.28,.23,.36,.29,.13,-.05,.63,.17,.09,-.2,.05,.18,.13,.31,-.04,.01,-.12,-.1,.11,-.16,.67,-.2,.66,-.04,-.44,-.43,.08,.33,.31,.07,.42,.55,-.07,.38,-.09,.09,.03,.23,.05,.05,-.05,.3,.3,.6,.01,-.06,.12,.12,-.11,.7,0,.35,.2,-.32,.31,.32,.19,.17,.13,.48,.14,-.12,-.28,.46,.06,.36,.22,.57,-.09,.23,.03,.16,.22,.16,.08,.24,.12,.39,.05,.03,.41,-.11,-.02,-.27,.14,-.34,-.17,.32,.07,.65,.64,.64,.3,.2,.51,-.53,.56,.48,.54,.32,-.13,-.15,.62,.58,.5,.77,.45,0,.57,-.15,.15,.01,.16,.05,.01,-.01,-.03,-.18,-.4,-.25,-.16,-.14,-.1,-.16,.46,.6,-.3,.45,-.11,.34,.15,.27,-.07,.24,.16,-.01,.54,-.09,.43,.29,-.05,-.08,-.22,.6,.03,.06,.63,.11,.57,-.02,.47,-.01,-.07,.42,-.04,-.31,-.01,.04,.59,-.16,.02,-.17,.15,.52,.22,.1,.57,.14,.02,-.23,.15,.35,.15,-.37,-.22,.16,.02,.49,.39,-.7,.34,-.02,.01,.48,.38,.37,.02,.03,.26,.04,.54,.22,.11,-.07,-.26,-.09,.12,.5,-.3,.04,.03,-.4,.29,.01,.04,.17,-.25,.08,.52,.64,.37,.28,.15,.44,-.22,.43,.17,.05,.3,-.08,.14,.28,.18,.01,.64,.65,.07,-.43,-.25,.02,.02,.48,.09,-.34,-.2,-.29,-.06,-.06,-.07,.04,0,.31,-.07,.38,.17,.04,.01,0,.02,.29,.39,.03,.24,.14,-.27,-.05,.05,.32,-.02,.04,-.1,.08,-.01,.04,-.06,.41,.28,.06,.54,-.05,.41,0,-.11,.2,.29,-.02,.55,.17,0,.19,.15,.45,.32,.69,-.28,-.14,.64,.67,-.14,-.1,-.09,.19,.05,.55,.06,.07,.45,-.22,-.07,.01,-.09,-.3,.1,.11,.35,.25,.23,.2,-.22,-.06,.38,.41,-.43,-.5,.45,-.1,.26,.55,.51,.27,.1,.17,.67,.12,-.39,.04,.29,.13,.56,-.16,.23,.11,.22,.1,.15,.35,-.02,-.01,.28,.06,-.48,.32,.22,-.64,.33,.42,-.06,-.02,.3,.36,-.01,-.08,-.04,-.1,.2,.14,.02,-.01,-.04,-.29,.07,.2,-.06,.41,.07,.15,.24,-.19,.12,.58,-.11,.46,.43,-.23,-.01,.12,.52,-.25,.57,-.54,-.59,.58,-.18,.25,-.01,.53,-.35,.31,.48,.03,-.25,.37,.02,.56,.18,.3,.62,.09,-.13,-.03,-.12,-.08,-.03,.3,.12,.34,.56,.26,.67,.26,.32,.19,.64,.15,.4,.02,.13,-.09,-.16,.41,.38,.03,-.16,.76,-.08,-.04,.37,.26,.1,.33,.36,-.03,-.08,.41,.33,.01,.03,.48,.5,-.01,.24,.33,-.44,-.08,.18,.43,.24,.06,-.32,.54,-.17,.09,.39,.37,.11,-.04,-.18,.46,.3,-.19,.6,-.18,-.11,.69,.81,.6,.58,.36,.71,.65,.75,.29,.81,.54,.45,.14,.42,.3,.51,.5,.75,.18,.02,-.07,.46,.69,.1,.69,.19,.28,.35,.22,.31,-.18,.41,.48,-.09,.62,.26,.31,-.01,.7,.55,.36,.63,.49,.75,-.04,-.15,.55,-.14,-.01,-.27,.63,-.11,-.47,.07,.56,-.19,.11,.61,-.53,-.01,.34,.14,.25,.37,.07,-.11,.32,-.28,.23,-.01,-.09,.01,-.18,.3,-.26,-.05,.1,-.11,-.04,.07,-.14,.26,.45,.39,.19,.19,-.02,-.18,.58,.17,.4,-.05,.4,.2,-.05,.7,-.08,-.17,.08,.45,-.16,.08,-.02,.25,.19,.25,.24,.49,-.16,.11,-.08,.43,.02,-.37,.66,.54,.1,-.09,.17,.49,.61,-.23,.33,-.41,.46,-.1,.58,.62,.71,.16,.55,.6,.17,.5,.63,.49,.72,.34,.11,.53,.54,.28,.6,.67,.08,.12,-.02,.11,.08,.32,-.11,.17,.12,.53,-.27,.73,.04,.57,.24,-.08,.32,-.02,-.43,.77,.22,-.03,.17,.04,.42,.01,.32,.41,.56,.31,-.03,.04,.2,-.1,-.01,-.62,.23,.37,1,.45,.57,-.04,.38,.27,.61,-.01,.25,.61,.3,.57,.28,.3,.38,.53,.28,-.15,.37,.14,.55,.44,-.14,.39,.43,-.21,.4,.32,-.05,-.13,.34,.32,.54,.65,.3,.49,-.23,-.09,.22,.23,.34,.43,-.01,.21,.86,-.56,.79,-.16,.32,.14,.38,.23,.61,.56,.71,-.39,.14,.1,.31,-.35,-.23,.76,.15,.56,-.11,.76,.12,-.02,-.16,.28,.2,.68,.25,.1,-.07,-.18,.05,.58,.53,.08,.22,.16,.39,.49,.58,.55,.81,.52,-.02,.44,-.06,.67,-.03,.77,-.03,-.09,.12,.35,.02,.17,.49,-.13,.83,-.04,.69,.39,.38,.47,.39,.28,.35,-.02,.4,.67,.48,-.1,-.14,.36,.57,.32,-.07,.31,.31,-.05,.66,.6,.61,.68,.12,-.05,-.07,.34,.18,.32,.04,.78,.73,.72,.06,.66,-.11,.33,.56,.04,.45,.16,.06,.58,-.05,.26,-.15,.42,-.13,.61,.26,-.22,.56,.64,-.18,.61,.22,-.26,.15,.18,.09,-.16,.5,.37,-.31,-.11,.35,.33,-.01,-.13,.05,.03,.27,-.07,-.3,-.09,.52,.51,.73,-.03,.1,-.23,-.18,-.02,.46,-.5,.49,-.18,.31,.27,.33,-.18,-.08,.02,-.18,.46,.51,.19,.29,.36,.53,.48,.71,.26,-.06,.32,-.01,.11,.38,-.21,.06,.03,.09,.03,.01,.61,.16,.44,-.53,.03,-.02,.14,.12,-.01,.43,-.25,-.15,.21,.02,.13,.1,-.13,.56,.54,.27,.08,-.09,-.07,.17,.45,-.56,-.52,.02,.25,-.03,.13,-.13,-.23,.54,.05,.51,.73,.08,-.15,.33,.05,.42,.5,.77,.29,0,.56,.22,.24,.32,-.52,-.03,.17,.13,.17,.69,.03,.47,-.01,.33,.06,-.06,-.07,.36,-.06,.49,-.06,-.15,.22,.43,-.06,.38,.23,-.04,.52,.41,.43,-.03,.5,.09,.18,.03,.05,.1,-.03,.03,-.1,.15,.47,.45,.23,.11,-.08,.25,.34,0,-.19,-.09,-.26,.04,.05,.48,.43,.39,.17,.23,.36,.17,-.08,0,.3,.23,.54,.56,.58,.32,.36,.1,-.02,.3,-.17,.01,.69,.62,.76,-.03,.07,.28,-.12,-.08,.17,-.08,-.09,.55,.57,.14,.35,-.13,-.39,.19,.76,.09,-.02,-.03,.15,.3,-.05,.23,.38,.26,.05,.24,.18,.24,.2,-.59,.46,.69,.67,.57,.24,-.25,.06,-.28,-.08,-.23,-.04,.3,.07,.14,.55,.08,.6,.03,-.17,-.04,.41,-.39,-.07,.4,-.03,.02,.04,.27,.1,-.1,0,.35,.22,-.04,.06,.15,-.47,.05,-.03,.04,.3,.2,.28,.26,.52,.18,.51,-.29,-.03,-.07,-.12,.14,.2,.35,.04,.08,.3,-.06,-.17,.59,-.12,.3,-.53,-.1,-.22,.05,.24,-.03,.18,.06,.64,-.02,.69,.29,-.37,.48,.12,-.06,.35,-.03,.39,-.11,-.23,.58,0,-.16,.21,.37,.15,.44,.36,.39,-.26,.17,.22,.04,-.12,.51,.09,.32,-.03,.58,.08,.08,.2,.48,0,.17,-.09,-.53,-.01,-.37,.44,-.25,-.01,.15,.16,.09,.17,.53,.39,.07,.31,-.19,.05,0,-.05,.34,-.07,.4,.36,.14,.38,-.35,.07,-.48,.51,.1,.46,.1,.38,.41,-.02,-.59,.1,-.22,-.31,-.13,.48,.14,.14,.03,-.01,.21,.65];export{a as rvalData};
