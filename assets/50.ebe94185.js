const a=[-.2,.03,.05,-.22,.13,.04,.17,.46,.34,.18,-.11,-.1,.11,-.2,-.09,-.08,-.13,-.09,.01,.05,-.04,-.53,.15,-.25,.14,.32,-.59,.06,.02,-.62,.36,-.47,.17,-.05,-.34,.16,.01,-.05,.32,.13,-.02,.24,.06,-.19,.19,-.07,-.16,-.33,-.55,1,.28,-.19,-.14,.21,.57,.08,.15,.13,.19,.15,.46,.27,.45,-.05,-.28,-.76,.3,-.17,-.15,0,-.06,.02,.64,-.29,.13,-.1,-.23,.46,.11,-.73,-.21,.09,.09,.24,-.09,-.52,.22,.06,-.24,.15,.35,.11,.66,-.01,-.11,.31,-.17,-.36,-.09,.52,-.05,.38,.53,-.07,.67,.25,-.08,-.02,.18,.46,.05,.75,.3,-.22,-.14,.11,-.16,-.68,-.3,.26,.09,-.24,.07,.09,.19,.69,.11,-.23,-.72,.07,.57,.15,.1,.79,-.28,-.15,.59,.48,-.68,-.22,.35,-.09,.47,.22,-.07,.1,.01,-.07,.37,-.02,.35,.45,.05,.05,.58,.27,-.14,-.26,-.24,-.08,.5,.5,.07,.56,.62,.53,.07,-.78,.31,.25,-.11,-.72,.46,.31,.42,-.68,.11,-.55,.68,.13,-.21,.03,.07,-.02,.53,.33,-.19,-.1,.52,-.21,-.03,.53,.08,.56,.48,.08,.46,.11,-.25,-.39,.16,.41,.13,-.14,-.04,.33,.2,.76,.62,.25,.58,-.09,-.1,.01,.09,.38,.12,.53,-.7,-.24,.37,.62,.29,.16,.39,.11,.63,-.67,.33,.38,.11,-.05,.02,.09,.11,-.1,-.19,-.06,.22,-.01,.67,-.18,.52,.53,.55,.35,-.03,.2,-.18,-.11,.5,-.14,.61,.18,.26,.11,.09,.27,.3,-.02,0,.29,.41,.34,.05,.65,-.35,.29,0,.2,-.33,-.13,.05,.22,.31,.09,-.62,.57,.26,-.54,.67,-.38,.11,-.05,.52,.31,-.33,.03,.48,-.4,.37,.67,.24,.37,.48,.05,-.03,-.35,.19,.46,.08,.02,-.47,.08,.03,.22,.01,.61,.3,-.03,.25,-.03,.04,-.12,-.02,.46,.56,.46,.21,.46,.35,-.05,-.13,.35,.65,.56,.19,-.12,.2,.57,-.19,.36,.09,.02,-.55,-.13,-.8,.31,.13,-.23,.72,0,-.01,-.07,.06,.15,.15,.55,.15,.57,.53,.46,-.09,.54,-.12,.15,.28,-.24,.3,.02,.18,.08,.5,-.03,0,-.07,.04,.11,.26,0,-.54,-.08,.38,.25,.25,.44,.02,.28,-.1,.43,-.14,0,.01,.08,.02,.29,-.27,-.13,.26,.24,.31,.18,.09,.32,.28,.05,-.48,0,-.11,.23,-.13,.21,.2,.45,.49,-.14,-.13,.33,.5,.23,.24,-.16,-.01,.33,.2,-.09,.35,-.06,.66,-.04,0,.17,-.47,.26,.16,.08,.08,.09,.4,.33,.54,.24,.26,.01,.62,.13,.05,.26,.15,.33,.42,.28,.4,-.02,.66,.34,.02,.29,.24,-.49,.33,.67,-.29,.17,-.03,-.06,-.56,.08,.18,.44,.22,.35,-.21,.53,.04,.08,-.07,.12,-.42,.18,-.02,.04,-.07,-.27,.56,.23,.28,.46,.07,-.44,.48,0,.12,.59,.61,.18,.55,.31,-.14,.08,.02,-.1,.25,.19,.13,.16,.66,0,.17,.48,.48,-.02,.31,.13,.34,.11,-.13,.21,.09,.46,.36,.22,.33,.22,.59,-.57,.24,.62,.56,.25,-.37,.09,.11,.12,.19,-.16,.26,-.03,.26,.3,.7,.68,.13,.55,-.11,.11,.4,.08,.09,0,.08,.41,.09,-.46,-.5,-.01,.09,-.48,.41,.04,-.41,.12,.18,.06,.46,.03,-.35,.41,-.24,.16,.29,-.46,.43,.53,.16,.13,.14,-.06,.35,.08,.28,.11,.22,.23,.18,.04,-.05,-.28,.57,.03,-.56,-.13,.49,.19,.74,-.16,.04,.33,-.44,.01,.13,.13,.08,.26,.55,-.31,.34,.09,.2,.34,.11,.16,.08,.41,.13,-.65,.51,-.32,-.12,.03,-.07,-.06,.24,.51,.23,.15,.06,.37,-.13,-.16,.46,.22,.4,-.02,.39,-.33,.31,.18,.38,.39,.14,-.13,-.05,.6,.2,.58,.21,.61,.29,-.46,.15,.18,-.48,-.02,-.03,.31,.17,.38,.13,.75,-.36,-.39,.57,.1,.22,.15,-.08,-.19,.11,.04,.02,.08,.14,.27,.02,-.03,-.04,.31,.38,.21,.5,-.19,-.03,-.61,.48,.38,.52,.17,-.25,-.05,0,.01,-.01,.27,.23,.11,-.14,.34,.29,.34,-.08,-.13,.13,.17,-.04,.27,-.08,.05,.38,-.31,.27,.49,.58,.11,.02,-.18,-.25,-.13,-.07,-.59,.33,.55,.34,.4,.2,-.04,.32,.04,0,-.06,.45,.28,0,.06,.09,-.06,-.04,-.58,-.34,.22,-.39,.52,.2,-.17,.63,.63,0,-.03,-.05,.18,-.04,.02,-.45,-.53,.2,-.18,.44,-.01,.41,.56,-.27,-.29,-.17,.2,.19,.27,-.06,-.5,.12,-.08,-.11,-.67,.18,.31,-.38,.05,.36,.14,-.26,.02,.22,.34,.18,-.09,.55,-.31,.62,.49,.13,.41,.09,-.16,-.05,.35,.1,.41,.57,.46,-.25,-.41,-.62,.36,.4,-.15,.22,-.74,.13,.41,-.16,.46,.31,.08,-.12,.3,-.05,.42,.34,-.35,.26,-.08,-.03,-.14,.24,-.59,.42,.52,-.05,-.62,-.25,.1,-.31,.14,.55,.23,.09,.07,-.1,.22,-.22,-.14,.01,.12,.28,-.01,.06,-.11,-.13,.43,-.03,-.61,.23,.11,.26,.61,-.54,.26,-.02,-.5,.71,-.17,.03,-.75,.48,.08,-.21,.2,.22,.35,.63,-.42,.53,.19,-.02,-.02,.08,.31,-.35,-.13,.46,.53,.14,-.11,.15,.55,.24,.32,-.01,.49,-.01,-.04,-.58,.19,.12,.32,.06,.29,.4,.21,.24,.42,.33,.07,-.14,.53,.18,.08,-.25,.1,.1,.22,.18,-.02,-.02,-.13,-.15,.21,-.1,.66,-.26,.71,-.1,-.54,-.62,.22,.32,.21,-.01,.5,.53,.1,.26,-.03,.15,-.01,.25,.13,.03,.06,.24,.32,.53,.08,-.01,.2,.27,-.13,.65,-.06,.31,.22,-.41,.08,.3,.3,.13,.11,.53,.09,-.01,-.04,.5,-.02,.23,-.04,.62,.11,.29,-.04,.24,.05,.18,.08,.36,.11,.38,.12,.13,.35,-.17,-.09,-.24,-.04,-.32,-.15,.31,.12,.38,.47,.68,.21,.25,.52,-.63,.54,.45,.54,.36,-.12,-.2,.44,.64,.48,.71,.44,.09,.57,-.14,-.01,.01,.12,.09,-.01,-.08,-.13,-.16,-.4,-.3,-.11,-.22,-.18,-.21,.5,.52,-.36,.29,.02,.4,.23,.07,-.14,.32,.17,.12,.59,.02,.39,.37,.06,-.12,-.2,.6,.08,.09,.52,.11,.66,.06,.46,.01,-.06,.36,.05,-.33,0,.03,.54,-.16,.03,-.21,.17,.55,.29,.19,.49,.16,-.08,-.25,.14,.25,.18,-.35,-.26,.33,.03,.61,.35,-.81,.32,.07,-.02,.54,.38,.25,.06,-.07,.32,.06,.48,.21,.19,-.1,-.44,-.1,.11,.5,-.33,.13,.09,-.5,.33,-.04,-.09,.23,-.44,.04,.49,.55,.25,.26,.19,.35,-.33,.47,.28,.11,.32,.11,.13,.26,.07,-.01,.67,.63,.1,-.53,-.26,.08,.06,.38,.19,-.33,-.15,-.36,-.13,-.07,-.09,-.04,-.12,.28,-.13,.38,.25,.12,.14,-.02,.13,.31,.35,-.04,.06,.19,-.47,.16,.16,.32,-.1,.1,-.15,.08,.12,-.01,-.27,.37,.21,.1,.47,-.12,.42,0,-.12,.23,.36,-.18,.65,.2,.06,.23,.23,.36,.51,.64,-.31,-.28,.49,.66,-.04,-.01,-.09,.33,.16,.53,-.06,-.11,.41,-.08,-.12,.13,-.01,-.2,.1,.05,.26,.08,-.02,.21,-.21,.02,.32,.34,-.43,-.54,.35,-.17,.27,.45,.46,.15,.08,.14,.63,.11,-.36,.04,.36,.13,.4,-.06,.3,.16,.22,.04,.29,.15,-.09,-.04,.28,.12,-.5,.2,.2,-.69,.34,.43,-.13,.09,.29,.35,-.06,-.15,-.09,-.01,.26,.14,.03,-.09,.01,-.35,-.01,.31,-.1,.38,.02,.03,.26,-.19,.19,.54,-.14,.46,.34,-.35,.06,.24,.44,-.21,.39,-.65,-.71,.54,-.23,.2,.01,.41,-.36,.22,.44,.05,-.28,.44,-.01,.54,.02,.22,.65,.16,-.19,.06,-.05,-.07,-.11,.29,.2,.38,.52,.23,.61,-.01,.27,.33,.6,.18,.37,.19,.11,-.13,-.13,.47,.36,.11,-.16,.59,.03,-.09,.41,.18,.1,.39,.27,.05,-.09,.36,.24,.04,.05,.44,.41,.03,.31,.26,-.43,-.11,.2,.45,.36,.03,-.2,.42,-.14,.06,.45,.38,.16,-.01,-.16,.29,.3,-.1,.57,-.28,-.14,.66,.58,.37,.44,.35,.45,.57,.7,.16,.67,.31,.33,.21,.18,.26,.31,.46,.69,.08,-.13,-.18,.24,.5,.09,.71,-.02,.12,.23,.23,.2,-.16,.24,.33,-.03,.53,.22,.34,.01,.64,.43,.18,.39,.43,.69,.06,-.34,.56,-.02,.11,-.2,.63,-.04,-.42,.12,.37,-.13,.15,.6,-.42,-.03,.37,.22,.17,.27,.18,-.03,.3,-.48,.17,-.29,-.2,.01,-.3,.36,-.14,0,.23,.05,-.14,.14,-.11,.34,.42,.4,.33,.23,-.01,-.27,.54,.13,.45,-.07,.43,.25,-.12,.53,-.06,-.33,.09,.18,-.25,.23,-.04,.26,.26,.36,.26,.41,-.27,.13,-.18,.36,-.1,-.59,.56,.41,.08,-.07,.08,.28,.59,-.18,.17,-.5,.43,-.1,.53,.39,.64,.12,.4,.34,.1,.38,.48,.35,.69,.15,.08,.53,.43,.21,.6,.68,-.03,.33,-.03,.13,.09,.16,.05,.25,.22,.5,-.19,.65,.16,.56,.3,.02,.27,.07,-.29,.79,.24,.03,.33,.07,.4,.03,.39,.4,.59,.31,.01,.02,.32,-.14,-.07,-.74,.13,.28,.77,.35,.49,0,.4,.22,.59,.07,.3,.68,.29,.52,.33,.26,.32,.56,.42,-.28,.42,.14,.51,.44,-.21,.38,.41,-.15,.31,.49,-.04,-.31,.34,.49,.43,.76,.36,.66,-.21,-.18,.26,.26,.31,.39,-.08,.25,.82,-.66,.71,-.13,.4,.01,.36,.22,.6,.65,.7,-.12,.17,.17,.36,-.46,-.41,.76,.31,.64,-.07,.81,.2,.06,-.13,.2,.08,.52,.17,.12,.02,-.24,-.03,.58,.61,.14,.19,.32,.49,.37,.56,.52,.67,.48,-.04,.39,.04,.56,.12,.68,-.06,0,.17,.37,0,.09,.31,.07,.78,-.06,.72,.37,.39,.47,.4,.32,.21,.12,.35,.75,.27,-.02,-.08,.38,.6,.41,-.14,.36,.18,-.03,.61,.54,.45,.64,.17,.07,0,.37,.23,.47,.08,.72,.68,.69,-.05,.63,.02,.36,.54,.08,.37,.18,.06,.54,-.04,.33,-.18,.52,-.18,.73,.23,-.16,.54,.56,-.09,.69,.17,-.21,.21,.3,.1,-.11,.45,.39,-.28,-.01,.36,.31,.07,-.17,.02,.05,.28,-.04,-.36,-.15,.71,.66,.74,.06,.07,-.16,-.12,.07,.41,-.63,.5,-.37,.26,.25,.36,-.29,-.15,0,-.14,.27,.44,.12,.36,.29,.43,.55,.79,.32,-.12,.32,-.01,.05,.33,-.26,.07,.19,.11,.11,.04,.51,.04,.39,-.57,-.07,.1,.13,-.01,-.05,.53,-.34,-.14,.21,-.03,.09,-.03,-.24,.45,.48,.21,.14,.01,.08,.19,.3,-.6,-.53,.13,.25,.05,.23,-.08,-.04,.33,-.07,.4,.69,.3,-.01,.32,.07,.36,.59,.64,.31,-.07,.48,.26,.25,.29,-.68,-.02,.07,.22,.04,.62,-.08,.44,0,.4,.08,.02,.05,.29,.08,.36,-.01,-.33,.2,.39,-.03,.33,.19,.02,.48,.38,.43,-.05,.44,.08,.25,-.01,-.14,.07,-.09,-.05,-.1,.22,.34,.3,.26,.15,.09,.06,.45,-.01,-.27,-.12,-.26,.16,.03,.44,.25,.41,.15,.38,.22,.21,-.28,-.07,.33,.13,.6,.49,.5,.21,.27,.2,-.21,.31,-.23,.09,.54,.57,.7,.04,.15,.18,.04,-.11,.1,-.02,-.03,.45,.43,.17,.18,-.13,-.43,.33,.68,.29,-.05,.12,-.05,.32,.06,.31,.22,.33,.11,.32,-.08,.25,.27,-.69,.51,.55,.62,.35,.16,-.28,.16,-.17,-.05,-.21,.09,.26,.07,.18,.5,.15,.53,-.12,-.27,-.11,.36,-.47,-.07,.34,.02,.09,0,.15,.29,-.19,-.2,.36,.11,.03,.14,.09,-.55,.02,.03,.15,.31,.24,.4,.28,.49,.25,.46,-.46,-.02,-.1,-.11,.24,.22,.4,.09,-.14,.09,-.04,-.14,.67,-.13,.24,-.45,-.26,-.19,.13,.19,.06,.27,.11,.66,-.17,.75,.01,-.49,.37,.1,-.25,.45,.07,.36,-.01,-.33,.52,.06,-.21,.21,.4,.21,.35,.29,.41,-.34,.25,.24,.13,-.12,.46,.02,.27,.23,.56,.28,.05,.23,.26,.07,.24,-.04,-.56,.06,-.35,.43,-.22,.12,.22,.19,.18,.25,.42,.35,-.01,.31,-.27,.14,-.07,.03,.17,.03,.35,.26,.23,.34,-.41,.04,-.66,.53,.13,.41,.18,.32,.43,-.09,-.65,-.04,-.47,-.26,-.15,.54,-.08,.17,.13,-.09,.17,.57];export{a as rvalData};
