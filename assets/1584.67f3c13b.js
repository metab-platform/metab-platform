const a=[-.27,.39,.54,.07,.61,.07,.12,.07,.25,.12,.29,-.01,-.08,-.53,.37,-.05,.12,0,-.17,-.07,-.23,-.22,.09,.12,.4,.6,-.28,.02,.19,-.29,.39,-.34,.6,.23,.09,.02,.48,.21,.21,.52,-.09,.63,.3,-.08,.21,.17,-.24,-.24,-.14,.22,-.08,.12,.13,.5,.51,.12,.21,.23,.31,.5,.29,.61,.55,0,.17,-.14,.64,.23,-.18,-.07,-.15,.21,.31,-.19,.6,.11,-.19,.31,.34,-.17,-.48,.42,-.04,.58,-.18,-.2,.51,.11,-.53,.39,.21,.11,.15,-.32,.06,.07,-.66,-.17,-.06,.38,.07,.58,.48,-.08,.56,.12,-.05,-.07,.52,.59,.01,.21,-.02,-.49,-.08,.59,-.03,-.2,-.33,.42,.03,-.13,.12,-.08,.08,.43,.51,.03,-.18,.51,-.02,-.24,-.08,.13,.09,.04,.16,.34,-.31,.07,.68,.17,.57,.5,.06,.05,-.14,.12,.57,-.13,.57,-.04,-.07,-.18,-.03,.18,.02,-.07,-.25,.28,.19,.69,.05,.29,.16,.34,.39,-.34,.02,.57,.08,-.17,.08,0,.59,-.19,.01,-.16,.29,.53,-.03,.02,.22,.53,.58,.02,.12,.11,.1,-.13,-.18,.14,.01,.54,.68,.53,.64,.27,.03,-.23,-.03,.29,.53,.02,-.46,.5,.01,.38,.24,-.02,-.07,.32,-.08,.42,.22,.09,.07,0,-.24,-.28,.59,.47,.41,.52,.45,.54,.03,-.27,.32,.42,.05,.01,.26,.54,.13,.12,.23,-.11,.17,-.02,.26,.28,-.09,.02,.04,-.23,.15,.19,.14,-.06,.1,-.14,.5,.24,.68,-.09,.06,.39,.14,.53,-.01,.15,.32,.67,.1,.51,-.31,.59,.24,.39,-.09,-.14,.49,.49,.56,.08,-.11,.3,.45,-.13,.29,-.27,.16,-.26,.4,.36,-.31,.44,.24,-.15,.02,.33,.53,-.25,.05,.35,-.02,-.3,.01,.22,-.14,.58,-.21,-.02,.07,.35,0,.48,.24,-.01,.52,-.07,-.18,.05,.37,.21,.18,.12,.51,.29,.58,-.08,.35,.6,.06,.41,.6,.06,.04,.44,-.35,.42,.21,.35,-.26,.03,-.11,.41,-.22,-.27,.28,.38,-.17,-.17,.47,.53,.05,.38,.25,.29,.63,-.05,.16,.41,-.47,.17,.57,-.1,.56,.64,.24,.05,.43,-.11,-.08,-.31,.28,.47,.3,.33,.1,-.24,.18,0,.3,.18,.18,.64,.01,.3,.13,.05,.03,-.04,.05,.35,-.22,.03,.59,.59,.54,-.04,.01,0,-.02,.55,-.44,-.08,.16,.05,-.13,.27,.56,.31,.31,.05,.25,.55,.59,.53,.48,-.41,.11,.54,.2,.13,.67,.52,.32,-.32,.08,.44,-.09,-.07,.2,.54,.56,.28,.37,-.16,-.13,0,.39,-.01,.15,.49,-.31,.6,.56,.6,.72,.56,.55,-.06,.03,.32,.56,.56,-.03,-.43,.02,.38,-.58,.11,-.11,.18,-.23,.58,.24,.35,.55,.53,-.49,.39,.14,.26,-.19,-.19,-.42,.47,-.07,.52,.3,.07,.29,.48,.23,-.08,.55,-.28,.63,.39,.72,.19,.11,.25,.5,-.18,.38,.55,.16,-.02,-.17,-.15,.6,.53,.16,-.13,.4,-.05,.26,.2,.61,.43,.55,-.02,.13,.48,.55,.31,.7,.2,.56,.07,.09,-.09,.19,.06,.38,.64,-.15,.6,.16,-.12,.34,.08,.07,.37,-.22,.43,.24,.17,-.14,-.06,.02,.08,.33,.21,.05,.03,-.33,.23,-.05,-.11,-.2,-.09,.16,-.06,.52,.02,-.3,.53,.5,.5,.47,-.08,-.27,-.12,-.32,-.2,.48,-.03,.29,-.05,.01,-.01,-.05,.03,.27,-.19,.57,.53,.07,-.13,.69,.55,-.15,-.29,.34,.22,-.23,.06,.74,.37,.46,.34,.57,.52,-.11,.48,-.08,-.03,.02,.63,-.01,-.46,.42,.54,.4,-.05,.44,.62,.64,.11,.45,-.24,.17,-.28,-.01,.06,.12,.49,.12,.14,-.05,.04,.58,-.24,-.07,-.06,-.01,-.13,.12,0,.18,-.18,.04,.22,.7,-.29,-.05,-.5,-.32,.33,.28,.37,.51,-.01,-.18,-.24,.14,.52,-.41,-.02,.21,.7,.04,.57,.16,.45,.06,-.55,.1,.55,.48,-.01,.31,-.07,-.08,-.09,.59,.37,.61,.21,.15,-.03,.06,.31,.44,.52,.26,-.01,-.03,-.3,.47,-.08,.55,.59,-.12,.12,.13,.09,.39,.53,.16,.08,-.46,.61,.57,-.01,-.12,-.19,.1,-.12,.1,-.09,.18,.24,.49,-.46,.6,.05,.28,.57,-.06,-.09,-.22,.47,0,-.23,.56,-.07,.14,0,-.01,-.13,-.01,-.03,-.26,0,.01,.6,.42,-.08,.45,.37,-.25,-.32,-.17,.58,-.54,.08,.61,.11,.23,.16,.48,-.01,.05,-.08,.26,.33,-.35,-.13,-.05,-.35,.35,.47,.08,.47,-.13,-.03,-.17,.28,.55,.06,-.01,.17,.42,-.06,.16,-.34,.53,.26,.17,.33,.57,-.05,-.04,.16,.06,.21,.54,.1,.32,-.31,.2,-.06,.57,.23,.57,-.05,-.09,.58,.56,.71,.5,.27,.34,-.17,-.23,.12,.66,.15,.6,-.34,.55,.54,-.3,.49,-.02,.19,-.31,.61,.41,.39,.04,-.05,.27,.02,.04,-.08,.6,-.06,.46,0,-.49,-.2,.34,.58,.09,.09,-.06,.4,-.12,.54,-.01,.26,.13,-.15,.26,.54,.21,-.06,-.03,-.18,-.11,.32,.17,-.26,.46,.45,-.03,-.02,-.27,.59,-.05,-.19,.27,-.11,-.07,-.15,.37,-.21,.09,.19,.22,.17,.15,-.11,.54,.53,-.05,-.35,.07,.16,-.36,.09,.08,-.14,-.22,.11,-.11,.31,.08,.28,.06,.13,-.11,.13,-.21,.21,.11,.61,.43,.05,.23,.23,.69,-.22,.6,-.39,-.45,.48,.52,.25,-.4,-.18,.37,.46,.22,-.09,.14,.03,.04,.31,.08,.22,.01,.14,.05,-.15,-.16,0,.64,.33,-.1,.06,-.05,-.09,.05,-.12,-.34,.33,.7,.6,.02,.54,.7,.2,.13,.49,.4,.61,.47,-.56,.35,.07,.39,.61,-.01,.15,.17,.44,.08,0,-.1,.54,0,-.06,-.1,-.08,.25,-.05,.05,.09,.63,.27,.64,.12,.53,-.21,-.21,-.08,.63,.05,-.08,.16,-.44,-.11,-.13,-.02,.2,-.6,.64,-.26,.13,.35,.22,.46,.54,-.01,-.26,.01,.02,-.07,-.11,-.02,-.01,.37,.24,-.19,.29,-.24,-.02,.28,.06,.12,.25,.07,.22,.29,.12,.14,.36,-.03,-.11,.48,.06,-.02,-.2,.49,.13,-.16,.06,-.2,.11,-.3,.07,-.02,.62,-.06,.48,.51,-.1,.25,.52,-.04,0,-.02,.07,-.07,.15,.4,.03,.34,.46,-.08,.21,-.07,-.03,.54,-.26,.24,-.06,.3,.01,-.41,-.23,.31,.01,.16,.17,.13,.39,-.45,-.22,.08,.1,.53,-.22,-.05,-.01,.39,.24,.41,-.28,.11,.41,-.04,.42,.33,.38,.5,.09,.26,.44,.05,.54,.57,.04,-.22,-.1,-.01,.27,.01,.08,-.26,-.18,.48,-.09,-.07,.57,-.15,.45,.6,-.05,.27,.58,.52,-.05,-.19,-.05,.14,.63,.32,.32,.11,.41,0,-.07,.31,.43,0,-.15,-.1,-.12,.37,.38,.6,-.22,.3,-.22,-.06,-.29,-.14,-.16,.3,.18,-.05,.12,.55,.53,-.28,.08,.66,.58,.1,.09,.03,.56,.01,-.13,.22,.69,.04,.46,.28,.58,-.34,.01,0,.38,.68,-.06,.26,.04,.13,.18,-.03,.35,.33,.07,.21,.48,.28,.57,.5,.6,.27,.21,.07,-.51,.39,.53,.01,.45,.07,.44,-.04,0,-.17,.04,.02,-.26,-.02,.53,.44,-.06,.5,.02,-.07,-.31,.1,.58,-.17,-.25,.63,.6,-.33,-.21,.51,-.09,.55,.39,.7,-.09,.53,.6,.04,.57,.2,-.2,.02,.45,.32,-.16,.62,.46,.06,-.1,.51,.36,.05,.06,.22,-.12,-.25,.36,.18,-.15,-.07,.54,.05,.63,.28,.51,.06,-.14,.07,.48,.58,.54,-.13,.08,-.01,-.07,.17,.43,.06,.62,.03,.19,.16,.13,-.01,.27,-.27,-.15,.67,-.58,.61,-.01,0,-.06,.36,-.29,-.31,.15,-.04,.47,-.13,.64,-.02,.29,-.24,.25,-.22,-.13,-.08,.7,.03,.3,.12,.16,.04,.59,.04,.04,.07,-.03,.55,.62,.55,.07,.23,-.01,.66,.3,.58,.53,.44,-.01,.23,-.02,.29,.31,.13,.53,-.2,.48,.6,-.55,.57,.18,-.01,.45,.36,.49,.16,.24,.16,-.18,-.25,.28,.16,.57,.6,.52,-.28,-.1,.55,-.04,.21,.04,.15,-.08,-.01,-.24,.52,.01,-.21,-.11,.21,.15,-.09,.09,.58,-.14,-.15,.39,.28,.49,.41,.12,.37,.15,.39,.16,.16,.52,.55,-.02,-.11,-.26,.02,.52,.38,-.06,-.31,-.44,.04,.2,.35,.24,-.14,-.15,-.1,.35,-.28,-.21,-.14,-.08,.04,.04,.07,.05,-.14,.56,.57,.25,.47,.35,.5,.51,.1,-.03,.07,.52,-.28,.14,-.18,-.08,.48,.49,.21,.16,.34,-.48,-.01,.59,.54,.21,.19,.19,.38,.14,-.14,.27,.11,.22,.09,-.02,.28,-.31,-.05,.23,-.06,-.12,.44,-.17,.15,.59,.29,.61,.54,-.04,-.13,.38,.07,.34,.26,-.09,.63,.01,-.02,-.02,0,-.02,.33,-.35,-.2,.11,.41,.57,.41,.6,.24,-.16,0,-.03,.27,.22,-.11,.5,.59,.14,.18,.25,.39,.34,-.09,-.32,-.06,.69,-.13,.67,.48,.51,-.01,.26,.39,0,.38,.04,.46,.47,-.19,0,.48,-.04,.63,.38,.08,.06,.36,.07,.09,.02,.45,-.03,-.06,.56,.39,-.3,.38,.54,.31,.09,.25,.3,.16,-.13,.26,.02,.11,.63,-.23,.3,.23,.19,.26,.34,.28,-.17,.19,.64,-.05,.21,-.14,.08,.57,.23,.26,.56,-.2,.28,.6,.51,.58,.58,.23,.52,.6,.63,.33,.11,.21,.43,-.07,.51,.07,.65,.5,.1,.24,.6,.14,.56,.36,.13,-.09,.44,.39,.52,.13,.35,.11,.26,-.04,.52,.5,.43,.65,.09,.28,.14,-.11,.52,.28,0,0,.57,1,.34,.17,.26,.14,.54,.43,.58,-.02,-.21,.17,.09,.08,.55,.14,.19,.42,.01,.41,.59,.28,.47,.51,-.04,.06,.5,.17,.26,.51,-.08,-.12,.34,.26,.5,.58,.34,.63,.16,.61,-.06,.52,-.15,.25,-.07,.03,.12,.47,.56,.15,.5,.07,.33,-.15,.12,.54,.44,.6,.45,.61,.1,.01,-.05,.21,.23,-.12,-.21,.6,.39,.59,.15,.37,.11,-.08,.29,.1,.53,.21,.06,.53,.58,.59,.6,-.07,.51,.37,.5,.41,-.35,.55,.16,-.3,.61,-.09,.66,-.03,.54,.51,.01,.64,-.15,.03,.16,.24,.18,.14,.09,-.05,.01,.12,.36,-.03,-.08,.62,.6,.16,.16,.64,.25,.22,.46,.61,.61,-.08,-.09,.13,.55,-.02,-.37,-.02,.11,.15,.18,.56,.53,.39,-.2,.42,.44,-.13,.28,-.05,.71,.22,.05,-.21,-.01,-.08,-.26,.14,.32,.53,.55,.32,.07,.33,.19,.59,.07,.18,-.14,-.04,.54,-.2,.54,.37,.53,.61,.03,.57,.45,.62,-.28,.2,.04,.39,-.5,-.08,-.04,-.42,-.12,-.21,-.02,.05,-.05,.11,.63,.61,-.06,.46,.53,-.15,.44,-.22,-.31,-.38,-.04,.56,.55,.59,.3,-.21,.45,.28,.54,.52,.43,.24,.58,.64,.45,.42,.44,.44,-.18,.53,.62,.61,.2,-.24,-.06,.25,.57,.16,.53,-.03,.4,.54,.5,.6,.56,.48,.6,-.03,.71,-.04,-.14,.49,.26,-.1,.25,.54,.47,.69,.52,.26,.56,.34,.53,.03,.01,.05,.04,.07,.05,.33,.03,.02,-.14,.6,-.07,.34,-.17,.18,.01,.02,-.2,-.04,.51,.15,.26,.34,.27,.17,.57,-.16,0,-.15,.04,.45,-.12,.2,.7,.55,.28,-.13,.6,.06,.64,-.05,.57,.1,.49,.42,-.11,.24,.13,.07,-.03,-.35,-.12,-.01,.62,.63,.63,.41,-.15,.09,.63,.42,.33,.16,-.03,-.07,.63,.53,.06,.44,.58,.31,.28,.23,.57,.59,-.25,.05,.27,.44,.48,.11,-.34,.23,.13,-.12,-.03,.58,-.13,.14,.64,.3,-.09,.61,.18,-.01,-.13,.59,-.26,.38,.2,-.05,-.25,-.04,.35,.21,.02,.01,.23,-.03,.51,.56,.6,-.14,.5,.49,.54,.57,.6,.01,.27,.39,.59,.15,.13,.06,-.07,.09,.56,.62,-.12,.44,-.06,.34,.55,.02,.12,.17,.14,-.34,-.23,-.01,-.11,.48,.62,.38,.53,.37,.03,.32,.25,.1,.03,-.16,.12,.42,.44,.13,-.21,-.56,.4,.46,.21,.6,.34,.61,.26,.08,.45,-.53,.57,.7,.56,.09,.57,.29,.56,.47,-.01,.33,.56,.54,.35,.61,.63,.44,-.19,.59,-.07,.37,-.03,.52,.61,.55,.56,.58,-.04,.68,.41,.05,-.2,.53,.1,.54,-.27,.15,.71,.4,.58,.6,-.08,-.07,.02,-.01,.63,.27,.39,.35,.66,.04,-.33,.05,.07,-.16,.08,.28,.26,.42,.57,.13,-.19,.46];export{a as rvalData};
