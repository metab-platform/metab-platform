const a=[-.14,.26,.31,-.07,.34,.04,.21,.27,.32,.15,.1,0,-.05,-.35,.1,.01,-.03,-.03,-.06,-.01,-.06,-.58,.09,-.03,.25,.47,-.55,.08,.16,-.52,.54,-.48,.37,.04,-.17,.22,.28,.12,.37,.37,.01,.46,.14,.04,.16,.08,-.12,-.26,-.36,.49,.12,-.04,.1,.4,.6,.12,.18,.23,.24,.35,.54,.43,.55,.04,-.03,-.5,.5,.05,-.07,-.09,-.06,.18,.61,-.33,.42,.01,-.15,.51,.24,-.38,-.25,.31,-.05,.5,-.2,-.44,.43,-.03,-.43,.33,.4,.14,.39,-.19,-.02,.18,-.36,-.26,-.11,.56,-.09,.54,.55,-.05,.62,.01,-.12,-.09,.39,.69,-.02,.52,.11,-.23,-.13,.3,-.03,-.55,-.27,.34,-.03,-.31,.06,-.03,.01,.55,.42,-.18,-.39,.3,.3,0,-.09,.48,-.05,-.02,.49,.45,-.52,-.08,.56,-.02,.56,.44,-.01,.05,-.07,.05,.59,-.06,.53,.27,.02,-.05,.32,.31,-.01,-.06,-.27,.08,.27,.56,.03,.5,.36,.51,.22,-.56,.25,.43,.01,-.47,.3,.23,.35,-.49,.1,-.44,.55,.41,-.13,-.04,.15,.19,.68,.19,-.03,0,.24,-.12,.03,.38,.1,.59,.6,.34,.57,.18,-.08,-.39,.16,.52,.32,.1,-.24,.49,.02,.55,.56,.13,.31,.14,-.07,.26,.21,.31,.15,.34,-.53,-.33,.53,.63,.41,.39,.5,.33,.38,-.51,.41,.23,.01,.03,.21,.33,-.03,0,.07,-.1,.17,-.11,.58,.07,.29,.4,.32,.18,.07,.23,-.09,-.13,.3,-.24,.6,.14,.49,.04,.21,.39,.18,.18,.1,.34,.41,.55,.25,.59,-.46,.46,.07,.32,-.18,-.1,.36,.34,.39,.15,-.38,.51,.39,-.38,.54,-.32,.11,-.23,.52,.4,-.37,.26,.28,-.36,.09,.52,.38,.17,.28,.17,.08,-.24,.14,.45,0,.23,-.31,-.04,.11,.26,-.03,.69,.34,-.01,.43,-.06,-.16,-.05,.17,.45,.37,.34,.32,.31,.51,-.02,.02,.51,.36,.59,.41,.04,-.02,.57,-.31,.57,.31,-.01,-.58,-.07,-.48,.53,-.12,-.37,.59,.12,-.12,-.16,.29,.37,.16,.59,.15,.52,.61,.31,.06,.53,-.16,.18,.38,-.27,.44,.23,.25,.04,.5,-.12,.04,-.21,.15,.34,.36,.06,-.32,-.08,.27,.11,.42,.37,.07,.43,-.1,.48,-.08,.01,-.09,.08,-.03,.27,-.32,.03,.43,.44,.44,0,.13,0,-.02,.25,-.61,-.05,.07,-.01,-.19,.37,.43,.36,.42,.12,.04,.47,.53,.46,.34,-.19,.12,.47,.24,-.01,.54,.07,.54,-.23,0,.3,-.39,.02,0,.31,.31,-.03,.41,.14,.26,.07,.34,-.02,.43,.33,-.15,.41,.33,.46,.59,.48,.56,-.09,.4,.4,.26,.46,.07,-.43,.34,.57,-.47,.28,.01,.13,-.44,.35,.28,.37,.38,.45,-.3,.56,-.03,.19,-.15,-.18,-.28,.37,-.05,.29,.24,-.07,.54,.34,.32,.22,.34,-.41,.61,.19,.37,.34,.44,.3,.35,-.03,.11,.29,.08,-.03,-.02,.01,.34,.31,.3,-.08,.29,.38,.49,.14,.51,.29,.52,.09,.03,.39,.23,.51,.57,.22,.53,.19,.41,-.3,.23,.45,.56,.37,-.37,.31,.23,.06,.41,-.03,.15,.13,.13,.45,.53,.28,.11,.38,.04,.17,.45,.14,.04,.08,-.05,.4,-.06,-.32,-.39,-.04,.24,-.29,.42,.08,-.28,.33,.34,.28,.41,-.05,-.33,.17,-.2,.15,.35,-.47,.34,.27,-.05,-.04,.17,-.03,.29,-.17,.36,.27,.03,-.01,.38,.27,-.05,-.38,.49,.06,-.43,.1,.58,.39,.62,.1,.28,.56,-.44,.25,-.05,.08,.11,.56,.3,-.36,.37,.28,.37,.19,.29,.41,.28,.3,.12,-.51,.46,-.31,0,.06,.09,.23,.14,.39,.14,.04,.27,.18,-.12,.08,.15,.06,.29,.05,.38,-.17,.2,.32,.51,.17,-.05,-.36,-.23,.54,.19,.49,.33,.47,.2,-.46,.29,.45,-.55,0,.11,.54,.13,.48,.05,.63,-.06,-.49,.35,.32,.35,.02,.06,-.08,-.1,.05,.24,.18,.37,.4,.19,.04,.1,.46,.46,.42,.37,-.13,.02,-.5,.47,.25,.64,.38,-.19,.08,-.05,.05,.18,.39,.26,.23,-.26,.51,.43,.11,-.01,-.22,.15,-.04,-.01,-.01,.14,.22,.39,-.39,.51,.27,.4,.29,.18,-.07,-.14,.05,.05,-.53,.45,.31,.32,.19,.01,-.05,.1,.02,-.15,-.03,.29,.48,.26,-.01,.31,.04,-.17,-.5,-.15,.34,-.38,.41,.46,-.12,.51,.48,.26,.05,.01,.09,.11,.26,-.49,-.36,-.04,-.21,.37,.24,.25,.49,-.09,-.18,-.28,.24,.35,.06,-.02,-.22,.34,-.19,.02,-.55,.32,.2,-.17,.19,.46,.06,-.26,.13,.23,.41,.35,-.04,.53,-.26,.4,.27,.33,.46,.31,-.18,-.02,.51,.26,.56,.68,.5,.06,-.45,-.53,.3,.52,.05,.43,-.58,.29,.56,-.04,.51,.15,.17,-.25,.49,.27,.45,.28,-.23,.4,.03,-.02,.04,.46,-.42,.49,.44,-.32,-.42,-.05,.29,-.05,.11,.27,.29,0,.32,-.15,.33,-.19,-.11,.25,.32,.34,-.03,.01,-.22,-.22,.36,.16,-.53,.42,.32,.02,.43,-.31,.46,-.04,-.5,.56,-.03,.02,-.5,.44,-.15,-.06,.25,.35,.33,.39,-.27,.59,.39,-.06,-.2,.09,.31,-.3,.05,.33,.28,.06,.01,.12,.52,.23,.41,.05,.26,-.1,.08,-.47,.26,.04,.55,.2,.12,.45,.25,.48,.16,.56,-.21,-.34,.52,.43,-.04,-.42,-.07,.38,.35,.27,-.21,.09,-.1,-.1,.29,-.02,.51,-.02,.41,-.03,-.36,-.34,-.01,.56,.25,.07,.41,.31,-.11,.25,-.17,-.06,.29,.47,.31,.09,.27,.38,.35,.4,.26,.23,.39,.41,-.34,.61,-.14,.36,.42,-.18,.1,.22,.39,.25,.09,.27,.36,-.03,0,.3,-.04,.33,-.05,.33,.02,.45,.03,.46,.1,.39,-.01,.13,-.08,.58,.09,.09,.17,-.48,-.11,-.29,-.03,-.05,-.35,.44,-.04,.2,.35,.5,.46,.39,.27,-.59,.32,.25,.27,.22,.04,-.02,.42,.55,.24,.56,.22,-.03,.48,-.15,.07,.1,.11,.11,.1,.06,.08,.12,-.3,-.1,-.06,-.04,-.07,-.08,.42,.3,-.31,.12,-.12,.35,0,.08,.13,.46,.01,.32,.6,.03,.29,.52,-.11,.04,-.15,.4,-.11,.02,.53,.02,.58,.26,.17,.04,.03,.29,.27,-.33,.08,-.01,.52,0,-.01,-.23,.21,.42,.3,.21,.31,.15,-.09,-.2,.16,.26,.37,-.31,-.07,0,.22,.48,.36,-.55,.35,.29,.09,.44,.45,.38,.3,-.08,.39,.29,.41,.42,.41,-.03,-.45,.03,-.01,.54,-.23,-.04,-.03,-.55,.46,-.04,.12,.43,-.43,.25,.59,.28,.38,.45,.33,.11,-.38,.29,.18,.28,.27,.15,-.16,.42,.04,-.1,.5,.6,.04,-.3,-.25,-.01,.22,.41,.36,-.29,.1,-.23,.06,-.29,-.06,.05,.06,.37,-.08,.27,.39,.33,-.11,-.04,.33,.45,.17,.04,.04,.39,-.24,-.05,.19,.55,0,.33,.07,.36,-.04,.06,-.19,.48,.35,.02,.5,-.03,.4,.17,-.01,.25,.31,-.08,.52,.37,.12,.37,.36,.5,.51,.4,-.02,-.39,.61,.57,-.08,.2,.05,.35,-.09,.4,-.05,0,.29,-.11,-.01,.32,.23,-.09,.29,.06,.08,-.09,0,.4,-.08,-.22,.52,.6,-.37,-.41,.42,.01,.44,.43,.63,.06,.24,.3,.39,.35,0,-.16,.21,.27,.41,-.16,.52,.27,.21,-.05,.42,.42,0,.02,.41,-.04,-.41,.34,.3,-.5,.11,.52,.03,.27,.32,.3,-.04,0,-.02,.23,.4,.33,-.06,.01,-.16,-.14,.13,.45,.1,.51,.05,.05,.36,-.03,.02,.53,-.32,.26,.53,-.4,.25,.06,.3,-.21,.34,-.55,-.55,.46,-.02,.39,.05,.57,-.14,.3,.23,.17,-.2,.23,-.07,.58,.06,.27,.33,.02,-.03,.28,.1,.04,.07,.03,.41,.58,.58,.17,.54,-.03,.47,.26,.59,.38,.44,.1,.2,-.03,.06,.49,.22,.34,-.2,.52,.27,-.27,.31,.25,.08,.41,.47,.28,-.01,.31,.19,-.16,-.06,.27,.25,.19,.55,.37,-.39,-.17,.47,.12,.41,.03,-.01,.25,-.15,.03,.6,.3,-.06,-.21,.06,.16,.26,-.16,.62,-.06,-.14,.61,.49,.48,.5,.19,.55,.53,.63,.24,.5,.45,.53,-.02,.09,.11,.29,.59,.58,0,-.29,-.29,.14,.41,.11,.51,-.03,0,.07,.29,-.08,-.29,.06,.13,-.02,.26,.15,.14,-.07,.66,.54,.31,.46,.48,.67,.29,-.16,.43,-.02,.31,-.31,.47,-.22,-.19,.38,.43,.05,.14,.55,-.43,.01,.55,.47,.26,.24,.06,.22,.27,-.21,.26,-.07,.07,.06,-.15,.36,-.1,-.05,.33,0,-.2,.28,-.18,.23,.55,.49,.45,.45,.08,-.06,.56,.07,.49,.12,.19,.43,-.02,.35,-.09,-.11,.1,.29,-.23,.09,.09,.36,.47,.51,.43,.34,-.23,.16,-.1,.32,.03,-.4,.57,.53,.26,.12,.13,.36,.55,-.14,-.01,-.51,.56,-.05,.62,.46,.63,.12,.32,.42,.09,.49,.36,.36,.61,-.07,.23,.57,.19,.44,.33,.35,.1,.4,-.03,.09,.08,.32,-.1,.14,.45,.53,-.22,.56,.37,.43,.26,.08,.37,-.06,-.23,.54,-.03,.02,.44,.14,.53,.13,.39,.47,.33,.36,-.12,.21,.5,-.06,.22,-.56,.14,.47,.52,.41,.54,-.08,.44,.47,.56,.27,.5,.53,.42,.6,.53,.36,.17,.43,.36,-.2,.53,.06,.64,.54,-.04,.43,.57,.07,.55,.49,.14,-.14,.4,.39,.53,.4,.44,.44,.04,.02,.45,.35,.35,.52,.05,.33,.46,-.58,.66,.1,.22,.14,.47,.39,.58,.36,.55,-.04,.43,.35,.56,-.22,-.24,.48,.14,.42,.15,.45,.11,.24,-.15,.36,.3,.48,.38,.37,-.16,-.19,.28,.36,.44,.33,.11,.09,.45,.32,.65,.6,.43,.64,.05,.58,-.11,.61,-.06,.36,-.09,.06,.08,.44,.24,.23,.45,.12,.57,-.04,.4,.52,.47,.56,.48,.51,.22,.04,.23,.51,.35,-.09,0,.52,.59,.44,.05,.42,.19,-.11,.54,.37,.64,.36,.17,.25,.25,.56,.46,.29,.17,.59,.63,.58,-.13,.71,.04,.16,.61,-.06,.53,.02,.34,.54,.03,.52,-.1,.23,.14,.49,.22,.13,.42,.27,0,.35,.25,-.15,.08,.46,.39,.06,.26,.55,-.01,.17,.41,.45,.31,-.21,.12,.09,.49,-.03,-.37,.03,.45,.43,.37,.28,.29,-.03,-.12,.32,.52,-.38,.38,-.3,.45,.32,.28,-.18,-.26,-.02,-.23,.27,.43,.29,.53,.37,.33,.51,.58,.45,0,.23,-.09,.08,.47,-.27,.29,.17,.39,.37,.05,.52,.27,.59,-.52,.12,-.05,.32,-.18,-.03,.23,-.44,-.11,.04,.03,.07,-.04,-.01,.61,.61,.18,.25,.25,-.02,.28,.11,-.56,-.5,-.11,.39,.3,.4,.1,-.1,.43,.24,.56,.63,.43,.06,.49,.35,.4,.6,.66,.46,-.09,.53,.41,.51,.35,-.52,-.04,.16,.47,.15,.65,.04,.41,.26,.56,.32,.28,.26,.49,-.09,.52,.03,-.14,.4,.41,-.03,.26,.4,.27,.6,.39,.42,.18,.49,.32,.17,.07,0,.07,0,.02,.15,.14,.19,.08,.43,.08,.18,-.09,.34,-.08,-.04,-.16,-.15,.3,0,.47,.25,.45,.2,.53,.04,.11,-.08,.05,.46,.03,.46,.63,.61,.24,.07,.42,.04,.46,-.2,.34,.31,.64,.61,-.07,.12,.23,.2,.07,-.18,-.14,-.05,.64,.58,.42,.35,-.02,-.32,.52,.61,.34,.05,-.11,.05,.45,.24,.02,.42,.47,.07,.4,.12,.4,.47,-.53,.37,.44,.64,.55,.12,-.42,.14,-.04,.01,-.13,.29,.02,-.02,.43,.45,.02,.61,.14,-.01,-.09,.55,-.39,.09,.38,-.06,-.08,0,.24,.07,-.05,-.14,.45,-.06,.29,.34,.3,-.42,.28,.31,.31,.49,.44,.1,.29,1,.47,.3,-.19,.13,.06,-.05,.42,.47,.2,.24,-.1,.27,.17,-.05,.42,.04,.1,-.41,-.17,-.1,.08,.41,.23,.44,.34,.62,-.04,.54,.19,-.29,.14,-.11,-.12,.4,.23,.46,-.04,-.49,.5,.24,.04,.42,.44,.41,.44,.26,.5,-.43,.43,.48,.33,.07,.59,.09,.55,.28,.34,.32,.27,.45,.3,.32,.46,.2,-.4,.33,-.1,.53,-.12,.32,.43,.37,.31,.4,.25,.56,.17,.27,-.32,.32,.01,.26,.04,.09,.6,.42,.41,.52,-.42,-.12,-.42,.39,.36,.51,.29,.32,.47,-.08,-.57,.16,-.18,-.32,.07,.32,.11,.21,.29,.07,.12,.64];export{a as rvalData};
