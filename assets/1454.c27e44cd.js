const a=[-.24,.33,.3,-.11,.49,.15,.21,.33,.8,.02,.65,-.18,-.05,-.46,.65,-.04,.28,-.04,-.18,.13,-.04,-.2,-.08,.56,.95,.79,-.31,-.18,.02,-.22,.49,-.23,.6,-.07,.29,.1,.57,.75,.25,.22,.04,.7,.1,-.05,.04,.63,.2,.11,.2,.26,.42,-.07,-.05,.64,.19,.67,.72,.01,.05,.67,.27,.5,.55,-.04,.26,-.28,.73,.68,.08,-.03,-.12,.31,.38,-.3,.58,-.03,.03,.25,.33,-.05,-.26,.64,.15,.72,-.23,-.15,.84,.22,-.53,.61,-.17,.03,.56,-.61,.15,.1,-.51,-.17,-.14,.36,-.07,.65,.33,-.05,.44,.14,-.04,.15,.73,.42,.12,.27,.05,-.39,-.08,.62,.08,-.2,0,.99,.03,-.08,.21,.07,-.2,.49,.45,.02,-.31,.67,.1,-.17,.06,.06,.13,.15,-.05,.23,-.25,-.1,.56,0,.63,.85,0,-.03,.02,-.13,.71,0,.65,.39,.01,.13,.24,-.11,-.01,-.1,-.16,.72,-.22,.44,.05,.25,.62,.28,.33,-.28,.02,.81,.05,-.19,.01,-.08,.4,-.04,.15,-.05,.25,.62,.16,.05,-.09,.23,.35,.09,.1,-.07,-.06,-.17,-.14,.36,.06,.7,.6,.5,.4,.21,.02,-.25,.6,.76,.7,.11,-.26,.18,-.26,.24,.26,-.1,.13,.77,-.14,.81,0,.2,.02,.3,-.09,0,.38,.34,.28,.57,.52,.67,.12,-.21,.15,0,-.09,-.09,.72,.21,.08,.06,.56,.41,-.07,.05,.24,.72,.23,-.12,.5,.18,.04,.2,-.01,-.12,.08,-.15,.2,.3,.54,.05,-.09,.73,0,.22,.06,-.23,.67,.56,-.11,.4,-.14,.72,.39,.66,-.15,-.06,.67,.24,.67,-.04,-.02,.28,.41,.19,.06,-.08,.66,-.38,.19,.56,-.04,.74,-.02,-.08,.26,.17,.6,.23,.31,.11,.49,-.3,.17,-.04,.01,.41,-.17,-.04,-.07,.46,.1,.44,-.07,.45,.68,-.12,-.06,0,.12,-.06,-.05,-.16,.18,.01,.67,-.16,.67,.69,-.09,.21,.56,-.3,.11,.26,-.25,.48,.16,.07,-.45,-.07,-.21,.25,.16,-.1,.48,.08,-.22,.04,.61,.3,.05,.13,.07,.25,.58,-.27,.18,.22,-.16,.71,.22,-.16,.35,.3,.81,.12,.12,.14,-.04,-.33,.01,.63,.07,.07,.12,-.29,.71,.12,.13,.15,.24,.66,-.02,0,.14,-.02,.06,.05,.06,.26,-.22,-.09,.46,.5,.37,-.01,.01,-.01,.06,.39,-.23,-.17,-.29,-.16,-.27,.2,.33,.74,.07,.03,.62,.33,.59,.45,.21,-.25,-.14,.42,-.02,-.02,.6,.37,.07,.04,.08,.66,-.05,-.04,.67,.61,.5,-.05,.15,-.32,.23,.09,.99,.02,-.13,.53,-.02,.54,.54,.46,.46,.81,.64,.37,.05,.37,.39,.55,.51,-.34,.58,.4,-.7,.04,.09,-.06,0,.6,.11,.66,.39,.43,-.42,.26,-.16,.32,-.31,.01,-.53,.58,.15,.61,.25,.09,.03,.69,.38,.52,.46,-.12,.46,.7,.41,.68,.04,.13,.21,-.27,.26,.09,.12,-.15,.27,-.46,.33,.73,-.09,.09,.52,-.09,.12,-.24,.45,.54,.67,-.14,-.24,.62,.41,.14,.62,.16,.62,.08,.08,-.06,-.1,.26,.25,.7,-.25,.38,.08,.01,.2,-.01,.02,-.01,.06,.48,.26,-.09,-.06,-.16,0,.02,.06,.24,-.19,-.03,-.04,-.13,-.06,-.05,.01,-.12,-.08,-.03,.34,-.08,-.14,.66,.37,.17,.55,-.13,-.33,-.15,-.17,-.05,.31,-.05,.34,.32,.05,-.12,-.11,-.01,-.04,-.03,.21,.24,.5,-.16,.59,.37,-.05,-.32,.09,.2,-.01,.07,.55,.18,.42,.73,.45,.43,-.04,.56,.04,.14,-.03,.36,.31,-.7,.59,.34,.27,.15,.53,.63,.34,.2,.18,-.26,-.08,.04,.04,-.16,.01,.58,-.08,.35,-.2,.1,.42,.18,-.01,-.04,-.05,-.04,.05,0,.05,-.3,.38,0,.53,.09,-.03,-.07,-.17,.17,.25,.35,.66,-.05,.04,-.17,.02,.68,-.24,-.2,.19,.64,-.17,.62,.08,.39,-.07,-.68,.05,.5,.69,.06,.61,-.05,-.08,.27,.39,.12,.66,-.18,.24,.08,.14,.16,.87,.73,.7,-.07,-.15,-.25,.22,-.39,.63,.63,-.3,.04,.09,-.15,.16,.53,.11,.15,-.37,.74,.74,.26,-.13,-.23,-.2,-.05,-.17,.26,.08,.3,.32,-.36,.67,.49,.63,.39,-.03,.01,-.21,.18,-.06,-.22,.8,-.02,-.02,.26,-.2,-.02,.49,-.03,-.07,0,.43,.45,.55,-.04,.6,.22,-.2,-.21,-.21,.24,-.41,.16,.51,-.09,.43,-.07,.64,-.03,-.14,-.12,.73,.24,-.21,-.07,.1,-.21,.75,.58,.14,.35,-.15,.16,-.23,.26,.6,.15,.1,.14,.4,-.13,-.06,-.3,.72,.22,.21,.44,.52,-.17,.13,.28,-.28,-.07,.53,.06,.04,-.18,.22,.43,.55,-.04,.33,-.04,-.15,.59,.2,.38,.26,.23,.1,-.07,-.13,.04,.32,.6,.68,-.31,.42,.66,-.16,.17,.45,.14,-.22,.51,.5,.63,.64,-.18,-.12,-.01,-.02,-.34,.48,-.08,.54,.14,-.43,.08,.1,.55,-.05,.59,.28,.55,.06,.65,.01,.16,-.04,-.06,-.03,.7,-.02,-.28,-.16,-.06,-.12,.21,.11,-.19,.16,.67,.04,.07,-.08,.43,.21,-.07,.53,.01,.19,-.15,.68,-.01,-.02,.13,-.16,-.15,.52,.13,.71,.58,.07,-.35,-.17,-.23,-.33,.12,.24,.12,.02,.13,-.02,.04,-.07,-.15,-.07,.17,.04,.06,-.26,.43,.24,.6,.6,.13,.1,.56,.45,.17,.63,-.41,-.3,.25,.4,-.07,-.37,-.29,.2,.78,.32,-.05,-.04,.13,-.05,.63,.19,-.02,.06,-.07,-.1,-.08,-.02,-.31,.33,.4,-.11,.01,-.01,.07,-.03,.02,-.26,.54,.47,.4,-.02,.43,.54,-.13,.34,.19,.5,.64,.58,-.49,.34,-.07,.44,.64,0,.05,-.01,.69,.05,-.2,.44,.57,.04,.12,.32,.14,.19,.05,.06,.4,.66,-.26,.65,.15,.74,.11,.16,.06,.48,.11,-.04,.08,-.31,-.03,-.19,-.08,.55,-.43,.64,.25,.15,-.02,.24,.58,.58,-.02,-.18,.37,.27,.25,-.32,.09,.02,.21,.41,.02,.19,.09,-.04,.03,.07,.12,.15,.06,.03,.04,-.06,-.16,.13,.21,-.1,.07,-.15,-.09,.21,.49,.2,-.01,.14,-.29,.61,-.2,-.21,.12,.7,-.21,.34,.22,-.02,.11,.51,.13,.05,-.06,-.13,.04,.09,.22,.01,.51,.78,.34,.32,.09,-.03,.44,.02,-.05,-.01,.02,.08,-.2,-.24,.21,-.08,.44,.06,.09,.61,.02,-.36,.1,-.15,.74,-.03,-.02,.04,.87,.07,.34,-.27,.7,.24,-.14,.21,.22,.27,.32,.09,.47,.48,.03,.39,.65,.03,-.14,-.04,-.01,.24,.06,.15,-.19,-.17,.86,-.06,-.29,.44,-.14,.08,.5,.28,.22,.64,.5,.26,-.15,-.29,.76,.38,.68,.32,.11,.38,.02,-.11,.2,.3,-.08,-.05,-.12,-.08,.89,.19,.67,-.13,.65,-.15,.01,-.15,.04,.01,.6,-.18,-.07,-.08,.47,.48,-.18,.24,.46,.73,-.16,.1,.14,.69,.1,.17,.5,.6,-.01,.77,0,.27,.07,-.03,-.01,.14,.35,.16,-.03,-.01,.2,-.01,-.04,.95,.59,-.13,.22,.68,.2,.55,.48,.41,.4,-.09,-.04,-.49,.17,.48,.07,.62,.09,.71,.15,-.02,-.11,.12,-.35,-.26,.06,.51,.65,-.06,.17,-.12,.2,-.03,.13,.56,.03,-.18,.5,.46,-.43,-.01,.58,-.08,.5,.13,.52,-.08,.21,.19,.15,.35,-.05,-.23,-.19,.55,.07,.31,.66,.32,-.15,-.09,.69,.66,.01,.01,-.11,.04,-.08,.04,-.22,-.25,-.35,.45,.08,.41,.66,.74,.03,-.1,-.03,.65,.65,.35,-.12,.02,-.04,-.06,.09,.51,.03,.69,-.07,-.08,-.17,.14,.5,.28,-.32,.26,.41,-.48,.41,.51,.05,-.11,.18,-.34,-.29,.41,-.02,.57,-.09,.66,.42,0,.06,.07,-.25,.09,-.11,.52,.06,.7,.24,.58,0,.42,.16,0,.12,-.32,.78,.61,.47,-.37,.23,.08,.36,.61,.39,.74,.71,.43,.24,.11,.54,.23,-.19,.66,-.11,.24,.39,-.44,.17,.08,-.2,.13,.77,.61,-.01,.18,.13,-.18,-.27,-.05,0,.21,.57,.13,-.13,-.03,.47,-.4,.34,-.17,.28,-.02,.09,.08,.5,.61,-.12,.26,.67,.35,.09,.09,.41,-.05,-.2,.29,.29,.38,.67,.16,.29,.1,.31,-.26,.15,.41,.54,-.04,.15,-.34,.16,.53,.23,.04,-.22,-.17,.28,.31,.47,.13,.01,-.05,-.38,.15,-.06,.18,.09,.07,-.11,.05,.23,.12,.15,.42,.6,-.03,.39,.19,.33,.67,.36,.03,.27,.4,-.19,-.05,-.19,-.13,.25,.62,.68,.37,.3,-.27,-.15,.42,.38,.13,.06,-.13,.7,.01,-.06,.2,-.04,.56,.11,.22,.22,.19,.19,.3,-.03,.04,.86,.03,.08,.66,.03,.74,.85,0,-.19,.35,.01,.06,.45,-.08,.72,-.02,.08,-.02,-.05,.12,.33,-.22,-.1,.04,1,.69,.72,.43,.09,-.03,.05,-.14,-.03,.35,-.17,.26,.59,.1,-.02,.12,.27,.12,-.06,-.17,-.08,.49,-.14,.51,.39,.4,-.16,.1,.4,-.01,.35,-.04,.61,.25,.08,-.01,.3,-.14,.58,.33,0,-.15,.3,.04,.09,.07,.68,-.03,.16,.62,.2,-.4,.32,.58,.3,-.15,.74,.87,.29,.3,.31,-.01,.16,.65,-.17,.33,.72,-.14,-.04,.35,.22,-.03,.17,.56,.02,.13,-.16,-.14,.67,.25,.61,.48,.01,-.1,.45,.42,.41,.49,.08,.26,.51,.42,.68,-.16,.09,.63,-.21,.62,.5,.64,.34,-.02,-.07,.67,.09,.47,.53,.14,-.28,.3,.65,.29,.11,.5,.14,.69,-.03,.41,.23,.95,.65,.03,.45,.1,-.2,.43,.71,-.16,.02,.41,.41,.47,.44,.29,.3,.29,.71,.58,.19,-.01,.15,.59,.14,.44,.14,.2,.85,.13,.45,.31,.46,.56,.31,-.03,.05,.3,.66,.44,.26,-.2,.37,.82,.32,.28,.57,.33,.65,.14,.72,-.1,.34,.31,-.02,-.12,.08,.12,.46,.34,.26,.57,.01,.29,-.15,.02,.43,.79,.52,.78,.73,-.12,.48,.25,.14,.39,-.04,-.05,.64,.3,.73,-.18,.23,-.15,-.1,.17,.33,.44,-.11,.01,.48,.37,.43,.42,-.08,.24,.3,.47,.42,-.48,.52,.38,-.11,.66,-.07,.44,.06,.25,.54,0,.67,-.14,.47,.55,.09,.08,.59,.22,.28,-.11,.07,.24,-.14,.08,.53,.48,.66,-.27,.59,.59,.7,.83,.75,.56,-.09,-.01,-.04,.73,-.08,-.17,.11,.08,.05,.08,.44,.27,.08,.04,.8,.19,-.08,.71,.14,.52,.61,.65,-.16,.09,.08,-.19,.19,.07,.25,.46,.43,.03,.57,.19,.55,.07,.18,-.25,.06,.41,-.24,.27,.32,.46,.35,-.01,.46,.51,.71,-.28,.12,.02,.69,-.31,-.21,.35,-.28,-.14,-.3,-.07,.11,-.08,.11,.48,.42,-.19,.77,.38,.14,.19,.13,-.36,-.24,.15,.51,.42,.59,.3,.34,.6,.29,.59,.42,.39,.15,.81,.52,.67,.54,.42,.31,-.04,.44,.54,.41,-.18,-.07,.17,.09,.81,.25,.35,-.03,.83,.53,.64,.21,.45,.54,.41,.05,.39,-.03,-.24,.47,-.18,-.04,-.04,.55,.61,.57,.4,-.06,.2,.11,.3,.01,-.11,.08,-.02,0,.02,.67,-.32,.39,.09,.53,-.17,.63,.1,-.17,.29,-.01,-.09,-.06,.62,.06,-.13,.53,-.05,.04,.58,.06,-.24,-.05,.04,.82,-.15,-.12,.56,.3,.3,.07,.65,.14,.73,-.1,.66,.21,.29,.22,.09,.51,.25,-.01,-.12,-.7,-.09,-.1,.53,.64,.52,.34,-.3,.05,.67,.24,.16,.08,.01,0,.69,.34,-.11,.6,.6,.31,.03,-.08,.45,.71,-.1,-.04,.47,.38,.57,.23,-.12,.42,.61,.02,-.04,.41,-.08,.23,.69,-.04,-.13,.66,-.15,.08,-.21,.66,-.41,.62,-.16,-.03,-.09,-.13,.46,.26,-.08,-.06,-.05,.01,.59,.53,.19,.07,.18,.35,.59,.7,.59,0,-.08,.36,.66,-.14,.29,-.02,-.13,0,.65,.77,0,.8,-.02,.24,.39,.09,.44,-.06,.08,-.43,-.11,-.01,.04,.5,.4,.57,.4,.37,.08,.46,.14,.32,.19,.14,-.07,.6,.73,.18,.05,-.56,.18,.31,.35,.36,-.02,.73,.15,-.08,.77,-.64,.72,.46,.52,.05,.6,-.05,.44,.39,.38,.53,.2,.85,.47,.63,.7,.5,.03,.64,.19,.13,-.13,.75,.74,.75,.58,.65,.01,.5,.48,.07,-.48,.71,.03,.38,-.17,-.04,.51,.31,.65,.64,-.14,.15,.01,-.08,.46,.06,.37,.4,.58,-.16,-.11,.1,-.1,.02,.16,.66,.21,-.11,.57,.09,.23,.54];export{a as rvalData};
