const a=[-.22,.36,.24,-.08,.46,.05,.19,.28,.56,.17,.24,-.03,-.02,-.39,.32,0,.08,.09,-.11,.2,-.08,-.38,-.02,.21,.55,.69,-.42,-.2,.22,-.39,.4,-.47,.49,.22,-.12,.25,.4,.36,.33,.38,.11,.7,.16,-.1,.2,.26,.08,-.22,-.14,.49,.23,.05,-.02,.45,.26,.35,.35,.23,.28,.6,.38,.58,.58,.05,.09,-.48,.64,.3,-.05,.02,-.09,.44,.35,-.4,.57,.04,-.08,.4,.17,-.45,-.34,.53,.05,.69,-.24,-.39,.64,.07,-.56,.42,-.01,.04,.38,-.32,0,.1,-.49,-.23,-.13,.47,.07,.56,.42,.08,.52,.13,.06,.09,.46,.47,.06,.43,.07,-.32,-.27,.55,-.14,-.36,-.33,.64,.13,-.18,.13,.11,.06,.61,.37,-.22,-.38,.52,.07,-.34,.01,.23,.07,.14,.14,.26,-.49,.02,.58,.16,.71,.66,.09,-.05,.03,-.12,.52,-.06,.54,.13,.09,.1,.23,-.01,.14,-.12,-.23,.37,-.01,.52,.08,.39,.42,.49,.31,-.53,.03,.65,.07,-.47,.03,.01,.4,-.45,.09,-.19,.46,.52,0,.14,-.06,.31,.43,.02,-.05,-.06,.19,-.25,-.17,.23,.01,.61,.53,.32,.4,.11,-.02,-.35,.43,.5,.55,-.04,-.31,.15,-.02,.36,.21,.09,.12,.44,-.18,.53,.22,.4,.07,.2,-.37,-.09,.26,.45,.27,.42,.38,.54,.13,-.45,.18,.31,.07,-.05,.46,.2,.08,.1,.3,.25,.07,-.08,.47,.36,.13,.09,.33,-.02,-.05,.2,.08,-.06,.25,-.04,.3,.24,.52,.09,-.06,.49,.18,.31,.04,-.03,.36,.56,-.12,.49,-.25,.64,.13,.82,-.2,-.09,.47,.28,.48,.16,-.21,.45,.35,-.14,.27,-.19,.36,-.3,.2,.33,-.15,.49,.23,-.3,-.01,.37,.45,.06,.2,.16,.21,-.3,.02,-.01,-.03,.38,-.35,.06,.11,.46,-.19,.52,.05,.23,.71,-.05,-.12,.07,-.06,-.01,.08,.05,.25,.23,.7,-.18,.35,.57,.14,.28,.43,-.15,.06,.3,-.3,.42,.21,.07,-.45,-.01,-.38,.26,0,-.33,.49,.13,-.21,.06,.43,.26,.06,.21,.15,.33,.59,.06,.11,.24,-.09,.34,.28,-.3,.37,.33,.78,.11,.16,.05,-.11,-.21,.23,.49,.18,.05,-.09,-.17,.56,.04,.26,.3,.34,.61,.03,.11,.06,-.02,-.08,.16,-.06,.31,-.32,-.08,.36,.43,.34,.09,.08,-.04,-.01,.36,-.36,-.07,-.12,.12,-.24,.15,.3,.63,.28,-.1,.34,.33,.52,.27,.24,-.27,-.13,.36,-.06,-.02,.6,.29,.28,-.09,.11,.47,-.11,.08,.58,.52,.37,-.01,.26,-.11,.1,0,.65,-.03,.02,.51,-.16,.45,.49,.45,.47,.75,.73,.42,.33,.27,.38,.44,.59,-.42,.2,.52,-.6,.07,0,-.15,-.37,.49,.16,.57,.42,.36,-.45,.5,-.24,-.05,-.22,-.09,-.51,.41,.11,.47,.16,.08,.13,.41,.23,.29,.29,-.21,.46,.44,.39,.48,.36,.08,.25,-.08,.17,.13,-.02,-.05,.07,-.17,.34,.62,.18,.04,.39,-.01,.21,-.01,.37,.49,.74,-.05,-.18,.27,.32,.27,.56,.21,.69,.09,.29,-.24,.07,.15,.49,.6,-.28,.3,-.21,-.01,.27,.02,.05,.23,.23,.34,.23,.17,-.02,.06,.02,.14,.07,-.04,-.15,.04,-.03,.04,-.08,-.24,-.27,-.08,.01,-.27,.44,.27,-.21,.54,.36,.22,.77,-.15,-.34,.05,-.25,.01,.34,-.22,.51,.25,.12,.01,.05,-.14,.12,-.05,.28,.26,.33,.03,.58,.35,-.06,-.49,.31,.21,-.3,.06,.59,.13,.44,.41,.37,.57,-.12,.37,.07,-.07,-.05,.43,.21,-.55,.36,.39,.35,-.04,.34,.62,.34,.3,.36,-.39,.08,-.32,0,.29,-.01,.35,-.12,.22,-.02,.05,.37,0,-.08,-.03,.01,.11,.11,-.08,.05,-.35,.41,.05,.53,-.04,-.03,-.24,-.25,.37,0,.44,.4,.13,-.03,-.42,.04,.55,-.38,-.24,.07,.56,-.15,.61,0,.42,-.15,-.6,.09,.41,.41,.03,.35,-.09,.06,.15,.37,.16,.56,-.02,.07,.03,.07,.09,.74,.68,.62,-.15,-.04,-.41,.33,-.15,.62,.57,-.39,.14,.03,-.14,.33,.55,.13,.17,-.34,.73,.54,.06,-.07,-.15,-.11,-.02,.08,.07,.11,.2,.42,-.45,.66,.29,.57,.42,-.1,.03,-.09,.05,-.04,-.39,.57,.16,.18,.01,-.04,-.02,.44,-.07,.04,-.01,.25,.38,.36,-.18,.54,.09,-.28,-.45,-.29,.3,-.46,.15,.41,-.23,.4,.13,.45,-.07,-.27,-.02,.3,.02,-.47,-.26,.16,-.23,.63,.34,.25,.59,-.22,-.29,-.25,.41,.45,-.02,-.12,.08,.23,-.04,-.04,-.52,.44,.16,.15,.35,.51,-.09,.04,.33,-.15,-.04,.47,.09,.15,-.21,.18,.23,.49,.13,.32,-.23,-.05,.64,.18,.42,.36,.35,-.32,-.21,-.41,.09,.29,.27,.56,-.48,.31,.77,-.06,.21,.3,.26,-.18,.5,.28,.51,.28,-.27,.07,0,-.07,-.28,.43,-.41,.55,.18,-.33,-.18,.05,.52,-.08,.59,.21,.46,.09,.48,-.15,-.06,-.08,-.1,-.04,.54,.03,-.18,-.03,-.06,-.03,.05,.12,-.46,.08,.55,.09,.15,-.32,.4,.14,-.24,.51,.01,.07,-.43,.67,-.04,-.15,.12,0,.02,.31,-.4,.6,.54,-.1,-.23,-.09,-.09,-.35,.01,.34,.09,.06,.05,.19,.13,-.02,.03,.18,.11,-.08,.16,-.34,.16,.14,.65,.46,.17,.1,.36,.43,.1,.61,-.29,-.3,.39,.45,-.1,-.35,-.08,.26,.58,0,.04,-.11,.1,.03,.46,.35,.13,.04,.23,.04,-.27,-.32,-.02,.49,.28,-.1,.11,.04,.03,-.01,-.11,-.12,.43,.44,.42,.01,.43,.54,.04,.2,.16,.35,.68,.67,-.42,.47,-.01,.43,.62,-.1,-.21,0,.66,.06,-.19,.27,.37,-.13,.23,.14,.05,.08,-.21,.19,.49,.65,-.13,.7,-.18,.47,.1,.14,-.14,.47,.15,.06,-.07,-.37,-.14,-.04,-.23,.19,-.34,.61,.05,.02,.08,.38,.24,.56,.09,-.41,.26,.03,.11,-.11,.03,-.02,.25,.52,-.05,.24,.01,.08,.23,.1,.01,.16,-.05,.01,.01,-.09,-.05,-.02,0,-.09,.1,-.17,-.13,.02,.57,.22,-.09,.03,-.06,.3,-.07,-.14,-.01,.74,-.22,.32,.32,.01,.13,.46,.11,.08,-.01,.08,.04,-.05,.23,.01,.48,.51,.21,.24,.04,-.05,.41,-.18,.08,-.09,.11,-.02,-.07,-.28,.24,.1,.26,.21,-.12,.45,-.12,-.35,.11,-.07,.47,-.12,-.08,.01,.55,.48,.18,-.53,.4,.19,.09,.25,.48,.32,.34,-.12,.26,.3,-.01,.46,.61,.13,-.43,.05,.09,.4,.09,.21,-.04,-.34,.68,.07,-.13,.43,-.4,.13,.59,.22,.14,.5,.41,.08,-.22,.07,.79,.41,.62,.23,-.04,.26,-.02,-.08,.34,.48,-.01,-.21,-.19,-.03,.58,.18,.54,-.22,.37,-.22,-.03,-.26,.02,-.09,.24,.03,-.04,.02,.38,.43,.01,.09,.47,.54,.04,.13,-.08,.56,-.19,.15,.36,.58,.09,.49,.02,.18,.05,.16,-.23,.39,.25,.14,.04,.08,.07,.09,.06,.54,.49,.02,.34,.37,.19,.51,.52,.38,.53,.06,-.11,-.55,.21,.55,.04,.42,.12,.72,.25,.03,-.09,.08,-.17,-.23,.15,.47,.44,.16,.22,.21,-.11,-.31,.01,.48,-.05,-.27,.44,.45,-.38,-.29,.43,-.11,.43,.17,.52,-.13,.23,.39,.15,.29,-.02,-.07,.07,.39,.11,.33,.65,.45,-.09,-.15,.74,.17,.1,.12,.08,.09,-.18,.16,-.01,-.39,-.18,.42,-.03,.42,.37,.66,.04,-.07,.09,.45,.63,.3,-.03,.11,0,-.1,.15,.42,.07,.54,-.2,.16,.03,.12,.58,.45,-.16,.1,.34,-.54,.39,.61,.05,-.13,.24,-.41,-.52,.36,-.04,.39,-.04,.5,.1,-.09,-.06,.1,-.36,.24,-.09,.56,-.02,.31,.38,.48,.15,.36,0,.06,.11,-.13,.71,.68,.5,-.29,.3,-.19,.3,.64,.47,.48,.52,.54,.13,.09,.26,.44,.03,.55,-.21,.31,.38,-.45,.45,.03,-.21,.25,.32,.49,.17,.28,.05,-.01,-.26,.03,.03,.37,.64,.23,-.2,-.01,.39,-.12,.46,.25,.27,-.07,.03,.03,.5,.3,-.02,.39,.27,-.06,.15,.04,.49,-.14,-.12,.39,.12,.26,.39,.19,.1,.27,.36,-.25,.1,.17,.45,-.02,-.29,-.3,-.18,.48,.28,-.17,-.32,-.59,-.15,.07,.33,.24,-.41,-.28,-.3,.19,-.31,.06,-.24,-.22,-.12,-.12,-.03,.1,.08,.45,.49,-.08,.15,.28,.44,.51,-.06,.1,.44,.41,-.11,.14,-.1,-.1,.29,.38,.3,.38,.42,-.2,-.05,.42,.46,.22,.06,.15,.43,0,-.17,-.06,-.13,.08,.1,-.04,.31,-.09,.2,.28,.18,.02,.58,-.1,.16,.58,.21,.81,.65,.09,-.24,.27,-.02,.29,.2,-.1,.72,.07,-.07,.07,-.16,.18,-.1,-.26,-.06,0,.65,.67,.59,.36,.3,-.24,.09,-.18,.22,.15,-.25,.29,.48,.23,.05,.01,0,.32,-.1,-.35,-.28,.47,-.4,.52,.15,.42,-.01,.06,.1,.01,.32,-.12,.37,.38,-.33,0,.44,-.12,.36,.4,.26,.03,.49,.13,.05,.01,.3,.01,.11,.56,.25,-.32,.21,.56,.35,.08,.49,.49,.53,.25,.41,.04,.16,.78,-.09,.31,.26,.11,.13,.38,.24,.08,.26,.61,.1,.12,-.29,-.02,.52,.32,.34,.45,-.01,.11,.3,.48,.37,.46,.35,.31,.56,.44,.46,.06,.43,.65,-.21,.62,.26,.6,.43,.06,.13,.57,.12,.41,.65,-.03,-.41,.36,1,.3,.26,.56,.41,.32,-.13,.43,.3,.59,.58,.12,.23,.25,-.3,.47,.34,0,-.02,.37,.39,.46,.37,.27,.52,.3,.55,.62,-.19,-.28,.26,.8,.3,.32,.29,.23,.51,0,.38,.32,.23,.35,.34,.04,-.03,.15,.45,.45,.25,-.02,.6,.7,.14,.44,.57,.26,.58,.01,.57,-.04,.36,.58,.21,-.21,.14,.16,.61,.26,.13,.33,.14,.42,-.22,.23,.44,.49,.51,.5,.69,.01,.57,.17,.3,.15,.03,-.01,.64,.44,.77,-.13,.37,-.03,-.17,.31,.2,.38,.12,.06,.47,.35,.43,.44,.23,.3,.28,.49,.43,-.32,.6,.48,-.13,.59,-.02,.46,.02,.23,.46,-.19,.7,-.06,.35,.11,.36,.27,.34,.14,.22,-.06,.32,.01,-.14,.19,.62,.36,.31,-.04,.55,.22,.43,.56,.64,.5,-.19,-.07,.01,.64,-.27,-.19,-.07,.35,.34,.3,.39,.24,.1,-.06,.56,.3,-.17,.64,-.14,.55,.31,.29,-.21,-.23,.14,-.13,-.05,.25,.2,.53,.19,.07,.56,.31,.45,.08,.19,-.02,.09,.38,-.36,.27,.56,.4,.36,-.07,.49,.28,.56,-.33,.12,.15,.46,-.43,-.01,.33,-.3,-.12,-.17,0,.06,-.1,-.04,.43,.35,-.03,.6,.32,.28,.22,-.08,-.41,-.36,.24,.49,.37,.59,.3,.11,.3,.2,.38,.47,.52,.39,.58,.42,.44,.64,.34,.48,-.39,.47,.6,.35,.06,-.39,.11,-.07,.69,-.11,.36,-.22,.54,.39,.64,.23,.38,.47,.41,.01,.32,-.06,-.26,.32,-.12,.11,.2,.29,.42,.49,.26,.12,.12,.24,.29,.1,-.07,-.01,.17,.11,.06,.25,-.07,.09,-.21,.44,-.02,.52,-.32,.06,.18,-.07,-.11,-.11,.48,.02,-.07,.28,.14,.28,.74,-.25,-.15,-.34,.07,.55,-.13,.13,.52,.41,-.08,-.28,.65,-.06,.63,-.19,.53,.01,.39,.35,-.08,.12,.23,.07,.02,-.42,-.11,0,.44,.48,.41,.11,-.17,-.09,.73,.32,.38,.17,.1,-.23,.67,.33,.08,.32,.64,.38,.24,-.16,.5,.74,-.26,.13,.27,.45,.28,.13,-.29,.37,.3,.09,-.11,.4,-.13,-.06,.7,.06,-.05,.56,.02,0,-.09,.54,-.43,.29,.04,0,.01,.02,.21,.2,.04,-.2,.11,-.03,.43,.49,.22,-.25,.2,.28,.57,.63,.48,.06,.23,.39,.69,-.07,-.04,.03,.07,.12,.63,.6,-.05,.57,-.18,-.09,.38,.08,.35,0,-.08,-.35,-.23,.02,.12,.39,.41,.61,.36,.52,.02,.45,-.05,-.02,-.14,.08,-.2,.63,.55,.21,-.19,-.63,.26,.23,.14,.33,.12,.65,.17,.02,.49,-.6,.72,.45,.48,-.08,.55,-.08,.46,.49,.27,.7,.17,.65,.17,.49,.7,.35,-.22,.5,.04,.27,-.01,.56,.71,.66,.6,.64,0,.54,.16,-.05,-.39,.6,.1,.32,-.32,-.02,.52,.29,.64,.56,-.27,0,-.27,.09,.39,.25,.22,.32,.6,-.17,-.4,.07,-.26,-.22,.03,.58,.04,.06,.5,.12,.15,.5];export{a as rvalData};
